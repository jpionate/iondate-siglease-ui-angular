import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFERROR business logic
import {
    CRTERROR,
    TOOLBAR,
    BASE
} from "./CRFERROR_models";



// class CRFERROR
@Component({
    selector: 'app-crferror',
    templateUrl: './crferror.component.html',
})
export class CrferrorComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTERROR: CRTERROR = new CRTERROR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_whenMouseDoubleclick() {
        console.log("Entering CRFERROR_whenMouseDoubleclick");
        console.log("Exiting CRFERROR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_preForm() {
        console.log("Entering CRFERROR_preForm");
        console.log("Exiting CRFERROR_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_whenNewFormInstance() {
        console.log("Entering CRFERROR_whenNewFormInstance");
        console.log("Exiting CRFERROR_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT TIPERR_DESCRI
    //    INTO :CRTERROR.DESTIPO
    //  FROM CRTTIPERR
    //  WHERE TIPERR_CODIGO=:CRTERROR.ERR_TIPO;
    // END;
    //#endregion
    async CRFERROR_crterror_postQuery() {
        console.log("Entering CRFERROR_crterror_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("ERR_TIPO", this.CRTERROR.ERR_TIPO);
        // call REST API
        const result1 = await Rest.post("/crferror_crterror/crferror_crterror_postquery_query1", payload1);
        // get values from result
        this.CRTERROR.DESTIPO = result1[0].get("CRTERROR.DESTIPO");
        console.log("Exiting CRFERROR_crterror_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :CRTERROR.ERR_CODIGO IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(ERR_CODIGO,0))),000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   CRTERROR;
    //      :CRTERROR.ERR_CODIGO:= LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO DEL ERROR');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async CRFERROR_crterror_preInsert() {
        console.log("Entering CRFERROR_crterror_preInsert");
        let V_NUEVO_COD: number = null;
        if ((this.CRTERROR.ERR_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crferror_crterror/crferror_crterror_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.CRTERROR.ERR_CODIGO = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 3, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO DEL ERROR");
            }

        }
        console.log("Exiting CRFERROR_crterror_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  V_EXISTE      NUMBER(10);
    // 
    // BEGIN
    //  SELECT COUNT 
    //    INTO V_EXISTE
    //  FROM CRTTIPERR
    //  WHERE TIPERR_CODIGO=:CRTERROR.ERR_TIPO;
    // 
    //   IF V_EXISTE = 0 THEN
    //    LIB$ALERTA('MENSAJE','EL TIPO DE ERROR QUE INTENTA INGRESAR NO ESTA PARAMETRIZADO EN LA TABLA DE TIPOS DE ERROR. FAVOR VERIFIQUE.',NULL,NULL,NULL,T_RESPUESTA); 
    //   END IF;
    //   NEXT_ITEM;
    // END;
    //  
    //#endregion
    async CRFERROR_crterror_errTipo_keyNextItem() {
        console.log("Entering CRFERROR_crterror_errTipo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("ERR_TIPO", this.CRTERROR.ERR_TIPO);
        // call REST API
        const result1 = await Rest.post("/crferror_crterror/crferror_crterror_errtipo_keynextitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (V_EXISTE == 0) {
            //CRFERROR_LIB$ALERTA("MENSAJE", "EL TIPO DE ERROR QUE INTENTA INGRESAR NO ESTA PARAMETRIZADO EN LA TABLA DE TIPOS DE ERROR. FAVOR VERIFIQUE.", null, null, null, T_RESPUESTA);
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFERROR_crterror_errTipo_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_toolbar_whenButtonPressed() {
        console.log("Entering CRFERROR_toolbar_whenButtonPressed");
        console.log("Exiting CRFERROR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_toolbar_whenMouseLeave() {
        console.log("Entering CRFERROR_toolbar_whenMouseLeave");
        console.log("Exiting CRFERROR_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_toolbar_whenNewFormInstance() {
        console.log("Entering CRFERROR_toolbar_whenNewFormInstance");
        console.log("Exiting CRFERROR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFERROR_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFERROR_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFERROR_base_fecha_whenNewItemInstance");
    }

}

