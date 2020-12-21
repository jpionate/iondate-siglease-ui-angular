import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCONFL business logic
import {
    ANTPROPER,
    VARIABLE,
    TOOLBAR,
    ANTPROYCEN,
    BASE
} from "./ANFCONFL_models";



// class ANFCONFL
@Component({
    selector: 'app-anfconfl',
    templateUrl: './anfconfl.component.html',
})
export class AnfconflComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTPROPER: ANTPROPER = new ANTPROPER();
    public VARIABLE: VARIABLE = new VARIABLE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTPROYCEN: ANTPROYCEN = new ANTPROYCEN();
    public BASE: BASE = new BASE();


    async ANFCONFL_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFCONFL_keyNxtblk() {
        console.log("Entering ANFCONFL_keyNxtblk");
        console.log("Exiting ANFCONFL_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFCONFL_whenMouseDoubleclick() {
        console.log("Entering ANFCONFL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFCONFL_whenMouseDoubleclick");
    }

    async ANFCONFL_keyCrerec() {
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
    //  ---------------------------------------------------------------------
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
    // -------------------------------------------------------; END;
    //#endregion
    async ANFCONFL_whenNewFormInstance() {
        console.log("Entering ANFCONFL_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfconfl/anfconfl_whennewforminstance_query1", payload1);
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

        console.log("Exiting ANFCONFL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFCONFL_preForm() {
        console.log("Entering ANFCONFL_preForm");
        // ANFCONFL_PANTALLA();
        // ANFCONFL_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFCONFL_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFCONFL_keyUp() {
        console.log("Entering ANFCONFL_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFCONFL_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async ANFCONFL_keyExit() {
        console.log("Entering ANFCONFL_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting ANFCONFL_keyExit");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFCONFL_keyCommit() {
        console.log("Entering ANFCONFL_keyCommit");
        console.log("Exiting ANFCONFL_keyCommit");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFCONFL_keyPrvblk() {
        console.log("Entering ANFCONFL_keyPrvblk");
        console.log("Exiting ANFCONFL_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFCONFL_keyDown() {
        console.log("Entering ANFCONFL_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFCONFL_keyDown");
    }

    //#region PLSQL
    // BEGIN IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '02' THEN
    //  :GLOBAL.INGRESO := :PROPER_1PERIO;
    //  END IF;
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '03' THEN
    //  :GLOBAL.GASTO :=(:PROPER_1PERIO/100) ;
    //  END IF;
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '04' THEN
    //   :GLOBAL.UTIL := :GLOBAL.INGRESO - (:GLOBAL.INGRESO * :GLOBAL.GASTO) ;
    //    :PROPER_1PERIO:= :GLOBAL.UTIL; 
    // END IF;
    // 
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '05' THEN
    //  :GLOBAL.OTINGRESO := :PROPER_1PERIO;
    // ELSIF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '06' THEN
    //  :GLOBAL.GASPER := :PROPER_1PERIO; 
    // ELSIF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '07' THEN
    //  :GLOBAL.GASFIN := :PROPER_1PERIO; 
    // ELSIF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '08' THEN
    //  :GLOBAL.OTDEUDA := :PROPER_1PERIO; 
    // END IF;
    // 
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '09' THEN
    // :GLOBAL.FLUCA :=:GLOBAL.UTIL + :GLOBAL.OTINGRESO-:GLOBAL.GASPER - :GLOBAL.GASFIN-:GLOBAL.OTDEUDA; 
    //    :PROPER_1PERIO:=:GLOBAL.FLUCA; 
    // END IF; END;
    //#endregion
    async ANFCONFL_antproper_postTextItem() {
        console.log("Entering ANFCONFL_antproper_postTextItem");
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "02")) {
        //     this.GLOBAL.INGRESO = this.ANTPROPER.PROPER_1PERIO;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "03")) {
        //     this.GLOBAL.GASTO = PROPER_1PERIO / 100;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "04")) {
        //     this.GLOBAL.UTIL = this.GLOBAL.INGRESO - (GLOBAL.INGRESO * GLOBAL.GASTO);
        //     this.ANTPROPER.PROPER_1PERIO = this.GLOBAL.UTIL;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "05")) {
        //     this.GLOBAL.OTINGRESO = this.ANTPROPER.PROPER_1PERIO;
        // }
        // else if (((PROPER_PERINI != null) && PROPER_CODPAR == "06")) {
        //     this.GLOBAL.GASPER = this.ANTPROPER.PROPER_1PERIO;
        // }
        // else if (((PROPER_PERINI != null) && PROPER_CODPAR == "07")) {
        //     this.GLOBAL.GASFIN = this.ANTPROPER.PROPER_1PERIO;
        // }
        // else if (((PROPER_PERINI != null) && PROPER_CODPAR == "08")) {
        //     this.GLOBAL.OTDEUDA = this.ANTPROPER.PROPER_1PERIO;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "09")) {
        //     this.GLOBAL.FLUCA = this.GLOBAL.UTIL + GLOBAL.OTINGRESO - GLOBAL.GASPER - GLOBAL.GASFIN - GLOBAL.OTDEUDA;
        //     this.ANTPROPER.PROPER_1PERIO = this.GLOBAL.FLUCA;
        // }
        console.log("Exiting ANFCONFL_antproper_postTextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('PROPER_TERCER'); END;
    //#endregion
    async ANFCONFL_antproper_keyListval() {
        console.log("Entering ANFCONFL_antproper_keyListval");
        this.oracleFormsBuiltins.go_item("PROPER_TERCER");
        console.log("Exiting ANFCONFL_antproper_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '02' THEN
    //  :GLOBAL.INGRESO := :PROPER_1PERIO;
    //  END IF;
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '03' THEN
    //  :GLOBAL.GASTO :=(:PROPER_1PERIO/100) ;
    //  END IF;
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '04' THEN
    //   :GLOBAL.UTIL := :GLOBAL.INGRESO - (:GLOBAL.INGRESO * :GLOBAL.GASTO) ;
    //    :PROPER_1PERIO:= :GLOBAL.UTIL; 
    // END IF;
    // 
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '05' THEN
    //  :GLOBAL.OTINGRESO := :PROPER_1PERIO;
    // ELSIF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '06' THEN
    //  :GLOBAL.GASPER := :PROPER_1PERIO; 
    // ELSIF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '07' THEN
    //  :GLOBAL.GASFIN := :PROPER_1PERIO; 
    // ELSIF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '08' THEN
    //  :GLOBAL.OTDEUDA := :PROPER_1PERIO; 
    // END IF;
    // 
    // IF :PROPER_PERINI IS NOT NULL AND :PROPER_CODPAR = '09' THEN
    // :GLOBAL.FLUCA :=:GLOBAL.UTIL + :GLOBAL.OTINGRESO-:GLOBAL.GASPER - :GLOBAL.GASFIN-:GLOBAL.OTDEUDA; 
    //    :PROPER_1PERIO:=:GLOBAL.FLUCA; 
    // END IF; END;
    //#endregion
    async ANFCONFL_antproper_preTextItem() {
        console.log("Entering ANFCONFL_antproper_preTextItem");
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "02")) {
        //     this.GLOBAL.INGRESO = this.ANTPROPER.PROPER_1PERIO;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "03")) {
        //     this.GLOBAL.GASTO = PROPER_1PERIO / 100;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "04")) {
        //     this.GLOBAL.UTIL = this.GLOBAL.INGRESO - (GLOBAL.INGRESO * GLOBAL.GASTO);
        //     this.ANTPROPER.PROPER_1PERIO = this.GLOBAL.UTIL;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "05")) {
        //     this.GLOBAL.OTINGRESO = this.ANTPROPER.PROPER_1PERIO;
        // }
        // else if (((PROPER_PERINI != null) && PROPER_CODPAR == "06")) {
        //     this.GLOBAL.GASPER = this.ANTPROPER.PROPER_1PERIO;
        // }
        // else if (((PROPER_PERINI != null) && PROPER_CODPAR == "07")) {
        //     this.GLOBAL.GASFIN = this.ANTPROPER.PROPER_1PERIO;
        // }
        // else if (((PROPER_PERINI != null) && PROPER_CODPAR == "08")) {
        //     this.GLOBAL.OTDEUDA = this.ANTPROPER.PROPER_1PERIO;
        // }
        // if (((PROPER_PERINI != null) && PROPER_CODPAR == "09")) {
        //     this.GLOBAL.FLUCA = this.GLOBAL.UTIL + GLOBAL.OTINGRESO - GLOBAL.GASPER - GLOBAL.GASFIN - GLOBAL.OTDEUDA;
        //     this.ANTPROPER.PROPER_1PERIO = this.GLOBAL.FLUCA;
        // }
        console.log("Exiting ANFCONFL_antproper_preTextItem");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY;
    // IF :PROYCEN_1PERIO IS NULL THEN
    //     GO_BLOCK('ANTPROYCEN');
    //  EXECUTE_QUERY;
    // END IF;
    // 
    // IF :PROPER_CODPAR IS NOT NULL THEN
    // GO_BLOCK('ANTPROPER');
    // GO_RECORD(1);
    // LOOP
    //   EXIT WHEN  :this._SYSTEM_SERVICE.set("LAST_RECORD", 'TRUE');
    //   NEXT_RECORD;
    // END LOOP;
    // END IF; END;
    //#endregion
    async ANFCONFL_antproper_keyExeqry() {
        console.log("Entering ANFCONFL_antproper_keyExeqry");
        this.oracleFormsBuiltins.execute_query();
        if ((this.ANTPROYCEN.PROYCEN_1PERIO == null)) {
            this.oracleFormsBuiltins.go_block("ANTPROYCEN");
            this.oracleFormsBuiltins.execute_query();
        }
        if ((this.ANTPROPER.PROPER_CODPAR != null)) {
            this.oracleFormsBuiltins.go_block("ANTPROPER");
            this.oracleFormsBuiltins.go_record(1);
        }
        console.log("Exiting ANFCONFL_antproper_keyExeqry");
    }

    //#region PLSQL
    // BEGIN NEXT_RECORD; END;
    //#endregion
    async ANFCONFL_antproper_proper1perio_keyNextItem() {
        console.log("Entering ANFCONFL_antproper_proper1perio_keyNextItem");
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting ANFCONFL_antproper_proper1perio_keyNextItem");
    }

    //#region PLSQL
    // BEGIN SELECT PARPROY_PRODES
    // INTO :CODPAR_DES
    //  FROM ANTPARPROY
    // WHERE PARPROY_PROCOD = :PROPER_CODPAR; END;
    //#endregion
    async ANFCONFL_antproper_properCodpar_postChange() {
        console.log("Entering ANFCONFL_antproper_properCodpar_postChange");
        // construct payload
        let payload1 = new Map();
        // payload1.set("PROPER_CODPAR", PROPER_CODPAR);
        // call REST API
        const result1 = await Rest.post("/anfconfl_antproper/anfconfl_antproper_propercodpar_postchange_query1", payload1);
        // get values from result
        // CODPAR_DES = result1[0].get("CODPAR_DES");
        console.log("Exiting ANFCONFL_antproper_properCodpar_postChange");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTPROYCEN');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTPROPER');
    //  EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFCONFL_variable_procesar_whenButtonPressed() {
        console.log("Entering ANFCONFL_variable_procesar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("ANTPROYCEN");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTPROPER");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCONFL_variable_procesar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTPROYCEN');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTPROPER');
    //  EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFCONFL_variable_procesar_whenMouseClick() {
        console.log("Entering ANFCONFL_variable_procesar_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTPROYCEN");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTPROPER");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCONFL_variable_procesar_whenMouseClick");
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
    //    WHEN OTHERS  THEN
    // :DES_PERCOD := 'TODOS';
    // END;  
    //#endregion
    async ANFCONFL_variable_percod_whenValidateItem() {
        console.log("Entering ANFCONFL_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfconfl_variable/anfconfl_variable_percod_whenvalidateitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        } catch (ex) {

            this.VARIABLE.DES_PERCOD = "TODOS";
        }

        console.log("Exiting ANFCONFL_variable_percod_whenValidateItem");
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
    //  END;
    // IF TIPTER <> 'N' THEN
    //   LIB$ALERTA ('MENSAJE','TERCERO DIFERENTE DE PERSONA NATURAL ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // END;  
    //#endregion
    async ANFCONFL_variable_nitter_whenValidateItem() {
        console.log("Entering ANFCONFL_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfconfl_variable/anfconfl_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFCONFL_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPTER != "N") {
            // ANFCONFL_LIB$ALERTA("MENSAJE", "TERCERO DIFERENTE DE PERSONA NATURAL ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONFL_variable_nitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFCONFL_toolbar_whenButtonPressed() {
        console.log("Entering ANFCONFL_toolbar_whenButtonPressed");
        // ANFCONFL_TOOLBAR_ACTIONS();
        console.log("Exiting ANFCONFL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFCONFL_toolbar_whenMouseLeave() {
        console.log("Entering ANFCONFL_toolbar_whenMouseLeave");
        // ANFCONFL_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFCONFL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFCONFL_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCONFL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCONFL_toolbar_whenNewFormInstance");
    }

}

