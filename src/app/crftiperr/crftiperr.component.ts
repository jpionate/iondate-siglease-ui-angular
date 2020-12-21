import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTIPERR business logic
import {
    CRTTIPERR,
    TOOLBAR,
    BASE
} from "./CRFTIPERR_models";



// class CRFTIPERR
@Component({
    selector: 'app-crftiperr',
    templateUrl: './crftiperr.component.html',
})
export class CrftiperrComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTTIPERR: CRTTIPERR = new CRTTIPERR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_whenMouseDoubleclick() {
        console.log("Entering CRFTIPERR_whenMouseDoubleclick");
        console.log("Exiting CRFTIPERR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_preForm() {
        console.log("Entering CRFTIPERR_preForm");
        console.log("Exiting CRFTIPERR_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_whenNewFormInstance() {
        console.log("Entering CRFTIPERR_whenNewFormInstance");
        console.log("Exiting CRFTIPERR_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT AREA_DESCRI
    //    INTO :VAR_DESCRIP
    //  FROM CRTARECOM
    //  WHERE AREA_CODIGO = :TIPERR_AREA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :VAR_DESCRIP := NULL;
    // END;
    //#endregion
    async CRFTIPERR_crttiperr_postQuery() {
        console.log("Entering CRFTIPERR_crttiperr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TIPERR_AREA", this.CRTTIPERR.TIPERR_AREA);
        // call REST API
        const result1 = await Rest.post("/crftiperr_crttiperr/crftiperr_crttiperr_postquery_query1", payload1);
        // get values from result
        this.CRTTIPERR.VAR_DESCRIP = result1[0].get("VAR_DESCRIP");
        if (result1 == null || result1.length == 0) {

            this.CRTTIPERR.VAR_DESCRIP = null;
        }

        console.log("Exiting CRFTIPERR_crttiperr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :CRTTIPERR.TIPERR_CODIGO IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(TIPERR_CODIGO,0))),000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   CRTTIPERR;
    //      :CRTTIPERR.TIPERR_CODIGO:= LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO DEL ERROR');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async CRFTIPERR_crttiperr_preInsert() {
        console.log("Entering CRFTIPERR_crttiperr_preInsert");
        let V_NUEVO_COD: number = null;
        if ((this.CRTTIPERR.TIPERR_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crftiperr_crttiperr/crftiperr_crttiperr_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.CRTTIPERR.TIPERR_CODIGO = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 3, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO DEL ERROR");
            }

        }
        console.log("Exiting CRFTIPERR_crttiperr_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_toolbar_whenButtonPressed() {
        console.log("Entering CRFTIPERR_toolbar_whenButtonPressed");
        console.log("Exiting CRFTIPERR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_toolbar_whenMouseLeave() {
        console.log("Entering CRFTIPERR_toolbar_whenMouseLeave");
        console.log("Exiting CRFTIPERR_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTIPERR_toolbar_whenNewFormInstance");
        console.log("Exiting CRFTIPERR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPERR_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTIPERR_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFTIPERR_base_fecha_whenNewItemInstance");
    }

}

