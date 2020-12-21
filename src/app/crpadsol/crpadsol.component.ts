import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRPADSOL business logic
import {
    COTPMOSOL,
    TOOLBAR,
    BASE
} from "./CRPADSOL_models";



// class CRPADSOL
@Component({
    selector: 'app-crpadsol',
    templateUrl: './crpadsol.component.html',
})
export class CrpadsolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTPMOSOL: COTPMOSOL = new COTPMOSOL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRPADSOL_whenMouseDoubleclick() {
        console.log("Entering CRPADSOL_whenMouseDoubleclick");
        console.log("Exiting CRPADSOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRPADSOL_preForm() {
        console.log("Entering CRPADSOL_preForm");
        console.log("Exiting CRPADSOL_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRPADSOL_whenNewFormInstance() {
        console.log("Entering CRPADSOL_whenNewFormInstance");
        //CRPADSOL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRPADSOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT S.SG_DESCRI
    //  INTO :COTPMOSOL.PMOSOL_CARGONDESC
    //  FROM SGCARGOS S 
    //  WHERE S.CARGO_CODIGO_N = :COTPMOSOL.PMOSOL_CARGON;
    //  
    // EXCEPTION WHEN NO_DATA_FOUND THEN :COTPMOSOL.PMOSOL_CARGONDESC := NULL;
    // END;
    //#endregion
    async CRPADSOL_cotpmosol_postQuery() {
        console.log("Entering CRPADSOL_cotpmosol_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("PMOSOL_CARGON", this.COTPMOSOL.PMOSOL_CARGON);
        // call REST API
        const result1 = await Rest.post("/crpadsol_cotpmosol/crpadsol_cotpmosol_postquery_query1", payload1);
        // get values from result
        this.COTPMOSOL.PMOSOL_CARGONDESC = result1[0].get("COTPMOSOL.PMOSOL_CARGONDESC");
        if (result1 == null || result1.length == 0) {

            this.COTPMOSOL.PMOSOL_CARGONDESC = null;
        }

        console.log("Exiting CRPADSOL_cotpmosol_postQuery");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRPADSOL_toolbar_whenButtonPressed() {
        console.log("Entering CRPADSOL_toolbar_whenButtonPressed");
        console.log("Exiting CRPADSOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRPADSOL_toolbar_whenMouseLeave() {
        console.log("Entering CRPADSOL_toolbar_whenMouseLeave");
        console.log("Exiting CRPADSOL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRPADSOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRPADSOL_toolbar_whenNewFormInstance");
        console.log("Exiting CRPADSOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRPADSOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRPADSOL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRPADSOL_base_fecha_whenNewItemInstance");
    }

}

