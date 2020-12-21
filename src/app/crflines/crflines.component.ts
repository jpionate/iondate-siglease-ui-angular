import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFLINES business logic
import {
    TOOLBAR,
    COTTLINEST,
    BASE
} from "./CRFLINES_models";



// class CRFLINES
@Component({
    selector: 'app-crflines',
    templateUrl: './crflines.component.html',
})
export class CrflinesComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public COTTLINEST: COTTLINEST = new COTTLINEST();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFLINES_whenMouseDoubleclick() {
        console.log("Entering CRFLINES_whenMouseDoubleclick");
        console.log("Exiting CRFLINES_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFLINES_preForm() {
        console.log("Entering CRFLINES_preForm");
        console.log("Exiting CRFLINES_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFLINES_whenNewFormInstance() {
        console.log("Entering CRFLINES_whenNewFormInstance");
        //CRFLINES_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFLINES_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFLINES_toolbar_whenButtonPressed() {
        console.log("Entering CRFLINES_toolbar_whenButtonPressed");
        console.log("Exiting CRFLINES_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFLINES_toolbar_whenMouseLeave() {
        console.log("Entering CRFLINES_toolbar_whenMouseLeave");
        console.log("Exiting CRFLINES_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFLINES_toolbar_whenNewFormInstance() {
        console.log("Entering CRFLINES_toolbar_whenNewFormInstance");
        console.log("Exiting CRFLINES_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_CONSEC NUMBER;
    //  
    // BEGIN
    // 
    //  BEGIN
    //   SELECT MAX(LINEST_CONSEC)
    //   INTO V_CONSEC
    //   FROM COTTLINEST;
    //   
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CONSEC := 0;
    //  END;
    //  
    //  
    //  IF V_CONSEC IS NULL OR V_CONSEC = 0 THEN
    //    :COTTLINEST.LINEST_CONSEC := 0;
    //  ELSE 
    //    :COTTLINEST.LINEST_CONSEC :=V_CONSEC+1;
    //  END IF; 
    //  
    // 
    // 
    // END;
    //#endregion
    async CRFLINES_cottlinest_preInsert() {
        console.log("Entering CRFLINES_cottlinest_preInsert");
        let V_CONSEC: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crflines_cottlinest/crflines_cottlinest_preinsert_query1", payload1);
        // get values from result
        V_CONSEC = result1[0].get("V_CONSEC");
        if (result1 == null || result1.length == 0) {

            V_CONSEC = 0;
        }

        if (((V_CONSEC == null) || V_CONSEC == 0)) {
            this.COTTLINEST.LINEST_CONSEC = 0;
        }
        else {
            this.COTTLINEST.LINEST_CONSEC = V_CONSEC + 1;
        }
        console.log("Exiting CRFLINES_cottlinest_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFLINES_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFLINES_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFLINES_base_fecha_whenNewItemInstance");
    }

}

