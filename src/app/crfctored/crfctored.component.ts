import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCTORED business logic
import {
    PCLINEA,
    CDETNORADIC,
    RSPLAZA,
    CDETALLE,
    BNORADICA,
    BRADICA,
    PARAMETROS,
    CDETALLE2,
    TOOLBAR,
    BBOTONES,
    CDETRADIC,
    BASE
} from "./CRFCTORED_models";



// class CRFCTORED
@Component({
    selector: 'app-crfctored',
    templateUrl: './crfctored.component.html',
})
export class CrfctoredComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['PUSO', null],
        ['P_OFICINA', null],
        ['CODPLAZA', null],
        ['PEDITOR', null],
        ['PARCONG', null],
        ['PBLOACT', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PCLINEA: PCLINEA = new PCLINEA();
    public CDETNORADIC: CDETNORADIC = new CDETNORADIC();
    public RSPLAZA: RSPLAZA = new RSPLAZA();
    public CDETALLE: CDETALLE = new CDETALLE();
    public BNORADICA: BNORADICA = new BNORADICA();
    public BRADICA: BRADICA = new BRADICA();
    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public CDETALLE2: CDETALLE2 = new CDETALLE2();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BBOTONES: BBOTONES = new BBOTONES();
    public CDETRADIC: CDETRADIC = new CDETRADIC();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_onError() {
        console.log("Entering CRFCTORED_onError");
        console.log("Exiting CRFCTORED_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_whenMouseDoubleclick() {
        console.log("Entering CRFCTORED_whenMouseDoubleclick");
        console.log("Exiting CRFCTORED_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_preForm() {
        console.log("Entering CRFCTORED_preForm");
        console.log("Exiting CRFCTORED_preForm");
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
    async CRFCTORED_whenNewFormInstance() {
        console.log("Entering CRFCTORED_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfctored/crfctored_whennewforminstance_query1", payload1);
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

        // CRFCTORED_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCTORED_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CTIPRED;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_RESXRED(BK_DATA, :V_PLAZAS2, :V_FECINI, :V_FECFIN, :V_REDESC);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'PCLINEA');
    // END;
    //#endregion
    async CRFCTORED_pclinea_queryProcedure() {
        console.log("Entering CRFCTORED_pclinea_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_RESXRED(BK_DATA, V_PLAZAS2, V_FECINI, V_FECFIN, V_REDESC);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "PCLINEA");
        console.log("Exiting CRFCTORED_pclinea_queryProcedure");
    }

    //#region PLSQL
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
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('CONTRATOS_REDESCUENTO',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=1;
    // END;
    // 
    // END IF;
    // END;
    //#endregion
    async CRFCTORED_pclinea_postQuery() {
        console.log("Entering CRFCTORED_pclinea_postQuery");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        // if (CONTADOR == null ? 0 : CONTADOR == 0) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
        //         // call REST API
        //         const result1 = await Rest.post("/crfctored_pclinea/crfctored_pclinea_postquery_query1", payload1);
        //         // get values from result
        //         V_OPCION = result1[0].get("V_OPCION");
        //     } catch (ex) {

        //         V_OPCION = null;
        //     }

        //     CRFCTORED_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("CONTRATOS_REDESCUENTO", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
        //     this.PCLINEA.CONTADOR = 1;
        // }
        console.log("Exiting CRFCTORED_pclinea_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :V_VERDET = 'S' THEN
    //  GO_BLOCK('CDETALLE2');
    //  EXECUTE_QUERY;
    // ELSE
    //  :V_VERDET := 'N';
    // END IF; END;
    //#endregion
    async CRFCTORED_pclinea_vVerdet_whenCheckboxChanged() {
        console.log("Entering CRFCTORED_pclinea_vVerdet_whenCheckboxChanged");
        // if (V_VERDET == "S") {
        //     this.oracleFormsBuiltins.go_block("CDETALLE2");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.PCLINEA.V_VERDET = "N";
        // }
        console.log("Exiting CRFCTORED_pclinea_vVerdet_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CDETNORADICA;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_CDETNORADICA(BK_DATA, :V_PLAZAS4, :V_FECINI, :V_FECFIN, :V_REDESC3);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CDETNORADIC');
    // END;
    //#endregion
    async CRFCTORED_cdetnoradic_queryProcedure() {
        console.log("Entering CRFCTORED_cdetnoradic_queryProcedure");
        let BK_DATA: string = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_CDETNORADICA(BK_DATA, V_PLAZAS4, V_FECINI, V_FECFIN, V_REDESC3);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CDETNORADIC");
        console.log("Exiting CRFCTORED_cdetnoradic_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //  V_PLAZO       CRTSOLICR.SOLICR_PUNTS$%TYPE;
    //  V_SPREAD      COL.COLSPR%TYPE;
    //  V_PORCENTAJE  NUMBER;
    // BEGIN
    //  BEGIN
    //     SELECT C.COLSPR,
    //            C.COLPLACO,
    //            DECODE((SOLICR_BCODEX),'X',SOLICR_BCODXP,DECODE((SOLICR_IFI),'X',SOLICR_IFIP,
    //            DECODE((SOLICR_FINAGR),'X',SOLICR_FINAGP,DECODE((SOLICR_FINDTR),'X',SOLICR_FINDTP,
    //            DECODE((SOLICR_FNG),'X',SOLICR_FNGP,'XX'))))) ENTIDAD
    //       INTO V_SPREAD, V_PLAZO, V_PORCENTAJE
    //       FROM CRTSOLICR T, COL C
    //      WHERE T.SOLICR_OFCSOL = C.COLOFSOL
    //        AND T.SOLICR_CODSOL = C.COLSOLI
    //        AND T.SOLICR_OFCSOL = :CDETNORADIC.OFISOLIC
    //        AND T.SOLICR_CODSOL = :CDETNORADIC.SOLIC
    //        AND C.COLCOD = :CDETNORADIC.CTO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    NULL;
    //   END;
    //   :CDETNORADIC.SPREAD := V_SPREAD;
    //   :CDETNORADIC.PLAZO := V_PLAZO;
    //   :CDETNORADIC.PORCENTAJE := V_PORCENTAJE;
    // END;  
    //#endregion
    async CRFCTORED_cdetnoradic_postQuery() {
        console.log("Entering CRFCTORED_cdetnoradic_postQuery");
        let V_PLAZO: null = null;
        let V_SPREAD: null = null;
        let V_PORCENTAJE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OFISOLIC", this.CDETNORADIC.OFISOLIC);
        payload1.set("SOLIC", this.CDETNORADIC.SOLIC);
        payload1.set("CTO", this.CDETNORADIC.CTO);
        // call REST API
        const result1 = await Rest.post("/crfctored_cdetnoradic/crfctored_cdetnoradic_postquery_query1", payload1);
        // get values from result
        V_SPREAD = result1[0].get("V_SPREAD");
        V_PLAZO = result1[0].get("V_PLAZO");
        V_PORCENTAJE = result1[0].get("V_PORCENTAJE");
        if (result1 == null || result1.length == 0) {

        }

        this.CDETNORADIC.SPREAD = V_SPREAD;
        this.CDETNORADIC.PLAZO = V_PLAZO;
        this.CDETNORADIC.PORCENTAJE = V_PORCENTAJE;
        console.log("Exiting CRFCTORED_cdetnoradic_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_RESXPLAZA;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_RESXPLAZA(BK_DATA, :V_PLAZAS, :V_FECINI, :V_FECFIN, :V_OPCION);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'RSPLAZA');
    // END;
    //#endregion
    async CRFCTORED_rsplaza_queryProcedure() {
        console.log("Entering CRFCTORED_rsplaza_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_RESXPLAZA(BK_DATA, V_PLAZAS, V_FECINI, V_FECFIN, V_OPCION);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "RSPLAZA");
        console.log("Exiting CRFCTORED_rsplaza_queryProcedure");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("CODPLAZA") := '%%%';
    // GO_BLOCK('CDETALLE');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_rsplaza_vBtotodos_whenButtonPressed() {
        console.log("Entering CRFCTORED_rsplaza_vBtotodos_whenButtonPressed");
        this.PARAMETER.set("CODPLAZA", "%%%");
        this.oracleFormsBuiltins.go_block("CDETALLE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_rsplaza_vBtotodos_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("CODPLAZA") := :CODPLA;
    // GO_BLOCK('CDETALLE');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_rsplaza_vBtodet_whenButtonPressed() {
        console.log("Entering CRFCTORED_rsplaza_vBtodet_whenButtonPressed");
        this.PARAMETER.set("CODPLAZA", this.RSPLAZA.CODPLA);
        this.oracleFormsBuiltins.go_block("CDETALLE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_rsplaza_vBtodet_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CDETALLE;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_CPPALREDE(BK_DATA, :V_FECINI, :V_FECFIN, :this.PARAMETER.get("CODPLAZA"), :OFISOL, :SOLICITUD, :CTOORIGIN, :V_OPCION, :FORMULARIO, :REDESCUENTO, :INSCRIPCION_RUT, :FINDETER, :FINAGRO, :NO_TRAMITADO, :RADICADO, :ANEXO, :DECLARACION, :ESTADOCTO);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CDETALLE');
    // END;
    //#endregion
    async CRFCTORED_cdetalle_queryProcedure() {
        console.log("Entering CRFCTORED_cdetalle_queryProcedure");
        let BK_DATA: string = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_CPPALREDE(BK_DATA, V_FECINI, V_FECFIN, this.PARAMETER.get("CODPLAZA"), OFISOL, SOLICITUD, CTOORIGIN, V_OPCION, FORMULARIO, REDESCUENTO, INSCRIPCION_RUT, FINDETER, FINAGRO, NO_TRAMITADO, RADICADO, ANEXO, DECLARACION, ESTADOCTO);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CDETALLE");
        console.log("Exiting CRFCTORED_cdetalle_queryProcedure");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  VBOTON      NUMBER;
    // BEGIN 
    // IF :V_VER = '1' THEN
    //  PU_LLAMAR_SOLICITUD (:OFISOL,:TIPO, :SOLICITUD, 'Q');
    //  :V_VER := '0';
    // ELSIF :V_VER = '2' THEN
    //   PU_LLAMAR_PLANEACION(:OFISOL,:NIT,:SOLICITUD, 'Q');
    //   :V_VER := '0';
    // ELSIF :V_VER = '3' THEN
    //   LIB$ALERTA('MENSAJE','¿QUÉ CONTRATO DESEA VER?'
    //           ,'ORIGEN', '1ER ANTECEDENTE' ,'2DO ANTECEDENTE', VBOTON);
    //   IF VBOTON = 1 THEN
    //     PU_LLAMAR_CONTRATO('L','001',:TIPO,:CTOORIGIN,'Q');
    //   ELSIF VBOTON = 2 THEN
    //    IF :1ERANTECEDENTE IS NULL THEN
    //     LIB$ALERTA('MENSAJE','NO SE PUEDE CONSULTAR EL 1ER ANTECEDENTE POR QUÉ ES NULO O NO TIENE.',NULL,NULL,NULL,T_RESPUESTA);
    //    ELSE
    //     PU_LLAMAR_CONTRATO('L','001',:TIPO,:1ERANTECEDENTE,'Q');
    //    END IF;
    //   ELSIF VBOTON = 3 THEN
    //     IF :2DOANT IS NULL THEN
    //       LIB$ALERTA('MENSAJE','NO SE PUEDE CONSULTAR EL 2DO ANTECEDENTE POR QUÉ ES NULO O NO TIENE.',NULL,NULL,NULL,T_RESPUESTA);
    //      ELSE
    //        PU_LLAMAR_CONTRATO('L','001',:TIPO,:2DOANT,'Q');
    //      END IF;
    //   END IF;
    //   :V_VER := '0';
    // ELSIF :V_VER = '4' THEN
    //  IF :ESTADOSOL = 'RE' THEN
    //   LIB$DTNERFRMA('SOLO SE PUEDEN CONSULTAR SOLICITUDES DIFERENTES A ESTADO [RE]');
    //  ELSE
    //   LIB$ALERTA('MENSAJE','¡ IMPORTANTE ! AL INGRESAR EN ESTA OPCIÓN PUEDE GENERAR FUTUROS SEGUIMIENTOS"',NULL, NULL,NULL, T_RESPUESTA);
    //   PU_LLAMAR_SEGUIDOC (:OFISOL,:NIT,:SOLICITUD,:CTOORIGIN,'PE','Q');
    //   :V_VER := '0';
    //  END IF;
    // ELSIF :V_VER = '5' THEN --CTO PASIVO
    //   IF :CTOPASIVA IS NULL THEN
    //     LIB$ALERTA('MENSAJE','NO SE PUEDE CONSULTAR EL CONTRATO PASIVO POR QUÉ ES NULO O NO TIENE.',NULL,NULL,NULL,T_RESPUESTA);  
    //   ELSE
    //    PU_LLAMAR_CONTRATO('R','001',:TIPOCTO,:CTOPASIVA,'Q'); 
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CRFCTORED_cdetalle_vVer_whenRadioChanged() {
        console.log("Entering CRFCTORED_cdetalle_vVer_whenRadioChanged");
        let T_RESPUESTA: number = null;
        let VBOTON: number = null;
        // if (V_VER == "1") {
        //     CRFCTORED_PU_LLAMAR_SOLICITUD(OFISOL, TIPO, SOLICITUD, "Q");
        //     this.CDETALLE.V_VER = "0";
        // }
        // else if (V_VER == "2") {
        //     CRFCTORED_PU_LLAMAR_PLANEACION(OFISOL, NIT, SOLICITUD, "Q");
        //     this.CDETALLE.V_VER = "0";
        // }
        // else if (V_VER == "3") {
        //     CRFCTORED_LIB$ALERTA("MENSAJE", "¿QUÉ CONTRATO DESEA VER?", "ORIGEN", "1ER ANTECEDENTE", "2DO ANTECEDENTE", VBOTON);
        //     if (VBOTON == 1) {
        //         CRFCTORED_PU_LLAMAR_CONTRATO("L", "001", TIPO, CTOORIGIN, "Q");
        //     }
        //     else if (VBOTON == 2) {
        //         if ((1ERANTECEDENTE == null ) ) {
        //             CRFCTORED_LIB$ALERTA("MENSAJE", "NO SE PUEDE CONSULTAR EL 1ER ANTECEDENTE POR QUÉ ES NULO O NO TIENE.", null, null, null, T_RESPUESTA);
        //         }
        //         else {
        //             CRFCTORED_PU_LLAMAR_CONTRATO("L", "001", TIPO, 1ERANTECEDENTE, "Q");
        //         }
        //     }
        //     else if (VBOTON == 3) {
        //         if ((2DOANT == null ) ) {
        //             CRFCTORED_LIB$ALERTA("MENSAJE", "NO SE PUEDE CONSULTAR EL 2DO ANTECEDENTE POR QUÉ ES NULO O NO TIENE.", null, null, null, T_RESPUESTA);
        //         }
        //         else {
        //             CRFCTORED_PU_LLAMAR_CONTRATO("L", "001", TIPO, 2DOANT, "Q");
        //         }
        //     }
        //     this.CDETALLE.V_VER = "0";
        // }
        // else if (V_VER == "4") {
        //     if (ESTADOSOL == "RE") {
        //         CRFCTORED_LIB$DTNERFRMA("SOLO SE PUEDEN CONSULTAR SOLICITUDES DIFERENTES A ESTADO [RE]");
        //     }
        //     else {
        //         CRFCTORED_LIB$ALERTA("MENSAJE", "¡ IMPORTANTE ! AL INGRESAR EN ESTA OPCIÓN PUEDE GENERAR FUTUROS SEGUIMIENTOS", null, null, null, T_RESPUESTA);
        //         CRFCTORED_PU_LLAMAR_SEGUIDOC(OFISOL, NIT, SOLICITUD, CTOORIGIN, "PE", "Q");
        //         this.CDETALLE.V_VER = "0";
        //     }
        // }
        // else if (V_VER == "5") {
        //     if ((CTOPASIVA == null)) {
        //         CRFCTORED_LIB$ALERTA("MENSAJE", "NO SE PUEDE CONSULTAR EL CONTRATO PASIVO POR QUÉ ES NULO O NO TIENE.", null, null, null, T_RESPUESTA);
        //     }
        //     else {
        //         CRFCTORED_PU_LLAMAR_CONTRATO("R", "001", TIPOCTO, CTOPASIVA, "Q");
        //     }
        // }
        console.log("Exiting CRFCTORED_cdetalle_vVer_whenRadioChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CPENDRADICA;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_CPENDRADICA(BK_DATA, :V_PLAZAS4, :V_FECINI, :V_FECFIN, :V_REDESC3);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BNORADICA');
    // END;
    //#endregion
    async CRFCTORED_bnoradica_queryProcedure() {
        console.log("Entering CRFCTORED_bnoradica_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_CPENDRADICA(BK_DATA, V_PLAZAS4, V_FECINI, V_FECFIN, V_REDESC3);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BNORADICA");
        console.log("Exiting CRFCTORED_bnoradica_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERDETB = 'S' THEN
    //  GO_BLOCK('CDETNORADIC');
    //  EXECUTE_QUERY;
    // ELSE
    //  :V_VERDETB := 'N';
    // END IF; END;
    //#endregion
    async CRFCTORED_bnoradica_vVerdetb_whenCheckboxChanged() {
        console.log("Entering CRFCTORED_bnoradica_vVerdetb_whenCheckboxChanged");
        // if (V_VERDETB == "S") {
        //     this.oracleFormsBuiltins.go_block("CDETNORADIC");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.BNORADICA.V_VERDETB = "N";
        // }
        console.log("Exiting CRFCTORED_bnoradica_vVerdetb_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CRADICA;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_CRADICA(BK_DATA, :V_PLAZAS3, :V_FECINI, :V_FECFIN, :V_REDESC2);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BRADICA');
    // END;
    //#endregion
    async CRFCTORED_bradica_queryProcedure() {
        console.log("Entering CRFCTORED_bradica_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_CRADICA(BK_DATA, V_PLAZAS3, V_FECINI, V_FECFIN, V_REDESC2);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BRADICA");
        console.log("Exiting CRFCTORED_bradica_queryProcedure");
    }

    //#region PLSQL
    // BEGIN IF :V_VERDETRADIC = 'S' THEN
    //  GO_BLOCK('CDETRADIC');
    //  EXECUTE_QUERY;
    // ELSE
    //  :V_VERDETRADIC := 'N';
    // END IF; END;
    //#endregion
    async CRFCTORED_bradica_vVerdetradic_whenCheckboxChanged() {
        console.log("Entering CRFCTORED_bradica_vVerdetradic_whenCheckboxChanged");
        // if (V_VERDETRADIC == "S") {
        //     this.oracleFormsBuiltins.go_block("CDETRADIC");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.BRADICA.V_VERDETRADIC = "N";
        // }
        console.log("Exiting CRFCTORED_bradica_vVerdetradic_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('PCLINEA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vRedesc_whenListChanged() {
        console.log("Entering CRFCTORED_parametros_vRedesc_whenListChanged");
        this.oracleFormsBuiltins.go_block("PCLINEA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vRedesc_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :V_FECFIN < :V_FECINI THEN
    //  LIB$DTNERFRMA('LA FECHA FINAL NO PUEDE SER MENOR A LA FECHA INICIAL.RECTIFIQUE.');
    // END IF; END;
    //#endregion
    async CRFCTORED_parametros_vFecfin_whenValidateItem() {
        console.log("Entering CRFCTORED_parametros_vFecfin_whenValidateItem");
        // if (V_FECFIN < V_FECINI) {
        //     CRFCTORED_LIB$DTNERFRMA("LA FECHA FINAL NO PUEDE SER MENOR A LA FECHA INICIAL.RECTIFIQUE.");
        // }
        console.log("Exiting CRFCTORED_parametros_vFecfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('RSPLAZA');
    // SYNCHRONIZE; END;
    //#endregion
    async CRFCTORED_parametros_cerrarDet1_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_cerrarDet1_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("RSPLAZA");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCTORED_parametros_cerrarDet1_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON     NUMBER;
    //   T_RESPUESTA NUMBER;
    //   VCAMPOANT   VARCHAR2(256);
    //   LPCOGENID   PARAMLIST;
    //   -- VARIABLES ARCHIVO PLANO
    //   CPROCES   CONSTANT SETPARAMETRO.PARAME_PROCES%TYPE := 'CRFCTORED';
    //   VFORMATO SETPARAMETRO.PARAME_FORMAT%TYPE;
    //   VVALOR   SETPARAMETRO.PARAME_VALOR%TYPE;
    //   VPROCES  SETPARAMETRO.PARAME_PROCES%TYPE;
    //   VESQDIR   VARCHAR2(1);
    //   VDIRPLAG  VARCHAR2(256);
    //   VDIRPLAU  VARCHAR2(256);
    //   VDIR      VARCHAR2(256);
    //   VEXTAR    VARCHAR2(30);
    //   --
    // BEGIN
    //   LIB$ALERTA('MENSAJE','DESEA GENERAR EL ARCHIVO PLANO NO RADICADOS'
    //           ,'SI', 'NO','CANCELAR', VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO NO GENERADO.',NULL,NULL,NULL, T_RESPUESTA);
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('CDETNORADIC');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'CDETNORADIC';  
    //     
    //     --CARGA DE PARAMETROS PARA EL PLANO
    //     PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'ESQDIR'
    //                                  ,VFORMATO  ,VVALOR);
    //     IF VVALOR = 'U' THEN
    //      
    //       PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAU'
    //                                    ,VFORMATO  ,VVALOR);
    //                                          
    //       SELECT UPPER(OSUSER) OSUSER
    //       INTO :this.PARAMETER.get("PUSO")
    //       FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //        AND ROWNUM=1;
    // 
    //       VDIR := '\\'||:this.PARAMETER.get("PUSO")||VVALOR;
    //      
    //     ELSE
    //       PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAG'
    //                                    ,VFORMATO  ,VVALOR);
    //       VDIR := VVALOR;
    //     END IF;
    //      PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES ,'F'       ,'EXARPREDES'
    //                                  ,VFORMATO  ,VEXTAR);
    //     :this.PARAMETER.get("PARCONG") := VDIR||'NORADICADAS'||VEXTAR;
    //     --
    //     
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CRFCTORED_parametros_vArcnoradic_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_vArcnoradic_whenButtonPressed");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: any = null;
        let CPROCES: string = 'CRFCTORED';
        let VFORMATO: string = null;
        let VVALOR: string = null;
        let VPROCES: string = null;
        let VESQDIR: string = null;
        let VDIRPLAG: string = null;
        let VDIRPLAU: string = null;
        let VDIR: string = null;
        let VEXTAR: string = null;
        // CRFCTORED_LIB$ALERTA("MENSAJE", "DESEA GENERAR EL ARCHIVO PLANO NO RADICADOS", "SI", "NO", "CANCELAR", VBOTON);
        if (VBOTON == 2) {
            // CRFCTORED_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("CDETNORADIC");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "CDETNORADIC");
            // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "ESQDIR", VFORMATO, VVALOR);
            if (VVALOR == "U") {
                // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAU", VFORMATO, VVALOR);
                // construct payload
                let payload1 = new Map();
                payload1.set("PUSO", this.PARAMETER.get("PUSO"));
                // call REST API
                const result1 = await Rest.post("/crfctored_parametros/crfctored_parametros_varcnoradic_whenbuttonpressed_query1", payload1);
                // get values from result
                this.PARAMETER.set("PUSO", result1[0].get(this.PARAMETER.get("PUSO")));
                VDIR = "\\" + this.PARAMETER.get("PUSO") + VVALOR;
            }
            else {
                // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAG", VFORMATO, VVALOR);
                VDIR = VVALOR;
            }
            // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES, "F", "EXARPREDES", VFORMATO, VEXTAR);
            this.PARAMETER.set("PARCONG", VDIR + "NORADICADAS" + VEXTAR);
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CRFCTORED_parametros_vArcnoradic_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON     NUMBER;
    //   T_RESPUESTA NUMBER;
    //   VCAMPOANT   VARCHAR2(256);
    //   LPCOGENID   PARAMLIST;
    // BEGIN
    //   LIB$ALERTA('MENSAJE','DESEA GENERAR EL ARCHIVO PLANO GENERAL DE REDESCUENTOS'
    //           ,'SI', 'NO','CANCELAR', VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO NO GENERADO.',NULL,NULL,NULL, T_RESPUESTA);
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('CDETALLE');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'CDETALLE';
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     PU_CARGAR_PARAMETROS;
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CRFCTORED_parametros_vReport_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_vReport_whenButtonPressed");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: any = null;
        // CRFCTORED_LIB$ALERTA("MENSAJE", "DESEA GENERAR EL ARCHIVO PLANO GENERAL DE REDESCUENTOS", "SI", "NO", "CANCELAR", VBOTON);
        if (VBOTON == 2) {
            // CRFCTORED_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("CDETALLE");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "CDETALLE");
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            // CRFCTORED_PU_CARGAR_PARAMETROS();
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CRFCTORED_parametros_vReport_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BNORADICA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vPlazas4_whenListChanged() {
        console.log("Entering CRFCTORED_parametros_vPlazas4_whenListChanged");
        this.oracleFormsBuiltins.go_block("BNORADICA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vPlazas4_whenListChanged");
    }

    //#region PLSQL
    // BEGIN --SSSG
    // 
    // GO_BLOCK('RSPLAZA');
    // EXECUTE_QUERY;
    // --
    // GO_BLOCK('PCLINEA');
    // EXECUTE_QUERY;
    // --
    // GO_BLOCK('BRADICA');
    // EXECUTE_QUERY;
    // --
    // GO_BLOCK('BNORADICA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vBtejec_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_vBtejec_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("RSPLAZA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("PCLINEA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("BRADICA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("BNORADICA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vBtejec_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BRADICA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vRedesc2_whenListChanged() {
        console.log("Entering CRFCTORED_parametros_vRedesc2_whenListChanged");
        this.oracleFormsBuiltins.go_block("BRADICA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vRedesc2_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BRADICA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vPlazas3_whenListChanged() {
        console.log("Entering CRFCTORED_parametros_vPlazas3_whenListChanged");
        this.oracleFormsBuiltins.go_block("BRADICA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vPlazas3_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('PCLINEA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vPlazas2_whenListChanged() {
        console.log("Entering CRFCTORED_parametros_vPlazas2_whenListChanged");
        this.oracleFormsBuiltins.go_block("PCLINEA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vPlazas2_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BNORADICA');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTORED_parametros_vRedesc3_whenListChanged() {
        console.log("Entering CRFCTORED_parametros_vRedesc3_whenListChanged");
        this.oracleFormsBuiltins.go_block("BNORADICA");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTORED_parametros_vRedesc3_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('PCLINEA');
    // SYNCHRONIZE;
    // :V_VERDET := 'N'; END;
    //#endregion
    async CRFCTORED_parametros_cerrar_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_cerrar_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("PCLINEA");
        this.oracleFormsBuiltins.synchronize();
        // this.PARAMETROS.V_VERDET = "N";
        console.log("Exiting CRFCTORED_parametros_cerrar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON     NUMBER;
    //   T_RESPUESTA NUMBER;
    //   VCAMPOANT   VARCHAR2(256);
    //   LPCOGENID   PARAMLIST;
    //    -- VARIABLES ARCHIVO PLANO
    //   CPROCES   CONSTANT SETPARAMETRO.PARAME_PROCES%TYPE := 'CRFCTORED';
    //   VFORMATO SETPARAMETRO.PARAME_FORMAT%TYPE;
    //   VVALOR   SETPARAMETRO.PARAME_VALOR%TYPE;
    //   VPROCES  SETPARAMETRO.PARAME_PROCES%TYPE;
    //   VESQDIR   VARCHAR2(1);
    //   VDIRPLAG  VARCHAR2(256);
    //   VDIRPLAU  VARCHAR2(256);
    //   VDIR      VARCHAR2(256);
    //   VEXTAR    VARCHAR2(30);
    //   --
    // BEGIN
    //   LIB$ALERTA('MENSAJE','DESEA GENERAR EL ARCHIVO PLANO DE CONTRATOS RADICADOS'
    //           ,'SI', 'NO','CANCELAR', VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','PROCESO NO GENERADO.',NULL,NULL,NULL, T_RESPUESTA);
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('CDETRADIC');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'CDETRADIC';  
    //     
    //     --CARGA DE PARAMETROS PARA EL PLANO
    //     PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'ESQDIR'
    //                                  ,VFORMATO  ,VVALOR);
    //     IF VVALOR = 'U' THEN
    //      PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAU'
    //                                    ,VFORMATO  ,VVALOR);
    //                                          
    //       SELECT UPPER(OSUSER) OSUSER
    //       INTO :this.PARAMETER.get("PUSO")
    //       FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //        AND ROWNUM=1;
    // 
    //       VDIR := '\\'||:this.PARAMETER.get("PUSO")||VVALOR;
    //       
    //     ELSE
    //       PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAG'
    //                                    ,VFORMATO  ,VVALOR);
    //       VDIR := VVALOR;
    //     END IF;
    //      PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES ,'F'       ,'EXARPREDES'
    //                                  ,VFORMATO  ,VEXTAR);
    //     :this.PARAMETER.get("PARCONG") := VDIR||'RADICADAS'||VEXTAR;
    //     --
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //   END IF;
    // END;
    //#endregion
    async CRFCTORED_parametros_vArcradic_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_vArcradic_whenButtonPressed");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: any = null;
        let CPROCES: string = 'CRFCTORED';
        let VFORMATO: string = null;
        let VVALOR: string = null;
        let VPROCES: string = null;
        let VESQDIR: string = null;
        let VDIRPLAG: string = null;
        let VDIRPLAU: string = null;
        let VDIR: string = null;
        let VEXTAR: string = null;
        // CRFCTORED_LIB$ALERTA("MENSAJE", "DESEA GENERAR EL ARCHIVO PLANO DE CONTRATOS RADICADOS", "SI", "NO", "CANCELAR", VBOTON);
        if (VBOTON == 2) {
            // CRFCTORED_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.", null, null, null, T_RESPUESTA);
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("CDETRADIC");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "CDETRADIC");
            // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "ESQDIR", VFORMATO, VVALOR);
            if (VVALOR == "U") {
                // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAU", VFORMATO, VVALOR);
                // construct payload
                let payload1 = new Map();
                payload1.set("PUSO", this.PARAMETER.get("PUSO"));
                // call REST API
                const result1 = await Rest.post("/crfctored_parametros/crfctored_parametros_varcradic_whenbuttonpressed_query1", payload1);
                // get values from result
                this.PARAMETER.set("PUSO", result1[0].get(this.PARAMETER.get("PUSO")));
                VDIR = "\\" + this.PARAMETER.get("PUSO") + VVALOR;
            }
            else {
                // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAG", VFORMATO, VVALOR);
                VDIR = VVALOR;
            }
            // CRFCTORED_PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES, "F", "EXARPREDES", VFORMATO, VEXTAR);
            this.PARAMETER.set("PARCONG", VDIR + "RADICADAS" + VEXTAR);
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARCONG");
        }
        console.log("Exiting CRFCTORED_parametros_vArcradic_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BRADICA');
    // :V_VERDETRADIC := 'N';
    // SYNCHRONIZE; END;
    //#endregion
    async CRFCTORED_parametros_cerrarRadica_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_cerrarRadica_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BRADICA");
        // this.PARAMETROS.V_VERDETRADIC = "N";
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCTORED_parametros_cerrarRadica_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('BNORADICA');
    // :V_VERDETB := 'N';
    // SYNCHRONIZE; END;
    //#endregion
    async CRFCTORED_parametros_cerrarNoradic_whenButtonPressed() {
        console.log("Entering CRFCTORED_parametros_cerrarNoradic_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("BNORADICA");
        // this.PARAMETROS.V_VERDETB = "N";
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCTORED_parametros_cerrarNoradic_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CDETALLE2;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_CPPALREDE2(BK_DATA, :V_FECINI, :V_FECFIN, :CODPLAZ, :OFISOL2, :SOLICITUD2, :CTOORIGIN2, :CODIGO, :FORMULARIO2, :REDESCUENTO2, :INSCRIPCION_RUT2, :FINDETER2, :FINAGRO2, :NO_TRAMITADO2, :RADICADO2, :ANEXO2, :DECLARACION2, :ESTADOCTO2, :CODLINEA, :PERIODO);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CDETALLE2');
    // END;
    //#endregion
    async CRFCTORED_cdetalle2_queryProcedure() {
        console.log("Entering CRFCTORED_cdetalle2_queryProcedure");
        let BK_DATA: string = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_CPPALREDE2(BK_DATA, V_FECINI, V_FECFIN, CODPLAZ, OFISOL2, SOLICITUD2, CTOORIGIN2, CODIGO, FORMULARIO2, REDESCUENTO2, INSCRIPCION_RUT2, FINDETER2, FINAGRO2, NO_TRAMITADO2, RADICADO2, ANEXO2, DECLARACION2, ESTADOCTO2, CODLINEA, PERIODO);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CDETALLE2");
        console.log("Exiting CRFCTORED_cdetalle2_queryProcedure");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    //  VBOTON      NUMBER;
    // BEGIN 
    // IF :V_VER2 = '1' THEN
    //  PU_LLAMAR_SOLICITUD (:OFISOL2,:TIPO2, :SOLICITUD2, 'Q');
    //  :V_VER2 := '0';
    // ELSIF :V_VER2 = '2' THEN
    //   PU_LLAMAR_PLANEACION(:OFISOL2,:NIT2,:SOLICITUD2, 'Q');
    //   :V_VER2 := '0';
    // ELSIF :V_VER2 = '3' THEN
    //   LIB$ALERTA('MENSAJE','¿QUÉ CONTRATO DESEA VER?'
    //           ,'ORIGEN', '1ER ANTECEDENTE' ,'2DO ANTECEDENTE', VBOTON);
    //   IF VBOTON = 1 THEN
    //     PU_LLAMAR_CONTRATO('L','001',:TIPO2,:CTOORIGIN2,'Q');
    //   ELSIF VBOTON = 2 THEN
    //    IF :ERANTECEDENTE2 IS NULL THEN
    //     LIB$ALERTA('MENSAJE','NO SE PUEDE CONSULTAR EL 1ER ANTECEDENTE POR QUÉ ES NULO O NO TIENE.',NULL,NULL,NULL,T_RESPUESTA);
    //    ELSE
    //     PU_LLAMAR_CONTRATO('L','001',:TIPO2,:ERANTECEDENTE2,'Q');
    //    END IF;
    //   ELSIF VBOTON = 3 THEN
    //     IF :DOANT2 IS NULL THEN
    //       LIB$ALERTA('MENSAJE','NO SE PUEDE CONSULTAR EL 2DO ANTECEDENTE POR QUÉ ES NULO O NO TIENE.',NULL,NULL,NULL,T_RESPUESTA);
    //      ELSE
    //        PU_LLAMAR_CONTRATO('L','001',:TIPO2,:DOANT2,'Q');
    //      END IF;
    //   END IF;
    //   :V_VER2 := '0';
    // ELSIF :V_VER2 = '4' THEN
    //  IF :ESTADOSOL2 = 'RE' THEN
    //   LIB$DTNERFRMA('SOLO SE PUEDEN CONSULTAR SOLICITUDES DIFERENTES A ESTADO [RE]');
    //  ELSE
    //   LIB$ALERTA('MENSAJE','¡ IMPORTANTE ! AL INGRESAR EN ESTA OPCIÓN PUEDE GENERAR FUTUROS SEGUIMIENTOS"',NULL, NULL,NULL, T_RESPUESTA);
    //   PU_LLAMAR_SEGUIDOC (:OFISOL2,:NIT2,:SOLICITUD2,:CTOORIGIN2,'PE','Q');
    //   :V_VER2 := '0';
    //  END IF;
    // ELSIF :V_VER2 = '5' THEN --CTO PASIVO
    //   IF :CTOPASIVAS IS NULL THEN
    //     LIB$ALERTA('MENSAJE','NO SE PUEDE CONSULTAR EL CONTRATO PASIVO POR QUÉ ES NULO O NO TIENE.',NULL,NULL,NULL,T_RESPUESTA);  
    //   ELSE
    //    PU_LLAMAR_CONTRATO('R','001',:TIPOCTO2,:CTOPASIVAS,'Q'); 
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CRFCTORED_cdetalle2_vVer2_whenRadioChanged() {
        console.log("Entering CRFCTORED_cdetalle2_vVer2_whenRadioChanged");
        let T_RESPUESTA: number = null;
        let VBOTON: number = null;
        // if (V_VER2 == "1") {
        //     CRFCTORED_PU_LLAMAR_SOLICITUD(OFISOL2, TIPO2, SOLICITUD2, "Q");
        //     this.CDETALLE2.V_VER2 = "0";
        // }
        // else if (V_VER2 == "2") {
        //     CRFCTORED_PU_LLAMAR_PLANEACION(OFISOL2, NIT2, SOLICITUD2, "Q");
        //     this.CDETALLE2.V_VER2 = "0";
        // }
        // else if (V_VER2 == "3") {
        //     CRFCTORED_LIB$ALERTA("MENSAJE", "¿QUÉ CONTRATO DESEA VER?", "ORIGEN", "1ER ANTECEDENTE", "2DO ANTECEDENTE", VBOTON);
        //     if (VBOTON == 1) {
        //         CRFCTORED_PU_LLAMAR_CONTRATO("L", "001", TIPO2, CTOORIGIN2, "Q");
        //     }
        //     else if (VBOTON == 2) {
        //         if ((ERANTECEDENTE2 == null)) {
        //             CRFCTORED_LIB$ALERTA("MENSAJE", "NO SE PUEDE CONSULTAR EL 1ER ANTECEDENTE POR QUÉ ES NULO O NO TIENE.", null, null, null, T_RESPUESTA);
        //         }
        //         else {
        //             CRFCTORED_PU_LLAMAR_CONTRATO("L", "001", TIPO2, ERANTECEDENTE2, "Q");
        //         }
        //     }
        //     else if (VBOTON == 3) {
        //         if ((DOANT2 == null)) {
        //             CRFCTORED_LIB$ALERTA("MENSAJE", "NO SE PUEDE CONSULTAR EL 2DO ANTECEDENTE POR QUÉ ES NULO O NO TIENE.", null, null, null, T_RESPUESTA);
        //         }
        //         else {
        //             CRFCTORED_PU_LLAMAR_CONTRATO("L", "001", TIPO2, DOANT2, "Q");
        //         }
        //     }
        //     this.CDETALLE2.V_VER2 = "0";
        // }
        // else if (V_VER2 == "4") {
        //     if (ESTADOSOL2 == "RE") {
        //         CRFCTORED_LIB$DTNERFRMA("SOLO SE PUEDEN CONSULTAR SOLICITUDES DIFERENTES A ESTADO [RE]");
        //     }
        //     else {
        //         CRFCTORED_LIB$ALERTA("MENSAJE", "¡ IMPORTANTE ! AL INGRESAR EN ESTA OPCIÓN PUEDE GENERAR FUTUROS SEGUIMIENTOS", null, null, null, T_RESPUESTA);
        //         CRFCTORED_PU_LLAMAR_SEGUIDOC(OFISOL2, NIT2, SOLICITUD2, CTOORIGIN2, "PE", "Q");
        //         this.CDETALLE2.V_VER2 = "0";
        //     }
        // }
        // else if (V_VER2 == "5") {
        //     if ((CTOPASIVAS == null)) {
        //         CRFCTORED_LIB$ALERTA("MENSAJE", "NO SE PUEDE CONSULTAR EL CONTRATO PASIVO POR QUÉ ES NULO O NO TIENE.", null, null, null, T_RESPUESTA);
        //     }
        //     else {
        //         CRFCTORED_PU_LLAMAR_CONTRATO("R", "001", TIPOCTO2, CTOPASIVAS, "Q");
        //     }
        // }
        console.log("Exiting CRFCTORED_cdetalle2_vVer2_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_toolbar_whenButtonPressed() {
        console.log("Entering CRFCTORED_toolbar_whenButtonPressed");
        console.log("Exiting CRFCTORED_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_toolbar_whenMouseLeave() {
        console.log("Entering CRFCTORED_toolbar_whenMouseLeave");
        console.log("Exiting CRFCTORED_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCTORED_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCTORED_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   LIB$MNSJEOCPDO('GENERANDO EL ARCHIVO PLANO',NULL);
    //   PPLABLOQ((:this.PARAMETER.get("PBLOACT")),:BBOTONES.ARCHIVOB);
    //   LIB$MNSJEOCPDOOFF;
    //   GO_BLOCK(:this.PARAMETER.get("PBLOACT"));
    //   --GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   --GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async CRFCTORED_bbotones_aceptarb_whenButtonPressed() {
        console.log("Entering CRFCTORED_bbotones_aceptarb_whenButtonPressed");
        // CRFCTORED_LIB$MNSJEOCPDO("GENERANDO EL ARCHIVO PLANO", null);
        // CRFCTORED_PPLABLOQ(this.PARAMETER.get("PBLOACT"), BBOTONES.ARCHIVOB);
        // CRFCTORED_LIB$MNSJEOCPDOOFF();
        this.oracleFormsBuiltins.go_block(this.PARAMETER.get("PBLOACT"));
        console.log("Exiting CRFCTORED_bbotones_aceptarb_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK(:this.PARAMETER.get("PBLOACT"));
    //   --GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   --GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async CRFCTORED_bbotones_cancelarb_whenButtonPressed() {
        console.log("Entering CRFCTORED_bbotones_cancelarb_whenButtonPressed");
        this.oracleFormsBuiltins.go_block(this.PARAMETER.get("PBLOACT"));
        console.log("Exiting CRFCTORED_bbotones_cancelarb_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_OPEREDESC.TAB_CDETRADICA;
    // BEGIN
    // PQBD_COL_OPEREDESC.PBD_CDETRADICA(BK_DATA, :V_PLAZAS3, :V_FECINI, :V_FECFIN, :V_REDESC2);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CDETRADIC');
    // END;
    //#endregion
    async CRFCTORED_cdetradic_queryProcedure() {
        console.log("Entering CRFCTORED_cdetradic_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTORED_PQBD_COL_OPEREDESC.PBD_CDETRADICA(BK_DATA, V_PLAZAS3, V_FECINI, V_FECFIN, V_REDESC2);
        // CRFCTORED_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CDETRADIC");
        console.log("Exiting CRFCTORED_cdetradic_queryProcedure");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTORED_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCTORED_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCTORED_base_fecha_whenNewItemInstance");
    }

}

