import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCVAXT business logic
import {
    VARIABLE,
    ANTVARXTE,
    TOOLBAR,
    BASE
} from "./ANFCVAXT_models";



// class ANFCVAXT
@Component({
    selector: 'app-anfcvaxt',
    templateUrl: './anfcvaxt.component.html',
})
export class AnfcvaxtComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['SOL_CTRL', null],
        ['SOL_TER', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTVARXTE: ANTVARXTE = new ANTVARXTE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    async ANFCVAXT_keyDelrec() {
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
    async ANFCVAXT_onClearDetails() {
        console.log("Entering ANFCVAXT_onClearDetails");
        // ANFCVAXT_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFCVAXT_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFCVAXT_whenMouseDoubleclick() {
        console.log("Entering ANFCVAXT_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFCVAXT_whenMouseDoubleclick");
    }

    async ANFCVAXT_keyCrerec() {
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
    // -------------------------------------------------------; END;
    //#endregion
    async ANFCVAXT_whenNewFormInstance() {
        console.log("Entering ANFCVAXT_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfcvaxt/anfcvaxt_whennewforminstance_query1", payload1);
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

        console.log("Exiting ANFCVAXT_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFCVAXT_preForm() {
        console.log("Entering ANFCVAXT_preForm");
        // ANFCVAXT_PANTALLA();
        // ANFCVAXT_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFCVAXT_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFCVAXT_keyUp() {
        console.log("Entering ANFCVAXT_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFCVAXT_keyUp");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFCVAXT_variable_keyEntqry() {
        console.log("Entering ANFCVAXT_variable_keyEntqry");
        console.log("Exiting ANFCVAXT_variable_keyEntqry");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTVARXTE DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTVARXTE_CUR IS      
    //     SELECT 1 FROM ANTVARXTE     
    //     WHERE VARXTE_CODTER = :VARIABLE.VAR_CODTER AND VARXTE_CODPER = :VARIABLE.PERCOD;
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
    async ANFCVAXT_variable_onCheckDeleteMaster() {
        console.log("Entering ANFCVAXT_variable_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCVAXT_variable_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN IF  :this.PARAMETER.get("SOL_CTRL") ='Q' THEN
    //     :VARIABLE.VAR_CODTER :=  :this.PARAMETER.get("SOL_TER");
    // END IF; END;
    //#endregion
    async ANFCVAXT_variable_whenNewBlockInstance() {
        console.log("Entering ANFCVAXT_variable_whenNewBlockInstance");
        if (this.PARAMETER.get("SOL_CTRL") == "Q") {
            this.VARIABLE.VAR_CODTER = this.PARAMETER.get("SOL_TER");
        }
        console.log("Exiting ANFCVAXT_variable_whenNewBlockInstance");
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
    //   IF ( (:VARIABLE.VAR_CODTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R1_VARIABLE_ANTVARXTE');   
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
    async ANFCVAXT_variable_onPopulateDetails() {
        console.log("Entering ANFCVAXT_variable_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.VARIABLE.VAR_CODTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R1_VARIABLE_ANTVARXTE");
            // ANFCVAXT_QUERY_MASTER_DETAILS(REL_ID, "ANTVARXTE");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFCVAXT_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFCVAXT_variable_onPopulateDetails");
    }

    async ANFCVAXT_variable_keyPrvblk() {
        // null;
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
    async ANFCVAXT_variable_varCodter_whenValidateItem() {
        console.log("Entering ANFCVAXT_variable_varCodter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("VAR_CODTER", this.VARIABLE.VAR_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfcvaxt_variable/anfcvaxt_variable_varcodter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFCVAXT_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCVAXT_variable_varCodter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('ANTVARXTE');
    // EXECUTE_QUERY; END;
    //#endregion
    async ANFCVAXT_variable_varCodter_keyNextItem() {
        console.log("Entering ANFCVAXT_variable_varCodter_keyNextItem");
        this.oracleFormsBuiltins.go_block("ANTVARXTE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCVAXT_variable_varCodter_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // /* BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;*/
    // NULL;
    // END;
    //#endregion
    async ANFCVAXT_variable_percod_whenValidateItem() {
        console.log("Entering ANFCVAXT_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        console.log("Exiting ANFCVAXT_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  GO_BLOCK('VARIABLE');
    // END;
    //#endregion
    async ANFCVAXT_antvarxte_keyPrvblk() {
        console.log("Entering ANFCVAXT_antvarxte_keyPrvblk");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting ANFCVAXT_antvarxte_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DOMINI_DESCRI
    //     INTO :DOMINI_DESCR
    //   FROM ANTDOMINIOS
    //    WHERE DOMINI_ABREVE = :VARXTE_DOMINI;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    :DOMINI_DESCR := '***NO TIENE DOMINIO***';
    // END;
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
    // ----------------------------
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION VARCHAR2(60);
    // BEGIN
    //  
    // IF NVL(:CONTADOR,0)= 0 THEN
    // BEGIN
    //  BEGIN
    //   SELECT DESCRIPCION
    //      INTO V_OPCION
    //      FROM OPCIONES
    //      WHERE UPPER(PROGRAMA)=:SYSTEM.CURRENT_FORM
    //        AND PROGRAMA IS NOT NULL
    //        AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     V_OPCION:=NULL;
    //   END;   
    //   --EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('VARIABLES_CUALITATIVAS',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=1;
    // END;
    // 
    // END IF;
    // END;
    //#endregion
    async ANFCVAXT_antvarxte_postQuery() {
        console.log("Entering ANFCVAXT_antvarxte_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("VARXTE_DOMINI", this.ANTVARXTE.VARXTE_DOMINI);
        // call REST API
        const result1 = await Rest.post("/anfcvaxt_antvarxte/anfcvaxt_antvarxte_postquery_query1", payload1);
        // get values from result
        this.ANTVARXTE.DOMINI_DESCR = result1[0].get("DOMINI_DESCR");
        if (result1 == null || result1.length == 0) {

            this.ANTVARXTE.DOMINI_DESCR = "***NO TIENE DOMINIO***";
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("VARXTE_CODVAR", this.ANTVARXTE.VARXTE_CODVAR);
        payload2.set("VARXTE_DOMINI", this.ANTVARXTE.VARXTE_DOMINI);
        // call REST API
        const result2 = await Rest.post("/anfcvaxt_antvarxte/anfcvaxt_antvarxte_postquery_query2", payload2);
        // get values from result
        this.ANTVARXTE.VAR_DESCRI = result2[0].get("VAR_DESCRI");
        if (result2 == null || result2.length == 0) {

            this.ANTVARXTE.VAR_DESCRI = "***NO TIENE DESCRIPCIÓN***";
        }

        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        if (this.VARIABLE.CONTADOR == null ? 0 : this.VARIABLE.CONTADOR == 0) {
            let result3 = new Map();
            try {

                // construct payload
                let payload3 = new Map();
                //payload3.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
                // call REST API
                const result3 = await Rest.post("/anfcvaxt_antvarxte/anfcvaxt_antvarxte_postquery_query3", payload3);
                // get values from result
                V_OPCION = result3[0].get("V_OPCION");
            } catch (ex) {

                V_OPCION = null;
            }

            // ANFCVAXT_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("VARIABLES_CUALITATIVAS", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
            // this.ANTVARXTE.CONTADOR = 1;
        }
        console.log("Exiting ANFCVAXT_antvarxte_postQuery");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFCVAXT_toolbar_whenButtonPressed() {
        console.log("Entering ANFCVAXT_toolbar_whenButtonPressed");
        // ANFCVAXT_TOOLBAR_ACTIONS();
        console.log("Exiting ANFCVAXT_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFCVAXT_toolbar_whenMouseLeave() {
        console.log("Entering ANFCVAXT_toolbar_whenMouseLeave");
        // ANFCVAXT_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFCVAXT_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFCVAXT_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCVAXT_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCVAXT_toolbar_whenNewFormInstance");
    }

}

