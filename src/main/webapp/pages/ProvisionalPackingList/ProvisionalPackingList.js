Application.$controller("ProvisionalPackingListPageController", ["$scope", 'TreeGridHelper', function($scope, TreeGridHelper) {
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
    };

    //-------------------------------------------------------------------------------------------------------
    // force focus on grid
    $scope.tableOnFocus = function(grid, row, col, orow, ocol, pagepos, rect, orect) {
        $scope.$apply();

    };
    // construct the treegrid for list of ESM Requests - gridESMRequest
    $scope.showProvPKLGrid = function(pGridData) {
        var provpklLayout = {
            Cfg: {
                Code: "GTGEEBESVPPUPB",
                Dragging: 0,
                Selecting: 0,
                Editing: 1,
                Focused: "AR3", // focus on first datarow AR3,grid has 2 header rows
                MaxVScroll: 800,
                Paging: 2,
                AllPages: 0,
                PageLength: 15,
                StaticCursor: 1,
                Align: "Center",
                AlignHeader: "Center",
                DateStrings: 2 // format of date columns to be in yyyy-MM-dd HH:mm:ss,

            },
            Pager: {
                Visible: 0
            },

            Panel: {

                Visible: 0
                //Delete: 1,
                //Validate: 1
                //  Add: 1
                //OnClickPanelDelete: $scope.deleteTGridRow(this.row, this.col)
            },

            LeftCols: [
                /*{
                    Name: "DelRow",
                    Type: "Button",
                    Button: "Button",
                    Width: "100",
                    ButtonText: "Delete",
                    OnClick: $scope.btnDeletePKLClick
                },*/


                {
                    Name: "seqnum",
                    Width: "50",
                    Align: "Center",
                    CanEdit: 0

                }, {
                    Name: "ctntype",
                    Width: "70",
                    Align: "Center",
                    CanEdit: 0
                }, {
                    Name: "ctndes",
                    Width: "150",
                    Align: "Center",
                    CanEdit: 0
                },
                {
                    Name: "skuno",
                    Width: "90",
                    Align: "Center",
                    CanEdit: 0
                },
                {
                    Name: "ctndimension",
                    Width: "110",
                    Align: "Center",
                    CanEdit: 0
                },

                {
                    Name: "plnqtyperctn",
                    Width: "90",
                    Align: "Center",
                    CanEdit: 0,
                    Format: ",0"
                },

                {
                    Name: "plngrswgt",
                    Type: "Float",
                    Width: "80",
                    Align: "Center",
                    CanEdit: 1,
                    Format: ",0.00"
                },
                {
                    Name: "plnctnwgt",
                    Type: "Float",
                    Align: "Center",
                    CanEdit: 1,
                    Format: ",0.00"
                },



                {
                    Name: "fromctn",
                    Width: "60",
                    Type: "Int",
                    Align: "Center",
                    CanEdit: 1
                }, {
                    Name: "toctn",
                    Width: "50",
                    Type: "Int",
                    Align: "Center",
                    //Class: "yellow-l3",
                    CanEdit: 1

                },

                //-------columns not displayed in grid------------
                {
                    Name: "ordnum",
                    Width: "80",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "shpnum",
                    Width: "80",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "pshpnum",
                    Width: "80",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "clicod",
                    Width: "80",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "provpklstatus",
                    Width: "40",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "provpklfindat",
                    Align: "Left",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "provpklfinby",
                    Width: "120",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "ctnlen",
                    Type: "Float",
                    Width: "120",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "ctnwid",
                    Type: "Float",
                    Width: "120",
                    Align: "Center",
                    Visible: 0
                },
                {
                    Name: "ctnhgt",
                    Type: "Float",
                    Width: "120",
                    Align: "Center",
                    Visible: 0
                }

            ],
            Cols: [

                {
                    Name: "computedTotctn",
                    Align: "Center",
                    CanEdit: 0,
                    Formula: "(toctn > 0 & fromctn > 0)?((toctn - fromctn) +1):0"
                },

                {
                    Name: "computedTotqty",
                    Align: "Center",
                    CanEdit: 0,
                    Formula: "(computedTotctn > 0 & plnqtyperctn > 0 )?(computedTotctn * plnqtyperctn):0"

                }, {
                    Name: "computedTotgrswgt",
                    Type: "Float",
                    Align: "Center",
                    CanEdit: 0,
                    Formula: "(computedTotctn > 0 & plngrswgt > 0 )?(computedTotctn * plngrswgt):0",
                    Format: ",0.00"

                },

                {
                    Name: "computedTotnetwgt",
                    Type: "Float",
                    Align: "Center",
                    CanEdit: 0,
                    Formula: "(computedTotctn > 0 & plnctnwgt > 0 & plngrswgt > 0)?(computedTotctn * (plngrswgt - plnctnwgt)):0",
                    Format: ",0.00"
                },

                {
                    Name: "computedTotvol",
                    Type: "Float",
                    Align: "Center",
                    CanEdit: 0,
                    Formula: "(computedTotctn > 0)?((computedTotctn*ctnlen*ctnwid*ctnhgt)/1000000):0",
                    Format: ",0.000"
                },


                {
                    Name: "creatid",
                    Width: "60",
                    Align: "Center",
                    CanEdit: 0
                },
                {
                    Name: "creatdat",
                    Width: "140",
                    Type: "Date",
                    Format: "dd-MMM-yyyy hh:mm",
                    Align: "Left",
                    CanEdit: 0
                },
                {
                    Name: "modid",
                    Width: "60",
                    Align: "Center",
                    CanEdit: 0
                },
                {
                    Name: "moddat",
                    Width: "140",
                    Type: "Date",
                    Format: "dd-MMM-yyyy hh:mm",
                    Align: "Left",
                    CanEdit: 0
                }



            ],

            Def: [{
                Name: "SummaryFields",
                Calculated: 1,
                CalcOrder: "computedTotctn,computedTotqty,computedTotgrswgt,computedTotnetwgt,computedTotvol"
            }],

            Head: [{
                    Spanned: 1,
                    // DelRow: "",
                    //    DelRowType: "Text",

                    seqnum: "",
                    seqnumSpan: 3,
                    seqnumCanEdit: 0,

                    skuno: "Carton Dimension",
                    skunoType: "Text",
                    skunoSpan: 2,
                    skunoAlign: "Center",
                    skunoClass: "bold",
                    skunoCanEdit: 0,


                    plngrswgt: "Weight (Kgs)",
                    plngrswgtType: "Text",
                    plngrswgtSpan: 2,
                    plngrswgtAlign: "Center",
                    plngrswgtClass: "bold",
                    plngrswgtCanEdit: 0,

                    fromctn: "Carton Number",
                    fromctnType: "Text",
                    fromctnSpan: 2,
                    fromctnAlign: "Center",
                    fromctnClass: "bold",
                    fromctnCanEdit: 0,

                    /* totctn: "xx Total per Carton type",
                     totctnType: "Text",
                     totctnSpan: 6,
                     totctnAlign: "Center",
                     totctnClass: "bold",
                     totctnCanEdit: 0,
                     */


                    computedTotctn: "Total per Carton type",
                    computedTotctnFormula: "", // because computedTotctn is a formula column, set it as null here to force it be a text
                    computedTotctnType: "Text",
                    computedTotctnSpan: 5,
                    computedTotctnAlign: "Center",
                    computedTotctnClass: "bold",
                    computedTotctnCanEdit: 0,

                    creatid: "",
                    creatidSpan: 4,
                    cretidCanEdit: 0

                },
                {

                    Spanned: 1,
                    id: "Header",

                    // Panel: "Select\nto delete",
                    //    PanelWidth: 120,

                    // DelRow: "",

                    creatid: "Created By/On",
                    creatidSpan: 2,
                    creatidAlign: "Center",

                    modid: "Last Updated By/On",
                    modidSpan: 2,
                    modidAlign: "Center",


                    seqnum: "Seq",
                    seqnumAlign: "Center",

                    ctntype: "Carton\nType",
                    ctntypeAlign: "Center",

                    ctndes: "Content",
                    ctndesAlign: "Center",

                    skuno: "SKU",
                    skunoAlign: "Center",

                    ctndimension: "L x W x H",
                    ctndimensionAlign: "Center",

                    plnqtyperctn: "Qty\nper Carton",
                    plnqtyperctnAlign: "Center",


                    plngrswgt: "Gross",
                    plngrswgtAlign: "Center",
                    plngrswgtClass: "yellow-l3",

                    plnctnwgt: "Empty Carton",
                    plnctnwgtAlign: "Center",
                    plnctnwgtClass: "yellow-l3",


                    fromctn: "From",
                    fromctnAlign: "Center",
                    fromctnClass: "yellow-l3",

                    toctn: "To",
                    toctnAlign: "Center",
                    toctnClass: "yellow-l3",


                    computedTotctn: "No. of\nCartons",
                    computedTotctnAlign: "Center",

                    computedTotqty: "Qty\nin Carton",
                    computedTotqtyAlign: "Center",

                    computedTotgrswgt: "Gross\nWgt (Kgs)",
                    computedTotgrswgtAlign: "Center",

                    computedTotnetwgt: "Net\nWgt (Kgs)",
                    computedTotnetwgtAlign: "Center",

                    computedTotvol: "Volume\n(m3)",
                    computedTotvolAlign: "Center"

                }
            ],

            Foot: [{
                Spanned: 1,
                Calculated: 1,
                seqnum: "Packing List Totals:  ",
                seqnumClass: "displayPrompt",
                seqnumSpan: 10,
                seqnumAligh: "Right",

                CanEdit: 0,
                CanCopy: 0,
                CanDelete: 0,

                computedTotctnType: "Float",
                computedTotctnFormula: "sum()",
                computedTotctnClass: "blue-l1",

                computedTotgrswgtType: "Float",
                computedTotgrswgtFormula: "sum()",
                computedTotgrswgtClass: "blue-l1",

                computedTotnetwgtType: "Float",
                computedTotnetwgtFormula: "sum()",
                computedTotnetwgtClass: "blue-l1",

                computedTotvolType: "Float",
                computedTotvolFormula: "sum()",
                computedTotvolClass: "blue-l1",

                computedTotqtyType: "Float",
                computedTotqtyFormula: "sum()",
                computedTotqtyClass: "blue-l1",

                creatid: "",
                creatidSpan: 4

            }],

            Toolbar: {
                Link: 0, // should specifically disable the link, otherwise by default it appears in the toolbar
                Visible: 1,
                Cells: "PAGER", //"Export,PAGER,SAVE"
                PAGERType: "Pager"
            },

        };
        // end of var

        $scope.Variables.tgridPKL = TreeGridHelper('tgridPKL', {
            data: pGridData /*$scope.Variables.svCr800pk0QryProvPKL.dataSet.poutPkl*/ ,
            layout: provpklLayout
        });

        Grids.OnFocus = $scope.tableOnFocus;

    };

    //-----------------------------------------------------------------------------------------------------------
    //USED for testing OnClickPanelDelete event -- NOT WORKING, NOT USED
    $scope.deleteTGridRow = function(row, col) {
        //console.log("called deleteTgrid");
        //console.log(row);
        //var changes = JSON.parse($scope.Variables.tgridPKL.GetChanges()).Changes;
    };
    //-----------------------------------------------------------------------------------------
    $scope.txtOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtOrdnum.datavalue = newVal.toUpperCase();
        if ($scope.Variables.svCr800pk0QryProvPKL.dataSet !== undefined) {
            $scope.Widgets.gridPKL.show = false;
            $scope.Widgets.containerProvPKLStatus.show = false;
        }

    };

    //-----------------------------------------------------------------------------------------------------------------
    $scope.txtShpnumChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Variables.svCr800pk0QryProvPKL.dataSet !== undefined) {
            // hide the container having the tree grid coz not able to clear data of treegrid,keeping only the layout of the grid
            $scope.Widgets.gridPKL.show = false;
            $scope.Widgets.containerProvPKLStatus.show = false;

            // $scope.showProvPKLGrid($scope.Variables.svCr800pk0QryProvPKL.dataSet.poutPkl);
            //$scope.Variables.tgridPKL = null;
            /*
            $scope.Variables.tgridPKL = TreeGridHelper('tgridPKL', {
                data: $scope.Variables.svCr800pk0QryProvPKL.dataSet.poutPkl,
                layout: null
            });
            Grids.OnFocus = $scope.tableOnFocus;*/
        }
    };
    //-------------------------------------------------------------------------------------------------------------------
    $scope.txtPshpnumChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Variables.svCr800pk0QryProvPKL.dataSet !== undefined) {
            $scope.Widgets.gridPKL.show = false;
            $scope.Widgets.containerProvPKLStatus.show = false;
        }
    };

    //---------------------------------------------------------------------------------------
    $scope.btnQueryClick = function($event, $isolateScope) {
        if ($scope.Widgets.txtOrdnum.datavalue == undefined || $scope.Widgets.txtShpnum.datavalue == undefined || $scope.Widgets.txtPshpnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Order Number, Shipment and Part Shipment are required to query");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.gridPKL.show = true;
        $scope.Widgets.containerProvPKLStatus.show = true;
        $scope.Variables.svCr800pk0QryProvPKL.invoke();


    };
    //--------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0QryProvPKLonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined || inputData.pPshpnum == undefined) {
            return false;
        }

    };
    //--------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0QryProvPKLonError = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage("Error:" + data);
        $scope.Variables.notifMsg.notify();
        return false;
    };

    //-----------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0QryProvPKLonSuccess = function(variable, data) {
        /*if (data.poutPkl.length === 0) {
            $scope.Variables.notifMsg.setAlertType("info");
            $scope.Variables.notifMsg.setMessage("Provisional Packing List has not yet been defined. Click on 'create packing list'");
            $scope.Variables.notifMsg.notify();
        }*/

        $scope.showProvPKLGrid(data.poutPkl);

    };


    //------------------------------------------------------------------------------------------
    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svCr800pk0QryProvPKL.dataSet = null;
        $scope.Widgets.txtOrdnum.datavalue = null;
        $scope.Widgets.txtShpnum.datavalue = null;
        $scope.Widgets.txtPshpnum.datavalue = null;

        /*$scope.Widgets.lblProvpklstatus.caption = null;
        $scope.Widgets.lblProvpklfindat.caption = '';
        $scope.Widgets.lblProvpklfinby.caption = '';*/

        $scope.Widgets.txtUnfinReason.datavalue = null;
        $scope.Widgets.gridPKL.show = false;
        $scope.Widgets.containerProvPKLStatus.show = false;
        $scope.Widgets.containerUnFin.show = false;


    };
    //----------------------------------------------------------------------------------------------------------
    $scope.svQryPartShpnumonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined) {
            return false;
        }
    };
    //---------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0CartonDefonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined) {
            return false;
        }

        if ($scope.Variables.statPKLDialogTitle.dataSet.dataValue == "EDITPKL" & inputData.pPshpnum == undefined) {
            return false;
        }


    };

    //------------------------------------------------------------------------------------------------------------
    $scope.AddCartonType = function(pPartshpnum, pCreatePartshpInd) {

        var m_ctntypeList = "";
        if (!($scope.Widgets.gridCtntype.selectedItems.length === 0)) {
            for (var i = 0; i < $scope.Widgets.gridCtntype.selectedItems.length; i++) {
                if (m_ctntypeList == "") {
                    m_ctntypeList = $scope.Widgets.gridCtntype.selectedItems[i].ctntype;
                } else {
                    m_ctntypeList = m_ctntypeList + ";" + $scope.Widgets.gridCtntype.selectedItems[i].ctntype;
                }

            }

            if (pCreatePartshpInd == 'Y') {
                $scope.Variables.svCr800pk0CreatePshpBulkInsCtn.setInput({
                    "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pOrdnum": $scope.Widgets.txtCreateOrdnum.datavalue,
                    "pShpnum": $scope.Widgets.txtCreateShpnum.datavalue,
                    "pListctntype": m_ctntypeList
                });

                $scope.Variables.svCr800pk0CreatePshpBulkInsCtn.invoke();


            } else {


                $scope.Variables.svCr800pk0BulkInsCtntype.setInput({
                    "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pOrdnum": $scope.Widgets.txtCreateOrdnum.datavalue,
                    "pShpnum": $scope.Widgets.txtCreateShpnum.datavalue,
                    "pPshpnum": pPartshpnum,
                    "pListctntype": m_ctntypeList

                });

                $scope.Variables.svCr800pk0BulkInsCtntype.invoke();
            }

        }
    };

    //----------------------------------------------------------------------------------------------------------------------------------------
    //SAVE changes button  - called when upd tree grid
    $scope.btnSaveCtnNumAssignClick = function($event, $isolateScope) {

        var changes = JSON.parse($scope.Variables.tgridPKL.GetChanges()).Changes;
        var curseqnum;
        var curctntype;
        var old_plngrswgt;
        var old_plnctnwgt;
        var old_fromctn;
        var old_toctn;

        var new_plngrswgt;
        var new_plnctnwgt;
        var new_fromctn;
        var new_toctn;

        var m_rows = "";


        if (changes.length == 0) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: There are no changes to save");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {

            for (var i = 0; i < changes.length; i++) {
                curseqnum = $scope.Variables.tgridPKL.Rows[changes[i].id].seqnum;
                curctntype = $scope.Variables.tgridPKL.Rows[changes[i].id].ctntype;

                // if a column has not been updated, get the new values same as old value. this is because for a number field, we cannot pass string value "undefined"
                //suffix columnname with Orig to get the column's database value
                if (changes[i].plngrswgt == undefined) {
                    old_plngrswgt = $scope.Variables.tgridPKL.Rows[changes[i].id].plngrswgt;
                    new_plngrswgt = $scope.Variables.tgridPKL.Rows[changes[i].id].plngrswgt;

                } else {
                    old_plngrswgt = $scope.Variables.tgridPKL.Rows[changes[i].id].plngrswgtOrig;
                    new_plngrswgt = changes[i].plngrswgt;
                }

                if (changes[i].plnctnwgt == undefined) {
                    old_plnctnwgt = $scope.Variables.tgridPKL.Rows[changes[i].id].plnctnwgt;
                    new_plnctnwgt = $scope.Variables.tgridPKL.Rows[changes[i].id].plnctnwgt;
                } else {
                    old_plnctnwgt = $scope.Variables.tgridPKL.Rows[changes[i].id].plnctnwgtOrig;
                    new_plnctnwgt = changes[i].plnctnwgt;
                }

                if (changes[i].fromctn == undefined) {
                    old_fromctn = $scope.Variables.tgridPKL.Rows[changes[i].id].fromctn;
                    new_fromctn = $scope.Variables.tgridPKL.Rows[changes[i].id].fromctn;
                } else {
                    old_fromctn = $scope.Variables.tgridPKL.Rows[changes[i].id].fromctnOrig;
                    new_fromctn = changes[i].fromctn;
                }

                if (changes[i].toctn == undefined) {
                    old_toctn = $scope.Variables.tgridPKL.Rows[changes[i].id].toctn;
                    new_toctn = $scope.Variables.tgridPKL.Rows[changes[i].id].toctn;
                } else {
                    old_toctn = $scope.Variables.tgridPKL.Rows[changes[i].id].toctnOrig;
                    new_toctn = changes[i].toctn;
                }

                //format of m_rows : each row is separated with ;
                // format of 1 row : ctntype*seqnum*new_fromctn*new_toctn*new_plngrswgt*new_plnctnwgt*old_fromctn*old_toctn*old_plngrswgt*old_plnctnwgt
                if (m_rows == "") {
                    m_rows = curctntype + "*" + curseqnum + "*" + new_fromctn + "*" + new_toctn + "*" + new_plngrswgt + "*" + new_plnctnwgt + "*" + old_fromctn + "*" + old_toctn + "*" + old_plngrswgt + "*" + old_plnctnwgt;
                } else {
                    m_rows = m_rows + ";" + curctntype + "*" + curseqnum + "*" + new_fromctn + "*" + new_toctn + "*" + new_plngrswgt + "*" + new_plnctnwgt + "*" + old_fromctn + "*" + old_toctn + "*" + old_plngrswgt + "*" + old_plnctnwgt;
                }

            }

            if (changes !== undefined && changes.length > 0) {

                $scope.Variables.svCr800pk0BulkUpdProvPKL.setInput({

                    "pOrdnum": $scope.Widgets.txtOrdnum.datavalue,
                    "pShpnum": $scope.Widgets.txtShpnum.datavalue,
                    "pPshpnum": $scope.Widgets.txtPshpnum.datavalue,
                    "pRows": m_rows,
                    "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue

                });
                $scope.Variables.svCr800pk0BulkUpdProvPKL.invoke();

                //    $scope.Variables.tgridPKL.AcceptChanges();
            }
        }

    };


    //-------------------------------------------------------------------------------------------------------
    //button Finalise Packing List
    $scope.btnFinalisePKLClick = function($event, $isolateScope) {
        // console.log('click on button finalise');

        if ($scope.Widgets.txtOrdnum.datavalue == undefined || $scope.Widgets.txtShpnum.datavalue == undefined || $scope.Widgets.txtPshpnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Query an Order Number, Shipment and Part Shipment first");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        var changes = JSON.parse($scope.Variables.tgridPKL.GetChanges()).Changes;
        if (changes.length > 0) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Save your changes first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCR800PK0FinaliseProvPKL.invoke();


    };
    //---------------------------------------------------------------------------------------------------------
    $scope.svCR800PK0FinaliseProvPKLonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined || inputData.pPshpnum == undefined) {
            return false;
        }
    };
    //---------------------------------------------------------------------------------------------------------

    $scope.svCR800PK0FinaliseProvPKLonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    //---------------------------------------------------------------------------------------------------------
    $scope.svCR800PK0FinaliseProvPKLonSuccess = function(variable, data) {

        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Provisional Packing List has been finalised");
        $scope.Variables.notifMsg.notify();
        //requery page
        $scope.Variables.svCr800pk0QryProvPKL.invoke();

    };
    //--------------------------------------------------------------------------------------------------------------

    $scope.btnAddCtntypeClick = function($event, $isolateScope) {
        $scope.Variables.statPKLDialogTitle.dataSet.dataValue = "EDITPKL";
        $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pOrdnum", $scope.Widgets.txtOrdnum.datavalue);
        $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pShpnum", $scope.Widgets.txtShpnum.datavalue);
        $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pOperation", "EDITPKL");
        $scope.Variables.svQryPshpnumCreateEditProvPKL.invoke();

        $scope.Widgets.dialogCreateProvPKL.open();
    };
    //-------------------------------------------------------------------------------------------------------------
    $scope.btnCreatePKLClick = function($event, $isolateScope) {
        $scope.Variables.statPKLDialogTitle.dataSet.dataValue = "ADDPKL";
        $scope.Widgets.dialogCreateProvPKL.open();
    };

    //------------------------------------------------------------------------------------------------------
    $scope.svQryShpnumonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined) {
            return false;
        }
    };

    //----------------------------------------------------------------------------------------------------------

    $scope.btnUnFinalisePKLClick = function($event, $isolateScope) {

        if ($scope.Widgets.txtOrdnum.datavalue == undefined || $scope.Widgets.txtShpnum.datavalue == undefined || $scope.Widgets.txtPshpnum.datavalue == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Query an Order Number, Shipment and Part Shipment first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        var changes = JSON.parse($scope.Variables.tgridPKL.GetChanges()).Changes;
        if (changes.length > 0) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Save your changes first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Widgets.txtUnfinReason.datavalue == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: You should enter reason to unfinalise Provisional Packing List");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Widgets.confirmdialogUnfinalise.open();
    };
    //------------------------------------------------------------------------------------------------------------------- 
    $scope.svCr800pk0UnfinaliseProvPKLonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };
    //------------------------------------------------------------------------------------------------------------------- 
    $scope.svCr800pk0UnfinaliseProvPKLonSuccess = function(variable, data) {

        $scope.Widgets.txtUnfinReason.datavalue = undefined;
        $scope.Variables.svCr800pk0QryProvPKL.invoke();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Provisional Packing List has been unfinalised successfully");
        $scope.Variables.notifMsg.notify();
    };
    //----------------------------------------------------------------------------------------------------------------------
    $scope.btnViewPKLReportClick = function($event, $isolateScope) {

        if (($scope.Widgets.txtOrdnum.datavalue == undefined) || ($scope.Widgets.txtOrdnum.datavalue == "") ||
            $scope.Widgets.txtShpnum.datavalue == undefined || $scope.Widgets.txtPshpnum.datavalue == undefined
        ) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("Error: Search an Order Number/Shipment/Part Shipment first");
            $scope.Variables.notifMsg.notify();
        } else {

            $scope.Variables.svSY006pk0CallRepUrl.invoke({
                    "inputFields": {
                        "pReportPath": "/prod/pfs/cr/rep/cr915rp2.rdf",
                        "pParams": "&p_ordnum=" + $scope.Widgets.txtOrdnum.datavalue + "&p_shpnum=" + $scope.Widgets.txtShpnum.datavalue + "&p_pshpnum=" + $scope.Widgets.txtPshpnum.datavalue,
                        "pDesformat": "PDF",
                        "pParamForm": "NOPARAM"
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                }
            );
        }

    };

    //--------------------------------------------------------------------------------------------------------------------
    $scope.svSY006pk0CallRepUrlonSuccess = function(variable, data) {
        if (data.poutUrl !== undefined && data.poutUrl !== "" && data.poutUrl !== null) {
            window.open(data.poutUrl, "_blank");
        }
    };
    //--------------------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0CheckUserAccessonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined || inputData.pPshpnum == undefined) {
            return false;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------
    // button delete carton type from a pkl
    $scope.btnDeletePKLRowClick = function($event, $isolateScope) {
        //alert($scope.Variables.tgridPKL.FRow.ctntype);
        if ($scope.Variables.tgridPKL.FRow.ctntype == undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage("First, click on a row that you want to delete");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.statCtntypetoDelete.dataSet.dataValue = $scope.Variables.tgridPKL.FRow.ctntype;
        $scope.Variables.statSeqnumtoDelete.dataSet.dataValue = $scope.Variables.tgridPKL.FRow.seqnum;
        $scope.Widgets.confirmdialogDeletePKLRow.open();
    };
    //--------------------------------------------------------------------------------------------------------------------

    $scope.svCr800pk0DeleteCtntypeonSuccess = function(variable, data) {
        $scope.Variables.svCr800pk0QryProvPKL.invoke();
    };


    $scope.svQryPshpnumCreateEditProvPKLonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined || inputData.pOperation == undefined) {
            return false;
        }
    };

    //-------------------------------------------------------------------------------------------------------------------------------
    $scope.svQryGetShpDetailsonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pShpnum == undefined) {
            return false;
        }
    };
    //-------------------------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0BulkInsCtntypeonSuccess = function(variable, data) {
        $scope.Widgets.txtOrdnum.datavalue = $scope.Widgets.txtCreateOrdnum.datavalue;
        $scope.Widgets.txtShpnum.datavalue = $scope.Widgets.txtCreateShpnum.datavalue;
        $scope.Widgets.txtPshpnum.datavalue = $scope.Widgets.txtCreatePshpnum.datavalue;

        $scope.Variables.svCr800pk0QryProvPKL.setInput("pOrdnum", $scope.Widgets.txtCreateOrdnum.datavalue);
        $scope.Variables.svCr800pk0QryProvPKL.setInput("pShpnum", $scope.Widgets.txtCreateShpnum.datavalue);
        $scope.Variables.svCr800pk0QryProvPKL.setInput("pPshpnum", $scope.Widgets.txtCreatePshpnum.datavalue);
        $scope.Variables.svCr800pk0QryProvPKL.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svCr800pk0QryProvPKL.invoke();

        $scope.Variables.svCr800pk0CartonDef.dataSet = null;
        $scope.Widgets.dialogCreateProvPKL.close();
        $scope.Variables.notifMsg.setAlertType("info");
        $scope.Variables.notifMsg.setMessage("Carton types have been added to packing list in Part Shipment " + $scope.Widgets.txtPshpnum.datavalue);
        $scope.Variables.notifMsg.notify();
    };

    //-------------------------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0BulkInsCtntypeonError = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    //-------------------------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0CreatePshpBulkInsCtnonSuccess = function(variable, data) {

        if (data.poutPshpnum !== undefined) {

            $scope.Widgets.txtOrdnum.datavalue = $scope.Widgets.txtCreateOrdnum.datavalue;

            $scope.Variables.svQryShpnum.setInput("pOrdnum", $scope.Widgets.txtCreateOrdnum.datavalue);
            $scope.Variables.svQryShpnum.invoke();
            $scope.Widgets.txtShpnum.datavalue = $scope.Widgets.txtCreateShpnum.datavalue;

            $scope.Variables.svQryPartShpnum.setInput({
                "pOrdnum": $scope.Widgets.txtCreateOrdnum.datavalue,
                "pShpnum": $scope.Widgets.txtCreateShpnum.datavalue
            });

            $scope.Variables.svQryPartShpnum.invoke();
            $scope.Widgets.txtPshpnum.datavalue = data.poutPshpnum;

            $scope.Variables.svCr800pk0QryProvPKL.setInput("pOrdnum", $scope.Widgets.txtCreateOrdnum.datavalue);
            $scope.Variables.svCr800pk0QryProvPKL.setInput("pShpnum", $scope.Widgets.txtCreateShpnum.datavalue);
            $scope.Variables.svCr800pk0QryProvPKL.setInput("pPshpnum", data.poutPshpnum);
            $scope.Variables.svCr800pk0QryProvPKL.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svCr800pk0QryProvPKL.invoke();
            $scope.Variables.svCr800pk0CartonDef.dataset = null;

            $scope.Widgets.dialogCreateProvPKL.close();
            $scope.Variables.notifMsg.setAlertType("info");
            $scope.Variables.notifMsg.setMessage("Carton types have been added to packing list in Part Shipment " + data.poutPshpnum);
            $scope.Variables.notifMsg.notify();
        }
    };

    //---------------------------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0BulkUpdProvPKLonSuccess = function(variable, data) {
        $scope.Variables.tgridPKL.AcceptChanges();
        $scope.Variables.svCr800pk0QryProvPKL.invoke();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Changes have been saved.");
        $scope.Variables.notifMsg.notify();

    };
    //-------------------------------------------------------------------------------------------------------------------------
    $scope.svCr800pk0BulkUpdProvPKLonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svQryGetShpDetailsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svQryPartShpnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svQryPshpnumCreateEditProvPKLonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svQryShpnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

}]);
//------------------------------------------------------------------------------------------------------------------------
Application.$controller("dialogCreateProvPKLController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //----------------------------------------------------------------------------------------------------------------------------------------
        $scope.btnAddToProvPKLClick = function($event, $isolateScope) {
            if (($scope.Widgets.txtCreateOrdnum.datavalue == undefined) || ($scope.Widgets.txtCreateOrdnum.datavalue == '%') || ($scope.Widgets.txtCreateOrdnum.datavalue == null)) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Order number must be entered");
                $scope.Variables.notifMsg.notify();
                return false;
            }


            if (($scope.Widgets.txtCreateShpnum.datavalue == undefined) || ($scope.Widgets.txtCreateShpnum.datavalue == '%') || ($scope.Widgets.txtCreateShpnum.datavalue == null)) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Shipment number must be entered");
                $scope.Variables.notifMsg.notify();
                return false;
            }


            if ((($scope.Widgets.txtCreatePshpnum.datavalue == undefined) || ($scope.Widgets.txtCreatePshpnum.datavalue == '%') || ($scope.Widgets.txtCreatePshpnum.datavalue == null)) &&
                ($scope.Widgets.chkCreatePshp.datavalue == 'N')) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Part Shipment must be entered or 'Create Part Shipment' must be ticked");
                $scope.Variables.notifMsg.notify();
                return false;
            }


            //     console.log($scope.Widgets.gridCtntype.selectedItems);

            if ($scope.Widgets.gridCtntype.selectedItems.length === 0) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("No Carton types have been selected to include in packing list");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.AddCartonType($scope.Widgets.txtCreatePshpnum.datavalue, $scope.Widgets.chkCreatePshp.datavalue);

        };

        //--------------------------------------------------------------------------------------------------------------------
        $scope.txtCreateOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.txtCreateOrdnum.datavalue = newVal.toUpperCase();
            $scope.Variables.svQryShpnum.setInput("pOrdnum", newVal.toUpperCase());
            $scope.Variables.svQryShpnum.invoke();
        };
        //---------------------------------------------------------------------------------------------------------------------------
        $scope.txtCreateShpnumChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pOrdnum", $scope.Widgets.txtCreateOrdnum.datavalue);
            $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pShpnum", newVal);
            $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pOperation", $scope.Variables.statPKLDialogTitle.dataSet.dataValue);
            $scope.Variables.svQryPshpnumCreateEditProvPKL.invoke();
        };
        //----------------------------------------------------------------------------------------------------
        $scope.dialogCreateProvPKLOpened = function($event, $isolateScope) {
            if ($scope.Widgets.txtOrdnum.datavalue !== undefined) {
                $scope.Widgets.txtCreateOrdnum.datavalue = $scope.Widgets.txtOrdnum.datavalue;
            }

            if ($scope.Widgets.txtShpnum.datavalue !== undefined) {
                $scope.Widgets.txtCreateShpnum.datavalue = $scope.Widgets.txtShpnum.datavalue;
            }

            if ($scope.Variables.statPKLDialogTitle.dataSet.dataValue == "EDITPKL") {
                $scope.Widgets.txtCreatePshpnum.datavalue = $scope.Widgets.txtPshpnum.datavalue;
            }

            if ($scope.Variables.statPKLDialogTitle.dataSet.dataValue == "ADDPKL") {
                $scope.Widgets.txtCreatePshpnum.datavalue = null;
                if ($scope.Widgets.txtOrdnum.datavalue !== undefined & $scope.Widgets.txtShpnum.datavalue !== undefined) {
                    $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pOrdnum", $scope.Widgets.txtOrdnum.datavalue);
                    $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pShpnum", $scope.Widgets.txtShpnum.datavalue);
                    $scope.Variables.svQryPshpnumCreateEditProvPKL.setInput("pOperation", "ADDPKL");

                    $scope.Variables.svQryPshpnumCreateEditProvPKL.invoke();
                }
            }

        };

        //---------------------------------------------------------------------------------------------
        //when close createPKL dialog
        $scope.dialogCreateProvPKLClose = function($event, $isolateScope) {
            $scope.Widgets.txtCreateOrdnum.datavalue = undefined;
            $scope.Widgets.txtCreateShpnum.datavalue = undefined;
            $scope.Widgets.txtCreatePshpnum.datavalue = undefined;
            $scope.Variables.svCr800pk0CartonDef.dataSet = null;

        };




    }
]);

Application.$controller("gridCtntypeController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("confirmdialogUnfinaliseController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("confirmdialogDeletePKLRowController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


    }
]);