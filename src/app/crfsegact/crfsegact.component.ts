import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSEGACT business logic
import {
    COTUVPSDV,
    TOOLBAR,
    BASE
} from "./CRFSEGACT_models";



// class CRFSEGACT
@Component({
    selector: 'app-crfsegact',
    templateUrl: './crfsegact.component.html',
})
export class CrfsegactComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTUVPSDV: COTUVPSDV = new COTUVPSDV();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     LIST_VALUES;
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFSEGACT.FORM.WHEN-MOUSE-DOUBLECLICK. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSEGACT', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async CRFSEGACT_whenMouseDoubleclick() {
        console.log("Entering CRFSEGACT_whenMouseDoubleclick");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.list_values();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            // V_MENSAJE = "FALLO. " + "CRFSEGACT.FORM.WHEN-MOUSE-DOUBLECLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            // CRFSEGACT_PBD_SEG_MSGERR("CRFSEGACT", V_MENSAJE);
            // CRFSEGACT_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting CRFSEGACT_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     MENSAJE_ERRORES;
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFSEGACT.FORM.ON-ERROR. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSEGACT', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async CRFSEGACT_onError() {
        console.log("Entering CRFSEGACT_onError");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSEGACT_MENSAJE_ERRORES();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            // V_MENSAJE = "FALLO. " + "CRFSEGACT.FORM.ON-ERROR. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            // CRFSEGACT_PBD_SEG_MSGERR("CRFSEGACT", V_MENSAJE);
            // CRFSEGACT_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting CRFSEGACT_onError");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     MENSAJE_INFORMATIVOS;
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFSEGACT.FORM.ON-MESSAGE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSEGACT', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;  
    //#endregion
    async CRFSEGACT_onMessage() {
        console.log("Entering CRFSEGACT_onMessage");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSEGACT_MENSAJE_INFORMATIVOS();
        } catch (ex) {

            //     if (this.oracleFormsBuiltins.error_code != 0) {
            //         V_MENSAJE = "FALLO. " + "CRFSEGACT.FORM.ON-MESSAGE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //         CRFSEGACT_PBD_SEG_MSGERR("CRFSEGACT", V_MENSAJE);
            //         CRFSEGACT_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //     }
        }

        console.log("Exiting CRFSEGACT_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFSEGACT_preForm() {
        console.log("Entering CRFSEGACT_preForm");
        // CRFSEGACT_PANTALLA();
        // CRFSEGACT_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFSEGACT_preForm");
    }

    //#region PLSQL
    // REF$WHEN_NEW_FORM_INSTANCE;
    // 
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 );
    //    
    // BEGIN
    // 
    //    PINICIAR;
    //   
    //    GO_BLOCK( 'COTUVPSDV' );
    //     EXECUTE_QUERY();
    //    
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFSEGACT.FORM.WHEN-NEW-FORM-INSTANCE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSEGACT', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async CRFSEGACT_whenNewFormInstance() {
        console.log("Entering CRFSEGACT_whenNewFormInstance");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSEGACT_PINICIAR();
            this.oracleFormsBuiltins.go_block("COTUVPSDV");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            //     if (this.oracleFormsBuiltins.error_code != 0) {
            //         V_MENSAJE = "FALLO. " + "CRFSEGACT.FORM.WHEN-NEW-FORM-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //         CRFSEGACT_PBD_SEG_MSGERR("CRFSEGACT", V_MENSAJE);
            //         CRFSEGACT_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //     }
        }

        console.log("Exiting CRFSEGACT_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTEVOR           NUMBER;
    //     V_EXISTESIGLEASE       NUMBER;
    //    
    // BEGIN
    // 
    //     SELECT COUNT( * )
    //       INTO V_EXISTEVOR
    //       FROM COTUVPCCV
    //      WHERE UVPCCV_CODUNI = :COTUVPSDV.UVPSDV_CODUNI
    //        AND UVPCCV_SEDEVE = :COTUVPSDV.UVPSDV_CODIGO;
    //        
    //     SELECT COUNT( * )
    //       INTO V_EXISTESIGLEASE
    //       FROM CRTSOLICR
    //      WHERE SOLICR_CODUNI = :COTUVPSDV.UVPSDV_CODUNI
    //        AND SOLICR_COSEAC = :COTUVPSDV.UVPSDV_CODIGO;
    //     
    //     IF V_EXISTEVOR <> 0 THEN
    //      
    //      LIB$ALERTA( 'MENSAJE', 'EL CÓDIGO ' || :COTUVPSDV.UVPSDV_CODUNI || ' NO SE PUEDE ELIMINAR DE LA PARAMÉTRICA PORQUE EXISTEN REGISTROS EN VOR QUE LO REFERENCIAN.', 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //      
    //     ELSIF V_EXISTESIGLEASE <> 0 THEN
    //      
    //      LIB$ALERTA( 'MENSAJE', 'EL CÓDIGO ' || :COTUVPSDV.UVPSDV_CODUNI || ' NO SE PUEDE ELIMINAR DE LA PARAMÉTRICA PORQUE EXISTEN REGISTROS EN SIGLEASE QUE LO REFERENCIAN.', 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //      
    //     ELSE 
    //      
    //      DELETE_RECORD;
    //      
    //     END IF; 
    // 
    // EXCEPTION
    //      
    //   WHEN OTHERS THEN
    //   
    //    IF ( ERROR_CODE  <> 0 ) THEN
    //         
    //      V_MENSAJE := 'FALLO. '
    //                  || 'CRFSEGACT.COTUVPSDV.KEY-DELREC. '
    //                  || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                  || 'SQLERRM ' || SQLERRM;
    //                   
    //       PBD_SEG_MSGERR( 'CRFSEGACT', V_MENSAJE );                   
    //                   
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //   END IF;   
    //                  
    // END;
    //#endregion
    async CRFSEGACT_cotuvpsdv_keyDelrec() {
        console.log("Entering CRFSEGACT_cotuvpsdv_keyDelrec");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTEVOR: number = null;
        let V_EXISTESIGLEASE: number = null;
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("UVPSDV_CODUNI", this.COTUVPSDV.UVPSDV_CODUNI);
            payload1.set("UVPSDV_CODIGO", this.COTUVPSDV.UVPSDV_CODIGO);
            // call REST API
            const result1 = await Rest.post("/crfsegact_cotuvpsdv/crfsegact_cotuvpsdv_keydelrec_query1", payload1);
            // get values from result
            V_EXISTEVOR = result1[0].get("V_EXISTEVOR");
            // construct payload
            let payload2 = new Map();
            payload2.set("UVPSDV_CODUNI", this.COTUVPSDV.UVPSDV_CODUNI);
            payload2.set("UVPSDV_CODIGO", this.COTUVPSDV.UVPSDV_CODIGO);
            // call REST API
            const result2 = await Rest.post("/crfsegact_cotuvpsdv/crfsegact_cotuvpsdv_keydelrec_query2", payload2);
            // get values from result
            V_EXISTESIGLEASE = result2[0].get("V_EXISTESIGLEASE");
            if (V_EXISTEVOR != 0) {
                // CRFSEGACT_LIB$ALERTA("MENSAJE", "EL CÓDIGO " + this.COTUVPSDV.UVPSDV_CODUNI + " NO SE PUEDE ELIMINAR DE LA PARAMÉTRICA PORQUE EXISTEN REGISTROS EN VOR QUE LO REFERENCIAN.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else if (V_EXISTESIGLEASE != 0) {
                // CRFSEGACT_LIB$ALERTA("MENSAJE", "EL CÓDIGO " + this.COTUVPSDV.UVPSDV_CODUNI + " NO SE PUEDE ELIMINAR DE LA PARAMÉTRICA PORQUE EXISTEN REGISTROS EN SIGLEASE QUE LO REFERENCIAN.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                this.oracleFormsBuiltins.delete_record();
            }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "CRFSEGACT.COTUVPSDV.KEY-DELREC. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     CRFSEGACT_PBD_SEG_MSGERR("CRFSEGACT", V_MENSAJE);
            //     CRFSEGACT_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting CRFSEGACT_cotuvpsdv_keyDelrec");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //    
    // BEGIN
    // 
    //     NEXT_RECORD;
    //      
    // EXCEPTION
    //      
    //   WHEN OTHERS THEN
    //   
    //    IF ( ERROR_CODE  <> 0 ) THEN
    //         
    //      V_MENSAJE := 'FALLO. '
    //                  || 'CRFSEGACT.COTUVPSDV.UVPSDV_LINNEG.KEY-NEXT-ITEM '
    //                  || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                  || 'SQLERRM ' || SQLERRM;
    //                   
    //       PBD_SEG_MSGERR( 'CRFSEGACT', V_MENSAJE );                   
    //                   
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //   END IF;   
    //                  
    // END;
    //#endregion
    async CRFSEGACT_cotuvpsdv_uvpsdvLinneg_keyNextItem() {
        console.log("Entering CRFSEGACT_cotuvpsdv_uvpsdvLinneg_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.next_record();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "CRFSEGACT.COTUVPSDV.UVPSDV_LINNEG.KEY-NEXT-ITEM " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     CRFSEGACT_PBD_SEG_MSGERR("CRFSEGACT", V_MENSAJE);
            //     CRFSEGACT_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting CRFSEGACT_cotuvpsdv_uvpsdvLinneg_keyNextItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFSEGACT_toolbar_whenButtonPressed() {
        console.log("Entering CRFSEGACT_toolbar_whenButtonPressed");
        // CRFSEGACT_TOOLBAR_ACTIONS();
        console.log("Exiting CRFSEGACT_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFSEGACT_toolbar_whenMouseLeave() {
        console.log("Entering CRFSEGACT_toolbar_whenMouseLeave");
        // CRFSEGACT_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFSEGACT_toolbar_whenMouseLeave");
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
    async CRFSEGACT_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSEGACT_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFSEGACT_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFSEGACT_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSEGACT_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFSEGACT_base_fecha_whenNewItemInstance");
    }

}

