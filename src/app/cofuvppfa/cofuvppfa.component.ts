import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFUVPPFA business logic
import {
    COTUVPCAM,
    COTUVPAAM,
    TOOLBAR,
    BASE
} from "./COFUVPPFA_models";



// class COFUVPPFA
@Component({
    selector: 'app-cofuvppfa',
    templateUrl: './cofuvppfa.component.html',
})
export class CofuvppfaComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTUVPCAM: COTUVPCAM = new COTUVPCAM();
    public COTUVPAAM: COTUVPAAM = new COTUVPAAM();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // DECLARE
    // V_MENSAJE    VARCHAR2(500);
    // T_RESPUESTA  NUMBER; 
    // BEGIN
    // 
    //     IF ( :SYSTEM.TAB_NEW_PAGE = 'RANGOS_ATRIBUCION' ) THEN
    //       :GLOBAL.SELECTED_TAB_PAGE := 'RANGOS_ATRIBUCION';   
    //       GO_BLOCK( 'COTUVPAAM' );
    //       EXECUTE_QUERY();
    //     GO_ITEM( 'COTUVPAAM.UVPAAM_CODUNI' );
    //     
    //       
    //   ELSIF ( :SYSTEM.TAB_NEW_PAGE = 'RELACION_RANGOS_CARGO' ) THEN
    //       :GLOBAL.SELECTED_TAB_PAGE := 'RELACION_RANGOS_CARGO';   
    //       GO_BLOCK( 'COTUVPCAM' );
    //       EXECUTE_QUERY();
    //       GO_ITEM( 'COTUVPCAM.UVPCAM_CODUNI' );
    //      
    //     END IF;
    //    
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //        V_MENSAJE := 'FALLO. '
    //                     || 'COFUVPPFA.FORM.WHEN_TAB_PAGE_CHANGED. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'COFUVPPFA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    // 
    // 
    // END;
    //#endregion
    async COFUVPPFA_whenTabPageChanged() {
        console.log("Entering COFUVPPFA_whenTabPageChanged");
        let V_MENSAJE: string = null;
        let T_RESPUESTA: number = null;
        try {

            if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "RANGOS_ATRIBUCION") {
                // this.GLOBAL.SELECTED_TAB_PAGE = "RANGOS_ATRIBUCION";
                this.oracleFormsBuiltins.go_block("COTUVPAAM");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_item("COTUVPAAM.UVPAAM_CODUNI");
            }
            else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "RELACION_RANGOS_CARGO") {
                // this.GLOBAL.SELECTED_TAB_PAGE = "RELACION_RANGOS_CARGO";
                this.oracleFormsBuiltins.go_block("COTUVPCAM");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_item("COTUVPCAM.UVPCAM_CODUNI");
            }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            // V_MENSAJE = "FALLO. " + "COFUVPPFA.FORM.WHEN_TAB_PAGE_CHANGED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            // COFUVPPFA_PBD_SEG_MSGERR("COFUVPPFA", V_MENSAJE);
            // COFUVPPFA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting COFUVPPFA_whenTabPageChanged");
    }

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
    //                     || 'COFUVPPFA.FORM.WHEN-MOUSE-DOUBLECLICK. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'COFUVPPFA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async COFUVPPFA_whenMouseDoubleclick() {
        console.log("Entering COFUVPPFA_whenMouseDoubleclick");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.list_values();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            // V_MENSAJE = "FALLO. " + "COFUVPPFA.FORM.WHEN-MOUSE-DOUBLECLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            // COFUVPPFA_PBD_SEG_MSGERR("COFUVPPFA", V_MENSAJE);
            // COFUVPPFA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting COFUVPPFA_whenMouseDoubleclick");
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
    //                     || 'COFUVPPFA.FORM.ON-ERROR. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'COFUVPPFA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async COFUVPPFA_onError() {
        console.log("Entering COFUVPPFA_onError");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // COFUVPPFA_MENSAJE_ERRORES();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "COFUVPPFA.FORM.ON-ERROR. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     COFUVPPFA_PBD_SEG_MSGERR("COFUVPPFA", V_MENSAJE);
            //     COFUVPPFA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting COFUVPPFA_onError");
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
    //                     || 'COFUVPPFA.FORM.ON-MESSAGE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'COFUVPPFA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;  
    //#endregion
    async COFUVPPFA_onMessage() {
        console.log("Entering COFUVPPFA_onMessage");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // COFUVPPFA_MENSAJE_INFORMATIVOS();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "COFUVPPFA.FORM.ON-MESSAGE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     COFUVPPFA_PBD_SEG_MSGERR("COFUVPPFA", V_MENSAJE);
            //     COFUVPPFA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting COFUVPPFA_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //    PANTALLA;
    //    PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async COFUVPPFA_preForm() {
        console.log("Entering COFUVPPFA_preForm");
        // COFUVPPFA_PANTALLA();
        // COFUVPPFA_PINCIARSGRDADOFCNAS();
        console.log("Exiting COFUVPPFA_preForm");
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
    //    GO_BLOCK( 'COTUVPAAM' );
    //    EXECUTE_QUERY();
    //    
    //   
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'COFUVPPFA.FORM.WHEN-NEW-FORM-INSTANCE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'COFUVPPFA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async COFUVPPFA_whenNewFormInstance() {
        console.log("Entering COFUVPPFA_whenNewFormInstance");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // COFUVPPFA_PINICIAR();
            this.oracleFormsBuiltins.go_block("COTUVPAAM");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "COFUVPPFA.FORM.WHEN-NEW-FORM-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     COFUVPPFA_PBD_SEG_MSGERR("COFUVPPFA", V_MENSAJE);
            //     COFUVPPFA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting COFUVPPFA_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //    
    // BEGIN
    // 
    //     :COTUVPCAM.UVPCAM_CODCAR := UPPER( :COTUVPCAM.UVPCAM_CODCAR );
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'COFUVPPFA.COTUVPCAM.UVPCAM_CODCAR.WHEN-VALIDATE-ITEM. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'COFUVPPFA', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async COFUVPPFA_cotuvpcam_uvpcamCodcar_whenValidateItem() {
        console.log("Entering COFUVPPFA_cotuvpcam_uvpcamCodcar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.COTUVPCAM.UVPCAM_CODCAR = PLSQLBuiltins.upper(this.COTUVPCAM.UVPCAM_CODCAR);
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "COFUVPPFA.COTUVPCAM.UVPCAM_CODCAR.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     COFUVPPFA_PBD_SEG_MSGERR("COFUVPPFA", V_MENSAJE);
            //     COFUVPPFA_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting COFUVPPFA_cotuvpcam_uvpcamCodcar_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async COFUVPPFA_toolbar_whenButtonPressed() {
        console.log("Entering COFUVPPFA_toolbar_whenButtonPressed");
        // COFUVPPFA_TOOLBAR_ACTIONS();
        console.log("Exiting COFUVPPFA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async COFUVPPFA_toolbar_whenMouseLeave() {
        console.log("Entering COFUVPPFA_toolbar_whenMouseLeave");
        // COFUVPPFA_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting COFUVPPFA_toolbar_whenMouseLeave");
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
    async COFUVPPFA_toolbar_whenNewFormInstance() {
        console.log("Entering COFUVPPFA_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting COFUVPPFA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async COFUVPPFA_base_fecha_whenNewItemInstance() {
        console.log("Entering COFUVPPFA_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting COFUVPPFA_base_fecha_whenNewItemInstance");
    }

}

