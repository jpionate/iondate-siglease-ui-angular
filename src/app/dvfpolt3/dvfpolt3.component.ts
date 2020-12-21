import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace DVFPOLT3 business logic
import {
    COTGETCO,
    FILTRO,
    PROCESO,
    COTGETOP,
    SETERRORES,
    TOOLBAR,
    BASE
} from "./DVFPOLT3_models";



// class DVFPOLT3
@Component({
    selector: 'app-dvfpolt',
    templateUrl: './dvfpolt.component.html',
})
export class DvfpoltComponent3 {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_CAMBIO', 'N'],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTGETCO: COTGETCO = new COTGETCO();
    public FILTRO: FILTRO = new FILTRO();
    public PROCESO: PROCESO = new PROCESO();
    public COTGETOP: COTGETOP = new COTGETOP();
    public SETERRORES: SETERRORES = new SETERRORES();
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
    //     IF ( SYSTEM.FORM_STATUS <> 'QUERY' ) THEN
    //      
    //       IF ( :this.PARAMETER.get("P_CAMBIO") = 'S' ) THEN
    //       
    //         :this.PARAMETER.get("P_CAMBIO") := 'N';
    //         
    //         IF ( :GLOBAL.SELECTED_TAB_PAGE = 'CARGUE_INFORMACION' ) THEN
    //           
    //             V_MENSAJE := 'CAMBIOS REALIZADOS A LOS GRUPOS ECONÓMICOS TOP 30 CONFIRMADOS EN SIGLEASE.';
    //         
    //         ELSIF ( :GLOBAL.SELECTED_TAB_PAGE = 'CONTROL_SOLICITUDES' ) THEN   
    //                            
    //           V_MENSAJE := 'TODOS LOS CAMBIOS REALIZADOS A LOS ESTADOS DE BLOQUEO DE LAS SOLICITUDES MODIFICADAS HASTA EL MOMENTO HAN SIDO CONFIRMADOS EN SIGLEASE.';
    //           
    //       END IF;    
    //       
    //       PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //                              
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //       
    //       END IF;  
    //       
    //   END IF;    
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FORM.POST-DATABASE-COMMIT. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END; 
    //#endregion
    async DVFPOLT3_postDatabaseCommit() {
        console.log("Entering DVFPOLT3_postDatabaseCommit");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // if (SYSTEM.FORM_STATUS != "QUERY") {
            //     if (this.PARAMETER.get("P_CAMBIO") == "S") {
            //         this.PARAMETER.get("P_CAMBIO") = "N";
            //         if (GLOBAL.SELECTED_TAB_PAGE == "CARGUE_INFORMACION") {
            //             V_MENSAJE = "CAMBIOS REALIZADOS A LOS GRUPOS ECONÓMICOS TOP 30 CONFIRMADOS EN SIGLEASE.";
            //         }
            //         else if (GLOBAL.SELECTED_TAB_PAGE == "CONTROL_SOLICITUDES") {
            //             V_MENSAJE = "TODOS LOS CAMBIOS REALIZADOS A LOS ESTADOS DE BLOQUEO DE LAS SOLICITUDES MODIFICADAS HASTA EL MOMENTO HAN SIDO CONFIRMADOS EN SIGLEASE.";
            //         }
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //         DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //     }
            // }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.POST-DATABASE-COMMIT. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_postDatabaseCommit");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     IF ( SYSTEM.TAB_NEW_PAGE = 'CONTROL_SOLICITUDES' ) THEN
    // 
    //       :GLOBAL.SELECTED_TAB_PAGE := 'CONTROL_SOLICITUDES';     
    //        GO_BLOCK( 'COTGETCO' );
    //       EXECUTE_QUERY;
    //       
    //     ELSIF ( SYSTEM.TAB_NEW_PAGE = 'CARGUE_INFORMACION' ) THEN
    // 
    //      :GLOBAL.SELECTED_TAB_PAGE := 'CARGUE_INFORMACION';     
    //       GO_BLOCK( 'COTGETOP' );
    //      EXECUTE_QUERY;
    //     
    //     END IF;
    // 
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FORM.WHEN-TAB-PAGE-CHANGED. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END; 
    //#endregion
    async DVFPOLT3_whenTabPageChanged() {
        console.log("Entering DVFPOLT3_whenTabPageChanged");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // if (SYSTEM.TAB_NEW_PAGE == "CONTROL_SOLICITUDES") {
            //     this.GLOBAL.SELECTED_TAB_PAGE = "CONTROL_SOLICITUDES";
            //     this.oracleFormsBuiltins.go_block("COTGETCO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else if (SYSTEM.TAB_NEW_PAGE == "CARGUE_INFORMACION") {
            //     this.GLOBAL.SELECTED_TAB_PAGE = "CARGUE_INFORMACION";
            //     this.oracleFormsBuiltins.go_block("COTGETOP");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.WHEN-TAB-PAGE-CHANGED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_whenTabPageChanged");
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
    //                     || 'DVFPOLT3.FORM.WHEN-MOUSE-DOUBLECLICK. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async DVFPOLT3_whenMouseDoubleclick() {
        console.log("Entering DVFPOLT3_whenMouseDoubleclick");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.list_values();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.WHEN-MOUSE-DOUBLECLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_whenMouseDoubleclick");
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
    //                     || 'DVFPOLT3.FORM.ON-ERROR. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async DVFPOLT3_onError() {
        console.log("Entering DVFPOLT3_onError");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // DVFPOLT3_MENSAJE_ERRORES();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.ON-ERROR. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_onError");
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
    //                     || 'DVFPOLT3.FORM.ON-MESSAGE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;  
    //#endregion
    async DVFPOLT3_onMessage() {
        console.log("Entering DVFPOLT3_onMessage");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // DVFPOLT3_MENSAJE_INFORMATIVOS();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.ON-MESSAGE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_onMessage");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     PANTALLA;
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FORM.PRE-FORM. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END; 
    //#endregion
    async DVFPOLT3_preForm() {
        console.log("Entering DVFPOLT3_preForm");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // DVFPOLT3_PANTALLA();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.PRE-FORM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_preForm");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 );
    //    V_USU_CARGO_N         SGUSUARIOS.USU_CARGO_N%TYPE; 
    //    
    // BEGIN
    // 
    //     PINICIAR;
    //     :FILTRO.TXT_RUTA := '\\SERVAPL3\COMPARTIDO\GRUPO_ECONOMICOS_' 
    //                || TO_CHAR(SYSDATE, 'YYYYMMDD')
    //                || '.TXT';
    // 
    //   SET_TAB_PAGE_PROPERTY( 'CARGUE_INFORMACION' , "VISIBLE", "PROPERTY_TRUE" );
    //     GO_BLOCK( 'COTGETOP' );
    //     EXECUTE_QUERY;
    //     
    //     SET_TAB_PAGE_PROPERTY( 'CONTROL_SOLICITUDES' , "VISIBLE", "PROPERTY_TRUE" );
    //     GO_BLOCK( 'COTGETCO' );
    //   EXECUTE_QUERY;
    //   
    //   DEFAULT_VALUE( 'CONTROL_SOLICITUDES', 'GLOBAL.SELECTED_TAB_PAGE' );
    //   
    //   V_USU_CARGO_N := FBDPOLOBTENERROLUSUARIO; 
    //   
    //     IF V_USU_CARGO_N NOT IN ( 'SUUS','JECR','COCR', 'ANCR', 'ANMC', 'JEOP', 'JENE' ) THEN
    //    
    //      V_MENSAJE := 'SU ROL DE USUARIO NO LE PERMITE ACCEDER A LA FORMA DE GRUPOS ECONÓMICOS TOP 30. ';
    //                     
    //       PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE || 'USUARIO: ' || USER || '. ROL: ' || V_USU_CARGO_N );                   
    //                     
    //     LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //     
    //     EXIT_FORM( NO_COMMIT, FULL_ROLLBACK );
    //   
    //   END IF;
    // 
    //   IF V_USU_CARGO_N IN ( 'SUUS', 'JECR', 'COCR' ) THEN
    //    
    //    DEFAULT_VALUE( 'R+X', 'GLOBAL.CONTROL_SOLICITUDES' );
    //    DEFAULT_VALUE( 'R+X', 'GLOBAL.CARGUE_INFORMACION' );
    // 
    //   ELSIF V_USU_CARGO_N IN ( 'JEOP', 'JENE' ) THEN 
    //    
    //    DEFAULT_VALUE( 'R+X', 'GLOBAL.CONTROL_SOLICITUDES' );
    //    DEFAULT_VALUE( 'R', 'GLOBAL.CARGUE_INFORMACION' );
    //      
    //   ELSIF V_USU_CARGO_N IN ('ANCR') THEN
    //    
    //    DEFAULT_VALUE( 'R', 'GLOBAL.CONTROL_SOLICITUDES' );
    //    DEFAULT_VALUE( 'R+X', 'GLOBAL.CARGUE_INFORMACION' );
    //    
    //   ELSIF V_USU_CARGO_N IN ('ANMC') THEN
    //    
    //    DEFAULT_VALUE( 'R', 'GLOBAL.CONTROL_SOLICITUDES' );
    //    DEFAULT_VALUE( 'R', 'GLOBAL.CARGUE_INFORMACION' );   
    // 
    //   END IF;
    //   
    //   IF INSTR( :GLOBAL.CONTROL_SOLICITUDES , 'X' ) = 0 THEN
    //    
    //      V_MENSAJE := FFDESACTIVARITEMSFORMA( 'COTGETCO.CHK_ESTBLQ', "PROPERTY_FALSE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN
    //       
    //       PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //      END IF; 
    //      
    //   ELSE
    //    
    //      V_MENSAJE := FFDESACTIVARITEMSFORMA( 'COTGETCO.CHK_ESTBLQ', "PROPERTY_TRUE" );
    //      
    //     IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN
    //       
    //        PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //      END IF; 
    //      
    //   END IF; 
    //   
    //   IF INSTR( :GLOBAL.CARGUE_INFORMACION , 'X' ) = 0  THEN
    //    
    //      V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.TXT_RUTA', "PROPERTY_FALSE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN
    //       
    //        PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //      END IF; 
    //       
    //      V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.CARGAR', "PROPERTY_FALSE" );
    //       
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN  
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //     END IF;
    //     
    //     V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.BTN_ABRE', "PROPERTY_FALSE" );
    //       
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN  
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //     END IF;
    //     
    //     V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.BTN_ERRORES', "PROPERTY_FALSE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN  
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //      END IF;
    //           
    //    ELSE
    //    
    //      V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.TXT_RUTA', "PROPERTY_TRUE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //      END IF; 
    //      
    //      V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.CARGAR', "PROPERTY_TRUE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //       END IF;
    //       
    //       V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.BTN_ABRE', "PROPERTY_TRUE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN  
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //     END IF;
    //     
    //     V_MENSAJE := FFDESACTIVARITEMSFORMA( 'FILTRO.BTN_ERRORES', "PROPERTY_TRUE" );
    //      
    //      IF INSTR( V_MENSAJE, 'EXITO' ) = 0 THEN  
    //       
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //      
    //      END IF;
    // 
    //   END IF; 
    //    
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FORM.WHEN-NEW-FORM-INSTANCE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END; 
    //#endregion
    async DVFPOLT3_whenNewFormInstance() {
        console.log("Entering DVFPOLT3_whenNewFormInstance");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_USU_CARGO_N: null = null;
        try {

            // DVFPOLT3_PINICIAR();
            this.FILTRO.TXT_RUTA = "\\SERVAPL3\COMPARTIDO\GRUPO_ECONOMICOS_" + PLSQLBuiltins.sysdate().toString() + ".TXT";
            // this.oracleFormsBuiltins.set_tab_page_property("CARGUE_INFORMACION", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.go_block("COTGETOP");
            this.oracleFormsBuiltins.execute_query();
            // this.oracleFormsBuiltins.set_tab_page_property("CONTROL_SOLICITUDES", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.go_block("COTGETCO");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.default_value("CONTROL_SOLICITUDES", "GLOBAL.SELECTED_TAB_PAGE");
            // V_USU_CARGO_N = FBDPOLOBTENERROLUSUARIO;
            if (["SUUS", "JECR", "COCR", "ANCR", "ANMC", "JEOP", "JENE"].indexOf(V_USU_CARGO_N) != -1) {
                V_MENSAJE = "SU ROL DE USUARIO NO LE PERMITE ACCEDER A LA FORMA DE GRUPOS ECONÓMICOS TOP 30. ";
                // DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE + "USUARIO: " + USER + ". ROL: " + V_USU_CARGO_N);
                // DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                // this.oracleFormsBuiltins.exit_form(NO_COMMIT, FULL_ROLLBACK);
            }
            if (["SUUS", "JECR", "COCR"].indexOf(V_USU_CARGO_N) != -1) {
                this.oracleFormsBuiltins.default_value("R+X", "GLOBAL.CONTROL_SOLICITUDES");
                this.oracleFormsBuiltins.default_value("R+X", "GLOBAL.CARGUE_INFORMACION");
            }
            else if (["JEOP", "JENE"].indexOf(V_USU_CARGO_N) != -1) {
                this.oracleFormsBuiltins.default_value("R+X", "GLOBAL.CONTROL_SOLICITUDES");
                this.oracleFormsBuiltins.default_value("R", "GLOBAL.CARGUE_INFORMACION");
            }
            else if (["ANCR"].indexOf(V_USU_CARGO_N) != -1) {
                this.oracleFormsBuiltins.default_value("R", "GLOBAL.CONTROL_SOLICITUDES");
                this.oracleFormsBuiltins.default_value("R+X", "GLOBAL.CARGUE_INFORMACION");
            }
            else if (["ANMC"].indexOf(V_USU_CARGO_N) != -1) {
                this.oracleFormsBuiltins.default_value("R", "GLOBAL.CONTROL_SOLICITUDES");
                this.oracleFormsBuiltins.default_value("R", "GLOBAL.CARGUE_INFORMACION");
            }
            // if (INSTR(GLOBAL.CONTROL_SOLICITUDES, "X") == 0) {
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("COTGETCO.CHK_ESTBLQ", "PROPERTY_FALSE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            // }
            // else {
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("COTGETCO.CHK_ESTBLQ", "PROPERTY_TRUE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            // }
            // if (INSTR(GLOBAL.CARGUE_INFORMACION, "X") == 0) {
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.TXT_RUTA", "PROPERTY_FALSE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.CARGAR", "PROPERTY_FALSE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.BTN_ABRE", "PROPERTY_FALSE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.BTN_ERRORES", "PROPERTY_FALSE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            // }
            // else {
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.TXT_RUTA", "PROPERTY_TRUE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.CARGAR", "PROPERTY_TRUE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.BTN_ABRE", "PROPERTY_TRUE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     V_MENSAJE = FFDESACTIVARITEMSFORMA("FILTRO.BTN_ERRORES", "PROPERTY_TRUE");
            //     if (INSTR(V_MENSAJE, "EXITO") == 0) {
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            // }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.WHEN-NEW-FORM-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 );
    //    V_TXT_RUTA          VARCHAR2( 255 );
    //    
    // BEGIN
    // 
    //   IF ( SYSTEM.FORM_STATUS <> 'QUERY' ) THEN
    //    
    //      IF ( :this.PARAMETER.get("P_CAMBIO") = 'S' ) THEN
    //       
    //         IF ( :GLOBAL.SELECTED_TAB_PAGE = 'CARGUE_INFORMACION' ) THEN
    //          
    //           V_MENSAJE := '¿DESEA SALIR SIN GUARDAR EN SIGLEASE LOS CAMBIOS REALIZADOS A LOS GRUPOS ECONÓMICOS TOP 30 POR EL ANTERIOR CARGUE DE INFORMACIÓN?';
    //       
    //           LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'SI', 'NO', NULL, T_RESPUESTA );
    //           
    //            IF T_RESPUESTA = 1 THEN
    //   
    //               GO_BLOCK( 'COTGETOP' );
    //               SYNCHRONIZE;
    //               
    //               :this.PARAMETER.get("P_CAMBIO") := 'N';
    //               
    //               V_MENSAJE := 'LA INFORMACIÓN DEL ANTERIOR CARGUE DEL ARCHIVO DE GRUPOS ECONÓMICOS TOP 30 HA SIDO DESCARTADA.';
    //                      
    //             PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE ); 
    //                     
    //               LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //               
    //               EXIT_FORM( NO_COMMIT, FULL_ROLLBACK );
    //               
    //            END IF;
    //            
    //        ELSIF ( :GLOBAL.SELECTED_TAB_PAGE = 'CONTROL_SOLICITUDES' ) THEN   
    //             
    //            V_MENSAJE := '¿DESEA SALIR SIN GUARDAR EN SIGLEASE TODOS LOS CAMBIOS REALIZADOS AL ESTADO DE BLOQUEO DE LAS SOLICITUDES MODIFICADAS?';
    //            
    //           LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'SI', 'NO', NULL, T_RESPUESTA );
    //           
    //            IF T_RESPUESTA = 1 THEN
    //             
    //               GO_BLOCK( 'COTGETCO' );
    //               SYNCHRONIZE;
    //               
    //               :this.PARAMETER.get("P_CAMBIO") := 'N';
    //               
    //               V_MENSAJE := 'LOS CAMBIOS REALIZADOS AL ESTADO DE BLOQUEO DE LAS SOLICITUDES HAN SIDO DESCARTADOS.';
    //                      
    //             PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE ); 
    //                     
    //               LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //               
    //               EXIT_FORM( NO_COMMIT, FULL_ROLLBACK );
    //               
    //            END IF;     
    //            
    //         END IF;
    //         
    //       ELSE
    //             
    //         EXIT_FORM( NO_COMMIT, FULL_ROLLBACK ); 
    //         
    //       END IF;
    //       
    //   ELSE 
    //       
    //     EXIT_FORM( NO_COMMIT, FULL_ROLLBACK );    
    //     
    //     END IF;
    //      
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FORM.KEY-EXIT. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA('MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;
    //                  
    // END;
    //#endregion
    async DVFPOLT3_keyExit() {
        console.log("Entering DVFPOLT3_keyExit");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_TXT_RUTA: string = null;
        try {

            // if (SYSTEM.FORM_STATUS != "QUERY") {
            //     if (this.PARAMETER.get("P_CAMBIO") == "S") {
            //         if (GLOBAL.SELECTED_TAB_PAGE == "CARGUE_INFORMACION") {
            //             V_MENSAJE = "¿DESEA SALIR SIN GUARDAR EN SIGLEASE LOS CAMBIOS REALIZADOS A LOS GRUPOS ECONÓMICOS TOP 30 POR EL ANTERIOR CARGUE DE INFORMACIÓN?";
            //             DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "SI", "NO", null, T_RESPUESTA);
            //             if (T_RESPUESTA == 1) {
            //                 this.oracleFormsBuiltins.go_block("COTGETOP");
            //                 this.oracleFormsBuiltins.synchronize();
            //                 this.PARAMETER.get("P_CAMBIO") = "N";
            //                 V_MENSAJE = "LA INFORMACIÓN DEL ANTERIOR CARGUE DEL ARCHIVO DE GRUPOS ECONÓMICOS TOP 30 HA SIDO DESCARTADA.";
            //                 DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //                 DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //                 this.oracleFormsBuiltins.exit_form(NO_COMMIT, FULL_ROLLBACK);
            //             }
            //         }
            //         else if (GLOBAL.SELECTED_TAB_PAGE == "CONTROL_SOLICITUDES") {
            //             V_MENSAJE = "¿DESEA SALIR SIN GUARDAR EN SIGLEASE TODOS LOS CAMBIOS REALIZADOS AL ESTADO DE BLOQUEO DE LAS SOLICITUDES MODIFICADAS?";
            //             DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "SI", "NO", null, T_RESPUESTA);
            //             if (T_RESPUESTA == 1) {
            //                 this.oracleFormsBuiltins.go_block("COTGETCO");
            //                 this.oracleFormsBuiltins.synchronize();
            //                 this.PARAMETER.get("P_CAMBIO") = "N";
            //                 V_MENSAJE = "LOS CAMBIOS REALIZADOS AL ESTADO DE BLOQUEO DE LAS SOLICITUDES HAN SIDO DESCARTADOS.";
            //                 DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //                 DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //                 this.oracleFormsBuiltins.exit_form(NO_COMMIT, FULL_ROLLBACK);
            //             }
            //         }
            //     }
            //     else {
            //         this.oracleFormsBuiltins.exit_form(NO_COMMIT, FULL_ROLLBACK);
            //     }
            // }
            // else {
            //     this.oracleFormsBuiltins.exit_form(NO_COMMIT, FULL_ROLLBACK);
            // }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FORM.KEY-EXIT. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_keyExit");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    //  
    //     IF ( :COTGETCO.GETCO_ESTBLQ = 'B' ) THEN
    //      
    //        :COTGETCO.TXT_ESTBLQ := 'BLOQUEADA';
    //        
    //     ELSE
    //      
    //        :COTGETCO.TXT_ESTBLQ := 'EN CURSO';
    //        
    //     END IF;   
    //     
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.COTGETCO.POST-QUERY. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async DVFPOLT3_cotgetco_postQuery() {
        console.log("Entering DVFPOLT3_cotgetco_postQuery");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (this.COTGETCO.GETCO_ESTBLQ == "B") {
                this.COTGETCO.TXT_ESTBLQ = "BLOQUEADA";
            }
            else {
                this.COTGETCO.TXT_ESTBLQ = "EN CURSO";
            }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.COTGETCO.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_cotgetco_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     K_CRLF       CONSTANT  VARCHAR2( 2 )              := CHR( 13 ) || CHR( 10 ); 
    //     T_RESPUESTA          NUMBER; 
    //     V_FECHA_CAMBIO        DATE;
    //    V_MENSAJE           VARCHAR2( 500 );
    //    V_ANTIGUO_VALOR        VARCHAR2( 1 ); 
    //       
    // BEGIN
    // 
    //    IF ( SYSTEM.FORM_STATUS <> 'QUERY' ) THEN
    //     
    //       GO_BLOCK( 'COTGETCO' );
    //       SYNCHRONIZE;
    //       
    //       :this.PARAMETER.get("P_CAMBIO") := 'S';
    //     
    //     V_FECHA_CAMBIO := SYSDATE;
    //     
    //     SELECT ( DECODE( :COTGETCO.CHK_ESTBLQ, 'B', 'D', 'D', 'B' ) )
    //       INTO V_ANTIGUO_VALOR
    //      FROM DUAL;  
    //      
    //      :COTGETCO.GETCO_USUBLQ := PLSQLBuiltins.user(); 
    //           
    //       :COTGETCO.GETCO_FECBLQ := TRUNC( V_FECHA_CAMBIO );
    // 
    //     IF FBDPOLINSERTARAUDITORIA( V_FECHA_CAMBIO,
    //                   --+PY21248. JDG. ARQUITECTURA  
    //                       :COTGETCO.GETCO_CODUNI || '-' ||
    //                                     :COTGETCO.GETCO_OFCSOL || '-' ||
    //                                     :COTGETCO.GETCO_TIPCRE || '-' ||
    //                                     :COTGETCO.GETCO_CODSOL,
    //                                     :COTGETCO.CHK_ESTBLQ, 
    //                                     V_ANTIGUO_VALOR ) <> 'EXITO' THEN 
    //                                     
    //         V_MENSAJE := 'FALLO. '
    //                         || 'DVFPOLT3.COTGETCO.CHGK_ESTBLQ-WHEN-CHECKBOX-CHANGED. ' 
    //                        || 'FBDPOLINSERTARAUDITORIA.'
    //                        ||  K_CRLF 
    //                        || 'INSERCIÓN DE REGISTRO DE SEGUIMIENTO EN SET_AUDITORIA POR CAMBIO CAMBIO DE ESTADO DE BLOQUEO DE SOLICITUD.';
    //           
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                                    
    //                    
    //     END IF;   
    //     
    //     
    //     IF ( V_ANTIGUO_VALOR = 'B') THEN
    //      
    //        V_MENSAJE := 'PASARÁ DE ESTADO BLOQUEADA A ESTADO EN CURSO.';
    //        
    //     ELSE
    //        
    //       V_MENSAJE := 'PASARÁ DE ESTADO EN CURSO A ESTADO BLOQUEADA.';       
    //        
    //       IF :COTGETCO.GETCO_USUDBQ IS NULL THEN
    //         
    //         :COTGETCO.GETCO_USUDBQ := PLSQLBuiltins.user(); 
    //           
    //             :COTGETCO.GETCO_FECDBQ := TRUNC( V_FECHA_CAMBIO );
    //             
    //       ELSE
    //        
    //         :COTGETCO.GETCO_USUDBQ := NULL; 
    //           
    //             :COTGETCO.GETCO_FECDBQ := NULL;
    //           
    //           END IF;  
    //        
    //     END IF;
    //     
    //      V_MENSAJE := 'CAMBIO DE ESTADO: ' 
    //                 || K_CRLF
    //                 --+PY21248. JDG. ARQUITECTURA
    //                 || 'SOLICITUD: ' || :COTGETCO.GETCO_CODUNI || '-' || :COTGETCO.GETCO_OFCSOL || '-' || :COTGETCO.GETCO_TIPCRE || '-' || :COTGETCO.GETCO_CODSOL 
    //                 || K_CRLF
    //                 || V_MENSAJE 
    //                 || K_CRLF
    //                  || 'TERCERO: ' || :COTGETCO.GETCO_NITTER;
    //                  
    //       PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //   
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE 
    //            || K_CRLF 
    //            || '¿DESEA CONFIRMAR TODOS LOS CAMBIOS ANTERIORES EN SIGLEASE?', 'SI', 'NO', NULL, T_RESPUESTA );
    //            
    //      IF ( T_RESPUESTA = 1) THEN
    //       
    //         IF ( :COTGETCO.CHK_ESTBLQ = 'B' ) THEN
    //      
    //         :COTGETCO.TXT_ESTBLQ := 'BLOQUEADA';
    //      
    //       ELSE
    //    
    //         :COTGETCO.TXT_ESTBLQ := 'EN CURSO';
    //      
    //       END IF;
    //       
    //           COMMIT_FORM;
    //           
    //           :this.PARAMETER.get("P_CAMBIO") := 'N';
    //         
    //           V_MENSAJE := V_MENSAJE + ' CONFIRMADO EN SIGLEASE.';
    //         
    //          PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //          
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //        
    //      END IF;
    //     
    //   END IF;  
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.COTGETCO.CHK_ESTBLQ.WHEN-CHECKBOX-CHANGE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;    
    //#endregion
    async DVFPOLT3_cotgetco_chkEstblq_whenCheckboxChanged() {
        console.log("Entering DVFPOLT3_cotgetco_chkEstblq_whenCheckboxChanged");
        let K_CRLF: string = PLSQLBuiltins.chr(13) || PLSQLBuiltins.chr(10);
        let T_RESPUESTA: number = null;
        let V_FECHA_CAMBIO: Date = null;
        let V_MENSAJE: string = null;
        let V_ANTIGUO_VALOR: string = null;
        try {

            // if (SYSTEM.FORM_STATUS != "QUERY") {
            //     this.oracleFormsBuiltins.go_block("COTGETCO");
            //     this.oracleFormsBuiltins.synchronize();
            //     this.PARAMETER.get("P_CAMBIO") = "S";
            //     V_FECHA_CAMBIO = PLSQLBuiltins.sysdate();
            //     // construct payload
            //     let payload1 = new Map();
            //     payload1.set("CHK_ESTBLQ", COTGETCO.CHK_ESTBLQ);
            //     // call REST API
            //     const result1 = await Rest.post("/dvfpolt3_cotgetco/dvfpolt3_cotgetco_chkestblq_whencheckboxchanged_query1", payload1);
            //     // get values from result
            //     V_ANTIGUO_VALOR = result1[0].get("V_ANTIGUO_VALOR");
            //     this.COTGETCO.GETCO_USUBLQ = PLSQLBuiltins.user();
            //     this.COTGETCO.GETCO_FECBLQ = TRUNC(V_FECHA_CAMBIO);
            //     if (FBDPOLINSERTARAUDITORIA(V_FECHA_CAMBIO, COTGETCO.GETCO_CODUNI + "-" + COTGETCO.GETCO_OFCSOL + "-" + COTGETCO.GETCO_TIPCRE + "-" + COTGETCO.GETCO_CODSOL, COTGETCO.CHK_ESTBLQ, V_ANTIGUO_VALOR) != "EXITO") {
            //         V_MENSAJE = "FALLO. " + "DVFPOLT3.COTGETCO.CHGK_ESTBLQ-WHEN-CHECKBOX-CHANGED. " + "FBDPOLINSERTARAUDITORIA." + K_CRLF + "INSERCIÓN DE REGISTRO DE SEGUIMIENTO EN SET_AUDITORIA POR CAMBIO CAMBIO DE ESTADO DE BLOQUEO DE SOLICITUD.";
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     }
            //     if (V_ANTIGUO_VALOR == "B") {
            //         V_MENSAJE = "PASARÁ DE ESTADO BLOQUEADA A ESTADO EN CURSO.";
            //     }
            //     else {
            //         V_MENSAJE = "PASARÁ DE ESTADO EN CURSO A ESTADO BLOQUEADA.";
            //         if ((COTGETCO.GETCO_USUDBQ == null)) {
            //             this.COTGETCO.GETCO_USUDBQ = PLSQLBuiltins.user();
            //             this.COTGETCO.GETCO_FECDBQ = TRUNC(V_FECHA_CAMBIO);
            //         }
            //         else {
            //             this.COTGETCO.GETCO_USUDBQ = null;
            //             this.COTGETCO.GETCO_FECDBQ = null;
            //         }
            //     }
            //     V_MENSAJE = "CAMBIO DE ESTADO: " + K_CRLF + "SOLICITUD: " + COTGETCO.GETCO_CODUNI + "-" + COTGETCO.GETCO_OFCSOL + "-" + COTGETCO.GETCO_TIPCRE + "-" + COTGETCO.GETCO_CODSOL + K_CRLF + V_MENSAJE + K_CRLF + "TERCERO: " + COTGETCO.GETCO_NITTER;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE + K_CRLF + "¿DESEA CONFIRMAR TODOS LOS CAMBIOS ANTERIORES EN SIGLEASE?", "SI", "NO", null, T_RESPUESTA);
            //     if (T_RESPUESTA == 1) {
            //         if (COTGETCO.CHK_ESTBLQ == "B") {
            //             this.COTGETCO.TXT_ESTBLQ = "BLOQUEADA";
            //         }
            //         else {
            //             this.COTGETCO.TXT_ESTBLQ = "EN CURSO";
            //         }
            //         this.oracleFormsBuiltins.commit_form();
            //         this.PARAMETER.get("P_CAMBIO") = "N";
            //         V_MENSAJE = V_MENSAJE + " CONFIRMADO EN SIGLEASE.";
            //         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //         DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //     }
            // }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.COTGETCO.CHK_ESTBLQ.WHEN-CHECKBOX-CHANGE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_cotgetco_chkEstblq_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //    IF GET_ITEM_PROPERTY( 'BTN_ERRTODOS', LABEL ) = 'TODOS LOS CARGUES' THEN
    //     
    //      SET_BLOCK_PROPERTY( 'SETERRORES', DEFAULT_WHERE, 'SETERR_PROGRA = ''PQBD_COL_GETOP30''');
    //      
    //      SET_ITEM_PROPERTY( 'BTN_ERRTODOS', LABEL, 'VER ÚLTIMO CARGUE');
    //      
    //    ELSE
    //     
    //      SET_BLOCK_PROPERTY( 'SETERRORES', DEFAULT_WHERE, 'SETERR_PROGRA = ''PQBD_COL_GETOP30'' AND ( TRUNC( SETERR_FECHA ) = ( SELECT MAX( TRUNC( COTMA_FECINI ) ) FROM COTMAGET ) )');
    //      
    //       SET_ITEM_PROPERTY( 'BTN_ERRTODOS', LABEL, 'TODOS LOS CARGUES');
    //       
    //   END IF;
    // 
    //    GO_BLOCK( 'SETERRORES' );
    //    EXECUTE_QUERY;
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FILTRO.BTN_ERRTODOS.WHEN-BUTTON-PRESSED. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async DVFPOLT3_filtro_btnErrtodos_whenButtonPressed() {
        console.log("Entering DVFPOLT3_filtro_btnErrtodos_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (this.oracleFormsBuiltins.get_item_property("BTN_ERRTODOS", "LABEL") == "TODOS LOS CARGUES") {
                this.oracleFormsBuiltins.set_block_property("SETERRORES", "DEFAULT_WHERE", "SETERR_PROGRA = ''PQBD_COL_GETOP30''");
                this.oracleFormsBuiltins.set_item_property("BTN_ERRTODOS", "LABEL", "VER ÚLTIMO CARGUE");
            }
            else {
                this.oracleFormsBuiltins.set_block_property("SETERRORES", "DEFAULT_WHERE", "SETERR_PROGRA = ''PQBD_COL_GETOP30'' AND ( TRUNC( SETERR_FECHA ) = ( SELECT MAX( TRUNC( COTMA_FECINI ) ) FROM COTMAGET ) )");
                this.oracleFormsBuiltins.set_item_property("BTN_ERRTODOS", "LABEL", "TODOS LOS CARGUES");
            }
            this.oracleFormsBuiltins.go_block("SETERRORES");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FILTRO.BTN_ERRTODOS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_filtro_btnErrtodos_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     HIDE_WINDOW( 'WERRORES' );
    //    GO_ITEM( 'FILTRO.TXT_RUTA' );
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FILTRO.BTN_REGRESAR-WHEN-BUTTON-PRESSED. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END; 
    //#endregion
    async DVFPOLT3_filtro_btnRegresar_whenButtonPressed() {
        console.log("Entering DVFPOLT3_filtro_btnRegresar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.hide_window("WERRORES");
            this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FILTRO.BTN_REGRESAR-WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_filtro_btnRegresar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     K_CRLF       CONSTANT  VARCHAR2( 2 )              := CHR( 13 ) || CHR( 10 ); 
    //     T_RESPUESTA          NUMBER;
    //     V_FECINI           COTGETOP.GETOP_FECINI%TYPE;
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_TXT_RUTA          VARCHAR2( 255 );
    //     V_USUARI           SGUSUARIOS.USU_CODIGO%TYPE;
    //     
    // BEGIN
    //  
    //    IF ( :this.PARAMETER.get("P_CAMBIO") = 'S' ) THEN
    //     
    //       V_MENSAJE := '¿DESEA DESCARTAR LA INFORMACIÓN DEL ANTERIOR CARGUE DEL ARCHIVO DE GRUPOS ECONÓMICOS TOP 30 ANTES DE PROCESAR UNO NUEVO?';
    //   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'SI', 'NO', NULL, T_RESPUESTA );
    //       
    //        IF T_RESPUESTA = 1 THEN
    //         
    //           V_TXT_RUTA := :FILTRO.TXT_RUTA;
    //           
    //           ROLLBACK;
    //           
    //           :FILTRO.TXT_RUTA :=  V_TXT_RUTA;
    //           PINICIAR;
    //           
    //           GO_BLOCK('COTGETOP');
    //           CLEAR_BLOCK;
    //           EXECUTE_QUERY;
    //           SYNCHRONIZE;
    //           
    //           :this.PARAMETER.get("P_CAMBIO") := 'N';
    //           
    //           V_MENSAJE := 'LA INFORMACIÓN DEL ANTERIOR CARGUE DEL ARCHIVO DE GRUPOS ECONÓMICOS TOP 30 HA SIDO DESCARTADA.';
    //                  
    //         PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE ); 
    //                 
    //           LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //           
    //        ELSE 
    //         
    //           RAISE FORM_TRIGGER_FAILURE;
    // 
    //        END IF;      
    //    
    //   END IF;    
    //        
    //     V_MENSAJE := 'UD. VA A REALIZAR EL CARGUE DE INFORMACIÓN DE LOS GRUPOS ECONÓMICOS TOP 30 CON FECHA DE HOY ' || TO_CHAR( SYSDATE, 'DD/MM/YYYY' ) || '.' 
    //                 ||  K_CRLF 
    //                 || '¿DESEA CONTINUAR?';
    //   
    //   LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'SI', 'NO', NULL, T_RESPUESTA );
    //   
    //    IF T_RESPUESTA = 1 THEN
    //     
    //       IF FFPOLVALIDARARCHIVO(:FILTRO.TXT_RUTA) = 'EXITO' THEN
    //        
    //          BEGIN
    //       
    //         SELECT UNIQUE COTMA_FECINI, COTMA_USUARI
    //           INTO V_FECINI, V_USUARI
    //           FROM COTMAGET
    //          WHERE TRUNC( COTMA_FECINI ) IN ( SELECT MAX( TRUNC( COTMA_FECINI ) ) FROM COTMAGET );
    //   
    //          EXCEPTION WHEN NO_DATA_FOUND THEN
    //             
    //             V_FECINI := NULL;
    //             V_USUARI := NULL;
    //             
    //          END;
    //          
    //          IF ( V_FECINI IS NOT NULL ) AND ( V_USUARI IS NOT NULL ) THEN
    //            
    //              IF TRUNC( V_FECINI ) < TRUNC( SYSDATE ) THEN
    //             
    //                  V_MENSAJE := 'SE VA A INICIAR EL PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CON FECHA DE HOY ' || TO_CHAR( V_FECINI, 'DD/MM/YYYY' ) || '.' 
    //                              ||  K_CRLF 
    //                              || '¿DESEA CONTINUAR?';
    //                             
    //              ELSIF TRUNC( V_FECINI ) = TRUNC ( SYSDATE ) THEN
    //               
    //               
    //                 V_MENSAJE := 'PROCESO INTERRUMPIDO.' 
    //                        ||  K_CRLF 
    //                        || 'YA EXISTE INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CARGADA PARA HOY ' || V_FECINI || ' POR EL USUARIO ' || V_USUARI || '.';
    //                  
    //                 PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE ); 
    //                 
    //                   LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //                 
    //                 GO_ITEM( 'FILTRO.TXT_RUTA' );
    //                 
    //                 RAISE FORM_TRIGGER_FAILURE;
    //                
    //              END IF;
    //              
    //           ELSE 
    //              
    //              V_MENSAJE := 'SE VA A REALIZAR EL PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 POR PRIMERA VEZ CON FECHA DE HOY ' || TO_CHAR( V_FECINI, 'DD/MM/YYYY' ) || '.' 
    //                          ||  K_CRLF 
    //                          || '¿DESEA CONTINUAR?';
    //                             
    //           END IF;         
    //             
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'SI', 'NO', NULL, T_RESPUESTA );
    //                       
    //           IF ( T_RESPUESTA = 1) THEN
    //            
    //              DELETE FROM SETCARGA
    //          WHERE CAR_USER = PLSQLBuiltins.user();
    //         COMMIT; 
    //         
    //         IF FBDPOLCARGARARCHIVOFASEINICIAL(:FILTRO.TXT_RUTA) = 'EXITO' THEN  
    //          
    //                 IF ( TRUNC( V_FECINI ) = TRUNC ( SYSDATE ) ) THEN
    //                      DELETE COTGETOP
    //                  WHERE GETOP_FECINI = NVL( V_FECINI, TRUNC( SYSDATE ) );
    //                 COMMIT;
    //   
    //                 END IF;
    //                 
    //                 IF FBDPOLCARGARARCHIVOFASEFINAL = 'EXITO' THEN 
    //                  
    //                    GO_ITEM( 'FILTRO.TXT_RUTA' );
    //                   GO_BLOCK( 'COTGETOP' );
    //                       EXECUTE_QUERY;
    //                       SYNCHRONIZE;
    //                  
    //             :this.PARAMETER.get("P_CAMBIO") := 'S';
    //             
    //               V_MENSAJE := 'PROCESO DE CARGUE DE GRUPOS ECONÓMICOS TOP 30 FINALIZADO EXITOSAMENTE.';
    //                       
    //                      PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    // 
    //                    V_MENSAJE := V_MENSAJE 
    //                           || K_CRLF 
    //                           || '¿DESEA CONFIRMAR EN ESTE MOMENTO LOS CAMBIOS REALIZADOS EN SIGLEASE?';
    //                    
    //                    LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'SI', 'NO', NULL, T_RESPUESTA );
    //                    
    //                    IF ( T_RESPUESTA = 1) THEN 
    //         
    //                         COMMIT_FORM;
    //                         
    //                         :this.PARAMETER.get("P_CAMBIO") := 'N';
    //                         
    //                         V_MENSAJE := 'CAMBIOS REALIZADOS A LOS GRUPOS ECONÓMICOS TOP 30 CONFIRMADOS EN SIGLEASE.';
    //                         
    //                        PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );
    //                        
    //                      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //                        
    //                    END IF;
    //                    
    //                 ELSE    
    //                  
    //                   GO_ITEM( 'FILTRO.TXT_RUTA' );
    //                   
    //               END IF;    
    //        
    //             ELSE
    //            
    //                 GO_ITEM( 'FILTRO.TXT_RUTA' );
    //                     
    //             END IF;    
    //                
    //           ELSE 
    //              
    //              V_MENSAJE := 'PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CANCELADO POR EL USUARIO.';
    //                           
    //             LIB$ALERTA('MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //             
    //            GO_ITEM( 'FILTRO.TXT_RUTA' );
    //   
    //           END IF; 
    //           
    //        ELSE
    //            
    //            GO_ITEM( 'FILTRO.TXT_RUTA' );
    //           
    //        END IF;   
    //         
    //      ELSE
    // 
    //         V_MENSAJE := 'PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CANCELADO POR EL USUARIO.';
    // 
    //      LIB$ALERTA('MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //      
    //       GO_ITEM( 'FILTRO.TXT_RUTA' );
    // 
    //    END IF;
    //   
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FILTRO.CARGAR.WHEN-BUTTON-PRESSED. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async DVFPOLT3_filtro_cargar_whenButtonPressed() {
        console.log("Entering DVFPOLT3_filtro_cargar_whenButtonPressed");
        let K_CRLF: string = PLSQLBuiltins.chr(13) || PLSQLBuiltins.chr(10);
        let T_RESPUESTA: number = null;
        let V_FECINI: null = null;
        let V_MENSAJE: string = null;
        let V_TXT_RUTA: string = null;
        let V_USUARI: null = null;
        try {

            if (this.PARAMETER.get("P_CAMBIO") == "S") {
                V_MENSAJE = "¿DESEA DESCARTAR LA INFORMACIÓN DEL ANTERIOR CARGUE DEL ARCHIVO DE GRUPOS ECONÓMICOS TOP 30 ANTES DE PROCESAR UNO NUEVO?";
                // DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "SI", "NO", null, T_RESPUESTA);
                if (T_RESPUESTA == 1) {
                    V_TXT_RUTA = this.FILTRO.TXT_RUTA;
                    this.FILTRO.TXT_RUTA = V_TXT_RUTA;
                    // DVFPOLT3_PINICIAR();
                    this.oracleFormsBuiltins.go_block("COTGETOP");
                    this.oracleFormsBuiltins.clear_block();
                    this.oracleFormsBuiltins.execute_query();
                    this.oracleFormsBuiltins.synchronize();
                    this.PARAMETER.set("P_CAMBIO", "N");
                    V_MENSAJE = "LA INFORMACIÓN DEL ANTERIOR CARGUE DEL ARCHIVO DE GRUPOS ECONÓMICOS TOP 30 HA SIDO DESCARTADA.";
                    // DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
                    // DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                }
                else {
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }
            V_MENSAJE = "UD. VA A REALIZAR EL CARGUE DE INFORMACIÓN DE LOS GRUPOS ECONÓMICOS TOP 30 CON FECHA DE HOY " + PLSQLBuiltins.sysdate().toString() + "." + K_CRLF + "¿DESEA CONTINUAR?";
            // DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "SI", "NO", null, T_RESPUESTA);
            // if (T_RESPUESTA == 1) {
            //     if (FFPOLVALIDARARCHIVO(FILTRO.TXT_RUTA) == "EXITO") {
            //         // construct payload
            //         let payload2 = new Map();
            //         // call REST API
            //         const result2 = await Rest.post("/dvfpolt3_filtro/dvfpolt3_filtro_cargar_whenbuttonpressed_query2", payload2);
            //         // get values from result
            //         V_FECINI = result2[0].get("V_FECINI");
            //         V_USUARI = result2[0].get("V_USUARI");
            //         if (result2 == null || result2.length == 0) {

            //             V_FECINI = null;
            //             V_USUARI = null;
            //         }

            //         if (((V_FECINI != null) && (V_USUARI != null))) {
            //             if (TRUNC(V_FECINI) < TRUNC(PLSQLBuiltins.sysdate())) {
            //                 V_MENSAJE = "SE VA A INICIAR EL PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CON FECHA DE HOY " + V_FECINI.toString() + "." + K_CRLF + "¿DESEA CONTINUAR?";
            //             }
            //             else if (TRUNC(V_FECINI) == TRUNC(PLSQLBuiltins.sysdate())) {
            //                 V_MENSAJE = "PROCESO INTERRUMPIDO." + K_CRLF + "YA EXISTE INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CARGADA PARA HOY " + V_FECINI + " POR EL USUARIO " + V_USUARI + ".";
            //                 DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //                 DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //                 this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            //                 console.log("FORM_TRIGGER_FAILURE");
            //                 throw new Error('FORM_TRIGGER_FAILURE');
            //             }
            //         }
            //         else {
            //             V_MENSAJE = "SE VA A REALIZAR EL PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 POR PRIMERA VEZ CON FECHA DE HOY " + V_FECINI.toString() + "." + K_CRLF + "¿DESEA CONTINUAR?";
            //         }
            //         DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "SI", "NO", null, T_RESPUESTA);
            //         if (T_RESPUESTA == 1) {
            //             // construct payload
            //             let payload3 = new Map();
            //             // call REST API
            //             const result3 = await Rest.post("/dvfpolt3_filtro/dvfpolt3_filtro_cargar_whenbuttonpressed_query3", payload3);
            //             if (FBDPOLCARGARARCHIVOFASEINICIAL(FILTRO.TXT_RUTA) == "EXITO") {
            //                 if (TRUNC(V_FECINI) == TRUNC(PLSQLBuiltins.sysdate())) {
            //                     // construct payload
            //                     let payload5 = new Map();
            //                     // call REST API
            //                     const result5 = await Rest.post("/dvfpolt3_filtro/dvfpolt3_filtro_cargar_whenbuttonpressed_query5", payload5);
            //                 }
            //                 if (FBDPOLCARGARARCHIVOFASEFINAL == "EXITO") {
            //                     this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            //                     this.oracleFormsBuiltins.go_block("COTGETOP");
            //                     this.oracleFormsBuiltins.execute_query();
            //                     this.oracleFormsBuiltins.synchronize();
            //                     this.PARAMETER.get("P_CAMBIO") = "S";
            //                     V_MENSAJE = "PROCESO DE CARGUE DE GRUPOS ECONÓMICOS TOP 30 FINALIZADO EXITOSAMENTE.";
            //                     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //                     V_MENSAJE = V_MENSAJE + K_CRLF + "¿DESEA CONFIRMAR EN ESTE MOMENTO LOS CAMBIOS REALIZADOS EN SIGLEASE?";
            //                     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "SI", "NO", null, T_RESPUESTA);
            //                     if (T_RESPUESTA == 1) {
            //                         this.oracleFormsBuiltins.commit_form();
            //                         this.PARAMETER.get("P_CAMBIO") = "N";
            //                         V_MENSAJE = "CAMBIOS REALIZADOS A LOS GRUPOS ECONÓMICOS TOP 30 CONFIRMADOS EN SIGLEASE.";
            //                         DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //                         DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //                     }
            //                 }
            //                 else {
            //                     this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            //                 }
            //             }
            //             else {
            //                 this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            //             }
            //         }
            //         else {
            //             V_MENSAJE = "PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CANCELADO POR EL USUARIO.";
            //             DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //             this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            //         }
            //     }
            //     else {
            //         this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            //     }
            // }
            // else {
            //     V_MENSAJE = "PROCESO DE CARGUE DE LA INFORMACIÓN DE GRUPOS ECONÓMICOS TOP 30 CANCELADO POR EL USUARIO.";
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_item("FILTRO.TXT_RUTA");
            // }
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FILTRO.CARGAR.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_filtro_cargar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  T_RESPUESTA   NUMBER;
    //  V_MENSAJE    VARCHAR2 (500);
    //  V_RUTA     VARCHAR2( 255 );
    //  
    //  
    // BEGIN
    //  
    //  V_RUTA := :FILTRO.TXT_RUTA;
    //  :FILTRO.TXT_RUTA := UPPER( GET_FILE_NAME( FILE_FILTER => 'TXT FILES (*.TXT)|*.TXT|') );
    //  
    //  IF :FILTRO.TXT_RUTA IS NULL THEN
    //   
    //      :FILTRO.TXT_RUTA := V_RUTA;
    //      
    //  END IF;
    // 
    // EXCEPTION
    // 
    //   WHEN OTHERS THEN
    //   
    //     V_MENSAJE := 'FALLO. '
    //                  || 'DVFPOLT3.FILTRO.BTN_ABRE.WHEN-BUTTON-PRESSED. ' 
    //                  || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                  || 'SQLERRM ' || SQLERRM;
    //                  
    //     PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );             
    //                  
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //    
    // END;
    //   
    //#endregion
    async DVFPOLT3_filtro_btnAbre_whenButtonPressed() {
        console.log("Entering DVFPOLT3_filtro_btnAbre_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_RUTA: string = null;
        try {

            V_RUTA = this.FILTRO.TXT_RUTA;
            this.FILTRO.TXT_RUTA = PLSQLBuiltins.upper(this.oracleFormsBuiltins.get_file_name("TXT FILES (*.TXT)|*.TXT|"));
            if ((this.FILTRO.TXT_RUTA == null)) {
                this.FILTRO.TXT_RUTA = V_RUTA;
            }
        } catch (ex) {

            // V_MENSAJE = "FALLO. " + "DVFPOLT3.FILTRO.BTN_ABRE.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            // DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            // DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
        }

        console.log("Exiting DVFPOLT3_filtro_btnAbre_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     LIB$AJUSTAVENTANA( 'WERRORES' , 877 , 210  );
    //     SET_WINDOW_PROPERTY ( 'WERRORES' , POSITION, 44, 273 );
    //     GO_BLOCK( 'SETERRORES' );
    //     EXECUTE_QUERY;
    // 
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.FILTRO.BTN_ERRORES.WHEN-BUTTON-PRESSED. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END; 
    //#endregion
    async DVFPOLT3_filtro_btnErrores_whenButtonPressed() {
        console.log("Entering DVFPOLT3_filtro_btnErrores_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // DVFPOLT3_LIB$AJUSTAVENTANA("WERRORES", 877, 210);
            // this.oracleFormsBuiltins.set_window_property("WERRORES", POSITION, 44, 273);
            this.oracleFormsBuiltins.go_block("SETERRORES");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.FILTRO.BTN_ERRORES.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_filtro_btnErrores_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    // BEGIN
    // 
    //     NEXT_RECORD;
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    // 
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'DVFPOLT3.COTGETOP.GETOP_NOMRAZ.KEY-NEXT-ITEM. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'PQBD_COL_GETOP30', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    //#endregion
    async DVFPOLT3_cotgetop_getopNomraz_keyNextItem() {
        console.log("Entering DVFPOLT3_cotgetop_getopNomraz_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.next_record();
        } catch (ex) {

            // if (this.oracleFormsBuiltins.error_code != 0) {
            //     V_MENSAJE = "FALLO. " + "DVFPOLT3.COTGETOP.GETOP_NOMRAZ.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
            //     DVFPOLT3_PBD_SEG_MSGERR("PQBD_COL_GETOP30", V_MENSAJE);
            //     DVFPOLT3_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
        }

        console.log("Exiting DVFPOLT3_cotgetop_getopNomraz_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DVFPOLT3_toolbar_whenButtonPressed() {
        console.log("Entering DVFPOLT3_toolbar_whenButtonPressed");
        console.log("Exiting DVFPOLT3_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DVFPOLT3_toolbar_whenNewFormInstance() {
        console.log("Entering DVFPOLT3_toolbar_whenNewFormInstance");
        console.log("Exiting DVFPOLT3_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DVFPOLT3_toolbar_first_whenButtonPressed() {
        console.log("Entering DVFPOLT3_toolbar_first_whenButtonPressed");
        console.log("Exiting DVFPOLT3_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DVFPOLT3_toolbar_lastr_whenButtonPressed() {
        console.log("Entering DVFPOLT3_toolbar_lastr_whenButtonPressed");
        console.log("Exiting DVFPOLT3_toolbar_lastr_whenButtonPressed");
    }

}

