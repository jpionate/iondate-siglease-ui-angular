import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFESTXNIT business logic
import {
    PROCESO,
    COBFLUJO,
    TOOLBAR,
    CONTROL,
    BASE
} from "./COFESTXNIT_models";



// class COFESTXNIT
@Component({
    selector: 'app-cofestxnit',
    templateUrl: './cofestxnit.component.html',
})
export class CofestxnitComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PROCESO: PROCESO = new PROCESO();
    public COBFLUJO: COBFLUJO = new COBFLUJO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CONTROL: CONTROL = new CONTROL();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async COFESTXNIT_keyDelrec() {
        console.log("Entering COFESTXNIT_keyDelrec");
        console.log("Exiting COFESTXNIT_keyDelrec");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async COFESTXNIT_onError() {
        console.log("Entering COFESTXNIT_onError");
        // COFESTXNIT_MENSAJE_ERRORES();
        console.log("Exiting COFESTXNIT_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_whenMouseDoubleclick() {
        console.log("Entering COFESTXNIT_whenMouseDoubleclick");
        console.log("Exiting COFESTXNIT_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_onMessage() {
        console.log("Entering COFESTXNIT_onMessage");
        console.log("Exiting COFESTXNIT_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async COFESTXNIT_keyCrerec() {
        console.log("Entering COFESTXNIT_keyCrerec");
        console.log("Exiting COFESTXNIT_keyCrerec");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_preForm() {
        console.log("Entering COFESTXNIT_preForm");
        console.log("Exiting COFESTXNIT_preForm");
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
    //  ---EXECUTE_QUERY;
    //    :COBFLUJO.COLOFI  :=  :this.PARAMETER.get("OFICINA");
    //    :COBFLUJO.COLTDOC :=  :this.PARAMETER.get("TIPO");
    //    :COBFLUJO.COLCOD  :=  :this.PARAMETER.get("CONTRATO");
    //    :COBFLUJO.CED_NIT :=  :this.PARAMETER.get("TERCERO");
    // END;
    // --------------------------------------------------------------------
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // BEGIN     
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
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.LOGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
    //  END IF;
    // 
    // END;
    // -----------------------------------------------------------------------
    //#endregion
    async COFESTXNIT_whenNewFormInstance() {
        console.log("Entering COFESTXNIT_whenNewFormInstance");
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
        this.COBFLUJO.COLOFI = this.PARAMETER.get("OFICINA");
        this.COBFLUJO.COLTDOC = this.PARAMETER.get("TIPO");
        this.COBFLUJO.COLCOD = this.PARAMETER.get("CONTRATO");
        this.COBFLUJO.CED_NIT = this.PARAMETER.get("TERCERO");
        let V_IMAGEN: string = null;
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
            // call REST API
            const result1 = await Rest.post("/cofestxnit/cofestxnit_whennewforminstance_query1", payload1);
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
        console.log("Exiting COFESTXNIT_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES(RESTRICT);
    // END;
    //#endregion
    async COFESTXNIT_keyListval() {
        console.log("Entering COFESTXNIT_keyListval");
        this.oracleFormsBuiltins.list_values("RESTRICT");
        console.log("Exiting COFESTXNIT_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async COFESTXNIT_keyCommit() {
        console.log("Entering COFESTXNIT_keyCommit");
        console.log("Exiting COFESTXNIT_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   :COBFLUJO.FECHAF:=SYSDATE;
    //   :COBFLUJO.FECHAI:=TO_DATE('01/01/1994','DD/MM/YYYY');
    //   :COBFLUJO.PRO:='N';
    //   :COBFLUJO.ESTADO:='11';
    //   :COBFLUJO.IMPRIMIR:='N';
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_whenCreateRecord() {
        console.log("Entering COFESTXNIT_cobflujo_whenCreateRecord");
        this.COBFLUJO.FECHAF = PLSQLBuiltins.sysdate();
        this.COBFLUJO.FECHAI = new Date("01/01/1994");
        this.COBFLUJO.PRO = "N";
        this.COBFLUJO.ESTADO = "11";
        this.COBFLUJO.IMPRIMIR = "N";
        console.log("Exiting COFESTXNIT_cobflujo_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //     SELECT DESCRI
    //       INTO :COBFLUJO.DESTRA
    //       FROM COTTRANS
    //       WHERE CODIGO = :COBFLUJO.TRANSA;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       MESSAGE('CODIGO NO EXISTE');
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_transa_postTextItem() {
        console.log("Entering COFESTXNIT_cobflujo_transa_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("TRANSA", this.COBFLUJO.TRANSA);
        // call REST API
        const result1 = await Rest.post("/cofestxnit_cobflujo/cofestxnit_cobflujo_transa_posttextitem_query1", payload1);
        // get values from result
        this.COBFLUJO.DESTRA = result1[0].get("COBFLUJO.DESTRA");
        if (result1 == null || result1.length == 0) {

            this.oracleFormsBuiltins.message("CODIGO NO EXISTE");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting COFESTXNIT_cobflujo_transa_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :COBFLUJO.AGENCIA IS NOT NULL THEN
    //      BEGIN
    //      SELECT AGENOM
    //      INTO :COBFLUJO.DESAGE
    //      FROM OPS$COLOCA.AGE
    //      WHERE AGECOD = :COBFLUJO.AGENCIA
    //      AND ROWNUM = 1;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //      MESSAGE ('NO EXISTE AGENCIA');
    //      RAISE FORM_TRIGGER_FAILURE;
    //      END;
    //    END IF;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_agencia_whenValidateItem() {
        console.log("Entering COFESTXNIT_cobflujo_agencia_whenValidateItem");
        if ((this.COBFLUJO.AGENCIA != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("AGENCIA", this.COBFLUJO.AGENCIA);
            // call REST API
            const result1 = await Rest.post("/cofestxnit_cobflujo/cofestxnit_cobflujo_agencia_whenvalidateitem_query1", payload1);
            // get values from result
            this.COBFLUJO.DESAGE = result1[0].get("COBFLUJO.DESAGE");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("NO EXISTE AGENCIA");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting COFESTXNIT_cobflujo_agencia_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // PL_ID PARAMLIST;
    // BEGIN
    //   PL_ID  := GET_PARAMETER_LIST('PARAMETROS');
    //   IF NOT ID_NULL(PL_ID) THEN
    //      -- PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //       ADD_PARAMETER(PL_ID, 'OFICINA',"TEXT_PARAMETER", :COLOFI);
    //       ADD_PARAMETER(PL_ID, 'TIPO',"TEXT_PARAMETER",   :COLTDOC);
    //       ADD_PARAMETER(PL_ID, 'CONTRATO',"TEXT_PARAMETER",:COLCOD);
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //       RUN_PRODUCT (REPORTS,'ESTACUE1', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //    ELSE
    //       PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //       ADD_PARAMETER(PL_ID, 'OFICINA',"TEXT_PARAMETER", :COLOFI);
    //       ADD_PARAMETER(PL_ID, 'TIPO',"TEXT_PARAMETER",    :COLTDOC);
    //       ADD_PARAMETER(PL_ID, 'CONTRATO',"TEXT_PARAMETER",:COLCOD);
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //       RUN_PRODUCT (REPORTS, 'ESTACUE1', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //    END IF;
    //     DELETE_PARAMETER(PL_ID, 'OFICINA');
    //     DELETE_PARAMETER(PL_ID, 'TIPO');
    //     DELETE_PARAMETER(PL_ID, 'CONTRATO');
    //     DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_varImprimir_whenButtonPressed() {
        console.log("Entering COFESTXNIT_cobflujo_varImprimir_whenButtonPressed");
        let PL_ID: any = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        // if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "OFICINA", "TEXT_PARAMETER", COLOFI);
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "TIPO", "TEXT_PARAMETER", COLTDOC);
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "CONTRATO", "TEXT_PARAMETER", COLCOD);
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        //     this.oracleFormsBuiltins.run_product(REPORTS, "ESTACUE1", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        // }
        // else {
        //     PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "OFICINA", "TEXT_PARAMETER", COLOFI);
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "TIPO", "TEXT_PARAMETER", COLTDOC);
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "CONTRATO", "TEXT_PARAMETER", COLCOD);
        //     this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        //     this.oracleFormsBuiltins.run_product(REPORTS, "ESTACUE1", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        // }
        this.oracleFormsBuiltins.delete_parameter(PL_ID, "OFICINA");
        this.oracleFormsBuiltins.delete_parameter(PL_ID, "TIPO");
        this.oracleFormsBuiltins.delete_parameter(PL_ID, "CONTRATO");
        this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
        console.log("Exiting COFESTXNIT_cobflujo_varImprimir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  IF :COBFLUJO.COLCOD  IS NOT NULL THEN  
    //   :COBFLUJO.CED_NIT := NULL;
    //  END IF;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_colcod_whenValidateItem() {
        console.log("Entering COFESTXNIT_cobflujo_colcod_whenValidateItem");
        if ((this.COBFLUJO.COLCOD != null)) {
            this.COBFLUJO.CED_NIT = null;
        }
        console.log("Exiting COFESTXNIT_cobflujo_colcod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :COBFLUJO.PRO NOT IN('N','S') THEN
    //      MESSAGE ('VALOR NO VALIDO');
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_pro_whenValidateItem() {
        console.log("Entering COFESTXNIT_cobflujo_pro_whenValidateItem");
        if (["N", "S"].indexOf(this.COBFLUJO.PRO) != -1) {
            this.oracleFormsBuiltins.message("VALOR NO VALIDO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting COFESTXNIT_cobflujo_pro_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // PL_ID PARAMLIST;
    // BEGIN
    //   IF NOT(:COBFLUJO.IMPRIMIR IN ('N','S')) THEN
    //      MESSAGE('OPCION INVALIDA');
    //      RAISE FORM_TRIGGER_FAILURE;
    //    ELSIF :COBFLUJO.IMPRIMIR='S' THEN
    //    PL_ID  := GET_PARAMETER_LIST('PARAMETROS');
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'OFICINA',"TEXT_PARAMETER", :COLOFI);
    //       ADD_PARAMETER(PL_ID, 'TIPO',"TEXT_PARAMETER", :COLTDOC);
    //       ADD_PARAMETER(PL_ID, 'CONTRATO',"TEXT_PARAMETER", :COLCOD);
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //       RUN_PRODUCT (REPORTS,'ESTACUE1', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //       PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //       ADD_PARAMETER(PL_ID, 'OFICINA',"TEXT_PARAMETER", :COLOFI);
    //       ADD_PARAMETER(PL_ID, 'TIPO',"TEXT_PARAMETER", :COLTDOC);
    //       ADD_PARAMETER(PL_ID, 'CONTRATO',"TEXT_PARAMETER", :COLCOD);
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //       RUN_PRODUCT (REPORTS, 'ESTACUE1', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    END IF;
    // 
    //      REDISPLAY;
    //      EXIT_FORM;
    //    ELSE
    //      EXIT_FORM;
    //    END IF;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_imprimir_keynextitem() {
        console.log("Entering COFESTXNIT_cobflujo_imprimir_keynextitem");
        let PL_ID: any = null;
        if (!(["N", "S"].indexOf(this.COBFLUJO.IMPRIMIR) != -1)) {
            this.oracleFormsBuiltins.message("OPCION INVALIDA");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.COBFLUJO.IMPRIMIR == "S") {
            PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
            // if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "OFICINA", "TEXT_PARAMETER", COLOFI);
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "TIPO", "TEXT_PARAMETER", COLTDOC);
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "CONTRATO", "TEXT_PARAMETER", COLCOD);
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            //     this.oracleFormsBuiltins.run_product(REPORTS, "ESTACUE1", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
            //     this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
            // }
            // else {
            //     PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "OFICINA", "TEXT_PARAMETER", COLOFI);
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "TIPO", "TEXT_PARAMETER", COLTDOC);
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "CONTRATO", "TEXT_PARAMETER", COLCOD);
            //     this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            //     this.oracleFormsBuiltins.run_product(REPORTS, "ESTACUE1", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
            //     this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
            // }
            this.oracleFormsBuiltins.redisplay();
            this.oracleFormsBuiltins.exit_form();
        }
        else {
            this.oracleFormsBuiltins.exit_form();
        }
        console.log("Exiting COFESTXNIT_cobflujo_imprimir_keynextitem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :COBFLUJO.ESTADO NOT IN ('11') THEN
    //     MESSAGE('VALOR VALIDO 11/ESTADO DE CUENTA');
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_estado_whenValidateItem() {
        console.log("Entering COFESTXNIT_cobflujo_estado_whenValidateItem");
        if (["11"].indexOf(this.COBFLUJO.ESTADO) != -1) {
            this.oracleFormsBuiltins.message("VALOR VALIDO 11/ESTADO DE CUENTA");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting COFESTXNIT_cobflujo_estado_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :COBFLUJO.CED_NIT IS NOT NULL THEN
    //     :COBFLUJO.COLOFI  := NULL;
    //     :COBFLUJO.COLCOD  := NULL;
    //     :COBFLUJO.COLTDOC := NULL;
    //   END IF;
    // END;
    //#endregion
    async COFESTXNIT_cobflujo_cedNit_whenValidateItem() {
        console.log("Entering COFESTXNIT_cobflujo_cedNit_whenValidateItem");
        if ((this.COBFLUJO.CED_NIT != null)) {
            this.COBFLUJO.COLOFI = null;
            this.COBFLUJO.COLCOD = null;
            this.COBFLUJO.COLTDOC = null;
        }
        console.log("Exiting COFESTXNIT_cobflujo_cedNit_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CONTROL');
    // GO_ITEM('VER_CONSULTA'); END;
    //#endregion
    async COFESTXNIT_cobflujo_fechaf_keyNextItem() {
        console.log("Entering COFESTXNIT_cobflujo_fechaf_keyNextItem");
        this.oracleFormsBuiltins.go_block("CONTROL");
        this.oracleFormsBuiltins.go_item("VER_CONSULTA");
        console.log("Exiting COFESTXNIT_cobflujo_fechaf_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_toolbar_whenButtonPressed() {
        console.log("Entering COFESTXNIT_toolbar_whenButtonPressed");
        console.log("Exiting COFESTXNIT_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_toolbar_whenNewFormInstance() {
        console.log("Entering COFESTXNIT_toolbar_whenNewFormInstance");
        console.log("Exiting COFESTXNIT_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_toolbar_first_whenButtonPressed() {
        console.log("Entering COFESTXNIT_toolbar_first_whenButtonPressed");
        console.log("Exiting COFESTXNIT_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFESTXNIT_toolbar_lastr_whenButtonPressed() {
        console.log("Entering COFESTXNIT_toolbar_lastr_whenButtonPressed");
        console.log("Exiting COFESTXNIT_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   P_CLIENTE   OPS$COLOCA.COL.COLBEN%TYPE := :COBFLUJO.CED_NIT;
    //   P_CONTRATO  OPS$COLOCA.COL.COLCOD%TYPE := :COBFLUJO.COLCOD;
    //   P_TIPO      OPS$COLOCA.COL.COLTDOC%TYPE := :COBFLUJO.COLTDOC;
    //   P_OFICINA   OPS$COLOCA.COL.COLOFI%TYPE := :COBFLUJO.COLOFI;
    //   J           PLS_INTEGER := 1;
    //   K           PLS_INTEGER := 1;
    //   Y           PLS_INTEGER := 1;
    //   I           PLS_INTEGER := 1;
    //   TOT         NUMBER(24, 6) := 0;
    //   ERROR       VARCHAR2(200) := 'OK';
    //   PL_ID       PARAMLIST;
    //   T_RESPUESTA PLS_INTEGER;
    //  V_FECHA_HABIL    DATE;  
    // 
    //   -- DECLARACION DEL VECTOR
    //   TYPE C_CONTRATO IS RECORD(
    //      OFICINA  OPS$COLOCA.COL.COLOFI%TYPE
    //     ,CONTRATO OPS$COLOCA.COL.COLCOD%TYPE
    //     ,TIPO     OPS$COLOCA.COL.COLTDOC%TYPE);
    // 
    //   TYPE T_CONTRATO IS TABLE OF C_CONTRATO INDEX BY BINARY_INTEGER;
    // 
    //   V_CONTRATO T_CONTRATO;
    // 
    //   -- CURSOR DE CONTRATOS   
    //   CURSOR C_CLIENTE IS
    //     SELECT COLCOD, COLOFI, COLTDOC
    //       FROM COL
    //      WHERE COLBEN = P_CLIENTE
    //        AND COLESTC = 'VI'
    //      ORDER BY COLCOD;
    // 
    //   -- CURSOR DE EXITENCIA DEL NIT
    //   CURSOR C_EXISTE IS(
    //     SELECT 'X' FROM TER WHERE TERCOD = :COBFLUJO.CED_NIT);
    // 
    //   -- CURSOR DE EXISTENCIA DEL CONTRATO  
    //   CURSOR C_EXISTE_CONTRATO IS(
    //     SELECT 'X'
    //       FROM COL
    //      WHERE COLCOD = :COBFLUJO.COLCOD
    //        AND COLTDOC = :COBFLUJO.COLTDOC
    //        AND COLOFI = :COBFLUJO.COLOFI);
    //   --- CURSOR POR CONTRATOS     
    //   CURSOR CTOS_CLIENTE (C_CLIENTE VARCHAR2) IS
    //     SELECT  COLCOD,COLTDOC,COLOFI
    //       FROM COL
    //      WHERE COLBEN = C_CLIENTE
    //        AND COLESTC = 'VI'
    //        ;
    // 
    // 
    //   COMODIN VARCHAR2(1);
    //   EXISTE  BOOLEAN;
    // 
    // BEGIN
    // 
    //   -- AUTOR : JAIRO A. TORRES RAMÍREZ
    //   -- FECHA : 20.04/09
    //   -- MOTIVO: VALIDACIÓN PARA OBLIGAR LA EXISTENCIA DE UN NIT O CONTRATO
    // 
    //   IF P_CLIENTE IS NOT NULL THEN
    //     OPEN C_EXISTE;
    //     FETCH C_EXISTE
    //       INTO COMODIN;
    //     EXISTE := C_EXISTE%FOUND;
    //     CLOSE C_EXISTE;
    //   
    //     IF NOT EXISTE THEN
    //       LIB$ALERTA('MENSAJE', 'EL NIT DIGITADO NO SE ENCUENTRA REGISTRADO...!!  ', NULL, NULL, NULL, T_RESPUESTA);
    //       :COBFLUJO.CED_NIT := NULL;
    //       GO_ITEM('COBFLUJO.CED_NIT');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //   
    //   ELSIF P_CLIENTE IS NULL THEN
    //     OPEN C_EXISTE_CONTRATO;
    //     FETCH C_EXISTE_CONTRATO
    //       INTO COMODIN;
    //     EXISTE := C_EXISTE_CONTRATO%FOUND;
    //     CLOSE C_EXISTE_CONTRATO;
    //   
    //     IF NOT EXISTE THEN
    //       LIB$ALERTA('MENSAJE', 'EL CONTRATO DIGITADO NO SE ENCUENTRA REGISTRADO...!!  ', NULL, NULL, NULL, T_RESPUESTA);
    //       GO_ITEM('COBFLUJO.COLOFI');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //   END IF;
    //   -------------
    //   
    //    BEGIN
    //      SELECT DIASHAB
    //       INTO V_FECHA_HABIL
    //       FROM DIAS 
    //       WHERE DIASREAL=:COBFLUJO.FECHAF;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN                     
    //           LIB$ALERTA('MENSAJE','NO EXISTE DÍA HABIL PARA LA FECHA.....' ||TO_CHAR(TRUNC(:COBFLUJO.FECHAF)),NULL,NULL,NULL,T_RESPUESTA);
    //           RAISE FORM_TRIGGER_FAILURE;
    //    END;   
    //    /*
    //    IF :COBFLUJO.FECHAF <> V_FECHA_HABIL THEN
    //        LIB$ALERTA('MENSAJE','LA FECHA DIGITADA NO ES UN DIA HABIL, SE AJUSTARA AL DIA HABIL CORRESPONDIENTE. ' ||TO_CHAR(V_FECHA_HABIL,'DD/MM/YYYY'),NULL,NULL,NULL,T_RESPUESTA);
    //        :COBFLUJO.FECHAF := V_FECHA_HABIL;
    //        SYNCHRONIZE;   
    //    END IF;*/ -- PRY 23307 
    //    
    //    IF :COBFLUJO.FECHAF <> V_FECHA_HABIL THEN -- PRY 23307 
    //        LIB$ALERTA('MENSAJE','ADVERTENCIA: TENGA EN CUENTA QUE LA FECHA DIGITADA NO ES UN DIA HABIL!  ' ||TO_CHAR(:COBFLUJO.FECHAF,'DD/MM/YYYY'),NULL,NULL,NULL,T_RESPUESTA);
    //        SYNCHRONIZE;   
    //    END IF;   
    //    
    // 
    //   --SELECCION DE LOS CONTRATOS DISCRIMINADOS POR CLIENTE O POR CONTRATO
    //   IF P_CLIENTE IS NOT NULL THEN
    //     DELETE COTVALMO
    //        WHERE ESTADO = '11'
    //          AND TERCER = P_CLIENTE;
    //      COMMIT;
    //    BEGIN
    //     
    //     
    //    LIB$ALERTA('MENSAJE','DESEA INCLUIR EL VALOR DEL PROXIMO VENCIMIENTO EN EL ESTADO DE CUENTA?','SI','NO',NULL,T_RESPUESTA);
    //    
    //   IF (T_RESPUESTA = 1) THEN 
    //     
    //     
    //       FOR ACT IN CTOS_CLIENTE (P_CLIENTE) LOOP
    //        
    //       
    //   
    //             PQBD_COL_APLICACIONCAJA.PBD_CO_CALFLUTOT(ESTADOR  => :COBFLUJO.ESTADO,
    //                                TERCERO  =>  NULL,
    //                                TIPOCOL  =>  NULL,
    //                                FECHA    =>  :COBFLUJO.FECHAF,  -- CORTE
    //                                OFICINA  =>  ACT.COLOFI,
    //                                TIPODOC  =>  ACT.COLTDOC,
    //                                OPERACI  =>  ACT.COLCOD,
    //                                TRANSAC  =>  :COBFLUJO.TRANSA,
    //                                FEC_DES  =>  :COBFLUJO.FECHAI,  -- FECHA DESDE PARA EL CURSOR
    //                                PERSIG   =>  'N',         -- S-TRAE VALORES VENCIDOS DEL PERIODO SIGUIENTE
    //                                AGENCIA  =>  :COBFLUJO.AGENCIA,  -- AGENCIA 
    //                                SUMFLUMO =>  TOT,          -- VARIABLE DE SALIDA
    //                                ERROR    =>  ERROR,        -- VARIABLE DE SALIDA
    //                                P_PARCAJ =>  NULL,        -- PARAMETRO SI VIENE DE LA CAJA S, SINO NULO
    //                                P_VLRPAG => NULL,          -- VALOR PAGADO
    //                                P_TIPREC =>  NULL,        -- PARAMETRO SI VIENE DE LA CAJA
    //                                P_OFCREC =>  NULL,              -- PARAMETRO SI VIENE DE LA CAJA
    //                                P_NUMREC => NULL,             -- PARAMETRO SI VIENE DE LA CAJA 
    //                                P_FORMA  =>  NULL                -- PARAMETRO SI VIENE DE LA CAJA DE LA FORMA MANUAL OCFCACAJ PARA
    //                                                         -- CONTROLAR CALCULO DE HONORARIOS('N' NO CALCULA Y NULL DESDE LOS OTROS)
    //                                );
    //             
    //         COMMIT;
    //         
    //         
    //         PBD_COL_DEUDOESTADOS (P_OFI   => ACT.COLOFI
    //                              ,P_TIPO   => ACT.COLTDOC
    //                              ,P_CTO   => ACT.COLCOD
    //                              ,P_TIPPROC =>  'ES'
    //                              ,P_ESTADO  =>  :COBFLUJO.ESTADO
    //                              ,P_FECHA   =>  :COBFLUJO.FECHAF); -- ES: ESTADO DE CUENTA
    //         
    //         COMMIT;                           
    //         
    //         
    //         
    //       END LOOP;
    //     
    //   ELSIF (T_RESPUESTA = 2) THEN
    //  
    //  
    //     
    //       FOR ACT IN CTOS_CLIENTE (P_CLIENTE) LOOP
    //       
    //         
    //           PQBD_COL_APLICACIONCAJA.PBD_CO_CALFLUNVO(ESTADOR  => :COBFLUJO.ESTADO,
    //                               TERCERO  =>  NULL,
    //                               TIPOCOL  =>  NULL,
    //                               FECHA    =>  :COBFLUJO.FECHAF,  -- CORTE
    //                               OFICINA  =>  ACT.COLOFI,
    //                               TIPODOC  =>  ACT.COLTDOC,
    //                               OPERACI  =>  ACT.COLCOD,
    //                               TRANSAC  =>  :COBFLUJO.TRANSA,
    //                               FEC_DES  =>  :COBFLUJO.FECHAI,  -- FECHA DESDE PARA EL CURSOR
    //                               PERSIG   =>  'N',         -- S-TRAE VALORES VENCIDOS DEL PERIODO SIGUIENTE
    //                               AGENCIA  =>  :COBFLUJO.AGENCIA,  -- AGENCIA 
    //                               SUMFLUMO =>  TOT,          -- VARIABLE DE SALIDA
    //                               ERROR    =>  ERROR,        -- VARIABLE DE SALIDA
    //                               P_PARCAJ =>  NULL,        -- PARAMETRO SI VIENE DE LA CAJA S, SINO NULO
    //                               P_VLRPAG => NULL,          -- VALOR PAGADO
    //                               P_TIPREC =>  NULL,        -- PARAMETRO SI VIENE DE LA CAJA
    //                               P_OFCREC =>  NULL,              -- PARAMETRO SI VIENE DE LA CAJA
    //                               P_NUMREC => NULL,             -- PARAMETRO SI VIENE DE LA CAJA 
    //                               P_FORMA  =>  NULL                -- PARAMETRO SI VIENE DE LA CAJA DE LA FORMA MANUAL OCFCACAJ PARA
    //                                                        -- CONTROLAR CALCULO DE HONORARIOS('N' NO CALCULA Y NULL DESDE LOS OTROS)
    //                               );
    //       
    //             
    //         COMMIT;
    //         
    //         
    //         PBD_COL_DEUDOESTADOS (P_OFI   => ACT.COLOFI
    //                              ,P_TIPO   => ACT.COLTDOC
    //                              ,P_CTO   => ACT.COLCOD
    //                              ,P_TIPPROC =>  'ES'
    //                              ,P_ESTADO  =>  :COBFLUJO.ESTADO
    //                              ,P_FECHA   =>  :COBFLUJO.FECHAF); -- ES: ESTADO DE CUENTA
    //         
    //         COMMIT;                           
    //         
    //         
    //         
    //       END LOOP; 
    //  
    //        
    //    END IF; 
    //    
    // 
    //   
    //   
    //   
    //     
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$ALERTA('MSG_PRECAUCION', SQLERRM, NULL, NULL, NULL, T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   END IF;
    //   
    //   --AJ PY 25793 PARA UVP BUSCA SEGUROS
    //     IF :COBFLUJO.COLOFI ='005' THEN
    //    -- PUP_CALSEG;
    //   -- OPS$COLOCA.PBD_COL_SEGESTADO (:COBFLUJO.COLOFI, :COBFLUJO.COLTDOC, :COBFLUJO.COLCOD );
    //     NULL;
    //    END IF;
    //   --AJ  
    //     
    //   -- LLAMA EL REPORTE CON LOS CORRESPONDIENTES PARAMETROS
    //   PL_ID := GET_PARAMETER_LIST('PARAMETROS');
    //   IF NOT ID_NULL(PL_ID) THEN
    //     DESTROY_PARAMETER_LIST('PARAMETROS');
    //   END IF;
    //   PL_ID := CREATE_PARAMETER_LIST('PARAMETROS');
    //   ADD_PARAMETER(PL_ID, 'OFICINA', "TEXT_PARAMETER", :COLOFI);
    //   ADD_PARAMETER(PL_ID, 'TIPO', "TEXT_PARAMETER", :COLTDOC);
    //   ADD_PARAMETER(PL_ID, 'CONTRATO', "TEXT_PARAMETER", :COLCOD);
    //   ADD_PARAMETER(PL_ID, 'NIT', "TEXT_PARAMETER", :CED_NIT);
    //   ADD_PARAMETER(PL_ID, 'QQ8',"TEXT_PARAMETER",:COBFLUJO.RG_TFORM);-- AJ PY 25793 DETALLE CANON EN CAPITAL INTERESES 
    //   ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //   RUN_PRODUCT(REPORTS, 'ESTACNIT', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    // 
    // END;
    //#endregion
    async COFESTXNIT_control_verConsulta_whenButtonPressed() {
        console.log("Entering COFESTXNIT_control_verConsulta_whenButtonPressed");
        let P_CLIENTE = this.COBFLUJO.CED_NIT;
        let P_CONTRATO = this.COBFLUJO.COLCOD;
        let P_TIPO = this.COBFLUJO.COLTDOC;
        let P_OFICINA = this.COBFLUJO.COLOFI;
        let J: number = 1;
        let K: number = 1;
        let Y: number = 1;
        let I: number = 1;
        let TOT: number = 0;
        let ERROR: string = 'OK';
        let PL_ID: any = null;
        let T_RESPUESTA: number = null;
        let V_FECHA_HABIL: Date = null;
        let V_CONTRATO: null = null;
        let COMODIN: string = null;
        let EXISTE: boolean = null;
        if ((P_CLIENTE != null)) {
            EXISTE = null;
            if ((!EXISTE)) {
                // COFESTXNIT_LIB$ALERTA("MENSAJE", "EL NIT DIGITADO NO SE ENCUENTRA REGISTRADO...!!  ", null, null, null, T_RESPUESTA);
                this.COBFLUJO.CED_NIT = null;
                this.oracleFormsBuiltins.go_item("COBFLUJO.CED_NIT");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else if ((P_CLIENTE == null)) {
            EXISTE = null;
            if ((!EXISTE)) {
                // COFESTXNIT_LIB$ALERTA("MENSAJE", "EL CONTRATO DIGITADO NO SE ENCUENTRA REGISTRADO...!!  ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("COBFLUJO.COLOFI");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        // construct payload
        let payload7 = new Map();
        payload7.set("FECHAF", this.COBFLUJO.FECHAF);
        // call REST API
        const result7 = await Rest.post("/cofestxnit_control/cofestxnit_control_verconsulta_whenbuttonpressed_query7", payload7);
        // get values from result
        V_FECHA_HABIL = result7[0].get("V_FECHA_HABIL");
        if (result7 == null || result7.length == 0) {

            // COFESTXNIT_LIB$ALERTA("MENSAJE", "NO EXISTE DÍA HABIL PARA LA FECHA....." + TRUNC(COBFLUJO.FECHAF).toString(), null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (this.COBFLUJO.FECHAF != V_FECHA_HABIL) {
            // COFESTXNIT_LIB$ALERTA("MENSAJE", "ADVERTENCIA: TENGA EN CUENTA QUE LA FECHA DIGITADA NO ES UN DIA HABIL!  " + COBFLUJO.FECHAF.toString(), null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.synchronize();
        }
        if ((P_CLIENTE != null)) {
            // construct payload
            let payload8 = new Map();
            // call REST API
            const result8 = await Rest.post("/cofestxnit_control/cofestxnit_control_verconsulta_whenbuttonpressed_query8", payload8);
            let result9 = new Map();
            try {

                // COFESTXNIT_LIB$ALERTA("MENSAJE", "DESEA INCLUIR EL VALOR DEL PROXIMO VENCIMIENTO EN EL ESTADO DE CUENTA?", "SI", "NO", null, T_RESPUESTA);
                if (T_RESPUESTA == 1) {
                }
                else if (T_RESPUESTA == 2) {
                }
            } catch (ex) {

                // COFESTXNIT_LIB$ALERTA("MSG_PRECAUCION", SQLERRM, null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        if (this.COBFLUJO.COLOFI == "005") {
        }
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list("PARAMETROS");
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "OFICINA", "TEXT_PARAMETER", COLOFI);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "TIPO", "TEXT_PARAMETER", COLTDOC);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "CONTRATO", "TEXT_PARAMETER", COLCOD);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "NIT", "TEXT_PARAMETER", CED_NIT);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "QQ8", "TEXT_PARAMETER", COBFLUJO.RG_TFORM);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ESTACNIT", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        console.log("Exiting COFESTXNIT_control_verConsulta_whenButtonPressed");
    }

}

