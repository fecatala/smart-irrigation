var Resources = angular.module('Resources', []);

Resources.factory('StatusResource', 
	['$resource', 
	function ($resource) {
		var url = 'api/status';

		return $resource(url, {}, {
			'get': {method: 'GET'}
		});
}]);

Resources.factory('PlantsResource', 
	['$resource', 
	function ($resource) {
		var url = 'api/plants';
		var plantUrl = 'api/plant/:id'

		return $resource(url, {}, {
			'list': {method: 'GET'},
			'get': {url: plantUrl,
				method: 'GET',
				params: {'id': '@id'}}
		});
}]);

Resources.factory('ConfigResource', 
	['$resource', 
	function ($resource) {
		var url = 'api/config';

		return $resource(url, {}, {
			'create': {method: 'POST'}
		});
}]);