import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFVALSOL business logic
import {
    COTPVASOL,
    TOOLBAR,
    BASE
} from "./CRFVALSOL_models";



// class CRFVALSOL
@Component({
    selector: 'app-crfvalsol',
    templateUrl: './crfvalsol.component.html',
})
export class CrfvalsolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTPVASOL: COTPVASOL = new COTPVASOL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFVALSOL_whenMouseDoubleclick() {
        console.log("Entering CRFVALSOL_whenMouseDoubleclick");
        console.log("Exiting CRFVALSOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFVALSOL_preForm() {
        console.log("Entering CRFVALSOL_preForm");
        console.log("Exiting CRFVALSOL_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFVALSOL_whenNewFormInstance() {
        console.log("Entering CRFVALSOL_whenNewFormInstance");
        //CRFVALSOL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFVALSOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT TIPBIEN_DESBIEN
    //       INTO :COTPVASOL.BIEN
    //      FROM CRTTIPBIEN
    //      WHERE TIPBIEN_CODBIEN = :COTPVASOL.PVASOL_TIPOBIE;
    // EXCEPTION WHEN NO_DATA_FOUND THEN  :COTPVASOL.BIEN := NULL;    
    // END;
    //#endregion
    async CRFVALSOL_cotpvasol_postQuery() {
        console.log("Entering CRFVALSOL_cotpvasol_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("PVASOL_TIPOBIE", this.COTPVASOL.PVASOL_TIPOBIE);
        // call REST API
        const result1 = await Rest.post("/crfvalsol_cotpvasol/crfvalsol_cotpvasol_postquery_query1", payload1);
        // get values from result
        this.COTPVASOL.BIEN = result1[0].get("COTPVASOL.BIEN");
        if (result1 == null || result1.length == 0) {

            this.COTPVASOL.BIEN = null;
        }

        console.log("Exiting CRFVALSOL_cotpvasol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //   V_MAXI NUMBER;
    // BEGIN 
    //  
    //   BEGIN
    //     SELECT MAX(PVASOL_CONSEC)
    //     INTO V_MAXI
    //     FROM COTPVASOL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_MAXI := 0;
    //   END;
    // 
    // 
    //    IF V_MAXI = 0  OR V_MAXI IS NULL THEN
    //       :COTPVASOL.PVASOL_CONSEC := 1 ;
    //    ELSE
    //       :COTPVASOL.PVASOL_CONSEC := V_MAXI+ 1 ;
    //    END IF;
    // 
    // 
    // END;
    //#endregion
    async CRFVALSOL_cotpvasol_preInsert() {
        console.log("Entering CRFVALSOL_cotpvasol_preInsert");
        let V_MAXI: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfvalsol_cotpvasol/crfvalsol_cotpvasol_preinsert_query1", payload1);
        // get values from result
        V_MAXI = result1[0].get("V_MAXI");
        if (result1 == null || result1.length == 0) {

            V_MAXI = 0;
        }

        if ((V_MAXI == 0 || (V_MAXI == null))) {
            this.COTPVASOL.PVASOL_CONSEC = 1;
        }
        else {
            this.COTPVASOL.PVASOL_CONSEC = V_MAXI + 1;
        }
        console.log("Exiting CRFVALSOL_cotpvasol_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFVALSOL_toolbar_whenButtonPressed() {
        console.log("Entering CRFVALSOL_toolbar_whenButtonPressed");
        console.log("Exiting CRFVALSOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFVALSOL_toolbar_whenMouseLeave() {
        console.log("Entering CRFVALSOL_toolbar_whenMouseLeave");
        console.log("Exiting CRFVALSOL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFVALSOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFVALSOL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFVALSOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFVALSOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFVALSOL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFVALSOL_base_fecha_whenNewItemInstance");
    }

}

