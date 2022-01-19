/* v1.00 16.5.2018 Pawan.  Set Value select widget.
   v1.01 06/06/2018 Johanna. Decode and Encode.
*/

function cgenDatasetRowQuery(Dataset, FieldName, FieldValue) {
    for (var i = 0; i < Dataset.length; i++) {
        if (eval("Dataset[i]." + FieldName + " ===  FieldValue")) {
            return Dataset[i];
        }
    }
}

function cgenWMCheckWidgetValue(WidgetObj) {

    if (WidgetObj.datavalue === null || WidgetObj.datavalue === undefined || WidgetObj.datavalue === "") {
        return true;
    } else {
        return false;

    }
}

function cgenWMSetWidgetValue(WidgetObj, FieldValue, FieldName) {
    if (cgenWMCheckWidgetValue(WidgetObj) || cgenWMCheckWidgetValue(FieldValue)) {
        if (WidgetObj.datafield === "All Fields") {
            if (WidgetObj._widgettype === "wm-select" || WidgetObj._widgettype === "wm-search") {

                var dataset = WidgetObj.dataset;
                WidgetObj.datavalue = cgenDatasetRowQuery(dataset, FieldName, FieldValue);
                return true;

            }
        } else {
            WidgetObj.datavalue = FieldValue;
            return true;
        }
    } else {
        return false;
    }

}


function cgenCheckAutocomplete(WidgetObj) {
    if (cgenWMCheckWidgetValue(WidgetObj)) {
        WidgetObj.datavalue = null;
    } else {
        return false;
    }
}

function cgenPageParamDecode(link, FieldName) {
    link = "~26" + link;

    var Fieldvalue = link.split('~26' + FieldName + '~3D').pop().split('~26').shift();
    if (!(Fieldvalue === null || Fieldvalue === undefined || Fieldvalue === "")) {

        if (Fieldvalue.indexOf("~20") >= 0) {
            Fieldvalue = Fieldvalue.split("~20").join(" ");
        }

        if (Fieldvalue.indexOf("~25") >= 0) {
            Fieldvalue = Fieldvalue.split("~25").join("%");
        }
        if (Fieldvalue.indexOf("~26") >= 0) {
            Fieldvalue = Fieldvalue.split("~26").join("&");
        }
        if (Fieldvalue.indexOf("~3D") >= 0) {
            Fieldvalue = Fieldvalue.split("~3D").join("=");
        }
        if (Fieldvalue.indexOf("~2F") >= 0) {
            Fieldvalue = Fieldvalue.split("~2F").join("/");
        }
        if (Fieldvalue.indexOf("~23") >= 0) {
            Fieldvalue = Fieldvalue.split("~23").join("#");
        }
        if (Fieldvalue.indexOf("~24") >= 0) {
            Fieldvalue = Fieldvalue.split("~24").join("$");
        }
        if (Fieldvalue.indexOf("~60") >= 0) {
            Fieldvalue = Fieldvalue.split("~60").join("`");
        }
        if (Fieldvalue.indexOf("~27") >= 0) {
            Fieldvalue = Fieldvalue.split("~27").join("‘");
        }
        if (Fieldvalue.indexOf("~3A") >= 0) {
            Fieldvalue = Fieldvalue.split("~3A").join(":");
        }
        if (Fieldvalue.indexOf("~3C") >= 0) {
            Fieldvalue = Fieldvalue.split("~3C").join("<");
        }
        if (Fieldvalue.indexOf("~3E") >= 0) {
            Fieldvalue = Fieldvalue.split("~3E").join(">");
        }
        if (Fieldvalue.indexOf("~5B") >= 0) {
            Fieldvalue = Fieldvalue.split("~5B").join("[");
        }
        if (Fieldvalue.indexOf("~5D") >= 0) {
            Fieldvalue = Fieldvalue.split("~5D").join("]");
        }
        if (Fieldvalue.indexOf("~7B") >= 0) {
            Fieldvalue = Fieldvalue.split("~7B").join("{");
        }
        if (Fieldvalue.indexOf("~7D") >= 0) {
            Fieldvalue = Fieldvalue.split("~7D").join("}");
        }
        if (Fieldvalue.indexOf("~22") >= 0) {
            Fieldvalue = Fieldvalue.split("~22").join("“");
        }
        if (Fieldvalue.indexOf("~2B") >= 0) {
            Fieldvalue = Fieldvalue.split("~2B").join("+");
        }
        if (Fieldvalue.indexOf("~25") >= 0) {
            Fieldvalue = Fieldvalue.split("~25").join("%");
        }
        if (Fieldvalue.indexOf("~40") >= 0) {
            Fieldvalue = Fieldvalue.split("~40").join("@");
        }
        if (Fieldvalue.indexOf("~3B") >= 0) {
            Fieldvalue = Fieldvalue.split("~3B").join(";");
        }
        if (Fieldvalue.indexOf("~3F") >= 0) {
            Fieldvalue = Fieldvalue.split("~3F").join("?");
        }
        if (Fieldvalue.indexOf("~5E") >= 0) {
            Fieldvalue = Fieldvalue.split("~5E").join("^");
        }
        if (Fieldvalue.indexOf("~7C") >= 0) {
            Fieldvalue = Fieldvalue.split("~7C").join("|");
        }
        if (Fieldvalue.indexOf("~2C") >= 0) {
            Fieldvalue = Fieldvalue.split("~2C").join(",");
        }


        return Fieldvalue;
    } else {
        return false;
    }

}

