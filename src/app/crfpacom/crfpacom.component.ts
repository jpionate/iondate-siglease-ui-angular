import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFPACOM business logic
import {
    CRTPACOM,
    VARIABLE,
    TOOLBAR,
    BASE
} from "./CRFPACOM_models";



// class CRFPACOM
@Component({
    selector: 'app-crfpacom',
    templateUrl: './crfpacom.component.html',
})
export class CrfpacomComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTPACOM: CRTPACOM = new CRTPACOM();
    public VARIABLE: VARIABLE = new VARIABLE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_whenMouseDoubleclick() {
        console.log("Entering CRFPACOM_whenMouseDoubleclick");
        console.log("Exiting CRFPACOM_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_preForm() {
        console.log("Entering CRFPACOM_preForm");
        console.log("Exiting CRFPACOM_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_whenNewFormInstance() {
        console.log("Entering CRFPACOM_whenNewFormInstance");
        console.log("Exiting CRFPACOM_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN MESSAGE('LA OPCION ESTA DESHABILITADA POR FAVOR USAR EL BOTON ACTUALIZAR.');
    // MESSAGE('LA OPCION ESTA DESHABILITADA POR FAVOR USAR EL BOTON ACTUALIZAR.'); END;
    //#endregion
    async CRFPACOM_keyCommit() {
        console.log("Entering CRFPACOM_keyCommit");
        this.oracleFormsBuiltins.message("LA OPCION ESTA DESHABILITADA POR FAVOR USAR EL BOTON ACTUALIZAR.");
        this.oracleFormsBuiltins.message("LA OPCION ESTA DESHABILITADA POR FAVOR USAR EL BOTON ACTUALIZAR.");
        console.log("Exiting CRFPACOM_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT  T.TERNOM ||' '|| T.TERAPE
    //  INTO :CRTPACOM.PACOM_NOMBRE
    //  FROM TER T 
    //  WHERE TERCOD= :CRTPACOM.PACOM_CODIGO;
    // EXCEPTION WHEN NO_DATA_FOUND THEN :CRTPACOM.PACOM_NOMBRE := NULL;
    // END;
    //#endregion
    async CRFPACOM_crtpacom_postQuery() {
        console.log("Entering CRFPACOM_crtpacom_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("PACOM_CODIGO", this.CRTPACOM.PACOM_CODIGO);
        // call REST API
        const result1 = await Rest.post("/crfpacom_crtpacom/crfpacom_crtpacom_postquery_query1", payload1);
        // get values from result
        this.CRTPACOM.PACOM_NOMBRE = result1[0].get("CRTPACOM.PACOM_NOMBRE");
        if (result1 == null || result1.length == 0) {

            this.CRTPACOM.PACOM_NOMBRE = null;
        }

        console.log("Exiting CRFPACOM_crtpacom_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTPACOM.PACOM_CFECHA := :VARIABLE.VFECHA;
    // :CRTPACOM.PACOM_CONSEC := :VARIABLE.VCONSEC; END;
    //#endregion
    async CRFPACOM_crtpacom_preInsert() {
        console.log("Entering CRFPACOM_crtpacom_preInsert");
        this.CRTPACOM.PACOM_CFECHA = this.VARIABLE.VFECHA;
        this.CRTPACOM.PACOM_CONSEC = parseInt(this.VARIABLE.VCONSEC);
        console.log("Exiting CRFPACOM_crtpacom_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //  
    //  IF (:VARIABLE.VFECHA IS NULL)  OR (:VARIABLE.VCONSEC IS NULL) THEN
    //   LIB$DTNERFRMA('LA FECHA Y EL CONSECUTIVO SON OBLIGATORIOS POR FAVOR INGRESARLOS.');
    //  ELSE
    //    PU_ACTULIZA_INTEGRANTES;
    //    
    //  END IF;
    // END;
    //#endregion
    async CRFPACOM_crtpacom_actulizar_whenButtonPressed() {
        console.log("Entering CRFPACOM_crtpacom_actulizar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (((this.VARIABLE.VFECHA == null) || (this.VARIABLE.VCONSEC == null))) {
            //CRFPACOM_LIB$DTNERFRMA("LA FECHA Y EL CONSECUTIVO SON OBLIGATORIOS POR FAVOR INGRESARLOS.");
        }
        else {
            //CRFPACOM_PU_ACTULIZA_INTEGRANTES();
        }
        console.log("Exiting CRFPACOM_crtpacom_actulizar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTIDAD NUMBER;
    //  V_CONSEC   NUMBER;
    // BEGIN
    // 
    //  BEGIN
    //   SELECT NVL(MAX(PACOM_CONSEC),0)
    //   INTO V_CANTIDAD
    //   FROM CRTPACOM
    //   WHERE PACOM_CFECHA = :VARIABLE.VFECHA;
    //  
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CONSEC := 0;
    //  END;
    // 
    // 
    //  IF V_CANTIDAD = 0 THEN 
    //  
    //    BEGIN
    //   SELECT NVL(MAX(PACOM_CONSEC),0)
    //   INTO V_CONSEC
    //   FROM CRTPACOM;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :VARIABLE.VCONSEC := 0;
    //  END;
    //    
    //     :VARIABLE.VCONSEC := V_CONSEC+1;
    //   
    //  ELSE  
    //    :VARIABLE.VCONSEC := V_CANTIDAD;
    //  
    //  END IF;
    // 
    // 
    //  
    //  GO_BLOCK('CRTPACOM');
    //  EXECUTE_QUERY;
    //  
    //  
    // END;
    //#endregion
    async CRFPACOM_variable_vfecha_keyNextItem() {
        console.log("Entering CRFPACOM_variable_vfecha_keyNextItem");
        let V_CANTIDAD: number = null;
        let V_CONSEC: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("VFECHA", this.VARIABLE.VFECHA);
        // call REST API
        const result1 = await Rest.post("/crfpacom_variable/crfpacom_variable_vfecha_keynextitem_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (result1 == null || result1.length == 0) {

            V_CONSEC = 0;
        }

        if (V_CANTIDAD == 0) {
            // construct payload
            let payload2 = new Map();
            // call REST API
            const result2 = await Rest.post("/crfpacom_variable/crfpacom_variable_vfecha_keynextitem_query2", payload2);
            // get values from result
            V_CONSEC = result2[0].get("V_CONSEC");
            if (result2 == null || result2.length == 0) {
                this.VARIABLE.VCONSEC = '0';
            }

            this.VARIABLE.VCONSEC = (V_CONSEC + 1).toString();
        }
        else {
            this.VARIABLE.VCONSEC = V_CANTIDAD.toString();
        }
        this.oracleFormsBuiltins.go_block("CRTPACOM");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFPACOM_variable_vfecha_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_toolbar_whenButtonPressed() {
        console.log("Entering CRFPACOM_toolbar_whenButtonPressed");
        console.log("Exiting CRFPACOM_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_toolbar_whenMouseLeave() {
        console.log("Entering CRFPACOM_toolbar_whenMouseLeave");
        console.log("Exiting CRFPACOM_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_toolbar_whenNewFormInstance() {
        console.log("Entering CRFPACOM_toolbar_whenNewFormInstance");
        console.log("Exiting CRFPACOM_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPACOM_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFPACOM_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFPACOM_base_fecha_whenNewItemInstance");
    }

}

