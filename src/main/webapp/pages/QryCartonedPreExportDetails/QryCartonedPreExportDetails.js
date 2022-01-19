Application.$controller("QryCartonedPreExportDetailsPageController", ["$scope", function($scope) {
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

        if ($scope.pageParams.pParam1 !== undefined) {
            $scope.pageParams.pOrdnum = cgenPageParamDecode($scope.pageParams.pParam1, 'pOrdnum');
            $scope.pageParams.pShpnum = cgenPageParamDecode($scope.pageParams.pParam1, 'pShpnum');
        }

        // if pageparam pOrdnum and pShpnum are passed in url directly, wmaker is able to query automatically as per binding.
        //if pParam1 is passed, the decoding is taking time and page is not querying, thus invoke sv manually with the decoded page params
        if ($scope.pageParams.pOrdnum !== undefined && $scope.pageParams.pParam1 !== undefined) {
            $scope.Variables.svProcCR1100PK0_GetOrt205Det.setInput('pPrgid', $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcCR1100PK0_GetOrt205Det.setInput('pOrdnum', $scope.pageParams.pOrdnum);
            $scope.Variables.svProcCR1100PK0_GetOrt205Det.setInput('pShpnum', $scope.pageParams.pShpnum);
            $scope.Variables.svProcCR1100PK0_GetOrt205Det.setInput('pUserWMRoleList', $scope.Variables.loggedInUser.getData().roles);
            $scope.Variables.svProcCR1100PK0_GetOrt205Det.invoke();
        } else {
            if ($scope.Widgets.form1.formWidgets.pOrdnum.datavalue !== "" && $scope.Widgets.form1.formWidgets.pOrdnum.datavalue !== null && $scope.Widgets.form1.formWidgets.pOrdnum.datavalue !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetOrt205Det.invoke();
            }

        }


    };
    //-------------------------------------------------------------------------------------------------------
    $scope.button3Click = function($event, $isolateScope) {
        if ($scope.Widgets.form1.formWidgets.pOrdnum.datavalue == "" || $scope.Widgets.form1.formWidgets.pOrdnum.datavalue == null || $scope.Widgets.form1.formWidgets.pOrdnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setMessage("Order No is required to Query");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcCR1100PK0_GetOrt205Det.invoke();
    };

    //-------------------------------------------------------------------------------------------------------
    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.form1.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };

    //-------------------------------------------------------------------------------------------------------
    $scope.pShpnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.form1.formWidgets.pShpnum.datavalue = newVal.toUpperCase();
    };

    //-------------------------------------------------------------------------------------------------------
    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svProcCR1100PK0_GetOrt205Det.dataSet = null;
        $scope.Variables.svProcCR1100PK0_CR400CrtPexpQty.dataSet = null;
    };

    //--------------------------------------------------------------------------------------------------------
    $scope.svProcCR1100PK0_GetOrt205DetonError = function(variable, data) {
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
        return false;

    };
    //-------------------------------------------------------------------------------------------------------
}]);


Application.$controller("gridMasterController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);