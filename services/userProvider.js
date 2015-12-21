'use strict';
/*
 * Author Salem Said : salem.said@proxym-it.com
 */
app.service('userProvider',['$rootScope','$window', '$http', 'appSettings' , function($rootScope, $window, $http, appSettings){

   
    this.register = function(user){
        return  $http({
            url: appSettings.ApiUrl + '/user/registration' ,
            method: "Post",
            data: {
                api_key: appSettings.ApiKey,
                firstname: $rootScope.firstname,
                email: $rootScope.email,
                password: $rootScope.password
            }

        }).success(function (data, status, headers, config) {
           // usSpinnerService.stop('loading');
           alert('yes');
           $scope.items = data;
           console.log($scope.items);

        }).error(function (data, status, headers, config) {
            //usSpinnerService.stop('loading');
            alert('no');
        });
    };

}]);



