import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFMNSJE business logic
import {
    CRTMNSJES,
    TOOLBAR,
    BASE
} from "./CRFMNSJE_models";



// class CRFMNSJE
@Component({
    selector: 'app-crfmnsje',
    templateUrl: './crfmnsje.component.html',
})
export class CrfmnsjeComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTMNSJES: CRTMNSJES = new CRTMNSJES();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_whenMouseDoubleclick() {
        console.log("Entering CRFMNSJE_whenMouseDoubleclick");
        console.log("Exiting CRFMNSJE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_preForm() {
        console.log("Entering CRFMNSJE_preForm");
        console.log("Exiting CRFMNSJE_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_whenNewFormInstance() {
        console.log("Entering CRFMNSJE_whenNewFormInstance");
        console.log("Exiting CRFMNSJE_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :CRTMNSJES.MNS_CODIGO IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(MNS_CODIGO,0))),0000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   CRTMNSJES;
    //      :CRTMNSJES.MNS_CODIGO:= LPAD(TO_CHAR(V_NUEVO_COD),4,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO DEL MENSAJE');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async CRFMNSJE_crtmnsjes_preInsert() {
        console.log("Entering CRFMNSJE_crtmnsjes_preInsert");
        let V_NUEVO_COD: number = null;
        if ((this.CRTMNSJES.MNS_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crfmnsje_crtmnsjes/crfmnsje_crtmnsjes_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.CRTMNSJES.MNS_CODIGO = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 4, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO DEL MENSAJE");
            }

        }
        console.log("Exiting CRFMNSJE_crtmnsjes_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_toolbar_whenButtonPressed() {
        console.log("Entering CRFMNSJE_toolbar_whenButtonPressed");
        console.log("Exiting CRFMNSJE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_toolbar_whenMouseLeave() {
        console.log("Entering CRFMNSJE_toolbar_whenMouseLeave");
        console.log("Exiting CRFMNSJE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFMNSJE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFMNSJE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMNSJE_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFMNSJE_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFMNSJE_base_fecha_whenNewItemInstance");
    }

}

