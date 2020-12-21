import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCOEST business logic
import {
    CRTCONTROL,
    SEMAFORO,
    CRTSOLICR,
    CRTDOCSOL,
    CRTESTDOC1,
    TOOLBAR,
    CRTHISTDOC_CONSULTA,
    BASE
} from "./CRFCOEST_models";



// class CRFCOEST
@Component({
    selector: 'app-crfcoest',
    templateUrl: './crfcoest.component.html',
})
export class CrfcoestComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['OFICINA', null],
        ['TERCERO', null],
        ['SOLICITUD', null],
        ['CONTROL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTCONTROL: CRTCONTROL = new CRTCONTROL();
    public SEMAFORO: SEMAFORO = new SEMAFORO();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CRTDOCSOL: CRTDOCSOL = new CRTDOCSOL();
    public CRTESTDOC1: CRTESTDOC1 = new CRTESTDOC1();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTHISTDOC_CONSULTA: CRTHISTDOC_CONSULTA = new CRTHISTDOC_CONSULTA();
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
    async CRFCOEST_onClearDetails() {
        console.log("Entering CRFCOEST_onClearDetails");
        // CRFCOEST_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFCOEST_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOEST_whenMouseDoubleclick() {
        console.log("Entering CRFCOEST_whenMouseDoubleclick");
        console.log("Exiting CRFCOEST_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    //   SET_ITEM_PROPERTY('INDICADOR_VERDE', "VISIBLE", "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('INDICADOR_NARANJA', "VISIBLE", "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('INDICADOR_ROJO', "VISIBLE", "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('INDICADOR_NEGRO', "VISIBLE", "PROPERTY_FALSE");   
    //   SET_ITEM_PROPERTY('IMG_SEMAFORO', "VISIBLE", "PROPERTY_FALSE");
    // END;
    //#endregion
    async CRFCOEST_preForm() {
        console.log("Entering CRFCOEST_preForm");
        // CRFCOEST_PANTALLA();
        // CRFCOEST_PINCIARSGRDADOFCNAS();
        this.oracleFormsBuiltins.set_item_property("INDICADOR_VERDE", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_NARANJA", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_ROJO", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_NEGRO", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("IMG_SEMAFORO", "VISIBLE", "PROPERTY_FALSE");
        console.log("Exiting CRFCOEST_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOEST_whenNewFormInstance() {
        console.log("Entering CRFCOEST_whenNewFormInstance");
        console.log("Exiting CRFCOEST_whenNewFormInstance");
    }

    async CRFCOEST_crtcontrol_keyDelrec() {
        // null;
    }

    async CRFCOEST_crtcontrol_keyNxtblk() {
        // null;
    }

    async CRFCOEST_crtcontrol_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  T_RESPUESTA  NUMBER;
    //  V_CONTAR   NUMBER;
    // BEGIN
    //   BEGIN
    //     SELECT USU_CARGO
    //      INTO TIPO_PERSONA
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //     ;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     BEGIN
    //     SELECT USU_NOMBRE
    //        INTO :this.CRTCONTROL.V_DESRESPONREV
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=:this.CRTCONTROL.CONTROL_USUREV
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    // END; 
    // END;
    //#endregion
    async CRFCOEST_crtcontrol_postQuery() {
        console.log("Entering CRFCOEST_crtcontrol_postQuery");
        let TIPO_PERSONA: null = null;
        let T_RESPUESTA: number = null;
        let V_CONTAR: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfcoest_crtcontrol/crfcoest_crtcontrol_postquery_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CONTROL_USUREV", this.CRTCONTROL.CONTROL_USUREV);
        payload2.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result2 = await Rest.post("/crfcoest_crtcontrol/crfcoest_crtcontrol_postquery_query2", payload2);
        // get values from result
        // this.CRTCONTROL.V_DESRESPONREV = result2[0].get("this.CRTCONTROL.V_DESRESPONREV");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFCOEST_crtcontrol_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTCONTROL1'); END;
    //#endregion
    async CRFCOEST_crtcontrol_volver_whenButtonPressed() {
        console.log("Entering CRFCOEST_crtcontrol_volver_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("CRTCONTROL1");
        console.log("Exiting CRFCOEST_crtcontrol_volver_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFCOEST_crtcontrol_controlEstgrl_whenNewItemInstance() {
        console.log("Entering CRFCOEST_crtcontrol_controlEstgrl_whenNewItemInstance");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFCOEST_crtcontrol_controlEstgrl_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    PL_ID              PARAMLIST;
    //    PL_NOMBRE          VARCHAR2(15) := 'PL_SOLICITUD';
    // 
    // BEGIN
    // 
    //    IF :this.CRTSOLICR.SOLICR_OFCSOL IS NULL OR
    //       :this.CRTSOLICR.SOLICR_CODSOL IS NULL THEN
    //       MESSAGE('EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;  
    // 
    //    FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :this.CRTSOLICR.SOLICR_OFCSOL, :this.CRTSOLICR.SOLICR_CODSOL,:this.CRTSOLICR.V_PLANEACION);
    //    PL_ID  := GET_PARAMETER_LIST(PL_NOMBRE);
    // 
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //       RUN_PRODUCT (REPORTS, 'CRRSEGDO', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
    //        RUN_PRODUCT (REPORTS, 'CRRSEGDO', SYNCHRONOUS, RUNTIME, FILESYSTEM, TO_CHAR(NULL), NULL);
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFCOEST_crtcontrol_reporte_whenMouseClick() {
        console.log("Entering CRFCOEST_crtcontrol_reporte_whenMouseClick");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if (((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFCOEST_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.V_PLANEACION);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRSEGDO", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
        }
        else {
            this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRSEGDO", SYNCHRONOUS, RUNTIME, FILESYSTEM, null.toString(), null);
        }
        console.log("Exiting CRFCOEST_crtcontrol_reporte_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    //   GO_BLOCK('CRTESTDOC1');
    //  -- HIDE_VIEW('CANVAS4');
    //   
    // END;   
    //#endregion
    async CRFCOEST_crtcontrol_volverHistoria_whenButtonPressed() {
        console.log("Entering CRFCOEST_crtcontrol_volverHistoria_whenButtonPressed");
        let T_RESPUESTA: number = null;
        this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        console.log("Exiting CRFCOEST_crtcontrol_volverHistoria_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :V_PLANEACION IS NULL THEN
    //   LIB$ALERTA ('MENSAJE','NO EXISTE CODIGO DE PLANEACIÓN. ASIGNE UNO ...',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    //  
    // /* IF :CONTROL_TIOPE IS NULL THEN
    //   LIB$ALERTA ('MENSAJE','EL TIPO DE OPERACION NO PUEDE SER NULO ...',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;*/
    // END;
    //#endregion
    async CRFCOEST_crtcontrol_controlTiope_whenValidateItem() {
        console.log("Entering CRFCOEST_crtcontrol_controlTiope_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.V_PLANEACION == null)) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "NO EXISTE CODIGO DE PLANEACIÓN. ASIGNE UNO ...", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFCOEST_crtcontrol_controlTiope_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // V_EXISTE    NUMBER;
    // BEGIN
    //  IF :V_PLANEACION IS NOT NULL THEN
    //     GO_BLOCK('CRTESTDOC1');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('CRTCONTROL');
    //     EXECUTE_QUERY("NO_VALIDATE");
    //     GO_BLOCK('CRTESTDOC1');
    //  
    //  END IF;
    // END;  
    //#endregion
    async CRFCOEST_crtcontrol_controlTiope_keyNextItem() {
        console.log("Entering CRFCOEST_crtcontrol_controlTiope_keyNextItem");
        let V_EXISTE: number = null;
        if ((this.CRTSOLICR.V_PLANEACION != null)) {
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTCONTROL");
            this.oracleFormsBuiltins.execute_query("NO_VALIDATE");
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        }
        console.log("Exiting CRFCOEST_crtcontrol_controlTiope_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :this.CRTCONTROL.V_DESRESPONREV
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:this.CRTCONTROL.CONTROL_USUREV;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO TIENE RESPONSABLE DE REVISIÓN. SELECCIONE UNO DE LA LISTA DE VALORES....',NULL,NULL,NULL, T_RESPUESTA);
    //   END;  
    //#endregion
    async CRFCOEST_crtcontrol_controlUsurev_whenvalidateitem() {
        console.log("Entering CRFCOEST_crtcontrol_controlUsurev_whenvalidateitem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("CONTROL_USUREV", this.CRTCONTROL.CONTROL_USUREV);
        // call REST API
        const result1 = await Rest.post("/crfcoest_crtcontrol/crfcoest_crtcontrol_controlusurev_whenvalidateitem_query1", payload1);
        // get values from result
        this.CRTCONTROL.V_DESRESPONREV = result1[0].get("this.CRTCONTROL.V_DESRESPONREV");
        if (result1 == null || result1.length == 0) {

            // CRFCOEST_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO TIENE RESPONSABLE DE REVISIÓN. SELECCIONE UNO DE LA LISTA DE VALORES....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFCOEST_crtcontrol_controlUsurev_whenvalidateitem");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //  V_EXISTE VARCHAR2(1);
    //  T_RESPUESTA NUMBER;
    //   TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //    BEGIN
    //     SELECT USU_CARGO
    //      INTO TIPO_PERSONA
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //    END; 
    //    IF TIPO_PERSONA ='JI' THEN
    //        SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,ATTR_ON);
    //        SET_ITEM_PROPERTY('HISTDO_CODDOC',"UPDATE_ALLOWED",ATTR_ON);
    //        SET_ITEM_PROPERTY('HISTDO_CODDOC', "INSERT_ALLOWED",ATTR_ON);
    //        SET_ITEM_PROPERTY('LISTA_DOC',ENABLED,"ATTR_OFF");
    //   
    //        GO_BLOCK('CRTHISTDOC_CONSULTA');
    //        EXECUTE_QUERY;
    //    ELSE
    //    V_EXISTE:='N';
    //    IF :this.CRTSOLICR.V_PLANEACION IS NOT NULL THEN
    //     PUP_VALIDE_EXISTE(V_EXISTE);
    //     IF V_EXISTE='N' THEN
    //         IF FRM$ALERTA_SINO ('DESEA GENERAR REGISTROS DE DOCUMENTOS PENDIENTES PARA SEGUIMIENTO ?') = 1 THEN
    //          PBD_COL_SEGOPE_DOCPE(:this.CRTSOLICR.SOLICR_OFCSOL,:this.CRTSOLICR.SOLICR_CODSOL,:this.CRTSOLICR.SOLICR_TIPCRE,
    //                                 :this.CRTSOLICR.V_PLANEACION,:this.CRTSOLICR.this.CRTSOLICR.SOLICR_NITTER,V_EXISTE);*/
    //           
    //            GO_ITEM('CRTHISTDOC_CONSULTA.HISTDO_FECSEG');
    //            EXECUTE_QUERY;
    //            /*IF :CRTHISTDOC_CONSULTA.HISTDO_FECREG=:CRTHISTDOC_CONSULTA.HISTDO_FECSEG THEN
    //               LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA DE PRÓXIMO SEGUIMIENTO. INGRESELA CON FORMATO YYYY-MM-DD HH:MI...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //            END IF;
    //         END IF;
    //       ELSE
    //         LIB$ALERTA('MENSAJE','EL REGISTRO CON LOS DOCUMENTOS PENDIENTES YA EXISTE EN LA TABLA DE SEGUIMIENTO',NULL,NULL,NULL,T_RESPUESTA);                                               
    //         GO_ITEM('CRTHISTDOC_CONSULTA.HISTDO_FECSEG');
    //         EXECUTE_QUERY;
    //       END IF;
    //     ELSE 
    //      LIB$ALERTA('MENSAJE','NO HA SELECCIONADO NINGUNA PLANEACIÓN ...',NULL,NULL,NULL,T_RESPUESTA);                                               
    //     END IF;
    //   END IF;
    // END;*/; END;
    //#endregion
    async CRFCOEST_crtcontrol_historia_whenButtonPressed() {
        console.log("Entering CRFCOEST_crtcontrol_historia_whenButtonPressed");
        console.log("Exiting CRFCOEST_crtcontrol_historia_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PUP_SEMAFORO; END;
    //#endregion
    async CRFCOEST_semaforo_imgSemaforo_whenMouseClick() {
        console.log("Entering CRFCOEST_semaforo_imgSemaforo_whenMouseClick");
        // CRFCOEST_PUP_SEMAFORO();
        console.log("Exiting CRFCOEST_semaforo_imgSemaforo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA ('MENSAJE','BLOQUE UNICAMENTE DE CONSULTA ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFCOEST_crtsolicr_keyDelrec() {
        console.log("Entering CRFCOEST_crtsolicr_keyDelrec");
        let T_RESPUESTA: number = null;
        // CRFCOEST_LIB$ALERTA("MENSAJE", "BLOQUE UNICAMENTE DE CONSULTA ...", null, null, null, T_RESPUESTA);
        console.log("Exiting CRFCOEST_crtsolicr_keyDelrec");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTCONTROL');
    // CLEAR_BLOCK;
    // GO_BLOCK('CRTESTDOC1');
    // CLEAR_BLOCK;
    // GO_BLOCK('CRTSOLICR');
    //   SET_ITEM_PROPERTY('INDICADOR_VERDE', "VISIBLE", "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('INDICADOR_NARANJA', "VISIBLE", "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('INDICADOR_ROJO', "VISIBLE", "PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('INDICADOR_NEGRO', "VISIBLE", "PROPERTY_FALSE");  
    //   SET_ITEM_PROPERTY('IMG_SEMAFORO', "VISIBLE", "PROPERTY_FALSE");
    // ENTER_QUERY; END;
    //#endregion
    async CRFCOEST_crtsolicr_keyEntqry() {
        console.log("Entering CRFCOEST_crtsolicr_keyEntqry");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_VERDE", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_NARANJA", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_ROJO", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("INDICADOR_NEGRO", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("IMG_SEMAFORO", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFCOEST_crtsolicr_keyEntqry");
    }

    async CRFCOEST_crtsolicr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF  :this.PARAMETER.get("CONTROL") ='Q' THEN
    //     :this.CRTSOLICR.SOLICR_OFCSOL  :=  :this.PARAMETER.get("OFICINA");
    //     :this.CRTSOLICR.this.CRTSOLICR.SOLICR_NITTER  :=  :this.PARAMETER.get("TERCERO");
    //     :this.CRTSOLICR.SOLICR_CODSOL  :=  :this.PARAMETER.get("SOLICITUD");
    //   --  :this.CRTSOLICR.V_PLANEACION   :=  :this.PARAMETER.get("PLANEACION");
    //     SET_ITEM_PROPERTY('HISTORIA',ENABLED,ATTR_ON);
    // END IF; END;
    //#endregion
    async CRFCOEST_crtsolicr_preQuery() {
        console.log("Entering CRFCOEST_crtsolicr_preQuery");
        if (this.PARAMETER.get("CONTROL") == "Q") {
            this.CRTSOLICR.SOLICR_OFCSOL = this.PARAMETER.get("OFICINA");
            this.CRTSOLICR.SOLICR_NITTER = this.PARAMETER.get("TERCERO");
            this.CRTSOLICR.SOLICR_CODSOL = this.PARAMETER.get("SOLICITUD");
            this.oracleFormsBuiltins.set_item_property("HISTORIA", "ENABLED", "ATTR_ON");
        }
        console.log("Exiting CRFCOEST_crtsolicr_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA ('MENSAJE','BLOQUE UNICAMENTE DE CONSULTA ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFCOEST_crtsolicr_keyCrerec() {
        console.log("Entering CRFCOEST_crtsolicr_keyCrerec");
        let T_RESPUESTA: number = null;
        // CRFCOEST_LIB$ALERTA("MENSAJE", "BLOQUE UNICAMENTE DE CONSULTA ...", null, null, null, T_RESPUESTA);
        console.log("Exiting CRFCOEST_crtsolicr_keyCrerec");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTCONTROL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTCONTROL_CUR IS      
    //     SELECT 1 FROM CRTCONTROL C     
    //     WHERE C.CONTROL_OFCSOL = :this.CRTSOLICR.SOLICR_OFCSOL AND C.CONTROL_CODSOL = :this.CRTSOLICR.SOLICR_CODSOL AND C.CONTROL_NITTER = :this.CRTSOLICR.this.CRTSOLICR.SOLICR_NITTER AND C.CONTROL_CODUNI = :this.CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CRTCONTROL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTCONTROL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTCONTROL_CUR;     
    //   FETCH CRTCONTROL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTCONTROL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTCONTROL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTCONTROL_CUR;
    //   --
    //   -- END CRTCONTROL DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFCOEST_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFCOEST_crtsolicr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCOEST_crtsolicr_onCheckDeleteMaster");
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
    //   -- BEGIN CRTCONTROL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:this.CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:this.CRTSOLICR.this.CRTSOLICR.SOLICR_NITTER IS NOT NULL) OR (:this.CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('this.CRTSOLICR.CRTSOLICR_CRTCONTROL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTCONTROL');   
    //   END IF;
    //   --
    //   -- END CRTCONTROL DETAIL PROGRAM SECTION
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
    async CRFCOEST_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFCOEST_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: string = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_NITTER != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("this.CRTSOLICR.CRTSOLICR_CRTCONTROL");
            // CRFCOEST_QUERY_MASTER_DETAILS(REL_ID, "CRTCONTROL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFCOEST_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFCOEST_crtsolicr_onPopulateDetails");
    }

    async CRFCOEST_crtsolicr_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :this.CRTSOLICR.TEXT_ITEM39
    //    FROM TER
    //    WHERE TERCOD=:this.CRTSOLICR.SOLICR_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //   BEGIN
    //    SELECT OFIDES
    //     INTO :this.CRTSOLICR.TEXT_ITEM41
    //    FROM OFI
    //     WHERE OFICOD=:SOLICR_OFCSOL;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    // END;
    // 
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //   BEGIN
    //    SELECT USU_CARGO
    //     INTO TIPO_PERSONA
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=USER
    //    AND USU_CODUNI= :this.PARAMETER.get("P_UNIDAD") ; --ARQUITECTURA
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //    END; 
    //      
    //    BEGIN
    //    SELECT USU_NOMBRE
    //      INTO :NOM_COMERCIAL
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=:this.CRTSOLICR.SOLICR_USCIAL
    //      AND USU_CODUNI= :this.PARAMETER.get("P_UNIDAD") ; --ARQUITECTURA
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //  /* BEGIN
    //   SELECT COM_USOPER     
    //    INTO :this.CRTSOLICR.SOLICR_USOFID
    //  FROM SETCOMCIA
    //  WHERE COM_USORAC=:SOLICR_USCIAL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN  NULL;
    //   END;*/
    //   BEGIN
    //    SELECT USU_NOMBRE
    //     INTO :NOM_OFICIAL
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:this.CRTSOLICR.SOLICR_USOFID;
    //   --AND USU_CODUNI= :this.PARAMETER.get("P_UNIDAD") ; --ARQUITECTURA
    //   --EXCEPTION
    //     --WHEN NO_DATA_FOUND THEN NULL;
    //   END;  
    //   
    // END; 
    // 
    //  --NVO CAMPO
    //  BEGIN
    //     SELECT TLINDES
    //      INTO :DES_LINDESEMBO
    //     FROM TLIN
    //     WHERE TLINCOD = :this.CRTSOLICR.SOLICR_LINEADES
    //       AND TORIGEN  = 'SOL';
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    //  END;
    //  IF :this.CRTSOLICR.SOLICR_LINEADES <> 'LX' THEN
    //    SET_ITEM_PROPERTY ('CONTROL_FPERFEC',ENABLED,"PROPERTY_FALSE");
    //  END IF;
    //#endregion
    async CRFCOEST_crtsolicr_postQuery() {
        console.log("Entering CRFCOEST_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("this.CRTSOLICR.SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.TEXT_ITEM39 = result1[0].get("this.CRTSOLICR.TEXT_ITEM39");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        // call REST API
        const result2 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_postquery_query2", payload2);
        // get values from result
        this.CRTSOLICR.TEXT_ITEM41 = result2[0].get("this.CRTSOLICR.TEXT_ITEM41");
        if (result2 == null || result2.length == 0) {

        }

        let TIPO_PERSONA: null = null;
        // construct payload
        let payload3 = new Map();
        payload3.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result3 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_postquery_query3", payload3);
        // get values from result
        TIPO_PERSONA = result3[0].get("TIPO_PERSONA");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("SOLICR_USCIAL", this.CRTSOLICR.SOLICR_USCIAL);
        payload4.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result4 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_postquery_query4", payload4);
        // get values from result
        this.CRTSOLICR.NOM_COMERCIAL = result4[0].get("NOM_COMERCIAL");
        if (result4 == null || result4.length == 0) {

        }

        // construct payload
        let payload5 = new Map();
        payload5.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        // call REST API
        const result5 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_postquery_query5", payload5);
        // get values from result
        this.CRTSOLICR.NOM_OFICIAL = result5[0].get("NOM_OFICIAL");
        // construct payload
        let payload6 = new Map();
        payload6.set("SOLICR_LINEADES", this.CRTSOLICR.SOLICR_LINEADES);
        // call REST API
        const result6 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_postquery_query6", payload6);
        // get values from result
        this.CRTSOLICR.DES_LINDESEMBO = result6[0].get("DES_LINDESEMBO");
        if (result6 == null || result6.length == 0) {

        }

        console.log("Exiting CRFCOEST_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  V_DESCRIPCION  VARCHAR2(150);
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO V_DESCRIPCION
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //    AND SUBCAT_CODUNI = :SOLICR_CODUNI --ARQUITECTURA
    //    ;
    //    LIB$ALERTA('MENSAJE','SUB-CATEGORIA : '||V_DESCRIPCION,NULL,NULL,NULL,T_RESPUESTA);
    // EXCEPTION WHEN OTHERS THEN
    //  V_DESCRIPCION := NULL;
    // END;
    //#endregion
    async CRFCOEST_crtsolicr_solicrSubcat_whenMouseMove() {
        console.log("Entering CRFCOEST_crtsolicr_solicrSubcat_whenMouseMove");
        let V_DESCRIPCION: string = null;
        let T_RESPUESTA: number = null;
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TIPBIE",  this.CRTSOLICR.SOLICR_TIPBIE);
            payload1.set("SOLICR_SUBCAT",  this.CRTSOLICR.SOLICR_SUBCAT);
            payload1.set("SOLICR_CODUNI",  this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_solicrsubcat_whenmousemove_query1", payload1);
            // get values from result
            V_DESCRIPCION = result1[0].get("V_DESCRIPCION");
            // CRFCOEST_LIB$ALERTA("MENSAJE", "SUB-CATEGORIA : " + V_DESCRIPCION, null, null, null, T_RESPUESTA);
        } catch (ex) {

            V_DESCRIPCION = null;
        }

        console.log("Exiting CRFCOEST_crtsolicr_solicrSubcat_whenMouseMove");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_EXISTE NUMBER;
    // BEGIN
    //   
    //    BEGIN  
    //       SELECT COUNT(9) 
    //         INTO V_EXISTE
    //       FROM CRTESTDOC
    //       WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //     AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //     AND ESTDOC_TIPCRE=:SOLICR_TIPCRE
    //     AND ESTDOC_CODUNI=:SOLICR_CODUNI --ARQUITECTURA
    //         AND ESTDOC_PLANEA=:V_PLANEACION;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_EXISTE :=0;
    //     END; 
    //     IF V_EXISTE = 0 THEN
    //       LIB$ALERTA('MENSAJE', 'LA PLANECIÓN NO TIENE DOCUMENTOS ASOCIADOS. FAVOR SELECCIONELOS ..',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTCONTROL');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //     ELSE
    //       GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTCONTROL');
    //        EXECUTE_QUERY;
    //       -- GO_BLOCK('CRTTIOPER');
    //       -- EXECUTE_QUERY;
    //        GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //     END IF;
    // END;  
    //#endregion
    async CRFCOEST_crtsolicr_vPlaneacion_keyNextItem() {
        console.log("Entering CRFCOEST_crtsolicr_vPlaneacion_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL",  this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_TIPCRE",  this.CRTSOLICR.SOLICR_TIPCRE);
        payload1.set("SOLICR_CODUNI",  this.CRTSOLICR.SOLICR_CODUNI);
        payload1.set("V_PLANEACION",  this.CRTSOLICR.V_PLANEACION);
        // call REST API
        const result1 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_vplaneacion_keynextitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE == 0) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "LA PLANECIÓN NO TIENE DOCUMENTOS ASOCIADOS. FAVOR SELECCIONELOS ..", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTCONTROL");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTCONTROL");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CRFCOEST_crtsolicr_vPlaneacion_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :SOLICR_LINEADES = 'LX' AND :SOLICR_FDESEMCLI IS NULL THEN
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    // ELSIF :SOLICR_FDESEMCLI < SYSDATE THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY '||TO_CHAR(SYSDATE,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFCOEST_crtsolicr_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFCOEST_crtsolicr_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (( this.CRTSOLICR.SOLICR_LINEADES == "LX" && ( this.CRTSOLICR.SOLICR_FDESEMCLI == null))) {
            // CRFCOEST_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        }
        else if ( this.CRTSOLICR.SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate()) {
            // CRFCOEST_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY " + SYSDATE.toString());
        }
        console.log("Exiting CRFCOEST_crtsolicr_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('L_PLANEA') THEN
    //     LIB$ALERTA('MENSAJE','LA SOLICITUD NO TIENE PLANEACIONES ASOCIADAS .........',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_ITEM('V_PLANEACION');
    //  END IF;
    // END; 
    //#endregion
    async CRFCOEST_crtsolicr_lista_whenButtonPressed() {
        console.log("Entering CRFCOEST_crtsolicr_lista_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("L_PLANEA"))) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO TIENE PLANEACIONES ASOCIADAS .........", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("V_PLANEACION");
        }
        console.log("Exiting CRFCOEST_crtsolicr_lista_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :NOM_OFICIAL
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:this.CRTSOLICR.SOLICR_USOFID
    //   --AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //   ;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO TIENE OFICIAL DE DESEMBOLSO ASIGNADO. SELECCIONE UNO DE LA LISTA DE VALORES....',NULL,NULL,NULL, T_RESPUESTA);
    //   END;  
    //#endregion
    async CRFCOEST_crtsolicr_solicrUsofid_whenValidateItem() {
        console.log("Entering CRFCOEST_crtsolicr_solicrUsofid_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        // call REST API
        const result1 = await Rest.post("/crfcoest_crtsolicr/crfcoest_crtsolicr_solicrusofid_whenvalidateitem_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOM_OFICIAL = result1[0].get("NOM_OFICIAL");
        if (result1 == null || result1.length == 0) {

            // CRFCOEST_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO TIENE OFICIAL DE DESEMBOLSO ASIGNADO. SELECCIONE UNO DE LA LISTA DE VALORES....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFCOEST_crtsolicr_solicrUsofid_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // BEGIN
    //  IF :SOLICR_USOFID IS NULL THEN
    //   LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO TIENE OFICIAL DE DESEMBOLSO ASIGNADO. FAVOR SELECCIONARLO ..',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    //  NEXT_ITEM;
    // END;
    //#endregion
    async CRFCOEST_crtsolicr_solicrOfcsol_keynextitem() {
        console.log("Entering CRFCOEST_crtsolicr_solicrOfcsol_keynextitem");
        let T_RESPUESTA: number = null;
        if (( this.CRTSOLICR.SOLICR_USOFID == null)) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO TIENE OFICIAL DE DESEMBOLSO ASIGNADO. FAVOR SELECCIONARLO ..", null, null, null, T_RESPUESTA);
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFCOEST_crtsolicr_solicrOfcsol_keynextitem");
    }

    async CRFCOEST_crtestdoc1_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  RESPUESTA PLS_INTEGER;
    // BEGIN
    //  PUP_SEMAFORO;
    // END;
    //  
    //#endregion
    async CRFCOEST_crtestdoc1_whenNewBlockInstance() {
        console.log("Entering CRFCOEST_crtestdoc1_whenNewBlockInstance");
        let RESPUESTA: number = null;
        // CRFCOEST_PUP_SEMAFORO();
        console.log("Exiting CRFCOEST_crtestdoc1_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  --NO APLICA PARA EL CAMBIO SOLICITADO EL 14-07-2005 LDB
    //   /*DELETE FROM CRTESTDOC
    //      WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //         AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //         AND ESTDOC_NITTER=:this.CRTSOLICR.SOLICR_NITTER
    //         AND ESTDOC_VBOPER   IS NULL;
    //    COMMIT;*/
    //    GO_BLOCK('CRTSOLICR');
    //   HIDE_VIEW('CANVAS2');
    //   SYNCHRONIZE;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_keyExit() {
        console.log("Entering CRFCOEST_crtestdoc1_keyExit");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCOEST_crtestdoc1_keyExit");
    }

    //#region PLSQL
    // BEGIN
    // --CLEAR_BLOCK;
    // GO_BLOCK('CRTCONTROL');
    // CLEAR_BLOCK;
    // GO_BLOCK('CRTESTDOC');
    // CLEAR_BLOCK;
    // --GO_BLOCK('CRTSOLICR');
    // --ENTER_QUERY;
    // 
    //  /* DELETE FROM CRTESTDOC
    //      WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //         AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //         AND ESTDOC_NITTER=:this.CRTSOLICR.SOLICR_NITTER
    //         AND ESTDOC_VBOPER   IS NULL;
    //    COMMIT;*/
    //   GO_BLOCK('CRTSOLICR');
    //   HIDE_VIEW('CANVAS2');
    //   SYNCHRONIZE;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_keyPrvblk() {
        console.log("Entering CRFCOEST_crtestdoc1_keyPrvblk");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTESTDOC");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCOEST_crtestdoc1_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //    
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER
    //      AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //      ;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //      IF TIPO_PERSONA='OD' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //       ELSIF TIPO_PERSONA='JO' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //     ELSIF TIPO_PERSONA='GE' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"PROPERTY_FALSE"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"PROPERTY_FALSE");
    //     ELSIF TIPO_PERSONA='PR' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //     ELSIF TIPO_PERSONA NOT IN ('OD','JO','GE','PR') THEN  
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //     END IF; 
    // END; 
    // ----------------------
    // -- VARIABLES
    // -------------------------
    // BEGIN
    // 
    //           
    //   SELECT  DOCSOL_DESCRI
    //     INTO  :DESDOC
    //     FROM  CRTDOCSOL 
    //   WHERE DOCSOL_CODIGO = :ESTDOC_CODDOC
    //     AND DOCSOL_CODTOP = :ESTDOC_CODOPER
    //     AND DOCSOL_CODUNI = :this.CRTCONTROL.CONTROL_CODUNI --ARQUITECTURA
    //     ;--ENRIQUE RAMIREZ 2008/08/08
    // 
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // /*BEGIN
    //   SELECT  DISTINCT(TIOPER_DESOPER)
    //     INTO  :OPERAC
    //     FROM  CRTTIOPER,CRTESTDOC
    //   WHERE TIOPER_CODOPER=ESTDOC_CODOPER
    //    AND ESTDOC_OFCSOL=:this.CRTSOLICR.SOLICR_OFCSOL         
    //    AND ESTDOC_CODSOL=:this.CRTSOLICR.SOLICR_CODSOL    
    //    AND ESTDOC_TIPCRE=:this.CRTSOLICR.SOLICR_TIPCRE     
    //    AND ESTDOC_PLANEA=:this.CRTSOLICR.V_PLANEACION;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;  */
    //   
    //   
    //   
    //   
    //#endregion
    async CRFCOEST_crtestdoc1_postQuery() {
        console.log("Entering CRFCOEST_crtestdoc1_postQuery");
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfcoest_crtestdoc1/crfcoest_crtestdoc1_postquery_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (TIPO_PERSONA == "OD") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
        }
        else if (TIPO_PERSONA == "JO") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
        }
        else if (TIPO_PERSONA == "GE") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "PROPERTY_FALSE");
        }
        else if (TIPO_PERSONA == "PR") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
        }
        else if (["OD", "JO", "GE", "PR"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("ESTDOC_CODDOC",  this.CRTESTDOC1.ESTDOC_CODDOC);
        payload2.set("ESTDOC_CODOPER", this.CRTESTDOC1.ESTDOC_CODOPER);
        payload2.set("CONTROL_CODUNI", this.CRTCONTROL.CONTROL_CODUNI);
        // call REST API
        const result2 = await Rest.post("/crfcoest_crtestdoc1/crfcoest_crtestdoc1_postquery_query2", payload2);
        // get values from result
        this.CRTESTDOC1.DESDOC = result2[0].get("DESDOC");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFCOEST_crtestdoc1_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA VARCHAR2(2);
    // BEGIN
    //   IF :ESTDOC_VBJOPE NOT IN ('NK','OK') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (NK) NO ACEPTADO (OK) ACEPTADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    // 
    //   ELSE
    //     BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     IF TIPO_PERSONA='JO' THEN
    //        IF  NVL(:ESTDOC_VBOPER,'Y')<> 'X'  OR NVL(:ESTDOC_ESTDOC,'XX')= 'XX' THEN
    //           LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //           :ESTDOC_VBJOPE:=NULL;
    //        ELSIF  NVL(:ESTDOC_VBOPER,'Y')= 'X'  AND NVL(:ESTDOC_ESTDOC,'XX')= 'PE'  AND :ESTDOC_VBJOPE='OK' THEN
    //           LIB$ALERTA('MENSAJE','ESTADO DEL DOCUMENTO PENDIENTE NO LA PUEDE APROBAR  .....',NULL,NULL,NULL,T_RESPUESTA);
    //           :ESTDOC_VBJOPE:='NK';
    //         ELSE
    //           :ESTDOC_USUARI:=USER;
    //         END IF;
    //      END IF; 
    //   END IF;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_estdocVbjope_whenValidateItem() {
        console.log("Entering CRFCOEST_crtestdoc1_estdocVbjope_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: string = null;
        if (["NK", "OK"].indexOf(this.CRTESTDOC1.ESTDOC_VBJOPE) != -1) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (NK) NO ACEPTADO (OK) ACEPTADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/crfcoest_crtestdoc1/crfcoest_crtestdoc1_estdocvbjope_whenvalidateitem_query1", payload1);
            // get values from result
            TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
            if (result1 == null || result1.length == 0) {

            }

            if (TIPO_PERSONA == "JO") {
                if ((this.CRTESTDOC1.ESTDOC_VBOPER == null ? "Y" : this.CRTESTDOC1.ESTDOC_VBOPER != "X" || this.CRTESTDOC1.ESTDOC_ESTDOC == null ? "XX" : this.CRTESTDOC1.ESTDOC_ESTDOC == "XX")) {
                    // CRFCOEST_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
                    this.CRTESTDOC1.ESTDOC_VBJOPE = null;
                }
                else if (((this.CRTESTDOC1.ESTDOC_VBOPER == null ? "Y" : this.CRTESTDOC1.ESTDOC_VBOPER == "X" && this.CRTESTDOC1.ESTDOC_ESTDOC == null ? "XX" : this.CRTESTDOC1.ESTDOC_ESTDOC == "PE") && this.CRTESTDOC1.ESTDOC_VBJOPE == "OK")) {
                    // CRFCOEST_LIB$ALERTA("MENSAJE", "ESTADO DEL DOCUMENTO PENDIENTE NO LA PUEDE APROBAR  .....", null, null, null, T_RESPUESTA);
                    this.CRTESTDOC1.ESTDOC_VBJOPE = "NK";
                }
                else {
                    this.CRTESTDOC1.ESTDOC_USUARI = PLSQLBuiltins.user();
                }
            }
        }
        console.log("Exiting CRFCOEST_crtestdoc1_estdocVbjope_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   IF NVL(:ESTDOC_VBOPER,'Y')<> 'X' THEN
    //            LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //       :ESTDOC_VBJOPE:=NULL;
    //       NEXT_ITEM;
    //      
    //   ELSE
    // 
    //    IF :ESTDOC_VBJOPE='NK' THEN
    //     GO_BLOCK('CRTHISTDOC_INSERT');
    //     ELSE
    //     NEXT_ITEM; 
    //   END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_estdocVbjope_keyNextItem() {
        console.log("Entering CRFCOEST_crtestdoc1_estdocVbjope_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTESTDOC1.ESTDOC_VBOPER == null ? "Y" : this.CRTESTDOC1.ESTDOC_VBOPER != "X") {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
            this.CRTESTDOC1.ESTDOC_VBJOPE = null;
            this.oracleFormsBuiltins.next_item();
        }
        else {
            if (this.CRTESTDOC1.ESTDOC_VBJOPE == "NK") {
                this.oracleFormsBuiltins.go_block("CRTHISTDOC_INSERT");
            }
            else {
                this.oracleFormsBuiltins.next_item();
            }
        }
        console.log("Exiting CRFCOEST_crtestdoc1_estdocVbjope_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER; 
    // BEGIN
    // IF :ESTDOC_CODDOC IS NOT NULL THEN
    // 
    //  BEGIN
    //   SELECT  DOCSOL_DESCRI,DOCSOL_TIPODC 
    //     INTO  :DESDOC,:ESTDOC_TIPODC    
    //     FROM  CRTDOCSOL 
    //    WHERE DOCSOL_CODIGO=:ESTDOC_CODDOC
    //      AND DOCSOL_CODTOP = :ESTDOC_CODOPER; --ENRIQUE RAMIREZ 2008/08/08
    // 
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE',' TIPO DE DOCUMENTO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // :ESTDOC_VBOPER:='X';
    // END IF;
    // END;
    //      
    //#endregion
    async CRFCOEST_crtestdoc1_estdocCoddoc_whenValidateItem() {
        console.log("Entering CRFCOEST_crtestdoc1_estdocCoddoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTESTDOC1.ESTDOC_CODDOC != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ESTDOC_CODDOC", this.CRTESTDOC1.ESTDOC_CODDOC);
            payload1.set("ESTDOC_CODOPER", this.CRTESTDOC1.ESTDOC_CODOPER);
            // call REST API
            const result1 = await Rest.post("/crfcoest_crtestdoc1/crfcoest_crtestdoc1_estdoccoddoc_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTESTDOC1.DESDOC = result1[0].get("DESDOC");
            this.CRTESTDOC1.ESTDOC_TIPODC = result1[0].get("ESTDOC_TIPODC");
            if (result1 == null || result1.length == 0) {

                // CRFCOEST_LIB$ALERTA("MENSAJE", " TIPO DE DOCUMENTO INEXISTENTE .....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            this.CRTESTDOC1.ESTDOC_VBOPER = "X";
        }
        console.log("Exiting CRFCOEST_crtestdoc1_estdocCoddoc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //   IF :ESTDOC_ESTDOC NOT IN ('PE','OK','NA') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //     BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     IF TIPO_PERSONA='OD' THEN
    //        IF :ESTDOC_VBOPER IS NULL THEN
    //           LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //           :ESTDOC_ESTDOC:=NULL;
    //         ELSE
    //           :ESTDOC_USUARI:=USER;
    //           
    //         END IF;
    //      END IF; 
    //   END IF;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_estdocEstdoc_whenValidateItem() {
        console.log("Entering CRFCOEST_crtestdoc1_estdocEstdoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        if (["PE", "OK", "NA"].indexOf(this.CRTESTDOC1.ESTDOC_ESTDOC) != -1) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/crfcoest_crtestdoc1/crfcoest_crtestdoc1_estdocestdoc_whenvalidateitem_query1", payload1);
            // get values from result
            TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
            if (result1 == null || result1.length == 0) {

            }

            if (TIPO_PERSONA == "OD") {
                if ((this.CRTESTDOC1.ESTDOC_VBOPER == null)) {
                    // CRFCOEST_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
                    this.CRTESTDOC1.ESTDOC_ESTDOC = null;
                }
                else {
                    this.CRTESTDOC1.ESTDOC_USUARI = PLSQLBuiltins.user();
                }
            }
        }
        console.log("Exiting CRFCOEST_crtestdoc1_estdocEstdoc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF :ESTDOC_VBOPER IS NULL THEN
    //       LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //       :ESTDOC_ESTDOC:=NULL;
    //   ELSE
    //  IF :ESTDOC_ESTDOC='PE' THEN
    //     GO_BLOCK('CRTHISTDOC_INSERT');
    //  ELSE
    //     NEXT_ITEM; 
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_estdocEstdoc_keyNextItem() {
        console.log("Entering CRFCOEST_crtestdoc1_estdocEstdoc_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTESTDOC1.ESTDOC_VBOPER == null)) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
            this.CRTESTDOC1.ESTDOC_ESTDOC = null;
        }
        else {
            if (this.CRTESTDOC1.ESTDOC_ESTDOC == "PE") {
                this.oracleFormsBuiltins.go_block("CRTHISTDOC_INSERT");
            }
            else {
                this.oracleFormsBuiltins.next_item();
            }
        }
        console.log("Exiting CRFCOEST_crtestdoc1_estdocEstdoc_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :ESTDOC_VBOPER NOT IN ('X') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA USE X .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFCOEST_crtestdoc1_estdocVboper_whenValidateItem() {
        console.log("Entering CRFCOEST_crtestdoc1_estdocVboper_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["X"].indexOf(this.CRTESTDOC1.ESTDOC_VBOPER) != -1) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA USE X .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCOEST_crtestdoc1_estdocVboper_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOEST_toolbar_whenButtonPressed() {
        console.log("Entering CRFCOEST_toolbar_whenButtonPressed");
        console.log("Exiting CRFCOEST_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOEST_toolbar_whenMouseLeave() {
        console.log("Entering CRFCOEST_toolbar_whenMouseLeave");
        console.log("Exiting CRFCOEST_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOEST_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCOEST_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCOEST_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :DESUSUARIO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:CRTHISTDOC_CONSULTA.HISTDO_USUARI
    //     AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //   ;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //   NULL;
    // END;  
    //#endregion
    async CRFCOEST_crthistdocConsulta_postQuery() {
        console.log("Entering CRFCOEST_crthistdocConsulta_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC_CONSULTA.HISTDO_USUARI);
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfcoest_crthistdoc_consulta/crfcoest_crthistdocconsulta_postquery_query1", payload1);
        // get values from result
        this.CRTHISTDOC_CONSULTA.DESUSUARIO = result1[0].get("DESUSUARIO");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFCOEST_crthistdocConsulta_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //  IF :HISTDO_ESTSEG='OK' THEN
    //     SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,"ATTR_OFF");
    //  ELSIF :HISTDO_ESTSEG='PE' THEN
    //     SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_USUARI',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_USUARI', "INSERT_ALLOWED",ATTR_ON);
    //  END IF;
    // END;
    //#endregion
    async CRFCOEST_crthistdocConsulta_histdoEstseg_postTextItem() {
        console.log("Entering CRFCOEST_crthistdocConsulta_histdoEstseg_postTextItem");
        if (this.CRTHISTDOC_CONSULTA.HISTDO_ESTSEG == "OK") {
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_OFF");
        }
        else if (this.CRTHISTDOC_CONSULTA.HISTDO_ESTSEG == "PE") {
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "INSERT_ALLOWED", "ATTR_ON");
        }
        console.log("Exiting CRFCOEST_crthistdocConsulta_histdoEstseg_postTextItem");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    //  IF :HISTDO_ESTSEG ='OK' THEN
    //    EXECUTE_QUERY;
    //  ELSE 
    //   NEXT_ITEM;
    //  END IF; END;
    //#endregion
    async CRFCOEST_crthistdocConsulta_histdoEstseg_keyNextItem() {
        console.log("Entering CRFCOEST_crthistdocConsulta_histdoEstseg_keyNextItem");
        if (this.CRTHISTDOC_CONSULTA.HISTDO_ESTSEG == "OK") {
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFCOEST_crthistdocConsulta_histdoEstseg_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :DESUSUARIO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:CRTHISTDOC_CONSULTA.HISTDO_USUARI
    //   AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //   ;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //   NULL;
    // END;  
    //#endregion
    async CRFCOEST_crthistdocConsulta_histdoUsuari_whenValidateItem() {
        console.log("Entering CRFCOEST_crthistdocConsulta_histdoUsuari_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC_CONSULTA.HISTDO_USUARI);
        payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
        // call REST API
        const result1 = await Rest.post("/crfcoest_crthistdoc_consulta/crfcoest_crthistdocconsulta_histdousuari_whenvalidateitem_query1", payload1);
        // get values from result
        this.CRTHISTDOC_CONSULTA.DESUSUARIO = result1[0].get("DESUSUARIO");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFCOEST_crthistdocConsulta_histdoUsuari_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :HISTDO_ESTSEG='OK' THEN
    //    SET_ITEM_PROPERTY('HISTDO_USUARI',UPDATEABLE,"ATTR_OFF");
    //       SET_ITEM_PROPERTY('HISTDO_USUARI', "INSERT_ALLOWED","ATTR_OFF");
    //  ELSIF :HISTDO_ESTSEG='PE' THEN
    //     SET_ITEM_PROPERTY('HISTDO_USUARI',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_USUARI', "INSERT_ALLOWED",ATTR_ON);
    //  END IF;
    // END;
    //#endregion
    async CRFCOEST_crthistdocConsulta_histdoUsuari_preTextItem() {
        console.log("Entering CRFCOEST_crthistdocConsulta_histdoUsuari_preTextItem");
        if (this.CRTHISTDOC_CONSULTA.HISTDO_ESTSEG == "OK") {
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "UPDATEABLE", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "INSERT_ALLOWED", "ATTR_OFF");
        }
        else if (this.CRTHISTDOC_CONSULTA.HISTDO_ESTSEG == "PE") {
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "INSERT_ALLOWED", "ATTR_ON");
        }
        console.log("Exiting CRFCOEST_crthistdocConsulta_histdoUsuari_preTextItem");
    }

    //#region PLSQL
    // BEGIN IF TO_CHAR(:HISTDO_FECSEG,'HH:MI') = '12:00' THEN
    //  :HISTDO_FECSEG:=TO_DATE((TO_CHAR(:HISTDO_FECSEG,'YYYYMMDD')||'08:00'),'YYYY-MM-DD HH:MI');
    // END IF; END;
    //#endregion
    async CRFCOEST_crthistdocConsulta_histdoFecseg_postTextItem() {
        console.log("Entering CRFCOEST_crthistdocConsulta_histdoFecseg_postTextItem");
        if (this.CRTHISTDOC_CONSULTA.HISTDO_FECSEG.toString() == "12:00") {
            this.CRTHISTDOC_CONSULTA.HISTDO_FECSEG = new Date().toString();
        }
        console.log("Exiting CRFCOEST_crthistdocConsulta_histdoFecseg_postTextItem");
    }

    //#region PLSQL
    // BEGIN MESSAGE('TOLO');
    // MESSAGE('TOLO');
    // GO_ITEM('HISTDO_CTACTO'); END;
    //#endregion
    async CRFCOEST_crthistdocConsulta_histdoCoddoc_keyEnter() {
        console.log("Entering CRFCOEST_crthistdocConsulta_histdoCoddoc_keyEnter");
        this.oracleFormsBuiltins.message("TOLO");
        this.oracleFormsBuiltins.message("TOLO");
        this.oracleFormsBuiltins.go_item("HISTDO_CTACTO");
        console.log("Exiting CRFCOEST_crthistdocConsulta_histdoCoddoc_keyEnter");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('LISTA_DOCUMENTOS') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_ITEM('V_PLANEACION');
    //  END IF;
    // END; 
    //#endregion
    async CRFCOEST_crthistdocConsulta_listaDoc_whenButtonPressed() {
        console.log("Entering CRFCOEST_crthistdocConsulta_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFCOEST_LIB$ALERTA("MENSAJE", "NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("V_PLANEACION");
        }
        console.log("Exiting CRFCOEST_crthistdocConsulta_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOEST_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCOEST_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCOEST_base_fecha_whenNewItemInstance");
    }

}

