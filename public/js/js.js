// create angular app
var app = angular.module('gApp', []);

app.controller('contr',function($scope,$http){
	var sc= $scope;
	sc.errores= [{name:'no hay'}];
	
	//models empty
	sc.modelSave= {
		name: '',
		type: '',
		primary: null
	};
	sc.modelDelete= {
		id: null
	};
	sc.modelUpdate= {
		map: {},
		name: '',
		type: '',
		primary: null
	};
	
	//initialized
	sc.init = function(){
	    //call it here
		sc.toSave = angular.copy(sc.modelSave);
		sc.toDelete = angular.copy(sc.modelDelete);
		sc.toUpdate = angular.copy(sc.modelUpdate);
		sc.getMaps();
	};
	//select edit object
	sc.selectUpdate= function(){

		sc.toUpdate.name = sc.toUpdate.map.name;
		sc.toUpdate.type = sc.toUpdate.map.type;
		sc.toUpdate.primary = sc.toUpdate.map.primary;

	};
	
	//methods
	sc.getMaps = function(){
		var req = {
			 method: 'get',
			 url: '/api',
			 headers: {
			   'Content-Type': 'application/json; charset=utf-8'
			 },
			 data: { test: 'test' }
		};
		
		$http(req).then(

			function(res){
				sc.maps = res.data;
				//sc.errores= ['status getMaps: ',res];
			},
			function(res){
				sc.errores= ['erro getMaps: ',res];
			}
		);
	};
		
	sc.saveMap = function(){
		var req = {
			 method: 'post',
			 url: '/api',
			 headers: {
			   'Content-Type': 'application/json; charset=utf-8'
			 },
			 data: sc.toSave
		};
		
		$http(req).then(

			function(res){
				sc.maps = res.data;
				sc.getMaps();
				sc.toSave = angular.copy(sc.modelSave);
				sc.errores= ['status saveMaps: ',res];
				
			},
			function(res){
				sc.errores= ['erro save: ',res];
			}
		);
	};
	
	sc.deleteMaps = function(){
		console.log(sc.toDelete._id);
		var req = {
			 method: 'delete',
			 url: '/api/'+sc.toDelete._id,
			 /*headers: {
			   'Content-Type': 'application/json; charset=utf-8'
			 },
			 data: sc.toDelete*/
		};
		
		$http(req).then(

			function(res){
				sc.maps = res.data;
				sc.getMaps();
				//sc.toDelete = angular.copy(sc.modelDelete);
				sc.errores= ['status deleteMaps: ',res];
			},
			function(res){
				sc.errores= ['erro delete: ',res];
			}
		);
		
	};
	
	sc.updateMap = function(){
		console.log(sc.toUpdate);
		var req = {
			 method: 'put',
			 url: '/api/'+sc.toUpdate.map._id,
			 headers: {
			   'Content-Type': 'application/json; charset=utf-8'
			 },
			 data: sc.toUpdate
		};
		
		$http(req).then(

			function(res){
				//sc.maps = res.data;
				sc.getMaps();
				sc.toUpdate = angular.copy(sc.modelUpdate);
				sc.errores= ['status updatetMaps: ',res];
				
			},
			function(res){
				sc.errores= ['erro updater: ',res];
			}
		);
		
	};
	
	
});