Application.$controller("pageTopNavPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets within this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */

        //$scope.Widgets.anchorHome.show = false;
        $scope.Widgets.anchorPartialShp.show = false;


        // page has not been opened from any other page, then display Home link - cr210oc0.
        /*if ($scope.pageParams.pCalledFromProgID == undefined || $scope.pageParams.pCalledFromProgID == null || $scope.pageParams.pCalledFromProgID == '') {
            $scope.Widgets.anchorHome.show = true;
        } else {*/

        if ($scope.pageParams.pCalledFromProgID == 'CR1100W60') {
            $scope.Widgets.anchorPartialShp.show = true;
        }
        //}
    };

    //--------------------------------------------------------------------------------------------------------------------------
    $scope.svSY9200pk0CallFmbpathonBeforeUpdate = function(variable, inputData) {
        if (inputData.pFmbprogid == undefined) {
            return false;
        }
    };

    //------------------------------------------------------------------------------------------------
    $scope.svSY9200pk0CallFmbpathonSuccess = function(variable, data) {
        if (variable.dataBinding.pFmbprogid == '/prod/pfs/sh/frm/sh750oc0.fmx') {
            //$scope.Widgets.anchorPartialShp.hyperlink = data.progurl;
            window.open(data.progurl, "_blank");
        }


    };
    //----------------------------------------------------------------------------------------------------
    $scope.anchorPartialShpClick = function($event, $isolateScope) {

        $scope.Variables.svSY9200pk0CallFmbpath.setInput('pFmbprogid', '/prod/pfs/sh/frm/sh750oc0.fmx');

        if ($scope.pageParams.pOrdnum !== undefined) {
            $scope.Variables.svSY9200pk0CallFmbpath.setInput('pOtherParams', 'p_ordnum=' + $scope.pageParams.pOrdnum);
        }
        $scope.Variables.svSY9200pk0CallFmbpath.invoke();

    };
    //------------------------------------------------------------------------------------------------------------


}]);