function cgenPageParamEncode(link) {
    if (link.indexOf("?pParam1=") >= 0) {
        link = link.replace("?pParam1=", "");
    }

    if (link.indexOf(" ") >= 0) {
        link = link.split(" ").join("~20");
    }
    if (link.indexOf("&") >= 0) {
        link = link.split("&").join("~26");
    }
    if (link.indexOf("=") >= 0) {
        link = link.split("=").join("~3D");
    }
    if (link.indexOf("/") >= 0) {
        link = link.split("/").join("~2F");
    }
    if (link.indexOf("%") >= 0) {
        link = link.split("%").join("~25");
    }
    if (link.indexOf("#") >= 0) {
        link = link.split("#").join("~23");
    }
    if (link.indexOf("$") >= 0) {
        link = link.split("$").join("~24");
    }
    if (link.indexOf("`") >= 0) {
        link = link.split("`").join("~60");
    }
    if (link.indexOf("‘") >= 0) {
        link = link.split("‘").join("~27");
    }
    if (link.indexOf(":") >= 0) {
        link = link.split(":").join("~3A");
    }
    if (link.indexOf("<") >= 0) {
        link = link.split("<").join("~3C");
    }
    if (link.indexOf(">") >= 0) {
        link = link.split(">").join("~3E");
    }
    if (link.indexOf("[") >= 0) {
        link = link.split("[").join("~5B");
    }
    if (link.indexOf("]") >= 0) {
        link = link.split("]").join("~5D");
    }
    if (link.indexOf("{") >= 0) {
        link = link.split("{").join("~7B");
    }
    if (link.indexOf("}") >= 0) {
        link = link.split("}").join("~7D");
    }
    if (link.indexOf("“") >= 0) {
        link = link.split("“").join("~22");
    }
    if (link.indexOf("+") >= 0) {
        link = link.split("+").join("~2B");
    }
    if (link.indexOf("@") >= 0) {
        link = link.split("@").join("~40");
    }
    if (link.indexOf(";") >= 0) {
        link = link.split(";").join("~3B");
    }
    if (link.indexOf("?") >= 0) {
        link = link.split("?").join("~3F");
    }
    if (link.indexOf("^") >= 0) {
        link = link.split("^").join("~5E");
    }
    if (link.indexOf("|") >= 0) {
        link = link.split("|").join("~7C");
    }
    if (link.indexOf(",") >= 0) {
        link = link.split(",").join("~2C");
    }

    link = "?pParam1=" + link;


    return link;
}