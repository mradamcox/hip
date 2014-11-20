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

from arches.app.views.resources import ResourceForm
from django.utils.translation import ugettext as _

class ResourceSummaryForm(ResourceForm):
    id = 'resource-summary-form'
    icon = 'fa-tag'
    name = _('Resource Summary')

    def __init__(self, resource=None, *args, **kwargs):
        super(ResourceSummaryForm, self).__init__(resource=resource, *args, **kwargs)

    def update(self, post_data):
        # update resource w/ post data
        return self.resource
