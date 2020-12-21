import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFSEGGAR business logic
import {
    B_OPCIONES,
    PROCESO,
    TOOLBAR,
    B_SEGGAR,
    PARAMETROS_EXPORTAR,
    BASE
} from "./COFSEGGAR_models";



// class COFSEGGAR
@Component({
    selector: 'app-cofseggar',
    templateUrl: './cofseggar.component.html',
})
export class CofseggarComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['CONTRATO', null],
        ['OFICINA', null],
        ['TIPO', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public B_OPCIONES: B_OPCIONES = new B_OPCIONES();
    public PROCESO: PROCESO = new PROCESO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public B_SEGGAR: B_SEGGAR = new B_SEGGAR();
    public PARAMETROS_EXPORTAR: PARAMETROS_EXPORTAR = new PARAMETROS_EXPORTAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async COFSEGGAR_whenMouseDoubleclick() {
        console.log("Entering COFSEGGAR_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting COFSEGGAR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async COFSEGGAR_onError() {
        console.log("Entering COFSEGGAR_onError");
        // COFSEGGAR_MENSAJE_ERRORES();
        console.log("Exiting COFSEGGAR_onError");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async COFSEGGAR_onMessage() {
        console.log("Entering COFSEGGAR_onMessage");
        // COFSEGGAR_MENSAJE_INFORMATIVOS();
        console.log("Exiting COFSEGGAR_onMessage");
    }

    //#region PLSQL
    // BEGIN  
    // 
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSIF :BASE.BD IN ('FINT','FINT','FINT11G','DAVIT','FINT11G','DAVIT')  THEN
    //   :BASE.BASE_DAT := 'TEST';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   
    // 
    // END;
    // SHOW_VIEW('PRINCIPAL');
    // SHOW_VIEW('CANVAS_2');
    // ---------------------------------------------------------------------
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
    // -----------
    // 
    // -- ARQUITECTURA
    //   BEGIN
    //   SELECT USU_CODUNI 
    //    INTO :this.PARAMETER.get("P_UNIDAD")
    //   FROM SGUSUARIOS 
    //   WHERE USU_CODIGO = PLSQLBuiltins.user();
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //  LIB$DTNERFRMA('EL USUARIO '||USER
    //                 ||' NO TIENE ASIGNADO A NINGUNA UNIDAD');
    //   END;
    // -- ARQUITECTURA
    // 
    // 
    // --------------------------------------------------------------------
    //#endregion
    async COFSEGGAR_whenNewFormInstance() {
        console.log("Entering COFSEGGAR_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else if (["FINT", "FINT", "FINT11G", "DAVIT", "FINT11G", "DAVIT"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "TEST";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        let V_IMAGEN: string = null;
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
            // call REST API
            const result1 = await Rest.post("/cofseggar/cofseggar_whennewforminstance_query1", payload1);
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
        // construct payload
        let payload2 = new Map();
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/cofseggar/cofseggar_whennewforminstance_query2", payload2);
        // get values from result
        this.PARAMETER.set("P_UNIDAD", result2[0].get(this.PARAMETER.get("P_UNIDAD")));
        if (result2 == null || result2.length == 0) {

            // COFSEGGAR_LIB$DTNERFRMA("EL USUARIO " + USER + " NO TIENE ASIGNADO A NINGUNA UNIDAD");
        }

        console.log("Exiting COFSEGGAR_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // SET_APPLICATION_PROPERTY(PLSQL_DATE_FORMAT  ,   'DD/MM/RRRR');
    // SET_APPLICATION_PROPERTY(BUILTIN_DATE_FORMAT,   'DD/MM/RRRR');
    // FORMS_DDL('ALTER SESSION SET NLS_DATE_FORMAT = ''DD/MM/RRRR'''); END;
    //#endregion
    async COFSEGGAR_preForm() {
        console.log("Entering COFSEGGAR_preForm");
        // COFSEGGAR_PANTALLA();
        this.oracleFormsBuiltins.set_application_property("PLSQL_DATE_FORMAT", "DD/MM/RRRR");
        this.oracleFormsBuiltins.set_application_property("BUILTIN_DATE_FORMAT", "DD/MM/RRRR");
        this.oracleFormsBuiltins.forms_ddl("ALTER SESSION SET NLS_DATE_FORMAT = ''DD/MM/RRRR''");
        console.log("Exiting COFSEGGAR_preForm");
    }

    //#region PLSQL
    // BEGIN --CLEAR_FORM;
    // EXIT_FORM(NO_VALIDATE); END;
    //#endregion
    async COFSEGGAR_keyExit() {
        console.log("Entering COFSEGGAR_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting COFSEGGAR_keyExit");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANT NUMBER;
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //   
    //   -------------------- VALIDACIÓN FECHAS--------------------------------
    // 
    //    IF (:B_OPCIONES.FECHAINI IS NULL AND :B_OPCIONES.FECHAFIN IS NOT NULL) OR
    //   (:B_OPCIONES.FECHAINI IS NOT NULL AND :B_OPCIONES.FECHAFIN IS NULL) THEN
    //    LIB$ALERTA('MENSAJE', 'DEBE REGISTRAR FECHA INICIAL Y FECHA FINAL', NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  
    //   IF :B_OPCIONES.FECHAINI > :B_OPCIONES.FECHAFIN THEN
    //     LIB$ALERTA('MENSAJE', 'LA FECHA INICIAL NO DEBE SER MAYOR A LA FECHA FINAL', NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   
    //     IF :B_OPCIONES.FECHAFIN < :B_OPCIONES.FECHAINI THEN
    //     LIB$ALERTA('MENSAJE', 'LA FECHA FINAL NO DEBE SER MENOR A LA FECHA FINAL', NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  -------------------------------------------------------------------------   
    //  
    //  -----
    // /*IF :B_OPCIONES.FECHAFIN IS NULL THEN
    //  LIB$DTNERFRMA('POR FAVOR INGRESAR EL PERIODO.');  
    // END IF;*/
    // 
    // SELECT COUNT(*) INTO V_CANT FROM COL  WHERE COLFAPE BETWEEN :B_OPCIONES.FECHAINI AND :B_OPCIONES.FECHAFIN;
    // 
    // IF V_CANT = 0 THEN
    //   LIB$DTNERFRMA('NO EXISTEN DATOS...');
    // ELSE
    //  GO_BLOCK('B_SEGGAR');
    //  LIB$ALERTA('MENSAJE', 'GERANDO LA INFORMACIÓN...', NULL, NULL, NULL, T_RESPUESTA);
    //  EXECUTE_QUERY;
    //  SET_ITEM_PROPERTY('B_OPCIONES.NUVBUS', "VISIBLE", "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('B_OPCIONES.NUVBUS', "ENABLED", "PROPERTY_TRUE");
    // 
    // END IF;
    // END;
    //#endregion
    async COFSEGGAR_bOpciones_fechafin_keyNextItem() {
        console.log("Entering COFSEGGAR_bOpciones_fechafin_keyNextItem");
        let V_CANT: number = null;
        let T_RESPUESTA: number = null;
        if ((((this.B_OPCIONES.FECHAINI == null) && (this.B_OPCIONES.FECHAFIN != null)) || ((this.B_OPCIONES.FECHAINI != null) && (this.B_OPCIONES.FECHAFIN == null)))) {
            // COFSEGGAR_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR FECHA INICIAL Y FECHA FINAL", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (this.B_OPCIONES.FECHAINI > this.B_OPCIONES.FECHAFIN) {
            // COFSEGGAR_LIB$ALERTA("MENSAJE", "LA FECHA INICIAL NO DEBE SER MAYOR A LA FECHA FINAL", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (this.B_OPCIONES.FECHAFIN < this.B_OPCIONES.FECHAINI) {
            // COFSEGGAR_LIB$ALERTA("MENSAJE", "LA FECHA FINAL NO DEBE SER MENOR A LA FECHA FINAL", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("FECHAFIN", this.B_OPCIONES.FECHAFIN);
        payload1.set("FECHAINI", this.B_OPCIONES.FECHAINI);
        // call REST API
        const result1 = await Rest.post("/cofseggar_b_opciones/cofseggar_bopciones_fechafin_keynextitem_query1", payload1);
        // get values from result
        V_CANT = result1[0].get("V_CANT");
        if (V_CANT == 0) {
            // COFSEGGAR_LIB$DTNERFRMA("NO EXISTEN DATOS...");
        }
        else {
            this.oracleFormsBuiltins.go_block("B_SEGGAR");
            // COFSEGGAR_LIB$ALERTA("MENSAJE", "GERANDO LA INFORMACIÓN...", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.set_item_property("B_OPCIONES.NUVBUS", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("B_OPCIONES.NUVBUS", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting COFSEGGAR_bOpciones_fechafin_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANT NUMBER;
    // BEGIN 
    // IF :B_OPCIONES.FECHAINI IS NULL THEN
    //  LIB$DTNERFRMA('POR FAVOR INGRESAR EL PERIODO.');  
    // END IF;
    // 
    // GO_ITEM('B_OPCIONES.FECHAFIN');
    //  
    // END;
    //#endregion
    async COFSEGGAR_bOpciones_fechaini_keyNextItem() {
        console.log("Entering COFSEGGAR_bOpciones_fechaini_keyNextItem");
        let V_CANT: number = null;
        if ((this.B_OPCIONES.FECHAINI == null)) {
            // COFSEGGAR_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PERIODO.");
        }
        this.oracleFormsBuiltins.go_item("B_OPCIONES.FECHAFIN");
        console.log("Exiting COFSEGGAR_bOpciones_fechaini_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('B_OPCIONES');
    // CLEAR_BLOCK;
    // GO_BLOCK('B_SEGGAR');
    // CLEAR_BLOCK;
    // GO_BLOCK('PARAMETROS_EXPORTAR');
    // CLEAR_BLOCK;
    // SET_ITEM_PROPERTY('B_OPCIONES.NUVBUS', "VISIBLE", "PROPERTY_FALSE");
    // SET_ITEM_PROPERTY('B_OPCIONES.NUVBUS', "ENABLED", "PROPERTY_FALSE"); END;
    //#endregion
    async COFSEGGAR_bOpciones_nuvbus_whenNewItemInstance() {
        console.log("Entering COFSEGGAR_bOpciones_nuvbus_whenNewItemInstance");
        this.oracleFormsBuiltins.go_block("B_OPCIONES");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("B_SEGGAR");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("PARAMETROS_EXPORTAR");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.set_item_property("B_OPCIONES.NUVBUS", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("B_OPCIONES.NUVBUS", "ENABLED", "PROPERTY_FALSE");
        console.log("Exiting COFSEGGAR_bOpciones_nuvbus_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async COFSEGGAR_toolbar_whenButtonPressed() {
        console.log("Entering COFSEGGAR_toolbar_whenButtonPressed");
        // COFSEGGAR_TOOLBAR_ACTIONS();
        console.log("Exiting COFSEGGAR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async COFSEGGAR_toolbar_whenNewFormInstance() {
        console.log("Entering COFSEGGAR_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting COFSEGGAR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async COFSEGGAR_toolbar_first_whenButtonPressed() {
        console.log("Entering COFSEGGAR_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting COFSEGGAR_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async COFSEGGAR_toolbar_lastr_whenButtonPressed() {
        console.log("Entering COFSEGGAR_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting COFSEGGAR_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  P_RESPUESTA NUMBER := 0;
    //  V_RUTA VARCHAR2(200);
    // BEGIN
    //  
    // 
    //  --LIB$ALERTA ('MENSAJE','EN ESTOS MOMENTOS VA EXPORTAR LA INFORMACIÓN VISTA EN PANTALLA A EXCEL.','ACEPTAR',NULL,NULL,VBOTON);  
    //  V_RUTA:= :PARAMETROS_EXPORTAR.RUTA ;
    // 
    //  PUP_BLOQUE_A_EXCEL('B_SEGGAR',V_RUTA, P_RESPUESTA); 
    // 
    //  --PUP_MENSAJES(P_RESPUESTA); 
    // END;
    //#endregion
    async COFSEGGAR_parametrosExportar_exportarImp_whenButtonPressed() {
        console.log("Entering COFSEGGAR_parametrosExportar_exportarImp_whenButtonPressed");
        let P_RESPUESTA: number = 0;
        let V_RUTA: string = null;
        V_RUTA = this.PARAMETROS_EXPORTAR.RUTA;
        // COFSEGGAR_PUP_BLOQUE_A_EXCEL("B_SEGGAR", V_RUTA, P_RESPUESTA);
        console.log("Exiting COFSEGGAR_parametrosExportar_exportarImp_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_RUTA VARCHAR2(255);
    // BEGIN
    //  V_RUTA:=:PARAMETROS_EXPORTAR.RUTA;
    //  :PARAMETROS_EXPORTAR.RUTA := GET_FILE_NAME(FILE_FILTER=>'CSV (*.CSV)|*.CSV| ALL FILES (*.*)|*.*|', DIALOG_TYPE=> 2);
    //  --'DOCUMENTOS (*.DOC,*.XLS,*.TXT)');
    // 
    //  IF :PARAMETROS_EXPORTAR.RUTA IS NULL THEN
    //   :PARAMETROS_EXPORTAR.RUTA:=V_RUTA;
    //  END IF;
    // 
    // END;
    //   
    //#endregion
    async COFSEGGAR_parametrosExportar_btAbreImp_whenButtonPressed() {
        console.log("Entering COFSEGGAR_parametrosExportar_btAbreImp_whenButtonPressed");
        let V_RUTA: string = null;
        V_RUTA = this.PARAMETROS_EXPORTAR.RUTA;
        this.PARAMETROS_EXPORTAR.RUTA = this.oracleFormsBuiltins.get_file_name("CSV (*.CSV)|*.CSV| ALL FILES (*.*)|*.*|", 2);
        if ((this.PARAMETROS_EXPORTAR.RUTA == null)) {
            this.PARAMETROS_EXPORTAR.RUTA = V_RUTA;
        }
        console.log("Exiting COFSEGGAR_parametrosExportar_btAbreImp_whenButtonPressed");
    }

}

