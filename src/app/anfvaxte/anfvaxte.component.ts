import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFVAXTE business logic
import {
    VARIABLE,
    ANTVARXTE,
    TOOLBAR,
    BASE
} from "./ANFVAXTE_models";



// class ANFVAXTE
@Component({
    selector: 'app-anfvaxte',
    templateUrl: './anfvaxte.component.html',
})
export class AnfvaxteComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['TER_NIT', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTVARXTE: ANTVARXTE = new ANTVARXTE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    async ANFVAXTE_keyDelrec() {
        // null;
    }

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
    async ANFVAXTE_onClearDetails() {
        console.log("Entering ANFVAXTE_onClearDetails");
        // ANFVAXTE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFVAXTE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFVAXTE_whenMouseDoubleclick() {
        console.log("Entering ANFVAXTE_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFVAXTE_whenMouseDoubleclick");
    }

    async ANFVAXTE_keyCrerec() {
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
    //  :VAR_CODTER :=  :this.PARAMETER.get("TER_NIT");
    //  
    //  
    //  
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    //  V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    //  
    // IF :this.PARAMETER.get("P_CTRL") = 'Q' THEN
    //   :VARIABLE.VAR_CODTER := :this.PARAMETER.get("P_NIT");
    //   NEXT_ITEM;
    // END IF; 
    // 
    // 
    // ---------------------------------------------------------------------
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
    // ------------------------------------------------------; END;
    //#endregion
    async ANFVAXTE_whenNewFormInstance() {
        console.log("Entering ANFVAXTE_whenNewFormInstance");
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
        this.VARIABLE.VAR_CODTER = this.PARAMETER.get("TER_NIT");
        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.VAR_CODTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/anfvaxte/anfvaxte_whennewforminstance_query1", payload1);
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

        console.log("Exiting ANFVAXTE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFVAXTE_preForm() {
        console.log("Entering ANFVAXTE_preForm");
        // ANFVAXTE_PANTALLA();
        // ANFVAXTE_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFVAXTE_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFVAXTE_keyUp() {
        console.log("Entering ANFVAXTE_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFVAXTE_keyUp");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN ANTVARXTE DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTVARXTE_CUR IS      
    //     SELECT 1 FROM ANTVARXTE A     
    //     WHERE A.VARXTE_CODTER = :VARIABLE.VAR_CODTER AND A.VARXTE_CODPER = :VARIABLE.PERCOD AND A.VARXTE_DOMINI = :VARIABLE.VAR_DOMINI;
    //   --
    //   -- END ANTVARXTE DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTVARXTE DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTVARXTE_CUR;     
    //   FETCH ANTVARXTE_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTVARXTE_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTVARXTE_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTVARXTE_CUR;
    //   --
    //   -- END ANTVARXTE DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFVAXTE_variable_onCheckDeleteMaster() {
        console.log("Entering ANFVAXTE_variable_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFVAXTE_variable_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //     WHERE  DOMINI_DOMINI = 'VARCUANTITA'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('VARIABLE.VAR_DOMINI'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    // END;
    //#endregion
    async ANFVAXTE_variable_whenNewBlockInstance() {
        console.log("Entering ANFVAXTE_variable_whenNewBlockInstance");
        let IT_ID: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("VARIABLE.VAR_DOMINI");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        console.log("Exiting ANFVAXTE_variable_whenNewBlockInstance");
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
    //   -- BEGIN ANTVARXTE DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.VAR_CODTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) OR (:VARIABLE.VAR_DOMINI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.VARIABLE_ANTVARXTE');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTVARXTE');   
    //   END IF;
    //   --
    //   -- END ANTVARXTE DETAIL PROGRAM SECTION
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
    async ANFVAXTE_variable_onPopulateDetails() {
        console.log("Entering ANFVAXTE_variable_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((this.VARIABLE.VAR_CODTER != null) || (this.VARIABLE.PERCOD != null)) || (this.VARIABLE.VAR_DOMINI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.VARIABLE_ANTVARXTE");
            // ANFVAXTE_QUERY_MASTER_DETAILS(REL_ID, "ANTVARXTE");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFVAXTE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFVAXTE_variable_onPopulateDetails");
    }

    async ANFVAXTE_variable_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :VAR_DOMINI IS NULL THEN
    //     LIB$ALERTA ('MENSAJE','DEBE SELECCIONAR COMO MINIMO UN DOMINIO...',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async ANFVAXTE_variable_varDomini_whenValidateItem() {
        console.log("Entering ANFVAXTE_variable_varDomini_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.VAR_DOMINI == null)) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "DEBE SELECCIONAR COMO MINIMO UN DOMINIO...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFVAXTE_variable_varDomini_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VAR_CODTER'); END;
    //#endregion
    async ANFVAXTE_variable_varDomini_keyPrvblk() {
        console.log("Entering ANFVAXTE_variable_varDomini_keyPrvblk");
        this.oracleFormsBuiltins.go_item("VAR_CODTER");
        console.log("Exiting ANFVAXTE_variable_varDomini_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE 
    // MI_VALOR NUMBER;
    // V_CALIF  VARCHAR2(4);
    // V_ANOS   NUMBER(18,2);
    // P_PERIODO VARCHAR2(6);
    // BLK_ID BLOCK; 
    // 
    //  CURSOR C1 IS 
    //   SELECT VARCUA_CODIGO CODIGO, VARCUA_TIPVAL TIPVAL
    //    FROM ANTVARCUALITAT
    //   WHERE VARCUA_DOMINI = :VAR_DOMINI;
    // 
    // BEGIN
    //   IF :SYSTEM.RECORD_STATUS = ('INSERT') THEN 
    //     SELECT COUNT(VARXTE_CODVAR)
    //          INTO MI_VALOR
    //     FROM ANTVARXTE
    //     WHERE VARXTE_CODTER = :VAR_CODTER
    //   AND  VARXTE_CODPER = :PERCOD
    //    AND  VARXTE_DOMINI = :VAR_DOMINI;   
    //     IF MI_VALOR > 0 THEN 
    //       GO_BLOCK('ANTVARXTE');
    //       EXECUTE_QUERY;    
    //     ELSE 
    //        FOR ACC IN C1 LOOP
    //          IF :VAR_DOMINI = '1EMP' THEN
    //     BEGIN
    //             SELECT (DECODE(SUBSTR(:PERCOD,1,1),'9','19'||:PERCOD,'0','20'||:PERCOD))
    //               INTO P_PERIODO
    //               FROM DUAL;
    //    END;
    //            PBD_COL_ANOSCALIF (:VAR_CODTER,P_PERIODO,:VAR_DOMINI,ACC.CODIGO,V_CALIF,V_ANOS);
    //            INSERT INTO ANTVARXTE VALUES (:VAR_CODTER,:PERCOD,:VAR_DOMINI, ACC.CODIGO,V_CALIF,NULL,ACC.TIPVAL,:USUARIO,V_ANOS);
    //          ELSE 
    //            INSERT INTO ANTVARXTE VALUES (:VAR_CODTER,:PERCOD,:VAR_DOMINI, ACC.CODIGO,NULL,NULL,ACC.TIPVAL,:USUARIO,NULL);
    //          END IF;
    //        END LOOP;
    //         GO_BLOCK('ANTVARXTE');
    //    EXECUTE_QUERY;
    //     END IF;
    //   END IF; 
    // END;
    //#endregion
    async ANFVAXTE_variable_varDomini_keyNextItem() {
        console.log("Entering ANFVAXTE_variable_varDomini_keyNextItem");
        let MI_VALOR: number = null;
        let V_CALIF: string = null;
        let V_ANOS: number = null;
        let P_PERIODO: string = null;
        let BLK_ID: null = null;
        if (this._SYSTEM_SERVICE.get("RECORD_STATUS") == "INSERT") {
            // construct payload
            let payload1 = new Map();
            payload1.set("VAR_CODTER", this.VARIABLE.VAR_CODTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            payload1.set("VAR_DOMINI", this.VARIABLE.VAR_DOMINI);
            // call REST API
            const result1 = await Rest.post("/anfvaxte_variable/anfvaxte_variable_vardomini_keynextitem_query1", payload1);
            // get values from result
            MI_VALOR = result1[0].get("MI_VALOR");
            if (MI_VALOR > 0) {
                this.oracleFormsBuiltins.go_block("ANTVARXTE");
                this.oracleFormsBuiltins.execute_query();
            }
            else {
                this.oracleFormsBuiltins.go_block("ANTVARXTE");
                this.oracleFormsBuiltins.execute_query();
            }
        }
        console.log("Exiting ANFVAXTE_variable_varDomini_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPTER TER.TERPER%TYPE;
    // BEGIN
    //  BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
    //    INTO :DES_NITTER, TIPTER
    //    FROM TER
    //    WHERE TERCOD=:VAR_CODTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // END;  
    //#endregion
    async ANFVAXTE_variable_varCodter_whenValidateItem() {
        console.log("Entering ANFVAXTE_variable_varCodter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("VAR_CODTER", this.VARIABLE.VAR_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfvaxte_variable/anfvaxte_variable_varcodter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFVAXTE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFVAXTE_variable_varCodter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END;
    //#endregion
    async ANFVAXTE_variable_percod_whenValidateItem() {
        console.log("Entering ANFVAXTE_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfvaxte_variable/anfvaxte_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFVAXTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFVAXTE_variable_percod_whenValidateItem");
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
    async ANFVAXTE_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFVAXTE_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFVAXTE_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFVAXTE_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :VARXTE_VLCAL IS NULL THEN 
    //    LIB$ALERTA ('MENSAJE','DEBE INGRESAR COMO MINIMO UNA CALIFICACIÓN...',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    //  GO_BLOCK('VARIABLE');
    //  GO_ITEM('VAR_DOMINI');
    // END;
    //#endregion
    async ANFVAXTE_antvarxte_keyPrvblk() {
        console.log("Entering ANFVAXTE_antvarxte_keyPrvblk");
        let T_RESPUESTA: number = null;
        if ((this.ANTVARXTE.VARXTE_VLCAL == null)) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "DEBE INGRESAR COMO MINIMO UNA CALIFICACIÓN...", null, null, null, T_RESPUESTA);
        }
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.oracleFormsBuiltins.go_item("VAR_DOMINI");
        console.log("Exiting ANFVAXTE_antvarxte_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    //   V_CALIF VARCHAR2(1);
    //   V_ANOS  NUMBER;
    // BEGIN
    //   SELECT VARCUA_DESCRI
    //     INTO :VAR_DESCRI 
    //   FROM ANTVARCUALITAT
    //   WHERE VARCUA_CODIGO = :VARXTE_CODVAR
    //   AND   VARCUA_DOMINI = :VARXTE_DOMINI;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    :VAR_DESCRI := '***NO TIENE DESCRIPCIÓN***';
    // END;
    //#endregion
    async ANFVAXTE_antvarxte_postQuery() {
        console.log("Entering ANFVAXTE_antvarxte_postQuery");
        let V_CALIF: string = null;
        let V_ANOS: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("VARXTE_CODVAR", this.ANTVARXTE.VARXTE_CODVAR);
        payload1.set("VARXTE_DOMINI", this.ANTVARXTE.VARXTE_DOMINI);
        // call REST API
        const result1 = await Rest.post("/anfvaxte_antvarxte/anfvaxte_antvarxte_postquery_query1", payload1);
        // get values from result
        this.ANTVARXTE.VAR_DESCRI = result1[0].get("VAR_DESCRI");
        if (result1 == null || result1.length == 0) {

            this.ANTVARXTE.VAR_DESCRI = "***NO TIENE DESCRIPCIÓN***";
        }

        console.log("Exiting ANFVAXTE_antvarxte_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_RECORD;
    // END;
    //#endregion
    async ANFVAXTE_antvarxte_varxteObser_keyNextItem() {
        console.log("Entering ANFVAXTE_antvarxte_varxteObser_keyNextItem");
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting ANFVAXTE_antvarxte_varxteObser_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :VARXTE_VLCAL = NULL THEN
    //    LIB$ALERTA ('MENSAJE','DEBE INGRESAR COMO MINIMO UNA CALIFICACIÓN...',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :VARXTE_VLCAL = 'F/D' THEN 
    //       :VARXTE_VLCAL := 'F/D';
    //   ELSIF :VARXTE_VLCAL = 'N/A' THEN 
    //       :VARXTE_VLCAL := 'N/A';
    //   ELSIF :VARXTE_TIPVAL = 'P' AND :VARXTE_VLCAL NOT BETWEEN TO_NUMBER('1') AND TO_NUMBER('100') THEN 
    //      LIB$ALERTA ('MENSAJE','EL RANGO DEBE SER ENTRE 1 - 100%',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :VARXTE_TIPVAL = 'N' AND :VARXTE_VLCAL NOT BETWEEN TO_NUMBER('1') AND TO_NUMBER('5') THEN
    //      LIB$ALERTA ('MENSAJE','EL RANGO DEBE SER ENTRE 1 - 5 ',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :VARXTE_TIPVAL = 'L' AND :VARXTE_VLCAL NOT IN ('S','N','N/A','F/D') THEN 
    //      LIB$ALERTA ('MENSAJE','EL RANGO DEBE SER ENTRE SI - NO ',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async ANFVAXTE_antvarxte_varxteVlcal_whenValidateItem() {
        console.log("Entering ANFVAXTE_antvarxte_varxteVlcal_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.ANTVARXTE.VARXTE_VLCAL == null) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "DEBE INGRESAR COMO MINIMO UNA CALIFICACIÓN...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.ANTVARXTE.VARXTE_VLCAL == "F/D") {
            this.ANTVARXTE.VARXTE_VLCAL = "F/D";
        }
        else if (this.ANTVARXTE.VARXTE_VLCAL == "N/A") {
            this.ANTVARXTE.VARXTE_VLCAL = "N/A";
        }
        else if ((this.ANTVARXTE.VARXTE_TIPVAL == "P" && this.ANTVARXTE.VARXTE_VLCAL)) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "EL RANGO DEBE SER ENTRE 1 - 100%", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if ((this.ANTVARXTE.VARXTE_TIPVAL == "N" && this.ANTVARXTE.VARXTE_VLCAL)) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "EL RANGO DEBE SER ENTRE 1 - 5 ", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if ((this.ANTVARXTE.VARXTE_TIPVAL == "L" && ["S", "N", "N/A", "F/D"].indexOf(this.ANTVARXTE.VARXTE_VLCAL) != -1)) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "EL RANGO DEBE SER ENTRE SI - NO ", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFVAXTE_antvarxte_varxteVlcal_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :VARXTE_VLCAL = NULL THEN
    //    LIB$ALERTA ('MENSAJE','DEBE INGRESAR COMO MINIMO UNA CALIFICACIÓN...',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   NEXT_ITEM;
    // END;
    //#endregion
    async ANFVAXTE_antvarxte_varxteVlcal_keyNextItem() {
        console.log("Entering ANFVAXTE_antvarxte_varxteVlcal_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.ANTVARXTE.VARXTE_VLCAL == null) {
            // ANFVAXTE_LIB$ALERTA("MENSAJE", "DEBE INGRESAR COMO MINIMO UNA CALIFICACIÓN...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting ANFVAXTE_antvarxte_varxteVlcal_keyNextItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFVAXTE_toolbar_whenButtonPressed() {
        console.log("Entering ANFVAXTE_toolbar_whenButtonPressed");
        // ANFVAXTE_TOOLBAR_ACTIONS();
        console.log("Exiting ANFVAXTE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFVAXTE_toolbar_whenMouseLeave() {
        console.log("Entering ANFVAXTE_toolbar_whenMouseLeave");
        // ANFVAXTE_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFVAXTE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFVAXTE_toolbar_whenNewFormInstance() {
        console.log("Entering ANFVAXTE_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFVAXTE_toolbar_whenNewFormInstance");
    }

}

