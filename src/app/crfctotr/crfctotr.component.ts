import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCTOTR business logic
import {
    RSPLAZA,
    CDETALLE,
    PARAMETROS,
    TOOLBAR,
    BBOTONES,
    BASE
} from "./CRFCTOTR_models";



// class CRFCTOTR
@Component({
    selector: 'app-crfctotr',
    templateUrl: './crfctotr.component.html',
})
export class CrfctotrComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['PUSO', null],
        ['CODPLAZA', null],
        ['PEDITOR', null],
        ['PARCONG', null],
        ['PBLOACT', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public RSPLAZA: RSPLAZA = new RSPLAZA();
    public CDETALLE: CDETALLE = new CDETALLE();
    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BBOTONES: BBOTONES = new BBOTONES();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_whenMouseDoubleclick() {
        console.log("Entering CRFCTOTR_whenMouseDoubleclick");
        console.log("Exiting CRFCTOTR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_preForm() {
        console.log("Entering CRFCTOTR_preForm");
        console.log("Exiting CRFCTOTR_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_whenNewFormInstance() {
        console.log("Entering CRFCTOTR_whenNewFormInstance");
        console.log("Exiting CRFCTOTR_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_RESXPLAZA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_RESXPLAZA(BK_DATA, :V_PLAZAS, :V_FECINI, :V_FECFIN, :V_OPCION, :V_UNIDAD);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'RSPLAZA');
    // END;
    //#endregion
    async CRFCTOTR_rsplaza_queryProcedure() {
        console.log("Entering CRFCTOTR_rsplaza_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTOTR_PQBD_COL_ESTAOPE.PBD_RESXPLAZA(BK_DATA, V_PLAZAS, V_FECINI, V_FECFIN, V_OPCION, V_UNIDAD);
        // CRFCTOTR_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "RSPLAZA");
        console.log("Exiting CRFCTOTR_rsplaza_queryProcedure");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("CODPLAZA") := '%%%';
    // GO_BLOCK('CDETALLE');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTOTR_rsplaza_vBtotodos_whenButtonPressed() {
        console.log("Entering CRFCTOTR_rsplaza_vBtotodos_whenButtonPressed");
        this.PARAMETER.set("CODPLAZA", "%%%");
        this.oracleFormsBuiltins.go_block("CDETALLE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTOTR_rsplaza_vBtotodos_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("CODPLAZA") := :CODPLA;
    // GO_BLOCK('CDETALLE');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCTOTR_rsplaza_vBtodet_whenButtonPressed() {
        console.log("Entering CRFCTOTR_rsplaza_vBtodet_whenButtonPressed");
        this.PARAMETER.set("CODPLAZA", this.RSPLAZA.CODPLA);
        this.oracleFormsBuiltins.go_block("CDETALLE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCTOTR_rsplaza_vBtodet_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_CGERENCIA;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_CGERENCIAL(BK_DATA, :V_FECINI, :V_FECFIN, :this.PARAMETER.get("CODPLAZA"), :OFC, :SOL, :PLA, :V_OPCION, '%%%%', :V_UNIDAD);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'CDETALLE');
    // END;
    //#endregion
    async CRFCTOTR_cdetalle_queryProcedure() {
        console.log("Entering CRFCTOTR_cdetalle_queryProcedure");
        let BK_DATA: null = null;
        // CRFCTOTR_PQBD_COL_ESTAOPE.PBD_CGERENCIAL(BK_DATA, V_FECINI, V_FECFIN, this.PARAMETER.get("CODPLAZA"), OFC, SOL, PLA, V_OPCION, "%%%%", V_UNIDAD);
        // CRFCTOTR_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "CDETALLE");
        console.log("Exiting CRFCTOTR_cdetalle_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION    VARCHAR2(60);
    // BEGIN
    //  
    //  --PY 13285
    //  
    // BEGIN
    //  SELECT  T.LINEST_DESCES
    //  INTO :CDETALLE.LINEA_ESTRATEGICA
    //  FROM  COTTLINEST T,CRTSOLICR CR
    //  WHERE CR.SOLICR_CODLEA = T.LINEST_CONSEC
    //     AND CR.SOLICR_OFCSOL = :CDETALLE.OFC
    //     AND CR.SOLICR_CODSOL = :CDETALLE.SOL
    //     AND CR.SOLICR_CODUNI = :V_UNIDAD --ARQUITECTURA
    //     AND T.LINEST_CODUNI  = :V_UNIDAD --ARQUITECTURA
    //     ;
    // 
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //   :CDETALLE.LINEA_ESTRATEGICA := NULL;
    // END; 
    //  --PY 13285
    //  
    // --PY 12943 
    // 
    // 
    // BEGIN
    //   SELECT  
    //             P.PLAZAS_DESCRI,            
    //             SOLICR_PUNTS$ ,
    //             SOLICR_PTOUS$,
    //             SOLICR_ORMONET,
    //             SOLICR_USCIAL
    //     INTO :CDETALLE.PLAZADESC,
    //        :CDETALLE.SPREADP,       
    //          :CDETALLE.SPREADUSD,  
    //          :CDETALLE.SOLICR_ORMONET,
    //          :CDETALLE.CODCOMER            
    //                      
    //     FROM CRTSOLICR CR,SETCOMCIA C,CMTPLAZAS P ,SGUSUARIOS S   
    //     WHERE 
    //     CR.SOLICR_USCIAL = C.COM_USORAC
    //     AND C.COM_PLA = P.PLAZAS_CODIGO
    //     AND CR.SOLICR_USCIAL = S.USU_CODIGO
    //     AND CR.SOLICR_OFCSOL = :CDETALLE.OFC
    //     AND CR.SOLICR_CODSOL = :CDETALLE.SOL
    //     AND CR.SOLICR_CODUNI = :V_UNIDAD --ARQUITECTURA
    //     ;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //       :CDETALLE.PLAZADESC := NULL;
    //        :CDETALLE.SPREADP   := NULL;   
    //          :CDETALLE.SPREADUSD := NULL; 
    // END;
    // 
    // :CDETALLE.UNIDAD := :V_UNIDAD; --ARQUITECTURA
    // 
    // --PY 12943
    //  /*************************************************
    //   --LCBY: 15689 PRODUCCIÓN POR CANAL DE VINCULACIÓN
    //   *************************************************/
    //   --INFORMACIÓN OFICINA DAVIVIENDA
    //    BEGIN
    //    SELECT R.SOLICR_OFIDAV
    //       INTO :CDETALLE.OFIDAV
    //       FROM CRTSOLICR R
    //      WHERE R.SOLICR_OFCSOL = :CDETALLE.OFC
    //        AND R.SOLICR_CODSOL = :CDETALLE.SOL
    //        AND R.SOLICR_CODUNI = :V_UNIDAD --ARQUITECTURA
    //        ;
    //    EXCEPTION
    //       WHEN OTHERS THEN
    //         :CDETALLE.OFIDAV := NULL;
    //    END;
    // 
    //    IF :CDETALLE.OFIDAV IS NOT NULL THEN
    //       BEGIN
    //         SELECT V.OFI_DESCRIP
    //           INTO :CDETALLE.NOMOFD
    //           FROM CRTOFIDAV V
    //          WHERE V.OFI_COD = :CDETALLE.OFIDAV;
    //       EXCEPTION
    //         WHEN OTHERS THEN
    //           :CDETALLE.NOMOFD := NULL;
    //       END;
    //    ELSE
    //       :CDETALLE.NOMOFD := NULL;
    //    END IF;
    //    
    //    --INFORMACIÓN PROVEEDOR
    //    
    //    BEGIN
    // 
    //         SELECT P.REFPRV_CODPRV, T.TERNOM||' '||T.TERAPE
    //          INTO :CDETALLE.NITPRV, :CDETALLE.NOMPRV
    //          FROM OPS$COLOCA.CRTREFPRV P, TER T
    //         WHERE P.REFPRV_CODPRV = T.TERCOD  
    //           AND P.REFPRV_OFCSOL = :CDETALLE.OFC
    //           AND P.REFPRV_CODSOL = :CDETALLE.SOL
    //           AND P.REFPRV_CODUNI = :V_UNIDAD --ARQUITECTURA
    //           AND P.REFPRV_CODPRV <> '860034313';--NITS DIFERENTES AL DE DAVIVIENDA.
    //    
    //    EXCEPTION
    //          WHEN OTHERS THEN
    //            :CDETALLE.NITPRV := NULL;
    //            :CDETALLE.NOMPRV := NULL;
    //    END;
    //    
    //    --INFORMACIÓN DEL ORIGEN
    //    BEGIN
    //       SELECT M.REF_TIPO, D.DOMI_VLRCODIGO
    //         INTO :CDETALLE.TIPORI, :CDETALLE.DESORI
    //         FROM OPS$COLOCA.CMTREFER M, CMTDOMINIOS D
    //        WHERE M.REF_TIPO = D.DOMI_CODIGO
    //          AND D.DOMI_DOMINIO = 'ORIGEN'
    //          AND M.REF_NITREF = :CDETALLE.NIT;
    //          
    //    EXCEPTION 
    //      WHEN OTHERS THEN
    //        :CDETALLE.TIPORI := NULL;
    //        :CDETALLE.DESORI := NULL;
    //    END;
    //   
    //   --INFORMACIÓN TIPO DE VINCULO
    // 
    //   BEGIN
    //   SELECT L.COLTIP
    //     INTO :CDETALLE.TIPVIN
    //     FROM COL L
    //      WHERE L.COLTDOC= :CDETALLE.TIPO
    //        AND L.COLCOD = :CDETALLE.PLA;
    //   EXCEPTION 
    //    WHEN OTHERS THEN
    //      :CDETALLE.TIPVIN := NULL;
    //   END;
    //   
    //   IF :CDETALLE.TIPVIN IS NULL THEN
    //     DECLARE
    //      V_CANT PLS_INTEGER;
    // 
    //     BEGIN
    //      --SI SE TIENE POR LO MENOS UNA SOLICITUD VIGENTE, SE CONSIDERA MANTENIMIENTO
    //      IF :CDETALLE.NIT IS NOT NULL THEN
    //       SELECT COUNT(COLBEN)
    //         INTO V_CANT
    //        FROM COL 
    //        WHERE COLESTC = 'VI'
    //         AND COLBEN = :CDETALLE.NIT;
    // 
    //       IF V_CANT > 0 THEN
    //        :CDETALLE.TIPVIN :='MA';
    //       ELSE
    //        SELECT COUNT(COLBEN)
    //          INTO V_CANT
    //          FROM COL 
    //         WHERE COLESTC = 'CA'
    //          AND COLBEN = :CDETALLE.NIT;
    // 
    //        IF V_CANT >= 1 THEN
    //          :CDETALLE.TIPVIN :='RE';
    //         ELSE
    //         :CDETALLE.TIPVIN :='NU';
    //         END IF;   
    // 
    //         END IF; 
    //        END IF;
    //     END;
    //   END IF;
    //   --LCBY: 15689
    //  
    // 
    //   IF NVL(:CONTADOR, 0) = 0 THEN
    //     BEGIN
    //       BEGIN
    //         SELECT DESCRIPCION
    //           INTO V_OPCION
    //           FROM OPCIONES
    //          WHERE UPPER(PROGRAMA) = :SYSTEM.CURRENT_FORM
    //            AND PROGRAMA IS NOT NULL
    //            AND ROWNUM = 1;
    //       EXCEPTION
    //         WHEN OTHERS THEN
    //           V_OPCION := NULL;
    //       END;
    //       --EXECUTE_QUERY;
    //       OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('CONTRATOS_TRAMITE', :SYSTEM.LAST_QUERY, V_OPCION);
    //       --COMMIT;
    //       :CONTADOR := 1;
    //     END;
    //   
    //   END IF;
    // 
    //   :CDETALLE.DIAS_PROGR_SEGUI := TRUNC(:MAXFECPROXSEG) - TRUNC(:FECMAXSEG);
    //   
    //   COLOR_SEMAFORO(:CDETALLE.SEMAFORO,:CDETALLE.INDICADOR);
    //   
    //  
    //   
    // END;
    //#endregion
    async CRFCTOTR_cdetalle_postQuery() {
        console.log("Entering CRFCTOTR_cdetalle_postQuery");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OFC", this.CDETALLE.OFC);
        payload1.set("SOL", this.CDETALLE.SOL);
        // payload1.set("V_UNIDAD", V_UNIDAD);
        // call REST API
        const result1 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query1", payload1);
        // get values from result
        this.CDETALLE.LINEA_ESTRATEGICA = result1[0].get("CDETALLE.LINEA_ESTRATEGICA");
        if (result1 == null || result1.length == 0) {

            this.CDETALLE.LINEA_ESTRATEGICA = null;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("OFC", this.CDETALLE.OFC);
        payload2.set("SOL", this.CDETALLE.SOL);
        // payload2.set("V_UNIDAD", V_UNIDAD);
        // call REST API
        const result2 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query2", payload2);
        // get values from result
        this.CDETALLE.PLAZADESC = result2[0].get("CDETALLE.PLAZADESC");
        this.CDETALLE.SPREADP = result2[0].get("CDETALLE.SPREADP");
        this.CDETALLE.SPREADUSD = result2[0].get("CDETALLE.SPREADUSD");
        this.CDETALLE.SOLICR_ORMONET = result2[0].get("CDETALLE.SOLICR_ORMONET");
        this.CDETALLE.CODCOMER = result2[0].get("CDETALLE.CODCOMER");
        if (result2 == null || result2.length == 0) {

            this.CDETALLE.PLAZADESC = null;
            this.CDETALLE.SPREADP = null;
            this.CDETALLE.SPREADUSD = null;
        }

        // this.CDETALLE.UNIDAD = this.CDETALLE.V_UNIDAD;
        let result3 = new Map();
        try {

            // construct payload
            let payload3 = new Map();
            payload3.set("OFC", this.CDETALLE.OFC);
            payload3.set("SOL", this.CDETALLE.SOL);
            // payload3.set("V_UNIDAD", V_UNIDAD);
            // call REST API
            const result3 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query3", payload3);
            // get values from result
            this.CDETALLE.OFIDAV = result3[0].get("CDETALLE.OFIDAV");
        } catch (ex) {

            this.CDETALLE.OFIDAV = null;
        }

        if ((this.CDETALLE.OFIDAV != null)) {
            let result4 = new Map();
            try {

                // construct payload
                let payload4 = new Map();
                payload4.set("OFIDAV", this.CDETALLE.OFIDAV);
                // call REST API
                const result4 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query4", payload4);
                // get values from result
                this.CDETALLE.NOMOFD = result4[0].get("CDETALLE.NOMOFD");
            } catch (ex) {

                this.CDETALLE.NOMOFD = null;
            }

        }
        else {
            this.CDETALLE.NOMOFD = null;
        }
        let result5 = new Map();
        try {

            // construct payload
            let payload5 = new Map();
            payload5.set("OFC", this.CDETALLE.OFC);
            payload5.set("SOL", this.CDETALLE.SOL);
            // payload5.set("V_UNIDAD", V_UNIDAD);
            // call REST API
            const result5 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query5", payload5);
            // get values from result
            this.CDETALLE.NITPRV = result5[0].get("CDETALLE.NITPRV");
            this.CDETALLE.NOMPRV = result5[0].get("CDETALLE.NOMPRV");
        } catch (ex) {

            this.CDETALLE.NITPRV = null;
            this.CDETALLE.NOMPRV = null;
        }

        let result6 = new Map();
        try {

            // construct payload
            let payload6 = new Map();
            payload6.set("NIT", this.CDETALLE.NIT);
            // call REST API
            const result6 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query6", payload6);
            // get values from result
            this.CDETALLE.TIPORI = result6[0].get("CDETALLE.TIPORI");
            this.CDETALLE.DESORI = result6[0].get("CDETALLE.DESORI");
        } catch (ex) {

            this.CDETALLE.TIPORI = null;
            this.CDETALLE.DESORI = null;
        }

        let result7 = new Map();
        try {

            // construct payload
            let payload7 = new Map();
            payload7.set("TIPO", this.CDETALLE.TIPO);
            payload7.set("PLA", this.CDETALLE.PLA);
            // call REST API
            const result7 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query7", payload7);
            // get values from result
            this.CDETALLE.TIPVIN = result7[0].get("CDETALLE.TIPVIN");
        } catch (ex) {

            this.CDETALLE.TIPVIN = null;
        }

        if ((this.CDETALLE.TIPVIN == null)) {
            {

                let V_CANT: number = null;
                if ((this.CDETALLE.NIT != null)) {
                    // construct payload
                    let payload8 = new Map();
                    payload8.set("NIT", this.CDETALLE.NIT);
                    // call REST API
                    const result8 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query8", payload8);
                    // get values from result
                    V_CANT = result8[0].get("V_CANT");
                    if (V_CANT > 0) {
                        this.CDETALLE.TIPVIN = "MA";
                    }
                    else {
                        // construct payload
                        let payload9 = new Map();
                        payload9.set("NIT", this.CDETALLE.NIT);
                        // call REST API
                        const result9 = await Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query9", payload9);
                        // get values from result
                        V_CANT = result9[0].get("V_CANT");
                        if (V_CANT >= 1) {
                            this.CDETALLE.TIPVIN = "RE";
                        }
                        else {
                            this.CDETALLE.TIPVIN = "NU";
                        }
                    }
                }
            }

        }
        if (this.PARAMETROS.CONTADOR == null ? 0 : this.PARAMETROS.CONTADOR == 0) {
            let result10 = new Map();
            try {

                // construct payload
                let payload10 = new Map();
                // payload10.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
                // call REST API
                // result10 = Rest.post("/crfctotr_cdetalle/crfctotr_cdetalle_postquery_query10", payload10);
                // get values from result
                V_OPCION = result10[0].get("V_OPCION");
            } catch (ex) {

                V_OPCION = null;
            }

            // CRFCTOTR_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("CONTRATOS_TRAMITE", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
            // this.CDETALLE.CONTADOR = 1;
        }
        // this.CDETALLE.DIAS_PROGR_SEGUI = TRUNC(MAXFECPROXSEG) - TRUNC(FECMAXSEG);
        // CRFCTOTR_COLOR_SEMAFORO(CDETALLE.SEMAFORO, CDETALLE.INDICADOR);
        console.log("Exiting CRFCTOTR_cdetalle_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA NUMBER;
    // BEGIN 
    // IF :V_VER = '1' THEN
    //  PU_LLAMAR_SOLICITUD (:OFC,:TIPO, :SOL, 'Q');
    //  :V_VER := '0';
    // ELSIF :V_VER = '2' THEN
    //   PU_LLAMAR_PLANEACION(:OFC,:NIT,:SOL, 'Q');
    //   :V_VER := '0';
    // ELSIF :V_VER = '3' THEN
    //   PU_LLAMAR_CONTRATO('L','001',:TIPO,:PLA,'Q');
    //   :V_VER := '0';
    // ELSIF :V_VER = '4' THEN
    //  IF :ESTSOL = 'RE' THEN
    //   LIB$DTNERFRMA('SOLO SE PUEDEN CONSULTAR SOLICITUDES DIFERENTES A ESTADO [RE]');
    //  ELSE
    //   LIB$ALERTA('MENSAJE','¡ IMPORTANTE ! AL INGRESAR EN ESTA OPCIÓN PUEDE GENERAR FUTUROS SEGUIMIENTOS"',NULL, NULL,NULL, T_RESPUESTA);
    //   PU_LLAMAR_SEGUIDOC (:OFC,:NIT,:SOL,:PLA,'PE','Q');
    //   :V_VER := '0';
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CRFCTOTR_cdetalle_vVer_whenRadioChanged() {
        console.log("Entering CRFCTOTR_cdetalle_vVer_whenRadioChanged");
        let T_RESPUESTA: number = null;
        // if (this.RSPLAZAV_VER == "1") {
        //     CRFCTOTR_PU_LLAMAR_SOLICITUD(OFC, TIPO, SOL, "Q");
        //     this.CDETALLE.V_VER = "0";
        // }
        // else if (V_VER == "2") {
        //     CRFCTOTR_PU_LLAMAR_PLANEACION(OFC, NIT, SOL, "Q");
        //     this.CDETALLE.V_VER = "0";
        // }
        // else if (V_VER == "3") {
        //     CRFCTOTR_PU_LLAMAR_CONTRATO("L", "001", TIPO, PLA, "Q");
        //     this.CDETALLE.V_VER = "0";
        // }
        // else if (V_VER == "4") {
        //     if (ESTSOL == "RE") {
        //         CRFCTOTR_LIB$DTNERFRMA("SOLO SE PUEDEN CONSULTAR SOLICITUDES DIFERENTES A ESTADO [RE]");
        //     }
        //     else {
        //         CRFCTOTR_LIB$ALERTA("MENSAJE", "¡ IMPORTANTE ! AL INGRESAR EN ESTA OPCIÓN PUEDE GENERAR FUTUROS SEGUIMIENTOS", null, null, null, T_RESPUESTA);
        //         CRFCTOTR_PU_LLAMAR_SEGUIDOC(OFC, NIT, SOL, PLA, "PE", "Q");
        //         this.CDETALLE.V_VER = "0";
        //     }
        // }
        console.log("Exiting CRFCTOTR_cdetalle_vVer_whenRadioChanged");
    }

    //#region PLSQL
    // DECLARE
    //  --PLAZAS DISPONIBLES
    //   CURSOR C1 IS     
    //     SELECT PLAZAS_CODIGO COD,
    //            PLAZAS_DESCRI OBS
    //     FROM CMTPLAZAS
    //    UNION
    //     SELECT '%%%', 'TODAS'
    //     FROM DUAL
    //     ORDER BY 1 DESC;   
    // ----------------------------------------------------------------
    // -- VARIABLES
    // -----------------------------------------------------------------    
    // --VARIABLES
    //   IT_ID  ITEM;
    //               
    // BEGIN
    //   IT_ID := FIND_ITEM('PARAMETROS.V_PLAZAS'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LAS PLAZAS.');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.OBS, ACC.COD);
    //      END LOOP;
    //   END IF;  
    // END;
    //#endregion
    async CRFCTOTR_parametros_whenNewRecordInstance() {
        console.log("Entering CRFCTOTR_parametros_whenNewRecordInstance");
        let IT_ID: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("PARAMETROS.V_PLAZAS");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LAS PLAZAS.");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        console.log("Exiting CRFCTOTR_parametros_whenNewRecordInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //   BEGIN
    //    IF  :PARAMETROS.V_UNIDAD IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA UNIDAD ', NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //   END;
    //   
    // DECLARE 
    //  -- DEVUELVE EL USUARIO CONECTADO
    //  CURSOR C_NOM_USUARIO IS
    //  (SELECT OSUSER
    //    FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //     AND ROWNUM=1);
    // 
    //  NOM_USUARIO  OPS$AUDI.AUVSESION.OSUSER%TYPE; 
    //  CADENA VARCHAR2(100);
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOGENID PARAMLIST;
    // BEGIN
    //  
    //  OPEN C_NOM_USUARIO;
    //  FETCH C_NOM_USUARIO INTO NOM_USUARIO;
    //  CLOSE C_NOM_USUARIO;
    //  
    //  CADENA := '\\'||NOM_USUARIO||'\COMPARTIDO\CARPGRCIAL.CSV';
    //  
    //   LIB$ALERTA('MENSAJE','ESCOJA EL MODO DE EXTRACCIÓN'
    //           ,'ARCHIVO PLANO', 'IMPRESIÓN','CANCELAR', VBOTON);
    //   IF VBOTON = 2 THEN
    //    LIB$ALERTA('MENSAJE','QUÉ REPORTE DESEA GENERAR ?'
    //           ,'VOLVER', 'REPORTE X OFICIAL','CANCELAR', VBOTON);
    //     IF VBOTON = 1 THEN
    //      GO_BLOCK('PARAMETROS');
    //     /* 
    //     
    //     'REPORTE X PLAZA'
    //     
    //      LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //      IF NOT ID_NULL(LPCOGENID) THEN
    //       DESTROY_PARAMETER_LIST(LPCOGENID);
    //      END IF;
    //      LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //      ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //      ADD_PARAMETER(LPCOGENID, 'DESNAME', "TEXT_PARAMETER", CADENA);
    //      --ADD_PARAMETER(LPCOGENID, 'BACKGROUND', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //      ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", :PARAMETROS.V_FECINI);
    //      ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", :PARAMETROS.V_FECFIN);
    //      ADD_PARAMETER(LPCOGENID, 'PU_LINEAS', "TEXT_PARAMETER", :PARAMETROS.V_OPCION);
    //      ADD_PARAMETER(LPCOGENID, 'PU_PLAZAS', "TEXT_PARAMETER", :PARAMETROS.V_PLAZAS);
    //      RUN_PRODUCT(REPORTS, 'CRRCTOTR', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, NULL);
    //    */
    //     ELSIF VBOTON = 2 THEN
    //       LPCOGENID := GET_PARAMETER_LIST('LPCOGEN');
    //      IF NOT ID_NULL(LPCOGENID) THEN
    //       DESTROY_PARAMETER_LIST(LPCOGENID);
    //      END IF;
    //      LPCOGENID := CREATE_PARAMETER_LIST('LPCOGEN');
    //      ADD_PARAMETER(LPCOGENID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPCOGENID, 'PARAMFORM', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPCOGENID, 'BACKGROUND', "TEXT_PARAMETER", 'YES');
    //      ADD_PARAMETER(LPCOGENID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //      ADD_PARAMETER(LPCOGENID, 'DESNAME', "TEXT_PARAMETER", CADENA);
    //      ADD_PARAMETER(LPCOGENID, 'PU_FECINI', "TEXT_PARAMETER", :PARAMETROS.V_FECINI);
    //      ADD_PARAMETER(LPCOGENID, 'PU_FECFIN', "TEXT_PARAMETER", :PARAMETROS.V_FECFIN);
    //      ADD_PARAMETER(LPCOGENID, 'PU_LINEAS', "TEXT_PARAMETER", :PARAMETROS.V_OPCION);
    //      ADD_PARAMETER(LPCOGENID, 'PU_PLAZAS', "TEXT_PARAMETER", :PARAMETROS.V_PLAZAS);
    //      ADD_PARAMETER(LPCOGENID, 'P_UNIDAD', "TEXT_PARAMETER", :PARAMETROS.V_UNIDAD); --ARQUITECTURA
    //      RUN_PRODUCT(REPORTS, 'CRRCTTRO', SYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, 
    //      NULL);  
    //     END IF;    
    //   ELSIF VBOTON = 1 THEN
    //     GO_BLOCK('CDETALLE');
    //     EXECUTE_QUERY;
    //     :this.PARAMETER.get("PBLOACT") := 'CDETALLE';  
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     --:BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARCONG");
    //     :BBOTONES.ARCHIVOB := CADENA;
    //   END IF;
    // END;
    //#endregion
    async CRFCTOTR_parametros_vReport_whenButtonPressed() {
        console.log("Entering CRFCTOTR_parametros_vReport_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((this.PARAMETROS.V_UNIDAD == null)) {
            // CRFCTOTR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA UNIDAD ", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        let NOM_USUARIO: null = null;
        let CADENA: string = null;
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: any = null;
        CADENA = "\\" + NOM_USUARIO + "\COMPARTIDO\CARPGRCIAL.CSV";
        // CRFCTOTR_LIB$ALERTA("MENSAJE", "ESCOJA EL MODO DE EXTRACCIÓN", "ARCHIVO PLANO", "IMPRESIÓN", "CANCELAR", VBOTON);
        if (VBOTON == 2) {
            // CRFCTOTR_LIB$ALERTA("MENSAJE", "QUÉ REPORTE DESEA GENERAR ?", "VOLVER", "REPORTE X OFICIAL", "CANCELAR", VBOTON);
            if (VBOTON = 1) {
                this.oracleFormsBuiltins.go_block("PARAMETROS");
            }
            else if (VBOTON == 2) {
                LPCOGENID = this.oracleFormsBuiltins.get_parameter_list("LPCOGEN");
                if ((!this.oracleFormsBuiltins.id_null(LPCOGENID))) {
                    this.oracleFormsBuiltins.destroy_parameter_list(LPCOGENID);
                }
                LPCOGENID = this.oracleFormsBuiltins.create_parameter_list("LPCOGEN");
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PARAMFORM", "TEXT_PARAMETER", "YES");
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "BACKGROUND", "TEXT_PARAMETER", "YES");
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "DESNAME", "TEXT_PARAMETER", CADENA);
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECINI", "TEXT_PARAMETER", this.PARAMETROS.V_FECINI.toString());
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_FECFIN", "TEXT_PARAMETER", this.PARAMETROS.V_FECFIN.toString());
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_LINEAS", "TEXT_PARAMETER", this.PARAMETROS.V_OPCION);
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "PU_PLAZAS", "TEXT_PARAMETER", this.PARAMETROS.V_PLAZAS);
                this.oracleFormsBuiltins.add_parameter(LPCOGENID, "P_UNIDAD", "TEXT_PARAMETER", this.PARAMETROS.V_UNIDAD);
                // this.oracleFormsBuiltins.run_product(REPORTS, "CRRCTTRO", SYNCHRONOUS, RUNTIME, FILESYSTEM, LPCOGENID, null);
            }
        }
        else if (VBOTON == 1) {
            this.oracleFormsBuiltins.go_block("CDETALLE");
            this.oracleFormsBuiltins.execute_query();
            this.PARAMETER.set("PBLOACT", "CDETALLE");
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = CADENA;
        }
        console.log("Exiting CRFCTOTR_parametros_vReport_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA NUMBER;
    //   BEGIN
    //    IF  :PARAMETROS.V_UNIDAD IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA UNIDAD A CONSULTAR', NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //   END;
    // GO_BLOCK('RSPLAZA');
    // EXECUTE_QUERY;
    //#endregion
    async CRFCTOTR_parametros_vBtejec_whenButtonPressed() {
        console.log("Entering CRFCTOTR_parametros_vBtejec_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((this.PARAMETROS.V_UNIDAD == null)) {
            // CRFCTOTR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA UNIDAD A CONSULTAR", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCTOTR_parametros_vBtejec_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VAR_UNI NUMBER;
    // 
    // BEGIN  
    //   IF :PARAMETROS.V_UNIDAD IS NOT NULL THEN
    //     BEGIN
    //       SELECT CTTUNICO_UNDNEG 
    //       INTO   VAR_UNI
    //       FROM   CTTUNICO
    //       WHERE  CTTUNICO_UNDNEG = :PARAMETROS.V_UNIDAD; 
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //         :PARAMETROS.V_UNIDAD := NULL;
    //           LIB$DTNERFRMA('LA UNIDAD '||:PARAMETROS.V_UNIDAD||'-'||' NO EXISTE EN LA BASE DE DATOS' );
    //         WHEN TOO_MANY_ROWS THEN NULL;         
    //       END;
    // END IF;
    // END;
    //#endregion
    async CRFCTOTR_parametros_vUnidad_whenValidateItem() {
        console.log("Entering CRFCTOTR_parametros_vUnidad_whenValidateItem");
        let VAR_UNI: number = null;
        if ((this.PARAMETROS.V_UNIDAD != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("V_UNIDAD", this.PARAMETROS.V_UNIDAD);
            // call REST API
            const result1 = await Rest.post("/crfctotr_parametros/crfctotr_parametros_vunidad_whenvalidateitem_query1", payload1);
            // get values from result
            VAR_UNI = result1[0].get("VAR_UNI");
            if (result1 == null || result1.length == 0) {

                this.PARAMETROS.V_UNIDAD = null;
                // CRFCTOTR_LIB$DTNERFRMA("LA UNIDAD " + this.PARAMETROS.V_UNIDAD + "-" + " NO EXISTE EN LA BASE DE DATOS");
            }

        }
        console.log("Exiting CRFCTOTR_parametros_vUnidad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_toolbar_whenButtonPressed() {
        console.log("Entering CRFCTOTR_toolbar_whenButtonPressed");
        console.log("Exiting CRFCTOTR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_toolbar_whenMouseLeave() {
        console.log("Entering CRFCTOTR_toolbar_whenMouseLeave");
        console.log("Exiting CRFCTOTR_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCTOTR_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCTOTR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   LIB$MNSJEOCPDO('GENERANDO EL ARCHIVO PLANO',NULL);
    //   PPLABLOQ(NVL(:this.PARAMETER.get("PBLOACT"),'CDETALLE'),:BBOTONES.ARCHIVOB);
    //   LIB$MNSJEOCPDOOFF;
    //   GO_BLOCK(:this.PARAMETER.get("PBLOACT"));
    //   --GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   --GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async CRFCTOTR_bbotones_aceptarb_whenButtonPressed() {
        console.log("Entering CRFCTOTR_bbotones_aceptarb_whenButtonPressed");
        // CRFCTOTR_LIB$MNSJEOCPDO("GENERANDO EL ARCHIVO PLANO", null);
        // CRFCTOTR_PPLABLOQ(this.PARAMETER.get("PBLOACT") == null ? "CDETALLE" : this.PARAMETER.get("PBLOACT"), BBOTONES.ARCHIVOB);
        // CRFCTOTR_LIB$MNSJEOCPDOOFF();
        this.oracleFormsBuiltins.go_block(this.PARAMETER.get("PBLOACT"));
        console.log("Exiting CRFCTOTR_bbotones_aceptarb_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK(:this.PARAMETER.get("PBLOACT"));
    //   --GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   --GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async CRFCTOTR_bbotones_cancelarb_whenButtonPressed() {
        console.log("Entering CRFCTOTR_bbotones_cancelarb_whenButtonPressed");
        this.oracleFormsBuiltins.go_block(this.PARAMETER.get("PBLOACT"));
        console.log("Exiting CRFCTOTR_bbotones_cancelarb_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTOTR_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCTOTR_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCTOTR_base_fecha_whenNewItemInstance");
    }

}

