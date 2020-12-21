import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTICTO business logic
import {
    TOOLBAR,
    CRTTIPCTO,
    BASE
} from "./CRFTICTO_models";



// class CRFTICTO
@Component({
    selector: 'app-crfticto',
    templateUrl: './crfticto.component.html',
})
export class CrftictoComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTTIPCTO: CRTTIPCTO = new CRTTIPCTO();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_whenMouseDoubleclick() {
        console.log("Entering CRFTICTO_whenMouseDoubleclick");
        console.log("Exiting CRFTICTO_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_preForm() {
        console.log("Entering CRFTICTO_preForm");
        console.log("Exiting CRFTICTO_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_whenNewFormInstance() {
        console.log("Entering CRFTICTO_whenNewFormInstance");
        console.log("Exiting CRFTICTO_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_toolbar_whenButtonPressed() {
        console.log("Entering CRFTICTO_toolbar_whenButtonPressed");
        console.log("Exiting CRFTICTO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_toolbar_whenMouseLeave() {
        console.log("Entering CRFTICTO_toolbar_whenMouseLeave");
        console.log("Exiting CRFTICTO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTICTO_toolbar_whenNewFormInstance");
        console.log("Exiting CRFTICTO_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :TIPCTO_TIPOCP NOT IN ('C' , 'P') THEN
    //      LIB$ALERTA('MENSAJE','TIPO DE OPCIÓN INVALIDA (C) CONTRATO / (P) PAGARE....',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //   
    //#endregion
    async CRFTICTO_crttipcto_tipctoTipocp_whenValidateItem() {
        console.log("Entering CRFTICTO_crttipcto_tipctoTipocp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["C", "P"].indexOf(this.CRTTIPCTO.TIPCTO_TIPOCP) != -1) {
            //CRFTICTO_LIB$ALERTA("MENSAJE", "TIPO DE OPCIÓN INVALIDA (C) CONTRATO / (P) PAGARE....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFTICTO_crttipcto_tipctoTipocp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTICTO_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTICTO_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFTICTO_base_fecha_whenNewItemInstance");
    }

}

