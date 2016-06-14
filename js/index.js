var bdnews=angular.module('bdnews',['ngAnimate','ngRoute','ngTouch']);
bdnews.controller('mainCtrl',['$scope',function($scope){
	$scope.dhs = [
		{name:'推荐',lianjie:'tuijian'},
		{name:'热门',lianjie:'redian'},
		{name:'手枪',lianjie:'shouqiang'},
		{name:'视频',lianjie:'dianying'},
		{name:'步枪',lianjie:'buqiang'},
		{name:'健康',lianjie:'jiankang'},
		{name:'科技',lianjie:'keji'}
		
	]
if(localStorage.x){
	$scope.isFirstOpen=false;
}else{
	$scope.isFirstOpen=true;
}
$scope.toggle=false;
}])

bdnews.directive('bdYindao',[function(){
	return{
		replace:true,
		restrict:'E',
		templateUrl:'views/directive/yindao.html',
		link:function($scope,el){
            }
		}
	}
])
bdnews.directive('bdTapTap',[function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'views/directive/toubu.html',
		link:function($scope,el){
          
		}
	}
}])
bdnews.directive('bdBottom',[function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'views/directive/dibu.html',
		link:function($scope,el){
          
		}
	}
}])
bdnews.controller('redianCtrl',["$scope",function($scope){

}])
bdnews.controller('shouqiangCtrl',["$scope",function($scope){

}])
bdnews.controller('tuijianCtrl',["$scope",function($scope){

}])
bdnews.controller('dianyingCtrl',["$scope",function($scope){

}])
bdnews.controller('grzlCtrl',["$scope",function($scope){

}])

bdnews.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'views/templates/tuijian.html'
	})
	.when('/redian/',{
		controller:'redianCtrl',
		templateUrl:'views/templates/redian.html',

	}).when('/shouqiang/',{
		controller:"shouqiangCtrl",
		templateUrl:'views/templates/shouqiang.html',
	})
	.when('/tuijian/',{
		controller:"tuijianCtrl",
		templateUrl:'views/templates/tuijian.html',
	}).when('/dianying/',{
		controller:'dianyingCtrl',
		templateUrl:'views/templates/dianying.html',
	})
	.when('/grzl/',{
		controller:'grzlCtrl',
		templateUrl:'views/templates/grzl.html',
	})
}])