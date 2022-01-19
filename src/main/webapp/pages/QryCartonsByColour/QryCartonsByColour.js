Application.$controller("QryCartonsByColourPageController", ["$scope", function($scope) {
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
            $scope.pageParams.pOrdnum = cgenPageParamDecode($scope.pageParams.pParam1, "pOrdnum");
            if ($scope.pageParams.pParam1.indexOf("pGmtseq") > 0) {
                $scope.pageParams.pGmtseq = cgenPageParamDecode($scope.pageParams.pParam1, "pGmtseq");
            }
            if ($scope.pageParams.pParam1.indexOf("pClrseqg") > 0) {
                $scope.pageParams.pClrseqg = cgenPageParamDecode($scope.pageParams.pParam1, "pClrseqg");
            }


            //  $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = $scope.pageParams.pParam1;

            if ($scope.pageParams.pOrdnum !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.setInput("pOrdnum", $scope.pageParams.pOrdnum);
            }


            if ($scope.pageParams.pGmtseq !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.setInput("pGmtseq", $scope.pageParams.pGmtseq);
            }

            if ($scope.pageParams.pClrseqg !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.setInput("pClrseqg", $scope.pageParams.pClrseqg);
            }

            if ($scope.pageParams.pOrdnum !== undefined) {
                $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
                $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.invoke();
            }
        } else {

            if ($scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== "" && $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== null && $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== undefined) {

                $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.invoke();
            }
        }


    };


    $scope.button9Click = function($event, $isolateScope) {

        if ($scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == "" || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == null || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setMessage("Order No is required to query");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.invoke();
    };


    $scope.button7Click = function($event, $isolateScope) {
        $scope.Variables.svProcCR1100PK0_CR600PcsCartoned.dataSet = null;
        $scope.Variables.svProcCR1100PK0_GetCartoningGmtClrDet.dataSet = null;
    };



    //---------------------------------------------------------------------------------------------------------------

    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };
    //---------------------------------------------------------------------------------------------------------------------
    $scope.pGmtseqChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pGmtseq.datavalue = newVal.toUpperCase();
    };

    //-----------------------------------------------------------------------------------------------------------
    $scope.svORFetchSizesonBeforeUpdate = function(variable, inputData) {

        if (inputData.pOrdnum == undefined) {
            return false;
        }

    };
    //-----------------------------------------------------------------------------------------------------------
    $scope.svProcCR1100PK0_CR600PcsCartonedonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined) {
            return false;
        }
    };
    //---------------------------------------------------------------------------------------------------------------
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