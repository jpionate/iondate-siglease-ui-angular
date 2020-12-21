import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTIEMPO business logic
import {
    CRTTIEMPO,
    TOOLBAR,
    BASE
} from "./CRFTIEMPO_models";



// class CRFTIEMPO
@Component({
    selector: 'app-crftiempo',
    templateUrl: './crftiempo.component.html',
})
export class CrftiempoComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTTIEMPO: CRTTIEMPO = new CRTTIEMPO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_whenMouseDoubleclick() {
        console.log("Entering CRFTIEMPO_whenMouseDoubleclick");
        console.log("Exiting CRFTIEMPO_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_preForm() {
        console.log("Entering CRFTIEMPO_preForm");
        console.log("Exiting CRFTIEMPO_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_whenNewFormInstance() {
        console.log("Entering CRFTIEMPO_whenNewFormInstance");
        console.log("Exiting CRFTIEMPO_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :CRTTIEMPO.TIEMPO_CODIGO IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(TIEMPO_CODIGO,0))),000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   CRTTIEMPO;
    //      :CRTTIEMPO.TIEMPO_CODIGO:= LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO DEL CÁLCULO.');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async CRFTIEMPO_crttiempo_preInsert() {
        console.log("Entering CRFTIEMPO_crttiempo_preInsert");
        let V_NUEVO_COD: number = null;
        if ((this.CRTTIEMPO.TIEMPO_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crftiempo_crttiempo/crftiempo_crttiempo_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.CRTTIEMPO.TIEMPO_CODIGO = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 3, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO DEL CÁLCULO.");
            }

        }
        console.log("Exiting CRFTIEMPO_crttiempo_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_toolbar_whenButtonPressed() {
        console.log("Entering CRFTIEMPO_toolbar_whenButtonPressed");
        console.log("Exiting CRFTIEMPO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_toolbar_whenMouseLeave() {
        console.log("Entering CRFTIEMPO_toolbar_whenMouseLeave");
        console.log("Exiting CRFTIEMPO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTIEMPO_toolbar_whenNewFormInstance");
        console.log("Exiting CRFTIEMPO_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIEMPO_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTIEMPO_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFTIEMPO_base_fecha_whenNewItemInstance");
    }

}

