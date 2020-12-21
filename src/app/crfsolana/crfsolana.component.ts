import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSOLANA business logic
import {
    CRTGAADSO,
    CRTRESTR,
    CRTOTERSOL,
    VARIABLE,
    CRTSOLICR,
    CRTTEREXT,
    TOOLBAR,
    PPAL,
    CRTOTERSOL1,
    BASE
} from "./CRFSOLANA_models";



// class CRFSOLANA
@Component({
    selector: 'app-crfsolana',
    templateUrl: './crfsolana.component.html',
})
export class CrfsolanaComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['PENCCOM', 'N'],
        ['PCOMITE', null],
        ['P_UNIDAD', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTGAADSO: CRTGAADSO = new CRTGAADSO();
    public CRTRESTR: CRTRESTR = new CRTRESTR();
    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CRTTEREXT: CRTTEREXT = new CRTTEREXT();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public PPAL: PPAL = new PPAL();
    public CRTOTERSOL1: CRTOTERSOL1 = new CRTOTERSOL1();
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
    async CRFSOLANA_onClearDetails() {
        console.log("Entering CRFSOLANA_onClearDetails");
        // CRFSOLANA_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFSOLANA_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRFSOLANA_whenMouseDoubleclick() {
        console.log("Entering CRFSOLANA_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRFSOLANA_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    // 
    //  CLEAR_FORM;
    // 
    //   IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // 
    // 
    // 
    // -- MESSAGE('LA VARIABLE RADIO_ESTADO SE ENCUENTRA EN: '||:VARIABLE.RADIO_ESTADO||' RANTERIOR: '||:GLOBAL.RADIO_ANTERIOR);
    // END;
    //#endregion
    async CRFSOLANA_keyClrfrm() {
        console.log("Entering CRFSOLANA_keyClrfrm");
        this.oracleFormsBuiltins.clear_form();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     // CRFSOLANA_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFSOLANA_keyClrfrm");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFSOLANA_preForm() {
        console.log("Entering CRFSOLANA_preForm");
        // CRFSOLANA_PANTALLA();
        // CRFSOLANA_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFSOLANA_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFSOLANA_whenNewFormInstance() {
        console.log("Entering CRFSOLANA_whenNewFormInstance");
        // CRFSOLANA_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFSOLANA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   --+PY21520. JDG.
    //   --PUP_MENSAJE_FIRMAS;
    //   NULL;
    //   
    // END;
    //#endregion
    async CRFSOLANA_crtgaadso_preUpdate() {
        console.log("Entering CRFSOLANA_crtgaadso_preUpdate");
        console.log("Exiting CRFSOLANA_crtgaadso_preUpdate");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   V_TIPBIEB_DESBIEN       CRTTIPBIEN.TIPBIEN_DESBIEN%TYPE;
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //    
    //     BEGIN
    //    
    //      SELECT TIPBIEN_DESBIEN
    //        INTO :CRTGAADSO.DESCRI_TIPPRE
    //        FROM CRTTIPBIEN
    //       WHERE TIPBIEN_CODUNI  = :CRTGAADSO.GAADSO_CODUNI
    //         AND TIPBIEN_CODBIEN = :CRTGAADSO.GAADSO_TIPPRE;
    //         
    //     EXCEPTION
    //      
    //      WHEN OTHERS THEN
    //      
    //        :CRTGAADSO.DESCRI_TIPPRE := NULL;
    //      
    //     END; 
    //      
    //   
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTGAADSO.POST-QUERY. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtgaadso_postQuery() {
        console.log("Entering CRFSOLANA_crtgaadso_postQuery");
        let V_TIPBIEB_DESBIEN: null = null;
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("GAADSO_CODUNI", this.CRTGAADSO.GAADSO_CODUNI);
                payload1.set("GAADSO_TIPPRE", this.CRTGAADSO.GAADSO_TIPPRE);
                // call REST API
                const result1 = await Rest.post("/crfsolana_crtgaadso/crfsolana_crtgaadso_postquery_query1", payload1);
                // get values from result
                this.CRTGAADSO.DESCRI_TIPPRE = result1[0].get("CRTGAADSO.DESCRI_TIPPRE");
            } catch (ex) {

                this.CRTGAADSO.DESCRI_TIPPRE = null;
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTGAADSO.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtgaadso_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //   
    //     GO_ITEM( 'VARIABLE.BTN_REGFRMXG' );
    //     
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtgaadso_gaadsoVrcial_keyNextItem() {
        console.log("Entering CRFSOLANA_crtgaadso_gaadsoVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_REGFRMXG");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 // V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtgaadso_gaadsoVrcial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLANA_crtrestr_whenNewBlockInstance() {
        console.log("Entering CRFSOLANA_crtrestr_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLANA_crtrestr_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN /*
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTRESTR.RESTR_COLOFI <>'001' THEN
    //   LIB$ALERTA('MENSAJE','EL CÓDIGO PARA LA OFICINA DEL CONTRATO NO ES VÁLIDO .......',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    // */
    // NULL; END;
    //#endregion
    async CRFSOLANA_crtrestr_restrColofi_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtrestr_restrColofi_whenValidateItem");
        console.log("Exiting CRFSOLANA_crtrestr_restrColofi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_EXISTE    NUMBER;
    //  V_ESTADO    VARCHAR2(2);
    // BEGIN
    //   BEGIN
    //     SELECT COUNT(9) 
    //      INTO V_EXISTE
    //     FROM COL
    //     WHERE COLOFI=:CRTRESTR.RESTR_OFISOL
    //      AND COLTDOC=:CRTRESTR.RESTR_COLTDOC
    //      AND COLCOD=:CRTRESTR.RESTR_COLCOD;
    //   EXCEPTION   
    //    WHEN NO_DATA_FOUND THEN
    //         V_EXISTE:=0;
    //     END;
    //   IF V_EXISTE = 0  THEN
    //   LIB$ALERTA('MENSAJE','EL CONTRATO A REESTRUCTURAR NO EXISTE EN LA COLOCACIÓN. FAVOR VERIFIQUE .......',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   
    //   BEGIN
    //     SELECT COLESTC
    //      INTO V_ESTADO
    //     FROM COL
    //     WHERE COLOFI=:CRTRESTR.RESTR_OFISOL
    //      AND COLTDOC=:CRTRESTR.RESTR_COLTDOC
    //      AND COLCOD=:CRTRESTR.RESTR_COLCOD;
    //   EXCEPTION   
    //    WHEN NO_DATA_FOUND THEN
    //         V_ESTADO:=NULL;
    //    END;
    //    
    //   IF V_ESTADO <> 'VI' THEN
    //     LIB$ALERTA('MENSAJE','EL CONTRATO ESTA EN ESTADO DIFERENTE A VIGENTE, NO ES POSIBLE REESTRUCTURARARLO. FAVOR VERIFIQUE .......',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;  
    // END;
    //#endregion
    async CRFSOLANA_crtrestr_restrColcod_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtrestr_restrColcod_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        let V_ESTADO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload1.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload1.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtrestr/crfsolana_crtrestr_restrcolcod_whenvalidateitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE == 0) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL CONTRATO A REESTRUCTURAR NO EXISTE EN LA COLOCACIÓN. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload2.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload2.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        // call REST API
        const result2 = await Rest.post("/crfsolana_crtrestr/crfsolana_crtrestr_restrcolcod_whenvalidateitem_query2", payload2);
        // get values from result
        V_ESTADO = result2[0].get("V_ESTADO");
        if (result2 == null || result2.length == 0) {

            V_ESTADO = null;
        }

        if (V_ESTADO != "VI") {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL CONTRATO ESTA EN ESTADO DIFERENTE A VIGENTE, NO ES POSIBLE REESTRUCTURARARLO. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtrestr_restrColcod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTRESTR.RESTR_COLTDOC <>'03' THEN
    //   LIB$ALERTA('MENSAJE','EL CÓDIGO PARA EL TIPO DEL CONTRATO NO ES VÁLIDO .......',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtrestr_restrColtdoc_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtrestr_restrColtdoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTRESTR.RESTR_COLTDOC != "03") {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL CÓDIGO PARA EL TIPO DEL CONTRATO NO ES VÁLIDO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtrestr_restrColtdoc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CODREC IS NULL THEN
    //  LIB$ALERTA('MENSAJE','NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtotersol_keyDelrec() {
        console.log("Entering CRFSOLANA_crtotersol_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLANA_crtotersol_keyDelrec");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 22 DE SEPTIEMBRE DE 2005
    //   --
    // IF :CRTSOLICR.SOLICR_ESTSOL = 'AP' THEN
    //  SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtotersol_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtotersol_whenNewItemInstance");
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AP") {
            // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "UPDATE_ALLOWED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtotersol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFSOLANA_crtotersol_keyCommit() {
        console.log("Entering CRFSOLANA_crtotersol_keyCommit");
        console.log("Exiting CRFSOLANA_crtotersol_keyCommit");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLANA_crtotersol_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtotersol_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLANA_crtotersol_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLANA_crtotersol_volverTer_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtotersol_volverTer_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLANA_crtotersol_volverTer_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLANA_crtotersol_volverTer_whenMouseClick() {
        console.log("Entering CRFSOLANA_crtotersol_volverTer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLANA_crtotersol_volverTer_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.UNIDAD1:= :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    // :VARIABLE.OFC1  := :CRTSOLICR.SOLICR_OFCSOL; END;
    //#endregion
    async CRFSOLANA_variable_whenNewBlockInstance() {
        console.log("Entering CRFSOLANA_variable_whenNewBlockInstance");
        this.VARIABLE.UNIDAD1 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        console.log("Exiting CRFSOLANA_variable_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    PL_ID              PARAMLIST;
    //    PL_NOMBRE          VARCHAR2(15) := 'PL_SOLICITUD';
    // 
    // BEGIN
    // 
    //    IF :CRTSOLICR.SOLICR_OFCSOL IS NULL OR
    //       :CRTSOLICR.SOLICR_CODSOL IS NULL OR 
    //       :CRTSOLICR.SOLICR_CODUNI IS NULL THEN  --ARQUITECTURA
    //       MESSAGE('EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;  
    // 
    //    FRM$SOL_PARAM_RECON (PL_NOMBRE, :CRTSOLICR.SOLICR_CODUNI, :CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_CODREC);
    // 
    //    PL_ID  := GET_PARAMETER_LIST(PL_NOMBRE);
    // 
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
//     //       RUN_PRODUCT (REPORTS, 'CRRSOPRE', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
//     //        RUN_PRODUCT (REPORTS, 'CRRSOPRE', SYNCHRONOUS, RUNTIME, FILESYSTEM, TO_CHAR(NULL), NULL);
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_variable_impRecon_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_impRecon_whenMouseClick");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if ((((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null)) || (this.CRTSOLICR.SOLICR_CODUNI == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLANA_FRM$SOL_PARAM_RECON(PL_NOMBRE, this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODREC);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
//             this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOPRE", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
        }
        else {
            this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
//             this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOPRE", SYNCHRONOUS, RUNTIME, FILESYSTEM, null.toString(), null);
        }
        console.log("Exiting CRFSOLANA_variable_impRecon_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDORES';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '09'; END;
    //#endregion
    async CRFSOLANA_variable_provnal_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_provnal_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "09";
        console.log("Exiting CRFSOLANA_variable_provnal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDORES';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '09'; END;
    //#endregion
    async CRFSOLANA_variable_provnal_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_provnal_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "09";
        console.log("Exiting CRFSOLANA_variable_provnal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // HIDE_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLANA_variable_provext_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_provext_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLANA_variable_provext_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // HIDE_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLANA_variable_provext_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_provext_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLANA_variable_provext_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AZ';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'RJ', 'AP') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_OBSECR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO AZ', NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_OBSECR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    //  PUP_CAMPOS_REQUERIDOS;
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APLAZAR LA SOLICITUD') = 1 THEN
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //   :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    // 
    //   :GLOBAL.ACTUALIZAR := 'SI';
    // 
    //   COMMIT_FORM;
    // 
    //   GO_BLOCK('CRTSOLICR');
    //   EXECUTE_QUERY;
    //   IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //      GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //   END IF;
    // 
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APLAZADA',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // 
    // EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //          -- RAISE FORM_TRIGGER_FAILURE;
    //     WHEN OTHERS THEN
    //  NULL;
    //  
    // END;
    //#endregion
    async CRFSOLANA_variable_btnAplazar_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_btnAplazar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AZ';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "RJ", "AP"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_OBSECR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO AZ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSECR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // CRFSOLANA_PUP_CAMPOS_REQUERIDOS();
//             if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APLAZAR LA SOLICITUD") == 1) {
//                 this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
//                 this.CRTSOLICR.SOLICR_VRFINCR = null;
// //                 this.GLOBAL.ACTUALIZAR = "SI";
//                 this.oracleFormsBuiltins.commit_form();
//                 this.oracleFormsBuiltins.go_block("CRTSOLICR");
//                 this.oracleFormsBuiltins.execute_query();
//                 if (this.VARIABLE.REGNRO_SOLICR > 0) {
//                     this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
//                 }
//             }
//             else {
//                 // CRFSOLANA_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APLAZADA", null, null, null, T_RESPUESTA);
//             }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLANA_variable_btnAplazar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 9 DE SEPTIEMBRE DE 2005
    //   --
    // HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "DELETE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIOS';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '13'; END;
    //#endregion
    async CRFSOLANA_variable_locararios_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_locararios_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "DELETE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIOS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "13";
        console.log("Exiting CRFSOLANA_variable_locararios_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 9 DE SEPTIEMBRE DE 2005
    //   --
    // HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "DELETE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIOS';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '13'; END;
    //#endregion
    async CRFSOLANA_variable_locararios_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_locararios_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "DELETE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIOS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "13";
        console.log("Exiting CRFSOLANA_variable_locararios_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //   BEGIN
    //    
    //     COMMIT_FORM;
    //    
    //     BEGIN
    //    
    //     SELECT DECODE( GAADSO_CODUNI, NULL, 'N', 'S' ), 
    //             SUBSTR( GAADSO_TIPACT, 1, 60 ),
    //             GAADSO_VRCIAL
    //        INTO :CRTSOLICR.SOLICR_PRENDA,
    //             :CRTSOLICR.SOLICR_TIPACT,
    //             :CRTSOLICR.SOLICR_VRCIAL     
    //        FROM CRTGAADSO
    //       WHERE GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //         AND GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND GAADSO_CONSEC = ( SELECT MIN( GAADSO_CONSEC )
    //                                 FROM CRTGAADSO
    //                                WHERE GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                                  AND GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //                                  AND GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL );
    //                                      
    //     EXCEPTION 
    //    
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.SOLICR_PRENDA := NULL;
    //        :CRTSOLICR.SOLICR_TIPACT := NULL;
    //        :CRTSOLICR.SOLICR_VRCIAL := NULL;
    // 
    //     END;
    //     
    //     COMMIT_FORM;
    //     
    //     SELECT COUNT(*)
    //       INTO :CRTSOLICR.DESCRI_TOTPRE
    //       FROM CRTGAADSO
    //      WHERE GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        AND GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //        
    //    HIDE_WINDOW( 'WINDOWG' );
    //     
    //     GO_ITEM( 'CRTSOLICR.SOLICR_HIPTCA' );  
    //    
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_variable_btnRegfrmxg_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_btnRegfrmxg_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.commit_form();
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result1 = await Rest.post("/crfsolana_variable/crfsolana_variable_btnregfrmxg_whenbuttonpressed_query1", payload1);
                // get values from result
                this.CRTSOLICR.SOLICR_PRENDA = result1[0].get("CRTSOLICR.SOLICR_PRENDA");
                this.CRTSOLICR.SOLICR_TIPACT = result1[0].get("CRTSOLICR.SOLICR_TIPACT");
                this.CRTSOLICR.SOLICR_VRCIAL = result1[0].get("CRTSOLICR.SOLICR_VRCIAL");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_PRENDA = null;
                this.CRTSOLICR.SOLICR_TIPACT = null;
                this.CRTSOLICR.SOLICR_VRCIAL = null;
            }

            this.oracleFormsBuiltins.commit_form();
            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfsolana_variable/crfsolana_variable_btnregfrmxg_whenbuttonpressed_query2", payload2);
            // get values from result
            this.CRTSOLICR.DESCRI_TOTPRE = result2[0].get("CRTSOLICR.DESCRI_TOTPRE");
            this.oracleFormsBuiltins.hide_window("WINDOWG");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_HIPTCA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_variable_btnRegfrmxg_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 9 DE SEPTIEMBRE DE 2005
    //   --
    // HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE"); -- ACTJUN
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05'; END;
    //#endregion
    async CRFSOLANA_variable_locppal_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_locppal_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        console.log("Exiting CRFSOLANA_variable_locppal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 9 DE SEPTIEMBRE DE 2005
    //   --
    // HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE"); -- ACTJUN
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05'; END;
    //#endregion
    async CRFSOLANA_variable_locppal_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_locppal_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        console.log("Exiting CRFSOLANA_variable_locppal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLANA_variable_volverTerext_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_volverTerext_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLANA_variable_volverTerext_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'AVALISTAS';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '14'; END;
    //#endregion
    async CRFSOLANA_variable_aval_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_aval_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFSOLANA_variable_aval_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'AVALISTAS';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '14'; END;
    //#endregion
    async CRFSOLANA_variable_aval_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_aval_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFSOLANA_variable_aval_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('RECONSIDERA');
    // GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFSOLANA_variable_volver_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_volver_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("RECONSIDERA");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFSOLANA_variable_volver_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AN';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AP', 'RJ', 'NG', 'AZ') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_OBSECR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO ANULADA',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_OBSECR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // PUP_CAMPOS_REQUERIDOS;
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD') = 1 THEN
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //   :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //   COMMIT_FORM;
    // 
    //   GO_BLOCK('CRTSOLICR');
    //   EXECUTE_QUERY;
    //   IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //      GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //   END IF;
    // 
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO ANULADA',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // 
    // 
    // EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     WHEN OTHERS THEN
    //  NULL;
    //  
    // END;
    //#endregion
    async CRFSOLANA_variable_btnAnular_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_btnAnular_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AN';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "AP", "RJ", "NG", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_OBSECR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO ANULADA", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSECR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // CRFSOLANA_PUP_CAMPOS_REQUERIDOS();
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD") == 1) {
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR.SOLICR_VRFINCR = null;
            //     this.oracleFormsBuiltins.commit_form();
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO ANULADA", null, null, null, T_RESPUESTA);
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLANA_variable_btnAnular_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    // 
    //     GO_ITEM( 'CRTGAADSO.GAADSO_CONSEC' );
    //     CLEAR_BLOCK( NO_VALIDATE );
    //     EXECUTE_QUERY;
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_variable_btnMasprendas_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_btnMasprendas_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTGAADSO.GAADSO_CONSEC");
            this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_variable_btnMasprendas_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AP';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AZ', 'RJ') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    // 
    // IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0
    //     THEN
    //        LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //        RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // PUP_CAMPOS_REQUERIDOS;
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    // 
    //   :GLOBAL.ACTUALIZAR := 'SI';
    // 
    //   COMMIT_FORM;
    // 
    //   GO_BLOCK('CRTSOLICR');
    //   EXECUTE_QUERY;
    //   IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //      GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //   END IF;
    // 
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // 
    // EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //          RAISE FORM_TRIGGER_FAILURE;
    //     WHEN OTHERS THEN
    //  NULL;
    //  
    // END;
    //#endregion
    async CRFSOLANA_variable_btnAprobar_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_btnAprobar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AP';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "AZ", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // CRFSOLANA_PUP_CAMPOS_REQUERIDOS();
//             if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
//                 this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
// //                 this.GLOBAL.ACTUALIZAR = "SI";
//                 this.oracleFormsBuiltins.commit_form();
//                 this.oracleFormsBuiltins.go_block("CRTSOLICR");
//                 this.oracleFormsBuiltins.execute_query();
//                 if (this.VARIABLE.REGNRO_SOLICR > 0) {
//                     this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
//                 }
//             }
//             else {
//                 // CRFSOLANA_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
//             }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLANA_variable_btnAprobar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE,
    //                   :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPVIN, 'T'); END;
    //#endregion
    async CRFSOLANA_variable_crter_whenButtonPressed() {
        console.log("Entering CRFSOLANA_variable_crter_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        // CRFSOLANA_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE, CRTOTERSOL1.OTERSOL_TIPPER, CRTOTERSOL1.OTERSOL_TIPVIN, "T");
        console.log("Exiting CRFSOLANA_variable_crter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE,
    //                   :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPVIN, 'T'); END;
    //#endregion
    async CRFSOLANA_variable_crter_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_crter_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        // CRFSOLANA_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE, CRTOTERSOL1.OTERSOL_TIPPER, CRTOTERSOL1.OTERSOL_TIPVIN, "T");
        console.log("Exiting CRFSOLANA_variable_crter_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'RJ';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // PUP_CAMPOS_REQUERIDOS;
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA RECOMENDAR PARA JUNTA LA SOLICITUD') = 1 THEN
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //   :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //   :GLOBAL.ACTUALIZAR := 'SI';
    // 
    //   COMMIT_FORM;
    // 
    //   GO_BLOCK('CRTSOLICR');
    //   EXECUTE_QUERY;
    //   IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //      GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //   END IF;
    // 
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO RECOMENDADA PARA JUNTA',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // 
    // EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     WHEN OTHERS THEN
    //          NULL;
    //  
    // END;
    //#endregion
    async CRFSOLANA_variable_btnRecom_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_btnRecom_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'RJ';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // CRFSOLANA_PUP_CAMPOS_REQUERIDOS();
//             if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA RECOMENDAR PARA JUNTA LA SOLICITUD") == 1) {
//                 this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
//                 this.CRTSOLICR.SOLICR_VRFINCR = null;
// //                 this.GLOBAL.ACTUALIZAR = "SI";
//                 this.oracleFormsBuiltins.commit_form();
//                 this.oracleFormsBuiltins.go_block("CRTSOLICR");
//                 this.oracleFormsBuiltins.execute_query();
//                 if (this.VARIABLE.REGNRO_SOLICR > 0) {
//                     this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
//                 }
//             }
//             else {
//                 // CRFSOLANA_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO RECOMENDADA PARA JUNTA", null, null, null, T_RESPUESTA);
//             }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLANA_variable_btnRecom_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'NG';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AZ', 'RJ') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_OBSECR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO NG', NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_OBSECR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // PUP_CAMPOS_REQUERIDOS;
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA NEGAR LA SOLICITUD') = 1 THEN
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //   :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //   :GLOBAL.ACTUALIZAR := 'SI';
    // 
    //   COMMIT_FORM;
    // 
    // 
    //   GO_BLOCK('CRTSOLICR');
    //   EXECUTE_QUERY;
    //   IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //      GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //   END IF;
    // 
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO NEGADA',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // 
    // EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     WHEN OTHERS THEN
    //  NULL;
    //  
    // END;
    //#endregion
    async CRFSOLANA_variable_btnNegar_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_btnNegar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'NG';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "AZ", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_OBSECR == null)) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO NG", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSECR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // CRFSOLANA_PUP_CAMPOS_REQUERIDOS();
//             if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA NEGAR LA SOLICITUD") == 1) {
//                 this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
//                 this.CRTSOLICR.SOLICR_VRFINCR = null;
// //                 this.GLOBAL.ACTUALIZAR = "SI";
//                 this.oracleFormsBuiltins.commit_form();
//                 this.oracleFormsBuiltins.go_block("CRTSOLICR");
//                 this.oracleFormsBuiltins.execute_query();
//                 if (this.VARIABLE.REGNRO_SOLICR > 0) {
//                     this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
//                 }
//             }
//             else {
//                 // CRFSOLANA_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO NEGADA", null, null, null, T_RESPUESTA);
//             }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLANA_variable_btnNegar_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    PL_ID              PARAMLIST;
    //    PL_NOMBRE          VARCHAR2(15) := 'PL_SOLICITUD';
    // 
    // BEGIN
    // 
    //    IF :CRTSOLICR.SOLICR_OFCSOL IS NULL OR
    //       :CRTSOLICR.SOLICR_CODSOL IS NULL OR
    //       :CRTSOLICR.SOLICR_CODUNI IS NULL THEN  --ARQUITECTURA
    //       MESSAGE('EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;  
    // 
    //    FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :CRTSOLICR.SOLICR_CODUNI, :CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL);
    // 
    //    PL_ID  := GET_PARAMETER_LIST(PL_NOMBRE);
    // 
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
//     //       RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
//     //        RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, TO_CHAR(NULL), NULL);
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_variable_btnPrintSolic_whenMouseClick() {
        console.log("Entering CRFSOLANA_variable_btnPrintSolic_whenMouseClick");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if ((((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null)) || (this.CRTSOLICR.SOLICR_CODUNI == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLANA_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
//             this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOPCR", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
        }
        else {
            this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
//             this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOPCR", SYNCHRONOUS, RUNTIME, FILESYSTEM, null.toString(), null);
        }
        console.log("Exiting CRFSOLANA_variable_btnPrintSolic_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    // IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR THEN
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                             SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //               :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO); 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_postTextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_postTextItem");
//         this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFSOLANA_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_postTextItem");
    }

    async CRFSOLANA_crtsolicr_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 22 DE SEPTIEMBRE DE 2005
    //   --
    // IF :CRTSOLICR.SOLICR_ESTSOL = 'AP' THEN
    //  SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtsolicr_whenNewItemInstance");
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AP") {
            // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "UPDATE_ALLOWED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    CLEAR_BLOCK;
    // 
    //    IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //       FRM$AUDIT_SOLIC_DEL;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_keyClrblk() {
        console.log("Entering CRFSOLANA_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     // CRFSOLANA_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_keyClrblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :this.PARAMETER.get("PENCCOM") = 'S' THEN
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE'
    //            ,:CRTSOLICR.SOLICR_CODUNI);  --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14           
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  SET    SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI  --ARQUITECTURA
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //  END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    // END;
    // 
    // DECLARE
    // 
    //   T_RESPUESTA NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ESTSOL <>'EC'  AND :GLOBAL.ACTUALIZAR = 'NO' THEN
    //     LIB$ALERTA('MENSAJE','CAMBIOS NO PERMITIDOS EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;  
    // END IF; 
    // --  NULL;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_preUpdate() {
        console.log("Entering CRFSOLANA_crtsolicr_preUpdate");
        try {

            if (this.PARAMETER.get("PENCCOM") == "S") {
                // CRFSOLANA_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, this.CRTSOLICR.SOLICR_VRFINA, this.CRTSOLICR.SOLICR_ORMONET, this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE", this.CRTSOLICR.SOLICR_CODUNI);
                // this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
                // this.PARAMETER.get("PENCCOM") = "N";
            }
        } catch (ex) {

            // CRFSOLANA_LIB$DTNERFRMA(SQLERRM);
        }

        let T_RESPUESTA: number = null;
        // if ((this.CRTSOLICR.SOLICR_ESTSOL != "EC" && GLOBAL.ACTUALIZAR == "NO")) {
        //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "CAMBIOS NO PERMITIDOS EN ESTADO " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_preUpdate");
    }

    //#region PLSQL
    // BEGIN --8199
    // IF :CRTSOLICR.SOLICR_LINEA = 'LI' AND (:CRTSOLICR.SOLICR_GTONAC= 'N' OR :CRTSOLICR.SOLICR_GTONAC IS NULL) THEN
    //   :CRTSOLICR.SOLICR_GTONAC := 'S';
    // END IF; 
    // --8199
    // 
    // --+PY21520. JDG
    // DECLARE
    //  
    //   T_RESPUESTA NUMBER;
    //   
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_PLAZMI > NVL( :CRTSOLICR.SOLICR_PLAZO, 0 ) THEN 
    //       
    //    LIB$ALERTA( 'MENSAJE','EL PLAZO MÍNIMO DE LA SOLICITUD NO PUEDE SER MAYOR QUE EL PLAZO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );   
    //   RAISE FORM_TRIGGER_FAILURE;
    //         
    //  END IF;
    //      
    //  IF NVL( :CRTSOLICR.SOLICR_PLAZO, 0 ) > :CRTSOLICR.SOLICR_PLAZMA THEN 
    //       
    //   LIB$ALERTA( 'MENSAJE','EL PLAZO MÁXIMO DE LA SOLICITUD NO PUEDE SER MENOR QUE EL PLAZO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );   
    //    RAISE FORM_TRIGGER_FAILURE;
    //         
    //  END IF;   
    //   
    // END;
    // 
    // PBD_VALIGRACIA;--PY 12192
    // COMMIT; END;
    //#endregion
    async CRFSOLANA_crtsolicr_keyCommit() {
        console.log("Entering CRFSOLANA_crtsolicr_keyCommit");
        if ((this.CRTSOLICR.SOLICR_LINEA == "LI" && (this.CRTSOLICR.SOLICR_GTONAC == "N" || (this.CRTSOLICR.SOLICR_GTONAC == null)))) {
            this.CRTSOLICR.SOLICR_GTONAC = "S";
        }
        {

            let T_RESPUESTA: number = null;
            if (this.CRTSOLICR.SOLICR_PLAZMI > this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PLAZO MÍNIMO DE LA SOLICITUD NO PUEDE SER MAYOR QUE EL PLAZO.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO > this.CRTSOLICR.SOLICR_PLAZMA) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PLAZO MÁXIMO DE LA SOLICITUD NO PUEDE SER MENOR QUE EL PLAZO.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }

        // CRFSOLANA_PBD_VALIGRACIA();
        console.log("Exiting CRFSOLANA_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    // CURSOR C1 IS
    // SELECT CSTVOS_CONINI,
    //        CSTVOS_CONFIN,
    //        CSTVOS_CONACT  
    //   FROM CRTCSTVOS
    //  WHERE CSTVOS_OFICIN = :SOLICR_OFCSOL
    //    AND CSTVOS_CODUNI = :CRTSOLICR.SOLICR_CODUNI -- ARQUITECTURA
    // FOR UPDATE OF CSTVOS_CONACT  
    // ;
    // T_RESPUESTA NUMBER;
    // RESTA VARCHAR2(8);
    // BEGIN
    //   IF (NVL(PLSQLBuiltins.string_length(:SOLICR_CODSOL), 0)=0) THEN
    //   FOR ACT IN C1 LOOP
    //      IF NOT(ACT.CSTVOS_CONACT  BETWEEN ACT.CSTVOS_CONINI AND ACT.CSTVOS_CONFIN) THEN
    //         LIB$ALERTA('MENSAJE','CONSECUTIVO FUERA DEL RANGO CONSULTAR A SUPER USUARIO',NULL,NULL,NULL,T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE; 
    //      END IF;
    //      :SOLICR_CODSOL:=LPAD(TO_CHAR(TO_NUMBER(ACT.CSTVOS_CONACT)),9,'0');
    //       UPDATE CRTCSTVOS
    //       SET  CSTVOS_CONACT=LPAD(TO_CHAR(TO_NUMBER(ACT.CSTVOS_CONACT )+1),9,'0')
    //       WHERE  CURRENT OF C1;
    //    END LOOP;
    //   END IF;
    //  :SOLICR_ESTSOL := 'GR';
    //  :SOLICR_USCRED := PLSQLBuiltins.user();
    //  :SOLICR_FECREG := SYSDATE;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_preInsert() {
        console.log("Entering CRFSOLANA_crtsolicr_preInsert");
        let T_RESPUESTA: number = null;
        let RESTA: string = null;
        // if (PLSQLBuiltins.string_length(SOLICR_CODSOL) == null ? 0 : PLSQLBuiltins.string_length(SOLICR_CODSOL) == 0) {
        // }
        this.CRTSOLICR.SOLICR_ESTSOL = "GR";
        this.CRTSOLICR.SOLICR_USCRED = PLSQLBuiltins.user();
        this.CRTSOLICR.SOLICR_FECREG = PLSQLBuiltins.sysdate();
        console.log("Exiting CRFSOLANA_crtsolicr_preInsert");
    }

    //#region PLSQL
    // BEGIN
    // IF :SYSTEM.LAST_RECORD='FALSE' THEN
    // DOWN;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_keyDown() {
        console.log("Entering CRFSOLANA_crtsolicr_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFSOLANA_crtsolicr_keyDown");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   :GLOBAL.VALOR_ANTERIOR   := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULL');
    //   :VARIABLE.REGNRO_SOLICR  := TO_NUMBER(SYSTEM.CURSOR_RECORD);
    //   :GLOBAL.ESTADO_ANTERIOR  := :CRTSOLICR.SOLICR_ESTSOL;
    //   SET_ITEM_PROPERTY('VARIABLE.IMP_RECON',ENABLED,"ATTR_OFF");
    //   SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,"ATTR_OFF");
    //  
    // END;
    //  BEGIN
    //   IF :CRTSOLICR.SOLICR_CODREC IS NOT NULL THEN
    //         SET_ITEM_PROPERTY('VARIABLE.IMP_RECON',ENABLED,ATTR_ON);
    //         SET_ITEM_PROPERTY('VARIABLE.BTN_PRINT_SOLIC',ENABLED,ATTR_ON); -- CAMBIO SOLICITADO POR CREDITO SMT
    //   END IF;
    //   
    //   IF    :CRTSOLICR.SOLICR_CODPRO ='RES' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,ATTR_ON);
    //         SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,ATTR_ON); -- CAMBIO SOLICITADO POR CREDITO SMT
    //   END IF;
    //   
    //   
    //  END;
    // 
    // --+PY21520. JDG.
    //    DECLARE 
    //    
    //    T_RESPUESTA          NUMBER; 
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //    
    //    BEGIN
    //  
    //    PUP_CONTROL_BOTONES_X_UNIDAD;    
    //      
    //   EXCEPTION 
    //     
    //    WHEN OTHERS THEN
    //  
    //        IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFSOLANA.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. '
//     //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //        END IF;
    //  
    //   END;
    //#endregion
    async CRFSOLANA_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFSOLANA_crtsolicr_whenNewRecordInstance");
//         this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULL" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.VARIABLE.REGNRO_SOLICR = PLSQLBuiltins.to_number(SYSTEM.CURSOR_RECORD);
//         this.GLOBAL.ESTADO_ANTERIOR = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.set_item_property("VARIABLE.IMP_RECON", "ENABLED", "ATTR_OFF");
        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_OFF");
        if ((this.CRTSOLICR.SOLICR_CODREC != null)) {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.IMP_RECON", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_PRINT_SOLIC", "ENABLED", "ATTR_ON");
        }
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_ON");
        }
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLANA_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   ENTER_QUERY;
    // 
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_keyEntqry() {
        console.log("Entering CRFSOLANA_crtsolicr_keyEntqry");
        console.log("Exiting CRFSOLANA_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   RG_NAME       VARCHAR2(40)  := 'RG_AUDIT';
    //   RG_ID         RECORDGROUP; 
    //   RG_INDICE     NUMBER(3);
    //   T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // 
    // 
    //   RG_ID := FIND_GROUP( RG_NAME );
    // 
    //   -- LAS SIGUIENTE INSTRUCCIÓN UTILIZA LA FUNCIÓN PARA BUSCAR SI EL CAMPO DE TERCERO (BENEFICIARIO), 
    //   -- FUE CAMBIADO. SI EL CAMPO ES ENCONTRADO, SE EJECUTA LA FUNCIÓN PARA ACTUALIZAR
    //   -- EL TERCERO FRM$SOL_UPD_TERCERO.
    // 
    //   IF FRM$AUDIT_BUSCAR_CAMPO(:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 'SOLICR_NITTER')
    //   THEN 
    //      NULL;
    //   END IF;
    //  
    //   IF NOT ID_NULL(RG_ID) THEN 
    //      RG_INDICE := GET_GROUP_ROW_COUNT( RG_ID ); 
    // 
    //      IF RG_INDICE > 0 THEN
    //         FRM$AUDIT_SOLIC_INSERT;
    //      END IF;
    //   END IF; 
    // 
    //   :GLOBAL.ACTUALIZAR := 'NO';
    // 
    // END;
    // 
    // --+PY26491. JDG. 2018.06.14. SE MUEVE A :CRTSOLICR.PRE-UPDATE
    // --+-- CUOP
    // --+BEGIN
    // --+ IF :this.PARAMETER.get("PENCCOM") = 'S' THEN
    // --+    PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    // --+           ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    // --+           ,'CRTSOLICR.COMITE'
    // --+           ,:CRTSOLICR.SOLICR_CODUNI);  --ARQUITECTURA
    // --+    --+PY26491. JDG. 2018.06.14           
    // --+   --+BEGIN
    // --+    --+  UPDATE CRTSOLICR
    // --+    --+  SET    SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    // --+    --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    // --+    --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    // --+    --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI  --ARQUITECTURA
    // --+    --+  ;
    // --+   --+END;
    // --+   :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    // --+   --+
    // --+   :this.PARAMETER.get("PENCCOM") := 'N';
    // --+ END IF;
    // --+  EXCEPTION
    // --+    WHEN OTHERS THEN
    // --+      LIB$DTNERFRMA(SQLERRM);
    // --+END;
    //#endregion
    async CRFSOLANA_crtsolicr_postUpdate() {
        console.log("Entering CRFSOLANA_crtsolicr_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: null = null;
        let RG_INDICE: number = null;
        let T_RESPUESTA: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        // if (FRM$AUDIT_BUSCAR_CAMPO(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_NITTER")) {
        // }
        if ((!this.oracleFormsBuiltins.id_null(RG_ID))) {
            RG_INDICE = this.oracleFormsBuiltins.get_group_row_count(RG_ID);
            if (RG_INDICE > 0) {
                // CRFSOLANA_FRM$AUDIT_SOLIC_INSERT();
            }
        }
//         this.GLOBAL.ACTUALIZAR = "NO";
        console.log("Exiting CRFSOLANA_crtsolicr_postUpdate");
    }

    //#region PLSQL
    // BEGIN
    //   PU_LEASBACK;
    //   PU_INSERTAR_ESTOBS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 'GR',
    //                      'SOLICITUD GRABADA '||'( '||TO_CHAR(SYSDATE, 'HH:MI:SS')||' )' , :CRTSOLICR.SOLICR_CODUNI);
    //   
    // END;
    // -- CUOP
    // BEGIN
    //  --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //    ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+ 
    //    :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE'
    //            ,:CRTSOLICR.SOLICR_CODUNI); --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14            
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  SET    SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI; -- ARQUITECTURA
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //   END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_postInsert() {
        console.log("Entering CRFSOLANA_crtsolicr_postInsert");
        // CRFSOLANA_PU_LEASBACK();
        // CRFSOLANA_PU_INSERTAR_ESTOBS(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "GR", "SOLICITUD GRABADA " + "( " + SYSDATE.toString() + " )", this.CRTSOLICR.SOLICR_CODUNI);
        try {

            // if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            //     // CRFSOLANA_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, this.CRTSOLICR.SOLICR_VRFINA, this.CRTSOLICR.SOLICR_ORMONET, this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE", this.CRTSOLICR.SOLICR_CODUNI);
            //     // this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
            //     this.PARAMETER.get("PENCCOM") = "N";
            // }
        } catch (ex) {

            // CRFSOLANA_LIB$DTNERFRMA(SQLERRM);
        }

        console.log("Exiting CRFSOLANA_crtsolicr_postInsert");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTOTERSOL_CUR IS      
    //     SELECT 1 FROM CRTOTERSOL C     
    //     WHERE C.OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTGAADSO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTGAADSO_CUR IS      
    //     SELECT 1 FROM CRTGAADSO O     
    //     WHERE O.GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI AND O.GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND O.GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTGAADSO DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTOTERSOL_CUR;     
    //   FETCH CRTOTERSOL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTOTERSOL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTOTERSOL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTOTERSOL_CUR;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTGAADSO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTGAADSO_CUR;     
    //   FETCH CRTGAADSO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTGAADSO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTGAADSO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTGAADSO_CUR;
    //   --
    //   -- END CRTGAADSO DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFSOLANA_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFSOLANA_crtsolicr_onCheckDeleteMaster");
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
        console.log("Exiting CRFSOLANA_crtsolicr_onCheckDeleteMaster");
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
    //   -- BEGIN CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.TERXSOLI');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTOTERSOL');   
    //   END IF;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTGAADSO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) OR (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTGAADSO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTGAADSO');   
    //   END IF;
    //   --
    //   -- END CRTGAADSO DETAIL PROGRAM SECTION
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
    async CRFSOLANA_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFSOLANA_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.TERXSOLI");
            // CRFSOLANA_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL");
        }
        if ((((this.CRTSOLICR.SOLICR_CODUNI != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null)) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTGAADSO");
            // CRFSOLANA_QUERY_MASTER_DETAILS(REL_ID, "CRTGAADSO");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFSOLANA_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFSOLANA_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       NULL;
    // END;
    // 
    // 
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIA
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //    AND SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI;  --ARQUITECTURA
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;      
    //       
    //       
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //        :CRTSOLICR.ACTIVO:= 'NUEVO';
    //     ELSE
    //        :CRTSOLICR.ACTIVO:= 'USADO';
    //     END IF;
    // END;
    // 
    // BEGIN
    // 
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //  INTO   :CRTSOLICR.NONCIASEG    
    //  FROM   TER
    //  WHERE  TERCOD=:CRTSOLICR.SOLICR_CIASEG;
    //  EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    // END;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      :CRDITO:='CONTRATO LEASING';
    //   ELSIF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //         :CRDITO:='PAGARE';
    //   END IF;
    // END;
    // 
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_USCRED IS NOT NULL THEN
    //    :CRTSOLICR.ANALISTA := FRM$NOMBRE_USUARIO (:CRTSOLICR.SOLICR_USCRED,:CRTSOLICR.SOLICR_CODUNI);
    // END IF;
    // /*BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED", PROPERTY_ON);
    //       SHOW_VIEW('CANVAS11');
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //   ELSE 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,PROPERTY_ON); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED",PROPERTY_ON);
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED","PROPERTY_OFF");
    //   END IF;
    // END;*/
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //    BEGIN
    //      SELECT TIPBIEN_DESBIEN
    //        INTO :CRTSOLICR.BIEN
    //        FROM CRTTIPBIEN
    //       WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE
    //         AND TIPBIEN_CODUNI  = :CRTSOLICR.SOLICR_CODUNI;  --ARQUITECTURA
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //       NULL;
    //     END;  
    //   END IF;
    // END;
    // 
    // BEGIN
    //     SELECT TIPBIEN_DESBIEN        
    //       INTO :CRTSOLICR.BIEN_GTIA 
    //       FROM CRTTIPBIEN
    //      WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPRENDA
    //        AND TIPBIEN_CODUNI  = :CRTSOLICR.SOLICR_CODUNI;  --ARQUITECTURA;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       NULL;
    // END; 
    // 
    // END;
    // 
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESCBCDX
    //     FROM CRTLINRED
    //    WHERE LINRED_CODIGO = :SOLICR_TBCOLDX;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    // 
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESLIMPTO
    //     FROM CRTLINRED
    //    WHERE LINRED_CODIGO = :SOLICR_LMULTIP;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    // --
    //  --
    //  BEGIN
    //    SELECT USU_NOMBRE
    //      INTO :NOM_OFICIAL
    //      FROM SGUSUARIOS
    //     WHERE USU_CODIGO=:CRTSOLICR.SOLICR_USOFID
    //       AND USU_CODUNI=:CRTSOLICR.SOLICR_CODUNI;  --ARQUITECTURA
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //   END;  
    //   
    //   
    //   BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESLINFINA
    //     FROM CRTLINRED
    //     WHERE LINRED_TIPO='FN'
    //       AND LINRED_CODIGO = :SOLICR_FINAGLN;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // 
    // 
    // 
    // --            
    // --
    // DECLARE -- CUOP
    //  VTIC CRTTIPCOM%ROWTYPE;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_COMITE IS NOT NULL THEN
    //  PQBD_COL_ANAGEN.PTIPCOM(:CRTSOLICR.SOLICR_COMITE, VTIC);
    //  :CRTSOLICR.COMITE := INITCAP(VTIC.TIPCOM_DESCRI);
    //  END IF;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    //   WHEN TOO_MANY_ROWS THEN
    //     NULL;
    //  END;
    // 
    // 
    // --+PY21520. JDG. REVISADO
    //   DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    //  BEGIN
    //  
    //    BEGIN 
    //    
    //     SELECT UVPSDV_DESCRI
    //       INTO :CRTSOLICR.DESCRI_COSEAC
    //       FROM COTUVPSDV
    //      WHERE UVPSDV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        AND UVPSDV_CODIGO = :CRTSOLICR.SOLICR_COSEAC;
    //        
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.DESCRI_COSEAC := NULL;
    //     
    //    END;
    //       
    //    IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN 
    //     
    //       IF NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) = '1' THEN 
    //     
    //         BEGIN
    //        
    //        SELECT UVPCUT_DESCRI,
    //               UVPCUT_VALMER,
    //               UVPCUT_VALDAV
    //          INTO :CRTSOLICR.UVPCUT_DESCRI,
    //               :CRTSOLICR.UVPCUT_VALMER,
    //               :CRTSOLICR.UVPCUT_VALDAV
    //          FROM COTUVPCUT
    //         WHERE UVPCUT_CODIGO = :CRTSOLICR.SOLICR_COCUTA;      
    //         
    //         EXCEPTION 
    //          
    //          WHEN OTHERS THEN
    //          
    //            :CRTSOLICR.UVPCUT_DESCRI := NULL;
    //          :CRTSOLICR.UVPCUT_VALMER := NULL;
    //          :CRTSOLICR.UVPCUT_VALDAV := NULL;
    //          
    //         END;   
    //        
    //      END IF;
    //    
    //     BEGIN
    //    
    //      SELECT UVPTSV_DESCRI
    //       INTO :CRTSOLICR.DESCRI_TISEVE
    //       FROM COTUVPTSV
    //      WHERE UVPTSV_CODIGO = :CRTSOLICR.SOLICR_TISEVE;
    //         
    //    EXCEPTION 
    //       
    //      WHEN OTHERS THEN
    //       
    //        :CRTSOLICR.DESCRI_TISEVE := NULL;
    //         
    //    END;
    //    
    //    BEGIN
    //    
    //       SELECT UVPEGA_DESCRI
    //        INTO :CRTSOLICR.SOLICR_ESTRATDESC
    //        FROM COTUVPEGA
    //       WHERE UVPEGA_CODIGO = :CRTSOLICR.SOLICR_ESTRAT
    //         AND UVPEGA_ESTEST = 'A';
    //     
    //      EXCEPTION 
    //     
    //       WHEN OTHERS THEN
    //     
    //         :CRTSOLICR.SOLICR_ESTRATDESC := NULL;
    //      
    //      END;
    //      
    //    BEGIN
    //    
    //      SELECT UVPPSC_DESCRI
    //       INTO :CRTSOLICR.DESCRI_PRSOCL
    //       FROM COTUVPPSC
    //      WHERE UVPPSC_CODIGO = :CRTSOLICR.SOLICR_PRSOCL;
    //         
    //     EXCEPTION 
    //       
    //      WHEN OTHERS THEN
    //       
    //        :CRTSOLICR.DESCRI_PRSOCL := NULL;
    //         
    //    END;
    //     
    //     END IF;  
    //       
    //     PUP_CONTROL_BOTONES_X_UNIDAD;
    //     
    //  EXCEPTION 
    //    
    //    WHEN OTHERS THEN
    //  
    //          IF ( ERROR_CODE  <> 0 ) THEN
    //            
    //         V_MENSAJE := 'FALLO. '
    //                      || 'CRFSOLANA.CRTSOLICR.POST-QUERY. '
//     //                      || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                      || 'SQLERRM ' || SQLERRM;
    //                      
    //            PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                      
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //          
    //       END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_postQuery() {
        console.log("Entering CRFSOLANA_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query1", payload1);
        // get values from result
        // CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        try {

            // construct payload
            let payload2 = new Map();
            // payload2.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
            // payload2.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result2 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query2", payload2);
            // get values from result
            // W_SUBCATEGORIA = result2[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.CRTSOLICR.W_SUBCATEGORIA = null;
        }

        if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        // construct payload
        let payload3 = new Map();
        payload3.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
        // call REST API
        const result3 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query3", payload3);
        // get values from result
        // CRTSOLICR.NONCIASEG = result3[0].get("CRTSOLICR.NONCIASEG");
        if (result3 == null || result3.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.CRDITO = "CONTRATO LEASING";
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.CRDITO = "PAGARE";
        }
        if ((this.CRTSOLICR.SOLICR_USCRED != null)) {
            // this.CRTSOLICR.ANALISTA = FRM$NOMBRE_USUARIO(this.CRTSOLICR.SOLICR_USCRED, this.CRTSOLICR.SOLICR_CODUNI);
        }
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // construct payload
            let payload4 = new Map();
            payload4.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
            payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result4 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query4", payload4);
            // get values from result
            // CRTSOLICR.BIEN = result4[0].get("CRTSOLICR.BIEN");
            if (result4 == null || result4.length == 0) {

            }

        }
        // construct payload
        let payload5 = new Map();
        payload5.set("SOLICR_TIPRENDA", this.CRTSOLICR.SOLICR_TIPRENDA);
        payload5.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result5 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query5", payload5);
        // get values from result
        // CRTSOLICR.BIEN_GTIA = result5[0].get("CRTSOLICR.BIEN_GTIA");
        if (result5 == null || result5.length == 0) {

        }

        // construct payload
        let payload6 = new Map();
        // payload6.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        // call REST API
        const result6 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query6", payload6);
        // get values from result
        // DESCBCDX = result6[0].get("DESCBCDX");
        if (result6 == null || result6.length == 0) {

        }

        // construct payload
        let payload7 = new Map();
        // payload7.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
        // call REST API
        const result7 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query7", payload7);
        // get values from result
        // DESLIMPTO = result7[0].get("DESLIMPTO");
        if (result7 == null || result7.length == 0) {

        }

        // construct payload
        let payload8 = new Map();
        payload8.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        payload8.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result8 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query8", payload8);
        // get values from result
        // NOM_OFICIAL = result8[0].get("NOM_OFICIAL");
        if (result8 == null || result8.length == 0) {

        }

        // construct payload
        let payload9 = new Map();
        // payload9.set("SOLICR_FINAGLN", SOLICR_FINAGLN);
        // call REST API
        const result9 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query9", payload9);
        // get values from result
        // DESLINFINA = result9[0].get("DESLINFINA");
        if (result9 == null || result9.length == 0) {

        }

        let VTIC: null = null;
        if ((this.CRTSOLICR.SOLICR_COMITE != null)) {
            // CRFSOLANA_PQBD_COL_ANAGEN.PTIPCOM(this.CRTSOLICR.SOLICR_COMITE, VTIC);
            // this.CRTSOLICR.COMITE = INITCAP(VTIC.TIPCOM_DESCRI);
        }
        if (result9 == null || result9.length == 0) {

        }

        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result10 = new Map();
            try {

                // construct payload
                let payload10 = new Map();
                payload10.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload10.set("SOLICR_COSEAC", this.CRTSOLICR.SOLICR_COSEAC);
                // call REST API
                // result10 = Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query10", payload10);
                // get values from result
                // CRTSOLICR.DESCRI_COSEAC = result10[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.DESCRI_COSEAC = null;
            }

            if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
                if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                    let result11 = new Map();
                    try {

                        // construct payload
                        let payload11 = new Map();
                        payload11.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                        // call REST API
                        // result11 = Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query11", payload11);
                        // // get values from result
                        // CRTSOLICR.UVPCUT_DESCRI = result11[0].get("CRTSOLICR.UVPCUT_DESCRI");
                        // CRTSOLICR.UVPCUT_VALMER = result11[0].get("CRTSOLICR.UVPCUT_VALMER");
                        // CRTSOLICR.UVPCUT_VALDAV = result11[0].get("CRTSOLICR.UVPCUT_VALDAV");
                    } catch (ex) {

                        this.CRTSOLICR.UVPCUT_DESCRI = null;
                        this.CRTSOLICR.UVPCUT_VALMER = null;
                        this.CRTSOLICR.UVPCUT_VALDAV = null;
                    }

                }
                let result12 = new Map();
                try {

                    // construct payload
                    let payload12 = new Map();
                    payload12.set("SOLICR_TISEVE", this.CRTSOLICR.SOLICR_TISEVE);
                    // call REST API
                    // result12 = Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query12", payload12);
                    // get values from result
                    // CRTSOLICR.DESCRI_TISEVE = result12[0].get("CRTSOLICR.DESCRI_TISEVE");
                } catch (ex) {

                    this.CRTSOLICR.DESCRI_TISEVE = null;
                }

                let result13 = new Map();
                try {

                    // construct payload
                    let payload13 = new Map();
                    payload13.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                    // call REST API
                    // result13 = Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query13", payload13);
                    // get values from result
                    // CRTSOLICR.SOLICR_ESTRATDESC = result13[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
                } catch (ex) {

                    this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                }

                let result14 = new Map();
                try {

                    // construct payload
                    let payload14 = new Map();
                    payload14.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                    // call REST API
                    // result14 = Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_postquery_query14", payload14);
                    // get values from result
                    // CRTSOLICR.DESCRI_PRSOCL = result14[0].get("CRTSOLICR.DESCRI_PRSOCL");
                } catch (ex) {

                    this.CRTSOLICR.DESCRI_PRSOCL = null;
                }

            }
            // CRFSOLANA_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR IS NOT NULL THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_TRUE");  --CAHH    
    //  SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //   IF :CRTSOLICR.SOLICR_FINAGR <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //        FRM$GARANTIAS_EQUIS ('FIN');   
    //   END IF;
    // ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_FALSE");  --CAHH    
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFinagr_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFinagr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINAGR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            if (this.CRTSOLICR.SOLICR_FINAGR != "X") {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("FIN");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFinagr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW ('PER_GRACIA'); END;
    //#endregion
    async CRFSOLANA_crtsolicr_txtTotplazo_postTextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_txtTotplazo_postTextItem");
        this.oracleFormsBuiltins.hide_view("PER_GRACIA");
        console.log("Exiting CRFSOLANA_crtsolicr_txtTotplazo_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'CRTSOLICR.SOLICR_PLAZMI' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_txtTotplazo_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_txtTotplazo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMI");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_txtTotplazo_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    BEGIN
    //  
    //     SELECT UVPSDV_DESCRI
    //      INTO :CRTSOLICR.DESCRI_COSEAC
    //      FROM COTUVPSDV
    //     WHERE UVPSDV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //       AND UVPSDV_CODIGO = :CRTSOLICR.SOLICR_COSEAC;
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.SOLICR_COSEAC := NULL;
    //       :CRTSOLICR.DESCRI_COSEAC := NULL;
    //        LIB$ALERTA( 'MENSAJE', 'CÓDIGO DE SUBPRODUCTO INVÁLIDO.', NULL, NULL, NULL, T_RESPUESTA );
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END;
    // 
    //    IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //      AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    
    //     IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //      
    //       SET_ITEM_PROPERTY( 'CRTSOLICR.BTN_CUPOTAXI',   "ENABLED", "PROPERTY_FALSE" ); 
    //       
    //     ELSE
    //       
    //      --CARTERA Y SUBPRODUCTO TAXI
    //     IF NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) = '1' THEN 
    //      
    //      SET_ITEM_PROPERTY( 'CRTSOLICR.BTN_CUPOTAXI',   "ENABLED", "PROPERTY_TRUE" ); 
    //       
    //       SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA', "ENABLED", "PROPERTY_TRUE" );   
    //        SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA', "UPDATEABLE","PROPERTY_TRUE" );
    //        SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA',  "INSERT_ALLOWED","PROPERTY_TRUE" );
    //        SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA', "NAVIGABLE","PROPERTY_TRUE" );
    //        
    //       ELSE
    //         
    //         SET_ITEM_PROPERTY( 'CRTSOLICR.BTN_CUPOTAXI',   "ENABLED", "PROPERTY_FALSE" ); 
    //          
    //         SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA', "ENABLED", "PROPERTY_FALSE" );     
    //         
    //         END IF;
    //      
    //     END IF;  
    //     
    //    END IF; 
    //       
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCoseac_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCoseac_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_COSEAC", this.CRTSOLICR.SOLICR_COSEAC);
                // call REST API
                const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrcoseac_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.DESCRI_COSEAC = result1[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COSEAC = null;
                this.CRTSOLICR.DESCRI_COSEAC = null;
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "CÓDIGO DE SUBPRODUCTO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                    this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_CUPOTAXI", "ENABLED", "PROPERTY_FALSE");
                }
                else {
                    if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_CUPOTAXI", "ENABLED", "PROPERTY_TRUE");
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_COCUTA", "ENABLED", "PROPERTY_TRUE");
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_COCUTA", "UPDATEABLE", "PROPERTY_TRUE");
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_COCUTA", "INSERT_ALLOWED", "PROPERTY_TRUE");
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_COCUTA", "NAVIGABLE", "PROPERTY_TRUE");
                    }
                    else {
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_CUPOTAXI", "ENABLED", "PROPERTY_FALSE");
                        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_COCUTA", "ENABLED", "PROPERTY_FALSE");
                    }
                }
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrCoseac_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //      AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    
    //     IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_RIMPES' );
    //       
    //     ELSE
    //       
    //      --CARTERA Y SUBPRODUCTO TAXI
    //     IF NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) = '1' THEN 
    //      
    //      GO_ITEM(  'CRTSOLICR.BTN_CUPOTAXI' );
    //       
    //       ELSE
    //         
    //         GO_ITEM( 'CRTSOLICR.SOLICR_TISEVE' );
    //          
    //       END IF;
    //      
    //     END IF;  
    //     
    //    END IF;
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCoseac_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCoseac_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_RIMPES");
                }
                else {
                    if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.BTN_CUPOTAXI");
                    }
                    else {
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
                    }
                }
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrCoseac_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_MODALI IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT MODCOD
    //      INTO DESC1
    //      FROM MOD$
    //     WHERE MODCOD =:SOLICR_MODALI;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO DE MODALIDAD INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrModali_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrModali_whenValidateItem");
        // if ((SOLICR_MODALI != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODALI", SOLICR_MODALI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrmodali_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrModali_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_MODINT',ENTERABLE,"PROPERTY_OFF");
    //    END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrModali_postTextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrModali_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_MODINT", "ENTERABLE", "PROPERTY_OFF");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrModali_postTextItem");
    }

    //#region PLSQL
    // BEGIN PBD_VALIGRACIA;--PY 12192
    //     
    //     NEXT_ITEM; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrModali_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrModali_keyNextItem");
        // CRFSOLANA_PBD_VALIGRACIA();
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLANA_crtsolicr_solicrModali_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR = 'X' THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_PUNTS$:=:CRTSOLICR.SOLICR_FINAGP;
    //     
    //   
    // ELSE
    //     IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINAGRO',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR  := 'X';
    //        :CRTSOLICR.SOLICR_PUNTS$:=:CRTSOLICR.SOLICR_FINAGP;
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //        FRM$GARANTIAS_EQUIS ('FIN');
    //      END IF;
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_TRUE");
    //  
    // END IF;
    // 
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFinagp_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFinagp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINAGR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_PUNTS$ = this.CRTSOLICR.SOLICR_FINAGP;
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP > 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINAGRO", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
                this.CRTSOLICR.SOLICR_PUNTS$ = this.CRTSOLICR.SOLICR_FINAGP;
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("FIN");
            }
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFinagp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA  NUMBER;
    // BEGIN
    // /* IF :CRTSOLICR.SOLICR_FINAGR IS NULL AND :CRTSOLICR.SOLICR_FINAGP IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','DEBE SELECCIONAR EL TIPO DE REDESCUENTO',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //  ELS*/IF :CRTSOLICR.SOLICR_FINAGR IS NOT NULL AND :CRTSOLICR.SOLICR_FINAGP IS NULL THEN
    //    LIB$ALERTA('MENSAJE','DEBE INGRESAR VALOR DE SPRED PARA EL REDESCUENTO',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //    NEXT_ITEM;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFinagp_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFinagp_keyNextItem");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_FINAGR != null) && (this.CRTSOLICR.SOLICR_FINAGP == null))) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE INGRESAR VALOR DE SPRED PARA EL REDESCUENTO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFinagp_keyNextItem");
    }

    async CRFSOLANA_crtsolicr_solicrVpaval_keyPrevItem() {
        // null;
    }

    async CRFSOLANA_crtsolicr_solicrVpaval_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    BEGIN
    //  
    //     SELECT UVPPSC_DESCRI
    //      INTO :CRTSOLICR.DESCRI_PRSOCL
    //      FROM COTUVPPSC
    //     WHERE UVPPSC_CODIGO = :CRTSOLICR.SOLICR_PRSOCL;
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.SOLICR_PRSOCL := NULL;
    //       :CRTSOLICR.DESCRI_PRSOCL := NULL;
    //        LIB$ALERTA( 'MENSAJE', 'CÓDIGO DE PROPÓSITO DE CRÉDITO INVÁLIDO.', NULL, NULL, NULL, T_RESPUESTA );
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END;
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFCSOLANA.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPrsocl_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPrsocl_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                // call REST API
                const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrprsocl_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.DESCRI_PRSOCL = result1[0].get("CRTSOLICR.DESCRI_PRSOCL");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_PRSOCL = null;
                this.CRTSOLICR.DESCRI_PRSOCL = null;
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "CÓDIGO DE PROPÓSITO DE CRÉDITO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFCSOLANA.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFCSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrPrsocl_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'CRTSOLICR.SOLICR_FECDEVO' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPrsocl_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPrsocl_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECDEVO");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrPrsocl_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF NVL(:CRTSOLICR.SOLICR_PORIVA, 0) > 100 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPoriva_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPoriva_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PORIVA == null ? 0 : this.CRTSOLICR.SOLICR_PORIVA > 100) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrPoriva_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0); END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrConext_whenValidateItem");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        console.log("Exiting CRFSOLANA_crtsolicr_solicrConext_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_NITRES IS NOT NULL THEN
    //   BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM
    //      INTO   :CRTSOLICR.SOLICR_NOMRES
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITRES);
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS DEL NIT.....',NULL,NULL,NULL,T_RESPUESTA);
    //      PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITRES, NULL,NULL, NULL,'Q');
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //         PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITRES, NULL,NULL, NULL,'T');
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //      END IF;
    //    END;
    //   END IF;  
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrNitres_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrNitres_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITRES != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_NITRES", this.CRTSOLICR.SOLICR_NITRES);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrnitres_whenvalidateitem_query1", payload1);
            // get values from result
            // CRTSOLICR.SOLICR_NOMRES = result1[0].get("CRTSOLICR.SOLICR_NOMRES");
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS DEL NIT.....", null, null, null, T_RESPUESTA);
            // CRFSOLANA_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITRES, null, null, null, "Q");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     // CRFSOLANA_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITRES, null, null, null, "T");
                // }
                // else {
                //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }

        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrNitres_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FECDEVO IS NULL THEN
    //     BEGIN 
    //      SELECT USU_NOMBRE
    //       INTO :ANALISTA
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO =:CRTSOLICR.SOLICR_USCRED
    //      AND   USU_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //      AND   USU_AREA   ='CRE';
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1',NULL,NULL,NULL,T_RESPUESTA);
    //      END;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrUsmlinea_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrUsmlinea_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_USCRED", this.CRTSOLICR.SOLICR_USCRED);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrusmlinea_whenvalidateitem_query1", payload1);
            // get values from result
            // ANALISTA = result1[0].get("ANALISTA");
            if (result1 == null || result1.length == 0) {

                // CRFSOLANA_LIB$ALERTA("MENSAJE", "USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1", null, null, null, T_RESPUESTA);
            }

        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrUsmlinea_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrUsmlinea_keyPrevItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrUsmlinea_keyPrevItem");
        console.log("Exiting CRFSOLANA_crtsolicr_solicrUsmlinea_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrUsmlinea_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrUsmlinea_keyNextItem");
        console.log("Exiting CRFSOLANA_crtsolicr_solicrUsmlinea_keyNextItem");
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
    async CRFSOLANA_crtsolicr_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((SOLICR_LINEADES == "LX" && (SOLICR_FDESEMCLI == null))) {
        //     // CRFSOLANA_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        // }
        // else if (SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate()) {
        //     // CRFSOLANA_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY " + SYSDATE.toString());
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    // 
    //     PUP_CONTROL_BOTONES_X_UNIDAD;
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.SOLICR_TIPACT.WHEN-VALIDATE-ITEM. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTipact_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTipact_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLANA_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_TIPACT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrTipact_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // 
    //   IF :CRTSOLICR.SOLICR_BCODEX  IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_BCODXP',REQUIRED,"PROPERTY_TRUE");
    //      IF :CRTSOLICR.SOLICR_BCODEX  <> 'X' THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //        FRM$GARANTIAS_EQUIS ('BAN');
    //      END IF;
    //   ELSE
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_BCODXP',REQUIRED,"PROPERTY_FALSE");
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrBcodex_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrBcodex_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_BCODEX != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_BCODXP", "REQUIRED", "PROPERTY_TRUE");
            if (this.CRTSOLICR.SOLICR_BCODEX != "X") {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_BCODXP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrBcodex_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrBcodex_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_LINEADES IS NULL THEN 
    //    LIB$DTNERFRMA('ES OBLIGATORIO LA LINEA DE DESEMBOLSO');
    //   ELSIF  :CRTSOLICR.SOLICR_LINEADES = 'LX' THEN --IS NOT NULL
    //     --PRENDE EL CAMPO DE FECHA DE DESEMBOLSO CLIENTE
    //       SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "ENABLED", "PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATE_COLUMN", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATEABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATE_PERMISSION", "PROPERTY_TRUE");
    //     
    //        SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',"DISPLAYED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',NAVIGABLE, "PROPERTY_TRUE");
    //   ELSE 
    //    :SOLICR_FDESEMCLI := NULL;
    //   SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE");
    //    :CRTSOLICR.SOLICR_USMLINEA    := PLSQLBuiltins.user();
    //     :CRTSOLICR.SOLICR_FECMODLINEA  := SYSDATE;   
    //   END IF; 
    //   BEGIN
    //     SELECT TLINDES
    //      INTO :DES_LINDESEMBO
    //     FROM TLIN
    //     WHERE TLINCOD = :CRTSOLICR.SOLICR_LINEADES
    //       AND TORIGEN  = 'SOL';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','LINEA DESEMBOLSO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //  
    //   NEXT_ITEM;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrLineades_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrLineades_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_LINEADES == null)) {
            // CRFSOLANA_LIB$DTNERFRMA("ES OBLIGATORIO LA LINEA DE DESEMBOLSO");
        }
        else if (this.CRTSOLICR.SOLICR_LINEADES == "LX") {
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_COLUMN", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_PERMISSION", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "NAVIGABLE", "PROPERTY_TRUE");
        }
        else {
            this.CRTSOLICR.SOLICR_FDESEMCLI = null;
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_USMLINEA = PLSQLBuiltins.user();
            this.CRTSOLICR.SOLICR_FECMODLINEA = PLSQLBuiltins.sysdate();
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_LINEADES", this.CRTSOLICR.SOLICR_LINEADES);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrlineades_keynextitem_query1", payload1);
        // get values from result
        // DES_LINDESEMBO = result1[0].get("DES_LINDESEMBO");
        if (result1 == null || result1.length == 0) {

            // CRFSOLANA_LIB$ALERTA("MENSAJE", "LINEA DESEMBOLSO INEXISTENTE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLANA_crtsolicr_solicrLineades_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //    
    //    IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //      AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    
    //     IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_RIMPES' );
    //       
    //     ELSE
    //       
    //      --CARTERA Y SUBPRODUCTO TAXI
    //     IF NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) = '1' THEN 
    //      
    //        GO_ITEM( 'CRTSOLICR.SOLICR_COCUTA' );
    //        
    //       ELSE
    //         
    //         GO_ITEM( 'CRTSOLICR.SOLICR_TISEVE' );       
    //          
    //       END IF;
    //      
    //     END IF;  
    //     
    //    END IF;  
    //    
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_btnCupotaxi_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtsolicr_btnCupotaxi_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_RIMPES");
                }
                else {
                    if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_COCUTA");
                    }
                    else {
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
                    }
                }
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_btnCupotaxi_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINDTR = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINDETER',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINDTR := 'X';
    //        FRM$GARANTIAS_EQUIS ('FID');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFindtp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINDTR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP < 1) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP > 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINDETER", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINDTR = "X";
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("FID");
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFindtp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CSEGGT IS NOT NULL THEN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //     INTO  :CRTSOLICR.NOM_CIASEG    
    //     FROM TER
    //     WHERE TERCOD=:CRTSOLICR.SOLICR_CSEGGT;
    //  ELSE
    //     GO_ITEM('SOLICR_OBSGTI');
    //  END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCseggt_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCseggt_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CSEGGT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrcseggt_keynextitem_query1", payload1);
            // get values from result
            // CRTSOLICR.NOM_CIASEG = result1[0].get("CRTSOLICR.NOM_CIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("SOLICR_OBSGTI");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrCseggt_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FINDTR IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     IF :CRTSOLICR.SOLICR_FINDTR  <> 'X' THEN
    //     LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //     FRM$GARANTIAS_EQUIS ('FND');    
    //     END IF;
    //  ELSE
    //  SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_FALSE");  --CAHH     
    //  END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFindtr_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFindtr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINDTR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            if (this.CRTSOLICR.SOLICR_FINDTR != "X") {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFindtr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_IFI = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //    IF NVL(:CRTSOLICR.SOLICR_IFIP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_IFIP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR IFI',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_IFI  := 'X';
    //        FRM$GARANTIAS_EQUIS ('IFI');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrIfip_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrIfip_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_IFI == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP < 1) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP > 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR IFI", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_IFI = "X";
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrIfip_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_IFIP IS NOT NULL THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_LMULTIP',"DISPLAYED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_LMULTIP',ENABLED,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_LMULTIP',UPDATEABLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_LMULTIP', "INSERT_ALLOWED","PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_LMULTIP',NAVIGABLE,"PROPERTY_TRUE");
    //     NEXT_ITEM;
    // ELSE 
    //     GO_ITEM('CRTSOLICR.SOLICR_FINAGR');
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrIfip_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrIfip_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_IFIP != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_LMULTIP", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_LMULTIP", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_LMULTIP", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_LMULTIP", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_LMULTIP", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.next_item();
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FINAGR");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrIfip_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_SEGURO  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrSeguro_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrSeguro_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_SEGURO) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrSeguro_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_ORMONET IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT ORMDES
    //      INTO DESC1
    //      FROM ORM
    //     WHERE ORMCOD=:SOLICR_ORMONET;
    //     
    //         ----CAHH   SIMASOL 20213
    //         IF :SOLICR_ORMONET <> :SOLICR_ORMONUS$ THEN
    //        LIB$ALERTA('MENSAJE','EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //     
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    //  -- CUOP
    //  --+PY26491. JDG. 2018.06.14
    //  --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //  IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //    ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //  --+  
    //    :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    :this.PARAMETER.get("PENCCOM") := 'S';
    //  END IF; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrOrmonet_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrOrmonet_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONET", SOLICR_ORMONET);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrormonet_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (SOLICR_ORMONET != SOLICR_ORMONUS) {
        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        //     if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //         this.PARAMETER.get("PENCCOM") = "S";
        //     }
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrOrmonet_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_PRENDA  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    // 
    //   --+PY21520. JDG.
    //   DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    // 
    //     PUP_CONTROL_BOTONES_X_UNIDAD;
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.SOLICR_PRENDA.WHEN-VALIDATE-ITEM. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPrenda_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPrenda_whenValidateItem");
        // let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_PRENDA) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLANA_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_PRENDA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrPrenda_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrGtiare_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_GTONAC  NOT IN ('N','S') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrGtonac_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrGtonac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "S"].indexOf(this.CRTSOLICR.SOLICR_GTONAC) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrGtonac_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_RESIDU  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrResidu_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrResidu_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_RESIDU) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrResidu_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_FDAMUT  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFdamut_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFdamut_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_FDAMUT) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFdamut_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TLINCOD
    //      INTO DESC1
    //      FROM TLIN
    //     WHERE TLINCOD =:SOLICR_LINEA;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrLinea_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrLinea_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_LINEA", SOLICR_LINEA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrlinea_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrLinea_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FECDEVO IS NULL THEN
    //     BEGIN 
    //      SELECT USU_NOMBRE
    //       INTO :ANALISTA
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO =:SOLICR_USCRED
    //      AND   USU_CODUNI =:SOLICR_CODUNI --ARQUITECTURA
    //      AND   USU_AREA='CRE';
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE','USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO',NULL,NULL,NULL,T_RESPUESTA);
    //     END;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrUscred_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrUscred_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_USCRED", SOLICR_USCRED);
            // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicruscred_whenvalidateitem_query1", payload1);
            // get values from result
            // ANALISTA = result1[0].get("ANALISTA");
            if (result1 == null || result1.length == 0) {

                // CRFSOLANA_LIB$ALERTA("MENSAJE", "USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO", null, null, null, T_RESPUESTA);
            }

        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrUscred_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'CRTSOLICR.SOLICR_PRSOCL' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFCSOLCR.CRTSOLICR.SOLICR_USCRED.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrUscred_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrUscred_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PRSOCL");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFCSOLCR.CRTSOLICR.SOLICR_USCRED.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFCSOLCR", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrUscred_keyNextItem");
    }

    async CRFSOLANA_crtsolicr_solicrNomres_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_VRFINCR > :CRTSOLICR.SOLICR_MONTO THEN
    //      LIB$ALERTA('MENSAJE', 'EL VALOR APROBADO NO DEBE SER SUPERIOR AL MONTO SOLICITADO: '||TO_CHAR(:CRTSOLICR.SOLICR_MONTO), NULL,NULL,NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrVrfincr_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrVrfincr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_VRFINCR > this.CRTSOLICR.SOLICR_MONTO) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL VALOR APROBADO NO DEBE SER SUPERIOR AL MONTO SOLICITADO: " + CRTSOLICR.SOLICR_MONTO.toString(), null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrVrfincr_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrVrfincr_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_VRFINCR  IS NULL THEN
    //    :CRTSOLICR.SOLICR_VRFINCR := :CRTSOLICR.SOLICR_MONTO;
    // END IF;
    //  
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrVrfincr_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrVrfincr_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_VRFINCR == null)) {
            this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO;
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrVrfincr_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA NUMBER;
    // 
    // BEGIN
    // 
    //   IF :CRTSOLICR.SOLICR_IFI IS NOT NULL THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_IFIP',REQUIRED,"PROPERTY_TRUE");  --CAHH     
    //      IF  :CRTSOLICR.SOLICR_IFI  <> 'X' THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //        FRM$GARANTIAS_EQUIS ('IFI');
    //      END IF;
    //  ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_IFIP',REQUIRED,"PROPERTY_FALSE");  --CAHH     
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrIfi_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrIfi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_IFI != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_IFIP", "REQUIRED", "PROPERTY_TRUE");
            if (this.CRTSOLICR.SOLICR_IFI != "X") {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_IFIP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrIfi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_FNG = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FNG',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR := 'X';
    //        -- FRM$GARANTIAS_EQUIS ('FNG');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFngp_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrFngp_keyPrevItem() {
        // null;
    }

    async CRFSOLANA_crtsolicr_solicrFngp_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TIPCRE IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :SOLICR_TIPCRE NOT IN ('03','04') THEN
    //     LIB$ALERTA('MENSAJE','CODIGO INVALIDO ........',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTipcre_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTipcre_whenValidateItem");
        // if ((SOLICR_TIPCRE != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         if (["03", "04"].indexOf(SOLICR_TIPCRE) != -1) {
        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INVALIDO ........", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTipcre_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIEN',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIEN',ENABLED,"PROPERTY_FALSE");    
    // 
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED", "PROPERTY_TRUE");
    //       SHOW_VIEW('CANVAS11');
    //       :CRTSOLICR.BIENPAG:='NO REQUERIDO';
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //   ELSIF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',NAVIGABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',NAVIGABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',NAVIGABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED","PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',UPDATEABLE,"PROPERTY_FALSE");
    //      HIDE_VIEW('CANVAS11');
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_TIPBIE');
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTipcre_postTextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTipcre_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIENPAG", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.show_view("CANVAS11");
            this.CRTSOLICR.BIENPAG = "NO REQUERIDO";
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIENPAG", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIENPAG", "UPDATEABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.hide_view("CANVAS11");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_TIPBIE");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTipcre_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // BEGIN
    // IF :CRTSOLICR.SOLICR_BCODEX = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_BCODEX  := 'X';
    //        GO_ITEM('SOLICR_TBCOLDX');
    //        FRM$GARANTIAS_EQUIS ('BAN');
    //    END IF;
    // END IF;
    //  
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrBcodxp_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrBcodxp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_BCODEX == "X") {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP < 1) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP > 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_BCODEX = "X";
                this.oracleFormsBuiltins.go_item("SOLICR_TBCOLDX");
                // CRFSOLANA_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrBcodxp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_BCODXP IS NOT NULL THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',"DISPLAYED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',UPDATEABLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX', "INSERT_ALLOWED","PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',NAVIGABLE,"PROPERTY_TRUE");
    //     NEXT_ITEM;
    // ELSE 
    //  IF :CRTSOLICR.SOLICR_BCODEX IS NOT NULL THEN
    //   LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.');
    //  ELSE
    //    GO_ITEM('CRTSOLICR.SOLICR_IFI');
    //  END IF;
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrBcodxp_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrBcodxp_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_BCODXP != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.next_item();
        }
        else {
            if ((this.CRTSOLICR.SOLICR_BCODEX != null)) {
                // CRFSOLANA_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_IFI");
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrBcodxp_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'CRTSOLICR.SOLICR_CLASAC' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLCR.CRFSOLANA.SOLICR_ACTIVO.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrActivo_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrActivo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CLASAC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLCR.CRFSOLANA.SOLICR_ACTIVO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrActivo_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   --+PY26922. JDG. 2018.07.10.
    //   --+V_SOLICR_PUNT$DEF              NUMBER( 22,11 );
    //   V_SOLICR_PUNT$              NUMBER( 22,11 );
    //   --+
    //   V_SOLICR_LINEA         CRTSOLICR.SOLICR_LINEA%TYPE;
    //   
    //  BEGIN
    //   
    //   --+PY26922. JDG. 2018.07.10.
    //   --+V_SOLICR_PUNT$DEF := 0;
    //   V_SOLICR_PUNT$ := 0;
    //   --+
    // 
    //     --+PY26922. JDG. 2018.07.10.
    //     --+IF PUP_CONVERSION_TASA_NOMINAL( V_SOLICR_PUNT$DEF ) = 'FALLO' THEN
    //    IF PUP_CONVERSION_TASA_NOMINAL( V_SOLICR_PUNT$ ) = 'FALLO' THEN
    //    --+ 
    //   
    //     :CRTSOLICR.SOLICR_PUNT$N := NULL;
    //     --+PY26922. JDG. 2018.07.10.
    //     --+LIB$DTNERFRMA( 'DEF + SPREAD. SOLICITUD NO TIENE FECHA DE RADICACIÓN, O NO TIENE LÍNEA O NO EXISTE EL INDICADOR DEF EN DICHA FECHA');
    //     SELECT 'NO SE PUDO CONVERTIR TASA NOMINAL VOR A ' ||
    //            DECODE( :CRTSOLICR.SOLICR_LINEA, 'LI', :CRTSOLICR.SOLICR_TDOLAR, :CRTSOLICR.SOLICR_TPESOS ) ||
    //           ' + SPREAD. SOLICITUD NO TIENE FECHA DE RADICACIÓN, O NO TIENE LÍNEA O NO EXISTE EL INDICADOR ' ||
    //           DECODE( :CRTSOLICR.SOLICR_LINEA, 'LI', :CRTSOLICR.SOLICR_TDOLAR, :CRTSOLICR.SOLICR_TPESOS ) ||
    //           ' EN DICHA FECHA' 
    //       INTO V_MENSAJE
    //       FROM DUAL;
    //     LIB$DTNERFRMA( V_MENSAJE );
    //     --+
    //   
    //    END IF;  
    //    
    //    --+PY26922. JDG. 2018.07.10.
    //    /*BEGIN
    //     
    //    SELECT SOLICR_LINEA
    //        INTO V_SOLICR_LINEA
    //        FROM CRTSOLICR
    //       WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //         AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND SOLICR_ESTSOL = 'GR';
    //         
    //    EXCEPTION
    //     
    //     WHEN OTHERS THEN
    //     
    //       V_SOLICR_LINEA := NULL;
    //       
    //    END;*/
    //    --+
    //    
    //    --+PY26922. JDG. 2018.07.10.
    //    --IF NVL( V_SOLICR_LINEA, 'XXXX' ) IN ( 'LI' ) THEN
    //    IF NVL( :CRTSOLICR.SOLICR_LINEA, 'XXXX' ) IN ( 'LI' ) THEN
    //    --+ 
    //       
    //       --+PY26922. JDG. 2018.07.10.
    //       --+:CRTSOLICR.SOLICR_TDOLAR := 'DEF';
    //       --+:CRTSOLICR.SOLICR_PTOUS$ := V_SOLICR_PUNT$DEF;
    //       :CRTSOLICR.SOLICR_TDOLAR := 'DA5';
    //       :CRTSOLICR.SOLICR_PTOUS$ := V_SOLICR_PUNT$;
    //       --+
    //     
    //       :CRTSOLICR.SOLICR_TPESOS := NULL;
    //     :CRTSOLICR.SOLICR_PUNTS$ := NULL;
    //         
    //     ELSE 
    //       
    //       --+PY26922. JDG. 2018.07.10.
    //       --+:CRTSOLICR.SOLICR_TPESOS := 'DEF';
    //       --+:CRTSOLICR.SOLICR_PUNTS$ := V_SOLICR_PUNT$DEF;
    //       :CRTSOLICR.SOLICR_TPESOS := 'DA5';
    //       :CRTSOLICR.SOLICR_PUNTS$ := V_SOLICR_PUNT$;
    //       --+
    //     
    //       :CRTSOLICR.SOLICR_TDOLAR := NULL;
    //     :CRTSOLICR.SOLICR_PTOUS$ := NULL;
    // 
    //    END IF; 
    // 
    //    :CRTSOLICR.SOLICR_FETANO := SYSDATE;
    //    
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPunt$n_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPunt$n_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_SOLICR_PUNT$: number = null;
        let V_SOLICR_LINEA: null = null;
        try {

            V_SOLICR_PUNT$ = 0;
            // if (PUP_CONVERSION_TASA_NOMINAL(V_SOLICR_PUNT$) == "FALLO") {
            //     this.CRTSOLICR.SOLICR_PUNT$N = null;
            //     // construct payload
            //     let payload1 = new Map();
            //     payload1.set("SOLICR_TDOLAR", this.CRTSOLICR.SOLICR_TDOLAR);
            //     payload1.set("SOLICR_LINEA", this.CRTSOLICR.SOLICR_LINEA);
            //     payload1.set("SOLICR_TPESOS", this.CRTSOLICR.SOLICR_TPESOS);
            //     // call REST API
            //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrpunt$n_whenvalidateitem_query1", payload1);
            //     // get values from result
            //     V_MENSAJE = result1[0].get("V_MENSAJE");
            //     // CRFSOLANA_LIB$DTNERFRMA(V_MENSAJE);
            // }
            if (["LI"].indexOf(this.CRTSOLICR.SOLICR_LINEA == null ? "XXXX" : this.CRTSOLICR.SOLICR_LINEA) != -1) {
                this.CRTSOLICR.SOLICR_TDOLAR = "DA5";
                this.CRTSOLICR.SOLICR_PTOUS$ = V_SOLICR_PUNT$;
                this.CRTSOLICR.SOLICR_TPESOS = null;
                this.CRTSOLICR.SOLICR_PUNTS$ = null;
            }
            else {
                this.CRTSOLICR.SOLICR_TPESOS = "DA5";
                this.CRTSOLICR.SOLICR_PUNTS$ = V_SOLICR_PUNT$;
                this.CRTSOLICR.SOLICR_TDOLAR = null;
                this.CRTSOLICR.SOLICR_PTOUS$ = null;
            }
            this.CRTSOLICR.SOLICR_FETANO = PLSQLBuiltins.sysdate();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrPunt$n_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //  
    //  IF :SOLICR_PLAZO IS NULL THEN
    //   LIB$ALERTA('MENSAJE','DEBE PRIMERO INDICAR EL PLAZO'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);
    //     GO_ITEM('CRTSOLICR.SOLICR_PLAZO');          
    //  ELSE
    //   SHOW_VIEW ('PER_GRACIA');
    //   GO_ITEM('CRTSOLICR.SOLICR_PERGRA');
    //  END IF;
    //  
    // END; 
    //#endregion
    async CRFSOLANA_crtsolicr_btnPergracia_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtsolicr_btnPergracia_whenButtonPressed");
        let VBOTON: number = null;
        // if ((SOLICR_PLAZO == null)) {
        //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "DEBE PRIMERO INDICAR EL PLAZO", "ACEPTAR", null, null, VBOTON);
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        // }
        // else {
        //     this.oracleFormsBuiltins.show_view("PER_GRACIA");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_btnPergracia_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //  IF :SOLICR_TDOLAR IS NOT NULL THEN
    //   BEGIN
    //     SELECT TINDES
    //      INTO DESC1
    //      FROM TIN
    //     WHERE TINCOD=:SOLICR_TDOLAR;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_FALSE");  --CAHH
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //    :SOLICR_PUNTS$:=NULL;                         --CAHH
    //   ELSE
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_TRUE");  --CAHH
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_TRUE");  --CAHH
    // END IF; 
    // --BEGIN
    // --    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    // --     LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    // --     RAISE FORM_TRIGGER_FAILURE;
    // --    END IF;
    // --END;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if ((SOLICR_TDOLAR != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TDOLAR", SOLICR_TDOLAR);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_FALSE");
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
        //     this.CRTSOLICR.SOLICR_PUNTS = null;
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_TRUE");
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTdolar_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TIPBIE IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1     VARCHAR2(100);
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // BEGIN
    //  SELECT TIPBIEN_DESBIEN 
    //    INTO DESC1
    //    FROM CRTTIPBIEN
    //  WHERE TIPBIEN_CODBIEN=:SOLICR_TIPBIE
    //    AND TIPBIEN_CODUNI =:SOLICR_CODUNI; --ARQUITECTURA
    //  :SOLICR_SUBCAT  := NULL;
    //  :W_SUBCATEGORIA := NULL; 
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE.....',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END;  
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_OFF");
    //   ELSE 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,PROPERTY_ON); 
    //   END IF;
    // END;
    //   -- CUOP
    //   --+PY26491. JDG. 2018.06.14
    //  --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+ 
    //    :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    :this.PARAMETER.get("PENCCOM") := 'S';
    //   END IF;
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTipbie_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTipbie_whenValidateItem");
        // if ((SOLICR_TIPBIE != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
        //         payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrtipbie_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         this.CRTSOLICR.SOLICR_SUBCAT = null;
        //         this.CRTSOLICR.W_SUBCATEGORIA = null;
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE.....", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        //     if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", "PROPERTY_OFF");
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "DISPLAYED", "PROPERTY_OFF");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", PROPERTY_ON);
        //     }
        //     if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //         this.PARAMETER.get("PENCCOM") = "S";
        //     }
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTipbie_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //   BEGIN
    //    SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR.BIEN
    //      FROM CRTTIPBIEN
    //     WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE
    //       AND TIPBIEN_CODUNI  = :SOLICR_CODUNI; --ARQUITECTURA;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //       NULL;
    //   END;   
    //      NEXT_ITEM;
    //      --GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTipbie_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTipbie_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
            // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrtipbie_keynextitem_query1", payload1);
            // get values from result
            // CRTSOLICR.BIEN = result1[0].get("CRTSOLICR.BIEN");
            if (result1 == null || result1.length == 0) {

            }

            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTipbie_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_CEDEEC  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCedeec_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCedeec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_CEDEEC) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrCedeec_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_CANT PLS_INTEGER;
    // 
    // 
    // BEGIN
    // 
    // --SI SE TIENE POR LO MENOS UNA SOLICITUD VIGENTE, SE CONSIDERA MANTENIMIENTO   CAHH
    // IF :SOLICR_NITTER IS NOT NULL THEN
    //  :D_TIPSOL := '';
    //    SELECT COUNT(COLBEN) INTO V_CANT
    //    FROM COL 
    //    WHERE COLESTC = 'VI'
    //     AND COLBEN = :SOLICR_NITTER;
    //     
    //    IF V_CANT >0 THEN
    //     :D_TIPSOL :='MANTENIMIENTO';
    //    ELSE
    //     SELECT COUNT(COLBEN) INTO V_CANT
    //      FROM COL 
    //      WHERE COLESTC = 'CA'
    //       AND COLBEN = :SOLICR_NITTER;
    //       
    //      IF V_CANT > 1 THEN
    //       :D_TIPSOL :=:D_TIPSOL ||' RECOLOCACIÓN';
    //      END IF;   
    //   
    //    END IF; 
    //   
    //    
    //    IF GET_ITEM_PROPERTY('CRTSOLICR.BTN_TIPSOL',LABEL) = '<' THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.D_TIPSOL',VISIBLE,"PROPERTY_FALSE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.BTN_TIPSOL',LABEL,'>');
    //    ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.D_TIPSOL',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.BTN_TIPSOL',LABEL,'<');
    //    END IF;
    //    SYNCHRONIZE;
    // END IF;
    //    
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_btnTipsol_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtsolicr_btnTipsol_whenButtonPressed");
        let V_CANT: number = null;
        // if ((SOLICR_NITTER != null)) {
        //     this.CRTSOLICR.D_TIPSOL = "";
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_NITTER", SOLICR_NITTER);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_btntipsol_whenbuttonpressed_query1", payload1);
        //     // get values from result
        //     V_CANT = result1[0].get("V_CANT");
        //     if (V_CANT > 0) {
        //         this.CRTSOLICR.D_TIPSOL = "MANTENIMIENTO";
        //     }
        //     else {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.set("SOLICR_NITTER", SOLICR_NITTER);
        //         // call REST API
        //         const result2 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_btntipsol_whenbuttonpressed_query2", payload2);
        //         // get values from result
        //         V_CANT = result2[0].get("V_CANT");
        //         if (V_CANT > 1) {
        //             this.CRTSOLICR.D_TIPSOL = this.CRTSOLICR.D_TIPSOL || ' RECOLOCACIÓN';
        //         }
        //     }
        //     if (this.oracleFormsBuiltins.get_item_property("CRTSOLICR.BTN_TIPSOL", LABEL) == "<") {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.D_TIPSOL", "VISIBLE", "PROPERTY_FALSE");
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_TIPSOL", LABEL, ">");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.D_TIPSOL", "VISIBLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_TIPSOL", LABEL, "<");
        //     }
        //     this.oracleFormsBuiltins.synchronize();
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_btnTipsol_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA           NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    BEGIN
    //  
    //     SELECT UVPCUT_DESCRI
    //      INTO :CRTSOLICR.UVPCUT_DESCRI
    //      FROM COTUVPCUT
    //     WHERE UVPCUT_CODIGO = :CRTSOLICR.SOLICR_COCUTA;
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.SOLICR_COCUTA := NULL;
    //       :CRTSOLICR.UVPCUT_DESCRI := NULL;
    //        LIB$ALERTA( 'MENSAJE', 'CÓDIGO DE CUPO DE TAXI INVÁLIDO.', NULL, NULL, NULL, T_RESPUESTA );
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END;  
    //    
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCocuta_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCocuta_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                // call REST API
                const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrcocuta_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.UVPCUT_DESCRI = result1[0].get("CRTSOLICR.UVPCUT_DESCRI");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COCUTA = null;
                this.CRTSOLICR.UVPCUT_DESCRI = null;
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "CÓDIGO DE CUPO DE TAXI INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrCocuta_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //    
    //     GO_ITEM( 'CRTSOLICR.BTN_REGFRMXC' );
    //     
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCocuta_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCocuta_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.BTN_REGFRMXC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrCocuta_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FAPRCR < :CRTSOLICR.SOLICR_FECREG THEN
    //     LIB$ALERTA('MENSAJE', 'LA FECHA DE APROBACIÓN NO DEBE SER MENOR QUE LA FECHA DE REGISTRO',NULL,NULL,NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFaprcr_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFaprcr_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (this.CRTSOLICR.SOLICR_FAPRCR < CRTSOLICR.SOLICR_FECREG) {
        //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "LA FECHA DE APROBACIÓN NO DEBE SER MENOR QUE LA FECHA DE REGISTRO", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFaprcr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // -- CUOP
    // --+PY26491. JDG. 2018.06.14
    // --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //   ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // --+ 
    //   :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //   :this.PARAMETER.get("PENCCOM") := 'S';
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrVrfina_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrVrfina_whenValidateItem");
        // if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //     // this.PARAMETER.get("PENCCOM") = "S";
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrVrfina_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // 
    // END;*/
    // 
    // --SE MODIFICA CON PROYECTO NO 13489
    // :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0); END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrVrfina_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrVrfina_whenNewItemInstance");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        console.log("Exiting CRFSOLANA_crtsolicr_solicrVrfina_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_GTIREC  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrGtirec_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrGtirec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrGtirec_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrGtirec_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrGtirec_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrGtirec_keyNextItem");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLANA_crtsolicr_solicrGtirec_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    BEGIN
    //  
    //     SELECT UVPTSV_DESCRI
    //      INTO :CRTSOLICR.DESCRI_TISEVE
    //      FROM COTUVPTSV
    //     WHERE UVPTSV_CODIGO = :CRTSOLICR.SOLICR_TISEVE;
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.SOLICR_TISEVE := NULL;
    //       :CRTSOLICR.DESCRI_TISEVE := NULL;
    //        LIB$ALERTA( 'MENSAJE', 'CÓDIGO DE TIPO DE SERVICIO QUE PRESTARÁ EL VEHÍCULO INVÁLIDO.', NULL, NULL, NULL, T_RESPUESTA );
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END;
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTiseve_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTiseve_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_TISEVE", this.CRTSOLICR.SOLICR_TISEVE);
                // call REST API
                const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrtiseve_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.DESCRI_TISEVE = result1[0].get("CRTSOLICR.DESCRI_TISEVE");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_TISEVE = null;
                this.CRTSOLICR.DESCRI_TISEVE = null;
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "CÓDIGO DE TIPO DE SERVICIO QUE PRESTARÁ EL VEHÍCULO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrTiseve_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_FNG = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FNGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FNG',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR := 'X';
    //        -- FRM$GARANTIAS_EQUIS ('FNG');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCiabil_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCiabil_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrCiabil_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrCiabil_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCiabil_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCiabil_keyNextItem");
        console.log("Exiting CRFSOLANA_crtsolicr_solicrCiabil_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA     NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //   --VALIDACION DE LISTAS RESTRICTIVAS 
    //    PVALTER(:CRTSOLICR.SOLICR_NITTER);
    //   BEGIN
    //    
    //     SELECT   TBENAPE||' '||TBENNOM
    //       INTO     :CRTSOLICR.NOMBRE
    //       FROM     TBEN
    //       WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    // 
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //            PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITTER, NULL,NULL, NULL,'T');
    //         ELSE 
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....',NULL,NULL,NULL,T_RESPUESTA); 
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    // 
    // 
    //         LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    //         CALL_FORM('SEFCRETER');
    // --       RAISE FORM_TRIGGER_FAILURE;
    //        END;
    //    
    //    ELSE
    //  LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO DEBE SER NULO ...',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrNitter_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFSOLANA_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrnitter_whenvalidateitem_query1", payload1);
            // get values from result
            // CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     // CRFSOLANA_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITTER, null, null, null, "T");
                // }
                // else {
                //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.call_form("SEFCRETER");
            }

        }
        else {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO DEBE SER NULO ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrNitter_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrActaso_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLANA_crtsolicr_analista_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_analista_keyNextItem");
        console.log("Exiting CRFSOLANA_crtsolicr_analista_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   V_TOTAL_TER          CRTSOLICR.SOLICR_EXPCLI%TYPE;
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //   
    //   IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //     AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //     V_MENSAJE := PUP_ENDEUDAMIENTO_TERCERO( :CRTSOLICR.SOLICR_CODUNI, :CRTSOLICR.SOLICR_NITTER, TO_CHAR( SYSDATE, 'YYMM' ), V_TOTAL_TER );
    //     
    //     IF V_MENSAJE = 'EXITO' THEN
    //      
    //      IF NVL( :CRTSOLICR.SOLICR_EXPCLI, 0 ) >= NVL ( V_TOTAL_TER, 0 ) THEN
    //       
    //        LIB$ALERTA( 'MENSAJE', 'EXPOSICIÓN ' || TO_CHAR( :CRTSOLICR.SOLICR_EXPCLI, '$999,999,999,999.00' ) || ') >= ENDEUDAMIENTO (' || TO_CHAR( V_TOTAL_TER, '$999,999,999,999.00' ) || ').' , 'ACEPTAR', NULL, NULL, T_RESPUESTA );    
    // 
    //      ELSE  
    //       
    //        LIB$ALERTA( 'MENSAJE', 'EXPOSICIÓN ' || TO_CHAR( :CRTSOLICR.SOLICR_EXPCLI, '$999,999,999,999.00' ) || ') < ENDEUDAMIENTO (' || TO_CHAR( V_TOTAL_TER, '$999,999,999,999.00' ) || ').' , 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    // 
    //      END IF;  
    //      
    //     ELSE
    //       
    //      LIB$ALERTA( 'MENSAJE', 'NO SE PUDO OBTENER ENDEUDAMIENTO DEL TERCERO ' || :CRTSOLICR.SOLICR_NITTER || '.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );   
    //       
    //      V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //        PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //        
    //     END IF;
    //     
    //     SET_ITEM_PROPERTY( 'VARIABLE.BTN_FIRMAS', "ENABLED", "PROPERTY_TRUE" );
    //     
    //   END IF;  
    //      
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrExpcli_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrExpcli_keyNextItem");
        let V_TOTAL_TER: null = null;
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                // V_MENSAJE = PUP_ENDEUDAMIENTO_TERCERO(this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_NITTER, SYSDATE.toString(), V_TOTAL_TER);
                if (V_MENSAJE == "EXITO") {
                    // if (this.CRTSOLICR.SOLICR_EXPCLI == null ? 0 : this.CRTSOLICR.SOLICR_EXPCLI >= V_TOTAL_TER == null ? 0 : V_TOTAL_TER) {
                    //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "EXPOSICIÓN " + CRTSOLICR.SOLICR_EXPCLI.toString() + ") >= ENDEUDAMIENTO (" + V_TOTAL_TER.toString() + ").", "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                    // else {
                    //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "EXPOSICIÓN " + CRTSOLICR.SOLICR_EXPCLI.toString() + ") < ENDEUDAMIENTO (" + V_TOTAL_TER.toString() + ").", "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                }
                else {
                    // CRFSOLANA_LIB$ALERTA("MENSAJE", "NO SE PUDO OBTENER ENDEUDAMIENTO DEL TERCERO " + CRTSOLICR.SOLICR_NITTER + ".", "ACEPTAR", null, null, T_RESPUESTA);
//                     V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                }
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_FIRMAS", "ENABLED", "PROPERTY_TRUE");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrExpcli_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :TXT_TOTPLAZO := :SOLICR_PERGRA  +  :SOLICR_PLAZO;
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPergra_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPergra_keyNextItem");
        // this.CRTSOLICR.TXT_TOTPLAZO = this.CRTSOLICR.SOLICR_PERGRA + SOLICR_PLAZO;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLANA_crtsolicr_solicrPergra_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIA
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //    AND SUBCAT_ESTADO = 'A'
    //    AND SUBCAT_CODUNI = :SOLICR_CODUNI; --ARQUITECTURA
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrSubcat_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrSubcat_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
            // payload1.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
            // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrsubcat_whenvalidateitem_query1", payload1);
            // get values from result
            // W_SUBCATEGORIA = result1[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.CRTSOLICR.W_SUBCATEGORIA = null;
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrSubcat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrSubcat_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrSubcat_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_NITTER");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrSubcat_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF NVL(:CRTSOLICR.SOLICR_PRESID, 0) > 100 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE RESIDUAL DEBE SER INFERIOR AL 100%....',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPresid_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPresid_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PRESID == null ? 0 : this.CRTSOLICR.SOLICR_PRESID > 100) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE RESIDUAL DEBE SER INFERIOR AL 100%....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrPresid_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //    IF :CRTSOLICR.SOLICR_PRESID IS NULL THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',ENTERABLE,"ATTR_OFF");
    //    ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',ENTERABLE,ATTR_ON);
    // 
    //    END IF;
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPresid_postTextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPresid_postTextItem");
        if ((this.CRTSOLICR.SOLICR_PRESID == null)) {
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "ENTERABLE", "ATTR_OFF");
        }
        else {
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "ENTERABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrPresid_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL = 'EC'THEN
    //      IF :SOLICR_FECRADI IS NULL AND :SOLICR_USCRED IS NULL THEN
    //         :CRTSOLICR.SOLICR_ESTSOL  := 'DC';
    //         :CRTSOLICR.SOLICR_FECDEVO := SYSDATE;
    //      :GLOBAL.ACTUALIZAR := 'SI'; 
    //      COMMIT_FORM;
    //      LIB$ALERTA('MENSAJE','SOLICITUD DEVUELTA AL COMERCIAL ....',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_ITEM('CRTSOLICR.SOLICR_CODSOL');
    //     ELSE
    //      LIB$ALERTA('MENSAJE','SOLICITUD RADICADA NO PUEDE SER DEVUELTA ....',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //  ELSE
    //     LIB$ALERTA('MENSAJE','SOLICITUD NO PUEDE SER DEVUELTA VERIFIQUE EL ESTADO ....',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_devolver_whenMouseClick() {
        console.log("Entering CRFSOLANA_crtsolicr_devolver_whenMouseClick");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "EC") {
//             if (((SOLICR_FECRADI == null) && (SOLICR_USCRED == null))) {
//                 this.CRTSOLICR.SOLICR_ESTSOL = "DC";
//                 this.CRTSOLICR.SOLICR_FECDEVO = PLSQLBuiltins.sysdate();
// //                 this.GLOBAL.ACTUALIZAR = "SI";
//                 this.oracleFormsBuiltins.commit_form();
//                 // CRFSOLANA_LIB$ALERTA("MENSAJE", "SOLICITUD DEVUELTA AL COMERCIAL ....", null, null, null, T_RESPUESTA);
//                 this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODSOL");
//             }
//             else {
//                 // CRFSOLANA_LIB$ALERTA("MENSAJE", "SOLICITUD RADICADA NO PUEDE SER DEVUELTA ....", null, null, null, T_RESPUESTA);
//                 console.log("FORM_TRIGGER_FAILURE");
//                 throw new Error('FORM_TRIGGER_FAILURE');
//             }
        }
        else {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "SOLICITUD NO PUEDE SER DEVUELTA VERIFIQUE EL ESTADO ....", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLANA_crtsolicr_devolver_whenMouseClick");
    }

    async CRFSOLANA_crtsolicr_solicrObscom_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //   BEGIN
    //    
    //     COMMIT_FORM;
    //    
    //    HIDE_WINDOW( 'WINDOWC' );
    //     
    //     GO_ITEM( 'CRTSOLICR.SOLICR_TISEVE' );  
    //   
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_btnRegfrmxc_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtsolicr_btnRegfrmxc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.hide_window("WINDOWC");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_btnRegfrmxc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_FINAGR IS NULL THEN
    //  GO_ITEM('SOLICR_FINAGR');
    //  :SOLICR_FINAGLN := NULL;
    //  :DESLINFINA     := NULL;
    //  LIB$DTNERFRMA('NO SE PUEDE SELECCIONAR UNA LÍNEA FINAGRO SINO HA SELECCIONADO LA TASA.');
    // ELSE
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESLINFINA
    //   FROM CRTLINRED
    //    WHERE LINRED_TIPO='FN'
    //    AND LINRED_CODIGO = :SOLICR_FINAGLN;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE ESA LÍNEA EN FINAGRO.');
    // END;
    //   NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFinagln_whenNewFormInstance() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFinagln_whenNewFormInstance");
        // if ((SOLICR_FINAGR == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_FINAGR");
        //     this.CRTSOLICR.SOLICR_FINAGLN = null;
        //     this.CRTSOLICR.DESLINFINA = null;
        //     // CRFSOLANA_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA FINAGRO SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_FINAGLN", SOLICR_FINAGLN);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrfinagln_whennewforminstance_query1", payload1);
        //     // get values from result
        //     DESLINFINA = result1[0].get("DESLINFINA");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLANA_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN FINAGRO.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFinagln_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL THEN
    //        LIB$ALERTA('MENSAJE','EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA, NO SE ACTUALIZARÁ EL REGISTRO ',NULL,NULL,NULL,T_RESPUESTA);
    //        :GLOBAL.ACTUALIZAR :='NO';
    //     ELSIF 
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL THEN
    //        LIB$ALERTA('MENSAJE','EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA',NULL,NULL,NULL,T_RESPUESTA);       
    //        :GLOBAL.ACTUALIZAR :='NO';
    //     ELSIF :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL THEN
    //        LIB$ALERTA('MENSAJE','EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA',NULL,NULL,NULL,T_RESPUESTA);       
    //        :GLOBAL.ACTUALIZAR :='NO';
    //     ELSIF :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL THEN
    //        LIB$ALERTA('MENSAJE','EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA',NULL,NULL,NULL,T_RESPUESTA);       
    //        :GLOBAL.ACTUALIZAR :='NO';
    //     ELSE 
    //        :GLOBAL.ACTUALIZAR :='SI';
    //     END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA, NO SE ACTUALIZARÁ EL REGISTRO ", null, null, null, T_RESPUESTA);
//             this.GLOBAL.ACTUALIZAR = "NO";
        }
        else if ((this.CRTSOLICR.SOLICR_PUNTS$ != null)) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
//             this.GLOBAL.ACTUALIZAR = "NO";
        }
        else if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
//             this.GLOBAL.ACTUALIZAR = "NO";
        }
        else if ((this.CRTSOLICR.SOLICR_PTOUS$ != null)) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
//             this.GLOBAL.ACTUALIZAR = "NO";
        }
        else {
//             this.GLOBAL.ACTUALIZAR = "SI";
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    //     END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTasa_postTextItem");
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "ENTERABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "ENTERABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "ENTERABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "ENTERABLE", "ATTR_OFF");
        }
        else {
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "UPDATEABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "ENTERABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "UPDATEABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "ENTERABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "UPDATEABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "ENTERABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "UPDATEABLE", ATTR_ON);
            // CRFSOLANA_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "ENTERABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FNG IS NOT NULL THEN
    //   IF :CRTSOLICR.SOLICR_FNG <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   --ELSE (NO ES EXCLUYENTE)
    //       -- FRM$GARANTIAS_EQUIS ('FNG');   
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrFng_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrFng_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FNG != null)) {
            if (this.CRTSOLICR.SOLICR_FNG != "X") {
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrFng_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_MODINT IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT MODCOD
    //      INTO DESC1
    //      FROM MOD$
    //     WHERE MODCOD =:SOLICR_MODINT;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO DE MODALIDAD INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrModint_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrModint_whenValidateItem");
        // if ((SOLICR_MODINT != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODINT", SOLICR_MODINT);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrmodint_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrModint_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrCiaseg_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CIASEG IS NOT NULL THEN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //     INTO  :CRTSOLICR.NONCIASEG    
    //     FROM TER
    //     WHERE TERCOD=:CRTSOLICR.SOLICR_CIASEG;
    //   ELSE
    //     GO_ITEM('CRTSOLICR.SOLICR_DEDESP');
    //     END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCiaseg_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCiaseg_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CIASEG != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
            // call REST API
            const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrciaseg_keynextitem_query1", payload1);
            // get values from result
            // CRTSOLICR.NONCIASEG = result1[0].get("CRTSOLICR.NONCIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_DEDESP");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrCiaseg_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'CRTSOLICR.SOLICR_PLAZMA' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPlazmi_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPlazmi_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrPlazmi_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_INTVEN IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TINDES
    //      INTO DESC1
    //      FROM TIN
    //     WHERE TINCOD=:SOLICR_INTVEN;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END  IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrIntven_whenValidateItem");
        // if ((SOLICR_INTVEN != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_INTVEN", SOLICR_INTVEN);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrIntven_whenValidateItem");
    }

    async CRFSOLANA_crtsolicr_solicrComopr_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  CONTADOR    NUMBER;
    //  ESTVI       VARCHAR2(2);
    //  ESTRE       VARCHAR2(2);
    // BEGIN
    // IF :SOLICR_CTACOD IS NOT NULL THEN
    //  CONTADOR:=0;
    //  BEGIN
    //   SELECT COUNT(*)
    //     INTO CONTADOR
    //     FROM COL
    //    WHERE COLOFI=:SOLICR_CTAOFC
    //      AND COLTDOC=:SOLICR_CTATIP
    //      AND COLCOD=:SOLICR_CTACOD;
    //   END;
    //  IF CONTADOR = 0 THEN
    //     LIB$ALERTA('MENSAJE','CONTRATO INEXISTENTE ........',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //    BEGIN
    //      SELECT COLESTC,COLESTR
    //        INTO ESTVI,ESTRE
    //        FROM COL
    //       WHERE COLOFI=:SOLICR_CTAOFC
    //         AND COLTDOC=:SOLICR_CTATIP
    //         AND COLCOD=:SOLICR_CTACOD;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    //     END;
    //     IF ESTVI <> 'VI' AND ESTRE <> 'GR'  THEN 
    //        LIB$ALERTA('MENSAJE','ESTADO DEL CONTRATO DIFERENTE DE VIGENTE ........',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //        :SOLICR_CTAOFC:=NULL;
    //        :SOLICR_CTATIP:=NULL;
    //        :SOLICR_CTACOD:=NULL;
    //     ELSIF ESTVI = 'VI' AND ESTRE IN ( 'CJ','CE') THEN
    //        LIB$ALERTA('MENSAJE','ESTADO DEL CONTRATO EN COBRO JURIDICO ........',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //        :SOLICR_CTAOFC:=NULL;
    //        :SOLICR_CTATIP:=NULL;
    //        :SOLICR_CTACOD:=NULL;
    //     ELSE 
    //        BEGIN
    //         SELECT INCDES
    //           INTO :SOLICR_ACTAVA
    //           FROM OPS$ACTIVOS.INC
    //          WHERE  INCTDOC=:SOLICR_CTATIP
    //            AND  INCCOL=:SOLICR_CTACOD
    //            AND  INCOFC=:SOLICR_CTAOFC
    //            AND  INC_CODUNI=:SOLICR_CODUNI; --ARQUITECTURA
    //        EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //          NULL;
    //        END;  
    //      END IF; 
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrCtacod_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrCtacod_whenValidateItem");
        let T_RESPUESTA: number = null;
        let CONTADOR: number = null;
        let ESTVI: string = null;
        let ESTRE: string = null;
        // if ((SOLICR_CTACOD != null)) {
        //     CONTADOR = 0;
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_CTAOFC", SOLICR_CTAOFC);
        //     payload1.set("SOLICR_CTATIP", SOLICR_CTATIP);
        //     payload1.set("SOLICR_CTACOD", SOLICR_CTACOD);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrctacod_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     CONTADOR = result1[0].get("CONTADOR");
        //     if (CONTADOR == 0) {
        //         // CRFSOLANA_LIB$ALERTA("MENSAJE", "CONTRATO INEXISTENTE ........", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        //     else {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.set("SOLICR_CTAOFC", SOLICR_CTAOFC);
        //         payload2.set("SOLICR_CTATIP", SOLICR_CTATIP);
        //         payload2.set("SOLICR_CTACOD", SOLICR_CTACOD);
        //         // call REST API
        //         const result2 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrctacod_whenvalidateitem_query2", payload2);
        //         // get values from result
        //         ESTVI = result2[0].get("ESTVI");
        //         ESTRE = result2[0].get("ESTRE");
        //         if (result2 == null || result2.length == 0) {

        //         }

        //         if ((ESTVI != "VI" && ESTRE != "GR")) {
        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO DIFERENTE DE VIGENTE ........", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //             this.CRTSOLICR.SOLICR_CTAOFC = null;
        //             this.CRTSOLICR.SOLICR_CTATIP = null;
        //             this.CRTSOLICR.SOLICR_CTACOD = null;
        //         }
        //         else if ((ESTVI == "VI" && ["CJ", "CE"].indexOf(ESTRE) != -1)) {
        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO EN COBRO JURIDICO ........", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //             this.CRTSOLICR.SOLICR_CTAOFC = null;
        //             this.CRTSOLICR.SOLICR_CTATIP = null;
        //             this.CRTSOLICR.SOLICR_CTACOD = null;
        //         }
        //         else {
        //             // construct payload
        //             let payload3 = new Map();
        //             payload3.set("SOLICR_CTATIP", SOLICR_CTATIP);
        //             payload3.set("SOLICR_CTACOD", SOLICR_CTACOD);
        //             payload3.set("SOLICR_CTAOFC", SOLICR_CTAOFC);
        //             payload3.set("SOLICR_CODUNI", SOLICR_CODUNI);
        //             // call REST API
        //             const result3 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrctacod_whenvalidateitem_query3", payload3);
        //             // get values from result
        //             SOLICR_ACTAVA = result3[0].get("SOLICR_ACTAVA");
        //             if (result3 == null || result3.length == 0) {

        //             }

        //         }
        //     }
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrCtacod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_ORMONET IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT ORMDES
    //      INTO DESC1
    //      FROM ORM
    //     WHERE ORMCOD=:SOLICR_ORMONUS$;
    //     
    //         ----CAHH   SIMASOL 20213
    //         IF :SOLICR_ORMONET <> :SOLICR_ORMONUS$ THEN
    //        LIB$ALERTA('MENSAJE','EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //     
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrOrmonus$_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONUS", SOLICR_ORMONUS);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (SOLICR_ORMONET != SOLICR_ORMONUS) {
        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrOrmonus$_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF NVL(:CRTSOLICR.SOLICR_PDSCTO, 0) > 100 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE DESCUENTO DEBE SER INFERIOR AL 100% ...',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrPdscto_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrPdscto_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PDSCTO == null ? 0 : this.CRTSOLICR.SOLICR_PDSCTO > 100) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE DESCUENTO DEBE SER INFERIOR AL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrPdscto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // -- CUOP
    // --+PY26491. JDG. 2018.06.14
    // --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //   ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // --+ 
    //   :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //   :this.PARAMETER.get("PENCCOM") := 'S';
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrMonto_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrMonto_whenValidateItem");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        // if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //     // this.PARAMETER.get("PENCCOM") = "S";
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrMonto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN PR_VALIDE; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrAprcia_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrAprcia_whenButtonPressed");
        // CRFSOLANA_PR_VALIDE();
        console.log("Exiting CRFSOLANA_crtsolicr_solicrAprcia_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    // IF :SOLICR_TPESOS IS NOT NULL THEN
    // BEGIN
    //    SELECT TINDES
    //      INTO DESC1
    //      FROM TIN
    //     WHERE TINCOD=:SOLICR_TPESOS;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_FALSE");  --CAHH
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //   :SOLICR_PTOUS$:=NULL;                 --CAHH
    //  ELSE
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_TRUE");  --CAHH
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_TRUE");  --CAHH
    //  
    // END IF;
    // --BEGIN
    // --    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    // --     LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    // --     RAISE FORM_TRIGGER_FAILURE;
    // --    END IF;
    // --END;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTpesos_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTpesos_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if ((SOLICR_TPESOS != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TPESOS", SOLICR_TPESOS);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrtpesos_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_FALSE");
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_FALSE");
        //     this.CRTSOLICR.SOLICR_PTOUS = null;
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_TRUE");
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTpesos_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    BEGIN
    //  
    //     SELECT UVPEGA_DESCRI
    //      INTO :CRTSOLICR.SOLICR_ESTRATDESC
    //      FROM COTUVPEGA
    //     WHERE UVPEGA_CODIGO = :CRTSOLICR.SOLICR_ESTRAT;
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR.SOLICR_ESTRAT     := NULL;
    //       :CRTSOLICR.SOLICR_ESTRATDESC := NULL;
    //        LIB$ALERTA( 'MENSAJE', 'ESTRATEGIA VOR UVP INVÁLIDA.', NULL, NULL, NULL, T_RESPUESTA );
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END;   
    //       
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrEstrat_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrEstrat_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                // call REST API
                const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrestrat_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.SOLICR_ESTRATDESC = result1[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_ESTRAT = null;
                this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                // CRFSOLANA_LIB$ALERTA("MENSAJE", "ESTRATEGIA VOR UVP INVÁLIDA.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrEstrat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_IFI IS NULL THEN
    //  GO_ITEM('SOLICR_IF');
    //  :SOLICR_LMULTIP := NULL;
    //  :DESLIMPTO     := NULL;
    //  LIB$DTNERFRMA('NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX MULTIPROPOSITO SINO HA SELECCIONADO LA TASA.');
    // ELSE
    // BEGIN
    //   SELECT LINRED_DESLIN 
    //     INTO :DESCBCDX
    //   FROM CRTLINRED
    //    WHERE LINRED_TIPO='BM'
    //    AND LINRED_CODIGO = :SOLICR_LMULTIP;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE ESA LÍNEA EN BANCOLDEX MULTIPROPOSITO.');
    // END;
    //   NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrLmultip_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrLmultip_keyNextItem");
        // if ((SOLICR_IFI == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_IF");
        //     this.CRTSOLICR.SOLICR_LMULTIP = null;
        //     this.CRTSOLICR.DESLIMPTO = null;
        //     // CRFSOLANA_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX MULTIPROPOSITO SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrlmultip_keynextitem_query1", payload1);
        //     // get values from result
        //     DESCBCDX = result1[0].get("DESCBCDX");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLANA_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN BANCOLDEX MULTIPROPOSITO.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrLmultip_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    // 
    //     PUP_CONTROL_BOTONES_X_UNIDAD;
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLANA.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. '
//     //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrVrcial_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrVrcial_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLANA_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrVrcial_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'VARIABLE.BTN_MASPRENDAS' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrVrcial_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_MASPRENDAS");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_crtsolicr_solicrVrcial_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_CLASAC  NOT IN ('N','U') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //      :CRTSOLICR.ACTIVO:= 'NUEVO';
    //   ELSE
    //      :CRTSOLICR.ACTIVO:= 'USADO';
    //   
    // 
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrClasac_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrClasac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "U"].indexOf(this.CRTSOLICR.SOLICR_CLASAC) != -1) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_BCODEX IS NULL THEN
    //  GO_ITEM('SOLICR_BCODEX');
    //  :SOLICR_TBCOLDX := NULL;
    //  :DESCBCDX     := NULL;
    //  LIB$DTNERFRMA('NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX SINO HA SELECCIONADO LA TASA.');
    // ELSE
    // BEGIN
    //   SELECT LINRED_DESLIN 
    //     INTO :DESCBCDX
    //   FROM CRTLINRED
    //    WHERE LINRED_TIPO='BX'
    //    AND LINRED_CODIGO = :SOLICR_TBCOLDX;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE ESA LÍNEA EN BANCOLDEX.');
    // END;
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_solicrTbcoldx_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_solicrTbcoldx_keyNextItem");
        // if ((SOLICR_BCODEX == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_BCODEX");
        //     this.CRTSOLICR.SOLICR_TBCOLDX = null;
        //     this.CRTSOLICR.DESCBCDX = null;
        //     // CRFSOLANA_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_solicrtbcoldx_keynextitem_query1", payload1);
        //     // get values from result
        //     DESCBCDX = result1[0].get("DESCBCDX");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLANA_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN BANCOLDEX.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLANA_crtsolicr_solicrTbcoldx_keyNextItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLANA_crtsolicr_nomOficial_keyNextItem() {
        console.log("Entering CRFSOLANA_crtsolicr_nomOficial_keyNextItem");
        console.log("Exiting CRFSOLANA_crtsolicr_nomOficial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC2        VARCHAR2(100); 
    // BEGIN
    //    SELECT PROD_DESCRI
    //      INTO DESC2
    //      FROM CRTPRODCIA
    //     WHERE PROD_CODIGO = :SOLICR_CODPRO
    //       AND PROD_CODUNI = :SOLICR_CODUNI;  --ARQUITECTURA
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_desLindesembo_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtsolicr_desLindesembo_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC2: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         // payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
        //         // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtsolicr/crfsolana_crtsolicr_deslindesembo_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC2 = result1[0].get("DESC2");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtsolicr_desLindesembo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_CODPRO = 'RES' THEN
    //       SHOW_VIEW('REESTRUCTURADOS');
    //       GO_ITEM('CRTRESTR.RESTR_COLOFI');
    //    END IF; END;
    //#endregion
    async CRFSOLANA_crtsolicr_resstruct_whenButtonPressed() {
        console.log("Entering CRFSOLANA_crtsolicr_resstruct_whenButtonPressed");
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.show_view("REESTRUCTURADOS");
            this.oracleFormsBuiltins.go_item("CRTRESTR.RESTR_COLOFI");
        }
        console.log("Exiting CRFSOLANA_crtsolicr_resstruct_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 22 DE SEPTIEMBRE DE 2005
    //   --
    // IF :CRTSOLICR.SOLICR_ESTSOL = 'AP' THEN
    //  SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtterext_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtterext_whenNewItemInstance");
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AP") {
            // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "UPDATE_ALLOWED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtterext_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //    INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL
    //                           ,OTERSOL_CODSOL
    //                           ,OTERSOL_TIPVIN
    //                           ,OTERSOL_NITTER
    //                           ,OTERSOL_TIPPER
    //                           ,OTERSOL_TIPIDE
    //                           ,OTERSOL_CODUNI)
    //                    VALUES(:CRTSOLICR.SOLICR_OFCSOL
    //                          ,:CRTSOLICR.SOLICR_CODSOL
    //                          ,'99'
    //                          ,:CRTTEREXT.TEREXT_NIT
    //                          ,'J'
    //                          ,'NE'
    //                          ,:CRTSOLICR.SOLICR_CODUNI); --ARQUITECTURA
    // EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO NO ESTA CREADO .....',NULL,NULL,NULL,T_RESPUESTA);
    //  END;
    //#endregion
    async CRFSOLANA_crtterext_postInsert() {
        console.log("Entering CRFSOLANA_crtterext_postInsert");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.SOLICR_OFCSOL = : this.CRTSOLICR.SOLICR_OFCSOL;
        // payload1.SOLICR_CODSOL = : this.CRTSOLICR.SOLICR_CODSOL;
        // payload1.TEREXT_NIT = : CRTTEREXT.TEREXT_NIT;
        // payload1.SOLICR_CODUNI = : this.CRTSOLICR.SOLICR_CODUNI;
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtterext/crfsolana_crtterext_postinsert_query1", payload1);
        if (result1 == null || result1.length == 0) {

            // CRFSOLANA_LIB$ALERTA("MENSAJE", "TERCERO NO ESTA CREADO .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLANA_crtterext_postInsert");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFSOLANA_crtterext_keyCommit() {
        console.log("Entering CRFSOLANA_crtterext_keyCommit");
        console.log("Exiting CRFSOLANA_crtterext_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_NIT   NUMBER(13);
    // BEGIN
    //  BEGIN 
    //    IF :CRTTEREXT.TEREXT_NIT IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(TEREXT_NIT)), 4444444444443) + 1
    //      INTO   V_NUEVO_NIT
    //      FROM   CRTTEREXT;
    //      :CRTTEREXT.TEREXT_NIT := TO_CHAR(V_NUEVO_NIT);
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL');
    //    END;
    //   END IF;
    //  :CRTTEREXT.TEREXT_TIPID  := 'NE';
    //  :CRTTEREXT.TEREXT_TIPPER := 'J';
    //  END;
    // END;
    //#endregion
    async CRFSOLANA_crtterext_preInsert() {
        console.log("Entering CRFSOLANA_crtterext_preInsert");
        let V_NUEVO_NIT: number = null;
        // if ((CRTTEREXT.TEREXT_NIT == null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtterext/crfsolana_crtterext_preinsert_query1", payload1);
        //         // get values from result
        //         V_NUEVO_NIT = result1[0].get("V_NUEVO_NIT");
        //         this.CRTTEREXT.TEREXT_NIT = V_NUEVO_NIT.toString();
        //     } catch (ex) {

        //         this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL");
        //     }

        // }
        this.CRTTEREXT.TEREXT_TIPID = "NE";
        this.CRTTEREXT.TEREXT_TIPPER = "J";
        console.log("Exiting CRFSOLANA_crtterext_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    //  V_LIST BOOLEAN;
    // 
    // BEGIN
    // IF :TEREXT_NIT IS NULL THEN
    //  
    //   LIB$ALERTA('MENSAJE','PARA CREAR UN PROVEEDOR EXTRANJERO, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES',NULL, NULL, NULL, VBOTON); 
    // 
    //    V_LIST := SHOW_LOV('LOV263_NITEXT'); 
    // 
    // ELSE
    //   NEXT_ITEM;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtterext_terextNomcia_keyNextItem() {
        console.log("Entering CRFSOLANA_crtterext_terextNomcia_keyNextItem");
        let VBOTON: number = null;
        let V_LIST: boolean = null;
        // if ((TEREXT_NIT == null)) {
        //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "PARA CREAR UN PROVEEDOR EXTRANJERO, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, VBOTON);
        //     V_LIST = this.oracleFormsBuiltins.show_lov("LOV263_NITEXT");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLANA_crtterext_terextNomcia_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTTEREXT.TEREXT_NIT IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TDPCOD
    //      INTO DESC1
    //      FROM TDP
    //     WHERE TDPCOD =:CRTTEREXT.TEREXT_CODPAIS;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','AL TERCERO NO SE LE HA DEFINIDO UN PAIS, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtterext_terextCodpais_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtterext_terextCodpais_whenValidateItem");
        // if ((CRTTEREXT.TEREXT_NIT != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("TEREXT_CODPAIS", CRTTEREXT.TEREXT_CODPAIS);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolana_crtterext/crfsolana_crtterext_terextcodpais_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLANA_LIB$ALERTA("MENSAJE", "AL TERCERO NO SE LE HA DEFINIDO UN PAIS, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLANA_crtterext_terextCodpais_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFSOLANA_toolbar_whenButtonPressed() {
        console.log("Entering CRFSOLANA_toolbar_whenButtonPressed");
        // CRFSOLANA_TOOLBAR_ACTIONS();
        console.log("Exiting CRFSOLANA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFSOLANA_toolbar_whenMouseLeave() {
        console.log("Entering CRFSOLANA_toolbar_whenMouseLeave");
        // CRFSOLANA_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFSOLANA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async CRFSOLANA_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSOLANA_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFSOLANA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFSOLANA_ppal_keyCommit() {
        console.log("Entering CRFSOLANA_ppal_keyCommit");
        console.log("Exiting CRFSOLANA_ppal_keyCommit");
    }

    //#region PLSQL
    // BEGIN :PPAL.VOLVER:='MENU ANT'; END;
    //#endregion
    async CRFSOLANA_ppal_postQuery() {
        console.log("Entering CRFSOLANA_ppal_postQuery");
        this.PPAL.VOLVER = "MENU ANT";
        console.log("Exiting CRFSOLANA_ppal_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.UNIDAD1:= :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC1   := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL1:= :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL1   := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.ESTSOL1   := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC1 := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     GO_ITEM ('CRTSOLICR.SOLICR_BCODEX');
    //     
    //     --+PY21520. JDG. 
    //    :VARIABLE.SOLICR_CODVOR1 := :CRTSOLICR.SOLICR_CODVOR; 
    // 
    // END;
    //#endregion
    async CRFSOLANA_ppal_redesctos_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_redesctos_whenNewItemInstance");
        this.VARIABLE.UNIDAD1 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL1 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL1 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.ESTSOL1 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC1 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_BCODEX");
        this.VARIABLE.SOLICR_CODVOR1 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFSOLANA_ppal_redesctos_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC5    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL5 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL5 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC5 := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     GO_ITEM  ('CRTSOLICR.SOLICR_OBSECR');
    // END;
    // 
    // --+PY21520. JDG.
    //   DECLARE
    // 
    //     V_TOTAL_TER          CRTSOLICR.SOLICR_EXPCLI%TYPE;
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    //  BEGIN
    //  
    //    IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //      AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //      
    //      :VARIABLE.SOLICR_CODVOR5 := :CRTSOLICR.SOLICR_CODVOR;
    //     
    //     V_MENSAJE := PUP_ENDEUDAMIENTO_TERCERO( :CRTSOLICR.SOLICR_CODUNI, :CRTSOLICR.SOLICR_NITTER, TO_CHAR( SYSDATE, 'YYMM' ), V_TOTAL_TER );
    //     
    //     IF V_MENSAJE = 'EXITO' THEN
    //      
    //       NULL;
    //      
    //     ELSE
    //       
    //       LIB$ALERTA( 'MENSAJE', 'NO SE PUDO OBTENER ENDEUDAMIENTO DEL TERCERO ' || :CRTSOLICR.SOLICR_NITTER || '.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );   
    //       
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFSOLANA.PPAL.CREDTO.WHEN-MOUSE-CLICK. '
//     //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //        PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                       
    //     END IF; 
    //     
    //     SET_ITEM_PROPERTY( 'VARIABLE.BTN_FIRMAS', "ENABLED", "PROPERTY_TRUE" );
    //     
    //   END IF;
    //      
    //  EXCEPTION 
    //    
    //    WHEN OTHERS THEN
    //  
    //          IF ( ERROR_CODE  <> 0 ) THEN
    //            
    //         V_MENSAJE := 'FALLO. '
    //                      || 'CRFSOLANA.PPAL.CREDTO.WHEN-MOUSE-CLICK. '
//     //                      || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                      || 'SQLERRM ' || SQLERRM;
    //                      
    //            PBD_SEG_MSGERR( 'CRFSOLANA', V_MENSAJE );                   
    //                      
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //          
    //       END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLANA_ppal_credto_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_credto_whenNewItemInstance");
        this.VARIABLE.OFC5 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL5 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL5 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC5 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSECR");
        let V_TOTAL_TER: null = null;
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                this.VARIABLE.SOLICR_CODVOR5 = this.CRTSOLICR.SOLICR_CODVOR;
                // V_MENSAJE = PUP_ENDEUDAMIENTO_TERCERO(this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_NITTER, SYSDATE.toString(), V_TOTAL_TER);
                if (V_MENSAJE == "EXITO") {
                }
                else {
                    // CRFSOLANA_LIB$ALERTA("MENSAJE", "NO SE PUDO OBTENER ENDEUDAMIENTO DEL TERCERO " + CRTSOLICR.SOLICR_NITTER + ".", "ACEPTAR", null, null, T_RESPUESTA);
//                     V_MENSAJE = "FALLO. " + "CRFSOLANA.PPAL.CREDTO.WHEN-MOUSE-CLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                }
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_FIRMAS", "ENABLED", "PROPERTY_TRUE");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code ()!= 0) {
//                 V_MENSAJE = "FALLO. " + "CRFSOLANA.PPAL.CREDTO.WHEN-MOUSE-CLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLANA_PBD_SEG_MSGERR("CRFSOLANA", V_MENSAJE);
                // CRFSOLANA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLANA_ppal_credto_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.UNIDAD4 := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC4    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL4 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL4 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC4 := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     -- GO_ITEM ('VARIABLE.ITEM_COMODIN');
    // END;
    //#endregion
    async CRFSOLANA_ppal_aproCial_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_aproCial_whenNewItemInstance");
        this.VARIABLE.UNIDAD4 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC4 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL4 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL4 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC4 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFSOLANA_ppal_aproCial_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //      COMMIT_FORM;
    //      GO_BLOCK('CRTSOLICR');
    // END;
    //#endregion
    async CRFSOLANA_ppal_infGrl_whenMouseClick() {
        console.log("Entering CRFSOLANA_ppal_infGrl_whenMouseClick");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFSOLANA_ppal_infGrl_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     GO_ITEM ('SOLICR_CIASEG');
    //     :VARIABLE.UNIDAD2 := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC2    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL2 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL2 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC2 := :CRTSOLICR.SOLICR_OFIBANC;
    //     
    //     --+PY21520. JDG. 
    //    :VARIABLE.SOLICR_CODVOR1 := :CRTSOLICR.SOLICR_CODVOR; 
    // 
    // END;
    //#endregion
    async CRFSOLANA_ppal_segImp_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_segImp_whenNewItemInstance");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_CIASEG");
        this.VARIABLE.UNIDAD2 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC2 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL2 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL2 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC2 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR1 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFSOLANA_ppal_segImp_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // HIDE_VIEW('REESTRUCTURADOS');
    // GO_ITEM('SOLICR_TIPCRE'); END;
    //#endregion
    async CRFSOLANA_ppal_volver1_whenButtonPressed() {
        console.log("Entering CRFSOLANA_ppal_volver1_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("REESTRUCTURADOS");
        this.oracleFormsBuiltins.go_item("SOLICR_TIPCRE");
        console.log("Exiting CRFSOLANA_ppal_volver1_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //    SHOW_VIEW('CANVAS1');
    // END;
    //#endregion
    async CRFSOLANA_ppal_volver_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_volver_whenNewItemInstance");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        console.log("Exiting CRFSOLANA_ppal_volver_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.UNIDAD8  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.CODOFI8  := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL8  := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL8  := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC8 := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     GO_BLOCK('VARIABLE');
    //     
    //     --+PY21520. JDG. 
    //    :VARIABLE.SOLICR_CODVOR8 := :CRTSOLICR.SOLICR_CODVOR; 
    // 
    // END;
    //#endregion
    async CRFSOLANA_ppal_oTerceros_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_oTerceros_whenNewItemInstance");
        this.VARIABLE.UNIDAD8 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.CODOFI8 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL8 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL8 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC8 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.VARIABLE.SOLICR_CODVOR8 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFSOLANA_ppal_oTerceros_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.UNIDAD3 := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC3    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL3 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL3 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC3 := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     GO_ITEM ('SOLICR_GTIREC');
    //     
    //     --+PY21520. JDG. 
    //    :VARIABLE.SOLICR_CODVOR3 := :CRTSOLICR.SOLICR_CODVOR; 
    // 
    // END;
    //#endregion
    async CRFSOLANA_ppal_gtiasAd_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_gtiasAd_whenNewItemInstance");
        this.VARIABLE.UNIDAD3 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC3 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL3 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL3 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC3 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_GTIREC");
        this.VARIABLE.SOLICR_CODVOR3 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFSOLANA_ppal_gtiasAd_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //    :VARIABLE.UNIDADREC    := :CRTSOLICR.SOLICR_CODUNI;
    //    :VARIABLE.OFIRECONSID  := :CRTSOLICR.SOLICR_OFCSOL;
    //    :VARIABLE.CODORIG_REC  := :CRTSOLICR.SOLICR_CODSOL;
    //    :VARIABLE.ESTRECONS    := :CRTSOLICR.SOLICR_ESTSOL;
    //    :VARIABLE.CODRECONSID  := :CRTSOLICR.SOLICR_CODREC;
    //    :VARIABLE.OFDAVI       := :CRTSOLICR.SOLICR_OFIBANC;
    //    
    //    COMMIT_FORM;
    //    GO_BLOCK('CRTSOLICR');  
    //    GO_ITEM ('CRTSOLICR.SOLICR_OBSREC');
    //    
    //    --+PY21520. JDG. 
    //   :VARIABLE.SOLICR_CODVORD := :CRTSOLICR.SOLICR_CODVOR; 
    // 
    // END;
    //#endregion
    async CRFSOLANA_ppal_reconsid_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_ppal_reconsid_whenNewItemInstance");
        this.VARIABLE.UNIDADREC = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFIRECONSID = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODORIG_REC = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTRECONS = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.CODRECONSID = this.CRTSOLICR.SOLICR_CODREC;
        this.VARIABLE.OFDAVI = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSREC");
        this.VARIABLE.SOLICR_CODVORD = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFSOLANA_ppal_reconsid_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    // IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR THEN
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTOTERSOL1.OTERSOL_OFCSOL, :CRTOTERSOL1.OTERSOL_CODSOL, 
    //                             SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //               :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO); 
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtotersol1_postTextItem() {
        console.log("Entering CRFSOLANA_crtotersol1_postTextItem");
//         this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFSOLANA_FRM$AUDIT_SOLIC_ADD_ROW(CRTOTERSOL1.OTERSOL_OFCSOL, CRTOTERSOL1.OTERSOL_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFSOLANA_crtotersol1_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CODREC IS NULL THEN
    //  LIB$ALERTA('MENSAJE','NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_keyDelrec() {
        console.log("Entering CRFSOLANA_crtotersol1_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLANA_crtotersol1_keyDelrec");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE');
    //   --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 22 DE SEPTIEMBRE DE 2005
    //   --
    // IF :CRTSOLICR.SOLICR_ESTSOL = 'AP' AND UPPER(:SYSTEM.CURSOR_ITEM) <> 'CRTSOTERSOL1.OTERSOL_ACTJUN' THEN
    //  SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtotersol1_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtotersol1_whenNewItemInstance");
//         this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        if ((this.CRTSOLICR.SOLICR_ESTSOL == "AP" && PLSQLBuiltins.upper(this._SYSTEM_SERVICE.get("CURSOR_ITEM")) != "CRTSOTERSOL1.OTERSOL_ACTJUN")) {
            // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "UPDATE_ALLOWED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtotersol1_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLANA_crtotersol1_preQuery() {
        console.log("Entering CRFSOLANA_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLANA_crtotersol1_preQuery");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    CLEAR_BLOCK;
    // 
    //    IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //       FRM$AUDIT_SOLIC_DEL;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_keyClrblk() {
        console.log("Entering CRFSOLANA_crtotersol1_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     // CRFSOLANA_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFSOLANA_crtotersol1_keyClrblk");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 8 DE SEPTIEMBRE DE 2005
    //   --
    // 
    // EXECUTE_QUERY;
    // IF :VARIABLE.TIPO_VINCULA IN ('05','13') THEN -- ACTJUN
    //   SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_ACTJUN', "DISPLAYED", "PROPERTY_TRUE"); -- ACTJUN
    //   SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_ACTJUN', "ENABLED", "PROPERTY_TRUE"); -- ACTJUN
    //   SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_ACTJUN', "UPDATE_ALLOWED", "PROPERTY_TRUE"); -- ACTJUN
    //   SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_ACTJUN',  "INSERT_ALLOWED", "PROPERTY_TRUE"); -- ACTJUN
    //   SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_ACTJUN', QUERYABLE, "PROPERTY_TRUE"); -- ACTJUN
    // ELSE
    //   SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_ACTJUN', "DISPLAYED", "PROPERTY_FALSE"); -- ACTJUN
    // END IF; END;
    //#endregion
    async CRFSOLANA_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFSOLANA_crtotersol1_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        if (["05", "13"].indexOf(this.VARIABLE.TIPO_VINCULA) != -1) {
            this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_ACTJUN", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_ACTJUN", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_ACTJUN", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_ACTJUN", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_ACTJUN", "QUERYABLE", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_ACTJUN", "DISPLAYED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLANA_crtotersol1_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFSOLANA_crtotersol1_keyCommit() {
        console.log("Entering CRFSOLANA_crtotersol1_keyCommit");
        console.log("Exiting CRFSOLANA_crtotersol1_keyCommit");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODSOL:=:CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL:=:CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLANA_crtotersol1_preInsert() {
        console.log("Entering CRFSOLANA_crtotersol1_preInsert");
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLANA_crtotersol1_preInsert");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   ENTER_QUERY;
    // 
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_keyEntqry() {
        console.log("Entering CRFSOLANA_crtotersol1_keyEntqry");
        console.log("Exiting CRFSOLANA_crtotersol1_keyEntqry");
    }

    //#region PLSQL
    // BEGIN
    //   --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+    
    //    :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE'
    //            ,:CRTSOLICR.SOLICR_CODUNI);  --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14            
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  SET    SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //   END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_postInsert() {
        console.log("Entering CRFSOLANA_crtotersol1_postInsert");
        try {

            // if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            //     // CRFSOLANA_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, this.CRTSOLICR.SOLICR_VRFINA, this.CRTSOLICR.SOLICR_ORMONET, this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
            // }
        } catch (ex) {

            // CRFSOLANA_LIB$DTNERFRMA(SQLERRM);
        }

        console.log("Exiting CRFSOLANA_crtotersol1_postInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   RG_NAME       VARCHAR2(40)  := 'RG_AUDIT';
    //   RG_ID         RECORDGROUP; 
    //   RG_INDICE     NUMBER(3);
    // 
    // BEGIN
    // 
    //   RG_ID := FIND_GROUP( RG_NAME ); 
    //  
    //   IF NOT ID_NULL(RG_ID) THEN 
    //      RG_INDICE := GET_GROUP_ROW_COUNT( RG_ID ); 
    // 
    //      IF RG_INDICE > 0 THEN
    //         FRM$AUDIT_SOLIC_INSERT;
    //      END IF;
    //   END IF; 
    // 
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_postUpdate() {
        console.log("Entering CRFSOLANA_crtotersol1_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: null = null;
        let RG_INDICE: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        if ((!this.oracleFormsBuiltins.id_null(RG_ID))) {
            RG_INDICE = this.oracleFormsBuiltins.get_group_row_count(RG_ID);
            if (RG_INDICE > 0) {
                // CRFSOLANA_FRM$AUDIT_SOLIC_INSERT();
            }
        }
        console.log("Exiting CRFSOLANA_crtotersol1_postUpdate");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO AÚN NO CREADO. DEBE CREARLO PARA CONTINUAR .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;*/
    // NULL; END;
    //#endregion
    async CRFSOLANA_crtotersol1_postRecord() {
        console.log("Entering CRFSOLANA_crtotersol1_postRecord");
        console.log("Exiting CRFSOLANA_crtotersol1_postRecord");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTOTERSOL1.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO AÚN NO CREADO. DEBE CREARLO PARA CONTINUAR .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_postQuery() {
        console.log("Entering CRFSOLANA_crtotersol1_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_postquery_query1", payload1);
        // get values from result
        // CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFSOLANA_LIB$ALERTA("MENSAJE", "TERCERO AÚN NO CREADO. DEBE CREARLO PARA CONTINUAR .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLANA_crtotersol1_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //    IF NVL(:CRTOTERSOL1.OTERSOL_GIRDIR, 0) > 100 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE GIRO DIRECTO NO DEBE SUPERAR EL 100% ...',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtotersol1_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTOTERSOL1.OTERSOL_GIRDIR == null ? 0 : this.CRTOTERSOL1.OTERSOL_GIRDIR > 100) {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE GIRO DIRECTO NO DEBE SUPERAR EL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLANA_crtotersol1_otersolGirdir_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_EXISTE NUMBER;
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT  COUNT(9)
    //     INTO  T_EXISTE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //   IF T_EXISTE > 0 THEN
    //      SET_ITEM_PROPERTY('VARIABLE.CRTER',ENABLED,"ATTR_OFF");
    //      SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID
    //      INTO   :CRTOTERSOL1.NOMBRE, :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //   ELSIF  FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //            PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL,NULL, NULL,'T');
    //            BEGIN -- ACTJUN
    //              SELECT DECODE(TBENTIPO, 'J', TBENAPE, TBENNOM||' '||TBENAPE), TBENTIPO, TBENTID
    //              INTO   :CRTOTERSOL1.NOMBRE, :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPIDE
    //              FROM   TBEN
    //              WHERE  TBENCOD = :CRTOTERSOL1.OTERSOL_NITTER
    //              ;
    //              EXCEPTION
    //                WHEN NO_DATA_FOUND THEN
    //                  LIB$DTNERFRMA('EL TERCERO '||:CRTOTERSOL1.OTERSOL_NITTER||' NO EXISTE');
    //            END;
    //       ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //    --VALIDACION DE LISTAS RESTRICTIVAS 
    //    PVALTER(:CRTOTERSOL1.OTERSOL_NITTER);
    //  END;
    //#endregion
    async CRFSOLANA_crtotersol1_otersolNitter_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtotersol1_otersolNitter_whenValidateItem");
        let T_EXISTE: number = null;
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
        // get values from result
        T_EXISTE = result1[0].get("T_EXISTE");
        if (T_EXISTE > 0) {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_OFF");
            // construct payload
            let payload2 = new Map();
            // payload2.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_otersolnitter_whenvalidateitem_query2", payload2);
            // get values from result
            // CRTOTERSOL1.NOMBRE = result2[0].get("CRTOTERSOL1.NOMBRE");
            // CRTOTERSOL1.OTERSOL_TIPPER = result2[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            // CRTOTERSOL1.OTERSOL_TIPIDE = result2[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
        }
        // else if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
        //     // CRFSOLANA_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "T");
        //     // construct payload
        //     let payload3 = new Map();
        //     // payload3.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
        //     // call REST API
        //     const result3 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_otersolnitter_whenvalidateitem_query3", payload3);
        //     // get values from result
        //     // CRTOTERSOL1.NOMBRE = result3[0].get("CRTOTERSOL1.NOMBRE");
        //     // CRTOTERSOL1.OTERSOL_TIPPER = result3[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
        //     // CRTOTERSOL1.OTERSOL_TIPIDE = result3[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
        //     if (result3 == null || result3.length == 0) {

        //         // CRFSOLANA_LIB$DTNERFRMA("EL TERCERO " + CRTOTERSOL1.OTERSOL_NITTER + " NO EXISTE");
        //     }

        // }
        else {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLANA_PVALTER(CRTOTERSOL1.OTERSOL_NITTER);
        console.log("Exiting CRFSOLANA_crtotersol1_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  T_EXISTE  NUMBER;
    //  T_RESPUESTA    NUMBER;
    // 
    // BEGIN
    // 
    //   IF :CRTOTERSOL1.OTERSOL_NITTER IS NULL THEN
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO.',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    //   SELECT  COUNT(9)
    //     INTO  T_EXISTE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    // 
    //   IF T_EXISTE > 0 THEN
    //      SELECT   TBENAPE||' '||TBENNOM
    //      INTO   :CRTOTERSOL1.NOMBRE
    //      FROM   TBEN
    //      WHERE  (TBENCOD = :CRTOTERSOL1.OTERSOL_NITTER);
    // 
    //      SET_ITEM_PROPERTY('CRTER', "ENABLED", "ATTR_OFF");
    // 
    //   ELSE
    //      LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO ..',NULL,NULL,NULL, T_RESPUESTA);
    //      :CRTOTERSOL1.OTERSOL_TIPPER  := NULL;
    //      :CRTOTERSOL1.OTERSOL_TIPIDE  := NULL;
    //      :CRTOTERSOL1.NOMBRE    := NULL;
    //      SET_ITEM_PROPERTY('CRTER',"ENABLED", "ATTR_ON");
    //   END IF;   
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_otersolNitter_whenvalidateitem() {
        console.log("Entering CRFSOLANA_crtotersol1_otersolNitter_whenvalidateitem");
        let T_EXISTE: number = null;
        let T_RESPUESTA: number = null;
        // if ((CRTOTERSOL1.OTERSOL_NITTER == null)) {
        //     // CRFSOLANA_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO.", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // construct payload
        let payload1 = new Map();
        // payload1.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
        // get values from result
        T_EXISTE = result1[0].get("T_EXISTE");
        if (T_EXISTE > 0) {
            // construct payload
            let payload2 = new Map();
            // payload2.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_otersolnitter_whenvalidateitem_query2", payload2);
            // get values from result
            // CRTOTERSOL1.NOMBRE = result2[0].get("CRTOTERSOL1.NOMBRE");
            this.oracleFormsBuiltins.set_item_property("CRTER", "ENABLED", "ATTR_OFF");
        }
        else {
            // CRFSOLANA_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO ..", null, null, null, T_RESPUESTA);
            this.CRTOTERSOL1.OTERSOL_TIPPER = null;
            this.CRTOTERSOL1.OTERSOL_TIPIDE = null;
            this.CRTOTERSOL1.NOMBRE = null;
            this.oracleFormsBuiltins.set_item_property("CRTER", "ENABLED", "ATTR_ON");
        }
        console.log("Exiting CRFSOLANA_crtotersol1_otersolNitter_whenvalidateitem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLANA_crtotersol1_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_crtotersol1_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLANA_crtotersol1_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //      MSG_ALERT('TERCERO INEXISTENTE. DEBE CREARLO  .....','I',FALSE);
    //  END;
    //#endregion
    async CRFSOLANA_crtotersol1_otersolTipper_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtotersol1_otersolTipper_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolana_crtotersol1/crfsolana_crtotersol1_otersoltipper_whenvalidateitem_query1", payload1);
        // get values from result
        // CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFSOLANA_MSG_ALERT("TERCERO INEXISTENTE. DEBE CREARLO  .....", "I", FALSE);
        }

        console.log("Exiting CRFSOLANA_crtotersol1_otersolTipper_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VTER TER%ROWTYPE;
    // BEGIN
    //   IF :CRTOTERSOL1.OTERSOL_TIPPER IS NULL AND :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    //     BEGIN
    //       PQBD_SEG_TER.PTER(:CRTOTERSOL1.OTERSOL_NITTER, VTER);
    //       :CRTOTERSOL1.OTERSOL_TIPIDE := VTER.TERTID;
    //       :CRTOTERSOL1.OTERSOL_TIPPER := VTER.TERPER;
    //       IF VTER.TERPER = 'J' THEN
    //        :CRTOTERSOL1.NOMBRE := VTER.TERAPE;
    //       ELSE
    //        :CRTOTERSOL1.NOMBRE := VTER.TERNOM||' '||VTER.TERAPE;
    //       END IF;
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //           LIB$DTNERFRMA('EL TERCERO '||:CRTOTERSOL1.OTERSOL_NITTER||' NO EXISTE');
    //     END;
    //   END IF;
    //   --
    //   IF NVL(:CRTOTERSOL1.OTERSOL_TIPPER,'N') <> 'J' THEN
    //    IF NVL(:CRTOTERSOL1.OTERSOL_ACTJUN,'N') = 'S' THEN
    //     LIB$DTNERFRMA('EL ACTA DE JUNTA SÓLO PUEDE SER EXIGIDA A PERSONAS JURÍDICAS');
    //    END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLANA_crtotersol1_otersolActjun_whenValidateItem() {
        console.log("Entering CRFSOLANA_crtotersol1_otersolActjun_whenValidateItem");
        let VTER: null = null;
        // if (((CRTOTERSOL1.OTERSOL_TIPPER == null) && (CRTOTERSOL1.OTERSOL_NITTER != null))) {
        //     // CRFSOLANA_PQBD_SEG_TER.PTER(CRTOTERSOL1.OTERSOL_NITTER, VTER);
        //     this.CRTOTERSOL1.OTERSOL_TIPIDE = VTER.TERTID;
        //     this.CRTOTERSOL1.OTERSOL_TIPPER = VTER.TERPER;
        //     if (VTER.TERPER == "J") {
        //         this.CRTOTERSOL1.NOMBRE = VTER.TERAPE;
        //     }
        //     else {
        //         this.CRTOTERSOL1.NOMBRE = VTER.TERNOM + " " + VTER.TERAPE;
        //     }
        //     if (result0 == null || result0.length == 0) {

        //         // CRFSOLANA_LIB$DTNERFRMA("EL TERCERO " + CRTOTERSOL1.OTERSOL_NITTER + " NO EXISTE");
        //     }

        // }
        // if (CRTOTERSOL1.OTERSOL_TIPPER == null ? "N" : CRTOTERSOL1.OTERSOL_TIPPER != "J") {
        //     if (CRTOTERSOL1.OTERSOL_ACTJUN == null ? "N" : CRTOTERSOL1.OTERSOL_ACTJUN == "S") {
        //         // CRFSOLANA_LIB$DTNERFRMA("EL ACTA DE JUNTA SÓLO PUEDE SER EXIGIDA A PERSONAS JURÍDICAS");
        //     }
        // }
        console.log("Exiting CRFSOLANA_crtotersol1_otersolActjun_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFSOLANA_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSOLANA_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFSOLANA_base_fecha_whenNewItemInstance");
    }

}

