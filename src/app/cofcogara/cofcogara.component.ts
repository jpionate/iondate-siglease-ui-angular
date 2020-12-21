import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFCOGARA business logic
import {
    CRTCONTROL,
    CRTDOCPRE,
    BOTONES,
    CRTESTDOC,
    TOOLBAR,
    BASE
} from "./COFCOGARA_models";



// class COFCOGARA
@Component({
    selector: 'app-cofcogara',
    templateUrl: './cofcogara.component.html',
})
export class CofcogaraComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTCONTROL: CRTCONTROL = new CRTCONTROL();
    public CRTDOCPRE: CRTDOCPRE = new CRTDOCPRE();
    public BOTONES: BOTONES = new BOTONES();
    public CRTESTDOC: CRTESTDOC = new CRTESTDOC();
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
    async COFCOGARA_onClearDetails() {
        console.log("Entering COFCOGARA_onClearDetails");
        // COFCOGARA_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting COFCOGARA_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_whenMouseDoubleclick() {
        console.log("Entering COFCOGARA_whenMouseDoubleclick");
        console.log("Exiting COFCOGARA_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_preForm() {
        console.log("Entering COFCOGARA_preForm");
        console.log("Exiting COFCOGARA_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_whenNewFormInstance() {
        console.log("Entering COFCOGARA_whenNewFormInstance");
        console.log("Exiting COFCOGARA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async COFCOGARA_keyDown() {
        console.log("Entering COFCOGARA_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting COFCOGARA_keyDown");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTESTDOC DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTESTDOC_CUR IS      
    //     SELECT 1 FROM CRTESTDOC C     
    //     WHERE C.ESTDOC_OFCSOL = :CRTCONTROL.CONTROL_OFCSOL AND C.ESTDOC_CODSOL = :CRTCONTROL.CONTROL_CODSOL AND C.ESTDOC_TIPCRE = :CRTCONTROL.CONTROL_TIPCRE AND C.ESTDOC_PLANEA = :CRTCONTROL.CONTROL_PLANEA AND C.ESTDOC_NITTER = :CRTCONTROL.CONTROL_NITTER;
    //   --
    //   -- END CRTESTDOC DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTESTDOC DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTESTDOC_CUR;     
    //   FETCH CRTESTDOC_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTESTDOC_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTESTDOC_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTESTDOC_CUR;
    //   --
    //   -- END CRTESTDOC DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async COFCOGARA_crtcontrol_onCheckDeleteMaster() {
        console.log("Entering COFCOGARA_crtcontrol_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting COFCOGARA_crtcontrol_onCheckDeleteMaster");
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
    //   -- BEGIN CRTESTDOC DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTCONTROL.CONTROL_OFCSOL IS NOT NULL) OR (:CRTCONTROL.CONTROL_CODSOL IS NOT NULL) OR (:CRTCONTROL.CONTROL_TIPCRE IS NOT NULL) OR (:CRTCONTROL.CONTROL_PLANEA IS NOT NULL) OR (:CRTCONTROL.CONTROL_NITTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTCONTROL.CRTCONTROL_CRTESTDOC');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTESTDOC');   
    //   END IF;
    //   --
    //   -- END CRTESTDOC DETAIL PROGRAM SECTION
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
    async COFCOGARA_crtcontrol_onPopulateDetails() {
        console.log("Entering COFCOGARA_crtcontrol_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((((this.CRTCONTROL.CONTROL_OFCSOL != null) || (this.CRTCONTROL.CONTROL_CODSOL != null)) || (this.CRTCONTROL.CONTROL_TIPCRE != null)) || (this.CRTCONTROL.CONTROL_PLANEA != null)) || (this.CRTCONTROL.CONTROL_NITTER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTCONTROL.CRTCONTROL_CRTESTDOC");
            // COFCOGARA_QUERY_MASTER_DETAILS(REL_ID, "CRTESTDOC");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // COFCOGARA_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting COFCOGARA_crtcontrol_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //  
    //   BEGIN
    //   SELECT DECODE (TERPER,'N', TERNOM||' '||TERAPE,TERAPE)
    //     INTO :D_NITTER
    //     FROM TER
    //    WHERE TERCOD = :CONTROL_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN 
    //      LIB$DTNERFRMA('NO EXISTE UNA DESCRIPCIÓN PARA EL TERCERO');
    //    WHEN OTHERS THEN
    //       LIB$DTNERFRMA('ERROR AL CONSULTAR LA DESCRIPCIÓN DEL TERCERO.'||'-'||SQLERRM);
    //   END;
    //   
    //   BEGIN
    //   SELECT OFIDES
    //     INTO :D_OFCSOL
    //     FROM OFI
    //    WHERE OFICOD = :CONTROL_OFCSOL;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN 
    //      LIB$DTNERFRMA('NO EXISTE LA DESCRIPCIÓN DE LA OFICINA');
    //      --MESSAGE('NO HAY DATOS DE LA OFICINA');
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA('ERROR AL CONSULTAR LA DESCRIPCIÓN DE LA OFICINA'||'-'||SQLERRM);   
    //       --MESSAGE('ERROR 2');     
    //   END;
    // 
    // 
    //   BEGIN
    //   SELECT SOLICR_ESTSOL
    //    INTO :ESTADO_SOLIC
    //    FROM CRTSOLICR
    //   WHERE SOLICR_CODSOL = :CONTROL_CODSOL --000000065
    //     AND SOLICR_OFCSOL = :CONTROL_OFCSOL --020
    //     AND SOLICR_TIPCRE = :CONTROL_TIPCRE; --'03';
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('LA SOLICITUD NO TIENE ESTADO.');
    //   END;    
    // 
    // 
    //   BEGIN
    //   SELECT C.SOLICR_USOFID, S.USU_NOMBRE 
    //     INTO :SOLICR_USOFID, :OFI_DESEMBOLSO
    //     FROM CRTCONTROL T, CRTSOLICR C, SGUSUARIOS S
    //    WHERE T.CONTROL_OFCSOL = C.SOLICR_OFCSOL
    //      AND T.CONTROL_CODSOL = C.SOLICR_CODSOL
    //      AND C.SOLICR_USOFID  = S.USU_CODIGO(+)
    //      AND T.CONTROL_CODSOL = :CRTCONTROL.CONTROL_CODSOL   
    //      AND T.CONTROL_PLANEA = :CRTCONTROL.CONTROL_PLANEA
    //      AND T.CONTROL_TIPCRE = :CRTCONTROL.CONTROL_TIPCRE
    //      AND T.CONTROL_NITTER = :CRTCONTROL.CONTROL_NITTER; -- NUEVO SE ADICIONO EL 15/09/2009 MMJ     ;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('NO EXISTE OFICIAL DE DESEMBOLSO.');
    //     --MESSAGE('NO HAY OFICINA DE DESEMBOLSO');
    //    WHEN TOO_MANY_ROWS THEN                             
    //      LIB$DTNERFRMA('EXISTE MÁS DE UN REGISTRO PARA ESE NRO.CONTRATO.');     
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA('ERROR AL CONSULTAR EL OFICIAL DE DESEMBOLSO.'||'-'||SQLERRM);
    //       --MESSAGE('ERROR 3') ;
    //   END;    
    //    
    //  BEGIN   
    //  SELECT S.TLINCOD, S.TLINDES --USU_NOMBRE
    //    INTO :SOLICR_LINEADES, :LINEA_DESEMBOLSO
    //    FROM CRTCONTROL T, CRTSOLICR C, TLIN S
    //   WHERE T.CONTROL_OFCSOL  = C.SOLICR_OFCSOL
    //     AND T.CONTROL_CODSOL  = C.SOLICR_CODSOL
    //     AND C.SOLICR_LINEADES = S.TLINCOD (+)
    //     AND T.CONTROL_CODSOL  = :CRTCONTROL.CONTROL_CODSOL   
    //     AND T.CONTROL_PLANEA  = :CRTCONTROL.CONTROL_PLANEA
    //     AND T.CONTROL_TIPCRE  = :CRTCONTROL.CONTROL_TIPCRE
    //      AND T.CONTROL_NITTER  = :CRTCONTROL.CONTROL_NITTER; -- NUEVO SE ADICIONO EL 15/09/2009 MMJ     ;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE', 'NO HAY LINEAS DE DESEMBOLSOS.',NULL,NULL,NULL, T_RESPUESTA);
    //    --MESSAGE('NO HAY LINEAS DE DESEMBOLSOS');
    //     WHEN OTHERS THEN
    //     MESSAGE('ERROR AL COSNULTAR LA LINEA DE DESEMBOLSO.'||'-'||SQLERRM);
    //  END;    
    //     
    //    
    //  BEGIN  
    //  SELECT COLFAPE --COLCOD,CONTROL_PLANEA 
    //    INTO :FECHA_INI_CONTRATO
    //    FROM COL,CRTSOLICR --,CRTCONTROL
    //   WHERE COLSOLI  = SOLICR_CODSOL 
    //     AND COLOFSOL = SOLICR_OFCSOL 
    //     AND COLSOLI  = :CRTCONTROL.CONTROL_CODSOL -- 000001002
    //     AND COLCOD   = :CONTROL_PLANEA --007726
    //     AND COLTDOC  = :CRTCONTROL.CONTROL_TIPCRE; --03
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO HAY DATOS DE FECHA DEL CONTRATO.');  
    //    --LIB$ALERTA('MENSAJE', 'NO HAY DATOS DE FECHA DE INICIO DEL CONTRATO.',NULL,NULL,NULL, T_RESPUESTA);
    //     --MESSAGE('NO HAY DATOS DE FECHA DEL CONTRATO');
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA('ERROR AL CONSULTAR LA FECHA DEL CONTRATO.');        
    //       --MESSAGE('ERROR 5'); 
    //  END; 
    // 
    // END;
    //#endregion
    async COFCOGARA_crtcontrol_postQuery() {
        console.log("Entering COFCOGARA_crtcontrol_postQuery");
        let T_RESPUESTA: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("CONTROL_NITTER", CONTROL_NITTER);
            // call REST API
            const result1 = await Rest.post("/cofcogara_crtcontrol/cofcogara_crtcontrol_postquery_query1", payload1);
            // get values from result
            // D_NITTER = result1[0].get("D_NITTER");
            if (result1 == null || result1.length == 0) {

                // COFCOGARA_LIB$DTNERFRMA("NO EXISTE UNA DESCRIPCIÓN PARA EL TERCERO");
            }

        } catch (ex) {

            // COFCOGARA_LIB$DTNERFRMA("ERROR AL CONSULTAR LA DESCRIPCIÓN DEL TERCERO." + "-" + SQLERRM);
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            // payload2.set("CONTROL_OFCSOL", CONTROL_OFCSOL);
            // call REST API
            const result2 = await Rest.post("/cofcogara_crtcontrol/cofcogara_crtcontrol_postquery_query2", payload2);
            // get values from result
            // D_OFCSOL = result2[0].get("D_OFCSOL");
            if (result2 == null || result2.length == 0) {

                // COFCOGARA_LIB$DTNERFRMA("NO EXISTE LA DESCRIPCIÓN DE LA OFICINA");
            }

        } catch (ex) {

            // COFCOGARA_LIB$DTNERFRMA("ERROR AL CONSULTAR LA DESCRIPCIÓN DE LA OFICINA" + "-" + SQLERRM);
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("CONTROL_CODSOL", CONTROL_CODSOL);
        // payload3.set("CONTROL_OFCSOL", CONTROL_OFCSOL);
        // payload3.set("CONTROL_TIPCRE", CONTROL_TIPCRE);
        // call REST API
        const result3 = await Rest.post("/cofcogara_crtcontrol/cofcogara_crtcontrol_postquery_query3", payload3);
        // get values from result
        // ESTADO_SOLIC = result3[0].get("ESTADO_SOLIC");
        if (result3 == null || result3.length == 0) {

            // COFCOGARA_LIB$DTNERFRMA("LA SOLICITUD NO TIENE ESTADO.");
        }

        let result4 = new Map();
        try {

            // construct payload
            let payload4 = new Map();
            payload4.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            payload4.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
            payload4.set("CONTROL_TIPCRE", this.CRTCONTROL.CONTROL_TIPCRE);
            payload4.set("CONTROL_NITTER", this.CRTCONTROL.CONTROL_NITTER);
            // call REST API
            const result4 = await Rest.post("/cofcogara_crtcontrol/cofcogara_crtcontrol_postquery_query4", payload4);
            // get values from result
            // SOLICR_USOFID = result4[0].get("SOLICR_USOFID");
            // OFI_DESEMBOLSO = result4[0].get("OFI_DESEMBOLSO");
            if (result4 == null || result4.length == 0) {

                // COFCOGARA_LIB$DTNERFRMA("NO EXISTE OFICIAL DE DESEMBOLSO.");
            }

        } catch (ex) {

            // COFCOGARA_LIB$DTNERFRMA("ERROR AL CONSULTAR EL OFICIAL DE DESEMBOLSO." + "-" + SQLERRM);
        }

        let result5 = new Map();
        try {

            // construct payload
            let payload5 = new Map();
            payload5.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            payload5.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
            payload5.set("CONTROL_TIPCRE", this.CRTCONTROL.CONTROL_TIPCRE);
            payload5.set("CONTROL_NITTER", this.CRTCONTROL.CONTROL_NITTER);
            // call REST API
            const result5 = await Rest.post("/cofcogara_crtcontrol/cofcogara_crtcontrol_postquery_query5", payload5);
            // get values from result
            // SOLICR_LINEADES = result5[0].get("SOLICR_LINEADES");
            // LINEA_DESEMBOLSO = result5[0].get("LINEA_DESEMBOLSO");
            if (result5 == null || result5.length == 0) {

                // COFCOGARA_LIB$ALERTA("MENSAJE", "NO HAY LINEAS DE DESEMBOLSOS.", null, null, null, T_RESPUESTA);
            }

        } catch (ex) {

            // this.oracleFormsBuiltins.message("ERROR AL COSNULTAR LA LINEA DE DESEMBOLSO." + "-" + SQLERRM);
        }

        let result6 = new Map();
        try {

            // construct payload
            let payload6 = new Map();
            payload6.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            payload6.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
            payload6.set("CONTROL_TIPCRE", this.CRTCONTROL.CONTROL_TIPCRE);
            // call REST API
            const result6 = await Rest.post("/cofcogara_crtcontrol/cofcogara_crtcontrol_postquery_query6", payload6);
            // get values from result
            this.CRTCONTROL.FECHA_INI_CONTRATO = result6[0].get("FECHA_INI_CONTRATO");
            if (result6 == null || result6.length == 0) {

                // COFCOGARA_LIB$DTNERFRMA("NO HAY DATOS DE FECHA DEL CONTRATO.");
            }

        } catch (ex) {

            // COFCOGARA_LIB$DTNERFRMA("ERROR AL CONSULTAR LA FECHA DEL CONTRATO.");
        }

        console.log("Exiting COFCOGARA_crtcontrol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('L_PLANEA') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_BLOCK('CRTESTDOC');
    //   EXECUTE_QUERY;
    //  END IF;
    // END; 
    //#endregion
    async COFCOGARA_crtcontrol_lista_whenButtonPressed() {
        console.log("Entering COFCOGARA_crtcontrol_lista_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("L_PLANEA"))) {
            // COFCOGARA_LIB$ALERTA("MENSAJE", "NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTESTDOC");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting COFCOGARA_crtcontrol_lista_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ESTDOC_CODDOC'); END;
    //#endregion
    async COFCOGARA_crtcontrol_fechaIniContrato_keyNextItem() {
        console.log("Entering COFCOGARA_crtcontrol_fechaIniContrato_keyNextItem");
        this.oracleFormsBuiltins.go_item("ESTDOC_CODDOC");
        console.log("Exiting COFCOGARA_crtcontrol_fechaIniContrato_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT USU_NOMBRE
    //     INTO :D_USUARIO
    //     FROM SGUSUARIOS
    //    WHERE USU_CODIGO=:CRTDOCPRE.DOCPRE_USUARI;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN NULL;
    //      LIB$ALERTA('MENSAJE', 'NO EXISTE SOLICITANTE.',NULL,NULL,NULL, T_RESPUESTA);
    // END; 
    //#endregion
    async COFCOGARA_crtdocpre_postQuery() {
        console.log("Entering COFCOGARA_crtdocpre_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("DOCPRE_USUARI", this.CRTDOCPRE.DOCPRE_USUARI);
        // call REST API
        const result1 = await Rest.post("/cofcogara_crtdocpre/cofcogara_crtdocpre_postquery_query1", payload1);
        // get values from result
        this.CRTDOCPRE.D_USUARIO = result1[0].get("D_USUARIO");
        if (result1 == null || result1.length == 0) {

            // COFCOGARA_LIB$ALERTA("MENSAJE", "NO EXISTE SOLICITANTE.", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting COFCOGARA_crtdocpre_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //    ED_ID   EDITOR; 
    //    VAL     VARCHAR2(500); 
    //    ED_OK   BOOLEAN; 
    // BEGIN
    //  ED_ID := FIND_EDITOR('EDITOR_SEGUI');
    //   VAL := :DOCPRE_SEGUIM; 
    //  SHOW_EDITOR( ED_ID, VAL, 100,180, VAL, ED_OK); 
    //  IF ED_OK THEN 
    //    :DOCPRE_SEGUIM := VAL; 
    //  END IF; 
    // END; 
    //#endregion
    async COFCOGARA_crtdocpre_editor_whenButtonPressed() {
        console.log("Entering COFCOGARA_crtdocpre_editor_whenButtonPressed");
        let ED_ID: null = null;
        let VAL: string = null;
        let ED_OK: boolean = null;
        ED_ID = this.oracleFormsBuiltins.find_editor("EDITOR_SEGUI");
        VAL = this.CRTDOCPRE.DOCPRE_SEGUIM;
        this.oracleFormsBuiltins.show_editor(ED_ID, VAL, 100, 180, VAL, ED_OK);
        if (ED_OK) {
            this.CRTDOCPRE.DOCPRE_SEGUIM = VAL;
        }
        console.log("Exiting COFCOGARA_crtdocpre_editor_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTDOCPRE DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTDOCPRE_CUR IS      
    //     SELECT 1 FROM CRTDOCPRE C     
    //     WHERE C.DOCPRE_OFCSOL = :CRTESTDOC.ESTDOC_OFCSOL AND C.DOCPRE_CODSOL = :CRTESTDOC.ESTDOC_CODSOL AND C.DOCPRE_NITTER = :CRTESTDOC.ESTDOC_NITTER AND C.DOCPRE_CODDOC = :CRTESTDOC.ESTDOC_CODDOC AND C.DOCPRE_TIPCRE = :CRTESTDOC.ESTDOC_TIPCRE AND C.DOCPRE_PLANEA = :CRTESTDOC.ESTDOC_PLANEA AND C.DOCPRE_CODOPER = :CRTESTDOC.ESTDOC_CODOPER;
    //   --
    //   -- END CRTDOCPRE DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTDOCPRE DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTDOCPRE_CUR;     
    //   FETCH CRTDOCPRE_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTDOCPRE_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTDOCPRE_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTDOCPRE_CUR;
    //   --
    //   -- END CRTDOCPRE DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async COFCOGARA_crtestdoc_onCheckDeleteMaster() {
        console.log("Entering COFCOGARA_crtestdoc_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting COFCOGARA_crtestdoc_onCheckDeleteMaster");
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
    //   -- BEGIN CRTDOCPRE DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTESTDOC.ESTDOC_OFCSOL IS NOT NULL) OR (:CRTESTDOC.ESTDOC_CODSOL IS NOT NULL) OR (:CRTESTDOC.ESTDOC_NITTER IS NOT NULL) OR (:CRTESTDOC.ESTDOC_CODDOC IS NOT NULL) OR (:CRTESTDOC.ESTDOC_TIPCRE IS NOT NULL) OR (:CRTESTDOC.ESTDOC_PLANEA IS NOT NULL) OR (:CRTESTDOC.ESTDOC_CODOPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTESTDOC.CRTESTDOC_CRTDOCPRE');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTDOCPRE');   
    //   END IF;
    //   --
    //   -- END CRTDOCPRE DETAIL PROGRAM SECTION
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
    async COFCOGARA_crtestdoc_onPopulateDetails() {
        console.log("Entering COFCOGARA_crtestdoc_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((((((this.CRTESTDOC.ESTDOC_OFCSOL != null) || (this.CRTESTDOC.ESTDOC_CODSOL != null)) || (this.CRTESTDOC.ESTDOC_NITTER != null)) || (this.CRTESTDOC.ESTDOC_CODDOC != null)) || (this.CRTESTDOC.ESTDOC_TIPCRE != null)) || (this.CRTESTDOC.ESTDOC_PLANEA != null)) || (this.CRTESTDOC.ESTDOC_CODOPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTESTDOC.CRTESTDOC_CRTDOCPRE");
            // COFCOGARA_QUERY_MASTER_DETAILS(REL_ID, "CRTDOCPRE");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // COFCOGARA_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting COFCOGARA_crtestdoc_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA    NUMBER; 
    // BEGIN
    // -- LIB$DTNERFRMA('AQUI VA EL MENSAJE');  --LIBRERIA PARA MOSTRAR MENSAJE Y REALIZAR RAISE...
    // -- LIB$ALERTA('MENSAJE','AQUI VA EL MENSAJE',NULL,'ACEPTAR','RECHAZAR', T_RESPUESTA);
    //   SELECT DOCSOL_DESCRI
    //     INTO :D_DOCUMENTO
    //     FROM CRTDOCSOL 
    //    WHERE DOCSOL_CODIGO = :ESTDOC_CODDOC;
    //     -- AND DOCSOL_CODTOP = :ESTDOC_CODOPER; --ENRIQUE RAMIREZ 2008/08/08
    //     -- AND DOCSOL_CODTOP = '902';
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE DESCRIPCION DEL DOCUMENTO.');
    //    --MESSAGE('NO EXISTE DESCRIPCION DEL DOCUMENTO.');
    //    WHEN OTHERS THEN
    //    LIB$DTNERFRMA('ERROR AL CONSULTAR EL DOCUMENTO.'||'-'||SQLERRM);   
    //    --MESSAGE('ERROR AL CONSULTAR EL DOCUMENTO.');
    // END;
    // 
    // 
    // 
    // /*
    // IF :ESTDOC_VBOFIC = 'OK' AND :ESTDOC_PRESTA = 'PR' THEN
    //  SET_ITEM_PROPERTY('CONTROL_PRESTAMO',ENABLED,"PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('CONTROL_PRESTAMO',NAVIGABLE,"PROPERTY_TRUE");
    // ELSE
    //  SET_ITEM_PROPERTY('CONTROL_PRESTAMO',ENABLED,"PROPERTY_FALSE");
    //  SET_ITEM_PROPERTY('CONTROL_PRESTAMO',NAVIGABLE,"PROPERTY_FALSE");
    // END IF;
    // */
    //#endregion
    async COFCOGARA_crtestdoc_postQuery() {
        console.log("Entering COFCOGARA_crtestdoc_postQuery");
        let T_RESPUESTA: number = null;
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("ESTDOC_CODDOC", this.CRTESTDOC.ESTDOC_CODDOC);
            // call REST API
            const result1 = await Rest.post("/cofcogara_crtestdoc/cofcogara_crtestdoc_postquery_query1", payload1);
            // get values from result
            this.CRTESTDOC.D_DOCUMENTO = result1[0].get("D_DOCUMENTO");
            if (result1 == null || result1.length == 0) {

                // COFCOGARA_LIB$DTNERFRMA("NO EXISTE DESCRIPCION DEL DOCUMENTO.");
            }

        } catch (ex) {

            // COFCOGARA_LIB$DTNERFRMA("ERROR AL CONSULTAR EL DOCUMENTO." + "-" + SQLERRM);
        }

        console.log("Exiting COFCOGARA_crtestdoc_postQuery");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_toolbar_whenButtonPressed() {
        console.log("Entering COFCOGARA_toolbar_whenButtonPressed");
        console.log("Exiting COFCOGARA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_toolbar_whenMouseLeave() {
        console.log("Entering COFCOGARA_toolbar_whenMouseLeave");
        console.log("Exiting COFCOGARA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_toolbar_whenNewFormInstance() {
        console.log("Entering COFCOGARA_toolbar_whenNewFormInstance");
        console.log("Exiting COFCOGARA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCOGARA_base_fecha_whenNewItemInstance() {
        console.log("Entering COFCOGARA_base_fecha_whenNewItemInstance");
        console.log("Exiting COFCOGARA_base_fecha_whenNewItemInstance");
    }

}

