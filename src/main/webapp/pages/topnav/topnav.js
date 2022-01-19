Application.$controller("topnavPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         * 
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */

        // invoke SVs for the menu, if the menu shows up
        /*      if ($scope.Widgets.CartoningMenu.show == true) {
            $scope.Variables.svCR1100pk0FetchMenuItems.invoke();
        }

*/


    };

    //-------------------------------------------------------------------------------------------------
    $scope.svCR1100pk0FetchMenuItemsonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined) {
            return false;
        }
    };
    //-------------------------------------------------------------------------------------------------
    $scope.CartoningMenuSelect = function($event, $isolateScope, $item) {

        if ($item.progurl !== undefined && $item.progurl !== null && $item.progurl !== "") {

            // oracle forms always open in new window, Target = _blank
            // wavemaker pages opens in a new window first time, subsequent calls to same wmaker program will open in the already opened "new window named as WMAKER"
            if ($item.wmitempath !== undefined && $item.wmitempath !== null && $item.wmitempath !== "") {
                if ($item.wmitempath.length > 0) {
                    window.open($item.progurl, "WMAKER");
                }
            } else {
                window.open($item.progurl, "_blank");
            }
        }
    };

    //-------------------------------------------------------------------------------------------------------------------------




}]);