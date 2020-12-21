import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFDOCVE business logic
import {
    CRTHISTDOC_FUT,
    CRTHISTDOC,
    CRTHISTDOC_HOY,
    CRTHISTDOC_VEN,
    TOOLBAR,
    BASE
} from "./CRFDOCVE_models";



// class CRFDOCVE
@Component({
    selector: 'app-crfdocve',
    templateUrl: './crfdocve.component.html',
})
export class CrfdocveComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTHISTDOC_FUT: CRTHISTDOC_FUT = new CRTHISTDOC_FUT();
    public CRTHISTDOC: CRTHISTDOC = new CRTHISTDOC();
    public CRTHISTDOC_HOY: CRTHISTDOC_HOY = new CRTHISTDOC_HOY();
    public CRTHISTDOC_VEN: CRTHISTDOC_VEN = new CRTHISTDOC_VEN();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
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
    async CRFDOCVE_onClearDetails() {
        console.log("Entering CRFDOCVE_onClearDetails");
        // CRFDOCVE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFDOCVE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_whenMouseDoubleclick() {
        console.log("Entering CRFDOCVE_whenMouseDoubleclick");
        console.log("Exiting CRFDOCVE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_preForm() {
        console.log("Entering CRFDOCVE_preForm");
        console.log("Exiting CRFDOCVE_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_whenNewFormInstance() {
        console.log("Entering CRFDOCVE_whenNewFormInstance");
        console.log("Exiting CRFDOCVE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN EXIT_FORM(NO_VALIDATE); END;
    //#endregion
    async CRFDOCVE_keyExit() {
        console.log("Entering CRFDOCVE_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting CRFDOCVE_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFDOCVE_keyDown() {
        console.log("Entering CRFDOCVE_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFDOCVE_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :CRTHISTDOC_FUT.BENEFICIARIO
    //    FROM TER
    //    WHERE TERCOD=:CRTHISTDOC_FUT.HISTDO_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //   
    //   
    //   BEGIN
    //  SELECT USU_NOMBRE
    //   INTO :CRTHISTDOC.DESUSU_FUT
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO=:BASE.USUARIO
    //  
    //  ;
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFDOCVE_crthistdocFut_postQuery() {
        console.log("Entering CRFDOCVE_crthistdocFut_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_NITTER", this.CRTHISTDOC_FUT.HISTDO_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc_fut/crfdocve_crthistdocfut_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC_FUT.BENEFICIARIO = result1[0].get("CRTHISTDOC_FUT.BENEFICIARIO");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("USUARIO", this.BASE.USUARIO);
        // call REST API
        const result2 = await Rest.post("/crfdocve_crthistdoc_fut/crfdocve_crthistdocfut_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC.DESUSU_FUT = result2[0].get("CRTHISTDOC.DESUSU_FUT");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFDOCVE_crthistdocFut_postQuery");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD (:CRTHISTDOC_FUT.HISTDO_OFCSOL,:CRTHISTDOC_FUT.HISTDO_NITTER,:CRTHISTDOC_FUT.HISTDO_CODSOL,:CRTHISTDOC_FUT.HISTDO_PLANEA,'PE','Q',
    // :CRTHISTDOC_FUT.HISTDO_CODUNI --ARQUITECTURA
    // ); END;
    //#endregion
    async CRFDOCVE_crthistdocFut_actualizar_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdocFut_actualizar_whenButtonPressed");
        // CRFDOCVE_PU_LLAMAR_SOLICITUD(CRTHISTDOC_FUT.HISTDO_OFCSOL, CRTHISTDOC_FUT.HISTDO_NITTER, CRTHISTDOC_FUT.HISTDO_CODSOL, CRTHISTDOC_FUT.HISTDO_PLANEA, "PE", "Q", CRTHISTDOC_FUT.HISTDO_CODUNI);
        console.log("Exiting CRFDOCVE_crthistdocFut_actualizar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //   IF :CRTHISTDOC_FUT.HISTDO_ESTSEG NOT IN ('PE','OK','NA') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;  
    //#endregion
    async CRFDOCVE_crthistdocFut_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFDOCVE_crthistdocFut_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC_FUT.HISTDO_ESTSEG) != -1) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCVE_crthistdocFut_histdoEstseg_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('LISTA_DOCUMENTOS') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_ITEM('HISTDOC_ESTDOC');
    //  END IF;
    // END; 
    //#endregion
    async CRFDOCVE_crthistdocFut_listaDoc_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdocFut_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("HISTDOC_ESTDOC");
        }
        console.log("Exiting CRFDOCVE_crthistdocFut_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTHISTDOC_VEN DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTHISTDOC_VEN_CUR IS      
    //     SELECT 1 FROM CRTHISTDOC C     
    //     WHERE C.HISTDO_OFCSOL = :CRTHISTDOC.HISTDO_OFCSOL AND C.HISTDO_CODSOL = :CRTHISTDOC.HISTDO_CODSOL AND C.HISTDO_TIPCRE = :CRTHISTDOC.HISTDO_TIPCRE AND C.HISTDO_PLANEA = :CRTHISTDOC.HISTDO_PLANEA AND C.HISTDO_USUARI = :CRTHISTDOC.HISTDO_USUARI AND C.HISTDO_CODUNI = :CRTHISTDOC.HISTDO_CODUNI;
    //   --
    //   -- END CRTHISTDOC_VEN DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTHISTDOC_FUT DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTHISTDOC_FUT_CUR IS      
    //     SELECT 1 FROM CRTHISTDOC C     
    //     WHERE C.HISTDO_OFCSOL = :CRTHISTDOC.HISTDO_OFCSOL AND C.HISTDO_CODSOL = :CRTHISTDOC.HISTDO_CODSOL AND C.HISTDO_TIPCRE = :CRTHISTDOC.HISTDO_TIPCRE AND C.HISTDO_PLANEA = :CRTHISTDOC.HISTDO_PLANEA AND C.HISTDO_USUARI = :CRTHISTDOC.HISTDO_USUARI AND C.HISTDO_CODUNI = :CRTHISTDOC.HISTDO_CODUNI;
    //   --
    //   -- END CRTHISTDOC_FUT DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTHISTDOC_HOY DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTHISTDOC_HOY_CUR IS      
    //     SELECT 1 FROM CRTHISTDOC C     
    //     WHERE C.HISTDO_OFCSOL = :CRTHISTDOC.HISTDO_OFCSOL AND C.HISTDO_CODSOL = :CRTHISTDOC.HISTDO_CODSOL AND C.HISTDO_TIPCRE = :CRTHISTDOC.HISTDO_TIPCRE AND C.HISTDO_PLANEA = :CRTHISTDOC.HISTDO_PLANEA AND C.HISTDO_USUARI = :CRTHISTDOC.HISTDO_USUARI AND C.HISTDO_CODUNI = :CRTHISTDOC.HISTDO_CODUNI;
    //   --
    //   -- END CRTHISTDOC_HOY DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTHISTDOC_VEN DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTHISTDOC_VEN_CUR;     
    //   FETCH CRTHISTDOC_VEN_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTHISTDOC_VEN_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTHISTDOC_VEN_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTHISTDOC_VEN_CUR;
    //   --
    //   -- END CRTHISTDOC_VEN DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTHISTDOC_FUT DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTHISTDOC_FUT_CUR;     
    //   FETCH CRTHISTDOC_FUT_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTHISTDOC_FUT_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTHISTDOC_FUT_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTHISTDOC_FUT_CUR;
    //   --
    //   -- END CRTHISTDOC_FUT DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTHISTDOC_HOY DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTHISTDOC_HOY_CUR;     
    //   FETCH CRTHISTDOC_HOY_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTHISTDOC_HOY_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTHISTDOC_HOY_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTHISTDOC_HOY_CUR;
    //   --
    //   -- END CRTHISTDOC_HOY DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFDOCVE_crthistdoc_onCheckDeleteMaster() {
        console.log("Entering CRFDOCVE_crthistdoc_onCheckDeleteMaster");
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
        console.log("Exiting CRFDOCVE_crthistdoc_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PER SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //  BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PER
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PER IN ('OD','OI') THEN
    //        BEGIN
    //           SELECT USU_NOMBRE
    //            INTO :CRTHISTDOC.DESUSU_HOY
    //           FROM SGUSUARIOS
    //           WHERE USU_CODIGO =:CRTHISTDOC.HISTDO_USUARI
    //        
    //           ;
    //           EXCEPTION
    //           WHEN NO_DATA_FOUND THEN NULL;
    //         END; 
    //     
    //           BEGIN
    //            SELECT USU_NOMBRE
    //             INTO :CRTHISTDOC.DESUSU_VEN
    //            FROM SGUSUARIOS
    //            WHERE USU_CODIGO=:CRTHISTDOC.USUARIO_VEN
    //        
    //            ;
    //           EXCEPTION
    //            WHEN NO_DATA_FOUND THEN NULL;
    //           END; 
    //     
    //           BEGIN
    //            SELECT USU_NOMBRE
    //             INTO :CRTHISTDOC.DESUSU_FUT
    //            FROM SGUSUARIOS
    //            WHERE USU_CODIGO=:BASE.USUARIO
    //        
    //            ;
    //           EXCEPTION
    //             WHEN NO_DATA_FOUND THEN NULL;
    //           END; 
    //           
    //      END IF;     
    //    --  CLOSE_FORM('CRFDOCPE');
    // END;
    //#endregion
    async CRFDOCVE_crthistdoc_whenNewBlockInstance() {
        console.log("Entering CRFDOCVE_crthistdoc_whenNewBlockInstance");
        let TIPO_PER: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_whennewblockinstance_query1", payload1);
        // get values from result
        TIPO_PER = result1[0].get("TIPO_PER");
        if (result1 == null || result1.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PER) != -1) {
            // construct payload
            let payload2 = new Map();
            payload2.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
            // call REST API
            const result2 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_whennewblockinstance_query2", payload2);
            // get values from result
            this.CRTHISTDOC.DESUSU_HOY = result2[0].get("CRTHISTDOC.DESUSU_HOY");
            if (result2 == null || result2.length == 0) {

            }

            // construct payload
            let payload3 = new Map();
            payload3.set("USUARIO_VEN", this.CRTHISTDOC.USUARIO_VEN);
            // call REST API
            const result3 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_whennewblockinstance_query3", payload3);
            // get values from result
            this.CRTHISTDOC.DESUSU_VEN = result3[0].get("CRTHISTDOC.DESUSU_VEN");
            if (result3 == null || result3.length == 0) {

            }

            // construct payload
            let payload4 = new Map();
            payload4.set("USUARIO", this.BASE.USUARIO);
            // call REST API
            const result4 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_whennewblockinstance_query4", payload4);
            // get values from result
            this.CRTHISTDOC.DESUSU_FUT = result4[0].get("CRTHISTDOC.DESUSU_FUT");
            if (result4 == null || result4.length == 0) {

            }

        }
        console.log("Exiting CRFDOCVE_crthistdoc_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN EXIT_FORM(NO_VALIDATE); END;
    //#endregion
    async CRFDOCVE_crthistdoc_keyExit() {
        console.log("Entering CRFDOCVE_crthistdoc_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting CRFDOCVE_crthistdoc_keyExit");
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
    //   -- BEGIN CRTHISTDOC_VEN DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTHISTDOC.HISTDO_OFCSOL IS NOT NULL) OR (:CRTHISTDOC.HISTDO_CODSOL IS NOT NULL) OR (:CRTHISTDOC.HISTDO_TIPCRE IS NOT NULL) OR (:CRTHISTDOC.HISTDO_PLANEA IS NOT NULL) OR (:CRTHISTDOC.HISTDO_USUARI IS NOT NULL) OR (:CRTHISTDOC.HISTDO_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_VEN');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTHISTDOC_VEN');   
    //   END IF;
    //   --
    //   -- END CRTHISTDOC_VEN DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTHISTDOC_FUT DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTHISTDOC.HISTDO_OFCSOL IS NOT NULL) OR (:CRTHISTDOC.HISTDO_CODSOL IS NOT NULL) OR (:CRTHISTDOC.HISTDO_TIPCRE IS NOT NULL) OR (:CRTHISTDOC.HISTDO_PLANEA IS NOT NULL) OR (:CRTHISTDOC.HISTDO_USUARI IS NOT NULL) OR (:CRTHISTDOC.HISTDO_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_FUT');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTHISTDOC_FUT');   
    //   END IF;
    //   --
    //   -- END CRTHISTDOC_FUT DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTHISTDOC_HOY DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTHISTDOC.HISTDO_OFCSOL IS NOT NULL) OR (:CRTHISTDOC.HISTDO_CODSOL IS NOT NULL) OR (:CRTHISTDOC.HISTDO_TIPCRE IS NOT NULL) OR (:CRTHISTDOC.HISTDO_PLANEA IS NOT NULL) OR (:CRTHISTDOC.HISTDO_USUARI IS NOT NULL) OR (:CRTHISTDOC.HISTDO_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_HOY');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTHISTDOC_HOY');   
    //   END IF;
    //   --
    //   -- END CRTHISTDOC_HOY DETAIL PROGRAM SECTION
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
    async CRFDOCVE_crthistdoc_onPopulateDetails() {
        console.log("Entering CRFDOCVE_crthistdoc_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((((((this.CRTHISTDOC.HISTDO_OFCSOL != null) || (this.CRTHISTDOC.HISTDO_CODSOL != null)) || (this.CRTHISTDOC.HISTDO_TIPCRE != null)) || (this.CRTHISTDOC.HISTDO_PLANEA != null)) || (this.CRTHISTDOC.HISTDO_USUARI != null)) || (this.CRTHISTDOC.HISTDO_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_VEN");
            // CRFDOCVE_QUERY_MASTER_DETAILS(REL_ID, "CRTHISTDOC_VEN");
        }
        if (((((((this.CRTHISTDOC.HISTDO_OFCSOL != null) || (this.CRTHISTDOC.HISTDO_CODSOL != null)) || (this.CRTHISTDOC.HISTDO_TIPCRE != null)) || (this.CRTHISTDOC.HISTDO_PLANEA != null)) || (this.CRTHISTDOC.HISTDO_USUARI != null)) || (this.CRTHISTDOC.HISTDO_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_FUT");
            // CRFDOCVE_QUERY_MASTER_DETAILS(REL_ID, "CRTHISTDOC_FUT");
        }
        if (((((((this.CRTHISTDOC.HISTDO_OFCSOL != null) || (this.CRTHISTDOC.HISTDO_CODSOL != null)) || (this.CRTHISTDOC.HISTDO_TIPCRE != null)) || (this.CRTHISTDOC.HISTDO_PLANEA != null)) || (this.CRTHISTDOC.HISTDO_USUARI != null)) || (this.CRTHISTDOC.HISTDO_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_HOY");
            // CRFDOCVE_QUERY_MASTER_DETAILS(REL_ID, "CRTHISTDOC_HOY");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFDOCVE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFDOCVE_crthistdoc_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN         
    //          BEGIN
    //           SELECT USU_NOMBRE
    //            INTO :CRTHISTDOC.DESUSU_HOY
    //           FROM SGUSUARIOS
    //           WHERE USU_CODIGO =:CRTHISTDOC.HISTDO_USUARI;
    //           EXCEPTION
    //           WHEN NO_DATA_FOUND THEN NULL;
    //         END; 
    //     
    //           BEGIN
    //            SELECT USU_NOMBRE
    //             INTO :CRTHISTDOC.DESUSU_VEN
    //            FROM SGUSUARIOS
    //            WHERE USU_CODIGO=:CRTHISTDOC.USUARIO_VEN;
    //           EXCEPTION
    //            WHEN NO_DATA_FOUND THEN NULL;
    //           END; 
    //     
    //           BEGIN
    //            SELECT USU_NOMBRE
    //             INTO :CRTHISTDOC.DESUSU_FUT
    //            FROM SGUSUARIOS
    //            WHERE USU_CODIGO=:CRTHISTDOC.USUARIO_FUT;
    //           EXCEPTION
    //             WHEN NO_DATA_FOUND THEN NULL;
    //           END;
    // END;
    //#endregion
    async CRFDOCVE_crthistdoc_postQuery() {
        console.log("Entering CRFDOCVE_crthistdoc_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC.DESUSU_HOY = result1[0].get("CRTHISTDOC.DESUSU_HOY");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("USUARIO_VEN", this.CRTHISTDOC.USUARIO_VEN);
        // call REST API
        const result2 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC.DESUSU_VEN = result2[0].get("CRTHISTDOC.DESUSU_VEN");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("USUARIO_FUT", this.CRTHISTDOC.USUARIO_FUT);
        // call REST API
        const result3 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_postquery_query3", payload3);
        // get values from result
        this.CRTHISTDOC.DESUSU_FUT = result3[0].get("CRTHISTDOC.DESUSU_FUT");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting CRFDOCVE_crthistdoc_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTHISTDOC.USUARIO_VEN:=NULL;
    // :CRTHISTDOC.DESUSU_VEN:=NULL;
    // GO_BLOCK('CRTHISTDOC_VEN');
    // CLEAR_BLOCK;
    // 
    // GO_BLOCK('CRTHISTDOC'); END;
    //#endregion
    async CRFDOCVE_crthistdoc_volverVenc_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdoc_volverVenc_whenButtonPressed");
        this.CRTHISTDOC.USUARIO_VEN = null;
        this.CRTHISTDOC.DESUSU_VEN = null;
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_VEN");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTHISTDOC");
        console.log("Exiting CRFDOCVE_crthistdoc_volverVenc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :CRTHISTDOC.HISTDO_USUARI:=NULL;
    // :CRTHISTDOC.DESUSU_HOY:=NULL;
    // 
    // GO_ITEM('VEN_HOY'); END;
    //#endregion
    async CRFDOCVE_crthistdoc_volverHoy_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdoc_volverHoy_whenButtonPressed");
        this.CRTHISTDOC.HISTDO_USUARI = null;
        this.CRTHISTDOC.DESUSU_HOY = null;
        this.oracleFormsBuiltins.go_item("VEN_HOY");
        console.log("Exiting CRFDOCVE_crthistdoc_volverHoy_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTHISTDOC_FUT');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFDOCVE_crthistdoc_usuarioFut_keyNextItem() {
        console.log("Entering CRFDOCVE_crthistdoc_usuarioFut_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_FUT");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFDOCVE_crthistdoc_usuarioFut_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTHISTDOC_HOY');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFDOCVE_crthistdoc_histdoUsuari_keyNextItem() {
        console.log("Entering CRFDOCVE_crthistdoc_histdoUsuari_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_HOY");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFDOCVE_crthistdoc_histdoUsuari_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //   IF :CRTHISTDOC.HISTDO_ESTSEG NOT IN ('PE','OK','NA') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;  
    //#endregion
    async CRFDOCVE_crthistdoc_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFDOCVE_crthistdoc_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC.HISTDO_ESTSEG) != -1) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCVE_crthistdoc_histdoEstseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTHISTDOC_VEN');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFDOCVE_crthistdoc_usuarioVen_keyNextItem() {
        console.log("Entering CRFDOCVE_crthistdoc_usuarioVen_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_VEN");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFDOCVE_crthistdoc_usuarioVen_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PERSONA IN ('OD','OI') THEN
    //        :CRTHISTDOC.USUARIO_FUT:=:BASE.USUARIO;
    //        SET_ITEM_PROPERTY('CRTHISTDOC.USUARIO_FUT',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('CRTHISTDOC_FUT');
    //        EXECUTE_QUERY;
    //      ELSE
    //         GO_ITEM('CRTHISTDOC.USUARIO_FUT');
    //      END IF;
    //      :CRTHISTDOC.VEN_FUTUROS:=NULL;
    // END;
    //#endregion
    async CRFDOCVE_crthistdoc_venFuturos_whenCheckboxChanged() {
        console.log("Entering CRFDOCVE_crthistdoc_venFuturos_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_venfuturos_whencheckboxchanged_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.CRTHISTDOC.USUARIO_FUT = this.BASE.USUARIO;
            this.oracleFormsBuiltins.set_item_property("CRTHISTDOC.USUARIO_FUT", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("CRTHISTDOC_FUT");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTHISTDOC.USUARIO_FUT");
        }
        this.CRTHISTDOC.VEN_FUTUROS = null;
        console.log("Exiting CRFDOCVE_crthistdoc_venFuturos_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PERSONA IN ('OD','OI') THEN
    //        :CRTHISTDOC.USUARIO_VEN:=:BASE.USUARIO;
    //        SET_ITEM_PROPERTY('CRTHISTDOC.USUARIO_VEN',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('CRTHISTDOC_VEN');
    //        EXECUTE_QUERY;
    //      ELSE
    //         GO_ITEM('CRTHISTDOC.USUARIO_VEN');
    //      END IF;
    //      :CRTHISTDOC.VENCIDOS:=NULL;
    // END;
    //#endregion
    async CRFDOCVE_crthistdoc_vencidos_whenCheckboxChanged() {
        console.log("Entering CRFDOCVE_crthistdoc_vencidos_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_vencidos_whencheckboxchanged_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.CRTHISTDOC.USUARIO_VEN = this.BASE.USUARIO;
            this.oracleFormsBuiltins.set_item_property("CRTHISTDOC.USUARIO_VEN", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("CRTHISTDOC_VEN");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTHISTDOC.USUARIO_VEN");
        }
        this.CRTHISTDOC.VENCIDOS = null;
        console.log("Exiting CRFDOCVE_crthistdoc_vencidos_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  V_NOMUSU VARCHAR2(100);
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMUSU
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PERSONA IN ('OD','OI') THEN
    //        :CRTHISTDOC.HISTDO_USUARI:=:BASE.USUARIO;
    //        :CRTHISTDOC.DESUSU_HOY:=V_NOMUSU;
    //        SET_ITEM_PROPERTY('CRTHISTDOC.HISTDO_USUARI',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('CRTHISTDOC_HOY');
    //        EXECUTE_QUERY;
    //      ELSE
    //         GO_ITEM('CRTHISTDOC.HISTDO_USUARI');
    //      END IF;
    //      :CRTHISTDOC.VEN_HOY:=NULL;
    // END;
    //#endregion
    async CRFDOCVE_crthistdoc_venHoy_whenCheckboxChanged() {
        console.log("Entering CRFDOCVE_crthistdoc_venHoy_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let V_NOMUSU: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_venhoy_whencheckboxchanged_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfdocve_crthistdoc/crfdocve_crthistdoc_venhoy_whencheckboxchanged_query2", payload2);
        // get values from result
        V_NOMUSU = result2[0].get("V_NOMUSU");
        if (result2 == null || result2.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.CRTHISTDOC.HISTDO_USUARI = this.BASE.USUARIO;
            this.CRTHISTDOC.DESUSU_HOY = V_NOMUSU;
            this.oracleFormsBuiltins.set_item_property("CRTHISTDOC.HISTDO_USUARI", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("CRTHISTDOC_HOY");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTHISTDOC.HISTDO_USUARI");
        }
        this.CRTHISTDOC.VEN_HOY = null;
        console.log("Exiting CRFDOCVE_crthistdoc_venHoy_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN :CRTHISTDOC.USUARIO_FUT:=NULL;
    // :CRTHISTDOC.DESUSU_FUT:=NULL;
    // GO_BLOCK('CRTHISTDOC_FUT');
    // CLEAR_BLOCK;
    // GO_BLOCK('CRTHISTDOC'); END;
    //#endregion
    async CRFDOCVE_crthistdoc_volverFut_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdoc_volverFut_whenButtonPressed");
        this.CRTHISTDOC.USUARIO_FUT = null;
        this.CRTHISTDOC.DESUSU_FUT = null;
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_FUT");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTHISTDOC");
        console.log("Exiting CRFDOCVE_crthistdoc_volverFut_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFDOCVE_crthistdocHoy_keyNxtblk() {
        console.log("Entering CRFDOCVE_crthistdocHoy_keyNxtblk");
        console.log("Exiting CRFDOCVE_crthistdocHoy_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC.DESUSU_HOY
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:CRTHISTDOC.HISTDO_USUARI
    //   
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END; 
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :CRTHISTDOC_HOY.BENEFICIARIO
    //    FROM TER
    //    WHERE TERCOD=:CRTHISTDOC_HOY.HISTDO_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFDOCVE_crthistdocHoy_postQuery() {
        console.log("Entering CRFDOCVE_crthistdocHoy_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc_hoy/crfdocve_crthistdochoy_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC.DESUSU_HOY = result1[0].get("CRTHISTDOC.DESUSU_HOY");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("HISTDO_NITTER", this.CRTHISTDOC_HOY.HISTDO_NITTER);
        // call REST API
        const result2 = await Rest.post("/crfdocve_crthistdoc_hoy/crfdocve_crthistdochoy_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC_HOY.BENEFICIARIO = result2[0].get("CRTHISTDOC_HOY.BENEFICIARIO");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFDOCVE_crthistdocHoy_postQuery");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD (:CRTHISTDOC_HOY.HISTDO_OFCSOL,:CRTHISTDOC_HOY.HISTDO_NITTER,:CRTHISTDOC_HOY.HISTDO_CODSOL,:CRTHISTDOC_HOY.HISTDO_PLANEA,'PE','Q',
    // :CRTHISTDOC_HOY.HISTDO_CODUNI --ARQUITECTURA
    // ); END;
    //#endregion
    async CRFDOCVE_crthistdocHoy_actualizar_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdocHoy_actualizar_whenButtonPressed");
        // CRFDOCVE_PU_LLAMAR_SOLICITUD(CRTHISTDOC_HOY.HISTDO_OFCSOL, CRTHISTDOC_HOY.HISTDO_NITTER, CRTHISTDOC_HOY.HISTDO_CODSOL, CRTHISTDOC_HOY.HISTDO_PLANEA, "PE", "Q", CRTHISTDOC_HOY.HISTDO_CODUNI);
        console.log("Exiting CRFDOCVE_crthistdocHoy_actualizar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //   IF :CRTHISTDOC_HOY.HISTDO_ESTSEG NOT IN ('PE','OK','NA') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;  
    //#endregion
    async CRFDOCVE_crthistdocHoy_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFDOCVE_crthistdocHoy_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC_HOY.HISTDO_ESTSEG) != -1) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCVE_crthistdocHoy_histdoEstseg_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('LISTA_DOCUMENTOS') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_ITEM('HISTDOC_ESTDOC');
    //  END IF;
    // END; 
    //#endregion
    async CRFDOCVE_crthistdocHoy_listaDoc_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdocHoy_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("HISTDOC_ESTDOC");
        }
        console.log("Exiting CRFDOCVE_crthistdocHoy_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :CRTHISTDOC_VEN.BENEFICIARIO
    //    FROM TER
    //    WHERE TERCOD=:CRTHISTDOC_VEN.HISTDO_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //   
    //   BEGIN
    //  SELECT USU_NOMBRE
    //   INTO :CRTHISTDOC.DESUSU_VEN
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO=:CRTHISTDOC.USUARIO_VEN
    //  
    //  ;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFDOCVE_crthistdocVen_postQuery() {
        console.log("Entering CRFDOCVE_crthistdocVen_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_NITTER", this.CRTHISTDOC_VEN.HISTDO_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfdocve_crthistdoc_ven/crfdocve_crthistdocven_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC_VEN.BENEFICIARIO = result1[0].get("CRTHISTDOC_VEN.BENEFICIARIO");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("USUARIO_VEN", this.CRTHISTDOC.USUARIO_VEN);
        // call REST API
        const result2 = await Rest.post("/crfdocve_crthistdoc_ven/crfdocve_crthistdocven_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC.DESUSU_VEN = result2[0].get("CRTHISTDOC.DESUSU_VEN");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFDOCVE_crthistdocVen_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   PU_LLAMAR_SOLICITUD(:CRTHISTDOC_VEN.HISTDO_OFCSOL, :CRTHISTDOC_VEN.HISTDO_NITTER, :CRTHISTDOC_VEN.HISTDO_CODSOL, :CRTHISTDOC_VEN.HISTDO_PLANEA, 'VC', 'Q',
    //   :CRTHISTDOC_VEN.HISTDO_CODUNI --ARQUITECTURA
    //   );
    // END;
    //#endregion
    async CRFDOCVE_crthistdocVen_actualizar_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdocVen_actualizar_whenButtonPressed");
        // CRFDOCVE_PU_LLAMAR_SOLICITUD(CRTHISTDOC_VEN.HISTDO_OFCSOL, CRTHISTDOC_VEN.HISTDO_NITTER, CRTHISTDOC_VEN.HISTDO_CODSOL, CRTHISTDOC_VEN.HISTDO_PLANEA, "VC", "Q", CRTHISTDOC_VEN.HISTDO_CODUNI);
        console.log("Exiting CRFDOCVE_crthistdocVen_actualizar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //   IF :CRTHISTDOC_VEN.HISTDO_ESTSEG NOT IN ('PE','OK','NA') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;  
    //#endregion
    async CRFDOCVE_crthistdocVen_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFDOCVE_crthistdocVen_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC_VEN.HISTDO_ESTSEG) != -1) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFDOCVE_crthistdocVen_histdoEstseg_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('LISTA_DOCUMENTOS') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_ITEM('HISTDOC_ESTDOC');
    //  END IF;
    // END; 
    //#endregion
    async CRFDOCVE_crthistdocVen_listaDoc_whenButtonPressed() {
        console.log("Entering CRFDOCVE_crthistdocVen_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFDOCVE_LIB$ALERTA("MENSAJE", "NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("HISTDOC_ESTDOC");
        }
        console.log("Exiting CRFDOCVE_crthistdocVen_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_toolbar_whenButtonPressed() {
        console.log("Entering CRFDOCVE_toolbar_whenButtonPressed");
        console.log("Exiting CRFDOCVE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_toolbar_whenMouseLeave() {
        console.log("Entering CRFDOCVE_toolbar_whenMouseLeave");
        console.log("Exiting CRFDOCVE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFDOCVE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFDOCVE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFDOCVE_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFDOCVE_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFDOCVE_base_fecha_whenNewItemInstance");
    }

}

