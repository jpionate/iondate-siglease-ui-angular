import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFDISTAS business logic
import {
    VARIABLE,
    TASAS,
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./CRFDISTAS_models";



// class CRFDISTAS
@Component({
    selector: 'app-crfdistas',
    templateUrl: './crfdistas.component.html',
})
export class CrfdistasComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public TASAS: TASAS = new TASAS();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_whenMouseDoubleclick() {
        console.log("Entering CRFDISTAS_whenMouseDoubleclick");
        console.log("Exiting CRFDISTAS_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN FRM$POST_FORM; END;
    //#endregion
    async CRFDISTAS_postForm() {
        console.log("Entering CRFDISTAS_postForm");
        //CRFDISTAS_FRM$POST_FORM();
        console.log("Exiting CRFDISTAS_postForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_preForm() {
        console.log("Entering CRFDISTAS_preForm");
        console.log("Exiting CRFDISTAS_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_whenNewFormInstance() {
        console.log("Entering CRFDISTAS_whenNewFormInstance");
        console.log("Exiting CRFDISTAS_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFDISTAS_variable_keyNxtblk() {
        console.log("Entering CRFDISTAS_variable_keyNxtblk");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFDISTAS_variable_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_TIPCRE,:CRTSOLICR.SOLICR_CODSOL,'Q'); END;
    //#endregion
    async CRFDISTAS_variable_btnVerDetalle_whenMouseClick() {
        console.log("Entering CRFDISTAS_variable_btnVerDetalle_whenMouseClick");
        //CRFDISTAS_PU_LLAMAR_SOLICITUD(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_TIPCRE, this.CRTSOLICR.SOLICR_CODSOL, "Q");
        console.log("Exiting CRFDISTAS_variable_btnVerDetalle_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE 
    //   T_RESPUESTA NUMBER;
    // BEGIN
    //   :TASAS.VAR_VLRTA := FBD_COL_TASAEFTASANOM(:SOLICR_PUNTS$,:SOLICR_FAPRCR,:SOLICR_TPESOS);
    //   :TASAS.VAR_VLREF := FBD_COL_TASADTFTASAEFE(:TASAS.VAR_VLRTA,:SOLICR_FAPRCR);
    //   GO_ITEM('VAR_VLRDTF');
    // END;
    //#endregion
    async CRFDISTAS_variable_btnCalculos_whenMouseClick() {
        console.log("Entering CRFDISTAS_variable_btnCalculos_whenMouseClick");
        let T_RESPUESTA: number = null;
        // this.TASAS.VAR_VLRTA = FBD_COL_TASAEFTASANOM(SOLICR_PUNTS, SOLICR_FAPRCR, SOLICR_TPESOS);
        // this.TASAS.VAR_VLREF = FBD_COL_TASADTFTASAEFE(TASAS.VAR_VLRTA, SOLICR_FAPRCR);
        this.oracleFormsBuiltins.go_item("VAR_VLRDTF");
        console.log("Exiting CRFDISTAS_variable_btnCalculos_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // GO_ITEM('CRTSOLICR.SOLICR_TASA'); END;
    //#endregion
    async CRFDISTAS_variable_btnCondFin_whenMouseClick() {
        console.log("Entering CRFDISTAS_variable_btnCondFin_whenMouseClick");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TASA");
        console.log("Exiting CRFDISTAS_variable_btnCondFin_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlrdtf_whenValidateItem() {
        console.log("Entering CRFDISTAS_tasas_varVlrdtf_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_tasas/crfdistas_tasas_varvlrdtf_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        if ((this.CRTSOLICR.SOLICR_TASA && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_tasas_varVlrdtf_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlrdtf_postTextItem() {
        console.log("Entering CRFDISTAS_tasas_varVlrdtf_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        console.log("Exiting CRFDISTAS_tasas_varVlrdtf_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlref_whenValidateItem() {
        console.log("Entering CRFDISTAS_tasas_varVlref_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_tasas/crfdistas_tasas_varvlref_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        if ((this.CRTSOLICR.SOLICR_TASA && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_tasas_varVlref_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlref_postTextItem() {
        console.log("Entering CRFDISTAS_tasas_varVlref_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_tasas_varVlref_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlrdef_whenValidateItem() {
        console.log("Entering CRFDISTAS_tasas_varVlrdef_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_tasas/crfdistas_tasas_varvlrdef_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        // if ((this.CRTSOLICR.SOLICR_TASA < GLOBAL.VALOR_ANTERIOR && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
        //     //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
        //     this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFDISTAS_tasas_varVlrdef_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlrdef_postTextItem() {
        console.log("Entering CRFDISTAS_tasas_varVlrdef_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_tasas_varVlrdef_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   :TASAS.VAR_TANW  := FBD_COL_TASAEFTASANOM(:TASAS.VAR_SPREDNW, :VAR_FAPRCR,:SOLICR_TPESOS);
    //   :TASAS.VAR_DEFNW := FBD_COL_TASADTFTASAEFE(:TASAS.VAR_TANW,:VAR_FAPRCR);
    // END;
    //#endregion
    async CRFDISTAS_tasas_varSprednw_keyNextItem() {
        console.log("Entering CRFDISTAS_tasas_varSprednw_keyNextItem");
        // this.TASAS.VAR_TANW = FBD_COL_TASAEFTASANOM(TASAS.VAR_SPREDNW, VAR_FAPRCR, SOLICR_TPESOS);
        // this.TASAS.VAR_DEFNW = FBD_COL_TASADTFTASAEFE(TASAS.VAR_TANW, VAR_FAPRCR);
        console.log("Exiting CRFDISTAS_tasas_varSprednw_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlrta_whenValidateItem() {
        console.log("Entering CRFDISTAS_tasas_varVlrta_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_tasas/crfdistas_tasas_varvlrta_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        if ((this.CRTSOLICR.SOLICR_TASA && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_tasas_varVlrta_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_tasas_varVlrta_postTextItem() {
        console.log("Entering CRFDISTAS_tasas_varVlrta_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_tasas_varVlrta_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_tasas_varDefnw_whenValidateItem() {
        console.log("Entering CRFDISTAS_tasas_varDefnw_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_tasas/crfdistas_tasas_vardefnw_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        if ((this.CRTSOLICR.SOLICR_TASA && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_tasas_varDefnw_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_tasas_varDefnw_postTextItem() {
        console.log("Entering CRFDISTAS_tasas_varDefnw_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_tasas_varDefnw_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_tasas_varTanw_whenValidateItem() {
        console.log("Entering CRFDISTAS_tasas_varTanw_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_tasas/crfdistas_tasas_vartanw_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        if ((this.CRTSOLICR.SOLICR_TASA && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_tasas_varTanw_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_tasas_varTanw_postTextItem() {
        console.log("Entering CRFDISTAS_tasas_varTanw_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_tasas_varTanw_postTextItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK  ('CRTSOLICR');
    // HIDE_VIEW ('CALCULOS'); END;
    //#endregion
    async CRFDISTAS_tasas_vRegresar_whenButtonPressed() {
        console.log("Entering CRFDISTAS_tasas_vRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.hide_view("CALCULOS");
        console.log("Exiting CRFDISTAS_tasas_vRegresar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.OFICINA   := :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.SOLICITUD := :CRTSOLICR.SOLICR_CODSOL;
    // --:CRTSOLICR.VRAPCR    := :CRTSOLICR.SOLICR_VRFINCR; END;
    //#endregion
    async CRFDISTAS_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFDISTAS_crtsolicr_whenNewRecordInstance");
        this.VARIABLE.OFICINA = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICITUD = this.CRTSOLICR.SOLICR_CODSOL;
        console.log("Exiting CRFDISTAS_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO  := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFDISTAS_crtsolicr_postTextItem() {
        console.log("Entering CRFDISTAS_crtsolicr_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFDISTAS_crtsolicr_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_keyEntqry() {
        console.log("Entering CRFDISTAS_crtsolicr_keyEntqry");
        console.log("Exiting CRFDISTAS_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFDISTAS_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFDISTAS_crtsolicr_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFDISTAS_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_keyClrblk() {
        console.log("Entering CRFDISTAS_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     //CRFDISTAS_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFDISTAS_crtsolicr_keyClrblk");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN', "VISIBLE") = 'FALSE' THEN
    //    UP;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFDISTAS_crtsolicr_keyUp() {
        console.log("Entering CRFDISTAS_crtsolicr_keyUp");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.up();
        }
        else {
        }
        console.log("Exiting CRFDISTAS_crtsolicr_keyUp");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFDISTAS_crtsolicr_keyCommit() {
        console.log("Entering CRFDISTAS_crtsolicr_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFDISTAS_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   :CRTSOLICR.NOMBRE := PU_NOMBRE_TERCERO(:CRTSOLICR.SOLICR_NITTER);
    //   :VARIABLE.NOM_USU := FRM$NOMBRE_USUARIO(:CRTSOLICR.SOLICR_USCIAL);
    //   :CRTSOLICR.COMERCIAL := PU_NOMBRE_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // --  :TASAS.VAR_VLRDTF := PU_VALOR_DTF (:SOLICR_FAPRCR,'DTF');
    // --  :TASAS.VAR_VLRDEF := PU_VALOR_DEF (:SOLICR_FAPRCR,'DEF');
    // --NULL;
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_postQuery() {
        console.log("Entering CRFDISTAS_crtsolicr_postQuery");
        // this.CRTSOLICR.NOMBRE = PU_NOMBRE_TERCERO(this.CRTSOLICR.SOLICR_NITTER);
        // this.VARIABLE.NOM_USU = FRM$NOMBRE_USUARIO(this.CRTSOLICR.SOLICR_USCIAL);
        // this.CRTSOLICR.COMERCIAL = PU_NOMBRE_CIAL(this.CRTSOLICR.SOLICR_USCIAL);
        console.log("Exiting CRFDISTAS_crtsolicr_postQuery");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN', "VISIBLE") = 'FALSE' THEN
    //    DOWN;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFDISTAS_crtsolicr_keyDown() {
        console.log("Entering CRFDISTAS_crtsolicr_keyDown");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        else {
        }
        console.log("Exiting CRFDISTAS_crtsolicr_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //  IF :SOLICR_TDOLAR IS NOT NULL THEN
    //   BEGIN
    //     SELECT TINDES
    //      INTO DESC1
    //     FROM TIN
    //     WHERE TINCOD=:SOLICR_TDOLAR;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //  END IF; 
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TDOLAR", this.CRTSOLICR.SOLICR_TDOLAR);
            // call REST API
            const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                //CRFDISTAS_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrTdolar_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_INTVEN IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TINDES
    //      INTO DESC1
    //      FROM TIN
    //     WHERE TINCOD=:SOLICR_INTVEN;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END  IF; END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrIntven_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_INTVEN != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_INTVEN", this.CRTSOLICR.SOLICR_INTVEN);
                // call REST API
                const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    //CRFDISTAS_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrIntven_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  W_VRORIG      NUMBER;
    //  W_DISMIN      NUMBER;
    //  W_MODIF       VARCHAR2(1);
    //  T_RESPUESTA   NUMBER;
    //  V_PARAM       NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :CRTSOLICR.SOLICR_FINAGP;
    //   W_DISMIN  := :VRORIG-(V_PARAM);
    // 
    //  IF  :CRTSOLICR.SOLICR_FINAGP IS NULL THEN
    //    IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) < W_DISMIN THEN
    //        LIB$ALERTA('MENSAJE','NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);     
    //        :CRTSOLICR.SOLICR_FINAGP := :GLOBAL.VALOR_ANTERIOR;     
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    :CRTSOLICR.SOLICR_FINAGP := NULL;  
    //  ELSE
    // --  LIB$ALERTA('MENSAJE','LA SOLICITUD YA FUE DISMINUIDA ANTERIORMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;     
    // --  RAISE FORM_TRIGGER_FAILURE;
    //  END IF;  
    // END; 
    //#endregion
    async CRFDISTAS_crtsolicr_solicrFinagp_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrFinagp_whenValidateItem");
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_MODIF: string = null;
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrfinagp_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        W_VRORIG = this.CRTSOLICR.SOLICR_FINAGP;
        W_DISMIN = this.CRTSOLICR.VRORIG - (V_PARAM);
        if ((this.CRTSOLICR.SOLICR_FINAGP == null)) {
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP < W_DISMIN) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_FINAGP = this.GLOBAL.VALOR_ANTERIOR;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this.CRTSOLICR.SOLICR_FINAGP = null;
        }
        else {
            // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrFinagp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    //    W_INDICA    CONSTANT CRTTOPSOL.TOPSOL_INDICA%TYPE := 'A';
    //    W_CODIGO    CONSTANT CRTTOPSOL.TOPSOL_CODIGO%TYPE := '03';
    // BEGIN
    //   BEGIN
    //     SELECT (TOPSOL_VLRTOP*30)
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = W_INDICA
    //      AND  TOPSOL_CODIGO = W_CODIGO;
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := V_PARAM;
    // 
    //   IF :CRTSOLICR.SOLICR_PLAZO > :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_PLAZO > V_PARAM   
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO VALOR DEL PLAZO DEBE SER MENOR QUE EL VALOR DE PARAMETRO. REVISE, EL PLAZO A MEJORAR ES: '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PLAZO  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    //   /*IF :CRTSOLICR.SOLICR_PLAZO < :GLOBAL.VALOR_ANTERIOR 
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO VALOR DEL PLAZO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE, EL PLAZO A MEJORAR ES: '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PLAZO  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // */
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrPlazo_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrPlazo_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_INDICA: string = 'A';
        let W_CODIGO: string = '03';
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrplazo_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = V_PARAM;
        if ((this.CRTSOLICR.SOLICR_PLAZO && this.CRTSOLICR.SOLICR_PLAZO > V_PARAM)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO VALOR DEL PLAZO DEBE SER MENOR QUE EL VALOR DE PARAMETRO. REVISE, EL PLAZO A MEJORAR ES: " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PLAZO = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrPlazo_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE   --PETICIÓN DE MARCELA CORTES PARA QUE NO REALICE NINGÚN TIPO DE VALIDACIÓN LDB-JULIO 30-2002
    //    --SE HABILITA LA OPCIÓN SI CAMBIA LA TASA POR REQUERIMIENTO DE YOLANDA PARRA RTG - JULIO 8 -2004
    // 
    //    T_RESPUESTA  NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    // IF :CRTSOLICR.SOLICR_SPTVEN IS NOT NULL AND
    //    :CRTSOLICR.SOLICR_SPTVEN < 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MENOR QUE CERO '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_SPTVEN := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_SPTVEN  <  W_DISMIN --:GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MENOR QUE EL VALOR ANTERIOR MENOS LOS PUNTOS PARAMETRIZADOS DE DISMINUCIÓN. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_SPTVEN := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_SPTVEN  > :GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_SPTVEN := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrSptven_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrSptven_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrsptven_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_SPTVEN != null) && this.CRTSOLICR.SOLICR_SPTVEN < 0)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MENOR QUE CERO " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_SPTVEN = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (this.CRTSOLICR.SOLICR_SPTVEN < W_DISMIN) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MENOR QUE EL VALOR ANTERIOR MENOS LOS PUNTOS PARAMETRIZADOS DE DISMINUCIÓN. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_SPTVEN = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (this.CRTSOLICR.SOLICR_SPTVEN) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_SPTVEN = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrSptven_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE   
    //    T_RESPUESTA  NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    // IF :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL AND
    //    :CRTSOLICR.SOLICR_PTOUS$ < 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER MENOR QUE CERO '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PTOUS$ := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // 
    // IF :CRTSOLICR.SOLICR_PUNTS$ IS NULL AND
    //    :CRTSOLICR.SOLICR_PTOUS$  <  W_DISMIN 
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPRED US $ NO DEBE SER MENOR QUE EL VALOR ANTERIOR MENOS LOS PUNTOS PARAMETRIZADOS DE DISMINUCIÓN. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PTOUS$ := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_PUNTS$ IS NULL AND
    //    :CRTSOLICR.SOLICR_PTOUS$  > :GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PTOUS$ := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_PUNTS$ IS NULL AND
    //    :GLOBAL.VALOR_ANTERIOR IS NOT NULL AND 
    //    :CRTSOLICR.SOLICR_PTOUS$ IS NULL 
    // THEN
    //    LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER NULO POR QUE TENÍA PORCENTAJE DE SPREAD US $ '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //    :CRTSOLICR.SOLICR_PTOUS$ := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //    RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrPtous$_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrPtous$_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrptous$_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_PTOUS$ != null) && this.CRTSOLICR.SOLICR_PTOUS$ < 0)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER MENOR QUE CERO " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PTOUS$ = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_PUNTS$ == null) && this.CRTSOLICR.SOLICR_PTOUS$ < W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPRED US $ NO DEBE SER MENOR QUE EL VALOR ANTERIOR MENOS LOS PUNTOS PARAMETRIZADOS DE DISMINUCIÓN. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PTOUS$ = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_PUNTS$ == null) && this.CRTSOLICR.SOLICR_PTOUS$)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PTOUS$ = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_PUNTS$ == null) && (this.CRTSOLICR.SOLICR_PTOUS$ == null))) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER NULO POR QUE TENÍA PORCENTAJE DE SPREAD US $ " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PTOUS$ = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrPtous$_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF NVL(:CRTSOLICR.SOLICR_CONEXT, 0) < :GLOBAL.VALOR_ANTERIOR THEN
    //       LIB$ALERTA('MENSAJE','EL VALOR DEL CANON EXTRAORDINARIO NO DEBE SER MENOR QUE EL VALOR ANTERIOR '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //     
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrConext_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL VALOR DEL CANON EXTRAORDINARIO NO DEBE SER MENOR QUE EL VALOR ANTERIOR " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrConext_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrConext_postChange() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrConext_postChange");
        if ((this.CRTSOLICR.SOLICR_ORMONET == "PE" && (this.CRTSOLICR.SOLICR_ORMONUS$ == "PE" || (this.CRTSOLICR.SOLICR_ORMONUS$ == null)))) {
            this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - PLSQLBuiltins.nvl(this.CRTSOLICR.SOLICR_CONEXT, 0);
        }
        else {
            this.CRTSOLICR.SOLICR_VRFINA = 0;
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrConext_postChange");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrConext_keyCommit() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrConext_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFDISTAS_crtsolicr_solicrConext_keyCommit");
    }

    //#region PLSQL
    // BEGIN --   FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    //     :CRTSOLICR.COMERCIAL := PU_NOMBRE_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF; END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrUscial_postTextItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrUscial_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.CRTSOLICR.COMERCIAL = PU_NOMBRE_CIAL(this.CRTSOLICR.SOLICR_USCIAL);
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrUscial_postTextItem");
    }

    //#region PLSQL
    // DECLARE   
    // 
    //    T_RESPUESTA  NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    // IF :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL AND
    //    :CRTSOLICR.SOLICR_PUNTS$ < 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER MENOR QUE CERO '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PUNTS$ := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_TASA IS NULL AND
    //    :CRTSOLICR.SOLICR_PUNTS$  <  W_DISMIN --:GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER MENOR QUE EL VALOR ANTERIOR MENOS LOS PUNTOS PARAMETRIZADOS DE DISMINUCIÓN. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PUNTS$ := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_TASA IS NULL AND
    //    :CRTSOLICR.SOLICR_PUNTS$  > :GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PUNTS$ := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // /*IF :CRTSOLICR.SOLICR_TASA IS NULL AND
    //    :GLOBAL.VALOR_ANTERIOR IS NOT NULL AND 
    //    :CRTSOLICR.SOLICR_PUNTS$ IS NULL 
    // THEN
    //   LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER NULO POR QUE TENÍA PORCENTAJE DE SPREAD '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PUNTS$ := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;*/
    // 
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrPunts$_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrPunts$_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrpunts$_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_PUNTS$ != null) && this.CRTSOLICR.SOLICR_PUNTS$ < 0)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER MENOR QUE CERO " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PUNTS$ = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_TASA == null) && this.CRTSOLICR.SOLICR_PUNTS$ < W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER MENOR QUE EL VALOR ANTERIOR MENOS LOS PUNTOS PARAMETRIZADOS DE DISMINUCIÓN. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PUNTS$ = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_TASA == null) && this.CRTSOLICR.SOLICR_PUNTS$)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE SPREAD NO DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_PUNTS$ = PLSQLBuiltins.to_number(GLOBAL.VALOR_ANTERIOR == null ? 0 : GLOBAL.VALOR_ANTERIOR);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrPunts$_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  W_VRORIG      NUMBER;
    //  W_AUMENTO     NUMBER :=0;
    //  W_MODIF       VARCHAR2(1);
    //  T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //  W_VRORIG  := :CRTSOLICR.SOLICR_VRFINCR;
    //  W_AUMENTO := :VRORIG+(:CRTSOLICR.VRORIG*0.05);
    // -- MESSAGE ('ACTUALIZADO ' ||:CRTSOLICR.SOLICR_AUMEAP);PAUSE;
    // -- MESSAGE ('DIGITADO ' ||TO_CHAR(:CRTSOLICR.VRAPCR));PAUSE;
    // -- MESSAGE ('AUMENTO  ' ||TO_CHAR(W_AUMENTO));PAUSE;
    // -- MESSAGE ('ORIGEN   ' ||TO_CHAR(:CRTSOLICR.VRORIG));PAUSE;
    //  IF  :CRTSOLICR.SOLICR_AUMEAP IS NULL THEN
    //   IF :CRTSOLICR.SOLICR_VRFINCR > W_AUMENTO THEN
    //      LIB$ALERTA('MENSAJE','NO ES PERMITIDO AUMENTAR MAS DEL 5% DEL VALOR APROBADO EN COMITE',NULL,NULL,NULL,T_RESPUESTA);
    //      :CRTSOLICR.SOLICR_VRFINCR := :CRTSOLICR.VRAPCR;  
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CRTSOLICR.SOLICR_VRFINCR = 0 THEN
    //      :CRTSOLICR.SOLICR_VRFINCR := :CRTSOLICR.VRAPCR;  
    //      :CRTSOLICR.VRAPCR := :CRTSOLICR.VRAPCR; 
    //      LIB$ALERTA('MENSAJE','EL VALOR APROBADO NO PUEDE SER CERO..',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   :CRTSOLICR.SOLICR_AUMEAP := NULL;  
    //  ELSE
    //   LIB$ALERTA('MENSAJE','LA SOLICITUD YA FUE INCREMENTADA ANTERIORMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   :CRTSOLICR.SOLICR_VRFINCR := :CRTSOLICR.VRAPCR;  
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //   
    //  END; 
    //#endregion
    async CRFDISTAS_crtsolicr_solicrVrfincr_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrVrfincr_whenValidateItem");
        let W_VRORIG: number = null;
        let W_AUMENTO: number = 0;
        let W_MODIF: string = null;
        let T_RESPUESTA: number = null;
        W_VRORIG = this.CRTSOLICR.SOLICR_VRFINCR;
        // W_AUMENTO = this.VRORIG + (this.CRTSOLICR.VRORIG * 0.05);
        if ((this.CRTSOLICR.SOLICR_AUMEAP == null)) {
            if (this.CRTSOLICR.SOLICR_VRFINCR > W_AUMENTO) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO AUMENTAR MAS DEL 5% DEL VALOR APROBADO EN COMITE", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.VRAPCR;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else if (this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.VRAPCR;
                this.CRTSOLICR.VRAPCR = this.CRTSOLICR.VRAPCR;
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL VALOR APROBADO NO PUEDE SER CERO..", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this.CRTSOLICR.SOLICR_AUMEAP = null;
        }
        else {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "LA SOLICITUD YA FUE INCREMENTADA ANTERIORMENTE", null, null, null, T_RESPUESTA);
            this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.VRAPCR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrVrfincr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR.SOLICR_MONTO  := :CRTSOLICR.SOLICR_VRFINCR;
    // :CRTSOLICR.SOLICR_VRFINA := NVL(:CRTSOLICR.SOLICR_VRFINCR,0)- NVL(:CRTSOLICR.SOLICR_CONEXT,0); END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrVrfincr_postChange() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrVrfincr_postChange");
        this.CRTSOLICR.SOLICR_MONTO = this.CRTSOLICR.SOLICR_VRFINCR;
        this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR - this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT;
        console.log("Exiting CRFDISTAS_crtsolicr_solicrVrfincr_postChange");
    }

    //#region PLSQL
    // DECLARE
    //  W_VRORIG      NUMBER;
    //  W_DISMIN      NUMBER;
    //  W_MODIF       VARCHAR2(1);
    //  T_RESPUESTA   NUMBER;
    //  V_PARAM       NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :CRTSOLICR.SOLICR_FNGP;
    //   W_DISMIN  := :VRORIG-(V_PARAM);
    // 
    //  IF  :CRTSOLICR.SOLICR_FNGP IS NULL THEN
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) < W_DISMIN THEN
    //        LIB$ALERTA('MENSAJE','NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);     
    //        :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;     
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    :CRTSOLICR.SOLICR_FNGP := NULL;  
    //  ELSE
    //   LIB$ALERTA('MENSAJE','LA SOLICITUD YA FUE DISMINUIDA ANTERIORMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;     
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END IF;  
    // END; 
    //#endregion
    async CRFDISTAS_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrFngp_whenValidateItem");
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_MODIF: string = null;
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrfngp_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        W_VRORIG = this.CRTSOLICR.SOLICR_FNGP;
        W_DISMIN = this.CRTSOLICR.VRORIG - (V_PARAM);
        if ((this.CRTSOLICR.SOLICR_FNGP == null)) {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < W_DISMIN) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
                // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this.CRTSOLICR.SOLICR_FNGP = null;
        }
        else {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "LA SOLICITUD YA FUE DISMINUIDA ANTERIORMENTE", null, null, null, T_RESPUESTA);
            // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrFngp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_BCODXP IS NULL THEN
    //    LIB$ALERTA('MENSAJE','DEBE EXISTIR VALOR DE REDESCENTO CON BANCOLDEX',NULL,NULL,NULL,T_RESPUESTA);
    //    :CRTSOLICR.SOLICR_TBCOLDX:=NULL;
    //   END IF;
    // END;
    //    
    //#endregion
    async CRFDISTAS_crtsolicr_solicrTbcoldx_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrTbcoldx_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_BCODXP == null)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "DEBE EXISTIR VALOR DE REDESCENTO CON BANCOLDEX", null, null, null, T_RESPUESTA);
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrTbcoldx_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  W_VRORIG      NUMBER;
    //  W_DISMIN      NUMBER;
    //  W_MODIF       VARCHAR2(1);
    //  T_RESPUESTA   NUMBER;
    //  V_PARAM       NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :CRTSOLICR.SOLICR_FNGP;
    //   W_DISMIN  := :VRORIG-(V_PARAM);
    // 
    //  IF  :CRTSOLICR.SOLICR_BCODXP IS NULL THEN
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) < W_DISMIN THEN
    //        LIB$ALERTA('MENSAJE','NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);     
    //        :CRTSOLICR.SOLICR_BCODXP := :GLOBAL.VALOR_ANTERIOR;     
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    :CRTSOLICR.SOLICR_BCODXP := NULL;  
    //  ELSE
    // --  LIB$ALERTA('MENSAJE','LA SOLICITUD YA FUE DISMINUIDA ANTERIORMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;     
    // --  RAISE FORM_TRIGGER_FAILURE;
    //  END IF;  
    // END; 
    //#endregion
    async CRFDISTAS_crtsolicr_solicrBcodxp_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrBcodxp_whenValidateItem");
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_MODIF: string = null;
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrbcodxp_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        W_VRORIG = this.CRTSOLICR.SOLICR_FNGP;
        W_DISMIN = this.CRTSOLICR.VRORIG - (V_PARAM);
        if ((this.CRTSOLICR.SOLICR_BCODXP == null)) {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP < W_DISMIN) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_BCODXP = this.GLOBAL.VALOR_ANTERIOR;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this.CRTSOLICR.SOLICR_BCODXP = null;
        }
        else {
            // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrBcodxp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    // 
    // BEGIN
    // 
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :GLOBAL.VALOR_ANTERIOR;
    //   W_DISMIN  := W_VRORIG-(V_PARAM);
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_TASA < :GLOBAL.VALOR_ANTERIOR AND
    //      :CRTSOLICR.SOLICR_TASA > W_DISMIN  
    //   THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_TASA  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrtasa_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        // W_VRORIG = this.GLOBAL.VALOR_ANTERIOR;
        W_DISMIN = W_VRORIG - V_PARAM;
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        if ((this.CRTSOLICR.SOLICR_TASA && this.CRTSOLICR.SOLICR_TASA > W_DISMIN)) {
            //CRFDISTAS_LIB$ALERTA("MENSAJE", "EL NUEVO PORCENTAJE DE TASA FIJA NO DEBE SER MAYOR QUE EL VALOR DE PARAMETRO. REVISE EL PORCENTAJE " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            // this.CRTSOLICR.SOLICR_TASA = this.GLOBAL.VALOR_ANTERIOR;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // 
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    // 
    //     
    // END;
    //#endregion
    async CRFDISTAS_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrTasa_postTextItem");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            //CRFDISTAS_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //CRFDISTAS_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  W_VRORIG      NUMBER;
    //  W_DISMIN      NUMBER;
    //  W_MODIF       VARCHAR2(1);
    //  T_RESPUESTA   NUMBER;
    //  V_PARAM       NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :CRTSOLICR.SOLICR_FINDTP;
    //   W_DISMIN  := :VRORIG-(V_PARAM);
    // 
    //  IF  :CRTSOLICR.SOLICR_FINDTP IS NULL THEN
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) < W_DISMIN THEN
    //        LIB$ALERTA('MENSAJE','NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);     
    //        :CRTSOLICR.SOLICR_FINDTP := :GLOBAL.VALOR_ANTERIOR;     
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    :CRTSOLICR.SOLICR_FINDTP := NULL;  
    //  ELSE
    // --  LIB$ALERTA('MENSAJE','LA SOLICITUD YA FUE DISMINUIDA ANTERIORMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;     
    // --  RAISE FORM_TRIGGER_FAILURE;
    //  END IF;  
    // END; 
    //#endregion
    async CRFDISTAS_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrFindtp_whenValidateItem");
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_MODIF: string = null;
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrfindtp_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        W_VRORIG = this.CRTSOLICR.SOLICR_FINDTP;
        W_DISMIN = this.CRTSOLICR.VRORIG - (V_PARAM);
        if ((this.CRTSOLICR.SOLICR_FINDTP == null)) {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP < W_DISMIN) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_FINDTP = this.GLOBAL.VALOR_ANTERIOR;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this.CRTSOLICR.SOLICR_FINDTP = null;
        }
        else {
            // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrFindtp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  W_VRORIG      NUMBER;
    //  W_DISMIN      NUMBER;
    //  W_MODIF       VARCHAR2(1);
    //  T_RESPUESTA   NUMBER;
    //  V_PARAM       NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT TOPSOL_VLRTOP
    //      INTO V_PARAM
    //     FROM CRTTOPSOL
    //     WHERE TOPSOL_INDICA = 'D';
    //   END;
    //   W_VRORIG  := :CRTSOLICR.SOLICR_FNGP;
    //   W_DISMIN  := :VRORIG-(V_PARAM);
    // 
    //  IF  :CRTSOLICR.SOLICR_IFIP IS NULL THEN
    //    IF NVL(:CRTSOLICR.SOLICR_IFIP, 0) < W_DISMIN THEN
    //        LIB$ALERTA('MENSAJE','NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);     
    //        :CRTSOLICR.SOLICR_IFIP := :GLOBAL.VALOR_ANTERIOR;     
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    :CRTSOLICR.SOLICR_IFIP := NULL;  
    //  ELSE
    // --  LIB$ALERTA('MENSAJE','LA SOLICITUD YA FUE DISMINUIDA ANTERIORMENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   :GLOBAL.VALOR_ANTERIOR := :GLOBAL.VALOR_ANTERIOR;     
    // --  RAISE FORM_TRIGGER_FAILURE;
    //  END IF;  
    // END; 
    //#endregion
    async CRFDISTAS_crtsolicr_solicrIfip_whenValidateItem() {
        console.log("Entering CRFDISTAS_crtsolicr_solicrIfip_whenValidateItem");
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_MODIF: string = null;
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdistas_crtsolicr/crfdistas_crtsolicr_solicrifip_whenvalidateitem_query1", payload1);
        // get values from result
        V_PARAM = result1[0].get("V_PARAM");
        W_VRORIG = this.CRTSOLICR.SOLICR_FNGP;
        W_DISMIN = this.CRTSOLICR.VRORIG - (V_PARAM);
        if ((this.CRTSOLICR.SOLICR_IFIP == null)) {
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP < W_DISMIN) {
                //CRFDISTAS_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO DISMINUIR MAS DEL VALOR PARAMETRIZADO. " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_IFIP = this.GLOBAL.VALOR_ANTERIOR;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this.CRTSOLICR.SOLICR_IFIP = null;
        }
        else {
            // this.GLOBAL.VALOR_ANTERIOR = this.GLOBAL.VALOR_ANTERIOR;
        }
        console.log("Exiting CRFDISTAS_crtsolicr_solicrIfip_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_toolbar_whenButtonPressed() {
        console.log("Entering CRFDISTAS_toolbar_whenButtonPressed");
        console.log("Exiting CRFDISTAS_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_toolbar_whenMouseLeave() {
        console.log("Entering CRFDISTAS_toolbar_whenMouseLeave");
        console.log("Exiting CRFDISTAS_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_toolbar_whenNewFormInstance() {
        console.log("Entering CRFDISTAS_toolbar_whenNewFormInstance");
        console.log("Exiting CRFDISTAS_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDISTAS_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFDISTAS_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFDISTAS_base_fecha_whenNewItemInstance");
    }

}

