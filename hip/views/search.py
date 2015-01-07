'''
ARCHES - a program developed to inventory and manage immovable cultural heritage.
Copyright (C) 2013 J. Paul Getty Trust and World Monuments Fund

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
'''

from datetime import date
from django.conf import settings
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.db.models import Max, Min
from arches.app.models import models
from arches.app.views.search import _get_pagination
from arches.app.views.search import build_query_dsl
from arches.app.models.concept import Concept
from arches.app.utils.betterJSONSerializer import JSONSerializer, JSONDeserializer
from arches.app.search.search_engine_factory import SearchEngineFactory
from arches.app.search.elasticsearch_dsl_builder import Bool, Match, Query, Nested, Terms, GeoShape, Range

def home_page(request):
    se = SearchEngineFactory().create()

    lang = request.GET.get('lang', 'en-us')
    min_max_dates = models.Dates.objects.aggregate(Min('val'), Max('val'))
    resource_count = se.search(index='resource', search_type='_count')['count']

    date_types = Concept().get_e55_domain('BEGINNING_OF_EXISTENCE_TYPE.E55')+ Concept().get_e55_domain('END_OF_EXISTENCE_TYPE.E55')
    data = {'domains' :{'date_types': date_types}}
    data['domains']['date_operators'] = [{
        "conceptid": "0",
        "entitytypeid": "DATE_COMPARISON_OPERATOR.E55",
        "id": "0",
        "language,id": "en-us",
        "value": "Before",
        "valuetype": "prefLabel"
    },{
        "conceptid": "1",
        "entitytypeid": "DATE_COMPARISON_OPERATOR.E55",
        "id": "1",
        "language,id": "en-us",
        "value": "On",
        "valuetype": "prefLabel"
    },{
        "conceptid": "2",
        "entitytypeid": "DATE_COMPARISON_OPERATOR.E55",
        "id": "2",
        "language,id": "en-us",
        "value": "After",
        "valuetype": "prefLabel"
    }]

    return render_to_response('search.htm', {
            'main_script': 'search',
            'active_page': 'Search',
            'user_can_edit': False,
            'min_date': min_max_dates['val__min'].year,
            'max_date': min_max_dates['val__max'].year,
            'formdata': JSONSerializer().serialize(data),
            'resource_count': resource_count
        }, 
        context_instance=RequestContext(request))

def search_results(request, as_text=False):
    dsl = build_query_dsl(request)
    results = dsl.search(index='entity', type='') 
    total = results['hits']['total']
    page = 1 if request.GET.get('page') == '' else int(request.GET.get('page', 1))

    return _get_pagination(results, total, page, settings.SEARCH_ITEMS_PER_PAGE)