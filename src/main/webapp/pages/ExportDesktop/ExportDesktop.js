Application.$controller("ExportDesktopPageController", ["$scope", function($scope) {
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
        if ($scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== "" && $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== null || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue !== undefined) {
            $scope.Variables.svProcCR1100PK0_GetCR210OrderDet.invoke();
        }
    };

    //--------------------------------------------------------------------------------------------------------------------------
    $scope.button3Click = function($event, $isolateScope) {
        if ($scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == "" || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == null || $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setMessage("Order is required to Query");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcCR1100PK0_GetCR210OrderDet.invoke();
    };

    //------------------------------------------------------------------------------------------------------------------------
    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcCR1100PK0_CR210pShpDet.dataSet = null;
        $scope.Variables.svProcCR1100PK0_GetCR210OrderDet.dataSet = null;
    };

    //--------------------------------------------------------------------------------------------------------------------
    $scope.svProcCR1100PK0_GetCR210OrderDetonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined) {
            return false;
        }

    };
    //---------------------------------------------------------------------------------------------------------------------

    $scope.svProcCR1100PK0_GetCR210OrderDetonError = function(variable, data) {
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
        return false;
    };
    //-------------------------------------------------------------------------------------------------------------------------
    $scope.btnPOreportClick = function($event, $isolateScope) {

        var m_ordnum = $scope.Widgets.gridDetail.selecteditem.ordnum;

        if (m_ordnum == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Search an Order Number first");
            $scope.Variables.notifMsg.notify();
        } else {

            $scope.Variables.svSY006pk0CallRepUrl.invoke({
                    "inputFields": {
                        "pReportPath": "/prod/pfs/or/rep/or310rp0.rdf",
                        "pParams": "&pordnum=" + m_ordnum,
                        "pDesformat": "PDF",
                        "pParamForm": "PARAMFORM"
                    }
                },
                function(data) {

                },
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                }
            );
        }

    };
    //---------------------------------------------------------------------------------------------------------------------------    
    $scope.svSY006pk0CallRepUrlonSuccess = function(variable, data) {
        if (data.poutUrl !== undefined && data.poutUrl !== "" && data.poutUrl !== null) {
            window.open(data.poutUrl, "_blank");
        }
    };
    //--------------------------------------------------------------------------------------------------------------------------------

    $scope.btnPKLClick = function($event, $isolateScope) {
        var m_ordnum = $scope.Widgets.gridDetail.selecteditem.ordnum;

        if (m_ordnum == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Search an Order Number first");
            $scope.Variables.notifMsg.notify();
        } else {

            $scope.Variables.svSY006pk0CallRepUrl.invoke({
                    "inputFields": {
                        "pReportPath": "/prod/pfs/cr/rep/cr911rp2.rdf",
                        "pParams": "&p_ordnum=" + m_ordnum,
                        "pDesformat": "PDF",
                        "pParamForm": "PARAMFORM"
                    }
                },
                function(data) {

                },
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                }
            );
        }
    };
    //-----------------------------------------------------------------------------------------------------------------------------------

    $scope.btnPKLNextClick = function($event, $isolateScope) {
        var m_ordnum = $scope.Widgets.gridDetail.selecteditem.ordnum;

        if (m_ordnum == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Search an Order Number first");
            $scope.Variables.notifMsg.notify();
        } else {

            $scope.Variables.svSY006pk0CallRepUrl.invoke({
                    "inputFields": {
                        "pReportPath": "/prod/pfs/cr/rep/cr920rp2.rdf",
                        "pParams": "&p_ordnum=" + m_ordnum,
                        "pDesformat": "PDF",
                        "pParamForm": "PARAMFORM"
                    }
                },
                function(data) {

                },
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                }
            );
        }
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };

}]);


Application.$controller("gridDetailController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridPartShpController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);