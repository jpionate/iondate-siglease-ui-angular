import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFCONGAR business logic
import {
    CRTCONTROL,
    RANGO,
    BOTONES,
    TOOLBAR,
    BASE
} from "./COFCONGAR_models";



// class COFCONGAR
@Component({
    selector: 'app-cofcongar',
    templateUrl: './cofcongar.component.html',
})
export class CofcongarComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTCONTROL: CRTCONTROL = new CRTCONTROL();
    public RANGO: RANGO = new RANGO();
    public BOTONES: BOTONES = new BOTONES();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONGAR_whenMouseDoubleclick() {
        console.log("Entering COFCONGAR_whenMouseDoubleclick");
        console.log("Exiting COFCONGAR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    // END;
    //#endregion
    async COFCONGAR_preForm() {
        console.log("Entering COFCONGAR_preForm");
        // COFCONGAR_PANTALLA();
        console.log("Exiting COFCONGAR_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONGAR_whenNewFormInstance() {
        console.log("Entering COFCONGAR_whenNewFormInstance");
        console.log("Exiting COFCONGAR_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async COFCONGAR_keyDown() {
        console.log("Entering COFCONGAR_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting COFCONGAR_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    // /* 
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
    // */
    // 
    // -- CONSULTA LA FECHA DE GRABACIÓN DE LA GARANTIA
    //  BEGIN
    //  SELECT MAX(A.ESTDOC_FECREG)
    //    INTO :W_FECHA_GARANTIA
    //     FROM CRTESTDOC A
    //    WHERE A.ESTDOC_OFCSOL = :CRTCONTROL.CONTROL_OFCSOL
    //      AND A.ESTDOC_CODSOL = :CRTCONTROL.CONTROL_CODSOL
    //      AND A.ESTDOC_TIPCRE = :CRTCONTROL.CONTROL_TIPCRE
    //      AND A.ESTDOC_PLANEA = :CRTCONTROL.CONTROL_PLANEA;
    //     -- AND ROWNUM = 1;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :W_FECHA_GARANTIA := NULL;
    //   WHEN OTHERS THEN
    //   LIB$DTNERFRMA('ERROR AL CONSULTAR LA FECHA DE GRABACIÓN DE GARANTIAS.'||'-'||SQLERRM); 
    //  END; 
    // --
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
    //      AND T.CONTROL_TIPCRE = :CRTCONTROL.CONTROL_TIPCRE;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE', 'NO EXISTE OFICIAL DE DESEMBOLSO.',NULL,NULL,NULL, T_RESPUESTA);
    //      --LIB$DTNERFRMA('NO EXISTE OFICIAL DE DESEMBOLSO.');
    //     --MESSAGE('NO HAY OFICINA DE DESEMBOLSO');
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA('ERROR AL CONSULTAR EL OFICIAL DE DESEMBOLSO.'||'-'||SQLERRM);
    //       --MESSAGE('ERROR 3') ;
    //   END;    
    // 
    // /*   
    //  BEGIN   
    //  SELECT S.TLINCOD, S.TLINDES --USU_NOMBRE
    //    INTO :SOLICR_LINEADES, :LINEA_DESEMBOLSO
    //    FROM CRTCONTROL T, CRTSOLICR C, TLIN S
    //   WHERE T.CONTROL_OFCSOL  = C.SOLICR_OFCSOL
    //     AND T.CONTROL_CODSOL  = C.SOLICR_CODSOL
    //     AND C.SOLICR_LINEADES = S.TLINCOD (+)
    //     AND T.CONTROL_CODSOL  = :CRTCONTROL.CONTROL_CODSOL   
    //     AND T.CONTROL_PLANEA  = :CRTCONTROL.CONTROL_PLANEA
    //     AND T.CONTROL_TIPCRE  = :CRTCONTROL.CONTROL_TIPCRE;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE', 'NO HAY LINEAS DE DESEMBOLSOS.',NULL,NULL,NULL, T_RESPUESTA);
    //    --MESSAGE('NO HAY LINEAS DE DESEMBOLSOS');
    //     WHEN OTHERS THEN
    //     MESSAGE('ERROR AL COSNULTAR LA LINEA DE DESEMBOLSO.'||'-'||SQLERRM);
    //  END;    
    // */    
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
    //    --LIB$DTNERFRMA('NO HAY DATOS DE FECHA DEL CONTRATO.');  
    //    LIB$ALERTA('MENSAJE', 'NO HAY DATOS DE FECHA DE INICIO DEL CONTRATO.',NULL,NULL,NULL, T_RESPUESTA);
    //     --MESSAGE('NO HAY DATOS DE FECHA DEL CONTRATO');
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA('ERROR AL CONSULTAR LA FECHA DEL CONTRATO.');        
    //       --MESSAGE('ERROR 5'); 
    //  END; 
    // 
    // END;
    //#endregion
    async COFCONGAR_crtcontrol_postQuery() {
        console.log("Entering COFCONGAR_crtcontrol_postQuery");
        let T_RESPUESTA: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("CONTROL_OFCSOL", this.CRTCONTROL.CONTROL_OFCSOL);
            payload1.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            payload1.set("CONTROL_TIPCRE", this.CRTCONTROL.CONTROL_TIPCRE);
            payload1.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
            // call REST API
            const result1 = await Rest.post("/cofcongar_crtcontrol/cofcongar_crtcontrol_postquery_query1", payload1);
            // get values from result
            // W_FECHA_GARANTIA = result1[0].get("W_FECHA_GARANTIA");
            if (result1 == null || result1.length == 0) {

                this.CRTCONTROL.W_FECHA_GARANTIA = null;
            }

        } catch (ex) {
            //COFCONGAR_LIB$DTNERFRMA("ERROR AL CONSULTAR LA FECHA DE GRABACIÓN DE GARANTIAS." + "-" + SQLERRM);
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            payload2.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
            payload2.set("CONTROL_TIPCRE", this.CRTCONTROL.CONTROL_TIPCRE);
            // call REST API
            const result2 = await Rest.post("/cofcongar_crtcontrol/cofcongar_crtcontrol_postquery_query2", payload2);
            // get values from result
            //SOLICR_USOFID = result2[0].get("SOLICR_USOFID");
            //OFI_DESEMBOLSO = result2[0].get("OFI_DESEMBOLSO");
            if (result2 == null || result2.length == 0) {

                // COFCONGAR_LIB$ALERTA("MENSAJE", "NO EXISTE OFICIAL DE DESEMBOLSO.", null, null, null, T_RESPUESTA);
            }

        } catch (ex) {

            // COFCONGAR_LIB$DTNERFRMA("ERROR AL CONSULTAR EL OFICIAL DE DESEMBOLSO." + "-" + SQLERRM);
        }

        let result3 = new Map();
        try {

            // construct payload
            let payload3 = new Map();
            payload3.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            payload3.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
            payload3.set("CONTROL_TIPCRE", this.CRTCONTROL.CONTROL_TIPCRE);
            // call REST API
            const result3 = await Rest.post("/cofcongar_crtcontrol/cofcongar_crtcontrol_postquery_query3", payload3);
            // get values from result
            // FECHA_INI_CONTRATO = result3[0].get("FECHA_INI_CONTRATO");
            if (result3 == null || result3.length == 0) {

                // COFCONGAR_LIB$ALERTA("MENSAJE", "NO HAY DATOS DE FECHA DE INICIO DEL CONTRATO.", null, null, null, T_RESPUESTA);
            }

        } catch (ex) {

            // COFCONGAR_LIB$DTNERFRMA("ERROR AL CONSULTAR LA FECHA DEL CONTRATO.");
        }

        console.log("Exiting COFCONGAR_crtcontrol_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN 
    //  IF :CONTROL_VBCAJA <> 'OK' AND :CONTROL_VBCAJA IS NOT NULL THEN
    //   LIB$ALERTA('MENSAJE', 'SOLO SE PERMITE OK.',NULL,NULL,NULL, T_RESPUESTA);
    //   :CONTROL_VBCAJA := 'OK';
    //  END IF; 
    //  IF :CONTROL_VBCAJA = 'OK' THEN
    //   :CONTROL_FECCAJ := TO_DATE(TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI'),'YYYY-MM-DD HH24:MI');
    //  ELSIF :CONTROL_VBCAJA IS NULL THEN
    //   :CONTROL_FECCAJ := NULL;
    //  END IF;
    // END; 
    //  
    //#endregion
    async COFCONGAR_crtcontrol_controlVbcaja_whenValidateItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbcaja_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTCONTROL.CONTROL_VBCAJA != "OK" && (this.CRTCONTROL.CONTROL_VBCAJA != null))) {
            // COFCONGAR_LIB$ALERTA("MENSAJE", "SOLO SE PERMITE OK.", null, null, null, T_RESPUESTA);
            this.CRTCONTROL.CONTROL_VBCAJA = "OK";
        }
        if (this.CRTCONTROL.CONTROL_VBCAJA == "OK") {
            this.CRTCONTROL.CONTROL_FECCAJ = new Date(PLSQLBuiltins.sysdate().toString()).toString();
        }
        else if ((this.CRTCONTROL.CONTROL_VBCAJA == null)) {
            this.CRTCONTROL.CONTROL_FECCAJ = null;
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbcaja_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CONTROL_VBCAJA = 'OK' THEN
    //    COMMIT;
    //    NEXT_ITEM;
    // END IF; END;
    //#endregion
    async COFCONGAR_crtcontrol_controlVbcaja_keyNextItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbcaja_keyNextItem");
        if (this.CRTCONTROL.CONTROL_VBCAJA == "OK") {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbcaja_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN 
    // IF :CONTROL_VBDESE <> 'OK' AND :CONTROL_VBDESE IS NOT NULL THEN
    //  LIB$ALERTA('MENSAJE', 'SOLO SE PERMITE OK.',NULL,NULL,NULL, T_RESPUESTA);
    //  :CONTROL_VBDESE := 'OK';
    // END IF; 
    // 
    // IF :CONTROL_VBDESE = 'OK' THEN
    //  :CONTROL_FECDES := TO_DATE(TO_CHAR(SYSDATE,'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    // ELSIF :CONTROL_VBDESE IS NULL THEN
    //  :CONTROL_FECDES := NULL; 
    // END IF;
    // 
    // END;
    //#endregion
    async COFCONGAR_crtcontrol_controlVbdese_whenValidateItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbdese_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTCONTROL.CONTROL_VBDESE != "OK" && (this.CRTCONTROL.CONTROL_VBDESE != null))) {
            // COFCONGAR_LIB$ALERTA("MENSAJE", "SOLO SE PERMITE OK.", null, null, null, T_RESPUESTA);
            this.CRTCONTROL.CONTROL_VBDESE = "OK";
        }
        if (this.CRTCONTROL.CONTROL_VBDESE == "OK") {
            this.CRTCONTROL.CONTROL_FECDES = new Date(PLSQLBuiltins.sysdate().toString()).toString();
        }
        else if ((this.CRTCONTROL.CONTROL_VBDESE == null)) {
            this.CRTCONTROL.CONTROL_FECDES = null;
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbdese_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CONTROL_VBDESE = 'OK' THEN
    //    COMMIT;
    //    NEXT_ITEM;
    // END IF; END;
    //#endregion
    async COFCONGAR_crtcontrol_controlVbdese_keyNextItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbdese_keyNextItem");
        if (this.CRTCONTROL.CONTROL_VBDESE == "OK") {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbdese_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN 
    //  IF :CONTROL_VBENVI <> 'OK' AND :CONTROL_VBENVI IS NOT NULL THEN
    //   LIB$ALERTA('MENSAJE', 'SOLO SE PERMITE OK.',NULL,NULL,NULL, T_RESPUESTA);
    //   :CONTROL_VBENVI := 'OK';
    //  END IF; 
    // 
    //  IF :CONTROL_VBENVI = 'OK' THEN
    //   :CONTROL_FECENV := TO_DATE(TO_CHAR(SYSDATE,'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    //  ELSIF :CONTROL_VBENVI IS NULL THEN
    //   :CONTROL_FECENV := NULL;
    //  END IF;
    // END;
    //#endregion
    async COFCONGAR_crtcontrol_controlVbenvi_whenValidateItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbenvi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTCONTROL.CONTROL_VBENVI != "OK" && (this.CRTCONTROL.CONTROL_VBENVI != null))) {
            // COFCONGAR_LIB$ALERTA("MENSAJE", "SOLO SE PERMITE OK.", null, null, null, T_RESPUESTA);
            this.CRTCONTROL.CONTROL_VBENVI = "OK";
        }
        if (this.CRTCONTROL.CONTROL_VBENVI == "OK") {
            this.CRTCONTROL.CONTROL_FECENV = new Date(PLSQLBuiltins.sysdate().toString()).toString();
        }
        else if ((this.CRTCONTROL.CONTROL_VBENVI == null)) {
            this.CRTCONTROL.CONTROL_FECENV = null;
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbenvi_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CONTROL_VBENVI = 'OK' THEN
    //    COMMIT;
    //    NEXT_ITEM;
    // END IF; END;
    //#endregion
    async COFCONGAR_crtcontrol_controlVbenvi_keyNextItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbenvi_keyNextItem");
        if (this.CRTCONTROL.CONTROL_VBENVI == "OK") {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbenvi_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN 
    //  IF :CONTROL_VBFACT <> 'OK' AND :CONTROL_VBFACT IS NOT NULL THEN
    //   LIB$ALERTA('MENSAJE', 'SOLO SE PERMITE OK.',NULL,NULL,NULL, T_RESPUESTA);
    //   :CONTROL_VBFACT := 'OK';
    //  END IF; 
    //  IF :CONTROL_VBFACT = 'OK' THEN
    //   :CONTROL_FECFAC := TO_DATE(TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI'),'YYYY-MM-DD HH24:MI');
    //  ELSIF :CONTROL_VBFACT IS NULL THEN
    //   :CONTROL_FECFAC := NULL;
    //  END IF;
    // END; 
    //#endregion
    async COFCONGAR_crtcontrol_controlVbfact_whenValidateItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbfact_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTCONTROL.CONTROL_VBFACT != "OK" && (this.CRTCONTROL.CONTROL_VBFACT != null))) {
            // COFCONGAR_LIB$ALERTA("MENSAJE", "SOLO SE PERMITE OK.", null, null, null, T_RESPUESTA);
            this.CRTCONTROL.CONTROL_VBFACT = "OK";
        }
        if (this.CRTCONTROL.CONTROL_VBFACT == "OK") {
            this.CRTCONTROL.CONTROL_FECFAC = new Date(PLSQLBuiltins.sysdate.toString());
        }
        else if ((this.CRTCONTROL.CONTROL_VBFACT == null)) {
            this.CRTCONTROL.CONTROL_FECFAC = null;
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbfact_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN 
    //  
    // IF :CONTROL_VBFACT = 'OK' THEN
    //    COMMIT;
    //    NEXT_ITEM;
    // /*
    // ELSE
    //    LIB$ALERTA('MENSAJE', 'SOLO SE PERMITE OK.',NULL,NULL,NULL, T_RESPUESTA);
    //   :CONTROL_VBFACT := 'OK';
    //   :CONTROL_FECFAC := TO_DATE(TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI'),'YYYY-MM-DD HH24:MI');  
    // */
    // END IF; 
    // 
    // END;
    //#endregion
    async COFCONGAR_crtcontrol_controlVbfact_keyNextItem() {
        console.log("Entering COFCONGAR_crtcontrol_controlVbfact_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTCONTROL.CONTROL_VBFACT == "OK") {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting COFCONGAR_crtcontrol_controlVbfact_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :W_MARCA = 'S' THEN
    //   NEXT_ITEM;
    // ELSE
    //   :W_CODIGO := NULL;
    //   :W_NOMBRE := NULL;
    // END IF; END;
    //#endregion
    async COFCONGAR_rango_wMarca_whenCheckboxChanged() {
        console.log("Entering COFCONGAR_rango_wMarca_whenCheckboxChanged");
        // if (W_MARCA == "S") {
        //     this.oracleFormsBuiltins.next_item();
        // }
        // else {
        //     this.RANGO.W_CODIGO = null;
        //     this.RANGO.W_NOMBRE = null;
        // }
        console.log("Exiting COFCONGAR_rango_wMarca_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN
    // SELECT USU_NOMBRE
    //   INTO :W_NOMBRE
    //   FROM SGUSUARIOS
    //  WHERE USU_ESTADO = 'A'
    //    AND USU_CODIGO = :W_CODIGO;
    // EXCEPTION WHEN OTHERS THEN
    //  :W_NOMBRE := NULL;
    // END;
    //#endregion
    async COFCONGAR_rango_wCodigo_whenValidateItem() {
        console.log("Entering COFCONGAR_rango_wCodigo_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("W_CODIGO", W_CODIGO);
            // call REST API
            const result1 = await Rest.post("/cofcongar_rango/cofcongar_rango_wcodigo_whenvalidateitem_query1", payload1);
            // get values from result
            // W_NOMBRE = result1[0].get("W_NOMBRE");
        } catch (ex) {

            this.RANGO.W_NOMBRE = null;
        }

        console.log("Exiting COFCONGAR_rango_wCodigo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :W_MARCA = 'N' OR :W_MARCA IS NULL THEN
    //  BEGIN
    //  SELECT COUNT(*)
    //    INTO :W_CANTIDAD
    //    FROM CRTCONTROL, COL
    //   WHERE CONTROL_TIPCRE = COLTDOC
    //     AND CONTROL_PLANEA = COLCOD
    //    -- AND COLESTC = 'VI'
    //     AND CONTROL_ESTGRL = 'DE'
    //     AND EXISTS (SELECT 1 FROM CRTESTDOC  
    //                  WHERE ESTDOC_CODOPER = '902'
    //                    AND CONTROL_OFCSOL = ESTDOC_OFCSOL 
    //                    AND CONTROL_CODSOL = ESTDOC_CODSOL 
    //                    AND CONTROL_TIPCRE = ESTDOC_TIPCRE 
    //                    AND CONTROL_PLANEA = ESTDOC_PLANEA
    //                    AND TO_DATE(TO_CHAR(ESTDOC_FECREG,'DD-MM-YYYY'),'DD-MM-YYYY') BETWEEN TO_DATE(:W_FECHA_INICIAL,'DD-MM-YYYY') AND TO_DATE(:W_FECHA_FINAL, 'DD-MM-YYYY'));
    //                   -- AND TO_DATE(TO_CHAR(ESTDOC_FECREG,'DD-MM-YYYY'),'DD-MM-YYYY') BETWEEN TO_DATE('19-06-2009','DD-MM-YYYY') AND TO_DATE('19-06-2009', 'DD-MM-YYYY'));
    //  END;                  
    // ELSE
    //  BEGIN
    //  SELECT COUNT(*)
    //    INTO :W_CANTIDAD
    //    FROM CRTCONTROL, COL
    //   WHERE CONTROL_TIPCRE = COLTDOC
    //     AND CONTROL_PLANEA = COLCOD
    //   --  AND COLESTC = 'VI'
    //     AND CONTROL_ESTGRL = 'DE'
    //     AND EXISTS (SELECT 1 FROM CRTESTDOC  
    //                  WHERE ESTDOC_CODOPER = '902'
    //                    AND CONTROL_OFCSOL = ESTDOC_OFCSOL 
    //                    AND CONTROL_CODSOL = ESTDOC_CODSOL 
    //                    AND CONTROL_TIPCRE = ESTDOC_TIPCRE 
    //                    AND CONTROL_PLANEA = ESTDOC_PLANEA
    //           AND ESTDOC_USUARI  = :W_CODIGO --'OPS$AXCP'
    //                    AND TO_DATE(TO_CHAR(ESTDOC_FECREG,'DD-MM-YYYY'),'DD-MM-YYYY') BETWEEN TO_DATE(:W_FECHA_INICIAL,'DD-MM-YYYY') AND TO_DATE(:W_FECHA_FINAL, 'DD-MM-YYYY'));
    //  
    //  END; 
    // END IF; END;
    //#endregion
    async COFCONGAR_rango_wFechaFinal_keyNextItem() {
        console.log("Entering COFCONGAR_rango_wFechaFinal_keyNextItem");
        if ((this.RANGO.W_MARCA == "N" || (this.RANGO.W_MARCA == null))) {
            // construct payload
            let payload1 = new Map();
            payload1.set("W_FECHA_FINAL", this.RANGO.W_FECHA_FINAL);
            payload1.set("W_FECHA_INICIAL", this.RANGO.W_FECHA_INICIAL);
            payload1.set("W_CANTIDAD", this.RANGO.W_CANTIDAD);
            // call REST API
            const result1 = await Rest.post("/cofcongar_rango/cofcongar_rango_wfechafinal_keynextitem_query1", payload1);
            // get values from result
            this.RANGO.W_CANTIDAD = result1[0].get("W_CANTIDAD");
        }
        else {
            // construct payload
            let payload2 = new Map();
            payload2.set("W_FECHA_FINAL", this.RANGO.W_FECHA_FINAL);
            payload2.set("W_FECHA_INICIAL", this.RANGO.W_FECHA_INICIAL);
            payload2.set("W_CANTIDAD", this.RANGO.W_CANTIDAD);
            payload2.set("W_CODIGO", this.RANGO.W_CODIGO);
            // call REST API
            const result2 = await Rest.post("/cofcongar_rango/cofcongar_rango_wfechafinal_keynextitem_query2", payload2);
            // get values from result
            this.RANGO.W_CANTIDAD = result2[0].get("W_CANTIDAD");
        }
        console.log("Exiting COFCONGAR_rango_wFechaFinal_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONGAR_toolbar_whenButtonPressed() {
        console.log("Entering COFCONGAR_toolbar_whenButtonPressed");
        console.log("Exiting COFCONGAR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONGAR_toolbar_whenMouseLeave() {
        console.log("Entering COFCONGAR_toolbar_whenMouseLeave");
        console.log("Exiting COFCONGAR_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONGAR_toolbar_whenNewFormInstance() {
        console.log("Entering COFCONGAR_toolbar_whenNewFormInstance");
        console.log("Exiting COFCONGAR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONGAR_base_fecha_whenNewItemInstance() {
        console.log("Entering COFCONGAR_base_fecha_whenNewItemInstance");
        console.log("Exiting COFCONGAR_base_fecha_whenNewItemInstance");
    }

}

