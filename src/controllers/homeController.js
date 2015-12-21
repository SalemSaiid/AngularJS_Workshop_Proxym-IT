'use strict';

app.controller('indexController',function($location){
    $location.url('accueil');
});

app.controller('homeController',function($scope, $rootScope, appSettings, customProvider, $routeParams, $http){
	$rootScope.pageName = 'home';
	
	// Get list themes        
    customProvider.listTheme();
    
    // Get list category        
    customProvider.listCategory();
    
    // Get list product        
    customProvider.listProduct();

})

.controller('detailsController',function($scope, $rootScope, appSettings, customProvider, $routeParams, $http, $timeout, $window, $location){
	var currentId = $routeParams.id;
    $rootScope.idRoute = $routeParams.id;
	
	// Get product infos       
	customProvider.signsInfo();
    $timeout(function () {
	  $('.cgv').html($rootScope.cgv);
    }, 20);
})


.controller('inscriptionController',function($scope, $rootScope, appSettings, userProvider, $routeParams, $http, $timeout, $window, $location){
	
   $scope.createAccount = function(){
        //usSpinnerService.spin('loading');
        alert($scope.firstname);
        //return  
        $http({
            url: appSettings.ApiUrl + '/user/registration' ,
            method: "Post",
            data: {
                api_key: appSettings.ApiKey,
                firstname: $scope.firstname,
                email: $scope.email,
                password: $scope.password
            }

        }).success(function (data, status, headers, config) {
           // usSpinnerService.stop('loading');
           alert('yes');

        }).error(function (data, status, headers, config) {
            //usSpinnerService.stop('loading');
            alert('no');
        });
    };

});