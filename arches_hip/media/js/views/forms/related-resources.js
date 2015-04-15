define([
    'jquery',
    'underscore',
    'knockout',
    'openlayers',
    'arches',
    'resource-types',
    'views/search/term-filter', 
    'views/search/map-filter',
    'views/search/time-filter',
    'views/search/search-results',
    'views/forms/sections/branch-list',
    'views/forms/base',
    'plugins/bootstrap-slider/bootstrap-slider.min',
    'bootstrap-datetimepicker',
    'plugins/knockout-select2'
], function ($, _, ko, ol, arches, resourceTypes, TermFilter, MapFilter, TimeFilter, SearchResults, BranchList, BaseForm) {
    var wkt = new ol.format.WKT();

    return BaseForm.extend({

        updateRequest: '',
        
        events: function(){
            var events = BaseForm.prototype.events.apply(this);
            events['click .start-workflow-btn'] = 'toggleForm';
            events['click #clear-search'] = 'clear';
            events['click #map-filter-button'] = 'toggleMapFilter';
            events['click #time-filter-button'] = 'toggleTimeFilter';
            events['click #attribute-filter-button'] = 'toggleAttributeFilter';
            return events;
        },


        initialize: function() {
            var mapFilterText, timeFilterText;
            var self = this;

            BaseForm.prototype.initialize.apply(this);

            this.termFilter = new TermFilter({
                el: $.find('input.resource_search_widget')[0]
            });
            this.termFilter.on('change', function(){
                if($('#saved-searches').is(":visible")){
                    this.hideSavedSearches();
                }
            }, this);
            this.termFilter.on('filter-removed', function(item){
                if(item.text === mapFilterText){
                    this.mapFilter.clear();
                }
                if(item.text === timeFilterText){
                    this.timeFilter.clear();
                }
            }, this);
            this.termFilter.on('filter-inverted', function(item){
                if(item.text === mapFilterText){
                    this.mapFilter.query.filter.inverted(item.inverted);
                }
                if(item.text === timeFilterText){
                    this.timeFilter.query.filter.inverted(item.inverted);
                }
            }, this);


            this.mapFilter = new MapFilter({
                el: $('#map-filter-container')[0]
            });
            this.mapFilter.on('enabled', function(enabled, inverted){
                if(enabled){
                    this.termFilter.addTag(mapFilterText, inverted);
                }else{
                    this.termFilter.removeTag(mapFilterText);
                }
            }, this);


            this.timeFilter = new TimeFilter({
                el: $('#time-filter-container')[0]
            });
            this.timeFilter.on('enabled', function(enabled, inverted){
                if(enabled){
                    this.termFilter.addTag(timeFilterText, inverted);
                }else{
                    this.termFilter.removeTag(timeFilterText);
                }
            }, this);


            this.searchResults = new SearchResults({
                el: $('#search-results-container')[0]
            });
            this.searchResults.on('mouseover', function(resourceid){
                this.mapFilter.selectFeatureById(resourceid);
            }, this);
            this.searchResults.on('mouseout', function(){
                this.mapFilter.unselectAllFeatures();
            }, this);
            this.searchResults.on('find_on_map', function(resourceid, data){
                var extent,
                    expand = !this.mapFilter.expanded();
                if (expand) {
                    this.mapFilter.expanded(true);
                }
                
                _.each(data.geometries, function (geometryData) {
                    var geomExtent = wkt.readGeometry(geometryData.label).getExtent();
                    geomExtent = ol.extent.applyTransform(geomExtent, ol.proj.getTransform('EPSG:4326', 'EPSG:3857'));
                    extent = extent ? ol.extent.extend(extent, geomExtent) : geomExtent;
                });
                if (extent) {
                    _.delay(function() {
                        self.mapFilter.zoomToExtent(extent);
                    }, expand ? 700 : 0);
                }
            }, this);


            mapFilterText = this.mapFilter.$el.data().filtertext;
            timeFilterText = this.timeFilter.$el.data().filtertext;

            self.isNewQuery = true;
            this.searchQuery = {
                queryString: function(){
                    var params = {
                        page: self.searchResults.page(),
                        termFilter: ko.toJSON(self.termFilter.query.filter.terms()),
                        temporalFilter: ko.toJSON({
                            year_min_max: self.timeFilter.query.filter.year_min_max(),
                            filters: self.timeFilter.query.filter.filters(),
                            inverted: self.timeFilter.query.filter.inverted()
                        }),
                        spatialFilter: ko.toJSON(self.mapFilter.query.filter),
                        mapExpanded: self.mapFilter.expanded(),
                        timeExpanded: self.timeFilter.expanded()
                    };
                    if (self.termFilter.query.filter.terms().length === 0 &&
                        self.timeFilter.query.filter.year_min_max().length === 0 &&
                        self.timeFilter.query.filter.filters().length === 0 &&
                        self.mapFilter.query.filter.geometry.coordinates().length === 0) {
                        params.no_filters = true;
                    }

                    params.include_ids = self.isNewQuery;
                    return $.param(params).split('+').join('%20');
                },
                changed: ko.pureComputed(function(){
                    var ret = ko.toJSON(this.termFilter.query.changed()) +
                        ko.toJSON(this.timeFilter.query.changed()) +
                        ko.toJSON(this.mapFilter.query.changed());
                    return ret;
                }, this).extend({ rateLimit: 200 })
            };

            this.getSearchQuery();

            this.searchResults.page.subscribe(function(){
                self.doQuery();
            });

            this.searchQuery.changed.subscribe(function(){
                self.isNewQuery = true;
                self.searchResults.page(1);
                self.doQuery();
            });

            this.doQuery();
        },

        toggleForm: function(evt) {
            evt.preventDefault();

            $('.start-workflow-controls').toggle();
            $('.save-discard-controls').toggle();
            $('.relation-list').toggle();
            $('.relation-form').toggle();
        },

        doQuery: function () {
            var self = this;
            var queryString = this.searchQuery.queryString();
            if (this.updateRequest) {
                this.updateRequest.abort();
            }

            $('.form-load-mask').show();

            this.updateRequest = $.ajax({
                type: "GET",
                url: arches.urls.search_results,
                data: queryString,
                success: function(results){
                    var data = self.searchResults.updateResults(results);
                    self.mapFilter.highlightFeatures(data, $('.search-result-all-ids').data('results'));
                    self.mapFilter.applyBuffer();
                    self.isNewQuery = false;
                    $('.form-load-mask').hide();
                },
                error: function(){}
            });
        },

        showSavedSearches: function(){
            this.clear();
            $('#saved-searches').slideDown('slow');
            $('#search-results').slideUp('slow');
            this.mapFilter.expanded(false);
            this.timeFilter.expanded(false);
        },

        hideSavedSearches: function(){
            $('#saved-searches').slideUp('slow');
            $('#search-results').slideDown('slow');
        },

        toggleMapFilter: function(evt){
            evt.preventDefault();
            if($('#saved-searches').is(":visible")){
                this.doQuery();
                this.hideSavedSearches();
            }
            this.mapFilter.expanded(!this.mapFilter.expanded());
        },

        toggleTimeFilter: function(evt){
            evt.preventDefault();
            if($('#saved-searches').is(":visible")){
                this.doQuery();
                this.hideSavedSearches();
            }
            this.timeFilter.expanded(!this.timeFilter.expanded());
        },

        toggleAttributeFilter: function(evt){
            evt.preventDefault();
            $('#attribute').slideToggle(600);
        },

        getSearchQuery: function(){
            var doQuery = false;
            var query = _.chain(decodeURIComponent(location.search).slice(1).split('&') )
                // Split each array item into [key, value]
                // ignore empty string if search is empty
                .map(function(item) { if (item) return item.split('='); })
                // Remove undefined in the case the search is empty
                .compact()
                // Turn [key, value] arrays into object parameters
                .object()
                // Return the value of the chain operation
                .value();

            if('page' in query){
                query.page = JSON.parse(query.page);
                doQuery = true;
            }
            this.searchResults.restoreState(query.page);


            if('termFilter' in query){
                query.termFilter = JSON.parse(query.termFilter);
                doQuery = true;
            }
            this.termFilter.restoreState(query.termFilter);


            if('temporalFilter' in query){
                query.temporalFilter = JSON.parse(query.temporalFilter);
                doQuery = true;
            }
            if('timeExpanded' in query){
                query.timeExpanded = JSON.parse(query.timeExpanded);
                doQuery = true;
            }
            this.timeFilter.restoreState(query.temporalFilter, query.timeExpanded);


            if('spatialFilter' in query){
                query.spatialFilter = JSON.parse(query.spatialFilter);
                doQuery = true;
            }
            if('mapExpanded' in query){
                query.mapExpanded = JSON.parse(query.mapExpanded);
                doQuery = true;
            }
            this.mapFilter.restoreState(query.spatialFilter, query.mapExpanded);
            

            if(doQuery){
                this.doQuery();
                this.hideSavedSearches();
            }
            
        },

        clear: function(){
            this.mapFilter.clear();
            this.timeFilter.clear();
            this.termFilter.clear();
        },
    });
});