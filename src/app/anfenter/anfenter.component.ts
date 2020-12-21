import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFENTER business logic
import {
    ANTENDTRR,
    ANTDIASXTER,
    VARIABLE,
    ANTENDTRR_AUX,
    ANTDIASXTRR,
    ANTENDXSOL_EC,
    ANTENDXSRR_EC,
    ANTENDTER,
    TOOLBAR,
    ANTENDXSOL,
    ANTENDXSRR,
    BASE
} from "./ANFENTER_models";



// class ANFENTER
@Component({
    selector: 'app-anfenter',
    templateUrl: './anfenter.component.html',
})
export class AnfenterComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['TER_NIT', null],
        ['PMAXPERIO', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTENDTRR: ANTENDTRR = new ANTENDTRR();
    public ANTDIASXTER: ANTDIASXTER = new ANTDIASXTER();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTENDTRR_AUX: ANTENDTRR_AUX = new ANTENDTRR_AUX();
    public ANTDIASXTRR: ANTDIASXTRR = new ANTDIASXTRR();
    public ANTENDXSOL_EC: ANTENDXSOL_EC = new ANTENDXSOL_EC();
    public ANTENDXSRR_EC: ANTENDXSRR_EC = new ANTENDXSRR_EC();
    public ANTENDTER: ANTENDTER = new ANTENDTER();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTENDXSOL: ANTENDXSOL = new ANTENDXSOL();
    public ANTENDXSRR: ANTENDXSRR = new ANTENDXSRR();
    public BASE: BASE = new BASE();


    async ANFENTER_keyDelrec() {
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
    async ANFENTER_onClearDetails() {
        console.log("Entering ANFENTER_onClearDetails");
        // ANFENTER_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFENTER_onClearDetails");
    }

    async ANFENTER_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFENTER_whenMouseDoubleclick() {
        console.log("Entering ANFENTER_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFENTER_whenMouseDoubleclick");
    }

    async ANFENTER_keyCrerec() {
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
    //  --ARQUITECTURA
    // 
    //   IF :this.PARAMETER.get("P_UNIDAD") IS NULL THEN
    //   
    //    BEGIN
    //   SELECT S.USU_CODUNI 
    //    INTO :this.PARAMETER.get("P_UNIDAD")
    //   FROM SGUSUARIOS S
    //   WHERE S.USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION WHEN NO_DATA_FOUND THEN 
    //     LIB$DTNERFRMA('EL USUARIO '||USER||' NO TIENE ASIGNADA LA UNIDAD');
    //     
    //   END; 
    //    
    //    
    //   END IF;
    // 
    // --ARQUITECTURA 
    //   
    //   
    //   :VARIABLE.NITTER := NVL(:this.PARAMETER.get("TER_NIT"),:VARIABLE.NITTER) ;
    //   :VARIABLE.PERCOD := NVL(:this.PARAMETER.get("PMAXPERIO"),:VARIABLE.PERCOD); END;
    //#endregion
    async ANFENTER_whenNewFormInstance() {
        console.log("Entering ANFENTER_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfenter/anfenter_whennewforminstance_query1", payload1);
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

        if ((this.PARAMETER.get("P_UNIDAD") == null)) {
            // construct payload
            let payload2 = new Map();
            payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
            // call REST API
            const result2 = await Rest.post("/anfenter/anfenter_whennewforminstance_query2", payload2);
            // get values from result
            this.PARAMETER.set("P_UNIDAD", result2[0].get(this.PARAMETER.get("P_UNIDAD")));
            if (result2 == null || result2.length == 0) {

                // ANFENTER_LIB$DTNERFRMA("EL USUARIO " + USER + " NO TIENE ASIGNADA LA UNIDAD");
            }

        }
        this.VARIABLE.NITTER = this.PARAMETER.get("TER_NIT") == null ? this.VARIABLE.NITTER : this.PARAMETER.get("TER_NIT");
        this.VARIABLE.PERCOD = this.PARAMETER.get("PMAXPERIO") == null ? this.VARIABLE.PERCOD : this.PARAMETER.get("PMAXPERIO");
        console.log("Exiting ANFENTER_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFENTER_preForm() {
        console.log("Entering ANFENTER_preForm");
        // ANFENTER_PANTALLA();
        // ANFENTER_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFENTER_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFENTER_keyUp() {
        console.log("Entering ANFENTER_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFENTER_keyUp");
    }

    async ANFENTER_keyCommit() {
        // null;
    }

    async ANFENTER_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFENTER_keyDown() {
        console.log("Entering ANFENTER_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFENTER_keyDown");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTENDTRR_AUX DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTENDTRR_AUX_CUR IS      
    //     SELECT 1 FROM ANTENDTRR     
    //     WHERE ENDTRR_CODTER = :ANTENDTRR.ENDTRR_CODTER AND ENDTRR_TERREL = :ANTENDTRR.ENDTRR_TERREL;
    //   --
    //   -- END ANTENDTRR_AUX DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTENDXSRR DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTENDXSRR_CUR IS      
    //     SELECT 1 FROM ANTENDXSRR     
    //     WHERE ENDXSR_CODTER = :ANTENDTRR.ENDTRR_CODTER AND ENDXSR_TERREL = :ANTENDTRR.ENDTRR_TERREL;
    //   --
    //   -- END ANTENDXSRR DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTENDXSRR_EC DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTENDXSRR_EC_CUR IS      
    //     SELECT 1 FROM ANTENDXSRR A     
    //     WHERE A.ENDXSR_CODTER = :ANTENDTRR.ENDTRR_CODTER AND A.ENDXSR_TERREL = :ANTENDTRR.ENDTRR_TERREL;
    //   --
    //   -- END ANTENDXSRR_EC DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTENDTRR_AUX DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTENDTRR_AUX_CUR;     
    //   FETCH ANTENDTRR_AUX_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTENDTRR_AUX_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTENDTRR_AUX_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTENDTRR_AUX_CUR;
    //   --
    //   -- END ANTENDTRR_AUX DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTENDXSRR DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTENDXSRR_CUR;     
    //   FETCH ANTENDXSRR_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTENDXSRR_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTENDXSRR_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTENDXSRR_CUR;
    //   --
    //   -- END ANTENDXSRR DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTENDXSRR_EC DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTENDXSRR_EC_CUR;     
    //   FETCH ANTENDXSRR_EC_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTENDXSRR_EC_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTENDXSRR_EC_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTENDXSRR_EC_CUR;
    //   --
    //   -- END ANTENDXSRR_EC DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFENTER_antendtrr_onCheckDeleteMaster() {
        console.log("Entering ANFENTER_antendtrr_onCheckDeleteMaster");
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
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFENTER_antendtrr_onCheckDeleteMaster");
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
    //   -- BEGIN ANTENDTRR_AUX DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTENDTRR.ENDTRR_CODTER IS NOT NULL) OR (:ANTENDTRR.ENDTRR_TERREL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTENDTRR.ANTENDTRR_AUX');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTENDTRR_AUX');   
    //   END IF;
    //   --
    //   -- END ANTENDTRR_AUX DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTENDXSRR DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTENDTRR.ENDTRR_CODTER IS NOT NULL) OR (:ANTENDTRR.ENDTRR_TERREL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTENDTRR.ANTENDXSRR');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTENDXSRR');   
    //   END IF;
    //   --
    //   -- END ANTENDXSRR DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTENDXSRR_EC DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTENDTRR.ENDTRR_CODTER IS NOT NULL) OR (:ANTENDTRR.ENDTRR_TERREL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTENDTRR.ANTENDTRR_ANTENDXSRR_EC');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTENDXSRR_EC');   
    //   END IF;
    //   --
    //   -- END ANTENDXSRR_EC DETAIL PROGRAM SECTION
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
    async ANFENTER_antendtrr_onPopulateDetails() {
        console.log("Entering ANFENTER_antendtrr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.ANTENDTRR.ENDTRR_CODTER != null) || (this.ANTENDTRR.ENDTRR_TERREL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTENDTRR.ANTENDTRR_AUX");
            // ANFENTER_QUERY_MASTER_DETAILS(REL_ID, "ANTENDTRR_AUX");
        }
        if (((this.ANTENDTRR.ENDTRR_CODTER != null) || (this.ANTENDTRR.ENDTRR_TERREL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTENDTRR.ANTENDXSRR");
            // ANFENTER_QUERY_MASTER_DETAILS(REL_ID, "ANTENDXSRR");
        }
        if (((this.ANTENDTRR.ENDTRR_CODTER != null) || (this.ANTENDTRR.ENDTRR_TERREL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTENDTRR.ANTENDTRR_ANTENDXSRR_EC");
            // ANFENTER_QUERY_MASTER_DETAILS(REL_ID, "ANTENDXSRR_EC");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFENTER_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFENTER_antendtrr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_TERREL
    //    FROM TER
    //    WHERE TERCOD=:ANTENDTRR.ENDTRR_TERREL;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFENTER_antendtrr_postQuery() {
        console.log("Entering ANFENTER_antendtrr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("ENDTRR_TERREL", this.ANTENDTRR.ENDTRR_TERREL);
        // call REST API
        const result1 = await Rest.post("/anfenter_antendtrr/anfenter_antendtrr_postquery_query1", payload1);
        // get values from result
        this.ANTENDTRR.DES_TERREL = result1[0].get("DES_TERREL");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFENTER_antendtrr_postQuery");
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
    //     ADD_PARAMETER(PL_ID,'P_TERCERO',"TEXT_PARAMETER",:NITTER);
    //     
    //     RUN_PRODUCT(REPORTS,'ANRENTER',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFENTER_variable_impJurid_whenMouseClick() {
        console.log("Entering ANFENTER_variable_impJurid_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO", "TEXT_PARAMETER", this.VARIABLE.NITTER);
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRENTER", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFENTER_variable_impJurid_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTENDTRR');
    //   EXECUTE_QUERY;
    //    GO_BLOCK('ANTENDTRR_AUX');
    //   EXECUTE_QUERY;
    //  GO_BLOCK('ANTENDXSRR');
    //   EXECUTE_QUERY;
    //  GO_BLOCK('ANTENDXSRR_EC');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTENDTRR');
    // END;
    //#endregion
    async ANFENTER_variable_ir_whenMouseClick() {
        console.log("Entering ANFENTER_variable_ir_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTENDTRR");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDTRR_AUX");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDXSRR");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDXSRR_EC");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDTRR");
        console.log("Exiting ANFENTER_variable_ir_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTENDTER');
    //   HIDE_VIEW('CANVAS3');
    // END;
    //#endregion
    async ANFENTER_variable_volverMora1_whenMouseClick() {
        console.log("Entering ANFENTER_variable_volverMora1_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTENDTER");
        this.oracleFormsBuiltins.hide_view("CANVAS3");
        console.log("Exiting ANFENTER_variable_volverMora1_whenMouseClick");
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
    async ANFENTER_variable_percod_whenValidateItem() {
        console.log("Entering ANFENTER_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfenter_variable/anfenter_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFENTER_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFENTER_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  CURSOR TERREL IS
    //     SELECT ENDTRR_TERREL
    //       FROM ANFTERREL
    //      WHERE ENDTRR_CODTER=:NITTER;
    // ---------------------------
    // -- VARIABLES
    // ---------------------------
    // V_GRUPO  ENT.ENTGEC%TYPE;
    // T_RESPUESTA NUMBER;
    // ---------------------------
    // -- PROCESOS PRINCIPAL
    // ---------------------------
    // BEGIN
    //  
    //  
    // --:this.PARAMETER.get("P_UNIDAD") := FBD_CON_UNICON (:VARIABLE.UNIDAD);
    // 
    // :this.PARAMETER.get("P_UNIDAD") := :VARIABLE.UNIDAD;  --RDMV REMEDIACION
    //  
    // -- BORRA TABLA ENDEUDAMIENTO TERCERO
    //  DELETE FROM ANTENDTER
    //  WHERE ENDTER_CODTER=:NITTER
    //    AND ENDTER_CODPER=:PERCOD;
    //  COMMIT;   
    // -- BORRA TABLA ENDEUDAMIENTO TERCERO SOLICITUD
    //  DELETE FROM ANTENDXSOL
    //  WHERE ENDXSO_CODTER=:NITTER
    //    AND ENDXSO_CODPER=:PERCOD;
    //  COMMIT; 
    // -- BORRA TABLA ENDEUDAMIENTO TERCERO EMPRESAS RELACIONADAS
    // DELETE FROM ANTENDTRR
    //  WHERE ENDTRR_CODTER=:NITTER
    //    AND ENDTRR_CODPER=:PERCOD;
    //  COMMIT;   
    // -- BORRA TABLA ENDEUDAMIENTO TERCERO EMPRESAS RELACIONADAS SOLICITUDES
    //  DELETE FROM ANTENDXSRR
    //  WHERE ENDXSR_CODTER=:NITTER
    //    AND ENDXSR_CODPER=:PERCOD;
    // COMMIT;
    // DELETE FROM ANTDIASXTER
    //  WHERE  DIASXT_CODTER = :NITTER  
    // ;
    //   COMMIT;
    // DELETE FROM ANTDIASXTRR
    //  WHERE  DIASTR_CODTER = :NITTER  
    // ;
    // 
    // -- LLAMA EL PROCEDIMIENTO DE CALCULO DE ENDEUDAMIENTO POR TERCERO     
    //  PBD_COL_ANALISISENDEU(:PERCOD,:NITTER,:this.PARAMETER.get("P_UNIDAD"));--ARQUITECTURA
    //  COMMIT;
    //  FOR ACT IN TERREL  LOOP
    //      PBD_COL_ANALISISENDREL(:PERCOD,:NITTER,ACT.ENDTRR_TERREL,:this.PARAMETER.get("P_UNIDAD"));--ARQUITECTURA
    //  END LOOP;
    //  COMMIT;
    //  GO_BLOCK('ANTENDTER');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTENDXSOL');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTENDXSOL_EC');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTENDTRR');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTENDTER');
    //  
    // END;
    //#endregion
    async ANFENTER_variable_percod_keyNextItem() {
        console.log("Entering ANFENTER_variable_percod_keyNextItem");
        let V_GRUPO: null = null;
        let T_RESPUESTA: number = null;
        this.PARAMETER.set("P_UNIDAD", this.VARIABLE.UNIDAD);
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfenter_variable/anfenter_variable_percod_keynextitem_query1", payload1);
        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfenter_variable/anfenter_variable_percod_keynextitem_query3", payload3);
        // construct payload
        let payload5 = new Map();
        payload5.set("NITTER", this.VARIABLE.NITTER);
        payload5.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result5 = await Rest.post("/anfenter_variable/anfenter_variable_percod_keynextitem_query5", payload5);
        // construct payload
        let payload7 = new Map();
        payload7.set("NITTER", this.VARIABLE.NITTER);
        payload7.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result7 = await Rest.post("/anfenter_variable/anfenter_variable_percod_keynextitem_query7", payload7);
        // construct payload
        let payload9 = new Map();
        payload9.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result9 = await Rest.post("/anfenter_variable/anfenter_variable_percod_keynextitem_query9", payload9);
        // construct payload
        let payload11 = new Map();
        payload11.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        let result11 = Rest.post("/anfenter_variable/anfenter_variable_percod_keynextitem_query11", payload11);
        // ANFENTER_PBD_COL_ANALISISENDEU(PERCOD, NITTER, this.PARAMETER.get("P_UNIDAD"));
        this.oracleFormsBuiltins.go_block("ANTENDTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDXSOL");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDXSOL_EC");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDTRR");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTENDTER");
        console.log("Exiting ANFENTER_variable_percod_keyNextItem");
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
    async ANFENTER_variable_nitter_whenValidateItem() {
        console.log("Entering ANFENTER_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfenter_variable/anfenter_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        if (result1 == null || result1.length == 0) {

            // ANFENTER_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFENTER_variable_nitter_whenValidateItem");
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
    //     RUN_PRODUCT(REPORTS,'ANRJUNTA',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFENTER_variable_impJunta_whenMouseClick() {
        console.log("Entering ANFENTER_variable_impJunta_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRJUNTA", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFENTER_variable_impJunta_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTENDTER');
    //   HIDE_VIEW('CANVAS2');
    // END;
    //#endregion
    async ANFENTER_variable_volverTer_whenMouseClick() {
        console.log("Entering ANFENTER_variable_volverTer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTENDTER");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFENTER_variable_volverTer_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTENDTRR');
    //   HIDE_VIEW('CANVAS4');
    // END;
    //#endregion
    async ANFENTER_variable_volver2_whenMouseClick() {
        console.log("Entering ANFENTER_variable_volver2_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTENDTRR");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFENTER_variable_volver2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTDIASXTRR DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTDIASXTRR_CUR IS      
    //     SELECT 1 FROM ANTDIASXTRR     
    //     WHERE DIASTR_CONTRA = :ANTENDTRR_AUX.ENDTRR_CODCTR AND DIASTR_TIPOCT = :ANTENDTRR_AUX.ENDTRR_TIPCTR AND DIASTR_OFICIN = :ANTENDTRR_AUX.ENDTRR_CODOFC AND DIASTR_TERREL = :ANTENDTRR_AUX.ENDTRR_TERREL AND DIASTR_CODTER = :ANTENDTRR_AUX.ENDTRR_CODTER;
    //   --
    //   -- END ANTDIASXTRR DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTDIASXTRR DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTDIASXTRR_CUR;     
    //   FETCH ANTDIASXTRR_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTDIASXTRR_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTDIASXTRR_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTDIASXTRR_CUR;
    //   --
    //   -- END ANTDIASXTRR DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFENTER_antendtrrAux_onCheckDeleteMaster() {
        console.log("Entering ANFENTER_antendtrrAux_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFENTER_antendtrrAux_onCheckDeleteMaster");
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
    //   -- BEGIN ANTDIASXTRR DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTENDTRR_AUX.ENDTRR_CODCTR IS NOT NULL) OR (:ANTENDTRR_AUX.ENDTRR_TIPCTR IS NOT NULL) OR (:ANTENDTRR_AUX.ENDTRR_CODOFC IS NOT NULL) OR (:ANTENDTRR_AUX.ENDTRR_TERREL IS NOT NULL) OR (:ANTENDTRR_AUX.ENDTRR_CODTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTENDTRR_AUX.ANTENDTRR_AUX_ANTDIASXTRR');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTDIASXTRR');   
    //   END IF;
    //   --
    //   -- END ANTDIASXTRR DETAIL PROGRAM SECTION
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
    async ANFENTER_antendtrrAux_onPopulateDetails() {
        console.log("Entering ANFENTER_antendtrrAux_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((((this.ANTENDTRR_AUX.ENDTRR_CODCTR != null) || (this.ANTENDTRR_AUX.ENDTRR_TIPCTR != null)) || (this.ANTENDTRR_AUX.ENDTRR_CODOFC != null)) || (this.ANTENDTRR_AUX.ENDTRR_TERREL != null)) || (this.ANTENDTRR_AUX.ENDTRR_CODTER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTENDTRR_AUX.ANTENDTRR_AUX_ANTDIASXTRR");
            // ANFENTER_QUERY_MASTER_DETAILS(REL_ID, "ANTDIASXTRR");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFENTER_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFENTER_antendtrrAux_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  TOT_DIS NUMBER(18,2);
    // BEGIN
    // BEGIN
    //   SELECT SUM (NVL( ENDXSR_VLREND,0))
    //     INTO TOT_DIS
    //     FROM ANTENDXSRR
    //    WHERE ENDXSR_CODTER=:NITTER
    //      AND ENDXSR_CODPER=:PERCOD;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      TOT_DIS:=0;
    //   
    // END;
    // BEGIN
    //   SELECT SUM (NVL( ENDTRR_VALEND,0))
    //     INTO :TOTAL_ENDE
    //     FROM ANTENDTRR
    //    WHERE ENDTRR_CODTER=:NITTER
    //      AND ENDTRR_CODPER=:PERCOD;
    //       --AND ENDTRR_ESTCOL <> 'GR';
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      :TOTAL_ENDE:=0;
    //   END;
    //   BEGIN
    //   SELECT SUM (NVL( ENDTRR_EXPMAX,0))
    //     INTO :TOTAL_ALMAX_1
    //     FROM ANTENDTRR
    //    WHERE ENDTRR_CODTER=:NITTER
    //      AND ENDTRR_CODPER=:PERCOD
    //      ;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :TOTAL_ALMAX_1:=0;
    //   END;
    //   :TOTAL_SOLE:=NVL(:TOTAL_ALMAX_1,0)-NVL(:TOTAL_ENDE,0);
    //  :TOTAR_EMP:=NVL(:TOTAL_ENDE,0)+NVL(TOT_DIS,0);
    // :TOTAL111:=NVL(:TOTAL_TER,0)+NVL(:TOTAR_EMP,0);
    // 
    // END;
    //#endregion
    async ANFENTER_antendtrrAux_postQuery() {
        console.log("Entering ANFENTER_antendtrrAux_postQuery");
        let TOT_DIS: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfenter_antendtrr_aux/anfenter_antendtrraux_postquery_query1", payload1);
            // get values from result
            TOT_DIS = result1[0].get("TOT_DIS");
        } catch (ex) {

            TOT_DIS = 0;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result2 = await Rest.post("/anfenter_antendtrr_aux/anfenter_antendtrraux_postquery_query2", payload2);
            // get values from result
            this.VARIABLE.TOTAL_ENDE = result2[0].get("TOTAL_ENDE");
        } catch (ex) {

            this.VARIABLE.TOTAL_ENDE = 0;
        }

        let result3 = new Map();
        try {

            // construct payload
            let payload3 = new Map();
            payload3.set("NITTER", this.VARIABLE.NITTER);
            payload3.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result3 = await Rest.post("/anfenter_antendtrr_aux/anfenter_antendtrraux_postquery_query3", payload3);
            // get values from result
            this.VARIABLE.TOTAL_ALMAX_1 = result3[0].get("TOTAL_ALMAX_1");
        } catch (ex) {

            this.VARIABLE.TOTAL_ALMAX_1 = 0;
        }

        // this.ANTENDTRR_AUX.TOTAL_SOLE = TOTAL_ALMAX_1 == null ? 0 : TOTAL_ALMAX_1 - TOTAL_ENDE == null ? 0 : TOTAL_ENDE;
        // this.ANTENDTRR_AUX.TOTAR_EMP = TOTAL_ENDE == null ? 0 : TOTAL_ENDE + TOT_DIS == null ? 0 : TOT_DIS;
        // this.ANTENDTRR_AUX.TOTAL111 = TOTAL_TER == null ? 0 : TOTAL_TER + TOTAR_EMP == null ? 0 : TOTAR_EMP;
        console.log("Exiting ANFENTER_antendtrrAux_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //    GO_BLOCK('ANTDIASXTRR');
    //    EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFENTER_antendtrrAux_diasMora2_whenMouseClick() {
        console.log("Entering ANFENTER_antendtrrAux_diasMora2_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTDIASXTRR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFENTER_antendtrrAux_diasMora2_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  TOT_DISP NUMBER(18,2);
    // BEGIN 
    // BEGIN
    //    SELECT SUM (NVL( ENDTER_VALEND,0))
    //     INTO :TOTAL_ENDT
    //     FROM ANTENDTER
    //    WHERE ENDTER_CODTER=:NITTER
    //      AND ENDTER_CODPER=:PERCOD;
    //      --AND ENDTER_ESTCOL <> 'GR';
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      :TOTAL_ENDT:=0;
    // END;
    // BEGIN
    // BEGIN
    //   SELECT SUM (NVL( ENDXSO_VLREND,0))
    //     INTO TOT_DISP
    //     FROM ANTENDXSOL
    //    WHERE ENDXSO_CODTER=:NITTER
    //      AND ENDXSO_CODPER=:PERCOD;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      TOT_DISP:=0;
    // END;
    //  :TOTAL_SOLI:=NVL(:TOTAL_ALMAX,0)-NVL(:TOTAL_ENDT,0);
    //  :TOTAL_TER:=NVL(:TOTAL_ENDT,0)+NVL(TOT_DISP,0);
    // :TOTAL111:=NVL(:TOTAL_TER,0)+NVL(:TOTAR_EMP,0);
    // END;
    // END;
    //#endregion
    async ANFENTER_antendxsolEc_postQuery() {
        console.log("Entering ANFENTER_antendxsolEc_postQuery");
        let TOT_DISP: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfenter_antendxsol_ec/anfenter_antendxsolec_postquery_query1", payload1);
            // get values from result
            this.VARIABLE.TOTAL_ENDT = result1[0].get("TOTAL_ENDT");
        } catch (ex) {

            this.VARIABLE.TOTAL_ENDT = 0;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result2 = await Rest.post("/anfenter_antendxsol_ec/anfenter_antendxsolec_postquery_query2", payload2);
            // get values from result
            TOT_DISP = result2[0].get("TOT_DISP");
        } catch (ex) {

            TOT_DISP = 0;
        }

        // this.ANTENDXSOL_EC.TOTAL_SOLI = TOTAL_ALMAX == null ? 0 : TOTAL_ALMAX - TOTAL_ENDT == null ? 0 : TOTAL_ENDT;
        // this.ANTENDXSOL_EC.TOTAL_TER = TOTAL_ENDT == null ? 0 : TOTAL_ENDT + TOT_DISP == null ? 0 : TOT_DISP;
        // this.ANTENDXSOL_EC.TOTAL111 = TOTAL_TER == null ? 0 : TOTAL_TER + TOTAR_EMP == null ? 0 : TOTAR_EMP;
        console.log("Exiting ANFENTER_antendxsolEc_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //   TOT_DIS NUMBER(18,2);
    // BEGIN  
    // BEGIN
    //   SELECT SUM (NVL( ENDTRR_VALEND,0))
    //     INTO :TOTAL_ENDE
    //     FROM ANTENDTRR
    //    WHERE ENDTRR_CODTER=:NITTER
    //      AND ENDTRR_CODPER=:PERCOD;
    //       --AND ENDTRR_ESTCOL <> 'GR';
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      :TOTAL_ENDE:=0;
    // END;
    // BEGIN
    // BEGIN
    //   SELECT SUM (NVL( ENDXSR_VLREND,0))
    //     INTO TOT_DIS
    //     FROM ANTENDXSRR
    //    WHERE ENDXSR_CODTER=:NITTER
    //      AND ENDXSR_CODPER=:PERCOD;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      TOT_DIS:=0;
    // END;
    //  :TOTAL_SOLE:=NVL(:TOTAL_ALMAX_1,0)-NVL(:TOTAL_ENDE,0);
    //  :TOTAR_EMP:=NVL(:TOTAL_ENDE,0)+NVL(TOT_DIS,0);
    //  :TOTAL111:=NVL(:TOTAL_TER,0)+NVL(:TOTAR_EMP,0);
    // END;
    // END;
    //#endregion
    async ANFENTER_antendxsrrEc_postQuery() {
        console.log("Entering ANFENTER_antendxsrrEc_postQuery");
        let TOT_DIS: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfenter_antendxsrr_ec/anfenter_antendxsrrec_postquery_query1", payload1);
            // get values from result
            this.VARIABLE.TOTAL_ENDE = result1[0].get("TOTAL_ENDE");
        } catch (ex) {

            this.VARIABLE.TOTAL_ENDE = 0;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result2 = await Rest.post("/anfenter_antendxsrr_ec/anfenter_antendxsrrec_postquery_query2", payload2);
            // get values from result
            TOT_DIS = result2[0].get("TOT_DIS");
        } catch (ex) {

            TOT_DIS = 0;
        }

        // this.ANTENDXSRR_EC.TOTAL_SOLE = TOTAL_ALMAX_1 == null ? 0 : TOTAL_ALMAX_1 - TOTAL_ENDE == null ? 0 : TOTAL_ENDE;
        // this.ANTENDXSRR_EC.TOTAR_EMP = TOTAL_ENDE == null ? 0 : TOTAL_ENDE + TOT_DIS == null ? 0 : TOT_DIS;
        // this.ANTENDXSRR_EC.TOTAL111 = TOTAL_TER == null ? 0 : TOTAL_TER + TOTAR_EMP == null ? 0 : TOTAR_EMP;
        console.log("Exiting ANFENTER_antendxsrrEc_postQuery");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTDIASXTER DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTDIASXTER_CUR IS      
    //     SELECT 1 FROM ANTDIASXTER     
    //     WHERE DIASXT_CONTRA = :ANTENDTER.ENDTER_CODCTR AND DIASXT_TIPOCT = :ANTENDTER.ENDTER_TIPCTR AND DIASXT_OFICIN = :ANTENDTER.ENDTER_CODOFC AND DIASXT_CODTER = :ANTENDTER.ENDTER_CODTER;
    //   --
    //   -- END ANTDIASXTER DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTDIASXTER DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTDIASXTER_CUR;     
    //   FETCH ANTDIASXTER_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTDIASXTER_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTDIASXTER_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTDIASXTER_CUR;
    //   --
    //   -- END ANTDIASXTER DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFENTER_antendter_onCheckDeleteMaster() {
        console.log("Entering ANFENTER_antendter_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFENTER_antendter_onCheckDeleteMaster");
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
    //   -- BEGIN ANTDIASXTER DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTENDTER.ENDTER_CODCTR IS NOT NULL) OR (:ANTENDTER.ENDTER_TIPCTR IS NOT NULL) OR (:ANTENDTER.ENDTER_CODOFC IS NOT NULL) OR (:ANTENDTER.ENDTER_CODTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTENDTER.ANTENDTER_ANTDIASXTER');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTDIASXTER');   
    //   END IF;
    //   --
    //   -- END ANTDIASXTER DETAIL PROGRAM SECTION
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
    async ANFENTER_antendter_onPopulateDetails() {
        console.log("Entering ANFENTER_antendter_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((((this.ANTENDTER.ENDTER_CODCTR != null) || (this.ANTENDTER.ENDTER_TIPCTR != null)) || (this.ANTENDTER.ENDTER_CODOFC != null)) || (this.ANTENDTER.ENDTER_CODTER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTENDTER.ANTENDTER_ANTDIASXTER");
            // ANFENTER_QUERY_MASTER_DETAILS(REL_ID, "ANTDIASXTER");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFENTER_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFENTER_antendter_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  TOT_DISPO NUMBER(18,2);
    // BEGIN 
    // BEGIN
    //   SELECT SUM (NVL( ENDTER_EXPMAX,0))
    //     INTO :TOTAL_ALMAX
    //     FROM ANTENDTER
    //    WHERE ENDTER_CODTER=:NITTER
    //      AND ENDTER_CODPER=:PERCOD
    //     ;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //           :TOTAL_ALMAX:=0;
    // END;
    // 
    // BEGIN
    //   SELECT SUM (NVL( ENDTER_VALEND,0))
    //     INTO :TOTAL_ENDT
    //     FROM ANTENDTER
    //    WHERE ENDTER_CODTER=:NITTER
    //      AND ENDTER_CODPER=:PERCOD;
    //      --AND ENDTER_ESTCOL <> 'GR';
    //     
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      :TOTAL_ENDT:=0;
    //      
    // END;
    // 
    // BEGIN
    //  TOT_DISPO:=0;
    // BEGIN
    //   SELECT SUM (NVL( ENDXSO_VLREND,0))
    //     INTO  TOT_DISPO
    //     FROM ANTENDXSOL
    //    WHERE ENDXSO_CODTER=:NITTER
    //      AND ENDXSO_CODPER=:PERCOD;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      TOT_DISPO:=0;
    //   END;                               
    // :TOTAL_SOLI:=NVL(:TOTAL_ALMAX,0)-NVL(:TOTAL_ENDT,0); 
    // :TOTAL_TER:=NVL(:TOTAL_ENDT,0)+NVL( TOT_DISPO,0);
    // :TOTAL111:=NVL(:TOTAL_TER,0)+NVL(:TOTAR_EMP,0);
    // END;
    // END;
    //#endregion
    async ANFENTER_antendter_postQuery() {
        console.log("Entering ANFENTER_antendter_postQuery");
        let TOT_DISPO: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfenter_antendter/anfenter_antendter_postquery_query1", payload1);
            // get values from result
            this.VARIABLE.TOTAL_ALMAX = result1[0].get("TOTAL_ALMAX");
        } catch (ex) {

            this.VARIABLE.TOTAL_ALMAX = 0;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result2 = await Rest.post("/anfenter_antendter/anfenter_antendter_postquery_query2", payload2);
            // get values from result
            this.VARIABLE.TOTAL_ENDT = result2[0].get("TOTAL_ENDT");
        } catch (ex) {

            this.VARIABLE.TOTAL_ENDT = 0;
        }

        TOT_DISPO = 0;
        let result3 = new Map();
        try {

            // construct payload
            let payload3 = new Map();
            payload3.set("NITTER", this.VARIABLE.NITTER);
            payload3.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result3 = await Rest.post("/anfenter_antendter/anfenter_antendter_postquery_query3", payload3);
            // get values from result
            TOT_DISPO = result3[0].get("TOT_DISPO");
        } catch (ex) {

            TOT_DISPO = 0;
        }

        // this.ANTENDTER.TOTAL_SOLI = TOTAL_ALMAX == null ? 0 : TOTAL_ALMAX - TOTAL_ENDT == null ? 0 : TOTAL_ENDT;
        // this.ANTENDTER.TOTAL_TER = TOTAL_ENDT == null ? 0 : TOTAL_ENDT + TOT_DISPO == null ? 0 : TOT_DISPO;
        // this.ANTENDTER.TOTAL111 = TOTAL_TER == null ? 0 : TOTAL_TER + TOTAR_EMP == null ? 0 : TOTAR_EMP;
        console.log("Exiting ANFENTER_antendter_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //    GO_BLOCK('ANTDIASXTER');
    //    EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFENTER_antendter_diasMora1_whenMouseClick() {
        console.log("Entering ANFENTER_antendter_diasMora1_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTDIASXTER");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFENTER_antendter_diasMora1_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFENTER_toolbar_whenButtonPressed() {
        console.log("Entering ANFENTER_toolbar_whenButtonPressed");
        // ANFENTER_TOOLBAR_ACTIONS();
        console.log("Exiting ANFENTER_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFENTER_toolbar_whenMouseLeave() {
        console.log("Entering ANFENTER_toolbar_whenMouseLeave");
        // ANFENTER_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFENTER_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFENTER_toolbar_whenNewFormInstance() {
        console.log("Entering ANFENTER_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFENTER_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  TOT_DISPO NUMBER(18,2);
    // BEGIN 
    // BEGIN
    //   SELECT SUM (NVL( ENDTER_VALEND,0))
    //     INTO :TOTAL_ENDT
    //     FROM ANTENDTER
    //    WHERE ENDTER_CODTER=:NITTER
    //      AND ENDTER_CODPER=:PERCOD;
    //      --AND ENDTER_ESTCOL <> 'GR';
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      :TOTAL_ENDT:=0;
    // END;
    // BEGIN
    // BEGIN
    //   SELECT SUM (NVL( ENDXSO_VLREND,0))
    //     INTO TOT_DISPO
    //     FROM ANTENDXSOL
    //    WHERE ENDXSO_CODTER=:NITTER
    //      AND ENDXSO_CODPER=:PERCOD;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      TOT_DISPO:=0;
    // END;
    //  :TOTAL_SOLI:=NVL(:TOTAL_ALMAX,0)-NVL(:TOTAL_ENDT,0);
    //  :TOTAL_TER:=NVL(:TOTAL_ENDT,0)+NVL(TOT_DISPO,0);
    // :TOTAL111:=NVL(:TOTAL_TER,0)+NVL(:TOTAR_EMP,0);
    // END;
    // END;
    //#endregion
    async ANFENTER_antendxsol_postQuery() {
        console.log("Entering ANFENTER_antendxsol_postQuery");
        let TOT_DISPO: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfenter_antendxsol/anfenter_antendxsol_postquery_query1", payload1);
            // get values from result
            this.VARIABLE.TOTAL_ENDT = result1[0].get("TOTAL_ENDT");
        } catch (ex) {

            this.VARIABLE.TOTAL_ENDT = 0;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result2 = await Rest.post("/anfenter_antendxsol/anfenter_antendxsol_postquery_query2", payload2);
            // get values from result
            TOT_DISPO = result2[0].get("TOT_DISPO");
        } catch (ex) {

            TOT_DISPO = 0;
        }

        // this.ANTENDXSOL.TOTAL_SOLI = TOTAL_ALMAX == null ? 0 : TOTAL_ALMAX - TOTAL_ENDT == null ? 0 : TOTAL_ENDT;
        // this.ANTENDXSOL.TOTAL_TER = TOTAL_ENDT == null ? 0 : TOTAL_ENDT + TOT_DISPO == null ? 0 : TOT_DISPO;
        // this.ANTENDXSOL.TOTAL111 = TOTAL_TER == null ? 0 : TOTAL_TER + TOTAR_EMP == null ? 0 : TOTAR_EMP;
        console.log("Exiting ANFENTER_antendxsol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  TOT_DIS NUMBER(18,2);
    // BEGIN 
    // BEGIN
    //   SELECT SUM (NVL( ENDTRR_VALEND,0))
    //     INTO :TOTAL_ENDE
    //     FROM ANTENDTRR
    //    WHERE ENDTRR_CODTER=:NITTER
    //      AND ENDTRR_CODPER=:PERCOD;
    //       --AND ENDTRR_ESTCOL <> 'GR';
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      :TOTAL_ENDE:=0;
    // END;
    // BEGIN
    // BEGIN
    //   SELECT SUM (NVL( ENDXSR_VLREND,0))
    //     INTO TOT_DIS
    //     FROM ANTENDXSRR
    //    WHERE ENDXSR_CODTER=:NITTER
    //      AND ENDXSR_CODPER=:PERCOD;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      TOT_DIS:=0;
    // END;
    //  :TOTAL_SOLE:=NVL(:TOTAL_ALMAX_1,0)-NVL(:TOTAL_ENDE,0);
    //  :TOTAR_EMP:=NVL(:TOTAL_ENDE,0)+NVL(TOT_DIS,0);
    //  :TOTAL111:=NVL(:TOTAL_TER,0)+NVL(:TOTAR_EMP,0);
    // END;
    // END;
    //#endregion
    async ANFENTER_antendxsrr_postQuery() {
        console.log("Entering ANFENTER_antendxsrr_postQuery");
        let TOT_DIS: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result1 = await Rest.post("/anfenter_antendxsrr/anfenter_antendxsrr_postquery_query1", payload1);
            // get values from result
            this.VARIABLE.TOTAL_ENDE = result1[0].get("TOTAL_ENDE");
        } catch (ex) {

            this.VARIABLE.TOTAL_ENDE = 0;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD", this.VARIABLE.PERCOD);
            // call REST API
            const result2 = await Rest.post("/anfenter_antendxsrr/anfenter_antendxsrr_postquery_query2", payload2);
            // get values from result
            TOT_DIS = result2[0].get("TOT_DIS");
        } catch (ex) {

            TOT_DIS = 0;
        }

        // this.ANTENDXSRR.TOTAL_SOLE = TOTAL_ALMAX_1 == null ? 0 : TOTAL_ALMAX_1 - TOTAL_ENDE == null ? 0 : TOTAL_ENDE;
        // this.ANTENDXSRR.TOTAR_EMP = TOTAL_ENDE == null ? 0 : TOTAL_ENDE + TOT_DIS == null ? 0 : TOT_DIS;
        // this.ANTENDXSRR.TOTAL111 = TOTAL_TER == null ? 0 : TOTAL_TER + TOTAR_EMP == null ? 0 : TOTAR_EMP;
        console.log("Exiting ANFENTER_antendxsrr_postQuery");
    }

}

