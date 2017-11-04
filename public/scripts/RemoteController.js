(function(){
  'use strict';

  // Déclaration des modules des en-tête de modules
  angular.module('freeremote', [ 'ngMaterial', 'remoteServices' ]);  

  angular
       .module('freeremote')
       .controller('RemoteController', [
          'remoteServices',
          RemoteController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @constructor
   */
  function RemoteController( remoteServices ) {
    var self = this;
    self.clickOnRemote = clickOnRemote;
    
    function clickOnRemote(key) {
    	remoteServices.remoteCall(key);
    }    
  }

})();
