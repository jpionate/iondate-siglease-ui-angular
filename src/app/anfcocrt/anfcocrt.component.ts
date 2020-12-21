import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCOCRT business logic
import {
    BLOCK3,
    VARIABLE,
    BLOQUE2,
    TOOLBAR,
    ANTCOMCENR,
    BASE
} from "./ANFCOCRT_models";



// class ANFCOCRT
@Component({
    selector: 'app-anfcocrt',
    templateUrl: './anfcocrt.component.html',
})
export class AnfcocrtComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public BLOCK3: BLOCK3 = new BLOCK3();
    public VARIABLE: VARIABLE = new VARIABLE();
    public BLOQUE2: BLOQUE2 = new BLOQUE2();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTCOMCENR: ANTCOMCENR = new ANTCOMCENR();
    public BASE: BASE = new BASE();


    async ANFCOCRT_keyDelrec() {
        // null;
    }

    async ANFCOCRT_keyClrrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFCOCRT_whenMouseDoubleclick() {
        console.log("Entering ANFCOCRT_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFCOCRT_whenMouseDoubleclick");
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
    // :CODCEN := '002';
    // 
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // --PARA SER INVOCADO POR OTRA VENTANA
    // IF  :this.PARAMETER.get("P_CTRL") = 'Q' THEN
    // :VARIABLE.NITTER :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFCOCRT_whenNewFormInstance() {
        console.log("Entering ANFCOCRT_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfcocrt/anfcocrt_whennewforminstance_query1", payload1);
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

        // this.CODCEN = "002";
        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.NITTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFCOCRT_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFCOCRT_preForm() {
        console.log("Entering ANFCOCRT_preForm");
        // ANFCOCRT_PANTALLA();
        // ANFCOCRT_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFCOCRT_preForm");
    }

    async ANFCOCRT_keyCommit() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :BLOCK3.DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:BLOCK3.COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN 
    //   SELECT SUM (NVL(COMCRI_MONTML,0))
    //     INTO :TOTML2
    //     FROM ANTCOMCENR
    //    WHERE COMCRI_CODCEN=:CODCEN          
    //      AND COMCRI_NITTER=:NITTER          
    //      AND COMCRI_PERCOD=:PERCOD          
    //      AND COMCRI_TIPCRE <> '004';         
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :TOTML2:=0;
    //   END;
    //   BEGIN
    //    SELECT SUM (NVL(COMCRI_MONTME,0))
    //     INTO :TOTME2
    //     FROM ANTCOMCENR
    //    WHERE COMCRI_CODCEN=:CODCEN          
    //      AND COMCRI_NITTER=:NITTER          
    //      AND COMCRI_PERCOD=:PERCOD          
    //      AND COMCRI_TIPCRE <> '004';         
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :TOTME2:=0;
    //   END;
    //   :TOTTOT2:=NVL(:TOTML2,0)+NVL(:TOTME2,0);
    //#endregion
    async ANFCOCRT_block3_postQuery() {
        console.log("Entering ANFCOCRT_block3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.BLOCK3.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_block3/anfcocrt_block3_postquery_query1", payload1);
        // get values from result
        this.BLOCK3.DES_TIPOCREDITO = result1[0].get("BLOCK3.DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CODCEN", this.VARIABLE.CODCEN);
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfcocrt_block3/anfcocrt_block3_postquery_query2", payload2);
        // get values from result
        // TOTML2 = result2[0].get("TOTML2");
        if (result2 == null || result2.length == 0) {

            // this.BLOCK3.TOTML2 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("CODCEN", this.VARIABLE.CODCEN);
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfcocrt_block3/anfcocrt_block3_postquery_query3", payload3);
        // get values from result
        // TOTME2 = result3[0].get("TOTME2");
        if (result3 == null || result3.length == 0) {

            // this.BLOCK3.TOTME2 = 0;
        }

        console.log("Exiting ANFCOCRT_block3_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :BLOCK3.DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:BLOCK3.COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TIPO DE CREDITO INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //   RAISE FORM_TRIGGER_FAILURE; 
    // END;
    //#endregion
    async ANFCOCRT_block3_comcriTipcre_whenValidateItem() {
        console.log("Entering ANFCOCRT_block3_comcriTipcre_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.BLOCK3.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_block3/anfcocrt_block3_comcritipcre_whenvalidateitem_query1", payload1);
        // get values from result
        this.BLOCK3.DES_TIPOCREDITO = result1[0].get("BLOCK3.DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "TIPO DE CREDITO INEXISTENTE ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_block3_comcriTipcre_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD1
    //    FROM PER
    //    WHERE PERCOD=:PERCOD1;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 2 INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFCOCRT_variable_percod1_whenValidateItem() {
        console.log("Entering ANFCOCRT_variable_percod1_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD1", this.VARIABLE.PERCOD1);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_variable/anfcocrt_variable_percod1_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD1 = result1[0].get("DES_PERCOD1");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "PERIODO 2 INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_variable_percod1_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD2
    //    FROM PER
    //    WHERE PERCOD=:PERCOD2;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO  3 INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFCOCRT_variable_percod2_whenValidateItem() {
        console.log("Entering ANFCOCRT_variable_percod2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD2", this.VARIABLE.PERCOD2);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_variable/anfcocrt_variable_percod2_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD2 = result1[0].get("DES_PERCOD2");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "PERIODO  3 INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_variable_percod2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('ANTCOMCENR');
    // EXECUTE_QUERY;
    // GO_BLOCK('BLOQUE2');
    // EXECUTE_QUERY;
    // GO_BLOCK('BLOCK3');
    // EXECUTE_QUERY; END;
    //#endregion
    async ANFCOCRT_variable_percod2_keyNextItem() {
        console.log("Entering ANFCOCRT_variable_percod2_keyNextItem");
        this.oracleFormsBuiltins.go_block("ANTCOMCENR");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("BLOQUE2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("BLOCK3");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCOCRT_variable_percod2_keyNextItem");
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
    async ANFCOCRT_variable_percod_whenValidateItem() {
        console.log("Entering ANFCOCRT_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_variable/anfcocrt_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_NITTER
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFCOCRT_variable_nitter_whenValidateItem() {
        console.log("Entering ANFCOCRT_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_variable/anfcocrt_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_variable_nitter_whenValidateItem");
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
    async ANFCOCRT_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFCOCRT_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFCOCRT_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFCOCRT_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT CENRIE_DESCRI 
    //    INTO :DES_CODCEN 
    //    FROM ANTCENRIES
    //    WHERE CENRIE_CODCEN=:CODCEN;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','CENTRAL DE RIESGO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFCOCRT_variable_codcen_whenValidateItem() {
        console.log("Entering ANFCOCRT_variable_codcen_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("CODCEN", this.VARIABLE.CODCEN);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_variable/anfcocrt_variable_codcen_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_CODCEN = result1[0].get("DES_CODCEN");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "CENTRAL DE RIESGO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_variable_codcen_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :BLOQUE2.DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:BLOQUE2.COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN 
    //   SELECT SUM (NVL(COMCRI_MONTML,0))
    //     INTO :TOTML
    //     FROM ANTCOMCENR
    //    WHERE COMCRI_CODCEN=:CODCEN          
    //      AND COMCRI_NITTER=:NITTER          
    //      AND COMCRI_PERCOD=:PERCOD          
    //      AND COMCRI_TIPCRE <> '004';         
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :TOTML:=0;
    //   END;
    //   BEGIN
    //    SELECT SUM (NVL(COMCRI_MONTME,0))
    //     INTO :TOTME
    //     FROM ANTCOMCENR
    //    WHERE COMCRI_CODCEN=:CODCEN          
    //      AND COMCRI_NITTER=:NITTER          
    //      AND COMCRI_PERCOD=:PERCOD          
    //      AND COMCRI_TIPCRE <> '004';         
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :TOTME:=0;
    //   END;
    //   :TOTTOT:=NVL(:TOTML,0)+NVL(:TOTME,0);
    //#endregion
    async ANFCOCRT_bloque2_postQuery() {
        console.log("Entering ANFCOCRT_bloque2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.BLOQUE2.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_bloque2/anfcocrt_bloque2_postquery_query1", payload1);
        // get values from result
        this.BLOQUE2.DES_TIPOCREDITO = result1[0].get("BLOQUE2.DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CODCEN", this.VARIABLE.CODCEN);
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfcocrt_bloque2/anfcocrt_bloque2_postquery_query2", payload2);
        // get values from result
        // TOTML = result2[0].get("TOTML");
        if (result2 == null || result2.length == 0) {

            // this.BLOQUE2.TOTML = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("CODCEN", this.VARIABLE.CODCEN);
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfcocrt_bloque2/anfcocrt_bloque2_postquery_query3", payload3);
        // get values from result
        // TOTME = result3[0].get("TOTME");
        if (result3 == null || result3.length == 0) {

            // this.BLOQUE2.TOTME = 0;
        }

        console.log("Exiting ANFCOCRT_bloque2_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :BLOQUE2.DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:BLOQUE2.COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TIPO DE CREDITO INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //   RAISE FORM_TRIGGER_FAILURE; 
    // END;
    //#endregion
    async ANFCOCRT_bloque2_comcriTipcre_whenValidateItem() {
        console.log("Entering ANFCOCRT_bloque2_comcriTipcre_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.BLOQUE2.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_bloque2/anfcocrt_bloque2_comcritipcre_whenvalidateitem_query1", payload1);
        // get values from result
        this.BLOQUE2.DES_TIPOCREDITO = result1[0].get("BLOQUE2.DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "TIPO DE CREDITO INEXISTENTE ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_bloque2_comcriTipcre_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFCOCRT_toolbar_whenButtonPressed() {
        console.log("Entering ANFCOCRT_toolbar_whenButtonPressed");
        // ANFCOCRT_TOOLBAR_ACTIONS();
        console.log("Exiting ANFCOCRT_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFCOCRT_toolbar_whenMouseLeave() {
        console.log("Entering ANFCOCRT_toolbar_whenMouseLeave");
        // ANFCOCRT_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFCOCRT_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFCOCRT_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCOCRT_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCOCRT_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :ANTCOMCENR.DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:ANTCOMCENR.COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN 
    //   SELECT SUM (NVL(COMCRI_MONTML,0))
    //     INTO :TOTAL_MONEDALEGAL
    //     FROM ANTCOMCENR
    //    WHERE COMCRI_CODCEN=:CODCEN          
    //      AND COMCRI_NITTER=:NITTER          
    //      AND COMCRI_PERCOD=:PERCOD          
    //      AND COMCRI_TIPCRE <> '004';         
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :TOTAL_MONEDALEGAL:=0;
    //   END;
    //   BEGIN
    //    SELECT SUM (NVL(COMCRI_MONTME,0))
    //     INTO :TOTAL_MONEDAEXTRA
    //     FROM ANTCOMCENR
    //    WHERE COMCRI_CODCEN=:CODCEN          
    //      AND COMCRI_NITTER=:NITTER          
    //      AND COMCRI_PERCOD=:PERCOD          
    //      AND COMCRI_TIPCRE <> '004';         
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      :TOTAL_MONEDAEXTRA:=0;
    //   END;
    //   :TOTAL_ENDEU:=NVL(:TOTAL_MONEDALEGAL,0)+NVL(:TOTAL_MONEDAEXTRA,0);
    //#endregion
    async ANFCOCRT_antcomcenr_postQuery() {
        console.log("Entering ANFCOCRT_antcomcenr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.ANTCOMCENR.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_antcomcenr/anfcocrt_antcomcenr_postquery_query1", payload1);
        // get values from result
        this.ANTCOMCENR.DES_TIPOCREDITO = result1[0].get("ANTCOMCENR.DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CODCEN", this.VARIABLE.CODCEN);
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfcocrt_antcomcenr/anfcocrt_antcomcenr_postquery_query2", payload2);
        // get values from result
        // this.TOTAL_MONEDALEGAL = result2[0].get("TOTAL_MONEDALEGAL");
        if (result2 == null || result2.length == 0) {

            // this.ANTCOMCENR.TOTAL_MONEDALEGAL = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("CODCEN", this.VARIABLE.CODCEN);
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfcocrt_antcomcenr/anfcocrt_antcomcenr_postquery_query3", payload3);
        // get values from result
        // TOTAL_MONEDAEXTRA = result3[0].get("TOTAL_MONEDAEXTRA");
        if (result3 == null || result3.length == 0) {

            // this.ANTCOMCENR.TOTAL_MONEDAEXTRA = 0;
        }

        console.log("Exiting ANFCOCRT_antcomcenr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :ANTCOMCENR.DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:ANTCOMCENR.COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TIPO DE CREDITO INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //   RAISE FORM_TRIGGER_FAILURE; 
    // END;
    //#endregion
    async ANFCOCRT_antcomcenr_comcriTipcre_whenValidateItem() {
        console.log("Entering ANFCOCRT_antcomcenr_comcriTipcre_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.ANTCOMCENR.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcocrt_antcomcenr/anfcocrt_antcomcenr_comcritipcre_whenvalidateitem_query1", payload1);
        // get values from result
        this.ANTCOMCENR.DES_TIPOCREDITO = result1[0].get("ANTCOMCENR.DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

            // ANFCOCRT_LIB$ALERTA("MENSAJE", "TIPO DE CREDITO INEXISTENTE ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCOCRT_antcomcenr_comcriTipcre_whenValidateItem");
    }

}

