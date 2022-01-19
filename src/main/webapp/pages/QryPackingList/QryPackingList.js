Application.$controller("QryPackingListPageController", ["$scope", function($scope) {
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

        /*
         cn04 15.06.2018 testing completed
     */



        if ($scope.pageParams.pParam1 !== undefined) {
            $scope.pageParams.pOrdnum = cgenPageParamDecode($scope.pageParams.pParam1, "pOrdnum");
            $scope.pageParams.pShpnum = cgenPageParamDecode($scope.pageParams.pParam1, "pShpnum");
            $scope.pageParams.pPshpnum = cgenPageParamDecode($scope.pageParams.pParam1, "pPshpnum");

            if ($scope.pageParams.pShpnum !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetSht700Det.setInput('pShpnum', $scope.pageParams.pShpnum);
            }

            if ($scope.pageParams.pPshpnum !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetSht700Det.setInput('pPShpnum', $scope.pageParams.pPshpnum);
            }

            if ($scope.pageParams.pOrdnum !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetSht700Det.setInput('pOrdnum', $scope.pageParams.pOrdnum);
                $scope.Variables.svProcCR1100PK0_GetSht700Det.invoke();
            }


        }

        if ($scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== "" && $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== null && $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== undefined) {

            $scope.Variables.svProcCR1100PK0_GetSht700Det.invoke();
        }
    };


    $scope.button3Click = function($event, $isolateScope) {
        if ($scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == "" || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == null || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setMessage("Order No is required");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcCR1100PK0_GetSht700Det.invoke();
    };




    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcCR1100PK0_CR610PklQty.dataSet = null;
        $scope.Variables.svProcCR1100PK0_CR610PklQtyPerPack.dataSet = null;
        $scope.Variables.svProcCR1100PK0_GetSht700Det.dataSet = null;
        $scope.Variables.svCR1100pk0FetchSizes.dataSet = null;
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };


    $scope.pShpnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pShpnum.datavalue = newVal.toUpperCase();
    };

    //---------------------------------------------------------------------------------------------------------------------------------------------
    $scope.svProcCR1100PK0_GetSht700DetonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined) {
            return false;
        }
    };

    //------------------------------------------------------------------------------------------------------------------------------------------------
    $scope.svProcCR1100PK0_CR610PklQtyonSuccess = function(variable, data) {

        // observation: when master returns no_data_found, child grids keep old values of previous record in master grid
        // thus purposely clear the detail grid, when the query for master returns no_data_found
        if (data.poutPacks == undefined || (data.poutPacks !== undefined && data.poutPacks.length == 0)) {
            $scope.Variables.svProcCR1100PK0_CR610PklQtyPerPack.dataSet = null;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------------------------
}]);


Application.$controller("gridMasterController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridDetailController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);