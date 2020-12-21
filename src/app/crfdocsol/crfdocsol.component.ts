import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFDOCSOL business logic
import {
    CRTDOCSOL,
    TOOLBAR,
    CRTTIOPER,
    BASE
} from "./CRFDOCSOL_models";



// class CRFDOCSOL
@Component({
    selector: 'app-crfdocsol',
    templateUrl: './crfdocsol.component.html',
})
export class CrfdocsolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTDOCSOL: CRTDOCSOL = new CRTDOCSOL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTTIOPER: CRTTIOPER = new CRTTIOPER();
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
    async CRFDOCSOL_onClearDetails() {
        console.log("Entering CRFDOCSOL_onClearDetails");
        // CRFDOCSOL_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFDOCSOL_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCSOL_whenMouseDoubleclick() {
        console.log("Entering CRFDOCSOL_whenMouseDoubleclick");
        console.log("Exiting CRFDOCSOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCSOL_preForm() {
        console.log("Entering CRFDOCSOL_preForm");
        console.log("Exiting CRFDOCSOL_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFDOCSOL_whenNewFormInstance() {
        console.log("Entering CRFDOCSOL_whenNewFormInstance");
        // CRFDOCSOL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFDOCSOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT TIOPER_DESOPER
    //   INTO :TIPOPE
    //  FROM CRTTIOPER
    //  WHERE TIOPER_CODOPER=:DOCSOL_CODTOP
    //   AND TIOPER_CODUNI = :DOCSOL_CODUNI --ARQUITECTURA
    //  ;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFDOCSOL_crtdocsol_postQuery() {
        console.log("Entering CRFDOCSOL_crtdocsol_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("DOCSOL_CODTOP", DOCSOL_CODTOP);
        // payload1.set("DOCSOL_CODUNI", DOCSOL_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfdocsol_crtdocsol/crfdocsol_crtdocsol_postquery_query1", payload1);
        // get values from result
        // TIPOPE = result1[0].get("TIPOPE");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFDOCSOL_crtdocsol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA    NUMBER;
    // 
    // BEGIN
    //   IF :CRTDOCSOL.DOCSOL_TIPODC NOT IN ('D','A','L','I') THEN
    //     LIB$ALERTA('MENSAJE','TIPO NO PERMITIDO',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFDOCSOL_crtdocsol_docsolTiplinea_whenValidateItem() {
        console.log("Entering CRFDOCSOL_crtdocsol_docsolTiplinea_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["D", "A", "L", "I"].indexOf(this.CRTDOCSOL.DOCSOL_TIPODC) != -1) {
            // CRFDOCSOL_LIB$ALERTA("MENSAJE", "TIPO NO PERMITIDO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCSOL_crtdocsol_docsolTiplinea_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA    NUMBER;
    // 
    // BEGIN
    //   IF :CRTDOCSOL.DOCSOL_TIPODC NOT IN ('D','A','L','I') THEN
    //     LIB$ALERTA('MENSAJE','TIPO NO PERMITIDO',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFDOCSOL_crtdocsol_docsolTipodc_whenValidateItem() {
        console.log("Entering CRFDOCSOL_crtdocsol_docsolTipodc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["D", "A", "L", "I"].indexOf(this.CRTDOCSOL.DOCSOL_TIPODC) != -1) {
            // CRFDOCSOL_LIB$ALERTA("MENSAJE", "TIPO NO PERMITIDO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCSOL_crtdocsol_docsolTipodc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA    NUMBER;
    // 
    // BEGIN
    //   IF :CRTDOCSOL.DOCSOL_TIPODC NOT IN ('D','A','L','I') THEN
    //     LIB$ALERTA('MENSAJE','TIPO NO PERMITIDO',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFDOCSOL_crtdocsol_docsolImport_whenValidateItem() {
        console.log("Entering CRFDOCSOL_crtdocsol_docsolImport_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["D", "A", "L", "I"].indexOf(this.CRTDOCSOL.DOCSOL_TIPODC) != -1) {
            // CRFDOCSOL_LIB$ALERTA("MENSAJE", "TIPO NO PERMITIDO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCSOL_crtdocsol_docsolImport_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF   :CRTDOCSOL.DOCSOL_FIJOS = 'F' THEN
    //       :CRTDOCSOL.DOCSOL_FIJOS := 'F';
    //   ELSE
    //      -- :CRTDOCSOL.DOCSOL_FIJOS = 'A' THEN
    //       :CRTDOCSOL.DOCSOL_FIJOS:= 'A';
    //   END IF;
    // END;
    // 
    // /*BEGIN
    //  IF CHECKBOX_CHECKED('CRTDOCSOL.DOCSOL_FIJOS') THEN
    //   SET_ITEM_PROPERTY('CRTDOCSOL.DOCSOL_ADICIO', CASE_RESTRICTION, NONE);
    // 
    //  END IF;
    // 
    //      IF CHECKBOX_CHECKED(:CRTDOCSOL.DOCSOL_FIJOS) THEN
    //                 :CRTDOCSOL.DOCSOL_ADICIO := 'N';
    //     END IF;
    //  
    // END;*/
    // 
    // --================================================================================
    // /*IF  CHECKBOX_CHECKED('CRTDOCSOL.DOCSOL_FIJOS') THEN
    //     :CRTDOCSOL.DOCSOL_ADICIO := NULL;
    // 
    //       
    // END IF; */
    //#endregion
    async CRFDOCSOL_crtdocsol_docsolFijos_whenRadioChanged() {
        console.log("Entering CRFDOCSOL_crtdocsol_docsolFijos_whenRadioChanged");
        if (this.CRTDOCSOL.DOCSOL_FIJOS == "F") {
            this.CRTDOCSOL.DOCSOL_FIJOS = "F";
        }
        else {
            this.CRTDOCSOL.DOCSOL_FIJOS = "A";
        }
        console.log("Exiting CRFDOCSOL_crtdocsol_docsolFijos_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCSOL_toolbar_whenButtonPressed() {
        console.log("Entering CRFDOCSOL_toolbar_whenButtonPressed");
        console.log("Exiting CRFDOCSOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCSOL_toolbar_whenMouseLeave() {
        console.log("Entering CRFDOCSOL_toolbar_whenMouseLeave");
        console.log("Exiting CRFDOCSOL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCSOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFDOCSOL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFDOCSOL_toolbar_whenNewFormInstance");
    }

    async CRFDOCSOL_crttioper_keyDelrec() {
        // null;
    }

    async CRFDOCSOL_crttioper_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTDOCSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTDOCSOL_CUR IS      
    //     SELECT 1 FROM CRTDOCSOL C     
    //     WHERE C.DOCSOL_CODTOP = :CRTTIOPER.TIOPER_CODOPER AND C.DOCSOL_CODUNI = :CRTTIOPER.TIOPER_CODUNI;
    //   --
    //   -- END CRTDOCSOL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTDOCSOL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTDOCSOL_CUR;     
    //   FETCH CRTDOCSOL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTDOCSOL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTDOCSOL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTDOCSOL_CUR;
    //   --
    //   -- END CRTDOCSOL DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFDOCSOL_crttioper_onCheckDeleteMaster() {
        console.log("Entering CRFDOCSOL_crttioper_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCSOL_crttioper_onCheckDeleteMaster");
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
    //   -- BEGIN CRTDOCSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTTIOPER.TIOPER_CODOPER IS NOT NULL) OR (:CRTTIOPER.TIOPER_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTTIOPER.CRTTIOPER_CRTDOCSOL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTDOCSOL');   
    //   END IF;
    //   --
    //   -- END CRTDOCSOL DETAIL PROGRAM SECTION
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
    async CRFDOCSOL_crttioper_onPopulateDetails() {
        console.log("Entering CRFDOCSOL_crttioper_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CRTTIOPER.TIOPER_CODOPER != null) || (this.CRTTIOPER.TIOPER_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTTIOPER.CRTTIOPER_CRTDOCSOL");
            // CRFDOCSOL_QUERY_MASTER_DETAILS(REL_ID, "CRTDOCSOL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFDOCSOL_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFDOCSOL_crttioper_onPopulateDetails");
    }

    async CRFDOCSOL_crttioper_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFDOCSOL_crttioper_keyDown() {
        console.log("Entering CRFDOCSOL_crttioper_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFDOCSOL_crttioper_keyDown");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTDOCSOL');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFDOCSOL_crttioper_tioperImport_keyNextItem() {
        console.log("Entering CRFDOCSOL_crttioper_tioperImport_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTDOCSOL");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFDOCSOL_crttioper_tioperImport_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCSOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFDOCSOL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFDOCSOL_base_fecha_whenNewItemInstance");
    }

}

