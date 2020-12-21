import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFORIDET business logic
import {
    TDPRMAN01,
    TOOLBAR,
    SETORIDET,
    BASE
} from "./SEFORIDET_models";



// class SEFORIDET
@Component({
    selector: 'app-seforidet',
    templateUrl: './seforidet.component.html',
})
export class SeforidetComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDPRMAN01: TDPRMAN01 = new TDPRMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public SETORIDET: SETORIDET = new SETORIDET();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async SEFORIDET_keyPrevItem() {
        console.log("Entering SEFORIDET_keyPrevItem");
        // SEFORIDET_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting SEFORIDET_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFORIDET_keyDelrec() {
        console.log("Entering SEFORIDET_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFORIDET_keyDelrec");
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
    async SEFORIDET_onClearDetails() {
        console.log("Entering SEFORIDET_onClearDetails");
        // SEFORIDET_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting SEFORIDET_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_onError() {
        console.log("Entering SEFORIDET_onError");
        console.log("Exiting SEFORIDET_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async SEFORIDET_keyCrerec() {
        console.log("Entering SEFORIDET_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting SEFORIDET_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async SEFORIDET_keyEnter() {
        console.log("Entering SEFORIDET_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting SEFORIDET_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORIDET_keyNextItem() {
        console.log("Entering SEFORIDET_keyNextItem");
        // SEFORIDET_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFORIDET_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_keyDown() {
        console.log("Entering SEFORIDET_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting SEFORIDET_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFORIDET_keyEntqry() {
        console.log("Entering SEFORIDET_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFORIDET_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_whenMouseDoubleclick() {
        console.log("Entering SEFORIDET_whenMouseDoubleclick");
        console.log("Exiting SEFORIDET_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_onMessage() {
        console.log("Entering SEFORIDET_onMessage");
        console.log("Exiting SEFORIDET_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_preForm() {
        console.log("Entering SEFORIDET_preForm");
        console.log("Exiting SEFORIDET_preForm");
    }

    //#region PLSQL
    // BEGIN  
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   EXECUTE_QUERY;
    // END;
    // 
    // ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // 
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
    // --------------------------------------------------------------------
    //#endregion
    async SEFORIDET_whenNewFormInstance() {
        console.log("Entering SEFORIDET_whenNewFormInstance");
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
        this.oracleFormsBuiltins.execute_query();
        let V_IMAGEN: string = null;
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
            // call REST API
            const result1 = await Rest.post("/seforidet/seforidet_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFORIDET_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_keyUp() {
        console.log("Entering SEFORIDET_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting SEFORIDET_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFORIDET_keyExeqry() {
        console.log("Entering SEFORIDET_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFORIDET_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async SEFORIDET_keyListval() {
        console.log("Entering SEFORIDET_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting SEFORIDET_keyListval");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN SETORIDET DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETORIDET_CUR IS      
    //     SELECT 1 FROM OPS$SEGUI.SETORIDET S     
    //     WHERE S.ORDET_CODORIG = :TDPRMAN01.TDPRCOD;
    //   --
    //   -- END SETORIDET DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN SETORIDET DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETORIDET_CUR;     
    //   FETCH SETORIDET_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETORIDET_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETORIDET_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETORIDET_CUR;
    //   --
    //   -- END SETORIDET DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async SEFORIDET_tdprman01_onCheckDeleteMaster() {
        console.log("Entering SEFORIDET_tdprman01_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFORIDET_tdprman01_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN
    //   :TDPRMAN01.TDPRCOD:='';
    //   :TDPRMAN01.TDPRDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORIDET_tdprman01_whenCreateRecord() {
        console.log("Entering SEFORIDET_tdprman01_whenCreateRecord");
        this.TDPRMAN01.TDPRCOD = "";
        this.TDPRMAN01.TDPRDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFORIDET_tdprman01_whenCreateRecord");
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
    //   -- BEGIN SETORIDET DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TDPRMAN01.TDPRCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TDPRMAN01.TDPRMAN01_SETORIDET');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETORIDET');   
    //   END IF;
    //   --
    //   -- END SETORIDET DETAIL PROGRAM SECTION
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
    async SEFORIDET_tdprman01_onPopulateDetails() {
        console.log("Entering SEFORIDET_tdprman01_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.TDPRMAN01.TDPRCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TDPRMAN01.TDPRMAN01_SETORIDET");
            // SEFORIDET_QUERY_MASTER_DETAILS(REL_ID, "SETORIDET");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // SEFORIDET_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting SEFORIDET_tdprman01_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDPRMAN01.TDPRCOD IS NULL THEN
    //     :TDPRMAN01.TDPRCOD:='';
    //   END IF;
    //   IF :TDPRMAN01.TDPRDES IS NULL THEN
    //     :TDPRMAN01.TDPRDES:='';
    //   END IF;
    //   --:GLOBAL.RECORD_STATUS:='QUERY';
    //   --:GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORIDET_tdprman01_postQuery() {
        console.log("Entering SEFORIDET_tdprman01_postQuery");
        if ((this.TDPRMAN01.TDPRCOD == null)) {
            this.TDPRMAN01.TDPRCOD = "";
        }
        if ((this.TDPRMAN01.TDPRDES == null)) {
            this.TDPRMAN01.TDPRDES = "";
        }
        console.log("Exiting SEFORIDET_tdprman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPRMAN01.TDPRDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPRMAN01.TDPRDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_tdprman01_tdprdes_whenValidateItem() {
        console.log("Entering SEFORIDET_tdprman01_tdprdes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPRMAN01.TDPRDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRDES) == null ? 0 : PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting SEFORIDET_tdprman01_tdprdes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPRMAN01.TDPRCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPRMAN01.TDPRCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_tdprman01_tdprcod_whenValidateItem() {
        console.log("Entering SEFORIDET_tdprman01_tdprcod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPRMAN01.TDPRCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting SEFORIDET_tdprman01_tdprcod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDPREST NOT IN ('B','A') THEN
    //    LIB$DTNERFRMA('SOLO SE PERMITE B[BLOQUEADO] O A[ACTIVO].RECTIFIQUE.');
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_tdprman01_tdprest_whenValidateItem() {
        console.log("Entering SEFORIDET_tdprman01_tdprest_whenValidateItem");
        if (["B", "A"].indexOf(this.TDPRMAN01.TDPREST) != -1) {
            // SEFORIDET_LIB$DTNERFRMA("SOLO SE PERMITE B[BLOQUEADO] O A[ACTIVO].RECTIFIQUE.");
        }
        console.log("Exiting SEFORIDET_tdprman01_tdprest_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_toolbar_whenButtonPressed() {
        console.log("Entering SEFORIDET_toolbar_whenButtonPressed");
        console.log("Exiting SEFORIDET_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_toolbar_whenMouseLeave() {
        console.log("Entering SEFORIDET_toolbar_whenMouseLeave");
        console.log("Exiting SEFORIDET_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_toolbar_whenNewFormInstance() {
        console.log("Entering SEFORIDET_toolbar_whenNewFormInstance");
        console.log("Exiting SEFORIDET_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFORIDET_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFORIDET_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORIDET_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFORIDET_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFORIDET_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_NEXCOD NUMBER;
    //  VBOTON  NUMBER;
    // BEGIN 
    //  IF :ORDET_CODOPC IS NULL THEN
    //  --BUSCAR EL PROXIMO CODIGO DE LAS OPCIONES DISPONIBLES POR TIPO DE PROCEDENCIA
    //     BEGIN
    //       SELECT NVL(MAX(NVL(ORDET_CODOPC,0)),0)+1
    //        INTO   V_NEXCOD
    //       FROM OPS$SEGUI.SETORIDET
    //    WHERE ORDET_CODORIG   =  :TDPRCOD;
    //      EXCEPTION
    //      WHEN OTHERS THEN
    //       MESSAGE('FALLA AL ASIGNAR EL CÓDIGO DE LA OPCIÓN POR TIPO DE PROCEDENCIA - ORIGEN.');
    //      END;
    //       --ASIGNA EL CÓDIGO
    //        :ORDET_CODOPC  := V_NEXCOD;
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_setoridet_preInsert() {
        console.log("Entering SEFORIDET_setoridet_preInsert");
        let V_NEXCOD: number = null;
        let VBOTON: number = null;
        if ((this.SETORIDET.ORDET_CODOPC == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("TDPRCOD", this.TDPRMAN01.TDPRCOD);
                // call REST API
                const result1 = await Rest.post("/seforidet_setoridet/seforidet_setoridet_preinsert_query1", payload1);
                // get values from result
                V_NEXCOD = result1[0].get("V_NEXCOD");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CÓDIGO DE LA OPCIÓN POR TIPO DE PROCEDENCIA - ORIGEN.");
            }

            this.SETORIDET.ORDET_CODOPC = V_NEXCOD.toString();
        }
        console.log("Exiting SEFORIDET_setoridet_preInsert");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDPREST NOT IN ('B','A') THEN
    //    LIB$DTNERFRMA('SOLO SE PERMITE B[BLOQUEADO] O A[ACTIVO].RECTIFIQUE.');
    //   END IF;
    // END;
    //#endregion
    async SEFORIDET_setoridet_ordetEstreg_whenValidateItem() {
        console.log("Entering SEFORIDET_setoridet_ordetEstreg_whenValidateItem");
        if (["B", "A"].indexOf(this.TDPRMAN01.TDPREST) != -1) {
            // SEFORIDET_LIB$DTNERFRMA("SOLO SE PERMITE B[BLOQUEADO] O A[ACTIVO].RECTIFIQUE.");
        }
        console.log("Exiting SEFORIDET_setoridet_ordetEstreg_whenValidateItem");
    }

}

