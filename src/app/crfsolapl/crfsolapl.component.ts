import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSOLAPL business logic
import {
    VARIABLE,
    TOOLBAR,
    BASE
} from "./CRFSOLAPL_models";



// class CRFSOLAPL
@Component({
    selector: 'app-crfsolapl',
    templateUrl: './crfsolapl.component.html',
})
export class CrfsolaplComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_whenMouseDoubleclick() {
        console.log("Entering CRFSOLAPL_whenMouseDoubleclick");
        console.log("Exiting CRFSOLAPL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_preForm() {
        console.log("Entering CRFSOLAPL_preForm");
        console.log("Exiting CRFSOLAPL_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_whenNewFormInstance() {
        console.log("Entering CRFSOLAPL_whenNewFormInstance");
        console.log("Exiting CRFSOLAPL_whenNewFormInstance");
    }

    async CRFSOLAPL_variable_keyDelrec() {
        // null;
    }

    async CRFSOLAPL_variable_keyNxtblk() {
        // null;
    }

    async CRFSOLAPL_variable_keyCrerec() {
        // null;
    }

    async CRFSOLAPL_variable_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :VARIABLE.V_UNIDAD IS NULL THEN --ARQUITECTURA 
    //  
    //       LIB$DTNERFRMA('POR FAVOR INGRESAR LA UNIDAD CORRESPONDIENTE.');
    //   
    //  ELSE
    //  
    //       UPDATE CRTSOLICR
    //          SET SOLICR_ESTSOL='SV', -- SE ACTUALIZA EL ESTADO SIN VIGENCIA
    //              SOLICR_USCRED=USER,
    //              SOLICR_FECREG=SYSDATE
    //        WHERE SOLICR_ESTSOL IN  ('AZ','AP','AC','RJ')-- ESTADO DE APLAZADA
    //          AND ADD_MONTHS(SOLICR_FECVIG,6) <=SYSDATE
    //          AND SOLICR_CODPRO <> 'FEX'
    //          AND SOLICR_CODUNI = :VARIABLE.V_UNIDAD --ARQUITECTURA
    //          ;
    //         COMMIT;
    //      LIB$ALERTA('MENSAJE','SOLICITUDES ACTUALIZADAS PROCESO FINALIZADO.......',NULL,NULL,NULL,T_RESPUESTA);
    // 
    // 
    //   END IF; --ARQUITECTURA
    // 
    // END;
    //#endregion
    async CRFSOLAPL_variable_procesar_whenButtonPressed() {
        console.log("Entering CRFSOLAPL_variable_procesar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.V_UNIDAD == null)) {
            //CRFSOLAPL_LIB$DTNERFRMA("POR FAVOR INGRESAR LA UNIDAD CORRESPONDIENTE.");
        }
        else {
            // construct payload
            let payload1 = new Map();
            //payload1.V_UNIDAD = V_UNIDAD;
            // call REST API
            const result1 = await Rest.post("/crfsolapl_variable/crfsolapl_variable_procesar_whenbuttonpressed_query1", payload1);
            //CRFSOLAPL_LIB$ALERTA("MENSAJE", "SOLICITUDES ACTUALIZADAS PROCESO FINALIZADO.......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLAPL_variable_procesar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //  
    //  IF :VARIABLE.V_UNIDAD IS NULL THEN --ARQUITECTURA 
    //  
    //       LIB$DTNERFRMA('POR FAVOR INGRESAR LA UNIDAD CORRESPONDIENTE.');
    //   
    //  ELSE
    //  
    //       UPDATE CRTSOLICR
    //          SET SOLICR_ESTSOL='SV', -- SE ACTUALIZA EL ESTADO SIN VIGENCIA
    //              SOLICR_USCRED=USER,
    //              SOLICR_FECREG=SYSDATE
    //        WHERE SOLICR_ESTSOL IN  ('AZ','AP','AC','RJ')-- ESTADO DE APLAZADA
    //          AND ADD_MONTHS(SOLICR_FECVIG,6) <=SYSDATE
    //          AND SOLICR_CODPRO <> 'FEX'
    //          AND SOLICR_CODUNI = :VARIABLE.V_UNIDAD --ARQUITECTURA
    //          ;
    //         COMMIT;
    //      LIB$ALERTA('MENSAJE','SOLICITUDES ACTUALIZADAS PROCESO FINALIZADO.......',NULL,NULL,NULL,T_RESPUESTA);
    // 
    // 
    //  END IF; --ARQUITECTURA
    // 
    // END;
    //#endregion
    async CRFSOLAPL_variable_procesar_whenMouseClick() {
        console.log("Entering CRFSOLAPL_variable_procesar_whenMouseClick");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.V_UNIDAD == null)) {
            //CRFSOLAPL_LIB$DTNERFRMA("POR FAVOR INGRESAR LA UNIDAD CORRESPONDIENTE.");
        }
        else {
            // construct payload
            let payload1 = new Map();
            //payload1.V_UNIDAD = : V_UNIDAD;
            // call REST API
            const result1 = await Rest.post("/crfsolapl_variable/crfsolapl_variable_procesar_whenmouseclick_query1", payload1);
            //CRFSOLAPL_LIB$ALERTA("MENSAJE", "SOLICITUDES ACTUALIZADAS PROCESO FINALIZADO.......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLAPL_variable_procesar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_toolbar_whenButtonPressed() {
        console.log("Entering CRFSOLAPL_toolbar_whenButtonPressed");
        console.log("Exiting CRFSOLAPL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_toolbar_whenMouseLeave() {
        console.log("Entering CRFSOLAPL_toolbar_whenMouseLeave");
        console.log("Exiting CRFSOLAPL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSOLAPL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFSOLAPL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLAPL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSOLAPL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFSOLAPL_base_fecha_whenNewItemInstance");
    }

}

