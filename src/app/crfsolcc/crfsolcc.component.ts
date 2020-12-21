import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSOLCC business logic
import {
    CRTGAADSO,
    CRTRESTR,
    CRTOTERSOL,
    VARIABLE,
    COTCONTPR,
    CRTSOLICR,
    CRTTEREXT,
    COTTIPXCOM1,
    TOOLBAR,
    PPAL,
    CRTOTERSOL1,
    BASE
} from "./CRFSOLCC_models";



// class CRFSOLCC
@Component({
    selector: 'app-crfsolcc',
    templateUrl: './crfsolcc.component.html',
})
export class CrfsolccComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_SELECCIONTIPO', null],
        ['P_ESTADO', null],
        ['P_OFICINA', null],
        ['PCONADMON', null],
        ['TER_NIT', null],
        ['PENCCOM', 'N'],
        ['PCOMITE', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTGAADSO: CRTGAADSO = new CRTGAADSO();
    public CRTRESTR: CRTRESTR = new CRTRESTR();
    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public VARIABLE: VARIABLE = new VARIABLE();
    public COTCONTPR: COTCONTPR = new COTCONTPR();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CRTTEREXT: CRTTEREXT = new CRTTEREXT();
    public COTTIPXCOM1: COTTIPXCOM1 = new COTTIPXCOM1();
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
    async CRFSOLCC_onClearDetails() {
        console.log("Entering CRFSOLCC_onClearDetails");
        // CRFSOLCC_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFSOLCC_onClearDetails");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO
    // LIST_VALUES; END;
    //#endregion
    async CRFSOLCC_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCC_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRFSOLCC_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //    PANTALLA;
    //    PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFSOLCC_preForm() {
        console.log("Entering CRFSOLCC_preForm");
        // CRFSOLCC_PANTALLA();
        // CRFSOLCC_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFSOLCC_preForm");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /* ANTES DEL CAMBIO  PROYECTO 5779
    // BEGIN  
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    // 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //      :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE
    //      :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    // 
    //   DEFAULT_VALUE(NULL, 'GLOBAL.TER_ORIGEN');
    //   DEFAULT_VALUE(NULL, 'GLOBAL.VALOR_ANTERIOR');
    //   DEFAULT_VALUE(NULL, 'GLOBAL.VALOR_NUEVO');
    //   --VAL
    //    IF  :this.PARAMETER.get("PCONADMON") = 'S' THEN
    //      :CRTSOLICR.SOLICR_NITTER := :this.PARAMETER.get("TER_NIT"); 
    //    END IF;
    //        --PRENDE EL CAMPO DE FECHA DE DESEMBOLSO CLIENTE
    //    SET_ITEM_PROPERTY ('SOLICR_FDESEMCLI',ENABLED,"PROPERTY_FALSE");
    //    
    //       
    // -- CAHH
    // SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CODPRO',REQUIRED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ORMONUS$',REQUIRED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',REQUIRED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ORMONET',REQUIRED,"PROPERTY_TRUE");  
    // 
    // END;
    // */
    // PRINICIAR; END;
    //#endregion
    async CRFSOLCC_whenNewFormInstance() {
        console.log("Entering CRFSOLCC_whenNewFormInstance");
        // CRFSOLCC_PRINICIAR();
        console.log("Exiting CRFSOLCC_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // --LCBY:15180 VALIDACION CAMPO TIPO 
    //  IF :CRTSOLICR.SOLICR_CLASAC IS NULL AND :CRTSOLICR.SOLICR_TIPCRE <> '04' THEN
    //   LIB$DTNERFRMA('DEBE INGRESAR EL TIPO DE ACTIVO. NUEVO (N), USADO(U).');
    //  END IF;
    // --LCBY:15180 VALIDACION CAMPO TIPO 
    // 
    // 
    // --LCBY:10791 BANCOLDEX EN LA SOLICITUD 
    //  IF :CRTSOLICR.SOLICR_BCODEX IS NOT NULL AND (:SOLICR_TBCOLDX IS NULL OR :SOLICR_BCODXP IS NULL)THEN
    //      LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.');
    //     :SOLICR_BCODXP  := NULL;
    //    :SOLICR_TBCOLDX := NULL;
    //    :DESCBCDX       := NULL;
    //    
    //  ELSIF :SOLICR_TBCOLDX IS NOT NULL AND (:CRTSOLICR.SOLICR_BCODEX IS NULL OR :SOLICR_BCODXP IS NULL) THEN
    //    LIB$DTNERFRMA('SÍ TIENE LÍNEA DE REDESCUENTO PARA BANCOLDEX DEBE COLOCAR LA TASA.');
    //     :SOLICR_BCODXP  := NULL;
    //    :SOLICR_TBCOLDX := NULL;
    //    :DESCBCDX       := NULL;
    // 
    //  ELSIF :CRTSOLICR.SOLICR_BCODXP IS NOT NULL AND :SOLICR_TBCOLDX IS NULL THEN
    //      LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR SU LÍNEA DE REDESCUENTO.');
    //     :SOLICR_BCODXP  := NULL;
    //    :SOLICR_TBCOLDX := NULL;
    //    :DESCBCDX      := NULL;
    // 
    //  ELSIF (:CRTSOLICR.SOLICR_BCODXP IS NOT NULL AND :CRTSOLICR.SOLICR_BCODEX  IS NULL) AND :SOLICR_TBCOLDX IS NOT NULL THEN
    //    :SOLICR_BCODEX :='X';
    //    
    //  ELSE
    //   
    //   IF :SOLICR_TBCOLDX IS NULL AND :DESCBCDX IS NOT NULL THEN
    //     :DESCBCDX := NULL;
    //   END IF;
    //   
    //   PU_VALTIPRO(:CRTSOLICR.SOLICR_CODPRO); --PY 13958
    //    COMMIT;
    //  
    //  END IF;
    // 
    // 
    // --LCBY:10791 BANCOLDEX EN LA SOLICITUD 
    // 
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_BCODEX IS NOT NULL AND :SOLICR_TBCOLDX IS NULL THEN
    //  LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.');
    // ELSE
    //  IF :SOLICR_BCODEX IS NULL AND :SOLICR_TBCOLDX IS NOT NULL THEN
    //    GO_ITEM('SOLICR_BCODEX');
    //    :SOLICR_TBCOLDX := NULL;
    //    :DESCBCDX     := NULL;
    //    --ELSE
    //   --PUP_ASIGAN_OFICIAL_DESEMBOLSO;            
    //    END IF;
    //    
    //    PU_VALTIPRO(:CRTSOLICR.SOLICR_CODPRO); --PY 13958
    //    
    //  COMMIT;
    //  
    // 
    // END IF;*/; END;
    //#endregion
    async CRFSOLCC_keyCommit() {
        console.log("Entering CRFSOLCC_keyCommit");
        // if (((this.CRTSOLICR.SOLICR_CLASAC == null) &&this.CRTSOLICR.SOLICR_TIPCRE != "04")) {
        //     // CRFSOLCC_LIB$DTNERFRMA("DEBE INGRESAR EL TIPO DE ACTIVO. NUEVO (N), USADO(U).");
        // }
        // if (((this.CRTSOLICR.SOLICR_BCODEX != null) && ((SOLICR_TBCOLDX == null) || (SOLICR_BCODXP == null)))) {
        //     // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.");
        //     // this.SOLICR_BCODXP = null;
        //     // this.SOLICR_TBCOLDX = null;
        //     // this.DESCBCDX = null;
        // }
        // else if (((SOLICR_TBCOLDX != null) && ((this.CRTSOLICR.SOLICR_BCODEX == null) || (SOLICR_BCODXP == null)))) {
        //     // CRFSOLCC_LIB$DTNERFRMA("SÍ TIENE LÍNEA DE REDESCUENTO PARA BANCOLDEX DEBE COLOCAR LA TASA.");
        //     this.SOLICR_BCODXP = null;
        //     this.SOLICR_TBCOLDX = null;
        //     this.DESCBCDX = null;
        // }
        // else if (((this.CRTSOLICR.SOLICR_BCODXP != null) && (SOLICR_TBCOLDX == null))) {
        //     // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR SU LÍNEA DE REDESCUENTO.");
        //     this.SOLICR_BCODXP = null;
        //     this.SOLICR_TBCOLDX = null;
        //     this.DESCBCDX = null;
        // }
        // else if ((((this.CRTSOLICR.SOLICR_BCODXP != null) && (this.CRTSOLICR.SOLICR_BCODEX == null)) && (SOLICR_TBCOLDX != null))) {
        //     this.SOLICR_BCODEX = "X";
        // }
        // else {
        //     if (((SOLICR_TBCOLDX == null) && (DESCBCDX != null))) {
        //         this.DESCBCDX = null;
        //     }
        //     // CRFSOLCC_PU_VALTIPRO(this.CRTSOLICR.SOLICR_CODPRO);
        // }
        console.log("Exiting CRFSOLCC_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //  V_MANOFCDAV VARCHAR2(1);
    //  V_MANOFCREF VARCHAR2(1);
    //  V_CANTIDAD NUMBER;
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //  
    //  BEGIN
    //       SELECT PROD_MANOFC,PROD_PRODRFP
    //         INTO V_MANOFCDAV,V_MANOFCREF
    //         FROM CRTPRODCIA
    //        WHERE --+PY21520. JDG
    //              PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND PROD_CODIGO = :SOLICR_CODPRO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    V_MANOFCDAV := 'N';
    //   END ; 
    //     
    //   BEGIN
    //   SELECT COUNT(*)
    //     INTO V_CANTIDAD
    //     FROM OPS$COLOCA.CRTREFPRV 
    //    WHERE --+PY21520. JDG
    //          REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //          --+
    //      AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANTIDAD := 0;
    //  END;       
    // 
    //   --+PY21520. JDG
    //  --IF (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) AND  (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) THEN
    //   IF (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) AND (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) AND  (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) THEN  
    //  --+  
    // 
    //    IF :SOLICR_CODPRO IN ('DAS','DAV') THEN
    //      IF V_MANOFCDAV = 'S' THEN
    //        IF (V_CANTIDAD = 0) AND (:P_SELECCIONTIPO IS NULL)  THEN
    //           --+PY17707. JDG.
    //           --LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDOR DAVIVIENDA.');  
    //           LIB$ALERTA('MENSAJE','ESTA SOLICITUD NO TIENE REFERIDOR DAVIVIENDA. DESEA SALIR AÚN?','SI','NO','CANCELAR',T_RESPUESTA);
    //           IF (T_RESPUESTA = 1) THEN
    //            EXIT_FORM(NO_VALIDATE);
    //           END IF; 
    //        ELSE
    //            EXIT_FORM(NO_VALIDATE);
    //        END IF;
    //      ELSE
    //            EXIT_FORM(NO_VALIDATE);
    //      END IF;   
    //    ELSE
    //       
    //      IF V_MANOFCREF = 'S' THEN
    //        IF (V_CANTIDAD = 0) AND (:P_SELECCIONTIPO IS NULL)  THEN
    //           --+PY17707. JDG.
    //           --LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.');
    //           LIB$ALERTA('MENSAJE','ESTA SOLICITUD NO TIENE PROVEEDOR REFERIDO. DESEA SALIR AÚN?','SI','NO','CANCELAR',T_RESPUESTA);
    //           IF (T_RESPUESTA = 1) THEN
    //            EXIT_FORM(NO_VALIDATE);
    //           END IF;  
    //        ELSE
    //            EXIT_FORM(NO_VALIDATE);
    //        END IF;
    //      ELSE
    //            EXIT_FORM(NO_VALIDATE);
    //      END IF; 
    //    
    //    END IF;  
    //  
    //  ELSE
    //  
    //     EXIT_FORM;    
    //   
    //  END IF;
    //  
    // END;
    //#endregion
    async CRFSOLCC_keyExit() {
        console.log("Entering CRFSOLCC_keyExit");
        let V_MANOFCDAV: string = null;
        let V_MANOFCREF: string = null;
        let V_CANTIDAD: number = null;
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
        // call REST API
        const result1 = await Rest.post("/crfsolcc/crfsolcc_keyexit_query1", payload1);
        // get values from result
        V_MANOFCDAV = result1[0].get("V_MANOFCDAV");
        V_MANOFCREF = result1[0].get("V_MANOFCREF");
        if (result1 == null || result1.length == 0) {

            V_MANOFCDAV = "N";
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result2 = await Rest.post("/crfsolcc/crfsolcc_keyexit_query2", payload2);
        // get values from result
        V_CANTIDAD = result2[0].get("V_CANTIDAD");
        if (result2 == null || result2.length == 0) {

            V_CANTIDAD = 0;
        }

        if ((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            // if (["DAS", "DAV"].indexOf(SOLICR_CODPRO) != -1) {
            //     if (V_MANOFCDAV == "S") {
            //         if ((V_CANTIDAD == 0 && (P_SELECCIONTIPO == null))) {
            //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "ESTA SOLICITUD NO TIENE REFERIDOR DAVIVIENDA. DESEA SALIR AÚN?", "SI", "NO", "CANCELAR", T_RESPUESTA);
            //             if (T_RESPUESTA == 1) {
            //                 this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
            //             }
            //         }
            //         else {
            //             this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
            //         }
            //     }
            //     else {
            //         this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
            //     }
            // }
            // else {
            //     if (V_MANOFCREF == "S") {
            //         if ((V_CANTIDAD == 0 && (P_SELECCIONTIPO == null))) {
            //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "ESTA SOLICITUD NO TIENE PROVEEDOR REFERIDO. DESEA SALIR AÚN?", "SI", "NO", "CANCELAR", T_RESPUESTA);
            //             if (T_RESPUESTA == 1) {
            //                 this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
            //             }
            //         }
            //         else {
            //             this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
            //         }
            //     }
            //     else {
            //         this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
            //     }
            // }
        }
        else {
            this.oracleFormsBuiltins.exit_form();
        }
        console.log("Exiting CRFSOLCC_keyExit");
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
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCC.CRTGAADSO.POST-QUERY. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtgaadso_postQuery() {
        console.log("Entering CRFSOLCC_crtgaadso_postQuery");
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
                const result1 = await Rest.post("/crfsolcc_crtgaadso/crfsolcc_crtgaadso_postquery_query1", payload1);
                // get values from result
                this.CRTGAADSO.DESCRI_TIPPRE = result1[0].get("CRTGAADSO.DESCRI_TIPPRE");
            } catch (ex) {

                this.CRTGAADSO.DESCRI_TIPPRE = null;
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTGAADSO.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtgaadso_postQuery");
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
    //                    || 'CRFSOLCC.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtgaadso_gaadsoVrcial_keyNextItem() {
        console.log("Entering CRFSOLCC_crtgaadso_gaadsoVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_REGFRMXG");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtgaadso_gaadsoVrcial_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //  V_BENEFICIARIO    COL.COLBEN%TYPE;
    //  T_RESPUESTA       NUMBER;
    //  V_EXISTE          NUMBER;
    // BEGIN
    // 
    //  BEGIN 
    //  SELECT COLBEN
    //    INTO V_BENEFICIARIO
    //  FROM COL
    //  WHERE COLCOD=:CRTRESTR.RESTR_COLCOD
    //   AND  COLOFI=:CRTRESTR.RESTR_COLOFI
    //   AND  COLTDOC=:CRTRESTR.RESTR_COLTDOC;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     V_BENEFICIARIO:=NULL;
    //  END;
    //  
    //  IF V_BENEFICIARIO<>:CRTSOLICR.SOLICR_NITTER THEN
    //     LIB$ALERTA('MENSAJE','EL CONTRATO A REESTRUCTURAR PERTENECE A OTRO LOCATARIO Y NO ES POSIBLE HACER LA OPERACIÓN...',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // 
    //  BEGIN 
    //  SELECT COUNT(9) 
    //    INTO V_EXISTE
    //    FROM OPS$COLOCA.CRTRESTR
    //   WHERE --+PY21520. JDG
    //       RESTR_CODUNI=:CRTSOLICR.SOLICR_CODUNI
    //       --+
    //     AND RESTR_OFISOL=:CRTSOLICR.SOLICR_OFCSOL
    //    AND RESTR_CODSOL=:CRTSOLICR.SOLICR_CODSOL 
    //    AND RESTR_COLCOD=:CRTRESTR.RESTR_COLCOD
    //    AND RESTR_COLOFI=:CRTRESTR.RESTR_COLOFI
    //    AND RESTR_COLTDOC=:CRTRESTR.RESTR_COLTDOC;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     V_EXISTE:=0;
    //  END; 
    //  IF V_EXISTE >0 THEN
    //     LIB$ALERTA('MENSAJE','EL CONTRATO A REESTRUCTURAR YA EXISTE PARA ESTA SOLICITUD...',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtrestr_whenValidateRecord() {
        console.log("Entering CRFSOLCC_crtrestr_whenValidateRecord");
        let V_BENEFICIARIO: null = null;
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        payload1.set("RESTR_COLOFI", this.CRTRESTR.RESTR_COLOFI);
        payload1.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtrestr/crfsolcc_crtrestr_whenvalidaterecord_query1", payload1);
        // get values from result
        V_BENEFICIARIO = result1[0].get("V_BENEFICIARIO");
        if (result1 == null || result1.length == 0) {

            V_BENEFICIARIO = null;
        }

        if (V_BENEFICIARIO != this.CRTSOLICR.SOLICR_NITTER) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CONTRATO A REESTRUCTURAR PERTENECE A OTRO LOCATARIO Y NO ES POSIBLE HACER LA OPERACIÓN...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload2.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        payload2.set("RESTR_COLOFI", this.CRTRESTR.RESTR_COLOFI);
        payload2.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtrestr/crfsolcc_crtrestr_whenvalidaterecord_query2", payload2);
        // get values from result
        V_EXISTE = result2[0].get("V_EXISTE");
        if (result2 == null || result2.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE > 0) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CONTRATO A REESTRUCTURAR YA EXISTE PARA ESTA SOLICITUD...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtrestr_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLCC_crtrestr_whenNewBlockInstance() {
        console.log("Entering CRFSOLCC_crtrestr_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLCC_crtrestr_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTRESTR.RESTR_COLOFI <>'001' THEN
    //   LIB$ALERTA('MENSAJE','EL CÓDIGO PARA LA OFICINA DEL CONTRATO NO ES VÁLIDO .......',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtrestr_restrColofi_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtrestr_restrColofi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTRESTR.RESTR_COLOFI != "001") {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CÓDIGO PARA LA OFICINA DEL CONTRATO NO ES VÁLIDO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtrestr_restrColofi_whenValidateItem");
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
    //     WHERE COLOFI =:CRTRESTR.RESTR_COLOFI
    //       AND COLTDOC=:CRTRESTR.RESTR_COLTDOC
    //       AND COLCOD =:CRTRESTR.RESTR_COLCOD;
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
    async CRFSOLCC_crtrestr_restrColcod_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtrestr_restrColcod_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        let V_ESTADO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RESTR_COLOFI", this.CRTRESTR.RESTR_COLOFI);
        payload1.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload1.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtrestr/crfsolcc_crtrestr_restrcolcod_whenvalidateitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE == 0) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CONTRATO A REESTRUCTURAR NO EXISTE EN LA COLOCACIÓN. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload2.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload2.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtrestr/crfsolcc_crtrestr_restrcolcod_whenvalidateitem_query2", payload2);
        // get values from result
        V_ESTADO = result2[0].get("V_ESTADO");
        if (result2 == null || result2.length == 0) {

            V_ESTADO = null;
        }

        if (V_ESTADO != "VI") {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CONTRATO ESTA EN ESTADO DIFERENTE A VIGENTE, NO ES POSIBLE REESTRUCTURARARLO. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtrestr_restrColcod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTRESTR.RESTR_COLTDOC NOT IN ('03','04') THEN
    //   LIB$ALERTA('MENSAJE','EL CÓDIGO PARA EL TIPO DEL CONTRATO NO ES VÁLIDO .......',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtrestr_restrColtdoc_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtrestr_restrColtdoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["03", "04"].indexOf(this.CRTRESTR.RESTR_COLTDOC) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CÓDIGO PARA EL TIPO DEL CONTRATO NO ES VÁLIDO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtrestr_restrColtdoc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // COMMIT; END;
    //#endregion
    async CRFSOLCC_crtotersol_keyCommit() {
        console.log("Entering CRFSOLCC_crtotersol_keyCommit");
        console.log("Exiting CRFSOLCC_crtotersol_keyCommit");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLCC_crtotersol_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_crtotersol_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_crtotersol_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // COMMIT;
    // GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLCC_crtotersol_volverTer_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtotersol_volverTer_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCC_crtotersol_volverTer_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // COMMIT;
    // GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLCC_crtotersol_volverTer_whenMouseClick() {
        console.log("Entering CRFSOLCC_crtotersol_volverTer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCC_crtotersol_volverTer_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // :VARIABLE.OFC1:= :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.OFC2:= :CRTSOLICR.SOLICR_OFCSOL;
    // 
    // --+PY21520. JDG
    // /*:VARIABLE.OFC7:= :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.CODSOL7:= :CRTSOLICR.SOLICR_CODSOL;
    // :VARIABLE.ESTSOL7:= :CRTSOLICR.SOLICR_ESTSOL;
    // :VARIABLE.SOLICR_OFIBANC7  := :CRTSOLICR.SOLICR_OFIBANC;*/
    // --+
    // 
    //  IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    // 
    //    --+PY21520. JDG
    //    IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //    --+ 
    //  
    //    --PROYECTO 5779
    //     SET_ITEM_PROPERTY('VARIABLE.PROVNAL',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('VARIABLE.PROVEXT',ENABLED,"PROPERTY_FALSE");      
    //    --PROYECTO 5779
    //    
    //    --+PY21520. JDG  
    //    ELSE
    //      
    //      SET_ITEM_PROPERTY('VARIABLE.PROVNAL',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('VARIABLE.PROVEXT',ENABLED,"PROPERTY_FALSE");
    //      
    //    END IF; 
    //    --+
    //       
    //  ELSE
    //   
    //    --PROYECTO 5779  
    //       SET_ITEM_PROPERTY('VARIABLE.PROVNAL',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('VARIABLE.PROVEXT',ENABLED,"PROPERTY_TRUE");
    //    --PROYECTO 5779
    //  END IF; END;
    //#endregion
    async CRFSOLCC_variable_whenNewBlockInstance() {
        console.log("Entering CRFSOLCC_variable_whenNewBlockInstance");
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.OFC2 = this.CRTSOLICR.SOLICR_OFCSOL;
        if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "ENABLED", "PROPERTY_FALSE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "ENABLED", "PROPERTY_FALSE");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCC_variable_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA         NUMBER;
    //    V_ESTADO_ANTERIOR   VARCHAR2(2);
    // 
    // BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('DC','AZ') THEN
    //         LIB$ALERTA('MENSAJE','SOLICITUD NO DEVUELTA O NO APLAZADA POR CRÉDITO ...REVISE EL ESTADO ....',NULL,NULL,NULL,T_RESPUESTA);
    //     ELSE
    // 
    //         V_ESTADO_ANTERIOR := :CRTSOLICR.SOLICR_ESTSOL;
    // 
    //       UPDATE CRTSOLICR
    //          SET SOLICR_ESTSOL  = 'GR',
    //              SOLICR_FECMODI = SYSDATE
    //        WHERE --+PY21520. JDG
    //              SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND SOLICR_OFCSOL  = :CRTSOLICR.SOLICR_OFCSOL    
    //          AND SOLICR_CODSOL  = :CRTSOLICR.SOLICR_CODSOL;
    // 
    //      COMMIT;
    //      GO_BLOCK('CRTSOLICR');
    //      EXECUTE_QUERY;
    // 
    //      -- M1. AUDITORIA DE DEVOLUCION DE ESTADO
    //      -- 09/11/2002 JRINCON
    //         --+PY21520. JDG
    //         /*FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //            'SOLICR_ESTSOL', V_ESTADO_ANTERIOR, 
    //                 'GR'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));*/
    //     FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //            'SOLICR_ESTSOL', V_ESTADO_ANTERIOR, 
    //                 'GR'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'), :CRTSOLICR.SOLICR_CODUNI);                
    //       --+          
    // 
    //      -- M1 FIN
    // 
    //      IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //         GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //      END IF;
    // 
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_variable_modificar_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_modificar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO_ANTERIOR: string = null;
        if (["DC", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD NO DEVUELTA O NO APLAZADA POR CRÉDITO ...REVISE EL ESTADO ....", null, null, null, T_RESPUESTA);
        }
        else {
            V_ESTADO_ANTERIOR = this.CRTSOLICR.SOLICR_ESTSOL;
            // construct payload
            let payload1 = new Map();
            // payload1.SOLICR_CODUNI = : SOLICR_CODUNI;
            // payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            // payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
            // call REST API
            const result1 = await Rest.post("/crfsolcc_variable/crfsolcc_variable_modificar_whenmouseclick_query1", payload1);
            this.oracleFormsBuiltins.go_block("CRTSOLICR");
            this.oracleFormsBuiltins.execute_query();
            // CRFSOLCC_FRM$AUDIT_SOLIC_TAB_INS(this.CRTSOLICR.SOLICR_OFCSOL,this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", V_ESTADO_ANTERIOR, "GR" + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"),this.CRTSOLICR.SOLICR_CODUNI);
            if (this.VARIABLE.REGNRO_SOLICR > 0) {
                this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            }
        }
        console.log("Exiting CRFSOLCC_variable_modificar_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA NUMBER;
    //    VCONDICION  VARCHAR2(200);
    //    V_SOLICITUD VARCHAR2(20);
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_ESTSOL IS NOT NULL THEN
    //     
    //   --PROYECTO 5779
    //    IF :CRTSOLICR.SOLICR_VAL_TIPCRE = '03' AND  :CRTSOLICR.SOLICR_TIPCRE='04' THEN
    //        
    //        LIB$ALERTA('MENSAJE','VA A COPIAR DE UN TIPO 3 A 4 Y SE LE DESHABILITARAN LOS SIGUIENTES CAMPOS : TIPO DE BIEN,GTOS NACIÓN,%OPC COMP,TIPO DE ACTIVO','ACEPTAR','CANCELAR',NULL,T_RESPUESTA);
    //         
    //        IF T_RESPUESTA = '01' THEN
    //     
    //       LIB$ALERTA('MENSAJE','REPLICANDO SOLICITUD ......',NULL,NULL,NULL,T_RESPUESTA);
    //        
    //        PUP_COPIA_SOLICITUD;
    //        
    //        LIB$ALERTA('MENSAJE','SOLICITUD REPLICADA...FAVOR CONSULTARLA ....',NULL,NULL,NULL,T_RESPUESTA);
    //        GO_BLOCK('CRTSOLICR');
    //        EXECUTE_QUERY;
    //        LAST_RECORD;
    //        ELSE
    //         
    //         V_SOLICITUD := :SOLICR_CODSOL;
    //         
    //         CLEAR_FORM(NO_COMMIT,FULL_ROLLBACK);
    //         
    //         PRINICIAR;
    //         
    //         PU_HABILITARBOT;         
    //  
    //       
    //         /*VCONDICION := 'SOLICR_ESTSOL IN ('||'''GR'''||','||'''EC'''||','||'''DC'''||','||'''AZ'')'||
    //                 ' AND SOLICR_USCIAL ='''||USER||''''; */ 
    // 
    //           VCONDICION := 'SOLICR_CODSOL ='''||V_SOLICITUD||'''';                      
    // 
    //          SET_BLOCK_PROPERTY('CRTSOLICR', DEFAULT_WHERE, VCONDICION);
    //          
    //          GO_BLOCK('CRTSOLICR');
    //          
    //          
    //          EXECUTE_QUERY;
    //          
    //          GO_ITEM('SOLICR_TIPCRE');
    //          
    //     END IF;
    //   
    //    ELSE
    //         LIB$ALERTA('MENSAJE','VA A COPIAR LA SOLICITUD : '||:SOLICR_CODSOL ||' DESEA CONTINUAR.','ACEPTAR','CANCELAR',NULL,T_RESPUESTA);
    //       
    //           IF T_RESPUESTA = '01' THEN
    //           LIB$ALERTA('MENSAJE','REPLICANDO SOLICITUD ......',NULL,NULL,NULL,T_RESPUESTA);
    //          PUP_COPIA_SOLICITUD;
    //          LIB$ALERTA('MENSAJE','SOLICITUD REPLICADA...FAVOR CONSULTARLA ....',NULL,NULL,NULL,T_RESPUESTA);
    //          GO_BLOCK('CRTSOLICR');
    //          EXECUTE_QUERY;
    //          LAST_RECORD;
    //            ELSE  
    //             GO_ITEM('SOLICR_TIPCRE');
    //          
    //       END IF;
    //   
    //   END IF;
    //  --PROYECTO 5779
    //  
    //  
    //  ELSE
    //     LIB$ALERTA('MENSAJE','LA SOLICITUD NO SE PUEDE REPLICAR...FAVOR VERIFIQUE EL ESTADO DEBE SER GR ....',NULL,NULL,NULL,T_RESPUESTA);   
    //  END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_variable_copiar_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_copiar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let VCONDICION: string = null;
        let V_SOLICITUD: string = null;
        if ((this.CRTSOLICR.SOLICR_ESTSOL != null)) {
            // if ((this.CRTSOLICR.SOLICR_VAL_TIPCRE == "03" &&this.CRTSOLICR.SOLICR_TIPCRE == "04")) {
            //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "VA A COPIAR DE UN TIPO 3 A 4 Y SE LE DESHABILITARAN LOS SIGUIENTES CAMPOS : TIPO DE BIEN,GTOS NACIÓN,%OPC COMP,TIPO DE ACTIVO", "ACEPTAR", "CANCELAR", null, T_RESPUESTA);
            //     if (T_RESPUESTA == "01") {
            //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "REPLICANDO SOLICITUD ......", null, null, null, T_RESPUESTA);
            //         // CRFSOLCC_PUP_COPIA_SOLICITUD();
            //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD REPLICADA...FAVOR CONSULTARLA ....", null, null, null, T_RESPUESTA);
            //         this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //         this.oracleFormsBuiltins.execute_query();
            //         this.oracleFormsBuiltins.last_record();
            //     }
            //     else {
            //         V_SOLICITUD = this.VARIABLE.SOLICR_CODSOL;
            //         this.oracleFormsBuiltins.clear_form(NO_COMMIT, FULL_ROLLBACK);
            //         // CRFSOLCC_PRINICIAR();
            //         // CRFSOLCC_PU_HABILITARBOT();
            //         VCONDICION = "SOLICR_CODSOL =''" + V_SOLICITUD + "''";
            //         this.oracleFormsBuiltins.set_block_property("CRTSOLICR", DEFAULT_WHERE, VCONDICION);
            //         this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //         this.oracleFormsBuiltins.execute_query();
            //         this.oracleFormsBuiltins.go_item("SOLICR_TIPCRE");
            //     }
            // }
            // else {
            //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "VA A COPIAR LA SOLICITUD : " + SOLICR_CODSOL + " DESEA CONTINUAR.", "ACEPTAR", "CANCELAR", null, T_RESPUESTA);
            //     if (T_RESPUESTA == "01") {
            //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "REPLICANDO SOLICITUD ......", null, null, null, T_RESPUESTA);
            //         // CRFSOLCC_PUP_COPIA_SOLICITUD();
            //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD REPLICADA...FAVOR CONSULTARLA ....", null, null, null, T_RESPUESTA);
            //         this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //         this.oracleFormsBuiltins.execute_query();
            //         this.oracleFormsBuiltins.last_record();
            //     }
            //     else {
            //         this.oracleFormsBuiltins.go_item("SOLICR_TIPCRE");
            //     }
            // }
        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO SE PUEDE REPLICAR...FAVOR VERIFIQUE EL ESTADO DEBE SER GR ....", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCC_variable_copiar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // GO_BLOCK('CRTOTERSOL');
    // -- SHOW_VIEW('CANVAS13');
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDOR NACIONAL';
    // :VARIABLE.TIPO_VINCULA := '09';
    // EXECUTE_QUERY;
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_provnal_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_provnal_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDOR NACIONAL";
        this.VARIABLE.TIPO_VINCULA = "09";
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_provnal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // GO_BLOCK('CRTOTERSOL');
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDOR NACIONAL';
    // :VARIABLE.TIPO_VINCULA := '09'; END;
    //#endregion
    async CRFSOLCC_variable_provnal_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_provnal_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDOR NACIONAL";
        this.VARIABLE.TIPO_VINCULA = "09";
        console.log("Exiting CRFSOLCC_variable_provnal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // HIDE_VIEW('CANVAS12');
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // GO_BLOCK('CRTTEREXT');
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_provext_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_provext_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_provext_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // HIDE_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT');
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_provext_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_provext_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_provext_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // GO_BLOCK('CRTOTERSOL');
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // :VARIABLE.LABEL_TERCEROS := 'OTROS LOCATARIOS';
    // :VARIABLE.TIPO_VINCULA := '13';
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_locararios_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_locararios_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "OTROS LOCATARIOS";
        this.VARIABLE.TIPO_VINCULA = "13";
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_locararios_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // GO_BLOCK('CRTOTERSOL');
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // :VARIABLE.LABEL_TERCEROS := 'OTROS LOCATARIOS';
    // :VARIABLE.TIPO_VINCULA := '13';
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_locararios_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_locararios_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "OTROS LOCATARIOS";
        this.VARIABLE.TIPO_VINCULA = "13";
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_locararios_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   T_RESPUESTA        NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL  = 'AZ' THEN
    // 
    //     UPDATE CRTSOLICR
    //        SET SOLICR_ESTSOL = 'GR'
    //      WHERE --+PY21520. JDG
    //            SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //            --+
    //        AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL; 
    // 
    //     COMMIT;
    // 
    //      -- M1.  AUDITORIA DESDE ESTADO AP A ESTADO GR
    //      -- 10/11/2002 JRINCON
    //      --+PY21520. JDG
    //      /*FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', 'AZ', 
    //                              'GR'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));*/
    //      FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', 'AZ', 
    //                              'GR'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'), :CRTSOLICR.SOLICR_CODUNI);                             
    //      -- M1 FIN
    // 
    //     LIB$ALERTA('MENSAJE','SOLICITUD PUESTA EN ESTADO GR ', NULL,NULL,NULL,T_RESPUESTA); 
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
    // 
    // ELSE
    //    LIB$ALERTA('MENSAJE','SOLICITUD NO SE ENCUENTRA EN ESTADO AZ, PARA SER PUESTA EN ESTADO GR', NULL,NULL,NULL,T_RESPUESTA);
    // END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_variable_estadoGr_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_estadoGr_whenMouseClick");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AZ") {
            // construct payload
            let payload1 = new Map();
            // payload1.SOLICR_CODUNI = : SOLICR_CODUNI;
            // payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
            // payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            // call REST API
            const result1 = await Rest.post("/crfsolcc_variable/crfsolcc_variable_estadogr_whenmouseclick_query1", payload1);
            // CRFSOLCC_FRM$AUDIT_SOLIC_TAB_INS(this.CRTSOLICR.SOLICR_OFCSOL,this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", "AZ", "GR" + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"),this.CRTSOLICR.SOLICR_CODUNI);
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD PUESTA EN ESTADO GR ", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTSOLICR");
            this.oracleFormsBuiltins.execute_query();
            if (this.VARIABLE.REGNRO_SOLICR > 0) {
                this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            }
        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD NO SE ENCUENTRA EN ESTADO AZ, PARA SER PUESTA EN ESTADO GR", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCC_variable_estadoGr_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //   BEGIN
    //    
    //    COMMIT_FORM;
    //    
    //    IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //     
    //      BEGIN
    //     
    //      SELECT DECODE( GAADSO_CODUNI, NULL, 'N', 'S' ), 
    //              SUBSTR( GAADSO_TIPACT, 1, 60 ),
    //              GAADSO_VRCIAL
    //         INTO :CRTSOLICR.SOLICR_PRENDA,
    //              :CRTSOLICR.SOLICR_TIPACT,
    //              :CRTSOLICR.SOLICR_VRCIAL     
    //         FROM CRTGAADSO
    //        WHERE GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //          AND GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND GAADSO_CONSEC = ( SELECT MIN( GAADSO_CONSEC )
    //                                  FROM CRTGAADSO
    //                                 WHERE GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                                   AND GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //                                   AND GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL );
    //                                       
    //      EXCEPTION 
    //     
    //      WHEN OTHERS THEN
    //      
    //        :CRTSOLICR.SOLICR_PRENDA := NULL;
    //         :CRTSOLICR.SOLICR_TIPACT := NULL;
    //         :CRTSOLICR.SOLICR_VRCIAL := NULL;
    //  
    //      END;
    //      
    //      COMMIT_FORM;
    //      
    //    END IF;    
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
    //                    || 'CRFSOLCC.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_variable_btnRegfrmxg_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_btnRegfrmxg_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.commit_form();
            if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    // call REST API
                    const result1 = await Rest.post("/crfsolcc_variable/crfsolcc_variable_btnregfrmxg_whenbuttonpressed_query1", payload1);
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
            }
            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_variable/crfsolcc_variable_btnregfrmxg_whenbuttonpressed_query2", payload2);
            // get values from result
            //this.CRTSOLICR.DESCRI_TOTPRE = result2[0].get("CRTSOLICR.DESCRI_TOTPRE");
            this.oracleFormsBuiltins.hide_window("WINDOWG");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_HIPTCA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_variable_btnRegfrmxg_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05';
    // -- EXECUTE_QUERY;
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_locppal_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_locppal_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_locppal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05';
    // -- EXECUTE_QUERY;
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCC_variable_locppal_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_locppal_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_variable_locppal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // COMMIT;
    // GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLCC_variable_volverTerext_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_volverTerext_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCC_variable_volverTerext_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'AVALISTAS';
    // :VARIABLE.TIPO_VINCULA := '14'; END;
    //#endregion
    async CRFSOLCC_variable_aval_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_aval_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFSOLCC_variable_aval_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'AVALISTAS';
    // :VARIABLE.TIPO_VINCULA := '14'; END;
    //#endregion
    async CRFSOLCC_variable_aval_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_aval_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFSOLCC_variable_aval_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // READ_IMAGE_FILE('CARACIAL.BMP'  ,'BMP','VARIABLE.CARATULA'); END;
    //#endregion
    async CRFSOLCC_variable_caratula_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_caratula_whenMouseClick");
        this.oracleFormsBuiltins.read_image_file("CARACIAL.BMP", "BMP", "VARIABLE.CARATULA");
        console.log("Exiting CRFSOLCC_variable_caratula_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   T_RESPUESTA        NUMBER;
    //   V_AUDIT_ESTADO     VARCHAR2(2);
    //   V_CUALIT           NUMBER;
    // 
    // BEGIN
    // 
    // DEFAULT_VALUE(NULL, 'GLOBAL.AUDIT_ESTADO');
    // 
    // --VALIDACIÓN CARGUE VARIABLES CUALITATIVAS
    // 
    //   /*BEGIN
    //     SELECT COUNT(9) 
    //       INTO V_CUALIT
    //     FROM ANTVARXTE
    //     WHERE VARXTE_CODTER = :CRTSOLICR.SOLICR_NITTER;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       V_CUALIT :=0; 
    //   END;
    //   
    //   IF V_CUALIT = 0 THEN
    //   LIB$ALERTA('MENSAJE','LA SOLICITUD NO PUEDE PASAR A ANÁLISIS DE CRÉDITO, DEBE CARGAR VARIABLES CUALITATIVAS', NULL,NULL,NULL,T_RESPUESTA); 
    //   RAISE FORM_TRIGGER_FAILURE;
    //    
    //   END IF;*/---SE HABILITARA HASTA NUEVA DEFINICION
    // 
    // --+PY21520. JDG.
    // IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //  RAISE FORM_TRIGGER_FAILURE;
    //  
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL  = 'GR' THEN
    // 
    //     UPDATE CRTSOLICR
    //        SET SOLICR_ESTSOL = 'EC',
    //           SOLICR_FECRADI= SYSDATE    
    //      WHERE --+PY21520. JDG
    //            SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //            --+
    //        AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL; 
    // 
    //     COMMIT;
    // 
    //      -- M1. AUDITORIA DE PASO A ESTUDIO DE CRÉDITO
    //      -- 09/11/2002 JRINCON
    //      --+PY21520. JDG
    //      /*FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', 'GR', 
    //                              'EC'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));*/
    //    FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', 'GR', 
    //                              'EC'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'), :CRTSOLICR.SOLICR_CODUNI);                             
    //      -- M1 FIN
    // 
    //     LIB$ALERTA('MENSAJE','SOLICITUD ACTUALIZADA PARA ANÁLISIS DE CRÉDITO', NULL,NULL,NULL,T_RESPUESTA); 
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
    // 
    // ELSE
    //    LIB$ALERTA('MENSAJE','SOLICITUD EN ESTADO NO PERMITIDO PARA ENVIAR A CRÉDITO', NULL,NULL,NULL,T_RESPUESTA);
    // END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_variable_estudioCr_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_estudioCr_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_AUDIT_ESTADO: string = null;
        let V_CUALIT: number = null;
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.AUDIT_ESTADO");
        // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // if (this.CRTSOLICR.SOLICR_ESTSOL == "GR") {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.SOLICR_CODUNI = : SOLICR_CODUNI;
        //     payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
        //     payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_variable/crfsolcc_variable_estudiocr_whenmouseclick_query1", payload1);
        //     // CRFSOLCC_FRM$AUDIT_SOLIC_TAB_INS(this.CRTSOLICR.SOLICR_OFCSOL,this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", "GR", "EC" + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"),this.CRTSOLICR.SOLICR_CODUNI);
        //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD ACTUALIZADA PARA ANÁLISIS DE CRÉDITO", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
        //     this.oracleFormsBuiltins.execute_query();
        //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
        //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
        //     }
        // }
        // else {
        //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD EN ESTADO NO PERMITIDO PARA ENVIAR A CRÉDITO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFSOLCC_variable_estudioCr_whenMouseClick");
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
    //                    || 'CRFSOLCC.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_variable_btnMasprendas_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_btnMasprendas_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTGAADSO.GAADSO_CONSEC");
            this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_variable_btnMasprendas_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE  
    //  V_TIPO VARCHAR2(1);                
    // BEGIN
    // PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO,'I'); --PY 12802                  
    // END;
    //#endregion
    async CRFSOLCC_variable_crter_whenButtonPressed() {
        console.log("Entering CRFSOLCC_variable_crter_whenButtonPressed");
        let V_TIPO: string = null;
        // CRFSOLCC_PU_LLAMAR_FORTER(this.CRTSOLICR.SOLICR_NITTER, V_TIPO, "I");
        console.log("Exiting CRFSOLCC_variable_crter_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE  
    //  V_TIPO VARCHAR2(1);                
    // BEGIN
    // PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO,'I'); --PY 12802                  
    // END;
    //#endregion
    async CRFSOLCC_variable_crter_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_crter_whenMouseClick");
        let V_TIPO: string = null;
        // CRFSOLCC_PU_LLAMAR_FORTER(this.CRTSOLICR.SOLICR_NITTER, V_TIPO, "I");
        console.log("Exiting CRFSOLCC_variable_crter_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   T_RESPUESTA        NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL  = 'GR' THEN
    // 
    //     UPDATE CRTSOLICR
    //        SET SOLICR_ESTSOL = 'AN'
    //      WHERE --+PY21520. JDG
    //            SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //            --+
    //        AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL; 
    // 
    //     COMMIT;
    // 
    //      -- M1.  AUDITORIA DESDE ESTADO GR A ESTADO AN
    //      --+PY21520. JDG
    //      /*FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', 'GR', 
    //                              'AN'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));*/
    //    FRM$AUDIT_SOLIC_TAB_INS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', 'GR', 
    //                              'AN'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'), :CRTSOLICR.SOLICR_CODUNI);                             
    //      --+                             
    //      -- M1 FIN
    // 
    //     LIB$ALERTA('MENSAJE','SOLICITUD PUESTA EN ESTADO AN ', NULL,NULL,NULL,T_RESPUESTA); 
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
    // 
    // ELSE
    //    LIB$ALERTA('MENSAJE','SOLICITUD NO SE ENCUENTRA EN ESTADO GR, PARA SER PUESTA EN ESTADO AN', NULL,NULL,NULL,T_RESPUESTA);
    // END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_variable_anular_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_anular_whenMouseClick");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "GR") {
            // construct payload
            let payload1 = new Map();
            // payload1.SOLICR_CODUNI = : SOLICR_CODUNI;
            // payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
            // payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            // call REST API
            const result1 = await Rest.post("/crfsolcc_variable/crfsolcc_variable_anular_whenmouseclick_query1", payload1);
            // CRFSOLCC_FRM$AUDIT_SOLIC_TAB_INS(this.CRTSOLICR.SOLICR_OFCSOL,this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", "GR", "AN" + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"),this.CRTSOLICR.SOLICR_CODUNI);
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD PUESTA EN ESTADO AN ", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTSOLICR");
            this.oracleFormsBuiltins.execute_query();
            if (this.VARIABLE.REGNRO_SOLICR > 0) {
                this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            }
        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "SOLICITUD NO SE ENCUENTRA EN ESTADO GR, PARA SER PUESTA EN ESTADO AN", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCC_variable_anular_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    PL_ID              PARAMLIST;
    //    PL_NOMBRE          VARCHAR2(15) := 'PL_SOLICITUD';
    // 
    // BEGIN
    // 
    //    IF --+PY21520. JDG
    //       :CRTSOLICR.SOLICR_CODUNI IS NULL OR
    //       --+
    //       :CRTSOLICR.SOLICR_OFCSOL IS NULL OR
    //       :CRTSOLICR.SOLICR_CODSOL IS NULL THEN
    //       MESSAGE('EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;  
    // 
    //    --+PY21520. JDG
    //    --+FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL);
    //    FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, :CRTSOLICR.SOLICR_CODUNI);
    //    --+
    // 
    //    PL_ID  := GET_PARAMETER_LIST(PL_NOMBRE);
    // 
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    // //       RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
    // //        RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, TO_CHAR(NULL), NULL);
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_variable_btnPrintSolic_whenMouseClick() {
        console.log("Entering CRFSOLCC_variable_btnPrintSolic_whenMouseClick");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if ((((this.CRTSOLICR.SOLICR_CODUNI == null) || (this.CRTSOLICR.SOLICR_OFCSOL == null)) || (this.CRTSOLICR.SOLICR_CODSOL == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCC_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE,this.CRTSOLICR.SOLICR_OFCSOL,this.CRTSOLICR.SOLICR_CODSOL,this.CRTSOLICR.SOLICR_CODUNI);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOPCR", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "ORACLE_SHUTDOWN");
        }
        else {
            this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
            // this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOPCR", SYNCHRONOUS, RUNTIME, FILESYSTEM, null.toString(), null);
        }
        console.log("Exiting CRFSOLCC_variable_btnPrintSolic_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL THEN  --8598
    //  DELETE FROM CRTCONXSO S WHERE S.CONXSO_OFCSOL= :CRTSOLICR.SOLICR_OFCSOL AND S.CONXSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL ;
    //  P_INSERCON; --8598
    // END IF;   --8598
    // 
    // HIDE_VIEW('CONTA_PROVE');
    // GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    // */
    // NULL; END;
    //#endregion
    async CRFSOLCC_cotcontpr_aplicarPro_whenButtonPressed() {
        console.log("Entering CRFSOLCC_cotcontpr_aplicarPro_whenButtonPressed");
        console.log("Exiting CRFSOLCC_cotcontpr_aplicarPro_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // --HIDE_VIEW('CONTA_PROVE');
    // --GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    // NULL; END;
    //#endregion
    async CRFSOLCC_cotcontpr_cerrarPro_whenButtonPressed() {
        console.log("Entering CRFSOLCC_cotcontpr_cerrarPro_whenButtonPressed");
        console.log("Exiting CRFSOLCC_cotcontpr_cerrarPro_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // P_LLENARCONTAC;
    // GO_ITEM('COTCONTPR.CONTPR_CODCNT'); END;
    //#endregion
    async CRFSOLCC_cotcontpr_contprCodcnt_whenMouseClick() {
        console.log("Entering CRFSOLCC_cotcontpr_contprCodcnt_whenMouseClick");
        // CRFSOLCC_P_LLENARCONTAC();
        this.oracleFormsBuiltins.go_item("COTCONTPR.CONTPR_CODCNT");
        console.log("Exiting CRFSOLCC_cotcontpr_contprCodcnt_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // P_LLENARCONTAC;
    // GO_ITEM('COTCONTPR.CONTPR_CODCNT'); END;
    //#endregion
    async CRFSOLCC_cotcontpr_contprNombre_whenMouseClick() {
        console.log("Entering CRFSOLCC_cotcontpr_contprNombre_whenMouseClick");
        // CRFSOLCC_P_LLENARCONTAC();
        this.oracleFormsBuiltins.go_item("COTCONTPR.CONTPR_CODCNT");
        console.log("Exiting CRFSOLCC_cotcontpr_contprNombre_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // P_LLENARCONTAC;
    // GO_ITEM('COTCONTPR.CONTPR_CODCNT'); END;
    //#endregion
    async CRFSOLCC_cotcontpr_contprCorreo_whenMouseClick() {
        console.log("Entering CRFSOLCC_cotcontpr_contprCorreo_whenMouseClick");
        // CRFSOLCC_P_LLENARCONTAC();
        this.oracleFormsBuiltins.go_item("COTCONTPR.CONTPR_CODCNT");
        console.log("Exiting CRFSOLCC_cotcontpr_contprCorreo_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // P_LLENARCONTAC;
    // GO_ITEM('COTCONTPR.CONTPR_CODCNT'); END;
    //#endregion
    async CRFSOLCC_cotcontpr_wNombre_whenMouseClick() {
        console.log("Entering CRFSOLCC_cotcontpr_wNombre_whenMouseClick");
        // CRFSOLCC_P_LLENARCONTAC();
        this.oracleFormsBuiltins.go_item("COTCONTPR.CONTPR_CODCNT");
        console.log("Exiting CRFSOLCC_cotcontpr_wNombre_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_keyDelrec() {
        console.log("Entering CRFSOLCC_crtsolicr_keyDelrec");
        console.log("Exiting CRFSOLCC_crtsolicr_keyDelrec");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_crtsolicr_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFSOLCC_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY26491. JDG. 2018.06.14. VIENE DE :CRTSOLICR.POST-UPDATE
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 7 DE DICIEMBRE DE 2005
    //   --
    //   -- CUOP
    // BEGIN
    //  
    //  
    //  --IF (:CRTSOLICR.SOLICR_OFIBANC IS NULL) THEN 
    //  --    LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA DEL BANCO.'); 
    //  --END IF;
    //  
    //  
    //  IF :this.PARAMETER.get("PENCCOM") = 'S' THEN
    //     --+PY21520. JDG
    //     --+PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //     --+       ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //     --+       ,'CRTSOLICR.COMITE');
    //    PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI );           
    //     --+       
    //     --+PY26491. JDG. 2018.06.14
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+    --+SET SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+    SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+    WHERE --+PY21520. JDG
    //     --+          SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //     --+      AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+      AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //  END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    //  
    // END;
    // 
    // --+PY21520. JDG. REVISADO.
    // DECLARE
    // 
    //    T_RESPUESTA NUMBER;
    // 
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL IN ('EC','DC','AZ') THEN
    //      LIB$ALERTA('MENSAJE','CAMBIOS NO PERMITIDOS EN ESTE ESTADO, RECUERDE QUE DEBE ADECUAR EL ESTADO DE LA SOLICITUD A GR PARA PODERLA ACTUALIZAR ...',NULL,NULL,NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //  ELSIF :SOLICR_SUBCAT IS NULL AND :SOLICR_TIPCRE = '03' THEN
    //     LIB$ALERTA('MENSAJE','FALTA REGISTRAR LA SUB-CATEGORIA DEL BIEN.',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE; 
    //  END IF;
    //  
    // END;
    // --NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_preUpdate() {
        console.log("Entering CRFSOLCC_crtsolicr_preUpdate");
        try {

            if (this.PARAMETER.get("PENCCOM") == "S") {
                // CRFSOLCC_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE,this.CRTSOLICR.SOLICR_VRFINA,this.CRTSOLICR.SOLICR_ORMONET,this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE",this.CRTSOLICR.SOLICR_CODUNI);
                // this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ?this.CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
                // this.PARAMETER.get("PENCCOM") = "N";
            }
        } catch (ex) {

            // CRFSOLCC_LIB$DTNERFRMA(SQLERRM);
        }

        let T_RESPUESTA: number = null;
        if (["EC", "DC", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "CAMBIOS NO PERMITIDOS EN ESTE ESTADO, RECUERDE QUE DEBE ADECUAR EL ESTADO DE LA SOLICITUD A GR PARA PODERLA ACTUALIZAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // else if (((SOLICR_SUBCAT == null) && SOLICR_TIPCRE == "03")) {
        //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "FALTA REGISTRAR LA SUB-CATEGORIA DEL BIEN.", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_preUpdate");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /* ANTES 6754
    // IF :CRTSOLICR.SOLICR_BCODEX IS NOT NULL AND :SOLICR_TBCOLDX IS NULL THEN
    //  LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.');
    // ELSE
    //  IF :SOLICR_BCODEX IS NULL AND :SOLICR_TBCOLDX IS NOT NULL THEN
    //    GO_ITEM('SOLICR_BCODEX');
    //    :SOLICR_TBCOLDX := NULL;
    //    :DESCBCDX     := NULL;
    //  ELSE
    //   COMMIT;
    //    --PUP_ASIGAN_OFICIAL_DESEMBOLSO;            
    //   --COMMIT;
    //   END IF;
    // END IF;
    // ANTES6754
    // */
    // 
    //   --+PY21520.JDG
    //   DECLARE
    //    
    //    T_RESPUESTA NUMBER;
    //    
    //   BEGIN
    //    
    //    IF :CRTSOLICR.SOLICR_CODUNI <> '001' THEN
    //     
    //    IF NVL( :CRTSOLICR.SOLICR_PLAZMI, 0 ) > NVL( :CRTSOLICR.SOLICR_PLAZO, 0 ) THEN 
    //         
    //      LIB$ALERTA( 'MENSAJE','EL PLAZO MÍNIMO DE LA SOLICITUD NO PUEDE SER MAYOR QUE EL PLAZO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );   
    //     RAISE FORM_TRIGGER_FAILURE;
    //           
    //    END IF;
    //        
    //    IF NVL( :CRTSOLICR.SOLICR_PLAZO, 0 ) > :CRTSOLICR.SOLICR_PLAZMA THEN 
    //         
    //     LIB$ALERTA( 'MENSAJE','EL PLAZO MÁXIMO DE LA SOLICITUD NO PUEDE SER MENOR QUE EL PLAZO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );   
    //      RAISE FORM_TRIGGER_FAILURE;
    //           
    //    END IF;   
    //  
    //    END IF;
    //    
    //  END;  
    // 
    // --PRY 20512
    // -- AUTOR SARA MURCIA SMC
    // -- PROYECTO 20521
    // -- FECHA 16/12/2016
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_VALOR NUMBER;
    //   V_MENSAJE VARCHAR2(3000);
    // BEGIN
    // OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO  (V_VALOR  , :CRTSOLICR.SOLICR_NITTER , V_MENSAJE ); 
    //   IF V_VALOR = 1 THEN 
    //    LIB$ALERTA('MENSAJE',V_MENSAJE ,
    //                      NULL,
    //                      NULL,
    //                      NULL,
    //                      T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;     
    // 
    //  END IF;
    // END;
    // 
    // --  NUEVO 6754
    // DECLARE
    //  V_RESULTADO  VARCHAR2(300);
    //  V_EXISTE      NUMBER;
    //  P_RESULTADO   VARCHAR2(10) := 'OK';
    //  P_MENSAJE     VARCHAR2(200):= 'OK';
    //  V_MANOFCDAV   VARCHAR2(5);
    //  V_ORIGEN  CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //  V_REFPRO COTPROVEE.PROVEE_CODIGO%TYPE;         
    //   V_REFASE  COTCONTPR.CONTPR_CODCNT%TYPE;      
    // 
    //         
    // BEGIN
    //   
    // IF  NVL(:P_SELECCIONTIPO, 999) = 3 THEN
    //  :CRTSOLICR.W_NITREF      := NULL;
    //      :CRTSOLICR.W_DESCRI_REF  := NULL;
    //       :CRTSOLICR.SOLICR_OFIDAV := NULL;
    //       :CRTSOLICR.W_REFERIDO :='N';
    // END IF;
    // 
    // 
    //  
    // P_VALDAVI;--7876 
    // --P_VALTIPOPR(:CRTSOLICR.SOLICR_CODPRO); --7981 
    // 
    // 
    // PBD_VALORIGEN; --11786 
    // 
    // PBD_VALIGRACIA;--PY 12192
    // 
    // 
    // PU_VALTIPRO(:CRTSOLICR.SOLICR_CODPRO); --PY 13958
    // 
    // 
    //  
    // --PY 122011 
    // 
    //  IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND :CRTSOLICR.SOLICR_PUNTS$ IS NULL THEN
    //    LIB$DTNERFRMA('POR FAVOR INGRESAR SPREAD $.');  
    //  END IF;
    //  
    //  IF :CRTSOLICR.SOLICR_ORMONET <> 'PE' AND :CRTSOLICR.SOLICR_PTOUS$ IS NULL THEN
    //    LIB$DTNERFRMA('POR FAVOR INGRESAR SPREAD US$.');  
    //  END IF; 
    // 
    // 
    //  IF :CRTSOLICR.SOLICR_CODLEA IS  NULL THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR LA LINEA ESTRATEGICA.');
    //   END IF;   
    // --PY 122011 
    // 
    //  
    //  IF :CRTSOLICR.SOLICR_CODPRO IS  NULL THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR EL TIPO PRODUCTO CORRESPONDIENTE.');
    //   END IF;   
    //  
    //  
    // 
    // --6914
    // IF :CRTSOLICR.SOLICR_LINEA IS  NULL THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR LA LÍNEA CORRESPONDIENTE.');
    // ELSE
    // --6914
    //  IF :CRTSOLICR.SOLICR_BCODEX IS NOT NULL AND :SOLICR_TBCOLDX IS NULL THEN
    //      LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.');
    // --6914
    //  
    //  --ELSIF ((:CRTSOLICR.SOLICR_PRENDA IS NOT NULL) OR (:CRTSOLICR.SOLICR_HIPTCA IS NOT NULL)) AND (:CRTSOLICR.SOLICR_VLRGAR IS NULL) THEN
    //  
    //  ELSIF (:CRTSOLICR.SOLICR_PRENDA IS NOT NULL AND :CRTSOLICR.SOLICR_VRCIAL IS NULL) THEN --7843
    //  
    //     LIB$DTNERFRMA('SÍ SELECCIONO PRENDA  ES OBLIGATORIO  EL MONTO.'); --7843
    //  
    //   ELSIF (:CRTSOLICR.SOLICR_HIPTCA IS NOT NULL AND :CRTSOLICR.SOLICR_VRCHIP IS NULL)   THEN --7843
    //  
    //     LIB$DTNERFRMA('SÍ SELECCIONO HIPOTECA  ES OBLIGATORIO  EL MONTO.'); --7843
    //  
    //  
    //  ELSIF (:CRTSOLICR.SOLICR_MODALI IS NULL)  THEN
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR LA MODALIDAD CORRESPONDIENTE.');
    //  
    //  ELSIF (:CRTSOLICR.SOLICR_CODPRO = 'DAS') AND (:CRTSOLICR.SOLICR_OFIDAV IS NULL) THEN
    //  
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE PARA EL TIPO PRODUCTO DAS');
    // --6914
    // 
    //  ELSE  
    //    IF :SOLICR_BCODEX IS NULL AND :SOLICR_TBCOLDX IS NOT NULL THEN
    //     GO_ITEM('SOLICR_BCODEX');
    //     :SOLICR_TBCOLDX := NULL;
    //     :DESCBCDX     := NULL;
    //   END IF;
    //   END IF; 
    //   
    //    COMMIT; 
    // 
    // --PY 11522 
    // 
    // --PU_INSERREFE;
    // 
    // --PY 11522 
    // 
    //  
    // --PY 122011
    // BEGIN
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR;
    // END;
    // --PY 122011
    // 
    // 
    // 
    // --IF (:CRTSOLICR.SOLICR_CODPRO NOT IN ('RFP','FVZ','ACC','DAS','DAV','LEN', 'INM', 'P18', 'P24', 'P36', 'PGH', 'PIN')) 
    //  IF (:CRTSOLICR.SOLICR_CODPRO NOT IN ('RFP','FVZ','ACC','DAS','DAV','LEN', 'INM', 'P18', 'P24', 'P36', 'PGH', 'PIN','RTC','RTF','RTD', 'FM2')) --CB: PY 24272 
    //      AND (:P_SELECCIONTIPO <> 2)  THEN
    //      
    //           DELETE CRTREFPRV 
    //       WHERE --+PY21520. JDG
    //             REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //             --+
    //         AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL; 
    //        
    //  ELSIF :CRTSOLICR.SOLICR_CODPRO  IN ('RFP','FVZ','ACC') OR (:P_SELECCIONTIPO = 2)  THEN
    //   
    //      BEGIN
    //          SELECT PROVEE_CODIGO
    //           INTO V_REFPRO
    //           FROM CRTREFPRV, COTPROVEE
    //         WHERE REFPRV_CODPRV = PROVEE_CODIGO
    //              --+PY21520. JDG
    //          AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //          V_REFPRO := NULL;
    //       END; 
    //       
    //         BEGIN 
    //            SELECT CONTPR_CODCNT
    //           INTO V_REFASE
    //           FROM CRTREFPRV, COTCONTPR 
    //        WHERE REFPRV_CODASE = CONTPR_CODCNT
    //              --+PY21520. JDG
    //          AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //       V_REFASE := NULL;
    //      END;
    //      
    //     PUP_INSERT_REF_PROVEEDOR (NVL(:CRTSOLICR.REF_PROVEEDOR,V_REFPRO), NVL(:CRTSOLICR.REF_PROV_ASE,V_REFASE));
    //  
    //  END IF; 
    // 
    //  PU_INSERREFE;
    // 
    // COMMIT;
    // --6914
    // END IF;
    // --6914
    // 
    // IF :TIPXCOM_CODCOM IS NOT NULL THEN
    // --+PY21520. JDG
    // :TIPXCOM_CODUNI := :CRTSOLICR.SOLICR_CODUNI;
    // :TIPXCOM_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // --+
    // :TIPXCOM_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // COMMIT_FORM;
    // END IF;
    // 
    // --VALIDA TASAS MINIMAS PROVEEDORES REFERIDOS
    // PUP_TASARFP;
    // 
    // 
    // END; 
    // 
    // 
    // 
    // --
    // COMMIT; END;
    //#endregion
    async CRFSOLCC_crtsolicr_keyCommit() {
        console.log("Entering CRFSOLCC_crtsolicr_keyCommit");
        {

            let T_RESPUESTA: number = null;
            if (this.CRTSOLICR.SOLICR_CODUNI != "001") {
                if (this.CRTSOLICR.SOLICR_PLAZMI == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMI > this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PLAZO MÍNIMO DE LA SOLICITUD NO PUEDE SER MAYOR QUE EL PLAZO.", "ACEPTAR", null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
                if (this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO > this.CRTSOLICR.SOLICR_PLAZMA) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PLAZO MÁXIMO DE LA SOLICITUD NO PUEDE SER MENOR QUE EL PLAZO.", "ACEPTAR", null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }
        }

        {

            let T_RESPUESTA: number = null;
            let V_VALOR: number = null;
            let V_MENSAJE: string = null;
            // CRFSOLCC_OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO(V_VALOR,this.CRTSOLICR.SOLICR_NITTER, V_MENSAJE);
            if (V_VALOR == 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }

        {

            let V_RESULTADO: string = null;
            let V_EXISTE: number = null;
            let P_RESULTADO: string = 'OK';
            let P_MENSAJE: string = 'OK';
            let V_MANOFCDAV: string = null;
            let V_ORIGEN: null = null;
            let V_REFPRO: null = null;
            let V_REFASE: null = null;
            // if (P_SELECCIONTIPO == null ? 999 : P_SELECCIONTIPO == 3) {
            //     this.CRTSOLICR.W_NITREF = null;
            //     this.CRTSOLICR.W_DESCRI_REF = null;
            //     this.CRTSOLICR.SOLICR_OFIDAV = null;
            //     this.CRTSOLICR.W_REFERIDO = "N";
            // }
            // CRFSOLCC_P_VALDAVI();
            // CRFSOLCC_PBD_VALORIGEN();
            // CRFSOLCC_PBD_VALIGRACIA();
            // CRFSOLCC_PU_VALTIPRO(this.CRTSOLICR.SOLICR_CODPRO);
            if ((this.CRTSOLICR.SOLICR_ORMONET == "PE" && (this.CRTSOLICR.SOLICR_PUNTS$ == null))) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR SPREAD $.");
            }
            if ((this.CRTSOLICR.SOLICR_ORMONET != "PE" && (this.CRTSOLICR.SOLICR_PTOUS$ == null))) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR SPREAD US$.");
            }
            if ((this.CRTSOLICR.SOLICR_CODLEA == null)) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR LA LINEA ESTRATEGICA.");
            }
            if ((this.CRTSOLICR.SOLICR_CODPRO == null)) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL TIPO PRODUCTO CORRESPONDIENTE.");
            }
            if ((this.CRTSOLICR.SOLICR_LINEA == null)) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR LA LÍNEA CORRESPONDIENTE.");
            }
            else {
                if (((this.CRTSOLICR.SOLICR_BCODEX != null) )) {
                    // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.");
                }
                else if (((this.CRTSOLICR.SOLICR_PRENDA != null) && (this.CRTSOLICR.SOLICR_VRCIAL == null))) {
                    // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO PRENDA  ES OBLIGATORIO  EL MONTO.");
                }
                else if (((this.CRTSOLICR.SOLICR_HIPTCA != null) && (this.CRTSOLICR.SOLICR_VRCHIP == null))) {
                    // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO HIPOTECA  ES OBLIGATORIO  EL MONTO.");
                }
                else if ((this.CRTSOLICR.SOLICR_MODALI == null)) {
                    // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR LA MODALIDAD CORRESPONDIENTE.");
                }
                else if ((this.CRTSOLICR.SOLICR_CODPRO == "DAS" && (this.CRTSOLICR.SOLICR_OFIDAV == null))) {
                    // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE PARA EL TIPO PRODUCTO DAS");
                }
                else {
                    // if (((SOLICR_BCODEX == null) && (SOLICR_TBCOLDX != null))) {
                    //     this.oracleFormsBuiltins.go_item("SOLICR_BCODEX");
                    //     this.CRTSOLICR.SOLICR_TBCOLDX = null;
                    //     this.CRTSOLICR.DESCBCDX = null;
                    // }
                }
                // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR;
                if ((["RFP", "FVZ", "ACC", "DAS", "DAV", "LEN", "INM", "P18", "P24", "P36", "PGH", "PIN", "RTC", "RTF", "RTD", "FM2"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1)) {
                    // construct payload
                    let payload2 = new Map();
                    // payload2.SOLICR_CODUNI = : SOLICR_CODUNI;
                    // payload2.SOLICR_CODSOL = : SOLICR_CODSOL;
                    // payload2.SOLICR_OFCSOL = : SOLICR_OFCSOL;
                    // call REST API
                    const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_keycommit_query2", payload2);
                }
                else if ((["RFP", "FVZ", "ACC"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1)) {
                    // construct payload
                    let payload3 = new Map();
                    payload3.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    payload3.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload3.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    // call REST API
                    const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_keycommit_query3", payload3);
                    // get values from result
                    V_REFPRO = result3[0].get("V_REFPRO");
                    if (result3 == null || result3.length == 0) {

                        V_REFPRO = null;
                    }

                    // construct payload
                    let payload4 = new Map();
                    payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    payload4.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload4.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    // call REST API
                    const result4 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_keycommit_query4", payload4);
                    // get values from result
                    V_REFASE = result4[0].get("V_REFASE");
                    if (result4 == null || result4.length == 0) {

                        V_REFASE = null;
                    }

                    // CRFSOLCC_PUP_INSERT_REF_PROVEEDOR(this.CRTSOLICR.REF_PROVEEDOR == null ? V_REFPRO :this.CRTSOLICR.REF_PROVEEDOR,this.CRTSOLICR.REF_PROV_ASE == null ? V_REFASE :this.CRTSOLICR.REF_PROV_ASE);
                }
                // CRFSOLCC_PU_INSERREFE();
            }
            // if ((TIPXCOM_CODCOM != null)) {
            // this.CRTSOLICR.TIPXCOM_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
            // this.CRTSOLICR.TIPXCOM_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
            // this.CRTSOLICR.TIPXCOM_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
            // this.oracleFormsBuiltins.commit_form();
            // }
            // CRFSOLCC_PUP_TASARFP();
        }

        console.log("Exiting CRFSOLCC_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //   
    // CURSOR C1 IS
    // SELECT CSTVOS_CONINI,
    //        CSTVOS_CONFIN,
    //        CSTVOS_CONACT  
    //   FROM CRTCSTVOS
    //  WHERE --+PY21520. JDG
    //        CSTVOS_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        --+
    //    AND CSTVOS_OFICIN = :SOLICR_OFCSOL
    // FOR UPDATE OF CSTVOS_CONACT;
    // 
    // 
    // T_RESPUESTA  NUMBER;
    // W_EXISTE     NUMBER;
    // W_TIPER       VARCHAR2(1);
    // W_TIPO        VARCHAR2(2); 
    // RESTA     VARCHAR2(8);
    // V_CARGO     SGUSUARIOS.USU_CARGO%TYPE;
    // V_AREA      SGUSUARIOS.USU_AREA%TYPE; 
    // V_ACTA      VARCHAR2(1);
    // 
    // BEGIN
    //  
    //  /*IF (:CRTSOLICR.SOLICR_OFIBANC IS NULL) THEN
    //  
    //    LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA DEL BANCO.');
    //  
    //  END IF;*/
    //  
    //  
    //  
    //   IF (NVL(PLSQLBuiltins.string_length(:SOLICR_CODSOL), 0)=0) THEN
    //    ------------------------------------------------------------------------
    //    LOCK TABLE CRTCSTVOS IN SHARE MODE;--- REQUERIMIENTO DE SOPORTE16224
    //    ---------------------------------------------------------------------------     
    //    FOR ACT IN C1 LOOP
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
    //   
    //  :SOLICR_ESTSOL := 'GR';
    //  :SOLICR_USCRED := PLSQLBuiltins.user();
    //  :SOLICR_FECREG := SYSDATE;
    // 
    //  IF :SOLICR_SUBCAT IS NULL AND :SOLICR_TIPCRE = '03' THEN
    //     LIB$ALERTA('MENSAJE','FALTA REGISTRAR LA SUB-CATEGORIA DEL BIEN.',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE; 
    //  END IF;   
    //  
    //  
    //  
    // 
    //  /* NO FUNCIONA PUESTO QUE ESTA ACTUALIZANDO ALGO QUE NO EXISTE TODAVIA SE PASO AL POST-INSERT    
    // BEGIN 
    //       SELECT COUNT(9) 
    //        INTO W_EXISTE
    //       FROM  CRTOTERSOL
    //       WHERE OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND   OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND   OTERSOL_TIPVIN = '05';
    //       IF  W_EXISTE = 0 THEN
    //       BEGIN
    //          SELECT  TERPER,TERTID
    //          INTO   W_TIPER,W_TIPO
    //          FROM TER
    //          WHERE TERCOD = :CRTSOLICR.SOLICR_NITTER;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         NULL; 
    //       END;
    //       ----------SMT 03/01/2006-------------
    //       IF W_TIPER='N' THEN
    //         V_ACTA:='N';
    //       ELSE          
    //         V_ACTA:='S';
    //       END IF;  
    //       ---------------------------------------
    //       BEGIN
    //        INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE, OTERSOL_ACTJUN)
    //         VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'05',:CRTSOLICR.SOLICR_NITTER,W_TIPER,W_TIPO,V_ACTA);
    //       EXCEPTION
    //         WHEN OTHERS THEN
    //           MESSAGE(SQLERRM); PAUSE;
    //       END;
    //      ELSIF W_EXISTE = 1 THEN
    //      BEGIN
    //          SELECT  TERPER,TERTID
    //          INTO   W_TIPER,W_TIPO
    //          FROM TER
    //          WHERE TERCOD = :CRTSOLICR.SOLICR_NITTER;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         NULL; 
    //       END;
    //       ----------SMT 03/01/2006-------------
    //       IF W_TIPER='N' THEN
    //         V_ACTA:='N';
    //       ELSE          
    //         V_ACTA:='S';
    //       END IF;  
    //       ---------------------------------------
    //        UPDATE CRTOTERSOL
    //         SET OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //            ,OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //            ,OTERSOL_TIPVIN = '05'
    //            ,OTERSOL_NITTER = :CRTSOLICR.SOLICR_NITTER
    //            ,OTERSOL_TIPPER = W_TIPER
    //            ,OTERSOL_TIPIDE = W_TIPO-- 03/01/2006
    //            , OTERSOL_ACTJUN= V_ACTA
    //         WHERE OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND   OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND   OTERSOL_TIPVIN = '05';
    //       END IF;
    //   END;*/
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_preInsert() {
        console.log("Entering CRFSOLCC_crtsolicr_preInsert");
        let T_RESPUESTA: number = null;
        let W_EXISTE: number = null;
        let W_TIPER: string = null;
        let W_TIPO: string = null;
        let RESTA: string = null;
        let V_CARGO: null = null;
        let V_AREA: null = null;
        let V_ACTA: string = null;
        // if (PLSQLBuiltins.string_length(SOLICR_CODSOL) == null ? 0 : PLSQLBuiltins.string_length(SOLICR_CODSOL) == 0) {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_preinsert_query1", payload1);
        // }
        this.CRTSOLICR.SOLICR_ESTSOL = "GR";
        this.CRTSOLICR.SOLICR_USCRED = PLSQLBuiltins.user();
        this.CRTSOLICR.SOLICR_FECREG = PLSQLBuiltins.sysdate();
        // if (((SOLICR_SUBCAT == null) && SOLICR_TIPCRE == "03")) {
        //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "FALTA REGISTRAR LA SUB-CATEGORIA DEL BIEN.", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_preInsert");
    }

    //#region PLSQL
    // BEGIN
    // IF :SYSTEM.LAST_RECORD='FALSE' THEN
    // DOWN;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_keyDown() {
        console.log("Entering CRFSOLCC_crtsolicr_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFSOLCC_crtsolicr_keyDown");
    }

    //#region PLSQL
    // DECLARE --PY 5499 
    //  V_FECHA VARCHAR2(30); --PY 5499 
    //   V_CANTIDAD    NUMBER;   --7981
    //   T_RESPUESTA   NUMBER;   --7981
    //  
    // BEGIN
    // --:VARIABLE.REGNRO_SOLICR  := TO_NUMBER(SYSTEM.CURSOR_RECORD);
    //   BEGIN
    //     IF :CRTSOLICR.SOLICR_ESTSOL IN ('EC','DC') THEN
    //        SET_ITEM_PROPERTY('CRTSOLICR.ESTADO_SOLICITUD',"DISPLAYED",PROPERTY_ON);
    //     ELSE
    //        SET_ITEM_PROPERTY('CRTSOLICR.ESTADO_SOLICITUD',"DISPLAYED","PROPERTY_OFF");
    //     END IF;
    //   END;
    //   
    //   
    //     --PROYECTO 5779
    //     IF :CRTSOLICR.SOLICR_CODSOL IS NOT NULL THEN   
    //    
    //     :CRTSOLICR.SOLICR_VAL_TIPCRE := :CRTSOLICR.SOLICR_TIPCRE;
    //     :CRTSOLICR.SOLICR_VAL_GTONAC := :CRTSOLICR.SOLICR_GTONAC;
    //    :CRTSOLICR.SOLICR_VAL_OPCCOM := :CRTSOLICR.SOLICR_OPCCOM;    
    //      :CRTSOLICR.SOLICR_VAL_CLASAC := :CRTSOLICR.SOLICR_CLASAC;
    //      :CRTSOLICR.SOLICR_VAL_TIPBIE := :CRTSOLICR.SOLICR_TIPBIE;
    //      :CRTSOLICR.SOLICR_VAL_ACTIVO := :CRTSOLICR.SOLICR_ACTIVO;
    //     
    //     END IF;
    //  
    //     PU_HABILITARBOT;
    //    
    //     --PROYECTO 5779
    //     
    //     
    //     
    //     --PY 5499
    //     
    //     BEGIN    
    //      SELECT TO_CHAR(CR.LCKCRE_RFECHA,'DD-MM-YYYY HH:MI AM')
    //        INTO V_FECHA
    //        FROM CRTLCKCRE CR
    //       WHERE --+PY21520. JDG
    //             LCKCRE_CODUNI    = :CRTSOLICR.SOLICR_CODUNI
    //             --+
    //         AND CR.LCKCRE_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //         AND CR.LCKCRE_NSOLIC = :CRTSOLICR.SOLICR_CODSOL;
    //     
    //     EXCEPTION WHEN NO_DATA_FOUND THEN V_FECHA := NULL;
    //     END;
    //     
    //     
    //     IF V_FECHA IS NOT NULL THEN
    //      
    //      :CRTSOLICR.FECHACREDITO := 'FECHA DE RECIBIDO CRÉDITO '||V_FECHA;
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.FECHACREDITO',"DISPLAYED",PROPERTY_ON);
    //     
    //     ELSE
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.FECHACREDITO',"DISPLAYED","PROPERTY_OFF");
    //     
    //     END IF;
    //     --PY 5499
    //     
    //   --+PY21520. JDG.
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
    //                     || 'CRFSOLCC.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. '
    // //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //        END IF;
    //  
    //   END;  
    //    
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFSOLCC_crtsolicr_whenNewRecordInstance");
        let V_FECHA: string = null;
        let V_CANTIDAD: number = null;
        let T_RESPUESTA: number = null;
        if (["EC", "DC"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ESTADO_SOLICITUD", "DISPLAYED", "PROPERTY_ON");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ESTADO_SOLICITUD", "DISPLAYED", "PROPERTY_OFF");
        }
        if ((this.CRTSOLICR.SOLICR_CODSOL != null)) {
            this.CRTSOLICR.SOLICR_VAL_TIPCRE = this.CRTSOLICR.SOLICR_TIPCRE;
            this.CRTSOLICR.SOLICR_VAL_GTONAC = this.CRTSOLICR.SOLICR_GTONAC;
            this.CRTSOLICR.SOLICR_VAL_OPCCOM = this.CRTSOLICR.SOLICR_OPCCOM;
            this.CRTSOLICR.SOLICR_VAL_CLASAC = this.CRTSOLICR.SOLICR_CLASAC;
            this.CRTSOLICR.SOLICR_VAL_TIPBIE = this.CRTSOLICR.SOLICR_TIPBIE;
            this.CRTSOLICR.SOLICR_VAL_ACTIVO = this.CRTSOLICR.SOLICR_ACTIVO;
        }
        // CRFSOLCC_PU_HABILITARBOT();
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_whennewrecordinstance_query1", payload1);
        // get values from result
        V_FECHA = result1[0].get("V_FECHA");
        if (result1 == null || result1.length == 0) {

            V_FECHA = null;
        }

        if ((V_FECHA != null)) {
            this.CRTSOLICR.FECHACREDITO = "FECHA DE RECIBIDO CRÉDITO " + V_FECHA;
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.FECHACREDITO", "DISPLAYED", "PROPERTY_ON");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.FECHACREDITO", "DISPLAYED", "PROPERTY_OFF");
        }
        {

            let T_RESPUESTA: number = null;
            let V_MENSAJE: string = null;
            let result1 = [];
            try {

                // CRFSOLCC_PUP_CONTROL_BOTONES_X_UNIDAD();
            } catch (ex) {

                if (this.oracleFormsBuiltins.error_code() != 0) {
                    // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                }
            }

        }

        console.log("Exiting CRFSOLCC_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    //   
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 7 DE DICIEMBRE DE 2005
    //   --
    //   -- CUOP
    // BEGIN
    //  --VALIDACIÓN DE LINEA DE REDESCUENTO
    //  IF :CRTSOLICR.SOLICR_BCODEX IS NOT NULL AND :SOLICR_TBCOLDX IS NULL THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',REQUIRED,"PROPERTY_TRUE");
    //   LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.');
    //  END IF;
    //   PU_LEASBACK;
    //   --+PY21520. JDG
    //   /*PU_INSERTAR_ESTOBS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 'GR',
    //                      'SOLICITUD GRABADA '||'( '||TO_CHAR(SYSDATE, 'HH:MI:SS')||' )' );*/
    //   PU_INSERTAR_ESTOBS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 'GR',
    //                      'SOLICITUD GRABADA '||'( '||TO_CHAR(SYSDATE, 'HH:MI:SS')||' )', :CRTSOLICR.SOLICR_CODUNI );                     
    //   --+                     
    //   
    // END;
    // -- CUOP
    // BEGIN
    //  --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+
    //    :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    --+PY21520. JDG
    //     /*PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE');*/
    //   PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI );           
    //     --+PY26491. JDG. 2018.06.14         
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+     --+SET SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+     SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+   WHERE --+PY21520. JDG
    //     --+         SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //     --+     AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+     AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+   
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //   END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    //   END;
    // ------------------------------
    // -- MODIFICACIÓN SMT 03/01/2006
    // -------------------------------  
    // DECLARE
    // T_RESPUESTA NUMBER;
    // W_EXISTE    NUMBER;
    // W_TIPER       VARCHAR2(1);
    // W_TIPO        VARCHAR2(2); 
    // RESTA VARCHAR2(8);
    // V_CARGO   SGUSUARIOS.USU_CARGO%TYPE;
    // V_AREA    SGUSUARIOS.USU_AREA%TYPE; 
    // V_ACTA    VARCHAR2(1); 
    //     BEGIN 
    //       SELECT COUNT(9) 
    //         INTO W_EXISTE
    //         FROM CRTOTERSOL
    //        WHERE --+PY21520. JDG
    //              OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND OTERSOL_TIPVIN = '05';
    //       IF  W_EXISTE = 0 THEN
    //       BEGIN
    //          SELECT  TERPER,TERTID
    //          INTO   W_TIPER,W_TIPO
    //          FROM TER
    //          WHERE TERCOD = :CRTSOLICR.SOLICR_NITTER;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         NULL; 
    //       END;
    //       ----------SMT 03/01/2006-------------
    //       IF W_TIPER='N' THEN
    //         V_ACTA:='N';
    //       ELSE          
    //         V_ACTA:='S';
    //       END IF;  
    //       ---------------------------------------
    //       BEGIN
    //        --+PY21520. JDG
    //        /*INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE, OTERSOL_ACTJUN)
    //         VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'05',:CRTSOLICR.SOLICR_NITTER,W_TIPER,W_TIPO,V_ACTA);*/
    //         INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE, OTERSOL_ACTJUN, OTERSOL_CODUNI)
    //         VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'05',:CRTSOLICR.SOLICR_NITTER,W_TIPER,W_TIPO,V_ACTA, :CRTSOLICR.SOLICR_CODUNI);
    //        --+ 
    //       EXCEPTION
    //         WHEN OTHERS THEN
    //           MESSAGE(SQLERRM); PAUSE;
    //       END;
    //      ELSIF W_EXISTE = 1 THEN
    //      BEGIN
    //          SELECT  TERPER,TERTID
    //          INTO   W_TIPER,W_TIPO
    //          FROM TER
    //          WHERE TERCOD = :CRTSOLICR.SOLICR_NITTER;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         NULL; 
    //       END;
    //       ----------SMT 03/01/2006-------------
    //       IF W_TIPER='N' THEN
    //         V_ACTA:='N';
    //       ELSE          
    //         V_ACTA:='S';
    //       END IF;  
    //       ---------------------------------------
    //        UPDATE CRTOTERSOL
    //           SET OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //             ,OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //             ,OTERSOL_TIPVIN = '05'
    //             ,OTERSOL_NITTER = :CRTSOLICR.SOLICR_NITTER
    //             ,OTERSOL_TIPPER = W_TIPER
    //             ,OTERSOL_TIPIDE = W_TIPO-- 03/01/2006
    //             ,OTERSOL_ACTJUN = V_ACTA
    //        WHERE --+PY21520. JDG
    //              OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND OTERSOL_TIPVIN = '05';
    //       END IF;
    //    
    // 
    //   END;
    // 
    // /*
    // --7981
    // 
    // DECLARE
    //  V_CANT_PR NUMBER;
    //  V_CORREO  VARCHAR2(50);
    // BEGIN
    //  
    //  BEGIN
    //    SELECT COUNT(*)
    //     INTO V_CANT_PR
    //    FROM COTTIXPRO
    //    WHERE TIXPRO_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //     ;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN V_CANT_PR := 0;
    //    END;   
    //  
    //  
    //   BEGIN
    //    SELECT USU_MAIL
    //     INTO V_CORREO
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO = :CRTSOLICR.SOLICR_USCIAL
    //     ;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN V_CORREO := NULL;
    //    END; 
    //  
    //  
    //  IF :CRTSOLICR.SOLICR_ESTSOL = 'GR' AND SYSTEM.RECORD_STATUS = 'INSERT' AND V_CANT_PR > 0 THEN    
    //     OPS$COLOCA.PQBD_COL_CONTACESTAD.ENVIO_CORREO (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,V_CORREO,:CRTSOLICR.SOLICR_NITTER,:CRTSOLICR.SOLICR_ESTSOL,'E');
    //  END IF;
    // END; 
    // --7981
    // */; END;
    //#endregion
    async CRFSOLCC_crtsolicr_postInsert() {
        console.log("Entering CRFSOLCC_crtsolicr_postInsert");
        // if (((this.CRTSOLICR.SOLICR_BCODEX != null) && (SOLICR_TBCOLDX == null))) {
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "REQUIRED", "PROPERTY_TRUE");
        //     // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.");
        // }
        // CRFSOLCC_PU_LEASBACK();
        // CRFSOLCC_PU_INSERTAR_ESTOBS(this.CRTSOLICR.SOLICR_OFCSOL,this.CRTSOLICR.SOLICR_CODSOL, "GR", "SOLICITUD GRABADA " + "( " + SYSDATE.toString() + " )",this.CRTSOLICR.SOLICR_CODUNI);
        try {

            if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                // CRFSOLCC_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE,this.CRTSOLICR.SOLICR_VRFINA,this.CRTSOLICR.SOLICR_ORMONET,this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE",this.CRTSOLICR.SOLICR_CODUNI);
                this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? this.CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
                this.PARAMETER.set("PENCCOM", "N");
            }
        } catch (ex) {

            // CRFSOLCC_LIB$DTNERFRMA(SQLERRM);
        }

        let T_RESPUESTA: number = null;
        let W_EXISTE: number = null;
        let W_TIPER: string = null;
        let W_TIPO: string = null;
        let RESTA: string = null;
        let V_CARGO: null = null;
        let V_AREA: null = null;
        let V_ACTA: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postinsert_query1", payload1);
        // get values from result
        W_EXISTE = result1[0].get("W_EXISTE");
        if (W_EXISTE == 0) {
            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postinsert_query2", payload2);
            // get values from result
            W_TIPER = result2[0].get("W_TIPER");
            W_TIPO = result2[0].get("W_TIPO");
            if (result2 == null || result2.length == 0) {

            }

            if (W_TIPER == "N") {
                V_ACTA = "N";
            }
            else {
                V_ACTA = "S";
            }
            let result3 = new Map();
            try {

                // construct payload
                let payload3 = new Map();
                // payload3.SOLICR_OFCSOL = :this.CRTSOLICR.SOLICR_OFCSOL;
                // payload3.SOLICR_CODSOL = :this.CRTSOLICR.SOLICR_CODSOL;
                // payload3.SOLICR_NITTER = :this.CRTSOLICR.SOLICR_NITTER;
                // payload3.SOLICR_CODUNI = :this.CRTSOLICR.SOLICR_CODUNI;
                // call REST API
                const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postinsert_query3", payload3);
            } catch (ex) {

                // this.oracleFormsBuiltins.message(SQLERRM);
                // this.oracleFormsBuiltins.pause();
            }

        }
        else if (W_EXISTE == 1) {
            // construct payload
            let payload4 = new Map();
            payload4.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result4 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postinsert_query4", payload4);
            // get values from result
            W_TIPER = result4[0].get("W_TIPER");
            W_TIPO = result4[0].get("W_TIPO");
            if (result4 == null || result4.length == 0) {

            }

            if (W_TIPER == "N") {
                V_ACTA = "N";
            }
            else {
                V_ACTA = "S";
            }
            // construct payload
            let payload5 = new Map();
            // payload5.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            // payload5.SOLICR_CODSOL = : SOLICR_CODSOL;
            // payload5.SOLICR_NITTER = : SOLICR_NITTER;
            // payload5.SOLICR_CODUNI = : SOLICR_CODUNI;
            // call REST API
            const result5 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postinsert_query5", payload5);
        }
        console.log("Exiting CRFSOLCC_crtsolicr_postInsert");
    }

    //#region PLSQL
    // BEGIN --+PY26491. JDG. 2018.06.14. SE MUEVE A :CRTSOLICR.PRE-UPDATE
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 7 DE DICIEMBRE DE 2005
    //   --
    //   -- CUOP
    // /*BEGIN
    //  
    //  
    //  --IF (:CRTSOLICR.SOLICR_OFIBANC IS NULL) THEN 
    //  --    LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA DEL BANCO.'); 
    //  --END IF;
    //  
    //  
    //  IF :this.PARAMETER.get("PENCCOM") = 'S' THEN
    //     --+PY21520. JDG
    //     --+PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //     --+       ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //     --+       ,'CRTSOLICR.COMITE');
    //    PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI );           
    //     --+       
    //     --+PY26491. JDG. 2018.06.14
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+    --+SET SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+    SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+    WHERE --+PY21520. JDG
    //     --+          SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //     --+      AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+      AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //  END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    //  
    // END;*/
    // --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ/ MIGUEL ENRIQUE LOPEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    // 
    // 
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'SOLICITUD';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;
    // 
    // 
    //  EXCEPTION
    //  WHEN OTHERS THEN
    //    
    //    RAISE FORM_TRIGGER_FAILURE; 
    //          
    // END;
    //    
    // --AJ; END;
    //#endregion
    async CRFSOLCC_crtsolicr_postUpdate() {
        console.log("Entering CRFSOLCC_crtsolicr_postUpdate");
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        try {

            if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
                V_PARAMETRO = "SOLICITUD";
                // CRFSOLCC_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
            }
        } catch (ex) {

            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting CRFSOLCC_crtsolicr_postUpdate");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTOTERSOL_CUR IS      
    //     SELECT 1 FROM CRTOTERSOL C     
    //     WHERE C.OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI AND C.OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTTEREXT DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTTEREXT_CUR IS      
    //     SELECT 1 FROM CRTTEREXT C     
    //     WHERE C.TEREXT_CODUNI = :CRTSOLICR.SOLICR_CODUNI AND C.TEREXT_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.TEREXT_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTTEREXT DETAIL DECLARE SECTION
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
    //   -- BEGIN CRTTEREXT DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTTEREXT_CUR;     
    //   FETCH CRTTEREXT_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTTEREXT_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTTEREXT_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTTEREXT_CUR;
    //   --
    //   -- END CRTTEREXT DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFSOLCC_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFSOLCC_crtsolicr_onCheckDeleteMaster");
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
        console.log("Exiting CRFSOLCC_crtsolicr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // :SOLICR_ESTSOL:='GR';
    // --:SOLICR_USCIAL  :=USER;
    // :SOLICR_FECREG:=SYSDATE;
    // 
    // --PUP_ASIGAN_OFICIAL_DESEMBOLSO;
    //  
    // BEGIN
    //   IF :GLOBAL.OFCNA <> 'TOF' THEN
    //     :CRTSOLICR.SOLICR_OFCSOL := :GLOBAL.OFCNA;
    //   END IF;
    //    :CRTSOLICR.SOLICR_TITULO:=NULL;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_whenCreateRecord() {
        console.log("Entering CRFSOLCC_crtsolicr_whenCreateRecord");
        console.log("Exiting CRFSOLCC_crtsolicr_whenCreateRecord");
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
    //   IF ( (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) OR (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.TERXSOLI');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTOTERSOL');   
    //   END IF;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTTEREXT DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) OR (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.TEREXTXSOL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTTEREXT');   
    //   END IF;
    //   --
    //   -- END CRTTEREXT DETAIL PROGRAM SECTION
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
    async CRFSOLCC_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFSOLCC_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((this.CRTSOLICR.SOLICR_CODUNI != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null)) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.TERXSOLI");
            // CRFSOLCC_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL");
        }
        if ((((this.CRTSOLICR.SOLICR_CODUNI != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null)) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.TEREXTXSOL");
            // CRFSOLCC_QUERY_MASTER_DETAILS(REL_ID, "CRTTEREXT");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFSOLCC_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFSOLCC_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --7843
    // NULL;
    // --7843; END;
    //#endregion
    async CRFSOLCC_crtsolicr_onLock() {
        console.log("Entering CRFSOLCC_crtsolicr_onLock");
        console.log("Exiting CRFSOLCC_crtsolicr_onLock");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT OFI_DESCRIP
    //     INTO :DESCOFID
    //   FROM CRTOFIDAV
    //  WHERE OFI_COD  = :SOLICR_OFIDAV;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    // 
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIA
    //   FROM COTSUBCAT
    //  WHERE --+PY21520. JDG
    //        SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        --+
    //    AND SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT;
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;
    // 
    // 
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       NULL;
    // END;
    // /* PROYECTO 5779
    // BEGIN
    //       IF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //         :CRTSOLICR.ACTIVO:= 'NUEVO';
    //      ELSE
    //         :CRTSOLICR.ACTIVO:= 'USADO';
    //      END IF;  
    // END;
    // */
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_CLASAC IS NOT NULL THEN
    //      IF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //         :CRTSOLICR.ACTIVO:= 'NUEVO';
    //      ELSE
    //         :CRTSOLICR.ACTIVO:= 'USADO';
    //      END IF;
    //    ELSE
    //         :CRTSOLICR.ACTIVO:= NULL;
    //    END IF;
    // END;
    // 
    // 
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //  INTO   :CRTSOLICR.NONCIASEG    
    //  FROM   TER
    //  WHERE  TERCOD=:CRTSOLICR.SOLICR_CIASEG;
    //  EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    // END;
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ESTSOL IN ('EC','DC') THEN
    //    :CRTSOLICR.ESTADO_SOLICITUD := 'MODIFICACIONES NO PERMITIDAS EN ESTE ESTADO';
    // ELSE
    //    :CRTSOLICR.ESTADO_SOLICITUD :=NULL;
    // END IF;
    // END;
    // BEGIN
    //   SELECT  TDPRDES
    //     INTO   :CRTSOLICR.NOMBRE_ORIGEN
    //     FROM   TDPR
    //     WHERE  (TDPRCOD=:CRTSOLICR.SOLICR_SOLORIG);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       NULL;
    // END;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      :CRDITO:='CONTRATO LEASING';
    //   ELSIF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //         :CRDITO:='PAGARE';
    //   END IF;
    // END;
    // :CRTSOLICR.COMERCIAL := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // :CRTSOLICR.FLANCE    := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_UFREEL);    
    // :CRTSOLICR.FLANCE1   := :CRTSOLICR.SOLICR_UFREEL;                                                               
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      SELECT TIPBIEN_DESBIEN
    //        INTO :CRTSOLICR.BIEN
    //        FROM CRTTIPBIEN
    //       WHERE --+PY21520. JDG
    //             TIPBIEN_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //             --+
    //         AND TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE;
    //   END IF;
    // END;
    // BEGIN
    //  BEGIN
    //    SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR.BIEN_GTIA
    //      FROM CRTTIPBIEN
    //     WHERE --+PY21520. JDG
    //           TIPBIEN_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //           --+
    //       AND TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPRENDA;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   :CRTSOLICR.BIEN_GTIA:=NULL;
    //  END;
    // END;
    // BEGIN
    //   SELECT PROD_DESCRI
    //     INTO :TIPDESCR
    //     FROM CRTPRODCIA
    //    WHERE --+PY21520. JDG
    //          PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //          --+
    //      AND PROD_CODIGO = :SOLICR_CODPRO;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESCBCDX
    //   FROM CRTLINRED
    //  WHERE LINRED_CODIGO = :SOLICR_TBCOLDX;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    // 
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESLIMPTO
    //   FROM CRTLINRED
    //  WHERE LINRED_CODIGO = :SOLICR_LMULTIP;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    // 
    // 
    // --
    // -- CUOP
    // DECLARE
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
    // --NVO CAMPO
    //  BEGIN
    //     SELECT TLINDES
    //      INTO :DES_LINDESEMBO
    //     FROM TLIN
    //     WHERE TLINCOD = :CRTSOLICR.SOLICR_LINEADES
    //       AND TORIGEN  = 'SOL';
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    //  END;
    //  --
    //  BEGIN
    //    SELECT USU_NOMBRE
    //     INTO :NOM_OFICIAL
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:CRTSOLICR.SOLICR_USOFID;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //   END;  
    // --        
    // 
    // 
    // --6754
    // 
    // 
    // 
    //  BEGIN
    //    SELECT R.CONTPR_CODCNT, R.CONTPR_NOMBRE NOMBRE
    //    INTO  :CRTSOLICR.W_NITREF,:CRTSOLICR.W_DESCRI_REF
    //     FROM OPS$COLOCA.CRTREFPRV A,OPS$COLOCA.COTCONTPR R
    //     WHERE R.CONTPR_CODPRO = A.REFPRV_CODPRV
    //       AND R.CONTPR_CODCNT = A.REFPRV_CODASE
    //           --+PY21520. JDG
    //       AND REFPRV_CODUNI   = :CRTSOLICR.SOLICR_CODUNI
    //           --+
    //       AND A.REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //       AND A.REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    // 
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN 
    //      :CRTSOLICR.W_NITREF    := NULL;
    //      :CRTSOLICR.W_DESCRI_REF:= NULL;
    //   END; 
    //   
    //   IF :CRTSOLICR.W_NITREF IS NOT NULL THEN
    //      :CRTSOLICR.W_REFERIDO  := 'S';  
    //   ELSE  
    //      :CRTSOLICR.W_REFERIDO  := 'N';
    //   END IF;
    //   
    // 
    // --6754
    // 
    // 
    // 
    // /*                                                                    
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_FALSE");
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED", "PROPERTY_TRUE");
    //       
    //       SHOW_VIEW('CANVAS11');
    //       
    //       :CRTSOLICR.BIENPAG:='NO REQUERIDO';
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //   
    //   
    //  ELSIF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      
    //    --PROYECTO 5779
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',NAVIGABLE,"PROPERTY_TRUE"); 
    //      
    //       --PROYECTO 5779
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED","PROPERTY_FALSE");
    //      HIDE_VIEW('CANVAS11');
    //      
    //      
    //      --PROYECTO 5779
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',ENABLED,"PROPERTY_TRUE");
    //      --PROYECTO 5779 
    //       
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_TIPBIE');
    //   END IF;
    // END; 
    // */
    // 
    // --PY 122011
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERNOM||' '|| TERAPE,NVL(TERNOM,TERAPE)) 
    //   INTO :SOLICR_RECNITDESC
    //   FROM TER 
    //   WHERE TERCOD= :SOLICR_RECNIT;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_RECNITDESC := NULL;
    //   
    //   END;
    //   
    // BEGIN
    //   SELECT LINEST_DESCES 
    //     INTO :SOLICR_CODLEADESC
    //     FROM COTTLINEST 
    //    WHERE --+PY21520. JDG
    //          LINEST_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //          --+
    //      AND LINEST_CONSEC= :SOLICR_CODLEA;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_CODLEADESC := NULL;
    //   
    //   END;
    //   
    //   
    // --PY 122011
    // 
    // 
    //  PU_HABILITARBOT;
    //  
    //   --+PY21520. JDG. REVISADO1
    //   DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //    
    //   BEGIN
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
    //    IF :CRTSOLICR.SOLICR_CODUNI <> '001' THEN 
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
    //     SELECT UVPTSV_DESCRI
    //      INTO :CRTSOLICR.DESCRI_TISEVE
    //      FROM COTUVPTSV
    //     WHERE UVPTSV_CODIGO = :CRTSOLICR.SOLICR_TISEVE;
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
    //    EXCEPTION 
    //       
    //      WHEN OTHERS THEN
    //       
    //        :CRTSOLICR.DESCRI_PRSOCL := NULL;
    //         
    //    END;
    //     
    //   END IF;    
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
    //                      || 'CRFSOLCC.CRTSOLICR.POST-QUERY. '
    // //                      || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                      || 'SQLERRM ' || SQLERRM;
    //                      
    //            PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                      
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //          
    //       END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_postQuery() {
        console.log("Entering CRFSOLCC_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_OFIDAV", SOLICR_OFIDAV);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postquery_query1", payload1);
        // get values from result
        // DESCOFID = result1[0].get("DESCOFID");
        if (result1 == null || result1.length == 0) {

        }

        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // payload2.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
            // payload2.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postquery_query2", payload2);
            // get values from result
            // W_SUBCATEGORIA = result2[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.CRTSOLICR.W_SUBCATEGORIA = null;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postquery_query3", payload3);
        // get values from result
        this.CRTSOLICR.NOMBRE = result3[0].get("CRTSOLICR.NOMBRE");
        if (result3 == null || result3.length == 0) {

        }

        if ((this.CRTSOLICR.SOLICR_CLASAC != null)) {
            if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
                this.CRTSOLICR.ACTIVO = "NUEVO";
            }
            else {
                this.CRTSOLICR.ACTIVO = "USADO";
            }
        }
        else {
            this.CRTSOLICR.ACTIVO = null;
        }
        // construct payload
        let payload4 = new Map();
        payload4.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
        // call REST API
        const result4 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postquery_query4", payload4);
        // get values from result
        this.CRTSOLICR.NONCIASEG = result4[0].get("CRTSOLICR.NONCIASEG");
        if (result4 == null || result4.length == 0) {

        }

        if (["EC", "DC"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            this.CRTSOLICR.ESTADO_SOLICITUD = "MODIFICACIONES NO PERMITIDAS EN ESTE ESTADO";
        }
        else {
            this.CRTSOLICR.ESTADO_SOLICITUD = null;
        }
        // construct payload
        let payload5 = new Map();
        payload5.set("SOLICR_SOLORIG", this.CRTSOLICR.SOLICR_SOLORIG);
        // call REST API
        const result5 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_postquery_query5", payload5);
        // get values from result
        this.CRTSOLICR.NOMBRE_ORIGEN = result5[0].get("CRTSOLICR.NOMBRE_ORIGEN");
        if (result5 == null || result5.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.CRDITO = "CONTRATO LEASING";
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.CRDITO = "PAGARE";
        }
        console.log("Exiting CRFSOLCC_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FINAGR IS NOT NULL THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //     IF :CRTSOLICR.SOLICR_FINAGR  <> 'X' THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //     FRM$GARANTIAS_EQUIS ('FIN');
    //    
    //     END IF;
    //   ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_FALSE");  --CAHH     
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFinagr_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFinagr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINAGR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINAGR != "X") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("FIN");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFinagr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // HIDE_VIEW ('PER_GRACIA'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_txtTotplazo_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_txtTotplazo_postTextItem");
        this.oracleFormsBuiltins.hide_view("PER_GRACIA");
        console.log("Exiting CRFSOLCC_crtsolicr_txtTotplazo_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //     
    //     GO_ITEM( 'CRTSOLICR.SOLICR_MODALI' );
    //   
    //    ELSE
    //     
    //     GO_ITEM( 'CRTSOLICR.SOLICR_PLAZMI' );
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
    //                   || 'CRFCSOLCC.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_txtTotplazo_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_txtTotplazo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_MODALI");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMI");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCSOLCC.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_txtTotplazo_keyNextItem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCoseac_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCoseac_whenValidateItem");
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
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcoseac_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.DESCRI_COSEAC = result1[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COSEAC = null;
                this.CRTSOLICR.DESCRI_COSEAC = null;
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CÓDIGO DE SUBPRODUCTO INVÁLIDO.", null, null, null, T_RESPUESTA);
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

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrCoseac_whenValidateItem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCoseac_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCoseac_keyNextItem");
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

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrCoseac_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_MODALI IS NOT NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrModali_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrModali_whenValidateItem");
        // if ((SOLICR_MODALI != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODALI", SOLICR_MODALI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrmodali_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrModali_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_MODINT',ENTERABLE,"PROPERTY_OFF");
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrModali_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrModali_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_MODINT", "ENTERABLE", "PROPERTY_OFF");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrModali_postTextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    //     PBD_VALIGRACIA;--PY 12192
    //     
    //     NEXT_ITEM; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrModali_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrModali_keyNextItem");
        // CRFSOLCC_PBD_VALIGRACIA();
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrModali_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // GO_ITEM('SOLICR_OFCSOL'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrVlrtit_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrVlrtit_keyNextItem");
        this.oracleFormsBuiltins.go_item("SOLICR_OFCSOL");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrVlrtit_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED, "PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED, "PROPERTY_OFF");
    //   ELSIF
    //      :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO', "INSERT_ALLOWED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC', "INSERT_ALLOWED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',UPDATEABLE, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',UPDATEABLE, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',NAVIGABLE, "PROPERTY_TRUE");
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrModven_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrModven_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "ENABLED", "PROPERTY_OFF");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "ENABLED", "PROPERTY_OFF");
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "NAVIGABLE", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrModven_postTextItem");
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
    //    /*IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) < 1 THEN
    //        :CRTSOLICR.SOLICR_FINAGR:=NULL;
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;   --- SE QUITA ESTA VALIDACIÓN YA QUE DEBE PERMITIR VALORES NEGATIVOS PARA FINAGRO
    //                                      --- UNICAMENTE. LDB FEB. 13 2007
    //    END IF;*/
    //    
    // ELSE
    //     IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINAGRO',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR  := 'X';
    //        :CRTSOLICR.SOLICR_PUNTS$:=:CRTSOLICR.SOLICR_FINAGP;
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //        --GO_ITEM('SOLICR_TBCOLDX');
    //        FRM$GARANTIAS_EQUIS ('FIN');
    //      END IF;
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_TRUE");
    //  
    // END IF;
    // 
    // 
    // /*
    // IF  :CRTSOLICR.SOLICR_FINAGP IS NOT NULL THEN
    //    
    //    IF :CRTSOLICR.SOLICR_FINAGR IS NULL THEN
    //       MESSAGE('PASO1'); PAUSE;
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINAGRO',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR := 'X';
    //        :CRTSOLICR.SOLICR_PUNTS$:=:CRTSOLICR.SOLICR_FINAGP;
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //        FRM$GARANTIAS_EQUIS ('FIN');
    //     ELSE
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //     END IF;
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    // END IF;
    // */
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFinagp_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFinagp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINAGR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_PUNTS$ = this.CRTSOLICR.SOLICR_FINAGP;
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 :this.CRTSOLICR.SOLICR_FINAGP > 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINAGRO", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
                this.CRTSOLICR.SOLICR_PUNTS$ = this.CRTSOLICR.SOLICR_FINAGP;
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("FIN");
            }
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFinagp_whenValidateItem");
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
    async CRFSOLCC_crtsolicr_solicrFinagp_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFinagp_keyNextItem");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_FINAGR != null) && (this.CRTSOLICR.SOLICR_FINAGP == null))) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE INGRESAR VALOR DE SPRED PARA EL REDESCUENTO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFinagp_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_COLOR       VARCHAR2(20);
    //  V_FECULACT    DATE;
    //  V_FECLIMITE   DATE;
    //  T_RESPUESTA   NUMBER;
    //  V_SOLAPR      NUMBER; 
    //  
    //  
    // BEGIN 
    //   
    //    :CRTSOLICR.REF_PROV_ASE := NULL;
    //    :CRTSOLICR.REFASE := NULL;
    //    
    //     IF (:CRTSOLICR.SOLICR_CODPRO = 'RFP') OR (:P_SELECCIONTIPO = 2) THEN  
    //      IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROV_ASE','RG_PROV_ASE_REF') THEN
    //           LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_PROV_ASE_REF');
    //      END IF;
    //     ELSIF  :CRTSOLICR.SOLICR_CODPRO = 'ACC' THEN  
    //       IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROV_ASE','RG_ASESORACC') THEN
    //           LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_ASESORACC');
    //       END IF;
    //     ELSIF  :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN  
    //       IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROV_ASE','RG_ASEFINAVANZA') THEN
    //           LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_ASEFINAVANZA');
    //      END IF;   
    //     END IF;  
    //    
    //      BEGIN
    //       SELECT PROVEE_NOMBRE
    //          INTO :CRTSOLICR.REFPRO
    //        FROM COTPROVEE 
    //      WHERE PROVEE_CODIGO = :CRTSOLICR.REF_PROVEEDOR;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //         :CRTSOLICR.REFPRO := NULL;
    //      END; 
    //      
    //  -- IF :CRTSOLICR.SOLICR_CODPRO = 'RFP' THEN
    //    
    //         BEGIN
    //           SELECT DECODE(SEMPRO_COLSEM,'V', 'VERDE','A', 'AMARILLO','R', 'ROJO'), TERFACP, TRUNC(SYSDATE-365)
    //             INTO  V_COLOR, V_FECULACT, V_FECLIMITE
    //            FROM SETSEMAPROVEE, TER
    //           WHERE SEMPRO_TERCOD = TERCOD
    //           AND TERCOD = :CRTSOLICR.REF_PROVEEDOR;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //          V_COLOR := NULL;
    //          V_FECULACT := NULL;
    //         END;
    //         
    //         IF V_FECULACT <= V_FECLIMITE THEN
    //         
    //           LIB$ALERTA('MENSAJE','EL PROVEEDOR QUE DESEA SELECCIONAR NO SE ENCUENTRA ACTUALIZADO, ULTIMA FECHA DE ACTUALIZACIÓN. '||V_FECULACT,NULL,NULL,NULL,T_RESPUESTA);
    //             :CRTSOLICR.REF_PROVEEDOR := NULL;  
    //          :CRTSOLICR.REF_PROV_ASE := NULL; 
    //            :CRTSOLICR.REFPRO        := NULL; 
    //          :CRTSOLICR.REFASE        := NULL; 
    //             RAISE FORM_TRIGGER_FAILURE; 
    //         
    //         ELSE
    //         
    //           IF V_COLOR = 'VERDE' THEN
    //            
    //              LIB$ALERTA('MENSAJE','EL PROVEEDOR SE ENCUENTRA EN CATEGORIA VERDE. FECHA DE ACTUALIZACIÓN. '||V_FECULACT,NULL,NULL,NULL,T_RESPUESTA);
    //            
    //           ELSIF V_COLOR = 'AMARILLO' THEN  
    //            
    //                BEGIN
    //           SELECT COUNT(*)
    //             INTO V_SOLAPR
    //             FROM OPS$SEGUI.SETPRAMSO
    //            WHERE PRAMSO_PROVEE = :CRTOTERSOL1.OTERSOL_NITTER
    //                  --+PY21520. JDG
    //              AND PRAMSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                  --+    
    //              AND PRAMSO_OFISOL = :CRTSOLICR.SOLICR_OFCSOL
    //              AND PRAMSO_SOLICI = :CRTSOLICR.SOLICR_CODSOL;
    //                EXCEPTION WHEN NO_DATA_FOUND THEN  
    //                   V_SOLAPR := 0;
    //          END; 
    //               
    //               IF V_SOLAPR = 0 THEN
    //                 LIB$ALERTA('MENSAJE','EL PROVEEDOR QUE DESEA SELECCIONAR SE ENCUENTRA EN CATEGORIA AMARILLO, POR FAVOR VERIFIQUE PARA CUAL SOLICITUD Y CLIENTE FUE AUTORIZADO EN COMITÉ DE CREDITO.',NULL,NULL,NULL,T_RESPUESTA);
    //                  :CRTOTERSOL1.OTERSOL_NITTER   := NULL;  
    //                    :CRTOTERSOL1.OTERSOL_TIPIDE   := NULL; 
    //                    :CRTOTERSOL1.OTERSOL_TIPPER   := NULL;
    //                    :CRTOTERSOL1.OTERSOL_MONTOPAR := NULL;         
    //                 RAISE FORM_TRIGGER_FAILURE; 
    //               ELSE
    //                LIB$ALERTA('MENSAJE','EL PROVEEDOR QUE DESEA SELECCIONAR SE ENCUENTRA EN CATEGORIA AMARILLO Y ES UN CLIENTE AUTORIZADO PARA ESTA SOLICITUD.!',NULL,NULL,NULL,T_RESPUESTA);
    //               END IF;
    //            
    //           ELSIF V_COLOR = 'ROJO' THEN  
    //            
    //              LIB$ALERTA('MENSAJE','EL PROVEEDOR QUE DESEA SELECCIONAR SE ENCUENTRA EN CATEGORIA ROJO, NO PUEDE SER SELECCIONADO.',NULL,NULL,NULL,T_RESPUESTA);
    //              :CRTSOLICR.REF_PROVEEDOR := NULL;  
    //             :CRTSOLICR.REF_PROV_ASE := NULL; 
    //               :CRTSOLICR.REFPRO        := NULL; 
    //             :CRTSOLICR.REFASE        := NULL;  
    //              RAISE FORM_TRIGGER_FAILURE; 
    //            
    //           END IF; 
    //         
    //          
    //          END IF;    
    //    
    //  -- END IF; 
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_refProveedor_whenListChanged() {
        console.log("Entering CRFSOLCC_crtsolicr_refProveedor_whenListChanged");
        let V_COLOR: string = null;
        let V_FECULACT: Date = null;
        let V_FECLIMITE: Date = null;
        let T_RESPUESTA: number = null;
        let V_SOLAPR: number = null;
        this.CRTSOLICR.REF_PROV_ASE = null;
        this.CRTSOLICR.REFASE = null;
        // if ((this.CRTSOLICR.SOLICR_CODPRO == "RFP" || P_SELECCIONTIPO == 2)) {
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROV_ASE", "RG_PROV_ASE_REF"))) {
        //         // CRFSOLCC_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_PROV_ASE_REF");
        //     }
        // }
        // else if (this.CRTSOLICR.SOLICR_CODPRO == "ACC") {
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROV_ASE", "RG_ASESORACC"))) {
        //         // CRFSOLCC_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_ASESORACC");
        //     }
        // }
        // else if (this.CRTSOLICR.SOLICR_CODPRO == "FVZ") {
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROV_ASE", "RG_ASEFINAVANZA"))) {
        //         // CRFSOLCC_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_ASEFINAVANZA");
        //     }
        // }
        // construct payload
        let payload1 = new Map();
        payload1.set("REF_PROVEEDOR", this.CRTSOLICR.REF_PROVEEDOR);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_refproveedor_whenlistchanged_query1", payload1);
        // get values from result
       this.CRTSOLICR.REFPRO = result1[0].get("CRTSOLICR.REFPRO");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.REFPRO = null;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("REF_PROVEEDOR", this.CRTSOLICR.REF_PROVEEDOR);
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_refproveedor_whenlistchanged_query2", payload2);
        // get values from result
        V_COLOR = result2[0].get("V_COLOR");
        V_FECULACT = result2[0].get("V_FECULACT");
        V_FECLIMITE = result2[0].get("V_FECLIMITE");
        if (result2 == null || result2.length == 0) {

            V_COLOR = null;
            V_FECULACT = null;
        }

        if (V_FECULACT <= V_FECLIMITE) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PROVEEDOR QUE DESEA SELECCIONAR NO SE ENCUENTRA ACTUALIZADO, ULTIMA FECHA DE ACTUALIZACIÓN. " + V_FECULACT, null, null, null, T_RESPUESTA);
            this.CRTSOLICR.REF_PROVEEDOR = null;
            this.CRTSOLICR.REF_PROV_ASE = null;
            this.CRTSOLICR.REFPRO = null;
            this.CRTSOLICR.REFASE = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            if (V_COLOR == "VERDE") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PROVEEDOR SE ENCUENTRA EN CATEGORIA VERDE. FECHA DE ACTUALIZACIÓN. " + V_FECULACT, null, null, null, T_RESPUESTA);
            }
            else if (V_COLOR == "AMARILLO") {
                // construct payload
                let payload3 = new Map();
                payload3.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
                payload3.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload3.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload3.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_refproveedor_whenlistchanged_query3", payload3);
                // get values from result
                V_SOLAPR = result3[0].get("V_SOLAPR");
                if (result3 == null || result3.length == 0) {

                    V_SOLAPR = 0;
                }

                if (V_SOLAPR == 0) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PROVEEDOR QUE DESEA SELECCIONAR SE ENCUENTRA EN CATEGORIA AMARILLO, POR FAVOR VERIFIQUE PARA CUAL SOLICITUD Y CLIENTE FUE AUTORIZADO EN COMITÉ DE CREDITO.", null, null, null, T_RESPUESTA);
                    this.CRTOTERSOL1.OTERSOL_NITTER = null;
                    this.CRTOTERSOL1.OTERSOL_TIPIDE = null;
                    this.CRTOTERSOL1.OTERSOL_TIPPER = null;
                    this.CRTOTERSOL1.OTERSOL_MONTOPAR = null;
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
                else {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PROVEEDOR QUE DESEA SELECCIONAR SE ENCUENTRA EN CATEGORIA AMARILLO Y ES UN CLIENTE AUTORIZADO PARA ESTA SOLICITUD.!", null, null, null, T_RESPUESTA);
                }
            }
            else if (V_COLOR == "ROJO") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PROVEEDOR QUE DESEA SELECCIONAR SE ENCUENTRA EN CATEGORIA ROJO, NO PUEDE SER SELECCIONADO.", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.REF_PROVEEDOR = null;
                this.CRTSOLICR.REF_PROV_ASE = null;
                this.CRTSOLICR.REFPRO = null;
                this.CRTSOLICR.REFASE = null;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_refProveedor_whenListChanged");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPrsocl_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPrsocl_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrprsocl_whenvalidateitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.DESCRI_PRSOCL = result1[0].get("CRTSOLICR.DESCRI_PRSOCL");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_PRSOCL = null;
                this.CRTSOLICR.DESCRI_PRSOCL = null;
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CÓDIGO DE PROPÓSITO DE CRÉDITO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrPrsocl_whenValidateItem");
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
    //                   || 'CRFCSOLCC.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPrsocl_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPrsocl_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECDEVO");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCSOLCC.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFCSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrPrsocl_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    IF :CRTSOLICR.SOLICR_HIPTCA IS NULL AND :CRTSOLICR.SOLICR_DESHIP IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','DEBE DIGITAR (S) EN HIPOTECA .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrVrchip_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrVrchip_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_HIPTCA == null) && (this.CRTSOLICR.SOLICR_DESHIP != null))) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE DIGITAR (S) EN HIPOTECA .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrVrchip_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  T_RESPUESTA   NUMBER;
    //  V_PRIVIL      VARCHAR2(1);
    //  V_AREA        SGUSUARIOS.USU_AREA%TYPE;
    //  V_MANOFCDAV   CRTPRODCIA.PROD_MANOFC%TYPE;
    // 
    //    
    // BEGIN
    //   BEGIN
    //    SELECT USU_PRIVIL, USU_AREA
    //     INTO V_PRIVIL, V_AREA
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=:BASE.USUARIO;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     V_PRIVIL := NULL;
    //   END;
    //   
    //   IF V_PRIVIL = 'S' AND V_AREA IN ('OPE') THEN
    //    IF :CRTSOLICR.SOLICR_CODPRO <> 'DAD' THEN
    //     LIB$ALERTA('MENSAJE','EL TIPO DE PRODUCTO QUE DESEA INGRESAR NO ESTA PERMITIDO .......',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    ELSIF :CRTSOLICR.SOLICR_CODPRO IS NOT NULL THEN
    //     BEGIN
    //       SELECT PROD_DESCRI,  PROD_MANOFC
    //         INTO :TIPDESCR, V_MANOFCDAV
    //         FROM CRTPRODCIA
    //              --+PY21520.
    //        WHERE PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI       
    //          AND PROD_CODIGO = :SOLICR_CODPRO;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;  
    //   --PALABRA: BCF - 2007-12-03 RICARDO TARAZONA
    //   --IF :CRTSOLICR.SOLICR_CODPRO IN ('DAS','BCF') THEN
    // /*    IF V_MANOFCDAV = 'S' THEN                    -- ERROR EN EL GO_ITEM PY 5414
    //      SHOW_VIEW ('OFI_DAVI');
    //      GO_ITEM('CRTSOLICR.SOLICR_OFIDAV');
    //     END IF;*/
    //  
    //     IF :CRTSOLICR.SOLICR_CODPRO = 'RES' THEN
    //        SHOW_VIEW ('REESTRUCTURADOS');
    //    END IF;   
    //   
    //       /*   CAHH PY 7429 DESHACE EL PY 1942
    //     ---     --CAHH 25/01/2011  PY 1942
    //     IF :CRTSOLICR.SOLICR_CODPRO IN ('CO2','CCO') THEN
    //     SET_ITEM_PROPERTY ('BTN_COMPARTIDO', "VISIBLE", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY ('BTN_COMPARTIDO', "ENABLED", "PROPERTY_TRUE");    
    //     SET_ITEM_PROPERTY ('BTN_COMPARTIDO', ENTERABLE,ATTR_ON);
    //     SYNCHRONIZE;
    //    ELSE
    //     --SET_ITEM_PROPERTY ('BTN_COMPARTIDO', "VISIBLE", '"PROPERTY_FALSE"'); ANTES 6754
    //      SET_ITEM_PROPERTY ('BTN_COMPARTIDO', "VISIBLE", "PROPERTY_FALSE");
    //    END IF;
    //     ---
    //     */
    //     
    // 
    //     
    //     
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCodpro_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCodpro_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PRIVIL: string = null;
        let V_AREA: null = null;
        let V_MANOFCDAV: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("USUARIO", this.BASE.USUARIO);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_whenvalidateitem_query1", payload1);
        // get values from result
        V_PRIVIL = result1[0].get("V_PRIVIL");
        V_AREA = result1[0].get("V_AREA");
        if (result1 == null || result1.length == 0) {

            V_PRIVIL = null;
        }

        if ((V_PRIVIL == "S" && ["OPE"].indexOf(V_AREA) != -1)) {
            if (this.CRTSOLICR.SOLICR_CODPRO != "DAD") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL TIPO DE PRODUCTO QUE DESEA INGRESAR NO ESTA PERMITIDO .......", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else if ((this.CRTSOLICR.SOLICR_CODPRO != null)) {
            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // payload2.set("SOLICR_CODPRO", SOLICR_CODPRO);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_whenvalidateitem_query2", payload2);
            // get values from result
            // TIPDESCR = result2[0].get("TIPDESCR");
            V_MANOFCDAV = result2[0].get("V_MANOFCDAV");
            if (result2 == null || result2.length == 0) {

                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.show_view("REESTRUCTURADOS");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCodpro_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_MANOFCDAV CRTPRODCIA.PROD_MANOFC%TYPE;
    //  V_PRODRFP     CRTPRODCIA.PROD_PRODRFP%TYPE;--14801
    //  V_ORIGEN    CRTREFPRV.REFPRV_ORIGEN%TYPE; 
    //  
    //  --7981
    //  V_CANTIDAD  NUMBER; 
    //  V_CANTDET   NUMBER;
    //  V_TERCERO   VARCHAR2(13);
    //  --7981
    //  
    //  --13841
    //  V_EXITERDAV   NUMBER;
    //  V_EXIPROD     NUMBER; 
    //  
    //  --+PY21520. JDG
    //  V_CODUNI   this.CRTSOLICR.SOLICR_CODUNI%TYPE;
    //  --+
    //  
    //  V_OFCSOL     this.CRTSOLICR.SOLICR_OFCSOL%TYPE;
    //  V_CODSOL     this.CRTSOLICR.SOLICR_CODSOL%TYPE;
    //  V_FECREGSOL  this.CRTSOLICR.SOLICR_FECREG%TYPE;
    //  
    // BEGIN
    //  
    //  :P_SELECCIONTIPO:= 0;
    //  
    //   IF :CRTSOLICR.SOLICR_CODPRO IS NOT NULL THEN
    //     BEGIN
    //       SELECT PROD_DESCRI, PROD_MANOFC, PROD_PRODRFP
    //         INTO :TIPDESCR, V_MANOFCDAV, V_PRODRFP
    //         FROM CRTPRODCIA
    //        WHERE --+PY21520. JDG
    //              PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND PROD_CODIGO = :SOLICR_CODPRO;
    //        NEXT_ITEM;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF; 
    //   
    //     
    //    -- BCF 2007-12-05 RICARDO TARAZONA GARCÍA
    //    --IF :CRTSOLICR.SOLICR_CODPRO IN ('DAS','BCF') THEN
    //    --IF V_MANOFCDAV = 'S' THEN ANTES 6754
    //    --IF (V_MANOFCDAV = 'S') AND (:CRTSOLICR.SOLICR_CODPRO <> 'DAS') THEN  
    //      --SHOW_VIEW ('OFI_DAVI');
    //      --GO_ITEM('CRTSOLICR.SOLICR_OFIDAV');
    //    --END IF;
    //    
    //    --6754
    //    IF (V_MANOFCDAV = 'S') AND (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN     
    //   
    //         
    //       IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //              LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTAthis.CRTSOLICR.TIPO_REFERENCIA');
    //     END IF;
    //     
    // 
    //     P_LISTAREFERIDOS;
    // 
    //        HIDE_VIEW('PROVEE_REF');
    //      SHOW_VIEW ('OFI_DAVI_REF');     
    //       GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //           
    //       
    //    END IF;
    //    
    //    --13841
    //    --VALIDACION SI EL TERCERO YA HA TENIDO NEGOCIOS REFERIDOS CON DAVIVIENDA,
    //    --LO OBLIGA A REGISTRAR UN REFERIDO DAVIVIENDA
    //    ----------------------------
    //     BEGIN
    //      
    //      --+PY21520. JDG
    //      /*SELECT SOLICR_OFCSOL,SOLICR_CODSOL, MAX(SOLICR_FECREG ), COUNT(*) 
    //        INTO V_OFCSOL, V_CODSOL, V_FECREGSOL , V_EXITERDAV
    //    FROM CRTREFPRV, CRTSOLICR
    //    WHERE REFPRV_OFCSOL = SOLICR_OFCSOL
    //      AND REFPRV_CODSOL = SOLICR_CODSOL
    //      AND REFPRV_CODPRV = '860034313'--NIT DAVIVIENDA
    //      AND SOLICR_NITTER = :CRTSOLICR.SOLICR_NITTER
    //         AND SOLICR_ESTSOL <> 'RE'
    //         AND ROWNUM = 1
    //       GROUP BY  SOLICR_OFCSOL,SOLICR_CODSOL;*/
    //       SELECT SOLICR_CODUNI, SOLICR_OFCSOL,SOLICR_CODSOL, MAX(SOLICR_FECREG ), COUNT(*) 
    //        INTO V_CODUNI, V_OFCSOL, V_CODSOL, V_FECREGSOL , V_EXITERDAV
    //    FROM CRTREFPRV, CRTSOLICR
    //    WHERE REFPRV_OFCSOL = SOLICR_OFCSOL
    //      AND REFPRV_CODSOL = SOLICR_CODSOL
    //      AND REFPRV_CODPRV = '860034313'--NIT DAVIVIENDA
    //      AND SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //      AND SOLICR_NITTER = :CRTSOLICR.SOLICR_NITTER
    //         AND SOLICR_ESTSOL <> 'RE'
    //         AND ROWNUM = 1
    //       GROUP BY SOLICR_CODUNI, SOLICR_OFCSOL,SOLICR_CODSOL;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_EXITERDAV := 0;
    //     END; 
    //     
    //     IF V_EXITERDAV > 0 THEN
    //          
    //          BEGIN
    //            SELECT COUNT(*) 
    //              INTO V_EXIPROD
    //              FROM COTTIXPRO, CRTTIPROLI 
    //             WHERE --+PY21520. JDG
    //                   TIXPRO_CODUNI = IPROLI_CODUNI
    //                   --+
    //               AND TIXPRO_CODIGO = IPROLI_CTIPRO 
    //                  AND TIXPRO_CODPRO = '860034313'
    //               AND TIXPRO_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //                  AND IPROLI_CLINEA = :CRTSOLICR.SOLICR_LINEA;              
    //         EXCEPTION WHEN NO_DATA_FOUND THEN   
    //              V_EXIPROD := 0;
    //         END;
    //                 
    //                 
    //          IF V_EXIPROD = 0 THEN
    //              LIB$ALERTA('MENSAJE','EL TERCERO YA HA RADICADO NEGOCIOS CON DAVIVIENDA. INGRESE EL TIPO DE PRODUCTO INDICADO PARA REFERIDOS DAVIVIENDA.......',NULL,NULL,NULL,T_RESPUESTA);
    //              :CRTSOLICR.SOLICR_CODPRO := NULL;
    //              :CRTSOLICR.TIPDESCR := NULL;
    //              GO_ITEM('CRTSOLICR.SOLICR_CODPRO');
    //          ELSE
    //            LIB$ALERTA('MENSAJE','EL TERCERO YA HA RADICADO NEGOCIOS CON  DAVIVIENDA. DEBE VALIDAR EL REFERIDO DAVIVIENDA.......',NULL,NULL,NULL,T_RESPUESTA);
    //            
    //            IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //                  LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTAthis.CRTSOLICR.TIPO_REFERENCIA');
    //         END IF;
    //         
    //     
    //         --P_LISTAREFERIDOS;
    //   
    // 
    //             
    //            BEGIN
    //           SELECT TR.TIPREF REFE,       
    //                      SR.SOLICR_OFIDAV OFICINA,
    //                      DAV.OFI_DESCRIP DESCRIPCION,
    //                      R.CONTPR_CODCNT  NIT,
    //                      R.CONTPR_NOMBRE  NOMBRE,       
    //                      R.CONTPR_CORREO CORREO
    //          
    //          INTO :CRTSOLICR.TIPO_REFERENCIA,
    //             :CRTSOLICR.W_OFICINA,
    //             :CRTSOLICR.W_OFICINA_DESCR,
    //             :CRTSOLICR.W_CODIGOASESOR,
    //             :CRTSOLICR.W_NOMBREASESOR,
    //             :CRTSOLICR.W_CORREOASESOR
    //          
    //          FROM OPS$COLOCA.CRTREFPRV F,OPS$COLOCA.COTCONTPR R,CRTOFIDAV DAV,CRTSOLICR SR, 
    //                 (SELECT SUBSTR (CAXPRO_DESCRP,1,1) TIPREF, CAXPRO_CODIGO  FROM COTCAXPRO WHERE CAXPRO_CODPRO = '860034313') TR --NIT DAVIVIENDA
    //                 WHERE R.CONTPR_CODPRO = F.REFPRV_CODPRV  
    //                   AND R.CONTPR_CODCNT  = F.REFPRV_CODASE
    //                   --+PY21520. JDG
    //                   AND SOLICR_CODUNI    =  REFPRV_CODUNI
    //                   --+
    //                   AND SR.SOLICR_OFCSOL =  F.REFPRV_OFCSOL 
    //                   AND SR.SOLICR_CODSOL =  F.REFPRV_CODSOL 
    //                   AND SR.SOLICR_OFIDAV =  DAV.OFI_COD
    //                   AND R.CONTPR_CARPAD = TR.CAXPRO_CODIGO(+)
    //                   --+PY21520. JDG
    //                   AND REFPRV_CODUNI   = V_CODUNI
    //                   --+
    //                   AND F.REFPRV_OFCSOL = V_OFCSOL
    //                   AND F.REFPRV_CODSOL = V_CODSOL
    //            AND ROWNUM = 1; 
    //            EXCEPTION WHEN NO_DATA_FOUND THEN
    //                 :CRTSOLICR.TIPO_REFERENCIA := 4;
    //            :CRTSOLICR.W_OFICINA := NULL;
    //            :CRTSOLICR.W_OFICINA_DESCR := NULL; 
    //            :CRTSOLICR.W_CODIGOASESOR := NULL;
    //            :CRTSOLICR.W_NOMBREASESOR := NULL;
    //            :CRTSOLICR.W_CORREOASESOR := NULL;
    //              END;
    //     
    //          SHOW_VIEW ('OFI_DAVI_REF');     
    //           GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //             
    //           
    //          END IF; 
    //         
    //         
    // 
    //    ELSE
    //     
    //        ----------------------------
    //        --CAMBIO KARO
    //        -------------------------------------------------------------------------------------------------------------
    //        IF ((:CRTSOLICR.SOLICR_CODPRO NOT IN('DAS','RFP')) AND V_MANOFCDAV = 'S' OR (V_PRODRFP = 'S')) THEN
    //          LIB$ALERTA('MENSAJE','QUE TIPO DE PRODUCTO DESEA UTILIZAR?','DAS','RFP','CANCELAR',T_RESPUESTA);
    //        --PROYECTO 11522 PARA CAMBIO RFP 
    //        --LIB$ALERTA('MENSAJE','QUE TIPO DE PRODUCTO QUIERE UTILIZAR?','DAS','RFP','CANCELAR',T_RESPUESTA);
    //           IF (T_RESPUESTA = 1) THEN 
    //            
    //              :P_SELECCIONTIPO := 1;
    //              :GLOBAL.P_VEN_RPT := '0';
    //              
    //              IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //                      LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTAthis.CRTSOLICR.TIPO_REFERENCIA');
    //            END IF;
    //            
    //               HIDE_VIEW ('PROVEE_REF');              
    //             SHOW_VIEW ('OFI_DAVI_REF');     
    //              GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //          
    //           ELSIF (T_RESPUESTA = 2) THEN 
    //       
    //             :GLOBAL.P_VEN_RPT := '2';
    //             :P_SELECCIONTIPO := 2;
    //             PUP_VALIDAPRODREF;
    //               
    //           ELSIF (T_RESPUESTA = 3) THEN 
    //       
    //              :P_SELECCIONTIPO := 3;
    //              :GLOBAL.P_VEN_RPT := '0';
    //                 
    //             /* :GLOBAL.P_VEN_RPT := '2';
    //             PUP_VALIDAPRODREF;*/
    //                 
    //           END IF;
    //        
    //        ELSIF :CRTSOLICR.SOLICR_CODPRO  = 'DAS' THEN
    //          
    //          :P_SELECCIONTIPO := 0;
    //          :GLOBAL.P_VEN_RPT := '0';
    //          
    //        ELSE 
    //          :P_SELECCIONTIPO := 3;
    //          :GLOBAL.P_VEN_RPT := '0';
    //        END IF;
    //        -------------------------------------------------------------------------------------------------------------    
    //             
    //     END IF;    
    //    
    // 
    // 
    //    --- CONTROL PARA CONTRATOS REESTRUCTURADOS
    //    -- COMMIT;
    //     IF :CRTSOLICR.SOLICR_CODPRO = 'RES' THEN
    //       SHOW_VIEW('REESTRUCTURADOS');
    //       GO_ITEM('CRTRESTR.RESTR_COLOFI');
    //     END IF;    
    // 
    //        --  CAHH  TIPO DE LÍNEA DAD 
    //    IF :CRTSOLICR.SOLICR_CODPRO = 'DAD' THEN
    //      SHOW_VIEW ('OFI_VEHI');
    //      GO_ITEM('CRTSOLICR.SOLICR_OFIVEHI');
    //    END IF;
    //    
    //    
    //    --6914   
    //    IF (:CRTSOLICR.SOLICR_LINEA = 'LI') AND (:CRTSOLICR.SOLICR_CODPRO='LEN') THEN
    //       :CRTSOLICR.SOLICR_GTONAC := 'S';     
    //    END IF;  
    //    
    //    IF (:CRTSOLICR.SOLICR_LINEA = 'LE') AND (:CRTSOLICR.SOLICR_CODPRO='LEN') THEN
    //       :CRTSOLICR.SOLICR_GTONAC := 'N';     
    //    END IF;   
    //    
    //    --6914
    // 
    // 
    //      BEGIN
    //          SELECT PROVEE_NOMBRE
    //           INTO :CRTSOLICR.REFPRO
    //           FROM CRTREFPRV, COTPROVEE
    //        WHERE REFPRV_CODPRV = PROVEE_CODIGO
    //              --+PY21520. JDG
    //          AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //          :CRTSOLICR.REFPRO := NULL;
    //       END; 
    //       
    //         BEGIN 
    //            SELECT CONTPR_NOMBRE
    //           INTO :CRTSOLICR.REFASE
    //           FROM CRTREFPRV, COTCONTPR 
    //        WHERE REFPRV_CODASE = CONTPR_CODCNT
    //             --+PY21520. JDG
    //          AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //       :CRTSOLICR.REFASE := NULL;
    //      END;
    //  
    //      --VALIDA LISTA DE PROVEEDORES RFP, FVZ, ACC
    //      PUP_VALIDAPRODREF; 
    //    
    // 
    //     
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCodpro_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCodpro_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MANOFCDAV: null = null;
        let V_PRODRFP: null = null;
        let V_ORIGEN: null = null;
        let V_CANTIDAD: number = null;
        let V_CANTDET: number = null;
        let V_TERCERO: string = null;
        let V_EXITERDAV: number = null;
        let V_EXIPROD: number = null;
        let V_CODUNI: null = null;
        let V_OFCSOL: null = null;
        let V_CODSOL: null = null;
        let V_FECREGSOL: null = null;
        // this.CRTSOLICR.P_SELECCIONTIPO = 0;
        if ((this.CRTSOLICR.SOLICR_CODPRO != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
            // call REST API
            const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_keynextitem_query1", payload1);
            // get values from result
            // TIPDESCR = result1[0].get("TIPDESCR");
            V_MANOFCDAV = result1[0].get("V_MANOFCDAV");
            V_PRODRFP = result1[0].get("V_PRODRFP");
            this.oracleFormsBuiltins.next_item();
            if (result1 == null || result1.length == 0) {

                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if ((V_MANOFCDAV == "S" &&this.CRTSOLICR.SOLICR_CODPRO == "DAS")) {
            // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
            //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTAthis.CRTSOLICR.TIPO_REFERENCIA");
            // }
            // CRFSOLCC_P_LISTAREFERIDOS();
            this.oracleFormsBuiltins.hide_view("PROVEE_REF");
            this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        payload2.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_keynextitem_query2", payload2);
        // get values from result
        V_CODUNI = result2[0].get("V_CODUNI");
        V_OFCSOL = result2[0].get("V_OFCSOL");
        V_CODSOL = result2[0].get("V_CODSOL");
        V_FECREGSOL = result2[0].get("V_FECREGSOL");
        V_EXITERDAV = result2[0].get("V_EXITERDAV");
        if (result2 == null || result2.length == 0) {

            V_EXITERDAV = 0;
        }

        if (V_EXITERDAV > 0) {
            // construct payload
            let payload3 = new Map();
            payload3.set("SOLICR_CODPRO",this.CRTSOLICR.SOLICR_CODPRO);
            payload3.set("SOLICR_LINEA",this.CRTSOLICR.SOLICR_LINEA);
            // call REST API
            const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_keynextitem_query3", payload3);
            // get values from result
            V_EXIPROD = result3[0].get("V_EXIPROD");
            if (result3 == null || result3.length == 0) {

                V_EXIPROD = 0;
            }

            if (V_EXIPROD == 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL TERCERO YA HA RADICADO NEGOCIOS CON DAVIVIENDA. INGRESE EL TIPO DE PRODUCTO INDICADO PARA REFERIDOS DAVIVIENDA.......", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_CODPRO = null;
                this.CRTSOLICR.TIPDESCR = null;
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODPRO");
            }
            else {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL TERCERO YA HA RADICADO NEGOCIOS CON  DAVIVIENDA. DEBE VALIDAR EL REFERIDO DAVIVIENDA.......", null, null, null, T_RESPUESTA);
                // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
                //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTAthis.CRTSOLICR.TIPO_REFERENCIA");
                // }
                // construct payload
                let payload4 = new Map();
                payload4.set("W_CORREOASESOR",this.CRTSOLICR.W_CORREOASESOR);
                payload4.set("W_NOMBREASESOR",this.CRTSOLICR.W_NOMBREASESOR);
                payload4.set("TIPO_REFERENCIA",this.CRTSOLICR.TIPO_REFERENCIA);
                payload4.set("W_CODIGOASESOR",this.CRTSOLICR.W_CODIGOASESOR);
                payload4.set("W_OFICINA",this.CRTSOLICR.W_OFICINA);
                payload4.set("W_OFICINA_DESCR",this.CRTSOLICR.W_OFICINA_DESCR);
                // call REST API
                const result4 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_keynextitem_query4", payload4);
                // get values from result
               this.CRTSOLICR.TIPO_REFERENCIA = result4[0].get("CRTSOLICR.TIPO_REFERENCIA");
               this.CRTSOLICR.W_OFICINA = result4[0].get("CRTSOLICR.W_OFICINA");
               this.CRTSOLICR.W_OFICINA_DESCR = result4[0].get("CRTSOLICR.W_OFICINA_DESCR");
               this.CRTSOLICR.W_CODIGOASESOR = result4[0].get("CRTSOLICR.W_CODIGOASESOR");
               this.CRTSOLICR.W_NOMBREASESOR = result4[0].get("CRTSOLICR.W_NOMBREASESOR");
               this.CRTSOLICR.W_CORREOASESOR = result4[0].get("CRTSOLICR.W_CORREOASESOR");
                if (result4 == null || result4.length == 0) {

                    // this.CRTSOLICR.TIPO_REFERENCIA = 4;
                    this.CRTSOLICR.W_OFICINA = null;
                    this.CRTSOLICR.W_OFICINA_DESCR = null;
                    this.CRTSOLICR.W_CODIGOASESOR = null;
                    this.CRTSOLICR.W_NOMBREASESOR = null;
                    this.CRTSOLICR.W_CORREOASESOR = null;
                }

                this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
                this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
            }
        }
        else {
            if (((["DAS", "RFP"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1 && V_MANOFCDAV == "S") || V_PRODRFP == "S")) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "QUE TIPO DE PRODUCTO DESEA UTILIZAR?", "DAS", "RFP", "CANCELAR", T_RESPUESTA);
                if (T_RESPUESTA == 1) {
                    // this.CRTSOLICR.P_SELECCIONTIPO = 1;
                    // this.GLOBAL.P_VEN_RPT = "0";
                    // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
                    //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTAthis.CRTSOLICR.TIPO_REFERENCIA");
                    // }
                    this.oracleFormsBuiltins.hide_view("PROVEE_REF");
                    this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
                }
                else if (T_RESPUESTA == 2) {
                    // this.GLOBAL.P_VEN_RPT = "2";
                    // this.CRTSOLICR.P_SELECCIONTIPO = 2;
                    // CRFSOLCC_PUP_VALIDAPRODREF();
                }
                else if (T_RESPUESTA == 3) {
                    // this.CRTSOLICR.P_SELECCIONTIPO = 3;
                    // this.GLOBAL.P_VEN_RPT = "0";
                }
            }
            else if (this.CRTSOLICR.SOLICR_CODPRO == "DAS") {
                // this.CRTSOLICR.P_SELECCIONTIPO = 0;
                // this.GLOBAL.P_VEN_RPT = "0";
            }
            else {
                // this.CRTSOLICR.P_SELECCIONTIPO = 3;
                // this.GLOBAL.P_VEN_RPT = "0";
            }
        }
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.show_view("REESTRUCTURADOS");
            this.oracleFormsBuiltins.go_item("CRTRESTR.RESTR_COLOFI");
        }
        if (this.CRTSOLICR.SOLICR_CODPRO == "DAD") {
            this.oracleFormsBuiltins.show_view("OFI_VEHI");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OFIVEHI");
        }
        if ((this.CRTSOLICR.SOLICR_LINEA == "LI" &&this.CRTSOLICR.SOLICR_CODPRO == "LEN")) {
            this.CRTSOLICR.SOLICR_GTONAC = "S";
        }
        if ((this.CRTSOLICR.SOLICR_LINEA == "LE" &&this.CRTSOLICR.SOLICR_CODPRO == "LEN")) {
            this.CRTSOLICR.SOLICR_GTONAC = "N";
        }
        // construct payload
        let payload5 = new Map();
        payload5.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
        payload5.set("SOLICR_OFCSOL",this.CRTSOLICR.SOLICR_OFCSOL);
        payload5.set("SOLICR_CODSOL",this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result5 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_keynextitem_query5", payload5);
        // get values from result
       this.CRTSOLICR.REFPRO = result5[0].get("CRTSOLICR.REFPRO");
        if (result5 == null || result5.length == 0) {

            this.CRTSOLICR.REFPRO = null;
        }

        // construct payload
        let payload6 = new Map();
        payload6.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
        payload6.set("SOLICR_OFCSOL",this.CRTSOLICR.SOLICR_OFCSOL);
        payload6.set("SOLICR_CODSOL",this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result6 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcodpro_keynextitem_query6", payload6);
        // get values from result
       this.CRTSOLICR.REFASE = result6[0].get("CRTSOLICR.REFASE");
        if (result6 == null || result6.length == 0) {

            this.CRTSOLICR.REFASE = null;
        }

        // CRFSOLCC_PUP_VALIDAPRODREF();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCodpro_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :SOLICR_LINEADES = 'LX' AND :SOLICR_FDESEMCLI IS NULL THEN
    //  --CAHH  PY 1942 INCLUYE  :TXT_FLAG = 'S'       
    //  --IF :SOLICR_LINEADES = 'LX' AND :SOLICR_FDESEMCLI IS NULL AND :TXT_FLAG = 'S' THEN   /*CAHH PY 7429 DESHACE EL PY 1942*/
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    // ELSIF :SOLICR_FDESEMCLI < (SYSDATE + 1) THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY + DOS DIAS'||TO_CHAR(SYSDATE + 2,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((SOLICR_LINEADES == "LX" && (SOLICR_FDESEMCLI == null))) {
        //     // CRFSOLCC_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        // }
        // else if (SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate() + 1) {
        //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY + DOS DIAS" + PLSQLBuiltins.sysdate() + 2.toString());
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_PIGOPC ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_CTAOFC',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CTAOFC',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CTATIP',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CTATIP',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CTACOD',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CTACOD',ENTERABLE,"ATTR_OFF");
    //       GO_ITEM('CRTSOLICR.SOLICR_ACTAVA');
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_CTAOFC',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CTAOFC',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CTATIP',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CTATIP',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CTACOD',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CTACOD',ENTERABLE,ATTR_ON);
    //       GO_ITEM('CRTSOLICR.SOLICR_CTAOFC');
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPigopc_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPigopc_keyNextItem");
        if (this.CRTSOLICR.SOLICR_PIGOPC == "N") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTAOFC", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTAOFC", ENTERABLE, "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTATIP", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTATIP", ENTERABLE, "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTACOD", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTACOD", ENTERABLE, "ATTR_OFF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ACTAVA");
        }
        else {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTAOFC", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTAOFC", ENTERABLE, ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTATIP", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTATIP", ENTERABLE, ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTACOD", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CTACOD", ENTERABLE, ATTR_ON);
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CTAOFC");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPigopc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    //   --
    //   -- MODIFICACIÓN: TERRES: TERCEROS RESTRINGIDOS
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 20 DE ENERO DE 2005
    //   --
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITCOA IS NOT NULL THEN
    //     PVALTER(:CRTSOLICR.SOLICR_NITCOA); -- TERRES
    //   END IF;
    // END;
    // --; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrNitcoa_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrNitcoa_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_NITCOA != null)) {
            // CRFSOLCC_PVALTER(this.CRTSOLICR.SOLICR_NITCOA);
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrNitcoa_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    // 
    //     IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
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
    //                    || 'CRFSOLCC.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_btnCupotaxi_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_btnCupotaxi_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_RIMPES");
                }
                else {
                    if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" :this.CRTSOLICR.SOLICR_COSEAC == "1") {
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_COCUTA");
                    }
                    else {
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
                    }
                }
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_btnCupotaxi_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_IFI = 'X' THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
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
    async CRFSOLCC_crtsolicr_solicrIfip_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrIfip_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_IFI == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 :this.CRTSOLICR.SOLICR_IFIP < 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 :this.CRTSOLICR.SOLICR_IFIP > 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR IFI", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_IFI = "X";
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrIfip_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :CRTSOLICR.SOLICR_IFIP IS NOT NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrIfip_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrIfip_keyNextItem");
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
        console.log("Exiting CRFSOLCC_crtsolicr_solicrIfip_keyNextItem");
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
    async CRFSOLCC_crtsolicr_solicrSeguro_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrSeguro_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_SEGURO) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrSeguro_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_SEGURO ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',ENTERABLE,"ATTR_OFF");
    //       GO_ITEM('CRTSOLICR.SOLICR_OBSGTI');
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_CSEGGT',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.NOM_CIASEG',ENTERABLE,ATTR_ON);
    //       NEXT_ITEM;
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrSeguro_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrSeguro_keyNextItem");
        if (this.CRTSOLICR.SOLICR_SEGURO == "N") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", ENTERABLE, "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.NOM_CIASEG", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.NOM_CIASEG", ENTERABLE, "ATTR_OFF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSGTI");
        }
        else {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_CSEGGT", ENTERABLE, ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.NOM_CIASEG", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.NOM_CIASEG", ENTERABLE, ATTR_ON);
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrSeguro_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.  
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // IF :SOLICR_ORMONET IS NOT NULL THEN
    //   DECLARE
    //     T_RESPUESTA NUMBER;
    //     DESC1        VARCHAR2(100); 
    //   BEGIN
    //     SELECT ORMDES
    //     INTO DESC1
    //     FROM ORM
    //     WHERE ORMCOD=:SOLICR_ORMONET;
    //     
    //   :SOLICR_ORMONUS$:=:SOLICR_ORMONET;    --CAHH
    //      IF :SOLICR_ORMONET = 'PE' THEN
    //          SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_FALSE");  --CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_TRUE");  --CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_TRUE");  --CAHH
    //        :SOLICR_PTOUS$:=NULL;                 --CAHH
    //     ELSE
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_TRUE");  --CAHH
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_TRUE");  --CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_FALSE");  --CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //      END IF;
    //  
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END; 
    //       
    //     
    //   -- CUOP
    //   --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+
    //     :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     :this.PARAMETER.get("PENCCOM") := 'S';
    //   END IF;
    //   --
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOrmonet_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOrmonet_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONET", SOLICR_ORMONET);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrormonet_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         this.CRTSOLICR.SOLICR_ORMONUS = this.CRTSOLICR.SOLICR_ORMONET;
        //         if (SOLICR_ORMONET == "PE") {
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_FALSE");
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_FALSE");
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_TRUE");
        //             this.CRTSOLICR.SOLICR_PTOUS = null;
        //         }
        //         else {
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_FALSE");
        //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
        //         }
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        //     if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) ||this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //         this.PARAMETER.get("PENCCOM") = "S";
        //     }
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOrmonet_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrGtiare_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrGtiare_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrGtiare_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // --IF :SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    BEGIN
    //    SELECT TLINCOD
    //      INTO DESC1
    //      FROM TLIN
    //     WHERE TLINCOD =:SOLICR_LINEA
    //     AND   TLIN_ESTADO= 'A';
    //    EXCEPTION WHEN NO_DATA_FOUND THEN DESC1 := NULL;
    //    END;
    // 
    //    IF DESC1 IS NULL THEN 
    // 
    //    LIB$DTNERFRMA('POR FAVOR INGRESE LA LÍNEA.');
    //                 
    //    END IF;
    //    
    // END; 
    // 
    // 
    // 
    // 
    // --END IF;
    // 
    // --6914
    // IF :CRTSOLICR.SOLICR_LINEA = 'CA' THEN  
    //   :CRTSOLICR.SOLICR_OPCCOM := NULL;     
    // END IF;
    // --6914; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrLinea_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrLinea_whenValidateItem");
        {

            let T_RESPUESTA: number = null;
            let DESC1: string = null;
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_LINEA", SOLICR_LINEA);
            // call REST API
            const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrlinea_whenvalidateitem_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                DESC1 = null;
            }

            if ((DESC1 == null)) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESE LA LÍNEA.");
            }
        }

        if (this.CRTSOLICR.SOLICR_LINEA == "CA") {
            this.CRTSOLICR.SOLICR_OPCCOM = null;
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrLinea_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // /*
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // END;
    // */
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPtous$_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPtous$_whenValidateItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPtous$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_TIPCRE IS NOT NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrTipcre_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTipcre_whenValidateItem");
        // if ((SOLICR_TIPCRE != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         if (["03", "04"].indexOf(SOLICR_TIPCRE) != -1) {
        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INVALIDO ........", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTipcre_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //     --6804
    //       :CRTSOLICR.SOLICR_TIPBIE := NULL;
    //     :CRTSOLICR.SOLICR_SUBCAT := NULL;  
    //     :CRTSOLICR.W_SUBCATEGORIA := NULL;
    //     :CRTSOLICR.BIEN := NULL;
    //     --6804
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED", "PROPERTY_TRUE");
    //       :CRTSOLICR.BIENPAG:='NO REQUERIDO';
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //       --PROYECTO 6804
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',"DISPLAYED","PROPERTY_FALSE");      
    //       SET_ITEM_PROPERTY('CRTSOLICR.W_SUBCATEGORIA',"DISPLAYED","PROPERTY_FALSE");
    //       /**/
    //       
    //       --SHOW_VIEW('TITLE');
    //       
    //       --PROYECTO 5779
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',VISIBLE,"PROPERTY_FALSE");
    //       
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',VISIBLE,"PROPERTY_FALSE");
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',VISIBLE,"PROPERTY_FALSE");
    //       
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',VISIBLE,"PROPERTY_FALSE");
    //       
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',VISIBLE,"PROPERTY_FALSE");
    //       
    //       --+PY21520. JDG
    //       IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //       --+ 
    //        
    //        SET_ITEM_PROPERTY('VARIABLE.PROVNAL',NAVIGABLE,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('VARIABLE.PROVNAL',ENABLED,"PROPERTY_FALSE");
    //        
    //        SET_ITEM_PROPERTY('VARIABLE.PROVEXT',NAVIGABLE,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('VARIABLE.PROVEXT',ENABLED,"PROPERTY_FALSE");
    //        
    //      --+PY21520. JDG  
    //       ELSE
    //        
    //        SET_ITEM_PROPERTY('VARIABLE.PROVNAL',NAVIGABLE,"PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('VARIABLE.PROVNAL',ENABLED,"PROPERTY_TRUE");
    //        
    //        SET_ITEM_PROPERTY('VARIABLE.PROVEXT',NAVIGABLE,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('VARIABLE.PROVEXT',ENABLED,"PROPERTY_FALSE");
    //       
    //       END IF; 
    //       --+
    //       
    //       :CRTSOLICR.SOLICR_GTONAC := NULL;
    //      :CRTSOLICR.SOLICR_OPCCOM := NULL;
    //      :CRTSOLICR.SOLICR_CLASAC := NULL;
    //      :CRTSOLICR.SOLICR_ACTIVO := NULL;    
    //       
    //       --PROYECTO 5779
    //       
    // 
    //       
    //       
    //   ELSIF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ACTIVO',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CLASAC',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      /*5779
    //      SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',NAVIGABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.ACTIVO',ENABLED,"PROPERTY_TRUE"); 
    //      5779  */         
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',ENABLED,"PROPERTY_TRUE"); 
    //      --SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',REQUIRED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',REQUIRED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_OPCCOM',NAVIGABLE,"PROPERTY_TRUE");
    //      
    //      --PROYECTO 6804
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',ENABLED,"PROPERTY_TRUE"); 
    //      /*SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',REQUIRED,"PROPERTY_TRUE");*/ 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_SUBCAT',NAVIGABLE,"PROPERTY_TRUE");     
    //      
    //     SET_ITEM_PROPERTY('CRTSOLICR.W_SUBCATEGORIA',"DISPLAYED","PROPERTY_TRUE");
    //      --6804
    //      
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIEN', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.BIENPAG',"DISPLAYED","PROPERTY_FALSE");
    //      
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PRESID',ENABLED,"PROPERTY_TRUE");  -- 22/09/2008  CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NITRES',ENABLED,"PROPERTY_TRUE");  -- 22/09/2008  CAHH
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMRES',ENABLED,"PROPERTY_TRUE");  -- 22/09/2008  CAHH
    //      
    //      HIDE_VIEW('CANVAS11');
    //      --6804
    //       
    //     /*:CRTSOLICR.W_SUBCATEGORIA := NULL;
    //     :CRTSOLICR.BIEN := NULL;
    //     :CRTSOLICR.SOLICR_SUBCAT := NULL;  
    //     :CRTSOLICR.SOLICR_TIPBIE := NULL;*/
    //     
    //     --6804
    //      --SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_TIPBIE');
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTipcre_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTipcre_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.SOLICR_TIPBIE = null;
            this.CRTSOLICR.SOLICR_SUBCAT = null;
            this.CRTSOLICR.W_SUBCATEGORIA = null;
            this.CRTSOLICR.BIEN = null;
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIENPAG", "DISPLAYED", "PROPERTY_TRUE");
            this.CRTSOLICR.BIENPAG = "NO REQUERIDO";
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "REQUIRED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.W_SUBCATEGORIA", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.ACTIVO", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ACTIVO", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CLASAC", "VISIBLE", "PROPERTY_FALSE");
            if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "NAVIGABLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "NAVIGABLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "ENABLED", "PROPERTY_FALSE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "NAVIGABLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVNAL", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "NAVIGABLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.PROVEXT", "ENABLED", "PROPERTY_FALSE");
            }
            this.CRTSOLICR.SOLICR_GTONAC = null;
            this.CRTSOLICR.SOLICR_OPCCOM = null;
            this.CRTSOLICR.SOLICR_CLASAC = null;
            this.CRTSOLICR.SOLICR_ACTIVO = null;
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
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_OPCCOM", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_SUBCAT", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.W_SUBCATEGORIA", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIEN", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BIENPAG", "DISPLAYED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PRESID", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NITRES", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMRES", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.hide_view("CANVAS11");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTipcre_postTextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --7981
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      :CRDITO:='CONTRATO LEASING';
    //   ELSIF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //         :CRDITO:='PAGARE';
    //   END IF;
    //   NEXT_ITEM;
    // END;
    // --7981; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTipcre_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTipcre_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.CRDITO = "CONTRATO LEASING";
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.CRDITO = "PAGARE";
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTipcre_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // V_CARGO   SGUSUARIOS.USU_CARGO%TYPE;
    // V_AREA    SGUSUARIOS.USU_AREA%TYPE; 
    // T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //   BEGIN
    //     SELECT USU_CARGO, USU_AREA
    //       INTO V_CARGO,V_AREA
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=USER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //    
    //    
    //     /*IF  V_AREA='COM' AND V_CARGO NOT IN ('AC','DC','SR','GC','OD') THEN
    //      LIB$ALERTA('MENSAJE','DEBE INGRESAR EL CODIGO DEL FREE LANCE2 QUE REALIZÓ LA OPERACIÓN',NULL,NULL,NULL,T_RESPUESTA);
    //      SHOW_VIEW ('USU_FREEL');
    //      GO_ITEM('CRTSOLICR.SOLICR_UFREEL');
    //     END IF;*/
    //  NEXT_ITEM;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrEstsol_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrEstsol_keyNextItem");
        let V_CARGO: null = null;
        let V_AREA: null = null;
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrestsol_keynextitem_query1", payload1);
        // get values from result
        V_CARGO = result1[0].get("V_CARGO");
        V_AREA = result1[0].get("V_AREA");
        if (result1 == null || result1.length == 0) {

        }

        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrEstsol_keyNextItem");
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
    //   V_SOLICR_LINEA        this.CRTSOLICR.SOLICR_LINEA%TYPE;
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPunt$n_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPunt$n_whenValidateItem");
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
            //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrpunt$n_whenvalidateitem_query1", payload1);
            //     // get values from result
            //     V_MENSAJE = result1[0].get("V_MENSAJE");
            //     // CRFSOLCC_LIB$DTNERFRMA(V_MENSAJE);
            // }
            if (["LI"].indexOf(this.CRTSOLICR.SOLICR_LINEA == null ? "XXXX" :this.CRTSOLICR.SOLICR_LINEA) != -1) {
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

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrPunt$n_whenValidateItem");
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
    async CRFSOLCC_crtsolicr_btnPergracia_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_btnPergracia_whenButtonPressed");
        let VBOTON: number = null;
        // if ((SOLICR_PLAZO == null)) {
        //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE PRIMERO INDICAR EL PLAZO", "ACEPTAR", null, null, VBOTON);
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        // }
        // else {
        //     this.oracleFormsBuiltins.show_view("PER_GRACIA");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_btnPergracia_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  V_CANT PLS_INTEGER;
    // 
    // BEGIN
    // 
    // --SI SE TIENE POR LO MENOS UNA SOLICITUD VIGENTE, SE CONSIDERA MANTENIMIENTO   CAHH
    // IF :SOLICR_NITTER IS NOT NULL THEN
    //  :COL_TIPVIN := '';
    //    SELECT COUNT(COLBEN) INTO V_CANT
    //    FROM COL 
    //    WHERE COLESTC = 'VI'
    //     AND COLBEN = :SOLICR_NITTER;
    // 
    //    IF V_CANT > 0 THEN
    //     :COL_TIPVIN :='MANTENIMIENTO';
    //    ELSE
    //     SELECT COUNT(COLBEN) INTO V_CANT
    //      FROM COL 
    //      WHERE COLESTC = 'CA'
    //       AND COLBEN = :SOLICR_NITTER;
    // 
    //      IF V_CANT >= 1 THEN
    //       :COL_TIPVIN :=:COL_TIPVIN ||' RECOLOCACIÓN';
    //      ELSE
    //       :COL_TIPVIN :=:COL_TIPVIN ||' NUEVO';
    //      END IF;   
    // 
    //    END IF; 
    // 
    // 
    //    IF GET_ITEM_PROPERTY('CRTSOLICR.BTN_TIPSOL',LABEL) = '<' THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.COL_TIPVIN',VISIBLE,"PROPERTY_FALSE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.BTN_TIPSOL',LABEL,'>');
    //    ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.COL_TIPVIN',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR.BTN_TIPSOL',LABEL,'<');
    //    END IF;
    //    SYNCHRONIZE;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_btnTipsol_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_btnTipsol_whenButtonPressed");
        let V_CANT: number = null;
        // if ((SOLICR_NITTER != null)) {
        //     this.CRTSOLICR.COL_TIPVIN = "";
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_NITTER", SOLICR_NITTER);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_btntipsol_whenbuttonpressed_query1", payload1);
        //     // get values from result
        //     V_CANT = result1[0].get("V_CANT");
        //     if (V_CANT > 0) {
        //         this.CRTSOLICR.COL_TIPVIN = "MANTENIMIENTO";
        //     }
        //     else {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.set("SOLICR_NITTER", SOLICR_NITTER);
        //         // call REST API
        //         const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_btntipsol_whenbuttonpressed_query2", payload2);
        //         // get values from result
        //         V_CANT = result2[0].get("V_CANT");
        //         if (V_CANT >= 1) {
        //             this.CRTSOLICR.COL_TIPVIN = this.CRTSOLICR.COL_TIPVIN || ' RECOLOCACIÓN';
        //         }
        //         else {
        //             this.CRTSOLICR.COL_TIPVIN = this.CRTSOLICR.COL_TIPVIN || ' NUEVO';
        //         }
        //     }
        //     if (this.oracleFormsBuiltins.get_item_property("CRTSOLICR.BTN_TIPSOL", LABEL) == "<") {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.COL_TIPVIN", "VISIBLE", "PROPERTY_FALSE");
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_TIPSOL", LABEL, ">");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.COL_TIPVIN", "VISIBLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_TIPSOL", LABEL, "<");
        //     }
        //     this.oracleFormsBuiltins.synchronize();
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_btnTipsol_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA          NUMBER;
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCocuta_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCocuta_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcocuta_whenvalidateitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.UVPCUT_DESCRI = result1[0].get("CRTSOLICR.UVPCUT_DESCRI");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COCUTA = null;
                this.CRTSOLICR.UVPCUT_DESCRI = null;
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CÓDIGO DE CUPO DE TAXI INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrCocuta_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //    
    //    GO_ITEM( 'CRTSOLICR.BTN_REGFRMXC' );
    //    
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCC.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCocuta_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCocuta_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.BTN_REGFRMXC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrCocuta_keyNextItem");
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
    async CRFSOLCC_crtsolicr_solicrCiabil_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCiabil_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 :this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 :this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCiabil_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCiabil_keyPrevItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCiabil_keyPrevItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCiabil_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCiabil_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCiabil_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCiabil_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT OFI_DESCRIP
    //     INTO :DESCOFID
    //   FROM CRTOFIDAV
    //  WHERE OFI_COD  = :SOLICR_OFIDAV;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //     NULL;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfidav_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfidav_whenNewItemInstance");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_OFIDAV", SOLICR_OFIDAV);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrofidav_whennewiteminstance_query1", payload1);
        // get values from result
        // DESCOFID = result1[0].get("DESCOFID");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfidav_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // GO_ITEM('SOLICR_PLAZO');
    // --HIDE_VIEW('OFI_DAVI'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfidav_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfidav_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfidav_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // HIDE_VIEW('OFI_DAVI'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfidav_keyDown() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfidav_keyDown");
        this.oracleFormsBuiltins.hide_view("OFI_DAVI");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfidav_keyDown");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrActaso_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrActaso_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrActaso_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // :TXT_TOTPLAZO := :SOLICR_PERGRA  +  :SOLICR_PLAZO;
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPergra_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPergra_keyNextItem");
        // this.CRTSOLICR.TXT_TOTPLAZO = this.CRTSOLICR.SOLICR_PERGRA + SOLICR_PLAZO;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPergra_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecpor_postChange() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecpor_postChange");
        // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR;
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecpor_postChange");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR||'%';
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecpor_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecpor_keyNextItem");
        // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR || '%';
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecpor_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrObscom_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrObscom_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrObscom_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_FINAGR IS NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrFinagln_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFinagln_keyNextItem");
        // if ((SOLICR_FINAGR == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_FINAGR");
        //     this.CRTSOLICR.SOLICR_FINAGLN = null;
        //     this.CRTSOLICR.DESLINFINA = null;
        //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA FINAGRO SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_FINAGLN", SOLICR_FINAGLN);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrfinagln_keynextitem_query1", payload1);
        //     // get values from result
        //     DESLINFINA = result1[0].get("DESLINFINA");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCC_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN FINAGRO.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFinagln_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FNG IS NOT NULL THEN 
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGR',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_FINAGR := NULL;
    //   IF :CRTSOLICR.SOLICR_FNG  <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFng_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFng_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FNG != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGR", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_FINAGR = null;
            if (this.CRTSOLICR.SOLICR_FNG != "X") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFng_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_MODINT IS NOT NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrModint_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrModint_whenValidateItem");
        // if ((SOLICR_MODINT != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODINT", SOLICR_MODINT);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrmodint_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrModint_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN 
    // 
    //   IF :CRTSOLICR.REF_PROVEEDOR IS NULL OR :CRTSOLICR.REF_PROV_ASE IS NULL THEN
    //       LIB$ALERTA('MENSAJE','DEBE SELECCIONAR EL PROVEEDOR O EL ASESOR CORRESPONDIENTE ',NULL,NULL,NULL,T_RESPUESTA);
    //      :CRTSOLICR.SOLICR_CODPRO := NULL; 
    //      :CRTSOLICR.TIPDESCR := NULL;    
    //   END IF; 
    //   COMMIT_FORM;
    //   HIDE_VIEW('PROVEE_REF');
    //   GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    // 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_cerrarref_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_cerrarref_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.REF_PROVEEDOR == null) || (this.CRTSOLICR.REF_PROV_ASE == null))) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE SELECCIONAR EL PROVEEDOR O EL ASESOR CORRESPONDIENTE ", null, null, null, T_RESPUESTA);
            this.CRTSOLICR.SOLICR_CODPRO = null;
            this.CRTSOLICR.TIPDESCR = null;
        }
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.hide_view("PROVEE_REF");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        console.log("Exiting CRFSOLCC_crtsolicr_cerrarref_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA PLS_INTEGER;
    //  
    // BEGIN 
    //  IF :SOLICR_ORMONUS$ IS NOT NULL THEN
    //  DECLARE
    //   T_RESPUESTA NUMBER;
    //   DESC1        VARCHAR2(100); 
    //  BEGIN
    //     SELECT ORMDES
    //       INTO DESC1
    //       FROM ORM
    //      WHERE ORMCOD=:SOLICR_ORMONUS$;
    //      
    //      --CAHH
    //      IF :SOLICR_ORMONET <> :SOLICR_ORMONUS$ THEN
    //       LIB$ALERTA('MENSAJE','EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON',NULL,NULL,NULL,T_RESPUESTA); 
    //        RAISE FORM_TRIGGER_FAILURE;
    //      END IF;
    //       
    //       
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    //  END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOrmonus$_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((SOLICR_ORMONUS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONUS", SOLICR_ORMONUS);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (SOLICR_ORMONET != SOLICR_ORMONUS) {
        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOrmonus$_whenValidateItem");
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
    async CRFSOLCC_crtsolicr_solicrPdscto_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPdscto_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PDSCTO == null ? 0 :this.CRTSOLICR.SOLICR_PDSCTO > 100) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE DESCUENTO DEBE SER INFERIOR AL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPdscto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_flance_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_flance_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_flance_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERNOM||' '|| TERAPE,NVL(TERNOM,TERAPE)) 
    //   INTO :SOLICR_RECNITDESC
    //   FROM TER 
    //   WHERE TERCOD= :SOLICR_RECNIT;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_RECNITDESC := NULL;
    //   
    //   END;
    //   
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecnit_postChange() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecnit_postChange");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_RECNIT", SOLICR_RECNIT);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrrecnit_postchange_query1", payload1);
        // get values from result
        // SOLICR_RECNITDESC = result1[0].get("SOLICR_RECNITDESC");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.SOLICR_RECNITDESC = null;
        }

        // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR;
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecnit_postChange");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERNOM||' '|| TERAPE,NVL(TERNOM,TERAPE)) 
    //   INTO :SOLICR_RECNITDESC
    //   FROM TER 
    //   WHERE TERCOD= :SOLICR_RECNIT;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_RECNITDESC := NULL;
    //   
    // END;
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR||'%';
    //    GO_ITEM('SOLICR_RECPOR'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecnit_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecnit_keyNextItem");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_RECNIT", SOLICR_RECNIT);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrrecnit_keynextitem_query1", payload1);
        // get values from result
        // SOLICR_RECNITDESC = result1[0].get("SOLICR_RECNITDESC");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.SOLICR_RECNITDESC = null;
        }

        // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR || '%';
        this.oracleFormsBuiltins.go_item("SOLICR_RECPOR");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecnit_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF  :CRTSOLICR.SOLICR_GTIREC IS NOT NULL THEN
    //      IF :CRTSOLICR.SOLICR_GTIREC  NOT IN ('S','N') THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //         END IF;
    //      IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_FALSE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_FALSE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //      
    //     END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecnitdesc_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecnitdesc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_GTIREC != null)) {
            if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            }
            if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecnitdesc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecnitdesc_keyPrevItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecnitdesc_keyPrevItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecnitdesc_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //    ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_TRUE");
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecnitdesc_posttextitem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecnitdesc_posttextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecnitdesc_posttextitem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',ENABLED,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"ATTR_OFF");
    //       --GO_ITEM('CRTSOLICR.SOLICR_PRENDA');
    //     ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',ENABLED,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,ATTR_ON);
    //      -- GO_ITEM('CRTSOLICR.SOLICR_NOMREC');
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrRecnitdesc_keynextitem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrRecnitdesc_keynextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "ATTR_OFF");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_ON");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrRecnitdesc_keynextitem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // 
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
    async CRFSOLCC_crtsolicr_solicrMonto_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrMonto_whenValidateItem");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) ||this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            // this.PARAMETER.get("PENCCOM") = "S";
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrMonto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :CRTSOLICR.W_CODIGOASESOR IS NOT NULL THEN
    //  
    //   BEGIN
    //    SELECT CONTPR_CORREO
    //      INTO :CRTSOLICR.W_CORREOASESOR
    //    FROM COTCONTPR 
    //    WHERE CONTPR_CODPRO = '860034313'
    //    AND CONTPR_CODCNT = :CRTSOLICR.W_CODIGOASESOR
    //    AND ROWNUM = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.W_CORREOASESOR := NULL;   
    //   END;
    //   
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wCorreoasesor_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_crtsolicr_wCorreoasesor_whenNewItemInstance");
        if ((this.CRTSOLICR.W_CODIGOASESOR != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("W_CODIGOASESOR", this.CRTSOLICR.W_CODIGOASESOR);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_wcorreoasesor_whennewiteminstance_query1", payload1);
                // get values from result
               this.CRTSOLICR.W_CORREOASESOR = result1[0].get("CRTSOLICR.W_CORREOASESOR");
            } catch (ex) {

                this.CRTSOLICR.W_CORREOASESOR = null;
            }

        }
        console.log("Exiting CRFSOLCC_crtsolicr_wCorreoasesor_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA   NUMBER;
    //   DESC1         VARCHAR2(100);
    //   RESPUESTA     VARCHAR2(300);
    //   VLR_INDICADOR NUMBER;
    //   FECHA         DATE;
    // BEGIN
    //   IF :SOLICR_TPESOS IS NOT NULL THEN
    //     BEGIN
    //       SELECT UNIQUE(TINDES)
    //         INTO DESC1
    //         FROM TIN
    //        WHERE TINCOD = :SOLICR_TPESOS;
    //     
    //       /*
    //       AUTOR   : AATOM
    //       FECHA   : 16/06/016
    //       ACCIÓN  : VALIDACIÓN DE LA EXISTENCIA DEL INDICADOR IBR PARA LA PERIÓDICIDAD INGRESADA
    //       */
    //       IF :SOLICR_TPESOS IN ('IBM','IBT','IBS') THEN
    //       
    //         RESPUESTA := PQBD_COL_CALCULO_IBR.FBD_COL_VALIDA_IBR(:SOLICR_TPESOS,
    //                                                              TRUNC(SYSDATE),
    //                                                              VLR_INDICADOR,
    //                                                              FECHA);
    //         IF RESPUESTA <> 'S' THEN
    //           LIB$ALERTA('MENSAJE', RESPUESTA, NULL, NULL, NULL, T_RESPUESTA);
    //           RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //       
    //       END IF;
    //     
    //     EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE',
    //                    'CODIGO INEXISTENTE',
    //                    NULL,
    //                    NULL,
    //                    NULL,
    //                    T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR', "ENABLED", "PROPERTY_FALSE"); --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$', "ENABLED", "PROPERTY_FALSE"); --CAHH
    //     --SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',REQUIRED,"PROPERTY_TRUE");
    //     :SOLICR_PTOUS$ := NULL; --CAHH
    //   ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR', "ENABLED", "PROPERTY_TRUE"); --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$', "ENABLED", "PROPERTY_TRUE"); --CAHH
    //   
    //   END IF;
    //   --BEGIN
    //   --    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //   --     LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   --     RAISE FORM_TRIGGER_FAILURE;
    //   --    END IF;
    //   --END;
    // 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTpesos_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTpesos_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        let RESPUESTA: string = null;
        let VLR_INDICADOR: number = null;
        let FECHA: Date = null;
        // if ((SOLICR_TPESOS != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TPESOS", SOLICR_TPESOS);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrtpesos_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (["IBM", "IBT", "IBS"].indexOf(SOLICR_TPESOS) != -1) {
        //         RESPUESTA = PQBD_COL_CALCULO_IBR.FBD_COL_VALIDA_IBR(SOLICR_TPESOS, TRUNC(PLSQLBuiltins.sysdate()), VLR_INDICADOR, FECHA);
        //         if (RESPUESTA != "S") {
        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", RESPUESTA, null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //     }
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
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
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTpesos_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //  V_DTF       INE.INEVAL%TYPE;
    //  V_DEF       INE.INEVAL%TYPE;
    //  V_TASATA    INE.INEVAL%TYPE;
    //  V_TASAEF    INE.INEVAL%TYPE;
    //  V_TASAEFT   INE.INEVAL%TYPE;
    //  
    // BEGIN
    //  
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DTF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DTF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //   IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      IF :CRTSOLICR.SOLICR_INDRED = 'N' THEN
    //          IF :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL THEN
    //             --BUSCA LOS PUNTOS AUTORIZADOS 
    //            BEGIN
    //              SELECT TOPSOL_VLRTOP
    //                INTO V_TASA
    //                FROM CRTTOPSOL
    //               WHERE --+PY21520. JDG
    //                     TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                     --+
    //                 AND TOPSOL_CODIGO ='04';
    //            EXCEPTION 
    //              WHEN NO_DATA_FOUND THEN
    //              LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADA. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //              RAISE FORM_TRIGGER_FAILURE;
    //            END;
    //         
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_PUNTS$ <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    //    
    //    
    //             
    //   --LCBY:10791 -- TASAS PARA REDESCUENTO FINAGRO.
    //   --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO FINAGRO.
    //    IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_FINAGP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE --+PY21520. JDG
    //                      TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                      --+
    //                   AND TOPSOL_CODIGO ='06';
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINAGRO. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_PUNTS$ <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPunts$_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPunts$_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: null = null;
        let V_DTF: null = null;
        let V_DEF: null = null;
        let V_TASATA: null = null;
        let V_TASAEF: null = null;
        let V_TASAEFT: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrpunts$_whenvalidateitem_query1", payload1);
        // get values from result
        V_DTF = result1[0].get("V_DTF");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCC_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrpunts$_whenvalidateitem_query2", payload2);
        // get values from result
        V_DEF = result2[0].get("V_DEF");
        if (result2 == null || result2.length == 0) {

            // CRFSOLCC_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        if (["DAD", "LNE"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1) {
            if (this.CRTSOLICR.SOLICR_INDRED == "N") {
                if ((this.CRTSOLICR.SOLICR_PUNTS$ != null)) {
                    // construct payload
                    let payload3 = new Map();
                    payload3.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrpunts$_whenvalidateitem_query3", payload3);
                    // get values from result
                    V_TASA = result3[0].get("V_TASA");
                    if (result3 == null || result3.length == 0) {

                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADA. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                    // V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
                    // V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
                    // V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
                    // if (SOLICR_PUNTS <= V_TASAEFT) {
                    //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
                    //     console.log("FORM_TRIGGER_FAILURE");
                    //     throw new Error('FORM_TRIGGER_FAILURE');
                    // }
                }
            }
            if (this.CRTSOLICR.SOLICR_INDRED == "S") {
                if ((this.CRTSOLICR.SOLICR_FINAGP != null)) {
                    // construct payload
                    let payload4 = new Map();
                    payload4.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result4 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrpunts$_whenvalidateitem_query4", payload4);
                    // get values from result
                    V_TASA = result4[0].get("V_TASA");
                    if (result4 == null || result4.length == 0) {

                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINAGRO. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                    // V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
                    // V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
                    // V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
                    // if (SOLICR_PUNTS <= V_TASAEFT) {
                    //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
                    //     console.log("FORM_TRIGGER_FAILURE");
                    //     throw new Error('FORM_TRIGGER_FAILURE');
                    // }
                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPunts$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // P_LLENARCONTAC;
    // GO_ITEM('COTCONTPR.CONTPR_CODCNT'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_wProveedor_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_wProveedor_keyNextItem");
        // CRFSOLCC_P_LLENARCONTAC();
        this.oracleFormsBuiltins.go_item("COTCONTPR.CONTPR_CODCNT");
        console.log("Exiting CRFSOLCC_crtsolicr_wProveedor_keyNextItem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrEstrat_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrEstrat_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrestrat_whenvalidateitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.SOLICR_ESTRATDESC = result1[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_ESTRAT = null;
                this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "ESTRATEGIA VOR UVP INVÁLIDA.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrEstrat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_IFI IS NULL THEN
    //  GO_ITEM('SOLICR_IF');
    //  :SOLICR_LMULTIP := NULL;
    //  :DESLIMPTO     := NULL;
    //  LIB$DTNERFRMA('NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX MULTIPROPOSITO SINO HA SELECCIONADO LA TASA.');
    // ELSE
    // /*BEGIN
    //   SELECT LINRED_DESLIN 
    //     INTO :DESCBCDX
    //   FROM CRTLINRED
    //    WHERE LINRED_TIPO='BM'
    //    AND LINRED_CODIGO = :SOLICR_LMULTIP;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO EXISTE ESA LÍNEA EN BANCOLDEX MULTIPROPOSITO.');
    // END;*/
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrLmultip_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrLmultip_keyNextItem");
        // if ((SOLICR_IFI == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_IF");
        //     this.CRTSOLICR.SOLICR_LMULTIP = null;
        //     this.CRTSOLICR.DESLIMPTO = null;
        //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX MULTIPROPOSITO SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrLmultip_keyNextItem");
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
    //                    || 'CRFSOLCC.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrVrcial_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrVrcial_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLCC_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrVrcial_whenValidateItem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrVrcial_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_MASPRENDAS");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrVrcial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --PUP_COMPARTE;
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_btnCompartido_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_btnCompartido_whenButtonPressed");
        console.log("Exiting CRFSOLCC_crtsolicr_btnCompartido_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL;--PUP_COMPARTE; END;
    //#endregion
    async CRFSOLCC_crtsolicr_btnCompartido_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_btnCompartido_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_btnCompartido_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CARGO   SGUSUARIOS.USU_CARGO%TYPE;
    //   V_AREA    SGUSUARIOS.USU_AREA%TYPE; 
    // BEGIN
    //   BEGIN
    //       SELECT USU_CARGO, USU_AREA
    //         INTO V_CARGO,V_AREA
    //       FROM SGUSUARIOS
    //       WHERE USU_CODIGO=USER;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    V_CARGO:=NULL;
    //    V_AREA:=NULL;
    //   END;
    //   /*IF (:SOLICR_UFREEL IS NULL AND V_AREA='COM' AND V_CARGO NOT IN ('DC','SR','GC')) THEN 
    //    
    //      LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER DIGITADO',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;*/
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrUfreel_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrUfreel_postTextItem");
        let T_RESPUESTA: number = null;
        let V_CARGO: null = null;
        let V_AREA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrufreel_posttextitem_query1", payload1);
        // get values from result
        V_CARGO = result1[0].get("V_CARGO");
        V_AREA = result1[0].get("V_AREA");
        if (result1 == null || result1.length == 0) {

            V_CARGO = null;
            V_AREA = null;
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrUfreel_postTextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --PUP_ASIGAN_OFICIAL_DESEMBOLSO;
    // GO_ITEM('CRTSOLICR.SOLICR_TIPCRE');
    // HIDE_VIEW('USU_FREEL'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrUfreel_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrUfreel_keyNextItem");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TIPCRE");
        this.oracleFormsBuiltins.hide_view("USU_FREEL");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrUfreel_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_INDRED IS NOT NULL THEN
    //     IF :CRTSOLICR.SOLICR_INDRED  NOT IN ('S','N') THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S=CON REDESCUENTO) (N=SIN REDESCUENTO)...............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     ELSE 
    //      LIB$ALERTA('MENSAJE','DEBE INDICAR SI LA OPERACIÓN TIENE O NO REDESCUENTO...............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END IF; 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrIndred_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrIndred_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_INDRED != null)) {
            if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_INDRED) != -1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S=CON REDESCUENTO) (N=SIN REDESCUENTO)...............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE INDICAR SI LA OPERACIÓN TIENE O NO REDESCUENTO...............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrIndred_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF NVL(:CRTSOLICR.SOLICR_TITULO,'N') = 'S' THEN
    //   SET_ITEM_PROPERTY('SOLICR_VLRTIT',"DISPLAYED","PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('SOLICR_VLRTIT',ENABLED,"PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('SOLICR_VLRTIT', "INSERT_ALLOWED","PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('SOLICR_VLRTIT',UPDATEABLE,"PROPERTY_TRUE");
    // ELSE
    //  :SOLICR_VLRTIT:=NULL;
    //   SET_ITEM_PROPERTY('SOLICR_VLRTIT',"DISPLAYED","PROPERTY_FALSE");  
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTitulo_whenCheckboxChanged() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTitulo_whenCheckboxChanged");
        if (this.CRTSOLICR.SOLICR_TITULO == null ? "N" :this.CRTSOLICR.SOLICR_TITULO == "S") {
            this.oracleFormsBuiltins.set_item_property("SOLICR_VLRTIT", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_VLRTIT", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_VLRTIT", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_VLRTIT", "UPDATEABLE", "PROPERTY_TRUE");
        }
        else {
            this.CRTSOLICR.SOLICR_VLRTIT = null;
            this.oracleFormsBuiltins.set_item_property("SOLICR_VLRTIT", "DISPLAYED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTitulo_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_BCODEX IS NULL THEN
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
    //   NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTbcoldx_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTbcoldx_keyNextItem");
        // if ((SOLICR_BCODEX == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_BCODEX");
        //     this.CRTSOLICR.SOLICR_TBCOLDX = null;
        //     this.CRTSOLICR.DESCBCDX = null;
        //     // CRFSOLCC_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     // payload1.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrtbcoldx_keynextitem_query1", payload1);
        //     // get values from result
        //     // DESCBCDX = result1[0].get("DESCBCDX");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCC_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN BANCOLDEX.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTbcoldx_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_nomOficial_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_nomOficial_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_nomOficial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :W_REFERIDO = 'N' THEN
    //   :W_NITREF := NULL;
    //   :W_DESCRI_REF := NULL;
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wReferido_whenCheckboxChanged() {
        console.log("Entering CRFSOLCC_crtsolicr_wReferido_whenCheckboxChanged");
        // if (W_REFERIDO == "N") {
        //     this.CRTSOLICR.W_NITREF = null;
        //     this.CRTSOLICR.W_DESCRI_REF = null;
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_wReferido_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --6754
    // P_LISTAREFERIDOS;
    // --6754; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wNitref_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCC_crtsolicr_wNitref_whenMouseDoubleclick");
        console.log("Exiting CRFSOLCC_crtsolicr_wNitref_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --6754
    // P_LISTAREFERIDOS;
    // 
    // --6754; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wNitref_keyListval() {
        console.log("Entering CRFSOLCC_crtsolicr_wNitref_keyListval");
        console.log("Exiting CRFSOLCC_crtsolicr_wNitref_keyListval");
    }

    //#region PLSQL
    // DECLARE 
    //  
    //  V_VALIDA  NUMBER;
    //  
    // BEGIN
    //     
    // 
    //   IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) AND (:CRTSOLICR.TIPO_REFERENCIA IS NULL) THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    //   ELSE
    //    IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    //    ELSE
    //     
    //     IF :CRTSOLICR.TIPO_REFERENCIA = 4 AND :CRTSOLICR.W_OFICINA IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.'); 
    //     ELSE
    // 
    //     
    //       IF :CRTSOLICR.W_CORREOASESOR IS NULL THEN
    //         
    //         LIB$DTNERFRMA('POR FAVOR INGRESAR EL CORREO DEL REFERIDO.');
    //         
    //       ELSE
    //        
    //        BEGIN
    //         SELECT 1
    //         INTO V_VALIDA
    //        FROM DUAL
    //        WHERE :CRTSOLICR.W_CORREOASESOR LIKE '%@DAVIVIENDA.COM';
    //        EXCEPTION WHEN OTHERS THEN
    //         V_VALIDA := 0;
    //        END;
    //         
    //         IF V_VALIDA = 0 THEN
    //            GO_ITEM('CRTSOLICR.W_CORREOASESOR');
    //            LIB$DTNERFRMA('EL CORREO NO ES CORPORATIVO. VALIDE QUE CONTENGA ( @DAVIVIENDA.COM )');
    //         ELSE 
    //          NULL;
    //         END IF;
    //       
    //       END IF;
    //     
    //        P_VALOFI (:CRTSOLICR.W_OFICINA) ; --7876   
    //         
    //      :CRTSOLICR.W_NITREF      := :CRTSOLICR.W_CODIGOASESOR;
    //      :CRTSOLICR.W_DESCRI_REF  := :CRTSOLICR.W_NOMBREASESOR;
    //       :CRTSOLICR.SOLICR_OFIDAV := :CRTSOLICR.W_OFICINA;
    //      
    //      HIDE_VIEW('OFI_DAVI_REF');
    //      GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    //       
    //      
    //      IF :CRTSOLICR.W_NITREF IS NOT NULL THEN
    //          :CRTSOLICR.W_REFERIDO  := 'S';  
    //       ELSE  
    //          :CRTSOLICR.W_REFERIDO  := 'N';
    //       END IF;
    //      
    //     END IF;
    // 
    //     
    //     
    //    END IF;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_aplicar_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_aplicar_whenButtonPressed");
        let V_VALIDA: number = null;
        if (((this.CRTSOLICR.W_CODIGOASESOR == null) && (this.CRTSOLICR.TIPO_REFERENCIA == null))) {
            // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
        }
        else {
            if ((this.CRTSOLICR.W_CODIGOASESOR == null)) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
            }
            else {
                if ((this.CRTSOLICR.TIPO_REFERENCIA == '4' && (this.CRTSOLICR.W_OFICINA == null))) {
                    // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
                }
                else {
                    if ((this.CRTSOLICR.W_CORREOASESOR == null)) {
                        // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL CORREO DEL REFERIDO.");
                    }
                    else {
                        let result1 = [];
                        try {

                            // construct payload
                            let payload1 = new Map();
                            payload1.set("W_CORREOASESOR", this.CRTSOLICR.W_CORREOASESOR);
                            // call REST API
                            const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_aplicar_whenbuttonpressed_query1", payload1);
                            // get values from result
                            V_VALIDA = result1[0].get("V_VALIDA");
                        } catch (ex) {

                            V_VALIDA = 0;
                        }

                        if (V_VALIDA == 0) {
                            this.oracleFormsBuiltins.go_item("CRTSOLICR.W_CORREOASESOR");
                            // CRFSOLCC_LIB$DTNERFRMA("EL CORREO NO ES CORPORATIVO. VALIDE QUE CONTENGA ( @DAVIVIENDA.COM )");
                        }
                        else {
                        }
                    }
                    // CRFSOLCC_P_VALOFI(this.CRTSOLICR.W_OFICINA);
                    this.CRTSOLICR.W_NITREF = this.CRTSOLICR.W_CODIGOASESOR;
                    this.CRTSOLICR.W_DESCRI_REF = this.CRTSOLICR.W_NOMBREASESOR;
                    this.CRTSOLICR.SOLICR_OFIDAV = this.CRTSOLICR.W_OFICINA;
                    this.oracleFormsBuiltins.hide_view("OFI_DAVI_REF");
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
                    if ((this.CRTSOLICR.W_NITREF != null)) {
                        this.CRTSOLICR.W_REFERIDO = "S";
                    }
                    else {
                        this.CRTSOLICR.W_REFERIDO = "N";
                    }
                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_aplicar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN  
    //   SELECT CONTPR_NOMBRE
    //     INTO :CRTSOLICR.REFASE
    //   FROM COTCONTPR 
    //  WHERE CONTPR_CODPRO = :CRTSOLICR.REF_PROVEEDOR
    //     AND CONTPR_CODCNT = :CRTSOLICR.REF_PROV_ASE;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CRTSOLICR.REFASE := NULL;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_refProvAse_whenListChanged() {
        console.log("Entering CRFSOLCC_crtsolicr_refProvAse_whenListChanged");
        // construct payload
        let payload1 = new Map();
        payload1.set("REF_PROVEEDOR", this.CRTSOLICR.REF_PROVEEDOR);
        payload1.set("REF_PROV_ASE", this.CRTSOLICR.REF_PROV_ASE);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_refprovase_whenlistchanged_query1", payload1);
        // get values from result
       this.CRTSOLICR.REFASE = result1[0].get("CRTSOLICR.REFASE");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.REFASE = null;
        }

        console.log("Exiting CRFSOLCC_crtsolicr_refProvAse_whenListChanged");
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
    async CRFSOLCC_crtsolicr_solicrPoriva_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPoriva_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PORIVA == null ? 0 :this.CRTSOLICR.SOLICR_PORIVA > 100) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPoriva_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA    NUMBER;
    // BEGIN
    //  --+PY21520. JDG.
    //   /*IF :CRTSOLICR.SOLICR_CONEXT IS NOT NULL THEN
    //     IF  NVL(:CRTSOLICR.SOLICR_CONEXT,0) > NVL(:CRTSOLICR.SOLICR_MONTO,0) THEN
    //     LIB$ALERTA('MENSAJE','NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //   END IF;*/
    //   IF NVL( :CRTSOLICR.SOLICR_CONEXT, 0 ) <> 0 THEN
    //     IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       IF  NVL(:CRTSOLICR.SOLICR_CONEXT,0) > NVL(:CRTSOLICR.SOLICR_MONTO,0) THEN
    //         LIB$ALERTA('MENSAJE','NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...',NULL,NULL,NULL,T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //     ELSE
    //       :CRTSOLICR.SOLICR_CONEXT := 0;
    //       LIB$ALERTA('MENSAJE','NO ES PERMITIDO UN CANON EXTRAORDINARIO PARA UNA CARTERA DE CRÉDITO ...',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrConext_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 :this.CRTSOLICR.SOLICR_CONEXT != 0) {
            if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
                if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 :this.CRTSOLICR.SOLICR_CONEXT >this.CRTSOLICR.SOLICR_MONTO == null ? 0 :this.CRTSOLICR.SOLICR_MONTO) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }
            else {
                this.CRTSOLICR.SOLICR_CONEXT = 0;
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO UN CANON EXTRAORDINARIO PARA UNA CARTERA DE CRÉDITO ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrConext_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITRES IS NOT NULL THEN
    //     PVALTER(:CRTSOLICR.SOLICR_NITRES); -- TERRES
    //   END IF;
    // END;
    // --
    // DECLARE
    // T_RESPUESTA     NUMBER;
    // V_TIPO          VARCHAR2(1);
    // 
    // BEGIN
    //  
    //   --PY 12802
    // BEGIN
    // SELECT TERPER
    // INTO V_TIPO 
    // FROM TER 
    // WHERE TERCOD =  :CRTSOLICR.SOLICR_NITTER;
    // EXCEPTION WHEN NO_DATA_FOUND THEN V_TIPO := NULL;
    // END;
    //  
    //  --PY 12802
    //  
    // IF :CRTSOLICR.SOLICR_NITRES IS NOT NULL THEN
    //   BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM
    //      INTO   :CRTSOLICR.SOLICR_NOMRES
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITRES);
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS DEL NIT.....',NULL,NULL,NULL,T_RESPUESTA);
    //      --PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITRES, NULL,NULL, NULL,'Q');
    //      PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO,'M'); --PY 12802
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //         --PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITRES, NULL,NULL, NULL,'T');
    //         PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO,'I'); --PY 12802
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //      END IF;
    //    END;
    //  ELSE :CRTSOLICR.SOLICR_NOMRES := NULL;
    // END IF;  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrNitres_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrNitres_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_NITRES != null)) {
            // CRFSOLCC_PVALTER(this.CRTSOLICR.SOLICR_NITRES);
        }
        let T_RESPUESTA: number = null;
        let V_TIPO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitres_whenvalidateitem_query1", payload1);
        // get values from result
        V_TIPO = result1[0].get("V_TIPO");
        if (result1 == null || result1.length == 0) {

            V_TIPO = null;
        }

        if ((this.CRTSOLICR.SOLICR_NITRES != null)) {
            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_NITRES", this.CRTSOLICR.SOLICR_NITRES);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitres_whenvalidateitem_query2", payload2);
            // get values from result
           this.CRTSOLICR.SOLICR_NOMRES = result2[0].get("CRTSOLICR.SOLICR_NOMRES");
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS DEL NIT.....", null, null, null, T_RESPUESTA);
            // CRFSOLCC_PU_LLAMAR_FORTER(this.CRTSOLICR.SOLICR_NITTER, V_TIPO, "M");
            if (result2 == null || result2.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     // CRFSOLCC_PU_LLAMAR_FORTER(this.CRTSOLICR.SOLICR_NITTER, V_TIPO, "I");
                // }
                // else {
                //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }

        }
        else {
            this.CRTSOLICR.SOLICR_NOMRES = null;
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrNitres_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --6754
    // P_LISTAREFERIDOS;
    // --6754; END;
    //#endregion
    async CRFSOLCC_crtsolicr_codigoReferencia_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCC_crtsolicr_codigoReferencia_whenMouseDoubleclick");
        console.log("Exiting CRFSOLCC_crtsolicr_codigoReferencia_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --6754
    // P_LISTAREFERIDOS;
    // --6754; END;
    //#endregion
    async CRFSOLCC_crtsolicr_codigoReferencia_keyListval() {
        console.log("Entering CRFSOLCC_crtsolicr_codigoReferencia_keyListval");
        console.log("Exiting CRFSOLCC_crtsolicr_codigoReferencia_keyListval");
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
    //                    || 'CRFSOLCC.CRTSOLICR.SOLICR_TIPACT.WHEN-VALIDATE-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTipact_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTipact_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLCC_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_TIPACT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrTipact_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_BCODEX  IS NOT NULL THEN 
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_BCODXP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //      IF :CRTSOLICR.SOLICR_BCODEX  <> 'X' THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //        FRM$GARANTIAS_EQUIS ('BAN');
    //      END IF;
    //      ELSE
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_BCODXP',REQUIRED,"PROPERTY_FALSE");   --CAHH
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrBcodex_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrBcodex_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_BCODEX != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_BCODXP", "REQUIRED", "PROPERTY_TRUE");
            if (this.CRTSOLICR.SOLICR_BCODEX != "X") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_BCODXP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrBcodex_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrBcodex_keyPrevItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrBcodex_keyPrevItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrBcodex_keyPrevItem");
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
    //       SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', UPDATE_COLUMN, "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATEABLE", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', UPDATE_PERMISSION, "PROPERTY_TRUE");
    //     
    //        SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',"DISPLAYED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',NAVIGABLE, "PROPERTY_TRUE");
    //   ELSE 
    //    :SOLICR_FDESEMCLI := NULL;
    //   SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE");
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
    //   NEXT_ITEM;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrLineades_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrLineades_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_LINEADES == null)) {
            // CRFSOLCC_LIB$DTNERFRMA("ES OBLIGATORIO LA LINEA DE DESEMBOLSO");
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
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_LINEADES", this.CRTSOLICR.SOLICR_LINEADES);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrlineades_keynextitem_query1", payload1);
        // get values from result
        // DES_LINDESEMBO = result1[0].get("DES_LINDESEMBO");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCC_LIB$ALERTA("MENSAJE", "LINEA DESEMBOLSO INEXISTENTE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrLineades_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    //     V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //    V_DTF       INE.INEVAL%TYPE;
    //    V_DEF       INE.INEVAL%TYPE;
    //    V_TASATA    INE.INEVAL%TYPE;
    //    V_TASAEF    INE.INEVAL%TYPE;
    //    V_TASAEFT   INE.INEVAL%TYPE;
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
    // 
    //  BEGIN
    //    SELECT INEVAL
    //     INTO V_DTF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DTF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    //   
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //     IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      --LCBY:10791 -- TASAS PARA REDESCUENTO FINDETER.
    //     --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO FINDETER.
    //     IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_FINDTP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE --+PY21520. JDG
    //                      TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                      --+
    //                  AND TOPSOL_CODIGO ='07';
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINDETER. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //     
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_FINDTP <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    // END IF;
    // 
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFindtp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: null = null;
        let V_DTF: null = null;
        let V_DEF: null = null;
        let V_TASATA: null = null;
        let V_TASAEF: null = null;
        let V_TASAEFT: null = null;
        if (this.CRTSOLICR.SOLICR_FINDTR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 :this.CRTSOLICR.SOLICR_FINDTP < 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 :this.CRTSOLICR.SOLICR_FINDTP > 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINDETER", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINDTR = "X";
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("FID");
            }
        }
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrfindtp_whenvalidateitem_query1", payload1);
        // get values from result
        V_DTF = result1[0].get("V_DTF");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCC_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrfindtp_whenvalidateitem_query2", payload2);
        // get values from result
        V_DEF = result2[0].get("V_DEF");
        if (result2 == null || result2.length == 0) {

            // CRFSOLCC_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        if (["DAD", "LNE"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1) {
            if (this.CRTSOLICR.SOLICR_INDRED == "S") {
                if ((this.CRTSOLICR.SOLICR_FINDTP != null)) {
                    // construct payload
                    let payload3 = new Map();
                    payload3.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrfindtp_whenvalidateitem_query3", payload3);
                    // get values from result
                    V_TASA = result3[0].get("V_TASA");
                    if (result3 == null || result3.length == 0) {

                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINDETER. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                    // V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
                    // V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
                    // V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
                    // if (SOLICR_FINDTP <= V_TASAEFT) {
                    //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
                    //     console.log("FORM_TRIGGER_FAILURE");
                    //     throw new Error('FORM_TRIGGER_FAILURE');
                    // }
                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFindtp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CSEGGT IS NOT NULL THEN
    //    BEGIN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //     INTO  :CRTSOLICR.NOM_CIASEG    
    //     FROM TER
    //     WHERE TERCOD=:CRTSOLICR.SOLICR_CSEGGT;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','ASEGURADORA INEXISTENTE VERIFICAR EN TERCEROS ACTIVIDAD ECONÓMICA....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  NEXT_ITEM; 
    //  ELSE
    //     GO_ITEM('SOLICR_OBSGTI');
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCseggt_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCseggt_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CSEGGT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
            // call REST API
            const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrcseggt_keynextitem_query1", payload1);
            // get values from result
           this.CRTSOLICR.NOM_CIASEG = result1[0].get("CRTSOLICR.NOM_CIASEG");
            if (result1 == null || result1.length == 0) {

                // CRFSOLCC_LIB$ALERTA("MENSAJE", "ASEGURADORA INEXISTENTE VERIFICAR EN TERCEROS ACTIVIDAD ECONÓMICA....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            this.oracleFormsBuiltins.next_item();
        }
        else {
            this.oracleFormsBuiltins.go_item("SOLICR_OBSGTI");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCseggt_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FINDTR IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //     IF :CRTSOLICR.SOLICR_FINDTR  <> 'X' THEN
    //     LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //     FRM$GARANTIAS_EQUIS ('FID');    
    //     END IF;
    //   ELSE
    //  SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_FALSE");  --CAHH     
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFindtr_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFindtr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINDTR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTR != "X") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("FID");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFindtr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :CRTSOLICR.W_CODIGOASESOR IS NOT NULL THEN
    //  
    //   BEGIN
    //    SELECT CONTPR_CORREO
    //      INTO :CRTSOLICR.W_CORREOASESOR
    //    FROM COTCONTPR 
    //    WHERE CONTPR_CODPRO = '860034313'
    //    AND CONTPR_CODCNT = :CRTSOLICR.W_CODIGOASESOR
    //    AND ROWNUM = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.W_CORREOASESOR := NULL;   
    //   END;
    //   
    // END IF; 
    //  
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wCodigoasesor_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_wCodigoasesor_whenValidateItem");
        if ((this.CRTSOLICR.W_CODIGOASESOR != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("W_CODIGOASESOR", this.CRTSOLICR.W_CODIGOASESOR);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_wcodigoasesor_whenvalidateitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.W_CORREOASESOR = result1[0].get("CRTSOLICR.W_CORREOASESOR");
            } catch (ex) {

                this.CRTSOLICR.W_CORREOASESOR = null;
            }

        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_wCodigoasesor_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --6754
    // P_LISTAREFERIDOS_DAV;
    // --6754; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wCodigoasesor_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCC_crtsolicr_wCodigoasesor_whenMouseDoubleclick");
        console.log("Exiting CRFSOLCC_crtsolicr_wCodigoasesor_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --6754
    // P_LISTAREFERIDOS_DAV;
    // --6754; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wCodigoasesor_keyListval() {
        console.log("Entering CRFSOLCC_crtsolicr_wCodigoasesor_keyListval");
        console.log("Exiting CRFSOLCC_crtsolicr_wCodigoasesor_keyListval");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :CRTSOLICR.W_CODIGOASESOR IS NOT NULL THEN
    //  
    //   BEGIN
    //    SELECT CONTPR_CORREO
    //      INTO :CRTSOLICR.W_CORREOASESOR
    //    FROM COTCONTPR 
    //    WHERE CONTPR_CODPRO = '860034313'
    //    AND CONTPR_CODCNT = :CRTSOLICR.W_CODIGOASESOR
    //    AND ROWNUM = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.W_CORREOASESOR := NULL;   
    //   END;
    //   
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_wCodigoasesor_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_wCodigoasesor_keyNextItem");
        if ((this.CRTSOLICR.W_CODIGOASESOR != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("W_CODIGOASESOR", this.CRTSOLICR.W_CODIGOASESOR);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_wcodigoasesor_keynextitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.W_CORREOASESOR = result1[0].get("CRTSOLICR.W_CORREOASESOR");
            } catch (ex) {

                this.CRTSOLICR.W_CORREOASESOR = null;
            }

        }
        console.log("Exiting CRFSOLCC_crtsolicr_wCodigoasesor_keyNextItem");
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
    //                    || 'CRFSOLCC.CRTSOLICR.SOLICR_PRENDA.WHEN-VALIDATE-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPrenda_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPrenda_whenValidateItem");
        // let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_PRENDA) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        let V_MENSAJE: string = null;
        try {

            // CRFSOLCC_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_PRENDA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrPrenda_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_PRENDA ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',ENTERABLE,"ATTR_OFF");
    //       GO_ITEM('CRTSOLICR.SOLICR_SEGURO');
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TIPACT',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_VRCIAL',ENTERABLE,ATTR_ON);
    //     END IF;
    //     NEXT_ITEM;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPrenda_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPrenda_keyNextItem");
        if (this.CRTSOLICR.SOLICR_PRENDA == "N") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", ENTERABLE, "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", ENTERABLE, "ATTR_OFF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_SEGURO");
        }
        else {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_TIPACT", ENTERABLE, ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_VRCIAL", ENTERABLE, ATTR_ON);
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPrenda_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //  
    //  
    //  
    // IF (:CRTSOLICR.SOLICR_LINEA = 'CA') AND (:CRTSOLICR.SOLICR_OPCCOM IS NOT NULL) THEN  --6914
    //   LIB$ALERTA('MENSAJE','CON CARTERA ORDINARIA NO DEBE HABER OPCIÓN DE COMPRA',NULL,NULL,NULL,T_RESPUESTA);  --6914
    //    RAISE FORM_TRIGGER_FAILURE;           --6914 
    // ELSE
    //   
    //   IF :CRTSOLICR.SOLICR_OPCCOM IS NOT NULL THEN
    //       IF NVL(:CRTSOLICR.SOLICR_OPCCOM, 0) < 0 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //    END IF; 
    //     
    // END IF;  --6914
    // 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOpccom_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOpccom_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_LINEA == "CA" && (this.CRTSOLICR.SOLICR_OPCCOM != null))) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "CON CARTERA ORDINARIA NO DEBE HABER OPCIÓN DE COMPRA", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            if ((this.CRTSOLICR.SOLICR_OPCCOM != null)) {
                if (this.CRTSOLICR.SOLICR_OPCCOM == null ? 0 :this.CRTSOLICR.SOLICR_OPCCOM < 0) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOpccom_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_GTONAC  NOT IN ('N','S') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   
    //   
    //   --6914   
    //    IF (:CRTSOLICR.SOLICR_LINEA = 'LI') AND (:CRTSOLICR.SOLICR_CODPRO='LEN') AND (:CRTSOLICR.SOLICR_GTONAC = 'N') THEN
    //       LIB$ALERTA('MENSAJE','PARA ESTA LÍNEA Y TIPO PRODUCTO SOLO ES VALIDO S.',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;     
    //    END IF;   
    //    --6914
    //    
    //    IF (:CRTSOLICR.SOLICR_LINEA = 'LE') AND (:CRTSOLICR.SOLICR_CODPRO='LEN') AND (:CRTSOLICR.SOLICR_GTONAC = 'S') THEN
    //        LIB$ALERTA('MENSAJE','PARA ESTA LÍNEA Y TIPO PRODUCTO SOLO ES VALIDO N.',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;       
    //    END IF;  
    //    
    //   
    //   
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrGtonac_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrGtonac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "S"].indexOf(this.CRTSOLICR.SOLICR_GTONAC) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_LINEA == "LI" &&this.CRTSOLICR.SOLICR_CODPRO == "LEN") &&this.CRTSOLICR.SOLICR_GTONAC == "N")) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "PARA ESTA LÍNEA Y TIPO PRODUCTO SOLO ES VALIDO S.", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (((this.CRTSOLICR.SOLICR_LINEA == "LE" &&this.CRTSOLICR.SOLICR_CODPRO == "LEN") &&this.CRTSOLICR.SOLICR_GTONAC == "S")) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "PARA ESTA LÍNEA Y TIPO PRODUCTO SOLO ES VALIDO N.", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrGtonac_whenValidateItem");
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
    async CRFSOLCC_crtsolicr_solicrResidu_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrResidu_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_RESIDU) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrResidu_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_RESIDU = 'N' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMRES',ENABLED, "PROPERTY_OFF");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMRES',ENABLED, "PROPERTY_OFF");
    //   ELSE
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMRES',ENABLED, "PROPERTY_ON");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMRES',ENABLED, "PROPERTY_ON");
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrResidu_posttextitem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrResidu_posttextitem");
        if (this.CRTSOLICR.SOLICR_RESIDU == "N") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMRES", "ENABLED", "PROPERTY_OFF");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMRES", "ENABLED", "PROPERTY_OFF");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMRES", "ENABLED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMRES", "ENABLED", "PROPERTY_ON");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrResidu_posttextitem");
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
    async CRFSOLCC_crtsolicr_solicrFdamut_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFdamut_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_FDAMUT) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFdamut_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_HIPTCA  NOT IN ('S','N') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE UNICAMENTE :(S) SI O (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrHiptca_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrHiptca_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_HIPTCA) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE UNICAMENTE :(S) SI O (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrHiptca_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_IFI IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_IFIP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //     IF :CRTSOLICR.SOLICR_IFI  <> 'X' THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //     FRM$GARANTIAS_EQUIS ('IFI');
    //     END IF;
    //   ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_IFIP',REQUIRED,"PROPERTY_FALSE");  --CAHH
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrIfi_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrIfi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_IFI != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_IFIP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_IFI != "X") {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_IFIP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrIfi_whenValidateItem");
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
    //        :CRTSOLICR.SOLICR_FNG := 'X';
    //        -- FRM$GARANTIAS_EQUIS ('FNG');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 :this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 :this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FNG = "X";
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrFngp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    //     V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //    V_DTF       INE.INEVAL%TYPE;
    //    V_DEF       INE.INEVAL%TYPE;
    //    V_TASATA    INE.INEVAL%TYPE;
    //    V_TASAEF    INE.INEVAL%TYPE;
    //    V_TASAEFT   INE.INEVAL%TYPE;
    //    
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
    //  BEGIN
    //    SELECT INEVAL
    //     INTO V_DTF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DTF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    //   
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //     IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      --LCBY:10791 -- TASAS PARA REDESCUENTO BANCOLDEX.
    //     --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO BANCOLDEX.
    //     IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_BCODXP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE --+PY21520. JDG
    //                      TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                      --+
    //                  AND TOPSOL_CODIGO = '07';
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO BANCOLDEX. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //     
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_BCODXP <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    // END IF;
    // 
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrBcodxp_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrBcodxp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: null = null;
        let V_DTF: null = null;
        let V_DEF: null = null;
        let V_TASATA: null = null;
        let V_TASAEF: null = null;
        let V_TASAEFT: null = null;
        if (this.CRTSOLICR.SOLICR_BCODEX == "X") {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 :this.CRTSOLICR.SOLICR_BCODXP < 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 :this.CRTSOLICR.SOLICR_BCODXP > 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_BCODEX = "X";
                this.oracleFormsBuiltins.go_item("SOLICR_TBCOLDX");
                // CRFSOLCC_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrbcodxp_whenvalidateitem_query1", payload1);
        // get values from result
        V_DTF = result1[0].get("V_DTF");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCC_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrbcodxp_whenvalidateitem_query2", payload2);
        // get values from result
        V_DEF = result2[0].get("V_DEF");
        if (result2 == null || result2.length == 0) {

            // CRFSOLCC_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        if (["DAD", "LNE"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1) {
            if (this.CRTSOLICR.SOLICR_INDRED == "S") {
                if ((this.CRTSOLICR.SOLICR_BCODXP != null)) {
                    // construct payload
                    let payload3 = new Map();
                    payload3.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrbcodxp_whenvalidateitem_query3", payload3);
                    // get values from result
                    V_TASA = result3[0].get("V_TASA");
                    if (result3 == null || result3.length == 0) {

                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO BANCOLDEX. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                    // V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
                    // V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
                    // V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
                    // if (SOLICR_BCODXP <= V_TASAEFT) {
                    //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
                    //     console.log("FORM_TRIGGER_FAILURE");
                    //     throw new Error('FORM_TRIGGER_FAILURE');
                    // }
                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrBcodxp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :CRTSOLICR.SOLICR_BCODXP IS NOT NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrBcodxp_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrBcodxp_keyNextItem");
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
                // CRFSOLCC_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA Y SU LÍNEA DE REDESCUENTO.");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_IFI");
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrBcodxp_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_wOficina_whenMouseClick() {
        console.log("Entering CRFSOLCC_crtsolicr_wOficina_whenMouseClick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_wOficina_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_wOficina_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCC_crtsolicr_wOficina_whenMouseDoubleclick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_wOficina_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_wOficina_keyListval() {
        console.log("Entering CRFSOLCC_crtsolicr_wOficina_keyListval");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_wOficina_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT OFI_DESCRIP 
    //     INTO :CRTSOLICR.W_OFICINA_DESCR
    //   FROM CRTOFIDAV 
    //   WHERE OFI_COD = :CRTSOLICR.W_OFICINA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CRTSOLICR.W_OFICINA_DESCR := NULL;
    // END;
    // 
    // GO_ITEM('CRTSOLICR.W_CODIGOASESOR');
    // 
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_wOficina_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_wOficina_keyNextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("W_OFICINA", this.CRTSOLICR.W_OFICINA);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_woficina_keynextitem_query1", payload1);
        // get values from result
       this.CRTSOLICR.W_OFICINA_DESCR = result1[0].get("CRTSOLICR.W_OFICINA_DESCR");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.W_OFICINA_DESCR = null;
        }

        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_wOficina_keyNextItem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_ACTIVO.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrActivo_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrActivo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CLASAC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_ACTIVO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrActivo_keyNextItem");
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
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_FALSE");  --CAHH
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //   :SOLICR_PUNTS$:=NULL;                         --CAHH
    //  ELSE
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_TRUE");  --CAHH
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_TRUE");  --CAHH
    // END IF; 
    // --BEGIN
    // --    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    // --     LIB$ALERTA('MENSAJE','EXISTE TASA FIJA .... AL GRABAR TASA VARIABLE LA INFORMACIÓN SERÁ INCONSISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    // --     RAISE FORM_TRIGGER_FAILURE;
    // --    END IF;
    // --END;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if ((SOLICR_TDOLAR != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TDOLAR", SOLICR_TDOLAR);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
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
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTdolar_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1     VARCHAR2(100);
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    //  VCONMON BOOLEAN; -- CUOP
    // BEGIN
    //   IF :SOLICR_TIPBIE = '001' THEN
    //     LIB$DTNERFRMA('ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE USAR 010 Ó 011. CONSULTE LA LISTA DE VALORES');
    //   END IF;
    //   --
    //   IF :SOLICR_TIPBIE IS NOT NULL THEN
    //     BEGIN
    //       SELECT TIPBIEN_DESBIEN 
    //         INTO DESC1
    //         FROM CRTTIPBIEN
    //        WHERE --+PY21520. JDG
    //              TIPBIEN_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND TIPBIEN_CODBIEN=:SOLICR_TIPBIE;
    //       :SOLICR_SUBCAT  := NULL;
    //       :W_SUBCATEGORIA := NULL;      
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //           LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE.....',NULL,NULL,NULL,T_RESPUESTA);
    //           RAISE FORM_TRIGGER_FAILURE;
    //     END;  
    //     BEGIN
    //       IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_OFF");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_OFF");
    //       ELSE 
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,PROPERTY_ON); 
    //       END IF;
    //     END;
    //     -- CUOP
    //     --+PY26491. JDG. 2018.06.14
    //     --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //     IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //       ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //     --+
    //      :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //      :this.PARAMETER.get("PENCCOM") := 'S';
    //     END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTipbie_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTipbie_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        let VCONMON: boolean = null;
        // if (SOLICR_TIPBIE == "001") {
        //     // CRFSOLCC_LIB$DTNERFRMA("ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE USAR 010 Ó 011. CONSULTE LA LISTA DE VALORES");
        // }
        // if ((SOLICR_TIPBIE != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrtipbie_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     this.CRTSOLICR.SOLICR_SUBCAT = null;
        //     this.CRTSOLICR.W_SUBCATEGORIA = null;
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE.....", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        //     if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", "PROPERTY_OFF");
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "DISPLAYED", "PROPERTY_OFF");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPBIE", "REQUIRED", "PROPERTY_ON");
        //     }
        //     if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) ||this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //         // this.PARAMETER.get("PENCCOM") = "S";
        //     }
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTipbie_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // --IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL THEN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      BEGIN
    //       SELECT TIPBIEN_DESBIEN
    //         INTO :CRTSOLICR.BIEN
    //         FROM CRTTIPBIEN
    //        WHERE --+PY21520. JDG 
    //              TIPBIEN_CODUNI  = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE;
    //      EXCEPTION WHEN OTHERS THEN
    //       :CRTSOLICR.BIEN := NULL;
    //      END;--
    //      GO_ITEM('CRTSOLICR.SOLICR_SUBCAT');
    //      --NEXT_ITEM;
    //   --END IF;
    //  ELSIF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //   GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   --NEXT_ITEM;    
    //    /*:SOLICR_SUBCAT  := NULL;
    //    :W_SUBCATEGORIA := NULL;     */
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTipbie_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTipbie_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrtipbie_keynextitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.BIEN = result1[0].get("CRTSOLICR.BIEN");
            } catch (ex) {

                this.CRTSOLICR.BIEN = null;
            }

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_SUBCAT");
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_NITTER");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTipbie_keyNextItem");
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
    async CRFSOLCC_crtsolicr_solicrCedeec_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCedeec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_CEDEEC) != -1) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCedeec_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_CEDEEC ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMCES',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMCES',ENTERABLE,"ATTR_OFF");
    //       GO_ITEM('CRTSOLICR.SOLICR_PIGOPC');
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMCES',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMCES',ENTERABLE,ATTR_ON);
    //       GO_ITEM('CRTSOLICR.SOLICR_NOMCES');
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCedeec_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCedeec_keyNextItem");
        if (this.CRTSOLICR.SOLICR_CEDEEC == "N") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMCES", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMCES", ENTERABLE, "ATTR_OFF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PIGOPC");
        }
        else {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMCES", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMCES", ENTERABLE, ATTR_ON);
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_NOMCES");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCedeec_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    //   
    //   --
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
    async CRFSOLCC_crtsolicr_solicrVrfina_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrVrfina_whenValidateItem");
        // if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) ||this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //     this.PARAMETER.get("PENCCOM") = "S";
        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrVrfina_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /*7981
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // 
    // END;
    // 7981
    // */
    // :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrVrfina_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrVrfina_whenNewItemInstance");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        console.log("Exiting CRFSOLCC_crtsolicr_solicrVrfina_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    //  
    //   :CRTSOLICR.W_OFICINA := NULL;
    //    :CRTSOLICR.W_OFICINA_DESCR := NULL;
    //     
    //   :CRTSOLICR.W_CODIGOASESOR := NULL;
    //    :CRTSOLICR.W_NOMBREASESOR := NULL;
    //    :CRTSOLICR.W_CORREOASESOR := NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_tipoReferencia_whenListChanged() {
        console.log("Entering CRFSOLCC_crtsolicr_tipoReferencia_whenListChanged");
        this.CRTSOLICR.W_OFICINA = null;
        this.CRTSOLICR.W_OFICINA_DESCR = null;
        this.CRTSOLICR.W_CODIGOASESOR = null;
        this.CRTSOLICR.W_NOMBREASESOR = null;
        this.CRTSOLICR.W_CORREOASESOR = null;
        console.log("Exiting CRFSOLCC_crtsolicr_tipoReferencia_whenListChanged");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    //  GO_ITEM('CRTSOLICR.W_OFICINA'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_tipoReferencia_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_tipoReferencia_keyNextItem");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.W_OFICINA");
        console.log("Exiting CRFSOLCC_crtsolicr_tipoReferencia_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF  :CRTSOLICR.SOLICR_GTIREC IS NOT NULL THEN
    //      IF :CRTSOLICR.SOLICR_GTIREC  NOT IN ('S','N') THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //         END IF;
    //      IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_FALSE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_FALSE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //      ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',"DISPLAYED","PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_TRUE"); 
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',UPDATEABLE,"PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_TRUE");
    //     END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrGtirec_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrGtirec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_GTIREC != null)) {
            if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            }
            if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
            }
            else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "DISPLAYED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "UPDATEABLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_TRUE");
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrGtirec_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrGtirec_keyPrevItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrGtirec_keyPrevItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrGtirec_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPCRE', "NEXT_NAVIGATION_ITEM", 'CRTSOLICR.SOLICR_NITTER');
    //    ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',"DISPLAYED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',UPDATEABLE,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"PROPERTY_TRUE");
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrGtirec_posttextitem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrGtirec_posttextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TIPCRE", "NEXT_NAVIGATION_ITEM", "CRTSOLICR.SOLICR_NITTER");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrGtirec_posttextitem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_GTIREC ='N' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',ENABLED,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,"ATTR_OFF");
    //       --GO_ITEM('CRTSOLICR.SOLICR_PRENDA');
    //     ELSIF :CRTSOLICR.SOLICR_GTIREC ='S' THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',ENABLED,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_NOMREC',NAVIGABLE,ATTR_ON);
    //      -- GO_ITEM('CRTSOLICR.SOLICR_NOMREC');
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrGtirec_keynextitem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrGtirec_keynextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "ATTR_OFF");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_ON");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrGtirec_keynextitem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTiseve_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTiseve_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_TISEVE", this.CRTSOLICR.SOLICR_TISEVE);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrtiseve_whenvalidateitem_query1", payload1);
                // get values from result
               this.CRTSOLICR.DESCRI_TISEVE = result1[0].get("CRTSOLICR.DESCRI_TISEVE");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_TISEVE = null;
                this.CRTSOLICR.DESCRI_TISEVE = null;
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CÓDIGO DE TIPO DE SERVICIO QUE PRESTARÁ EL VEHÍCULO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrTiseve_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) AND (:CRTSOLICR.TIPO_REFERENCIA IS NULL) THEN
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    // ELSE
    //  IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) AND (:CRTSOLICR.TIPO_REFERENCIA IN (1,2,3)) THEN
    //    LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    //  ELSE
    //   
    //   IF :CRTSOLICR.TIPO_REFERENCIA = 4 AND :CRTSOLICR.W_OFICINA IS NULL THEN
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.'); 
    //   ELSE 
    //    :CRTSOLICR.W_NITREF      := :CRTSOLICR.W_CODIGOASESOR;
    //    :CRTSOLICR.W_DESCRI_REF  := :CRTSOLICR.W_NOMBREASESOR;
    //     :CRTSOLICR.SOLICR_OFIDAV := :CRTSOLICR.W_OFICINA;
    //    
    //    HIDE_VIEW('OFI_DAVI_REF');
    //    GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    //     
    //    
    //    IF :CRTSOLICR.W_NITREF IS NOT NULL THEN
    //        :CRTSOLICR.W_REFERIDO  := 'S';  
    //     ELSE  
    //        :CRTSOLICR.W_REFERIDO  := 'N';
    //     END IF;
    //    
    //    END IF;
    //  END IF;
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_cerrar_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_cerrar_whenButtonPressed");
        if (((this.CRTSOLICR.W_CODIGOASESOR == null) && (this.CRTSOLICR.TIPO_REFERENCIA == null))) {
            // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
        }
        else {
            if (((this.CRTSOLICR.W_CODIGOASESOR == null) && [1, 2, 3].indexOf(parseInt(this.CRTSOLICR.TIPO_REFERENCIA)) != -1)) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
            }
            else {
                if ((this.CRTSOLICR.TIPO_REFERENCIA == '4' && (this.CRTSOLICR.W_OFICINA == null))) {
                    // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
                }
                else {
                    this.CRTSOLICR.W_NITREF = this.CRTSOLICR.W_CODIGOASESOR;
                    this.CRTSOLICR.W_DESCRI_REF = this.CRTSOLICR.W_NOMBREASESOR;
                    this.CRTSOLICR.SOLICR_OFIDAV = this.CRTSOLICR.W_OFICINA;
                    this.oracleFormsBuiltins.hide_view("OFI_DAVI_REF");
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
                    if ((this.CRTSOLICR.W_NITREF != null)) {
                        this.CRTSOLICR.W_REFERIDO = "S";
                    }
                    else {
                        this.CRTSOLICR.W_REFERIDO = "N";
                    }
                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_cerrar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PVALTER(:CRTSOLICR.SOLICR_NITTER); 
    //   END IF;
    // END;
    // -- CUOP
    // --+PY26491. JDG. 2018.06.14
    // --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // --+
    //   :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //   :this.PARAMETER.get("PENCCOM") := 'S';
    // END IF;
    // -- PRY 20512
    // -- AUTOR SARA MURCIA SMC
    // -- FECHA 16/12/2016
    // 
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_VALOR NUMBER;
    //   V_MENSAJE VARCHAR2(3000);
    // BEGIN
    // OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO  (V_VALOR  , :CRTSOLICR.SOLICR_NITTER , V_MENSAJE ); 
    //   IF V_VALOR = 1 THEN 
    //    LIB$ALERTA('MENSAJE',V_MENSAJE ,
    //                      NULL,
    //                      NULL,
    //                      NULL,
    //                      T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;     
    // 
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrNitter_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrNitter_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFSOLCC_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrNitter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   W_TIPER       VARCHAR2(1);
    //   W_TIPO        VARCHAR2(2); 
    //   W_EXISTE      NUMBER;
    //   V_ACTA       VARCHAR2(1);
    //   V_TIPO       VARCHAR2(1);--12802
    // BEGIN
    //  
    //  --PY 12802
    // BEGIN
    // SELECT TERPER
    // INTO V_TIPO 
    // FROM TER 
    // WHERE TERCOD =  :CRTSOLICR.SOLICR_NITTER;
    // EXCEPTION WHEN NO_DATA_FOUND THEN V_TIPO := NULL;
    // END;
    //  
    //  --PY 12802
    //  
    //  
    //   IF SYSTEM.RECORD_STATUS <> 'INSERT' THEN
    //   COMMIT;
    //   END IF;
    //  DEFAULT_VALUE(NULL, 'GLOBAL.TER_ORIGEN');
    //  BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    
    //    -- AUTOR SARA MURCIA SMC
    //   -- PROYECTO 20521
    //   -- FECHA 16/12/2016
    //   DECLARE
    //     T_RESPUESTA NUMBER;
    //     V_VALOR NUMBER;
    //     V_MENSAJE VARCHAR2(3000);
    //   BEGIN
    //   
    //   OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO (V_VALOR,:CRTSOLICR.SOLICR_NITTER, V_MENSAJE); 
    //   
    //   IF V_VALOR = 1 THEN 
    //    LIB$ALERTA('MENSAJE',V_MENSAJE ,
    //                      NULL,
    //                      NULL,
    //                      NULL,
    //                      T_RESPUESTA);
    //         
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  END;
    //  
    //    
    //   BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM
    //      INTO   :CRTSOLICR.NOMBRE
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      --PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITTER, NULL,NULL, NULL,'Q'); PY 12802
    //      
    //        PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO,'M'); --PY 12802
    //      
    //      
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //    
    //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. RECUERDE QUE EL TERCERO DEBE EXISTIR POR FAVOR CREARLO EN EL SAV O POR LA PANTALLA DE CREACIÓN.....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //         
    //      /*IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //         --PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITTER, NULL,NULL, NULL,'T'); PY 12802
    //         PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO);--PY 12802
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO .....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //      END IF;*/
    //      
    //    END;
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;  
    //  END;
    //  BEGIN
    //    SELECT  ENTPRO
    //     INTO   :CRTSOLICR.SOLICR_SOLORIG
    //     FROM   ENT
    //     WHERE  (ENTCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','ACTUALICE EL ORIGEN DEL TERCERO EN LA BASE DE DATOS .....',NULL,NULL,NULL,T_RESPUESTA);
    //   END;
    //   IF :CRTSOLICR.SOLICR_SOLORIG = 'NA' THEN
    //      LIB$ALERTA('MENSAJE','ORIGEN (NA) NO PERMITIDO. DEBE ACTUALIZARLO EN TERCEROS PARA CONTINUAR.....',NULL,NULL,NULL, T_RESPUESTA);
    //      --PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITTER, NULL, NULL, NULL, 'O'); PY 12802
    //      PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO,'M'); --PY 12802
    //      
    //      :CRTSOLICR.SOLICR_SOLORIG := :GLOBAL.TER_ORIGEN;
    //   END IF;
    //  BEGIN
    //   SELECT  TDPRDES
    //     INTO   :CRTSOLICR.NOMBRE_ORIGEN
    //     FROM   TDPR
    //     WHERE  (TDPRCOD=:CRTSOLICR.SOLICR_SOLORIG);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','ACTUALICE EL ORIGEN DEL TERCERO EN LA BASE DE DATOS .....',NULL,NULL,NULL,T_RESPUESTA);
    //   END;
    //   BEGIN 
    //       SELECT COUNT(9) 
    //         INTO W_EXISTE
    //         FROM CRTOTERSOL
    //        WHERE --+PY21520. JDG
    //              OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND OTERSOL_TIPVIN = '05';
    //       IF  W_EXISTE = 0 THEN
    //       IF :CRTSOLICR.SOLICR_CODSOL IS NOT NULL THEN
    //       BEGIN  
    //         SELECT  TERPER,TERTID
    //          INTO   W_TIPER,W_TIPO
    //         FROM TER
    //         WHERE TERCOD = :CRTSOLICR.SOLICR_NITTER;
    //         ----------SMT 03/01/2006-------------
    //         IF W_TIPER='N' THEN
    //           V_ACTA:='N';
    //         ELSE          
    //           V_ACTA:='S';
    //         END IF;
    //          INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE,OTERSOL_ACTJUN)
    //         VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'05',:CRTSOLICR.SOLICR_NITTER,W_TIPER,W_TIPO,V_ACTA);
    //       EXCEPTION
    //        WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','TERCERO NO ESTA CREADO .....',NULL,NULL,NULL,T_RESPUESTA);
    //       END;
    //       END IF;
    //       ELSIF W_EXISTE = 1 THEN
    //        BEGIN
    //          SELECT  TERPER,TERTID
    //          INTO   W_TIPER,W_TIPO
    //          FROM TER
    //          WHERE TERCOD = :CRTSOLICR.SOLICR_NITTER;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         NULL; 
    //       END;
    //       ----------SMT 03/01/2006-------------
    //       IF W_TIPER='N' THEN
    //         V_ACTA:='N';
    //       ELSE          
    //         V_ACTA:='S';
    //       END IF;  
    //       
    //        UPDATE CRTOTERSOL
    //           SET OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //             ,OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //             ,OTERSOL_TIPVIN = '05'
    //             ,OTERSOL_NITTER = :CRTSOLICR.SOLICR_NITTER
    //             ,OTERSOL_TIPPER = W_TIPER
    //             ,OTERSOL_TIPIDE = W_TIPO
    //             ,OTERSOL_ACTJUN = V_ACTA
    //         WHERE --+PY21520. JDG
    //               OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //               --+ 
    //           AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //           AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //           AND OTERSOL_TIPVIN = '05';
    //      END IF;
    //      GO_ITEM('CRTSOLICR.SOLICR_ORMONET');
    //   END;
    //   
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrNitter_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrNitter_keyNextItem");
        let T_RESPUESTA: number = null;
        let W_TIPER: string = null;
        let W_TIPO: string = null;
        let W_EXISTE: number = null;
        let V_ACTA: string = null;
        let V_TIPO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query1", payload1);
        // get values from result
        V_TIPO = result1[0].get("V_TIPO");
        if (result1 == null || result1.length == 0) {

            V_TIPO = null;
        }

        // if (SYSTEM.RECORD_STATUS != "INSERT") {
        // }
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.TER_ORIGEN");
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            {

                let T_RESPUESTA: number = null;
                let V_VALOR: number = null;
                let V_MENSAJE: string = null;
                // CRFSOLCC_OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO(V_VALOR,this.CRTSOLICR.SOLICR_NITTER, V_MENSAJE);
                if (V_VALOR == 1) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }

            // construct payload
            let payload3 = new Map();
            payload3.set("SOLICR_NITTER",this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query3", payload3);
            // get values from result
           this.CRTSOLICR.NOMBRE = result3[0].get("CRTSOLICR.NOMBRE");
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            // CRFSOLCC_PU_LLAMAR_FORTER(this.CRTSOLICR.SOLICR_NITTER, V_TIPO, "M");
            if (result3 == null || result3.length == 0) {

                // CRFSOLCC_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. RECUERDE QUE EL TERCERO DEBE EXISTIR POR FAVOR CREARLO EN EL SAV O POR LA PANTALLA DE CREACIÓN.....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        // construct payload
        let payload4 = new Map();
        payload4.set("SOLICR_NITTER",this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result4 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query4", payload4);
        // get values from result
       this.CRTSOLICR.SOLICR_SOLORIG = result4[0].get("CRTSOLICR.SOLICR_SOLORIG");
        if (result4 == null || result4.length == 0) {

            // CRFSOLCC_LIB$ALERTA("MENSAJE", "ACTUALICE EL ORIGEN DEL TERCERO EN LA BASE DE DATOS .....", null, null, null, T_RESPUESTA);
        }

        if (this.CRTSOLICR.SOLICR_SOLORIG == "NA") {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "ORIGEN (NA) NO PERMITIDO. DEBE ACTUALIZARLO EN TERCEROS PARA CONTINUAR.....", null, null, null, T_RESPUESTA);
            // CRFSOLCC_PU_LLAMAR_FORTER(this.CRTSOLICR.SOLICR_NITTER, V_TIPO, "M");
            // this.CRTSOLICR.SOLICR_SOLORIG = this.GLOBAL.TER_ORIGEN;
        }
        // construct payload
        let payload5 = new Map();
        payload5.set("SOLICR_SOLORIG",this.CRTSOLICR.SOLICR_SOLORIG);
        // call REST API
        const result5 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query5", payload5);
        // get values from result
       this.CRTSOLICR.NOMBRE_ORIGEN = result5[0].get("CRTSOLICR.NOMBRE_ORIGEN");
        if (result5 == null || result5.length == 0) {

            // CRFSOLCC_LIB$ALERTA("MENSAJE", "ACTUALICE EL ORIGEN DEL TERCERO EN LA BASE DE DATOS .....", null, null, null, T_RESPUESTA);
        }

        // construct payload
        let payload6 = new Map();
        payload6.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
        payload6.set("SOLICR_OFCSOL",this.CRTSOLICR.SOLICR_OFCSOL);
        payload6.set("SOLICR_CODSOL",this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result6 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query6", payload6);
        // get values from result
        W_EXISTE = result6[0].get("W_EXISTE");
        if (W_EXISTE == 0) {
            if ((this.CRTSOLICR.SOLICR_CODSOL != null)) {
                // construct payload
                let payload7 = new Map();
                payload7.set("SOLICR_NITTER",this.CRTSOLICR.SOLICR_NITTER);
                // call REST API
                const result7 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query7", payload7);
                // get values from result
                W_TIPER = result7[0].get("W_TIPER");
                W_TIPO = result7[0].get("W_TIPO");
                if (W_TIPER == "N") {
                    V_ACTA = "N";
                }
                else {
                    V_ACTA = "S";
                }
                // construct payload
                let payload8 = new Map();
                // payload8.SOLICR_OFCSOL = :this.CRTSOLICR.SOLICR_OFCSOL;
                // payload8.SOLICR_CODSOL = :this.CRTSOLICR.SOLICR_CODSOL;
                // payload8.SOLICR_NITTER = :this.CRTSOLICR.SOLICR_NITTER;
                // call REST API
                const result8 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query8", payload8);
                if (result8 == null || result8.length == 0) {

                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "TERCERO NO ESTA CREADO .....", null, null, null, T_RESPUESTA);
                }

            }
        }
        else if (W_EXISTE == 1) {
            // construct payload
            let payload9 = new Map();
            payload9.set("SOLICR_NITTER",this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result9 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query9", payload9);
            // get values from result
            W_TIPER = result9[0].get("W_TIPER");
            W_TIPO = result9[0].get("W_TIPO");
            if (result9 == null || result9.length == 0) {

            }

            if (W_TIPER == "N") {
                V_ACTA = "N";
            }
            else {
                V_ACTA = "S";
            }
            // construct payload
            let payload10 = new Map();
            // payload10.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            // payload10.SOLICR_CODSOL = : SOLICR_CODSOL;
            // payload10.SOLICR_NITTER = : SOLICR_NITTER;
            // payload10.SOLICR_CODUNI = : SOLICR_CODUNI;
            // call REST API
            let result10 = Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrnitter_keynextitem_query10", payload10);
        }
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ORMONET");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrNitter_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // GO_ITEM('SOLICR_PLAZO');
    // HIDE_VIEW('OFI_VEHI'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfivehi_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfivehi_keyNextItem");
        this.oracleFormsBuiltins.go_item("SOLICR_PLAZO");
        this.oracleFormsBuiltins.hide_view("OFI_VEHI");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfivehi_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // BEGIN 
    // IF :SOLICR_SUBCAT IS NOT NULL THEN
    //  BEGIN
    //  SELECT SUBCAT_DESCRI
    //    INTO :W_SUBCATEGORIA
    //    FROM COTSUBCAT
    //   WHERE --+PY21520. JDG
    //         SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //         --+
    //     AND SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //     AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //      AND SUBCAT_ESTADO = 'A';
    //  EXCEPTION WHEN OTHERS THEN
    //   :W_SUBCATEGORIA := NULL;
    //  END;
    // /*ELSE
    //  IF :SOLICR_TIPCRE = '03' THEN
    //   LIB$ALERTA('MENSAJE','DEBE SELECCIONAR UNA SUBCATEGORIA...',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;*/
    // END IF; 
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrSubcat_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrSubcat_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((SOLICR_SUBCAT != null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //         payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
        //         payload1.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrsubcat_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         W_SUBCATEGORIA = result1[0].get("W_SUBCATEGORIA");
        //     } catch (ex) {

        //         this.CRTSOLICR.W_SUBCATEGORIA = null;
        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrSubcat_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // BEGIN 
    // /*IF :SOLICR_SUBCAT IS NOT NULL THEN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   END IF;
    // ELSE
    //    IF :SOLICR_TIPCRE = '03' THEN
    //    LIB$ALERTA('MENSAJE','DEBE SELECCIONAR UNA SUBCATEGORIA...',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;
    // END IF;  */NULL;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrSubcat_keynextitem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrSubcat_keynextitem");
        let T_RESPUESTA: number = null;
        console.log("Exiting CRFSOLCC_crtsolicr_solicrSubcat_keynextitem");
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
    async CRFSOLCC_crtsolicr_solicrPresid_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPresid_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PRESID == null ? 0 :this.CRTSOLICR.SOLICR_PRESID > 100) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE RESIDUAL DEBE SER INFERIOR AL 100%....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPresid_whenValidateItem");
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
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPresid_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPresid_postTextItem");
        if ((this.CRTSOLICR.SOLICR_PRESID == null)) {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NITRES", ENTERABLE, "ATTR_OFF");
        }
        else {
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", ATTR_ON);
            // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_NITRES", ENTERABLE, ATTR_ON);
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrPresid_postTextItem");
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
    //                   || 'CRFCSOLCC.CRTSOLICR.SOLICR_USCRED.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrFecradi_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrFecradi_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PRSOCL");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCSOLCC.CRTSOLICR.SOLICR_USCRED.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFCSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrFecradi_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC2        VARCHAR2(100); 
    // BEGIN
    //    SELECT PROD_DESCRI
    //      INTO DESC2
    //      FROM CRTPRODCIA
    //     WHERE --+PY21520. JDG
    //           PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //           --+
    //       AND PROD_CODIGO = :SOLICR_CODPRO;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // 
    // END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_tipdescr_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_tipdescr_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC2: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //         payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_tipdescr_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC2 = result1[0].get("DESC2");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_tipdescr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //   BEGIN
    //    
    //    COMMIT_FORM;
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
    //                    || 'CRFSOLCC.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_btnRegfrmxc_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_btnRegfrmxc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.hide_window("WINDOWC");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_btnRegfrmxc_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /*
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
    // 
    // */
    // --SI TASA FIJA SE DILIGENCIA, SE INACTIVAN PESOS Y DOLARES, DE LO CONTRARIO
    // --SE INACTIVA SEGÚN EL CASO
    //  IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_FALSE"); 
    //    :CRTSOLICR.SOLICR_PUNTS$ := NULL;
    //    :CRTSOLICR.SOLICR_PTOUS$ := NULL;
    //    :CRTSOLICR.SOLICR_TDOLAR := NULL;
    //    :CRTSOLICR.SOLICR_TPESOS := NULL;
    //  ELSE
    //   
    //      IF :SOLICR_ORMONET = 'PE' THEN
    //          SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_FALSE"); 
    // 
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_FALSE"); 
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_TRUE"); 
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_TRUE"); 
    //          SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //         :SOLICR_PTOUS$:=NULL;                
    //        :CRTSOLICR.SOLICR_TDOLAR := NULL;
    //      :CRTSOLICR.SOLICR_PTOUS$ := NULL;
    //    ELSE
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_TRUE"); 
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_TRUE");  
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_FALSE"); 
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_FALSE"); 
    //       :CRTSOLICR.SOLICR_TPESOS := NULL;
    //      :CRTSOLICR.SOLICR_PUNTS$ := NULL;  
    //         SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);       
    //    END IF;
    // 
    //   END IF; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrTasa_postTextItem");
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_PUNTS$ = null;
            this.CRTSOLICR.SOLICR_PTOUS$ = null;
            this.CRTSOLICR.SOLICR_TDOLAR = null;
            this.CRTSOLICR.SOLICR_TPESOS = null;
        }
        else {
            // if (SOLICR_ORMONET == "PE") {
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_FALSE");
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_FALSE");
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_TRUE");
            //     // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            //     this.CRTSOLICR.SOLICR_PTOUS = null;
            //     this.CRTSOLICR.SOLICR_TDOLAR = null;
            //     this.CRTSOLICR.SOLICR_PTOUS$ = null;
            // }
            // else {
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TDOLAR", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PTOUS$", "ENABLED", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TPESOS", "ENABLED", "PROPERTY_FALSE");
            //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
            //     this.CRTSOLICR.SOLICR_TPESOS = null;
            //     this.CRTSOLICR.SOLICR_PUNTS$ = null;
            //     // CRFSOLCC_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            // }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_CANTPRREF NUMBER;
    //   V_ORIGEN  CRTREFPRV.REFPRV_ORIGEN%TYPE;
    // BEGIN 
    //  
    // 
    //   IF :CRTSOLICR.REF_PROVEEDOR IS NULL OR :CRTSOLICR.REF_PROV_ASE IS NULL THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');    
    //   END IF; 
    //   
    // 
    //     --VALIDACION PROVEEDORES REFERIDOS 
    //     ------------------------------------------------------------ 
    //     IF :CRTSOLICR.SOLICR_CODPRO = 'RFP' THEN
    //         BEGIN
    //         SELECT REFPRV_ORIGEN
    //           INTO V_ORIGEN
    //          FROM CRTREFPRV 
    //         WHERE --+PY21520. JDG
    //               REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //               --+
    //           AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //           AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN  
    //          V_ORIGEN := 'N';
    //       END;
    //       
    //       IF V_ORIGEN <> 'R' THEN
    //           IF :CRTSOLICR.REF_PROV_ASE IS NULL OR :CRTSOLICR.REF_PROVEEDOR IS NULL THEN
    //               LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.');
    //           --ELSE 
    //           --   PUP_INSERT_REF_PROVEEDOR (:CRTSOLICR.REF_PROVEEDOR, :CRTSOLICR.REF_PROV_ASE);
    //           END IF;
    //       END IF;
    //    ELSIF :CRTSOLICR.SOLICR_CODPRO = 'ACC' THEN
    //            IF :CRTSOLICR.REF_PROV_ASE IS NULL OR :CRTSOLICR.REF_PROVEEDOR IS NULL THEN
    //               LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR ACC.');
    //           --ELSE 
    //           --   PUP_INSERT_REF_PROVEEDOR (:CRTSOLICR.REF_PROVEEDOR, :CRTSOLICR.REF_PROV_ASE);
    //           END IF;
    //    ELSIF :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN
    //            IF :CRTSOLICR.REF_PROV_ASE IS NULL OR :CRTSOLICR.REF_PROVEEDOR IS NULL THEN
    //               LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR FINAVANZA.');
    //           --ELSE 
    //           --   PUP_INSERT_REF_PROVEEDOR (:CRTSOLICR.REF_PROVEEDOR, :CRTSOLICR.REF_PROV_ASE);
    //           END IF;          
    //    END IF;   
    //     -----------------------------------------------------------
    //     
    // 
    //     
    //   HIDE_VIEW('PROVEE_REF');
    //   GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    //  
    //   
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_aplicarref_whenButtonPressed() {
        console.log("Entering CRFSOLCC_crtsolicr_aplicarref_whenButtonPressed");
        let V_CANTPRREF: number = null;
        let V_ORIGEN: null = null;
        if (((this.CRTSOLICR.REF_PROVEEDOR == null) || (this.CRTSOLICR.REF_PROV_ASE == null))) {
            // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
        }
        if (this.CRTSOLICR.SOLICR_CODPRO == "RFP") {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_aplicarref_whenbuttonpressed_query1", payload1);
            // get values from result
            V_ORIGEN = result1[0].get("V_ORIGEN");
            if (result1 == null || result1.length == 0) {

                // V_ORIGEN = "N";
            }

            if (V_ORIGEN != "R") {
                if (((this.CRTSOLICR.REF_PROV_ASE == null) || (this.CRTSOLICR.REF_PROVEEDOR == null))) {
                    // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.");
                }
            }
        }
        else if (this.CRTSOLICR.SOLICR_CODPRO == "ACC") {
            if (((this.CRTSOLICR.REF_PROV_ASE == null) || (this.CRTSOLICR.REF_PROVEEDOR == null))) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PROVEEDOR ACC.");
            }
        }
        else if (this.CRTSOLICR.SOLICR_CODPRO == "FVZ") {
            if (((this.CRTSOLICR.REF_PROV_ASE == null) || (this.CRTSOLICR.REF_PROVEEDOR == null))) {
                // CRFSOLCC_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PROVEEDOR FINAVANZA.");
            }
        }
        this.oracleFormsBuiltins.hide_view("PROVEE_REF");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        console.log("Exiting CRFSOLCC_crtsolicr_aplicarref_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /* ANTES 7843
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CIASEG IS NOT NULL THEN
    //    BEGIN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //     INTO  :CRTSOLICR.NONCIASEG    
    //     FROM TER
    //     WHERE TERCOD=:CRTSOLICR.SOLICR_CIASEG;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','ASEGURADORA INEXISTENTE VERIFICAR EN TERCEROS ACTIVIDAD ECONÓMICA....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END; 
    //    ELSE
    //     GO_ITEM('CRTSOLICR.SOLICR_DEDESP');
    //     END IF;
    // END;
    // 7843
    // */
    // --EL CAMPO :CRTSOLICR.NONCIASEG  SE VA A LLENAR CUANDO SE SACA LA LISTA DE VALORES SE DEJA SOLO LA NAVEGACION SIGUIENTE
    // 
    // GO_ITEM('CRTSOLICR.SOLICR_DEDESP'); END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCiaseg_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCiaseg_keyNextItem");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_DEDESP");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCiaseg_keyNextItem");
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
    //                   || 'CRFSOLCC.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCC', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrPlazmi_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrPlazmi_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCC.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCC_PBD_SEG_MSGERR("CRFSOLCC", V_MENSAJE);
                // CRFSOLCC_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCC_crtsolicr_solicrPlazmi_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :SOLICR_INTVEN IS NOT NULL THEN
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
    async CRFSOLCC_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrIntven_whenValidateItem");
        // if ((SOLICR_INTVEN != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         // payload1.set("SOLICR_INTVEN", SOLICR_INTVEN);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCC_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrIntven_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrComopr_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrComopr_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_solicrComopr_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    IF :CRTSOLICR.SOLICR_HIPTCA IS NULL AND :CRTSOLICR.SOLICR_DESHIP IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','DEBE DIGITAR (S) EN HIPOTECA .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrDeship_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrDeship_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_HIPTCA == null) && (this.CRTSOLICR.SOLICR_DESHIP != null))) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE DIGITAR (S) EN HIPOTECA .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrDeship_whenValidateItem");
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
    //     ELSIF ESTVI = 'VI' AND ESTRE = 'CJ' THEN
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
    //            AND  INCGRU='02';
    //        EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //          NULL;
    //        END;  
    //      END IF; 
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrCtacod_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrCtacod_whenValidateItem");
        let T_RESPUESTA: number = null;
        let CONTADOR: number = null;
        let ESTVI: string = null;
        let ESTRE: string = null;
        if ((null)) {
            CONTADOR = 0;
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_CTAOFC", SOLICR_CTAOFC);
            // payload1.set("SOLICR_CTATIP", SOLICR_CTATIP);
            // payload1.set("SOLICR_CTACOD", SOLICR_CTACOD);
            // call REST API
            const result1 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrctacod_whenvalidateitem_query1", payload1);
            // get values from result
            CONTADOR = result1[0].get("CONTADOR");
            if (CONTADOR == 0) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "CONTRATO INEXISTENTE ........", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // construct payload
                let payload2 = new Map();
                // payload2.set("SOLICR_CTAOFC", SOLICR_CTAOFC);
                // payload2.set("SOLICR_CTATIP", SOLICR_CTATIP);
                // payload2.set("SOLICR_CTACOD", SOLICR_CTACOD);
                // call REST API
                const result2 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrctacod_whenvalidateitem_query2", payload2);
                // get values from result
                ESTVI = result2[0].get("ESTVI");
                ESTRE = result2[0].get("ESTRE");
                if (result2 == null || result2.length == 0) {

                }

                if ((ESTVI != "VI" && ESTRE != "GR")) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO DIFERENTE DE VIGENTE ........", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                    this.CRTSOLICR.SOLICR_CTAOFC = null;
                    this.CRTSOLICR.SOLICR_CTATIP = null;
                    this.CRTSOLICR.SOLICR_CTACOD = null;
                }
                else if ((ESTVI == "VI" && ESTRE == "CJ")) {
                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO EN COBRO JURIDICO ........", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                    this.CRTSOLICR.SOLICR_CTAOFC = null;
                    this.CRTSOLICR.SOLICR_CTATIP = null;
                    this.CRTSOLICR.SOLICR_CTACOD = null;
                }
                else {
                    // construct payload
                    let payload3 = new Map();
                    // payload3.set("SOLICR_CTATIP", SOLICR_CTATIP);
                    // payload3.set("SOLICR_CTACOD", SOLICR_CTACOD);
                    // payload3.set("SOLICR_CTAOFC", SOLICR_CTAOFC);
                    // call REST API
                    const result3 = await Rest.post("/crfsolcc_crtsolicr/crfsolcc_crtsolicr_solicrctacod_whenvalidateitem_query3", payload3);
                    // get values from result
                    // SOLICR_ACTAVA = result3[0].get("SOLICR_ACTAVA");
                    if (result3 == null || result3.length == 0) {

                    }

                }
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrCtacod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // NULL; END;
    //#endregion
    async CRFSOLCC_crtsolicr_comercial_keyNextItem() {
        console.log("Entering CRFSOLCC_crtsolicr_comercial_keyNextItem");
        console.log("Exiting CRFSOLCC_crtsolicr_comercial_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // --LCBY:15180 VALIDACION CAMPO TIPO 
    //  IF :CRTSOLICR.SOLICR_CLASAC IS NULL AND :CRTSOLICR.SOLICR_TIPCRE <> '04' THEN
    //   LIB$ALERTA('MENSAJE','DEBE INGRESAR EL TIPO DE ACTIVO. NUEVO (N), USADO(U).',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    // --LCBY:15180 VALIDACION CAMPO TIPO 
    // 
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
    //   
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrClasac_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrClasac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_CLASAC == null) &&this.CRTSOLICR.SOLICR_TIPCRE != "04")) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE INGRESAR EL TIPO DE ACTIVO. NUEVO (N), USADO(U).", null, null, null, T_RESPUESTA);
        }
        else {
            if (["N", "U"].indexOf(this.CRTSOLICR.SOLICR_CLASAC) != -1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
                this.CRTSOLICR.ACTIVO = "NUEVO";
            }
            else {
                this.CRTSOLICR.ACTIVO = "USADO";
            }
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //    IF NOT SHOW_LOV('LOV_OFICINAS_DAVIVI') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL BANCO.');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfibanc_whenMouseClick() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfibanc_whenMouseClick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINAS_DAVIVI"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL BANCO.");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfibanc_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //    IF NOT SHOW_LOV('LOV_OFICINAS_DAVIVI') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL BANCO.');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfibanc_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfibanc_whenMouseDoubleclick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINAS_DAVIVI"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL BANCO.");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfibanc_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //    IF NOT SHOW_LOV('LOV_OFICINAS_DAVIVI') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL BANCO.');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFSOLCC_crtsolicr_solicrOfibanc_keyListval() {
        console.log("Entering CRFSOLCC_crtsolicr_solicrOfibanc_keyListval");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINAS_DAVIVI"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL BANCO.");
        }
        console.log("Exiting CRFSOLCC_crtsolicr_solicrOfibanc_keyListval");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   --+PY21520. JDG
    //    /*INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE)
    //    VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'99',:CRTTEREXT.TEREXT_NIT,'J','NE');*/
    //    INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE,OTERSOL_CODUNI)
    //    VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'99',:CRTTEREXT.TEREXT_NIT,'J','NE', :CRTSOLICR.SOLICR_CODUNI);
    //    --+
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TERCERO NO ESTA CREADO .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFSOLCC_crtterext_postInsert() {
        console.log("Entering CRFSOLCC_crtterext_postInsert");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.SOLICR_OFCSOL = :this.CRTSOLICR.SOLICR_OFCSOL;
        // payload1.SOLICR_CODSOL = :this.CRTSOLICR.SOLICR_CODSOL;
        // payload1.TEREXT_NIT = : CRTTEREXT.TEREXT_NIT;
        // payload1.SOLICR_CODUNI = :this.CRTSOLICR.SOLICR_CODUNI;
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtterext/crfsolcc_crtterext_postinsert_query1", payload1);
        if (result1 == null || result1.length == 0) {

            // CRFSOLCC_LIB$ALERTA("MENSAJE", "TERCERO NO ESTA CREADO .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLCC_crtterext_postInsert");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLCC_crtterext_whenNewBlockInstance() {
        console.log("Entering CRFSOLCC_crtterext_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLCC_crtterext_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // COMMIT; END;
    //#endregion
    async CRFSOLCC_crtterext_keyCommit() {
        console.log("Entering CRFSOLCC_crtterext_keyCommit");
        console.log("Exiting CRFSOLCC_crtterext_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_NIT   NUMBER(13);
    // BEGIN
    //  BEGIN 
    //    IF :CRTTEREXT.TEREXT_NIT IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(TEREXT_NIT)), 4444444444443) + 1
    //        INTO V_NUEVO_NIT
    //        FROM CRTTEREXT
    //       --+PY21520. JDG 
    //       WHERE TEREXT_CODUNI = :CRTSOLICR.SOLICR_CODUNI ;
    //       --+
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
    async CRFSOLCC_crtterext_preInsert() {
        console.log("Entering CRFSOLCC_crtterext_preInsert");
        let V_NUEVO_NIT: number = null;
        if ((this.CRTTEREXT.TEREXT_NIT == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtterext/crfsolcc_crtterext_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_NIT = result1[0].get("V_NUEVO_NIT");
                this.CRTTEREXT.TEREXT_NIT = V_NUEVO_NIT.toString();
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL");
            }

        }
        this.CRTTEREXT.TEREXT_TIPID = "NE";
        this.CRTTEREXT.TEREXT_TIPPER = "J";
        console.log("Exiting CRFSOLCC_crtterext_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  V_PROVREF   CRTREFPRV.REFPRV_CODPRV%TYPE;
    //  V_ORIGEN  CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //  V_HOMTERNAC NUMBER;
    //   VREG NUMBER; 
    //   T_RESPUESTA NUMBER;
    //   
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODPRO = 'RFP'  AND :CRTSOLICR.SOLICR_LINEA = 'LI'  THEN
    // 
    //        BEGIN
    //       SELECT REFPRV_CODPRV,REFPRV_ORIGEN
    //         INTO V_PROVREF, V_ORIGEN
    //        FROM CRTREFPRV 
    //       WHERE --+PY21520. JDG
    //             REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //             --+
    //         AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN  
    //        V_PROVREF := NULL;
    //        V_ORIGEN := 'N';
    //     END;
    //     
    //     BEGIN    
    //       SELECT REFPRV_CODPRV
    //         INTO V_HOMTERNAC
    //         FROM CRTREFPRV 
    //        WHERE --+PY21520. JDG
    //              REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //              --+
    //          AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //           AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //           AND REFPRV_CODPRV IN (SELECT HOMEXT_PRVNAC
    //                               FROM CRTHOMEXT 
    //                               WHERE HOMEXT_PRVEXT = :CRTTEREXT.TEREXT_NIT);
    //     EXCEPTION WHEN NO_DATA_FOUND THEN  
    //          V_HOMTERNAC := NULL;
    //     END;                        
    // 
    //         VREG := TO_NUMBER(:SYSTEM.TRIGGER_RECORD);
    // 
    //       IF VREG = 1 THEN
    //          LIB$ALERTA('MENSAJE','RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO',NULL,NULL,NULL,T_RESPUESTA); 
    //           IF  V_HOMTERNAC IS NULL AND V_ORIGEN = 'R' THEN
    //             LIB$DTNERFRMA('LA HOMOLOGACION DEL TERCERO '||:CRTTEREXT.TEREXT_NIT||
    //                           ' NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO.'||V_PROVREF
    //                           ||' LA SOLICITUD VIENE DE UNA RECONSIDERACION. DEBE CAMBIAR EL TIPO DE PRODUCTO'); 
    //           ELSIF  V_HOMTERNAC IS NULL AND V_ORIGEN = 'N' THEN 
    //             LIB$DTNERFRMA('LA HOMOLOGACION DEL TERCERO '||:CRTTEREXT.TEREXT_NIT||
    //                           ' NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO.'||V_PROVREF);                       
    //           END IF;
    //         END IF;
    //          
    //   END IF; 
    //   
    //   
    // END;
    //#endregion
    async CRFSOLCC_crtterext_terextNomcia_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtterext_terextNomcia_whenValidateItem");
        let V_PROVREF: number = null;
        let V_ORIGEN: number = null;
        let V_HOMTERNAC: number = null;
        let VREG: number = null;
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODPRO == "RFP" &&this.CRTSOLICR.SOLICR_LINEA == "LI")) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result1 = await Rest.post("/crfsolcc_crtterext/crfsolcc_crtterext_terextnomcia_whenvalidateitem_query1", payload1);
            // get values from result
            V_PROVREF = result1[0].get("V_PROVREF");
            V_ORIGEN = result1[0].get("V_ORIGEN");
            if (result1 == null || result1.length == 0) {

                V_PROVREF = null;
                // V_ORIGEN = "N";
            }

            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_crtterext/crfsolcc_crtterext_terextnomcia_whenvalidateitem_query2", payload2);
            // get values from result
            V_HOMTERNAC = result2[0].get("V_HOMTERNAC");
            if (result2 == null || result2.length == 0) {

                V_HOMTERNAC = null;
            }

            VREG = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("TRIGGER_RECORD"));
            if (VREG == 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO", null, null, null, T_RESPUESTA);
                // if (((V_HOMTERNAC == null) && V_ORIGEN == "R")) {
                //     // CRFSOLCC_LIB$DTNERFRMA("LA HOMOLOGACION DEL TERCERO " + CRTTEREXT.TEREXT_NIT + " NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO." + V_PROVREF + " LA SOLICITUD VIENE DE UNA RECONSIDERACION. DEBE CAMBIAR EL TIPO DE PRODUCTO");
                // }
                // else if (((V_HOMTERNAC == null) && V_ORIGEN == "N")) {
                //     // CRFSOLCC_LIB$DTNERFRMA("LA HOMOLOGACION DEL TERCERO " + CRTTEREXT.TEREXT_NIT + " NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO." + V_PROVREF);
                // }
            }
        }
        console.log("Exiting CRFSOLCC_crtterext_terextNomcia_whenValidateItem");
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
    async CRFSOLCC_crtterext_terextNomcia_keyNextItem() {
        console.log("Entering CRFSOLCC_crtterext_terextNomcia_keyNextItem");
        let VBOTON: number = null;
        let V_LIST: boolean = null;
        // if ((TEREXT_NIT == null)) {
        //     // CRFSOLCC_LIB$ALERTA("MENSAJE", "PARA CREAR UN PROVEEDOR EXTRANJERO, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, VBOTON);
        //     V_LIST = this.oracleFormsBuiltins.show_lov("LOV263_NITEXT");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCC_crtterext_terextNomcia_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF :CRTTEREXT.TEREXT_NIT IS NOT NULL THEN
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
    async CRFSOLCC_crtterext_terextCodpais_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtterext_terextCodpais_whenValidateItem");
        if ((this.CRTTEREXT.TEREXT_NIT != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TEREXT_CODPAIS", this.CRTTEREXT.TEREXT_CODPAIS);
                // call REST API
                const result1 = await Rest.post("/crfsolcc_crtterext/crfsolcc_crtterext_terextcodpais_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // CRFSOLCC_LIB$ALERTA("MENSAJE", "AL TERCERO NO SE LE HA DEFINIDO UN PAIS, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFSOLCC_crtterext_terextCodpais_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF NVL(:TIPXCOM_PORCON,0) + NVL(:TIPXCOM_PORCON2,0) < 100 THEN
    //  LIB$DTNERFRMA('EL PORCENTAJE DEBE SUMAR EL 100%');
    // END IF;
    // 
    // COMMIT; END;
    //#endregion
    async CRFSOLCC_cottipxcom1_keyCommit() {
        console.log("Entering CRFSOLCC_cottipxcom1_keyCommit");
        // if (TIPXCOM_PORCON == null ? 0 : TIPXCOM_PORCON + TIPXCOM_PORCON2 == null ? 0 : TIPXCOM_PORCON2 < 100) {
        //     // CRFSOLCC_LIB$DTNERFRMA("EL PORCENTAJE DEBE SUMAR EL 100%");
        // }
        console.log("Exiting CRFSOLCC_cottipxcom1_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT PROD_DESCRI
    //   INTO :DSP_PROD
    //     FROM CRTPRODCIA
    //    WHERE --+PY21520. JDG
    //          PROD_CODUNI = :COTTIPXCOM1.TIPXCOM_CODUNI
    //          --+
    //      AND PROD_CODIGO = :TIPXCOM_TIPPRO;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_PROD := NULL;
    // END;
    // 
    // BEGIN
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM1
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM1 := NULL;
    // END;
    // 
    // BEGIN
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM2
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM2;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM2 := NULL;
    // END;
    //#endregion
    async CRFSOLCC_cottipxcom1_postQuery() {
        console.log("Entering CRFSOLCC_cottipxcom1_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPXCOM_CODUNI", COTTIPXCOM1.TIPXCOM_CODUNI);
        // payload1.set("TIPXCOM_TIPPRO", TIPXCOM_TIPPRO);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_cottipxcom1/crfsolcc_cottipxcom1_postquery_query1", payload1);
        // get values from result
        // DSP_PROD = result1[0].get("DSP_PROD");
        if (result1 == null || result1.length == 0) {

            this.COTTIPXCOM1.DSP_PROD = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("TIPXCOM_CODCOM", TIPXCOM_CODCOM);
        // call REST API
        const result2 = await Rest.post("/crfsolcc_cottipxcom1/crfsolcc_cottipxcom1_postquery_query2", payload2);
        // get values from result
        // DSP_COM1 = result2[0].get("DSP_COM1");
        if (result2 == null || result2.length == 0) {

            this.COTTIPXCOM1.DSP_COM1 = null;
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("TIPXCOM_CODCOM2", TIPXCOM_CODCOM2);
        // call REST API
        const result3 = await Rest.post("/crfsolcc_cottipxcom1/crfsolcc_cottipxcom1_postquery_query3", payload3);
        // get values from result
        // DSP_COM2 = result3[0].get("DSP_COM2");
        if (result3 == null || result3.length == 0) {

            this.COTTIPXCOM1.DSP_COM2 = null;
        }

        console.log("Exiting CRFSOLCC_cottipxcom1_postQuery");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /*IF :TIPXCOM_CODCOM IS NULL OR :TIPXCOM_CODCOM < 0 OR :TIPXCOM_CODCOM > 100 THEN
    //   LIB$DTNERFRMA('EL PORCENTAJE DEBE ESTAR ENTRE 1 Y 99,9');
    // END IF;*/
    // 
    //  IF :TIPXCOM_PORCON NOT IN (70,30,50) THEN    --SOLO SE PUEDE COMPARTIR EN ESTAS PROPORCIONES
    //   LIB$DTNERFRMA('LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50');
    //  END IF;
    // 
    // IF :TIPXCOM_PORCON > 100 THEN
    //  :TIPXCOM_PORCON := 100;
    // ELSIF :TIPXCOM_PORCON < 0 THEN
    //  :TIPXCOM_PORCON := 0;
    // END IF;
    //  
    // 
    // IF :TIPXCOM_CODCOM2 IS NOT NULL AND :TIPXCOM_PORCON > 0 AND :TIPXCOM_PORCON2 > 0  THEN
    //  :TIPXCOM_PORCON2 := 100 - :TIPXCOM_PORCON;
    // END IF; END;
    //#endregion
    async CRFSOLCC_cottipxcom1_tipxcomPorcon_postChange() {
        console.log("Entering CRFSOLCC_cottipxcom1_tipxcomPorcon_postChange");
        // if ([70, 30, 50].indexOf(TIPXCOM_PORCON) != -1) {
        //     // CRFSOLCC_LIB$DTNERFRMA("LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50");
        // }
        // if (TIPXCOM_PORCON > 100) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON = 100;
        // }
        // else if (TIPXCOM_PORCON < 0) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON = 0;
        // }
        // if ((((TIPXCOM_CODCOM2 != null) && TIPXCOM_PORCON > 0) && TIPXCOM_PORCON2 > 0)) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 100 - TIPXCOM_PORCON;
        // }
        console.log("Exiting CRFSOLCC_cottipxcom1_tipxcomPorcon_postChange");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /*IF :TIPXCOM_CODCOM2 IS NULL OR :TIPXCOM_CODCOM2 < 0 OR :TIPXCOM_CODCOM2 > 100 THEN
    //   LIB$DTNERFRMA('EL PORCENTAJE DEBE ESTAR ENTRE 1 Y 99.9');
    // END IF;*/
    // 
    //  IF :TIPXCOM_PORCON2 NOT IN (70,30,50) THEN
    //   LIB$DTNERFRMA('LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50');
    //  END IF;
    // 
    // IF :TIPXCOM_PORCON2 > 100 THEN
    //  :TIPXCOM_PORCON2 := 100;
    // ELSIF :TIPXCOM_PORCON2 < 0 THEN
    //  :TIPXCOM_PORCON2 := 0;
    // END IF;
    // 
    // IF :TIPXCOM_CODCOM2 IS NOT NULL THEN
    //  :TIPXCOM_PORCON := 100 - :TIPXCOM_PORCON2;
    // ELSE
    //  :TIPXCOM_PORCON2 := NULL;
    // END IF; END;
    //#endregion
    async CRFSOLCC_cottipxcom1_tipxcomPorcon2_postChange() {
        console.log("Entering CRFSOLCC_cottipxcom1_tipxcomPorcon2_postChange");
        // if ([70, 30, 50].indexOf(TIPXCOM_PORCON2) != -1) {
        //     // CRFSOLCC_LIB$DTNERFRMA("LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50");
        // }
        // if (TIPXCOM_PORCON2 > 100) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 100;
        // }
        // else if (TIPXCOM_PORCON2 < 0) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 0;
        // }
        // if ((TIPXCOM_CODCOM2 != null)) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON = 100 - TIPXCOM_PORCON2;
        // }
        // else {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = null;
        // }
        console.log("Exiting CRFSOLCC_cottipxcom1_tipxcomPorcon2_postChange");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // IF NVL(:TIPXCOM_PORCON,0) + NVL(:TIPXCOM_PORCON2,0) <> 100 OR NVL(:TIPXCOM_PORCON,0) < 0 OR NVL(:TIPXCOM_PORCON2,0) < 0 THEN
    //  LIB$DTNERFRMA('EL PORCENTAJE DEBE SUMAR EL 100%');
    // END IF;
    // 
    // --DO_KEY('KEY_COMMIT');
    // 
    // COMMIT; END;
    //#endregion
    async CRFSOLCC_cottipxcom1_btnGraba_whenButtonPressed() {
        console.log("Entering CRFSOLCC_cottipxcom1_btnGraba_whenButtonPressed");
        // if (((TIPXCOM_PORCON == null ? 0 : TIPXCOM_PORCON + TIPXCOM_PORCON2 == null ? 0 : TIPXCOM_PORCON2 != 100 || TIPXCOM_PORCON == null ? 0 : TIPXCOM_PORCON < 0) || TIPXCOM_PORCON2 == null ? 0 : TIPXCOM_PORCON2 < 0)) {
        //     // CRFSOLCC_LIB$DTNERFRMA("EL PORCENTAJE DEBE SUMAR EL 100%");
        // }
        console.log("Exiting CRFSOLCC_cottipxcom1_btnGraba_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   V_RESPUESTA NUMBER;
    // BEGIN
    //  
    //  LIB$ALERTA ('MENSAJE','CONFIRMA QUE ESTE NEGOCIO NO SE COMPARTIRÁ?','ACEPTAR','CANCELAR',NULL,V_RESPUESTA);
    //  
    //  IF V_RESPUESTA = 1 THEN
    //   DO_KEY('DELETE_RECORD');
    //   COMMIT;
    //    GO_ITEM('SOLICR_PLAZO');
    //   HIDE_WINDOW('COMPARTIDO');
    //  END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCC_cottipxcom1_btnDelrecord_whenButtonPressed() {
        console.log("Entering CRFSOLCC_cottipxcom1_btnDelrecord_whenButtonPressed");
        let V_RESPUESTA: number = null;
        // CRFSOLCC_LIB$ALERTA("MENSAJE", "CONFIRMA QUE ESTE NEGOCIO NO SE COMPARTIRÁ?", "ACEPTAR", "CANCELAR", null, V_RESPUESTA);
        if (V_RESPUESTA == 1) {
            this.oracleFormsBuiltins.do_key("DELETE_RECORD");
            this.oracleFormsBuiltins.go_item("SOLICR_PLAZO");
            this.oracleFormsBuiltins.hide_window("COMPARTIDO");
        }
        console.log("Exiting CRFSOLCC_cottipxcom1_btnDelrecord_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // BEGIN
    // 
    //   IF :TIPXCOM_CODCOM2 = :TIPXCOM_CODCOM THEN
    //    LIB$DTNERFRMA('DEBE SELECCIONAR OTRO USUARIO');
    //    :TIPXCOM_CODCOM2 := NULL;
    //   END IF;
    // 
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM2
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM2;
    // 
    //   IF :TIPXCOM_CODCOM2 IS NOT NULL THEN
    //    :TIPXCOM_PORCON2 := 100 - :TIPXCOM_PORCON;
    //   END IF;
    // 
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM2 := NULL;
    // END;
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFSOLCC_cottipxcom1_tipxcomCodcom2_keyNextItem() {
        console.log("Entering CRFSOLCC_cottipxcom1_tipxcomCodcom2_keyNextItem");
        // if (TIPXCOM_CODCOM2 == TIPXCOM_CODCOM) {
        //     // CRFSOLCC_LIB$DTNERFRMA("DEBE SELECCIONAR OTRO USUARIO");
        //     this.COTTIPXCOM1.TIPXCOM_CODCOM2 = null;
        // }
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPXCOM_CODCOM2", TIPXCOM_CODCOM2);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_cottipxcom1/crfsolcc_cottipxcom1_tipxcomcodcom2_keynextitem_query1", payload1);
        // get values from result
        // DSP_COM2 = result1[0].get("DSP_COM2");
        // if ((TIPXCOM_CODCOM2 != null)) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 100 - TIPXCOM_PORCON;
        // }
        if (result1 == null || result1.length == 0) {

            this.COTTIPXCOM1.DSP_COM2 = null;
        }

        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCC_cottipxcom1_tipxcomCodcom2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    //  IF :TIPXCOM_CODCOM2 IS NULL THEN
    //   CLEAR_RECORD;
    //  END IF;
    //  
    //  :TXT_FLAG := 'S';  --VALIDE BLOQUE CRTSOLICR
    //  SET_ITEM_PROPERTY ('SOLICR_LINEADES',REQUIRED, "PROPERTY_TRUE");
    //   GO_ITEM('SOLICR_PLAZO');
    //  HIDE_WINDOW('COMPARTIDO'); END;
    //#endregion
    async CRFSOLCC_cottipxcom1_btnRegresar_whenButtonPressed() {
        console.log("Entering CRFSOLCC_cottipxcom1_btnRegresar_whenButtonPressed");
        // if ((TIPXCOM_CODCOM2 == null)) {
        //     this.oracleFormsBuiltins.clear_record();
        // }
        // this.COTTIPXCOM1.TXT_FLAG = "S";
        this.oracleFormsBuiltins.set_item_property("SOLICR_LINEADES", "REQUIRED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.go_item("SOLICR_PLAZO");
        this.oracleFormsBuiltins.hide_window("COMPARTIDO");
        console.log("Exiting CRFSOLCC_cottipxcom1_btnRegresar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFSOLCC_toolbar_whenButtonPressed() {
        console.log("Entering CRFSOLCC_toolbar_whenButtonPressed");
        // CRFSOLCC_TOOLBAR_ACTIONS();
        console.log("Exiting CRFSOLCC_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFSOLCC_toolbar_whenMouseLeave() {
        console.log("Entering CRFSOLCC_toolbar_whenMouseLeave");
        // CRFSOLCC_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFSOLCC_toolbar_whenMouseLeave");
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
    async CRFSOLCC_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSOLCC_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFSOLCC_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // READ_IMAGE_FILE('CARACIAL.JPG'  ,'JPG','VARIABLE.CARATULA');   
    // IF SYSTEM.RECORD_STATUS IN ('CHANGED','INSERT') THEN
    //     COMMIT_FORM;
    // END IF; END;
    //#endregion
    async CRFSOLCC_ppal_whenNewBlockInstance() {
        console.log("Entering CRFSOLCC_ppal_whenNewBlockInstance");
        this.oracleFormsBuiltins.read_image_file("CARACIAL.JPG", "JPG", "VARIABLE.CARATULA");
        // if (["CHANGED", "INSERT"].indexOf(SYSTEM.RECORD_STATUS) != -1) {
        //     this.oracleFormsBuiltins.commit_form();
        // }
        console.log("Exiting CRFSOLCC_ppal_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // :VOLVER:='MENU ANT'; END;
    //#endregion
    async CRFSOLCC_ppal_postQuery() {
        console.log("Entering CRFSOLCC_ppal_postQuery");
        this.PPAL.VOLVER = "MENU ANT";
        console.log("Exiting CRFSOLCC_ppal_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //     P_VALDAVI;--7876
    //     --P_VALTIPOPR(:CRTSOLICR.SOLICR_CODPRO); --7981
    //     
    //     --+PY21520. JDG
    //     :VARIABLE.CODUNI1         := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC1             := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL1          := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL1          := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC1  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.SOLICR_CODVOR1   := :CRTSOLICR.SOLICR_CODVOR;     
    //    --+
    //        
    //      COMMIT_FORM;  
    //     GO_ITEM ('CRTSOLICR.SOLICR_BCODEX');
    // END;
    //#endregion
    async CRFSOLCC_ppal_redesctos_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_redesctos_whenNewItemInstance");
        // CRFSOLCC_P_VALDAVI();
        this.VARIABLE.CODUNI1 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL1 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL1 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC1 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR1 = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_BCODEX");
        console.log("Exiting CRFSOLCC_ppal_redesctos_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE --PY 5499
    // -- OP_PAPA VLTOPCIO.OPCION_CODPAD%TYPE;
    //   V_CARGO_AN     VARCHAR2(10);
    //   V_CARGO_NU     VARCHAR2(10);
    // BEGIN
    //   /* PY 7614
    //   --PY 5499  
    //   BEGIN
    //    SELECT USU_CARGO
    //    INTO V_CARGO_AN
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CARGO_AN := NULL;
    //   END;
    //   
    //   BEGIN
    //    SELECT USU_CARGO_N
    //    INTO V_CARGO_NU
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO = PLSQLBuiltins.user();
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_CARGO_NU := NULL;
    //   END;
    //   
    //   
    //  
    //   IF (V_CARGO_AN IN ('DC','GC','AC','16','79')) OR (V_CARGO_NU IN ('DICO','GECO','ASCM','FREE','ACOM')) THEN  
    //      SET_ITEM_PROPERTY('VARIABLE.ESTUDIO_CR',ENABLED,"PROPERTY_FALSE"); 
    //   ELSE
    //      SET_ITEM_PROPERTY('VARIABLE.ESTUDIO_CR',ENABLED,"PROPERTY_TRUE"); 
    //   END IF;  
    //  --PY 5499  
    //  
    //  */
    //  
    //  --PY 7614 SE COLOCA EL BOTON VARIABLE.ESTUDIO_CR "ENABLED" NO
    //   
    //     --+PY21520. JDG
    //     :VARIABLE.CODUNI4        := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //    :VARIABLE.OFC4            := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL4         := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL4         := :CRTSOLICR.SOLICR_ESTSOL;
    //    :VARIABLE.SOLICR_OFIBANC4 := :CRTSOLICR.SOLICR_OFIBANC;
    //    :VARIABLE.SOLICR_CODVOR4  := :CRTSOLICR.SOLICR_CODVOR; 
    //    --+
    //     
    //     COMMIT_FORM; 
    //     GO_ITEM ('ESTUDIO_CR');
    // END;
    //#endregion
    async CRFSOLCC_ppal_envCr_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_envCr_whenNewItemInstance");
        let V_CARGO_AN: string = null;
        let V_CARGO_NU: string = null;
        this.VARIABLE.CODUNI4 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC4 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL4 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL4 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC4 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR4 = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("ESTUDIO_CR");
        console.log("Exiting CRFSOLCC_ppal_envCr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     GO_BLOCK('CRTSOLICR');
    // END;
    //#endregion
    async CRFSOLCC_ppal_infGrl_whenMouseClick() {
        console.log("Entering CRFSOLCC_ppal_infGrl_whenMouseClick");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFSOLCC_ppal_infGrl_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     
    //     --+PY21520. JDG
    //     :VARIABLE.CODUNI5        := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //    :VARIABLE.OFC5            := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL5         := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL5         := :CRTSOLICR.SOLICR_ESTSOL;
    //    :VARIABLE.SOLICR_OFIBANC5 := :CRTSOLICR.SOLICR_OFIBANC;
    //    :VARIABLE.SOLICR_CODVOR5  := :CRTSOLICR.SOLICR_CODVOR; 
    //    --+
    //     
    //     COMMIT_FORM; 
    //     GO_ITEM ('MODIFICAR');
    // END;
    //#endregion
    async CRFSOLCC_ppal_modisol_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_modisol_whenNewItemInstance");
        this.VARIABLE.CODUNI5 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC5 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL5 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL5 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC5 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR5 = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("MODIFICAR");
        console.log("Exiting CRFSOLCC_ppal_modisol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // --DECLARE
    // -- OP_PAPA VLTOPCIO.OPCION_CODPAD%TYPE;
    // -- ANTES
    // BEGIN
    // 
    //     P_VALDAVI;--7876
    //     --P_VALTIPOPR(:CRTSOLICR.SOLICR_CODPRO); --7981
    // 
    //     --+PY21520. JDG
    //     :VARIABLE.CODUNI2        := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //    :VARIABLE.OFC2            := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL2         := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL2         := :CRTSOLICR.SOLICR_ESTSOL;
    //    :VARIABLE.SOLICR_OFIBANC2 := :CRTSOLICR.SOLICR_OFIBANC;
    //    :VARIABLE.SOLICR_CODVOR2  := :CRTSOLICR.SOLICR_CODVOR; 
    //    --+
    //  
    //     COMMIT_FORM; 
    //     GO_ITEM ('SOLICR_CIASEG');
    // END;
    // --ANTES; END;
    //#endregion
    async CRFSOLCC_ppal_segImp_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_segImp_whenNewItemInstance");
        // CRFSOLCC_P_VALDAVI();
        this.VARIABLE.CODUNI2 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC2 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL2 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL2 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC2 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR2 = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_CIASEG");
        console.log("Exiting CRFSOLCC_ppal_segImp_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // --COMMIT;
    // HIDE_VIEW('REESTRUCTURADOS');
    // GO_ITEM('SOLICR_PLAZO'); END;
    //#endregion
    async CRFSOLCC_ppal_volver1_whenButtonPressed() {
        console.log("Entering CRFSOLCC_ppal_volver1_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("REESTRUCTURADOS");
        this.oracleFormsBuiltins.go_item("SOLICR_PLAZO");
        console.log("Exiting CRFSOLCC_ppal_volver1_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // P_VALDAVI;--7876 
    // COMMIT_FORM;  
    // CALL_FORM('ANFVAXTE'); END;
    //#endregion
    async CRFSOLCC_ppal_varCualit_whenMouseClick() {
        console.log("Entering CRFSOLCC_ppal_varCualit_whenMouseClick");
        // CRFSOLCC_P_VALDAVI();
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.call_form("ANFVAXTE");
        console.log("Exiting CRFSOLCC_ppal_varCualit_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //    SHOW_VIEW('CANVAS1');
    // END;
    //#endregion
    async CRFSOLCC_ppal_volver_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_volver_whenNewItemInstance");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        console.log("Exiting CRFSOLCC_ppal_volver_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //  P_VALDAVI;--7876 
    //  --P_VALTIPOPR(:CRTSOLICR.SOLICR_CODPRO); --7981 
    //  
    //  --+PY21520. JDG
    //  :VARIABLE.CODUNI7       := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //  :VARIABLE.OFC7            := :CRTSOLICR.SOLICR_OFCSOL;
    //  :VARIABLE.CODSOL7      := :CRTSOLICR.SOLICR_CODSOL;
    //  :VARIABLE.ESTSOL7        := :CRTSOLICR.SOLICR_ESTSOL;
    //  :VARIABLE.SOLICR_OFIBANC7 := :CRTSOLICR.SOLICR_OFIBANC;
    //  :VARIABLE.SOLICR_CODVOR7  := :CRTSOLICR.SOLICR_CODVOR; 
    //  --+
    //  
    //  COMMIT_FORM; 
    //  GO_BLOCK('VARIABLE');
    // END;
    //#endregion
    async CRFSOLCC_ppal_oTerceros_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_oTerceros_whenNewItemInstance");
        // CRFSOLCC_P_VALDAVI();
        this.VARIABLE.CODUNI7 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC7 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL7 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL7 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC7 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR7 = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCC_ppal_oTerceros_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     HIDE_VIEW ('CANVAS11'); 
    //     P_VALDAVI;--7876 
    //     --P_VALTIPOPR(:CRTSOLICR.SOLICR_CODPRO); --7981
    //     
    //     --+PY21520. JDG
    //     :VARIABLE.CODUNI3        := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC3        := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL3     := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL3     := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC3 := :CRTSOLICR.SOLICR_OFIBANC;
    //    :VARIABLE.SOLICR_CODVOR3  := :CRTSOLICR.SOLICR_CODVOR; 
    //    --+
    //    
    //     COMMIT_FORM;  
    //     GO_ITEM ('SOLICR_GTIREC');
    // END;
    //#endregion
    async CRFSOLCC_ppal_gtiasAd_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_ppal_gtiasAd_whenNewItemInstance");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        // CRFSOLCC_P_VALDAVI();
        this.VARIABLE.CODUNI3 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC3 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL3 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL3 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC3 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.SOLICR_CODVOR3 = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_GTIREC");
        console.log("Exiting CRFSOLCC_ppal_gtiasAd_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCC_crtotersol1_preQuery() {
        console.log("Entering CRFSOLCC_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCC_crtotersol1_preQuery");
    }

    //#region PLSQL
    // BEGIN
    //  --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+ 
    //    :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    --+PY21520. JDG
    //     /*PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE');*/
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI);
    //     --+
    //     --+PY26491. JDG. 2018.06.14 
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+     --+SET SOLICR_COMITE = :this.PARAMETER.get("PCOMITE")
    //     --+     SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+   WHERE --+PY21502. JDG
    //     --+         SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //     --+         --+
    //     --+     AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+     AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
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
    async CRFSOLCC_crtotersol1_postInsert() {
        console.log("Entering CRFSOLCC_crtotersol1_postInsert");
        try {

            if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) ||this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                // CRFSOLCC_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE,this.CRTSOLICR.SOLICR_VRFINA,this.CRTSOLICR.SOLICR_ORMONET,this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE",this.CRTSOLICR.SOLICR_CODUNI);
                this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ?this.CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
            }
        } catch (ex) {

            // CRFSOLCC_LIB$DTNERFRMA(SQLERRM);
        }

        console.log("Exiting CRFSOLCC_crtotersol1_postInsert");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // 
    // /*DECLARE
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
    async CRFSOLCC_crtotersol1_postRecord() {
        console.log("Entering CRFSOLCC_crtotersol1_postRecord");
        console.log("Exiting CRFSOLCC_crtotersol1_postRecord");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // SET_ITEM_PROPERTY('VARIABLE.CRTER',ENABLED,"PROPERTY_OFF");
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLCC_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFSOLCC_crtotersol1_whenNewBlockInstance");
        this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "PROPERTY_OFF");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLCC_crtotersol1_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCC_crtotersol1_whenCreateRecord() {
        console.log("Entering CRFSOLCC_crtotersol1_whenCreateRecord");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCC_crtotersol1_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // COMMIT; END;
    //#endregion
    async CRFSOLCC_crtotersol1_keyCommit() {
        console.log("Entering CRFSOLCC_crtotersol1_keyCommit");
        console.log("Exiting CRFSOLCC_crtotersol1_keyCommit");
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
    //       NULL;
    // END;
    //#endregion
    async CRFSOLCC_crtotersol1_postQuery() {
        console.log("Entering CRFSOLCC_crtotersol1_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_postquery_query1", payload1);
        // get values from result
        this.CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFSOLCC_crtotersol1_postQuery");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // --+PY21520. JDG
    // :CRTOTERSOL1.OTERSOL_CODUNI:=:CRTSOLICR.SOLICR_CODUNI;
    // --+
    // :CRTOTERSOL1.OTERSOL_CODSOL:=:CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL:=:CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCC_crtotersol1_preInsert() {
        console.log("Entering CRFSOLCC_crtotersol1_preInsert");
        this.CRTOTERSOL1.OTERSOL_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCC_crtotersol1_preInsert");
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
    async CRFSOLCC_crtotersol1_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtotersol1_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTOTERSOL1.OTERSOL_GIRDIR == null ? 0 : this.CRTOTERSOL1.OTERSOL_GIRDIR > 100) {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE GIRO DIRECTO NO DEBE SUPERAR EL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCC_crtotersol1_otersolGirdir_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    //     PVALTER(:CRTOTERSOL1.OTERSOL_NITTER); -- TERRES
    //   END IF;
    // END;
    // --
    // -- VPROVREG
    // BEGIN
    //   IF :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    //     PU_MENSAJES_PROVEEDOR (:CRTOTERSOL1.OTERSOL_NITTER);
    //   END IF; 
    // END;
    // --
    // 
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_TIPPER    TER.TERPER%TYPE;
    //  V_PROVREF   CRTREFPRV.REFPRV_CODPRV%TYPE;
    //  V_ORIGEN    CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //  V_CANTREF   NUMBER;
    //  VREG     NUMBER;
    //  V_TIPALI    COTPROVEE.PROVEE_ALIANZ%TYPE;
    //  V_TIPO      VARCHAR2(1);
    //  V_PROVIG    NUMBER;
    //  V_PROD      CRTPRODCIA.PROD_CODIGO%TYPE; 
    //  
    //   
    // BEGIN
    //  
    //   --PY 12802
    // BEGIN
    // SELECT TERPER
    // INTO V_TIPO 
    // FROM TER 
    // WHERE TERCOD =  :CRTOTERSOL1.OTERSOL_NITTER;
    // EXCEPTION WHEN NO_DATA_FOUND THEN V_TIPO := NULL;
    // END;
    //  
    //  --PY 12802
    //  
    //  
    //   IF :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    //   BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //      INTO   :CRTOTERSOL1.NOMBRE, :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //     -- PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL,NULL, NULL,'Q');
    //     --PU_LLAMAR_FORTER(:CRTOTERSOL1.OTERSOL_NITTER,V_TIPO); --PY 12802
    //     
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      /*IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //         --PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL,NULL, NULL,'T');
    //         PU_LLAMAR_FORTER(:CRTSOLICR.SOLICR_NITTER,V_TIPO); --PY 12802
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;        
    //               
    //      END IF;*/
    //     
    //      
    //      LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE.RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.POR FAVOR COMUNICARCE CON EL ÁREA DE ADMINISTRACIÓN DE VENTAS....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;    
    //      
    //    END;
    // -------------------------------------------------------------------------
    //  --MODIFICACION SMT 03/01/2006 ACTUALICE AUTOMATICAMENTE CAMPO DE JUNTA
    //  -------------------------------------------------------------------------
    //  BEGIN
    //    SELECT   TBENTIPO
    //      INTO   V_TIPPER
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     NULL;
    //  END; 
    //  IF :VARIABLE.TIPO_VINCULA  <> '09' THEN
    //   IF V_TIPPER = 'N' THEN
    //    :CRTOTERSOL1.OTERSOL_ACTJUN:='N';
    //   ELSIF V_TIPPER = 'J'THEN
    //     :CRTOTERSOL1.OTERSOL_ACTJUN:='S';
    //   END IF; 
    //   ELSE
    //     :CRTOTERSOL1.OTERSOL_ACTJUN:=NULL;
    //   END IF;  
    //   -----------------------------------------------
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;  
    //  
    // 
    //  --VALIDACION PROVEEDORES REFERIDOS 
    //  ------------------------------------------------------------ 
    //    IF :VARIABLE.TIPO_VINCULA = '09' THEN
    //      
    //      BEGIN
    //       SELECT COUNT(ALIEST_NITPRO)
    //         INTO V_PROVIG
    //        FROM COTALESTR A
    //       WHERE --+PY21520. JDG. 
    //             ALIEST_CODUNI   = :CRTOTERSOL1.OTERSOL_CODUNI
    //             --+
    //         AND A.ALIEST_NITPRO = :CRTOTERSOL1.OTERSOL_NITTER
    //         AND A.ALIEST_ESTADO = 'VIG';
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //       V_PROVIG := 0;
    //     END; 
    //    
    //       
    //       IF V_PROVIG = 1 THEN
    //        
    //           LIB$ALERTA('MENSAJE','ESTE PROVEEDOR TIENE ALIANZA ESTRATEGICA VIGENTE.¿INGRESO LA SOLICITUD CON ALGUN PRODUCTO REFERIDO PROVEEDOR? ',
    //                      'SI, APLICA','NO, APLICA',NULL,T_RESPUESTA);
    //                             
    //           BEGIN
    //             SELECT PROD_CODIGO 
    //               INTO V_PROD
    //               FROM CRTPRODCIA 
    //              WHERE --+PY21520. JDG
    //                    PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                    --+ 
    //                AND PROD_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //                AND PROD_PRODRFP = 'S';
    //           EXCEPTION WHEN NO_DATA_FOUND THEN
    //            V_PROD := 'XXX';
    //          END;
    //           
    //           IF (T_RESPUESTA = 1) THEN 
    //            
    //            IF :CRTSOLICR.SOLICR_CODPRO <> V_PROD THEN 
    //              LIB$ALERTA('MENSAJE','DEBE CAMBIAR EL TIPO DE PRODUCTO A UN PRODUCTO REFERIDO PROVEEDOR. ','ACEPTAR',NULL,NULL,T_RESPUESTA);  
    //                  
    //                  :CRTOTERSOL1.OTERSOL_NITTER := NULL;
    //                  :CRTSOLICR.SOLICR_CODPRO := NULL;
    //                  GO_ITEM('CRTSOLICR.SOLICR_CODPRO');
    //              
    //            END IF;
    //                                           
    //            
    //           ELSIF (T_RESPUESTA = 2) THEN                 
    // 
    //            IF :CRTSOLICR.SOLICR_CODPRO = 'RFP' THEN 
    //              LIB$ALERTA('MENSAJE','DEBE CAMBIAR EL TIPO DE PRODUCTO POR OTRO QUE NO SEA REFERIDO PROVEEDOR. ','ACEPTAR',NULL,NULL,T_RESPUESTA);  
    //                  
    //                  :CRTOTERSOL1.OTERSOL_NITTER := NULL;
    //                  :CRTSOLICR.SOLICR_CODPRO := NULL;
    //                  :CRTSOLICR.TIPDESCR := NULL;
    //                  GO_ITEM('CRTSOLICR.SOLICR_CODPRO');
    //                  
    //            ELSIF :CRTSOLICR.SOLICR_CODPRO = V_PROD AND :CRTSOLICR.SOLICR_CODPRO <> 'RFP' THEN
    //              
    //              IF :CRTSOLICR.REF_PROVEEDOR IS NOT NULL THEN
    //                 
    //                 LIB$ALERTA('MENSAJE','HA DILIGENCIADO EL PROVEEDOR.DEBE CAMBIAR EL TIPO DE PRODUCTO O NO DILIGENCIAR EL PROVEEDOR REFERIDO. ','ACEPTAR',NULL,NULL,T_RESPUESTA);                   
    //                     :CRTOTERSOL1.OTERSOL_NITTER := NULL;
    //                     :CRTSOLICR.SOLICR_CODPRO := NULL;
    //                     :CRTSOLICR.TIPDESCR := NULL;
    //                     :CRTSOLICR.REF_PROVEEDOR := NULL;
    //                     :CRTSOLICR.REF_PROV_ASE := NULL; 
    //                     :CRTSOLICR.REFPRO := NULL;
    //                     :CRTSOLICR.REFASE := NULL;
    //                     
    //                     GO_ITEM('CRTSOLICR.SOLICR_CODPRO');
    //                     
    //                  END IF;   
    //             
    //             
    //             
    //            END IF; 
    //            
    //           END IF; 
    //                             
    //       END IF;
    //       
    //     END IF;
    //  
    //   IF :CRTSOLICR.SOLICR_CODPRO = 'RFP'  AND :VARIABLE.TIPO_VINCULA = '09' THEN
    //        
    //    
    //         IF :CRTSOLICR.SOLICR_LINEA = 'LE' THEN
    //          
    //          BEGIN
    //          SELECT REFPRV_CODPRV,REFPRV_ORIGEN
    //            INTO V_PROVREF, V_ORIGEN
    //            FROM CRTREFPRV 
    //          WHERE --+PY21520. JDG 
    //                REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                --+
    //            AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //            AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //        EXCEPTION WHEN NO_DATA_FOUND THEN  
    //            V_PROVREF := NULL;
    //            V_ORIGEN := 'N';
    //        END;
    //        
    //           BEGIN
    //          SELECT PROVEE_ALIANZ 
    //            INTO V_TIPALI
    //          FROM COTPROVEE
    //          WHERE PROVEE_CODIGO = V_PROVREF;
    //           EXCEPTION WHEN NO_DATA_FOUND THEN 
    //            V_TIPALI := 'I';
    //             END;
    //             
    //             IF V_TIPALI = 'F' THEN
    //              
    //             VREG := TO_NUMBER(:SYSTEM.TRIGGER_RECORD);
    //     
    //             IF VREG = 1 THEN 
    //                LIB$ALERTA('MENSAJE','RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO',NULL,NULL,NULL,T_RESPUESTA);
    //               IF :CRTOTERSOL1.OTERSOL_NITTER <> NVL(V_PROVREF,:CRTSOLICR.REF_PROVEEDOR) AND V_ORIGEN = 'R' THEN          
    //                     LIB$DTNERFRMA('EL NIT DEL TERCERO '||:CRTOTERSOL1.OTERSOL_NITTER||' ES DIFERENTE AL NIT DEL PROVEEDOR REFERENCIADO.'||V_PROVREF
    //                                   ||' LA SOLICITUD VIENE DE UNA RECONSIDERACION. DEBE CAMBIAR EL TIPO DE PRODUCTO');                       
    //                ELSIF :CRTOTERSOL1.OTERSOL_NITTER <> NVL(V_PROVREF,:CRTSOLICR.REF_PROVEEDOR) AND V_ORIGEN = 'N' THEN
    //                  LIB$DTNERFRMA('EL NIT DEL TERCERO '||:CRTOTERSOL1.OTERSOL_NITTER||' NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO.'||V_PROVREF);                       
    //               END IF;   
    //             END IF;
    //             
    //             END IF;
    //           END IF;
    //          
    //   END IF; 
    //  ------------------------------------------------------------  
    //  
    //   ------------------------------------------------------------   
    //   
    //   --PY 26502 CÓDIGOS DE ESTRATÉGIA ANDRES JIMENEZ / MIGUEL ENRIQUE LOPEZ
    //    IF :VARIABLE.TIPO_VINCULA = '09' 
    //       AND :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL 
    //       AND :CRTSOLICR.SOLICR_CODUNI = '005' THEN
    //    
    //       PUP_VAL_ESTRATEGIA (:CRTOTERSOL1.OTERSOL_NITTER);
    //    
    //    END IF;
    //  
    //  --ANDRES JIMENEZ 
    //  
    //  
    //  END;
    //#endregion
    async CRFSOLCC_crtotersol1_otersolNitter_whenValidateItem() {
        console.log("Entering CRFSOLCC_crtotersol1_otersolNitter_whenValidateItem");
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // CRFSOLCC_PVALTER(CRTOTERSOL1.OTERSOL_NITTER);
        }
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // CRFSOLCC_PU_MENSAJES_PROVEEDOR(CRTOTERSOL1.OTERSOL_NITTER);
        }
        let T_RESPUESTA: number = null;
        let V_TIPPER: null = null;
        let V_PROVREF: null = null;
        let V_ORIGEN: null = null;
        let V_CANTREF: number = null;
        let VREG: number = null;
        let V_TIPALI: null = null;
        let V_TIPO: string = null;
        let V_PROVIG: number = null;
        let V_PROD: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
        // get values from result
        V_TIPO = result1[0].get("V_TIPO");
        if (result1 == null || result1.length == 0) {

            V_TIPO = null;
        }

        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // construct payload
            let payload2 = new Map();
            payload2.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query2", payload2);
            // get values from result
            this.CRTOTERSOL1.NOMBRE = result2[0].get("CRTOTERSOL1.NOMBRE");
            this.CRTOTERSOL1.OTERSOL_TIPPER = result2[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            this.CRTOTERSOL1.OTERSOL_TIPIDE = result2[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            if (result2 == null || result2.length == 0) {

                // CRFSOLCC_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE.RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.POR FAVOR COMUNICARCE CON EL ÁREA DE ADMINISTRACIÓN DE VENTAS....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            // construct payload
            let payload3 = new Map();
            payload3.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result3 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query3", payload3);
            // get values from result
            V_TIPPER = result3[0].get("V_TIPPER");
            if (result3 == null || result3.length == 0) {

            }

            if (this.VARIABLE.TIPO_VINCULA != "09") {
                if (V_TIPPER == "N") {
                    this.CRTOTERSOL1.OTERSOL_ACTJUN = "N";
                }
                else if (V_TIPPER == "J") {
                    this.CRTOTERSOL1.OTERSOL_ACTJUN = "S";
                }
            }
            else {
                this.CRTOTERSOL1.OTERSOL_ACTJUN = null;
            }
        }
        else {
            // CRFSOLCC_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        if (this.VARIABLE.TIPO_VINCULA == "09") {
            // construct payload
            let payload4 = new Map();
            payload4.set("OTERSOL_CODUNI", this.CRTOTERSOL1.OTERSOL_CODUNI);
            payload4.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result4 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query4", payload4);
            // get values from result
            V_PROVIG = result4[0].get("V_PROVIG");
            if (result4 == null || result4.length == 0) {

                V_PROVIG = 0;
            }

            if (V_PROVIG == 1) {
                // CRFSOLCC_LIB$ALERTA("MENSAJE", "ESTE PROVEEDOR TIENE ALIANZA ESTRATEGICA VIGENTE.¿INGRESO LA SOLICITUD CON ALGUN PRODUCTO REFERIDO PROVEEDOR? ", "SI, APLICA", "NO, APLICA", null, T_RESPUESTA);
                // construct payload
                let payload5 = new Map();
                payload5.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
                payload5.set("SOLICR_CODPRO",this.CRTSOLICR.SOLICR_CODPRO);
                // call REST API
                const result5 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query5", payload5);
                // get values from result
                V_PROD = result5[0].get("V_PROD");
                if (result5 == null || result5.length == 0) {

                    // V_PROD = "XXX";
                }

                if (T_RESPUESTA == 1) {
                    if (this.CRTSOLICR.SOLICR_CODPRO != V_PROD) {
                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE CAMBIAR EL TIPO DE PRODUCTO A UN PRODUCTO REFERIDO PROVEEDOR. ", "ACEPTAR", null, null, T_RESPUESTA);
                        this.CRTOTERSOL1.OTERSOL_NITTER = null;
                        this.CRTSOLICR.SOLICR_CODPRO = null;
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODPRO");
                    }
                }
                else if (T_RESPUESTA == 2) {
                    if (this.CRTSOLICR.SOLICR_CODPRO == "RFP") {
                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "DEBE CAMBIAR EL TIPO DE PRODUCTO POR OTRO QUE NO SEA REFERIDO PROVEEDOR. ", "ACEPTAR", null, null, T_RESPUESTA);
                        this.CRTOTERSOL1.OTERSOL_NITTER = null;
                        this.CRTSOLICR.SOLICR_CODPRO = null;
                        this.CRTSOLICR.TIPDESCR = null;
                        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODPRO");
                    }
                    else if ((this.CRTSOLICR.SOLICR_CODPRO == V_PROD &&this.CRTSOLICR.SOLICR_CODPRO != "RFP")) {
                        if ((this.CRTSOLICR.REF_PROVEEDOR != null)) {
                            // CRFSOLCC_LIB$ALERTA("MENSAJE", "HA DILIGENCIADO EL PROVEEDOR.DEBE CAMBIAR EL TIPO DE PRODUCTO O NO DILIGENCIAR EL PROVEEDOR REFERIDO. ", "ACEPTAR", null, null, T_RESPUESTA);
                            this.CRTOTERSOL1.OTERSOL_NITTER = null;
                            this.CRTSOLICR.SOLICR_CODPRO = null;
                            this.CRTSOLICR.TIPDESCR = null;
                            this.CRTSOLICR.REF_PROVEEDOR = null;
                            this.CRTSOLICR.REF_PROV_ASE = null;
                            this.CRTSOLICR.REFPRO = null;
                            this.CRTSOLICR.REFASE = null;
                            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODPRO");
                        }
                    }
                }
            }
        }
        if ((this.CRTSOLICR.SOLICR_CODPRO == "RFP" && this.VARIABLE.TIPO_VINCULA == "09")) {
            if (this.CRTSOLICR.SOLICR_LINEA == "LE") {
                // construct payload
                let payload6 = new Map();
                payload6.set("SOLICR_CODUNI",this.CRTSOLICR.SOLICR_CODUNI);
                payload6.set("SOLICR_OFCSOL",this.CRTSOLICR.SOLICR_OFCSOL);
                payload6.set("SOLICR_CODSOL",this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result6 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query6", payload6);
                // get values from result
                V_PROVREF = result6[0].get("V_PROVREF");
                V_ORIGEN = result6[0].get("V_ORIGEN");
                if (result6 == null || result6.length == 0) {

                    V_PROVREF = null;
                    // V_ORIGEN = "N";
                }

                // construct payload
                let payload7 = new Map();
                // call REST API
                const result7 = await Rest.post("/crfsolcc_crtotersol1/crfsolcc_crtotersol1_otersolnitter_whenvalidateitem_query7", payload7);
                // get values from result
                V_TIPALI = result7[0].get("V_TIPALI");
                if (result7 == null || result7.length == 0) {

                    // V_TIPALI = "I";
                }

                if (V_TIPALI == "F") {
                    VREG = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("TRIGGER_RECORD"));
                    if (VREG == 1) {
                        // CRFSOLCC_LIB$ALERTA("MENSAJE", "RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO", null, null, null, T_RESPUESTA);
                        if ((this.CRTOTERSOL1.OTERSOL_NITTER != V_PROVREF == null ?this.CRTSOLICR.REF_PROVEEDOR : V_PROVREF && V_ORIGEN == "R")) {
                            // CRFSOLCC_LIB$DTNERFRMA("EL NIT DEL TERCERO " + CRTOTERSOL1.OTERSOL_NITTER + " ES DIFERENTE AL NIT DEL PROVEEDOR REFERENCIADO." + V_PROVREF + " LA SOLICITUD VIENE DE UNA RECONSIDERACION. DEBE CAMBIAR EL TIPO DE PRODUCTO");
                        }
                        else if ((this.CRTOTERSOL1.OTERSOL_NITTER != V_PROVREF == null ?this.CRTSOLICR.REF_PROVEEDOR : V_PROVREF && V_ORIGEN == "N")) {
                            // CRFSOLCC_LIB$DTNERFRMA("EL NIT DEL TERCERO " + CRTOTERSOL1.OTERSOL_NITTER + " NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO." + V_PROVREF);
                        }
                    }
                }
            }
        }
        if (((this.VARIABLE.TIPO_VINCULA == "09" && (this.CRTOTERSOL1.OTERSOL_NITTER != null)) && this.CRTSOLICR.SOLICR_CODUNI == "005")) {
            // CRFSOLCC_PUP_VAL_ESTRATEGIA(CRTOTERSOL1.OTERSOL_NITTER);
        }
        console.log("Exiting CRFSOLCC_crtotersol1_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY21520. JDG. REVISADO.
    // GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLCC_crtotersol1_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_crtotersol1_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLCC_crtotersol1_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFSOLCC_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSOLCC_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFSOLCC_base_fecha_whenNewItemInstance");
    }

}

