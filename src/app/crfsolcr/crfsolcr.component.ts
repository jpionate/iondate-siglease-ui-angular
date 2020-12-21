import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSOLCR business logic
import {
    CRTOTERSOL,
    COTSOLFNG,
    TOOLBAR,
    PPAL,
    SOLOBS,
    BASE,
    CRTGAADSO,
    CRTRESTR,
    COTUVPCCV,
    VARIABLE,
    COTUVPAAM,
    CRTSOLICR,
    CTRSOLICR2,
    CRTTEREXT,
    CRTOTERSOL1
} from "./CRFSOLCR_models";



// class CRFSOLCR
@Component({
    selector: 'app-crfsolcr',
    templateUrl: './crfsolcr.component.html',
})
export class CrfsolcrComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['PENCCOM', 'N'],
        ['PCOMITE', null],
        ['SOL_OFI', null],
        ['SOL_TIP', null],
        ['SOL_COD', null],
        ['SOL_CTRL', null],
        ['SOL_TER_PPAL', null],
        ['P_UNIDAD', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public COTSOLFNG: COTSOLFNG = new COTSOLFNG();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public PPAL: PPAL = new PPAL();
    public SOLOBS: SOLOBS = new SOLOBS();
    public BASE: BASE = new BASE();
    public CRTGAADSO: CRTGAADSO = new CRTGAADSO();
    public CRTRESTR: CRTRESTR = new CRTRESTR();
    public COTUVPCCV: COTUVPCCV = new COTUVPCCV();
    public VARIABLE: VARIABLE = new VARIABLE();
    public COTUVPAAM: COTUVPAAM = new COTUVPAAM();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CTRSOLICR2: CTRSOLICR2 = new CTRSOLICR2();
    public CRTTEREXT: CRTTEREXT = new CRTTEREXT();
    public CRTOTERSOL1: CRTOTERSOL1 = new CRTOTERSOL1();


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
    async CRFSOLCR_onClearDetails() {
        console.log("Entering CRFSOLCR_onClearDetails");
        // CRFSOLCR_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFSOLCR_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRFSOLCR_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCR_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRFSOLCR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN FRM$POST_FORM; END;
    //#endregion
    async CRFSOLCR_postForm() {
        console.log("Entering CRFSOLCR_postForm");
        // CRFSOLCR_FRM$POST_FORM();
        console.log("Exiting CRFSOLCR_postForm");
    }

    //#region PLSQL
    // BEGIN
    // 
    //  CLEAR_FORM;
    // 
    //   IF this._SYSTEM_SERVICE.get("BLOCK_STATUS") <> 'CHANGED' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_keyClrfrm() {
        console.log("Entering CRFSOLCR_keyClrfrm");
        this.oracleFormsBuiltins.clear_form();
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") != "CHANGED") {
            // CRFSOLCR_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFSOLCR_keyClrfrm");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFSOLCR_preForm() {
        console.log("Entering CRFSOLCR_preForm");
        // CRFSOLCR_PANTALLA();
        // CRFSOLCR_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFSOLCR_preForm");
    }

    //#region PLSQL
    // BEGIN -- CAHH
    // --SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_CODPRO',REQUIRED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_ORMONUS$',REQUIRED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_GTONAC',REQUIRED,"PROPERTY_TRUE"); 
    // 
    // --+PY21520. JDG.
    // DEFAULT_VALUE( NULL, 'GLOBAL.MOSTRARMENSAJEFIRMAS' );
    // 
    // REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFSOLCR_whenNewFormInstance() {
        console.log("Entering CRFSOLCR_whenNewFormInstance");
        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ORMONUS$", "REQUIRED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_GTONAC", "REQUIRED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.default_value(null, "GLOBAL.MOSTRARMENSAJEFIRMAS");
        // CRFSOLCR_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFSOLCR_whenNewFormInstance");
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
    async CRFSOLCR_crtotersol_keyDelrec() {
        console.log("Entering CRFSOLCR_crtotersol_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCR_crtotersol_keyDelrec");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLCR_crtotersol_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_crtotersol_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLCR_crtotersol_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLCR_crtotersol_volverTer_whenMouseClick() {
        console.log("Entering CRFSOLCR_crtotersol_volverTer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCR_crtotersol_volverTer_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  T_RESPUESTA    NUMBER;
    //   TIPO_PERSONA   SGUSUARIOS.USU_CARGO%TYPE;
    //   V_NOMUSOFID    SGUSUARIOS.USU_NOMBRE%TYPE;
    //   V_MENSAJE    VARCHAR2(2000);
    //   
    //   --+PY21520. JDG.
    //   V_SOLICR_ESTFIR CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //   V_SOLICR_FNG   CRTSOLICR.SOLICR_FNG%TYPE;
    //   V_SOLFNG_NREFEN COTSOLFNG.SOLFNG_NREFEN%TYPE;
    //   V_SOLFNG_VALRES COTSOLFNG.SOLFNG_VALRES%TYPE;
    //   V_SOLFNG_FECRES COTSOLFNG.SOLFNG_FECRES%TYPE;
    //   
    // BEGIN
    //  
    //   :COTSOLFNG.SOLFNG_USUMOD := PLSQLBuiltins.user();
    //   :COTSOLFNG.SOLFNG_FECMOD := SYSDATE;
    //   :COTSOLFNG.SOLFNG_REFNUE := :COTSOLFNG.SOLFNG_NREFEN;
    // 
    //  BEGIN
    //   SELECT SOLFNG_NREFEN
    //     INTO :COTSOLFNG.SOLFNG_REFANT
    //     FROM COTSOLFNG
    //    WHERE SOLFNG_OFCSOL = :COTSOLFNG.SOLFNG_OFCSOL
    //      AND SOLFNG_CODSOL = :COTSOLFNG.SOLFNG_CODSOL
    //      AND SOLFNG_CODUNI = :COTSOLFNG.SOLFNG_CODUNI; --ARQUITECTURA
    //  EXCEPTION WHEN NO_DATA_FOUND THEN :COTSOLFNG.SOLFNG_REFANT := NULL;
    //  END;
    // 
    //  --+PY21520. JDG.
    //  
    //    BEGIN
    //  
    //     SELECT SOLICR_ESTFIR,
    //         SOLICR_FNG,
    //            SOLFNG_NREFEN, 
    //            SOLFNG_VALRES, 
    //            SOLFNG_FECRES 
    //       INTO V_SOLICR_ESTFIR,
    //           V_SOLICR_FNG,
    //            V_SOLFNG_NREFEN, 
    //            V_SOLFNG_VALRES,
    //            V_SOLFNG_FECRES
    //       FROM CRTSOLICR, COTSOLFNG
    //      WHERE SOLICR_CODUNI = SOLFNG_CODUNI(+)
    //        AND SOLICR_OFCSOL = SOLFNG_OFCSOL(+)
    //        AND SOLICR_CODSOL = SOLFNG_CODSOL(+)
    //        AND SOLFNG_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        AND SOLFNG_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND SOLFNG_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //        
    //    EXCEPTION 
    //     
    //      WHEN OTHERS THEN
    //      
    //        V_SOLICR_ESTFIR := NULL;
    //        
    //    END;    
    //       
    //    IF NVL( V_SOLICR_ESTFIR, 'X' ) = 'AP' THEN 
    //     
    //      IF ( V_SOLICR_FNG IS NOT NULL OR :CRTSOLICR.SOLICR_FNG IS NOT NULL ) AND 
    //         ( ( NVL( V_SOLFNG_NREFEN, 0 ) = 0 AND NVL( :COTSOLFNG.SOLFNG_NREFEN, 0 ) <> 0 ) OR 
    //         ( NVL( V_SOLFNG_VALRES, 0 ) = 0 AND NVL( :COTSOLFNG.SOLFNG_VALRES, 0 ) <> 0 ) OR
    //         ( V_SOLFNG_FECRES IS NULL       AND :COTSOLFNG.SOLFNG_FECRES IS NOT NULL ) ) THEN
    //       
    //         NULL;     
    //         
    //      ELSE  
    //        
    //        --+PY21520. JDG.
    //        PUP_MENSAJE_FIRMAS;
    //        
    //      END IF;  
    //    
    //    END IF;
    //  
    // END; 
    //#endregion
    async CRFSOLCR_cotsolfng_preUpdate() {
        console.log("Entering CRFSOLCR_cotsolfng_preUpdate");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let V_NOMUSOFID: null = null;
        let V_MENSAJE: string = null;
        let V_SOLICR_ESTFIR: null = null;
        let V_SOLICR_FNG: null = null;
        let V_SOLFNG_NREFEN: null = null;
        let V_SOLFNG_VALRES: null = null;
        let V_SOLFNG_FECRES: null = null;
        this.COTSOLFNG.SOLFNG_USUMOD = PLSQLBuiltins.user();
        this.COTSOLFNG.SOLFNG_FECMOD = PLSQLBuiltins.sysdate().toString();
        this.COTSOLFNG.SOLFNG_REFNUE = this.COTSOLFNG.SOLFNG_NREFEN.toString();
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLFNG_OFCSOL", this.COTSOLFNG.SOLFNG_OFCSOL);
        payload1.set("SOLFNG_CODSOL", this.COTSOLFNG.SOLFNG_CODSOL);
        payload1.set("SOLFNG_CODUNI", this.COTSOLFNG.SOLFNG_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_cotsolfng/crfsolcr_cotsolfng_preupdate_query1", payload1);
        // get values from result
        this.COTSOLFNG.SOLFNG_REFANT = result1[0].get("COTSOLFNG.SOLFNG_REFANT");
        if (result1 == null || result1.length == 0) {

            this.COTSOLFNG.SOLFNG_REFANT = null;
        }

        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfsolcr_cotsolfng/crfsolcr_cotsolfng_preupdate_query2", payload2);
            // get values from result
            V_SOLICR_ESTFIR = result2[0].get("V_SOLICR_ESTFIR");
            V_SOLICR_FNG = result2[0].get("V_SOLICR_FNG");
            V_SOLFNG_NREFEN = result2[0].get("V_SOLFNG_NREFEN");
            V_SOLFNG_VALRES = result2[0].get("V_SOLFNG_VALRES");
            V_SOLFNG_FECRES = result2[0].get("V_SOLFNG_FECRES");
        } catch (ex) {

            V_SOLICR_ESTFIR = null;
        }

        if (V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR == "AP") {
            // if ((((V_SOLICR_FNG != null) || (this.CRTSOLICR.SOLICR_FNG != null)) && (((V_SOLFNG_NREFEN == null ? 0 : V_SOLFNG_NREFEN == 0 && this.COTSOLFNG.SOLFNG_NREFEN == null ? 0 : COTSOLFNG.SOLFNG_NREFEN != 0) || (V_SOLFNG_VALRES == null ? 0 : V_SOLFNG_VALRES == 0 && this.COTSOLFNG.SOLFNG_VALRES == null ? 0 : this.COTSOLFNG.SOLFNG_VALRES != 0)) || ((V_SOLFNG_FECRES == null) && (this.COTSOLFNG.SOLFNG_FECRES != null))))) {
            // }
            // else {
            //     // CRFSOLCR_PUP_MENSAJE_FIRMAS();
            // }
        }
        console.log("Exiting CRFSOLCR_cotsolfng_preUpdate");
    }

    //#region PLSQL
    // BEGIN :COTSOLFNG.SOLFNG_USUINS := PLSQLBuiltins.user();
    // :COTSOLFNG.SOLFNG_FECINS := SYSDATE; END;
    //#endregion
    async CRFSOLCR_cotsolfng_preInsert() {
        console.log("Entering CRFSOLCR_cotsolfng_preInsert");
        this.COTSOLFNG.SOLFNG_USUINS = PLSQLBuiltins.user();
        this.COTSOLFNG.SOLFNG_FECINS = PLSQLBuiltins.sysdate().toString();
        console.log("Exiting CRFSOLCR_cotsolfng_preInsert");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFSOLCR_toolbar_whenButtonPressed() {
        console.log("Entering CRFSOLCR_toolbar_whenButtonPressed");
        // CRFSOLCR_TOOLBAR_ACTIONS();
        console.log("Exiting CRFSOLCR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFSOLCR_toolbar_whenMouseLeave() {
        console.log("Entering CRFSOLCR_toolbar_whenMouseLeave");
        // CRFSOLCR_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFSOLCR_toolbar_whenMouseLeave");
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
    async CRFSOLCR_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSOLCR_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFSOLCR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN :VOLVER:='MENU ANT'; END;
    //#endregion
    async CRFSOLCR_ppal_postQuery() {
        console.log("Entering CRFSOLCR_ppal_postQuery");
        this.PPAL.VOLVER = "MENU ANT";
        console.log("Exiting CRFSOLCR_ppal_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.CODUNI1   := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC1      := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL1   := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL1   := :CRTSOLICR.SOLICR_ESTSOL;
    //     COMMIT_FORM;
    //     GO_ITEM ('CRTSOLICR.SOLICR_BCODEX');
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //    :VARIABLE.SOLICR_CODVOR1 := :CRTSOLICR.SOLICR_CODVOR; 
    //     
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_redesctos_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_redesctos_whenMouseClick");
        this.VARIABLE.CODUNI1 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL1 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL1 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_BCODEX");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            this.VARIABLE.SOLICR_CODVOR1 = this.CRTSOLICR.SOLICR_CODVOR;
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_redesctos_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.CODUNI5 := :CRTSOLICR.SOLICR_CODUNI;-- ARQUITECTURA
    //     :VARIABLE.OFC5    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL5 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL5 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC5  := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     GO_ITEM  ('CRTSOLICR.SOLICR_OBSECR');
    // END;
    // 
    //   --+PY21520. JDG.
    //   DECLARE
    // 
    //     V_TOTAL_TER           CRTSOLICR.SOLICR_EXPCLI%TYPE;
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
    //       --+PY21520. JDG.
    //       :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //       PUP_MENSAJE_FIRMAS;
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
    //                   || 'CRFSOLCR.PPAL.CREDTO.WHEN-MOUSE-CLICK. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //        PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
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
    //                      || 'CRFSOLCR.PPAL.CREDTO.WHEN-MOUSE-CLICK. '
    // //                      || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                      || 'SQLERRM ' || SQLERRM;
    //                      
    //            PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                      
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //          
    //       END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_ppal_credto_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_credto_whenMouseClick");
        this.VARIABLE.CODUNI5 = this.CRTSOLICR.SOLICR_CODUNI;
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
                // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
                // CRFSOLCR_PUP_MENSAJE_FIRMAS();
                // V_MENSAJE = PUP_ENDEUDAMIENTO_TERCERO(this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_NITTER, SYSDATE.toString(), V_TOTAL_TER);
                if (V_MENSAJE == "EXITO") {
                }
                else {
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO SE PUDO OBTENER ENDEUDAMIENTO DEL TERCERO " + CRTSOLICR.SOLICR_NITTER + ".", "ACEPTAR", null, null, T_RESPUESTA);
                    // V_MENSAJE = "FALLO. " + "CRFSOLCR.PPAL.CREDTO.WHEN-MOUSE-CLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                }
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_FIRMAS", "ENABLED", "PROPERTY_TRUE");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.PPAL.CREDTO.WHEN-MOUSE-CLICK. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_ppal_credto_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //      COMMIT_FORM;
    //      GO_BLOCK('CRTSOLICR');
    //      
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_infGrl_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_infGrl_whenMouseClick");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_infGrl_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     GO_ITEM ('SOLICR_CIASEG');
    //     :VARIABLE.CODUNI2  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC2     := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL2  := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL2  := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC2  := :CRTSOLICR.SOLICR_OFIBANC;
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //    :VARIABLE.SOLICR_CODVOR2 := :CRTSOLICR.SOLICR_CODVOR;  
    //    
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_segImp_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_segImp_whenMouseClick");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_CIASEG");
        this.VARIABLE.CODUNI2 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC2 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL2 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL2 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC2 = this.CRTSOLICR.SOLICR_OFIBANC;
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            this.VARIABLE.SOLICR_CODVOR2 = this.CRTSOLICR.SOLICR_CODVOR;
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_segImp_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE  
    //  V_AREA   SGUSUARIOS.USU_AREA_N%TYPE;
    //  V_CARGO  SGUSUARIOS.USU_CARGO_N%TYPE;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NOT NULL THEN
    //     BEGIN
    //      SELECT USU_AREA_N, USU_CARGO_N
    //        INTO V_AREA, V_CARGO
    //        FROM SGUSUARIOS
    //       WHERE USU_CODIGO = PLSQLBuiltins.user();
    //         --AND USU_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     END;
    //   
    //   /* 8022
    //     IF V_AREA = 'CRE' AND V_CARGO IN ('ANCR','ANCD') THEN
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FECRADI',ENABLED,"ATTR_OFF");
    //     END IF;
    //     8022
    //   */  
    //   
    //   
    //     --8022
    //    IF V_CARGO = 'JECR' THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FECRADI',ENABLED,"PROPERTY_TRUE");
    //     ELSE
    //          IF V_AREA = 'CRE' AND V_CARGO IN ('ANCR','ANCD') THEN
    //             SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FECRADI',ENABLED,"ATTR_OFF");
    //         END IF;    
    //    END IF;
    //    --8022
    //   
    //   
    //   END IF;
    // 
    //   :VARIABLE.CODUNI10  := :CRTSOLICR.SOLICR_CODUNI; -- ARQUITECTURA
    //   :VARIABLE.CODOFI10  := :CRTSOLICR.SOLICR_OFCSOL;
    //   :VARIABLE.CODSOL10  := :CRTSOLICR.SOLICR_CODSOL;
    //   :VARIABLE.ESTSOL10  := :CRTSOLICR.SOLICR_ESTSOL;
    //   :VARIABLE.SOLICR_OFIBANC10  := :CRTSOLICR.SOLICR_OFIBANC;
    //   COMMIT_FORM;
    //   GO_BLOCK('VARIABLE');  
    //   GO_ITEM ('CRTSOLICR.SOLICR_FECRADI');
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //    :VARIABLE.SOLICR_CODVOR10 := :CRTSOLICR.SOLICR_CODVOR; 
    //      
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_estudio_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_estudio_whenMouseClick");
        let V_AREA: null = null;
        let V_CARGO: null = null;
        if ((this.CRTSOLICR.SOLICR_FECRADI != null)) {
            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/crfsolcr_ppal/crfsolcr_ppal_estudio_whenmouseclick_query1", payload1);
            // get values from result
            V_AREA = result1[0].get("V_AREA");
            V_CARGO = result1[0].get("V_CARGO");
            if (V_CARGO == "JECR") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FECRADI", "ENABLED", "PROPERTY_TRUE");
            }
            else {
                if ((V_AREA == "CRE" && ["ANCR", "ANCD"].indexOf(V_CARGO) != -1)) {
                    this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FECRADI", "ENABLED", "ATTR_OFF");
                }
            }
        }
        this.VARIABLE.CODUNI10 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.CODOFI10 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL10 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL10 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC10 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            this.VARIABLE.SOLICR_CODVOR10 = this.CRTSOLICR.SOLICR_CODVOR;
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_estudio_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // HIDE_VIEW('REESTRUCTURADOS');
    // GO_ITEM('CRTSOLICR.SOLICR_TIPCRE'); END;
    //#endregion
    async CRFSOLCR_ppal_volver1_whenButtonPressed() {
        console.log("Entering CRFSOLCR_ppal_volver1_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("REESTRUCTURADOS");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TIPCRE");
        console.log("Exiting CRFSOLCR_ppal_volver1_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //        SHOW_VIEW('CANVAS1');
    // END;
    // 
    // PU_LLAMAR_VARCUAL(:CRTSOLICR.SOLICR_NITTER,'Q');
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_varCualit_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_varCualit_whenMouseClick");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_varCualit_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //        SHOW_VIEW('CANVAS1');
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_volver_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_volver_whenMouseClick");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_volver_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.CODUNI8  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.CODOFI8  := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL8  := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL8  := :CRTSOLICR.SOLICR_ESTSOL;
    //     --+PY21520. JDG
    //     --:VARIABLE.SOLICR_OFIBANC7  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.SOLICR_OFIBANC8  := :CRTSOLICR.SOLICR_OFIBANC;
    //     --+
    //     COMMIT_FORM;
    //     GO_BLOCK('VARIABLE');
    // 
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     
    //    :VARIABLE.SOLICR_CODVOR8 := :CRTSOLICR.SOLICR_CODVOR; 
    //     
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_oTerceros_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_oTerceros_whenMouseClick");
        this.VARIABLE.CODUNI8 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.CODOFI8 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL8 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL8 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC8 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            this.VARIABLE.SOLICR_CODVOR8 = this.CRTSOLICR.SOLICR_CODVOR;
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_oTerceros_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.CODUNI3 := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     :VARIABLE.OFC3    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL3 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL3 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC3  := :CRTSOLICR.SOLICR_OFIBANC;
    //     COMMIT_FORM;
    //     GO_ITEM ('SOLICR_GTIREC');
    // END;
    // 
    // --+PY21520. JDG.
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI IS NOT NULL AND :CRTSOLICR.SOLICR_OFCSOL IS NOT NULL 
    //    AND :CRTSOLICR.SOLICR_CODSOL IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    
    //    :VARIABLE.SOLICR_CODVOR3 := :CRTSOLICR.SOLICR_CODVOR;  
    //     
    //     --+PY21520. JDG.
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //   END IF;  
    //                   
    // END;
    //#endregion
    async CRFSOLCR_ppal_gtiasAd_whenMouseClick() {
        console.log("Entering CRFSOLCR_ppal_gtiasAd_whenMouseClick");
        this.VARIABLE.CODUNI3 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC3 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL3 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL3 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC3 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_GTIREC");
        if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            this.VARIABLE.SOLICR_CODVOR3 = this.CRTSOLICR.SOLICR_CODVOR;
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        }
        console.log("Exiting CRFSOLCR_ppal_gtiasAd_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  VMOE CRTMOESSO%ROWTYPE;
    // BEGIN
    //  IF :SOLOBS.SOBS_MOTEST IS NOT NULL THEN
    //    PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO, :SOLOBS.SOBS_MOTEST, VMOE);
    //   END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('EL MOTIVO '||TO_CHAR(:SOLOBS.SOBS_MOTEST)||' DEL ESTADO '
    //                  ||:SOLOBS.SOBS_ESTADO||' NO EXISTE');
    // END;
    //#endregion
    async CRFSOLCR_solobs_whenValidateRecord() {
        console.log("Entering CRFSOLCR_solobs_whenValidateRecord");
        let VMOE: null = null;
        if ((this.SOLOBS.SOBS_MOTEST != null)) {
            // CRFSOLCR_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, SOLOBS.SOBS_MOTEST, VMOE);
        }
        // if (result0 == null || result0.length == 0) {

        //     // CRFSOLCR_LIB$DTNERFRMA("EL MOTIVO " + SOLOBS.SOBS_MOTEST.toString() + " DEL ESTADO " + SOLOBS.SOBS_ESTADO + " NO EXISTE");
        // }

        console.log("Exiting CRFSOLCR_solobs_whenValidateRecord");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   V_SOLICR_ESTFIR        CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //   V_EXISTEESTADOCRTSOLESTOBS  NUMBER;
    //   
    // BEGIN
    //      
    //   BEGIN
    //  
    //    SELECT SOLICR_ESTFIR
    //      INTO V_SOLICR_ESTFIR
    //      FROM CRTSOLICR
    //     WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //       AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //       AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //       AND SOLICR_ESTSOL = 'EC';
    //       
    //   EXCEPTION 
    //    
    //     WHEN OTHERS THEN
    //     
    //       V_SOLICR_ESTFIR := NULL;
    //     
    //   END;  
    //       
    //   IF NVL( V_SOLICR_ESTFIR, 'X' ) IN ( 'AP', 'AZ', 'RJ', 'NG' ) THEN 
    //    
    //    BEGIN
    //  
    //     SELECT COUNT(*)
    //       INTO V_EXISTEESTADOCRTSOLESTOBS
    //       FROM CRTSOLESTOBS
    //      WHERE SOBS_CODUNI          = :CRTSOLICR.SOLICR_CODUNI
    //        AND SOBS_OFCSOL          = :CRTSOLICR.SOLICR_OFCSOL
    //        AND SOBS_CODSOL          = :CRTSOLICR.SOLICR_CODSOL
    //        AND TRUNC( SOBS_FECREG ) = TRUNC( SYSDATE )
    //        AND SOBS_ESTADO          = 'AP'
    //        AND SOBS_USRCHANGE       = PLSQLBuiltins.user();
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       V_EXISTEESTADOCRTSOLESTOBS := 0;
    //     
    //    END;
    //   
    //     IF V_EXISTEESTADOCRTSOLESTOBS = 0 THEN
    //      
    //      NULL;
    //         
    //     ELSE 
    // 
    //       --+PY21520. JDG.
    //       PUP_MENSAJE_FIRMAS;
    //        
    //     END IF;
    //      
    //   END IF;
    //    
    // END;
    //#endregion
    async CRFSOLCR_solobs_preUpdate() {
        console.log("Entering CRFSOLCR_solobs_preUpdate");
        let V_SOLICR_ESTFIR: null = null;
        let V_EXISTEESTADOCRTSOLESTOBS: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_solobs/crfsolcr_solobs_preupdate_query1", payload1);
            // get values from result
            V_SOLICR_ESTFIR = result1[0].get("V_SOLICR_ESTFIR");
        } catch (ex) {

            V_SOLICR_ESTFIR = null;
        }

        if (["AP", "AZ", "RJ", "NG"].indexOf(V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR) != -1) {
            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result2 = await Rest.post("/crfsolcr_solobs/crfsolcr_solobs_preupdate_query2", payload2);
                // get values from result
                V_EXISTEESTADOCRTSOLESTOBS = result2[0].get("V_EXISTEESTADOCRTSOLESTOBS");
            } catch (ex) {

                V_EXISTEESTADOCRTSOLESTOBS = 0;
            }

            if (V_EXISTEESTADOCRTSOLESTOBS == 0) {
            }
            else {
                // CRFSOLCR_PUP_MENSAJE_FIRMAS();
            }
        }
        console.log("Exiting CRFSOLCR_solobs_preUpdate");
    }

    //#region PLSQL
    // BEGIN :SOLOBS.SOBS_FECREG    := SYSDATE;
    // :SOLOBS.SOBS_USRCHANGE := PLSQLBuiltins.user(); END;
    //#endregion
    async CRFSOLCR_solobs_whenCreateRecord() {
        console.log("Entering CRFSOLCR_solobs_whenCreateRecord");
        this.SOLOBS.SOBS_FECREG = PLSQLBuiltins.sysdate().toString();
        this.SOLOBS.SOBS_USRCHANGE = PLSQLBuiltins.user();
        console.log("Exiting CRFSOLCR_solobs_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  VMOE CRTMOESSO%ROWTYPE;
    // BEGIN
    //  IF :SOLOBS.SOBS_MOTEST IS NOT NULL THEN
    //    PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO, :SOLOBS.SOBS_MOTEST, VMOE);
    //     :SOLOBS.MOTEST_DES := VMOE.MOESSO_DESCRI;
    //   END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      NULL;
    // END;
    //#endregion
    async CRFSOLCR_solobs_postQuery() {
        console.log("Entering CRFSOLCR_solobs_postQuery");
        let VMOE: null = null;
        if ((this.SOLOBS.SOBS_MOTEST != null)) {
            // CRFSOLCR_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, SOLOBS.SOBS_MOTEST, VMOE);
            // this.SOLOBS.MOTEST_DES = VMOE.MOESSO_DESCRI;
        }
        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CRFSOLCR_solobs_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :SOLOBS.SOBS_ESTADO IS NULL THEN
    //    :SOLOBS.SOBS_ESTADO    := :VARIABLE.VAR_ESTADO;
    //    :VARIABLE.VAR_ESTADO   := NULL;
    // END IF; END;
    //#endregion
    async CRFSOLCR_solobs_sobsEstado_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_solobs_sobsEstado_whenNewItemInstance");
        if ((this.SOLOBS.SOBS_ESTADO == null)) {
            this.SOLOBS.SOBS_ESTADO = this.VARIABLE.VAR_ESTADO;
            this.VARIABLE.VAR_ESTADO = null;
        }
        console.log("Exiting CRFSOLCR_solobs_sobsEstado_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.VAR_ESTADO IS NOT NULL OR
    //    :CRTSOLICR.SOLICR_ESTSOL = 'EC' 
    // THEN 
    //    :CRTSOLICR.SOLICR_OBSECR := :SOLOBS.SOBS_OBSERVACION;
    // END IF; END;
    //#endregion
    async CRFSOLCR_solobs_btnCopiar_whenButtonPressed() {
        console.log("Entering CRFSOLCR_solobs_btnCopiar_whenButtonPressed");
        if (((this.VARIABLE.VAR_ESTADO != null) || this.CRTSOLICR.SOLICR_ESTSOL == "EC")) {
            this.CRTSOLICR.SOLICR_OBSECR = this.SOLOBS.SOBS_OBSERVACION;
        }
        console.log("Exiting CRFSOLCR_solobs_btnCopiar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    //  VMOES CRTMOESSO%ROWTYPE;
    //  VTEMP  NUMBER;
    // BEGIN
    //  PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO,VMOES);
    //   IF :SOLOBS.SOBS_MOTEST IS NULL THEN
    //    LIB$DTNERFRMA('ENTRE EL MOTIVO');
    //   END IF;
    //   BEGIN
    //    PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO,:SOLOBS.SOBS_MOTEST, VMOES);
    //    :SOLOBS.MOTEST_DES := VMOES.MOESSO_DESCRI;
    //    :CRTSOLICR.SOLICR_MOTEST := :SOLOBS.SOBS_MOTEST;
    //    --IF :CRTSOLICR.SOLICR_MOTEST = 'DC' THEN
    //    IF :SOLOBS.SOBS_ESTADO = 'DC' THEN
    //      :CRTSOLICR.MOTEST_DC := :SOLOBS.MOTEST_DES;
    //     END IF;
    //    EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         LIB$DTNERFRMA('EL MOTIVO '||:SOLOBS.SOBS_ESTADO||'-'||TO_CHAR(:SOLOBS.SOBS_MOTEST)||' NO EXISTE');
    //   END;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      NULL;
    // END;
    //#endregion
    async CRFSOLCR_solobs_sobsMotest_whenValidateItem() {
        console.log("Entering CRFSOLCR_solobs_sobsMotest_whenValidateItem");
        let VBOTON: number = null;
        let VMOES: null = null;
        let VTEMP: number = null;
        // CRFSOLCR_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, VMOES);
        if ((this.SOLOBS.SOBS_MOTEST == null)) {
            // CRFSOLCR_LIB$DTNERFRMA("ENTRE EL MOTIVO");
        }
        // CRFSOLCR_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, SOLOBS.SOBS_MOTEST, VMOES);
        // this.SOLOBS.MOTEST_DES = this.VMOES.MOESSO_DESCRI;
        this.CRTSOLICR.SOLICR_MOTEST = this.SOLOBS.SOBS_MOTEST;
        if (this.SOLOBS.SOBS_ESTADO == "DC") {
            this.CRTSOLICR.MOTEST_DC = this.SOLOBS.MOTEST_DES;
        }
        // if (result0 == null || result0.length == 0) {

        //     // CRFSOLCR_LIB$DTNERFRMA("EL MOTIVO " + SOLOBS.SOBS_ESTADO + "-" + SOLOBS.SOBS_MOTEST.toString() + " NO EXISTE");
        // }

        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CRFSOLCR_solobs_sobsMotest_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFSOLCR_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFSOLCR_base_fecha_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   --+PY21520. JDG.
    //   PUP_MENSAJE_FIRMAS;
    //   
    // END;
    //#endregion
    async CRFSOLCR_crtgaadso_preUpdate() {
        console.log("Entering CRFSOLCR_crtgaadso_preUpdate");
        // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        console.log("Exiting CRFSOLCR_crtgaadso_preUpdate");
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
    //                    || 'CRFSOLCR.CRTGAADSO.POST-QUERY. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtgaadso_postQuery() {
        console.log("Entering CRFSOLCR_crtgaadso_postQuery");
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
                const result1 = await Rest.post("/crfsolcr_crtgaadso/crfsolcr_crtgaadso_postquery_query1", payload1);
                // get values from result
                this.CRTGAADSO.DESCRI_TIPPRE = result1[0].get("CRTGAADSO.DESCRI_TIPPRE");
            } catch (ex) {

                this.CRTGAADSO.DESCRI_TIPPRE = null;
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTGAADSO.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtgaadso_postQuery");
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
    //                    || 'CRFSOLCR.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtgaadso_gaadsoVrcial_keyNextItem() {
        console.log("Entering CRFSOLCR_crtgaadso_gaadsoVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_REGFRMXG");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtgaadso_gaadsoVrcial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   --+PY21520. JDG.
    //   PUP_MENSAJE_FIRMAS;
    //   
    // END;
    //#endregion
    async CRFSOLCR_crtrestr_preUpdate() {
        console.log("Entering CRFSOLCR_crtrestr_preUpdate");
        // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        console.log("Exiting CRFSOLCR_crtrestr_preUpdate");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLCR_crtrestr_whenNewBlockInstance() {
        console.log("Entering CRFSOLCR_crtrestr_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLCR_crtrestr_whenNewBlockInstance");
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
    // NULL; --ARQUITECTURA; END;
    //#endregion
    async CRFSOLCR_crtrestr_restrColofi_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtrestr_restrColofi_whenValidateItem");
        console.log("Exiting CRFSOLCR_crtrestr_restrColofi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_EXISTE    NUMBER;
    //  V_ESTADO    VARCHAR2(2);
    // BEGIN
    //   BEGIN
    //     SELECT COUNT(9) 
    //       INTO V_EXISTE
    //       FROM COL
    //      WHERE COLOFI=:CRTRESTR.RESTR_OFISOL
    //        AND COLTDOC=:CRTRESTR.RESTR_COLTDOC
    //        AND COLCOD=:CRTRESTR.RESTR_COLCOD
    //        AND COLOFI=:CRTRESTR.RESTR_CODUNI; --ARQUITECTURA
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
    //       INTO V_ESTADO
    //       FROM COL
    //      WHERE COLOFI=:CRTRESTR.RESTR_OFISOL
    //        AND COLTDOC=:CRTRESTR.RESTR_COLTDOC
    //        AND COLCOD=:CRTRESTR.RESTR_COLCOD
    //        AND COLOFI=:CRTRESTR.RESTR_CODUNI; --ARQUITECTURA;
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
    async CRFSOLCR_crtrestr_restrColcod_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtrestr_restrColcod_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        let V_ESTADO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload1.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload1.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        payload1.set("RESTR_CODUNI", this.CRTRESTR.RESTR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtrestr/crfsolcr_crtrestr_restrcolcod_whenvalidateitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE == 0) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL CONTRATO A REESTRUCTURAR NO EXISTE EN LA COLOCACIÓN. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload2.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload2.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        payload2.set("RESTR_CODUNI", this.CRTRESTR.RESTR_CODUNI);
        // call REST API
        const result2 = await Rest.post("/crfsolcr_crtrestr/crfsolcr_crtrestr_restrcolcod_whenvalidateitem_query2", payload2);
        // get values from result
        V_ESTADO = result2[0].get("V_ESTADO");
        if (result2 == null || result2.length == 0) {

            V_ESTADO = null;
        }

        if (V_ESTADO != "VI") {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL CONTRATO ESTA EN ESTADO DIFERENTE A VIGENTE, NO ES POSIBLE REESTRUCTURARARLO. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtrestr_restrColcod_whenValidateItem");
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
    async CRFSOLCR_crtrestr_restrColtdoc_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtrestr_restrColtdoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTRESTR.RESTR_COLTDOC != "03") {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL CÓDIGO PARA EL TIPO DEL CONTRATO NO ES VÁLIDO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtrestr_restrColtdoc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN HIDE_WINDOW( 'WINDOWCOD' );    
    //     GO_ITEM( 'CRTSOLICR.SOLICR_COSEAC' ); END;
    //#endregion
    async CRFSOLCR_cotuvpccv_uvpccvSalir_whenButtonPressed() {
        console.log("Entering CRFSOLCR_cotuvpccv_uvpccvSalir_whenButtonPressed");
        this.oracleFormsBuiltins.hide_window("WINDOWCOD");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_COSEAC");
        console.log("Exiting CRFSOLCR_cotuvpccv_uvpccvSalir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM( 'CRTSOLICR.SOLICR_CODCDR' ); END;
    //#endregion
    async CRFSOLCR_cotuvpccv_btnCodestra_whenButtonPressed() {
        console.log("Entering CRFSOLCR_cotuvpccv_btnCodestra_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODCDR");
        console.log("Exiting CRFSOLCR_cotuvpccv_btnCodestra_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT SUCDAV_DESCRI
    //    INTO :COTUVPCCV.DESCRI_SUBADA 
    //     FROM COTSUCDAV
    //    WHERE SUCDAV_CODVOH = :COTUVPCCV.UVPCCV_SUBADA
    //    AND ROWNUM =1; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_SUBADA := NULL;
    // END;
    //#endregion
    async CRFSOLCR_cotuvpccv_uvpccvSubada_postChange() {
        console.log("Entering CRFSOLCR_cotuvpccv_uvpccvSubada_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("UVPCCV_SUBADA", this.COTUVPCCV.UVPCCV_SUBADA);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_cotuvpccv/crfsolcr_cotuvpccv_uvpccvsubada_postchange_query1", payload1);
            // get values from result
            this.COTUVPCCV.DESCRI_SUBADA = result1[0].get("COTUVPCCV.DESCRI_SUBADA");
        } catch (ex) {

            this.COTUVPCCV.DESCRI_SUBADA = null;
        }

        console.log("Exiting CRFSOLCR_cotuvpccv_uvpccvSubada_postChange");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT UVPMVH_DEMAUV
    //    INTO :COTUVPCCV.DESCRI_COMAFA 
    //     FROM COTUVPMVH
    //    WHERE UVPMVH_COMAUV = :COTUVPCCV.UVPCCV_COMAFA; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_COMAFA := NULL;
    // END;
    //#endregion
    async CRFSOLCR_cotuvpccv_uvpccvComafa_postChange() {
        console.log("Entering CRFSOLCR_cotuvpccv_uvpccvComafa_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("UVPCCV_COMAFA", this.COTUVPCCV.UVPCCV_COMAFA);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_cotuvpccv/crfsolcr_cotuvpccv_uvpccvcomafa_postchange_query1", payload1);
            // get values from result
            this.COTUVPCCV.DESCRI_COMAFA = result1[0].get("COTUVPCCV.DESCRI_COMAFA");
        } catch (ex) {

            this.COTUVPCCV.DESCRI_COMAFA = null;
        }

        console.log("Exiting CRFSOLCR_cotuvpccv_uvpccvComafa_postChange");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT  TERNOM ||'  ' || TERAPE
    //    INTO :COTUVPCCV.DESCRI_TERCOP 
    //     FROM TER
    //    WHERE TERCOD = :COTUVPCCV.UVPCCV_TERCOP
    //    AND ROWNUM =1
    //          UNION
    //           SELECT NOMBRE
    //           FROM OPS$COLOCA.CRTTEREXJ
    //             WHERE NIT = :COTUVPCCV.UVPCCV_TERCOP;    
    //             EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_TERCOP := NULL;
    // END;
    //#endregion
    async CRFSOLCR_cotuvpccv_uvpccvTercop_postChange() {
        console.log("Entering CRFSOLCR_cotuvpccv_uvpccvTercop_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("UVPCCV_TERCOP", this.COTUVPCCV.UVPCCV_TERCOP);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_cotuvpccv/crfsolcr_cotuvpccv_uvpccvtercop_postchange_query1", payload1);
            // get values from result
            this.COTUVPCCV.DESCRI_TERCOP = result1[0].get("COTUVPCCV.DESCRI_TERCOP");
        } catch (ex) {

            this.COTUVPCCV.DESCRI_TERCOP = null;
        }

        console.log("Exiting CRFSOLCR_cotuvpccv_uvpccvTercop_postChange");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.OFC1  := :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.SOLICR_OFIBANC1  := :CRTSOLICR.SOLICR_OFIBANC; END;
    //#endregion
    async CRFSOLCR_variable_whenNewBlockInstance() {
        console.log("Entering CRFSOLCR_variable_whenNewBlockInstance");
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICR_OFIBANC1 = this.CRTSOLICR.SOLICR_OFIBANC;
        console.log("Exiting CRFSOLCR_variable_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // BEGIN
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    // //     RUN_PRODUCT(REPORTS,'CRRACTAS',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async CRFSOLCR_variable_impActa_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_impActa_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "CRRACTAS", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting CRFSOLCR_variable_impActa_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDORES';
    // --GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '09';
    // GO_BLOCK('CRTOTERSOL1');
    // EXECUTE_QUERY;
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCR_variable_provnal_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_provnal_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.VARIABLE.TIPO_VINCULA = "09";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCR_variable_provnal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDORES';
    // :VARIABLE.TIPO_VINCULA := '09';
    // GO_BLOCK('CRTOTERSOL1');
    // END;
    //#endregion
    async CRFSOLCR_variable_provnal_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_provnal_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.VARIABLE.TIPO_VINCULA = "09";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL1");
        console.log("Exiting CRFSOLCR_variable_provnal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SHOW_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT');
    // 
    // 
    // EXECUTE_QUERY;
    // 
    // --+PY21520. JDG.
    // --GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' );
    // GO_ITEM( 'CRTTEREXT.TEREXT_NIT' ); END;
    //#endregion
    async CRFSOLCR_variable_provext_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_provext_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.show_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_item("CRTTEREXT.TEREXT_NIT");
        console.log("Exiting CRFSOLCR_variable_provext_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AZ';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //   V_INCONSI         NUMBER;
    //   VCONSEC           NUMBER;
    //   
    //    --+PY21520. JDG
    //   V_MENSAJE     VARCHAR2( 500 );
    // 
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'RJ', 'AP') THEN
    //     RAISE ESTADO_NO_VALIDO;
    //  END IF;
    //  
    //  
    //    --PY 10608
    //   
    //   BEGIN 
    //     SELECT  COUNT(*)
    //      INTO V_INCONSI
    //      FROM ANTTINSOLI,ANTTINCONS A
    //      WHERE INSOLI_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //        AND INSOLI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND INCONS_CONSEC = INSOLI_CONFIN
    //        AND INCONS_TERCER = :CRTSOLICR.SOLICR_NITTER
    //        AND INSOLI_ESTADO = 'AZ';
    //   EXCEPTION WHEN NO_DATA_FOUND  THEN V_INCONSI := 0;
    //   END;
    //   
    //   IF V_INCONSI IS NULL OR V_INCONSI = 0 THEN 
    //    LIB$DTNERFRMA('AL TERCERO NO SE HA LLENADO EL FORMATO DE INCONSISTENCIAS POR FAVOR VALIDAR.');
    //   END IF;
    //   
    //  
    //  --PY 10608
    //  
    // 
    //   IF :CRTSOLICR.SOLICR_USCRED IS NULL THEN -- CUOP
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO TIENE ANALISTA DE CRÉDITO ASIGNADO');
    //   END IF;
    //   --
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NULL THEN -- CUOP
    //    GO_ITEM('CRTSOLICR.SOLICR_FECRADI');
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO HA SIDO RADICADA');
    //   END IF;
    // 
    //   IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0 THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // /*
    //  IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // */
    // :CRTSOLICR.SOLICR_FAPRCR := TRUNC (SYSDATE);
    // :CRTSOLICR.SOLICR_FECVIG := TRUNC (SYSDATE);
    // 
    // 
    //  IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    //  THEN
    //         LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //         GO_BLOCK('SOLOBS');
    //         LAST_RECORD;
    //         :VARIABLE.VAR_ESTADO := V_ESTADO;
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // 
    //  --+PY21520. JDG.
    //  IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //    RAISE FORM_TRIGGER_FAILURE;
    //  
    //  END IF; 
    // 
    //  IF PUP_FIRMAS_REQUERIDAS = 'FALLO' THEN
    //  
    //   LIB$DTNERFRMA( 'ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.');
    //  
    //  END IF; 
    // 
    //  IF PUP_VALIDA_ANALISTA( V_MENSAJE ) = 'FALLO' THEN
    //   
    //    LIB$DTNERFRMA( V_MENSAJE );
    //  
    //  END IF;
    //  
    //  ---
    // 
    //  IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APLAZAR LA SOLICITUD') = 1 THEN
    // 
    //     -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //               'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //         V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //    :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //   -- :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //   
    //   
    //   
    //    BEGIN
    //         SELECT C.INCONS_CONSEC
    //         INTO VCONSEC
    //         FROM ANTTINSOLI S,ANTTINCONS C
    //           WHERE S.INSOLI_CONFIN = C.INCONS_CONSEC
    //             AND S.INSOLI_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //             AND S.INSOLI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //             AND C.INCONS_INESTA = 'A'
    //             AND INSOLI_ESTADO =  V_ESTADO
    //               AND C.INCONS_FREGIS = (SELECT MAX(INCONS_FREGIS)
    //                                  FROM ANTTINCONS,ANTTINSOLI
    //                                  WHERE INSOLI_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //                                    AND INSOLI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //                                    AND INSOLI_CONFIN = INCONS_CONSEC
    //                                    AND INSOLI_ESTADO = V_ESTADO
    //                                 )
    //             ;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN VCONSEC := NULL;
    //      END;
    // 
    //    IF VCONSEC IS NOT NULL THEN
    //      UPDATE  ANTTINCONS SET INCONS_INESTA = 'F' WHERE INCONS_CONSEC = VCONSEC;
    //    END IF;
    //   
    //   
    //   
    //   
    //    :GLOBAL.ACTUALIZAR := 'SI';
    //    COMMIT_FORM;
    //    --
    //    --ENVIO DE CORREO AL COMERCIAL
    //    --
    //    PBD_COL_GRACION_MAIL (:CRTSOLICR.SOLICR_OFCSOL,
    //                           :CRTSOLICR.SOLICR_CODSOL,
    //                           :CRTSOLICR.SOLICR_TIPCRE,
    //                           :BASE.USUARIO,
    //                           NULL,
    //                           :SYSTEM.CURRENT_FORM,
    //                           'AZ',
    //                           :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                         );
    //    GO_BLOCK('CRTSOLICR');
    //    EXECUTE_QUERY;
    //    IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //       GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //    END IF;
    //  ELSE
    //    LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APLAZADA',NULL,NULL,NULL, T_RESPUESTA);
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
    async CRFSOLCR_variable_btnAplazar_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnAplazar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AZ';
        let ESTADO_NO_VALIDO: null = null;
        let V_INCONSI: number = null;
        let VCONSEC: number = null;
        let V_MENSAJE: string = null;
        try {

            if (["EC", "RJ", "AP"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnaplazar_whenbuttonpressed_query1", payload1);
            // get values from result
            V_INCONSI = result1[0].get("V_INCONSI");
            if (result1 == null || result1.length == 0) {

                V_INCONSI = 0;
            }

            if (((V_INCONSI == null) || V_INCONSI == 0)) {
                // CRFSOLCR_LIB$DTNERFRMA("AL TERCERO NO SE HA LLENADO EL FORMATO DE INCONSISTENCIAS POR FAVOR VALIDAR.");
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // this.CRTSOLICR.SOLICR_FAPRCR = TRUNC(PLSQLBuiltins.sysdate());
            // this.CRTSOLICR.SOLICR_FECVIG = TRUNC(PLSQLBuiltins.sysdate());
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_FIRMAS_REQUERIDAS == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA("ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.");
            // }
            // if (PUP_VALIDA_ANALISTA(V_MENSAJE) == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA(V_MENSAJE);
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APLAZAR LA SOLICITUD") == 1) {
            //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     // construct payload
            //     let payload2 = new Map();
            //     payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            //     payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            //     // call REST API
            //     const result2 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnaplazar_whenbuttonpressed_query2", payload2);
            //     // get values from result
            //     VCONSEC = result2[0].get("VCONSEC");
            //     if (result2 == null || result2.length == 0) {

            //         VCONSEC = null;
            //     }

            //     if ((VCONSEC != null)) {
            //         // construct payload
            //         let payload3 = new Map();
            //         // call REST API
            //         const result3 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnaplazar_whenbuttonpressed_query3", payload3);
            //     }
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     // CRFSOLCR_PBD_COL_GRACION_MAIL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, BASE.USUARIO, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), "AZ", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APLAZADA", null, null, null, T_RESPUESTA);
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCR_variable_btnAplazar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIOS';
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '13';
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCR_variable_locararios_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_locararios_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIOS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "13";
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCR_variable_locararios_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_ESTSOL <> 'RE' AND :CTRSOLICR2.SOLICR_OBSREC IS NOT NULL THEN
    //    :CTRSOLICR2.SOLICR_OBSREC := NULL;
    //    COMMIT_FORM;
    // END IF;
    // HIDE_VIEW('CANVAS14');
    // GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFSOLCR_variable_devolver_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_devolver_whenButtonPressed");
        if ((this.CRTSOLICR.SOLICR_ESTSOL != "RE" && (this.CTRSOLICR2.SOLICR_OBSREC != null))) {
            this.CTRSOLICR2.SOLICR_OBSREC = null;
            this.oracleFormsBuiltins.commit_form();
        }
        this.oracleFormsBuiltins.hide_view("CANVAS14");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFSOLCR_variable_devolver_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //  V_SOLICR_ESTFIR        CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //  V_SOLICR_CODUS1        CRTSOLICR.SOLICR_CODUS1%TYPE;
    //  V_SOLICR_MOINA1        CRTSOLICR.SOLICR_MOINA1%TYPE;
    //  V_SOLICR_MOSUA1        CRTSOLICR.SOLICR_MOSUA1%TYPE;
    //  V_SOLICR_FEFIU1        CRTSOLICR.SOLICR_FEFIU1%TYPE;
    //  V_SOLICR_CODUS2        CRTSOLICR.SOLICR_CODUS2%TYPE;
    //  V_SOLICR_MOINA2        CRTSOLICR.SOLICR_MOINA2%TYPE;
    //  V_SOLICR_MOSUA2        CRTSOLICR.SOLICR_MOSUA2%TYPE;
    //  V_SOLICR_FEFIU2        CRTSOLICR.SOLICR_FEFIU2%TYPE;
    //  V_SOLICR_CODUS3        CRTSOLICR.SOLICR_CODUS3%TYPE;
    //  V_SOLICR_MOINA3        CRTSOLICR.SOLICR_MOINA3%TYPE;
    //  V_SOLICR_MOSUA3        CRTSOLICR.SOLICR_MOSUA3%TYPE;
    //  V_SOLICR_FEFIU3        CRTSOLICR.SOLICR_FEFIU3%TYPE;
    //   
    //   BEGIN
    //    
    //    --+PY21520. JDG. 2018.01.21
    //    --+PY21520. JDG. 2018.01.24
    //    --IF :CRTSOLICR.SOLICR_ESTSOL = 'EC' THEN
    //     IF :CRTSOLICR.SOLICR_ESTSOL IN ( 'EC', 'RJ' ) THEN
    //    --+
    //    
    //     BEGIN
    //     
    //      SELECT SOLICR_ESTFIR
    //         INTO V_SOLICR_ESTFIR
    //         FROM CRTSOLICR
    //        WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //          AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          --+PY21520. JDG. 2018.01.24
    //          --AND SOLICR_ESTSOL = 'EC';
    //          AND SOLICR_ESTSOL IN ( 'EC', 'RJ' );
    //          --+
    //          
    //      EXCEPTION 
    //       
    //       WHEN OTHERS THEN
    //       
    //         V_SOLICR_ESTFIR := NULL;
    //       
    //      END;  
    //         
    //      IF NVL( :CRTSOLICR.SOLICR_ESTFIR, 'X' ) <> NVL( V_SOLICR_ESTFIR, 'X' ) OR
    //       :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL OR :CRTSOLICR.SOLICR_MOINA1 IS NOT NULL OR :CRTSOLICR.SOLICR_MOSUA1 IS NOT NULL OR :CRTSOLICR.SOLICR_FEFIU1 IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL OR :CRTSOLICR.SOLICR_MOINA2 IS NOT NULL OR :CRTSOLICR.SOLICR_MOSUA2 IS NOT NULL OR :CRTSOLICR.SOLICR_FEFIU2 IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL OR :CRTSOLICR.SOLICR_MOINA3 IS NOT NULL OR :CRTSOLICR.SOLICR_MOSUA3 IS NOT NULL OR :CRTSOLICR.SOLICR_FEFIU3 IS NOT NULL THEN
    //        
    //     IF :CRTSOLICR.SOLICR_MOINA1 IS NULL AND :CRTSOLICR.SOLICR_MOSUA1 IS NULL AND :CRTSOLICR.SOLICR_FEFIU1 IS NULL THEN
    //        
    //      :CRTSOLICR.SOLICR_CODUS1 := NULL;
    //       :CRTSOLICR.DESCRI_CODUS1 := NULL;
    //        
    //     END IF;
    //       
    //      IF :CRTSOLICR.SOLICR_MOINA2 IS NULL AND :CRTSOLICR.SOLICR_MOSUA2 IS NULL AND :CRTSOLICR.SOLICR_FEFIU2 IS NULL THEN
    //       
    //       :CRTSOLICR.SOLICR_CODUS2 := NULL;
    //       :CRTSOLICR.DESCRI_CODUS2 := NULL;
    //       
    //      END IF;
    //      
    //      IF :CRTSOLICR.SOLICR_MOINA3 IS NULL AND :CRTSOLICR.SOLICR_MOSUA3 IS NULL AND :CRTSOLICR.SOLICR_FEFIU3 IS NULL THEN
    //       
    //       :CRTSOLICR.SOLICR_CODUS3 := NULL;
    //       :CRTSOLICR.DESCRI_CODUS3 := NULL;
    //       
    //      END IF;
    //        
    //      V_MENSAJE := 'SOLICITUD: ';
    //     
    //     IF :CRTSOLICR.SOLICR_ESTFIR IS NULL THEN
    //      
    //      V_MENSAJE := V_MENSAJE || 'SIN NUEVO ESTADO. ';
    //      
    //     END IF; 
    //     
    //     IF PUP_FIRMAS_REQUERIDAS = 'FALLO' THEN
    //       
    //      V_MENSAJE := V_MENSAJE || 'SIN NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS. ';
    //      
    //     END IF; 
    //    
    //       IF V_MENSAJE = 'SOLICITUD: ' THEN
    //    
    //       V_MENSAJE := 'SOLICITUD CON NUEVO ESTADO Y NÚMERO MÍNIMO REQUERIDO DE FIRMAS ELECTRÓNICAS. PUEDE INICIAR PROCESO DE CAMBIO DE ESTADO.';
    //     
    //      ELSE
    //       
    //        V_MENSAJE := V_MENSAJE || 'DEBERÁ COMPLETAR ÉSTA INFORMACIÓN PARA INICIAR PROCESO DE CAMBIO DE ESTADO.';     
    //      
    //      END IF;
    //      
    //      IF :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL AND  
    //      :CRTSOLICR.SOLICR_CODUS1 IS NULL AND :CRTSOLICR.SOLICR_MOINA1 IS NULL AND :CRTSOLICR.SOLICR_MOSUA1 IS NULL AND :CRTSOLICR.SOLICR_FEFIU1 IS NULL AND
    //      :CRTSOLICR.SOLICR_CODUS2 IS NULL AND :CRTSOLICR.SOLICR_MOINA2 IS NULL AND :CRTSOLICR.SOLICR_MOSUA2 IS NULL AND :CRTSOLICR.SOLICR_FEFIU2 IS NULL AND
    //      :CRTSOLICR.SOLICR_CODUS3 IS NULL AND :CRTSOLICR.SOLICR_MOINA3 IS NULL AND :CRTSOLICR.SOLICR_MOSUA3 IS NULL AND :CRTSOLICR.SOLICR_FEFIU3 IS NULL THEN
    //      
    //      LIB$ALERTA( 'MENSAJE', 'ESTADO DE SOLICITUD FIJADA. SI GUARDA ESTE CAMBIO, SE INICIARÁ PROCESO DE FIRMAS ELECTRÓNICAS Y YA NO PODRÁ ACTUALIZAR LA SOLICITUD A EXCEPCIÓN DE UNOS POCOS CAMPOS. ¿QUE ACCIÓN DESEA REALIZAR?', 'GUARDAR Y SALIR', 'SALIR', NULL, T_RESPUESTA );  
    //      
    //      IF T_RESPUESTA = 1 THEN
    //       
    //       --LIB$ALERTA( 'MENSAJE','MENSAJE SOLICR_ESTFIR6 FALSE ' || :CRTSOLICR.SOLICR_CODSOL || ':' || :CRTSOLICR.SOLICR_ESTSOL, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //        
    //       SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_ESTFIR', "ENABLED", "PROPERTY_FALSE" );
    //      
    //      ELSE
    //       
    //       :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //       
    //      END IF; 
    //      
    //     ELSE  
    //       
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );  
    //       
    //     END IF;  
    //     
    //     COMMIT_FORM;
    //      
    //    END IF; 
    //   
    //    --+PY21520. JDG. 2018.01.21
    //   END IF;  
    //   --+  
    //       
    //     GO_ITEM( 'CRTSOLICR.SOLICR_EXPCLI' );  
    // 
    //     --+PY21520. JDG.    
    //     :GLOBAL.MOSTRARMENSAJEFIRMAS := 'N';
    //     PUP_MENSAJE_FIRMAS;
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.VARIABLE.BTN_REGFRMXF.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_variable_btnRegfrmxf_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnRegfrmxf_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_SOLICR_ESTFIR: null = null;
        let V_SOLICR_CODUS1: null = null;
        let V_SOLICR_MOINA1: null = null;
        let V_SOLICR_MOSUA1: null = null;
        let V_SOLICR_FEFIU1: null = null;
        let V_SOLICR_CODUS2: null = null;
        let V_SOLICR_MOINA2: null = null;
        let V_SOLICR_MOSUA2: null = null;
        let V_SOLICR_FEFIU2: null = null;
        let V_SOLICR_CODUS3: null = null;
        let V_SOLICR_MOINA3: null = null;
        let V_SOLICR_MOSUA3: null = null;
        let V_SOLICR_FEFIU3: null = null;
        try {

            if (["EC", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    // call REST API
                    const result1 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnregfrmxf_whenbuttonpressed_query1", payload1);
                    // get values from result
                    V_SOLICR_ESTFIR = result1[0].get("V_SOLICR_ESTFIR");
                } catch (ex) {

                    V_SOLICR_ESTFIR = null;
                }

                if (((((((((((((this.CRTSOLICR.SOLICR_ESTFIR == null ? "X" : this.CRTSOLICR.SOLICR_ESTFIR != V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR || (this.CRTSOLICR.SOLICR_CODUS1 != null)) || (this.CRTSOLICR.SOLICR_MOINA1 != null)) || (this.CRTSOLICR.SOLICR_MOSUA1 != null)) || (this.CRTSOLICR.SOLICR_FEFIU1 != null)) || (this.CRTSOLICR.SOLICR_CODUS2 != null)) || (this.CRTSOLICR.SOLICR_MOINA2 != null)) || (this.CRTSOLICR.SOLICR_MOSUA2 != null)) || (this.CRTSOLICR.SOLICR_FEFIU2 != null)) || (this.CRTSOLICR.SOLICR_CODUS3 != null)) || (this.CRTSOLICR.SOLICR_MOINA3 != null)) || (this.CRTSOLICR.SOLICR_MOSUA3 != null)) || (this.CRTSOLICR.SOLICR_FEFIU3 != null))) {
                    if ((((this.CRTSOLICR.SOLICR_MOINA1 == null) && (this.CRTSOLICR.SOLICR_MOSUA1 == null)) && (this.CRTSOLICR.SOLICR_FEFIU1 == null))) {
                        this.CRTSOLICR.SOLICR_CODUS1 = null;
                        this.CRTSOLICR.DESCRI_CODUS1 = null;
                    }
                    if ((((this.CRTSOLICR.SOLICR_MOINA2 == null) && (this.CRTSOLICR.SOLICR_MOSUA2 == null)) && (this.CRTSOLICR.SOLICR_FEFIU2 == null))) {
                        this.CRTSOLICR.SOLICR_CODUS2 = null;
                        this.CRTSOLICR.DESCRI_CODUS2 = null;
                    }
                    if ((((this.CRTSOLICR.SOLICR_MOINA3 == null) && (this.CRTSOLICR.SOLICR_MOSUA3 == null)) && (this.CRTSOLICR.SOLICR_FEFIU3 == null))) {
                        this.CRTSOLICR.SOLICR_CODUS3 = null;
                        this.CRTSOLICR.DESCRI_CODUS3 = null;
                    }
                    V_MENSAJE = "SOLICITUD: ";
                    if ((this.CRTSOLICR.SOLICR_ESTFIR == null)) {
                        V_MENSAJE = V_MENSAJE + "SIN NUEVO ESTADO. ";
                    }
                    // if (PUP_FIRMAS_REQUERIDAS == "FALLO") {
                    //     V_MENSAJE = V_MENSAJE + "SIN NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS. ";
                    // }
                    if (V_MENSAJE == "SOLICITUD: ") {
                        V_MENSAJE = "SOLICITUD CON NUEVO ESTADO Y NÚMERO MÍNIMO REQUERIDO DE FIRMAS ELECTRÓNICAS. PUEDE INICIAR PROCESO DE CAMBIO DE ESTADO.";
                    }
                    else {
                        V_MENSAJE = V_MENSAJE + "DEBERÁ COMPLETAR ÉSTA INFORMACIÓN PARA INICIAR PROCESO DE CAMBIO DE ESTADO.";
                    }
                    if ((((((((((((((this.CRTSOLICR.SOLICR_ESTFIR != null) && (this.CRTSOLICR.SOLICR_CODUS1 == null)) && (this.CRTSOLICR.SOLICR_MOINA1 == null)) && (this.CRTSOLICR.SOLICR_MOSUA1 == null)) && (this.CRTSOLICR.SOLICR_FEFIU1 == null)) && (this.CRTSOLICR.SOLICR_CODUS2 == null)) && (this.CRTSOLICR.SOLICR_MOINA2 == null)) && (this.CRTSOLICR.SOLICR_MOSUA2 == null)) && (this.CRTSOLICR.SOLICR_FEFIU2 == null)) && (this.CRTSOLICR.SOLICR_CODUS3 == null)) && (this.CRTSOLICR.SOLICR_MOINA3 == null)) && (this.CRTSOLICR.SOLICR_MOSUA3 == null)) && (this.CRTSOLICR.SOLICR_FEFIU3 == null))) {
                        // CRFSOLCR_LIB$ALERTA("MENSAJE", "ESTADO DE SOLICITUD FIJADA. SI GUARDA ESTE CAMBIO, SE INICIARÁ PROCESO DE FIRMAS ELECTRÓNICAS Y YA NO PODRÁ ACTUALIZAR LA SOLICITUD A EXCEPCIÓN DE UNOS POCOS CAMPOS. ¿QUE ACCIÓN DESEA REALIZAR?", "GUARDAR Y SALIR", "SALIR", null, T_RESPUESTA);
                        if (T_RESPUESTA == 1) {
                            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ESTFIR", "ENABLED", "PROPERTY_FALSE");
                        }
                        else {
                            this.CRTSOLICR.SOLICR_ESTFIR = null;
                        }
                    }
                    else {
                        // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                    }
                    this.oracleFormsBuiltins.commit_form();
                }
            }
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_EXPCLI");
            // this.GLOBAL.MOSTRARMENSAJEFIRMAS = "N";
            // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.VARIABLE.BTN_REGFRMXF.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_variable_btnRegfrmxf_whenButtonPressed");
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
    //                    || 'CRFSOLCR.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_variable_btnRegfrmxg_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnRegfrmxg_whenButtonPressed");
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
                    const result1 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnregfrmxg_whenbuttonpressed_query1", payload1);
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
            const result2 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnregfrmxg_whenbuttonpressed_query2", payload2);
            // get values from result
            this.CRTSOLICR.DESCRI_TOTPRE = result2[0].get("CRTSOLICR.DESCRI_TOTPRE");
            this.oracleFormsBuiltins.hide_window("WINDOWG");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_HIPTCA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_variable_btnRegfrmxg_whenButtonPressed");
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
    // :VARIABLE.TIPO_VINCULA := '05';
    // 
    // --+PY21520. JDG.
    // GO_ITEM( 'CRTOTERSOL1.OTERSOL_NITTER' ); END;
    //#endregion
    async CRFSOLCR_variable_locppal_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_locppal_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        this.oracleFormsBuiltins.go_item("CRTOTERSOL1.OTERSOL_NITTER");
        console.log("Exiting CRFSOLCR_variable_locppal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // HIDE_VIEW('CANVAS12');
    // SHOW_VIEW('CANVAS8');
    // GO_BLOCK('VARIABLE');
    // --GO_ITEM ('VARIABLE.PROVEXT'); END;
    //#endregion
    async CRFSOLCR_variable_volverTerext_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_volverTerext_whenButtonPressed");
        console.log("Exiting CRFSOLCR_variable_volverTerext_whenButtonPressed");
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
    async CRFSOLCR_variable_aval_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_aval_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFSOLCR_variable_aval_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // BEGIN
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    // //     RUN_PRODUCT(REPORTS,'CRRLIBACT',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async CRFSOLCR_variable_impLibact_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_impLibact_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "CRRLIBACT", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting CRFSOLCR_variable_impLibact_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AP';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //  
    //  --+PY21248. JDG
    //   V_GETCO_ESTBLQ    VARCHAR2( 15 );
    // 
    //    --+PY21520. JDG
    //   V_MENSAJE     VARCHAR2( 500 );
    //  
    // BEGIN
    //     
    //   --+PY21248. JDG
    //   --SE CONTROLA SI TERCERO DE LA SOLICITUD PERTENECE A GRUPOS ECONÓMICOS TOP 30
    //   --Y SI ES ASÍ SE BLOQUEA AUTOMÁTICAMENTE Y SE ALERTA CON MENSAJE AL USUARIO DE ESTA FORMA
    //   --Y SE ENVÍA DETALLE DEL CONTROL A LOS CORREOS ELECTRÓNICOS DEL USUARIO QUE MANEJA ESTA
    //   --FORMA Y A SU(S) JEFE(S).
    //   IF FBDCONTROLGETOP30( V_GETCO_ESTBLQ ) = 'FALLO' THEN
    //    
    //      V_MENSAJE := 'FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30';
    //                           
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //             
    //   END IF;
    // 
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 30 DE JUNIO DE 2005
    //   --
    // 
    //  --PY 14234
    //  PU_VALIDA_RESERVA;   
    //  --PY 14234    
    // 
    //  --8022-7981--9342
    //  IF :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN 
    //   PU_VALRIO;
    //  END IF;   
    //     
    //     
    //     
    //   IF  :CRTSOLICR.SOLICR_CLASAC = 'U'  AND :CRTSOLICR.SOLICR_VPAVAL IS NULL THEN
    //     LIB$DTNERFRMA('EL PORCENTAJE DE VALOR AVALÚO NO HA SIDO DILINGENCIADO');
    //   END IF;
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL <>'RJ'  
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    //    PU_VALIDE_SECTOR;
    //   IF :CRTSOLICR.SOLICR_USCRED IS NULL THEN -- CUOP
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO TIENE ANALISTA DE CRÉDITO ASIGNADO');
    //   END IF;
    //   --
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NULL THEN -- CUOP
    //    GO_ITEM('CRTSOLICR.SOLICR_FECRADI');
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO HA SIDO RADICADA');
    //   END IF;
    // 
    // 
    // IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // --
    // -- CUOP
    // IF :CRTSOLICR.SOLICR_APGARA IS NULL THEN
    //  GO_ITEM('CRTSOLICR.SOLICR_APGARA');
    //  LIB$ALERTA('MENSAJE','ENTRE LA MODALIDAD DE GARANTÍAS','ACEPTAR',NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //      LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //      GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //      RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // */
    // :CRTSOLICR.SOLICR_FAPRCR := TRUNC (SYSDATE);
    // :CRTSOLICR.SOLICR_FECVIG := TRUNC (SYSDATE);
    // 
    // 
    // 
    // IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    // THEN
    //         LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //         GO_BLOCK('SOLOBS');
    //         LAST_RECORD;
    //         :VARIABLE.VAR_ESTADO := V_ESTADO;
    //         RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //  RAISE FORM_TRIGGER_FAILURE;
    //  
    // END IF; 
    // 
    // IF PUP_FIRMAS_REQUERIDAS = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( 'ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.');
    //  
    // END IF; 
    // 
    // IF PUP_VALIDA_ANALISTA( V_MENSAJE ) = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( V_MENSAJE );
    //  
    // END IF;
    // 
    // ---
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    // 
    //     -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //                'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL, 
    //          V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )')); 
    //     
    //     :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //     :CRTSOLICR.SOLICR_TIPAPR := 'AJ';
    //     :GLOBAL.ACTUALIZAR := 'SI';
    //     COMMIT_FORM;
    //     --
    //     --ENVIO DE CORREO AL COMERCIAL
    //     --
    //     PBD_COL_GRACION_MAIL (:CRTSOLICR.SOLICR_OFCSOL,
    //                           :CRTSOLICR.SOLICR_CODSOL,
    //                           :CRTSOLICR.SOLICR_TIPCRE,
    //                           :BASE.USUARIO,
    //                           NULL,
    //                           :SYSTEM.CURRENT_FORM,
    //                           'AJ',
    //                           :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                         );
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
    //     
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    //      :CRTSOLICR.SOLICR_VRFINCR := NULL;
    //      :CRTSOLICR.SOLICR_FAPRCR  := NULL;
    //      :CRTSOLICR.SOLICR_VPAVAL  := NULL;
    // END IF;
    // 
    // EXCEPTION
    //      WHEN ESTADO_NO_VALIDO THEN
    //           LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //           RAISE FORM_TRIGGER_FAILURE;
    //      WHEN OTHERS THEN
    //    NULL;
    // END;
    //#endregion
    async CRFSOLCR_variable_btnAprjta_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnAprjta_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AP';
        let ESTADO_NO_VALIDO: null = null;
        let V_GETCO_ESTBLQ: string = null;
        let V_MENSAJE: string = null;
        try {

            // if (FBDCONTROLGETOP30(V_GETCO_ESTBLQ) == "FALLO") {
            //     V_MENSAJE = "FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30";
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
            // CRFSOLCR_PU_VALIDA_RESERVA();
            if (this.CRTSOLICR.SOLICR_CODPRO == "FVZ") {
                // CRFSOLCR_PU_VALRIO();
            }
            if ((this.CRTSOLICR.SOLICR_CLASAC == "U" && (this.CRTSOLICR.SOLICR_VPAVAL == null))) {
                // CRFSOLCR_LIB$DTNERFRMA("EL PORCENTAJE DE VALOR AVALÚO NO HA SIDO DILINGENCIADO");
            }
            if (this.CRTSOLICR.SOLICR_ESTSOL != "RJ") {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            // CRFSOLCR_PU_VALIDE_SECTOR();
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_APGARA == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_APGARA");
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "ENTRE LA MODALIDAD DE GARANTÍAS", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // this.CRTSOLICR.SOLICR_FAPRCR = TRUNC(PLSQLBuiltins.sysdate());
            // this.CRTSOLICR.SOLICR_FECVIG = TRUNC(PLSQLBuiltins.sysdate());
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_FIRMAS_REQUERIDAS == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA("ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.");
            // }
            // if (PUP_VALIDA_ANALISTA(V_MENSAJE) == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA(V_MENSAJE);
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
            //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR.SOLICR_TIPAPR = "AJ";
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     // CRFSOLCR_PBD_COL_GRACION_MAIL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, BASE.USUARIO, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), "AJ", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
            //     this.CRTSOLICR.SOLICR_VRFINCR = null;
            //     this.CRTSOLICR.SOLICR_FAPRCR = null;
            //     this.CRTSOLICR.SOLICR_VPAVAL = null;
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCR_variable_btnAprjta_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   CURSOR PLANEA IS 
    //    SELECT CONTROL_OFCSOL, 
    //          CONTROL_CODSOL, 
    //         CONTROL_TIPCRE,
    //       CONTROL_PLANEA,
    //       CONTROL_ESTGRL 
    //   FROM CRTCONTROL
    //   WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL
    //     AND  CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL
    //    FOR UPDATE OF CONTROL_ESTGRL;
    //   
    //   
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AN';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //   V_EXISTE          NUMBER;
    // 
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AP', 'RJ', 'NG', 'AZ') 
    //   THEN
    //      RAISE ESTADO_NO_VALIDO;
    //  END IF;
    // 
    //   IF :CRTSOLICR.SOLICR_USCRED IS NULL THEN -- CUOP
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO TIENE ANALISTA DE CRÉDITO ASIGNADO');
    //   END IF;
    //   --
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NULL THEN -- CUOP
    //    GO_ITEM('CRTSOLICR.SOLICR_FECRADI');
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO HA SIDO RADICADA');
    //   END IF;
    //   
    //    IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0 THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // */
    // :CRTSOLICR.SOLICR_FAPRCR := TRUNC (SYSDATE);
    // :CRTSOLICR.SOLICR_FECVIG := TRUNC (SYSDATE);
    // 
    // 
    // IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    // THEN
    //         LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //         GO_BLOCK('SOLOBS');
    //         LAST_RECORD;
    //         :VARIABLE.VAR_ESTADO := V_ESTADO;
    //         RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //  RAISE FORM_TRIGGER_FAILURE;
    //  
    // END IF; 
    // 
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD') = 1 THEN
    // 
    //  --- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //      FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //                           'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //                             V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //      :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //     -- :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //      :GLOBAL.ACTUALIZAR := 'SI';
    //        
    //  --- ACTUALIZA EL ESTADO DE PLANEACIONES A AN EN CASO DE QUE VENGA DE UNA RECONSIDERACIÓN
    //   
    //     BEGIN
    //     SELECT COUNT(9)
    //      INTO V_EXISTE
    //   FROM CRTCONTROL
    //   WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL
    //      AND  CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN 
    //      V_EXISTE := 0;
    //    END;
    //     
    //    IF V_EXISTE >= 1 THEN
    //     
    //      FOR ACT IN PLANEA LOOP
    //        UPDATE CRTCONTROL
    //         SET CONTROL_ESTGRL='AN'
    //      WHERE CURRENT OF PLANEA;
    //     END LOOP;
    //     COMMIT;
    //    END IF;
    //   COMMIT_FORM;
    //     --
    //     --ENVIO DE CORREO AL COMERCIAL
    //     --
    //     PBD_COL_GRACION_MAIL (:CRTSOLICR.SOLICR_OFCSOL,
    //                           :CRTSOLICR.SOLICR_CODSOL,
    //                           :CRTSOLICR.SOLICR_TIPCRE,
    //                           :BASE.USUARIO,
    //                           NULL,
    //                           :SYSTEM.CURRENT_FORM,
    //                           'AN',
    //                           :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                         );   
    //   GO_BLOCK('CRTSOLICR');
    //   EXECUTE_QUERY;
    //   
    //   IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //       GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //   END IF;
    //   
    //   ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO ANULADA',NULL,NULL,NULL, T_RESPUESTA);
    //   END IF;
    // 
    //  EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     WHEN OTHERS THEN
    //  NULL;
    // END;
    //#endregion
    async CRFSOLCR_variable_btnAnular_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnAnular_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AN';
        let ESTADO_NO_VALIDO: null = null;
        let V_EXISTE: number = null;
        try {

            if (["EC", "AP", "RJ", "NG", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // this.CRTSOLICR.SOLICR_FAPRCR = TRUNC(PLSQLBuiltins.sysdate());
            // this.CRTSOLICR.SOLICR_FECVIG = TRUNC(PLSQLBuiltins.sysdate());
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD") == 1) {
            //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     // construct payload
            //     let payload1 = new Map();
            //     payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            //     payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            //     // call REST API
            //     const result1 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnanular_whenbuttonpressed_query1", payload1);
            //     // get values from result
            //     V_EXISTE = result1[0].get("V_EXISTE");
            //     if (result1 == null || result1.length == 0) {

            //         V_EXISTE = 0;
            //     }

            //     if (V_EXISTE >= 1) {
            //     }
            //     this.oracleFormsBuiltins.commit_form();
            //     // CRFSOLCR_PBD_COL_GRACION_MAIL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, BASE.USUARIO, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), "AN", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO ANULADA", null, null, null, T_RESPUESTA);
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCR_variable_btnAnular_whenButtonPressed");
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
    //                    || 'CRFSOLCR.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_variable_btnMasprendas_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnMasprendas_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTGAADSO.GAADSO_CONSEC");
            this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_variable_btnMasprendas_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'SOLICITUD';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;        
    // END;
    // ----------------------------------------------------------------------------------------------------------
    // 
    // 
    // 
    // 
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AP';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //  
    //   --+PY21248. JDG
    //   V_GETCO_ESTBLQ   VARCHAR2( 15 );
    //   
    //   --+PY21520. JDG
    //   V_MENSAJE     VARCHAR2( 500 );
    // 
    // BEGIN
    //     
    //   --+PY21248. JDG
    //   --SE CONTROLA SI TERCERO DE LA SOLICITUD PERTENECE A GRUPOS ECONÓMICOS TOP 30
    //   --Y SI ES ASÍ SE BLOQUEA AUTOMÁTICAMENTE Y SE ALERTA CON MENSAJE AL USUARIO DE ESTA FORMA
    //   --Y SE ENVÍA DETALLE DEL CONTROL A LOS CORREOS ELECTRÓNICOS DEL USUARIO QUE MANEJA ESTA
    //   --FORMA Y A SU(S) JEFE(S).
    //   IF FBDCONTROLGETOP30( V_GETCO_ESTBLQ ) = 'FALLO' THEN
    //    
    //      V_MENSAJE := 'FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30';
    //                           
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //             
    //   END IF;
    //   
    //   -- 
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 30 DE JUNIO DE 2005   
    //     
    //   --PY 14234
    //  PU_VALIDA_RESERVA;   
    //  --PY 14234    
    //     
    //  
    //  --8022-7981
    //  IF :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN 
    //   PU_VALRIO;
    //  END IF; 
    //  --8022-7981
    //  
    //     
    //     IF  :CRTSOLICR.SOLICR_CLASAC = 'U'  AND :CRTSOLICR.SOLICR_VPAVAL IS NULL THEN
    //     LIB$DTNERFRMA('EL PORCENTAJE DE VALOR AVALÚO NO HA SIDO DILINGENCIADO');
    //     END IF;
    //     
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AZ')  
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    //   
    //   PU_VALIDE_SECTOR;
    //   IF :CRTSOLICR.SOLICR_USCRED IS NULL THEN -- CUOP
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO TIENE ANALISTA DE CRÉDITO ASIGNADO');
    //   END IF;
    //   --
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NULL THEN -- CUOP
    //    GO_ITEM('CRTSOLICR.SOLICR_FECRADI');
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO HA SIDO RADICADA');
    //   END IF;
    //   --
    // 
    // IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // --
    // -- CUOP
    // IF :CRTSOLICR.SOLICR_APGARA IS NULL THEN
    //  GO_ITEM('CRTSOLICR.SOLICR_APGARA');
    //  LIB$ALERTA('MENSAJE','ENTRE LA MODALIDAD DE GARANTÍAS','ACEPTAR',NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //      LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //      GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //      RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // */
    // :CRTSOLICR.SOLICR_FAPRCR := TRUNC (SYSDATE);
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_FECVIG IS NULL THEN
    //      LIB$ALERTA('MENSAJE', 'DEBE DIGITAR FECHA DE VIGENCIA INICIAL DE LA OPERACIÓN',NULL,NULL,NULL, T_RESPUESTA);
    //      GO_ITEM('CRTSOLICR.SOLICR_FECVIG');
    //      RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // */
    // :CRTSOLICR.SOLICR_FECVIG := TRUNC (SYSDATE);
    // 
    // 
    // IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    // THEN
    //         LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //         GO_BLOCK('SOLOBS');
    //         LAST_RECORD;
    //         :VARIABLE.VAR_ESTADO := V_ESTADO;
    //         RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //  RAISE FORM_TRIGGER_FAILURE;
    //  
    // END IF; 
    // 
    // IF PUP_FIRMAS_REQUERIDAS = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( 'ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.' );
    //  
    // END IF; 
    // 
    // IF PUP_VALIDA_ANALISTA( V_MENSAJE ) = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( V_MENSAJE );
    //  
    // END IF; 
    // 
    // ---
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    //  
    //     -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //                'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL, 
    //          V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )')); 
    // 
    //     :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //     :GLOBAL.ACTUALIZAR := 'SI';
    //     COMMIT_FORM;
    //     --
    //     --ENVIO DE CORREO AL COMERCIAL
    //     --
    //     PBD_COL_GRACION_MAIL (:CRTSOLICR.SOLICR_OFCSOL,
    //                           :CRTSOLICR.SOLICR_CODSOL,
    //                           :CRTSOLICR.SOLICR_TIPCRE,
    //                           :BASE.USUARIO,
    //                           NULL,
    //                           :SYSTEM.CURRENT_FORM,
    //                           'AC',
    //                           :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                         );
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
    //   
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    //      :CRTSOLICR.SOLICR_VRFINCR := NULL;
    //      :CRTSOLICR.SOLICR_FAPRCR  := NULL;
    //      :CRTSOLICR.SOLICR_VPAVAL  := NULL;
    // END IF;
    // 
    // EXCEPTION
    //      WHEN ESTADO_NO_VALIDO THEN
    //           LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //           RAISE FORM_TRIGGER_FAILURE;
    //      WHEN OTHERS THEN
    //    NULL;
    // END;
    //#endregion
    async CRFSOLCR_variable_btnAprobar_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnAprobar_whenButtonPressed");
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            V_PARAMETRO = "SOLICITUD";
            // CRFSOLCR_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AP';
        let ESTADO_NO_VALIDO: null = null;
        let V_GETCO_ESTBLQ: string = null;
        let V_MENSAJE: string = null;
        try {

            // if (FBDCONTROLGETOP30(V_GETCO_ESTBLQ) == "FALLO") {
            //     V_MENSAJE = "FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30";
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
            // CRFSOLCR_PU_VALIDA_RESERVA();
            if (this.CRTSOLICR.SOLICR_CODPRO == "FVZ") {
                // CRFSOLCR_PU_VALRIO();
            }
            if ((this.CRTSOLICR.SOLICR_CLASAC == "U" && (this.CRTSOLICR.SOLICR_VPAVAL == null))) {
                // CRFSOLCR_LIB$DTNERFRMA("EL PORCENTAJE DE VALOR AVALÚO NO HA SIDO DILINGENCIADO");
            }
            if (["EC", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            // CRFSOLCR_PU_VALIDE_SECTOR();
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_APGARA == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_APGARA");
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "ENTRE LA MODALIDAD DE GARANTÍAS", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // this.CRTSOLICR.SOLICR_FAPRCR = TRUNC(PLSQLBuiltins.sysdate());
            // this.CRTSOLICR.SOLICR_FECVIG = TRUNC(PLSQLBuiltins.sysdate());
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_FIRMAS_REQUERIDAS == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA("ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.");
            // }
            // if (PUP_VALIDA_ANALISTA(V_MENSAJE) == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA(V_MENSAJE);
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
            //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     // CRFSOLCR_PBD_COL_GRACION_MAIL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, BASE.USUARIO, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), "AC", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
            //     this.CRTSOLICR.SOLICR_VRFINCR = null;
            //     this.CRTSOLICR.SOLICR_FAPRCR = null;
            //     this.CRTSOLICR.SOLICR_VPAVAL = null;
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCR_variable_btnAprobar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    //  V_VALIDANIT   NUMBER;
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    // ---------********************************************-----------------------------------------------------
    // ---- VALIDA QUE EL TERCERO DE LA TABLA DE COTUVPCCV SE ENCUENTRE EN LA TABLA CRTOTERSOL ------------------------------
    // BEGIN
    // BEGIN
    // SELECT  COUNT (OTERSOL_NITTER)
    // INTO V_VALIDANIT
    //   FROM CRTOTERSOL, COTUVPCCV, CRTSOLICR
    //  WHERE   SOLICR_CODVOR  =  UVPCCV_SOLVOR
    //      AND SOLICR_CODUNI  =  UVPCCV_CODUNI
    //      AND SOLICR_CODUNI  =  OTERSOL_CODUNI
    //      AND SOLICR_CODSOL  =  OTERSOL_CODSOL
    //      AND SOLICR_OFCSOL  =  OTERSOL_OFCSOL
    //      AND SOLICR_CODUNI  =  :CRTSOLICR.SOLICR_CODUNI
    //      AND SOLICR_OFCSOL  =  :CRTSOLICR.SOLICR_OFCSOL 
    //      AND SOLICR_CODSOL  =  :CRTSOLICR.SOLICR_CODSOL 
    //      AND OTERSOL_NITTER =  :COTUVPCCV.UVPCCV_TERCOP;
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  V_VALIDANIT := '0';
    //  END;
    // IF  V_VALIDANIT = '0' THEN
    //  LIB$ALERTA( 'MENSAJE', 'LOS NIT DEL PROVEEDOR NACIONAL Y DEL CONCESIONARIO SON DISTINTOS POR FAVOR VALIDAR.   ', 'ACEPTAR', NULL, NULL, V_RESPUESTA ); 
    //       RAISE FORM_TRIGGER_FAILURE;
    // ELSE
    //  --LIB$ALERTA( 'MENSAJE', 'POR FAVOR VALIDAR QUE EL TERCERO  '|| :COTUVPCCV.UVPCCV_TERCOP ||' SE ENCUENTRE REGISTRADO EN LOS PROVEEDORES NACIONALES 2', 'ACEPTAR', NULL, NULL, V_RESPUESTA ); 
    //  NULL;
    // END IF;
    // END;
    // --------------------   ***********************************************************    ---------------------          
    //     V_PARAMETRO := 'SOLICITUD';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;        
    // END;
    // ----------------------------------------------------------------------------------------------------------
    // 
    // 
    // --+PY21520. JDG.
    //   DECLARE 
    //   
    //   CURSOR C_RANGO_CUPO_ACTUAL IS
    //    SELECT UVPAAM_CODIGO, 
    //            UVPAAM_MOINAT, 
    //            UVPAAM_MOSUAT, 
    //            UVPAAM_CANFIR
    //       FROM COTUVPAAM
    //      WHERE UVPAAM_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        AND NVL( :CRTSOLICR.SOLICR_EXPCLI, 0) BETWEEN UVPAAM_MOINAT AND UVPAAM_MOSUAT
    //      ORDER BY UVPAAM_MOINAT ASC, UVPAAM_MOSUAT ASC;
    // 
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //  --+PY25492. JDG
    //  V_USU_CARGO_N         SGUSUARIOS.USU_CARGO_N%TYPE;
    //  --+
    //   
    //   BEGIN
    //    
    //    IF :CRTSOLICR.SOLICR_CODUNI <> '001' AND :CRTSOLICR.SOLICR_TIPCRE = '04' AND NVL( :CRTSOLICR.SOLICR_PUNT$N, 0 ) = 0 THEN 
    //    
    //       LIB$ALERTA( 'MENSAJE', 'LA TASA NOMINAL DE LA SOLICITUD DE CRÉDITO NO PUEDE SER NULA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END IF;
    //     
    //     FOR RANGO IN C_RANGO_CUPO_ACTUAL LOOP
    //     
    //      :COTUVPAAM.UVPAAM_CODIGO := RANGO.UVPAAM_CODIGO;
    //        :COTUVPAAM.UVPAAM_MOINAT := RANGO.UVPAAM_MOINAT;
    //      :COTUVPAAM.UVPAAM_MOSUAT := RANGO.UVPAAM_MOSUAT;
    //      :COTUVPAAM.UVPAAM_CANFIR := RANGO.UVPAAM_CANFIR;
    //      
    //      EXIT WHEN 1 = 1;
    //     
    //     END LOOP; 
    //     
    //     V_MENSAJE := PUP_FIRMAS_REQUERIDAS;
    //     
    //     --+PY25492. JDG. SE OBTIENE CARGO DEL USUARIO ( 'JECR', 'COCR') PARA VISIBILIZAR EL BOTÓN DE BORRAR FIRMAS SIEMPRE Y CUANDO EL ESTADO ACTUAL
    //     --DE LA SOLICITUD SEA 'EC'.
    //     BEGIN
    //      
    //      SELECT USU_CARGO_N
    //        INTO V_USU_CARGO_N
    //        FROM SGUSUARIOS 
    //       WHERE USU_CODIGO = PLSQLBuiltins.user();
    //      
    //     EXCEPTION
    //      
    //      WHEN OTHERS THEN
    //      
    //        V_USU_CARGO_N := NULL;
    //      
    //     END;
    //     
    //     IF NVL( V_USU_CARGO_N, 'X' ) IN ( 'JECR', 'COCR' ) AND :CRTSOLICR.SOLICR_ESTSOL = 'EC' THEN
    //      
    //      SET_ITEM_PROPERTY( 'VARIABLE.BTN_BORRARFIRMAS', "VISIBLE",   "PROPERTY_TRUE" );
    //    SET_ITEM_PROPERTY( 'VARIABLE.BTN_BORRARFIRMAS', "ENABLED",   "PROPERTY_TRUE" );
    //    SET_ITEM_PROPERTY( 'VARIABLE.BTN_BORRARFIRMAS', "NAVIGABLE", "PROPERTY_TRUE" );
    //      
    //     ELSE
    //      
    //      SET_ITEM_PROPERTY( 'VARIABLE.BTN_BORRARFIRMAS', "VISIBLE", "PROPERTY_FALSE" );
    //      
    //     END IF; 
    //     --+
    // 
    //     GO_ITEM('CRTSOLICR.SOLICR_ESTFIR');
    //      
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.VARIABLE.BTN_FIRMAS.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_variable_btnFirmas_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnFirmas_whenButtonPressed");
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        let V_VALIDANIT: number = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                payload1.set("UVPCCV_TERCOP", this.COTUVPCCV.UVPCCV_TERCOP);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnfirmas_whenbuttonpressed_query1", payload1);
                // get values from result
                V_VALIDANIT = result1[0].get("V_VALIDANIT");
            } catch (ex) {

                // V_VALIDANIT = "0";
            }

            // if (V_VALIDANIT == "0") {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LOS NIT DEL PROVEEDOR NACIONAL Y DEL CONCESIONARIO SON DISTINTOS POR FAVOR VALIDAR.   ", "ACEPTAR", null, null, V_RESPUESTA);
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // else {
            // }
            V_PARAMETRO = "SOLICITUD";
            // CRFSOLCR_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_USU_CARGO_N: null = null;
        try {

            if (((this.CRTSOLICR.SOLICR_CODUNI != "001" && this.CRTSOLICR.SOLICR_TIPCRE == "04") && this.CRTSOLICR.SOLICR_PUNT$N == null ? 0 : this.CRTSOLICR.SOLICR_PUNT$N == 0)) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA TASA NOMINAL DE LA SOLICITUD DE CRÉDITO NO PUEDE SER NULA.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // V_MENSAJE = PUP_FIRMAS_REQUERIDAS;
            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                // call REST API
                const result2 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnfirmas_whenbuttonpressed_query2", payload2);
                // get values from result
                V_USU_CARGO_N = result2[0].get("V_USU_CARGO_N");
            } catch (ex) {

                V_USU_CARGO_N = null;
            }

            if ((["JECR", "COCR"].indexOf(V_USU_CARGO_N == null ? "X" : V_USU_CARGO_N) != -1 && this.CRTSOLICR.SOLICR_ESTSOL == "EC")) {
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_BORRARFIRMAS", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_BORRARFIRMAS", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_BORRARFIRMAS", "NAVIGABLE", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_BORRARFIRMAS", "VISIBLE", "PROPERTY_FALSE");
            }
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ESTFIR");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.VARIABLE.BTN_FIRMAS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_variable_btnFirmas_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE,
    //                   :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPVIN, 'T'); END;
    //#endregion
    async CRFSOLCR_variable_crter_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_crter_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        // CRFSOLCR_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE, CRTOTERSOL1.OTERSOL_TIPPER, CRTOTERSOL1.OTERSOL_TIPVIN, "T");
        console.log("Exiting CRFSOLCR_variable_crter_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'RJ';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //  
    //   --+PY21248. JDG
    //   V_GETCO_ESTBLQ   VARCHAR2( 15 );
    //   
    //   --+PY21520. JDG
    //   V_MENSAJE     VARCHAR2( 500 );
    // 
    //  
    // BEGIN
    //     
    //   --+PY21248. JDG
    //   --SE CONTROLA SI TERCERO DE LA SOLICITUD PERTENECE A GRUPOS ECONÓMICOS TOP 30
    //   --Y SI ES ASÍ SE BLOQUEA AUTOMÁTICAMENTE Y SE ALERTA CON MENSAJE AL USUARIO DE ESTA FORMA
    //   --Y SE ENVÍA DETALLE DEL CONTROL A LOS CORREOS ELECTRÓNICOS DEL USUARIO QUE MANEJA ESTA
    //   --FORMA Y A SU(S) JEFE(S).
    //   IF FBDCONTROLGETOP30( V_GETCO_ESTBLQ ) = 'FALLO' THEN
    //    
    //      V_MENSAJE := 'FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30';
    //                           
    //      LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //             
    //   END IF;
    // 
    //   IF ( V_GETCO_ESTBLQ = 'BLOQUEADA' ) THEN
    //    
    //      LIB$DTNERFRMA( 'NO SE PUEDE CONTINUAR CON EL PROCESO DE RECOMENDACIÓN A JUNTA DE ESTA SOLICITUD '
    //             --+PY21248. JDG. ARQUITECTURA
    //             || :CRTSOLICR.SOLICR_CODUNI
    //             || '-'
    //                    || :CRTSOLICR.SOLICR_OFCSOL 
    //                    || '-' 
    //                    || :CRTSOLICR.SOLICR_CODSOL 
    //                    || ' PORQUE SE ENCUENTRA '
    //                    || LOWER( V_GETCO_ESTBLQ )
    //                    || ' POR EL CONTROL DE GRUPOS ECONÓMICOS TOP 30' );  
    //                    
    //   END IF; 
    // 
    //   IF  :CRTSOLICR.SOLICR_CLASAC = 'U'  AND :CRTSOLICR.SOLICR_VPAVAL IS NULL THEN
    //     LIB$DTNERFRMA('EL PORCENTAJE DE VALOR AVALÚO NO HA SIDO DILINGENCIADO');
    //   END IF;
    // 
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    //   IF :CRTSOLICR.SOLICR_USCRED IS NULL THEN -- CUOP
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO TIENE ANALISTA DE CRÉDITO ASIGNADO');
    //   END IF;
    //   --
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NULL THEN -- CUOP
    //    GO_ITEM('CRTSOLICR.SOLICR_FECRADI');
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO HA SIDO RADICADA');
    //   END IF;
    // 
    //   IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0 THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // */
    // :CRTSOLICR.SOLICR_FAPRCR := TRUNC (SYSDATE);
    // :CRTSOLICR.SOLICR_FECVIG := TRUNC (SYSDATE);
    // 
    // IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    // THEN
    //         LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //         GO_BLOCK('SOLOBS');
    //         LAST_RECORD;
    //         :VARIABLE.VAR_ESTADO := V_ESTADO;
    //         RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //  RAISE FORM_TRIGGER_FAILURE;
    //  
    // END IF; 
    // 
    // IF PUP_FIRMAS_REQUERIDAS = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( 'ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.');
    //  
    // END IF; 
    // 
    // IF PUP_VALIDA_ANALISTA( V_MENSAJE ) = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( V_MENSAJE );
    //  
    // END IF;
    // 
    // ---
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA RECOMENDAR PARA JUNTA LA SOLICITUD') = 1 THEN
    // 
    //   -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //   FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //              V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //  -- :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //   :GLOBAL.ACTUALIZAR := 'SI';
    //   
    //   --+PY21520. JDG. 2018.01.24
    //   :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //   --+
    // 
    //   COMMIT_FORM;
    //   --
    //   --ENVIO DE CORREO AL COMERCIAL
    //   --
    //     PBD_COL_GRACION_MAIL (:CRTSOLICR.SOLICR_OFCSOL,
    //                           :CRTSOLICR.SOLICR_CODSOL,
    //                           :CRTSOLICR.SOLICR_TIPCRE,
    //                           :BASE.USUARIO,
    //                           NULL,
    //                           :SYSTEM.CURRENT_FORM,
    //                           'RJ',
    //                           :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                         );
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
    async CRFSOLCR_variable_btnRecom_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnRecom_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'RJ';
        let ESTADO_NO_VALIDO: null = null;
        let V_GETCO_ESTBLQ: string = null;
        let V_MENSAJE: string = null;
        try {

            // if (FBDCONTROLGETOP30(V_GETCO_ESTBLQ) == "FALLO") {
            //     V_MENSAJE = "FALLÓ PROCESO DE VALIDACIÓN DEL TERCERO POR GRUPOS ECONÓMICOS TOP30";
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            // }
            if (V_GETCO_ESTBLQ == "BLOQUEADA") {
                // CRFSOLCR_LIB$DTNERFRMA("NO SE PUEDE CONTINUAR CON EL PROCESO DE RECOMENDACIÓN A JUNTA DE ESTA SOLICITUD " + CRTSOLICR.SOLICR_CODUNI + "-" + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " PORQUE SE ENCUENTRA " + LOWER(V_GETCO_ESTBLQ) + " POR EL CONTROL DE GRUPOS ECONÓMICOS TOP 30");
            }
            if ((this.CRTSOLICR.SOLICR_CLASAC == "U" && (this.CRTSOLICR.SOLICR_VPAVAL == null))) {
                // CRFSOLCR_LIB$DTNERFRMA("EL PORCENTAJE DE VALOR AVALÚO NO HA SIDO DILINGENCIADO");
            }
            if (["EC"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // this.CRTSOLICR.SOLICR_FAPRCR = TRUNC(PLSQLBuiltins.sysdate());
            // this.CRTSOLICR.SOLICR_FECVIG = TRUNC(PLSQLBuiltins.sysdate());
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_FIRMAS_REQUERIDAS == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA("ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.");
            // }
            // if (PUP_VALIDA_ANALISTA(V_MENSAJE) == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA(V_MENSAJE);
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA RECOMENDAR PARA JUNTA LA SOLICITUD") == 1) {
            //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.CRTSOLICR.SOLICR_ESTFIR = null;
            //     this.oracleFormsBuiltins.commit_form();
            //     // CRFSOLCR_PBD_COL_GRACION_MAIL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, BASE.USUARIO, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), "RJ", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO RECOMENDADA PARA JUNTA", null, null, null, T_RESPUESTA);
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCR_variable_btnRecom_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'NG';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //  
    //  --PY 10608
    //  V_INCONSI          NUMBER;
    //  VCONSEC            NUMBER;
    //  --PY 10608
    //  
    //   --+PY21520. JDG
    //   V_MENSAJE     VARCHAR2( 500 );
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AZ', 'RJ') 
    // THEN
    //      RAISE ESTADO_NO_VALIDO;
    // END IF;
    // 
    // 
    //   --PY 10608
    //   
    //   BEGIN 
    //     SELECT  COUNT(*)
    //      INTO V_INCONSI
    //      FROM ANTTINSOLI,ANTTINCONS A
    //      WHERE INSOLI_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //        AND INSOLI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND INCONS_CONSEC = INSOLI_CONFIN
    //        AND INCONS_TERCER = :CRTSOLICR.SOLICR_NITTER
    //        AND INSOLI_ESTADO = 'NG'
    //        AND INSOLI_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //        ;
    //   EXCEPTION WHEN NO_DATA_FOUND  THEN V_INCONSI := 0;
    //   END;
    //   
    //    IF V_INCONSI IS NULL OR V_INCONSI = 0 THEN 
    //    LIB$DTNERFRMA('AL TERCERO NO SE HA LLENADO EL FORMATO DE INCONSISTENCIAS POR FAVOR VALIDAR.');
    //   END IF;
    //   
    //  
    //  --PY 10608
    // 
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_USCRED IS NULL THEN -- CUOP
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO TIENE ANALISTA DE CRÉDITO ASIGNADO');
    //   END IF;
    //   --
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NULL THEN -- CUOP
    //    GO_ITEM('CRTSOLICR.SOLICR_FECRADI');
    //    LIB$DTNERFRMA('LA SOLICITUD '||:CRTSOLICR.SOLICR_OFCSOL||'-'
    //                ||:CRTSOLICR.SOLICR_CODSOL||' NO HA SIDO RADICADA');
    //   END IF;
    //   
    //   
    //   IF  NVL(:CRTSOLICR.SOLICR_VRFINCR, 0) = 0 THEN
    //       LIB$ALERTA('MENSAJE', 'DEBE DIGITAR EL VALOR DE APROBACIÓN ',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_ITEM('CRTSOLICR.SOLICR_VRFINCR');
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    // 
    // /*
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // */
    // :CRTSOLICR.SOLICR_FAPRCR := TRUNC (SYSDATE);
    // :CRTSOLICR.SOLICR_FECVIG := TRUNC (SYSDATE);
    // 
    // 
    // 
    // 
    // IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    // THEN
    //         LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //         GO_BLOCK('SOLOBS');
    //         LAST_RECORD;
    //         :VARIABLE.VAR_ESTADO := V_ESTADO;
    //         RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // --+PY21520. JDG.
    // IF PUP_CAMPOS_REQUERIDOS = 'FALLO' THEN
    //  
    //  RAISE FORM_TRIGGER_FAILURE;
    //  
    // END IF; 
    // 
    // IF PUP_FIRMAS_REQUERIDAS = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( 'ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.');
    //  
    // END IF; 
    // 
    // IF PUP_VALIDA_ANALISTA( V_MENSAJE ) = 'FALLO' THEN
    //  
    //  LIB$DTNERFRMA( V_MENSAJE );
    //  
    // END IF; 
    // 
    // ---
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA NEGAR LA SOLICITUD') = 1 THEN
    // 
    //   -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //   FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //              V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //   :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //  -- :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //   :GLOBAL.ACTUALIZAR := 'SI';
    //   
    //   
    //    BEGIN
    //         SELECT C.INCONS_CONSEC
    //         INTO VCONSEC
    //         FROM ANTTINSOLI S,ANTTINCONS C
    //           WHERE S.INSOLI_CONFIN = C.INCONS_CONSEC
    //             AND S.INSOLI_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //             AND S.INSOLI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //             AND C.INCONS_INESTA = 'A'
    //             AND INSOLI_ESTADO =  V_ESTADO
    //             AND INSOLI_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //               AND C.INCONS_FREGIS = (SELECT MAX(INCONS_FREGIS)
    //                                  FROM ANTTINCONS,ANTTINSOLI
    //                                  WHERE INSOLI_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //                                    AND INSOLI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //                                    AND INSOLI_CONFIN = INCONS_CONSEC
    //                                    AND INSOLI_ESTADO = V_ESTADO
    //                                    AND INSOLI_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                                 )
    //             ;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN VCONSEC := NULL;
    //      END;
    // 
    //    IF VCONSEC IS NOT NULL THEN
    //      UPDATE  ANTTINCONS SET INCONS_INESTA = 'F' WHERE INCONS_CONSEC = VCONSEC;
    //    END IF;
    //   
    //   
    //   
    //   COMMIT_FORM;
    //   --
    //   --ENVIO DE CORREO AL COMERCIAL
    //   --
    //     PBD_COL_GRACION_MAIL (:CRTSOLICR.SOLICR_OFCSOL,
    //                           :CRTSOLICR.SOLICR_CODSOL,
    //                           :CRTSOLICR.SOLICR_TIPCRE,
    //                           :BASE.USUARIO,
    //                           NULL,
    //                           :SYSTEM.CURRENT_FORM,
    //                           'NG',
    //                           :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                         );
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
    async CRFSOLCR_variable_btnNegar_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnNegar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'NG';
        let ESTADO_NO_VALIDO: null = null;
        let V_INCONSI: number = null;
        let VCONSEC: number = null;
        let V_MENSAJE: string = null;
        try {

            if (["EC", "AZ", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnnegar_whenbuttonpressed_query1", payload1);
            // get values from result
            V_INCONSI = result1[0].get("V_INCONSI");
            if (result1 == null || result1.length == 0) {

                V_INCONSI = 0;
            }

            if (((V_INCONSI == null) || V_INCONSI == 0)) {
                // CRFSOLCR_LIB$DTNERFRMA("AL TERCERO NO SE HA LLENADO EL FORMATO DE INCONSISTENCIAS POR FAVOR VALIDAR.");
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCR_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // this.CRTSOLICR.SOLICR_FAPRCR = TRUNC(PLSQLBuiltins.sysdate());
            // this.CRTSOLICR.SOLICR_FECVIG = TRUNC(PLSQLBuiltins.sysdate());
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_CAMPOS_REQUERIDOS == "FALLO") {
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (PUP_FIRMAS_REQUERIDAS == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA("ESTA SOLICITUD AÚN NO CUENTA CON EL NÚMERO MÍNIMO DE FIRMAS ELECTRÓNICAS PARA REALIZAR EL CAMBIO DE ESTADO. POR FAVOR, VERIFIQUE.");
            // }
            // if (PUP_VALIDA_ANALISTA(V_MENSAJE) == "FALLO") {
            //     // CRFSOLCR_LIB$DTNERFRMA(V_MENSAJE);
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA NEGAR LA SOLICITUD") == 1) {
            //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     // construct payload
            //     let payload2 = new Map();
            //     payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            //     payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            //     payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            //     // call REST API
            //     const result2 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnnegar_whenbuttonpressed_query2", payload2);
            //     // get values from result
            //     VCONSEC = result2[0].get("VCONSEC");
            //     if (result2 == null || result2.length == 0) {

            //         VCONSEC = null;
            //     }

            //     if ((VCONSEC != null)) {
            //         // construct payload
            //         let payload3 = new Map();
            //         // call REST API
            //         const result3 = await Rest.post("/crfsolcr_variable/crfsolcr_variable_btnnegar_whenbuttonpressed_query3", payload3);
            //     }
            //     this.oracleFormsBuiltins.commit_form();
            //     // CRFSOLCR_PBD_COL_GRACION_MAIL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, BASE.USUARIO, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), "NG", this.CRTSOLICR.SOLICR_CODUNI);
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            // else {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO NEGADA", null, null, null, T_RESPUESTA);
            // }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCR_variable_btnNegar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // BEGIN
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    // //     RUN_PRODUCT(REPORTS,'CRRCOMJU',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async CRFSOLCR_variable_impComjun_whenMouseClick() {
        console.log("Entering CRFSOLCR_variable_impComjun_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "CRRCOMJU", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting CRFSOLCR_variable_impComjun_whenMouseClick");
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
    //       :CRTSOLICR.SOLICR_CODUNI IS NULL THEN
    //       MESSAGE('EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;  
    // 
    //    FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :CRTSOLICR.SOLICR_CODUNI, :CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL);
    // 
    //    PL_ID  := GET_PARAMETER_LIST(PL_NOMBRE);
    // 
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'P_NOMBRE_CAMPO', "TEXT_PARAMETER", 'SOLICR_ESTSOL');
    //       CALL_FORM ('CRTAUDISOL', HIDE, NO_REPLACE, "NO_QUERY_ONLY", PL_ID);
    //       DELETE_PARAMETER(PL_ID, 'P_NOMBRE_CAMPO');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_variable_btnFormAudit_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnFormAudit_whenButtonPressed");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if ((((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null)) || (this.CRTSOLICR.SOLICR_CODUNI == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCR_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_NOMBRE_CAMPO", "TEXT_PARAMETER", "SOLICR_ESTSOL");
            this.oracleFormsBuiltins.call_form("CRTAUDISOL", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY", PL_ID);
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_NOMBRE_CAMPO");
        }
        else {
            this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
        }
        console.log("Exiting CRFSOLCR_variable_btnFormAudit_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --+PY25492. JDG.
    //   DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //   BEGIN
    //    
    //    IF ( :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU1 IS NOT NULL ) OR
    //      ( :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU2 IS NOT NULL ) OR
    //      ( :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU3 IS NOT NULL ) OR
    //      ( :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL ) THEN
    //      
    //      LIB$ALERTA( 'MENSAJE', '¿ESTÁ SEGURO DE BORRAR LA FIRMAS ELECTRÓNICAS ACTUALES?', 'SI', 'NO', NULL, T_RESPUESTA ); 
    //      
    //     IF T_RESPUESTA = 1 THEN
    //      
    //      :CRTSOLICR.SOLICR_CODUS1 := NULL;
    //      :CRTSOLICR.DESCRI_CODUS1 := NULL;
    //      :CRTSOLICR.DESCRI_FIRPN1 := NULL;
    //      :CRTSOLICR.SOLICR_MOINA1 := NULL;
    //      :CRTSOLICR.SOLICR_MOSUA1 := NULL;
    //      :CRTSOLICR.SOLICR_FEFIU1 := NULL; 
    //       :CRTSOLICR.SOLICR_CODUS2 := NULL;
    //       :CRTSOLICR.DESCRI_CODUS2 := NULL;
    //       :CRTSOLICR.DESCRI_FIRPN2 := NULL;
    //       :CRTSOLICR.SOLICR_MOINA2 := NULL;
    //       :CRTSOLICR.SOLICR_MOSUA2 := NULL;
    //       :CRTSOLICR.SOLICR_FEFIU2 := NULL;
    //       :CRTSOLICR.SOLICR_CODUS3 := NULL;
    //       :CRTSOLICR.DESCRI_CODUS3 := NULL;
    //       :CRTSOLICR.DESCRI_FIRPN3 := NULL;
    //       :CRTSOLICR.SOLICR_MOINA3 := NULL;
    //       :CRTSOLICR.SOLICR_MOSUA3 := NULL;
    //       :CRTSOLICR.SOLICR_FEFIU3 := NULL;
    //       :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //       
    //       LIB$ALERTA( 'MENSAJE', 'FIRMAS ELECTRÓNICAS BORRADAS.', 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
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
    //                    || 'CRFSOLCR.VARIABLE.BTN_BORRARFIRMAS.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    // --+; END;
    //#endregion
    async CRFSOLCR_variable_btnBorrarfirmas_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnBorrarfirmas_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if ((((((this.CRTSOLICR.SOLICR_CODUS1 != null) && (this.CRTSOLICR.SOLICR_FEFIU1 != null)) || ((this.CRTSOLICR.SOLICR_CODUS2 != null) && (this.CRTSOLICR.SOLICR_FEFIU2 != null))) || ((this.CRTSOLICR.SOLICR_CODUS3 != null) && (this.CRTSOLICR.SOLICR_FEFIU3 != null))) || (this.CRTSOLICR.SOLICR_ESTFIR != null))) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "¿ESTÁ SEGURO DE BORRAR LA FIRMAS ELECTRÓNICAS ACTUALES?", "SI", "NO", null, T_RESPUESTA);
                if (T_RESPUESTA == 1) {
                    this.CRTSOLICR.SOLICR_CODUS1 = null;
                    this.CRTSOLICR.DESCRI_CODUS1 = null;
                    this.CRTSOLICR.DESCRI_FIRPN1 = null;
                    this.CRTSOLICR.SOLICR_MOINA1 = null;
                    this.CRTSOLICR.SOLICR_MOSUA1 = null;
                    this.CRTSOLICR.SOLICR_FEFIU1 = null;
                    this.CRTSOLICR.SOLICR_CODUS2 = null;
                    this.CRTSOLICR.DESCRI_CODUS2 = null;
                    this.CRTSOLICR.DESCRI_FIRPN2 = null;
                    this.CRTSOLICR.SOLICR_MOINA2 = null;
                    this.CRTSOLICR.SOLICR_MOSUA2 = null;
                    this.CRTSOLICR.SOLICR_FEFIU2 = null;
                    this.CRTSOLICR.SOLICR_CODUS3 = null;
                    this.CRTSOLICR.DESCRI_CODUS3 = null;
                    this.CRTSOLICR.DESCRI_FIRPN3 = null;
                    this.CRTSOLICR.SOLICR_MOINA3 = null;
                    this.CRTSOLICR.SOLICR_MOSUA3 = null;
                    this.CRTSOLICR.SOLICR_FEFIU3 = null;
                    this.CRTSOLICR.SOLICR_ESTFIR = null;
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "FIRMAS ELECTRÓNICAS BORRADAS.", "ACEPTAR", null, null, T_RESPUESTA);
                }
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.VARIABLE.BTN_BORRARFIRMAS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_variable_btnBorrarfirmas_whenButtonPressed");
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
    //       :CRTSOLICR.SOLICR_CODSOL IS NULL THEN
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
    // //       RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
    // //        RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, TO_CHAR(NULL), NULL);
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_variable_btnPrintSolic_whenButtonPressed() {
        console.log("Entering CRFSOLCR_variable_btnPrintSolic_whenButtonPressed");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if (((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCR_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL);
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
        console.log("Exiting CRFSOLCR_variable_btnPrintSolic_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULO');
    // 
    // IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR AND
    //    :GLOBAL.VALOR_ANTERIOR <> '****'
    // THEN
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                             SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //               :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_postTextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULO" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if ((GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR && GLOBAL.VALOR_ANTERIOR != "****")) {
        //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_postTextItem");
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
    async CRFSOLCR_crtsolicr_keyDelrec() {
        console.log("Entering CRFSOLCR_crtsolicr_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_keyDelrec");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULO');
    // --:CRTSOLICR.BANDERA       := 'A';
    // 
    // /*8022
    // DECLARE
    //   V_CARGO  SGUSUARIOS.USU_CARGO_N%TYPE;
    // 
    // BEGIN
    //  
    //    SELECT USU_CARGO_N 
    //     INTO V_CARGO
    //    FROM SGUSUARIOS
    //     WHERE USU_CODIGO = PLSQLBuiltins.user();
    //     
    //    IF V_CARGO = 'JECR' THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FECRADI',ENABLED,"PROPERTY_TRUE");
    //    END IF;
    //    
    // END;
    // 8022
    // */; END;
    //#endregion
    async CRFSOLCR_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_crtsolicr_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULO" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFSOLCR_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF  :this.PARAMETER.get("SOL_CTRL") ='Q' THEN
    //     --:CRTSOLICR.SOLICR_OFCSOL  :=  :this.PARAMETER.get("P_UNIDAD"); -- ARQUITECTURA
    //     :CRTSOLICR.SOLICR_OFCSOL  :=  :this.PARAMETER.get("SOL_OFI");
    //     :CRTSOLICR.SOLICR_TIPCRE  :=  :this.PARAMETER.get("SOL_TIP");
    //     :CRTSOLICR.SOLICR_CODSOL  :=  :this.PARAMETER.get("SOL_COD");
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_preQuery() {
        console.log("Entering CRFSOLCR_crtsolicr_preQuery");
        if (this.PARAMETER.get("SOL_CTRL") == "Q") {
            this.CRTSOLICR.SOLICR_OFCSOL = this.PARAMETER.get("SOL_OFI");
            this.CRTSOLICR.SOLICR_TIPCRE = this.PARAMETER.get("SOL_TIP");
            this.CRTSOLICR.SOLICR_CODSOL = this.PARAMETER.get("SOL_COD");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_preQuery");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF this._SYSTEM_SERVICE.get("BLOCK_STATUS") <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_keyClrblk() {
        console.log("Entering CRFSOLCR_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") != "CHANGED") {
            // CRFSOLCR_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_keyClrblk");
    }

    //#region PLSQL
    // BEGIN
    //  IF :this.PARAMETER.get("PENCCOM") = 'S' THEN
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI );  --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14       
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  --+SET    SOLICR_COMITE = NVL(:this.PARAMETER.get("PCOMITE"),:CRTSOLICR.SOLICR_COMITE)
    //     --+  SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //  END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    //   END;
    // 
    // DECLARE
    //   T_RESPUESTA    NUMBER;
    //   TIPO_PERSONA   SGUSUARIOS.USU_CARGO%TYPE;
    //   V_NOMUSOFID    SGUSUARIOS.USU_NOMBRE%TYPE;
    //   V_MENSAJE    VARCHAR2(2000);
    //   
    //   --+PY21520. JDG. REVISADO1
    //   V_SOLICR_ESTFIR  CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //   V_SOLICR_CLASAC  CRTSOLICR.SOLICR_CLASAC%TYPE; 
    //   V_SOLICR_VPAVAL  CRTSOLICR.SOLICR_VPAVAL%TYPE;
    //   V_SOLICR_CODPRO  CRTSOLICR.SOLICR_CODPRO%TYPE;
    //   V_SOLICR_OBSCOM  CRTSOLICR.SOLICR_OBSCOM%TYPE;
    //   V_SOLICR_USCRED  CRTSOLICR.SOLICR_USCRED%TYPE;
    //   V_SOLICR_FECRADI CRTSOLICR.SOLICR_FECRADI%TYPE;  
    //   V_SOLICR_VRFINCR CRTSOLICR.SOLICR_VRFINCR%TYPE;
    //   V_SOLICR_APGARA  CRTSOLICR.SOLICR_APGARA%TYPE;
    //   V_SOLICR_CODUS1  CRTSOLICR.SOLICR_CODUS1%TYPE;
    //   V_SOLICR_MOINA1  CRTSOLICR.SOLICR_MOINA1%TYPE;
    //   V_SOLICR_MOSUA1  CRTSOLICR.SOLICR_MOSUA1%TYPE;
    //   V_SOLICR_FEFIU1  CRTSOLICR.SOLICR_FEFIU1%TYPE;
    //   V_SOLICR_CODUS2  CRTSOLICR.SOLICR_CODUS2%TYPE;
    //   V_SOLICR_MOINA2  CRTSOLICR.SOLICR_MOINA2%TYPE;
    //   V_SOLICR_MOSUA2  CRTSOLICR.SOLICR_MOSUA2%TYPE;
    //   V_SOLICR_FEFIU2  CRTSOLICR.SOLICR_FEFIU2%TYPE;
    //   V_SOLICR_CODUS3  CRTSOLICR.SOLICR_CODUS3%TYPE;
    //   V_SOLICR_MOINA3  CRTSOLICR.SOLICR_MOINA3%TYPE;
    //   V_SOLICR_MOSUA3  CRTSOLICR.SOLICR_MOSUA3%TYPE;
    //   V_SOLICR_FEFIU3  CRTSOLICR.SOLICR_FEFIU3%TYPE;
    //   V_SOLICR_COSEAC  CRTSOLICR.SOLICR_COSEAC%TYPE;
    //   V_SOLICR_COCUTA  CRTSOLICR.SOLICR_COCUTA%TYPE;
    //   V_SOLICR_PLAZMI  CRTSOLICR.SOLICR_PLAZMI%TYPE;
    //  V_SOLICR_PLAZMA  CRTSOLICR.SOLICR_PLAZMA%TYPE;
    //  V_SOLICR_TISEVE  CRTSOLICR.SOLICR_TISEVE%TYPE;
    //  V_SOLICR_PRSOCL  CRTSOLICR.SOLICR_PRSOCL%TYPE;
    //  
    //   
    // BEGIN
    //   BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //     WHERE USU_CODIGO=USER;
    //    EXCEPTION
    //       WHEN NO_DATA_FOUND THEN NULL;
    //    END; 
    //    
    //    
    //    
    //     
    //    
    //    
    //      IF  :CRTSOLICR.SOLICR_ESTSOL IN ('AC') THEN -- MAOM RESTRICCION A CAMBIO DE SOLICITUDES EN AC
    //          LIB$ALERTA('MENSAJE','CAMBIOS NO PERMITIDOS EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL || '.',NULL,NULL,NULL,T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE;  
    //      END IF; 
    //    
    //    
    //    
    //    IF TIPO_PERSONA IN('JC','CC') AND :CRTSOLICR.SOLICR_ESTSOL IN ('AC') THEN
    //     /*
    //     BEGIN
    //      PBD_COL_ASIGOFIDESEMBOLSO(:CRTSOLICR.SOLICR_NITTER
    //                                ,:CRTSOLICR.SOLICR_USCIAL
    //                 ,:CRTSOLICR.SOLICR_LINEA
    //                 ,:CRTSOLICR.SOLICR_USOFID
    //                 ,:CRTSOLICR.SOLICR_CODPRO
    //                                                      );   
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    //     END;
    //     --
    //     --ENVIO DE CORREO ELECTRONICO AL OFICIAL COMO SI LO HUBIESE HECHO EL COMERCIAL
    //     --
    //     BEGIN
    //     SELECT USU_NOMBRE 
    //       INTO V_NOMUSOFID
    //     FROM SGUSUARIOS
    //       WHERE USU_CODIGO = :CRTSOLICR.SOLICR_USOFID;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_NOMUSOFID := NULL;
    //     END;
    //     */
    //     LIB$ALERTA('MENSAJE','RATIFICACION DE LINEA Y EL OFICIAL DE DESEMBOLSO ASIGNADO FUE: '||' '||V_NOMUSOFID,NULL,NULL,NULL,T_RESPUESTA);
    //    ELSE
    //      --+PY21520. JDG. 2018.01.24
    //      IF  :CRTSOLICR.SOLICR_ESTSOL = 'RJ'  AND :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL THEN
    //       
    //        NULL;
    //        
    //      ELSE
    //      --+ 
    //       
    //       IF  :CRTSOLICR.SOLICR_ESTSOL <> 'EC'  AND :GLOBAL.ACTUALIZAR = 'NO' THEN
    //        LIB$ALERTA('MENSAJE','CAMBIOS NO PERMITIDOS EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;  
    //       END IF; 
    //       
    //     --+PY21520. JDG. 2018.01.24  
    //      END IF;
    //      --+
    //       
    //    END IF;
    //    
    //    --+PY21520. JDG. REVISADO1
    //    BEGIN
    //     
    //     SELECT SOLICR_ESTFIR,
    //            SOLICR_CLASAC, 
    //            SOLICR_VPAVAL,
    //            SOLICR_CODPRO,
    //            SOLICR_OBSCOM,
    //            SOLICR_USCRED,
    //            SOLICR_FECRADI,
    //            SOLICR_VRFINCR,
    //            SOLICR_APGARA,
    //            SOLICR_CODUS1,
    //            SOLICR_MOINA1,
    //            SOLICR_MOSUA1,
    //            SOLICR_FEFIU1,
    //            SOLICR_CODUS2,
    //            SOLICR_MOINA2,
    //            SOLICR_MOSUA2,
    //            SOLICR_FEFIU2,
    //            SOLICR_CODUS3,
    //            SOLICR_MOINA3,
    //            SOLICR_MOSUA3,
    //            SOLICR_FEFIU3,
    //            SOLICR_COSEAC,
    //            SOLICR_COCUTA,
    //            SOLICR_PLAZMI,
    //            SOLICR_PLAZMA,
    //            SOLICR_TISEVE,
    //            SOLICR_PRSOCL
    //       INTO V_SOLICR_ESTFIR,
    //            V_SOLICR_CLASAC, 
    //            V_SOLICR_VPAVAL,
    //            V_SOLICR_CODPRO,
    //            V_SOLICR_OBSCOM,
    //            V_SOLICR_USCRED,
    //            V_SOLICR_FECRADI,
    //            V_SOLICR_VRFINCR,
    //            V_SOLICR_APGARA,
    //            V_SOLICR_CODUS1,
    //            V_SOLICR_MOINA1,
    //            V_SOLICR_MOSUA1,
    //            V_SOLICR_FEFIU1,
    //            V_SOLICR_CODUS2,
    //            V_SOLICR_MOINA2,
    //            V_SOLICR_MOSUA2,
    //            V_SOLICR_FEFIU2,
    //            V_SOLICR_CODUS3,
    //            V_SOLICR_MOINA3,
    //            V_SOLICR_MOSUA3,
    //            V_SOLICR_FEFIU3,
    //            V_SOLICR_COSEAC,
    //            V_SOLICR_COCUTA,
    //             V_SOLICR_PLAZMI,
    //            V_SOLICR_PLAZMA,
    //            V_SOLICR_TISEVE,
    //            V_SOLICR_PRSOCL
    //       FROM CRTSOLICR
    //      WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //        AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        --+PY21520. JDG. 2018.01.24. 2018.07.09. 
    //        --AND SOLICR_ESTSOL = 'EC';
    //        AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND SOLICR_ESTSOL IN ( 'EC', 'RJ' );
    //        --+
    //        
    //    EXCEPTION 
    //     
    //      WHEN OTHERS THEN
    //        
    //        V_SOLICR_ESTFIR := NULL;
    //        
    //    END;  
    //    
    //       
    //    IF ( ( ( NVL( V_SOLICR_ESTFIR, 'X' ) = 'AP' )
    //           AND 
    //           ( ( ( NVL( V_SOLICR_CLASAC,  'X'      ) = 'U'     OR  NVL( :CRTSOLICR.SOLICR_CLASAC, 'X' ) = 'U'       ) AND (               NVL( V_SOLICR_VPAVAL, 0            ) = 0     AND               NVL( :CRTSOLICR.SOLICR_VPAVAL, 0       ) <> 0  ) ) OR 
    //             ( ( NVL( V_SOLICR_CODPRO,  'X'      ) = 'FVZ'   OR  NVL( :CRTSOLICR.SOLICR_CODPRO, 'X' ) = 'FVZ'     ) AND ( LTRIM( RTRIM( NVL( V_SOLICR_OBSCOM, 'X' ) )      ) <> 'X'  AND LTRIM( RTRIM( NVL( :CRTSOLICR.SOLICR_OBSCOM, 'X' ) ) ) = 'X' ) ) OR 
    //             ( ( NVL( V_SOLICR_USCRED,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_USCRED, 'X' ) <> 'X'                                   ) ) OR
    //             ( (      V_SOLICR_FECRADI             IS NULL   AND      :CRTSOLICR.SOLICR_FECRADI       IS NOT NULL                                                                           ) ) OR
    //             ( ( NVL( V_SOLICR_VRFINCR, 0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_VRFINCR, 0  ) <> 0                                    ) ) OR
    //             ( ( NVL( V_SOLICR_APGARA,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_APGARA, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_CODUS1,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS1, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA1,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA1, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA1,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA1, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU1,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU1, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //             ( ( NVL( V_SOLICR_CODUS2,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS2, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA2,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA2, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA2,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA2, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU2,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU2, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //       ( ( NVL( V_SOLICR_CODUS3,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS3, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA3,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA3, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA3,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA3, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU3,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU3, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //             ( ( NVL( V_SOLICR_COSEAC,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) <> 'X'                                   ) ) OR            
    //             ( ( NVL( V_SOLICR_COCUTA,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_COCUTA, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_PLAZMI,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_PLAZMI, 0 )   <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_PLAZMA,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_PLAZMA, 0 )   <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_TISEVE,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_TISEVE, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_PRSOCL,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_PRSOCL, 'X' ) <> 'X'                                   ) )
    //           ) 
    //         )  
    //       ) 
    //       OR
    //       ( ( ( ( NVL( V_SOLICR_ESTFIR, 'X' ) = 'AZ' ) OR ( NVL( V_SOLICR_ESTFIR, 'X' ) = 'NG' ) )
    //          AND
    //           ( ( ( NVL( V_SOLICR_USCRED,  'X'     ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_USCRED, 'X' ) <> 'X'                                     ) ) OR
    //             ( (      V_SOLICR_FECRADI            IS NULL   AND      :CRTSOLICR.SOLICR_FECRADI       IS NOT NULL                                                                           ) ) OR          
    //           ( ( NVL( V_SOLICR_VRFINCR, 0       ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_VRFINCR, 0  ) <> 0                                      ) ) OR
    //           ( ( NVL( V_SOLICR_FEFIU1,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU1, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //       ( ( NVL( V_SOLICR_CODUS1,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS1, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA1,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA1, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA1,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA1, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU1,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU1, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //             ( ( NVL( V_SOLICR_CODUS2,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS2, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA2,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA2, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA2,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA2, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU2,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU2, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //       ( ( NVL( V_SOLICR_CODUS3,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS3, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA3,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA3, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA3,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA3, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU3,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU3, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //             ( ( NVL( V_SOLICR_COSEAC,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) <> 'X'                                   ) ) OR                        
    //             ( ( NVL( V_SOLICR_COCUTA,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_COCUTA, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_PLAZMI,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_PLAZMI, 0 )   <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_PLAZMA,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_PLAZMA, 0 )   <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_TISEVE,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_TISEVE, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_PRSOCL,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_PRSOCL, 'X' ) <> 'X'                                   ) )
    //       ) 
    //         )
    //       )  
    //       OR
    //       ( ( ( NVL( V_SOLICR_ESTFIR, 'X' ) = 'RJ' )
    //          AND 
    //           ( ( ( NVL( V_SOLICR_CLASAC,  'X'      ) = 'U'     OR  NVL( :CRTSOLICR.SOLICR_CLASAC, 'X' ) = 'U'       ) AND (               NVL( V_SOLICR_VPAVAL, 0            ) = 0     AND               NVL( :CRTSOLICR.SOLICR_VPAVAL, 0       ) <> 0  ) ) OR 
    //             ( ( NVL( V_SOLICR_USCRED,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_USCRED, 'X' ) <> 'X'                                   ) ) OR
    //             ( (      V_SOLICR_FECRADI             IS NULL   AND      :CRTSOLICR.SOLICR_FECRADI       IS NOT NULL                                                                           ) ) OR
    //             ( ( NVL( V_SOLICR_VRFINCR, 0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_VRFINCR, 0  ) <> 0                                    ) ) OR
    //       ( ( NVL( V_SOLICR_FEFIU1,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU1, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //       ( ( NVL( V_SOLICR_CODUS1,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS1, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA1,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA1, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA1,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA1, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU1,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU1, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //             ( ( NVL( V_SOLICR_CODUS2,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS2, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA2,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA2, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA2,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA2, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU2,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU2, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //       ( ( NVL( V_SOLICR_CODUS3,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_CODUS3, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_MOINA3,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOINA3, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_MOSUA3,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_MOSUA3, 0   ) <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_FEFIU3,  TRUNC( SYSDATE + 365 ) ) = TRUNC( SYSDATE + 365 )                         ) AND (               NVL( :CRTSOLICR.SOLICR_FEFIU3, TRUNC( SYSDATE + 365 ) ) <> TRUNC( SYSDATE + 365 )                 ) ) OR
    //             ( ( NVL( V_SOLICR_COSEAC,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_COSEAC, 'X' ) <> 'X'                                   ) ) OR                        
    //             ( ( NVL( V_SOLICR_COCUTA,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_COCUTA, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_PLAZMI,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_PLAZMI, 0 )   <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_PLAZMA,  0        ) = 0                                                            ) AND (               NVL( :CRTSOLICR.SOLICR_PLAZMA, 0 )   <> 0                                     ) ) OR
    //             ( ( NVL( V_SOLICR_TISEVE,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_TISEVE, 'X' ) <> 'X'                                   ) ) OR
    //             ( ( NVL( V_SOLICR_PRSOCL,  'X'      ) = 'X'                                                          ) AND (               NVL( :CRTSOLICR.SOLICR_PRSOCL, 'X' ) <> 'X'                                   ) ) 
    //           ) 
    //         )  
    //       ) 
    //       
    //      THEN    
    //       
    //      NULL;
    //        
    //    ELSE 
    //      
    //      --+PY21520. JDG.
    //      PUP_MENSAJE_FIRMAS;
    //      
    //    END IF;
    //    
    //    
    //    --AJ PY 26690 VERIFICA QUE EL PRODUCTO ELEGIDO CONCUERDE CON LA LINEA DE LA SOLICITUD
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN
    //       DECLARE
    //        V_CONTEO NUMBER:=NULL;
    //       BEGIN
    //              
    //       SELECT COUNT(*)
    //         INTO V_CONTEO
    //         FROM CRTTIPROLI TR, CRTPRODCIA CI
    //        WHERE TR.IPROLI_CODUNI = CI.PROD_CODUNI
    //          AND TR.IPROLI_CTIPRO = CI.PROD_CODIGO
    //          AND CI.PROD_EST = 'A'
    //          AND CI.PROD_CODUNI = '005'
    //             AND TR.IPROLI_CLINEA = :CRTSOLICR.SOLICR_LINEA
    //             AND TR.IPROLI_CTIPRO = :CRTSOLICR.SOLICR_CODPRO;
    //         
    //          IF V_CONTEO = 0 THEN
    //              
    //            LIB$DTNERFRMA('EL TIPO DE PRODUCTO NO CORRESPONDE CON LA LÍNEA DE LA SOLICITUD');
    //            GO_ITEM('CRTSOLICR.SOLICR_CODPRO');
    //            
    //          END IF;
    //         
    //         
    //       END;
    //   END IF;
    //    --AJ
    //      
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_preUpdate() {
        console.log("Entering CRFSOLCR_crtsolicr_preUpdate");
        try {

            if (this.PARAMETER.get("PENCCOM") == "S") {
                // CRFSOLCR_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, this.CRTSOLICR.SOLICR_VRFINA, this.CRTSOLICR.SOLICR_ORMONET, this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE", this.CRTSOLICR.SOLICR_CODUNI);
                this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? this.CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
                // this.PARAMETER.get("PENCCOM") = "N";
            }
        } catch (ex) {

            // CRFSOLCR_LIB$DTNERFRMA(SQLERRM);
        }

        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        let V_NOMUSOFID: null = null;
        let V_MENSAJE: string = null;
        let V_SOLICR_ESTFIR: null = null;
        let V_SOLICR_CLASAC: null = null;
        let V_SOLICR_VPAVAL: null = null;
        let V_SOLICR_CODPRO: null = null;
        let V_SOLICR_OBSCOM: null = null;
        let V_SOLICR_USCRED: null = null;
        let V_SOLICR_FECRADI: null = null;
        let V_SOLICR_VRFINCR: null = null;
        let V_SOLICR_APGARA: null = null;
        let V_SOLICR_CODUS1: null = null;
        let V_SOLICR_MOINA1: null = null;
        let V_SOLICR_MOSUA1: null = null;
        let V_SOLICR_FEFIU1: null = null;
        let V_SOLICR_CODUS2: null = null;
        let V_SOLICR_MOINA2: null = null;
        let V_SOLICR_MOSUA2: null = null;
        let V_SOLICR_FEFIU2: null = null;
        let V_SOLICR_CODUS3: null = null;
        let V_SOLICR_MOINA3: null = null;
        let V_SOLICR_MOSUA3: null = null;
        let V_SOLICR_FEFIU3: null = null;
        let V_SOLICR_COSEAC: null = null;
        let V_SOLICR_COCUTA: null = null;
        let V_SOLICR_PLAZMI: null = null;
        let V_SOLICR_PLAZMA: null = null;
        let V_SOLICR_TISEVE: null = null;
        let V_SOLICR_PRSOCL: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_preupdate_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["AC"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "CAMBIOS NO PERMITIDOS EN ESTADO " + CRTSOLICR.SOLICR_ESTSOL + ".", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if ((["JC", "CC"].indexOf(TIPO_PERSONA) != -1 && ["AC"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1)) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "RATIFICACION DE LINEA Y EL OFICIAL DE DESEMBOLSO ASIGNADO FUE: " + " " + V_NOMUSOFID, null, null, null, T_RESPUESTA);
        }
        else {
            if ((this.CRTSOLICR.SOLICR_ESTSOL == "RJ" && (this.CRTSOLICR.SOLICR_ESTFIR != null))) {
            }
            else {
                // if ((this.CRTSOLICR.SOLICR_ESTSOL != "EC" && GLOBAL.ACTUALIZAR == "NO")) {
                //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "CAMBIOS NO PERMITIDOS EN ESTADO " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }
        }
        let result2 = new Map();
        try {

            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_preupdate_query2", payload2);
            // get values from result
            V_SOLICR_ESTFIR = result2[0].get("V_SOLICR_ESTFIR");
            V_SOLICR_CLASAC = result2[0].get("V_SOLICR_CLASAC");
            V_SOLICR_VPAVAL = result2[0].get("V_SOLICR_VPAVAL");
            V_SOLICR_CODPRO = result2[0].get("V_SOLICR_CODPRO");
            V_SOLICR_OBSCOM = result2[0].get("V_SOLICR_OBSCOM");
            V_SOLICR_USCRED = result2[0].get("V_SOLICR_USCRED");
            V_SOLICR_FECRADI = result2[0].get("V_SOLICR_FECRADI");
            V_SOLICR_VRFINCR = result2[0].get("V_SOLICR_VRFINCR");
            V_SOLICR_APGARA = result2[0].get("V_SOLICR_APGARA");
            V_SOLICR_CODUS1 = result2[0].get("V_SOLICR_CODUS1");
            V_SOLICR_MOINA1 = result2[0].get("V_SOLICR_MOINA1");
            V_SOLICR_MOSUA1 = result2[0].get("V_SOLICR_MOSUA1");
            V_SOLICR_FEFIU1 = result2[0].get("V_SOLICR_FEFIU1");
            V_SOLICR_CODUS2 = result2[0].get("V_SOLICR_CODUS2");
            V_SOLICR_MOINA2 = result2[0].get("V_SOLICR_MOINA2");
            V_SOLICR_MOSUA2 = result2[0].get("V_SOLICR_MOSUA2");
            V_SOLICR_FEFIU2 = result2[0].get("V_SOLICR_FEFIU2");
            V_SOLICR_CODUS3 = result2[0].get("V_SOLICR_CODUS3");
            V_SOLICR_MOINA3 = result2[0].get("V_SOLICR_MOINA3");
            V_SOLICR_MOSUA3 = result2[0].get("V_SOLICR_MOSUA3");
            V_SOLICR_FEFIU3 = result2[0].get("V_SOLICR_FEFIU3");
            V_SOLICR_COSEAC = result2[0].get("V_SOLICR_COSEAC");
            V_SOLICR_COCUTA = result2[0].get("V_SOLICR_COCUTA");
            V_SOLICR_PLAZMI = result2[0].get("V_SOLICR_PLAZMI");
            V_SOLICR_PLAZMA = result2[0].get("V_SOLICR_PLAZMA");
            V_SOLICR_TISEVE = result2[0].get("V_SOLICR_TISEVE");
            V_SOLICR_PRSOCL = result2[0].get("V_SOLICR_PRSOCL");
        } catch (ex) {

            V_SOLICR_ESTFIR = null;
        }

        // if ((((V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR == "AP" &&
        //     (((((((((((((((((((((((((V_SOLICR_CLASAC == null ? "X" : V_SOLICR_CLASAC == "U" ||
        //         this.CRTSOLICR.SOLICR_CLASAC == null ? "X" : this.CRTSOLICR.SOLICR_CLASAC == "U") && (V_SOLICR_VPAVAL == null ? 0 : V_SOLICR_VPAVAL == 0 &&
        //             this.CRTSOLICR.SOLICR_VPAVAL == null ? 0 : this.CRTSOLICR.SOLICR_VPAVAL != 0)) || ((V_SOLICR_CODPRO == null ? "X" : V_SOLICR_CODPRO == "FVZ" || this.
        //                 CRTSOLICR.SOLICR_CODPRO == null ? "X" : this.CRTSOLICR.SOLICR_CODPRO == "FVZ") && (V_SOLICR_OBSCOM == null ? "X" : V_SOLICR_OBSCOM)) != "X" &&
        //         (this.CRTSOLICR.SOLICR_OBSCOM == null ? "X" : this.CRTSOLICR.SOLICR_OBSCOM)) == "X"))) || (V_SOLICR_USCRED == null ? "X" : V_SOLICR_USCRED == "X" &&
        //             this.CRTSOLICR.SOLICR_USCRED == null ? "X" : this.CRTSOLICR.SOLICR_USCRED != "X")) || ((V_SOLICR_FECRADI == null) &&
        //                 (this.CRTSOLICR.SOLICR_FECRADI != null))) || (V_SOLICR_VRFINCR == null ? 0 : V_SOLICR_VRFINCR == 0 &&
        //                     this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR != 0)) ||
        //         (V_SOLICR_APGARA == null ? "X" : V_SOLICR_APGARA == "X" && this.CRTSOLICR.SOLICR_APGARA == null ? "X" : this.CRTSOLICR.SOLICR_APGARA != "X")) ||
        //         (V_SOLICR_CODUS1 == null ? "X" : V_SOLICR_CODUS1 == "X" && this.CRTSOLICR.SOLICR_CODUS1 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS1 != "X")) ||
        //         (V_SOLICR_MOINA1 == null ? 0 : V_SOLICR_MOINA1 == 0 && this.CRTSOLICR.SOLICR_MOINA1 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA1 != 0)) ||
        //         (V_SOLICR_MOSUA1 == null ? 0 : V_SOLICR_MOSUA1 == 0 && this.CRTSOLICR.SOLICR_MOSUA1 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA1 != 0)) ||
        //         (V_SOLICR_FEFIU1 == null ? PLSQLBuiltins.sysdate() : V_SOLICR_FEFIU1 == (PLSQLBuiltins.sysdate()) &&
        //             this.CRTSOLICR.SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU1 != (PLSQLBuiltins.sysdate().toString()))) ||
        //         (V_SOLICR_CODUS2 == null ? "X" : V_SOLICR_CODUS2 == "X" && this.CRTSOLICR.SOLICR_CODUS2 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS2 != "X")) ||
        //         (V_SOLICR_MOINA2 == null ? 0 : V_SOLICR_MOINA2 == 0 && this.CRTSOLICR.SOLICR_MOINA2 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA2 != 0)) ||
        //         (V_SOLICR_MOSUA2 == null ? 0 : V_SOLICR_MOSUA2 == 0 && this.CRTSOLICR.SOLICR_MOSUA2 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA2 != 0)) ||
        //         (V_SOLICR_FEFIU2 == null ? (PLSQLBuiltins.sysdate() : V_SOLICR_FEFIU2 == (PLSQLBuiltins.sysdate() &&
        //             this.CRTSOLICR.SOLICR_FEFIU2 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU2 != (PLSQLBuiltins.sysdate().toString()))) ||
        //         (V_SOLICR_CODUS3 == null ? "X" : V_SOLICR_CODUS3 == "X" && this.CRTSOLICR.SOLICR_CODUS3 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS3 != "X")) ||
        //         (V_SOLICR_MOINA3 == null ? 0 : V_SOLICR_MOINA3 == 0 && this.CRTSOLICR.SOLICR_MOINA3 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA3 != 0)) ||
        //         (V_SOLICR_MOSUA3 == null ? 0 : V_SOLICR_MOSUA3 == 0 && this.CRTSOLICR.SOLICR_MOSUA3 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA3 != 0)) ||
        //         (V_SOLICR_FEFIU3 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU3 == (PLSQLBuiltins.sysdate()) &&
        //             this.CRTSOLICR.SOLICR_FEFIU3 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU3 != (PLSQLBuiltins.sysdate().toString()))) ||
        //         (V_SOLICR_COSEAC == null ? "X" : V_SOLICR_COSEAC == "X" && this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC != "X")) ||
        //         (V_SOLICR_COCUTA == null ? "X" : V_SOLICR_COCUTA == "X" && this.CRTSOLICR.SOLICR_COCUTA == null ? "X" : this.CRTSOLICR.SOLICR_COCUTA != "X")) ||
        //         (V_SOLICR_PLAZMI == null ? 0 : V_SOLICR_PLAZMI == 0 && this.CRTSOLICR.SOLICR_PLAZMI == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMI != 0)) ||
        //         (V_SOLICR_PLAZMA == null ? 0 : V_SOLICR_PLAZMA == 0 && this.CRTSOLICR.SOLICR_PLAZMA == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMA != 0)) ||
        //     (V_SOLICR_TISEVE == null ? "X" : V_SOLICR_TISEVE == "X" && this.CRTSOLICR.SOLICR_TISEVE == null ? "X" : this.CRTSOLICR.SOLICR_TISEVE != "X")) ||
        //     (V_SOLICR_PRSOCL == null ? "X" : V_SOLICR_PRSOCL == "X" && this.CRTSOLICR.SOLICR_PRSOCL == null ? "X" : this.CRTSOLICR.SOLICR_PRSOCL != "X"))) ||
        //     ((V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR == "AZ" || V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR == "NG") &&
        //         ((((((((((((((((((((((V_SOLICR_USCRED == null ? "X" : V_SOLICR_USCRED == "X" && this.CRTSOLICR.SOLICR_USCRED == null ? "X" : this.CRTSOLICR.SOLICR_USCRED != "X") ||
        //             ((V_SOLICR_FECRADI == null) && (this.CRTSOLICR.SOLICR_FECRADI != null))) || (V_SOLICR_VRFINCR == null ? 0 : V_SOLICR_VRFINCR == 0 &&
        //                 this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR != 0)) ||
        //             (V_SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU1 == (PLSQLBuiltins.sysdate()) &&
        //                 this.CRTSOLICR.SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU1 != (PLSQLBuiltins.sysdate().toString()))) ||
        //             (V_SOLICR_CODUS1 == null ? "X" : V_SOLICR_CODUS1 == "X" && this.CRTSOLICR.SOLICR_CODUS1 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS1 != "X")) ||
        //             (V_SOLICR_MOINA1 == null ? 0 : V_SOLICR_MOINA1 == 0 && this.CRTSOLICR.SOLICR_MOINA1 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA1 != 0)) ||
        //             (V_SOLICR_MOSUA1 == null ? 0 : V_SOLICR_MOSUA1 == 0 && this.CRTSOLICR.SOLICR_MOSUA1 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA1 != 0)) ||
        //             (V_SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU1 == (PLSQLBuiltins.sysdate().toString()) &&
        //                 this.CRTSOLICR.SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU1 != (PLSQLBuiltins.sysdate().toString()))) ||
        //             (V_SOLICR_CODUS2 == null ? "X" : V_SOLICR_CODUS2 == "X" && this.CRTSOLICR.SOLICR_CODUS2 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS2 != "X")) ||
        //             (V_SOLICR_MOINA2 == null ? 0 : V_SOLICR_MOINA2 == 0 && this.CRTSOLICR.SOLICR_MOINA2 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA2 != 0)) ||
        //             (V_SOLICR_MOSUA2 == null ? 0 : V_SOLICR_MOSUA2 == 0 && this.CRTSOLICR.SOLICR_MOSUA2 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA2 != 0)) ||
        //             (V_SOLICR_FEFIU2 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU2 == (PLSQLBuiltins.sysdate()) &&
        //                 this.CRTSOLICR.SOLICR_FEFIU2 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU2 != (PLSQLBuiltins.sysdate().toString()))) ||
        //             (V_SOLICR_CODUS3 == null ? "X" : V_SOLICR_CODUS3 == "X" && this.CRTSOLICR.SOLICR_CODUS3 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS3 != "X")) ||
        //             (V_SOLICR_MOINA3 == null ? 0 : V_SOLICR_MOINA3 == 0 && this.CRTSOLICR.SOLICR_MOINA3 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA3 != 0)) ||
        //             (V_SOLICR_MOSUA3 == null ? 0 : V_SOLICR_MOSUA3 == 0 && this.CRTSOLICR.SOLICR_MOSUA3 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA3 != 0)) ||
        //             (V_SOLICR_FEFIU3 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU3 == (PLSQLBuiltins.sysdate()) &&
        //                 this.CRTSOLICR.SOLICR_FEFIU3 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU3 != (PLSQLBuiltins.sysdate().toString()))) ||
        //             (V_SOLICR_COSEAC == null ? "X" : V_SOLICR_COSEAC == "X" && this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC != "X")) ||
        //             (V_SOLICR_COCUTA == null ? "X" : V_SOLICR_COCUTA == "X" && this.CRTSOLICR.SOLICR_COCUTA == null ? "X" : this.CRTSOLICR.SOLICR_COCUTA != "X")) ||
        //             (V_SOLICR_PLAZMI == null ? 0 : V_SOLICR_PLAZMI == 0 && this.CRTSOLICR.SOLICR_PLAZMI == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMI != 0)) ||
        //             (V_SOLICR_PLAZMA == null ? 0 : V_SOLICR_PLAZMA == 0 && this.CRTSOLICR.SOLICR_PLAZMA == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMA != 0)) ||
        //             (V_SOLICR_TISEVE == null ? "X" : V_SOLICR_TISEVE == "X" && this.CRTSOLICR.SOLICR_TISEVE == null ? "X" : this.CRTSOLICR.SOLICR_TISEVE != "X")) ||
        //             (V_SOLICR_PRSOCL == null ? "X" : V_SOLICR_PRSOCL == "X" && this.CRTSOLICR.SOLICR_PRSOCL == null ? "X" : this.CRTSOLICR.SOLICR_PRSOCL != "X")))) ||
        //                 (V_SOLICR_ESTFIR == null ? "X" : V_SOLICR_ESTFIR == "RJ" && ((((((((((((((((((((((((V_SOLICR_CLASAC == null ? "X" : V_SOLICR_CLASAC == "U" ||
        //                     this.CRTSOLICR.SOLICR_CLASAC == null ? "X" : this.CRTSOLICR.SOLICR_CLASAC == "U") && (V_SOLICR_VPAVAL == null ? 0 : V_SOLICR_VPAVAL == 0 &&
        //                         this.CRTSOLICR.SOLICR_VPAVAL == null ? 0 : this.CRTSOLICR.SOLICR_VPAVAL != 0)) || (V_SOLICR_USCRED == null ? "X" : V_SOLICR_USCRED == "X" &&
        //                             this.CRTSOLICR.SOLICR_USCRED == null ? "X" : this.CRTSOLICR.SOLICR_USCRED != "X")) || ((V_SOLICR_FECRADI == null) &&
        //                                 (this.CRTSOLICR.SOLICR_FECRADI != null))) || (V_SOLICR_VRFINCR == null ? 0 : V_SOLICR_VRFINCR == 0 &&
        //                                     this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR != 0)) ||
        //                     (V_SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU1 == (PLSQLBuiltins.sysdate()) &&
        //                         this.CRTSOLICR.SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU1 != (PLSQLBuiltins.sysdate().toString()))) ||
        //                     (V_SOLICR_CODUS1 == null ? "X" : V_SOLICR_CODUS1 == "X" && this.CRTSOLICR.SOLICR_CODUS1 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS1 != "X")) ||
        //                     (V_SOLICR_MOINA1 == null ? 0 : V_SOLICR_MOINA1 == 0 && this.CRTSOLICR.SOLICR_MOINA1 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA1 != 0)) ||
        //                     (V_SOLICR_MOSUA1 == null ? 0 : V_SOLICR_MOSUA1 == 0 && this.CRTSOLICR.SOLICR_MOSUA1 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA1 != 0)) ||
        //                     (V_SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU1 == (PLSQLBuiltins.sysdate()) &&
        //                         this.CRTSOLICR.SOLICR_FEFIU1 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU1 != (PLSQLBuiltins.sysdate().toString()))) ||
        //                     (V_SOLICR_CODUS2 == null ? "X" : V_SOLICR_CODUS2 == "X" && this.CRTSOLICR.SOLICR_CODUS2 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS2 != "X")) ||
        //                     (V_SOLICR_MOINA2 == null ? 0 : V_SOLICR_MOINA2 == 0 && this.CRTSOLICR.SOLICR_MOINA2 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA2 != 0)) ||
        //                     (V_SOLICR_MOSUA2 == null ? 0 : V_SOLICR_MOSUA2 == 0 && this.CRTSOLICR.SOLICR_MOSUA2 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA2 != 0)) ||
        //                     (V_SOLICR_FEFIU2 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU2 == (PLSQLBuiltins.sysdate()) &&
        //                         this.CRTSOLICR.SOLICR_FEFIU2 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU2 != (PLSQLBuiltins.sysdate().toString()))) ||
        //                     (V_SOLICR_CODUS3 == null ? "X" : V_SOLICR_CODUS3 == "X" && this.CRTSOLICR.SOLICR_CODUS3 == null ? "X" : this.CRTSOLICR.SOLICR_CODUS3 != "X")) ||
        //                     (V_SOLICR_MOINA3 == null ? 0 : V_SOLICR_MOINA3 == 0 && this.CRTSOLICR.SOLICR_MOINA3 == null ? 0 : this.CRTSOLICR.SOLICR_MOINA3 != 0)) ||
        //                     (V_SOLICR_MOSUA3 == null ? 0 : V_SOLICR_MOSUA3 == 0 && this.CRTSOLICR.SOLICR_MOSUA3 == null ? 0 : this.CRTSOLICR.SOLICR_MOSUA3 != 0)) ||
        //                     (V_SOLICR_FEFIU3 == null ? (PLSQLBuiltins.sysdate()) : V_SOLICR_FEFIU3 == (PLSQLBuiltins.sysdate()) &&
        //                         this.CRTSOLICR.SOLICR_FEFIU3 == null ? (PLSQLBuiltins.sysdate()) : this.CRTSOLICR.SOLICR_FEFIU3 != (PLSQLBuiltins.sysdate().toString()))) ||
        //                     (V_SOLICR_COSEAC == null ? "X" : V_SOLICR_COSEAC == "X" && this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC != "X")) ||
        //                     (V_SOLICR_COCUTA == null ? "X" : V_SOLICR_COCUTA == "X" && this.CRTSOLICR.SOLICR_COCUTA == null ? "X" : this.CRTSOLICR.SOLICR_COCUTA != "X")) ||
        //                     (V_SOLICR_PLAZMI == null ? 0 : V_SOLICR_PLAZMI == 0 && this.CRTSOLICR.SOLICR_PLAZMI == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMI != 0)) ||
        //                     (V_SOLICR_PLAZMA == null ? 0 : V_SOLICR_PLAZMA == 0 && this.CRTSOLICR.SOLICR_PLAZMA == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMA != 0)) ||
        //                     (V_SOLICR_TISEVE == null ? "X" : V_SOLICR_TISEVE == "X" && this.CRTSOLICR.SOLICR_TISEVE == null ? "X" : this.CRTSOLICR.SOLICR_TISEVE != "X")) ||
        //                     (V_SOLICR_PRSOCL == null ? "X" : V_SOLICR_PRSOCL == "X" && this.CRTSOLICR.SOLICR_PRSOCL == null ? "X" : this.CRTSOLICR.SOLICR_PRSOCL != "X"))))) {
        // }
        // else {
        //     // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        // }
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            {

                let V_CONTEO: number = null;
                // construct payload
                let payload3 = new Map();
                payload3.set("SOLICR_LINEA", this.CRTSOLICR.SOLICR_LINEA);
                payload3.set("SOLICR_CODPRO", this.CRTSOLICR.SOLICR_CODPRO);
                // call REST API
                const result3 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_preupdate_query3", payload3);
                // get values from result
                V_CONTEO = result3[0].get("V_CONTEO");
                if (V_CONTEO == 0) {
                    // CRFSOLCR_LIB$DTNERFRMA("EL TIPO DE PRODUCTO NO CORRESPONDE CON LA LÍNEA DE LA SOLICITUD");
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODPRO");
                }
            }

        }
        console.log("Exiting CRFSOLCR_crtsolicr_preUpdate");
    }

    //#region PLSQL
    // BEGIN --+PY21520.JDG
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
    //   END;  
    // 
    // 
    // -- AUTOR SARA MURCIA SMC
    // -- PROYECTO 20521
    // -- FECHA 27/09/2016
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_VALOR NUMBER;
    //   V_MENSAJE VARCHAR2(3000);
    // BEGIN
    // 
    // OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO  (V_VALOR  , :CRTSOLICR.SOLICR_NITTER , V_MENSAJE ); 
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
    //   
    // END;
    // 
    // BEGIN
    // PBD_VALIGRACIA;--PY 12192
    // PQBD_COL_ENVIOEC.PACTUALIZAPARAM (:CRTSOLICR.SOLICR_NITTER,:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_CODREC,:CRTSOLICR.SOLICR_USCRED, :CRTSOLICR.SOLICR_CODUNI);--PY 16242 --ARQUITECTURA
    // COMMIT;
    // END;
    // 
    // 
    // -------- PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ / MIGUEL LOPEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // 
    // 
    // 
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     --LIB$ALERTA( 'MENSAJE',:CRTOTERSOL1.OTERSOL_NITTER, 'ACEPTAR', NULL, NULL, T_RESPUESTA );  --PRUEBAS BORRAR
    //     V_PARAMETRO := 'SOLICITUD';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //     
    //  END IF;        
    // END;
    //    
    // ----------------------  CODIGOS DE ESTRATEGIA; END;
    //#endregion
    async CRFSOLCR_crtsolicr_keyCommit() {
        console.log("Entering CRFSOLCR_crtsolicr_keyCommit");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_CODUNI != "001") {
            if (this.CRTSOLICR.SOLICR_PLAZMI == null ? 0 : this.CRTSOLICR.SOLICR_PLAZMI > this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PLAZO MÍNIMO DE LA SOLICITUD NO PUEDE SER MAYOR QUE EL PLAZO.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO > this.CRTSOLICR.SOLICR_PLAZMA) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PLAZO MÁXIMO DE LA SOLICITUD NO PUEDE SER MENOR QUE EL PLAZO.", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        let V_VALOR: number = null;
        let V_MENSAJE: string = null;
        // CRFSOLCR_OPS$COLOCA.PBD_COL_ALERTA_INSOL_BLOQUEO(V_VALOR, this.CRTSOLICR.SOLICR_NITTER, V_MENSAJE);
        if (V_VALOR == 1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCR_PBD_VALIGRACIA();
        // CRFSOLCR_PQBD_COL_ENVIOEC.PACTUALIZAPARAM(this.CRTSOLICR.SOLICR_NITTER, this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODREC, this.CRTSOLICR.SOLICR_USCRED, this.CRTSOLICR.SOLICR_CODUNI);
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            V_PARAMETRO = "SOLICITUD";
            // CRFSOLCR_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        console.log("Exiting CRFSOLCR_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD='FALSE' THEN
    //   DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_keyDown() {
        console.log("Entering CRFSOLCR_crtsolicr_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_keyDown");
    }

    //#region PLSQL
    // DECLARE --PY 5499 
    //  V_FECHA VARCHAR2(30); --PY 5499 
    // 
    // BEGIN
    // 
    //   :GLOBAL.VALOR_ANTERIOR   := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULL');
    //   :VARIABLE.REGNRO_SOLICR  := TO_NUMBER(SYSTEM.CURSOR_RECORD);
    //   :GLOBAL.ESTADO_ANTERIOR  := :CRTSOLICR.SOLICR_ESTSOL;
    //   --:CRTSOLICR.BANDERA       := 'A';
    //  
    //    SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,"ATTR_OFF");
    //   
    //    IF    :CRTSOLICR.SOLICR_CODPRO ='RES' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,ATTR_ON);
    //         SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,ATTR_ON); 
    //    END IF;
    //    
    //    
    //    
    //     --PY 5499
    //     
    //     BEGIN    
    //       SELECT TO_CHAR(CR.LCKCRE_RFECHA,'DD-MM-YYYY HH:MI AM')
    //         INTO V_FECHA
    //         FROM CRTLCKCRE CR
    //        WHERE LCKCRE_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //          AND LCKCRE_NSOLIC = :CRTSOLICR.SOLICR_CODSOL
    //          AND LCKCRE_CODARE IN ('CRE','ANA')
    //          AND LCKCRE_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //          AND ROWNUM=1;
    //     
    //     EXCEPTION WHEN NO_DATA_FOUND THEN V_FECHA := NULL;
    //     END; 
    //     
    //     IF V_FECHA IS NOT NULL THEN     
    //      
    //      --+PY21520. JDG.
    //      --:CRTSOLICR.FECHACREDITO := 'FECHA DE RECIBIDO CRÉDITO '||V_FECHA;
    //      :CRTSOLICR.FECHACREDITO := 'FEC. RECIBIDO CRÉDITO '||V_FECHA;          
    //      SET_ITEM_PROPERTY('CRTSOLICR.FECHACREDITO',"DISPLAYED",PROPERTY_ON);    
    //     ELSE     
    //       SET_ITEM_PROPERTY('CRTSOLICR.FECHACREDITO',"DISPLAYED","PROPERTY_OFF");    
    //     END IF;
    //     
    //     --PY 5499
    //     
    //     --+PY21520. JDG.
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
    //                     || 'CRFSOLCR.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. '
    // //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //        END IF;
    //  
    //   END;
    //     
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFSOLCR_crtsolicr_whenNewRecordInstance");
        let V_FECHA: string = null;
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULL" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.VARIABLE.REGNRO_SOLICR = PLSQLBuiltins.to_number(SYSTEM.CURSOR_RECORD);
        // this.GLOBAL.ESTADO_ANTERIOR = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_OFF");
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_ON");
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_whennewrecordinstance_query1", payload1);
        // get values from result
        V_FECHA = result1[0].get("V_FECHA");
        if (result1 == null || result1.length == 0) {

            V_FECHA = null;
        }

        if ((V_FECHA != null)) {
            this.CRTSOLICR.FECHACREDITO = "FEC. RECIBIDO CRÉDITO " + V_FECHA;
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

                // CRFSOLCR_PUP_CONTROL_BOTONES_X_UNIDAD();
            } catch (ex) {

                if (this.oracleFormsBuiltins.error_code() != 0) {
                    // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                }
            }

        }

        console.log("Exiting CRFSOLCR_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    //   
    //  --+PY21520. JDG.
    //  :GLOBAL.MOSTRARMENSAJEFIRMAS := NULL;
    //  
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_keyEntqry() {
        console.log("Entering CRFSOLCR_crtsolicr_keyEntqry");
        console.log("Exiting CRFSOLCR_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   RG_NAME       VARCHAR2(40)  := 'RG_AUDIT';
    //   RG_ID         RECORDGROUP; 
    //   RG_INDICE     NUMBER(3);
    //   T_RESPUESTA   NUMBER;
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 28 DE JUNIO DE 2005
    //   --
    // BEGIN
    //    RG_ID := FIND_GROUP( RG_NAME );
    // 
    //   IF NOT ID_NULL(RG_ID) THEN 
    //      RG_INDICE := GET_GROUP_ROW_COUNT( RG_ID ); 
    //      IF RG_INDICE > 0 THEN
    //         FRM$AUDIT_SOLIC_INSERT;
    //      END IF;
    //   END IF; 
    //   :GLOBAL.ACTUALIZAR := 'NO';
    // END;
    // 
    // 
    // 
    // -------------PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ / MIGUEL LOPEZ  27/06/2018
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
    // END;
    //    
    // --AJ
    // 
    // 
    // ----------------CODIGOS DE ESTRATEGIA 
    // 
    // --+PY26491. JDG. 2018.06.14. SE MUEVE A :CRTSOLICR.PRE-UPDATE
    //   --
    //   -- CUOP
    //   --SET_ITEM_INSTANCE_PROPERTY('CRTSOLICR.SOLICR_MOTARA',CURRENT_RECORD,"UPDATE_ALLOWED", "PROPERTY_FALSE");
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 7 DE DICIEMBRE DE 2005
    //   -- CUOP
    // /*BEGIN
    //  IF :this.PARAMETER.get("PENCCOM") = 'S' THEN
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI );  --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14       
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  --+SET    SOLICR_COMITE = NVL(:this.PARAMETER.get("PCOMITE"),:CRTSOLICR.SOLICR_COMITE)
    //     --+  SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     --+  ;
    //    --+END;
    //    :CRTSOLICR.SOLICR_COMITE := NVL( :this.PARAMETER.get("PCOMITE"), :CRTSOLICR.SOLICR_COMITE  );
    //    --+
    //    :this.PARAMETER.get("PENCCOM") := 'N';
    //  END IF;
    //   EXCEPTION
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    //   END;*/
    //#endregion
    async CRFSOLCR_crtsolicr_postUpdate() {
        console.log("Entering CRFSOLCR_crtsolicr_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: null = null;
        let RG_INDICE: number = null;
        let T_RESPUESTA: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        if ((!this.oracleFormsBuiltins.id_null(RG_ID))) {
            RG_INDICE = this.oracleFormsBuiltins.get_group_row_count(RG_ID);
            if (RG_INDICE > 0) {
                // CRFSOLCR_FRM$AUDIT_SOLIC_INSERT();
            }
        }
        // this.GLOBAL.ACTUALIZAR = "NO";
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            V_PARAMETRO = "SOLICITUD";
            // CRFSOLCR_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        console.log("Exiting CRFSOLCR_crtsolicr_postUpdate");
    }

    //#region PLSQL
    // BEGIN
    //   PU_LEASBACK;
    //   PU_INSERTAR_ESTOBS (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 'GR',
    //                      'SOLICITUD GRABADA '||'( '||TO_CHAR(SYSDATE, 'HH:MI:SS')||' )', :CRTSOLICR.SOLICR_CODUNI);
    //   
    // END;
    // -- CUOP
    // BEGIN
    //  
    //  --+PY26491. JDG. 2018.06.14
    //  --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+  
    //     :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI);  --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14       
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  --+SET    SOLICR_COMITE = NVL(:this.PARAMETER.get("PCOMITE"),:CRTSOLICR.SOLICR_COMITE)
    //     --+  SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     --+  ;
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
    async CRFSOLCR_crtsolicr_postInsert() {
        console.log("Entering CRFSOLCR_crtsolicr_postInsert");
        // CRFSOLCR_PU_LEASBACK();
        // CRFSOLCR_PU_INSERTAR_ESTOBS(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "GR", "SOLICITUD GRABADA " + "( " + SYSDATE.toString() + " )", this.CRTSOLICR.SOLICR_CODUNI);
        try {

            if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                // CRFSOLCR_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, this.CRTSOLICR.SOLICR_VRFINA, this.CRTSOLICR.SOLICR_ORMONET, this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE", this.CRTSOLICR.SOLICR_CODUNI);
                this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? this.CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
                // this.PARAMETER.get("PENCCOM") = "N";
            }
        } catch (ex) {

            // CRFSOLCR_LIB$DTNERFRMA(SQLERRM);
        }

        console.log("Exiting CRFSOLCR_crtsolicr_postInsert");
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
    //     WHERE C.OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN SOLOBS DETAIL DECLARE SECTION
    //   --
    //   CURSOR SOLOBS_CUR IS      
    //     SELECT 1 FROM CRTSOLESTOBS C     
    //     WHERE C.SOBS_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.SOBS_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.SOBS_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END SOLOBS DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CTRSOLICR2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CTRSOLICR2_CUR IS      
    //     SELECT 1 FROM CRTSOLICR C     
    //     WHERE C.SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CTRSOLICR2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN COTSOLFNG DETAIL DECLARE SECTION
    //   --
    //   CURSOR COTSOLFNG_CUR IS      
    //     SELECT 1 FROM COTSOLFNG C     
    //     WHERE C.SOLFNG_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.SOLFNG_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.SOLFNG_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END COTSOLFNG DETAIL DECLARE SECTION
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
    //   --
    //   -- BEGIN COTUVPCCV DETAIL DECLARE SECTION
    //   --
    //   CURSOR COTUVPCCV_CUR IS      
    //     SELECT 1 FROM COTUVPCCV C     
    //     WHERE C.UVPCCV_SOLVOR = :CRTSOLICR.SOLICR_CODVOR AND C.UVPCCV_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END COTUVPCCV DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    // 
    // 
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
    //   -- BEGIN SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   OPEN SOLOBS_CUR;     
    //   FETCH SOLOBS_CUR INTO DUMMY_DEFINE;     
    //   IF ( SOLOBS_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SOLOBS_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SOLOBS_CUR;
    //   --
    //   -- END SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CTRSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN CTRSOLICR2_CUR;     
    //   FETCH CTRSOLICR2_CUR INTO DUMMY_DEFINE;     
    //   IF ( CTRSOLICR2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CTRSOLICR2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CTRSOLICR2_CUR;
    //   --
    //   -- END CTRSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN COTSOLFNG DETAIL PROGRAM SECTION
    //   --
    //   OPEN COTSOLFNG_CUR;     
    //   FETCH COTSOLFNG_CUR INTO DUMMY_DEFINE;     
    //   IF ( COTSOLFNG_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COTSOLFNG_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COTSOLFNG_CUR;
    //   --
    //   -- END COTSOLFNG DETAIL PROGRAM SECTION
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
    //   --
    //   -- BEGIN COTUVPCCV DETAIL PROGRAM SECTION
    //   --
    //   OPEN COTUVPCCV_CUR;     
    //   FETCH COTUVPCCV_CUR INTO DUMMY_DEFINE;     
    //   IF ( COTUVPCCV_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COTUVPCCV_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COTUVPCCV_CUR;
    //   --
    //   -- END COTUVPCCV DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFSOLCR_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFSOLCR_crtsolicr_onCheckDeleteMaster");
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
        console.log("Exiting CRFSOLCR_crtsolicr_onCheckDeleteMaster");
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
    //   -- BEGIN SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.SOLIC_ESTOBS');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SOLOBS');   
    //   END IF;
    //   --
    //   -- END SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CTRSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.REL_SOLXRECON');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CTRSOLICR2');   
    //   END IF;
    //   --
    //   -- END CTRSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN COTSOLFNG DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_COTSOLFNG');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COTSOLFNG');   
    //   END IF;
    //   --
    //   -- END COTSOLFNG DETAIL PROGRAM SECTION
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
    //   --
    //   -- BEGIN COTUVPCCV DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_CODVOR IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_COTUVPCCV');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COTUVPCCV');   
    //   END IF;
    //   --
    //   -- END COTUVPCCV DETAIL PROGRAM SECTION
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
    async CRFSOLCR_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFSOLCR_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.TERXSOLI");
            // CRFSOLCR_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL");
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.SOLIC_ESTOBS");
            // CRFSOLCR_QUERY_MASTER_DETAILS(REL_ID, "SOLOBS");
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.REL_SOLXRECON");
            // CRFSOLCR_QUERY_MASTER_DETAILS(REL_ID, "CTRSOLICR2");
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_COTSOLFNG");
            // CRFSOLCR_QUERY_MASTER_DETAILS(REL_ID, "COTSOLFNG");
        }
        if ((((this.CRTSOLICR.SOLICR_CODUNI != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null)) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTGAADSO");
            // CRFSOLCR_QUERY_MASTER_DETAILS(REL_ID, "CRTGAADSO");
        }
        if (((this.CRTSOLICR.SOLICR_CODVOR != null) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_COTUVPCCV");
            // CRFSOLCR_QUERY_MASTER_DETAILS(REL_ID, "COTUVPCCV");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFSOLCR_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //   FROM   TBEN
    //   WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // 
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIA
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //    AND SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA 
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END; 
    //  
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //      :CRTSOLICR.ACTIVO:= 'NUEVO';
    //   ELSE
    //      :CRTSOLICR.ACTIVO:= 'USADO';
    //   END IF;
    // END;
    // 
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE
    //    INTO   :CRTSOLICR.NONCIASEG    
    //   FROM   TER
    //   WHERE  TERCOD=:CRTSOLICR.SOLICR_CIASEG;
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      :CRDITO:='CONTRATO LEASING';
    //   ELSIF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //      :CRDITO:='PAGARE';
    //   END IF;
    // END;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_USCRED IS NOT NULL THEN
    //    :CRTSOLICR.ANALISTA := FRM$NOMBRE_USUARIO (:CRTSOLICR.SOLICR_USCRED);
    // END IF;
    // 
    // :CRTSOLICR.COMERCIAL := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // :CRTSOLICR.FLANCE    := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_UFREEL);      
    // --
    //  BEGIN
    //    SELECT USU_NOMBRE
    //      INTO :NOM_OFICIAL
    //      FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :CRTSOLICR.SOLICR_USOFID
    //     AND USU_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //   END;  
    // --                                                                     
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      BEGIN 
    //       SELECT TIPBIEN_DESBIEN
    //         INTO :CRTSOLICR.BIEN
    //         FROM CRTTIPBIEN
    //        WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE
    //          AND TIPBIEN_CODUNI  = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //       EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     WHEN OTHERS THEN NULL;
    //   END;    
    //   END IF;
    // END;
    // END;
    // --
    // -- CUOP
    // --SET_ITEM_INSTANCE_PROPERTY('CRTSOLICR.SOLICR_MOTARA',CURRENT_RECORD,"UPDATE_ALLOWED", "PROPERTY_FALSE");
    // DECLARE
    //  VHRASOL CRTHRASOL%ROWTYPE;
    // BEGIN
    //  PQBD_COL_GEN.PHRAINI(:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, :CRTSOLICR.SOLICR_CODUNI, VHRASOL);
    //  :CRTSOLICR.FECRADI_INI := VHRASOL.HRASOL_FECRAD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      IF :CRTSOLICR.SOLICR_FECRADI IS NOT NULL THEN
    //       :CRTSOLICR.FECRADI_INI := :CRTSOLICR.SOLICR_FECRADI;
    //      END IF;
    //   END;
    // 
    // 
    // 
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
    // --SYNCHRONIZE;
    // --
    // -- CUOP
    // DECLARE
    //  VMOE CRTMOESSO%ROWTYPE;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_ESTSOL = 'DC' THEN
    //    PQBD_COL_GEN.PMOESSO(:CRTSOLICR.SOLICR_ESTSOL, :CRTSOLICR.SOLICR_MOTEST, VMOE);
    //    :CRTSOLICR.MOTEST_DC := VMOE.MOESSO_DESCRI;
    //  END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      NULL;
    // END;
    // --
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
    //  
    // 
    //   
    // --PY 122011
    //  
    // BEGIN
    //   SELECT LINEST_DESCES 
    //   INTO :SOLICR_CODLEADESC
    //   FROM COTTLINEST 
    //   WHERE LINEST_CONSEC= :SOLICR_CODLEA
    //     AND LINEST_CODUNI= :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_CODLEADESC := NULL;
    //   
    //   END;
    //   
    //   
    // --PY 122011
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
    //     --PY26690 ANDRES JIMENEZ
    //     BEGIN
    //       SELECT PROD_DESCRI
    //         INTO :TIPDESCR
    //         FROM CRTPRODCIA
    //        WHERE PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //          AND PROD_CODIGO = :SOLICR_CODPRO;
    //      EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //        NULL;
    //     END;
    //     
    //     --PY26690
    //     
    //    PUP_CONTROL_BOTONES_X_UNIDAD; 
    //     
    //  EXCEPTION 
    //    
    //    WHEN OTHERS THEN
    //  
    //          IF ( ERROR_CODE  <> 0 ) THEN
    //            
    //         V_MENSAJE := 'FALLO. '
    //                      || 'CRFSOLCR.CRTSOLICR.POST-QUERY. '
    // //                      || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                      || 'SQLERRM ' || SQLERRM;
    //                      
    //            PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                      
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //          
    //       END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_postQuery() {
        console.log("Entering CRFSOLCR_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        try {

            // construct payload
            let payload2 = new Map();
            // payload2.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
            // payload2.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
            // payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query2", payload2);
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
        const result3 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query3", payload3);
        // get values from result
        this.CRTSOLICR.NONCIASEG = result3[0].get("CRTSOLICR.NONCIASEG");
        if (result3 == null || result3.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.CRDITO = "CONTRATO LEASING";
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.CRDITO = "PAGARE";
        }
        if ((this.CRTSOLICR.SOLICR_USCRED != null)) {
            // this.CRTSOLICR.ANALISTA = FRM$NOMBRE_USUARIO(this.CRTSOLICR.SOLICR_USCRED);
        }
        // this.CRTSOLICR.COMERCIAL = FRM$NOMBRE_USUARIO_CIAL(this.CRTSOLICR.SOLICR_USCIAL);
        // this.CRTSOLICR.FLANCE = FRM$NOMBRE_USUARIO_CIAL(this.CRTSOLICR.SOLICR_UFREEL);
        // construct payload
        let payload4 = new Map();
        payload4.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result4 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query4", payload4);
        // get values from result
        // NOM_OFICIAL = result4[0].get("NOM_OFICIAL");
        if (result4 == null || result4.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            let result5 = new Map();
            try {

                // construct payload
                let payload5 = new Map();
                payload5.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
                payload5.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result5 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query5", payload5);
                // get values from result
                this.CRTSOLICR.BIEN = result5[0].get("CRTSOLICR.BIEN");
                if (result5 == null || result5.length == 0) {

                }

            } catch (ex) {

            }

        }
        let VHRASOL: null = null;
        // CRFSOLCR_PQBD_COL_GEN.PHRAINI(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODUNI, VHRASOL);
        // this.CRTSOLICR.FECRADI_INI = VHRASOL.HRASOL_FECRAD;
        // if (result5 == null || result5.length == 0) {

        //     if ((this.CRTSOLICR.SOLICR_FECRADI != null)) {
        //         this.CRTSOLICR.FECRADI_INI = this.CRTSOLICR.SOLICR_FECRADI;
        //     }
        // }

        // construct payload
        let payload6 = new Map();
        // payload6.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        // call REST API
        const result6 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query6", payload6);
        // get values from result
        // DESCBCDX = result6[0].get("DESCBCDX");
        if (result6 == null || result6.length == 0) {

        }

        // construct payload
        let payload7 = new Map();
        // payload7.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
        // call REST API
        const result7 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query7", payload7);
        // get values from result
        // DESLIMPTO = result7[0].get("DESLIMPTO");
        if (result7 == null || result7.length == 0) {

        }

        let VMOE: null = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "DC") {
            // CRFSOLCR_PQBD_COL_GEN.PMOESSO(this.CRTSOLICR.SOLICR_ESTSOL, this.CRTSOLICR.SOLICR_MOTEST, VMOE);
            // this.CRTSOLICR.MOTEST_DC = VMOE.MOESSO_DESCRI;
        }
        if (result7 == null || result7.length == 0) {

        }

        let VTIC: null = null;
        if ((this.CRTSOLICR.SOLICR_COMITE != null)) {
            // CRFSOLCR_PQBD_COL_ANAGEN.PTIPCOM(this.CRTSOLICR.SOLICR_COMITE, VTIC);
            // this.CRTSOLICR.COMITE = INITCAP(VTIC.TIPCOM_DESCRI);
        }
        if (result7 == null || result7.length == 0) {

        }

        // construct payload
        let payload8 = new Map();
        payload8.set("SOLICR_LINEADES", this.CRTSOLICR.SOLICR_LINEADES);
        // call REST API
        const result8 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query8", payload8);
        // get values from result
        // DES_LINDESEMBO = result8[0].get("DES_LINDESEMBO");
        if (result8 == null || result8.length == 0) {

        }

        // construct payload
        let payload9 = new Map();
        // payload9.set("SOLICR_CODLEA", SOLICR_CODLEA);
        payload9.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result9 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query9", payload9);
        // get values from result
        // SOLICR_CODLEADESC = result9[0].get("SOLICR_CODLEADESC");
        if (result9 == null || result9.length == 0) {

            this.CRTSOLICR.SOLICR_CODLEADESC = null;
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
                const result10 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query10", payload10);
                // get values from result
                // CRTSOLICR.DESCRI_COSEAC = result10[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.DESCRI_COSEAC = null;
            }

            if (this.CRTSOLICR.SOLICR_CODUNI != "001") {
                if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                    let result11 = new Map();
                    try {

                        // construct payload
                        let payload11 = new Map();
                        payload11.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                        // call REST API
                        const result11 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query11", payload11);
                        // get values from result
                        this.CRTSOLICR.UVPCUT_DESCRI = result11[0].get("CRTSOLICR.UVPCUT_DESCRI");
                        this.CRTSOLICR.UVPCUT_VALMER = result11[0].get("CRTSOLICR.UVPCUT_VALMER");
                        this.CRTSOLICR.UVPCUT_VALDAV = result11[0].get("CRTSOLICR.UVPCUT_VALDAV");
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
                    const result12 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query12", payload12);
                    // get values from result
                    this.CRTSOLICR.DESCRI_TISEVE = result12[0].get("CRTSOLICR.DESCRI_TISEVE");
                } catch (ex) {

                    this.CRTSOLICR.DESCRI_TISEVE = null;
                }

                let result13 = new Map();
                try {

                    // construct payload
                    let payload13 = new Map();
                    payload13.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                    // call REST API
                    const result13 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query13", payload13);
                    // get values from result
                    this.CRTSOLICR.SOLICR_ESTRATDESC = result13[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
                } catch (ex) {

                    this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                }

                let result14 = new Map();
                try {

                    // construct payload
                    let payload14 = new Map();
                    payload14.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                    // call REST API
                    const result14 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query14", payload14);
                    // get values from result
                    this.CRTSOLICR.DESCRI_PRSOCL = result14[0].get("CRTSOLICR.DESCRI_PRSOCL");
                } catch (ex) {

                    this.CRTSOLICR.DESCRI_PRSOCL = null;
                }

            }
            // construct payload
            let payload15 = new Map();
            payload15.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // payload15.set("SOLICR_CODPRO", SOLICR_CODPRO);
            // call REST API
            let result15 = Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_postquery_query15", payload15);
            // get values from result
            // TIPDESCR = result15[0].get("TIPDESCR");
            // if (result15 == null || result15.length == 0) {

            // }

            // CRFSOLCR_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   V_UVPUAM_PASSWD          COTUVPUAM.UVPUAM_PASSWD%TYPE;
    //   V_UVPUAM_PASSWD_AUX        COTUVPUAM.UVPUAM_PASSWD%TYPE;
    //   V_SOLICR_ESTFIR        CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //    
    //    BEGIN
    //    
    //     SELECT SOLICR_ESTFIR
    //        INTO V_SOLICR_ESTFIR
    //        FROM CRTSOLICR
    //       WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //         AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND SOLICR_ESTSOL = 'EC';
    //         
    //     EXCEPTION 
    //      
    //      WHEN OTHERS THEN
    //      
    //        V_SOLICR_ESTFIR := NULL;
    //        
    //     END;
    //    
    //   IF :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL THEN 
    //   
    //      IF :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL AND :CRTSOLICR.DESCRI_FIRPN3 IS NOT NULL THEN
    //       
    //        SELECT UVPUAM_PASSWD
    //         INTO V_UVPUAM_PASSWD
    //         FROM COTUVPUAM
    //        WHERE UVPUAM_CODUSU = :CRTSOLICR.SOLICR_CODUS3; 
    //     
    //        IF PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO( :CRTSOLICR.SOLICR_CODUS3, :CRTSOLICR.DESCRI_FIRPN3, V_UVPUAM_PASSWD_AUX ) = 'FALLO' THEN
    //         
    //         V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.DESCRI_FIRPN3.PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE ); 
    //          
    //          V_MENSAJE := 'NO SE PUDO OBTENER LA CLAVE DE SU USUARIO';
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //        
    //         ELSE       
    //         
    //         IF V_UVPUAM_PASSWD = V_UVPUAM_PASSWD_AUX THEN
    //         
    //          LIB$ALERTA( 'MENSAJE', 'CONTRASEÑA DE FIRMA ELECTRÓNICA CORRECTA. ¿ESTÁ SEGURO FIRMAR ESTA SOLICITUD?', 'FIRMAR', 'CANCELAR', NULL, T_RESPUESTA );  
    //          
    //          IF T_RESPUESTA = 1 THEN
    //           
    //           :CRTSOLICR.SOLICR_MOINA3 := :COTUVPAAM.UVPAAM_MOINAT;
    //           :CRTSOLICR.SOLICR_MOSUA3 := :COTUVPAAM.UVPAAM_MOSUAT;
    //           :CRTSOLICR.SOLICR_FEFIU3 := SYSDATE;
    //           GO_ITEM( 'CRTSOLICR.SOLICR_CODUS1' );
    //           
    //           --LIB$ALERTA( 'MENSAJE','MENSAJE SOLICR_ESTFIR5 FALSE ' || :CRTSOLICR.SOLICR_CODSOL || ':' || :CRTSOLICR.SOLICR_ESTSOL, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //            
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_ESTFIR', "ENABLED", "PROPERTY_FALSE" );
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_CODUS3', "ENABLED", "PROPERTY_FALSE" );
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN3', "ENABLED", "PROPERTY_FALSE" );
    //           
    //          ELSE
    //           
    //           :CRTSOLICR.SOLICR_CODUS3 := NULL;
    //           :CRTSOLICR.DESCRI_CODUS3 := NULL;
    //           :CRTSOLICR.DESCRI_FIRPN3 := NULL;
    //           
    //           IF V_SOLICR_ESTFIR IS NOT NULL OR 
    //            ( V_SOLICR_ESTFIR IS NULL AND :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL AND  
    //                  ( ( :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA1 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA1 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU1 IS NOT NULL ) OR 
    //                    ( :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA2 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA2 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU2 IS NOT NULL ) OR
    //                    ( :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA3 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA3 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU3 IS NOT NULL ) ) ) THEN
    //                  
    //                NULL;
    //                
    //               ELSE
    //                
    //                :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //                
    //               END IF; 
    //               
    //           GO_ITEM( 'CRTSOLICR.SOLICR_CODUS3' );
    //           
    //          END IF;
    //          
    //          COMMIT_FORM;
    //          
    //          ELSE
    //           
    //          LIB$ALERTA( 'MENSAJE', 'CONTRASEÑA DE FIRMA ELECTRÓNICA INCORRECTA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //          :CRTSOLICR.DESCRI_FIRPN3 := NULL;
    //          GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN3' );
    //          
    //         END IF; 
    //         
    //        END IF;  
    //      
    //     ELSE
    //          
    //       LIB$ALERTA( 'MENSAJE', 'INGRESE UNA CONTRASEÑA DE FIRMA ELECTRÓNICA VÁLIDA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //       :CRTSOLICR.DESCRI_FIRPN3 := NULL;
    //       GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN3' );
    //      
    //      END IF;    
    //      
    //    ELSE
    //       
    //      LIB$ALERTA( 'MENSAJE', 'ANTES DE FIRMAR ELECTRÓNICAMENTE DEBE INDICAR EL ESTADO DE LA SOLICITUD DEFINIDO EN EL COMITÉ DE CRÉDITO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //      GO_ITEM( 'CRTSOLICR.SOLICR_ESTFIR' );
    //       
    //    END IF;   
    //   
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.DESCRI_FIRPN3.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_descriFirpn3_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_descriFirpn3_keyNextItem");
        let V_UVPUAM_PASSWD: string = null;
        let V_UVPUAM_PASSWD_AUX: string = null;
        let V_SOLICR_ESTFIR: string = null;
        let T_RESPUESTA: string = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_descrifirpn3_keynextitem_query1", payload1);
                // get values from result
                V_SOLICR_ESTFIR = result1[0].get("V_SOLICR_ESTFIR");
            } catch (ex) {

                V_SOLICR_ESTFIR = null;
            }

            if ((this.CRTSOLICR.SOLICR_ESTFIR != null)) {
                if (((this.CRTSOLICR.SOLICR_CODUS3 != null) && (this.CRTSOLICR.DESCRI_FIRPN3 != null))) {
                    // construct payload
                    let payload2 = new Map();
                    payload2.set("SOLICR_CODUS3", this.CRTSOLICR.SOLICR_CODUS3);
                    // call REST API
                    const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_descrifirpn3_keynextitem_query2", payload2);
                    // get values from result
                    V_UVPUAM_PASSWD = result2[0].get("V_UVPUAM_PASSWD");
                    // if (PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO(this.CRTSOLICR.SOLICR_CODUS3, this.CRTSOLICR.DESCRI_FIRPN3, V_UVPUAM_PASSWD_AUX) == "FALLO") {
                    //     // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.DESCRI_FIRPN3.PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    //     // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                    //     V_MENSAJE = "NO SE PUDO OBTENER LA CLAVE DE SU USUARIO";
                    //     // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                    // else {
                    //     if (V_UVPUAM_PASSWD == V_UVPUAM_PASSWD_AUX) {
                    //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRASEÑA DE FIRMA ELECTRÓNICA CORRECTA. ¿ESTÁ SEGURO FIRMAR ESTA SOLICITUD?", "FIRMAR", "CANCELAR", null, T_RESPUESTA);
                    //         if (T_RESPUESTA == 1) {
                    //             this.CRTSOLICR.SOLICR_MOINA3 = this.COTUVPAAM.UVPAAM_MOINAT;
                    //             this.CRTSOLICR.SOLICR_MOSUA3 = this.COTUVPAAM.UVPAAM_MOSUAT;
                    //             this.CRTSOLICR.SOLICR_FEFIU3 = PLSQLBuiltins.sysdate();
                    //             this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODUS1");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ESTFIR", "ENABLED", "PROPERTY_FALSE");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CODUS3", "ENABLED", "PROPERTY_FALSE");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN3", "ENABLED", "PROPERTY_FALSE");
                    //         }
                    //         else {
                    //             this.CRTSOLICR.SOLICR_CODUS3 = null;
                    //             this.CRTSOLICR.DESCRI_CODUS3 = null;
                    //             this.CRTSOLICR.DESCRI_FIRPN3 = null;
                    //             if (((V_SOLICR_ESTFIR != null) || (((V_SOLICR_ESTFIR == null) && (this.CRTSOLICR.SOLICR_ESTFIR != null)) && ((((((this.CRTSOLICR.SOLICR_CODUS1 != null) && (this.CRTSOLICR.SOLICR_MOINA1 != null)) && (this.CRTSOLICR.SOLICR_MOSUA1 != null)) && (this.CRTSOLICR.SOLICR_FEFIU1 != null)) || ((((this.CRTSOLICR.SOLICR_CODUS2 != null) && (this.CRTSOLICR.SOLICR_MOINA2 != null)) && (this.CRTSOLICR.SOLICR_MOSUA2 != null)) && (this.CRTSOLICR.SOLICR_FEFIU2 != null))) || ((((this.CRTSOLICR.SOLICR_CODUS3 != null) && (this.CRTSOLICR.SOLICR_MOINA3 != null)) && (this.CRTSOLICR.SOLICR_MOSUA3 != null)) && (this.CRTSOLICR.SOLICR_FEFIU3 != null)))))) {
                    //             }
                    //             else {
                    //                 this.CRTSOLICR.SOLICR_ESTFIR = null;
                    //             }
                    //             this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODUS3");
                    //         }
                    //         this.oracleFormsBuiltins.commit_form();
                    //     }
                    //     else {
                    //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRASEÑA DE FIRMA ELECTRÓNICA INCORRECTA.", "ACEPTAR", null, null, T_RESPUESTA);
                    //         this.CRTSOLICR.DESCRI_FIRPN3 = null;
                    //         this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN3");
                    //     }
                    // }
                }
                else {
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "INGRESE UNA CONTRASEÑA DE FIRMA ELECTRÓNICA VÁLIDA.", "ACEPTAR", null, null, T_RESPUESTA);
                    this.CRTSOLICR.DESCRI_FIRPN3 = null;
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN3");
                }
            }
            else {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "ANTES DE FIRMAR ELECTRÓNICAMENTE DEBE INDICAR EL ESTADO DE LA SOLICITUD DEFINIDO EN EL COMITÉ DE CRÉDITO.", "ACEPTAR", null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ESTFIR");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.DESCRI_FIRPN3.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_descriFirpn3_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR IS NOT NULL THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //  SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //  :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //   IF :CRTSOLICR.SOLICR_FINAGR <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //        FRM$GARANTIAS_EQUIS ('FIN');   
    //   END IF;
    //  ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_FALSE");  --CAHH   
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFinagr_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFinagr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINAGR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINAGR != "X") {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("FIN");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFinagr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   V_UVPUAM_PASSWD          COTUVPUAM.UVPUAM_PASSWD%TYPE;
    //   V_UVPUAM_PASSWD_AUX        COTUVPUAM.UVPUAM_PASSWD%TYPE;
    //   V_SOLICR_ESTFIR        CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    // 
    //     BEGIN
    //    
    //     SELECT SOLICR_ESTFIR
    //        INTO V_SOLICR_ESTFIR
    //        FROM CRTSOLICR
    //       WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //         AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND SOLICR_ESTSOL = 'EC';
    //         
    //     EXCEPTION 
    //      
    //      WHEN OTHERS THEN
    //      
    //        V_SOLICR_ESTFIR := NULL;
    //        
    //     END;       
    //   
    //   IF :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL THEN 
    //   
    //      IF :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL AND :CRTSOLICR.DESCRI_FIRPN2 IS NOT NULL THEN
    //       
    //        SELECT UVPUAM_PASSWD
    //         INTO V_UVPUAM_PASSWD
    //         FROM COTUVPUAM
    //        WHERE UVPUAM_CODUSU = :CRTSOLICR.SOLICR_CODUS2; 
    //     
    //        IF PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO( :CRTSOLICR.SOLICR_CODUS2, :CRTSOLICR.DESCRI_FIRPN2, V_UVPUAM_PASSWD_AUX ) = 'FALLO' THEN
    //         
    //         V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.DESCRI_FIRPN2.PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE ); 
    //          
    //          V_MENSAJE := 'NO SE PUDO OBTENER LA CLAVE DE SU USUARIO';
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //        
    //         ELSE       
    //         
    //         IF V_UVPUAM_PASSWD = V_UVPUAM_PASSWD_AUX THEN
    //         
    //          LIB$ALERTA( 'MENSAJE', 'CONTRASEÑA DE FIRMA ELECTRÓNICA CORRECTA. ¿ESTÁ SEGURO FIRMAR ESTA SOLICITUD?', 'FIRMAR', 'CANCELAR', NULL, T_RESPUESTA );  
    //          
    //          IF T_RESPUESTA = 1 THEN
    //           
    //           :CRTSOLICR.SOLICR_MOINA2 := :COTUVPAAM.UVPAAM_MOINAT;
    //           :CRTSOLICR.SOLICR_MOSUA2 := :COTUVPAAM.UVPAAM_MOSUAT;
    //           :CRTSOLICR.SOLICR_FEFIU2 := SYSDATE;
    //           GO_ITEM( 'CRTSOLICR.SOLICR_CODUS3' );
    //           
    //           --LIB$ALERTA( 'MENSAJE','MENSAJE SOLICR_ESTFIR4 FALSE ' || :CRTSOLICR.SOLICR_CODSOL || ':' || :CRTSOLICR.SOLICR_ESTSOL, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //            
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_ESTFIR', "ENABLED", "PROPERTY_FALSE" );
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_CODUS2', "ENABLED", "PROPERTY_FALSE" );
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN2', "ENABLED", "PROPERTY_FALSE" );
    //           
    //          ELSE
    //           
    //           :CRTSOLICR.SOLICR_CODUS2 := NULL;
    //           :CRTSOLICR.DESCRI_CODUS2 := NULL;
    //           :CRTSOLICR.DESCRI_FIRPN2 := NULL;
    //           
    //           IF V_SOLICR_ESTFIR IS NOT NULL OR 
    //            ( V_SOLICR_ESTFIR IS NULL AND :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL AND  
    //                  ( ( :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA1 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA1 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU1 IS NOT NULL ) OR 
    //                    ( :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA2 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA2 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU2 IS NOT NULL ) OR
    //                    ( :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA3 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA3 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU3 IS NOT NULL ) ) ) THEN
    //                  
    //                NULL;
    //                
    //               ELSE
    //                
    //                :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //                
    //               END IF; 
    //           
    //           GO_ITEM( 'CRTSOLICR.SOLICR_CODUS2' );
    //           
    //          END IF; 
    //          
    //          COMMIT_FORM;
    //          
    //          ELSE
    //           
    //          LIB$ALERTA( 'MENSAJE', 'CONTRASEÑA DE FIRMA ELECTRÓNICA INCORRECTA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //          :CRTSOLICR.DESCRI_FIRPN2 := NULL;
    //          GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN2' );
    //          
    //         END IF; 
    //         
    //         END IF;  
    //         
    //      ELSE
    //         
    //        LIB$ALERTA( 'MENSAJE', 'INGRESE UNA CONTRASEÑA DE FIRMA ELECTRÓNICA VÁLIDA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //        :CRTSOLICR.DESCRI_FIRPN2 := NULL;
    //        GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN2' );   
    //      
    //      END IF;
    //      
    //    ELSE
    //       
    //      LIB$ALERTA( 'MENSAJE', 'ANTES DE FIRMAR ELECTRÓNICAMENTE DEBE INDICAR EL ESTADO DE LA SOLICITUD DEFINIDO EN EL COMITÉ DE CRÉDITO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //      GO_ITEM( 'CRTSOLICR.SOLICR_ESTFIR' );
    //       
    //    END IF;   
    //   
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.DESCRI_FIRPN2.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_descriFirpn2_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_descriFirpn2_keyNextItem");
        let V_UVPUAM_PASSWD: null = null;
        let V_UVPUAM_PASSWD_AUX: null = null;
        let V_SOLICR_ESTFIR: null = null;
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_descrifirpn2_keynextitem_query1", payload1);
                // get values from result
                V_SOLICR_ESTFIR = result1[0].get("V_SOLICR_ESTFIR");
            } catch (ex) {

                V_SOLICR_ESTFIR = null;
            }

            if ((this.CRTSOLICR.SOLICR_ESTFIR != null)) {
                if (((this.CRTSOLICR.SOLICR_CODUS2 != null) && (this.CRTSOLICR.DESCRI_FIRPN2 != null))) {
                    // construct payload
                    let payload2 = new Map();
                    payload2.set("SOLICR_CODUS2", this.CRTSOLICR.SOLICR_CODUS2);
                    // call REST API
                    const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_descrifirpn2_keynextitem_query2", payload2);
                    // get values from result
                    V_UVPUAM_PASSWD = result2[0].get("V_UVPUAM_PASSWD");
                    // if (PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO(this.CRTSOLICR.SOLICR_CODUS2, this.CRTSOLICR.DESCRI_FIRPN2, V_UVPUAM_PASSWD_AUX) == "FALLO") {
                    //     // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.DESCRI_FIRPN2.PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    //     // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                    //     V_MENSAJE = "NO SE PUDO OBTENER LA CLAVE DE SU USUARIO";
                    //     // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                    // else {
                    //     if (V_UVPUAM_PASSWD == V_UVPUAM_PASSWD_AUX) {
                    //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRASEÑA DE FIRMA ELECTRÓNICA CORRECTA. ¿ESTÁ SEGURO FIRMAR ESTA SOLICITUD?", "FIRMAR", "CANCELAR", null, T_RESPUESTA);
                    //         if (T_RESPUESTA == 1) {
                    //             this.CRTSOLICR.SOLICR_MOINA2 = this.COTUVPAAM.UVPAAM_MOINAT;
                    //             this.CRTSOLICR.SOLICR_MOSUA2 = this.COTUVPAAM.UVPAAM_MOSUAT;
                    //             this.CRTSOLICR.SOLICR_FEFIU2 = PLSQLBuiltins.sysdate();
                    //             this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODUS3");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ESTFIR", "ENABLED", "PROPERTY_FALSE");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CODUS2", "ENABLED", "PROPERTY_FALSE");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN2", "ENABLED", "PROPERTY_FALSE");
                    //         }
                    //         else {
                    //             this.CRTSOLICR.SOLICR_CODUS2 = null;
                    //             this.CRTSOLICR.DESCRI_CODUS2 = null;
                    //             this.CRTSOLICR.DESCRI_FIRPN2 = null;
                    //             if (((V_SOLICR_ESTFIR != null) || (((V_SOLICR_ESTFIR == null) && (this.CRTSOLICR.SOLICR_ESTFIR != null)) && ((((((this.CRTSOLICR.SOLICR_CODUS1 != null) && (this.CRTSOLICR.SOLICR_MOINA1 != null)) && (this.CRTSOLICR.SOLICR_MOSUA1 != null)) && (this.CRTSOLICR.SOLICR_FEFIU1 != null)) || ((((this.CRTSOLICR.SOLICR_CODUS2 != null) && (this.CRTSOLICR.SOLICR_MOINA2 != null)) && (this.CRTSOLICR.SOLICR_MOSUA2 != null)) && (this.CRTSOLICR.SOLICR_FEFIU2 != null))) || ((((this.CRTSOLICR.SOLICR_CODUS3 != null) && (this.CRTSOLICR.SOLICR_MOINA3 != null)) && (this.CRTSOLICR.SOLICR_MOSUA3 != null)) && (this.CRTSOLICR.SOLICR_FEFIU3 != null)))))) {
                    //             }
                    //             else {
                    //                 this.CRTSOLICR.SOLICR_ESTFIR = null;
                    //             }
                    //             this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODUS2");
                    //         }
                    //         this.oracleFormsBuiltins.commit_form();
                    //     }
                    //     else {
                    //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRASEÑA DE FIRMA ELECTRÓNICA INCORRECTA.", "ACEPTAR", null, null, T_RESPUESTA);
                    //         this.CRTSOLICR.DESCRI_FIRPN2 = null;
                    //         this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN2");
                    //     }
                    // }
                }
                else {
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "INGRESE UNA CONTRASEÑA DE FIRMA ELECTRÓNICA VÁLIDA.", "ACEPTAR", null, null, T_RESPUESTA);
                    this.CRTSOLICR.DESCRI_FIRPN2 = null;
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN2");
                }
            }
            else {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "ANTES DE FIRMAR ELECTRÓNICAMENTE DEBE INDICAR EL ESTADO DE LA SOLICITUD DEFINIDO EN EL COMITÉ DE CRÉDITO.", "ACEPTAR", null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ESTFIR");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.DESCRI_FIRPN2.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_descriFirpn2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW ('PER_GRACIA'); END;
    //#endregion
    async CRFSOLCR_crtsolicr_txtTotplazo_postTextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_txtTotplazo_postTextItem");
        this.oracleFormsBuiltins.hide_view("PER_GRACIA");
        console.log("Exiting CRFSOLCR_crtsolicr_txtTotplazo_postTextItem");
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
    //                   || 'CRFCSOLCR.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_txtTotplazo_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_txtTotplazo_keyNextItem");
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
                // V_MENSAJE = "FALLO. " + "CRFCSOLCR.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_txtTotplazo_keyNextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCoseac_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCoseac_whenValidateItem");
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
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrcoseac_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.DESCRI_COSEAC = result1[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COSEAC = null;
                this.CRTSOLICR.DESCRI_COSEAC = null;
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "CÓDIGO DE SUBPRODUCTO INVÁLIDO.", null, null, null, T_RESPUESTA);
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
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCoseac_whenValidateItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCoseac_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCoseac_keyNextItem");
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
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCoseac_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   V_UVPUAM_PASSWD          COTUVPUAM.UVPUAM_PASSWD%TYPE;
    //   V_UVPUAM_PASSWD_AUX        COTUVPUAM.UVPUAM_PASSWD%TYPE;
    //   V_SOLICR_ESTFIR        CRTSOLICR.SOLICR_ESTFIR%TYPE;
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //   BEGIN
    //    
    //     BEGIN
    //    
    //     SELECT SOLICR_ESTFIR
    //        INTO V_SOLICR_ESTFIR
    //        FROM CRTSOLICR
    //       WHERE SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //         AND SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND SOLICR_ESTSOL = 'EC';
    //         
    //     EXCEPTION 
    //      
    //      WHEN OTHERS THEN
    //      
    //        V_SOLICR_ESTFIR := NULL;
    //        
    //     END;
    //   
    //   IF :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL THEN 
    //   
    //      IF :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL AND :CRTSOLICR.DESCRI_FIRPN1 IS NOT NULL THEN
    //       
    //        SELECT UVPUAM_PASSWD
    //         INTO V_UVPUAM_PASSWD
    //         FROM COTUVPUAM
    //        WHERE UVPUAM_CODUSU = :CRTSOLICR.SOLICR_CODUS1; 
    //     
    //        IF PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO( :CRTSOLICR.SOLICR_CODUS1, :CRTSOLICR.DESCRI_FIRPN1, V_UVPUAM_PASSWD_AUX ) = 'FALLO' THEN
    //         
    //         V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.DESCRI_FIRPN1.PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE ); 
    //          
    //          V_MENSAJE := 'NO SE PUDO OBTENER LA CLAVE DE SU USUARIO';
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //        
    //         ELSE       
    //         
    //         IF V_UVPUAM_PASSWD = V_UVPUAM_PASSWD_AUX THEN
    //         
    //          LIB$ALERTA( 'MENSAJE', 'CONTRASEÑA DE FIRMA ELECTRÓNICA CORRECTA. ¿ESTÁ SEGURO FIRMAR ESTA SOLICITUD?', 'FIRMAR', 'CANCELAR', NULL, T_RESPUESTA );  
    //          
    //          IF T_RESPUESTA = 1 THEN
    //           
    //           :CRTSOLICR.SOLICR_MOINA1 := :COTUVPAAM.UVPAAM_MOINAT;
    //           :CRTSOLICR.SOLICR_MOSUA1 := :COTUVPAAM.UVPAAM_MOSUAT;
    //           :CRTSOLICR.SOLICR_FEFIU1 := SYSDATE;
    //           GO_ITEM( 'CRTSOLICR.SOLICR_CODUS2' );
    //           
    //           --LIB$ALERTA( 'MENSAJE','MENSAJE SOLICR_ESTFIR3 FALSE ' || :CRTSOLICR.SOLICR_CODSOL || ':' || :CRTSOLICR.SOLICR_ESTSOL, 'ACEPTAR', NULL, NULL, T_RESPUESTA ); 
    //            
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_ESTFIR', "ENABLED", "PROPERTY_FALSE" );
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_CODUS1', "ENABLED", "PROPERTY_FALSE" );
    //           SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN1', "ENABLED", "PROPERTY_FALSE" );
    //           
    //          ELSE
    //           
    //           :CRTSOLICR.SOLICR_CODUS1 := NULL;
    //           :CRTSOLICR.DESCRI_CODUS1 := NULL;
    //           :CRTSOLICR.DESCRI_FIRPN1 := NULL;
    //           
    //           IF V_SOLICR_ESTFIR IS NOT NULL OR 
    //            ( V_SOLICR_ESTFIR IS NULL AND :CRTSOLICR.SOLICR_ESTFIR IS NOT NULL AND  
    //                  ( ( :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA1 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA1 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU1 IS NOT NULL ) OR 
    //                    ( :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA2 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA2 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU2 IS NOT NULL ) OR
    //                    ( :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL AND :CRTSOLICR.SOLICR_MOINA3 IS NOT NULL AND :CRTSOLICR.SOLICR_MOSUA3 IS NOT NULL AND :CRTSOLICR.SOLICR_FEFIU3 IS NOT NULL ) ) ) THEN
    //                  
    //                NULL;
    //                
    //               ELSE
    //                
    //                :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //                
    //               END IF; 
    //                
    //           GO_ITEM( 'CRTSOLICR.SOLICR_CODUS1' );
    //           
    //          END IF; 
    //          
    //          COMMIT_FORM;
    //          
    //          ELSE
    //           
    //          LIB$ALERTA( 'MENSAJE', 'CONTRASEÑA DE FIRMA ELECTRÓNICA INCORRECTA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //          :CRTSOLICR.DESCRI_FIRPN1 := NULL;
    //          GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN1' );
    //          
    //         END IF; 
    //         
    //         END IF;  
    //       
    //      ELSE
    //         
    //        LIB$ALERTA( 'MENSAJE', 'INGRESE UNA CONTRASEÑA DE FIRMA ELECTRÓNICA VÁLIDA.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //        :CRTSOLICR.DESCRI_FIRPN1 := NULL;
    //        GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN1' );   
    //      
    //      END IF;
    //      
    //    ELSE
    //       
    //      LIB$ALERTA( 'MENSAJE', 'ANTES DE FIRMAR ELECTRÓNICAMENTE DEBE INDICAR EL ESTADO DE LA SOLICITUD DEFINIDO EN EL COMITÉ DE CRÉDITO.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //      GO_ITEM( 'CRTSOLICR.SOLICR_ESTFIR' );
    //       
    //    END IF;   
    //   
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.DESCRI_FIRPN1.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_descriFirpn1_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_descriFirpn1_keyNextItem");
        let V_UVPUAM_PASSWD: null = null;
        let V_UVPUAM_PASSWD_AUX: null = null;
        let V_SOLICR_ESTFIR: null = null;
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_descrifirpn1_keynextitem_query1", payload1);
                // get values from result
                V_SOLICR_ESTFIR = result1[0].get("V_SOLICR_ESTFIR");
            } catch (ex) {

                V_SOLICR_ESTFIR = null;
            }

            if ((this.CRTSOLICR.SOLICR_ESTFIR != null)) {
                if (((this.CRTSOLICR.SOLICR_CODUS1 != null) && (this.CRTSOLICR.DESCRI_FIRPN1 != null))) {
                    // construct payload
                    let payload2 = new Map();
                    payload2.set("SOLICR_CODUS1", this.CRTSOLICR.SOLICR_CODUS1);
                    // call REST API
                    const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_descrifirpn1_keynextitem_query2", payload2);
                    // get values from result
                    V_UVPUAM_PASSWD = result2[0].get("V_UVPUAM_PASSWD");
                    // if (PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO(this.CRTSOLICR.SOLICR_CODUS1, this.CRTSOLICR.DESCRI_FIRPN1, V_UVPUAM_PASSWD_AUX) == "FALLO") {
                    //     // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.DESCRI_FIRPN1.PQBD_COL_INTERFAZ_VOR.FBD_COL_VALIDARCLAVEUSUARIO. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    //     // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                    //     V_MENSAJE = "NO SE PUDO OBTENER LA CLAVE DE SU USUARIO";
                    //     // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                    // else {
                    //     if (V_UVPUAM_PASSWD == V_UVPUAM_PASSWD_AUX) {
                    //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRASEÑA DE FIRMA ELECTRÓNICA CORRECTA. ¿ESTÁ SEGURO FIRMAR ESTA SOLICITUD?", "FIRMAR", "CANCELAR", null, T_RESPUESTA);
                    //         if (T_RESPUESTA == 1) {
                    //             this.CRTSOLICR.SOLICR_MOINA1 = this.COTUVPAAM.UVPAAM_MOINAT;
                    //             this.CRTSOLICR.SOLICR_MOSUA1 = this.COTUVPAAM.UVPAAM_MOSUAT;
                    //             this.CRTSOLICR.SOLICR_FEFIU1 = PLSQLBuiltins.sysdate().toString();
                    //             this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODUS2");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_ESTFIR", "ENABLED", "PROPERTY_FALSE");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_CODUS1", "ENABLED", "PROPERTY_FALSE");
                    //             this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN1", "ENABLED", "PROPERTY_FALSE");
                    //         }
                    //         else {
                    //             this.CRTSOLICR.SOLICR_CODUS1 = null;
                    //             this.CRTSOLICR.DESCRI_CODUS1 = null;
                    //             this.CRTSOLICR.DESCRI_FIRPN1 = null;
                    //             if (((V_SOLICR_ESTFIR != null) || (((V_SOLICR_ESTFIR == null) && (this.CRTSOLICR.SOLICR_ESTFIR != null)) && ((((((this.CRTSOLICR.SOLICR_CODUS1 != null) && (this.CRTSOLICR.SOLICR_MOINA1 != null)) && (this.CRTSOLICR.SOLICR_MOSUA1 != null)) && (this.CRTSOLICR.SOLICR_FEFIU1 != null)) || ((((this.CRTSOLICR.SOLICR_CODUS2 != null) && (this.CRTSOLICR.SOLICR_MOINA2 != null)) && (this.CRTSOLICR.SOLICR_MOSUA2 != null)) && (this.CRTSOLICR.SOLICR_FEFIU2 != null))) || ((((this.CRTSOLICR.SOLICR_CODUS3 != null) && (this.CRTSOLICR.SOLICR_MOINA3 != null)) && (this.CRTSOLICR.SOLICR_MOSUA3 != null)) && (this.CRTSOLICR.SOLICR_FEFIU3 != null)))))) {
                    //             }
                    //             else {
                    //                 this.CRTSOLICR.SOLICR_ESTFIR = null;
                    //             }
                    //             this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODUS1");
                    //         }
                    //         this.oracleFormsBuiltins.commit_form();
                    //     }
                    //     else {
                    //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRASEÑA DE FIRMA ELECTRÓNICA INCORRECTA.", "ACEPTAR", null, null, T_RESPUESTA);
                    //         this.CRTSOLICR.DESCRI_FIRPN1 = null;
                    //         this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN1");
                    //     }
                    // }
                }
                else {
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "INGRESE UNA CONTRASEÑA DE FIRMA ELECTRÓNICA VÁLIDA.", "ACEPTAR", null, null, T_RESPUESTA);
                    this.CRTSOLICR.DESCRI_FIRPN1 = null;
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN1");
                }
            }
            else {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "ANTES DE FIRMAR ELECTRÓNICAMENTE DEBE INDICAR EL ESTADO DE LA SOLICITUD DEFINIDO EN EL COMITÉ DE CRÉDITO.", "ACEPTAR", null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_ESTFIR");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.DESCRI_FIRPN1.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_descriFirpn1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_MODALI IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT MODCOD
    //     INTO DESC1
    //    FROM MOD$
    //    WHERE MODCOD =:SOLICR_MODALI;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE MODALIDAD INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrModali_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrModali_whenValidateItem");
        // if ((SOLICR_MODALI != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODALI", SOLICR_MODALI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrmodali_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrModali_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_MODINT',ENTERABLE,"PROPERTY_OFF");
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrModali_postTextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrModali_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_MODINT", "ENTERABLE", "PROPERTY_OFF");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrModali_postTextItem");
    }

    //#region PLSQL
    // BEGIN PBD_VALIGRACIA;--PY 12192
    //     
    //     NEXT_ITEM; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrModali_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrModali_keyNextItem");
        // CRFSOLCR_PBD_VALIGRACIA();
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCR_crtsolicr_solicrModali_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SOLICR_OFCSOL'); END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVlrtit_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVlrtit_keyNextItem");
        this.oracleFormsBuiltins.go_item("SOLICR_OFCSOL");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVlrtit_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //   :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //    IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINAGRO',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR := 'X';
    //        FRM$GARANTIAS_EQUIS ('FIN');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFinagp_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFinagp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINAGR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP > 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINAGRO", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("FIN");
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFinagp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --6828
    // PU_VALIPORCEN (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_VPAVAL,:CRTSOLICR.SOLICR_TIPBIE,:CRTSOLICR.SOLICR_CODUNI);
    // --6828; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVpaval_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVpaval_whenValidateItem");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVpaval_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --6828
    // PU_VALIPORCEN (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_VPAVAL,:CRTSOLICR.SOLICR_TIPBIE, :CRTSOLICR.SOLICR_CODUNI);
    // GO_ITEM('SOLICR_FECVIG');
    // --6828; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVpaval_keyPrevItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVpaval_keyPrevItem");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVpaval_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN --6828
    // PU_VALIPORCEN (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_VPAVAL,:CRTSOLICR.SOLICR_TIPBIE,:CRTSOLICR.SOLICR_CODUNI);
    // GO_BLOCK('SOLOBS');
    // GO_ITEM('SOBS_ESTADO');
    // --6828; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVpaval_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVpaval_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVpaval_keyNextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPrsocl_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPrsocl_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrprsocl_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.DESCRI_PRSOCL = result1[0].get("CRTSOLICR.DESCRI_PRSOCL");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_PRSOCL = null;
                this.CRTSOLICR.DESCRI_PRSOCL = null;
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "CÓDIGO DE PROPÓSITO DE CRÉDITO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrPrsocl_whenValidateItem");
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
    //                   || 'CRFCSOLCR.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
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
    async CRFSOLCR_crtsolicr_solicrPrsocl_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPrsocl_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECDEVO");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCSOLCR.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFCSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrPrsocl_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :SOLICR_LINEADES = 'LX' AND :SOLICR_FDESEMCLI IS NULL THEN
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    // ELSIF :SOLICR_FDESEMCLI < (SYSDATE + 1)  THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY + DOS DÍAS '||TO_CHAR(SYSDATE+2,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((SOLICR_LINEADES == "LX" && (SOLICR_FDESEMCLI == null))) {
        //     // CRFSOLCR_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        // }
        // else if (SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate() + 1) {
        //     // CRFSOLCR_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES A HOY + DOS DÍAS " + PLSQLBuiltins.sysdate() + 2.toString());
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFdesemcli_whenValidateItem");
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
    //                    || 'CRFSOLCR.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_btnCupotaxi_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_btnCupotaxi_whenButtonPressed");
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

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_btnCupotaxi_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_IFI = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //   :CRTSOLICR.SOLICR_TBCOLDX := NULL;
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
    async CRFSOLCR_crtsolicr_solicrIfip_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrIfip_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_IFI == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP > 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR IFI", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_IFI = "X";
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrIfip_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrIfip_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrIfip_keyNextItem");
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
        console.log("Exiting CRFSOLCR_crtsolicr_solicrIfip_keyNextItem");
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
    async CRFSOLCR_crtsolicr_solicrSeguro_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrSeguro_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_SEGURO) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrSeguro_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
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
    //             ----CAHH   SIMASOL 20213
    //         IF :SOLICR_ORMONET <> :SOLICR_ORMONUS$ THEN
    //        LIB$ALERTA('MENSAJE','EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //     
    //     
    //     EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE;
    //   END; 
    //   -- CUOP
    //   --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+  
    //     :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     :this.PARAMETER.get("PENCCOM") := 'S';
    //   END IF;
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrOrmonet_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrOrmonet_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONET", SOLICR_ORMONET);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrormonet_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (SOLICR_ORMONET != SOLICR_ORMONUS) {
        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL ORIGEN MONETARIO DEL MONTO DEBE COINCIDIR CON EL ORIGEN MONETARIO DEL CANON", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        //     if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
        //         this.PARAMETER.get("PENCCOM") = "S";
        //     }
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrOrmonet_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrGtiare_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //   SELECT TLINCOD
    //    INTO DESC1
    //    FROM TLIN
    //    WHERE TLINCOD =:SOLICR_LINEA;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrLinea_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrLinea_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_LINEA", SOLICR_LINEA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrlinea_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrLinea_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    //    V_ESTADO        VARCHAR2(2) := 'EC';
    // 
    // BEGIN
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL = 'RJ' THEN
    // 
    //  IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    //  THEN
    //              LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL NUEVO ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //              GO_BLOCK('SOLOBS');
    //              LAST_RECORD;
    //              :VARIABLE.VAR_ESTADO := V_ESTADO;
    //              RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    // 
    //        -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    // 
    //         FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //                 'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL, 
    //                    V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //         :CRTSOLICR.SOLICR_ESTSOL  := V_ESTADO;
    //         :CRTSOLICR.SOLICR_FECDEVO := SYSDATE;
    //         :GLOBAL.ACTUALIZAR := 'SI'; 
    //         COMMIT_FORM;
    //         LIB$ALERTA('MENSAJE','SOLICITUD PUESTA EN ESTADO EC ',NULL,NULL,NULL,T_RESPUESTA);
    //         GO_ITEM('CRTSOLICR.SOLICR_CODSOL');
    //  ELSE
    //     LIB$ALERTA('MENSAJE','SOLICITUD NO PUEDE SER PUESTA NUEVAMENTE EN EC. SE ENCUENTRA EN ESTADO: '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_devolerEc_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_devolerEc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'EC';
        if (this.CRTSOLICR.SOLICR_ESTSOL == "RJ") {
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL NUEVO ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            this.CRTSOLICR.SOLICR_FECDEVO = PLSQLBuiltins.sysdate();
            // this.GLOBAL.ACTUALIZAR = "SI";
            this.oracleFormsBuiltins.commit_form();
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "SOLICITUD PUESTA EN ESTADO EC ", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODSOL");
        }
        else {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "SOLICITUD NO PUEDE SER PUESTA NUEVAMENTE EN EC. SE ENCUENTRA EN ESTADO: " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCR_crtsolicr_devolerEc_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // V_CANTIDAD  NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FECDEVO IS NULL THEN
    //     BEGIN 
    //      SELECT USU_NOMBRE
    //        INTO :ANALISTA
    //        FROM SGUSUARIOS
    //       WHERE USU_CODIGO = :CRTSOLICR.SOLICR_USCRED
    //         --AND USU_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA SSSG-21-02-2018
    //         AND USU_AREA   = 'CRE';
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1',NULL,NULL,NULL,T_RESPUESTA);
    //     END;
    // END IF;
    // 
    // --PY 16242
    // PUP_CANTRECON;
    // --PY 16242
    // 
    // 
    // 
    // 
    // 
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrUscred_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrUscred_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_CANTIDAD: number = null;
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_USCRED", this.CRTSOLICR.SOLICR_USCRED);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicruscred_whenvalidateitem_query1", payload1);
            // get values from result
            // ANALISTA = result1[0].get("ANALISTA");
            if (result1 == null || result1.length == 0) {

                // CRFSOLCR_LIB$ALERTA("MENSAJE", "USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1", null, null, null, T_RESPUESTA);
            }

        }
        // CRFSOLCR_PUP_CANTRECON();
        console.log("Exiting CRFSOLCR_crtsolicr_solicrUscred_whenValidateItem");
    }

    //#region PLSQL
    // PUP_CANTRECON;
    // --PY 16242
    // 
    // --+PY21520. JDG. REVISADO1
    //  DECLARE
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
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
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
    async CRFSOLCR_crtsolicr_solicrUscred_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrUscred_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PRSOCL");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCSOLCR.CRTSOLICR.SOLICR_USCRED.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFCSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrUscred_keyNextItem");
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
    async CRFSOLCR_crtsolicr_solicrVrfincr_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVrfincr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_VRFINCR > this.CRTSOLICR.SOLICR_MONTO) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL VALOR APROBADO NO DEBE SER SUPERIOR AL MONTO SOLICITADO: " + CRTSOLICR.SOLICR_MONTO.toString(), null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVrfincr_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrVrfincr_keyPrevItem() {
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
    async CRFSOLCR_crtsolicr_solicrVrfincr_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVrfincr_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_VRFINCR == null)) {
            this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO;
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVrfincr_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_TIPCRE IS NOT NULL THEN
    //   BEGIN
    //    IF :CRTSOLICR.SOLICR_TIPCRE NOT IN ('03','04') THEN
    //       LIB$ALERTA('MENSAJE','CODIGO INVALIDO ........',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //   END; 
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTipcre_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTipcre_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TIPCRE != null)) {
            if (["03", "04"].indexOf(this.CRTSOLICR.SOLICR_TIPCRE) != -1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INVALIDO ........", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTipcre_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrTipcre_postTextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTipcre_postTextItem");
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
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTipcre_postTextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPunt$n_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPunt$n_whenValidateItem");
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
            //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrpunt$n_whenvalidateitem_query1", payload1);
            //     // get values from result
            //     V_MENSAJE = result1[0].get("V_MENSAJE");
            //     // CRFSOLCR_LIB$DTNERFRMA(V_MENSAJE);
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

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrPunt$n_whenValidateItem");
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
    //   /*
    //    AUTOR:    GEXNOVA SAS.
    //    FECHA:    20/06/2019.
    //    PROYECTO: PERIODOS MUERTOS 56949
    //    MOTIVO:   * SE CALCUA EL PLAZO TOTAL.             
    //              * ACTUALIZADO 18.09.2019   
    //   */
    //   :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0)  + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    //   --PERIODOS MUERTOS 56949
    //   
    //   SHOW_VIEW ('PER_GRACIA');
    //   GO_ITEM('CRTSOLICR.SOLICR_PERGRA');
    //  END IF;
    //  
    // END; 
    //#endregion
    async CRFSOLCR_crtsolicr_btnPergracia_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_btnPergracia_whenButtonPressed");
        let VBOTON: number = null;
        // if ((SOLICR_PLAZO == null)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE PRIMERO INDICAR EL PLAZO", "ACEPTAR", null, null, VBOTON);
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        // }
        // else {
        //     this.CRTSOLICR.TXT_TOTPLAZO = CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        //     this.oracleFormsBuiltins.show_view("PER_GRACIA");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_btnPergracia_whenButtonPressed");
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
    // IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //  :D_TIPSOL := '';
    //    SELECT COUNT(COLBEN) INTO V_CANT
    //    FROM COL 
    //    WHERE COLESTC = 'VI'
    //     AND COLBEN = :CRTSOLICR.SOLICR_NITTER;
    //     
    //    IF V_CANT >0 THEN
    //     :D_TIPSOL :='MANTENIMIENTO';
    //    ELSE
    //     SELECT COUNT(COLBEN) INTO V_CANT
    //      FROM COL 
    //      WHERE COLESTC = 'CA'
    //       AND COLBEN = :CRTSOLICR.SOLICR_NITTER;
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
    async CRFSOLCR_crtsolicr_btnTipsol_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_btnTipsol_whenButtonPressed");
        let V_CANT: number = null;
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            this.CRTSOLICR.D_TIPSOL = "";
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_btntipsol_whenbuttonpressed_query1", payload1);
            // get values from result
            V_CANT = result1[0].get("V_CANT");
            if (V_CANT > 0) {
                this.CRTSOLICR.D_TIPSOL = "MANTENIMIENTO";
            }
            else {
                // construct payload
                let payload2 = new Map();
                payload2.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
                // call REST API
                const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_btntipsol_whenbuttonpressed_query2", payload2);
                // get values from result
                V_CANT = result2[0].get("V_CANT");
                if (V_CANT > 1) {
                    this.CRTSOLICR.D_TIPSOL = this.CRTSOLICR.D_TIPSOL || ' RECOLOCACIÓN';
                }
            }
            if (this.oracleFormsBuiltins.get_item_property("CRTSOLICR.BTN_TIPSOL", "LABEL") == "<") {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.D_TIPSOL", "VISIBLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_TIPSOL", "LABEL", ">");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.D_TIPSOL", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.BTN_TIPSOL", "LABEL", "<");
            }
            this.oracleFormsBuiltins.synchronize();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_btnTipsol_whenButtonPressed");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCocuta_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCocuta_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrcocuta_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.UVPCUT_DESCRI = result1[0].get("CRTSOLICR.UVPCUT_DESCRI");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COCUTA = null;
                this.CRTSOLICR.UVPCUT_DESCRI = null;
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "CÓDIGO DE CUPO DE TAXI INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCocuta_whenValidateItem");
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
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCocuta_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCocuta_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.BTN_REGFRMXC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCocuta_keyNextItem");
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
    //        AND OTERSOL_TIPVIN IN ('99', '05', '13', '09')
    //        AND OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI);  --ARQUITECTURA
    // 
    //  
    //   T_RESPUESTA  NUMBER;
    //   RESTRINGIDO  BOOLEAN := FALSE;
    //   MENSAJE      VARCHAR2(300);
    //   RELACIONADO   TDV.TDVDES%TYPE;
    //   TERCERO       TER.TERCOD%TYPE;
    //   COMODIN      VARCHAR2(1);
    // 
    // BEGIN
    // 
    //   /*
    //   AUTOR   :JAIRO A. TORRES R.
    //   FECHA   :19/09/2011
    //   MOTIVO  :DETIENE EL PROCESO DESDE EL COMIENZO DE LA RECONSIDERACIÓN EN CASO QUE EL TERCERRO RELACIONADO ESTE EN ESTADO RE, 
    //           EXISTE PROCEDURE QUE REALIZA VALIDACIÓN, EN OCASIONES FALLA POR PERMISOS AL PROCEDURE
    //   */
    // 
    // 
    //   IF :CRTSOLICR.SOLICR_NITTER IS NULL THEN
    //     MENSAJE := 'DEBE SELECCIONAR LA OPCIÓN QUE DESEA RECONSIDERAR.';
    //     LIB$ALERTA('MENSAJE', MENSAJE, NULL, NULL, NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // 
    //   FOR I IN C_TERCERO LOOP
    //     
    //     PVALTER (I.TERCERO);  --AJ SE CAMBIA CONSULTA TERCEROS RESTRINGIDOS AL WEB SERVICE 18/09/2019
    //     
    //   END LOOP;
    //     
    //    
    //     IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('AZ', 'AC', 'AP', 'NG') THEN
    //       IF (:CRTSOLICR.SOLICR_CODREC IS NULL) THEN
    //         ---CAMBIO SOLICIADO POR FM 12/01/2005 SMT
    //         LIB$ALERTA('MENSAJE',
    //                    'LA SOLICITUD SE ENCUENTRA EN ESTADO  ' ||
    //                     :CRTSOLICR.SOLICR_ESTSOL ||
    //                     ' Y NO ES PERMITIDO PARA RECONSIDERAR ', NULL, NULL,
    //                    NULL, T_RESPUESTA);
    //       ELSE
    //         HIDE_VIEW('CANVAS10');
    //         GO_BLOCK('CTRSOLICR2');
    //       END IF;
    //     ELSE
    //       HIDE_VIEW('CANVAS10');
    //       GO_BLOCK('CTRSOLICR2');
    //       
    //       
    //      
    //     
    //     END IF;
    //  
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_reconsiderar_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_reconsiderar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let RESTRINGIDO: boolean = false;
        let MENSAJE: string = null;
        let RELACIONADO: null = null;
        let TERCERO: null = null;
        let COMODIN: string = null;
        if ((this.CRTSOLICR.SOLICR_NITTER == null)) {
            MENSAJE = "DEBE SELECCIONAR LA OPCIÓN QUE DESEA RECONSIDERAR.";
            // CRFSOLCR_LIB$ALERTA("MENSAJE", MENSAJE, null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (["AZ", "AC", "AP", "NG"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD SE ENCUENTRA EN ESTADO  " + CRTSOLICR.SOLICR_ESTSOL + " Y NO ES PERMITIDO PARA RECONSIDERAR ", null, null, null, T_RESPUESTA);
            }
            else {
                this.oracleFormsBuiltins.hide_view("CANVAS10");
                this.oracleFormsBuiltins.go_block("CTRSOLICR2");
            }
        }
        else {
            this.oracleFormsBuiltins.hide_view("CANVAS10");
            this.oracleFormsBuiltins.go_block("CTRSOLICR2");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_reconsiderar_whenButtonPressed");
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
    async CRFSOLCR_crtsolicr_solicrCiabil_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCiabil_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCiabil_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrCiabil_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCiabil_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCiabil_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCiabil_keyNextItem");
    }

    async CRFSOLCR_crtsolicr_solicrActaso_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  /*
    //   AUTOR:   GEXNOVA SAS.
    //   FECHA:  13.06.2019.
    //   PROYECTO: PERIODOS MUERTOS 56949;
    //   MOTIVO:  * SE LLAMA EL PROGRAM UNIT VALIDA_PERIODOS_MUERTO_GRACIA ENVIANDO LA VARIABLE "PG" PARA IDENTIFICAR DE DONDE SE HACE EL LLAMADO.
    //         * ACTUALIZADO EL 19.09.2019
    //  */     
    //   PUP_VALIDA_PERIODO_MUERTO ('PG');
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPergra_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPergra_whenValidateItem");
        // CRFSOLCR_PUP_VALIDA_PERIODO_MUERTO("PG");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPergra_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*
    //  AUTOR:    GEXNOVA.
    //  PROYECTO: PERIODOS MUERTOS 56949.
    //  FECHA:    19.09.2019
    //  MOTIVO:   CALCULA EL PLAZO TOTAL.
    // */
    // :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0) + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    // -- PERIODOS MUERTOS 56949.
    // 
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPergra_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPergra_keyNextItem");
        this.CRTSOLICR.TXT_TOTPLAZO = this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + this.CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + this.CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPergra_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    //    V_ESTADO        VARCHAR2(2) := 'DC';
    //    V_CANTIDAD      NUMBER;    --PY 5499
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FECDEVO IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE LA FECHA DE DEVOLUCIÓN');
    //   END IF;
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL = 'EC' THEN
    // 
    //  IF FRM$BUSCAR_ESTADO_OBS (V_ESTADO, SYSDATE, USER) = FALSE
    //  THEN
    //              LIB$ALERTA('MENSAJE', 'DEBE DIGITAR OBSERVACIONES PARA EL ESTADO '||V_ESTADO, NULL,NULL,NULL, T_RESPUESTA);
    //              GO_BLOCK('SOLOBS');
    //              LAST_RECORD;
    //              :VARIABLE.VAR_ESTADO := V_ESTADO;
    //              RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    // 
    //        -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    // 
    //         FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //                 'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL, 
    //                    'DC'||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //         :CRTSOLICR.SOLICR_ESTSOL  := 'DC';
    //         :CRTSOLICR.SOLICR_FECDEVO := SYSDATE;
    //         :GLOBAL.ACTUALIZAR := 'SI'; 
    //         COMMIT_FORM;
    //         LIB$ALERTA('MENSAJE','SOLICITUD DEVUELTA AL COMERCIAL ....',NULL,NULL,NULL,T_RESPUESTA);
    //         GO_ITEM('CRTSOLICR.SOLICR_CODSOL');
    //  ELSE
    //     LIB$ALERTA('MENSAJE','SOLICITUD NO PUEDE SER DEVUELTA. SE ENCUENTRA EN ESTADO: '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    //  
    //  --PY 5499 
    //  BEGIN
    //   SELECT COUNT(*)
    //     INTO V_CANTIDAD
    //     FROM CRTLCKCRE
    //    WHERE LCKCRE_NSOLIC = :CRTSOLICR.SOLICR_CODSOL
    //      AND LCKCRE_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //      AND LCKCRE_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //   EXCEPTION WHEN NO_DATA_FOUND THEN  V_CANTIDAD := 0;
    //  END;
    //  
    //  IF V_CANTIDAD <> 0 THEN 
    //    UPDATE CRTLCKCRE 
    //       SET LCKCRE_ESTADO = 'GR' 
    //     WHERE LCKCRE_NSOLIC = :CRTSOLICR.SOLICR_CODSOL 
    //       AND LCKCRE_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //       AND LCKCRE_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA;  
    //   COMMIT_FORM; 
    //  END IF; 
    //  --PY 5499
    // 
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_devolver_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_devolver_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'DC';
        let V_CANTIDAD: number = null;
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // CRFSOLCR_LIB$DTNERFRMA("ENTRE LA FECHA DE DEVOLUCIÓN");
        }
        if (this.CRTSOLICR.SOLICR_ESTSOL == "EC") {
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, "DC" + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            this.CRTSOLICR.SOLICR_ESTSOL = "DC";
            this.CRTSOLICR.SOLICR_FECDEVO = PLSQLBuiltins.sysdate();
            // this.GLOBAL.ACTUALIZAR = "SI";
            this.oracleFormsBuiltins.commit_form();
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "SOLICITUD DEVUELTA AL COMERCIAL ....", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODSOL");
        }
        else {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "SOLICITUD NO PUEDE SER DEVUELTA. SE ENCUENTRA EN ESTADO: " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_devolver_whenbuttonpressed_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (result1 == null || result1.length == 0) {

            V_CANTIDAD = 0;
        }

        if (V_CANTIDAD != 0) {
            // construct payload
            let payload2 = new Map();
            // payload2.SOLICR_CODSOL = : SOLICR_CODSOL;
            // payload2.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            // payload2.SOLICR_CODUNI = : SOLICR_CODUNI;
            // call REST API
            const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_devolver_whenbuttonpressed_query2", payload2);
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_devolver_whenButtonPressed");
    }

    async CRFSOLCR_crtsolicr_solicrObscom_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrRecpor_postChange() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecpor_postChange");
        // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR;
        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecpor_postChange");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR||'%';
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrRecpor_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecpor_keyNextItem");
        // this.CRTSOLICR.SOLICR_NOMREC = this.CRTSOLICR.SOLICR_RECNIT || '      ' || SOLICR_RECNITDESC || '    ' || SOLICR_RECPOR || '%';
        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecpor_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FNG IS NOT NULL THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //   :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //   IF :CRTSOLICR.SOLICR_FNG <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   --ELSE (NO ES EXCLUYENTE)
    //       -- FRM$GARANTIAS_EQUIS ('FNG');   
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFng_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFng_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FNG != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNG != "X") {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFng_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_MODINT IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT MODCOD
    //     INTO DESC1
    //    FROM MOD$
    //    WHERE MODCOD =:SOLICR_MODINT;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE MODALIDAD INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrModint_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrModint_whenValidateItem");
        // if ((SOLICR_MODINT != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODINT", SOLICR_MODINT);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrmodint_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrModint_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_ORMONET IS NOT NULL THEN
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   DESC1        VARCHAR2(100); 
    // BEGIN
    //   SELECT ORMDES
    //    INTO DESC1
    //   FROM ORM
    //   WHERE ORMCOD=:SOLICR_ORMONUS$;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrOrmonus$_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONUS", SOLICR_ORMONUS);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrOrmonus$_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrPdscto_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPdscto_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PDSCTO == null ? 0 : this.CRTSOLICR.SOLICR_PDSCTO > 100) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE DESCUENTO DEBE SER INFERIOR AL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPdscto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCR_crtsolicr_flance_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_flance_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_flance_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERNOM||' '|| TERAPE,NVL(TERNOM,TERAPE)) 
    //   INTO :SOLICR_RECNITDESC
    //   FROM TER 
    //   WHERE TERCOD= :SOLICR_RECNIT;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_RECNITDESC := NULL;
    //   
    //   END;
    //   
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrRecnit_postChange() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecnit_postChange");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_RECNIT", SOLICR_RECNIT);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrrecnit_postchange_query1", payload1);
        // get values from result
        // SOLICR_RECNITDESC = result1[0].get("SOLICR_RECNITDESC");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.SOLICR_RECNITDESC = null;
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecnit_postChange");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERNOM||' '|| TERAPE,NVL(TERNOM,TERAPE)) 
    //   INTO :SOLICR_RECNITDESC
    //   FROM TER 
    //   WHERE TERCOD= :SOLICR_RECNIT;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_RECNITDESC := NULL;
    //   
    // END;
    //   :CRTSOLICR.SOLICR_NOMREC := :SOLICR_RECNIT ||'      '||:SOLICR_RECNITDESC||'    '||:SOLICR_RECPOR||'%';
    //    GO_ITEM('SOLICR_RECPOR');
    //#endregion
    async CRFSOLCR_crtsolicr_solicrRecnit_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecnit_keyNextItem");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_RECNIT", SOLICR_RECNIT);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrrecnit_keynextitem_query1", payload1);
        // get values from result
        // SOLICR_RECNITDESC = result1[0].get("SOLICR_RECNITDESC");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.SOLICR_RECNITDESC = null;
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecnit_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF  :CRTSOLICR.SOLICR_GTIREC IS NOT NULL THEN
    //      IF :CRTSOLICR.SOLICR_GTIREC  NOT IN ('S','N') THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............',NULL,NULL,NULL,T_RESPUESTA);
    //         END IF;
    //      
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrRecnitdesc_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecnitdesc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_GTIREC != null)) {
            if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecnitdesc_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrRecnitdesc_keyPrevItem() {
        // null;
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
    async CRFSOLCR_crtsolicr_solicrRecnitdesc_posttextitem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecnitdesc_posttextitem");
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
        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecnitdesc_posttextitem");
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
    async CRFSOLCR_crtsolicr_solicrRecnitdesc_keynextitem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrRecnitdesc_keynextitem");
        if (this.CRTSOLICR.SOLICR_GTIREC == "N") {
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", "ATTR_OFF");
        }
        else if (this.CRTSOLICR.SOLICR_GTIREC == "S") {
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "ENABLED", "ATTR_ON");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NOMREC", "NAVIGABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrRecnitdesc_keynextitem");
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
    async CRFSOLCR_crtsolicr_solicrMonto_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrMonto_whenValidateItem");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            // this.PARAMETER.get("PENCCOM") = "S";
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrMonto_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //  
    //    IF :SOLICR_TPESOS IS NOT NULL THEN
    //      BEGIN
    //       SELECT TINDES
    //        INTO DESC1
    //       FROM TIN
    //       WHERE TINCOD=:SOLICR_TPESOS;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //      END; 
    //       
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_FALSE");  --CAHH
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //    :SOLICR_PTOUS$:=NULL;                 --CAHH
    //   ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TDOLAR',ENABLED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PTOUS$',ENABLED,"PROPERTY_TRUE");  --CAHH     
    //       
    //   END IF;
    //   
    //   SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_PUNT$N', "ENABLED", "PROPERTY_FALSE" );
    //   
    //  ELSE
    //   
    //   SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_PUNT$N', "ENABLED", "PROPERTY_TRUE" );
    //   
    //  END IF; 
    //  
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTpesos_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTpesos_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
            // if ((SOLICR_TPESOS != null)) {
            //     // construct payload
            //     let payload1 = new Map();
            //     payload1.set("SOLICR_TPESOS", SOLICR_TPESOS);
            //     // call REST API
            //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrtpesos_whenvalidateitem_query1", payload1);
            //     // get values from result
            //     DESC1 = result1[0].get("DESC1");
            //     if (result1 == null || result1.length == 0) {

            //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
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
            // this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNT$N", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNT$N", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTpesos_whenValidateItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrEstrat_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrEstrat_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrestrat_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.SOLICR_ESTRATDESC = result1[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_ESTRAT = null;
                this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "ESTRATEGIA VOR UVP INVÁLIDA.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrEstrat_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrLmultip_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrLmultip_keyNextItem");
        // if ((SOLICR_IFI == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_IF");
        //     this.CRTSOLICR.SOLICR_LMULTIP = null;
        //     this.CRTSOLICR.DESLIMPTO = null;
        //     // CRFSOLCR_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX MULTIPROPOSITO SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrlmultip_keynextitem_query1", payload1);
        //     // get values from result
        //     DESCBCDX = result1[0].get("DESCBCDX");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCR_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN BANCOLDEX MULTIPROPOSITO.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrLmultip_keyNextItem");
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
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVrcial_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVrcial_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLCR_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrVrcial_whenValidateItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVrcial_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_MASPRENDAS");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrVrcial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SOLICR_OFCSOL'); END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTitulo_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTitulo_keyNextItem");
        this.oracleFormsBuiltins.go_item("SOLICR_OFCSOL");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTitulo_keyNextItem");
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
    async CRFSOLCR_crtsolicr_solicrTbcoldx_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTbcoldx_keyNextItem");
        // if ((SOLICR_BCODEX == null)) {
        //     this.oracleFormsBuiltins.go_item("SOLICR_BCODEX");
        //     this.CRTSOLICR.SOLICR_TBCOLDX = null;
        //     this.CRTSOLICR.DESCBCDX = null;
        //     // CRFSOLCR_LIB$DTNERFRMA("NO SE PUEDE SELECCIONAR UNA LÍNEA BANCOLDEX SINO HA SELECCIONADO LA TASA.");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrtbcoldx_keynextitem_query1", payload1);
        //     // get values from result
        //     DESCBCDX = result1[0].get("DESCBCDX");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCR_LIB$DTNERFRMA("NO EXISTE ESA LÍNEA EN BANCOLDEX.");
        //     }

        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTbcoldx_keyNextItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCR_crtsolicr_nomOficial_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_nomOficial_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_nomOficial_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 );
    //  
    //     
    //  /* 
    //    AUTOR  : GEXNOVA
    //    FECHA  : 10.09.2018
    //    MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //  */
    //  V_BACKUP_ESTFIR                CRTSOLICR.SOLICR_ESTFIR%TYPE := NULL;     
    //  CURSOR TER_SOL IS
    //   SELECT OTERSOL_NITTER FROM CRTOTERSOL
    //    WHERE OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL 
    //      AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL 
    //      AND OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI;  
    //   
    //  ---------------------- 
    // 
    //   
    //   BEGIN
    //    
    //    
    //     /* 
    //    AUTOR  : GEXNOVA
    //    FECHA  : 10.09.2018
    //    MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //      */
    //   IF :CRTSOLICR.SOLICR_ESTFIR IN ('AP', 'RJ') THEN
    //    
    //    V_BACKUP_ESTFIR := :CRTSOLICR.SOLICR_ESTFIR;  --BACKUP ESTADO SELECCIONADO
    //    
    //    :CRTSOLICR.SOLICR_ESTFIR := NULL; --LIMPIA ESTADO PARA SI ES RESTRINGIDO NO PERMITIR CAMBIO DE ESTADO FIRMAS
    //    
    //    FOR X IN TER_SOL LOOP
    //         PVALTER (X.OTERSOL_NITTER);
    //     END LOOP;
    //     
    //     PVALTER (:CRTSOLICR.SOLICR_NITTER);
    //     
    //    :CRTSOLICR.SOLICR_ESTFIR := V_BACKUP_ESTFIR;  --SI PASA LA VERIFICACION RESTAURA EL ESTADO DE FIRMAS SELECCIONADO
    //    
    //   END IF;
    //   ------------- 
    //    
    //    
    //    
    //    IF :CRTSOLICR.SOLICR_ESTFIR = :CRTSOLICR.SOLICR_ESTSOL THEN
    //     
    //      LIB$ALERTA( 'MENSAJE', 'DEBE ELEGIR UN ESTADO DEFINITIVO PARA LA SOLICITUD DIFERENTE AL ACTUAL.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //      :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //      RAISE FORM_TRIGGER_FAILURE;
    //      
    //    END IF;
    //    
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_ESTFIR.WHEN-LIST-CHANGED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //  
    //  
    //  
    // 
    // --+PY21520. JDG.
    //   DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 );   
    //  /* 
    //    AUTOR  : GEXNOVA
    //    FECHA  : 10.09.2018
    //    MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //  */
    //  V_BACKUP_ESTFIR                CRTSOLICR.SOLICR_ESTFIR%TYPE := NULL;     
    //  CURSOR TER_SOL IS
    //   SELECT OTERSOL_NITTER FROM CRTOTERSOL
    //    WHERE OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL 
    //      AND OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL 
    //      AND OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI;  
    //   
    //  ----------------------
    //   
    //    
    //   BEGIN
    //    
    //  /* 
    //    AUTOR  : GEXNOVA
    //    FECHA  : 10.09.2018
    //    MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //  */
    //   IF :CRTSOLICR.SOLICR_ESTFIR IN ('AP', 'RJ') THEN
    //    
    //    V_BACKUP_ESTFIR := :CRTSOLICR.SOLICR_ESTFIR;  --BACKUP ESTADO SELECCIONADO
    //    
    //    :CRTSOLICR.SOLICR_ESTFIR := NULL; --LIMPIA ESTADO PARA SI ES RESTRINGIDO NO PERMITIR CAMBIO DE ESTADO FIRMAS
    //    
    //    FOR X IN TER_SOL LOOP
    //         PVALTER (X.OTERSOL_NITTER);
    //     END LOOP;
    //     
    //     PVALTER (:CRTSOLICR.SOLICR_NITTER);
    //     
    //    :CRTSOLICR.SOLICR_ESTFIR := V_BACKUP_ESTFIR;  --SI PASA LA VERIFICACION RESTAURA EL ESTADO DE FIRMAS SELECCIONADO
    //    
    //   END IF;
    //   ------------- 
    //   
    //    IF :CRTSOLICR.SOLICR_ESTFIR = :CRTSOLICR.SOLICR_ESTSOL THEN
    //     
    //      LIB$ALERTA( 'MENSAJE', 'DEBE ELEGIR UN ESTADO DEFINITIVO PARA LA SOLICITUD DIFERENTE AL ACTUAL.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //      :CRTSOLICR.SOLICR_ESTFIR := NULL;
    //      RAISE FORM_TRIGGER_FAILURE;
    //      
    //    END IF;
    //    
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_ESTFIR.WHEN-LIST-CHANGED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrEstfir_whenListChanged() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrEstfir_whenListChanged");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_BACKUP_ESTFIR: string = null;
        try {

            if (["AP", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTFIR) != -1) {
                V_BACKUP_ESTFIR = this.CRTSOLICR.SOLICR_ESTFIR;
                this.CRTSOLICR.SOLICR_ESTFIR = null;
                // CRFSOLCR_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
                this.CRTSOLICR.SOLICR_ESTFIR = V_BACKUP_ESTFIR;
            }
            if (this.CRTSOLICR.SOLICR_ESTFIR == this.CRTSOLICR.SOLICR_ESTSOL) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE ELEGIR UN ESTADO DEFINITIVO PARA LA SOLICITUD DIFERENTE AL ACTUAL.", "ACEPTAR", null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_ESTFIR = null;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_ESTFIR.WHEN-LIST-CHANGED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        try {

            if (["AP", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTFIR) != -1) {
                V_BACKUP_ESTFIR = this.CRTSOLICR.SOLICR_ESTFIR;
                this.CRTSOLICR.SOLICR_ESTFIR = null;
                // CRFSOLCR_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
                this.CRTSOLICR.SOLICR_ESTFIR = V_BACKUP_ESTFIR;
            }
            if (this.CRTSOLICR.SOLICR_ESTFIR == this.CRTSOLICR.SOLICR_ESTSOL) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE ELEGIR UN ESTADO DEFINITIVO PARA LA SOLICITUD DIFERENTE AL ACTUAL.", "ACEPTAR", null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_ESTFIR = null;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_ESTFIR.WHEN-LIST-CHANGED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrEstfir_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_CODPRO = 'RES' THEN
    //       SHOW_VIEW('REESTRUCTURADOS');
    //       GO_ITEM('CRTRESTR.RESTR_COLOFI');
    //    END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_resstruct_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_resstruct_whenButtonPressed");
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.show_view("REESTRUCTURADOS");
            this.oracleFormsBuiltins.go_item("CRTRESTR.RESTR_COLOFI");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_resstruct_whenButtonPressed");
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
    async CRFSOLCR_crtsolicr_solicrPoriva_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPoriva_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PORIVA == null ? 0 : this.CRTSOLICR.SOLICR_PORIVA > 100) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPoriva_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA    NUMBER;
    // BEGIN
    //  --+PY21520. JDG.
    //  /*IF :CRTSOLICR.SOLICR_CONEXT IS NOT NULL THEN
    //     IF  NVL(:CRTSOLICR.SOLICR_CONEXT,0) > NVL(:CRTSOLICR.SOLICR_MONTO,0) THEN
    //       LIB$ALERTA('MENSAJE','NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //   END IF;*/  
    //      
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
    async CRFSOLCR_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrConext_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT != 0) {
            if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
                if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT > this.CRTSOLICR.SOLICR_MONTO == null ? 0 : this.CRTSOLICR.SOLICR_MONTO) {
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }
            else {
                this.CRTSOLICR.SOLICR_CONEXT = 0;
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO UN CANON EXTRAORDINARIO PARA UNA CARTERA DE CRÉDITO ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrConext_whenValidateItem");
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
    //      LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      PU_LLAMAR_TERCERO(:CRTSOLICR.SOLICR_NITTER, NULL,NULL, NULL,'T');
    //    END;
    //   END IF;  
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrNitres_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrNitres_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITRES != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_NITRES", this.CRTSOLICR.SOLICR_NITRES);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrnitres_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.SOLICR_NOMRES = result1[0].get("CRTSOLICR.SOLICR_NOMRES");
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS DEL NIT.....", null, null, null, T_RESPUESTA);
            // CRFSOLCR_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITRES, null, null, null, "Q");
            if (result1 == null || result1.length == 0) {

                // CRFSOLCR_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
                // CRFSOLCR_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITTER, null, null, null, "T");
            }

        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrNitres_whenValidateItem");
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
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_TIPACT.WHEN-VALIDATE-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTipact_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTipact_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFSOLCR_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_TIPACT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrTipact_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // 
    //   IF :CRTSOLICR.SOLICR_BCODEX  IS NOT NULL THEN
    //      IF :CRTSOLICR.SOLICR_BCODEX  <> 'X' THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //        FRM$GARANTIAS_EQUIS ('BAN');
    //      END IF;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrBcodex_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrBcodex_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_BCODEX != null)) {
            if (this.CRTSOLICR.SOLICR_BCODEX != "X") {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrBcodex_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrBcodex_keyPrevItem() {
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
    //      :CRTSOLICR.SOLICR_USMLINEA    := PLSQLBuiltins.user();
    //        :CRTSOLICR.SOLICR_FECMODLINEA  := SYSDATE;   
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
    async CRFSOLCR_crtsolicr_solicrLineades_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrLineades_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_LINEADES == null)) {
            // CRFSOLCR_LIB$DTNERFRMA("ES OBLIGATORIO LA LINEA DE DESEMBOLSO");
        }
        else if (this.CRTSOLICR.SOLICR_LINEADES == "LX") {
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_COLUMN", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_PERMISSION", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "NAVIGABLE", "PROPERTY_TRUE");
            this.CRTSOLICR.SOLICR_USMLINEA = PLSQLBuiltins.user();
            this.CRTSOLICR.SOLICR_FECMODLINEA = PLSQLBuiltins.sysdate();
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
        const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrlineades_keynextitem_query1", payload1);
        // get values from result
        // DES_LINDESEMBO = result1[0].get("DES_LINDESEMBO");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCR_LIB$ALERTA("MENSAJE", "LINEA DESEMBOLSO INEXISTENTE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCR_crtsolicr_solicrLineades_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINDTR = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //   :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINDETER',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINDTP := 'X';
    //        FRM$GARANTIAS_EQUIS ('FND');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFindtp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINDTR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP > 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINDETER", null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_FINDTP = "X";
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFindtp_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrCseggt_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCseggt_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CSEGGT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrcseggt_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NOM_CIASEG = result1[0].get("CRTSOLICR.NOM_CIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("SOLICR_OBSGTI");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCseggt_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FINDTR IS NOT NULL THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
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
    async CRFSOLCR_crtsolicr_solicrFindtr_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFindtr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINDTR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTR != "X") {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFindtr_whenValidateItem");
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
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_PRENDA.WHEN-VALIDATE-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPrenda_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPrenda_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_PRENDA) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        let V_MENSAJE: string = null;
        try {

            // CRFSOLCR_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_PRENDA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrPrenda_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF :CRTSOLICR.SOLICR_OPCCOM IS NOT NULL THEN
    //       IF NVL(:CRTSOLICR.SOLICR_OPCCOM, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrOpccom_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrOpccom_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_OPCCOM != null)) {
            if (this.CRTSOLICR.SOLICR_OPCCOM == null ? 0 : this.CRTSOLICR.SOLICR_OPCCOM < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrOpccom_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrGtonac_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrGtonac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "S"].indexOf(this.CRTSOLICR.SOLICR_GTONAC) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrGtonac_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrResidu_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrResidu_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_RESIDU) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrResidu_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrFdamut_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFdamut_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_FDAMUT) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFdamut_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrNomres_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA NUMBER;
    // 
    // BEGIN
    // 
    //   IF :CRTSOLICR.SOLICR_IFI IS NOT NULL THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_IFIP',REQUIRED,"PROPERTY_TRUE");  --CAHH
    //      SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //      :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //      IF  :CRTSOLICR.SOLICR_IFI  <> 'X' THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //        FRM$GARANTIAS_EQUIS ('IFI');
    //      END IF;
    //   ELSE
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_IFIP',REQUIRED,"PROPERTY_FALSE");  --CAHH
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrIfi_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrIfi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_IFI != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_IFIP", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_IFI != "X") {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_IFIP", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrIfi_whenValidateItem");
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
    //   :CRTSOLICR.SOLICR_TBCOLDX := NULL;
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
    async CRFSOLCR_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFngp_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrFngp_keyPrevItem() {
        // null;
    }

    async CRFSOLCR_crtsolicr_solicrFngp_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // BEGIN
    // IF :CRTSOLICR.SOLICR_BCODEX = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) < 1THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_BCODEX  := 'X';
    //        FRM$GARANTIAS_EQUIS ('BAN');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrBcodxp_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrBcodxp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_BCODEX == "X") {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP < 1) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP > 0) {
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_BCODEX = "X";
                // CRFSOLCR_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrBcodxp_whenValidateItem");
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
    //   LIB$DTNERFRMA('SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA.');
    //  ELSE
    //   GO_ITEM('CRTSOLICR.SOLICR_IFI');
    //  END IF;
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrBcodxp_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrBcodxp_keyNextItem");
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
                // CRFSOLCR_LIB$DTNERFRMA("SÍ SELECCIONO SPREAD BANCOLDEX DEBE DIGITAR LA TASA.");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_IFI");
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrBcodxp_keyNextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_ACTIVO.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrActivo_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrActivo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CLASAC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_ACTIVO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrActivo_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    
    //    T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //   
    //   IF :CRTSOLICR.SOLICR_CODUS2 IS NOT NULL THEN
    //   
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN2', "ENABLED", "PROPERTY_TRUE" );
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN2', "UPDATE_ALLOWED", "PROPERTY_TRUE" );
    //       GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN2' );
    //     
    //     END IF;  
    //   
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_CODUS2.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCodus2_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCodus2_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if ((this.CRTSOLICR.SOLICR_CODUS2 != null)) {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN2", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN2", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN2");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_CODUS2.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCodus2_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    
    //    T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //   
    //   IF :CRTSOLICR.SOLICR_CODUS1 IS NOT NULL THEN
    //   
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN1', "ENABLED", "PROPERTY_TRUE" );
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN1', "UPDATE_ALLOWED", "PROPERTY_TRUE" );
    //       GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN1' );
    //     
    //     END IF;  
    //       
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_CODUS1.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCodus1_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCodus1_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if ((this.CRTSOLICR.SOLICR_CODUS1 != null)) {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN1", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN1");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_CODUS1.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCodus1_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    
    //    T_RESPUESTA          NUMBER; 
    //    V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //   
    //    IF :CRTSOLICR.SOLICR_CODUS3 IS NOT NULL THEN
    //   
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN3', "ENABLED", "PROPERTY_TRUE" );
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.DESCRI_FIRPN3', "UPDATE_ALLOWED", "PROPERTY_TRUE" );
    //       GO_ITEM( 'CRTSOLICR.DESCRI_FIRPN3' );
    //     
    //     END IF;  
    //   
    //   EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_CODUS3.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCodus3_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCodus3_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if ((this.CRTSOLICR.SOLICR_CODUS3 != null)) {
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN3", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.DESCRI_FIRPN3", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_FIRPN3");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_CODUS3.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCodus3_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //  
    //  IF :CRTSOLICR.SOLICR_CODUNI = '001' THEN
    //  
    //   IF :SOLICR_TDOLAR IS NOT NULL THEN
    //     BEGIN
    //      SELECT TINDES
    //       INTO DESC1
    //      FROM TIN
    //      WHERE TINCOD=:SOLICR_TDOLAR;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //        
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_FALSE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_FALSE");  --CAHH
    //     :SOLICR_PUNTS$:=NULL;                         --CAHH
    //     
    //   ELSE
    //    
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TPESOS',ENABLED,"PROPERTY_TRUE");  --CAHH
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED,"PROPERTY_TRUE");  --CAHH
    //   
    //   END IF; 
    //   
    //   SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_PUNT$N', "ENABLED", "PROPERTY_FALSE" );
    //   
    //  ELSE
    //   
    //    SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_PUNT$N', "ENABLED", "PROPERTY_TRUE" );
    //   
    //  END IF; 
    //  
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
            // if ((SOLICR_TDOLAR != null)) {
            //     // construct payload
            //     let payload1 = new Map();
            //     payload1.set("SOLICR_TDOLAR", SOLICR_TDOLAR);
            //     // call REST API
            //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
            //     // get values from result
            //     DESC1 = result1[0].get("DESC1");
            //     if (result1 == null || result1.length == 0) {

            //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
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
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNT$N", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNT$N", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTdolar_whenValidateItem");
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
    // BEGIN
    //   IF :SOLICR_TIPBIE = '001' THEN
    //     LIB$DTNERFRMA('ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE USAR 010 Ó 011. CONSULTE LA LISTA D EVALORES');
    //   END IF;
    //   --
    //   IF :SOLICR_TIPBIE IS NOT NULL THEN
    //     BEGIN
    //       SELECT TIPBIEN_DESBIEN 
    //       INTO DESC1
    //       FROM CRTTIPBIEN
    //       WHERE TIPBIEN_CODBIEN=:SOLICR_TIPBIE
    //       AND TIPBIEN_CODUNI =:CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
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
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTipbie_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTipbie_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if (SOLICR_TIPBIE == "001") {
        //     // CRFSOLCR_LIB$DTNERFRMA("ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE USAR 010 Ó 011. CONSULTE LA LISTA D EVALORES");
        // }
        // if ((SOLICR_TIPBIE != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
        //     payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrtipbie_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     this.CRTSOLICR.SOLICR_SUBCAT = null;
        //     this.CRTSOLICR.W_SUBCATEGORIA = null;
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE.....", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
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
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTipbie_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      SELECT TIPBIEN_DESBIEN
    //        INTO :CRTSOLICR.BIEN
    //        FROM CRTTIPBIEN
    //       WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE
    //         AND TIPBIEN_CODUNI  = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA;
    //    --  GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //    NEXT_ITEM;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTipbie_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTipbie_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrtipbie_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.BIEN = result1[0].get("CRTSOLICR.BIEN");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTipbie_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  /*
    //   AUTOR:   GEXNOVA SAS.
    //   FECHA:  13.06.2019.
    //   PROYECTO: PERIODOS MUERTOS 56949;
    //   MOTIVO:  * SE LLAMA EL PROGRAM UNIT VALIDA_PERIODOS_MUERTO_GRACIA ENVIANDO LA VARIABLE "PM" PARA IDENTIFICAR DE DONDE SE HACE EL LLAMADO.
    //         * ACTUALIZADO EL 19.09.2019
    //  */   
    //   PUP_VALIDA_PERIODO_MUERTO ('PM');
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPermue_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPermue_whenValidateItem");
        // CRFSOLCR_PUP_VALIDA_PERIODO_MUERTO("PM");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPermue_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*
    //  AUTOR:    GEXNOVA.
    //  PROYECTO: PERIODOS MUERTOS 56949.
    //  FECHA:    19.09.2019
    //  MOTIVO:   CALCULA EL PLAZO TOTAL.
    // */
    // :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0) + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    // -- PERIODOS MUERTOS 56949.
    // 
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPermue_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPermue_keyNextItem");
        this.CRTSOLICR.TXT_TOTPLAZO = this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + this.CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + this.CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPermue_keyNextItem");
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
    async CRFSOLCR_crtsolicr_solicrCedeec_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCedeec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_CEDEEC) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCedeec_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    // BEGIN
    // 
    // --IF :CRTSOLICR.SOLICR_FAPRCR < :CRTSOLICR.SOLICR_FECRADI THEN
    //  IF TRUNC(:CRTSOLICR.SOLICR_FAPRCR) < TRUNC(:CRTSOLICR.SOLICR_FECRADI) THEN --PY 9048
    //     LIB$ALERTA('MENSAJE', 'LA FECHA DE APROBACIÓN NO DEBE SER MENOR QUE LA FECHA DE RADICACIÓN',NULL,NULL,NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // --ELSE
    //  --:CRTSOLICR.SOLICR_FECVIG :=:CRTSOLICR.SOLICR_FAPRCR;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFaprcr_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFaprcr_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (TRUNC(this.CRTSOLICR.SOLICR_FAPRCR) < TRUNC(this.CRTSOLICR.SOLICR_FECRADI)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA FECHA DE APROBACIÓN NO DEBE SER MENOR QUE LA FECHA DE RADICACIÓN", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFaprcr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN -- CUOP
    // --+PY26491. JDG. 2018.06.14
    // --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //   ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //   :this.PARAMETER.get("PENCCOM") := 'S';
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVrfina_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVrfina_whenValidateItem");
        if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
            // this.PARAMETER.get("PENCCOM") = "S";
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVrfina_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // /*BEGIN
    // 
    // 
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // 
    // END;
    // */
    // :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // 
    // --+PY26491. JDG. 2018.06.14
    // -- CUOP
    // --+PY26491. JDG. 2018.06.14
    // --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // --+IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    // --+  ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    // --+  
    // --+  :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    // --+  :this.PARAMETER.get("PENCCOM") := 'S';
    // --+END IF; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrVrfina_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrVrfina_whenNewItemInstance");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        console.log("Exiting CRFSOLCR_crtsolicr_solicrVrfina_whenNewItemInstance");
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
    async CRFSOLCR_crtsolicr_solicrGtirec_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrGtirec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrGtirec_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrGtirec_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrGtirec_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrGtirec_keyNextItem");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCR_crtsolicr_solicrGtirec_keyNextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrTiseve_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTiseve_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_TISEVE", this.CRTSOLICR.SOLICR_TISEVE);
                // call REST API
                const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrtiseve_whenvalidateitem_query1", payload1);
                // get values from result
                this.CRTSOLICR.DESCRI_TISEVE = result1[0].get("CRTSOLICR.DESCRI_TISEVE");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_TISEVE = null;
                this.CRTSOLICR.DESCRI_TISEVE = null;
                // CRFSOLCR_LIB$ALERTA("MENSAJE", "CÓDIGO DE TIPO DE SERVICIO QUE PRESTARÁ EL VEHÍCULO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrTiseve_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //      BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM
    //      INTO     :CRTSOLICR.NOMBRE
    //      FROM     TBEN
    //      WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    // 
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        IF FRM$ALERTA_SINO ('DESEA CAMBIAR LA OBSERVACIÓN EXISTENTE') = 1 THEN
    //           CALL_FORM('SEFCRETER');
    //        ELSE 
    //           GO_ITEM('SOLICR_NITTER');
    //        END IF;
    //        END;
    //    
    //    ELSE
    //  LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO DEBE SER NULO ...',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrNitter_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("DESEA CAMBIAR LA OBSERVACIÓN EXISTENTE") == 1) {
                //     this.oracleFormsBuiltins.call_form("SEFCRETER");
                // }
                // else {
                //     this.oracleFormsBuiltins.go_item("SOLICR_NITTER");
                // }
            }

        }
        else {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO DEBE SER NULO ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrNitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCR_crtsolicr_analista_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_analista_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_analista_keyNextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //        PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
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
    //                    || 'CRFSOLCR.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrExpcli_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrExpcli_keyNextItem");
        let V_TOTAL_TER: null = null;
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                // V_MENSAJE = PUP_ENDEUDAMIENTO_TERCERO(this.CRTSOLICR.SOLICR_CODUNI, this.CRTSOLICR.SOLICR_NITTER, SYSDATE.toString(), V_TOTAL_TER);
                if (V_MENSAJE == "EXITO") {
                    // if (this.CRTSOLICR.SOLICR_EXPCLI == null ? 0 : this.CRTSOLICR.SOLICR_EXPCLI >= V_TOTAL_TER == null ? 0 : V_TOTAL_TER) {
                    //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "EXPOSICIÓN " + CRTSOLICR.SOLICR_EXPCLI.toString() + ") >= ENDEUDAMIENTO (" + V_TOTAL_TER.toString() + ").", "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                    // else {
                    //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "EXPOSICIÓN " + CRTSOLICR.SOLICR_EXPCLI.toString() + ") < ENDEUDAMIENTO (" + V_TOTAL_TER.toString() + ").", "ACEPTAR", null, null, T_RESPUESTA);
                    // }
                }
                else {
                    // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO SE PUDO OBTENER ENDEUDAMIENTO DEL TERCERO " + CRTSOLICR.SOLICR_NITTER + ".", "ACEPTAR", null, null, T_RESPUESTA);
                    // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                    // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                }
                this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_FIRMAS", "ENABLED", "PROPERTY_TRUE");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_EXPCLI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrExpcli_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT SUBCAT_DESCRI
    //    INTO :W_SUBCATEGORIA
    //    FROM COTSUBCAT
    //   WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //     AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //      AND SUBCAT_ESTADO = 'A'
    //      AND SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA;    
    //  EXCEPTION WHEN OTHERS THEN
    //   :W_SUBCATEGORIA := NULL;
    //  END;
    // --ELSE
    //  --LIB$ALERTA('MENSAJE','DEBE SELECCIONAR UNA SUBCATEGORIA...',NULL,NULL,NULL,T_RESPUESTA);
    // --END IF; 
    // --END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrSubcat_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrSubcat_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
            // payload1.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrsubcat_whenvalidateitem_query1", payload1);
            // get values from result
            // W_SUBCATEGORIA = result1[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.CRTSOLICR.W_SUBCATEGORIA = null;
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrSubcat_whenValidateItem");
    }

    //#region PLSQL
    // IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   END IF;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrSubcat_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrSubcat_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrSubcat_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // BEGIN
    //    IF NVL(:CRTSOLICR.SOLICR_PRESID, 0) > 100 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE RESIDUAL DEBE SER INFERIOR AL 100%....',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPresid_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPresid_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PRESID == null ? 0 : this.CRTSOLICR.SOLICR_PRESID > 100) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE RESIDUAL DEBE SER INFERIOR AL 100%....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPresid_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_solicrPresid_postTextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPresid_postTextItem");
        if ((this.CRTSOLICR.SOLICR_PRESID == null)) {
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NITRES", ENTERABLE, "ATTR_OFF");
        }
        else {
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_NITRES", ENTERABLE, ATTR_ON);
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrPresid_postTextItem");
    }

    //#region PLSQL
    // DECLARE  
    //  V_AREA   SGUSUARIOS.USU_AREA_N%TYPE;
    //  V_CARGO  SGUSUARIOS.USU_CARGO_N%TYPE;
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 28 DE JUNIO DE 2005
    //   --
    // BEGIN
    //  
    //   IF :CRTSOLICR.SOLICR_FECRADI IS NOT NULL THEN
    //    IF :CRTSOLICR.SOLICR_FECRADI > SYSDATE THEN
    //     LIB$DTNERFRMA('LA FECHA DE RADICACIÓN, '||TO_CHAR(:CRTSOLICR.SOLICR_FECRADI,'DD/MM/YYYY')
    //                 ||', DEBE SER INFERIOR O IGUAL A LA FECHA DEL SISTEMA, '||TO_CHAR(SYSDATE,'DD/MM/YYYY'));
    //    END IF;
    //    IF :CRTSOLICR.FECRADI_INI IS NULL THEN
    //     :CRTSOLICR.FECRADI_INI := :CRTSOLICR.SOLICR_FECRADI;
    //    END IF;
    //    /*IF :CRTSOLICR.SOLICR_FECRADI <> :CRTSOLICR.FECRADI_INI THEN
    //     SET_ITEM_INSTANCE_PROPERTY('CRTSOLICR.SOLICR_MOTARA',CURRENT_RECORD,"UPDATE_ALLOWED", "PROPERTY_TRUE");
    //     :CRTSOLICR.SOLICR_MOTARA := NULL;
    //    END IF;*/ 
    //   END IF;
    //   
    // 
    //    
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrFecradi_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrFecradi_whenValidateItem");
        let V_AREA: null = null;
        let V_CARGO: null = null;
        if ((this.CRTSOLICR.SOLICR_FECRADI != null)) {
            // if (this.CRTSOLICR.SOLICR_FECRADI > PLSQLBuiltins.sysdate()) {
            //     // CRFSOLCR_LIB$DTNERFRMA("LA FECHA DE RADICACIÓN, " + CRTSOLICR.SOLICR_FECRADI.toString() + ", DEBE SER INFERIOR O IGUAL A LA FECHA DEL SISTEMA, " + SYSDATE.toString());
            // }
            if ((this.CRTSOLICR.FECRADI_INI == null)) {
                this.CRTSOLICR.FECRADI_INI = this.CRTSOLICR.SOLICR_FECRADI;
            }
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrFecradi_whenValidateItem");
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
    async CRFSOLCR_crtsolicr_tipdescr_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_tipdescr_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC2: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //         payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_tipdescr_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC2 = result1[0].get("DESC2");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtsolicr_tipdescr_whenValidateItem");
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
    //                    || 'CRFSOLCR.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. '
    // //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_btnRegfrmxc_whenButtonPressed() {
        console.log("Entering CRFSOLCR_crtsolicr_btnRegfrmxc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.hide_window("WINDOWC");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_btnRegfrmxc_whenButtonPressed");
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
    async CRFSOLCR_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA, NO SE ACTUALIZARÁ EL REGISTRO ", null, null, null, T_RESPUESTA);
        //     this.GLOBAL.ACTUALIZAR = "NO";
        // }
        // else if ((this.CRTSOLICR.SOLICR_PUNTS$ != null)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
        //     this.GLOBAL.ACTUALIZAR = "NO";
        // }
        // else if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
        //     this.GLOBAL.ACTUALIZAR = "NO";
        // }
        // else if ((this.CRTSOLICR.SOLICR_PTOUS$ != null)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
        //     this.GLOBAL.ACTUALIZAR = "NO";
        // }
        // else {
        //     this.GLOBAL.ACTUALIZAR = "SI";
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //  
    //    IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
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
    async CRFSOLCR_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrTasa_postTextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, "ATTR_OFF");
        }
        else {
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "UPDATEABLE", ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", ENTERABLE, ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "UPDATEABLE", ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", ENTERABLE, ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "UPDATEABLE", ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", ENTERABLE, ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "UPDATEABLE", ATTR_ON);
            // CRFSOLCR_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", ENTERABLE, ATTR_ON);
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT UVPCRS_DESCRI
    //    INTO :CRTSOLICR.DESCRI_CODCDR 
    //     FROM COTUVPCRS
    //    WHERE UVPCRS_CODIGO = :CRTSOLICR.SOLICR_CODCDR; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :CRTSOLICR.DESCRI_CODCDR := NULL;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCodcdr_postChange() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCodcdr_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODCDR", this.CRTSOLICR.SOLICR_CODCDR);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrcodcdr_postchange_query1", payload1);
            // get values from result
            this.CRTSOLICR.DESCRI_CODCDR = result1[0].get("CRTSOLICR.DESCRI_CODCDR");
        } catch (ex) {

            this.CRTSOLICR.DESCRI_CODCDR = null;
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrCodcdr_postChange");
    }

    //#region PLSQL
    // BEGIN GO_ITEM ('CRTSOLICR.DESCRI_CODCDR'); END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCodcdr_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCodcdr_keyNextItem");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.DESCRI_CODCDR");
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCodcdr_keyNextItem");
    }

    async CRFSOLCR_crtsolicr_solicrCiaseg_keyPrevItem() {
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
    async CRFSOLCR_crtsolicr_solicrCiaseg_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCiaseg_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CIASEG != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrciaseg_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NONCIASEG = result1[0].get("CRTSOLICR.NONCIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_DEDESP");
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCiaseg_keyNextItem");
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
    //                   || 'CRFSOLCR.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. '
    // //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFSOLCR', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrPlazmi_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrPlazmi_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFSOLCR.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFSOLCR_PBD_SEG_MSGERR("CRFSOLCR", V_MENSAJE);
                // CRFSOLCR_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFSOLCR_crtsolicr_solicrPlazmi_keyNextItem");
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
    async CRFSOLCR_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrIntven_whenValidateItem");
        // if ((SOLICR_INTVEN != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_INTVEN", SOLICR_INTVEN);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrIntven_whenValidateItem");
    }

    async CRFSOLCR_crtsolicr_solicrComopr_keyNextItem() {
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
    //    WHERE COLOFI  = :SOLICR_CTAOFC
    //      AND COLTDOC = :SOLICR_CTATIP
    //      AND COLCOD  = :SOLICR_CTACOD;
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
    //     ELSIF ESTVI = 'VI' AND ESTRE  IN ('CJ','CE') THEN
    //        LIB$ALERTA('MENSAJE','ESTADO DEL CONTRATO EN COBRO JURIDICO ........',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //        :SOLICR_CTAOFC:=NULL;
    //        :SOLICR_CTATIP:=NULL;
    //        :SOLICR_CTACOD:=NULL;
    //     ELSE 
    //        BEGIN
    //         SELECT  INCDES
    //           INTO  :SOLICR_ACTAVA
    //           FROM  OPS$ACTIVOS.INC
    //          WHERE  INCTDOC=:SOLICR_CTATIP
    //            AND  INCCOL=:SOLICR_CTACOD
    //            AND  INCOFC=:SOLICR_CTAOFC;
    //        EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //          NULL;
    //        END;  
    //      END IF; 
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCR_crtsolicr_solicrCtacod_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrCtacod_whenValidateItem");
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
        //     const result1 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrctacod_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     CONTADOR = result1[0].get("CONTADOR");
        //     if (CONTADOR == 0) {
        //         // CRFSOLCR_LIB$ALERTA("MENSAJE", "CONTRATO INEXISTENTE ........", null, null, null, T_RESPUESTA);
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
        //         const result2 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrctacod_whenvalidateitem_query2", payload2);
        //         // get values from result
        //         ESTVI = result2[0].get("ESTVI");
        //         ESTRE = result2[0].get("ESTRE");
        //         if (result2 == null || result2.length == 0) {

        //         }

        //         if ((ESTVI != "VI" && ESTRE != "GR")) {
        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO DIFERENTE DE VIGENTE ........", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //             this.CRTSOLICR.SOLICR_CTAOFC = null;
        //             this.CRTSOLICR.SOLICR_CTATIP = null;
        //             this.CRTSOLICR.SOLICR_CTACOD = null;
        //         }
        //         else if ((ESTVI == "VI" && ["CJ", "CE"].indexOf(ESTRE) != -1)) {
        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO EN COBRO JURIDICO ........", null, null, null, T_RESPUESTA);
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
        //             // call REST API
        //             const result3 = await Rest.post("/crfsolcr_crtsolicr/crfsolcr_crtsolicr_solicrctacod_whenvalidateitem_query3", payload3);
        //             // get values from result
        //             SOLICR_ACTAVA = result3[0].get("SOLICR_ACTAVA");
        //             if (result3 == null || result3.length == 0) {

        //             }

        //         }
        //     }
        // }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrCtacod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCR_crtsolicr_comercial_keyNextItem() {
        console.log("Entering CRFSOLCR_crtsolicr_comercial_keyNextItem");
        console.log("Exiting CRFSOLCR_crtsolicr_comercial_keyNextItem");
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
    async CRFSOLCR_crtsolicr_solicrClasac_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtsolicr_solicrClasac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "U"].indexOf(this.CRTSOLICR.SOLICR_CLASAC) != -1) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        console.log("Exiting CRFSOLCR_crtsolicr_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //  
    //   IF  :CTRSOLICR2.SOLICR_OBSREC IS NOT NULL AND :CRTSOLICR.SOLICR_ESTSOL = 'RE' THEN
    //     LIB$ALERTA('MENSAJE','NO ES PERMITIDO CAMBIAR LAS CONDICIONES DADAS PARA SER RECONSIDERADA ',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;  
    //    END IF;
    //  
    //   --+PY21520. JDG.
    //   PUP_MENSAJE_FIRMAS;
    //  
    // END;
    //#endregion
    async CRFSOLCR_ctrsolicr2_preUpdate() {
        console.log("Entering CRFSOLCR_ctrsolicr2_preUpdate");
        let T_RESPUESTA: number = null;
        if (((this.CTRSOLICR2.SOLICR_OBSREC != null) && this.CRTSOLICR.SOLICR_ESTSOL == "RE")) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO CAMBIAR LAS CONDICIONES DADAS PARA SER RECONSIDERADA ", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        console.log("Exiting CRFSOLCR_ctrsolicr2_preUpdate");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_ESTADO    VARCHAR2(2);
    //   ESTADO_NO_VALIDO EXCEPTION;
    //   V_EXISTE NUMBER;
    // BEGIN
    //    
    //  /*AUTOR  : JAIRO A. TORRES R.
    //    FECHA  : 14/09/2011
    //    MOTIVO : PARA PROCESO SI EL TERCERO ESTA COMO RESTRINGIDO*/  
    //    
    //    
    //    
    //   IF :CTRSOLICR2.SOLICR_OBSREC IS NULL THEN
    //     LIB$ALERTA('MENSAJE',
    //                'DEBE INGRESAR LOS CAMBIOS QUE SE DEBEN HACER EN LA SOLICITUD PARA PODERLA RECONSIDERAR...',
    //                NULL, NULL, NULL, T_RESPUESTA);
    //   ELSIF FRM$ALERTA_SINO('ESTA SEGURO DE QUE DESEA RECONSIDERAR LA SOLICITUD') = 1 THEN
    //    
    //     PQBD_COL_SEGRECON.PBD_NVASOL(:CRTSOLICR.SOLICR_OFCSOL,
    //                                  :CRTSOLICR.SOLICR_CODSOL,
    //                                  :CRTSOLICR.SOLICR_CODUNI);  --ARQUITECTURA
    //     COMMIT;
    //     ---INSERTA EL ESTADO ORIGINAL ANTES DE PASARLA A RE
    //     INSERT INTO CRTSOLESTOBS
    //       (SOBS_OFCSOL, SOBS_CODSOL, SOBS_ESTADO, SOBS_OBSERVACION, SOBS_FECREG,
    //        SOBS_USRCHANGE, SOBS_CODUNI)
    //     VALUES
    //       (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //        :CRTSOLICR.SOLICR_ESTSOL, 'LA SOLICITUD PASO A SER RECONSIDERADA',
    //        SYSDATE, :BASE.USUARIO, :CRTSOLICR.SOLICR_CODUNI);
    //     :GLOBAL.ACTUALIZAR        := 'SI';
    //     :CTRSOLICR2.SOLICR_ESTSOL := 'RE';
    //     :CTRSOLICR2.SOLICR_FECREC := SYSDATE;
    //     COMMIT;
    //     --TRAS
    //     BEGIN
    //       SELECT COUNT(*)
    //         INTO V_EXISTE
    //         FROM CRTCONTROL
    //        WHERE CONTROL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND CONTROL_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND CONTROL_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     END;
    //     IF V_EXISTE > 0 THEN
    //       PU_TRASLADO_PLANEACIONES(:CRTSOLICR.SOLICR_OFCSOL,
    //                                :CRTSOLICR.SOLICR_CODSOL,
    //                                :CRTSOLICR.SOLICR_TIPCRE,
    //                                :CRTSOLICR.SOLICR_CODUNI); --ARQUITECTURA
    //     END IF;
    //     --
    //  
    //     
    //     
    //     :GLOBAL.CODIGO := :CTRSOLICR2.SOLICR_CODSOL;
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD HA SIDO RECONSIDERADA', NULL, NULL,
    //                NULL, T_RESPUESTA);
    //     HIDE_VIEW('CANVAS14');
    //     GO_ITEM('CRTSOLICR.SOLICR_OFCSOL');
    //     EXECUTE_QUERY;
    //   ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO RECONSIDERADA', NULL,
    //                NULL, NULL, T_RESPUESTA);
    //     HIDE_VIEW('CANVAS14');
    //     :CTRSOLICR2.SOLICR_OBSREC := NULL;
    //     COMMIT;
    //     GO_BLOCK('CRTSOLICR');
    //     ENTER_QUERY;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_ctrsolicr2_re_whenButtonPressed() {
        console.log("Entering CRFSOLCR_ctrsolicr2_re_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = null;
        let ESTADO_NO_VALIDO: null = null;
        let V_EXISTE: number = null;
        if ((this.CTRSOLICR2.SOLICR_OBSREC == null)) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LOS CAMBIOS QUE SE DEBEN HACER EN LA SOLICITUD PARA PODERLA RECONSIDERAR...", null, null, null, T_RESPUESTA);
        }
        // else if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA RECONSIDERAR LA SOLICITUD") == 1) {
        //     // CRFSOLCR_PQBD_COL_SEGRECON.PBD_NVASOL(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODUNI);
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.SOLICR_OFCSOL = : this.CRTSOLICR.SOLICR_OFCSOL;
        //     payload2.SOLICR_CODSOL = : this.CRTSOLICR.SOLICR_CODSOL;
        //     payload2.SOLICR_ESTSOL = : this.CRTSOLICR.SOLICR_ESTSOL;
        //     payload2.USUARIO = : BASE.USUARIO;
        //     payload2.SOLICR_CODUNI = : this.CRTSOLICR.SOLICR_CODUNI;
        //     // call REST API
        //     const result2 = await Rest.post("/crfsolcr_ctrsolicr2/crfsolcr_ctrsolicr2_re_whenbuttonpressed_query2", payload2);
        //     this.GLOBAL.ACTUALIZAR = "SI";
        //     this.CTRSOLICR2.SOLICR_ESTSOL = "RE";
        //     this.CTRSOLICR2.SOLICR_FECREC = PLSQLBuiltins.sysdate();
        //     // construct payload
        //     let payload4 = new Map();
        //     payload4.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload4.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result4 = await Rest.post("/crfsolcr_ctrsolicr2/crfsolcr_ctrsolicr2_re_whenbuttonpressed_query4", payload4);
        //     // get values from result
        //     V_EXISTE = result4[0].get("V_EXISTE");
        //     if (V_EXISTE > 0) {
        //         // CRFSOLCR_PU_TRASLADO_PLANEACIONES(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, this.CRTSOLICR.SOLICR_CODUNI);
        //     }
        //     this.GLOBAL.CODIGO = this.CTRSOLICR2.SOLICR_CODSOL;
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD HA SIDO RECONSIDERADA", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.hide_view("CANVAS14");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OFCSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO RECONSIDERADA", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.hide_view("CANVAS14");
        //     this.CTRSOLICR2.SOLICR_OBSREC = null;
        //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
        //     this.oracleFormsBuiltins.enter_query();
        // }
        console.log("Exiting CRFSOLCR_ctrsolicr2_re_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //    INSERT INTO CRTOTERSOL (OTERSOL_OFCSOL,OTERSOL_CODSOL,OTERSOL_TIPVIN,OTERSOL_NITTER,OTERSOL_TIPPER,OTERSOL_TIPIDE)
    //    VALUES(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,'99',:CRTTEREXT.TEREXT_NIT,'J','NE');
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TERCERO NO ESTA CREADO .....',NULL,NULL,NULL,T_RESPUESTA);
    //  END;
    //#endregion
    async CRFSOLCR_crtterext_postInsert() {
        console.log("Entering CRFSOLCR_crtterext_postInsert");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.SOLICR_OFCSOL = : this.CRTSOLICR.SOLICR_OFCSOL;
        // payload1.SOLICR_CODSOL = : this.CRTSOLICR.SOLICR_CODSOL;
        // payload1.TEREXT_NIT = : CRTTEREXT.TEREXT_NIT;
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtterext/crfsolcr_crtterext_postinsert_query1", payload1);
        if (result1 == null || result1.length == 0) {

            // CRFSOLCR_LIB$ALERTA("MENSAJE", "TERCERO NO ESTA CREADO .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLCR_crtterext_postInsert");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   --+PY21520. JDG.
    //   PUP_MENSAJE_FIRMAS;
    //   
    // END;
    //#endregion
    async CRFSOLCR_crtterext_preUpdate() {
        console.log("Entering CRFSOLCR_crtterext_preUpdate");
        // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        console.log("Exiting CRFSOLCR_crtterext_preUpdate");
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
    //       WHERE TEREXT_CODUNI = :TEREXT_CODUNI; --ARQUITECTURA
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
    async CRFSOLCR_crtterext_preInsert() {
        console.log("Entering CRFSOLCR_crtterext_preInsert");
        let V_NUEVO_NIT: number = null;
        // if ((CRTTEREXT.TEREXT_NIT == null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("TEREXT_CODUNI", TEREXT_CODUNI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtterext/crfsolcr_crtterext_preinsert_query1", payload1);
        //         // get values from result
        //         V_NUEVO_NIT = result1[0].get("V_NUEVO_NIT");
        //         this.CRTTEREXT.TEREXT_NIT = V_NUEVO_NIT.toString();
        //     } catch (ex) {

        //         this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL");
        //     }

        // }
        this.CRTTEREXT.TEREXT_TIPID = "NE";
        this.CRTTEREXT.TEREXT_TIPPER = "J";
        console.log("Exiting CRFSOLCR_crtterext_preInsert");
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
    async CRFSOLCR_crtterext_terextNomcia_keyNextItem() {
        console.log("Entering CRFSOLCR_crtterext_terextNomcia_keyNextItem");
        let VBOTON: number = null;
        let V_LIST: boolean = null;
        // if ((TEREXT_NIT == null)) {
        //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "PARA CREAR UN PROVEEDOR EXTRANJERO, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, VBOTON);
        //     V_LIST = this.oracleFormsBuiltins.show_lov("LOV263_NITEXT");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFSOLCR_crtterext_terextNomcia_keyNextItem");
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
    async CRFSOLCR_crtterext_terextCodpais_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtterext_terextCodpais_whenValidateItem");
        // if ((CRTTEREXT.TEREXT_NIT != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("TEREXT_CODPAIS", CRTTEREXT.TEREXT_CODPAIS);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcr_crtterext/crfsolcr_crtterext_terextcodpais_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCR_LIB$ALERTA("MENSAJE", "AL TERCERO NO SE LE HA DEFINIDO UN PAIS, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCR_crtterext_terextCodpais_whenValidateItem");
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
    async CRFSOLCR_crtotersol1_postTextItem() {
        console.log("Entering CRFSOLCR_crtotersol1_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFSOLCR_FRM$AUDIT_SOLIC_ADD_ROW(CRTOTERSOL1.OTERSOL_OFCSOL, CRTOTERSOL1.OTERSOL_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFSOLCR_crtotersol1_postTextItem");
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
    async CRFSOLCR_crtotersol1_keyDelrec() {
        console.log("Entering CRFSOLCR_crtotersol1_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCR_crtotersol1_keyDelrec");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE');
    //   --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 22 DE SEPTIEMBRE DE 2005
    //   --
    // IF :CRTOTERSOL1.OTERSOL_TIPVIN = '05' AND UPPER(:SYSTEM.CURSOR_ITEM) <> 'CRTSOTERSOL1.OTERSOL_ACTJUN' THEN
    //  SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async CRFSOLCR_crtotersol1_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_crtotersol1_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if ((CRTOTERSOL1.OTERSOL_TIPVIN == "05" && PLSQLBuiltins.upper(this._SYSTEM_SERVICE.get("CURSOR_ITEM")) != "CRTSOTERSOL1.OTERSOL_ACTJUN")) {
        //     this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), "UPDATE_ALLOWED", "PROPERTY_FALSE");
        // }
        console.log("Exiting CRFSOLCR_crtotersol1_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCR_crtotersol1_preQuery() {
        console.log("Entering CRFSOLCR_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCR_crtotersol1_preQuery");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    CLEAR_BLOCK;
    // 
    //    IF this._SYSTEM_SERVICE.get("BLOCK_STATUS") <> 'CHANGED' THEN
    //       FRM$AUDIT_SOLIC_DEL;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCR_crtotersol1_keyClrblk() {
        console.log("Entering CRFSOLCR_crtotersol1_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") != "CHANGED") {
            // CRFSOLCR_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFSOLCR_crtotersol1_keyClrblk");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   --+PY21520. JDG.
    //   PUP_MENSAJE_FIRMAS;
    //   
    // END;
    //#endregion
    async CRFSOLCR_crtotersol1_preUpdate() {
        console.log("Entering CRFSOLCR_crtotersol1_preUpdate");
        // CRFSOLCR_PUP_MENSAJE_FIRMAS();
        console.log("Exiting CRFSOLCR_crtotersol1_preUpdate");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ACTJUN, ACTA DE JUNTA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 3 DE OCTUBRE DE 2005
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
    async CRFSOLCR_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFSOLCR_crtotersol1_whenNewBlockInstance");
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
        console.log("Exiting CRFSOLCR_crtotersol1_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODUNI := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    // :CRTOTERSOL1.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCR_crtotersol1_preInsert() {
        console.log("Entering CRFSOLCR_crtotersol1_preInsert");
        this.CRTOTERSOL1.OTERSOL_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCR_crtotersol1_preInsert");
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
    async CRFSOLCR_crtotersol1_keyEntqry() {
        console.log("Entering CRFSOLCR_crtotersol1_keyEntqry");
        console.log("Exiting CRFSOLCR_crtotersol1_keyEntqry");
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
    async CRFSOLCR_crtotersol1_postUpdate() {
        console.log("Entering CRFSOLCR_crtotersol1_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: null = null;
        let RG_INDICE: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        if ((!this.oracleFormsBuiltins.id_null(RG_ID))) {
            RG_INDICE = this.oracleFormsBuiltins.get_group_row_count(RG_ID);
            if (RG_INDICE > 0) {
                // CRFSOLCR_FRM$AUDIT_SOLIC_INSERT();
            }
        }
        console.log("Exiting CRFSOLCR_crtotersol1_postUpdate");
    }

    //#region PLSQL
    // BEGIN
    //  --+PY26491. JDG. 2018.06.14
    //   --+IF :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   IF ( ( :CRTSOLICR.SOLICR_TIPCRE = '03' AND :CRTSOLICR.SOLICR_TIPBIE IS NOT NULL ) OR
    //     ( :CRTSOLICR.SOLICR_TIPCRE = '04' ) ) AND :CRTSOLICR.SOLICR_VRFINA IS NOT NULL AND
    //   --+
    //     :CRTSOLICR.SOLICR_ORMONET IS NOT NULL AND :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_VRFINA ,:CRTSOLICR.SOLICR_ORMONET
    //            ,:CRTSOLICR.SOLICR_NITTER ,SYSDATE                  ,'this.PARAMETER.get("PCOMITE")'
    //            ,'CRTSOLICR.COMITE', :CRTSOLICR.SOLICR_CODUNI); --ARQUITECTURA
    //     --+PY26491. JDG. 2018.06.14       
    //    --+BEGIN
    //     --+  UPDATE CRTSOLICR
    //     --+  --+SET    SOLICR_COMITE = NVL(:this.PARAMETER.get("PCOMITE"),:CRTSOLICR.SOLICR_COMITE)
    //     --+  SET SOLICR_COMITE = NVL( :this.PARAMETER.get("PCOMITE"), NVL( :CRTSOLICR.SOLICR_COMITE, SOLICR_COMITE ) )
    //     --+  WHERE  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     --+  AND    SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     --+  AND    SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI  --ARQUITECTURA
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
    async CRFSOLCR_crtotersol1_postInsert() {
        console.log("Entering CRFSOLCR_crtotersol1_postInsert");
        try {

            if ((((((this.CRTSOLICR.SOLICR_TIPCRE == "03" && (this.CRTSOLICR.SOLICR_TIPBIE != null)) || this.CRTSOLICR.SOLICR_TIPCRE == "04") && (this.CRTSOLICR.SOLICR_VRFINA != null)) && (this.CRTSOLICR.SOLICR_ORMONET != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                // CRFSOLCR_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, this.CRTSOLICR.SOLICR_VRFINA, this.CRTSOLICR.SOLICR_ORMONET, this.CRTSOLICR.SOLICR_NITTER, PLSQLBuiltins.sysdate(), "this.PARAMETER.get("PCOMITE")", "CRTSOLICR.COMITE", this.CRTSOLICR.SOLICR_CODUNI);
                this.CRTSOLICR.SOLICR_COMITE = this.PARAMETER.get("PCOMITE") == null ? this.CRTSOLICR.SOLICR_COMITE : this.PARAMETER.get("PCOMITE");
            }
        } catch (ex) {

            // CRFSOLCR_LIB$DTNERFRMA(SQLERRM);
        }

        console.log("Exiting CRFSOLCR_crtotersol1_postInsert");
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
    async CRFSOLCR_crtotersol1_postRecord() {
        console.log("Entering CRFSOLCR_crtotersol1_postRecord");
        console.log("Exiting CRFSOLCR_crtotersol1_postRecord");
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
    async CRFSOLCR_crtotersol1_postQuery() {
        console.log("Entering CRFSOLCR_crtotersol1_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtotersol1/crfsolcr_crtotersol1_postquery_query1", payload1);
        // get values from result
        this.CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCR_LIB$ALERTA("MENSAJE", "TERCERO AÚN NO CREADO. DEBE CREARLO PARA CONTINUAR .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLCR_crtotersol1_postQuery");
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
    async CRFSOLCR_crtotersol1_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtotersol1_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTOTERSOL1.OTERSOL_GIRDIR == null ? 0 : this.CRTOTERSOL1.OTERSOL_GIRDIR > 100) {
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE GIRO DIRECTO NO DEBE SUPERAR EL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCR_crtotersol1_otersolGirdir_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: TERRES: TERCEROS RESTRINGIDOS
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 20 DE ENERO DE 2005
    //   --
    //   --
    //   -- MODIFICACIÓN: VPROVREG: VALIDACION REGISTRO DE PROVEEDORES 
    //   -- AUTOR DE LA MODIFICACIÓN: RICARDO TARAZONA GARCÍA, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 06 DE JUNIO DE 2008
    //   --
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
    //   V_TIPPER TER.TERPER%TYPE;
    // BEGIN
    //   IF :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    //   BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //      INTO   :CRTOTERSOL1.NOMBRE, :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD=:CRTOTERSOL1.OTERSOL_NITTER);
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL,NULL, NULL,'Q');
    //      SET_ITEM_PROPERTY('VARIABLE.CRTER',ENABLED,"ATTR_OFF");
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //         SET_ITEM_PROPERTY('VARIABLE.CRTER',ENABLED,ATTR_ON);
    //         PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL,NULL, NULL,'T');
    //      ELSE 
    //         LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //      END IF;
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
    //  END;
    // /* 
    //  DECLARE
    //  T_EXISTE NUMBER;
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
    //   ELSE
    //      MSG_ALERT('TERCERO INEXISTENTE. DEBE CREARLO  .....','I',FALSE);
    //      SET_ITEM_PROPERTY('VARIABLE.CRTER',ENABLED,ATTR_ON);
    //   END IF;   
    // END;
    // */; END;
    //#endregion
    async CRFSOLCR_crtotersol1_otersolNitter_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtotersol1_otersolNitter_whenValidateItem");
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // CRFSOLCR_PVALTER(CRTOTERSOL1.OTERSOL_NITTER);
        }
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // CRFSOLCR_PU_MENSAJES_PROVEEDOR(CRTOTERSOL1.OTERSOL_NITTER);
        }
        let T_RESPUESTA: number = null;
        let V_TIPPER: null = null;
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfsolcr_crtotersol1/crfsolcr_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
            this.CRTOTERSOL1.OTERSOL_TIPPER = result1[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            this.CRTOTERSOL1.OTERSOL_TIPIDE = result1[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            // CRFSOLCR_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "Q");
            this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_OFF");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_ON");
                //     // CRFSOLCR_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "T");
                // }
                // else {
                //     // CRFSOLCR_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }

            // construct payload
            let payload2 = new Map();
            payload2.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolcr_crtotersol1/crfsolcr_crtotersol1_otersolnitter_whenvalidateitem_query2", payload2);
            // get values from result
            V_TIPPER = result2[0].get("V_TIPPER");
            if (result2 == null || result2.length == 0) {

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
            // CRFSOLCR_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCR_crtotersol1_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_EXISTE NUMBER;
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
    //   ELSE
    //      MSG_ALERT('TERCERO INEXISTENTE. DEBE CREARLO  .....','I',FALSE);
    //      SET_ITEM_PROPERTY('VARIABLE.CRTER',ENABLED,ATTR_ON);
    //   END IF;   
    // END;
    //#endregion
    async CRFSOLCR_crtotersol1_otersolNitter_whenvalidateitem() {
        console.log("Entering CRFSOLCR_crtotersol1_otersolNitter_whenvalidateitem");
        let T_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtotersol1/crfsolcr_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
        // get values from result
        T_EXISTE = result1[0].get("T_EXISTE");
        if (T_EXISTE > 0) {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_OFF");
            // construct payload
            let payload2 = new Map();
            payload2.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolcr_crtotersol1/crfsolcr_crtotersol1_otersolnitter_whenvalidateitem_query2", payload2);
            // get values from result
            this.CRTOTERSOL1.NOMBRE = result2[0].get("CRTOTERSOL1.NOMBRE");
            this.CRTOTERSOL1.OTERSOL_TIPPER = result2[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            this.CRTOTERSOL1.OTERSOL_TIPIDE = result2[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
        }
        else {
            // CRFSOLCR_MSG_ALERT("TERCERO INEXISTENTE. DEBE CREARLO  .....", "I", FALSE);
            this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_ON");
        }
        console.log("Exiting CRFSOLCR_crtotersol1_otersolNitter_whenvalidateitem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLCR_crtotersol1_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLCR_crtotersol1_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLCR_crtotersol1_otersolOfcsol_whenNewItemInstance");
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
    async CRFSOLCR_crtotersol1_otersolTipper_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtotersol1_otersolTipper_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcr_crtotersol1/crfsolcr_crtotersol1_otersoltipper_whenvalidateitem_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCR_MSG_ALERT("TERCERO INEXISTENTE. DEBE CREARLO  .....", "I", FALSE);
        }

        console.log("Exiting CRFSOLCR_crtotersol1_otersolTipper_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VTER TER%ROWTYPE;
    // BEGIN
    //   IF :CRTOTERSOL1.OTERSOL_TIPPER IS NULL AND :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    //     BEGIN
    //       OPS$COLOCA.PQBD_SEG_TER.PTER(:CRTOTERSOL1.OTERSOL_NITTER, VTER);
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
    async CRFSOLCR_crtotersol1_otersolActjun_whenValidateItem() {
        console.log("Entering CRFSOLCR_crtotersol1_otersolActjun_whenValidateItem");
        let VTER: null = null;
        if (((this.CRTOTERSOL1.OTERSOL_TIPPER == null) && (this.CRTOTERSOL1.OTERSOL_NITTER != null))) {
            // CRFSOLCR_OPS$COLOCA.PQBD_SEG_TER.PTER(CRTOTERSOL1.OTERSOL_NITTER, VTER);
            // this.CRTOTERSOL1.OTERSOL_TIPIDE = VTER.TERTID;
            // this.CRTOTERSOL1.OTERSOL_TIPPER = VTER.TERPER;
            // if (VTER.TERPER == "J") {
            //     this.CRTOTERSOL1.NOMBRE = VTER.TERAPE;
            // }
            // else {
            //     this.CRTOTERSOL1.NOMBRE = VTER.TERNOM + " " + VTER.TERAPE;
            // }
            // if (result0 == null || result0.length == 0) {

            //     // CRFSOLCR_LIB$DTNERFRMA("EL TERCERO " + CRTOTERSOL1.OTERSOL_NITTER + " NO EXISTE");
            // }

        }
        if (this.CRTOTERSOL1.OTERSOL_TIPPER == null ? "N" : this.CRTOTERSOL1.OTERSOL_TIPPER != "J") {
            if (this.CRTOTERSOL1.OTERSOL_ACTJUN == null ? "N" : this.CRTOTERSOL1.OTERSOL_ACTJUN == "S") {
                // CRFSOLCR_LIB$DTNERFRMA("EL ACTA DE JUNTA SÓLO PUEDE SER EXIGIDA A PERSONAS JURÍDICAS");
            }
        }
        console.log("Exiting CRFSOLCR_crtotersol1_otersolActjun_whenValidateItem");
    }

}

