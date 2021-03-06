'use strict';

/* Controllers */

var findMPControllers = angular.module('findMPControllers', []);

findMPControllers.controller('findMPCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {

  $http.get('mps/mps.json').success(function(data) {
    $scope.mps = data;
  });

  $scope.user = {};
  $scope.emailSentMsg = "";
  $scope.selectedMP = "";

  $scope.email = function(user, postal_code) {

      var mpEmail = $filter('emailFilter')(postal_code, $scope.mps);
      var mpName = $filter('nameFilter')(postal_code, $scope.mps);
      var emailBody = jQuery('#emailBody').val();
      var xm;

      jQuery.ajax({
  		type: "POST",
  		url: "https://mandrillapp.com/api/1.0/messages/send.json",
  		data: {
   		 'key': '-VDS6QsLxHBa18rXW8VHIg',
    		'message': {
    		  'from_email': user.email,
    		  'to': [
    		      {
     		       'email': mpEmail,
     		       'name': mpName,
    		        'type': 'to'
    		      }
   		     ],
    		  'autotext': 'true',
   		   'subject': user.subject,
   		   'html': emailBody
   		 }
  		}
 		}).done(function(response) {
		   console.log(response); // if you're into that sorta thing
		   console.log(response[0].status); // if you're into that sorta thing

           if (response[0].status=="rejected") {
               xm="Error sending email. status ["+response[0].status+"], reject_reason ["+response[0].reject_reason+"]" ;
                jQuery('#txt').html(xm);
           } else {
               xm="Email has been sent";
                jQuery('#txt').html(xm);
           }
		});

  };

  $scope.reset = function() {
      console.log('reset');
      $scope.user.email = "";
      $scope.user.name = "";
      $scope.user.subject =  "We support foreign workers";
      $scope.postal_code = "";
  };

  $scope.reset();


}]);
