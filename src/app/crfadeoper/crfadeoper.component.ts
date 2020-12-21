import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFADEOPER business logic
import {
    CRTOTERSOL,
    VARIABLE,
    CRTSOLICR,
    TOOLBAR,
    CRTOTERSOL1,
    BASE
} from "./CRFADEOPER_models";



// class CRFADEOPER
@Component({
    selector: 'app-crfadeoper',
    templateUrl: './crfadeoper.component.html',
})
export class CrfadeoperComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTOTERSOL1: CRTOTERSOL1 = new CRTOTERSOL1();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_whenMouseDoubleclick() {
        console.log("Entering CRFADEOPER_whenMouseDoubleclick");
        console.log("Exiting CRFADEOPER_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN FRM$POST_FORM; END;
    //#endregion
    async CRFADEOPER_postForm() {
        console.log("Entering CRFADEOPER_postForm");
        // CRFADEOPER_FRM$POST_FORM();
        console.log("Exiting CRFADEOPER_postForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_preForm() {
        console.log("Entering CRFADEOPER_preForm");
        console.log("Exiting CRFADEOPER_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_whenNewFormInstance() {
        console.log("Entering CRFADEOPER_whenNewFormInstance");
        console.log("Exiting CRFADEOPER_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADEOPER_crtotersol_whenNewItemInstance() {
        console.log("Entering CRFADEOPER_crtotersol_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADEOPER_crtotersol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADEOPER_crtotersol_preQuery() {
        console.log("Entering CRFADEOPER_crtotersol_preQuery");
        this.CRTOTERSOL.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADEOPER_crtotersol_preQuery");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADEOPER_crtotersol_whenNewBlockInstance() {
        console.log("Entering CRFADEOPER_crtotersol_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADEOPER_crtotersol_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADEOPER_crtotersol_whenCreateRecord() {
        console.log("Entering CRFADEOPER_crtotersol_whenCreateRecord");
        this.CRTOTERSOL.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADEOPER_crtotersol_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFADEOPER_crtotersol_keyCommit() {
        console.log("Entering CRFADEOPER_crtotersol_keyCommit");
        console.log("Exiting CRFADEOPER_crtotersol_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTOTERSOL.NOMBRE := PU_NOMBRE_TERCERO (:CRTOTERSOL.OTERSOL_NITTER);
    // END;
    //#endregion
    async CRFADEOPER_crtotersol_postQuery() {
        console.log("Entering CRFADEOPER_crtotersol_postQuery");
        // this.CRTOTERSOL.NOMBRE = PU_NOMBRE_TERCERO(CRTOTERSOL.OTERSOL_NITTER);
        console.log("Exiting CRFADEOPER_crtotersol_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADEOPER_crtotersol_preInsert() {
        console.log("Entering CRFADEOPER_crtotersol_preInsert");
        this.CRTOTERSOL.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADEOPER_crtotersol_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF :CRTOTERSOL.OTERSOL_GIRDIR > :GLOBAL.VALOR_ANTERIOR AND
    //       :CRTOTERSOL.OTERSOL_GIRDIR > 0   
    //    THEN
    //       LIB$ALERTA('MENSAJE','EL VALOR DEL ANTICIPO A PROVEEDORES NO PUEDE SER MAYOR AL APROBADO EN COMITÉ. REVISE, EL VALOR A CAMBIAR  ES: '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTOTERSOL.OTERSOL_GIRDIR  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFADEOPER_crtotersol_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFADEOPER_crtotersol_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTOTERSOL.OTERSOL_GIRDIR > 0)) {
            // CRFADEOPER_LIB$ALERTA("MENSAJE", "EL VALOR DEL ANTICIPO A PROVEEDORES NO PUEDE SER MAYOR AL APROBADO EN COMITÉ. REVISE, EL VALOR A CAMBIAR  ES: " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFADEOPER_crtotersol_otersolGirdir_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //   IF  :CRTOTERSOL.OTERSOL_NITTER IS NOT NULL THEN
    // 
    //    BEGIN
    //      SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //      INTO   :CRTOTERSOL.NOMBRE, :CRTOTERSOL.OTERSOL_TIPPER, :CRTOTERSOL.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD = :CRTOTERSOL.OTERSOL_NITTER);
    // 
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      PU_LLAMAR_TERCERO(:CRTOTERSOL.OTERSOL_NITTER, NULL, NULL, NULL, 'Q');
    // 
    //    EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //         IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //            PU_LLAMAR_TERCERO(:CRTOTERSOL.OTERSOL_NITTER, NULL, NULL, NULL,'T');
    //         ELSE 
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL, NULL, NULL, T_RESPUESTA); 
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //     END;
    // 
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //   END IF;  
    // END;
    //#endregion
    async CRFADEOPER_crtotersol_otersolNitter_whenValidateItem() {
        console.log("Entering CRFADEOPER_crtotersol_otersolNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTOTERSOL.OTERSOL_NITTER != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OTERSOL_NITTER", this.CRTOTERSOL.OTERSOL_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfadeoper_crtotersol/crfadeoper_crtotersol_otersolnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTOTERSOL.NOMBRE = result1[0].get("CRTOTERSOL.NOMBRE");
            this.CRTOTERSOL.OTERSOL_TIPPER = result1[0].get("CRTOTERSOL.OTERSOL_TIPPER");
            this.CRTOTERSOL.OTERSOL_TIPIDE = result1[0].get("CRTOTERSOL.OTERSOL_TIPIDE");
            // CRFADEOPER_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            // CRFADEOPER_PU_LLAMAR_TERCERO(CRTOTERSOL.OTERSOL_NITTER, null, null, null, "Q");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     CRFADEOPER_PU_LLAMAR_TERCERO(CRTOTERSOL.OTERSOL_NITTER, null, null, null, "T");
                // }
                // else {
                //     CRFADEOPER_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }

        }
        else {
            // CRFADEOPER_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFADEOPER_crtotersol_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFADEOPER_variable_keyNxtblk() {
        console.log("Entering CRFADEOPER_variable_keyNxtblk");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADEOPER_variable_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.TIPO_VINCULA := '13';
    // GO_BLOCK('CRTOTERSOL1'); END;
    //#endregion
    async CRFADEOPER_variable_btnCoarrendatario_whenMouseClick() {
        console.log("Entering CRFADEOPER_variable_btnCoarrendatario_whenMouseClick");
        this.VARIABLE.TIPO_VINCULA = "13";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL1");
        console.log("Exiting CRFADEOPER_variable_btnCoarrendatario_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_TIPCRE,:CRTSOLICR.SOLICR_CODSOL,'Q'); END;
    //#endregion
    async CRFADEOPER_variable_btnVerDetalle_whenMouseClick() {
        console.log("Entering CRFADEOPER_variable_btnVerDetalle_whenMouseClick");
        // CRFADEOPER_PU_LLAMAR_SOLICITUD(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODSOL, "Q");
        console.log("Exiting CRFADEOPER_variable_btnVerDetalle_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AC';
    //    V_EXISTE_NAC      BOOLEAN;
    // 
    // BEGIN
    //  
    //  
    //  IF :CRTSOLICR.SOLICR_TIPCRE_MOD = '04' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL THEN --PY 7930
    //     LIB$DTNERFRMA('NO PUEDE MODIFICAR EL TIPO BIEN CUANDO EL TIPO ES 04.');
    //     :CRTSOLICR.SOLICR_TIPBIE := NULL;
    //     :CRTSOLICR.BIEN          := NULL;
    //     
    //  END IF; --PY 7930
    //  
    //  IF :CRTSOLICR.SOLICR_TIPCRE_MOD = '04' AND :CRTSOLICR.SOLICR_TIPBIE IS NULL THEN  --PY 7930
    //   :CRTSOLICR.BIEN          := NULL;
    //  END IF; --PY 7930
    //  
    // 
    // 
    //    -- M1 FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //  
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //             'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //                 V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    //     COMMIT_FORM;
    // END;
    // 
    // GO_BLOCK('CRTSOLICR');
    //#endregion
    async CRFADEOPER_variable_btnActualizar_whenMouseClick() {
        console.log("Entering CRFADEOPER_variable_btnActualizar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AC';
        let V_EXISTE_NAC: boolean = null;
        if ((this.CRTSOLICR.SOLICR_TIPCRE_MOD == "04" && (this.CRTSOLICR.SOLICR_TIPBIE != null))) {
            // CRFADEOPER_LIB$DTNERFRMA("NO PUEDE MODIFICAR EL TIPO BIEN CUANDO EL TIPO ES 04.");
            this.CRTSOLICR.SOLICR_TIPBIE = null;
            this.CRTSOLICR.BIEN = null;
        }
        if ((this.CRTSOLICR.SOLICR_TIPCRE_MOD == "04" && (this.CRTSOLICR.SOLICR_TIPBIE == null))) {
            this.CRTSOLICR.BIEN = null;
        }
        // CRFADEOPER_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADEOPER_variable_btnActualizar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // GO_ITEM('CRTSOLICR.SOLICR_ACTIVO'); END;
    //#endregion
    async CRFADEOPER_variable_btnCondFin_whenButtonPressed() {
        console.log("Entering CRFADEOPER_variable_btnCondFin_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ACTIVO");
        console.log("Exiting CRFADEOPER_variable_btnCondFin_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // GO_ITEM('CRTSOLICR.SOLICR_ACTIVO'); END;
    //#endregion
    async CRFADEOPER_variable_btnCondFin_whenMouseClick() {
        console.log("Entering CRFADEOPER_variable_btnCondFin_whenMouseClick");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ACTIVO");
        console.log("Exiting CRFADEOPER_variable_btnCondFin_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // GO_ITEM('CRTSOLICR.SOLICR_ACTIVO'); END;
    //#endregion
    async CRFADEOPER_variable_btnCondFin_whenMouseDoubleclick() {
        console.log("Entering CRFADEOPER_variable_btnCondFin_whenMouseDoubleclick");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ACTIVO");
        console.log("Exiting CRFADEOPER_variable_btnCondFin_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AC';
    //    V_EXISTE_NAC      BOOLEAN;
    // 
    // BEGIN
    // 
    //   -- CONDICION PARA VERIFICAR SI EXISTEN PROVEEEDORES NACIONALES ('09')
    // 
    //   IF NOT PU_SOL_PROVEEDOR_NAL (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL)
    //   THEN
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO POSEE PROVEEDORES NACIONALES', NULL, NULL, NULL, T_RESPUESTA);
    //      V_EXISTE_NAC  := FALSE;
    //   ELSE
    //      V_EXISTE_NAC  := TRUE;
    //   END IF;
    // 
    //   IF V_EXISTE_NAC = FALSE THEN
    //      IF NOT PU_SOL_PROVEEDOR_EXT (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL)
    //      THEN
    //          LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO POSEE PROVEEDORES NACIONALES NI EXTRANJEROS. DEBE INGRESAR PROVEEDORES PARA APROBAR', NULL, NULL, NULL, T_RESPUESTA);
    //          RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //          LIB$ALERTA('MENSAJE', 'LA SOLICITUD POSEE PROVEEDORES EXTRANJEROS SOLAMENTE. VERIFIQUE SI NO EXISTEN PROVEEDORES NACIONALES Y APRUEBE LA SOLICITUD', NULL, NULL, NULL, T_RESPUESTA);
    //      END IF;
    //    END IF;
    // 
    //   IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    // 
    // 
    //     -- M1 FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //     --  22/01/2002 JRINCON.
    // 
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //             'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //                 V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //     -- FIN M1
    // 
    //     :CRTSOLICR.SOLICR_ESTSOL  := V_ESTADO;
    //     :CRTSOLICR.SOLICR_FEACIA  := SYSDATE; 
    //     COMMIT_FORM;
    //   ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    // END;
    // 
    // GO_BLOCK('CRTSOLICR');
    //#endregion
    async CRFADEOPER_variable_btnAprobar_whenMouseClick() {
        console.log("Entering CRFADEOPER_variable_btnAprobar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AC';
        let V_EXISTE_NAC: boolean = null;
        // if ((!PU_SOL_PROVEEDOR_NAL(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL))) {
        //     CRFADEOPER_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO POSEE PROVEEDORES NACIONALES", null, null, null, T_RESPUESTA);
        //     V_EXISTE_NAC = FALSE;
        // }
        // else {
        //     V_EXISTE_NAC = TRUE;
        // }
        // if (V_EXISTE_NAC == FALSE) {
        //     if ((!PU_SOL_PROVEEDOR_EXT(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL))) {
        //         CRFADEOPER_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO POSEE PROVEEDORES NACIONALES NI EXTRANJEROS. DEBE INGRESAR PROVEEDORES PARA APROBAR", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        //     else {
        //         CRFADEOPER_LIB$ALERTA("MENSAJE", "LA SOLICITUD POSEE PROVEEDORES EXTRANJEROS SOLAMENTE. VERIFIQUE SI NO EXISTEN PROVEEDORES NACIONALES Y APRUEBE LA SOLICITUD", null, null, null, T_RESPUESTA);
        //     }
        // }
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
        //     CRFADEOPER_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
        //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
        //     this.CRTSOLICR.SOLICR_FEACIA = PLSQLBuiltins.sysdate();
        //     this.oracleFormsBuiltins.commit_form();
        // }
        // else {
        //     CRFADEOPER_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFADEOPER_variable_btnAprobar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF SYSTEM.CURSOR_BLOCK = 'CRTSOLICR' THEN
    //     RETURN;
    // END IF;
    // GO_BLOCK('CRTSOLICR');
    // COMMIT_FORM;
    // SET_ITEM_PROPERTY('VARIABLE.BTN_ACTUALIZAR', "DISPLAYED", "PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('VARIABLE.BTN_ACTUALIZAR', "ENABLED", "PROPERTY_TRUE"); END;
    //#endregion
    async CRFADEOPER_variable_btnSolicitudes_whenMouseClick() {
        console.log("Entering CRFADEOPER_variable_btnSolicitudes_whenMouseClick");
        // if (SYSTEM.CURSOR_BLOCK == "CRTSOLICR") {
        //     return ret;
        // }
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_ACTUALIZAR", "DISPLAYED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_ACTUALIZAR", "ENABLED", "PROPERTY_TRUE");
        console.log("Exiting CRFADEOPER_variable_btnSolicitudes_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.OFICINA            := :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.SOLICITUD          := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTSOLICR.SOLICR_TIPCRE_MOD := :CRTSOLICR.SOLICR_TIPCRE;  --PY 7930; END;
    //#endregion
    async CRFADEOPER_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFADEOPER_crtsolicr_whenNewRecordInstance");
        this.VARIABLE.OFICINA = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICITUD = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTSOLICR.SOLICR_TIPCRE_MOD = this.CRTSOLICR.SOLICR_TIPCRE;
        console.log("Exiting CRFADEOPER_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO  := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    // 
    // 
    // IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR THEN
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                             SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //               :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    // END IF; END;
    //#endregion
    async CRFADEOPER_crtsolicr_postTextItem() {
        console.log("Entering CRFADEOPER_crtsolicr_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     CRFADEOPER_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADEOPER_crtsolicr_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // END;
    //#endregion
    async CRFADEOPER_crtsolicr_keyEntqry() {
        console.log("Entering CRFADEOPER_crtsolicr_keyEntqry");
        console.log("Exiting CRFADEOPER_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADEOPER_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFADEOPER_crtsolicr_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADEOPER_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFADEOPER_crtsolicr_keyClrblk() {
        console.log("Entering CRFADEOPER_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     CRFADEOPER_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFADEOPER_crtsolicr_keyClrblk");
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
    async CRFADEOPER_crtsolicr_keyUp() {
        console.log("Entering CRFADEOPER_crtsolicr_keyUp");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.up();
        }
        else {
        }
        console.log("Exiting CRFADEOPER_crtsolicr_keyUp");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFADEOPER_crtsolicr_keyCommit() {
        console.log("Entering CRFADEOPER_crtsolicr_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADEOPER_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN --PY 7930
    //  BEGIN
    //   SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR.BIEN
    //     FROM CRTTIPBIEN
    //     WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN :CRTSOLICR.BIEN := NULL;  --PY 7930
    //  END; 
    // 
    //  BEGIN
    //  SELECT SUBCAT_DESCRI
    //    INTO :W_SUBCATEGORIA
    //    FROM COTSUBCAT
    //   WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //     AND SUBCAT_CODIGO = :SOLICR_SUBCAT;
    //  EXCEPTION WHEN OTHERS THEN
    //   :W_SUBCATEGORIA := NULL;
    //  END;
    // 
    // END IF; --PY 7930; END;
    //#endregion
    async CRFADEOPER_crtsolicr_postQuery() {
        console.log("Entering CRFADEOPER_crtsolicr_postQuery");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
            // call REST API
            const result1 = await Rest.post("/crfadeoper_crtsolicr/crfadeoper_crtsolicr_postquery_query1", payload1);
            // get values from result
            this.CRTSOLICR.BIEN = result1[0].get("CRTSOLICR.BIEN");
            if (result1 == null || result1.length == 0) {

                this.CRTSOLICR.BIEN = null;
            }

            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                // payload2.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
                // payload2.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
                // call REST API
                const result2 = await Rest.post("/crfadeoper_crtsolicr/crfadeoper_crtsolicr_postquery_query2", payload2);
                // get values from result
                // W_SUBCATEGORIA = result2[0].get("W_SUBCATEGORIA");
            } catch (ex) {

                this.CRTSOLICR.W_SUBCATEGORIA = null;
            }

        }
        console.log("Exiting CRFADEOPER_crtsolicr_postQuery");
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
    async CRFADEOPER_crtsolicr_keyDown() {
        console.log("Entering CRFADEOPER_crtsolicr_keyDown");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        else {
        }
        console.log("Exiting CRFADEOPER_crtsolicr_keyDown");
    }

    //#region PLSQL
    // BEGIN --PY 7930
    // IF :CRTSOLICR.SOLICR_TIPCRE_MOD = '04' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL THEN
    //  LIB$DTNERFRMA('NO PUEDE MODIFICAR EL TIPO BIEN CUANDO EL TIPO ES 04.');
    //  :CRTSOLICR.SOLICR_TIPBIE := NULL;
    //  :CRTSOLICR.BIEN          := NULL;
    // ELSE
    //   BEGIN
    //   SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR.BIEN
    //      FROM CRTTIPBIEN B
    //     WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE;
    //    :SOLICR_SUBCAT  := NULL;
    //    :W_SUBCATEGORIA := NULL; 
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.BIEN := NULL;
    //   END; 
    // END IF;
    // --PY 7930; END;
    //#endregion
    async CRFADEOPER_crtsolicr_solicrTipbie_whenValidateItem() {
        console.log("Entering CRFADEOPER_crtsolicr_solicrTipbie_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_TIPCRE_MOD == "04" && (this.CRTSOLICR.SOLICR_TIPBIE != null))) {
            // CRFADEOPER_LIB$DTNERFRMA("NO PUEDE MODIFICAR EL TIPO BIEN CUANDO EL TIPO ES 04.");
            this.CRTSOLICR.SOLICR_TIPBIE = null;
            this.CRTSOLICR.BIEN = null;
        }
        else {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
                // call REST API
                const result1 = await Rest.post("/crfadeoper_crtsolicr/crfadeoper_crtsolicr_solicrtipbie_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.BIEN = result1[0].get("CRTSOLICR.BIEN");
                this.CRTSOLICR.SOLICR_SUBCAT = null;
                this.CRTSOLICR.W_SUBCATEGORIA = null;
            } catch (ex) {

                this.CRTSOLICR.BIEN = null;
            }

        }
        console.log("Exiting CRFADEOPER_crtsolicr_solicrTipbie_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_ORMONUS$ IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT ORMDES
    //      INTO DESC1
    //      FROM ORM
    //     WHERE ORMCOD=:SOLICR_ORMONUS$;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFADEOPER_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering CRFADEOPER_crtsolicr_solicrOrmonus$_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_ORMONUS != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ORMONUS", this.CRTSOLICR.SOLICR_ORMONUS);
                // call REST API
                const result1 = await Rest.post("/crfadeoper_crtsolicr/crfadeoper_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // CRFADEOPER_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFADEOPER_crtsolicr_solicrOrmonus$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --   FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    //     --:CRTSOLICR.COMERCIAL := PU_NOMBRE_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF; END;
    //#endregion
    async CRFADEOPER_crtsolicr_solicrUscial_postTextItem() {
        console.log("Entering CRFADEOPER_crtsolicr_solicrUscial_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     CRFADEOPER_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADEOPER_crtsolicr_solicrUscial_postTextItem");
    }

    //#region PLSQL
    // IF :CRTSOLICR.SOLICR_TIPCRE_MOD = '04' AND :CRTSOLICR.SOLICR_SUBCAT IS NOT NULL THEN
    //  LIB$DTNERFRMA('NO PUEDE MODIFICAR LA SUBCATEGORIA DEL TIPO BIEN CUANDO EL TIPO ES 04.');
    //  :CRTSOLICR.SOLICR_TIPBIE := NULL;
    //  :CRTSOLICR.BIEN          := NULL;
    // END IF;
    // --PY 7930
    // 
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIA
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //    AND SUBCAT_ESTADO = 'A';
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;
    //#endregion
    async CRFADEOPER_crtsolicr_solicrSubcat_whenValidateItem() {
        console.log("Entering CRFADEOPER_crtsolicr_solicrSubcat_whenValidateItem");
        console.log("Exiting CRFADEOPER_crtsolicr_solicrSubcat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async CRFADEOPER_crtsolicr_solicrActivo_keyEnter() {
        console.log("Entering CRFADEOPER_crtsolicr_solicrActivo_keyEnter");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFADEOPER_crtsolicr_solicrActivo_keyEnter");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_toolbar_whenButtonPressed() {
        console.log("Entering CRFADEOPER_toolbar_whenButtonPressed");
        console.log("Exiting CRFADEOPER_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_toolbar_whenMouseLeave() {
        console.log("Entering CRFADEOPER_toolbar_whenMouseLeave");
        console.log("Exiting CRFADEOPER_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_toolbar_whenNewFormInstance() {
        console.log("Entering CRFADEOPER_toolbar_whenNewFormInstance");
        console.log("Exiting CRFADEOPER_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADEOPER_crtotersol1_whenNewItemInstance() {
        console.log("Entering CRFADEOPER_crtotersol1_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADEOPER_crtotersol1_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADEOPER_crtotersol1_preQuery() {
        console.log("Entering CRFADEOPER_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADEOPER_crtotersol1_preQuery");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADEOPER_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFADEOPER_crtotersol1_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADEOPER_crtotersol1_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADEOPER_crtotersol1_whenCreateRecord() {
        console.log("Entering CRFADEOPER_crtotersol1_whenCreateRecord");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADEOPER_crtotersol1_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFADEOPER_crtotersol1_keyCommit() {
        console.log("Entering CRFADEOPER_crtotersol1_keyCommit");
        console.log("Exiting CRFADEOPER_crtotersol1_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTOTERSOL1.NOMBRE := PU_NOMBRE_TERCERO (:CRTOTERSOL1.OTERSOL_NITTER);
    // END;
    //#endregion
    async CRFADEOPER_crtotersol1_postQuery() {
        console.log("Entering CRFADEOPER_crtotersol1_postQuery");
        // this.CRTOTERSOL1.NOMBRE = PU_NOMBRE_TERCERO(CRTOTERSOL1.OTERSOL_NITTER);
        console.log("Exiting CRFADEOPER_crtotersol1_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADEOPER_crtotersol1_preInsert() {
        console.log("Entering CRFADEOPER_crtotersol1_preInsert");
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADEOPER_crtotersol1_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //   IF  :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    // 
    //    BEGIN
    //      SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //      INTO   :CRTOTERSOL1.NOMBRE, :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD = :CRTOTERSOL1.OTERSOL_NITTER);
    // 
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL, NULL, NULL, 'Q');
    // 
    //    EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //         IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //            PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL, NULL, NULL,'T');
    //         ELSE 
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL, NULL, NULL, T_RESPUESTA); 
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //     END;
    // 
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //   END IF;  
    // END;
    //#endregion
    async CRFADEOPER_crtotersol1_otersolNitter_whenValidateItem() {
        console.log("Entering CRFADEOPER_crtotersol1_otersolNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfadeoper_crtotersol1/crfadeoper_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
            this.CRTOTERSOL1.OTERSOL_TIPPER = result1[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            this.CRTOTERSOL1.OTERSOL_TIPIDE = result1[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
            // CRFADEOPER_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            // CRFADEOPER_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "Q");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     CRFADEOPER_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "T");
                // }
                // else {
                //     CRFADEOPER_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }

        }
        else {
            // CRFADEOPER_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFADEOPER_crtotersol1_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFADEOPER_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFADEOPER_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFADEOPER_base_fecha_whenNewItemInstance");
    }

}

