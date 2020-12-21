import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCONSG business logic
import {
    CRTHISTDOC_FUT,
    CRTHISTDOC,
    SOLICITUDES,
    CRTHISTDOC_HOY,
    VARIABLE,
    CRTHISTDOC_VEN,
    TOOLBAR,
    BASE
} from "./CRFCONSG_models";



// class CRFCONSG
@Component({
    selector: 'app-crfconsg',
    templateUrl: './crfconsg.component.html',
})
export class CrfconsgComponent {
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
    public SOLICITUDES: SOLICITUDES = new SOLICITUDES();
    public CRTHISTDOC_HOY: CRTHISTDOC_HOY = new CRTHISTDOC_HOY();
    public VARIABLE: VARIABLE = new VARIABLE();
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
    async CRFCONSG_onClearDetails() {
        console.log("Entering CRFCONSG_onClearDetails");
        // CRFCONSG_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFCONSG_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSG_whenMouseDoubleclick() {
        console.log("Entering CRFCONSG_whenMouseDoubleclick");
        console.log("Exiting CRFCONSG_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSG_preForm() {
        console.log("Entering CRFCONSG_preForm");
        console.log("Exiting CRFCONSG_preForm");
    }

    //#region PLSQL
    // BEGIN ---------------------------------------------------------------------
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
    // -----------------------------
    // REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFCONSG_whenNewFormInstance() {
        console.log("Entering CRFCONSG_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfconsg/crfconsg_whennewforminstance_query1", payload1);
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

        // CRFCONSG_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCONSG_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN EXIT_FORM(NO_VALIDATE); END;
    //#endregion
    async CRFCONSG_keyExit() {
        console.log("Entering CRFCONSG_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting CRFCONSG_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFCONSG_keyDown() {
        console.log("Entering CRFCONSG_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFCONSG_keyDown");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCONSG_crthistdocFut_keyNxtblk() {
        console.log("Entering CRFCONSG_crthistdocFut_keyNxtblk");
        console.log("Exiting CRFCONSG_crthistdocFut_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC.DESUSU_VEN
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :CRTHISTDOC.HISTDO_USUARI
    //     AND USU_CODUNI = :CRTHISTDOC.HISTDO_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //   BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC_FUT.DESUSUARIO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:CRTHISTDOC_FUT.HISTDO_USUARI
    //     AND USU_CODUNI = :CRTHISTDOC.HISTDO_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END; 
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :CRTHISTDOC_VEN.BENEFICIARIO
    //    FROM TER
    //    WHERE TERCOD=:CRTHISTDOC_VEN.HISTDO_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFCONSG_crthistdocFut_postQuery() {
        console.log("Entering CRFCONSG_crthistdocFut_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
        payload1.set("HISTDO_CODUNI", this.CRTHISTDOC.HISTDO_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc_fut/crfconsg_crthistdocfut_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC.DESUSU_VEN = result1[0].get("CRTHISTDOC.DESUSU_VEN");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("HISTDO_USUARI", this.CRTHISTDOC_FUT.HISTDO_USUARI);
        payload2.set("HISTDO_CODUNI", this.CRTHISTDOC.HISTDO_CODUNI);
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc_fut/crfconsg_crthistdocfut_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC_FUT.DESUSUARIO = result2[0].get("CRTHISTDOC_FUT.DESUSUARIO");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("HISTDO_NITTER", this.CRTHISTDOC_VEN.HISTDO_NITTER);
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc_fut/crfconsg_crthistdocfut_postquery_query3", payload3);
        // get values from result
        this.CRTHISTDOC_VEN.BENEFICIARIO = result3[0].get("CRTHISTDOC_VEN.BENEFICIARIO");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting CRFCONSG_crthistdocFut_postQuery");
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
    async CRFCONSG_crthistdocFut_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFCONSG_crthistdocFut_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC_HOY.HISTDO_ESTSEG) != -1) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCONSG_crthistdocFut_histdoEstseg_whenValidateItem");
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
    async CRFCONSG_crthistdocFut_listaDoc_whenButtonPressed() {
        console.log("Entering CRFCONSG_crthistdocFut_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("HISTDOC_ESTDOC");
        }
        console.log("Exiting CRFCONSG_crthistdocFut_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
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
    async CRFCONSG_crthistdoc_onCheckDeleteMaster() {
        console.log("Entering CRFCONSG_crthistdoc_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCONSG_crthistdoc_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PER SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //  BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PER
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PER IN ('OD','OI') THEN
    //        BEGIN
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
    //            WHERE USU_CODIGO=:BASE.USUARIO;
    //           EXCEPTION
    //             WHEN NO_DATA_FOUND THEN NULL;
    //           END; 
    //           
    //      END IF;     
    // END;
    //#endregion
    async CRFCONSG_crthistdoc_whenNewBlockInstance() {
        console.log("Entering CRFCONSG_crthistdoc_whenNewBlockInstance");
        let TIPO_PER: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_whennewblockinstance_query1", payload1);
        // get values from result
        TIPO_PER = result1[0].get("TIPO_PER");
        if (result1 == null || result1.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PER) != -1) {
            // construct payload
            let payload2 = new Map();
            payload2.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
            // call REST API
            const result2 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_whennewblockinstance_query2", payload2);
            // get values from result
            this.CRTHISTDOC.DESUSU_HOY = result2[0].get("CRTHISTDOC.DESUSU_HOY");
            if (result2 == null || result2.length == 0) {

            }

            // construct payload
            let payload3 = new Map();
            payload3.set("USUARIO_VEN", this.CRTHISTDOC.USUARIO_VEN);
            // call REST API
            const result3 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_whennewblockinstance_query3", payload3);
            // get values from result
            this.CRTHISTDOC.DESUSU_VEN = result3[0].get("CRTHISTDOC.DESUSU_VEN");
            if (result3 == null || result3.length == 0) {

            }

            // construct payload
            let payload4 = new Map();
            payload4.set("USUARIO", this.BASE.USUARIO);
            // call REST API
            const result4 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_whennewblockinstance_query4", payload4);
            // get values from result
            this.CRTHISTDOC.DESUSU_FUT = result4[0].get("CRTHISTDOC.DESUSU_FUT");
            if (result4 == null || result4.length == 0) {

            }

        }
        console.log("Exiting CRFCONSG_crthistdoc_whenNewBlockInstance");
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
    async CRFCONSG_crthistdoc_onPopulateDetails() {
        console.log("Entering CRFCONSG_crthistdoc_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((((((this.CRTHISTDOC.HISTDO_OFCSOL != null) || (this.CRTHISTDOC.HISTDO_CODSOL != null)) || (this.CRTHISTDOC.HISTDO_TIPCRE != null)) || (this.CRTHISTDOC.HISTDO_PLANEA != null)) || (this.CRTHISTDOC.HISTDO_USUARI != null)) || (this.CRTHISTDOC.HISTDO_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTHISTDOC.CRTHISTDOC_CRTHISTDOC_HOY");
            // CRFCONSG_QUERY_MASTER_DETAILS(REL_ID, "CRTHISTDOC_HOY");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFCONSG_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFCONSG_crthistdoc_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN         
    //          BEGIN
    //           SELECT USU_NOMBRE
    //            INTO :CRTHISTDOC.DESUSU_HOY
    //           FROM SGUSUARIOS
    //           WHERE USU_CODIGO =:CRTHISTDOC.HISTDO_USUARI
    //            AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
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
    //            AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //            ;
    //           EXCEPTION
    //            WHEN NO_DATA_FOUND THEN NULL;
    //           END; 
    //     
    //           BEGIN
    //            SELECT USU_NOMBRE
    //             INTO :CRTHISTDOC.DESUSU_FUT
    //            FROM SGUSUARIOS
    //            WHERE USU_CODIGO=:CRTHISTDOC.USUARIO_FUT
    //              AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //            ;
    //           EXCEPTION
    //             WHEN NO_DATA_FOUND THEN NULL;
    //           END;
    // END;
    //#endregion
    async CRFCONSG_crthistdoc_postQuery() {
        console.log("Entering CRFCONSG_crthistdoc_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC.DESUSU_HOY = result1[0].get("CRTHISTDOC.DESUSU_HOY");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("USUARIO_VEN", this.CRTHISTDOC.USUARIO_VEN);
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC.DESUSU_VEN = result2[0].get("CRTHISTDOC.DESUSU_VEN");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("USUARIO_FUT", this.CRTHISTDOC.USUARIO_FUT);
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_postquery_query3", payload3);
        // get values from result
        this.CRTHISTDOC.DESUSU_FUT = result3[0].get("CRTHISTDOC.DESUSU_FUT");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting CRFCONSG_crthistdoc_postQuery");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:SOLICITUDES.OFCN,:SOLICITUDES.TERCERO,:SOLICITUDES.SOLICITUD,'Q'
    // ,:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    // ); END;
    //#endregion
    async CRFCONSG_crthistdoc_detaFut_whenMouseClick() {
        console.log("Entering CRFCONSG_crthistdoc_detaFut_whenMouseClick");
        // CRFCONSG_PU_LLAMAR_SOLICITUD(SOLICITUDES.OFCN, SOLICITUDES.TERCERO, SOLICITUDES.SOLICITUD, "Q", this.PARAMETER.get("P_UNIDAD"));
        console.log("Exiting CRFCONSG_crthistdoc_detaFut_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CAN_VENCIDOS');
    // HIDE_VIEW('CAN_SOLICITUD');
    // GO_ITEM('VENCIDOS');
    // :CRTHISTDOC.VENCIDOS:=NULL;
    // :VARIABLE.USCIAL:=NULL;
    // :VARIABLE.USOFID:=NULL;
    // :VARIABLE.NOM_COMERCIAL:=NULL;
    // :VARIABLE.NOM_OFICIAL:=NULL; END;
    //#endregion
    async CRFCONSG_crthistdoc_volverVenc_whenButtonPressed() {
        console.log("Entering CRFCONSG_crthistdoc_volverVenc_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CAN_VENCIDOS");
        this.oracleFormsBuiltins.hide_view("CAN_SOLICITUD");
        this.oracleFormsBuiltins.go_item("VENCIDOS");
        this.CRTHISTDOC.VENCIDOS = null;
        this.VARIABLE.USCIAL = null;
        this.VARIABLE.USOFID = null;
        this.VARIABLE.NOM_COMERCIAL = null;
        this.VARIABLE.NOM_OFICIAL = null;
        console.log("Exiting CRFCONSG_crthistdoc_volverVenc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:SOLICITUDES.OFCN,:SOLICITUDES.TERCERO,:SOLICITUDES.SOLICITUD,'Q'
    // ,:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    // ); END;
    //#endregion
    async CRFCONSG_crthistdoc_detaVenc_whenMouseClick() {
        console.log("Entering CRFCONSG_crthistdoc_detaVenc_whenMouseClick");
        // CRFCONSG_PU_LLAMAR_SOLICITUD(SOLICITUDES.OFCN, SOLICITUDES.TERCERO, SOLICITUDES.SOLICITUD, "Q", this.PARAMETER.get("P_UNIDAD"));
        console.log("Exiting CRFCONSG_crthistdoc_detaVenc_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CAN_HOY');
    // HIDE_VIEW('CAN_SOLICITUD');
    // GO_ITEM('VEN_HOY');
    // :CRTHISTDOC.VEN_HOY:=NULL;
    // :VARIABLE.USCIAL:=NULL;
    // :VARIABLE.USOFID:=NULL;
    // :VARIABLE.NOM_COMERCIAL:=NULL;
    // :VARIABLE.NOM_OFICIAL:=NULL; END;
    //#endregion
    async CRFCONSG_crthistdoc_volverHoy_whenButtonPressed() {
        console.log("Entering CRFCONSG_crthistdoc_volverHoy_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CAN_HOY");
        this.oracleFormsBuiltins.hide_view("CAN_SOLICITUD");
        this.oracleFormsBuiltins.go_item("VEN_HOY");
        this.CRTHISTDOC.VEN_HOY = null;
        this.VARIABLE.USCIAL = null;
        this.VARIABLE.USOFID = null;
        this.VARIABLE.NOM_COMERCIAL = null;
        this.VARIABLE.NOM_OFICIAL = null;
        console.log("Exiting CRFCONSG_crthistdoc_volverHoy_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTHISTDOC_FUT');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCONSG_crthistdoc_usuarioFut_keyNextItem() {
        console.log("Entering CRFCONSG_crthistdoc_usuarioFut_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_FUT");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCONSG_crthistdoc_usuarioFut_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTHISTDOC_HOY');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCONSG_crthistdoc_histdoUsuari_keyNextItem() {
        console.log("Entering CRFCONSG_crthistdoc_histdoUsuari_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_HOY");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCONSG_crthistdoc_histdoUsuari_keyNextItem");
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
    async CRFCONSG_crthistdoc_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFCONSG_crthistdoc_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC.HISTDO_ESTSEG) != -1) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCONSG_crthistdoc_histdoEstseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTHISTDOC_VEN');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCONSG_crthistdoc_usuarioVen_keyNextItem() {
        console.log("Entering CRFCONSG_crthistdoc_usuarioVen_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTHISTDOC_VEN");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCONSG_crthistdoc_usuarioVen_keyNextItem");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:SOLICITUDES.OFCN,:SOLICITUDES.TERCERO,:SOLICITUDES.SOLICITUD,'Q'
    // ,:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    // ); END;
    //#endregion
    async CRFCONSG_crthistdoc_detaHoy_whenMouseClick() {
        console.log("Entering CRFCONSG_crthistdoc_detaHoy_whenMouseClick");
        // CRFCONSG_PU_LLAMAR_SOLICITUD(SOLICITUDES.OFCN, SOLICITUDES.TERCERO, SOLICITUDES.SOLICITUD, "Q", this.PARAMETER.get("P_UNIDAD"));
        console.log("Exiting CRFCONSG_crthistdoc_detaHoy_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //   V_NOMUSU VARCHAR2(100);
    //    V_OFICIAL SETCOMCIA.COM_USOPER%TYPE;
    //  V_NOMOFICIAL VARCHAR2(100);
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMUSU
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      BEGIN
    //      SELECT COM_USOPER
    //       INTO V_OFICIAL
    //       FROM SETCOMCIA
    //      WHERE COM_USORAC=USER
    //      AND COM_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END;
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMOFICIAL
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=V_OFICIAL
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //     /* IF NVL(TIPO_PERSONA,'XX') IN ('DC','TC','XX') THEN
    //        :VARIABLE.USCIAL:=:BASE.USUARIO;
    //        :VARIABLE.NOM_COMERCIAL:=V_NOMUSU;
    //        SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //        :VARIABLE.USOFID:=V_OFICIAL;
    //        :VARIABLE.NOM_OFICIAL:=V_NOMOFICIAL;
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //        SHOW_VIEW('CAN_FUT');
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //      ELSIF TIPO_PERSONA IN ('SR','PR','GC','GF','GO','SO','JO','OD')THEN
    //            GO_BLOCK('VARIABLE');
    //      ELSIF TIPO_PERSONA IN ('JO','SO') THEN
    //            GO_BLOCK('VARIABLE');
    //      END IF;*/
    //      
    //      ------------------
    //       IF NVL(TIPO_PERSONA,'XX') IN ('DC','TC','XX') THEN
    //        :VARIABLE.USCIAL:=:BASE.USUARIO;
    //        :VARIABLE.NOM_COMERCIAL:=V_NOMUSU;
    //        :VARIABLE.USOFID:=V_OFICIAL;
    //        :VARIABLE.NOM_OFICIAL:=V_NOMOFICIAL;
    //        SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //        SHOW_VIEW('CAN_FUT');
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //      ELSIF TIPO_PERSONA IN ('SR','PR','GC','GF','GO','SO')THEN
    //            GO_BLOCK('VARIABLE');
    //      ELSIF  TIPO_PERSONA ='OD' THEN
    //             SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //             :VARIABLE.USOFID:=:BASE.USUARIO;
    //             :VARIABLE.NOM_OFICIAL:=V_NOMUSU;
    //             GO_BLOCK('SOLICITUDES');
    //             EXECUTE_QUERY;
    //             SHOW_VIEW('CAN_FUT');
    //             GO_BLOCK('SOLICITUDES');
    //      ELSIF TIPO_PERSONA IN ('JO','SO') THEN
    //             --SET_BLOCK_PROPERTY('SOLICITUDES',QUERY_ALLOWED,"PROPERTY_FALSE");
    //            GO_BLOCK('VARIABLE');
    //         END IF;   
    //      :GLOBAL.BLOQUE:='CRTHISTDOC_FUT';
    //      :GLOBAL.CANVAS:='CAN_FUT';
    // END;
    //#endregion
    async CRFCONSG_crthistdoc_venFuturos_whenCheckboxChanged() {
        console.log("Entering CRFCONSG_crthistdoc_venFuturos_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let V_NOMUSU: string = null;
        let V_OFICIAL: null = null;
        let V_NOMOFICIAL: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venfuturos_whencheckboxchanged_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venfuturos_whencheckboxchanged_query2", payload2);
        // get values from result
        V_NOMUSU = result2[0].get("V_NOMUSU");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venfuturos_whencheckboxchanged_query3", payload3);
        // get values from result
        V_OFICIAL = result3[0].get("V_OFICIAL");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result4 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venfuturos_whencheckboxchanged_query4", payload4);
        // get values from result
        V_NOMOFICIAL = result4[0].get("V_NOMOFICIAL");
        if (result4 == null || result4.length == 0) {

        }

        if (["DC", "TC", "XX"].indexOf(TIPO_PERSONA == null ? "XX" : TIPO_PERSONA) != -1) {
            this.VARIABLE.USCIAL = this.BASE.USUARIO;
            this.VARIABLE.NOM_COMERCIAL = V_NOMUSU;
            this.VARIABLE.USOFID = V_OFICIAL;
            this.VARIABLE.NOM_OFICIAL = V_NOMOFICIAL;
            this.oracleFormsBuiltins.set_item_property("VARIABLE.USCIAL", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CAN_FUT");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (["SR", "PR", "GC", "GF", "GO", "SO"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.go_block("VARIABLE");
        }
        else if (TIPO_PERSONA == "OD") {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.USCIAL", "ENABLED", "ATTR_OFF");
            this.VARIABLE.USOFID = this.BASE.USUARIO;
            this.VARIABLE.NOM_OFICIAL = V_NOMUSU;
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CAN_FUT");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
        }
        else if (["JO", "SO"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.go_block("VARIABLE");
        }
        // this.GLOBAL.BLOQUE = "CRTHISTDOC_FUT";
        this._GLOBAL_SERVICE.set("CANVAS", "CAN_FUT");
        console.log("Exiting CRFCONSG_crthistdoc_venFuturos_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //   V_NOMUSU VARCHAR2(100);
    //    V_OFICIAL SETCOMCIA.COM_USOPER%TYPE;
    //  V_NOMOFICIAL VARCHAR2(100);
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMUSU
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      BEGIN
    //      SELECT COM_USOPER
    //       INTO V_OFICIAL
    //       FROM SETCOMCIA
    //      WHERE COM_USORAC=USER
    //      AND COM_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END;
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMOFICIAL
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=V_OFICIAL
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //    /*  IF NVL(TIPO_PERSONA,'XX') IN ('DC','TC','XX') THEN
    //        :VARIABLE.USCIAL:=:BASE.USUARIO;
    //        :VARIABLE.NOM_COMERCIAL:=V_NOMUSU;
    //        :VARIABLE.USOFID:=V_OFICIAL;
    //        :VARIABLE.NOM_OFICIAL:=V_NOMOFICIAL;
    //         SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //        SHOW_VIEW('CAN_VENCIDOS');
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //      ELSIF TIPO_PERSONA IN ('SR','PR','GC','GF','GO','SO','JO','OD')THEN
    //            GO_BLOCK('VARIABLE');
    //      ELSIF TIPO_PERSONA IN ('JO','SO') THEN
    //            GO_BLOCK('VARIABLE');
    //      END IF;*/
    //      
    //      ----------------
    //      
    //       IF NVL(TIPO_PERSONA,'XX') IN ('DC','TC','XX') THEN
    //        :VARIABLE.USCIAL:=:BASE.USUARIO;
    //        :VARIABLE.NOM_COMERCIAL:=V_NOMUSU;
    //        :VARIABLE.USOFID:=V_OFICIAL;
    //        :VARIABLE.NOM_OFICIAL:=V_NOMOFICIAL;
    //        SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //        SHOW_VIEW('CAN_VENCIDOS');
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //      ELSIF TIPO_PERSONA IN ('SR','PR','GC','GF','GO','SO')THEN
    //            GO_BLOCK('VARIABLE');
    //      ELSIF  TIPO_PERSONA ='OD' THEN
    //             SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //             :VARIABLE.USOFID:=:BASE.USUARIO;
    //             :VARIABLE.NOM_OFICIAL:=V_NOMUSU;
    //             GO_BLOCK('SOLICITUDES');
    //             EXECUTE_QUERY;
    //             SHOW_VIEW('CAN_VENCIDOS');
    //             GO_BLOCK('SOLICITUDES');
    //      ELSIF TIPO_PERSONA IN ('JO','SO') THEN
    //            :VARIABLE.USOFID:=NULL;
    //            :VARIABLE.USCIAL:=NULL;
    //            GO_BLOCK('VARIABLE');
    //     
    //      END IF;
    //      
    //      :GLOBAL.BLOQUE:='CRTHISTDOC_VEN';
    //      :GLOBAL.CANVAS:='CAN_VENCIDOS';
    // END;
    // 
    // 
    //        
    //        
    //        
    //    
    //#endregion
    async CRFCONSG_crthistdoc_vencidos_whenCheckboxChanged() {
        console.log("Entering CRFCONSG_crthistdoc_vencidos_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let V_NOMUSU: string = null;
        let V_OFICIAL: null = null;
        let V_NOMOFICIAL: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_vencidos_whencheckboxchanged_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_vencidos_whencheckboxchanged_query2", payload2);
        // get values from result
        V_NOMUSU = result2[0].get("V_NOMUSU");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_vencidos_whencheckboxchanged_query3", payload3);
        // get values from result
        V_OFICIAL = result3[0].get("V_OFICIAL");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result4 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_vencidos_whencheckboxchanged_query4", payload4);
        // get values from result
        V_NOMOFICIAL = result4[0].get("V_NOMOFICIAL");
        if (result4 == null || result4.length == 0) {

        }

        if (["DC", "TC", "XX"].indexOf(TIPO_PERSONA == null ? "XX" : TIPO_PERSONA) != -1) {
            this.VARIABLE.USCIAL = this.BASE.USUARIO;
            this.VARIABLE.NOM_COMERCIAL = V_NOMUSU;
            this.VARIABLE.USOFID = V_OFICIAL;
            this.VARIABLE.NOM_OFICIAL = V_NOMOFICIAL;
            this.oracleFormsBuiltins.set_item_property("VARIABLE.USCIAL", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CAN_VENCIDOS");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (["SR", "PR", "GC", "GF", "GO", "SO"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.go_block("VARIABLE");
        }
        else if (TIPO_PERSONA == "OD") {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.USCIAL", "ENABLED", "ATTR_OFF");
            this.VARIABLE.USOFID = this.BASE.USUARIO;
            this.VARIABLE.NOM_OFICIAL = V_NOMUSU;
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CAN_VENCIDOS");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
        }
        else if (["JO", "SO"].indexOf(TIPO_PERSONA) != -1) {
            this.VARIABLE.USOFID = null;
            this.VARIABLE.USCIAL = null;
            this.oracleFormsBuiltins.go_block("VARIABLE");
        }
        // this.GLOBAL.BLOQUE = "CRTHISTDOC_VEN";
        this._GLOBAL_SERVICE.set("CANVAS", "CAN_VENCIDOS");
        console.log("Exiting CRFCONSG_crthistdoc_vencidos_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  V_NOMUSU VARCHAR2(100);
    //  V_OFICIAL SETCOMCIA.COM_USOPER%TYPE;
    //  V_NOMOFICIAL VARCHAR2(100);
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //       AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMUSU
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //       AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //       ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      BEGIN
    //      SELECT COM_USOPER
    //       INTO V_OFICIAL
    //      FROM SETCOMCIA
    //      WHERE COM_USORAC=USER
    //      AND COM_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END;
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMOFICIAL
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=V_OFICIAL
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      
    //      IF NVL(TIPO_PERSONA,'XX') IN ('DC','TC','XX') THEN
    //        :VARIABLE.USCIAL:=:BASE.USUARIO;
    //        :VARIABLE.NOM_COMERCIAL:=V_NOMUSU;
    //        :VARIABLE.USOFID:=V_OFICIAL;
    //        :VARIABLE.NOM_OFICIAL:=V_NOMOFICIAL;
    //        SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //        SHOW_VIEW('CAN_HOY');
    //        GO_BLOCK('SOLICITUDES');
    //        EXECUTE_QUERY;
    //      ELSIF TIPO_PERSONA IN ('SR','PR','GC','GF','GO','SO')THEN
    //            GO_BLOCK('VARIABLE');
    //      ELSIF  TIPO_PERSONA ='OD' THEN
    //             SET_ITEM_PROPERTY('VARIABLE.USCIAL',ENABLED,"ATTR_OFF");
    //             :VARIABLE.USOFID:=:BASE.USUARIO;
    //             :VARIABLE.NOM_OFICIAL:=V_NOMUSU;
    //             GO_BLOCK('SOLICITUDES');
    //             EXECUTE_QUERY;
    //             SHOW_VIEW('CAN_HOY');
    //             GO_BLOCK('SOLICITUDES');
    //      ELSIF TIPO_PERSONA IN ('JO','SO') THEN
    //            SET_BLOCK_PROPERTY('SOLICITUDES',QUERY_ALLOWED,"PROPERTY_FALSE");
    //           GO_BLOCK('VARIABLE');
    //     
    //      END IF;
    //      :GLOBAL.BLOQUE:='CRTHISTDOC_HOY';
    //      :GLOBAL.CANVAS:='CAN_HOY';
    // END;
    //#endregion
    async CRFCONSG_crthistdoc_venHoy_whenCheckboxChanged() {
        console.log("Entering CRFCONSG_crthistdoc_venHoy_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let V_NOMUSU: string = null;
        let V_OFICIAL: null = null;
        let V_NOMOFICIAL: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venhoy_whencheckboxchanged_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venhoy_whencheckboxchanged_query2", payload2);
        // get values from result
        V_NOMUSU = result2[0].get("V_NOMUSU");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venhoy_whencheckboxchanged_query3", payload3);
        // get values from result
        V_OFICIAL = result3[0].get("V_OFICIAL");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result4 = await Rest.post("/crfconsg_crthistdoc/crfconsg_crthistdoc_venhoy_whencheckboxchanged_query4", payload4);
        // get values from result
        V_NOMOFICIAL = result4[0].get("V_NOMOFICIAL");
        if (result4 == null || result4.length == 0) {

        }

        if (["DC", "TC", "XX"].indexOf(TIPO_PERSONA == null ? "XX" : TIPO_PERSONA) != -1) {
            this.VARIABLE.USCIAL = this.BASE.USUARIO;
            this.VARIABLE.NOM_COMERCIAL = V_NOMUSU;
            this.VARIABLE.USOFID = V_OFICIAL;
            this.VARIABLE.NOM_OFICIAL = V_NOMOFICIAL;
            this.oracleFormsBuiltins.set_item_property("VARIABLE.USCIAL", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CAN_HOY");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (["SR", "PR", "GC", "GF", "GO", "SO"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.go_block("VARIABLE");
        }
        else if (TIPO_PERSONA == "OD") {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.USCIAL", "ENABLED", "ATTR_OFF");
            this.VARIABLE.USOFID = this.BASE.USUARIO;
            this.VARIABLE.NOM_OFICIAL = V_NOMUSU;
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CAN_HOY");
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
        }
        else if (["JO", "SO"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_block_property("SOLICITUDES", "QUERY_ALLOWED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.go_block("VARIABLE");
        }
        // this.GLOBAL.BLOQUE = "CRTHISTDOC_HOY";
        this._GLOBAL_SERVICE.set("CANVAS", "CAN_HOY");
        console.log("Exiting CRFCONSG_crthistdoc_venHoy_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CAN_FUT');
    // GO_ITEM('VEN_FUTUROS');
    // :CRTHISTDOC.VEN_FUTUROS:=NULL;
    // :VARIABLE.USCIAL:=NULL;
    // :VARIABLE.NOM_COMERCIAL:=NULL;
    // :VARIABLE.NOM_OFICIAL:=NULL;
    // :VARIABLE.USOFID:=NULL; END;
    //#endregion
    async CRFCONSG_crthistdoc_volverFut_whenButtonPressed() {
        console.log("Entering CRFCONSG_crthistdoc_volverFut_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CAN_FUT");
        this.oracleFormsBuiltins.go_item("VEN_FUTUROS");
        this.CRTHISTDOC.VEN_FUTUROS = null;
        this.VARIABLE.USCIAL = null;
        this.VARIABLE.NOM_COMERCIAL = null;
        this.VARIABLE.NOM_OFICIAL = null;
        this.VARIABLE.USOFID = null;
        console.log("Exiting CRFCONSG_crthistdoc_volverFut_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFCONSG_solicitudes_keyCommit() {
        console.log("Entering CRFCONSG_solicitudes_keyCommit");
        console.log("Exiting CRFCONSG_solicitudes_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_SEGOPE_CONSUTAS.TAB_SOLIC;
    // BEGIN
    // PQBD_COL_SEGOPE_CONSUTAS.PBD_CONSULTA(BK_DATA, :VEN_HOY, :VENCIDOS, :VEN_FUTUROS, :VARIABLE.USCIAL, :VARIABLE.USOFID, :this.PARAMETER.get("P_UNIDAD"));
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'SOLICITUDES');
    // END;
    //#endregion
    async CRFCONSG_solicitudes_queryProcedure() {
        console.log("Entering CRFCONSG_solicitudes_queryProcedure");
        let BK_DATA: null = null;
        // CRFCONSG_PQBD_COL_SEGOPE_CONSUTAS.PBD_CONSULTA(BK_DATA, VEN_HOY, VENCIDOS, VEN_FUTUROS, VARIABLE.USCIAL, VARIABLE.USOFID, this.PARAMETER.get("P_UNIDAD"));
        // CRFCONSG_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "SOLICITUDES");
        console.log("Exiting CRFCONSG_solicitudes_queryProcedure");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :SOLICITUDES.NOMCIAL
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:SOLICITUDES.COMERCIAL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //   ----------------------------
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
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('SEGUIMIENTO_DOCUMEN',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=1;
    // END;
    // 
    // END IF;
    // END;
    //#endregion
    async CRFCONSG_solicitudes_postQuery() {
        console.log("Entering CRFCONSG_solicitudes_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("COMERCIAL", this.SOLICITUDES.COMERCIAL);
        // call REST API
        const result1 = await Rest.post("/crfconsg_solicitudes/crfconsg_solicitudes_postquery_query1", payload1);
        // get values from result
        this.SOLICITUDES.NOMCIAL = result1[0].get("SOLICITUDES.NOMCIAL");
        if (result1 == null || result1.length == 0) {

        }

        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        if (this.VARIABLE.CONTADOR == null ? 0 : this.VARIABLE.CONTADOR == 0) {
            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                // payload2.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
                // call REST API
                const result2 = await Rest.post("/crfconsg_solicitudes/crfconsg_solicitudes_postquery_query2", payload2);
                // get values from result
                V_OPCION = result2[0].get("V_OPCION");
            } catch (ex) {

                V_OPCION = null;
            }

            // CRFCONSG_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("SEGUIMIENTO_DOCUMEN", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
            this.VARIABLE.CONTADOR = 1;
        }
        console.log("Exiting CRFCONSG_solicitudes_postQuery");
    }

    //#region PLSQL
    // BEGIN IF (FORM_SUCCESS) THEN
    //     IF (ERROR_CODE = 40733) THEN
    //      --MESSAGE('PASO');PAUSE;
    //         SET_ALERT_PROPERTY('MSG_PRECAUCION',ALERT_MESSAGE_TEXT,
    //                            'NO SE OBTUVIERON DATOS PARA EL CRITERIO DE CONSULTA');
    //     END IF;
    // END IF; END;
    //#endregion
    async CRFCONSG_solicitudes_o() {
        console.log("Entering CRFCONSG_solicitudes_o");
        if (this.oracleFormsBuiltins.form_success()) {
            if (this.oracleFormsBuiltins.error_code() == 40733) {
                this.oracleFormsBuiltins.set_alert_property("MSG_PRECAUCION", "ALERT_MESSAGE_TEXT", "NO SE OBTUVIERON DATOS PARA EL CRITERIO DE CONSULTA");
            }
        }
        console.log("Exiting CRFCONSG_solicitudes_o");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCONSG_crthistdocHoy_keyNxtblk() {
        console.log("Entering CRFCONSG_crthistdocHoy_keyNxtblk");
        console.log("Exiting CRFCONSG_crthistdocHoy_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC.DESUSU_HOY
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:CRTHISTDOC.HISTDO_USUARI
    //    AND USU_CODUNI = :CRTHISTDOC.HISTDO_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //   
    //   BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC_HOY.DESUSUARIO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:CRTHISTDOC_HOY.HISTDO_USUARI
    //   AND USU_CODUNI = :CRTHISTDOC.HISTDO_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END; 
    //   
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :CRTHISTDOC_HOY.BENEFICIARIO
    //    FROM TER
    //    WHERE TERCOD=:CRTHISTDOC_HOY.HISTDO_NITTER
    // 
    //    ;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFCONSG_crthistdocHoy_postQuery() {
        console.log("Entering CRFCONSG_crthistdocHoy_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
        payload1.set("HISTDO_CODUNI", this.CRTHISTDOC.HISTDO_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc_hoy/crfconsg_crthistdochoy_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC.DESUSU_HOY = result1[0].get("CRTHISTDOC.DESUSU_HOY");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("HISTDO_USUARI", this.CRTHISTDOC_HOY.HISTDO_USUARI);
        payload2.set("HISTDO_CODUNI", this.CRTHISTDOC.HISTDO_CODUNI);
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc_hoy/crfconsg_crthistdochoy_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC_HOY.DESUSUARIO = result2[0].get("CRTHISTDOC_HOY.DESUSUARIO");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("HISTDO_NITTER", this.CRTHISTDOC_HOY.HISTDO_NITTER);
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc_hoy/crfconsg_crthistdochoy_postquery_query3", payload3);
        // get values from result
        this.CRTHISTDOC_HOY.BENEFICIARIO = result3[0].get("CRTHISTDOC_HOY.BENEFICIARIO");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting CRFCONSG_crthistdocHoy_postQuery");
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
    async CRFCONSG_crthistdocHoy_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFCONSG_crthistdocHoy_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC_HOY.HISTDO_ESTSEG) != -1) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCONSG_crthistdocHoy_histdoEstseg_whenValidateItem");
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
    async CRFCONSG_crthistdocHoy_listaDoc_whenButtonPressed() {
        console.log("Entering CRFCONSG_crthistdocHoy_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("HISTDOC_ESTDOC");
        }
        console.log("Exiting CRFCONSG_crthistdocHoy_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  LISTA1 BOOLEAN;
    //  LISTA2 BOOLEAN;
    //  V_NOMUSU VARCHAR2(100);
    //  V_OFICIAL SETCOMCIA.COM_USOPER%TYPE;
    //  V_NOMOFICIAL VARCHAR2(100);
    //  
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //       BEGIN
    //      SELECT COM_USOPER
    //       INTO V_OFICIAL
    //       FROM SETCOMCIA
    //      WHERE COM_USORAC=USER
    //      AND COM_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END;
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMOFICIAL
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=V_OFICIAL
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      IF TIPO_PERSONA='SR' THEN
    //         LISTA1:=SHOW_LOV('LOV_USUARIOS1',0,95);
    //          :VARIABLE.USOFID:=V_OFICIAL;
    //        :VARIABLE.NOM_OFICIAL:=V_NOMOFICIAL;
    //         GO_BLOCK('SOLICITUDES');
    //         EXECUTE_QUERY;
    //      ELSIF  TIPO_PERSONA IN ('PR','GC','GO','SO','JO','OD') THEN
    //         LISTA2:=SHOW_LOV('LOV_USUARIOS2',0,95);
    //         GO_BLOCK('SOLICITUDES');
    //         EXECUTE_QUERY;
    //      END IF;
    // 
    // END;
    //#endregion
    async CRFCONSG_variable_uscial_keyListval() {
        console.log("Entering CRFCONSG_variable_uscial_keyListval");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let LISTA1: boolean = null;
        let LISTA2: boolean = null;
        let V_NOMUSU: string = null;
        let V_OFICIAL: null = null;
        let V_NOMOFICIAL: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfconsg_variable/crfconsg_variable_uscial_keylistval_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfconsg_variable/crfconsg_variable_uscial_keylistval_query2", payload2);
        // get values from result
        V_OFICIAL = result2[0].get("V_OFICIAL");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfconsg_variable/crfconsg_variable_uscial_keylistval_query3", payload3);
        // get values from result
        V_NOMOFICIAL = result3[0].get("V_NOMOFICIAL");
        if (result3 == null || result3.length == 0) {

        }

        if (TIPO_PERSONA == "SR") {
            LISTA1 = this.oracleFormsBuiltins.show_lov("LOV_USUARIOS1", 0, 95);
            this.VARIABLE.USOFID = V_OFICIAL;
            this.VARIABLE.NOM_OFICIAL = V_NOMOFICIAL;
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (["PR", "GC", "GO", "SO", "JO", "OD"].indexOf(TIPO_PERSONA) != -1) {
            LISTA2 = this.oracleFormsBuiltins.show_lov("LOV_USUARIOS2", 0, 95);
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CRFCONSG_variable_uscial_keyListval");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  LISTA1 BOOLEAN;
    //  LISTA2 BOOLEAN;
    //  V_NOMUSU VARCHAR2(100);
    //  V_OFICIAL SETCOMCIA.COM_USOPER%TYPE;
    //  V_NOMOFICIAL VARCHAR2(100);
    //  
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //       AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //       BEGIN
    //      SELECT COM_USOPER
    //       INTO V_OFICIAL
    //       FROM SETCOMCIA
    //      WHERE COM_USORAC=USER
    //      AND COM_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END;
    //      
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO V_NOMOFICIAL
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=V_OFICIAL
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      
    //      IF TIPO_PERSONA='JO' THEN
    //         LISTA1:=SHOW_LOV('LOV_OFICIAL_G1',0,95);
    //         GO_BLOCK('SOLICITUDES');
    //         EXECUTE_QUERY;
    //      ELSIF  TIPO_PERSONA IN ('PR','GC','GO','SO','JO','OD') THEN
    //         LISTA2:=SHOW_LOV('LOV_OFICIALES',0,95);
    //         
    //      END IF;
    // 
    // END;
    //#endregion
    async CRFCONSG_variable_usofid_keyListval() {
        console.log("Entering CRFCONSG_variable_usofid_keyListval");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let LISTA1: boolean = null;
        let LISTA2: boolean = null;
        let V_NOMUSU: string = null;
        let V_OFICIAL: null = null;
        let V_NOMOFICIAL: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfconsg_variable/crfconsg_variable_usofid_keylistval_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfconsg_variable/crfconsg_variable_usofid_keylistval_query2", payload2);
        // get values from result
        V_OFICIAL = result2[0].get("V_OFICIAL");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfconsg_variable/crfconsg_variable_usofid_keylistval_query3", payload3);
        // get values from result
        V_NOMOFICIAL = result3[0].get("V_NOMOFICIAL");
        if (result3 == null || result3.length == 0) {

        }

        if (TIPO_PERSONA == "JO") {
            LISTA1 = this.oracleFormsBuiltins.show_lov("LOV_OFICIAL_G1", 0, 95);
            this.oracleFormsBuiltins.go_block("SOLICITUDES");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (["PR", "GC", "GO", "SO", "JO", "OD"].indexOf(TIPO_PERSONA) != -1) {
            LISTA2 = this.oracleFormsBuiltins.show_lov("LOV_OFICIALES", 0, 95);
        }
        console.log("Exiting CRFCONSG_variable_usofid_keyListval");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCONSG_crthistdocVen_keyNxtblk() {
        console.log("Entering CRFCONSG_crthistdocVen_keyNxtblk");
        console.log("Exiting CRFCONSG_crthistdocVen_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC.DESUSU_VEN
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:CRTHISTDOC.HISTDO_USUARI
    //     AND USU_CODUNI = :CRTHISTDOC.HISTDO_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //   BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTHISTDOC_VEN.DESUSUARIO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO =:CRTHISTDOC_VEN.HISTDO_USUARI
    //     AND USU_CODUNI = :CRTHISTDOC.HISTDO_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END; 
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :CRTHISTDOC_VEN.BENEFICIARIO
    //    FROM TER
    //    WHERE TERCOD=:CRTHISTDOC_VEN.HISTDO_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //#endregion
    async CRFCONSG_crthistdocVen_postQuery() {
        console.log("Entering CRFCONSG_crthistdocVen_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC.HISTDO_USUARI);
        payload1.set("HISTDO_CODUNI", this.CRTHISTDOC.HISTDO_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfconsg_crthistdoc_ven/crfconsg_crthistdocven_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC.DESUSU_VEN = result1[0].get("CRTHISTDOC.DESUSU_VEN");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("HISTDO_USUARI", this.CRTHISTDOC_VEN.HISTDO_USUARI);
        payload2.set("HISTDO_CODUNI", this.CRTHISTDOC.HISTDO_CODUNI);
        // call REST API
        const result2 = await Rest.post("/crfconsg_crthistdoc_ven/crfconsg_crthistdocven_postquery_query2", payload2);
        // get values from result
        this.CRTHISTDOC_VEN.DESUSUARIO = result2[0].get("CRTHISTDOC_VEN.DESUSUARIO");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("HISTDO_NITTER", this.CRTHISTDOC_VEN.HISTDO_NITTER);
        // call REST API
        const result3 = await Rest.post("/crfconsg_crthistdoc_ven/crfconsg_crthistdocven_postquery_query3", payload3);
        // get values from result
        this.CRTHISTDOC_VEN.BENEFICIARIO = result3[0].get("CRTHISTDOC_VEN.BENEFICIARIO");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting CRFCONSG_crthistdocVen_postQuery");
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
    async CRFCONSG_crthistdocVen_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFCONSG_crthistdocVen_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTHISTDOC_HOY.HISTDO_ESTSEG) != -1) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCONSG_crthistdocVen_histdoEstseg_whenValidateItem");
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
    async CRFCONSG_crthistdocVen_listaDoc_whenButtonPressed() {
        console.log("Entering CRFCONSG_crthistdocVen_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFCONSG_LIB$ALERTA("MENSAJE", "NO EXISTEN DOCUMENTOS PARAMETRIZADOS.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("HISTDOC_ESTDOC");
        }
        console.log("Exiting CRFCONSG_crthistdocVen_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSG_toolbar_whenButtonPressed() {
        console.log("Entering CRFCONSG_toolbar_whenButtonPressed");
        console.log("Exiting CRFCONSG_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSG_toolbar_whenMouseLeave() {
        console.log("Entering CRFCONSG_toolbar_whenMouseLeave");
        console.log("Exiting CRFCONSG_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSG_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCONSG_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCONSG_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSG_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCONSG_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCONSG_base_fecha_whenNewItemInstance");
    }

}

