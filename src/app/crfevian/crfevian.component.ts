import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFEVIAN business logic
import {
    CRTCTOXSOL,
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./CRFEVIAN_models";



// class CRFEVIAN
@Component({
    selector: 'app-crfevian',
    templateUrl: './crfevian.component.html',
})
export class CrfevianComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTCTOXSOL: CRTCTOXSOL = new CRTCTOXSOL();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    async CRFEVIAN_keyEntqry() {
        // null;
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_whenMouseDoubleclick() {
        console.log("Entering CRFEVIAN_whenMouseDoubleclick");
        console.log("Exiting CRFEVIAN_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_preForm() {
        console.log("Entering CRFEVIAN_preForm");
        console.log("Exiting CRFEVIAN_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_whenNewFormInstance() {
        console.log("Entering CRFEVIAN_whenNewFormInstance");
        console.log("Exiting CRFEVIAN_whenNewFormInstance");
    }

    async CRFEVIAN_keyExeqry() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFEVIAN_keyDown() {
        console.log("Entering CRFEVIAN_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFEVIAN_keyDown");
    }

    async CRFEVIAN_crtctoxsol_keyEntqry() {
        // null;
    }

    async CRFEVIAN_crtctoxsol_keyDelrec() {
        // null;
    }

    async CRFEVIAN_crtctoxsol_keyNxtblk() {
        // null;
    }

    async CRFEVIAN_crtctoxsol_keyCrerec() {
        // null;
    }

    async CRFEVIAN_crtctoxsol_keyExeqry() {
        // null;
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // HIDE_VIEW('CANVAS_CTO'); END;
    //#endregion
    async CRFEVIAN_crtctoxsol_keyExit() {
        console.log("Entering CRFEVIAN_crtctoxsol_keyExit");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.hide_view("CANVAS_CTO");
        console.log("Exiting CRFEVIAN_crtctoxsol_keyExit");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // HIDE_VIEW('CANVAS_CTO'); END;
    //#endregion
    async CRFEVIAN_crtctoxsol_keyPrvblk() {
        console.log("Entering CRFEVIAN_crtctoxsol_keyPrvblk");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.hide_view("CANVAS_CTO");
        console.log("Exiting CRFEVIAN_crtctoxsol_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT COLESTC
    //  INTO :COLESTC
    //  FROM COL
    //  WHERE COLCOD  = :CTOXSO_CODCOL
    //  AND COLOFI  = :CTOXSO_OFCCOL
    //  AND COLTDOC = :CTOXSO_TIPCOL;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async CRFEVIAN_crtctoxsol_postQuery() {
        console.log("Entering CRFEVIAN_crtctoxsol_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("CTOXSO_CODCOL", CTOXSO_CODCOL);
        // payload1.set("CTOXSO_OFCCOL", CTOXSO_OFCCOL);
        // payload1.set("CTOXSO_TIPCOL", CTOXSO_TIPCOL);
        // call REST API
        const result1 = await Rest.post("/crfevian_crtctoxsol/crfevian_crtctoxsol_postquery_query1", payload1);
        // get values from result
        // COLESTC = result1[0].get("COLESTC");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFEVIAN_crtctoxsol_postQuery");
    }

    //#region PLSQL
    // BEGIN --PY 13351
    // IF :CRTCTOXSOL.CTOXSO_EXPORE IS NULL THEN
    //   :CRTCTOXSOL.CTOXSO_EXPORE := 'N';
    // END IF;
    // --PY 13351; END;
    //#endregion
    async CRFEVIAN_crtctoxsol_preInsert() {
        console.log("Entering CRFEVIAN_crtctoxsol_preInsert");
        if ((this.CRTCTOXSOL.CTOXSO_EXPORE == null)) {
            this.CRTCTOXSOL.CTOXSO_EXPORE = "N";
        }
        console.log("Exiting CRFEVIAN_crtctoxsol_preInsert");
    }

    //#region PLSQL
    // BEGIN ENTER_QUERY; END;
    //#endregion
    async CRFEVIAN_crtsolicr_keyEntqry() {
        console.log("Entering CRFEVIAN_crtsolicr_keyEntqry");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFEVIAN_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA ('MENSAJE','BLOQUE UNICAMENTE DE CONSULTA ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFEVIAN_crtsolicr_keyDelrec() {
        console.log("Entering CRFEVIAN_crtsolicr_keyDelrec");
        let T_RESPUESTA: number = null;
        // CRFEVIAN_LIB$ALERTA("MENSAJE", "BLOQUE UNICAMENTE DE CONSULTA ...", null, null, null, T_RESPUESTA);
        console.log("Exiting CRFEVIAN_crtsolicr_keyDelrec");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTCTOXSOL');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFEVIAN_crtsolicr_keyNxtblk() {
        console.log("Entering CRFEVIAN_crtsolicr_keyNxtblk");
        this.oracleFormsBuiltins.go_block("CRTCTOXSOL");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFEVIAN_crtsolicr_keyNxtblk");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA ('MENSAJE','BLOQUE UNICAMENTE DE CONSULTA ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFEVIAN_crtsolicr_keyCrerec() {
        console.log("Entering CRFEVIAN_crtsolicr_keyCrerec");
        let T_RESPUESTA: number = null;
        // CRFEVIAN_LIB$ALERTA("MENSAJE", "BLOQUE UNICAMENTE DE CONSULTA ...", null, null, null, T_RESPUESTA);
        console.log("Exiting CRFEVIAN_crtsolicr_keyCrerec");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTCTOXSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTCTOXSOL_CUR IS      
    //     SELECT 1 FROM CRTCTOXSOL     
    //     WHERE CTOXSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND CTOXSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL;
    //   --
    //   -- END CRTCTOXSOL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTCTOXSOL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTCTOXSOL_CUR;     
    //   FETCH CRTCTOXSOL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTCTOXSOL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTCTOXSOL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTCTOXSOL_CUR;
    //   --
    //   -- END CRTCTOXSOL DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFEVIAN_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFEVIAN_crtsolicr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFEVIAN_crtsolicr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFEVIAN_crtsolicr_keyExeqry() {
        console.log("Entering CRFEVIAN_crtsolicr_keyExeqry");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFEVIAN_crtsolicr_keyExeqry");
    }

    //#region PLSQL
    // BEGIN :SOLICR_USER   := PLSQLBuiltins.user();
    // :SOLICR_CODUNI := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA; END;
    //#endregion
    async CRFEVIAN_crtsolicr_whenCreateRecord() {
        console.log("Entering CRFEVIAN_crtsolicr_whenCreateRecord");
        this.CRTSOLICR.SOLICR_USER = PLSQLBuiltins.user();
        this.CRTSOLICR.SOLICR_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        console.log("Exiting CRFEVIAN_crtsolicr_whenCreateRecord");
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
    //   -- BEGIN CRTCTOXSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTCTOXSOL');   
    //     
    //   END IF;
    //   --
    //   -- END CRTCTOXSOL DETAIL PROGRAM SECTION
    //   --
    // 
    //   IF ( :SYSTEM.CURSOR_ITEM <> STARTITM ) THEN     
    //      GO_ITEM(STARTITM);     
    //      
    //   END IF;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFEVIAN_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFEVIAN_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            //return ret;
        }
        if (((this.CRTSOLICR.SOLICR_CODSOL != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTCTOXSOL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
        }
        console.log("Exiting CRFEVIAN_crtsolicr_onPopulateDetails");
    }

    async CRFEVIAN_crtsolicr_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :TEXT_ITEM39
    //      FROM TER
    //    WHERE TERCOD=:SOLICR_NITTER;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //   :SOLICR_USER:=USER;
    //  BEGIN
    //    SELECT OFIDES
    //      INTO :TEXT_ITEM41
    //      FROM OFI
    //      WHERE OFICOD=:SOLICR_OFCSOL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    // 
    // END;
    //#endregion
    async CRFEVIAN_crtsolicr_postQuery() {
        console.log("Entering CRFEVIAN_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_NITTER", SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfevian_crtsolicr/crfevian_crtsolicr_postquery_query1", payload1);
        // get values from result
        // TEXT_ITEM39 = result1[0].get("TEXT_ITEM39");
        if (result1 == null || result1.length == 0) {

        }

        this.CRTSOLICR.SOLICR_USER = PLSQLBuiltins.user();
        // construct payload
        let payload2 = new Map();
        // payload2.set("SOLICR_OFCSOL", SOLICR_OFCSOL);
        // call REST API
        const result2 = await Rest.post("/crfevian_crtsolicr/crfevian_crtsolicr_postquery_query2", payload2);
        // get values from result
        // TEXT_ITEM41 = result2[0].get("TEXT_ITEM41");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFEVIAN_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD APROBADA ') = 1 THEN
    //     PU_VALIDE_AN (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL);
    //     :CRTSOLICR.SOLICR_ESTSOL := 'AN';
    //     COMMIT_FORM;
    //     LIB$ALERTA('MENSAJE','SOLICITUD ANULADA.....',NULL,NULL,NULL,T_RESPUESTA);
    //     GO_BLOCK('CRTSOLICR');
    // END IF;
    // END;
    //#endregion
    async CRFEVIAN_crtsolicr_anular_whenMouseClick() {
        console.log("Entering CRFEVIAN_crtsolicr_anular_whenMouseClick");
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD APROBADA ") == 1) {
        //     CRFEVIAN_PU_VALIDE_AN(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL);
        //     this.CRTSOLICR.SOLICR_ESTSOL = "AN";
        //     this.oracleFormsBuiltins.commit_form();
        //     CRFEVIAN_LIB$ALERTA("MENSAJE", "SOLICITUD ANULADA.....", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
        // }
        console.log("Exiting CRFEVIAN_crtsolicr_anular_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // 
    // IF  FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA PONER VIGENTE LA SOLICITUD') = 1 THEN
    //     IF :SOLICR_ESTSOL = 'SV' THEN
    //      :CRTSOLICR.SOLICR_ESTSOL := 'AC';
    //      LIB$ALERTA('MENSAJE','SOLICITUD EN AC, LISTA PARA ASOCIAR CONTRATO(S)  ..',NULL,NULL,NULL,T_RESPUESTA);
    //     ELSE PU_VALIDE_ACT (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL);
    //     :CRTSOLICR.SOLICR_ESTSOL := 'VI';
    //     LIB$ALERTA('MENSAJE','SOLICITUD VIGENTE ..',NULL,NULL,NULL,T_RESPUESTA);
    //     END IF;
    //     COMMIT_FORM;
    //     GO_BLOCK('CRTSOLICR');
    // END IF;
    // END;
    //#endregion
    async CRFEVIAN_crtsolicr_vigente_whenMouseClick() {
        console.log("Entering CRFEVIAN_crtsolicr_vigente_whenMouseClick");
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA PONER VIGENTE LA SOLICITUD") == 1) {
        //     if (SOLICR_ESTSOL == "SV") {
        //         this.CRTSOLICR.SOLICR_ESTSOL = "AC";
        //         CRFEVIAN_LIB$ALERTA("MENSAJE", "SOLICITUD EN AC, LISTA PARA ASOCIAR CONTRATO(S)  ..", null, null, null, T_RESPUESTA);
        //     }
        //     else {
        //         CRFEVIAN_PU_VALIDE_ACT(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL);
        //         this.CRTSOLICR.SOLICR_ESTSOL = "VI";
        //         CRFEVIAN_LIB$ALERTA("MENSAJE", "SOLICITUD VIGENTE ..", null, null, null, T_RESPUESTA);
        //     }
        //     this.oracleFormsBuiltins.commit_form();
        //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
        // }
        console.log("Exiting CRFEVIAN_crtsolicr_vigente_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_toolbar_whenButtonPressed() {
        console.log("Entering CRFEVIAN_toolbar_whenButtonPressed");
        console.log("Exiting CRFEVIAN_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_toolbar_whenMouseLeave() {
        console.log("Entering CRFEVIAN_toolbar_whenMouseLeave");
        console.log("Exiting CRFEVIAN_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_toolbar_whenNewFormInstance() {
        console.log("Entering CRFEVIAN_toolbar_whenNewFormInstance");
        console.log("Exiting CRFEVIAN_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFEVIAN_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFEVIAN_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFEVIAN_base_fecha_whenNewItemInstance");
    }

}

