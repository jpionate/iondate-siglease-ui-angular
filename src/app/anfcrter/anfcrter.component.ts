import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCRTER business logic
import {
    VARIABLE,
    TOTALES,
    TOOLBAR,
    ANTCRXPERN,
    ANTPORCER,
    ANTCOMCENR,
    BASE
} from "./ANFCRTER_models";



// class ANFCRTER
@Component({
    selector: 'app-anfcrter',
    templateUrl: './anfcrter.component.html',
})
export class AnfcrterComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['TER_NIT', null],
        ['P_NIT', null],
        ['P_CTRL', null],
        ['PMAXPERIO', null],
        ['PCENTRAL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public TOTALES: TOTALES = new TOTALES();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTCRXPERN: ANTCRXPERN = new ANTCRXPERN();
    public ANTPORCER: ANTPORCER = new ANTPORCER();
    public ANTCOMCENR: ANTCOMCENR = new ANTCOMCENR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   CLEAR_ALL_MASTER_DETAILS;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCRTER_onClearDetails() {
        console.log("Entering ANFCRTER_onClearDetails");
        // ANFCRTER_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFCRTER_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFCRTER_whenMouseDoubleclick() {
        console.log("Entering ANFCRTER_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFCRTER_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --MOD. RICARDO TARAZONA FEC. 2006-07-25
    // --PALABRA CLAVE : PARA
    // --OBJETIVO : MANEJO DE PARAMETROS PARA LLAMAR DESDE OTRA APLICACIÓN
    // SYSTEM.MESSAGE_LEVEL:=5;
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
    //   --MANEJO DE PARAMETROS LLAMADO DE OTRA FORMA
    //   -- PARA
    //   :VARIABLE.CODCEN := :this.PARAMETER.get("PCENTRAL");
    //   :VARIABLE.NITTER := :this.PARAMETER.get("TER_NIT");
    //   :VARIABLE.PERCOD := :this.PARAMETER.get("PMAXPERIO");
    //   --
    // 
    // --:CODCEN := '002';
    // :PERCOD := TO_CHAR (SYSDATE,'YYMM');
    //   
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    //   
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :VARIABLE.NITTER  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFCRTER_whenNewFormInstance() {
        console.log("Entering ANFCRTER_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfcrter/anfcrter_whennewforminstance_query1", payload1);
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

        this.VARIABLE.CODCEN = this.PARAMETER.get("PCENTRAL");
        this.VARIABLE.NITTER = this.PARAMETER.get("TER_NIT");
        this.VARIABLE.PERCOD = this.PARAMETER.get("PMAXPERIO");
        this.VARIABLE.PERCOD = PLSQLBuiltins.sysdate().toString();
        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.NITTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFCRTER_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFCRTER_preForm() {
        console.log("Entering ANFCRTER_preForm");
        // ANFCRTER_PANTALLA();
        // ANFCRTER_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFCRTER_preForm");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // --EXIT_FORM(NO_VALIDATE); END;
    //#endregion
    async ANFCRTER_keyCommit() {
        console.log("Entering ANFCRTER_keyCommit");
        console.log("Exiting ANFCRTER_keyCommit");
    }

    //#region PLSQL
    // BEGIN EXIT_FORM(NO_VALIDATE);
    // COMMIT; END;
    //#endregion
    async ANFCRTER_keyExit() {
        console.log("Entering ANFCRTER_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting ANFCRTER_keyExit");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CODCEN IS NULL OR :NITTER IS NULL OR :PERCOD IS NULL THEN
    //     LIB$ALERTA('MENSAJE','CENTRAL DE RIESGO,TERCERO O PERIODO NO SELECCIONADOS .....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //  BEGIN
    //     :TOTALES.TOT_SALACT:= '';
    //     :TOTALES.TOT_SALMOR:= '';
    //     :TOTALES.TOT_VALCUO:= '';
    //     GO_BLOCK('ANTCRXPERN');
    //     EXECUTE_QUERY;
    //   END;
    //  END IF;
    // END;
    //#endregion
    async ANFCRTER_variable_pernatura_whenMouseClick() {
        console.log("Entering ANFCRTER_variable_pernatura_whenMouseClick");
        let T_RESPUESTA: number = null;
        if ((((this.VARIABLE.CODCEN == null) || (this.VARIABLE.NITTER == null)) || (this.VARIABLE.PERCOD == null))) {
            // ANFCRTER_LIB$ALERTA("MENSAJE", "CENTRAL DE RIESGO,TERCERO O PERIODO NO SELECCIONADOS .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.TOTALES.TOT_SALACT = null;
            this.TOTALES.TOT_SALMOR = null;
            this.TOTALES.TOT_VALCUO = null;
            this.oracleFormsBuiltins.go_block("ANTCRXPERN");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting ANFCRTER_variable_pernatura_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT MIGUSU_OPCION 
    //  INTO :GLOBAL.COD_OPCION
    //  FROM CVTMIGXUSU
    //  WHERE MIGUSU_MIGRAC = '224'
    //  AND MIGUSU_USUARI = PLSQLBuiltins.user();
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   :GLOBAL.COD_OPCION := NULL;
    //   MESSAGE('DEBE PARAMETRIZAR MIGRACIONES POR USUARIO');
    // END;
    // 
    // --:GLOBAL.COD_OPCION := '18.2.0';--:OPCIONES.COD_OPCION; -- ASIGNACIÓN DE LA OPCIÓN PARA SABER
    //                              --COMO CARGAR LA FORMA DE CARGUE
    // BEGIN
    //   IF :VARIABLE.CODCEN = '001' THEN
    //    :GLOBAL.TAB:= '001';
    //     CALL_FORM('CVFMIGRA',  "NO_HIDE", "DO_REPLACE");
    // ELSIF :VARIABLE.CODCEN = '002' THEN   --DATACREDITO
    //    :GLOBAL.TAB:= '002';
    //    :GLOBAL.VAL := '0';
    //    CALL_FORM('ANFCACIF',  "NO_HIDE", "DO_REPLACE");
    //   END IF;
    //  EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   MESSAGE('DEBE SELECCIONAR EL CÓDIGO DE LA CENTRAL DE RIESGO');
    //   GO_ITEM('VARIABLE.CODCEN');
    // END;
    //#endregion
    async ANFCRTER_variable_item126_whenButtonPressed() {
        console.log("Entering ANFCRTER_variable_item126_whenButtonPressed");
        // construct payload
        let payload1 = new Map();
        // payload1.set("COD_OPCION", GLOBAL.COD_OPCION);
        // call REST API
        const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_item126_whenbuttonpressed_query1", payload1);
        // get values from result
        // GLOBAL.COD_OPCION = result1[0].get("GLOBAL.COD_OPCION");
        if (result1 == null || result1.length == 0) {

            // this.GLOBAL.COD_OPCION = null;
            this.oracleFormsBuiltins.message("DEBE PARAMETRIZAR MIGRACIONES POR USUARIO");
        }

        if (this.VARIABLE.CODCEN == "001") {
            // this.GLOBAL.TAB = "001";
            this.oracleFormsBuiltins.call_form("CVFMIGRA", "NO_HIDE", "DO_REPLACE");
        }
        else if (this.VARIABLE.CODCEN == "002") {
            // this.GLOBAL.TAB = "002";
            // this.GLOBAL.VAL = "0";
            this.oracleFormsBuiltins.call_form("ANFCACIF", "NO_HIDE", "DO_REPLACE");
        }
        if (result1 == null || result1.length == 0) {

            this.oracleFormsBuiltins.message("DEBE SELECCIONAR EL CÓDIGO DE LA CENTRAL DE RIESGO");
            this.oracleFormsBuiltins.go_item("VARIABLE.CODCEN");
        }

        console.log("Exiting ANFCRTER_variable_item126_whenButtonPressed");
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
    async ANFCRTER_variable_percod_whenValidateItem() {
        console.log("Entering ANFCRTER_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCRTER_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO TER.TERPER%TYPE;
    //  FECCON COTDATACRTXT.DATTXT_FECCON%TYPE;
    // BEGIN
    //   BEGIN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
    //       INTO :DES_NITTER,TIPO
    //      FROM TER
    //      WHERE TERCOD=:NITTER;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END; 
    //    IF TIPO <> 'N'   THEN
    //      NULL;   
    //   ELSE
    //      IF :CODCEN = '002' THEN 
    // 
    //        BEGIN
    //        SELECT PREDIC_PREDIC,PREDIC_SCORIN
    //         INTO :PREDICTA,:SCORING
    //        FROM ANTPREDICTA
    //        WHERE PREDIC_CODTER=:NITTER
    //         AND PREDIC_CODPER=:PERCOD;
    //      EXCEPTION
    //       WHEN OTHERS THEN
    //       NULL;
    //      END;
    //      ELSE
    //        NULL;
    //       END IF;
    //  END IF;
    // END;
    //#endregion
    async ANFCRTER_variable_percod_postTextItem() {
        console.log("Entering ANFCRTER_variable_percod_postTextItem");
        let T_RESPUESTA: number = null;
        let TIPO: null = null;
        let FECCON: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_percod_posttextitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPO = result1[0].get("TIPO");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPO != "N") {
        }
        else {
            if (this.VARIABLE.CODCEN == "002") {
                let result2 = new Map();
                try {

                    // construct payload
                    let payload2 = new Map();
                    payload2.set("NITTER", this.VARIABLE.NITTER);
                    payload2.set("PERCOD", this.VARIABLE.PERCOD);
                    // call REST API
                    const result2 = await Rest.post("/anfcrter_variable/anfcrter_variable_percod_posttextitem_query2", payload2);
                    // get values from result
                    this.VARIABLE.PREDICTA = result2[0].get("PREDICTA");
                    this.VARIABLE.SCORING = result2[0].get("SCORING");
                } catch (ex) {

                }

            }
            else {
            }
        }
        console.log("Exiting ANFCRTER_variable_percod_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO TER.TERPER%TYPE;
    // BEGIN
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
    //    INTO :DES_NITTER,TIPO
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END; 
    //  IF TIPO <> 'N'   THEN
    //     GO_BLOCK('ANTCOMCENR');
    //     EXECUTE_QUERY;
    //  ELSE
    //     IF :CODCEN = '002' THEN 
    //       NEXT_ITEM;
    //     ELSE
    //      GO_BLOCK('ANTCOMCENR');
    //      EXECUTE_QUERY;
    //     END IF;
    //  END IF;
    // END;
    //  
    //#endregion
    async ANFCRTER_variable_percod_keyNextItem() {
        console.log("Entering ANFCRTER_variable_percod_keyNextItem");
        let T_RESPUESTA: number = null;
        let TIPO: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_percod_keynextitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPO = result1[0].get("TIPO");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPO != "N") {
            this.oracleFormsBuiltins.go_block("ANTCOMCENR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            if (this.VARIABLE.CODCEN == "002") {
                this.oracleFormsBuiltins.next_item();
            }
            else {
                this.oracleFormsBuiltins.go_block("ANTCOMCENR");
                this.oracleFormsBuiltins.execute_query();
            }
        }
        console.log("Exiting ANFCRTER_variable_percod_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //      
    //      COMMIT;
    //      GO_BLOCK('ANTCOMCENR');
    //      HIDE_VIEW('CANVAS2');     
    //      
    // END;
    //  
    //#endregion
    async ANFCRTER_variable_volver_whenMouseClick() {
        console.log("Entering ANFCRTER_variable_volver_whenMouseClick");
        let T_RESPUESTA: number = null;
        this.oracleFormsBuiltins.go_block("ANTCOMCENR");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFCRTER_variable_volver_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :VARIABLE.CODCEN = '001' THEN  --CIFIN
    //    :GLOBAL.TAB:= '001';
    //    CALL_FORM('ANFCACIF',  "NO_HIDE", "DO_REPLACE");
    //   ELSIF :VARIABLE.CODCEN = '002' THEN   --DATACREDITO
    //    :GLOBAL.TAB:= '002';
    //    :GLOBAL.VAL := '0';
    //    CALL_FORM('ANFCACIF',  "NO_HIDE", "DO_REPLACE");
    //   ELSE
    //    LIB$ALERTA ('MENSAJE','POR FAVOR INGRESE EL CÓDIGO DE LA CENTRAL DE RIESGO ...',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;
    //   EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA ('MENSAJE','POR FAVOR INGRESE EL CÓDIGO DE LA CENTRAL DE RIESGO ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async ANFCRTER_variable_item127_whenButtonPressed() {
        console.log("Entering ANFCRTER_variable_item127_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (this.VARIABLE.CODCEN == "001") {
            // this.GLOBAL.TAB = "001";
            this.oracleFormsBuiltins.call_form("ANFCACIF", "NO_HIDE", "DO_REPLACE");
        }
        else if (this.VARIABLE.CODCEN == "002") {
            // this.GLOBAL.TAB = "002";
            // this.GLOBAL.VAL = "0";
            this.oracleFormsBuiltins.call_form("ANFCACIF", "NO_HIDE", "DO_REPLACE");
        }
        else {
            // ANFCRTER_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE EL CÓDIGO DE LA CENTRAL DE RIESGO ...", null, null, null, T_RESPUESTA);
        }
        // if (result0 == null || result0.length == 0) {

        //     ANFCRTER_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE EL CÓDIGO DE LA CENTRAL DE RIESGO ...", null, null, null, T_RESPUESTA);
        // }

        console.log("Exiting ANFCRTER_variable_item127_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO TER.TERPER%TYPE;
    //  FECCON COTDATACRTXT.DATTXT_FECCON%TYPE;
    // BEGIN
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
    //    INTO :DES_NITTER,TIPO
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // BEGIN
    //               
    //         SELECT DISTINCT(DATTXT_FECCON)
    //         INTO FECCON
    //         FROM COTDATACRTXT
    //         WHERE DATTXT_NUMIDE= :NITTER AND DATTXT_TIPREG = 00;
    //      
    //      SELECT PERCOD
    //      INTO :PERCOD
    //      FROM PER
    //      WHERE PERCOD=(SELECT TO_CHAR(TO_DATE(''||FECCON||'','DD/MM/YYYY'), 'YYMM') FROM DUAL);
    //      
    //      SELECT PERDES
    //      INTO :DES_PERCOD
    //      FROM PER 
    //      WHERE PERCOD = ''||:PERCOD||'';
    //      
    //       EXCEPTION
    //       WHEN OTHERS THEN
    //       NULL;  
    //       END;
    //   
    //  IF TIPO <> 'N'   THEN
    //       SET_ITEM_PROPERTY('VARIABLE.PERNATURA',ENABLED,"PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('VARIABLE.PREDICTA',ENABLED,"PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('VARIABLE.SCORING',ENABLED,"PROPERTY_OFF");
    //  ELSE
    //      SET_ITEM_PROPERTY('VARIABLE.PERNATURA',ENABLED,"PROPERTY_ON");
    //      SET_ITEM_PROPERTY('VARIABLE.PREDICTA',ENABLED,"PROPERTY_ON");
    //      SET_ITEM_PROPERTY('VARIABLE.SCORING',ENABLED,"PROPERTY_ON");
    //  END IF;
    // END;
    //  
    //#endregion
    async ANFCRTER_variable_nitter_whenValidateItem() {
        console.log("Entering ANFCRTER_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO: null = null;
        let FECCON: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPO = result1[0].get("TIPO");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        let result4 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            // call REST API
            const result2 = await Rest.post("/anfcrter_variable/anfcrter_variable_nitter_whenvalidateitem_query2", payload2);
            // get values from result
            FECCON = result2[0].get("FECCON");
            // construct payload
            let payload3 = new Map();
            payload3.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result3 = await Rest.post("/anfcrter_variable/anfcrter_variable_nitter_whenvalidateitem_query3", payload3);
            // get values from result
            this.VARIABLE.PERCOD = result3[0].get("PERCOD");
            // construct payload
            let payload4 = new Map();
            payload4.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result4 = await Rest.post("/anfcrter_variable/anfcrter_variable_nitter_whenvalidateitem_query4", payload4);
            // get values from result
            this.VARIABLE.DES_PERCOD = result4[0].get("DES_PERCOD");
        } catch (ex) {

        }

        if (TIPO != "N") {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.PERNATURA", "ENABLED", "PROPERTY_OFF");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.PREDICTA", "ENABLED", "PROPERTY_OFF");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.SCORING", "ENABLED", "PROPERTY_OFF");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.PERNATURA", "ENABLED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.PREDICTA", "ENABLED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.SCORING", "ENABLED", "PROPERTY_ON");
        }
        console.log("Exiting ANFCRTER_variable_nitter_whenValidateItem");
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
    async ANFCRTER_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFCRTER_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFCRTER_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFCRTER_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PREDICTA IS NOT NULL THEN
    //  IF :PREDICTA >= 250 AND :PREDICTA <=850 THEN
    //     NULL;
    //  ELSE
    //    LIB$ALERTA ('MENSAJE','CÓDIGO FUERA DEL RANGO DE (250-850) .....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async ANFCRTER_variable_predicta_whenValidateItem() {
        console.log("Entering ANFCRTER_variable_predicta_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PREDICTA != null)) {
            if ((this.VARIABLE.PREDICTA >= 250 && this.VARIABLE.PREDICTA <= 850)) {
            }
            else {
                // ANFCRTER_LIB$ALERTA("MENSAJE", "CÓDIGO FUERA DEL RANGO DE (250-850) .....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFCRTER_variable_predicta_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // CONTADOR NUMBER(8);
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF (:PREDICTA IS NOT NULL OR :SCORING IS NOT NULL) THEN 
    //   CONTADOR:=0;
    //  BEGIN
    //    SELECT COUNT(*)
    //     INTO CONTADOR
    //     FROM ANTPREDICTA
    //    WHERE PREDIC_CODTER=:NITTER
    //      AND PREDIC_CODPER=:PERCOD
    //      ;
    //  END;
    //  IF CONTADOR =0 THEN
    //     INSERT INTO ANTPREDICTA (PREDIC_CODTER,PREDIC_CODPER,PREDIC_PREDIC,PREDIC_SCORIN)
    //                       VALUES(:NITTER,:PERCOD,:PREDICTA,:SCORING);
    //  ELSE
    //     UPDATE ANTPREDICTA
    //        SET PREDIC_PREDIC=:PREDICTA,
    //            PREDIC_SCORIN=:SCORING 
    //       WHERE PREDIC_CODTER=:NITTER
    //      AND PREDIC_CODPER=:PERCOD
    //      ;
    //   END IF;
    //    COMMIT;  
    // END IF;
    // END;
    // GO_BLOCK('ANTCOMCENR');
    // EXECUTE_QUERY;
    //#endregion
    async ANFCRTER_variable_scoring_keyNextItem() {
        console.log("Entering ANFCRTER_variable_scoring_keyNextItem");
        let CONTADOR: number = null;
        let T_RESPUESTA: number = null;
        if (((this.VARIABLE.PREDICTA != null) || (this.VARIABLE.SCORING != null))) {
            CONTADOR = 0;
            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_scoring_keynextitem_query1", payload1);
            // get values from result
            CONTADOR = result1[0].get("CONTADOR");
            if (CONTADOR == 0) {
                // construct payload
                let payload2 = new Map();
                // payload2.NITTER = : NITTER;
                // payload2.PERCOD = : PERCOD;
                // payload2.PREDICTA = : PREDICTA;
                // payload2.SCORING = : SCORING;
                // call REST API
                const result2 = await Rest.post("/anfcrter_variable/anfcrter_variable_scoring_keynextitem_query2", payload2);
            }
            else {
                // construct payload
                let payload3 = new Map();
                // payload3.PREDICTA = : PREDICTA;
                // payload3.SCORING = : SCORING;
                // payload3.NITTER = : NITTER;
                // payload3.PERCOD = : PERCOD;
                // call REST API
                const result3 = await Rest.post("/anfcrter_variable/anfcrter_variable_scoring_keynextitem_query3", payload3);
            }
        }
        console.log("Exiting ANFCRTER_variable_scoring_keyNextItem");
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
    async ANFCRTER_variable_codcen_whenValidateItem() {
        console.log("Entering ANFCRTER_variable_codcen_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("CODCEN", this.VARIABLE.CODCEN);
        // call REST API
        const result1 = await Rest.post("/anfcrter_variable/anfcrter_variable_codcen_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_CODCEN = result1[0].get("DES_CODCEN");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "CENTRAL DE RIESGO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCRTER_variable_codcen_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFCRTER_toolbar_whenButtonPressed() {
        console.log("Entering ANFCRTER_toolbar_whenButtonPressed");
        // ANFCRTER_TOOLBAR_ACTIONS();
        console.log("Exiting ANFCRTER_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFCRTER_toolbar_whenMouseLeave() {
        console.log("Entering ANFCRTER_toolbar_whenMouseLeave");
        // ANFCRTER_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFCRTER_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFCRTER_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCRTER_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCRTER_toolbar_whenNewFormInstance");
    }

    async ANFCRTER_antcrxpern_keyNxtblk() {
        // null;
    }

    async ANFCRTER_antcrxpern_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.CODCEN = '001' THEN    
    //    
    //    BEGIN
    //     SELECT TIPRIE_DESCRE 
    //      INTO :DES_TIPCTA
    //      FROM ANTTIPRIES
    //      WHERE TIPRIE_CODCRE=:CENXPE_TIPCTA;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    //     END;
    //      
    //     BEGIN
    //     SELECT ENTFIN_ENDESC
    //        INTO :DES_TIPENT
    //        FROM COTENTFIN
    //        WHERE ENTFIN_ENTCOD =:CENXPE_TIPENT;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    //     END;
    //    
    //   ELSIF :VARIABLE.CODCEN = '002' THEN
    //       
    //     BEGIN
    //      SELECT TIPCUE_DETICU 
    //      INTO :DES_TIPCTA
    //      FROM COTDATTIPCUE
    //     WHERE TIPCUE_CODIGO=:CENXPE_TIPCTA;
    //       EXCEPTION
    //        WHEN NO_DATA_FOUND THEN
    //        NULL; 
    //       END;
    //        
    //       BEGIN
    //      SELECT ENTDAT_NOMENT 
    //       INTO :DES_TIPENT
    //       FROM COTENTDDATCR
    //       WHERE ENTDAT_CODIGO=:CENXPE_TIPENT;
    //       EXCEPTION
    //        WHEN NO_DATA_FOUND THEN
    //        NULL; 
    //       END;
    //     
    //   END IF;
    // 
    // /*  --- CONSULTA LA MODALIDAD     
    //    BEGIN
    //      SELECT MODPAG_DEMOPA 
    //      INTO :DES_MODALI
    //       FROM COTDATMODPAG
    //       WHERE MODPAG_CODIGO IN (SELECT CENXPE_MODALI 
    //                               FROM ANTCRXPERN 
    //                               WHERE CENXPE_CODCEN = :VARIABLE.CODCEN
    //                                     AND CENXPE_NITTER = :VARIABLE.NITTER
    //                                     AND CENXPE_PERCOD = :VARIABLE.PERCOD);
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    //    END;*/
    //      
    // 
    // 
    //  PUP_CALCULOS_NAT; END;
    //#endregion
    async ANFCRTER_antcrxpern_postQuery() {
        console.log("Entering ANFCRTER_antcrxpern_postQuery");
        if (this.VARIABLE.CODCEN == "001") {
            // construct payload
            let payload1 = new Map();
            payload1.set("CENXPE_TIPCTA", this.ANTCRXPERN.CENXPE_TIPCTA);
            // call REST API
            const result1 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_postquery_query1", payload1);
            // get values from result
            this.ANTCRXPERN.DES_TIPCTA = result1[0].get("DES_TIPCTA");
            if (result1 == null || result1.length == 0) {

            }

            // construct payload
            let payload2 = new Map();
            payload2.set("CENXPE_TIPENT", this.ANTCRXPERN.CENXPE_TIPENT);
            // call REST API
            const result2 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_postquery_query2", payload2);
            // get values from result
            this.ANTCRXPERN.DES_TIPENT = result2[0].get("DES_TIPENT");
            if (result2 == null || result2.length == 0) {

            }

        }
        else if (this.VARIABLE.CODCEN == "002") {
            // construct payload
            let payload3 = new Map();
            payload3.set("CENXPE_TIPCTA", this.ANTCRXPERN.CENXPE_TIPCTA);
            // call REST API
            const result3 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_postquery_query3", payload3);
            // get values from result
            this.ANTCRXPERN.DES_TIPCTA = result3[0].get("DES_TIPCTA");
            if (result3 == null || result3.length == 0) {

            }

            // construct payload
            let payload4 = new Map();
            payload4.set("CENXPE_TIPENT", this.ANTCRXPERN.CENXPE_TIPENT);
            // call REST API
            const result4 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_postquery_query4", payload4);
            // get values from result
            this.ANTCRXPERN.DES_TIPENT = result4[0].get("DES_TIPENT");
            if (result4 == null || result4.length == 0) {

            }

        }
        // ANFCRTER_PUP_CALCULOS_NAT();
        console.log("Exiting ANFCRTER_antcrxpern_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.CODCEN = '001' THEN
    //  
    //  DECLARE
    //   T_RESPUESTA NUMBER;
    //   BEGIN
    //    SELECT TIPRIE_DESCRE 
    //      INTO :DES_TIPCTA
    //      FROM ANTTIPRIES
    //     WHERE TIPRIE_CODCRE=:CENXPE_TIPCTA;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','TIPO DE CUENTA INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //     :CENXPE_TIPCTA := '';
    //     :DES_TIPCTA := '';
    //     RAISE FORM_TRIGGER_FAILURE; 
    //    END;
    // 
    // ELSIF :VARIABLE.CODCEN = '002' THEN
    // 
    //   DECLARE
    //   T_RESPUESTA1 NUMBER;
    //   BEGIN
    //    SELECT TIPCUE_DETICU 
    //      INTO :DES_TIPCTA
    //      FROM COTDATTIPCUE
    //     WHERE TIPCUE_CODIGO=:CENXPE_TIPCTA;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','TIPO DE CUENTA INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA1 );
    //     :CENXPE_TIPCTA := '';
    //     :DES_TIPCTA := '';
    //     RAISE FORM_TRIGGER_FAILURE; 
    //    END; 
    //   
    // END IF; END;
    //#endregion
    async ANFCRTER_antcrxpern_cenxpeTipcta_whenValidateItem() {
        console.log("Entering ANFCRTER_antcrxpern_cenxpeTipcta_whenValidateItem");
        if (this.VARIABLE.CODCEN == "001") {
            {

                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("CENXPE_TIPCTA", this.ANTCRXPERN.CENXPE_TIPCTA);
                // call REST API
                const result1 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_cenxpetipcta_whenvalidateitem_query1", payload1);
                // get values from result
                this.ANTCRXPERN.DES_TIPCTA = result1[0].get("DES_TIPCTA");
                if (result1 == null || result1.length == 0) {

                    // ANFCRTER_LIB$ALERTA("MENSAJE", "TIPO DE CUENTA INEXISTENTE ....", null, null, null, T_RESPUESTA);
                    this.ANTCRXPERN.CENXPE_TIPCTA = "";
                    this.ANTCRXPERN.DES_TIPCTA = "";
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        else if (this.VARIABLE.CODCEN == "002") {
            {

                let T_RESPUESTA1: number = null;
                // construct payload
                let payload2 = new Map();
                payload2.set("CENXPE_TIPCTA", this.ANTCRXPERN.CENXPE_TIPCTA);
                // call REST API
                const result2 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_cenxpetipcta_whenvalidateitem_query2", payload2);
                // get values from result
                this.ANTCRXPERN.DES_TIPCTA = result2[0].get("DES_TIPCTA");
                if (result2 == null || result2.length == 0) {

                    // ANFCRTER_LIB$ALERTA("MENSAJE", "TIPO DE CUENTA INEXISTENTE ....", null, null, null, T_RESPUESTA1);
                    this.ANTCRXPERN.CENXPE_TIPCTA = "";
                    this.ANTCRXPERN.DES_TIPCTA = "";
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCRTER_antcrxpern_cenxpeTipcta_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    IF :VARIABLE.CODCEN = '001' THEN    
    //    IF NOT SHOW_LOV('L_TIPCREPN') THEN
    //        MESSAGE('NO EXISTEN TIPOS DE CUENTAS DE CIFIN PARA MOSTRAR');
    //     END IF;  
    //    ELSIF :VARIABLE.CODCEN = '002' THEN
    //     IF NOT SHOW_LOV('L_TIPCTA_DAT') THEN
    //        MESSAGE('NO EXISTEN TIPOS DE CUENTAS DE DATACREDITO PARA MOSTRAR');
    //     END IF;
    //   END IF;
    // 
    // END;
    //#endregion
    async ANFCRTER_antcrxpern_cenxpeTipcta_whenMouseDoubleclick() {
        console.log("Entering ANFCRTER_antcrxpern_cenxpeTipcta_whenMouseDoubleclick");
        if (this.VARIABLE.CODCEN == "001") {
            if ((!this.oracleFormsBuiltins.show_lov("L_TIPCREPN"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN TIPOS DE CUENTAS DE CIFIN PARA MOSTRAR");
            }
        }
        else if (this.VARIABLE.CODCEN == "002") {
            if ((!this.oracleFormsBuiltins.show_lov("L_TIPCTA_DAT"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN TIPOS DE CUENTAS DE DATACREDITO PARA MOSTRAR");
            }
        }
        console.log("Exiting ANFCRTER_antcrxpern_cenxpeTipcta_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   IF :VARIABLE.CODCEN = '001' THEN    
    //    IF NOT SHOW_LOV('L_TIPCREPN') THEN
    //        MESSAGE('NO EXISTEN TIPOS DE CUENTAS DE CIFIN PARA MOSTRAR');
    //     END IF;  
    //    ELSIF :VARIABLE.CODCEN = '002' THEN
    //     IF NOT SHOW_LOV('L_TIPCTA_DAT') THEN
    //        MESSAGE('NO EXISTEN TIPOS DE CUENTAS DE DATACREDITO PARA MOSTRAR');
    //     END IF;
    //   END IF;
    //   
    // END;
    //#endregion
    async ANFCRTER_antcrxpern_cenxpeTipcta_keyListval() {
        console.log("Entering ANFCRTER_antcrxpern_cenxpeTipcta_keyListval");
        if (this.VARIABLE.CODCEN == "001") {
            if ((!this.oracleFormsBuiltins.show_lov("L_TIPCREPN"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN TIPOS DE CUENTAS DE CIFIN PARA MOSTRAR");
            }
        }
        else if (this.VARIABLE.CODCEN == "002") {
            if ((!this.oracleFormsBuiltins.show_lov("L_TIPCTA_DAT"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN TIPOS DE CUENTAS DE DATACREDITO PARA MOSTRAR");
            }
        }
        console.log("Exiting ANFCRTER_antcrxpern_cenxpeTipcta_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.CODCEN = '001' THEN
    //  
    //  DECLARE
    //   T_RESPUESTA NUMBER;
    //  BEGIN
    //   SELECT ENTFIN_ENDESC
    //     INTO :DES_TIPENT
    //     FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD =:CENXPE_TIPENT;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TIPO DE ENTIDAD INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //    :CENXPE_TIPENT := '';
    //    :DES_TIPENT := '';
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // 
    // ELSIF :VARIABLE.CODCEN = '002' THEN
    // 
    //   DECLARE
    //   T_RESPUESTA1 NUMBER;
    //  BEGIN
    //   SELECT ENTDAT_NOMENT 
    //     INTO :DES_TIPENT
    //     FROM COTENTDDATCR
    //    WHERE ENTDAT_CODIGO=:CENXPE_TIPENT;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TIPO DE ENTIDAD INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA1 );
    //    :CENXPE_TIPENT := '';
    //    :DES_TIPENT := '';
    //    RAISE FORM_TRIGGER_FAILURE;
    //    WHEN OTHERS THEN
    //    LIB$ALERTA('MENSAJE','POR FAVOR INGRESE UN TIPO DE ENTIDAD CORRECTO ....',NULL,NULL,NULL,T_RESPUESTA1 );
    //    :CENXPE_TIPENT := '';
    //    :DES_TIPENT := '';
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END; 
    //   
    // END IF; END;
    //#endregion
    async ANFCRTER_antcrxpern_cenxpeTipent_whenValidateItem() {
        console.log("Entering ANFCRTER_antcrxpern_cenxpeTipent_whenValidateItem");
        if (this.VARIABLE.CODCEN == "001") {
            {

                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("CENXPE_TIPENT", this.ANTCRXPERN.CENXPE_TIPENT);
                // call REST API
                const result1 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_cenxpetipent_whenvalidateitem_query1", payload1);
                // get values from result
                this.ANTCRXPERN.DES_TIPENT = result1[0].get("DES_TIPENT");
                if (result1 == null || result1.length == 0) {

                    // ANFCRTER_LIB$ALERTA("MENSAJE", "TIPO DE ENTIDAD INEXISTENTE ....", null, null, null, T_RESPUESTA);
                    this.ANTCRXPERN.CENXPE_TIPENT = "";
                    this.ANTCRXPERN.DES_TIPENT = "";
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        else if (this.VARIABLE.CODCEN == "002") {
            {

                let T_RESPUESTA1: number = null;
                let result2 = new Map();
                try {

                    // construct payload
                    let payload2 = new Map();
                    payload2.set("CENXPE_TIPENT", this.ANTCRXPERN.CENXPE_TIPENT);
                    // call REST API
                    const result2 = await Rest.post("/anfcrter_antcrxpern/anfcrter_antcrxpern_cenxpetipent_whenvalidateitem_query2", payload2);
                    // get values from result
                    this.ANTCRXPERN.DES_TIPENT = result2[0].get("DES_TIPENT");
                    if (result2 == null || result2.length == 0) {

                        // ANFCRTER_LIB$ALERTA("MENSAJE", "TIPO DE ENTIDAD INEXISTENTE ....", null, null, null, T_RESPUESTA1);
                        this.ANTCRXPERN.CENXPE_TIPENT = "";
                        this.ANTCRXPERN.DES_TIPENT = "";
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                } catch (ex) {

                    // ANFCRTER_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE UN TIPO DE ENTIDAD CORRECTO ....", null, null, null, T_RESPUESTA1);
                    this.ANTCRXPERN.CENXPE_TIPENT = "";
                    this.ANTCRXPERN.DES_TIPENT = "";
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCRTER_antcrxpern_cenxpeTipent_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   IF :VARIABLE.CODCEN = '001' THEN    
    //    IF NOT SHOW_LOV('L_ENTPERN') THEN
    //        MESSAGE('NO EXISTEN ENTIDADES DE CIFIN PARA MOSTRAR');
    //     END IF;  
    //    ELSIF :VARIABLE.CODCEN = '002' THEN
    //     IF NOT SHOW_LOV('L_ENTIDADES_DAT') THEN
    //        MESSAGE('NO EXISTEN ENTIDADES DE DATACREDITO PARA MOSTRAR');
    //     END IF;
    //   END IF;
    //   
    // END;
    //#endregion
    async ANFCRTER_antcrxpern_cenxpeTipent_whenMouseDoubleclick() {
        console.log("Entering ANFCRTER_antcrxpern_cenxpeTipent_whenMouseDoubleclick");
        if (this.VARIABLE.CODCEN == "001") {
            if ((!this.oracleFormsBuiltins.show_lov("L_ENTPERN"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN ENTIDADES DE CIFIN PARA MOSTRAR");
            }
        }
        else if (this.VARIABLE.CODCEN == "002") {
            if ((!this.oracleFormsBuiltins.show_lov("L_ENTIDADES_DAT"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN ENTIDADES DE DATACREDITO PARA MOSTRAR");
            }
        }
        console.log("Exiting ANFCRTER_antcrxpern_cenxpeTipent_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   IF :VARIABLE.CODCEN = '001' THEN    
    //    IF NOT SHOW_LOV('L_ENTPERN') THEN
    //        MESSAGE('NO EXISTEN ENTIDADES DE CIFIN PARA MOSTRAR');
    //     END IF;  
    //    ELSIF :VARIABLE.CODCEN = '002' THEN
    //     IF NOT SHOW_LOV('L_ENTIDADES_DAT') THEN
    //        MESSAGE('NO EXISTEN ENTIDADES DE DATACREDITO PARA MOSTRAR');
    //     END IF;
    //   END IF;
    //   
    // END;
    //#endregion
    async ANFCRTER_antcrxpern_cenxpeTipent_keyListval() {
        console.log("Entering ANFCRTER_antcrxpern_cenxpeTipent_keyListval");
        if (this.VARIABLE.CODCEN == "001") {
            if ((!this.oracleFormsBuiltins.show_lov("L_ENTPERN"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN ENTIDADES DE CIFIN PARA MOSTRAR");
            }
        }
        else if (this.VARIABLE.CODCEN == "002") {
            if ((!this.oracleFormsBuiltins.show_lov("L_ENTIDADES_DAT"))) {
                this.oracleFormsBuiltins.message("NO EXISTEN ENTIDADES DE DATACREDITO PARA MOSTRAR");
            }
        }
        console.log("Exiting ANFCRTER_antcrxpern_cenxpeTipent_keyListval");
    }

    async ANFCRTER_antporcer_keyNxtblk() {
        // null;
    }

    async ANFCRTER_antporcer_keyPrvblk() {
        // null;
    }

    async ANFCRTER_antcomcenr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN PUP_CALCULOS; END;
    //#endregion
    async ANFCRTER_antcomcenr_whenValidateRecord() {
        console.log("Entering ANFCRTER_antcomcenr_whenValidateRecord");
        // ANFCRTER_PUP_CALCULOS();
        console.log("Exiting ANFCRTER_antcomcenr_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTPORCER DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTPORCER_CUR IS      
    //     SELECT 1 FROM ANTPORCER     
    //     WHERE PORCER_PERCOD = :ANTCOMCENR.COMCRI_PERCOD AND PORCER_NITTER = :ANTCOMCENR.COMCRI_NITTER AND PORCER_CODCEN = :ANTCOMCENR.COMCRI_CODCEN;
    //   --
    //   -- END ANTPORCER DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTPORCER DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTPORCER_CUR;     
    //   FETCH ANTPORCER_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTPORCER_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTPORCER_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTPORCER_CUR;
    //   --
    //   -- END ANTPORCER DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCRTER_antcomcenr_onCheckDeleteMaster() {
        console.log("Entering ANFCRTER_antcomcenr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCRTER_antcomcenr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'GARANTIAS'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    // 
    //   IT_ID := FIND_ITEM('ANTCOMCENR.COMCRI_TIPGAR');
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      --CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    // 
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'CALIFICACION'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('ANTCOMCENR.COMCRI_CALIFI'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      --CLEAR_LIST(IT_ID); ---OK
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFCRTER_antcomcenr_whenNewBlockInstance() {
        console.log("Entering ANFCRTER_antcomcenr_whenNewBlockInstance");
        let IT_ID: number = null;
        IT_ID = this.oracleFormsBuiltins.find_item("ANTCOMCENR.COMCRI_TIPGAR");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
        }
        this.oracleFormsBuiltins.execute_query();
        IT_ID = this.oracleFormsBuiltins.find_item("ANTCOMCENR.COMCRI_CALIFI");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
        }
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCRTER_antcomcenr_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // EXECUTE_QUERY; END;
    //#endregion
    async ANFCRTER_antcomcenr_keyCommit() {
        console.log("Entering ANFCRTER_antcomcenr_keyCommit");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCRTER_antcomcenr_keyCommit");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   RECSTAT     VARCHAR2(20) := :SYSTEM.RECORD_STATUS;   
    //   STARTITM    VARCHAR2(61) := :SYSTEM.CURSOR_ITEM;   
    //   REL_ID      RELATION;
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   IF ( RECSTAT = 'NEW' OR RECSTAT = 'INSERT' ) THEN   
    //     RETURN;
    //   END IF;
    //   --
    //   -- BEGIN ANTPORCER DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTCOMCENR.COMCRI_PERCOD IS NOT NULL) OR (:ANTCOMCENR.COMCRI_NITTER IS NOT NULL) OR (:ANTCOMCENR.COMCRI_CODCEN IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTCOMCENR.ANTCOMCENR_ANTPORCER');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTPORCER');   
    //   END IF;
    //   --
    //   -- END ANTPORCER DETAIL PROGRAM SECTION
    //   --
    // 
    //   IF ( :SYSTEM.CURSOR_ITEM <> STARTITM ) THEN     
    //      GO_ITEM(STARTITM);     
    //      CHECK_PACKAGE_FAILURE;     
    //   END IF;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCRTER_antcomcenr_onPopulateDetails() {
        console.log("Entering ANFCRTER_antcomcenr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((this.ANTCOMCENR.COMCRI_PERCOD != null) || (this.ANTCOMCENR.COMCRI_NITTER != null)) || (this.ANTCOMCENR.COMCRI_CODCEN != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTCOMCENR.ANTCOMCENR_ANTPORCER");
            // ANFCRTER_QUERY_MASTER_DETAILS(REL_ID, "ANTPORCER");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFCRTER_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFCRTER_antcomcenr_onPopulateDetails");
    }

    async ANFCRTER_antcomcenr_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  SELECT ENTFIN_ENDESC
    //    INTO :DES_ENTIDAD
    //    FROM COTENTFIN
    //   WHERE ENTFIN_ENTCOD =:COMCRI_TIPENT;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    //#endregion
    async ANFCRTER_antcomcenr_postQuery() {
        console.log("Entering ANFCRTER_antcomcenr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPENT", this.ANTCOMCENR.COMCRI_TIPENT);
        // call REST API
        const result1 = await Rest.post("/anfcrter_antcomcenr/anfcrter_antcomcenr_postquery_query1", payload1);
        // get values from result
        this.ANTCOMCENR.DES_ENTIDAD = result1[0].get("DES_ENTIDAD");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("COMCRI_TIPCRE", this.ANTCOMCENR.COMCRI_TIPCRE);
        // call REST API
        const result2 = await Rest.post("/anfcrter_antcomcenr/anfcrter_antcomcenr_postquery_query2", payload2);
        // get values from result
        this.ANTCOMCENR.DES_TIPOCREDITO = result2[0].get("DES_TIPOCREDITO");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting ANFCRTER_antcomcenr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT TIPRIE_DESCRE 
    //    INTO :DES_TIPOCREDITO
    //    FROM ANTTIPRIES
    //   WHERE TIPRIE_CODCRE=:COMCRI_TIPCRE;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TIPO DE CREDITO INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //   RAISE FORM_TRIGGER_FAILURE; 
    // END;
    //#endregion
    async ANFCRTER_antcomcenr_comcriTipcre_whenValidateItem() {
        console.log("Entering ANFCRTER_antcomcenr_comcriTipcre_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPCRE", this.ANTCOMCENR.COMCRI_TIPCRE);
        // call REST API
        const result1 = await Rest.post("/anfcrter_antcomcenr/anfcrter_antcomcenr_comcritipcre_whenvalidateitem_query1", payload1);
        // get values from result
        this.ANTCOMCENR.DES_TIPOCREDITO = result1[0].get("DES_TIPOCREDITO");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "TIPO DE CREDITO INEXISTENTE ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCRTER_antcomcenr_comcriTipcre_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT ENTFIN_ENDESC
    //    INTO :DES_ENTIDAD
    //    FROM COTENTFIN
    //   WHERE ENTFIN_ENTCOD=:COMCRI_TIPENT;
    // 
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TIPO DE ENTIDAD INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA );
    //   RAISE FORM_TRIGGER_FAILURE; 
    // END;
    //#endregion
    async ANFCRTER_antcomcenr_comcriTipent_whenValidateItem() {
        console.log("Entering ANFCRTER_antcomcenr_comcriTipent_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COMCRI_TIPENT", this.ANTCOMCENR.COMCRI_TIPENT);
        // call REST API
        const result1 = await Rest.post("/anfcrter_antcomcenr/anfcrter_antcomcenr_comcritipent_whenvalidateitem_query1", payload1);
        // get values from result
        this.ANTCOMCENR.DES_ENTIDAD = result1[0].get("DES_ENTIDAD");
        if (result1 == null || result1.length == 0) {

            // ANFCRTER_LIB$ALERTA("MENSAJE", "TIPO DE ENTIDAD INEXISTENTE ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCRTER_antcomcenr_comcriTipent_whenValidateItem");
    }

}

