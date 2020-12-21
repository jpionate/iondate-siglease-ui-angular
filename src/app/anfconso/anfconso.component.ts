import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCONSO business logic
import {
    CRTOTERSOL,
    VARIABLE,
    CRTOTERSOL_2,
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./ANFCONSO_models";



// class ANFCONSO
@Component({
    selector: 'app-anfconso',
    templateUrl: './anfconso.component.html',
})
export class AnfconsoComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTOTERSOL_2: CRTOTERSOL_2 = new CRTOTERSOL_2();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    async ANFCONSO_keyDelrec() {
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
    async ANFCONSO_onClearDetails() {
        console.log("Entering ANFCONSO_onClearDetails");
        // ANFCONSO_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFCONSO_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFCONSO_whenMouseDoubleclick() {
        console.log("Entering ANFCONSO_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFCONSO_whenMouseDoubleclick");
    }

    async ANFCONSO_keyCrerec() {
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
    // --GO_BLOCK('TER');
    // 
    // --ENTER_QUERY;
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
    // -------------------------------------------------------
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
    async ANFCONSO_whenNewFormInstance() {
        console.log("Entering ANFCONSO_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfconso/anfconso_whennewforminstance_query1", payload1);
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

        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.NITTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFCONSO_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFCONSO_preForm() {
        console.log("Entering ANFCONSO_preForm");
        // ANFCONSO_PANTALLA();
        // ANFCONSO_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFCONSO_preForm");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //    INTO :CRTOTERSOL.DES_PROVEDOR
    //    FROM TER
    //   WHERE :CRTOTERSOL.OTERSOL_NITTER=TERCOD;  
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    //#endregion
    async ANFCONSO_crtotersol_postQuery() {
        console.log("Entering ANFCONSO_crtotersol_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/anfconso_crtotersol/anfconso_crtotersol_postquery_query1", payload1);
        // get values from result
        this.CRTOTERSOL.DES_PROVEDOR = result1[0].get("CRTOTERSOL.DES_PROVEDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFCONSO_crtotersol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :VARIABLE.NITTER IS NOT NULL THEN
    // GO_BLOCK('CRTOTERSOL_2');
    // EXECUTE_QUERY;
    // ELSE
    //  LIB$ALERTA('MENSAJE','TERCERO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // END;
    //#endregion
    async ANFCONSO_variable_correndatarios_whenMouseClick() {
        console.log("Entering ANFCONSO_variable_correndatarios_whenMouseClick");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("CRTOTERSOL_2");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // ANFCONSO_LIB$ALERTA("MENSAJE", "TERCERO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONSO_variable_correndatarios_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY;
    // HIDE_VIEW('CANVAS2'); END;
    //#endregion
    async ANFCONSO_variable_volver_whenMouseClick() {
        console.log("Entering ANFCONSO_variable_volver_whenMouseClick");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFCONSO_variable_volver_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DES_NOMBRE
    //    FROM TER
    //   WHERE :NITTER=TERCOD;  
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE', 'TERCERO INEXISTENTE ......', NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async ANFCONSO_variable_nitter_whenValidateItem() {
        console.log("Entering ANFCONSO_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfconso_variable/anfconso_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NOMBRE = result1[0].get("DES_NOMBRE");
        if (result1 == null || result1.length == 0) {

            // ANFCONSO_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCONSO_variable_nitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY;
    // /*
    // GO_BLOCK('CRTOTERSOL');
    // EXECUTE_QUERY;*/; END;
    //#endregion
    async ANFCONSO_variable_nitter_keyNextItem() {
        console.log("Entering ANFCONSO_variable_nitter_keyNextItem");
        console.log("Exiting ANFCONSO_variable_nitter_keyNextItem");
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
    async ANFCONSO_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFCONSO_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFCONSO_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFCONSO_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //    INTO :CRTOTERSOL_2.DES_PROVEDOR
    //    FROM TER
    //   WHERE :CRTOTERSOL_2.OTERSOL_NITTER=TERCOD;  
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    //#endregion
    async ANFCONSO_crtotersol2_postQuery() {
        console.log("Entering ANFCONSO_crtotersol2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL_2.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/anfconso_crtotersol_2/anfconso_crtotersol2_postquery_query1", payload1);
        // get values from result
        this.CRTOTERSOL_2.DES_PROVEDOR = result1[0].get("CRTOTERSOL_2.DES_PROVEDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFCONSO_crtotersol2_postQuery");
    }

    async ANFCONSO_crtsolicr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTOTERSOL_CUR IS      
    //     SELECT 1 FROM CRTOTERSOL     
    //     WHERE OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL;
    //   --
    //   -- END CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTOTERSOL_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTOTERSOL_2_CUR IS      
    //     SELECT 1 FROM CRTOTERSOL     
    //     WHERE OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTOTERSOL_2 DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTOTERSOL_CUR;     
    //   FETCH CRTOTERSOL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTOTERSOL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTOTERSOL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTOTERSOL_CUR;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTOTERSOL_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTOTERSOL_2_CUR;     
    //   FETCH CRTOTERSOL_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTOTERSOL_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTOTERSOL_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTOTERSOL_2_CUR;
    //   --
    //   -- END CRTOTERSOL_2 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCONSO_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering ANFCONSO_crtsolicr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONSO_crtsolicr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFCONSO_crtsolicr_keyCommit() {
        console.log("Entering ANFCONSO_crtsolicr_keyCommit");
        console.log("Exiting ANFCONSO_crtsolicr_keyCommit");
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
    //   -- BEGIN CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTOTERSOL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTOTERSOL');   
    //   END IF;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTOTERSOL_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.RELATION68');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTOTERSOL_2');   
    //   END IF;
    //   --
    //   -- END CRTOTERSOL_2 DETAIL PROGRAM SECTION
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
    async ANFCONSO_crtsolicr_onPopulateDetails() {
        console.log("Entering ANFCONSO_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CRTSOLICR.SOLICR_CODSOL != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTOTERSOL");
            // ANFCONSO_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL");
        }
        if (((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.RELATION68");
            // ANFCONSO_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL_2");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFCONSO_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFCONSO_crtsolicr_onPopulateDetails");
    }

    async ANFCONSO_crtsolicr_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   IF :SOLICR_CLASAC='U' THEN
    //      :ACTIVO:='USADO';
    //   ELSE
    //      :ACTIVO:='NUEVO';
    //   END IF;
    // END;     
    //  
    // BEGIN
    //  SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //    INTO :NOM_CIASEG
    //    FROM TER
    //   WHERE :SOLICR_CSEGGT=TERCOD;  
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_postQuery() {
        console.log("Entering ANFCONSO_crtsolicr_postQuery");
        if (this.CRTSOLICR.SOLICR_CLASAC == "U") {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
        // call REST API
        const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOM_CIASEG = result1[0].get("NOM_CIASEG");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFCONSO_crtsolicr_postQuery");
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
    //      FROM TIN
    //     WHERE TINCOD=:SOLICR_TDOLAR;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END IF; 
    // --BEGIN
    // --    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    // --     LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    // --     RAISE FORM_TRIGGER_FAILURE;
    // --    END IF;
    // --END;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TDOLAR", this.CRTSOLICR.SOLICR_TDOLAR);
            // call REST API
            const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrTdolar_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF :CRTSOLICR.SOLICR_OPCCOM IS NOT NULL THEN
    //       IF NVL(:CRTSOLICR.SOLICR_OPCCOM, 0) < 0 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //    END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrOpccom_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrOpccom_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_OPCCOM != null)) {
            if (this.CRTSOLICR.SOLICR_OPCCOM == null ? 0 : this.CRTSOLICR.SOLICR_OPCCOM < 0) {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrOpccom_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_MODALI IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT MODCOD
    //      INTO DESC1
    //      FROM MOD$
    //     WHERE MODCOD =:SOLICR_MODALI;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO DE MODALIDAD INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrModali_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrModali_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_MODALI != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_MODALI", this.CRTSOLICR.SOLICR_MODALI);
                // call REST API
                const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrmodali_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrModali_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_MODINT',ENTERABLE,"PROPERTY_OFF");
    //    END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrModali_postTextItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrModali_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_MODINT", "ENTERABLE", "PROPERTY_OFF");
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrModali_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_GTONAC  NOT IN ('N','S') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrGtonac_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrGtonac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "S"].indexOf(this.CRTSOLICR.SOLICR_GTONAC) != -1) {
            // ANFCONSO_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrGtonac_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF  :CRTSOLICR.SOLICR_GTIREC IS NOT NULL THEN
    //      IF :CRTSOLICR.SOLICR_GTIREC  NOT IN ('S','N') THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //         END IF;
    //      IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_FALSE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_FALSE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', NEXT_NAVIGATION_ITEM, 'CRTSOLICR.SOLICR_NITTER');
    //      ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',"DISPLAYED","PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_TRUE"); 
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',UPDATEABLE,"PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_TRUE");
    //     END IF;
    // END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrGtirec_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrGtirec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_GTIREC != null)) {
            if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            }
            if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
            }
            else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "DISPLAYED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "UPDATEABLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_TRUE");
            }
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrGtirec_whenValidateItem");
    }

    async ANFCONSO_crtsolicr_solicrGtirec_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', NEXT_NAVIGATION_ITEM, 'CRTSOLICR.SOLICR_NITTER');
    //    ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_TRUE");
    //    END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrGtirec_posttextitem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrGtirec_posttextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_TRUE");
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrGtirec_posttextitem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',ENABLED,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"ATTR_OFF");
    //       --GO_ITEM('CRTSOLICR.SOLICR_PRENDA');
    //     ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',ENABLED,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,ATTR_ON);
    //      -- GO_ITEM('CRTSOLICR.SOLICR_NOMREC');
    //     END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrGtirec_keynextitem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrGtirec_keynextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "ATTR_OFF");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_ON");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", ATTR_ON);
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrGtirec_keynextitem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TLINCOD
    //      INTO DESC1
    //      FROM TLIN
    //     WHERE TLINCOD =:SOLICR_LINEA;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // 
    // END IF; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrLinea_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrLinea_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_LINEA", this.CRTSOLICR.SOLICR_LINEA);
                // call REST API
                const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrlinea_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrLinea_whenValidateItem");
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
    async ANFCONSO_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrOrmonus$_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_ORMONUS != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ORMONUS", this.CRTSOLICR.SOLICR_ORMONUS);
                // call REST API
                const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrOrmonus$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // END;
    // */
    // NULL; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrPtous$_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrPtous$_whenValidateItem");
        console.log("Exiting ANFCONSO_crtsolicr_solicrPtous$_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA    NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CONEXT IS NOT NULL THEN
    //     IF  NVL(:CRTSOLICR.SOLICR_CONEXT,0) > NVL(:CRTSOLICR.SOLICR_MONTO,0) THEN
    //     LIB$ALERTA('MENSAJE','NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //  END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrConext_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CONEXT != null)) {
            if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT > this.CRTSOLICR.SOLICR_MONTO == null ? 0 : this.CRTSOLICR.SOLICR_MONTO) {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrConext_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    // IF :SOLICR_TPESOS IS NOT NULL THEN
    // BEGIN
    //    SELECT TINDES
    //      INTO DESC1
    //      FROM TIN
    //     WHERE TINCOD=:SOLICR_TPESOS;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF;
    // --BEGIN
    // --    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    // --     LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    // --     RAISE FORM_TRIGGER_FAILURE;
    // --    END IF;
    // --END;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrTpesos_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrTpesos_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TPESOS", this.CRTSOLICR.SOLICR_TPESOS);
            // call REST API
            const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrtpesos_whenvalidateitem_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrTpesos_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // END;*/
    // NULL; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrPunts$_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrPunts$_whenValidateItem");
        console.log("Exiting ANFCONSO_crtsolicr_solicrPunts$_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_FNG = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FNG',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR := 'X';
    //        -- FRM$GARANTIAS_EQUIS ('FNG');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrFngp_whenValidateItem");
    }

    async ANFCONSO_crtsolicr_solicrFngp_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrFngp_keyNextItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrFngp_keyNextItem");
        console.log("Exiting ANFCONSO_crtsolicr_solicrFngp_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_CLASAC  NOT IN ('N','U') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //      :CRTSOLICR.ACTIVO:= 'NUEVO';
    //   ELSE
    //      :CRTSOLICR.ACTIVO:= 'USADO';
    //   
    // 
    //   END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrClasac_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrClasac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "U"].indexOf(this.CRTSOLICR.SOLICR_CLASAC) != -1) {
            // ANFCONSO_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TIPCRE IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :SOLICR_TIPCRE NOT IN ('03','04') THEN
    //     LIB$ALERTA('MENSAJE','CODIGO INVALIDO ........',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END; 
    // END IF; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrTipcre_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrTipcre_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_TIPCRE != null)) {
            {

                let T_RESPUESTA: number = null;
                if (["03", "04"].indexOf(this.CRTSOLICR.SOLICR_TIPCRE) != -1) {
                    // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO INVALIDO ........", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrTipcre_whenValidateItem");
    }

    async ANFCONSO_crtsolicr_solicrBcodex_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL
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
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrTasa_postTextItem");
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CSEGGT IS NOT NULL THEN
    //    BEGIN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //     INTO  :CRTSOLICR.NOM_CIASEG    
    //     FROM TER
    //     WHERE TERCOD=:CRTSOLICR.SOLICR_CSEGGT;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','ASEGURADORA INEXISTENTE VERIFICAR EN TERCEROS ACTIVIDAD ECONÓMICA....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  NEXT_ITEM; 
    //  ELSE
    //     GO_ITEM('SOLICR_OBSGTI');
    //  END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrCseggt_keyNextItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrCseggt_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CSEGGT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
            // call REST API
            const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrcseggt_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NOM_CIASEG = result1[0].get("CRTSOLICR.NOM_CIASEG");
            if (result1 == null || result1.length == 0) {

                // ANFCONSO_LIB$ALERTA("MENSAJE", "ASEGURADORA INEXISTENTE VERIFICAR EN TERCEROS ACTIVIDAD ECONÓMICA....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            this.oracleFormsBuiltins.next_item();
        }
        else {
            this.oracleFormsBuiltins.go_item("SOLICR_OBSGTI");
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrCseggt_keyNextItem");
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrActivo_keyEnter() {
        console.log("Entering ANFCONSO_crtsolicr_solicrActivo_keyEnter");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting ANFCONSO_crtsolicr_solicrActivo_keyEnter");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_SEGURO  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrSeguro_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrSeguro_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_SEGURO) != -1) {
            // ANFCONSO_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrSeguro_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_SEGURO ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',ENTERABLE,"ATTR_OFF");
    //       GO_ITEM('CRTSOLICR.SOLICR_OBSGTI');
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',ENTERABLE,ATTR_ON);
    //       NEXT_ITEM;
    //     END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrSeguro_keyNextItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrSeguro_keyNextItem");
        if (this.CRTSOLICR.SOLICR_SEGURO == "N") {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", ENTERABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.NOM_CIASEG", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.NOM_CIASEG", ENTERABLE, "ATTR_OFF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSGTI");
        }
        else {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", ENTERABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.NOM_CIASEG", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.NOM_CIASEG", ENTERABLE, ATTR_ON);
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrSeguro_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_ORMONET IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT ORMDES
    //      INTO DESC1
    //      FROM ORM
    //     WHERE ORMCOD=:SOLICR_ORMONET;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrOrmonet_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrOrmonet_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_ORMONET != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ORMONET", this.CRTSOLICR.SOLICR_ORMONET);
                // call REST API
                const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrormonet_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrOrmonet_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FNG IS NOT NULL THEN 
    //   IF :CRTSOLICR.SOLICR_FNG  <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrFng_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrFng_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FNG != null)) {
            if (this.CRTSOLICR.SOLICR_FNG != "X") {
                // ANFCONSO_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrFng_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_PRENDA  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrPrenda_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrPrenda_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_PRENDA) != -1) {
            // ANFCONSO_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrPrenda_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_PRENDA ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',ENTERABLE,"ATTR_OFF");
    //       GO_ITEM('CRTSOLICR.SOLICR_SEGURO');
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',ENTERABLE,ATTR_ON);
    //     END IF;
    // END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrPrenda_keyNextItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrPrenda_keyNextItem");
        if (this.CRTSOLICR.SOLICR_PRENDA == "N") {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", ENTERABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", UPDATEABLE, "ATTR_OFF");
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", ENTERABLE, "ATTR_OFF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_SEGURO");
        }
        else {
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", ENTERABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", UPDATEABLE, ATTR_ON);
            // ANFCONSO_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", ENTERABLE, ATTR_ON);
        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrPrenda_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_MODINT IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT MODCOD
    //      INTO DESC1
    //      FROM MOD$
    //     WHERE MODCOD =:SOLICR_MODINT;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO DE MODALIDAD INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async ANFCONSO_crtsolicr_solicrModint_whenValidateItem() {
        console.log("Entering ANFCONSO_crtsolicr_solicrModint_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_MODINT != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_MODINT", this.CRTSOLICR.SOLICR_MODINT);
                // call REST API
                const result1 = await Rest.post("/anfconso_crtsolicr/anfconso_crtsolicr_solicrmodint_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // ANFCONSO_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting ANFCONSO_crtsolicr_solicrModint_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFCONSO_toolbar_whenButtonPressed() {
        console.log("Entering ANFCONSO_toolbar_whenButtonPressed");
        // ANFCONSO_TOOLBAR_ACTIONS();
        console.log("Exiting ANFCONSO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFCONSO_toolbar_whenMouseLeave() {
        console.log("Entering ANFCONSO_toolbar_whenMouseLeave");
        // ANFCONSO_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFCONSO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFCONSO_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCONSO_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCONSO_toolbar_whenNewFormInstance");
    }

}

