import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCDEGRL business logic
import {
    CRTOTERSOL,
    TOOLBAR,
    PPAL,
    SOLOBS,
    BASE,
    CRTGAADSO,
    CRTRESTR,
    VARIABLE,
    COVPIEDRA,
    CRTSOLICR,
    CRTTEREXT,
    COTTIPXCOM,
    CRTOTERSOL1
} from "./CRFCDEGRL_models";



// class CRFCDEGRL
@Component({
    selector: 'app-crfcdegrl',
    templateUrl: './crfcdegrl.component.html',
})
export class CrfcdegrlComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['POFCSOL', null],
        ['PCODSOL', null],
        ['SOL_OFI', null],
        ['SOL_TIP', null],
        ['SOL_COD', null],
        ['SOL_CTRL', null],
        ['SOL_UNIDAD', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public PPAL: PPAL = new PPAL();
    public SOLOBS: SOLOBS = new SOLOBS();
    public BASE: BASE = new BASE();
    public CRTGAADSO: CRTGAADSO = new CRTGAADSO();
    public CRTRESTR: CRTRESTR = new CRTRESTR();
    public VARIABLE: VARIABLE = new VARIABLE();
    public COVPIEDRA: COVPIEDRA = new COVPIEDRA();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CRTTEREXT: CRTTEREXT = new CRTTEREXT();
    public COTTIPXCOM: COTTIPXCOM = new COTTIPXCOM();
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
    async CRFCDEGRL_onClearDetails() {
        console.log("Entering CRFCDEGRL_onClearDetails");
        // CRFCDEGRL_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFCDEGRL_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCDEGRL_whenMouseDoubleclick() {
        console.log("Entering CRFCDEGRL_whenMouseDoubleclick");
        console.log("Exiting CRFCDEGRL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    // 
    //  CLEAR_FORM;
    // 
    //   IF this._SYSTEM_SERVICE.get("BLOCK_SERVICE") <> 'CHANGED' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // 
    // 
    // 
    // -- MESSAGE('LA VARIABLE RADIO_ESTADO SE ENCUENTRA EN: '||:VARIABLE.RADIO_ESTADO||' RANTERIOR: '||:GLOBAL.RADIO_ANTERIOR);
    // END;
    //#endregion
    async CRFCDEGRL_keyClrfrm() {
        console.log("Entering CRFCDEGRL_keyClrfrm");
        this.oracleFormsBuiltins.clear_form();
        if (this._SYSTEM_SERVICE.get("BLOCK_SERVICE") != "CHANGED") {
            // CRFCDEGRL_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFCDEGRL_keyClrfrm");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // 
    // END;
    //#endregion
    async CRFCDEGRL_preForm() {
        console.log("Entering CRFCDEGRL_preForm");
        // CRFCDEGRL_PANTALLA();
        // CRFCDEGRL_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFCDEGRL_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCDEGRL_whenNewFormInstance() {
        console.log("Entering CRFCDEGRL_whenNewFormInstance");
        console.log("Exiting CRFCDEGRL_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //  LIB$ALERTA('MENSAJE','NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async CRFCDEGRL_crtotersol_keyDelrec() {
        console.log("Entering CRFCDEGRL_crtotersol_keyDelrec");
        let T_RESPUESTA: number = null;
        // CRFCDEGRL_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
        console.log("FORM_TRIGGER_FAILURE");
        throw new Error('FORM_TRIGGER_FAILURE');
        console.log("Exiting CRFCDEGRL_crtotersol_keyDelrec");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFCDEGRL_crtotersol_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_crtotersol_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFCDEGRL_crtotersol_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFCDEGRL_crtotersol_volverTer_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_crtotersol_volverTer_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFCDEGRL_crtotersol_volverTer_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFCDEGRL_crtotersol_volverTer_whenMouseClick() {
        console.log("Entering CRFCDEGRL_crtotersol_volverTer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFCDEGRL_crtotersol_volverTer_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCDEGRL_toolbar_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_toolbar_whenButtonPressed");
        console.log("Exiting CRFCDEGRL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCDEGRL_toolbar_whenMouseLeave() {
        console.log("Entering CRFCDEGRL_toolbar_whenMouseLeave");
        console.log("Exiting CRFCDEGRL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCDEGRL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCDEGRL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCDEGRL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('CARACON.JPG'  ,'JPG','VARIABLE.CARATULA'); END;
    //#endregion
    async CRFCDEGRL_ppal_whenNewBlockInstance() {
        console.log("Entering CRFCDEGRL_ppal_whenNewBlockInstance");
        this.oracleFormsBuiltins.read_image_file("CARACON.JPG", "JPG", "VARIABLE.CARATULA");
        console.log("Exiting CRFCDEGRL_ppal_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :VOLVER:='MENU ANT'; END;
    //#endregion
    async CRFCDEGRL_ppal_postQuery() {
        console.log("Entering CRFCDEGRL_ppal_postQuery");
        this.PPAL.VOLVER = "MENU ANT";
        console.log("Exiting CRFCDEGRL_ppal_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC1   := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL1:= :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL1   := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC1  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.UNIDAD1  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     GO_ITEM ('CRTSOLICR.SOLICR_BCODEX');
    //     
    //     --+PY21520. JDG.
    //     :VARIABLE.SOLICR_CODVOR1 := :CRTSOLICR.SOLICR_CODVOR;
    // END;
    //#endregion
    async CRFCDEGRL_ppal_redesctos_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_redesctos_whenNewItemInstance");
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL1 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL1 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC1 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD1 = this.CRTSOLICR.SOLICR_CODUNI;
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_BCODEX");
        this.VARIABLE.SOLICR_CODVOR1 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFCDEGRL_ppal_redesctos_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC5    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL5 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL5 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC5  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.UNIDAD5  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     GO_ITEM  ('CRTSOLICR.SOLICR_OBSECR');
    //     
    //     --+PY21520. JDG.
    //    :VARIABLE.SOLICR_CODVOR5 := :CRTSOLICR.SOLICR_CODVOR;
    //    
    // END;
    //#endregion
    async CRFCDEGRL_ppal_credto_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_credto_whenNewItemInstance");
        this.VARIABLE.OFC5 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL5 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL5 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC5 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD5 = this.CRTSOLICR.SOLICR_CODUNI;
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSECR");
        this.VARIABLE.SOLICR_CODVOR5 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFCDEGRL_ppal_credto_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC4    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL4 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL4 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC4  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.UNIDAD4  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     -- GO_ITEM ('VARIABLE.ITEM_COMODIN');
    // END;
    //#endregion
    async CRFCDEGRL_ppal_aproCial_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_aproCial_whenNewItemInstance");
        this.VARIABLE.OFC4 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL4 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL4 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC4 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD4 = this.CRTSOLICR.SOLICR_CODUNI;
        console.log("Exiting CRFCDEGRL_ppal_aproCial_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //      GO_BLOCK('CRTSOLICR');
    // END;
    //#endregion
    async CRFCDEGRL_ppal_infGrl_whenMouseClick() {
        console.log("Entering CRFCDEGRL_ppal_infGrl_whenMouseClick");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFCDEGRL_ppal_infGrl_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     GO_ITEM ('SOLICR_CIASEG');
    //     :VARIABLE.OFC2   := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL2:= :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL2   := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC2  := :CRTSOLICR.SOLICR_OFIBANC; 
    //     :VARIABLE.UNIDAD2  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     
    //     --+PY21520. JDG.
    //     :VARIABLE.SOLICR_CODVOR2 := :CRTSOLICR.SOLICR_CODVOR;
    // END;
    //#endregion
    async CRFCDEGRL_ppal_segImp_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_segImp_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("SOLICR_CIASEG");
        this.VARIABLE.OFC2 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL2 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL2 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC2 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD2 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.SOLICR_CODVOR2 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFCDEGRL_ppal_segImp_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //    :VARIABLE.CODOFI10  := :CRTSOLICR.SOLICR_OFCSOL;
    //    :VARIABLE.CODSOL10  := :CRTSOLICR.SOLICR_CODSOL;
    //    :VARIABLE.ESTSOL10  := :CRTSOLICR.SOLICR_ESTSOL;
    //    :VARIABLE.SOLICR_OFIBANC10  := :CRTSOLICR.SOLICR_OFIBANC;
    //    :VARIABLE.UNIDAD10  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    // 
    //    GO_BLOCK('VARIABLE');  
    //    GO_ITEM ('CRTSOLICR.SOLICR_FECRADI');
    //    
    //    --+PY21520. JDG.
    //    :VARIABLE.SOLICR_CODVOR10 := :CRTSOLICR.SOLICR_CODVOR;
    //    
    // END;
    //#endregion
    async CRFCDEGRL_ppal_estudio_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_estudio_whenNewItemInstance");
        this.VARIABLE.CODOFI10 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL10 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL10 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC10 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD10 = this.CRTSOLICR.SOLICR_CODUNI;
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
        this.VARIABLE.SOLICR_CODVOR10 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFCDEGRL_ppal_estudio_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // HIDE_VIEW('REESTRUCTURADOS');
    // GO_ITEM('CRTSOLICR.SOLICR_TIPCRE'); END;
    //#endregion
    async CRFCDEGRL_ppal_volver1_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_ppal_volver1_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("REESTRUCTURADOS");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TIPCRE");
        console.log("Exiting CRFCDEGRL_ppal_volver1_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //    SHOW_VIEW('CANVAS2');
    // END;
    //#endregion
    async CRFCDEGRL_ppal_volver_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_volver_whenNewItemInstance");
        this.oracleFormsBuiltins.show_view("CANVAS2");
        console.log("Exiting CRFCDEGRL_ppal_volver_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.CODOFI8     := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL8  := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL8  := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.OFC8  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.UNIDAD8 := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     GO_BLOCK('VARIABLE');
    //     
    //     --+PY21520. JDG.
    //     :VARIABLE.SOLICR_CODVOR8 := :CRTSOLICR.SOLICR_CODVOR;
    // 
    // END;
    //#endregion
    async CRFCDEGRL_ppal_oTerceros_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_oTerceros_whenNewItemInstance");
        this.VARIABLE.CODOFI8 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL8 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL8 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.OFC8 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD8 = this.CRTSOLICR.SOLICR_CODUNI;
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.VARIABLE.SOLICR_CODVOR8 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFCDEGRL_ppal_oTerceros_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC3    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL3 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL3 := :CRTSOLICR.SOLICR_ESTSOL;
    //     :VARIABLE.SOLICR_OFIBANC3  := :CRTSOLICR.SOLICR_OFIBANC;
    //     :VARIABLE.UNIDAD3  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //     
    //     GO_ITEM ('SOLICR_GTIREC');
    //     
    //     --+PY21520. JDG.
    //     :VARIABLE.SOLICR_CODVOR3 := :CRTSOLICR.SOLICR_CODVOR;
    //     
    // END;
    //#endregion
    async CRFCDEGRL_ppal_gtiasAd_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_ppal_gtiasAd_whenNewItemInstance");
        this.VARIABLE.OFC3 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL3 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL3 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.VARIABLE.SOLICR_OFIBANC3 = this.CRTSOLICR.SOLICR_OFIBANC;
        this.VARIABLE.UNIDAD3 = this.CRTSOLICR.SOLICR_CODUNI;
        this.oracleFormsBuiltins.go_item("SOLICR_GTIREC");
        this.VARIABLE.SOLICR_CODVOR3 = this.CRTSOLICR.SOLICR_CODVOR;
        console.log("Exiting CRFCDEGRL_ppal_gtiasAd_whenNewItemInstance");
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
    async CRFCDEGRL_solobs_postQuery() {
        console.log("Entering CRFCDEGRL_solobs_postQuery");
        let VMOE: null = null;
        if ((this.SOLOBS.SOBS_MOTEST != null)) {
            // CRFCDEGRL_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, SOLOBS.SOBS_MOTEST, VMOE);
            // this.SOLOBS.MOTEST_DES = VMOE.MOESSO_DESCRI;
        }
        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CRFCDEGRL_solobs_postQuery");
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
    async CRFCDEGRL_solobs_sobsMotest_whenValidateItem() {
        console.log("Entering CRFCDEGRL_solobs_sobsMotest_whenValidateItem");
        let VBOTON: number = null;
        let VMOES: null = null;
        let VTEMP: number = null;
        // CRFCDEGRL_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, VMOES);
        if ((this.SOLOBS.SOBS_MOTEST == null)) {
            // CRFCDEGRL_LIB$DTNERFRMA("ENTRE EL MOTIVO");
        }
        // CRFCDEGRL_PQBD_COL_GEN.PMOESSO(this.SOLOBS.SOBS_ESTADO, SOLOBS.SOBS_MOTEST, VMOES);
        // this.SOLOBS.MOTEST_DES = VMOES.MOESSO_DESCRI;
        this.CRTSOLICR.SOLICR_MOTEST = this.SOLOBS.SOBS_MOTEST;
        if (this.SOLOBS.SOBS_ESTADO == "DC") {
            this.CRTSOLICR.MOTEST_DC = this.SOLOBS.MOTEST_DES;
        }
        // if (result0 == null || result0.length == 0) {

        //     // CRFCDEGRL_LIB$DTNERFRMA("EL MOTIVO " + SOLOBS.SOBS_ESTADO + "-" + SOLOBS.SOBS_MOTEST.toString() + " NO EXISTE");
        // }

        // if (result0 == null || result0.length == 0) {

        // }

        console.log("Exiting CRFCDEGRL_solobs_sobsMotest_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCDEGRL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCDEGRL_base_fecha_whenNewItemInstance");
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
    //       :CRTGAADSO.DESCRI_TIPPRE := NULL;
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
    //                    || 'CRFCDEGRL.CRTGAADSO.POST-QUERY. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_crtgaadso_postQuery() {
        console.log("Entering CRFCDEGRL_crtgaadso_postQuery");
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
                const result1 = await Rest.post("/crfcdegrl_crtgaadso/crfcdegrl_crtgaadso_postquery_query1", payload1);
                // get values from result
                this.CRTGAADSO.DESCRI_TIPPRE = result1[0].get("CRTGAADSO.DESCRI_TIPPRE");
            } catch (ex) {

                this.CRTGAADSO.DESCRI_TIPPRE = null;
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTGAADSO.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtgaadso_postQuery");
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
    //                    || 'CRFCDEGRL.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_crtgaadso_gaadsoVrcial_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtgaadso_gaadsoVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_REGFRMXG");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTGAADSO.GAADSO_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtgaadso_gaadsoVrcial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFCDEGRL_crtrestr_whenNewBlockInstance() {
        console.log("Entering CRFCDEGRL_crtrestr_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCDEGRL_crtrestr_whenNewBlockInstance");
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
    async CRFCDEGRL_crtrestr_restrColofi_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtrestr_restrColofi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTRESTR.RESTR_COLOFI != "001") {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL CÓDIGO PARA LA OFICINA DEL CONTRATO NO ES VÁLIDO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCDEGRL_crtrestr_restrColofi_whenValidateItem");
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
    async CRFCDEGRL_crtrestr_restrColcod_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtrestr_restrColcod_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        let V_ESTADO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload1.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload1.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        // call REST API
        const result1 = await Rest.post("/crfcdegrl_crtrestr/crfcdegrl_crtrestr_restrcolcod_whenvalidateitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE == 0) {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL CONTRATO A REESTRUCTURAR NO EXISTE EN LA COLOCACIÓN. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("RESTR_OFISOL", this.CRTRESTR.RESTR_OFISOL);
        payload2.set("RESTR_COLTDOC", this.CRTRESTR.RESTR_COLTDOC);
        payload2.set("RESTR_COLCOD", this.CRTRESTR.RESTR_COLCOD);
        // call REST API
        const result2 = await Rest.post("/crfcdegrl_crtrestr/crfcdegrl_crtrestr_restrcolcod_whenvalidateitem_query2", payload2);
        // get values from result
        V_ESTADO = result2[0].get("V_ESTADO");
        if (result2 == null || result2.length == 0) {

            V_ESTADO = null;
        }

        if (V_ESTADO != "VI") {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL CONTRATO ESTA EN ESTADO DIFERENTE A VIGENTE, NO ES POSIBLE REESTRUCTURARARLO. FAVOR VERIFIQUE .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCDEGRL_crtrestr_restrColcod_whenValidateItem");
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
    async CRFCDEGRL_crtrestr_restrColtdoc_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtrestr_restrColtdoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTRESTR.RESTR_COLTDOC != "03") {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL CÓDIGO PARA EL TIPO DEL CONTRATO NO ES VÁLIDO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCDEGRL_crtrestr_restrColtdoc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.UNIDAD1  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    // :VARIABLE.UNIDAD6  := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    // :VARIABLE.OFC1  := :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.OFC6:= :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.CODSOL6:= :CRTSOLICR.SOLICR_CODSOL;
    // :VARIABLE.ESTSOL6:= :CRTSOLICR.SOLICR_ESTSOL; END;
    //#endregion
    async CRFCDEGRL_variable_whenNewBlockInstance() {
        console.log("Entering CRFCDEGRL_variable_whenNewBlockInstance");
        this.VARIABLE.UNIDAD1 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.UNIDAD6 = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.OFC6 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL6 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL6 = this.CRTSOLICR.SOLICR_ESTSOL;
        console.log("Exiting CRFCDEGRL_variable_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDORES';
    // GO_BLOCK('CRTOTERSOL');
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // :VARIABLE.TIPO_VINCULA := '09'; END;
    //#endregion
    async CRFCDEGRL_variable_provnal_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_provnal_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.TIPO_VINCULA = "09";
        console.log("Exiting CRFCDEGRL_variable_provnal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // :VARIABLE.LABEL_TERCEROS := 'PROVEEDORES';
    // GO_BLOCK('CRTOTERSOL');
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_GIRDIR');
    // :VARIABLE.TIPO_VINCULA := '09'; END;
    //#endregion
    async CRFCDEGRL_variable_provnal_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_provnal_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.TIPO_VINCULA = "09";
        console.log("Exiting CRFCDEGRL_variable_provnal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT'); END;
    //#endregion
    async CRFCDEGRL_variable_provext_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_provext_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        console.log("Exiting CRFCDEGRL_variable_provext_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT'); END;
    //#endregion
    async CRFCDEGRL_variable_provext_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_provext_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        console.log("Exiting CRFCDEGRL_variable_provext_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIOS';
    // GO_BLOCK('CRTOTERSOL');
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // :VARIABLE.TIPO_VINCULA := '13'; END;
    //#endregion
    async CRFCDEGRL_variable_locararios_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_locararios_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIOS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.TIPO_VINCULA = "13";
        console.log("Exiting CRFCDEGRL_variable_locararios_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIOS';
    // GO_BLOCK('CRTOTERSOL');
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // :VARIABLE.TIPO_VINCULA := '13'; END;
    //#endregion
    async CRFCDEGRL_variable_locararios_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_locararios_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIOS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.TIPO_VINCULA = "13";
        console.log("Exiting CRFCDEGRL_variable_locararios_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE 
    //   
    //   T_RESPUESTA          NUMBER; 
    //  V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //   BEGIN
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
    //                    || 'CRFCDEGRL.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_variable_btnRegfrmxg_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_btnRegfrmxg_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.hide_window("WINDOWG");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_HIPTCA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.VARIABLE.BTN_REGFRMXG.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_variable_btnRegfrmxg_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05'; END;
    //#endregion
    async CRFCDEGRL_variable_locppal_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_locppal_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        console.log("Exiting CRFCDEGRL_variable_locppal_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05'; END;
    //#endregion
    async CRFCDEGRL_variable_locppal_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_locppal_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        console.log("Exiting CRFCDEGRL_variable_locppal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFCDEGRL_variable_volverTerext_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_volverTerext_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFCDEGRL_variable_volverTerext_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // :VARIABLE.LABEL_TERCEROS := 'AVALISTAS';
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '14'; END;
    //#endregion
    async CRFCDEGRL_variable_aval_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_aval_whenButtonPressed");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFCDEGRL_variable_aval_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    // :VARIABLE.LABEL_TERCEROS := 'AVALISTAS';
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.TIPO_VINCULA := '14'; END;
    //#endregion
    async CRFCDEGRL_variable_aval_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_aval_whenMouseClick");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFCDEGRL_variable_aval_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('CARACIAL.BMP'  ,'BMP','VARIABLE.CARATULA'); END;
    //#endregion
    async CRFCDEGRL_variable_caratula_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_caratula_whenMouseClick");
        this.oracleFormsBuiltins.read_image_file("CARACIAL.BMP", "BMP", "VARIABLE.CARATULA");
        console.log("Exiting CRFCDEGRL_variable_caratula_whenMouseClick");
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
    //     EXECUTE_QUERY;
    //     
    //  EXCEPTION 
    //    
    //   WHEN OTHERS THEN
    // 
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //          
    //       V_MENSAJE := 'FALLO. '
    //                    || 'CRFCDEGRL.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_variable_btnMasprendas_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_btnMasprendas_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTGAADSO.GAADSO_CONSEC");
            this.oracleFormsBuiltins.execute_query();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.VARIABLE.BTN_MASPRENDAS.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_variable_btnMasprendas_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE,
    //                   :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPVIN, 'T'); END;
    //#endregion
    async CRFCDEGRL_variable_crter_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_variable_crter_whenButtonPressed");
        // CRFCDEGRL_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE, CRTOTERSOL1.OTERSOL_TIPPER, CRTOTERSOL1.OTERSOL_TIPVIN, "T");
        console.log("Exiting CRFCDEGRL_variable_crter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE,
    //                   :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPVIN, 'T'); END;
    //#endregion
    async CRFCDEGRL_variable_crter_whenMouseClick() {
        console.log("Entering CRFCDEGRL_variable_crter_whenMouseClick");
        // CRFCDEGRL_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE, CRTOTERSOL1.OTERSOL_TIPPER, CRTOTERSOL1.OTERSOL_TIPVIN, "T");
        console.log("Exiting CRFCDEGRL_variable_crter_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,'');
    // UP;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT, NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async CRFCDEGRL_covpiedra_keyUp() {
        console.log("Entering CRFCDEGRL_covpiedra_keyUp");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, "");
        this.oracleFormsBuiltins.up();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting CRFCDEGRL_covpiedra_keyUp");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,'');
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT));
    // SYNCHRONIZE; END;
    //#endregion
    async CRFCDEGRL_covpiedra_postQuery() {
        console.log("Entering CRFCDEGRL_covpiedra_postQuery");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, "");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCDEGRL_covpiedra_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,'');
    // DOWN;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async CRFCDEGRL_covpiedra_keyDown() {
        console.log("Entering CRFCDEGRL_covpiedra_keyDown");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, "");
        this.oracleFormsBuiltins.down();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting CRFCDEGRL_covpiedra_keyDown");
    }

    //#region PLSQL
    // BEGIN PR_AYUPIEDRA; END;
    //#endregion
    async CRFCDEGRL_covpiedra_piedraImagen_whenMouseDoubleclick() {
        console.log("Entering CRFCDEGRL_covpiedra_piedraImagen_whenMouseDoubleclick");
        // CRFCDEGRL_PR_AYUPIEDRA();
        console.log("Exiting CRFCDEGRL_covpiedra_piedraImagen_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE --PY 5499 
    //  V_FECHA VARCHAR2(30); --PY 5499  
    // BEGIN
    // 
    //   :GLOBAL.VALOR_ANTERIOR   := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULL');
    //   :VARIABLE.REGNRO_SOLICR  := TO_NUMBER(SYSTEM.CURSOR_RECORD);
    //   :GLOBAL.ESTADO_ANTERIOR  := :CRTSOLICR.SOLICR_ESTSOL;
    //    SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,"ATTR_OFF");
    //   
    //    IF    :CRTSOLICR.SOLICR_CODPRO ='RES' THEN
    //         SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,ATTR_ON);
    //         SET_ITEM_PROPERTY('CRTSOLICR.RESSTRUCT',ENABLED,ATTR_ON); 
    //    END IF;
    //    
    //    
    //     --PY 5499
    //     
    //     BEGIN    
    //      SELECT TO_CHAR(CR.LCKCRE_RFECHA,'DD-MM-YYYY HH:MI AM')
    //      INTO V_FECHA
    //      FROM  CRTLCKCRE CR
    //      WHERE  CR.LCKCRE_OFICIN = :CRTSOLICR.SOLICR_OFCSOL
    //         AND CR.LCKCRE_NSOLIC = :CRTSOLICR.SOLICR_CODSOL;
    //     
    //     EXCEPTION WHEN NO_DATA_FOUND THEN V_FECHA := NULL;
    //     END;    
    //     
    //     IF V_FECHA IS NOT NULL THEN    
    //      --+PY21520. JDG.
    //      --:CRTSOLICR.FECHACREDITO := 'FECHA DE RECIBIDO CRÉDITO '||V_FECHA;
    //        :CRTSOLICR.FECHACREDITO := 'FEC. RECIBIDO CRÉDITO '||V_FECHA;     
    //      SET_ITEM_PROPERTY('CRTSOLICR.FECHACREDITO',"DISPLAYED",PROPERTY_ON);    
    //     ELSE     
    //       SET_ITEM_PROPERTY('CRTSOLICR.FECHACREDITO',"DISPLAYED","PROPERTY_OFF");    
    //     END IF;
    //     
    //     --PY 5499
    //     
    //     PUP_DESCRICOMP;
    //     
    //     --PY 13958
    //   /*  BEGIN
    //     SELECT F.TIPREF_DESCRI ||'--'|| I.REFERI_NITTER ||' - '|| I.REFERI_NOMBRE ||' '|| I.REFERI_APELLI
    //     INTO :TXT_COMPDAVI 
    //    FROM OPS$COLOCA.CRTREFXSO O, OPS$COLOCA.CRTREFERI I, OPS$COLOCA.CRTTIPREF F
    //   WHERE O.REFXSO_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL
    //    AND O.REFXSO_CODSOL  =  :CRTSOLICR.SOLICR_CODSOL
    //      AND O.REFXSO_NITTER = I.REFERI_NITTER
    //      AND F.TIPREF_CODIGO = I.REFERI_TIPREF;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN :TXT_COMPDAVI := NULL;
    //    END;
    //   */ 
    //    
    // BEGIN       
    // SELECT TR.TIPREF ||'-'|| R.CONTPR_NOMBRE NOMBRE  
    //    INTO :TXT_COMPDAVI 
    //     FROM OPS$COLOCA.COTCONTPR R,OPS$COLOCA.CRTREFPRV S,
    //          (SELECT SUBSTR (CAXPRO_DESCRP,3,60) TIPREF, CAXPRO_CODIGO
    //                  FROM OPS$COLOCA.COTCAXPRO
    //                  WHERE CAXPRO_CODPRO = '860034313') TR
    //     WHERE R.CONTPR_CODPRO = S.REFPRV_CODPRV(+)
    //      AND R.CONTPR_CODCNT = S.REFPRV_CODASE(+)
    //      AND R.CONTPR_CARPAD = TR.CAXPRO_CODIGO
    //       AND R.CONTPR_ESTADO = 'A'     
    //       AND S.REFPRV_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL
    //      AND S.REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL  
    //      AND S.REFPRV_CODPRV    = '860034313';  
    //  EXCEPTION WHEN NO_DATA_FOUND THEN :TXT_COMPDAVI := NULL;
    //    END;
    //      
    //    
    //    --PY 13958 
    //     
    //     
    //     
    //     
    //    
    // END;
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
    //                     || 'CRFCDEGRL.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. '
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //        END IF;
    //  
    //   END;
    //#endregion
    async CRFCDEGRL_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFCDEGRL_crtsolicr_whenNewRecordInstance");
        let V_FECHA: string = null;
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULL" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.VARIABLE.REGNRO_SOLICR = PLSQLBuiltins.to_number(SYSTEM.CURSOR_RECORD);
        // this.GLOBAL.ESTADO_ANTERIOR = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_OFF");
        // if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_ON");
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.RESSTRUCT", "ENABLED", "ATTR_ON");
        // }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_whennewrecordinstance_query1", payload1);
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
        // CRFCDEGRL_PUP_DESCRICOMP();
        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result2 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_whennewrecordinstance_query2", payload2);
        // get values from result
        // TXT_COMPDAVI = result2[0].get("TXT_COMPDAVI");
        if (result2 == null || result2.length == 0) {

            this.CRTSOLICR.TXT_COMPDAVI = null;
        }

        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFCDEGRL_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.WHEN-NEW-RECORD-INSTANCE. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN ENTER_QUERY; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_whennewblockinstance() {
        console.log("Entering CRFCDEGRL_crtsolicr_whennewblockinstance");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFCDEGRL_crtsolicr_whennewblockinstance");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER_QUERY;
    // 
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_keyEntqry() {
        console.log("Entering CRFCDEGRL_crtsolicr_keyEntqry");
        console.log("Exiting CRFCDEGRL_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // BEGIN DOWN;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async CRFCDEGRL_crtsolicr_trigger202() {
        console.log("Entering CRFCDEGRL_crtsolicr_trigger202");
        this.oracleFormsBuiltins.down();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting CRFCDEGRL_crtsolicr_trigger202");
    }

    //#region PLSQL
    // BEGIN IF  :this.PARAMETER.get("SOL_CTRL") ='Q' THEN
    //     :CRTSOLICR.SOLICR_OFCSOL  :=  :this.PARAMETER.get("SOL_OFI");
    //     :CRTSOLICR.SOLICR_TIPCRE  := :this.PARAMETER.get("SOL_TIP");
    //     :CRTSOLICR.SOLICR_CODSOL  :=  :this.PARAMETER.get("SOL_COD");
    // END IF;
    // 
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,''); END;
    //#endregion
    async CRFCDEGRL_crtsolicr_preQuery() {
        console.log("Entering CRFCDEGRL_crtsolicr_preQuery");
        if (this.PARAMETER.get("SOL_CTRL") == "Q") {
            this.CRTSOLICR.SOLICR_OFCSOL = this.PARAMETER.get("SOL_OFI");
            this.CRTSOLICR.SOLICR_TIPCRE = this.PARAMETER.get("SOL_TIP");
            this.CRTSOLICR.SOLICR_CODSOL = this.PARAMETER.get("SOL_COD");
        }
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", TOOLTIP_TEXT, "");
        console.log("Exiting CRFCDEGRL_crtsolicr_preQuery");
    }

    //#region PLSQL
    // BEGIN
    //    CLEAR_BLOCK;
    // 
    //    IF this._SYSTEM_SERVICE.get("BLOCK_SERVICE") <> 'CHANGED' THEN
    //       FRM$AUDIT_SOLIC_DEL;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_keyClrblk() {
        console.log("Entering CRFCDEGRL_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        if (this._SYSTEM_SERVICE.get("BLOCK_SERVICE") != "CHANGED") {
            // CRFCDEGRL_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_keyClrblk");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN COVPIEDRA DETAIL DECLARE SECTION
    //   --
    //   CURSOR COVPIEDRA_CUR IS      
    //     SELECT 1 FROM COVPIEDRA C     
    //     WHERE C.PIEDRA_TERCER = :CRTSOLICR.SOLICR_NITTER;
    //   --
    //   -- END COVPIEDRA DETAIL DECLARE SECTION
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
    //   -- BEGIN CRTGAADSO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTGAADSO_CUR IS      
    //     SELECT 1 FROM CRTGAADSO O     
    //     WHERE O.GAADSO_CODUNI = :CRTSOLICR.SOLICR_CODUNI AND O.GAADSO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND O.GAADSO_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTGAADSO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTOTERSOL_CUR IS      
    //     SELECT 1 FROM CRTOTERSOL C     
    //     WHERE C.OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.OTERSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   OPEN COVPIEDRA_CUR;     
    //   FETCH COVPIEDRA_CUR INTO DUMMY_DEFINE;     
    //   IF ( COVPIEDRA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COVPIEDRA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COVPIEDRA_CUR;
    //   --
    //   -- END COVPIEDRA DETAIL PROGRAM SECTION
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
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFCDEGRL_crtsolicr_onCheckDeleteMaster");
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
        console.log("Exiting CRFCDEGRL_crtsolicr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION VARCHAR2(60);
    // BEGIN
    //  BEGIN
    //   SELECT DESCRIPCION
    //      INTO V_OPCION
    //      FROM OPCIONES
    //      WHERE UPPER(PROGRAMA)=:SYSTEM.CURRENT_FORM
    //        AND PROGRAMA IS NOT NULL
    //        AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     V_OPCION:=NULL;
    //   END;   
    //   EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('SOLICITUDES',:SYSTEM.LAST_QUERY,V_OPCION);
    //  COMMIT;
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_keyExeqry() {
        console.log("Entering CRFCDEGRL_crtsolicr_keyExeqry");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
            // call REST API
            const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_keyexeqry_query1", payload1);
            // get values from result
            V_OPCION = result1[0].get("V_OPCION");
        } catch (ex) {

            V_OPCION = null;
        }

        this.oracleFormsBuiltins.execute_query();
        // CRFCDEGRL_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("SOLICITUDES", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
        console.log("Exiting CRFCDEGRL_crtsolicr_keyExeqry");
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
    //   -- BEGIN COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_NITTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_COVPIEDRA');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COVPIEDRA');   
    //   END IF;
    //   --
    //   -- END COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_SOLOBS');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SOLOBS');   
    //   END IF;
    //   --
    //   -- END SOLOBS DETAIL PROGRAM SECTION
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
    //   -- BEGIN CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTOTERSOL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTOTERSOL');   
    //   END IF;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
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
    async CRFCDEGRL_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFCDEGRL_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_COVPIEDRA");
            // CRFCDEGRL_QUERY_MASTER_DETAILS(REL_ID, "COVPIEDRA");
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_SOLOBS");
            // CRFCDEGRL_QUERY_MASTER_DETAILS(REL_ID, "SOLOBS");
        }
        if ((((this.CRTSOLICR.SOLICR_CODUNI != null) || (this.CRTSOLICR.SOLICR_OFCSOL != null)) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTGAADSO");
            // CRFCDEGRL_QUERY_MASTER_DETAILS(REL_ID, "CRTGAADSO");
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTOTERSOL");
            // CRFCDEGRL_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFCDEGRL_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT OFI_DESCRIP
    //     INTO :CRTSOLICR.DESCOFID
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
    //  WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //    AND SUBCAT_CODUNI = :SOLICR_CODUNI --ARQUITECTURA
    //    ;
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;
    // 
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
    //    :CRTSOLICR.ANALISTA := FRM$NOMBRE_USUARIO (:CRTSOLICR.SOLICR_USCRED);
    // END IF;
    // :CRTSOLICR.COMERCIAL := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // :CRTSOLICR.FLANCE    := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_UFREEL); 
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
    //       BEGIN 
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
    // BEGIN
    //   SELECT PROD_DESCRI
    //     INTO :TIPDESCR
    //   FROM CRTPRODCIA
    //  WHERE PROD_CODIGO = :SOLICR_CODPRO
    //   AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //  ;
    // EXCEPTION 
    //   WHEN NO_DATA_FOUND THEN
    //      NULL;
    // END;
    // END;
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
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESLINFINA
    //   FROM CRTLINRED
    //    WHERE LINRED_TIPO='FN'
    //    AND LINRED_CODIGO = :SOLICR_FINAGLN;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // 
    // 
    // --
    // -- CUOP
    // DECLARE
    //  VHRASOL CRTHRASOL%ROWTYPE;
    // BEGIN
    //  PQBD_COL_GEN.PHRAINI(:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //   :CRTSOLICR.SOLICR_CODUNI, --ARQUITECTURA
    //   VHRASOL);
    //  :CRTSOLICR.FECRADI_INI := VHRASOL.HRASOL_FECRAD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      IF :CRTSOLICR.SOLICR_FECRADI IS NOT NULL THEN
    //       :CRTSOLICR.FECRADI_INI := :CRTSOLICR.SOLICR_FECRADI;
    //      END IF;
    // END;
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
    // END;
    // 
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
    //    
    //    
    //    /* AUTOR  : JAIRO A. TORRES R.
    //   FECHA  : 13/05/2011
    //   MOTIVO : ADECUACIÓN DATOS PARA EL CAMBIO DE REFERIDOS LEASING A DAVIVIENDA*/
    //   
    // DECLARE
    //   CED_REFERIDO OPS$COLOCA.CRTREFXSO.REFXSO_NITTER%TYPE;
    //   NOM_REFERIDO VARCHAR2(120);
    // BEGIN
    // 
    //   :CRTSOLICR.NOM_OFICIAL := NULL;
    //   IF :CRTSOLICR.SOLICR_USOFID IS NOT NULL THEN
    //     :CRTSOLICR.NOM_OFICIAL := FBD_COL_NOM_USUARIO(:SOLICR_USOFID);
    //   END IF;
    // 
    //   IF :CRTSOLICR.SOLICR_USCIAL IS NOT NULL THEN
    //     :CRTSOLICR.COMERCIAL := OPS$COLOCA.FBD_COL_NOM_COMERCIAL(:CRTSOLICR.SOLICR_USCIAL);
    //       IF :CRTSOLICR.COMERCIAL IS NULL THEN
    //        :CRTSOLICR.COMERCIAL := FRM$NOMBRE_USUARIO_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    //       END IF;   
    //   END IF;
    //  
    // END;
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
    //   AND LINEST_CODUNI = :SOLICR_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_CODLEADESC := NULL;
    //   
    //   END;
    //   
    //   
    // --PY 122011
    // 
    // PUP_DESCRICOMP;
    // 
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', TOOLTIP_TEXT,'');
    // 
    //   --+PY21520. JDG.
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
    //          BEGIN
    //   
    //      SELECT UVPTSV_DESCRI
    //       INTO :CRTSOLICR.DESCRI_TISEVE
    //       FROM COTUVPTSV
    //      WHERE UVPTSV_CODIGO = :CRTSOLICR.SOLICR_TISEVE;
    //        
    //     EXCEPTION 
    //      
    //      WHEN OTHERS THEN
    //      
    //        :CRTSOLICR.DESCRI_TISEVE := NULL;
    //        
    //     END;
    //     
    //     BEGIN
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
    //     BEGIN
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
    //     END;
    //     
    //     END IF;  
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
    //                      || 'CRFCDEGRL.CRTSOLICR.POST-QUERY. '
    //                      || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                      || 'SQLERRM ' || SQLERRM;
    //                      
    //            PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                      
    //          LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //          
    //       END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_postQuery() {
        console.log("Entering CRFCDEGRL_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_OFIDAV", SOLICR_OFIDAV);
        // call REST API
        const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query1", payload1);
        // get values from result
        // CRTSOLICR.DESCOFID = result1[0].get("CRTSOLICR.DESCOFID");
        if (result1 == null || result1.length == 0) {

        }

        try {

            // construct payload
            let payload2 = new Map();
            // payload2.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
            // payload2.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
            // payload2.set("SOLICR_CODUNI", SOLICR_CODUNI);
            // call REST API
            const result2 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query2", payload2);
            // get values from result
            // W_SUBCATEGORIA = result2[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.CRTSOLICR.W_SUBCATEGORIA = null;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result3 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query3", payload3);
        // get values from result
        // CRTSOLICR.NOMBRE = result3[0].get("CRTSOLICR.NOMBRE");
        if (result3 == null || result3.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        // construct payload
        let payload4 = new Map();
        payload4.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
        // call REST API
        const result4 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query4", payload4);
        // get values from result
        // CRTSOLICR.NONCIASEG = result4[0].get("CRTSOLICR.NONCIASEG");
        if (result4 == null || result4.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.CRDITO = "CONTRATO LEASING";
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.CRDITO = "PAGARE";
        }
        if ((this.CRTSOLICR.SOLICR_USCRED != null)) {
        //     this.CRTSOLICR.ANALISTA = FRM$NOMBRE_USUARIO(this.CRTSOLICR.SOLICR_USCRED);
        }
        // this.CRTSOLICR.COMERCIAL = FRM$NOMBRE_USUARIO_CIAL(this.CRTSOLICR.SOLICR_USCIAL);
        // this.CRTSOLICR.FLANCE = FRM$NOMBRE_USUARIO_CIAL(this.CRTSOLICR.SOLICR_UFREEL);
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            let result5 = new Map();
            try {

                // construct payload
                let payload5 = new Map();
                payload5.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
                payload5.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result5 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query5", payload5);
                // get values from result
                // CRTSOLICR.BIEN = result5[0].get("CRTSOLICR.BIEN");
                if (result5 == null || result5.length == 0) {

                }

            } catch (ex) {

            }

        }
        // construct payload
        let payload6 = new Map();
        // payload6.set("SOLICR_CODPRO", SOLICR_CODPRO);
        payload6.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result6 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query6", payload6);
        // get values from result
        // TIPDESCR = result6[0].get("TIPDESCR");
        if (result6 == null || result6.length == 0) {

        }

        // construct payload
        let payload7 = new Map();
        // payload7.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        // call REST API
        const result7 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query7", payload7);
        // get values from result
        // DESCBCDX = result7[0].get("DESCBCDX");
        if (result7 == null || result7.length == 0) {

        }

        // construct payload
        let payload8 = new Map();
        // payload8.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
        // call REST API
        const result8 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query8", payload8);
        // get values from result
        // DESLIMPTO = result8[0].get("DESLIMPTO");
        if (result8 == null || result8.length == 0) {

        }

        // construct payload
        let payload9 = new Map();
        // payload9.set("SOLICR_FINAGLN", SOLICR_FINAGLN);
        // call REST API
        const result9 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query9", payload9);
        // get values from result
        // DESLINFINA = result9[0].get("DESLINFINA");
        if (result9 == null || result9.length == 0) {

        }

        let VHRASOL: null = null;
        // CRFCDEGRL_PQBD_COL_GEN.PHRAINI(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODUNI, VHRASOL);
        // this.CRTSOLICR.FECRADI_INI = VHRASOL.HRASOL_FECRAD;
        if (result9 == null || result9.length == 0) {

            if ((this.CRTSOLICR.SOLICR_FECRADI != null)) {
                this.CRTSOLICR.FECRADI_INI = this.CRTSOLICR.SOLICR_FECRADI;
            }
        }

        let VMOE: null = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "DC") {
            // CRFCDEGRL_PQBD_COL_GEN.PMOESSO(this.CRTSOLICR.SOLICR_ESTSOL, this.CRTSOLICR.SOLICR_MOTEST, VMOE);
            // this.CRTSOLICR.MOTEST_DC = VMOE.MOESSO_DESCRI;
        }
        if (result9 == null || result9.length == 0) {

        }

        let VTIC: null = null;
        if ((this.CRTSOLICR.SOLICR_COMITE != null)) {
            // CRFCDEGRL_PQBD_COL_ANAGEN.PTIPCOM(this.CRTSOLICR.SOLICR_COMITE, VTIC);
            // this.CRTSOLICR.COMITE = INITCAP(VTIC.TIPCOM_DESCRI);
        }
        if (result9 == null || result9.length == 0) {

        }

        // construct payload
        let payload10 = new Map();
        payload10.set("SOLICR_LINEADES", this.CRTSOLICR.SOLICR_LINEADES);
        // call REST API
        let result10 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query10", payload10);
        // get values from result
        // DES_LINDESEMBO = result10[0].get("DES_LINDESEMBO");
        // if (result10 == null || result10.length == 0) {

        // }

        // construct payload
        let payload11 = new Map();
        payload11.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        // call REST API
        let result11 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query11", payload11);
        // get values from result
        // NOM_OFICIAL = result11[0].get("NOM_OFICIAL");
        // if (result11 == null || result11.length == 0) {

        // }

        let CED_REFERIDO: null = null;
        let NOM_REFERIDO: string = null;
        this.CRTSOLICR.NOM_OFICIAL = null;
        if ((this.CRTSOLICR.SOLICR_USOFID != null)) {
            // this.CRTSOLICR.NOM_OFICIAL = FBD_COL_NOM_USUARIO(SOLICR_USOFID);
        }
        if ((this.CRTSOLICR.SOLICR_USCIAL != null)) {
            // this.CRTSOLICR.COMERCIAL = OPS$COLOCA.FBD_COL_NOM_COMERCIAL(this.CRTSOLICR.SOLICR_USCIAL);
            if ((this.CRTSOLICR.COMERCIAL == null)) {
                // this.CRTSOLICR.COMERCIAL = FRM$NOMBRE_USUARIO_CIAL(this.CRTSOLICR.SOLICR_USCIAL);
            }
        }
        // construct payload
        let payload12 = new Map();
        // payload12.set("SOLICR_CODLEA", SOLICR_CODLEA);
        // payload12.set("SOLICR_CODUNI", SOLICR_CODUNI);
        // call REST API
        let result12 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query12", payload12);
        // get values from result
        // SOLICR_CODLEADESC = result12[0].get("SOLICR_CODLEADESC");
        // if (result12 == null || result12.length == 0) {

        //     this.CRTSOLICR.SOLICR_CODLEADESC = null;
        // }

        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result13 = new Map();
            try {

                // construct payload
                let payload13 = new Map();
                payload13.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                payload13.set("SOLICR_COSEAC", this.CRTSOLICR.SOLICR_COSEAC);
                // call REST API
                // result13 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query13", payload13);
                // get values from result
                // CRTSOLICR.DESCRI_COSEAC = result13[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.DESCRI_COSEAC = null;
            }

            if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
                if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                    let result14 = new Map();
                    try {

                        // construct payload
                        let payload14 = new Map();
                        payload14.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                        // call REST API
                        // result14 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query14", payload14);
                        // get values from result
                        // CRTSOLICR.UVPCUT_DESCRI = result14[0].get("CRTSOLICR.UVPCUT_DESCRI");
                        // CRTSOLICR.UVPCUT_VALMER = result14[0].get("CRTSOLICR.UVPCUT_VALMER");
                        // CRTSOLICR.UVPCUT_VALDAV = result14[0].get("CRTSOLICR.UVPCUT_VALDAV");
                    } catch (ex) {

                        this.CRTSOLICR.UVPCUT_DESCRI = null;
                        this.CRTSOLICR.UVPCUT_VALMER = null;
                        this.CRTSOLICR.UVPCUT_VALDAV = null;
                    }

                }
                let result15 = new Map();
                try {

                    // construct payload
                    let payload15 = new Map();
                    payload15.set("SOLICR_TISEVE", this.CRTSOLICR.SOLICR_TISEVE);
                    // call REST API
                    // result15 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query15", payload15);
                    // get values from result
                    // CRTSOLICR.DESCRI_TISEVE = result15[0].get("CRTSOLICR.DESCRI_TISEVE");
                } catch (ex) {

                    this.CRTSOLICR.DESCRI_TISEVE = null;
                }

                let result16 = new Map();
                try {

                    // construct payload
                    let payload16 = new Map();
                    payload16.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                    // call REST API
                    // result16 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query16", payload16);
                    // get values from result
                    // CRTSOLICR.SOLICR_ESTRATDESC = result16[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
                } catch (ex) {

                    this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                }

                let result17 = new Map();
                try {

                    // construct payload
                    let payload17 = new Map();
                    payload17.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                    // call REST API
                    // result17 = Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_postquery_query17", payload17);
                    // get values from result
                    // CRTSOLICR.DESCRI_PRSOCL = result17[0].get("CRTSOLICR.DESCRI_PRSOCL");
                } catch (ex) {

                    this.CRTSOLICR.DESCRI_PRSOCL = null;
                }

            }
            // CRFCDEGRL_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.POST-QUERY. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //    HIDE_VIEW ( 'PER_GRACIA' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFCDEGRL.CRTSOLICR.TXT_TOTPLAZO.POST-TEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_txtTotplazo_postTextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_txtTotplazo_postTextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.hide_view("PER_GRACIA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.TXT_TOTPLAZO.POST-TEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_txtTotplazo_postTextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_txtTotplazo_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_txtTotplazo_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMI");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.TXT_TOTPLAZO.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_txtTotplazo_keyNextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCoseac_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCoseac_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            if (((((this.CRTSOLICR.SOLICR_CODUNI != null) && (this.CRTSOLICR.SOLICR_OFCSOL != null)) && (this.CRTSOLICR.SOLICR_CODSOL != null)) && (this.CRTSOLICR.SOLICR_NITTER != null))) {
                if (this.CRTSOLICR.SOLICR_CODUNI == "001") {
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_RIMPES");
                }
                else {
                    // if (this.CRTSOLICR.SOLICR_COSEAC == null ? "X" : this.CRTSOLICR.SOLICR_COSEAC == "1") {
                    //     this.oracleFormsBuiltins.go_item("CRTSOLICR.BTN_CUPOTAXI");
                    // }
                    // else {
                    //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
                    // }
                }
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_COSEAC.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCoseac_keyNextItem");
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
    //        SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA', UPDATEABLE,"PROPERTY_TRUE" );
    //        SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA',  "INSERT_ALLOWED","PROPERTY_TRUE" );
    //        SET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_COCUTA', NAVIGABLE,"PROPERTY_TRUE" );
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCoseac_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCoseac_whenValidateItem");
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
                const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrcoseac_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.DESCRI_COSEAC = result1[0].get("CRTSOLICR.DESCRI_COSEAC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COSEAC = null;
                this.CRTSOLICR.DESCRI_COSEAC = null;
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CÓDIGO DE SUBPRODUCTO INVÁLIDO.", null, null, null, T_RESPUESTA);
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
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_COSEAC.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCoseac_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrVlrtit_keyNextItem() {
        // null;
    }

    async CRFCDEGRL_crtsolicr_solicrVpaval_keyPrevItem() {
        // null;
    }

    async CRFCDEGRL_crtsolicr_solicrVpaval_keyNextItem() {
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
    //   GO_ITEM( 'CRTSOLICR.SOLICR_FECDEVO' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPrsocl_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPrsocl_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECDEVO");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_PRSOCL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPrsocl_keyNextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPrsocl_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPrsocl_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_PRSOCL", this.CRTSOLICR.SOLICR_PRSOCL);
                // call REST API
                const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrprsocl_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.DESCRI_PRSOCL = result1[0].get("CRTSOLICR.DESCRI_PRSOCL");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_PRSOCL = null;
                this.CRTSOLICR.DESCRI_PRSOCL = null;
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CÓDIGO DE PROPÓSITO DE CRÉDITO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_PRSOCL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPrsocl_whenValidateItem");
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
    async CRFCDEGRL_crtsolicr_solicrPoriva_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPoriva_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (this.CRTSOLICR.SOLICR_PORIVA == null ? 0 : this.CRTSOLICR.SOLICR_PORIVA > 100) {
        //     // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPoriva_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_CODPRO IS NOT NULL THEN
    //     BEGIN
    //       SELECT PROD_DESCRI
    //        INTO :TIPDESCR
    //       FROM CRTPRODCIA
    //        WHERE PROD_CODIGO = :SOLICR_CODPRO
    // --+PY21520. JDG.       
    //          AND PROD_CODUNI =:SOLICR_CODUNI;
    //        NEXT_ITEM;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;  
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCodpro_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCodpro_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODPRO != null)) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
            // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrcodpro_keynextitem_query1", payload1);
            // get values from result
            // TIPDESCR = result1[0].get("TIPDESCR");
            this.oracleFormsBuiltins.next_item();
            if (result1 == null || result1.length == 0) {

                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        else {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCodpro_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_CODPRO IS NOT NULL THEN
    //     BEGIN
    //       SELECT PROD_DESCRI
    //        INTO :TIPDESCR
    //       FROM CRTPRODCIA
    //        WHERE PROD_CODIGO = :SOLICR_CODPRO
    //        AND PROD_CODUNI = :SOLICR_CODUNI; --ARQUITECTURA
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //    
    //    IF :CRTSOLICR.SOLICR_CODPRO IN ('CO2','CCO') THEN
    //     SET_ITEM_PROPERTY ('BTN_COMPARTIDO', "VISIBLE", "PROPERTY_TRUE");
    //    ELSE
    //     SET_ITEM_PROPERTY ('BTN_COMPARTIDO', "VISIBLE", "PROPERTY_FALSE");
    //    END IF;
    //    
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //   END IF;  
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCodpro_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCodpro_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODPRO != null)) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
            // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrcodpro_whenvalidateitem_query1", payload1);
            // get values from result
            // TIPDESCR = result1[0].get("TIPDESCR");
            if (result1 == null || result1.length == 0) {

                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (["CO2", "CCO"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1) {
                this.oracleFormsBuiltins.set_item_property("BTN_COMPARTIDO", "VISIBLE", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("BTN_COMPARTIDO", "VISIBLE", "PROPERTY_FALSE");
            }
        }
        else {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCodpro_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrBcodex_keyPrevItem() {
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
    //                    || 'CRFCDEGRL.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_btnCupotaxi_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_crtsolicr_btnCupotaxi_whenButtonPressed");
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
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.BTN_CUPOTAXI.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_btnCupotaxi_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   
    //  BEGIN
    //  
    //   GO_ITEM( 'CRTSOLICR.SOLICR_TISEVE' );
    // 
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFCDEGRL.CRTSOLICR.BTN_CUPOTAXI.KEY-NEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_btnCupotaxi_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_btnCupotaxi_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.BTN_CUPOTAXI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_btnCupotaxi_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINDTR = 'X' THEN
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
    async CRFCDEGRL_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrFindtp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINDTR == "X") {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP < 1) {
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP > 0) {
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINDETER", null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_FINDTP = "X";
                // CRFCDEGRL_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrFindtp_whenValidateItem");
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
    async CRFCDEGRL_crtsolicr_solicrCseggt_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCseggt_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CSEGGT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
            // call REST API
            const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrcseggt_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NOM_CIASEG = result1[0].get("CRTSOLICR.NOM_CIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("SOLICR_OBSGTI");
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCseggt_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FINDTR IS NOT NULL THEN
    //     IF :CRTSOLICR.SOLICR_FINDTR  <> 'X' THEN
    //     LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //     FRM$GARANTIAS_EQUIS ('FND');    
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrFindtr_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrFindtr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINDTR != null)) {
            if (this.CRTSOLICR.SOLICR_FINDTR != "X") {
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFCDEGRL_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrFindtr_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrGtiare_keyNextItem() {
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
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
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
    async CRFCDEGRL_crtsolicr_solicrUscred_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrUscred_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PRSOCL");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCSOLCR.CRTSOLICR.SOLICR_USCRED.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCSOLCR", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrUscred_keyNextItem");
    }

    async CRFCDEGRL_crtsolicr_solicrNomres_keyNextItem() {
        // null;
    }

    async CRFCDEGRL_crtsolicr_solicrVrfincr_keyPrevItem() {
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
    async CRFCDEGRL_crtsolicr_solicrVrfincr_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrVrfincr_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_VRFINCR == null)) {
            this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO;
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrVrfincr_whenNewItemInstance");
    }

    async CRFCDEGRL_crtsolicr_solicrFngp_keyPrevItem() {
        // null;
    }

    async CRFCDEGRL_crtsolicr_solicrFngp_keyNextItem() {
        // null;
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
    //   
    //   /*
    //    AUTOR: GEXNOVA
    //    PROYECTO: PERIODOS MUERTOS 56949
    //    FECHA: 18.09.2019
    //    MOTIVO: SE CALCUA EL PLAZO TOTAL.
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
    async CRFCDEGRL_crtsolicr_btnPergracia_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_crtsolicr_btnPergracia_whenButtonPressed");
        let VBOTON: number = null;
        // if ((SOLICR_PLAZO == null)) {
        //     // CRFCDEGRL_LIB$ALERTA("MENSAJE", "DEBE PRIMERO INDICAR EL PLAZO", "ACEPTAR", null, null, VBOTON);
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        // }
        // else {
        //     this.CRTSOLICR.TXT_TOTPLAZO = CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        //     this.oracleFormsBuiltins.show_view("PER_GRACIA");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_btnPergracia_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  /*
    //   AUTOR:   GEXNOVA SAS.
    //   FECHA:  19.09.2019.
    //   PROYECTO: PERIODOS MUERTOS 56949;
    //   MOTIVO:  * SE LLAMA EL PROGRAM UNIT VALIDA_PERIODOS_MUERTO_GRACIA ENVIANDO LA VARIABLE "PM" PARA IDENTIFICAR DE DONDE SE HACE EL LLAMADO.
    //  */   
    //   PUP_VALIDA_PERIODO_MUERTO ('PM');
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPermue_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPermue_whenValidateItem");
        // CRFCDEGRL_PUP_VALIDA_PERIODO_MUERTO("PM");
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPermue_whenValidateItem");
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
    // NEXT_ITEM; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPermue_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPermue_keyNextItem");
        // this.CRTSOLICR.TXT_TOTPLAZO = CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPermue_keyNextItem");
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
    //                    || 'CRFCDEGRL.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCocuta_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCocuta_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.BTN_REGFRMXC");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_COCUTA.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCocuta_keyNextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCocuta_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCocuta_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_COCUTA", this.CRTSOLICR.SOLICR_COCUTA);
                // call REST API
                const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrcocuta_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.UVPCUT_DESCRI = result1[0].get("CRTSOLICR.UVPCUT_DESCRI");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_COCUTA = null;
                this.CRTSOLICR.UVPCUT_DESCRI = null;
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CÓDIGO DE CUPO DE TAXI INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_COCUTA.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCocuta_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrGtirec_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrGtirec_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrGtirec_keyNextItem");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrGtirec_keyNextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrTiseve_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrTiseve_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_TISEVE", this.CRTSOLICR.SOLICR_TISEVE);
                // call REST API
                const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrtiseve_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.DESCRI_TISEVE = result1[0].get("CRTSOLICR.DESCRI_TISEVE");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_TISEVE = null;
                this.CRTSOLICR.DESCRI_TISEVE = null;
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CÓDIGO DE TIPO DE SERVICIO QUE PRESTARÁ EL VEHÍCULO INVÁLIDO.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_COTISEVE.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrTiseve_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrCiabil_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrCiabil_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCiabil_keyNextItem");
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCiabil_keyNextItem");
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
    async CRFCDEGRL_crtsolicr_solicrCiabil_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCiabil_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCiabil_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_FECRADI <> :CRTSOLICR.FECRADI_INI THEN
    //  IF :CRTSOLICR.SOLICR_MOTARA IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE EL MOTIVO DEL APLAZAMIENTO DE LA RADICACIÓN');
    //  END IF;
    // END IF; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrMotara_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrMotara_whenValidateItem");
        // if (this.CRTSOLICR.SOLICR_FECRADI != CRTSOLICR.FECRADI_INI) {
        //     if ((this.CRTSOLICR.SOLICR_MOTARA == null)) {
        //         // CRFCDEGRL_LIB$DTNERFRMA("ENTRE EL MOTIVO DEL APLAZAMIENTO DE LA RADICACIÓN");
        //     }
        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrMotara_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrActaso_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_analista_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_analista_keyNextItem");
        console.log("Exiting CRFCDEGRL_crtsolicr_analista_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  /*
    //   AUTOR:   GEXNOVA SAS.
    //   FECHA:  19.09.2019.
    //   PROYECTO: PERIODOS MUERTOS 56949;
    //   MOTIVO:  * SE LLAMA EL PROGRAM UNIT VALIDA_PERIODOS_MUERTO_GRACIA ENVIANDO LA VARIABLE "PG" PARA IDENTIFICAR DE DONDE SE HACE EL LLAMADO.
    //  */   
    //   PUP_VALIDA_PERIODO_MUERTO ('PG');
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPergra_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPergra_whenValidateItem");
        // CRFCDEGRL_PUP_VALIDA_PERIODO_MUERTO("PG");
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPergra_whenValidateItem");
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
    // NEXT_ITEM; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPergra_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPergra_keyNextItem");
        // this.CRTSOLICR.TXT_TOTPLAZO = CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPergra_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // BEGIN 
    // IF :SOLICR_SUBCAT IS NOT NULL THEN */
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   END IF;
    // /*
    // ELSE
    //  LIB$ALERTA('MENSAJE','DEBE SELECCIONAR UNA SUBCATEGORIA...',NULL,NULL,NULL,T_RESPUESTA);
    // END IF;  
    // END;*/; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrSubcat_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrSubcat_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_NITTER");
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrSubcat_keyNextItem");
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
    //   WHERE SUBCAT_CTPBIE = :SOLICR_TIPBIE
    //     AND SUBCAT_CODIGO = :SOLICR_SUBCAT
    //     AND SUBCAT_CODUNI = :SOLICR_CODUNI --ARQUITECTURA
    //     ;
    //  EXCEPTION WHEN OTHERS THEN
    //   :W_SUBCATEGORIA := NULL;
    //  END;
    // ELSE
    //  LIB$ALERTA('MENSAJE','DEBE SELECCIONAR UNA SUBCATEGORIA...',NULL,NULL,NULL,T_RESPUESTA);
    // END IF; 
    // END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrSubcat_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrSubcat_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((SOLICR_SUBCAT != null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
        //         payload1.set("SOLICR_SUBCAT", SOLICR_SUBCAT);
        //         payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrsubcat_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         W_SUBCATEGORIA = result1[0].get("W_SUBCATEGORIA");
        //     } catch (ex) {

        //         this.CRTSOLICR.W_SUBCATEGORIA = null;
        //     }

        // }
        // else {
        //     // CRFCDEGRL_LIB$ALERTA("MENSAJE", "DEBE SELECCIONAR UNA SUBCATEGORIA...", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrSubcat_whenValidateItem");
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
    //      AND PROD_CODUNI = :SOLICR_CODUNI --ARQUITECTURA
    //     ;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // 
    // END IF; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_tipdescr_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_tipdescr_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC2: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
        //         payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_tipdescr_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC2 = result1[0].get("DESC2");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_tipdescr_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrObscom_keyNextItem() {
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
    //                    || 'CRFCDEGRL.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_btnRegfrmxc_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_crtsolicr_btnRegfrmxc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.hide_window("WINDOWC");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TISEVE");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.BTN_REGFRMXC.WHEN-BUTTON-PRESSED. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_btnRegfrmxc_whenButtonPressed");
    }

    async CRFCDEGRL_crtsolicr_solicrCiaseg_keyPrevItem() {
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
    async CRFCDEGRL_crtsolicr_solicrCiaseg_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrCiaseg_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CIASEG != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
            // call REST API
            const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrciaseg_keynextitem_query1", payload1);
            // get values from result
            // CRTSOLICR.NONCIASEG = result1[0].get("CRTSOLICR.NONCIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_DEDESP");
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrCiaseg_keyNextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrPlazmi_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPlazmi_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZMA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_PLAZMI.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPlazmi_keyNextItem");
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
    async CRFCDEGRL_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrIntven_whenValidateItem");
        // if ((SOLICR_INTVEN != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_INTVEN", SOLICR_INTVEN);
        //         // call REST API
        //         const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFCDEGRL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrIntven_whenValidateItem");
    }

    async CRFCDEGRL_crtsolicr_solicrComopr_keyNextItem() {
        // null;
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
    async CRFCDEGRL_crtsolicr_solicrPdscto_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrPdscto_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PDSCTO == null ? 0 : this.CRTSOLICR.SOLICR_PDSCTO > 100) {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE DESCUENTO DEBE SER INFERIOR AL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrPdscto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_flance_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_flance_keyNextItem");
        console.log("Exiting CRFCDEGRL_crtsolicr_flance_keyNextItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_comercial_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_comercial_keyNextItem");
        console.log("Exiting CRFCDEGRL_crtsolicr_comercial_keyNextItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrEstrat_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrEstrat_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
                // call REST API
                const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_solicrestrat_whenvalidateitem_query1", payload1);
                // get values from result
                // CRTSOLICR.SOLICR_ESTRATDESC = result1[0].get("CRTSOLICR.SOLICR_ESTRATDESC");
            } catch (ex) {

                this.CRTSOLICR.SOLICR_ESTRAT = null;
                this.CRTSOLICR.SOLICR_ESTRATDESC = null;
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", "ESTRATEGIA VOR UVP INVÁLIDA.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_ESTRAT.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrEstrat_whenValidateItem");
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
    //                   || 'CRFCDEGRL.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrVrcial_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrVrcial_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            this.oracleFormsBuiltins.go_item("VARIABLE.BTN_MASPRENDAS");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_VRCIAL.KEY-NEXT-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrVrcial_keyNextItem");
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
    //                    || 'CRFCDEGRL.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. '
    //                    || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                    || 'SQLERRM ' || SQLERRM;
    //                    
    //          PBD_SEG_MSGERR( 'CRFCDEGRL', V_MENSAJE );                   
    //                    
    //        LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //        
    //       END IF;
    // 
    //  END;
    //#endregion
    async CRFCDEGRL_crtsolicr_solicrVrcial_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrVrcial_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // CRFCDEGRL_PUP_CONTROL_BOTONES_X_UNIDAD();
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFCDEGRL.CRTSOLICR.SOLICR_VRCIAL.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFCDEGRL_PBD_SEG_MSGERR("CRFCDEGRL", V_MENSAJE);
                // CRFCDEGRL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFCDEGRL_crtsolicr_solicrVrcial_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    //  V_COMERCIAL VARCHAR2(3);
    //  V_CONDI VARCHAR2(500);
    // BEGIN
    //  
    //  IF :SOLICR_CODPRO IS NULL THEN
    //   LIB$ALERTA('MENSAJE','DEBE PRIMERO INDICAR EL CODIGO DEL PRODUCTO'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);
    //     GO_ITEM('CRTSOLICR.SOLICR_CODPRO');          
    //  ELSE
    // 
    //   /*:DSP_PROD    := :TIPDESCR;
    //   :TIPXCOM_TIPPRO := :SOLICR_CODPRO;*/
    //   ---
    //   BEGIN
    //    SELECT CXT_CODIGO
    //     INTO V_COMERCIAL
    //    FROM SETTERXCOM
    //    WHERE CXT_NIT = :SOLICR_NITTER;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    V_COMERCIAL := NULL;
    //   END;
    //    
    //  -- V_CONDI := 'TIPXCOM_CODCOM = '''||V_COMERCIAL||''' AND TIPXCOM_TIPPRO = '''||:SOLICR_CODPRO||'''';
    //  
    //  -- SET_BLOCK_PROPERTY ('COTTIPXCOM',DEFAULT_WHERE, V_CONDI);
    //  
    //    GO_BLOCK('COTTIPXCOM');
    //    EXECUTE_QUERY;
    // 
    //   ---
    //   LIB$AJUSTAVENTANA('WIN_COMPART',0,0);
    //   SHOW_VIEW ('COMPARTIDO');
    //   GO_ITEM('TIPXCOM_CODCOM');
    //   GO_BLOCK('COTTIPXCOM');
    //   EXECUTE_QUERY;
    //  END IF;
    // 
    // END; 
    //#endregion
    async CRFCDEGRL_crtsolicr_btnCompartido_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_crtsolicr_btnCompartido_whenButtonPressed");
        let VBOTON: number = null;
        let V_COMERCIAL: string = null;
        let V_CONDI: string = null;
        // if ((SOLICR_CODPRO == null)) {
        //     // CRFCDEGRL_LIB$ALERTA("MENSAJE", "DEBE PRIMERO INDICAR EL CODIGO DEL PRODUCTO", "ACEPTAR", null, null, VBOTON);
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODPRO");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_NITTER", SOLICR_NITTER);
        //     // call REST API
        //     const result1 = await Rest.post("/crfcdegrl_crtsolicr/crfcdegrl_crtsolicr_btncompartido_whenbuttonpressed_query1", payload1);
        //     // get values from result
        //     V_COMERCIAL = result1[0].get("V_COMERCIAL");
        //     if (result1 == null || result1.length == 0) {

        //         V_COMERCIAL = null;
        //     }

        //     this.oracleFormsBuiltins.go_block("COTTIPXCOM");
        //     this.oracleFormsBuiltins.execute_query();
        //     // CRFCDEGRL_LIB$AJUSTAVENTANA("WIN_COMPART", 0, 0);
        //     this.oracleFormsBuiltins.show_view("COMPARTIDO");
        //     this.oracleFormsBuiltins.go_item("TIPXCOM_CODCOM");
        //     this.oracleFormsBuiltins.go_block("COTTIPXCOM");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CRFCDEGRL_crtsolicr_btnCompartido_whenButtonPressed");
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
    async CRFCDEGRL_crtsolicr_solicrClasac_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_solicrClasac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "U"].indexOf(this.CRTSOLICR.SOLICR_CLASAC) != -1) {
            // CRFCDEGRL_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_nomOficial_keyNextItem() {
        console.log("Entering CRFCDEGRL_crtsolicr_nomOficial_keyNextItem");
        console.log("Exiting CRFCDEGRL_crtsolicr_nomOficial_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_CODPRO = 'RES' THEN
    //       SHOW_VIEW('REESTRUCTURADOS');
    //       GO_ITEM('CRTRESTR.RESTR_COLOFI');
    //    END IF; END;
    //#endregion
    async CRFCDEGRL_crtsolicr_resstruct_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_crtsolicr_resstruct_whenButtonPressed");
        if (this.CRTSOLICR.SOLICR_CODPRO == "RES") {
            this.oracleFormsBuiltins.show_view("REESTRUCTURADOS");
            this.oracleFormsBuiltins.go_item("CRTRESTR.RESTR_COLOFI");
        }
        console.log("Exiting CRFCDEGRL_crtsolicr_resstruct_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFCDEGRL_crtterext_whenNewBlockInstance() {
        console.log("Entering CRFCDEGRL_crtterext_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCDEGRL_crtterext_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT PROD_DESCRI
    //   INTO :DSP_PROD
    //       FROM CRTPRODCIA
    //        WHERE PROD_CODIGO = :TIPXCOM_TIPPRO
    //        AND PROD_CODUNI = :SOLICR_CODUNI; --ARQUITECTURA
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_PROD := NULL;
    // END;
    // 
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
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM2
    //    AND COM_CODUNI = :SOLICR_CODUNI --ARQUITECTURA
    //    ;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM2 := NULL;
    // END;
    //#endregion
    async CRFCDEGRL_cottipxcom_postQuery() {
        console.log("Entering CRFCDEGRL_cottipxcom_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPXCOM_TIPPRO", TIPXCOM_TIPPRO);
        // payload1.set("SOLICR_CODUNI", SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfcdegrl_cottipxcom/crfcdegrl_cottipxcom_postquery_query1", payload1);
        // get values from result
        // DSP_PROD = result1[0].get("DSP_PROD");
        if (result1 == null || result1.length == 0) {

            this.COTTIPXCOM.DSP_PROD = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("TIPXCOM_CODCOM", TIPXCOM_CODCOM);
        // call REST API
        const result2 = await Rest.post("/crfcdegrl_cottipxcom/crfcdegrl_cottipxcom_postquery_query2", payload2);
        // get values from result
        // DSP_COM1 = result2[0].get("DSP_COM1");
        if (result2 == null || result2.length == 0) {

            this.COTTIPXCOM.DSP_COM1 = null;
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("TIPXCOM_CODCOM2", TIPXCOM_CODCOM2);
        // payload3.set("SOLICR_CODUNI", SOLICR_CODUNI);
        // call REST API
        const result3 = await Rest.post("/crfcdegrl_cottipxcom/crfcdegrl_cottipxcom_postquery_query3", payload3);
        // get values from result
        // DSP_COM2 = result3[0].get("DSP_COM2");
        if (result3 == null || result3.length == 0) {

            this.COTTIPXCOM.DSP_COM2 = null;
        }

        console.log("Exiting CRFCDEGRL_cottipxcom_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SOLICR_LINEA');
    //    HIDE_WINDOW('COMPARTIDO'); END;
    //#endregion
    async CRFCDEGRL_cottipxcom_btnRegresar_whenButtonPressed() {
        console.log("Entering CRFCDEGRL_cottipxcom_btnRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("SOLICR_LINEA");
        this.oracleFormsBuiltins.hide_window("COMPARTIDO");
        console.log("Exiting CRFCDEGRL_cottipxcom_btnRegresar_whenButtonPressed");
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
    async CRFCDEGRL_crtotersol1_keyEntqry() {
        console.log("Entering CRFCDEGRL_crtotersol1_keyEntqry");
        console.log("Exiting CRFCDEGRL_crtotersol1_keyEntqry");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //  LIB$ALERTA('MENSAJE','NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async CRFCDEGRL_crtotersol1_keyDelrec() {
        console.log("Entering CRFCDEGRL_crtotersol1_keyDelrec");
        let T_RESPUESTA: number = null;
        // CRFCDEGRL_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
        console.log("FORM_TRIGGER_FAILURE");
        throw new Error('FORM_TRIGGER_FAILURE');
        console.log("Exiting CRFCDEGRL_crtotersol1_keyDelrec");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFCDEGRL_crtotersol1_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_crtotersol1_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFCDEGRL_crtotersol1_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFCDEGRL_crtotersol1_preQuery() {
        console.log("Entering CRFCDEGRL_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFCDEGRL_crtotersol1_preQuery");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    CLEAR_BLOCK;
    // 
    //    IF this._SYSTEM_SERVICE.get("BLOCK_SERVICE") <> 'CHANGED' THEN
    //       FRM$AUDIT_SOLIC_DEL;
    //    END IF;
    // 
    // END;
    //#endregion
    async CRFCDEGRL_crtotersol1_keyClrblk() {
        console.log("Entering CRFCDEGRL_crtotersol1_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        if (this._SYSTEM_SERVICE.get("BLOCK_SERVICE") != "CHANGED") {
            // CRFCDEGRL_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFCDEGRL_crtotersol1_keyClrblk");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFCDEGRL_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFCDEGRL_crtotersol1_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCDEGRL_crtotersol1_whenNewBlockInstance");
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
    async CRFCDEGRL_crtotersol1_postQuery() {
        console.log("Entering CRFCDEGRL_crtotersol1_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("OTERSOL_NITTER", CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfcdegrl_crtotersol1/crfcdegrl_crtotersol1_postquery_query1", payload1);
        // get values from result
        // CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFCDEGRL_crtotersol1_postQuery");
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
    async CRFCDEGRL_crtotersol1_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFCDEGRL_crtotersol1_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (CRTOTERSOL1.OTERSOL_GIRDIR == null ? 0 : CRTOTERSOL1.OTERSOL_GIRDIR > 100) {
        //     // CRFCDEGRL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE GIRO DIRECTO NO DEBE SUPERAR EL 100% ...", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFCDEGRL_crtotersol1_otersolGirdir_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFCDEGRL_crtotersol1_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFCDEGRL_crtotersol1_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFCDEGRL_crtotersol1_otersolOfcsol_whenNewItemInstance");
    }

}

