import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFAPGTE business logic
import {
    VARIABLE,
    CRTSOLICR1,
    CRTSOLICR,
    CTRSOLICR2,
    TOOLBAR,
    PPAL,
    BASE
} from "./CRFAPGTE_models";



// class CRFAPGTE
@Component({
    selector: 'app-crfapgte',
    templateUrl: './crfapgte.component.html',
})
export class CrfapgteComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTSOLICR1: CRTSOLICR1 = new CRTSOLICR1();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CTRSOLICR2: CTRSOLICR2 = new CTRSOLICR2();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public PPAL: PPAL = new PPAL();
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
    async CRFAPGTE_onClearDetails() {
        console.log("Entering CRFAPGTE_onClearDetails");
        // CRFAPGTE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFAPGTE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFAPGTE_whenMouseDoubleclick() {
        console.log("Entering CRFAPGTE_whenMouseDoubleclick");
        console.log("Exiting CRFAPGTE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFAPGTE_preForm() {
        console.log("Entering CRFAPGTE_preForm");
        console.log("Exiting CRFAPGTE_preForm");
    }

    //#region PLSQL
    // DECLARE
    //  V_CARGO    VARCHAR2(10);
    // BEGIN
    // 
    //   BEGIN
    //   SELECT S.USU_CARGO
    //   INTO V_CARGO
    //   FROM SGUSUARIOS S WHERE USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_CARGO  := 'XXXX';
    //  END;
    // 
    //  IF V_CARGO IN ('GC','SR','17') THEN
    //   
    //   SET_ITEM_PROPERTY('PPAL.PPAL_APROBAR', "ENABLED","PROPERTY_TRUE");   
    //   
    //  ELSE 
    //     
    //    BEGIN
    //       SELECT USU_NOMBRE ,USU_CODIGO
    //       INTO :VARIABLE.NOM_USU,:VARIABLE.COD_USU
    //       FROM SGUSUARIOS
    //       WHERE USU_CODIGO = PLSQLBuiltins.user();
    //   END;
    // 
    //   
    //  END IF; 
    //  
    //  REF$WHEN_NEW_FORM_INSTANCE;
    // 
    // END;
    //#endregion
    async CRFAPGTE_whenNewFormInstance() {
        console.log("Entering CRFAPGTE_whenNewFormInstance");
        let V_CARGO: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfapgte/crfapgte_whennewforminstance_query1", payload1);
        // get values from result
        V_CARGO = result1[0].get("V_CARGO");
        if (result1 == null || result1.length == 0) {

            V_CARGO = "XXXX";
        }

        if (["GC", "SR", "17"].indexOf(V_CARGO) != -1) {
            this.oracleFormsBuiltins.set_item_property("PPAL.PPAL_APROBAR", "ENABLED", "PROPERTY_TRUE");
        }
        else {
            // construct payload
            let payload2 = new Map();
            payload2.set("NOM_USU", this.VARIABLE.NOM_USU);
            payload2.set("COD_USU", this.VARIABLE.COD_USU);
            // call REST API
            const result2 = await Rest.post("/crfapgte/crfapgte_whennewforminstance_query2", payload2);
            // get values from result
            this.VARIABLE.NOM_USU = result2[0].get("VARIABLE.NOM_USU");
            this.VARIABLE.COD_USU = result2[0].get("VARIABLE.COD_USU");
        }
        // CRFAPGTE_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFAPGTE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_TIPCRE,:CRTSOLICR.SOLICR_CODSOL,'Q'); END;
    //#endregion
    async CRFAPGTE_variable_detalles_whenMouseClick() {
        console.log("Entering CRFAPGTE_variable_detalles_whenMouseClick");
        // CRFAPGTE_PU_LLAMAR_SOLICITUD(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODSOL, "Q");
        console.log("Exiting CRFAPGTE_variable_detalles_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ERASE('GLOBAL.ESTAP');
    //   ERASE('GLOBAL.ESTAC');
    //   ERASE('GLOBAL.ESTAZ');
    //   ERASE('GLOBAL.ESTNG');
    // GO_BLOCK('PPAL'); END;
    //#endregion
    async CRFAPGTE_variable_volverPpal_whenButtonPressed() {
        console.log("Entering CRFAPGTE_variable_volverPpal_whenButtonPressed");
        this.oracleFormsBuiltins.erase("GLOBAL.ESTAP");
        this.oracleFormsBuiltins.erase("GLOBAL.ESTAC");
        this.oracleFormsBuiltins.erase("GLOBAL.ESTAZ");
        this.oracleFormsBuiltins.erase("GLOBAL.ESTNG");
        this.oracleFormsBuiltins.go_block("PPAL");
        console.log("Exiting CRFAPGTE_variable_volverPpal_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PVALTER(:CRTSOLICR.SOLICR_NITTER); -- TERCERO RESTRINGIDOS
    //   END IF;
    //  :VARIABLE.OFICINA   := :CRTSOLICR.SOLICR_OFCSOL;
    //   :VARIABLE.SOLICITUD := :CRTSOLICR.SOLICR_CODSOL;
    //   :VARIABLE.UNIDAD    := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA 
    //   
    //   :VARIABLE.ESTADO    := :CRTSOLICR.SOLICR_ESTSOL;
    //   --MESSAGE('SSSG 3');
    //   --SET_ITEM_PROPERTY('VARIABLE.APROBAR',ENABLED,ATTR_ON); ARQUITECTURA
    //   --SET_ITEM_PROPERTY('VARIABLE.RECONSIDERAR',ENABLED,"ATTR_OFF"); ARQUITECTURA
    // 
    //   IF :VARIABLE.ESTADO IS NULL THEN
    //     LIB$ALERTA('MENSAJE','NO HAY SOLICITUD  PARA APROBAR .....',NULL,NULL,NULL,T_RESPUESTA);
    //   ELSE 
    //     GO_BLOCK('CRTSOLICR1');
    //   END IF;
    // END;
    //#endregion
    async CRFAPGTE_variable_aprobar_whenButtonPressed() {
        console.log("Entering CRFAPGTE_variable_aprobar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFAPGTE_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
        }
        this.VARIABLE.OFICINA = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICITUD = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.UNIDAD = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.ESTADO = this.CRTSOLICR.SOLICR_ESTSOL;
        if ((this.VARIABLE.ESTADO == null)) {
            // CRFAPGTE_LIB$ALERTA("MENSAJE", "NO HAY SOLICITUD  PARA APROBAR .....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTSOLICR1");
        }
        console.log("Exiting CRFAPGTE_variable_aprobar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PUP_INICIA;    --CAHH  09/06/2011    PY 6297
    // 
    // --
    // /*
    // DECLARE
    //   VCONDICION  VARCHAR2(2000);
    //   V_CARGO    VARCHAR2(10);
    // BEGIN
    //  
    //  BEGIN
    //   SELECT S.USU_CARGO
    //   INTO V_CARGO
    //   FROM SGUSUARIOS S WHERE USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_CARGO  := 'XXXX';
    //   END;
    //   
    //   
    //   IF V_CARGO = 'DC' THEN
    //  
    //   VCONDICION  := 'SOLICR_ESTSOL IN (:GLOBAL.ESTAP,:GLOBAL.ESTAC,:GLOBAL.ESTAZ,:GLOBAL.ESTNG) '||
    //                    'AND SOLICR_USCIAL = :VARIABLE.COD_USU '||
    //                    'AND SOLICR_VBREC IS NULL '||
    //                    'AND SOLICR_ESTSOL = '||'''AP''' ;
    // 
    //  ELSE
    // 
    //     VCONDICION  := 'SOLICR_ESTSOL IN (:GLOBAL.ESTAP,:GLOBAL.ESTAC,:GLOBAL.ESTAZ,:GLOBAL.ESTNG) '||
    //                    'AND SOLICR_USCIAL = :VARIABLE.COD_USU '||
    //                    'AND SOLICR_VBREC IS NULL ';
    // 
    // 
    //  END IF;
    //  
    //  
    //   
    //  SET_BLOCK_PROPERTY('CRTSOLICR', DEFAULT_WHERE, VCONDICION);  
    //   
    //  GO_BLOCK('CRTSOLICR');
    //   
    //  EXECUTE_QUERY;
    //  
    //   GO_ITEM('CRTSOLICR.SOLICR_CODSOL');
    //  
    // END;
    // 
    // */; END;
    //#endregion
    async CRFAPGTE_variable_nomUsu_keyNextItem() {
        console.log("Entering CRFAPGTE_variable_nomUsu_keyNextItem");
        console.log("Exiting CRFAPGTE_variable_nomUsu_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFAPGTE_variable_volver_whenButtonPressed() {
        console.log("Entering CRFAPGTE_variable_volver_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFAPGTE_variable_volver_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  
    //   -- DEVUELVE LOS TERCEROS RELACIOANDOS DE LA SOLICITUD
    //   CURSOR C_TERCERO IS(
    //     SELECT OTERSOL_NITTER TERCERO, INITCAP(TDVDES) DESCRIPCION
    //       FROM CRTOTERSOL, TDV
    //      WHERE OTERSOL_TIPVIN = TDVCOD
    //        AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //        AND OTERSOL_TIPVIN IN ('99', '05', '13', '09'));
    // 
    // 
    //   -- DEVUELVE EL TERCERO RESTRINGIDO
    // /*  CURSOR C_RESTRINGIDOS(P_ESTADO SETTERRES.TERRES_ESTADO%TYPE, P_TERCERO CRTSOLICR.SOLICR_NITTER%TYPE) IS(
    //     SELECT 'X'
    //       FROM SETTERRES
    //      WHERE TERRES_IDENTI = P_TERCERO
    //        AND TERRES_ESTADO = P_ESTADO);*/
    // 
    //   T_RESPUESTA NUMBER;
    //   RESTRINGIDO BOOLEAN;
    //   MENSAJE     VARCHAR2(300);
    //   RELACIONADO TDV.TDVDES%TYPE;
    //   TERCERO      TER.TERCOD%TYPE;
    //   COMODIN     VARCHAR2(1);
    // 
    // BEGIN
    // 
    //   /*
    //   AUTOR   :JAIRO A. TORRES R.
    //   FECHA   :19/09/2011
    //   MOTIVO  :DETIENE EL PROCESO DESDE EL COMIENZO DE LA RECONSIDERACIÓN EN CASO QUE EL TERCERRO ESTE EN ESTADO RE
    //       EXISTE PROGRAM UNIT PARA LA VALIDACIÓN , PERO SE HABILITA DIFERENTE PORQUE EN OCASIONES SE PASA POR PERMISOS AL PROCEDURE
    //   */
    //   
    //   IF :CRTSOLICR.SOLICR_NITTER IS  NULL THEN
    //    MENSAJE := 'DEBE SELECIONAR LA OPCIÓN QUE DESEA  RECONSIDERAR.';
    //     LIB$ALERTA('MENSAJE', MENSAJE, NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   
    //   FOR I IN C_TERCERO LOOP
    //     --27/08/2019 AJ SE CONSULTA WEB SERVICE DE LISTAS RESTRICTIVAS
    //     /*TERCERO :=  I.TERCERO;
    //     OPEN C_RESTRINGIDOS('RE', TERCERO);
    //     FETCH C_RESTRINGIDOS
    //       INTO COMODIN;
    //     RESTRINGIDO := C_RESTRINGIDOS%FOUND;
    //     CLOSE C_RESTRINGIDOS;
    //     
    //     RELACIONADO := I.DESCRIPCION;
    //   
    //     IF RESTRINGIDO THEN
    //       EXIT;
    //     END IF;*/
    //     
    //     PVALTER (I.TERCERO);
    //     
    //   
    //   END LOOP;
    // 
    // /*  IF RESTRINGIDO THEN
    //     --MENSAJE := 'EL '||RELACIONADO||' CON CÉDULA/NIT : "' || TERCERO ||
    //                --'" SE ENCUENTRA RESTRINGIDO , COMUNICARSE CON CONTROL INTERNO.';
    //     MENSAJE := 'EL '||RELACIONADO||' CON CÉDULA/NIT : "' || TERCERO ||
    //                '" SE ENCUENTRA RESTRINGIDO , COMUNICARSE CON CUMPLIMIENTO.';
    //     LIB$ALERTA('MENSAJE', MENSAJE, NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //  
    //  */ 
    //   
    //     IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //       PVALTER(:CRTSOLICR.SOLICR_NITTER); -- TERCERO RESTRINGIDOS
    //     END IF;
    //     :VARIABLE.OFICINA   := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.SOLICITUD := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.UNIDAD    := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.ESTADO    := :CRTSOLICR.SOLICR_ESTSOL;
    //     MESSAGE('SSSG 4');
    //     SET_ITEM_PROPERTY('VARIABLE.APROBAR', "ENABLED", "ATTR_OFF");
    //     SET_ITEM_PROPERTY('VARIABLE.RECONSIDERAR', "ENABLED", "ATTR_ON");
    //     GO_BLOCK('CTRSOLICR2');
    //     EXECUTE_QUERY;
    //   --END IF;
    // 
    // END;
    //#endregion
    async CRFAPGTE_variable_reconsiderar_whenButtonPressed() {
        console.log("Entering CRFAPGTE_variable_reconsiderar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let RESTRINGIDO: boolean = null;
        let MENSAJE: string = null;
        let RELACIONADO: null = null;
        let TERCERO: null = null;
        let COMODIN: string = null;
        if ((this.CRTSOLICR.SOLICR_NITTER == null)) {
            MENSAJE = "DEBE SELECIONAR LA OPCIÓN QUE DESEA  RECONSIDERAR.";
            // CRFAPGTE_LIB$ALERTA("MENSAJE", MENSAJE, null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFAPGTE_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
        }
        this.VARIABLE.OFICINA = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICITUD = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.UNIDAD = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.ESTADO = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.message("SSSG 4");
        this.oracleFormsBuiltins.set_item_property("VARIABLE.APROBAR", "ENABLED", "ATTR_OFF");
        this.oracleFormsBuiltins.set_item_property("VARIABLE.RECONSIDERAR", "ENABLED", "ATTR_ON");
        this.oracleFormsBuiltins.go_block("CTRSOLICR2");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFAPGTE_variable_reconsiderar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // IF DBMS_ERROR_CODE = -20001 THEN
    //  LIB$ALERTA('MENSAJE','EXISTE MAS DE UN OFICIAL DESEMBOLSO PARA ESE CLIENTE!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // ELSIF DBMS_ERROR_CODE = -20010 THEN
    //  LIB$ALERTA('MENSAJE','VERIFIQUE QUE EL ESTADO DE CONTROL DE LA SOLICITUD SEA IGUAL A TR!',NULL,NULL,NULL, T_RESPUESTA);
    // ELSIF DBMS_ERROR_CODE = -20004 THEN
    //   LIB$ALERTA('MENSAJE','NO SE ENCONTRÓ OFICIAL DE DESEMBOLSO PARA EL TERCERO, VERIRIQUE EL TIPO DE PRODUCTO, LINEA Y PLAZA DEL COMERCIAL',NULL,NULL,NULL, T_RESPUESTA);
    // ELSIF DBMS_ERROR_CODE = -20003 THEN
    //  LIB$ALERTA('MENSAJE','VERIFIQUE LINEA Y TIPO DE PRODUCTO PARA LA PLAZA ',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async CRFAPGTE_crtsolicr1_onError() {
        console.log("Entering CRFAPGTE_crtsolicr1_onError");
        let T_RESPUESTA: number = null;
        // if (this.oracleFormsBuiltins.dbms_error_code == 20001) {
        //     CRFAPGTE_LIB$ALERTA("MENSAJE", "EXISTE MAS DE UN OFICIAL DESEMBOLSO PARA ESE CLIENTE!!!", null, null, null, T_RESPUESTA);
        // }
        // else if (this.oracleFormsBuiltins.dbms_error_code == 20010) {
        //     CRFAPGTE_LIB$ALERTA("MENSAJE", "VERIFIQUE QUE EL ESTADO DE CONTROL DE LA SOLICITUD SEA IGUAL A TR!", null, null, null, T_RESPUESTA);
        // }
        // else if (this.oracleFormsBuiltins.dbms_error_code == 20004) {
        //     CRFAPGTE_LIB$ALERTA("MENSAJE", "NO SE ENCONTRÓ OFICIAL DE DESEMBOLSO PARA EL TERCERO, VERIRIQUE EL TIPO DE PRODUCTO, LINEA Y PLAZA DEL COMERCIAL", null, null, null, T_RESPUESTA);
        // }
        // else if (this.oracleFormsBuiltins.dbms_error_code == 20003) {
        //     CRFAPGTE_LIB$ALERTA("MENSAJE", "VERIFIQUE LINEA Y TIPO DE PRODUCTO PARA LA PLAZA ", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFAPGTE_crtsolicr1_onError");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :V_NOMUSOFID
    //  FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :CRTSOLICR1.SOLICR_USOFID;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_NOMUSOFID := NULL;
    // END;
    //#endregion
    async CRFAPGTE_crtsolicr1_postQuery() {
        console.log("Entering CRFAPGTE_crtsolicr1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_USOFID", this.CRTSOLICR1.SOLICR_USOFID);
        // call REST API
        const result1 = await Rest.post("/crfapgte_crtsolicr1/crfapgte_crtsolicr1_postquery_query1", payload1);
        // get values from result
        // V_NOMUSOFID = result1[0].get("V_NOMUSOFID");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR1.V_NOMUSOFID = null;
        }

        console.log("Exiting CRFAPGTE_crtsolicr1_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :CRTSOLICR1.SOLICR_LINEADES = 'LX' AND :CRTSOLICR1.SOLICR_FDESEMCLI IS NULL THEN
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    // ELSIF :CRTSOLICR1.SOLICR_FDESEMCLI < SYSDATE THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)'||TO_CHAR(SYSDATE+2,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFAPGTE_crtsolicr1_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFAPGTE_crtsolicr1_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR1.SOLICR_LINEADES == "LX" && (this.CRTSOLICR1.SOLICR_FDESEMCLI == null))) {
            // CRFAPGTE_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        }
        else if (this.CRTSOLICR1.SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate()) {
            // CRFAPGTE_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)" + PLSQLBuiltins.sysdate() + 2.toString());
        }
        console.log("Exiting CRFAPGTE_crtsolicr1_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PVALTER(:CRTSOLICR.SOLICR_NITTER); -- TERRES
    //   END IF;
    // END;
    // 
    // 
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AC';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //   ERROR             VARCHAR2(100);
    //   MENSAJE             VARCHAR2(100);
    //   
    //   CURSOR COFI IS 
    //   SELECT USU_USU_CODIGO ASISTENTE FROM SGUSUARIOS
    //   WHERE USU_CARGO ='AC'
    //   AND USU_CODUNI = :CRTSOLICR.SOLICR_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //   ;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ESTSOL = 'AC' THEN
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD YA FUE APROBADA, POR FAVOR SELECCIONE OTRA.',NULL,NULL,NULL, T_RESPUESTA); 
    // ELSE    
    //  IF :CRTSOLICR1.SOLICR_LINEADES = 'LX' AND :CRTSOLICR1.SOLICR_FDESEMCLI IS NULL THEN
    //    GO_ITEM('CRTSOLICR1.SOLICR_FDESEMCLI');
    //    LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    //  ELSIF :CRTSOLICR1.SOLICR_FDESEMCLI < (TRUNC(SYSDATE) + 2) THEN
    //    GO_ITEM('CRTSOLICR1.SOLICR_FDESEMCLI');
    //   LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)'||TO_CHAR(SYSDATE+2,'YYYY-MM-DD')); 
    //  END IF; 
    //  IF :CRTSOLICR.SOLICR_CODPRO IS NULL THEN
    //   LIB$DTNERFRMA('DEBE ESPECIFICAR CODIGO DE PRODUCTO');
    //  ELSIF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN  
    //       :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //       :CRTSOLICR1.SOLICR_FEACIA := TO_DATE(TO_CHAR(SYSDATE,'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    //        PBD_COL_ASIGOFIDESEMBOLSO(:CRTSOLICR.SOLICR_OFCSOL
    //                   ,:VARIABLE.SOLICITUD 
    //                    ,:CRTSOLICR.SOLICR_CODPRO 
    //                    ,:CRTSOLICR1.SOLICR_NITTER
    //                                 ,:CRTSOLICR.SOLICR_USCIAL
    //                  ,:CRTSOLICR.SOLICR_LINEA
    //                  ,:CRTSOLICR1.SOLICR_USOFID                                              
    //                                 ,:CRTSOLICR.SOLICR_TIPCRE
    //                                 ,:CRTSOLICR.SOLICR_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //                                ,ERROR
    //                                ,MENSAJE);
    //      IF ERROR IS NOT NULL THEN 
    //       LIB$DTNERFRMA(ERROR); 
    //      ELSIF MENSAJE IS NOT NULL THEN  
    //        LIB$ALERTA('MENSAJE',MENSAJE,NULL,NULL,NULL, T_RESPUESTA);                                                                                 
    //      END IF;
    //      
    //    
    //      
    //        --INGRESA LA SOLICITUD EN EL MODULO DE IMPORTACIONES.
    //        --SOLO SI LA SOLICITUD ES DE LINEA IMPORTACION - LEASING IMPORTACION
    //       --AUTOR : MIGUEL ORTIZ
    //        --FECHA : 19/05/2011
    //             
    //         IF :CRTSOLICR.SOLICR_LINEA IN ('LI','I1','IB','IF','IR','LM','V2','OI')  THEN
    //          
    //            IF :CRTSOLICR.SOLICR_ORMONET <> 'PE' OR :CRTSOLICR.SOLICR_ORMONUS$ <> 'PE' THEN
    //             
    //            OPS$COLOCA.PQBD_COL_MOD_IMPORTACION.PBD_COL_ING_IMPORTACION(:CRTSOLICR.SOLICR_CODSOL,
    //                                            :CRTSOLICR.SOLICR_OFCSOL,                                    
    //                                            :CRTSOLICR.SOLICR_TIPBIE,
    //                                            :CRTSOLICR.SOLICR_TIPCRE,
    //                                            :CRTSOLICR.SOLICR_CODUNI,--:this.PARAMETER.get("P_UNIDAD"), --ARQUITECTURA
    //                                            MENSAJE);
    //                     COMMIT;                                     
    //            ELSE
    //              LIB$ALERTA('MENSAJE', 'LA SOLICITUD ES LEASING DE IMPORTACION Y SU ORIGEN MONETARIO ES PE. LA OPERACION NO INGRESARÁ AL MODULO DE IMPORTACIONES',NULL,NULL,NULL, T_RESPUESTA);
    //           END IF; 
    //            
    //           IF MENSAJE IS NOT NULL THEN  
    //          LIB$ALERTA('MENSAJE',MENSAJE,NULL,NULL,NULL, T_RESPUESTA);  
    //           END IF;
    // 
    //         END IF;
    //      
    //    
    //      
    //   BEGIN
    //      SELECT USU_NOMBRE 
    //       INTO :V_NOMUSOFID
    //     FROM SGUSUARIOS
    //       WHERE USU_CODIGO = :CRTSOLICR1.SOLICR_USOFID
    //        AND USU_CODUNI = :CRTSOLICR1.SOLICR_CODUNI --ARQUITECTURA       
    //       ;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :V_NOMUSOFID := NULL;
    //     END; 
    //     IF :CRTSOLICR1.SOLICR_USOFID IS NOT NULL THEN
    //     COMMIT_FORM;
    //     COMMIT;
    //     END IF;
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE");     
    // 
    //     IF :CRTSOLICR1.SOLICR_USOFID IS NULL THEN
    //       LIB$DTNERFRMA('ERROR NO SE PUDO OBTENER EL OFICIAL DE DESEMBOLSO.'); 
    //     ELSE
    //       --ENVIÓ DE CORREO ELECTRONICO AL OFICIAL DE DESEMBOLSO
    //      PBD_COL_GRACION_MAIL (:CRTSOLICR1.SOLICR_OFCSOL,
    //                              :CRTSOLICR1.SOLICR_CODSOL,
    //                              :CRTSOLICR1.SOLICR_TIPCRE,
    //                              :CRTSOLICR1.SOLICR_USCIAL,
    //                              NULL,
    //                              :SYSTEM.CURRENT_FORM,
    //                              NULL,
    //                              :CRTSOLICR.SOLICR_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //                              );
    //      FOR ACT IN COFI LOOP
    //      --ENVIÓ DE CORREO ELECTRONICO A LOS CARGOS ASISTENTE COMERCIAL
    //      PBD_COL_GRACION_MAIL (:CRTSOLICR1.SOLICR_OFCSOL,
    //                              :CRTSOLICR1.SOLICR_CODSOL,
    //                              :CRTSOLICR1.SOLICR_TIPCRE,
    //                              :CRTSOLICR1.SOLICR_USCIAL,
    //                              NULL,
    //                              :SYSTEM.CURRENT_FORM,
    //                              ACT.ASISTENTE,
    //                              :CRTSOLICR.SOLICR_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //                              );
    //   
    //        END LOOP;
    //     END IF;                                                     
    // 
    // 
    //     
    //  ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CRFAPGTE_crtsolicr1_solicrAprcia_whenButtonPressed() {
        console.log("Entering CRFAPGTE_crtsolicr1_solicrAprcia_whenButtonPressed");
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFAPGTE_PVALTER(CRTSOLICR.SOLICR_NITTER);
        }
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AC';
        let ESTADO_NO_VALIDO: null = null;
        let ERROR: string = null;
        let MENSAJE: string = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AC") {
            // CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD YA FUE APROBADA, POR FAVOR SELECCIONE OTRA.", null, null, null, T_RESPUESTA);
        }
        else {
            if ((this.CRTSOLICR1.SOLICR_LINEADES == "LX" && (this.CRTSOLICR1.SOLICR_FDESEMCLI == null))) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR1.SOLICR_FDESEMCLI");
                // CRFAPGTE_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
            }
            else if (this.CRTSOLICR1.SOLICR_FDESEMCLI) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR1.SOLICR_FDESEMCLI");
                // CRFAPGTE_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)" + PLSQLBuiltins.sysdate() + 2.toString());
            }
            if ((this.CRTSOLICR.SOLICR_CODPRO == null)) {
                // CRFAPGTE_LIB$DTNERFRMA("DEBE ESPECIFICAR CODIGO DE PRODUCTO");
            }
            // else if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR1.SOLICR_FEACIA = new Date(SYSDATE.toString());
            //     CRFAPGTE_PBD_COL_ASIGOFIDESEMBOLSO(CRTSOLICR.SOLICR_OFCSOL, VARIABLE.SOLICITUD, CRTSOLICR.SOLICR_CODPRO, CRTSOLICR1.SOLICR_NITTER, CRTSOLICR.SOLICR_USCIAL, CRTSOLICR.SOLICR_LINEA, CRTSOLICR1.SOLICR_USOFID, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODUNI, ERROR, MENSAJE);
            //     if ((ERROR != null)) {
            //         CRFAPGTE_LIB$DTNERFRMA(ERROR);
            //     }
            //     else if ((MENSAJE != null)) {
            //         CRFAPGTE_LIB$ALERTA("MENSAJE", MENSAJE, null, null, null, T_RESPUESTA);
            //     }
            //     if (["LI", "I1", "IB", "IF", "IR", "LM", "V2", "OI"].indexOf(CRTSOLICR.SOLICR_LINEA) != -1) {
            //         if ((CRTSOLICR.SOLICR_ORMONET != "PE" || CRTSOLICR.SOLICR_ORMONUS$ != "PE")) {
            //             CRFAPGTE_OPS$COLOCA.PQBD_COL_MOD_IMPORTACION.PBD_COL_ING_IMPORTACION(CRTSOLICR.SOLICR_CODSOL, CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_TIPBIE, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODUNI, MENSAJE);
            //         }
            //         else {
            //             CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD ES LEASING DE IMPORTACION Y SU ORIGEN MONETARIO ES PE. LA OPERACION NO INGRESARÁ AL MODULO DE IMPORTACIONES", null, null, null, T_RESPUESTA);
            //         }
            //         if ((MENSAJE != null)) {
            //             CRFAPGTE_LIB$ALERTA("MENSAJE", MENSAJE, null, null, null, T_RESPUESTA);
            //         }
            //     }
            //     // construct payload
            //     let payload2 = new Map();
            //     payload2.set("SOLICR_USOFID", CRTSOLICR1.SOLICR_USOFID);
            //     payload2.set("SOLICR_CODUNI", CRTSOLICR1.SOLICR_CODUNI);
            //     // call REST API
            //     const result2 = await Rest.post("/crfapgte_crtsolicr1/crfapgte_crtsolicr1_solicraprcia_whenbuttonpressed_query2", payload2);
            //     // get values from result
            //     V_NOMUSOFID = result2[0].get("V_NOMUSOFID");
            //     if (result2 == null || result2.length == 0) {

            //         this.CRTSOLICR1.V_NOMUSOFID = null;
            //     }

            //     if ((CRTSOLICR1.SOLICR_USOFID != null)) {
            //         this.oracleFormsBuiltins.commit_form();
            //     }
            //     this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_FALSE");
            //     if ((CRTSOLICR1.SOLICR_USOFID == null)) {
            //         CRFAPGTE_LIB$DTNERFRMA("ERROR NO SE PUDO OBTENER EL OFICIAL DE DESEMBOLSO.");
            //     }
            //     else {
            //         CRFAPGTE_PBD_COL_GRACION_MAIL(CRTSOLICR1.SOLICR_OFCSOL, CRTSOLICR1.SOLICR_CODSOL, CRTSOLICR1.SOLICR_TIPCRE, CRTSOLICR1.SOLICR_USCIAL, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), null, CRTSOLICR.SOLICR_CODUNI);
            //     }
            // }
            else {
                // CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
            }
        }
        console.log("Exiting CRFAPGTE_crtsolicr1_solicrAprcia_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTSOLICR1 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTSOLICR1_CUR IS      
    //     SELECT 1 FROM CRTSOLICR     
    //     WHERE SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTSOLICR1 DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTSOLICR1_CUR;     
    //   FETCH CRTSOLICR1_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTSOLICR1_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTSOLICR1_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTSOLICR1_CUR;
    //   --
    //   -- END CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFAPGTE_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFAPGTE_crtsolicr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFAPGTE_crtsolicr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFAPGTE_crtsolicr_whenNewBlockInstance() {
        console.log("Entering CRFAPGTE_crtsolicr_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFAPGTE_crtsolicr_whenNewBlockInstance");
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
    //   -- BEGIN CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.APROXOBSERV');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTSOLICR1');   
    //   END IF;
    //   --
    //   -- END CRTSOLICR1 DETAIL PROGRAM SECTION
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
    async CRFAPGTE_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFAPGTE_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.APROXOBSERV");
            // CRFAPGTE_QUERY_MASTER_DETAILS(REL_ID, "CRTSOLICR1");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFAPGTE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFAPGTE_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFAPGTE_crtsolicr_postQuery() {
        console.log("Entering CRFAPGTE_crtsolicr_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfapgte_crtsolicr/crfapgte_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFAPGTE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFAPGTE_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFAPGTE_crtsolicr_solicrNitter_posttextitem() {
        console.log("Entering CRFAPGTE_crtsolicr_solicrNitter_posttextitem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfapgte_crtsolicr/crfapgte_crtsolicr_solicrnitter_posttextitem_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFAPGTE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFAPGTE_crtsolicr_solicrNitter_posttextitem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) :='RE';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //    V_EXISTE      NUMBER;
    //    V_PLANEA          NUMBER;
    //    BEGIN
    //     
    //    
    //  --IF :CTRSOLICR2.SOLICR_ESTSOL = 'NG' THEN
    //  --LIB$DTNERFRMA('ERROR, NO SE PUEDE RECONSIDERAR UNA SOLICITUD QUE FUE NEGADA.');    
    //  --ELSE  
    //  /* SE ADICIONA PARA VERIFICAR SI TIENE PLANEACIONES VIGENTES NO DEJAR RECONSIDERAR */
    //  /* CARLOS E. RAMIREZ - 14-05-2009 */
    //   BEGIN
    //     SELECT 1
    //       INTO V_PLANEA
    //       FROM CRTCONTROL, COL
    //      WHERE CONTROL_PLANEA = COLCOD
    //        AND CONTROL_OFCSOL = COLOFSOL
    //        AND CONTROL_CODSOL = COLSOLI
    //        AND COLESTC = 'VI'
    //        AND CONTROL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND CONTROL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND CONTROL_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //        ;
    //   EXCEPTION WHEN OTHERS THEN
    //     V_PLANEA := 0;
    //   END;
    //  
    // IF :CTRSOLICR2.SOLICR_ESTSOL= 'RE' THEN --PY 9021 
    //  
    //   LIB$ALERTA('MENSAJE', 'LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL ||'-'|| :CRTSOLICR.SOLICR_CODSOL||' YA HA SIDO RECONSIDERADA.',NULL,NULL,NULL, T_RESPUESTA);
    //    GO_BLOCK('CRTSOLICR');
    // 
    // ELSE --PY 9021 
    //   IF V_PLANEA = 0 THEN
    //     IF :CTRSOLICR2.SOLICR_OBSREC IS NULL THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE INGRESAR LOS CAMBIOS QUE SE DEBEN HACER A LA SOLICITUD PARA PODERLA RECONSIDERAR...',NULL,NULL,NULL, T_RESPUESTA);
    //       
    //     ELSIF
    //       FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA RECONSIDERAR LA SOLICITUD') = 1 THEN
    //       
    //       --PY15508. SE DESHABILITA BOTÓN PARA IMPEDIR QUE EL USUARIO VUELVA A PRESIONARLO. 
    //     GO_ITEM('SOLICR_FECREC');
    //      SET_ITEM_PROPERTY('SOLICR_RE',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('SOLICR_RE',VISIBLE,"PROPERTY_FALSE");
    // 
    //       --COMMIT;
    //       
    //       --PY6758
    //       ---INSERTA EL ESTADO ORIGINAL ANTES DE PASARLA A RE
    //       INSERT INTO CRTSOLESTOBS (SOBS_OFCSOL,SOBS_CODSOL,SOBS_ESTADO,SOBS_OBSERVACION,SOBS_FECREG,           
    //                                 SOBS_USRCHANGE,
    //                                 SOBS_CODUNI --ARQUITECTURA
    //                                 )
    //       VALUES (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_ESTSOL,'LA SOLICITUD PASO A SER RECONSIDERADA',
    //               SYSDATE,:BASE.USUARIO,
    //               :CRTSOLICR.SOLICR_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //               );
    // 
    //       --PY16758
    //       PQBD_COL_SEGRECON.PBD_NVASOL(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,
    //                      :CRTSOLICR.SOLICR_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //                      );
    //       
    //       :CTRSOLICR2.SOLICR_FECREC := SYSDATE;  -- CAHH PY 6297  ASIGNACIONES ANTES DE INSERTAR EN CRTSOLESTOBS
    //       :CTRSOLICR2.SOLICR_ESTSOL := V_ESTADO;
    //       COMMIT;
    //               
    //       --PY16758 
    //       --PQBD_COL_SEGRECON.PBD_NVASOL(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL);
    //       
    //       --PY16758 
    //       ---INSERTA EL ESTADO ORIGINAL ANTES DE PASARLA A RE
    //       /*INSERT INTO CRTSOLESTOBS (SOBS_OFCSOL,SOBS_CODSOL,SOBS_ESTADO,SOBS_OBSERVACION,SOBS_FECREG,           
    //                                 SOBS_USRCHANGE)
    //       VALUES (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_ESTSOL,'LA SOLICITUD PASO A SER RECONSIDERADA',
    //               SYSDATE,:BASE.USUARIO);*/
    //       --:CTRSOLICR2.SOLICR_FECREC := SYSDATE;  --CAHH PY 6297  
    //       --:CTRSOLICR2.SOLICR_ESTSOL := V_ESTADO; --CAHH  PY 6297
    //       --COMMIT;                     --CAHH PY 6297
    //       --TRAS
    //       BEGIN
    //         SELECT COUNT(*)
    //           INTO V_EXISTE 
    //           FROM CRTCONTROL
    //          WHERE CONTROL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //            AND CONTROL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //            AND CONTROL_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //       END;
    //       IF V_EXISTE > 0 THEN
    //         PU_TRASLADO_PLANEACIONES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL, :CRTSOLICR.SOLICR_TIPCRE );
    //       END IF;
    //       
    //       COMMIT;
    //       
    //       --
    //       LIB$ALERTA('MENSAJE', 'LA SOLICITUD HA SIDO RECONSIDERADA',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_BLOCK('CRTSOLICR');
    //       EXECUTE_QUERY;
    //       
    //       --PY15508. SE RETORNA HABILITACIÓN DE BOTÓN PARA QUE EL USUARIO VUELVA A PRESIONARLO. 
    //      SET_ITEM_PROPERTY('SOLICR_RE',VISIBLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('SOLICR_RE',ENABLED,"PROPERTY_TRUE");
    //     GO_ITEM('SOLICR_RE');
    // 
    //     ELSE
    //       LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO RECONSIDERADA',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_BLOCK('CRTSOLICR');
    //     END IF;
    //   ELSE
    //    LIB$ALERTA('MENSAJE', 'LA SOLICITUD TIENE CONTRATOS VIGENTES NO SE PUEDE RECONSIDERAR',NULL,NULL,NULL, T_RESPUESTA);
    //    :CTRSOLICR2.SOLICR_OBSREC := NULL;
    //     GO_BLOCK('CRTSOLICR');
    //   END IF;
    // END IF; --PY 9021
    // 
    // END;
    //#endregion
    async CRFAPGTE_ctrsolicr2_solicrRe_whenButtonPressed() {
        console.log("Entering CRFAPGTE_ctrsolicr2_solicrRe_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'RE';
        let ESTADO_NO_VALIDO: null = null;
        let V_EXISTE: number = null;
        let V_PLANEA: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfapgte_ctrsolicr2/crfapgte_ctrsolicr2_solicrre_whenbuttonpressed_query1", payload1);
            // get values from result
            V_PLANEA = result1[0].get("V_PLANEA");
        } catch (ex) {

            V_PLANEA = 0;
        }

        if (this.CTRSOLICR2.SOLICR_ESTSOL == "RE") {
            // CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD " + this.CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " YA HA SIDO RECONSIDERADA.", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTSOLICR");
        }
        else {
            if (V_PLANEA == 0) {
                if ((this.CTRSOLICR2.SOLICR_OBSREC == null)) {
                    // CRFAPGTE_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LOS CAMBIOS QUE SE DEBEN HACER A LA SOLICITUD PARA PODERLA RECONSIDERAR...", null, null, null, T_RESPUESTA);
                }
                //     else if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA RECONSIDERAR LA SOLICITUD") == 1) {
                //         this.oracleFormsBuiltins.go_item("SOLICR_FECREC");
                //         this.oracleFormsBuiltins.set_item_property("SOLICR_RE", "ENABLED", "PROPERTY_FALSE");
                //         this.oracleFormsBuiltins.set_item_property("SOLICR_RE", "VISIBLE", "PROPERTY_FALSE");
                //         // construct payload
                //         let payload2 = new Map();
                //         payload2.SOLICR_OFCSOL = : CRTSOLICR.SOLICR_OFCSOL;
                //         payload2.SOLICR_CODSOL = : CRTSOLICR.SOLICR_CODSOL;
                //         payload2.SOLICR_ESTSOL = : CRTSOLICR.SOLICR_ESTSOL;
                //         payload2.USUARIO = : BASE.USUARIO;
                //         payload2.SOLICR_CODUNI = : CRTSOLICR.SOLICR_CODUNI;
                //         // call REST API
                //         const result2 = await Rest.post("/crfapgte_ctrsolicr2/crfapgte_ctrsolicr2_solicrre_whenbuttonpressed_query2", payload2);
                //         CRFAPGTE_PQBD_COL_SEGRECON.PBD_NVASOL(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, CRTSOLICR.SOLICR_CODUNI);
                //         this.CTRSOLICR2.SOLICR_FECREC = PLSQLBuiltins.sysdate();
                //         this.CTRSOLICR2.SOLICR_ESTSOL = V_ESTADO;
                //         // construct payload
                //         let payload4 = new Map();
                //         payload4.set("SOLICR_OFCSOL", CRTSOLICR.SOLICR_OFCSOL);
                //         payload4.set("SOLICR_CODSOL", CRTSOLICR.SOLICR_CODSOL);
                //         payload4.set("SOLICR_CODUNI", CRTSOLICR.SOLICR_CODUNI);
                //         // call REST API
                //         const result4 = await Rest.post("/crfapgte_ctrsolicr2/crfapgte_ctrsolicr2_solicrre_whenbuttonpressed_query4", payload4);
                //         // get values from result
                //         V_EXISTE = result4[0].get("V_EXISTE");
                //         if (V_EXISTE > 0) {
                //             CRFAPGTE_PU_TRASLADO_PLANEACIONES(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, CRTSOLICR.SOLICR_TIPCRE);
                //         }
                //         CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD HA SIDO RECONSIDERADA", null, null, null, T_RESPUESTA);
                //         this.oracleFormsBuiltins.go_block("CRTSOLICR");
                //         this.oracleFormsBuiltins.execute_query();
                //         this.oracleFormsBuiltins.set_item_property("SOLICR_RE", "VISIBLE", "PROPERTY_TRUE");
                //         this.oracleFormsBuiltins.set_item_property("SOLICR_RE", "ENABLED", "PROPERTY_TRUE");
                //         this.oracleFormsBuiltins.go_item("SOLICR_RE");
                //     }
                //     else {
                //         CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO RECONSIDERADA", null, null, null, T_RESPUESTA);
                //         this.oracleFormsBuiltins.go_block("CRTSOLICR");
                //     }
            }
            else {
                // CRFAPGTE_LIB$ALERTA("MENSAJE", "LA SOLICITUD TIENE CONTRATOS VIGENTES NO SE PUEDE RECONSIDERAR", null, null, null, T_RESPUESTA);
                this.CTRSOLICR2.SOLICR_OBSREC = null;
                this.oracleFormsBuiltins.go_block("CRTSOLICR");
            }
        }
        console.log("Exiting CRFAPGTE_ctrsolicr2_solicrRe_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFAPGTE_toolbar_whenButtonPressed() {
        console.log("Entering CRFAPGTE_toolbar_whenButtonPressed");
        console.log("Exiting CRFAPGTE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFAPGTE_toolbar_whenMouseLeave() {
        console.log("Entering CRFAPGTE_toolbar_whenMouseLeave");
        console.log("Exiting CRFAPGTE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFAPGTE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFAPGTE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFAPGTE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   DEFAULT_VALUE(NULL,'GLOBAL.ESTAP');
    //   DEFAULT_VALUE(NULL,'GLOBAL.ESTAC');
    //   DEFAULT_VALUE(NULL,'GLOBAL.ESTAZ');
    //   DEFAULT_VALUE(NULL,'GLOBAL.ESTNG');
    // END;
    //#endregion
    async CRFAPGTE_ppal_whenNewBlockInstance() {
        console.log("Entering CRFAPGTE_ppal_whenNewBlockInstance");
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.ESTAP");
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.ESTAC");
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.ESTAZ");
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.ESTNG");
        console.log("Exiting CRFAPGTE_ppal_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN --MESSAGE('SSSG 1');
    // :GLOBAL.ESTAP := 'AP';
    // --SET_ITEM_PROPERTY('VARIABLE.APROBAR',ENABLED,ATTR_ON);       --ARQUITECTURA
    // --SET_ITEM_PROPERTY('VARIABLE.RECONSIDERAR',ENABLED,"ATTR_OFF"); --ARQUITECTURA
    // GO_BLOCK('VARIABLE');
    // --EXECUTE_QUERY; END;
    //#endregion
    async CRFAPGTE_ppal_ppalAprobar_whenButtonPressed() {
        console.log("Entering CRFAPGTE_ppal_ppalAprobar_whenButtonPressed");
        // this.GLOBAL.ESTAP = "AP";
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFAPGTE_ppal_ppalAprobar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.ESTAP :='AP';
    // :GLOBAL.ESTAC :='AC';
    // :GLOBAL.ESTAZ :='AZ';
    // :GLOBAL.ESTNG :='NG';
    // 
    // PUP_INICIA;      --CAHH 09/06/2011   PY 6297
    // --MESSAGE('SSSG 2');
    // --SET_ITEM_PROPERTY('VARIABLE.APROBAR',ENABLED,"ATTR_OFF");     --ARQUITECTUTA
    // --SET_ITEM_PROPERTY('VARIABLE.RECONSIDERAR',ENABLED,ATTR_ON); --ARQUITECTURA
    // GO_BLOCK('VARIABLE');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFAPGTE_ppal_ppalReconsiderar_whenButtonPressed() {
        console.log("Entering CRFAPGTE_ppal_ppalReconsiderar_whenButtonPressed");
        // this.GLOBAL.ESTAP = "AP";
        // this.GLOBAL.ESTAC = "AC";
        // this.GLOBAL.ESTAZ = "AZ";
        // this.GLOBAL.ESTNG = "NG";
        // CRFAPGTE_PUP_INICIA();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFAPGTE_ppal_ppalReconsiderar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFAPGTE_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFAPGTE_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFAPGTE_base_fecha_whenNewItemInstance");
    }

}

