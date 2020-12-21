import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFDRPJ business logic
import {
    ANTDRXT_PJ_3,
    ANTDRXT_PJ_P,
    VARIABLE,
    ANTDRXT_PJ_1,
    ANTDRXT_PJ_2,
    TOOLBAR,
    ANTDRXT_PJ,
    ANTDRXT_PJ_P2,
    BASE
} from "./ANFDRPJ_models";



// class ANFDRPJ
@Component({
    selector: 'app-anfdrpj',
    templateUrl: './anfdrpj.component.html',
})
export class AnfdrpjComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTDRXT_PJ_3: ANTDRXT_PJ_3 = new ANTDRXT_PJ_3();
    public ANTDRXT_PJ_P: ANTDRXT_PJ_P = new ANTDRXT_PJ_P();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTDRXT_PJ_1: ANTDRXT_PJ_1 = new ANTDRXT_PJ_1();
    public ANTDRXT_PJ_2: ANTDRXT_PJ_2 = new ANTDRXT_PJ_2();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTDRXT_PJ: ANTDRXT_PJ = new ANTDRXT_PJ();
    public ANTDRXT_PJ_P2: ANTDRXT_PJ_P2 = new ANTDRXT_PJ_P2();
    public BASE: BASE = new BASE();


    async ANFDRPJ_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFDRPJ_keyNxtblk() {
        console.log("Entering ANFDRPJ_keyNxtblk");
        console.log("Exiting ANFDRPJ_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFDRPJ_whenMouseDoubleclick() {
        console.log("Entering ANFDRPJ_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFDRPJ_whenMouseDoubleclick");
    }

    async ANFDRPJ_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // BEGIN SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    // 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //      :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE
    //      :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   
    //   ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // BEGIN 
    //     
    //  IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN 
    //    BEGIN
    //      SELECT COMPAN_NOLOGF 
    //        INTO V_IMAGEN
    //        FROM SGCOMPAN 
    //       WHERE COMPAN_CODCOM=:this.PARAMETER.get("P_OFICINA");
    //    EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       V_IMAGEN:='LOGO_LEASFORM.GIF';
    //    END;   
    // 
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.LOGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
    //  END IF;
    // END;
    // -------------------------------------------------------
    //  
    //    DEFAULT_VALUE(NULL,'GLOBAL.NIT');
    //    
    //   
    //  IF :GLOBAL.NIT IS NULL THEN
    //   :DIS_TITULO := 'ANÁLISIS PERSONA JURÍDICA';
    //  ELSE
    //     :NITTER   := :GLOBAL.NIT;
    //     :PERCOD  := :GLOBAL.PER1;
    //     :PERCOD_2 := :GLOBAL.PER2;
    //     :PERCOD_3 := :GLOBAL.PER3;
    //   :DIS_TITULO := 'ANÁLISIS PERSONA NATURAL';
    //   PUP_PROCESAR;
    //  END IF;
    //  
    //  
    //  
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // --PARA SER INVOCADO POR OTRA VENTANA
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :VARIABLE.NITTER  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFDRPJ_whenNewFormInstance() {
        console.log("Entering ANFDRPJ_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/anfdrpj/anfdrpj_whennewforminstance_query1", payload1);
                // get values from result
                V_IMAGEN = result1[0].get("V_IMAGEN");
                if (result1 == null || result1.length == 0) {

                    V_IMAGEN = "LOGO_LEASFORM.GIF";
                }

                this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.LOGO");
            }
            else {
                this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.LOGO");
            }
        }

        this.oracleFormsBuiltins.default_value(null, "GLOBAL.NIT");
        // if ((GLOBAL.NIT == null)) {
        //     this.DIS_TITULO = "ANÁLISIS PERSONA JURÍDICA";
        // }
        // else {
        //     this.NITTER = this.GLOBAL.NIT;
        //     this.PERCOD = this.GLOBAL.PER1;
        //     this.PERCOD_2 = this.GLOBAL.PER2;
        //     this.PERCOD_3 = this.GLOBAL.PER3;
        //     this.DIS_TITULO = "ANÁLISIS PERSONA NATURAL";
        //     ANFDRPJ_PUP_PROCESAR();
        // }
        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.NITTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFDRPJ_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFDRPJ_preForm() {
        console.log("Entering ANFDRPJ_preForm");
        // ANFDRPJ_PANTALLA();
        // ANFDRPJ_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFDRPJ_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFDRPJ_keyUp() {
        console.log("Entering ANFDRPJ_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFDRPJ_keyUp");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFDRPJ_keyPrvblk() {
        console.log("Entering ANFDRPJ_keyPrvblk");
        console.log("Exiting ANFDRPJ_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFDRPJ_keyDown() {
        console.log("Entering ANFDRPJ_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFDRPJ_keyDown");
    }

    //#region PLSQL
    // BEGIN PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP'); END;
    //#endregion
    async ANFDRPJ_antdrxtPj3_keyCommit() {
        console.log("Entering ANFDRPJ_antdrxtPj3_keyCommit");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_3", "IP");
        console.log("Exiting ANFDRPJ_antdrxtPj3_keyCommit");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ_P.DRXTPJ_CODCTA = 'PB004' THEN
    //   GO_ITEM('TXT_TOT_PAT2');
    //  ELSE
    //  UP; 
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP_keyUp() {
        console.log("Entering ANFDRPJ_antdrxtPjP_keyUp");
        if (this.ANTDRXT_PJ_P.DRXTPJ_CODCTA == "PB004") {
            this.oracleFormsBuiltins.go_item("TXT_TOT_PAT2");
        }
        else {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFDRPJ_antdrxtPjP_keyUp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_P'); END;
    //#endregion
    async ANFDRPJ_antdrxtPjP_keyListval() {
        console.log("Entering ANFDRPJ_antdrxtPjP_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_P");
        console.log("Exiting ANFDRPJ_antdrxtPjP_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ_P.DRXTPJ_CODCTA = 'PB003' THEN
    //   :TXT_TOT_PAT2 := :ANTDRXT_PJ_P.DRXTPJ_VALORC;
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP_postQuery() {
        console.log("Entering ANFDRPJ_antdrxtPjP_postQuery");
        if (this.ANTDRXT_PJ_P.DRXTPJ_CODCTA == "PB003") {
            // this.ANTDRXT_PJ_P.TXT_TOT_PAT2 = this.ANTDRXT_PJ_P.DRXTPJ_VALORC;
        }
        console.log("Exiting ANFDRPJ_antdrxtPjP_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ_P.DRXTPJ_CODCTA = 'PB002' THEN
    //   GO_ITEM('TXT_TOT_PAT2');
    //  ELSE
    //  DOWN; 
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP_keyDown() {
        console.log("Entering ANFDRPJ_antdrxtPjP_keyDown");
        if (this.ANTDRXT_PJ_P.DRXTPJ_CODCTA == "PB002") {
            this.oracleFormsBuiltins.go_item("TXT_TOT_PAT2");
        }
        else {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFDRPJ_antdrxtPjP_keyDown");
    }

    //#region PLSQL
    // BEGIN :ANTDRXT_PJ_P.DRXTPJ_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_P );
    // GO_ITEM('ANTDRXT_PJ_P.DRXTPJ_VALORC');
    // HIDE_VIEW('CANVAS5'); END;
    //#endregion
    async ANFDRPJ_antdrxtPjP_calculadoraP_keyNextItem() {
        console.log("Entering ANFDRPJ_antdrxtPjP_calculadoraP_keyNextItem");
        // this.ANTDRXT_PJ_P.DRXTPJ_VALORC = FBD_COL_CALCULADORA(CALCULADORA_P);
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        console.log("Exiting ANFDRPJ_antdrxtPjP_calculadoraP_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ_P.DRXTPJ_VALORC');
    // HIDE_VIEW('CANVAS5'); END;
    //#endregion
    async ANFDRPJ_antdrxtPjP_calculadoraP_keyHelp() {
        console.log("Entering ANFDRPJ_antdrxtPjP_calculadoraP_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        console.log("Exiting ANFDRPJ_antdrxtPjP_calculadoraP_keyHelp");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_2 IS NULL THEN
    // GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC'); 
    //  LIB$ALERTA('MENSAJE','SEGUNDO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRPJ_antdrxtPjP_drxtpjValorc_whenNewItemInstance() {
        console.log("Entering ANFDRPJ_antdrxtPjP_drxtpjValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        // if ((PERCOD_2 == null)) {
        //     this.oracleFormsBuiltins.go_item("ANTDRXT_PJ.DRXTPJ_VALORC");
        //     ANFDRPJ_LIB$ALERTA("MENSAJE", "SEGUNDO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        //     this.oracleFormsBuiltins.go_item("ANTDRXT_PJ.DRXTPJ_VALORC");
        // }
        console.log("Exiting ANFDRPJ_antdrxtPjP_drxtpjValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    // BEGIN
    //  IF :PERCOD_2 IS NOT NULL THEN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD_2
    //    FROM PER
    //    WHERE PERCOD=:PERCOD_2;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    //  BEGIN
    //  IF SUBSTR(:PERCOD,1,1)='9' THEN
    //     VPERIODO1:='19'||:PERCOD;
    //  ELSIF SUBSTR(:PERCOD,1,1)='0' THEN
    //     VPERIODO1:='20'||:PERCOD;
    //  END IF;
    //  IF SUBSTR(:PERCOD_2,1,1)='9' THEN
    //     VPERIODO2:='19'||:PERCOD_2;
    //  ELSIF SUBSTR(:PERCOD_2,1,1)='0' THEN
    //     VPERIODO2:='20'||:PERCOD_2;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO1) =TO_NUMBER(VPERIODO2) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES IGUAL AL PERIODO 2 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO1) >TO_NUMBER(VPERIODO2) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES MAYOR AL PERIODO 2 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;  
    // 
    // END IF;
    // END;  
    //#endregion
    async ANFDRPJ_variable_percod2_whenValidateItem() {
        console.log("Entering ANFDRPJ_variable_percod2_whenValidateItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
            // call REST API
            const result1 = await Rest.post("/anfdrpj_variable/anfdrpj_variable_percod2_whenvalidateitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERCOD_2 = result1[0].get("DES_PERCOD_2");
            if (result1 == null || result1.length == 0) {

                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "9") {
                VPERIODO1 = "19" + this.VARIABLE.PERCOD;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "0") {
                VPERIODO1 = "20" + this.VARIABLE.PERCOD;
            }
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "9") {
                VPERIODO2 = "19" + this.VARIABLE.PERCOD_2;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "0") {
                VPERIODO2 = "20" + this.VARIABLE.PERCOD_2;
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) == PLSQLBuiltins.to_number(VPERIODO2)) {
                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO2)) {
                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFDRPJ_variable_percod2_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //    V_CONTADOR:=0;
    //   -- PUP_PARTICIPACION (:PERCOD);COMMIT;
    //    
    //   IF :PERCOD IS NOT NULL THEN
    //    PUP_VARIACIONES (:PERCOD, 'ANTDRXT_PJ');COMMIT;
    //   END IF;
    //    
    //   IF :PERCOD_2 IS NOT NULL THEN
    //    PUP_VARIACIONES (:PERCOD_2,'ANTDRXT_PJ_P');COMMIT;
    //   END IF;
    //   
    //   IF :PERCOD_3 IS NOT NULL THEN
    //    PUP_VARIACIONES (:PERCOD_3,'ANTDRXT_PJ_P2');COMMIT;
    //   END IF;
    //    
    //   GO_BLOCK('ANTDRXT_PJ');
    //  EXECUTE_QUERY;
    //  
    //         GO_BLOCK('ANTDRXT_PJ_P');
    //      EXECUTE_QUERY;
    //        GO_BLOCK('ANTDRXT_PJ_P2');
    //        EXECUTE_QUERY;
    //         GO_BLOCK('ANTDRXT_PJ');
    // 
    // END;
    //#endregion
    async ANFDRPJ_variable_actualizaPar_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_actualizaPar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        V_CONTADOR = 0;
        if ((this.VARIABLE.PERCOD != null)) {
            // ANFDRPJ_PUP_VARIACIONES(PERCOD, "ANTDRXT_PJ");
        }
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // ANFDRPJ_PUP_VARIACIONES(PERCOD_2, "ANTDRXT_PJ_P");
        }
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // ANFDRPJ_PUP_VARIACIONES(PERCOD_3, "ANTDRXT_PJ_P2");
        }
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ_P");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ_P2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ");
        console.log("Exiting ANFDRPJ_variable_actualizaPar_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    //  VPERIODO3 VARCHAR2(6);
    // BEGIN
    // IF :PERCOD_3 IS NOT NULL THEN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD_3
    //    FROM PER
    //    WHERE PERCOD=:PERCOD_3;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    // BEGIN
    //  IF SUBSTR(:PERCOD,1,1)='9' THEN
    //     VPERIODO1:='19'||:PERCOD;
    //  ELSIF SUBSTR(:PERCOD,1,1)='0' THEN
    //     VPERIODO1:='20'||:PERCOD;
    //  END IF;
    //  IF SUBSTR(:PERCOD_2,1,1)='9' THEN
    //     VPERIODO2:='19'||:PERCOD_2;
    //  ELSIF SUBSTR(:PERCOD_2,1,1)='0' THEN
    //     VPERIODO2:='20'||:PERCOD_2;
    //  END IF;
    //  IF SUBSTR(:PERCOD_3,1,1)='9' THEN
    //     VPERIODO3:='19'||:PERCOD_3;
    //  ELSIF SUBSTR(:PERCOD_3,1,1)='0' THEN
    //     VPERIODO3:='20'||:PERCOD_3;
    //  END IF;
    // 
    //  IF TO_NUMBER(VPERIODO1) =TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES IGUAL AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO2) =TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 2 ES IGUAL AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // 
    //  IF TO_NUMBER(VPERIODO1) >TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES MAYOR AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO2) >TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 2 ES MAYOR AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;  
    // END IF;
    // END;  
    //#endregion
    async ANFDRPJ_variable_percod3_whenValidateItem() {
        console.log("Entering ANFDRPJ_variable_percod3_whenValidateItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        let VPERIODO3: string = null;
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
            // call REST API
            const result1 = await Rest.post("/anfdrpj_variable/anfdrpj_variable_percod3_whenvalidateitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERCOD_3 = result1[0].get("DES_PERCOD_3");
            if (result1 == null || result1.length == 0) {

                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "9") {
                VPERIODO1 = "19" + this.VARIABLE.PERCOD;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "0") {
                VPERIODO1 = "20" + this.VARIABLE.PERCOD;
            }
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "9") {
                VPERIODO2 = "19" + this.VARIABLE.PERCOD_2;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "0") {
                VPERIODO2 = "20" + this.VARIABLE.PERCOD_2;
            }
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_3, 1, 1) == "9") {
                VPERIODO3 = "19" + this.VARIABLE.PERCOD_3;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_3, 1, 1) == "0") {
                VPERIODO3 = "20" + this.VARIABLE.PERCOD_3;
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) == PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO2) == PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO 2 ES IGUAL AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO2) > PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO 2 ES MAYOR AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFDRPJ_variable_percod3_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTDRXT_PJ');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2');
    // END;
    //#endregion
    async ANFDRPJ_variable_volverPasivo_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_volverPasivo_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFDRPJ_variable_volverPasivo_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PUP_PROCESAR; END;
    //#endregion
    async ANFDRPJ_variable_procesar_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_procesar_whenMouseClick");
        // ANFDRPJ_PUP_PROCESAR();
        console.log("Exiting ANFDRPJ_variable_procesar_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //  COMMIT_FORM;
    //   PUP_ACTUSUM;
    // END;
    //#endregion
    async ANFDRPJ_variable_actualizaSuma_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_actualizaSuma_whenMouseClick");
        let T_RESPUESTA: number = null;
        this.oracleFormsBuiltins.commit_form();
        // ANFDRPJ_PUP_ACTUSUM();
        console.log("Exiting ANFDRPJ_variable_actualizaSuma_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFDRPJ_variable_percod_whenValidateItem() {
        console.log("Entering ANFDRPJ_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfdrpj_variable/anfdrpj_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFDRPJ_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFDRPJ_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('IMPU');
    // GO_BLOCK('ANTDRXT_PJ_1');
    // --GO_ITEM ('ANTDRXT_PJ_1.P1'); END;
    //#endregion
    async ANFDRPJ_variable_btnIngegre_whenButtonPressed() {
        console.log("Entering ANFDRPJ_variable_btnIngegre_whenButtonPressed");
        console.log("Exiting ANFDRPJ_variable_btnIngegre_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP');
    //   IF :PERCOD IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD, :TOTAL_IE1);
    //   END IF;
    //    
    //   IF :PERCOD_2 IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD_2, :TOTAL_IE2);   COMMIT;
    //   END IF;
    //   
    //   IF :PERCOD_3 IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD_3, :TOTAL_IE3);
    //   END IF;
    // 
    // PUP_CARGAD ('ANTDRXT_PJ_1','IA');
    // PUP_CARGAD ('ANTDRXT_PJ_2','EA');
    // PUP_CARGAD ('ANTDRXT_PJ_3','IP');
    // 
    // END;
    //#endregion
    async ANFDRPJ_variable_btnSumas_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_btnSumas_whenMouseClick");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_3", "IP");
        if ((this.VARIABLE.PERCOD != null)) {
            // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD, TOTAL_IE1);
        }
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD_2, TOTAL_IE2);
        }
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD_3, TOTAL_IE3);
        }
        // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_3", "IP");
        console.log("Exiting ANFDRPJ_variable_btnSumas_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // BEGIN
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    //     RUN_PRODUCT(REPORTS,'ANTDRPNA',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFDRPJ_variable_impDecrta_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_impDecrta_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: any = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANTDRPNA", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFDRPJ_variable_impDecrta_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP');
    // 
    // 
    // /*
    // DECLARE
    // 
    //   PROCEDURE GUARDA (P_NIT VARCHAR2, P_PER VARCHAR2, P_GRU VARCHAR2, P_COD VARCHAR2, P_VALOR NUMBER) IS
    //   BEGIN 
    //    UPDATE ANTDRXT_PJ SET DRXTPJ_VALORC = P_VALOR
    //        WHERE DRXTPJ_GRUCTA  = P_GRU
    //        AND  DRXTPJ_CODTER =  P_NIT
    //        AND DRXTPJ_CODPER = P_PER
    //        AND DRXTPJ_CODCTA = P_COD;
    //   END;
    // 
    // BEGIN
    //  
    //  GO_BLOCK ('ANTDRXT_PJ_3');
    //  FIRST_RECORD;
    // 
    //  LOOP
    //   GUARDA (:NITTER, :PERCOD, 'IP', :ANTDRXT_PJ_3.COD, :ANTDRXT_PJ_3.P1);
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    //  END LOOP;
    //  FIRST_RECORD;
    //  
    //  LOOP
    //   GUARDA (:NITTER, :PERCOD_2, 'IP', :ANTDRXT_PJ_3.COD, :ANTDRXT_PJ_3.P2);
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    //  END LOOP;
    //   FIRST_RECORD;
    //  
    //  LOOP
    //   GUARDA (:NITTER, :PERCOD_3, 'IP', :ANTDRXT_PJ_3.COD, :ANTDRXT_PJ_3.P3);
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    //  END LOOP;
    //  FIRST_RECORD;
    //     
    //     COMMIT;
    // END;    */; END;
    //#endregion
    async ANFDRPJ_variable_btnGuarda_whenButtonPressed() {
        console.log("Entering ANFDRPJ_variable_btnGuarda_whenButtonPressed");
        console.log("Exiting ANFDRPJ_variable_btnGuarda_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS2');
    // GO_BLOCK('ANTDRXT_PJ_3'); END;
    //#endregion
    async ANFDRPJ_variable_btnImpu_whenButtonPressed() {
        console.log("Entering ANFDRPJ_variable_btnImpu_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ_3");
        console.log("Exiting ANFDRPJ_variable_btnImpu_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ_P.DRXTPJ_VALORC');
    //  PREVIOUS_RECORD;
    //  PREVIOUS_RECORD; END;
    //#endregion
    async ANFDRPJ_variable_txtTotPat2_keyUp() {
        console.log("Entering ANFDRPJ_variable_txtTotPat2_keyUp");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.previous_record();
        this.oracleFormsBuiltins.previous_record();
        console.log("Exiting ANFDRPJ_variable_txtTotPat2_keyUp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ_P.DRXTPJ_VALORC');
    //  NEXT_RECORD;
    //  NEXT_RECORD; END;
    //#endregion
    async ANFDRPJ_variable_txtTotPat2_keyDown() {
        console.log("Entering ANFDRPJ_variable_txtTotPat2_keyDown");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.next_record();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting ANFDRPJ_variable_txtTotPat2_keyDown");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ_P2.DRXTPJ_VALORC');
    //  PREVIOUS_RECORD;
    //  PREVIOUS_RECORD; END;
    //#endregion
    async ANFDRPJ_variable_txtTotPat3_keyUp() {
        console.log("Entering ANFDRPJ_variable_txtTotPat3_keyUp");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P2.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.previous_record();
        this.oracleFormsBuiltins.previous_record();
        console.log("Exiting ANFDRPJ_variable_txtTotPat3_keyUp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ_P2.DRXTPJ_VALORC');
    //  NEXT_RECORD;
    //  NEXT_RECORD; END;
    //#endregion
    async ANFDRPJ_variable_txtTotPat3_keyDown() {
        console.log("Entering ANFDRPJ_variable_txtTotPat3_keyDown");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P2.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.next_record();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting ANFDRPJ_variable_txtTotPat3_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPTER TER.TERPER%TYPE;
    // BEGIN
    //  BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
    //    INTO :DES_NITTER,TIPTER
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   
    // 
    // IF TIPTER <> 'J' THEN
    //  IF :GLOBAL.NIT IS NULL THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO DIFERENTE DE PERSONA JURÍDICA ....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END IF;
    // 
    // END;  
    //#endregion
    async ANFDRPJ_variable_nitter_whenValidateItem() {
        console.log("Entering ANFDRPJ_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfdrpj_variable/anfdrpj_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFDRPJ_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPTER != "J") {
            // if ((GLOBAL.NIT == null)) {
            //     ANFDRPJ_LIB$ALERTA("MENSAJE", "TERCERO DIFERENTE DE PERSONA JURÍDICA ....", null, null, null, T_RESPUESTA);
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
        }
        console.log("Exiting ANFDRPJ_variable_nitter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN       
    // IF :VARIABLE.NITTER IS NULL OR :VARIABLE.PERCOD IS NULL THEN
    //      LIB$ALERTA('MENSAJE','TERCERO SIN SELECCIONAR O PERIODO SIN SELECCIONAR ...',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    // 
    // /*PUP_CARGAD ('ANTDRXT_PJ_1','IA');
    // PUP_CARGAD ('ANTDRXT_PJ_2','EA');
    // PUP_CARGAD ('ANTDRXT_PJ_3','IP');
    // */
    // -----------------
    //   IF :PERCOD IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD, :TOTAL_IE1); COMMIT;
    //   END IF;
    //    
    //   IF :PERCOD_2 IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD_2, :TOTAL_IE2);   COMMIT;
    //   END IF;
    //   
    //   IF :PERCOD_3 IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD_3, :TOTAL_IE3); COMMIT;
    //   END IF;
    // 
    // PUP_CARGAD ('ANTDRXT_PJ_1','IA');
    // PUP_CARGAD ('ANTDRXT_PJ_2','EA');
    // PUP_CARGAD ('ANTDRXT_PJ_3','IP');
    // -----------------
    // GO_BLOCK('ANTDRXT_PJ_1');
    // 
    // END IF;
    // END;
    //#endregion
    async ANFDRPJ_variable_siguiente_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_siguiente_whenMouseClick");
        let T_RESPUESTA: number = null;
        if (((this.VARIABLE.NITTER == null) || (this.VARIABLE.PERCOD == null))) {
            // ANFDRPJ_LIB$ALERTA("MENSAJE", "TERCERO SIN SELECCIONAR O PERIODO SIN SELECCIONAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            if ((this.VARIABLE.PERCOD != null)) {
                // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD, TOTAL_IE1);
            }
            if ((this.VARIABLE.PERCOD_2 != null)) {
                // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD_2, TOTAL_IE2);
            }
            if ((this.VARIABLE.PERCOD_3 != null)) {
                // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD_3, TOTAL_IE3);
            }
            // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_1", "IA");
            // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_2", "EA");
            // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_3", "IP");
            this.oracleFormsBuiltins.go_block("ANTDRXT_PJ_1");
        }
        console.log("Exiting ANFDRPJ_variable_siguiente_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  V_PROGRAMA VARCHAR2(10);
    // 
    // BEGIN
    //  COMMIT_FORM;
    //   V_PROGRAMA := F_SIGUIENTE_F;
    //  PUP_LLAMAR_SIGUIENTE (V_PROGRAMA);
    // 
    // END;
    //#endregion
    async ANFDRPJ_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFDRPJ_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFDRPJ_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFDRPJ_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP');
    // 
    // 
    // /*
    // DECLARE
    // 
    //   PROCEDURE GUARDA (P_NIT VARCHAR2, P_PER VARCHAR2, P_GRU VARCHAR2, P_COD VARCHAR2, P_VALOR NUMBER) IS
    //   BEGIN 
    //    UPDATE ANTDRXT_PJ SET DRXTPJ_VALORC = P_VALOR
    //        WHERE DRXTPJ_GRUCTA  = P_GRU
    //        AND  DRXTPJ_CODTER =  P_NIT
    //        AND DRXTPJ_CODPER = P_PER
    //        AND DRXTPJ_CODCTA = P_COD;
    //   END;
    // 
    // BEGIN
    //  
    //  GO_BLOCK ('ANTDRXT_PJ_3');
    //  FIRST_RECORD;
    // 
    //  LOOP
    //   GUARDA (:NITTER, :PERCOD, 'IP', :ANTDRXT_PJ_3.COD, :ANTDRXT_PJ_3.P1);
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    //  END LOOP;
    //  FIRST_RECORD;
    //  
    //  LOOP
    //   GUARDA (:NITTER, :PERCOD_2, 'IP', :ANTDRXT_PJ_3.COD, :ANTDRXT_PJ_3.P2);
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    //  END LOOP;
    //   FIRST_RECORD;
    //  
    //  LOOP
    //   GUARDA (:NITTER, :PERCOD_3, 'IP', :ANTDRXT_PJ_3.COD, :ANTDRXT_PJ_3.P3);
    //   EXIT WHEN :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    //  END LOOP;
    //  FIRST_RECORD;
    //     
    //     COMMIT;
    // END;    */; END;
    //#endregion
    async ANFDRPJ_variable_item375_whenButtonPressed() {
        console.log("Entering ANFDRPJ_variable_item375_whenButtonPressed");
        console.log("Exiting ANFDRPJ_variable_item375_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // 
    // PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP');
    // 
    //   IF :PERCOD IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD, :TOTAL_IE1);
    //   END IF;
    //    
    //   IF :PERCOD_2 IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD_2, :TOTAL_IE2);   COMMIT;
    //   END IF;
    //   
    //   IF :PERCOD_3 IS NOT NULL THEN
    //    PUP_SUMAS (:NITTER, :PERCOD_3, :TOTAL_IE3);
    //   END IF;
    // 
    // PUP_CARGAD ('ANTDRXT_PJ_1','IA');
    // PUP_CARGAD ('ANTDRXT_PJ_2','EA');
    // PUP_CARGAD ('ANTDRXT_PJ_3','IP');
    // 
    // GO_BLOCK('ANTDRXT_PJ_1');
    // 
    // END;
    //#endregion
    async ANFDRPJ_variable_sumatorias2_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_sumatorias2_whenMouseClick");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_3", "IP");
        if ((this.VARIABLE.PERCOD != null)) {
            // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD, TOTAL_IE1);
        }
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD_2, TOTAL_IE2);
        }
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // ANFDRPJ_PUP_SUMAS(NITTER, PERCOD_3, TOTAL_IE3);
        }
        // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_CARGAD("ANTDRXT_PJ_3", "IP");
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ_1");
        console.log("Exiting ANFDRPJ_variable_sumatorias2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTDRXT_PJ');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2');
    // END;
    //#endregion
    async ANFDRPJ_variable_item374_whenMouseClick() {
        console.log("Entering ANFDRPJ_variable_item374_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTDRXT_PJ");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFDRPJ_variable_item374_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC');
    //  PREVIOUS_RECORD;
    //  PREVIOUS_RECORD; END;
    //#endregion
    async ANFDRPJ_variable_txtTotPat_keyUp() {
        console.log("Entering ANFDRPJ_variable_txtTotPat_keyUp");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.previous_record();
        this.oracleFormsBuiltins.previous_record();
        console.log("Exiting ANFDRPJ_variable_txtTotPat_keyUp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC');
    //  NEXT_RECORD;
    //  NEXT_RECORD; END;
    //#endregion
    async ANFDRPJ_variable_txtTotPat_keyDown() {
        console.log("Entering ANFDRPJ_variable_txtTotPat_keyDown");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.next_record();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting ANFDRPJ_variable_txtTotPat_keyDown");
    }

    //#region PLSQL
    // BEGIN PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP'); END;
    //#endregion
    async ANFDRPJ_antdrxtPj1_keyCommit() {
        console.log("Entering ANFDRPJ_antdrxtPj1_keyCommit");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_3", "IP");
        console.log("Exiting ANFDRPJ_antdrxtPj1_keyCommit");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('ANTDRXT_PJ_1.DESC',WIDTH,150); END;
    //#endregion
    async ANFDRPJ_antdrxtPj1_desc_whenMouseEnter() {
        console.log("Entering ANFDRPJ_antdrxtPj1_desc_whenMouseEnter");
        this.oracleFormsBuiltins.set_item_property("ANTDRXT_PJ_1.DESC", "WIDTH", "150");
        console.log("Exiting ANFDRPJ_antdrxtPj1_desc_whenMouseEnter");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('ANTDRXT_PJ_1.DESC',WIDTH,97); END;
    //#endregion
    async ANFDRPJ_antdrxtPj1_desc_whenMouseLeave() {
        console.log("Entering ANFDRPJ_antdrxtPj1_desc_whenMouseLeave");
        this.oracleFormsBuiltins.set_item_property("ANTDRXT_PJ_1.DESC", "WIDTH", "97");
        console.log("Exiting ANFDRPJ_antdrxtPj1_desc_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN PUP_GUARDAD ('ANTDRXT_PJ_1','IA');
    // PUP_GUARDAD ('ANTDRXT_PJ_2','EA');
    // PUP_GUARDAD ('ANTDRXT_PJ_3','IP'); END;
    //#endregion
    async ANFDRPJ_antdrxtPj2_keyCommit() {
        console.log("Entering ANFDRPJ_antdrxtPj2_keyCommit");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_1", "IA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_2", "EA");
        // ANFDRPJ_PUP_GUARDAD("ANTDRXT_PJ_3", "IP");
        console.log("Exiting ANFDRPJ_antdrxtPj2_keyCommit");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('ANTDRXT_PJ_2.DESC',WIDTH,150); END;
    //#endregion
    async ANFDRPJ_antdrxtPj2_desc_whenMouseEnter() {
        console.log("Entering ANFDRPJ_antdrxtPj2_desc_whenMouseEnter");
        this.oracleFormsBuiltins.set_item_property("ANTDRXT_PJ_2.DESC", "WIDTH", "150");
        console.log("Exiting ANFDRPJ_antdrxtPj2_desc_whenMouseEnter");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('ANTDRXT_PJ_2.DESC',WIDTH,97); END;
    //#endregion
    async ANFDRPJ_antdrxtPj2_desc_whenMouseLeave() {
        console.log("Entering ANFDRPJ_antdrxtPj2_desc_whenMouseLeave");
        this.oracleFormsBuiltins.set_item_property("ANTDRXT_PJ_2.DESC", "WIDTH", "97");
        console.log("Exiting ANFDRPJ_antdrxtPj2_desc_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFDRPJ_toolbar_whenButtonPressed() {
        console.log("Entering ANFDRPJ_toolbar_whenButtonPressed");
        // ANFDRPJ_TOOLBAR_ACTIONS();
        console.log("Exiting ANFDRPJ_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFDRPJ_toolbar_whenMouseLeave() {
        console.log("Entering ANFDRPJ_toolbar_whenMouseLeave");
        // ANFDRPJ_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFDRPJ_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFDRPJ_toolbar_whenNewFormInstance() {
        console.log("Entering ANFDRPJ_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFDRPJ_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ.DRXTPJ_CODCTA = 'PB003' THEN
    //   :TXT_TOT_PAT := :ANTDRXT_PJ.DRXTPJ_VALORC;
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPj_keyNxtrec() {
        console.log("Entering ANFDRPJ_antdrxtPj_keyNxtrec");
        if (this.ANTDRXT_PJ.DRXTPJ_CODCTA == "PB003") {
            // this.ANTDRXT_PJ.TXT_TOT_PAT = this.ANTDRXT_PJ.DRXTPJ_VALORC;
        }
        console.log("Exiting ANFDRPJ_antdrxtPj_keyNxtrec");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ.DRXTPJ_CODCTA = 'PB004' THEN
    //   GO_ITEM('TXT_TOT_PAT');
    //  ELSE
    //  UP; 
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPj_keyUp() {
        console.log("Entering ANFDRPJ_antdrxtPj_keyUp");
        if (this.ANTDRXT_PJ.DRXTPJ_CODCTA == "PB004") {
            this.oracleFormsBuiltins.go_item("TXT_TOT_PAT");
        }
        else {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFDRPJ_antdrxtPj_keyUp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA'); END;
    //#endregion
    async ANFDRPJ_antdrxtPj_keyListval() {
        console.log("Entering ANFDRPJ_antdrxtPj_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA");
        console.log("Exiting ANFDRPJ_antdrxtPj_keyListval");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DCDRPJ_DESCTA 
    //   INTO   :ANTDRXT_PJ.DES_CUENTA
    //    FROM ANTDCDR_PJ
    //   WHERE DCDRPJ_CODCTA =:ANTDRXT_PJ.DRXTPJ_CODCTA
    //     AND DCDRPJ_GRUCTA ='PB'
    //     ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // 
    //  IF :ANTDRXT_PJ.DRXTPJ_CODCTA = 'PB003' THEN
    //   :TXT_TOT_PAT := :ANTDRXT_PJ.DRXTPJ_VALORC;
    //  END IF;
    //#endregion
    async ANFDRPJ_antdrxtPj_postQuery() {
        console.log("Entering ANFDRPJ_antdrxtPj_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("DRXTPJ_CODCTA", this.ANTDRXT_PJ.DRXTPJ_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfdrpj_antdrxt_pj/anfdrpj_antdrxtpj_postquery_query1", payload1);
        // get values from result
        this.ANTDRXT_PJ.DES_CUENTA = result1[0].get("ANTDRXT_PJ.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFDRPJ_antdrxtPj_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ.DRXTPJ_CODCTA = 'PB002' THEN
    //   GO_ITEM('TXT_TOT_PAT');
    //  ELSE
    //  DOWN; 
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPj_keyDown() {
        console.log("Entering ANFDRPJ_antdrxtPj_keyDown");
        if (this.ANTDRXT_PJ.DRXTPJ_CODCTA == "PB002") {
            this.oracleFormsBuiltins.go_item("TXT_TOT_PAT");
        }
        else {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFDRPJ_antdrxtPj_keyDown");
    }

    //#region PLSQL
    // BEGIN :ANTDRXT_PJ.DRXTPJ_VALORC := FBD_COL_CALCULADORA(:CALCULADORA );
    // GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC');
    // HIDE_VIEW('CANVAS4'); END;
    //#endregion
    async ANFDRPJ_antdrxtPj_calculadora_keyNextItem() {
        console.log("Entering ANFDRPJ_antdrxtPj_calculadora_keyNextItem");
        // this.ANTDRXT_PJ.DRXTPJ_VALORC = FBD_COL_CALCULADORA(CALCULADORA);
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFDRPJ_antdrxtPj_calculadora_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC');
    // HIDE_VIEW('CANVAS4'); END;
    //#endregion
    async ANFDRPJ_antdrxtPj_calculadora_keyHelp() {
        console.log("Entering ANFDRPJ_antdrxtPj_calculadora_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFDRPJ_antdrxtPj_calculadora_keyHelp");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ_P2.DRXTPJ_CODCTA = 'PB004' THEN
    //   GO_ITEM('TXT_TOT_PAT3');
    //  ELSE
    //  UP; 
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_keyUp() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_keyUp");
        if (this.ANTDRXT_PJ_P2.DRXTPJ_CODCTA == "PB004") {
            this.oracleFormsBuiltins.go_item("TXT_TOT_PAT3");
        }
        else {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFDRPJ_antdrxtPjP2_keyUp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_P2'); END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_keyListval() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_P2");
        console.log("Exiting ANFDRPJ_antdrxtPjP2_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ_P2.DRXTPJ_CODCTA = 'PB003' THEN
    //   :TXT_TOT_PAT3 := :ANTDRXT_PJ_P2.DRXTPJ_VALORC;
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_postQuery() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_postQuery");
        if (this.ANTDRXT_PJ_P2.DRXTPJ_CODCTA == "PB003") {
            // this.ANTDRXT_PJ_P2.TXT_TOT_PAT3 = this.ANTDRXT_PJ_P2.DRXTPJ_VALORC;
        }
        console.log("Exiting ANFDRPJ_antdrxtPjP2_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :ANTDRXT_PJ_P2.DRXTPJ_CODCTA = 'PB002' THEN
    //   GO_ITEM('TXT_TOT_PAT3');
    //  ELSE
    //  DOWN; 
    //  END IF; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_keyDown() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_keyDown");
        if (this.ANTDRXT_PJ_P2.DRXTPJ_CODCTA == "PB002") {
            this.oracleFormsBuiltins.go_item("TXT_TOT_PAT3");
        }
        else {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFDRPJ_antdrxtPjP2_keyDown");
    }

    //#region PLSQL
    // BEGIN :ANTDRXT_PJ_P2.DRXTPJ_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_P2 );
    // GO_ITEM('ANTDRXT_PJ_P2.DRXTPJ_VALORC');
    // HIDE_VIEW('CANVAS6'); END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_calculadoraP2_keyNextItem() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_calculadoraP2_keyNextItem");
        // this.ANTDRXT_PJ_P2.DRXTPJ_VALORC = FBD_COL_CALCULADORA(CALCULADORA_P2);
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P2.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS6");
        console.log("Exiting ANFDRPJ_antdrxtPjP2_calculadoraP2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXT_PJ_P2.DRXTPJ_VALORC');
    // HIDE_VIEW('CANVAS6'); END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_calculadoraP2_keyHelp() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_calculadoraP2_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXT_PJ_P2.DRXTPJ_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS6");
        console.log("Exiting ANFDRPJ_antdrxtPjP2_calculadoraP2_keyHelp");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_3 IS NULL THEN
    // GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC'); 
    //  LIB$ALERTA('MENSAJE','TERCER PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXT_PJ.DRXTPJ_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    // */NULL; END;
    //#endregion
    async ANFDRPJ_antdrxtPjP2_drxtpjValorc_whenNewItemInstance() {
        console.log("Entering ANFDRPJ_antdrxtPjP2_drxtpjValorc_whenNewItemInstance");
        console.log("Exiting ANFDRPJ_antdrxtPjP2_drxtpjValorc_whenNewItemInstance");
    }

}

