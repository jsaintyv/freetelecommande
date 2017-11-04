(function(){
  'use strict';
  
  angular.module('remoteServices', [])
         .service('remoteServices', ['$http', RemoteServices]);

  /**
   * Execute les requêtes d'action de la télécommande.
   */
  function RemoteServices($http){
    return {
    	remoteCall : function(key) {
        return $http({method: 'GET',url: '/remote', params: {key: key}});
      },      
    };
  }
})();
