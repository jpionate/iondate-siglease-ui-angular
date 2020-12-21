import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSOLCRE business logic
import {
    CRTOTERSOL,
    VARIABLE,
    CRTSOLICR,
    CTRSOLICR2,
    CRTTEREXT,
    TOOLBAR,
    PPAL,
    CRTOTERSOL1,
    SOLOBS,
    BASE
} from "./CRFSOLCRE_models";



// class CRFSOLCRE
@Component({
    selector: 'app-crfsolcre',
    templateUrl: './crfsolcre.component.html',
})
export class CrfsolcreComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['SOL_OFI', null],
        ['SOL_TIP', null],
        ['SOL_COD', null],
        ['SOL_CTRL', null],
        ['SOL_TER_PPAL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CTRSOLICR2: CTRSOLICR2 = new CTRSOLICR2();
    public CRTTEREXT: CRTTEREXT = new CRTTEREXT();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public PPAL: PPAL = new PPAL();
    public CRTOTERSOL1: CRTOTERSOL1 = new CRTOTERSOL1();
    public SOLOBS: SOLOBS = new SOLOBS();
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
    async CRFSOLCRE_onClearDetails() {
        console.log("Entering CRFSOLCRE_onClearDetails");
        // CRFSOLCRE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFSOLCRE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_whenMouseDoubleclick() {
        console.log("Entering CRFSOLCRE_whenMouseDoubleclick");
        console.log("Exiting CRFSOLCRE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN FRM$POST_FORM; END;
    //#endregion
    async CRFSOLCRE_postForm() {
        console.log("Entering CRFSOLCRE_postForm");
        // CRFSOLCRE_FRM$POST_FORM();
        console.log("Exiting CRFSOLCRE_postForm");
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
    async CRFSOLCRE_keyClrfrm() {
        console.log("Entering CRFSOLCRE_keyClrfrm");
        this.oracleFormsBuiltins.clear_form();
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") != "CHANGED") {
            // CRFSOLCRE_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFSOLCRE_keyClrfrm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_preForm() {
        console.log("Entering CRFSOLCRE_preForm");
        console.log("Exiting CRFSOLCRE_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_whenNewFormInstance() {
        console.log("Entering CRFSOLCRE_whenNewFormInstance");
        console.log("Exiting CRFSOLCRE_whenNewFormInstance");
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
    async CRFSOLCRE_crtotersol_keyDelrec() {
        console.log("Entering CRFSOLCRE_crtotersol_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCRE_crtotersol_keyDelrec");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLCRE_crtotersol_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtotersol_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLCRE_crtotersol_otersolOfcsol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLCRE_crtotersol_volverTer_whenMouseClick() {
        console.log("Entering CRFSOLCRE_crtotersol_volverTer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCRE_crtotersol_volverTer_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.OFC1  := :CRTSOLICR.SOLICR_OFCSOL; END;
    //#endregion
    async CRFSOLCRE_variable_whenNewBlockInstance() {
        console.log("Entering CRFSOLCRE_variable_whenNewBlockInstance");
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        console.log("Exiting CRFSOLCRE_variable_whenNewBlockInstance");
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
    async CRFSOLCRE_variable_provnal_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_provnal_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_GIRDIR");
        this.VARIABLE.LABEL_TERCEROS = "PROVEEDORES";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "09";
        console.log("Exiting CRFSOLCRE_variable_provnal_whenButtonPressed");
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
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
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
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD') = 1 THEN
    // 
    //     -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //             'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //                 V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //     :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //     :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //     :GLOBAL.ACTUALIZAR := 'SI';
    //     COMMIT_FORM;
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
    //  ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO ANULADA',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    // 
    //  EXCEPTION
    //     WHEN ESTADO_NO_VALIDO THEN
    //          LIB$ALERTA('MENSAJE', 'ESTADO NO VÁLIDO PORQUE LA SOLICITUD SE ENCUENTRA EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     WHEN OTHERS THEN
    //  NULL;
    // END;
    //#endregion
    async CRFSOLCRE_variable_btnAnular_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_btnAnular_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AN';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "AP", "RJ", "NG", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA ANULAR LA SOLICITUD") == 1) {
            //     // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR.SOLICR_VRFINCR = null;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            else {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO ANULADA", null, null, null, T_RESPUESTA);
            }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCRE_variable_btnAnular_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // HIDE_VIEW('CANVAS12');
    // GO_BLOCK('CRTTEREXT');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLCRE_variable_provext_whenMouseClick() {
        console.log("Entering CRFSOLCRE_variable_provext_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        this.oracleFormsBuiltins.go_block("CRTTEREXT");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLCRE_variable_provext_whenMouseClick");
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
    //  IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'RJ', 'AP') THEN
    //     RAISE ESTADO_NO_VALIDO;
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
    // 
    //  IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
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
    //  IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APLAZAR LA SOLICITUD') = 1 THEN
    // 
    //     -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //               'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //         V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
    //    :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //    :CRTSOLICR.SOLICR_VRFINCR :=  NULL;
    //    :GLOBAL.ACTUALIZAR := 'SI';
    //    COMMIT_FORM;
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
    async CRFSOLCRE_variable_btnAplazar_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_btnAplazar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AZ';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "RJ", "AP"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APLAZAR LA SOLICITUD") == 1) {
            //     // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR.SOLICR_VRFINCR = null;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            else {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APLAZADA", null, null, null, T_RESPUESTA);
            }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCRE_variable_btnAplazar_whenButtonPressed");
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
    // :VARIABLE.TIPO_VINCULA := '13'; END;
    //#endregion
    async CRFSOLCRE_variable_locararios_whenMouseClick() {
        console.log("Entering CRFSOLCRE_variable_locararios_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIOS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "13";
        console.log("Exiting CRFSOLCRE_variable_locararios_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AP';
    //    ESTADO_NO_VALIDO  EXCEPTION;
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 30 DE JUNIO DE 2005
    //   --
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_ESTSOL NOT IN ('EC', 'AZ')  
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
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //      LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //      GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //      RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_FECVIG IS NULL THEN
    //      LIB$ALERTA('MENSAJE', 'DEBE DIGITAR FECHA DE VIGENCIA INICIAL DE LA OPERACIÓN',NULL,NULL,NULL, T_RESPUESTA);
    //      GO_ITEM('CRTSOLICR.SOLICR_FECVIG');
    //      RAISE FORM_TRIGGER_FAILURE;
    // END IF;
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
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    // 
    //     -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //                'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL, 
    //                V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )')); 
    // 
    //     :CRTSOLICR.SOLICR_ESTSOL := V_ESTADO;
    //     :GLOBAL.ACTUALIZAR := 'SI';
    //     COMMIT_FORM;
    //     GO_BLOCK('CRTSOLICR');
    //     EXECUTE_QUERY;
    //          
    //     IF :VARIABLE.REGNRO_SOLICR > 0 THEN
    //        GO_RECORD(:VARIABLE.REGNRO_SOLICR);
    //     END IF;
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
    async CRFSOLCRE_variable_btnAprobar_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_btnAprobar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AP';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "AZ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if (this.CRTSOLICR.SOLICR_VRFINCR == null ? 0 : this.CRTSOLICR.SOLICR_VRFINCR == 0) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR EL VALOR DE APROBACIÓN ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_VRFINCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_APGARA == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_APGARA");
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "ENTRE LA MODALIDAD DE GARANTÍAS", "ACEPTAR", null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTSOLICR.SOLICR_FECVIG == null)) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR FECHA DE VIGENCIA INICIAL DE LA OPERACIÓN", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECVIG");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
            //     // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            else {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_VRFINCR = null;
                this.CRTSOLICR.SOLICR_FAPRCR = null;
                this.CRTSOLICR.SOLICR_VPAVAL = null;
            }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCRE_variable_btnAprobar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE,
    //                   :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPVIN, 'T'); END;
    //#endregion
    async CRFSOLCRE_variable_crter_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_crter_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        // CRFSOLCRE_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE, CRTOTERSOL1.OTERSOL_TIPPER, CRTOTERSOL1.OTERSOL_TIPVIN, "T");
        console.log("Exiting CRFSOLCRE_variable_crter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_ESTSOL <> 'RE' AND :CTRSOLICR2.SOLICR_OBSREC IS NOT NULL THEN
    //    :CTRSOLICR2.SOLICR_OBSREC := NULL;
    //    COMMIT_FORM;
    // END IF;
    // HIDE_VIEW('CANVAS14');
    // GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFSOLCRE_variable_devolver_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_devolver_whenButtonPressed");
        if ((this.CRTSOLICR.SOLICR_ESTSOL != "RE" && (this.CTRSOLICR2.SOLICR_OBSREC != null))) {
            this.CTRSOLICR2.SOLICR_OBSREC = null;
            this.oracleFormsBuiltins.commit_form();
        }
        this.oracleFormsBuiltins.hide_view("CANVAS14");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFSOLCRE_variable_devolver_whenButtonPressed");
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
    // IF :CRTSOLICR.SOLICR_FAPRCR IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE DIGITAR LA FECHA DEL ESTADO ',NULL,NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('CRTSOLICR.SOLICR_FAPRCR');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF;
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
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA NEGAR LA SOLICITUD') = 1 THEN
    // 
    //   -- FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //   FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,
    //           'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,
    //              V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    // 
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
    async CRFSOLCRE_variable_btnNegar_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_btnNegar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'NG';
        let ESTADO_NO_VALIDO: null = null;
        try {

            if (["EC", "AZ", "RJ"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
                console.log("ESTADO_NO_VALIDO");
                throw new Error('ESTADO_NO_VALIDO');
            }
            if ((this.CRTSOLICR.SOLICR_USCRED == null)) {
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO TIENE ANALISTA DE CRÉDITO ASIGNADO");
            }
            if ((this.CRTSOLICR.SOLICR_FECRADI == null)) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
                // CRFSOLCRE_LIB$DTNERFRMA("LA SOLICITUD " + CRTSOLICR.SOLICR_OFCSOL + "-" + CRTSOLICR.SOLICR_CODSOL + " NO HA SIDO RADICADA");
            }
            if ((this.CRTSOLICR.SOLICR_FAPRCR == null)) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR LA FECHA DEL ESTADO ", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FAPRCR");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA NEGAR LA SOLICITUD") == 1) {
            //     // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR.SOLICR_VRFINCR = null;
            //     // this.GLOBAL.ACTUALIZAR = "SI";
            //     this.oracleFormsBuiltins.commit_form();
            //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
            //     this.oracleFormsBuiltins.execute_query();
            //     if (this.VARIABLE.REGNRO_SOLICR > 0) {
            //         this.oracleFormsBuiltins.go_record(this.VARIABLE.REGNRO_SOLICR);
            //     }
            // }
            else {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO NEGADA", null, null, null, T_RESPUESTA);
            }
        } catch (ex) {

        }

        console.log("Exiting CRFSOLCRE_variable_btnNegar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('CANVAS11');
    // 
    // SET_BLOCK_PROPERTY('CRTOTERSOL1',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    // SET_BLOCK_PROPERTY('CRTOTERSOL1', "UPDATE_ALLOWED", "PROPERTY_FALSE");
    // 
    // SET_ITEM_PROPERTY('CRTOTERSOL1.OTERSOL_NITTER', "NEXT_NAVIGATION_ITEM", 'CRTOTERSOL1.OTERSOL_TIPVIN');
    // 
    // GO_BLOCK('CRTOTERSOL');
    // :VARIABLE.LABEL_TERCEROS := 'LOCATARIO PRINCIPAL';
    // :VARIABLE.TIPO_VINCULA := '05'; END;
    //#endregion
    async CRFSOLCRE_variable_locppal_whenMouseClick() {
        console.log("Entering CRFSOLCRE_variable_locppal_whenMouseClick");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.LABEL_TERCEROS = "LOCATARIO PRINCIPAL";
        this.VARIABLE.TIPO_VINCULA = "05";
        console.log("Exiting CRFSOLCRE_variable_locppal_whenMouseClick");
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
    //    FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL);
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
    async CRFSOLCRE_variable_btnFormAudit_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_btnFormAudit_whenButtonPressed");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        if (((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCRE_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL);
        PL_ID = this.oracleFormsBuiltins.get_parameter_list(PL_NOMBRE);
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.add_parameter(PL_ID, "P_NOMBRE_CAMPO", "TEXT_PARAMETER", "SOLICR_ESTSOL");
            this.oracleFormsBuiltins.call_form("CRTAUDISOL", "HIDE", "NO_REPLACE", "NO_QUERY_ONLY", PL_ID);
            this.oracleFormsBuiltins.delete_parameter(PL_ID, "P_NOMBRE_CAMPO");
        }
        else {
            this.oracleFormsBuiltins.message("ERROR EN LISTA DE PARÁMETROS");
        }
        console.log("Exiting CRFSOLCRE_variable_btnFormAudit_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFSOLCRE_variable_volverTerext_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_volverTerext_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCRE_variable_volverTerext_whenButtonPressed");
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
    async CRFSOLCRE_variable_aval_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_aval_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("CRTOTERSOL1", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("CRTOTERSOL1.OTERSOL_NITTER", "NEXT_NAVIGATION_ITEM", "CRTOTERSOL1.OTERSOL_TIPVIN");
        this.VARIABLE.LABEL_TERCEROS = "AVALISTAS";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL");
        this.VARIABLE.TIPO_VINCULA = "14";
        console.log("Exiting CRFSOLCRE_variable_aval_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    PL_ID              PARAMLIST;
    //    PL_NOMBRE          VARCHAR2(15) := 'PL_SOLICITUD';
    //    T_RESPUESTA        NUMBER;
    // 
    // BEGIN
    // 
    //    IF :CRTSOLICR.SOLICR_OFCSOL IS NULL OR
    //       :CRTSOLICR.SOLICR_CODSOL IS NULL THEN
    //       MESSAGE('EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END IF;  
    // 
    //    FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, :CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL);
    // 
    //    PL_ID  := GET_PARAMETER_LIST(PL_NOMBRE);
    // 
    //    IF NOT ID_NULL(PL_ID) THEN
    //       ADD_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //       RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, NULL);
    //       DELETE_PARAMETER(PL_ID, 'ORACLE_SHUTDOWN');
    //    ELSE
    //        MESSAGE('ERROR EN LISTA DE PARÁMETROS');
    //        RUN_PRODUCT (REPORTS, 'CRRSOPCR', SYNCHRONOUS, RUNTIME, FILESYSTEM, TO_CHAR(NULL), NULL);
    //    END IF;
    //    
    //    IF FRM$ALERTA_SINO ('DESEA ACTUALIZAR EL ESTADO A AC (APROBADO POR COMERCIAL)?') = 1 THEN
    //       
    //       UPDATE CRTSOLICR
    //         SET SOLICR_ESTSOL  = 'AC'
    //            ,SOLICR_FEACIA  = SYSDATE
    //        WHERE SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND  SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL; 
    //        COMMIT;
    //        LIB$ALERTA('MENSAJE', 'LA SOLICITUD FUE ACTUALIZADA A ESTADO AC (APROBADA POR COMERCIAL). SI LA DESEA VERIFICAR USE LA CONSULTA GENERAL',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_BLOCK('CRTSOLICR');
    //        EXECUTE_QUERY;
    //    ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_variable_btnPrintSolic_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_variable_btnPrintSolic_whenButtonPressed");
        let PL_ID: number = null;
        let PL_NOMBRE: string = 'PL_SOLICITUD';
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_OFCSOL == null) || (this.CRTSOLICR.SOLICR_CODSOL == null))) {
            this.oracleFormsBuiltins.message("EL CÓDIGO DE LA SOLICITUD NO DEBE SER NULO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFSOLCRE_FRM$SOLICITUD_PARAMETROS(PL_NOMBRE, CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL);
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
        // if (FRM$ALERTA_SINO("DESEA ACTUALIZAR EL ESTADO A AC (APROBADO POR COMERCIAL)?") == 1) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //     payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcre_variable/crfsolcre_variable_btnprintsolic_whenbuttonpressed_query1", payload1);
        //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD FUE ACTUALIZADA A ESTADO AC (APROBADA POR COMERCIAL). SI LA DESEA VERIFICAR USE LA CONSULTA GENERAL", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFSOLCRE_variable_btnPrintSolic_whenButtonPressed");
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
    async CRFSOLCRE_crtsolicr_postTextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULO" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if ((GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR && GLOBAL.VALOR_ANTERIOR != "****")) {
        //     // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_postTextItem");
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
    async CRFSOLCRE_crtsolicr_keyDelrec() {
        console.log("Entering CRFSOLCRE_crtsolicr_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_keyDelrec");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULO'); END;
    //#endregion
    async CRFSOLCRE_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtsolicr_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULO" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFSOLCRE_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF  :this.PARAMETER.get("SOL_CTRL") ='Q' THEN
    //     :CRTSOLICR.SOLICR_OFCSOL  :=  :this.PARAMETER.get("SOL_OFI");
    //     :CRTSOLICR.SOLICR_TIPCRE  := :this.PARAMETER.get("SOL_TIP");
    //     :CRTSOLICR.SOLICR_CODSOL  :=  :this.PARAMETER.get("SOL_COD");
    // END IF; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_preQuery() {
        console.log("Entering CRFSOLCRE_crtsolicr_preQuery");
        if (this.PARAMETER.get("SOL_CTRL") == "Q") {
            this.CRTSOLICR.SOLICR_OFCSOL = this.PARAMETER.get("SOL_OFI");
            this.CRTSOLICR.SOLICR_TIPCRE = this.PARAMETER.get("SOL_TIP");
            this.CRTSOLICR.SOLICR_CODSOL = this.PARAMETER.get("SOL_COD");
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_preQuery");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF this._SYSTEM_SERVICE.get("BLOCK_STATUS") <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_keyClrblk() {
        console.log("Entering CRFSOLCRE_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") != "CHANGED") {
            // CRFSOLCRE_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_keyClrblk");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //  IF  :CRTSOLICR.SOLICR_ESTSOL <>'EC'  AND :GLOBAL.ACTUALIZAR = 'NO' THEN
    //     LIB$ALERTA('MENSAJE','CAMBIOS NO PERMITIDOS EN ESTADO '||:CRTSOLICR.SOLICR_ESTSOL,NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;  
    //  END IF; 
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_preUpdate() {
        console.log("Entering CRFSOLCRE_crtsolicr_preUpdate");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_ESTSOL != "EC")) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CAMBIOS NO PERMITIDOS EN ESTADO " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_preUpdate");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_keyCommit() {
        console.log("Entering CRFSOLCRE_crtsolicr_keyCommit");
        console.log("Exiting CRFSOLCRE_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD='FALSE' THEN
    //   DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_keyDown() {
        console.log("Entering CRFSOLCRE_crtsolicr_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_keyDown");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   :GLOBAL.VALOR_ANTERIOR   := NVL(NAME_IN('SYSTEM.CURSOR_VALUE'), 'NULL');
    //   :VARIABLE.REGNRO_SOLICR  := TO_NUMBER(SYSTEM.CURSOR_RECORD);
    //   :GLOBAL.ESTADO_ANTERIOR  := :CRTSOLICR.SOLICR_ESTSOL;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFSOLCRE_crtsolicr_whenNewRecordInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE") == null ? "NULL" : this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.VARIABLE.REGNRO_SOLICR = PLSQLBuiltins.to_number(SYSTEM.CURSOR_RECORD);
        // this.GLOBAL.ESTADO_ANTERIOR = this.CRTSOLICR.SOLICR_ESTSOL;
        console.log("Exiting CRFSOLCRE_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_keyEntqry() {
        console.log("Entering CRFSOLCRE_crtsolicr_keyEntqry");
        console.log("Exiting CRFSOLCRE_crtsolicr_keyEntqry");
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
    // --
    // -- CUOP
    // --SET_ITEM_INSTANCE_PROPERTY('CRTSOLICR.SOLICR_MOTARA',CURRENT_RECORD,"UPDATE_ALLOWED", "PROPERTY_FALSE");
    //#endregion
    async CRFSOLCRE_crtsolicr_postUpdate() {
        console.log("Entering CRFSOLCRE_crtsolicr_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: null = null;
        let RG_INDICE: number = null;
        let T_RESPUESTA: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        if ((!this.oracleFormsBuiltins.id_null(RG_ID))) {
            RG_INDICE = this.oracleFormsBuiltins.get_group_row_count(RG_ID);
            if (RG_INDICE > 0) {
                // CRFSOLCRE_FRM$AUDIT_SOLIC_INSERT();
            }
        }
        // this.GLOBAL.ACTUALIZAR = "NO";
        console.log("Exiting CRFSOLCRE_crtsolicr_postUpdate");
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
    // 
    //   CURSOR CRTOTERSOL_CUR IS      
    //     SELECT 1 FROM CRTOTERSOL     
    //     WHERE OTERSOL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND OTERSOL_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    // 
    //   --
    //   -- END CRTOTERSOL DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN SOLOBS DETAIL DECLARE SECTION
    //   --
    // 
    //   CURSOR SOLOBS_CUR IS      
    //     SELECT 1 FROM CRTSOLESTOBS     
    //     WHERE SOBS_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND SOBS_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    // 
    //   --
    //   -- END SOLOBS DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CTRSOLICR2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CTRSOLICR2_CUR IS      
    //     SELECT 1 FROM CRTSOLICR     
    //     WHERE SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CTRSOLICR2 DETAIL DECLARE SECTION
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
    //       MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //       CLOSE CRTOTERSOL_CUR;     
    //       RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTOTERSOL_CUR;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SOLOBS DETAIL PROGRAM SECTION
    //   --
    // 
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
    // 
    // 
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
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFSOLCRE_crtsolicr_onCheckDeleteMaster");
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
        console.log("Exiting CRFSOLCRE_crtsolicr_onCheckDeleteMaster");
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
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //      REL_ID := FIND_RELATION('CRTSOLICR.TERXSOLI');   
    //      QUERY_MASTER_DETAILS(REL_ID, 'CRTOTERSOL');   
    //   END IF;
    //   --
    //   -- END CRTOTERSOL DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.SOLIC_ESTOBS');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SOLOBS');   
    //   END IF;
    //   --
    //   -- END SOLOBS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CTRSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.REL_SOLXRECON');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CTRSOLICR2');   
    //   END IF;
    //   --
    //   -- END CTRSOLICR2 DETAIL PROGRAM SECTION
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
    async CRFSOLCRE_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFSOLCRE_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.TERXSOLI");
            // CRFSOLCRE_QUERY_MASTER_DETAILS(REL_ID, "CRTOTERSOL");
        }
        if (((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.SOLIC_ESTOBS");
            // CRFSOLCRE_QUERY_MASTER_DETAILS(REL_ID, "SOLOBS");
        }
        if (((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.REL_SOLXRECON");
            // CRFSOLCRE_QUERY_MASTER_DETAILS(REL_ID, "CTRSOLICR2");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFSOLCRE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 28 DE JUNIO DE 2005
    //   
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //   FROM   TBEN
    //   WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // 
    // /*BEGIN
    //   IF :CRTSOLICR.SOLICR_CLASAC ='N' THEN
    //      :CRTSOLICR.ACTIVO:= 'NUEVO';
    //   ELSE
    //      :CRTSOLICR.ACTIVO:= 'USADO';
    //   END IF;
    // END;*/
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
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       SELECT TIPBIEN_DESBIEN
    //       INTO :CRTSOLICR.BIEN
    //       FROM CRTTIPBIEN
    //       WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE;
    //   END IF;
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
    // --
    // -- CUOP
    // /*SET_ITEM_INSTANCE_PROPERTY('CRTSOLICR.SOLICR_MOTARA',CURRENT_RECORD,"UPDATE_ALLOWED", "PROPERTY_FALSE");
    // DECLARE
    //  VHRASOL CRTHRASOL%ROWTYPE;
    // BEGIN
    //  PQBD_COL_GEN.PHRAINI(:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, VHRASOL);
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
    //  END;*/; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_postQuery() {
        console.log("Entering CRFSOLCRE_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
        // call REST API
        const result2 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_postquery_query2", payload2);
        // get values from result
        this.CRTSOLICR.NONCIASEG = result2[0].get("CRTSOLICR.NONCIASEG");
        if (result2 == null || result2.length == 0) {

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
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // construct payload
            let payload3 = new Map();
            payload3.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
            // call REST API
            const result3 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_postquery_query3", payload3);
            // get values from result
            this.CRTSOLICR.BIEN = result3[0].get("CRTSOLICR.BIEN");
        }
        // construct payload
        let payload4 = new Map();
        // payload4.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
        // call REST API
        const result4 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_postquery_query4", payload4);
        // get values from result
        // DESCBCDX = result4[0].get("DESCBCDX");
        if (result4 == null || result4.length == 0) {

        }

        // construct payload
        let payload5 = new Map();
        // payload5.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
        // call REST API
        const result5 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_postquery_query5", payload5);
        // get values from result
        // DESLIMPTO = result5[0].get("DESLIMPTO");
        if (result5 == null || result5.length == 0) {

        }

        console.log("Exiting CRFSOLCRE_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // 
    //     T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //    :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //   IF :CRTSOLICR.SOLICR_FINAGR <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //        FRM$GARANTIAS_EQUIS ('FIN');   
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrFinagr_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFinagr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINAGR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINAGR != "X") {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("FIN");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFinagr_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrModali_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrModali_whenValidateItem");
        // if ((SOLICR_MODALI != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODALI", SOLICR_MODALI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrmodali_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrModali_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //       SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_MODINT',"ENTERABLE","PROPERTY_OFF");
    //    END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrModali_postTextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrModali_postTextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_MODINT", "ENTERABLE", "PROPERTY_OFF");
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrModali_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR = 'X' THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
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
    async CRFSOLCRE_crtsolicr_solicrFinagp_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFinagp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINAGR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP < 1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP > 0) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINAGRO", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("FIN");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFinagp_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrVpaval_keyPrevItem() {
        // null;
    }

    async CRFSOLCRE_crtsolicr_solicrVpaval_keyNextItem() {
        // null;
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
    async CRFSOLCRE_crtsolicr_solicrPoriva_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrPoriva_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PORIVA == null ? 0 : this.CRTSOLICR.SOLICR_PORIVA > 100) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrPoriva_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA    NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_CONEXT IS NOT NULL THEN
    //     IF  NVL(:CRTSOLICR.SOLICR_CONEXT,0) > NVL(:CRTSOLICR.SOLICR_MONTO,0) THEN
    //       LIB$ALERTA('MENSAJE','NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrConext_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CONEXT != null)) {
            // if (this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT > CRTSOLICR.SOLICR_MONTO == null ? 0 : this.CRTSOLICR.SOLICR_MONTO) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO UN CANON EXTRAORDINARIO SUPERIOR AL MONTO SOLICITADO ...", null, null, null, T_RESPUESTA);
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrConext_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrNitres_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrNitres_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITRES != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_NITRES", this.CRTSOLICR.SOLICR_NITRES);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrnitres_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.SOLICR_NOMRES = result1[0].get("CRTSOLICR.SOLICR_NOMRES");
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS DEL NIT.....", null, null, null, T_RESPUESTA);
            // CRFSOLCRE_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITRES, null, null, null, "Q");
            if (result1 == null || result1.length == 0) {

                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
                // CRFSOLCRE_PU_LLAMAR_TERCERO(this.CRTSOLICR.SOLICR_NITTER, null, null, null, "T");
            }

        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrNitres_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrBcodex_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrBcodex_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_BCODEX != null)) {
            if (this.CRTSOLICR.SOLICR_BCODEX != "X") {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrBcodex_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrBcodex_keyPrevItem() {
        // null;
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
    //        :CRTSOLICR.SOLICR_FINDTP := 'X';
    //        FRM$GARANTIAS_EQUIS ('FND');
    //    END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFindtp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINDTR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP < 1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINDTP == null ? 0 : this.CRTSOLICR.SOLICR_FINDTP > 0) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINDETER", null, null, null, T_RESPUESTA);
                // this.CRTSOLICR.SOLICR_FINDTP = "X";
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFindtp_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrCseggt_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrCseggt_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CSEGGT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CSEGGT", this.CRTSOLICR.SOLICR_CSEGGT);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrcseggt_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NOM_CIASEG = result1[0].get("CRTSOLICR.NOM_CIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("SOLICR_OBSGTI");
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrCseggt_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FINDTR IS NOT NULL THEN
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //     IF :CRTSOLICR.SOLICR_FINDTR  <> 'X' THEN
    //     LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //     FRM$GARANTIAS_EQUIS ('FND');    
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrFindtr_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFindtr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FINDTR != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FINDTR != "X") {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("FND");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFindtr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_IFI = 'X' THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
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
    async CRFSOLCRE_crtsolicr_solicrIfip_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrIfip_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_IFI == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP < 1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_IFIP == null ? 0 : this.CRTSOLICR.SOLICR_IFIP > 0) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR IFI", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_IFI = "X";
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrIfip_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrSeguro_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrSeguro_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_SEGURO) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrSeguro_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // IF :SOLICR_ORMONET IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //   SELECT ORMDES
    //    INTO DESC1
    //   FROM ORM
    //   WHERE ORMCOD=:SOLICR_ORMONET;
    //   -- CUOP
    //   PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_MONTO ,:CRTSOLICR.SOLICR_ORMONET
    //        ,:CRTSOLICR.SOLICR_NITTER ,'CRTSOLICR.SOLICR_COMITE', 'CRTSOLICR.COMITE');
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrOrmonet_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrOrmonet_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONET", SOLICR_ORMONET);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrormonet_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         // CRFSOLCRE_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, CRTSOLICR.SOLICR_MONTO, CRTSOLICR.SOLICR_ORMONET, CRTSOLICR.SOLICR_NITTER, "CRTSOLICR.SOLICR_COMITE", "CRTSOLICR.COMITE");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrOrmonet_whenValidateItem");
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
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrPrenda_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrPrenda_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_PRENDA) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrPrenda_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrOpccom_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrOpccom_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_OPCCOM != null)) {
            if (this.CRTSOLICR.SOLICR_OPCCOM == null ? 0 : this.CRTSOLICR.SOLICR_OPCCOM < 1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE OPCIÓN DE COMPRA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrOpccom_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrGtiare_keyNextItem() {
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
    async CRFSOLCRE_crtsolicr_solicrGtonac_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrGtonac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "S"].indexOf(this.CRTSOLICR.SOLICR_GTONAC) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (S) SI (NO) ACEPTADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrGtonac_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrResidu_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrResidu_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_RESIDU) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrResidu_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrFdamut_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFdamut_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_FDAMUT) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFdamut_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrLinea_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrLinea_whenValidateItem");
        // if ((SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_LINEA", SOLICR_LINEA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrlinea_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrLinea_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_devolerEc_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_crtsolicr_devolerEc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'EC';
        if (this.CRTSOLICR.SOLICR_ESTSOL == "RJ") {
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL NUEVO ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            this.CRTSOLICR.SOLICR_FECDEVO = PLSQLBuiltins.sysdate();
            // this.GLOBAL.ACTUALIZAR = "SI";
            this.oracleFormsBuiltins.commit_form();
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SOLICITUD PUESTA EN ESTADO EC ", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODSOL");
        }
        else {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SOLICITUD NO PUEDE SER PUESTA NUEVAMENTE EN EC. SE ENCUENTRA EN ESTADO: " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_devolerEc_whenButtonPressed");
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
    //      AND   USU_AREA='CRE';
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1',NULL,NULL,NULL,T_RESPUESTA);
    //      END;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrUscred_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrUscred_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_USCRED", SOLICR_USCRED);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicruscred_whenvalidateitem_query1", payload1);
            // get values from result
            // ANALISTA = result1[0].get("ANALISTA");
            if (result1 == null || result1.length == 0) {

                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1", null, null, null, T_RESPUESTA);
            }

        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrUscred_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrUscred_keyPrevItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrUscred_keyPrevItem");
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrUscred_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrUscred_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrUscred_keyNextItem");
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrUscred_keyNextItem");
    }

    async CRFSOLCRE_crtsolicr_solicrNomres_keyNextItem() {
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
    async CRFSOLCRE_crtsolicr_solicrApgara_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrApgara_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_VRFINCR > this.CRTSOLICR.SOLICR_MONTO) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL VALOR APROBADO NO DEBE SER SUPERIOR AL MONTO SOLICITADO: " + CRTSOLICR.SOLICR_MONTO.toString(), null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrApgara_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrApgara_keyPrevItem() {
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
    async CRFSOLCRE_crtsolicr_solicrApgara_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrApgara_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_VRFINCR == null)) {
            this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO;
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrApgara_whenNewItemInstance");
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
    async CRFSOLCRE_crtsolicr_solicrVrfincr_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrVrfincr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_VRFINCR > this.CRTSOLICR.SOLICR_MONTO) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL VALOR APROBADO NO DEBE SER SUPERIOR AL MONTO SOLICITADO: " + CRTSOLICR.SOLICR_MONTO.toString(), null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrVrfincr_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrVrfincr_keyPrevItem() {
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
    async CRFSOLCRE_crtsolicr_solicrVrfincr_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrVrfincr_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_VRFINCR == null)) {
            this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO;
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrVrfincr_whenNewItemInstance");
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
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //      IF  :CRTSOLICR.SOLICR_IFI  <> 'X' THEN
    //        LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //        FRM$GARANTIAS_EQUIS ('IFI');
    //      END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrIfi_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrIfi_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_IFI != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_IFI != "X") {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("IFI");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrIfi_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FNG == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP < 1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_FNGP == null ? 0 : this.CRTSOLICR.SOLICR_FNGP > 0) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FNG", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFngp_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrFngp_keyPrevItem() {
        // null;
    }

    async CRFSOLCRE_crtsolicr_solicrFngp_keyNextItem() {
        // null;
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
    async CRFSOLCRE_crtsolicr_solicrTipcre_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipcre_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TIPCRE != null)) {
            if (["03", "04"].indexOf(this.CRTSOLICR.SOLICR_TIPCRE) != -1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INVALIDO ........", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipcre_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrTipcre_postTextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipcre_postTextItem");
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
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipcre_postTextItem");
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
    async CRFSOLCRE_crtsolicr_solicrBcodxp_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrBcodxp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_BCODEX == "X") {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP < 1) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else {
            if (this.CRTSOLICR.SOLICR_BCODXP == null ? 0 : this.CRTSOLICR.SOLICR_BCODXP > 0) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_BCODEX = "X";
                // CRFSOLCRE_FRM$GARANTIAS_EQUIS("BAN");
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrBcodxp_whenValidateItem");
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
    //     FROM TIN
    //     WHERE TINCOD=:SOLICR_TDOLAR;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //  END IF; 
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if ((SOLICR_TDOLAR != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TDOLAR", SOLICR_TDOLAR);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTdolar_whenValidateItem");
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
    //   IF :SOLICR_TIPBIE IS NOT NULL THEN
    //   BEGIN
    //    SELECT TIPBIEN_DESBIEN 
    //     INTO DESC1
    //    FROM CRTTIPBIEN
    //    WHERE TIPBIEN_CODBIEN=:SOLICR_TIPBIE;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE.....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END;  
    //   BEGIN
    //     IF :CRTSOLICR.SOLICR_TIPCRE = '04' THEN
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,"PROPERTY_OFF");
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',"DISPLAYED","PROPERTY_OFF");
    //     ELSE 
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TIPBIE',REQUIRED,PROPERTY_ON); 
    //     END IF;
    //   END;
    //  ELSE -- CUOP
    //    PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_MONTO ,:CRTSOLICR.SOLICR_ORMONET
    //        ,:CRTSOLICR.SOLICR_NITTER ,'CRTSOLICR.SOLICR_COMITE', 'CRTSOLICR.COMITE');
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTipbie_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipbie_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if ((SOLICR_TIPBIE != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TIPBIE", SOLICR_TIPBIE);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrtipbie_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE.....", null, null, null, T_RESPUESTA);
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
        // }
        // else {
        //     // CRFSOLCRE_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, CRTSOLICR.SOLICR_MONTO, CRTSOLICR.SOLICR_ORMONET, CRTSOLICR.SOLICR_NITTER, "CRTSOLICR.SOLICR_COMITE", "CRTSOLICR.COMITE");
        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipbie_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      SELECT TIPBIEN_DESBIEN
    //       INTO :CRTSOLICR.BIEN
    //      FROM CRTTIPBIEN
    //      WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE;
    //      GO_ITEM('CRTSOLICR.SOLICR_NITTER');
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTipbie_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipbie_keyNextItem");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrtipbie_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.BIEN = result1[0].get("CRTSOLICR.BIEN");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_NITTER");
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipbie_keyNextItem");
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
    async CRFSOLCRE_crtsolicr_solicrCedeec_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrCedeec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_CEDEEC) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrCedeec_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_FAPRCR < :CRTSOLICR.SOLICR_FECRADI THEN
    //     LIB$ALERTA('MENSAJE', 'LA FECHA DE APROBACIÓN NO DEBE SER MENOR QUE LA FECHA DE RADICACIÓN',NULL,NULL,NULL, T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // --ELSE
    //  --:CRTSOLICR.SOLICR_FECVIG :=:CRTSOLICR.SOLICR_FAPRCR;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrFaprcr_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFaprcr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FAPRCR < this.CRTSOLICR.SOLICR_FECRADI) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA FECHA DE APROBACIÓN NO DEBE SER MENOR QUE LA FECHA DE RADICACIÓN", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFaprcr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrVrfina_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrVrfina_whenNewItemInstance");
        if ((this.CRTSOLICR.SOLICR_ORMONET == "PE" && (this.CRTSOLICR.SOLICR_ORMONUS$ == "PE" || (this.CRTSOLICR.SOLICR_ORMONUS$ == null)))) {
            // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        }
        else {
            this.CRTSOLICR.SOLICR_VRFINA = 0;
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrVrfina_whenNewItemInstance");
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
    async CRFSOLCRE_crtsolicr_solicrGtirec_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrGtirec_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.CRTSOLICR.SOLICR_GTIREC) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(S) SI (N) NO.............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrGtirec_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrGtirec_keyPrevItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrGtirec_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrGtirec_keyNextItem");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrGtirec_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_ESTSOL   NOT IN ('AZ','AC','AP','NG') THEN
    //   IF  (:CRTSOLICR.SOLICR_CODREC IS  NULL ) THEN ---CAMBIO SOLICIADO POR FM 12/01/2005 SMT
    //   LIB$ALERTA('MENSAJE','LA SOLICITUD SE ENCUENTRA EN ESTADO  ' ||:CRTSOLICR.SOLICR_ESTSOL || ' Y NO ES PERMITIDO PARA RECONSIDERAR ',NULL,NULL,NULL,T_RESPUESTA);
    //   ELSE
    //    HIDE_VIEW('CANVAS10');
    //    GO_BLOCK('CTRSOLICR2');
    //   END IF;  
    //   ELSE
    //     HIDE_VIEW('CANVAS10');
    //    GO_BLOCK('CTRSOLICR2');
    //  --  EXECUTE_QUERY;
    //  END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_reconsiderar_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_crtsolicr_reconsiderar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (["AZ", "AC", "AP", "NG"].indexOf(this.CRTSOLICR.SOLICR_ESTSOL) != -1) {
            if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD SE ENCUENTRA EN ESTADO  " + CRTSOLICR.SOLICR_ESTSOL + " Y NO ES PERMITIDO PARA RECONSIDERAR ", null, null, null, T_RESPUESTA);
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
        console.log("Exiting CRFSOLCRE_crtsolicr_reconsiderar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //    --VALIDA LISTAS RESTRICTIVAS
    //     PVALTER(:CRTSOLICR.SOLICR_NITTER);
    //     
    //      BEGIN
    //    SELECT   TBENAPE||' '||TBENNOM
    //      INTO     :CRTSOLICR.NOMBRE
    //      FROM     TBEN
    //      WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    // 
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        IF FRM$ALERTA_SINO ('DESEA CAMBIAR LA OBSERVACIÓN EXISTENTE') = 1 THEN
    //           CALL_FORM('CRFTERC');
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
    async CRFSOLCRE_crtsolicr_solicrNitter_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFSOLCRE_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_NITTER", CRTSOLICR.SOLICR_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("DESEA CAMBIAR LA OBSERVACIÓN EXISTENTE") == 1) {
                //     this.oracleFormsBuiltins.call_form("CRFTERC");
                // }
                // else {
                //     this.oracleFormsBuiltins.go_item("SOLICR_NITTER");
                // }
            }

        }
        else {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO DEBE SER NULO ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrNitter_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrActaso_keyNextItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_analista_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_analista_keyNextItem");
        console.log("Exiting CRFSOLCRE_crtsolicr_analista_keyNextItem");
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
    //      AND   USU_AREA='CRE';
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1',NULL,NULL,NULL,T_RESPUESTA);
    //      END;
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTipapr_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipapr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_USCRED", SOLICR_USCRED);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrtipapr_whenvalidateitem_query1", payload1);
            // get values from result
            // ANALISTA = result1[0].get("ANALISTA");
            if (result1 == null || result1.length == 0) {

                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "USUARIO NO EXISTE O NO PERTENECE AL AREA DE CREDITO1", null, null, null, T_RESPUESTA);
            }

        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipapr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTipapr_keyPrevItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipapr_keyPrevItem");
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipapr_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTipapr_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTipapr_keyNextItem");
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTipapr_keyNextItem");
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
    async CRFSOLCRE_crtsolicr_solicrPresid_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrPresid_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PRESID == null ? 0 : this.CRTSOLICR.SOLICR_PRESID > 100) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE RESIDUAL DEBE SER INFERIOR AL 100%....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrPresid_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //    IF :CRTSOLICR.SOLICR_PRESID IS NULL THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',"ENTERABLE","ATTR_OFF");
    //    ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_NITRES',"ENTERABLE",ATTR_ON);
    // 
    //    END IF;
    //  END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrPresid_postTextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrPresid_postTextItem");
        if ((this.CRTSOLICR.SOLICR_PRESID == null)) {
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "ENTERABLE", "ATTR_OFF");
        }
        else {
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "UPDATEABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_NITRES", "ENTERABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrPresid_postTextItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 28 DE JUNIO DE 2005
    //   --
    // IF :CRTSOLICR.SOLICR_FECRADI IS NOT NULL THEN
    //  IF :CRTSOLICR.SOLICR_FECRADI > SYSDATE THEN
    //   LIB$DTNERFRMA('LA FECHA DE RADICACIÓN, '||TO_CHAR(:CRTSOLICR.SOLICR_FECRADI,'DD/MM/YYYY')
    //               ||', DEBE SER INFERIOR O IGUAL A LA FECHA DEL SISTEMA, '||TO_CHAR(SYSDATE,'DD/MM/YYYY'));
    //  END IF;
    //  IF :CRTSOLICR.FECRADI_INI IS NULL THEN
    //   :CRTSOLICR.FECRADI_INI := :CRTSOLICR.SOLICR_FECRADI;
    //  END IF;
    //  /*IF :CRTSOLICR.SOLICR_FECRADI <> :CRTSOLICR.FECRADI_INI THEN
    //   --SET_ITEM_INSTANCE_PROPERTY('CRTSOLICR.SOLICR_MOTARA',CURRENT_RECORD,"UPDATE_ALLOWED", "PROPERTY_TRUE");
    //   --:CRTSOLICR.SOLICR_MOTARA := NULL;
    //  END IF;*/
    // END IF; END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrFecradi_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFecradi_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_FECRADI != null)) {
            if (this.CRTSOLICR.SOLICR_FECRADI > PLSQLBuiltins.sysdate()) {
                // CRFSOLCRE_LIB$DTNERFRMA("LA FECHA DE RADICACIÓN, " + CRTSOLICR.SOLICR_FECRADI.toString() + ", DEBE SER INFERIOR O IGUAL A LA FECHA DEL SISTEMA, " + SYSDATE.toString());
            }
            if ((this.CRTSOLICR.FECRADI_INI == null)) {
                this.CRTSOLICR.FECRADI_INI = this.CRTSOLICR.SOLICR_FECRADI;
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFecradi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    //    V_ESTADO        VARCHAR2(2) := 'DC';
    // 
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FECDEVO IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE LA FECHA DE DEVOLUCIÓN');
    //   END IF;
    // 
    //  IF :CRTSOLICR.SOLICR_ESTSOL = 'EC'THEN
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
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_devolver_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_crtsolicr_devolver_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'DC';
        if ((this.CRTSOLICR.SOLICR_FECDEVO == null)) {
            // CRFSOLCRE_LIB$DTNERFRMA("ENTRE LA FECHA DE DEVOLUCIÓN");
        }
        if (this.CRTSOLICR.SOLICR_ESTSOL == "EC") {
            // if (FRM$BUSCAR_ESTADO_OBS(V_ESTADO, PLSQLBuiltins.sysdate(), USER) == FALSE) {
            //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE DIGITAR OBSERVACIONES PARA EL ESTADO " + V_ESTADO, null, null, null, T_RESPUESTA);
            //     this.oracleFormsBuiltins.go_block("SOLOBS");
            //     this.oracleFormsBuiltins.last_record();
            //     this.VARIABLE.VAR_ESTADO = V_ESTADO;
            //     console.log("FORM_TRIGGER_FAILURE");
            //     throw new Error('FORM_TRIGGER_FAILURE');
            // }
            // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", CRTSOLICR.SOLICR_ESTSOL, "DC" + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
            this.CRTSOLICR.SOLICR_ESTSOL = "DC";
            this.CRTSOLICR.SOLICR_FECDEVO = PLSQLBuiltins.sysdate();
            // this.GLOBAL.ACTUALIZAR = "SI";
            this.oracleFormsBuiltins.commit_form();
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SOLICITUD DEVUELTA AL COMERCIAL ....", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODSOL");
        }
        else {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "SOLICITUD NO PUEDE SER DEVUELTA. SE ENCUENTRA EN ESTADO: " + CRTSOLICR.SOLICR_ESTSOL, null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_devolver_whenButtonPressed");
    }

    async CRFSOLCRE_crtsolicr_solicrObscom_keyNextItem() {
        // null;
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
    async CRFSOLCRE_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA, NO SE ACTUALIZARÁ EL REGISTRO ", null, null, null, T_RESPUESTA);
            // this.GLOBAL.ACTUALIZAR = "NO";
        }
        else if ((this.CRTSOLICR.SOLICR_PUNTS$ != null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
            // this.GLOBAL.ACTUALIZAR = "NO";
        }
        else if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
            // this.GLOBAL.ACTUALIZAR = "NO";
        }
        else if ((this.CRTSOLICR.SOLICR_PTOUS$ != null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EXISTE TASA VARIABLE IMPOSIBLE GRABAR TASA FIJA", null, null, null, T_RESPUESTA);
            // this.GLOBAL.ACTUALIZAR = "NO";
        }
        else {
            // this.GLOBAL.ACTUALIZAR = "SI";
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',"ENTERABLE","ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',"ENTERABLE","ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',"ENTERABLE","ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',"ENTERABLE","ATTR_OFF");
    //     ELSE
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',"ENTERABLE",ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',"ENTERABLE",ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',"ENTERABLE",ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',"ENTERABLE",ATTR_ON);
    //     END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTasa_postTextItem");
        if ((this.CRTSOLICR.SOLICR_TASA != null)) {
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "ENTERABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "ENTERABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "ENTERABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "UPDATEABLE", "ATTR_OFF");
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "ENTERABLE", "ATTR_OFF");
        }
        else {
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "UPDATEABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TPESOS", "ENTERABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "UPDATEABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PUNTS$", "ENTERABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "UPDATEABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_TDOLAR", "ENTERABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "UPDATEABLE", ATTR_ON);
            // CRFSOLCRE_SET_FIELD("CRTSOLICR.SOLICR_PTOUS$", "ENTERABLE", ATTR_ON);
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FNG IS NOT NULL THEN
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //   IF :CRTSOLICR.SOLICR_FNG <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   --ELSE (NO ES EXCLUYENTE)
    //       -- FRM$GARANTIAS_EQUIS ('FNG');   
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrFng_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrFng_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_FNG != null)) {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            if (this.CRTSOLICR.SOLICR_FNG != "X") {
                // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrFng_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrModint_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrModint_whenValidateItem");
        // if ((SOLICR_MODINT != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_MODINT", SOLICR_MODINT);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrmodint_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO DE MODALIDAD INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrModint_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrCiaseg_keyPrevItem() {
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
    async CRFSOLCRE_crtsolicr_solicrCiaseg_keyNextItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrCiaseg_keyNextItem");
        if ((this.CRTSOLICR.SOLICR_CIASEG != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CIASEG", this.CRTSOLICR.SOLICR_CIASEG);
            // call REST API
            const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrciaseg_keynextitem_query1", payload1);
            // get values from result
            this.CRTSOLICR.NONCIASEG = result1[0].get("CRTSOLICR.NONCIASEG");
        }
        else {
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_DEDESP");
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrCiaseg_keyNextItem");
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
    async CRFSOLCRE_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrIntven_whenValidateItem");
        // if ((SOLICR_INTVEN != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_INTVEN", SOLICR_INTVEN);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrIntven_whenValidateItem");
    }

    async CRFSOLCRE_crtsolicr_solicrComopr_keyNextItem() {
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
    async CRFSOLCRE_crtsolicr_solicrCtacod_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrCtacod_whenValidateItem");
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
        //     const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrctacod_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     CONTADOR = result1[0].get("CONTADOR");
        //     if (CONTADOR == 0) {
        //         // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CONTRATO INEXISTENTE ........", null, null, null, T_RESPUESTA);
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
        //         const result2 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrctacod_whenvalidateitem_query2", payload2);
        //         // get values from result
        //         ESTVI = result2[0].get("ESTVI");
        //         ESTRE = result2[0].get("ESTRE");
        //         if (result2 == null || result2.length == 0) {

        //         }

        //         if ((ESTVI != "VI" && ESTRE != "GR")) {
        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO DIFERENTE DE VIGENTE ........", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //             this.CRTSOLICR.SOLICR_CTAOFC = null;
        //             this.CRTSOLICR.SOLICR_CTATIP = null;
        //             this.CRTSOLICR.SOLICR_CTACOD = null;
        //         }
        //         else if ((ESTVI == "VI" && ["CJ", "CE"].indexOf(ESTRE) != -1)) {
        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "ESTADO DEL CONTRATO EN COBRO JURIDICO ........", null, null, null, T_RESPUESTA);
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
        //             const result3 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrctacod_whenvalidateitem_query3", payload3);
        //             // get values from result
        //             SOLICR_ACTAVA = result3[0].get("SOLICR_ACTAVA");
        //             if (result3 == null || result3.length == 0) {

        //             }

        //         }
        //     }
        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrCtacod_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrOrmonus$_whenValidateItem");
        // if ((SOLICR_ORMONET != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_ORMONUS", SOLICR_ORMONUS);
        //         // call REST API
        //         const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrOrmonus$_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrPdscto_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrPdscto_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PDSCTO == null ? 0 : this.CRTSOLICR.SOLICR_PDSCTO > 100) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE DESCUENTO DEBE SER INFERIOR AL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrPdscto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES E INDICADORES DE GESTIÓN.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 11 DE JULIO DE 2005
    //   --
    // :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // PCOMITE(:CRTSOLICR.SOLICR_TIPBIE ,:CRTSOLICR.SOLICR_MONTO ,:CRTSOLICR.SOLICR_ORMONET
    //        ,:CRTSOLICR.SOLICR_NITTER ,'CRTSOLICR.SOLICR_COMITE', 'CRTSOLICR.COMITE'); END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrMonto_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrMonto_whenValidateItem");
        // this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO - NVL(this.CRTSOLICR.SOLICR_CONEXT, 0);
        // CRFSOLCRE_PCOMITE(this.CRTSOLICR.SOLICR_TIPBIE, CRTSOLICR.SOLICR_MONTO, CRTSOLICR.SOLICR_ORMONET, CRTSOLICR.SOLICR_NITTER, "CRTSOLICR.SOLICR_COMITE", "CRTSOLICR.COMITE");
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrMonto_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //   IF :SOLICR_TPESOS IS NOT NULL THEN
    //    BEGIN
    //      SELECT TINDES
    //       INTO DESC1
    //      FROM TIN
    //      WHERE TINCOD=:SOLICR_TPESOS;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //    END; 
    //   END IF;
    // END;
    //#endregion
    async CRFSOLCRE_crtsolicr_solicrTpesos_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrTpesos_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // if ((SOLICR_TPESOS != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TPESOS", SOLICR_TPESOS);
        //     // call REST API
        //     const result1 = await Rest.post("/crfsolcre_crtsolicr/crfsolcre_crtsolicr_solicrtpesos_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESC1 = result1[0].get("DESC1");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrTpesos_whenValidateItem");
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
    async CRFSOLCRE_crtsolicr_solicrClasac_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtsolicr_solicrClasac_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["N", "U"].indexOf(this.CRTSOLICR.SOLICR_CLASAC) != -1) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE :(N) NUEVO (U) USADO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (this.CRTSOLICR.SOLICR_CLASAC == "N") {
            this.CRTSOLICR.ACTIVO = "NUEVO";
        }
        else {
            this.CRTSOLICR.ACTIVO = "USADO";
        }
        console.log("Exiting CRFSOLCRE_crtsolicr_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //  IF  :CTRSOLICR2.SOLICR_OBSREC IS NOT NULL AND :CRTSOLICR.SOLICR_ESTSOL = 'RE' THEN
    //   LIB$ALERTA('MENSAJE','NO ES PERMITIDO CAMBIAR LAS CONDICIONES DADAS PARA SER RECONSIDERADA ',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;  
    //  END IF; 
    // END;
    //#endregion
    async CRFSOLCRE_ctrsolicr2_preUpdate() {
        console.log("Entering CRFSOLCRE_ctrsolicr2_preUpdate");
        let T_RESPUESTA: number = null;
        // if (((this.CTRSOLICR2.SOLICR_OBSREC != null) && CRTSOLICR.SOLICR_ESTSOL == "RE")) {
        //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO CAMBIAR LAS CONDICIONES DADAS PARA SER RECONSIDERADA ", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFSOLCRE_ctrsolicr2_preUpdate");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2);
    //    ESTADO_NO_VALIDO  EXCEPTION;
    // 
    // BEGIN
    // IF :CTRSOLICR2.SOLICR_OBSREC IS NULL THEN
    //     LIB$ALERTA('MENSAJE', 'DEBE INGRESAR LOS CAMBIOS QUE SE DEBEN HACER EN LA SOLICITUD PARA PODERLA RECONSIDERAR...',NULL,NULL,NULL, T_RESPUESTA);
    //   ELSIF
    //     FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA RECONSIDERAR LA SOLICITUD') = 1 THEN
    //     PQBD_COL_SEGRECON.PBD_NVASOL(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL, :CRTSOLICR.SOLICR_CODUNI);
    //     COMMIT;
    //     ---INSERTA EL ESTADO ORIGINAL ANTES DE PASARLA A RE
    //     INSERT INTO CRTSOLESTOBS (SOBS_OFCSOL,SOBS_CODSOL,SOBS_ESTADO,SOBS_OBSERVACION,SOBS_FECREG,           
    //                               SOBS_USRCHANGE)
    //      VALUES (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_ESTSOL,'LA SOLICITUD PASO A SER RECONSIDERADA',
    //              SYSDATE,:BASE.USUARIO);
    //     :GLOBAL.ACTUALIZAR := 'SI';
    //     :CTRSOLICR2.SOLICR_ESTSOL:='RE';
    //     :CTRSOLICR2.SOLICR_FECREC := SYSDATE;
    //     COMMIT; 
    //     :GLOBAL.CODIGO:=:CTRSOLICR2.SOLICR_CODSOL;
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD HA SIDO RECONSIDERADA',NULL,NULL,NULL, T_RESPUESTA);
    //     HIDE_VIEW('CANVAS14');
    //     GO_ITEM('CRTSOLICR.SOLICR_OFCSOL');
    //     EXECUTE_QUERY;
    //     ELSE
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO RECONSIDERADA',NULL,NULL,NULL, T_RESPUESTA);
    //       HIDE_VIEW('CANVAS14');
    //       :CTRSOLICR2.SOLICR_OBSREC:=NULL;
    //       COMMIT;
    //       GO_BLOCK('CRTSOLICR');
    //       ENTER_QUERY;
    //     END IF;
    // 
    // END;
    //#endregion
    async CRFSOLCRE_ctrsolicr2_re_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_ctrsolicr2_re_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = null;
        let ESTADO_NO_VALIDO: null = null;
        if ((this.CTRSOLICR2.SOLICR_OBSREC == null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LOS CAMBIOS QUE SE DEBEN HACER EN LA SOLICITUD PARA PODERLA RECONSIDERAR...", null, null, null, T_RESPUESTA);
        }
        // else if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA RECONSIDERAR LA SOLICITUD") == 1) {
        //     // CRFSOLCRE_PQBD_COL_SEGRECON.PBD_NVASOL(this.CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_CODSOL, CRTSOLICR.SOLICR_CODUNI);
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.SOLICR_OFCSOL = : this.CRTSOLICR.SOLICR_OFCSOL;
        //     payload2.SOLICR_CODSOL = : this.CRTSOLICR.SOLICR_CODSOL;
        //     payload2.SOLICR_ESTSOL = : this.CRTSOLICR.SOLICR_ESTSOL;
        //     payload2.USUARIO = : BASE.USUARIO;
        //     // call REST API
        //     const result2 = await Rest.post("/crfsolcre_ctrsolicr2/crfsolcre_ctrsolicr2_re_whenbuttonpressed_query2", payload2);
        //     this.GLOBAL.ACTUALIZAR = "SI";
        //     this.CTRSOLICR2.SOLICR_ESTSOL = "RE";
        //     this.CTRSOLICR2.SOLICR_FECREC = PLSQLBuiltins.sysdate();
        //     this.GLOBAL.CODIGO = this.CTRSOLICR2.SOLICR_CODSOL;
        //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD HA SIDO RECONSIDERADA", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.hide_view("CANVAS14");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OFCSOL");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CRFSOLCRE_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO RECONSIDERADA", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.hide_view("CANVAS14");
        //     this.CTRSOLICR2.SOLICR_OBSREC = null;
        //     this.oracleFormsBuiltins.go_block("CRTSOLICR");
        //     this.oracleFormsBuiltins.enter_query();
        // }
        console.log("Exiting CRFSOLCRE_ctrsolicr2_re_whenButtonPressed");
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
    async CRFSOLCRE_crtterext_postInsert() {
        console.log("Entering CRFSOLCRE_crtterext_postInsert");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.SOLICR_OFCSOL = : this.CRTSOLICR.SOLICR_OFCSOL;
        // payload1.SOLICR_CODSOL = : this.CRTSOLICR.SOLICR_CODSOL;
        // payload1.TEREXT_NIT = : CRTTEREXT.TEREXT_NIT;
        // call REST API
        const result1 = await Rest.post("/crfsolcre_crtterext/crfsolcre_crtterext_postinsert_query1", payload1);
        if (result1 == null || result1.length == 0) {

            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "TERCERO NO ESTA CREADO .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLCRE_crtterext_postInsert");
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
    async CRFSOLCRE_crtterext_preInsert() {
        console.log("Entering CRFSOLCRE_crtterext_preInsert");
        let V_NUEVO_NIT: number = null;
        if ((this.CRTTEREXT.TEREXT_NIT == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crfsolcre_crtterext/crfsolcre_crtterext_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_NIT = result1[0].get("V_NUEVO_NIT");
                this.CRTTEREXT.TEREXT_NIT = V_NUEVO_NIT.toString();
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL");
            }

        }
        this.CRTTEREXT.TEREXT_TIPID = "NE";
        this.CRTTEREXT.TEREXT_TIPPER = "J";
        console.log("Exiting CRFSOLCRE_crtterext_preInsert");
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
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFSOLCRE_crtterext_terextCodpais_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtterext_terextCodpais_whenValidateItem");
        if ((this.CRTTEREXT.TEREXT_NIT != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TEREXT_CODPAIS", this.CRTTEREXT.TEREXT_CODPAIS);
                // call REST API
                const result1 = await Rest.post("/crfsolcre_crtterext/crfsolcre_crtterext_terextcodpais_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // CRFSOLCRE_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFSOLCRE_crtterext_terextCodpais_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_toolbar_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_toolbar_whenButtonPressed");
        console.log("Exiting CRFSOLCRE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_toolbar_whenMouseLeave() {
        console.log("Entering CRFSOLCRE_toolbar_whenMouseLeave");
        console.log("Exiting CRFSOLCRE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSOLCRE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFSOLCRE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN :VOLVER:='MENU ANT'; END;
    //#endregion
    async CRFSOLCRE_ppal_postQuery() {
        console.log("Entering CRFSOLCRE_ppal_postQuery");
        this.PPAL.VOLVER = "MENU ANT";
        console.log("Exiting CRFSOLCRE_ppal_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC1   := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL1:= :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL1   := :CRTSOLICR.SOLICR_ESTSOL;
    //     COMMIT_FORM;
    //     GO_ITEM ('CRTSOLICR.SOLICR_BCODEX');
    // END;
    //#endregion
    async CRFSOLCRE_ppal_redesctos_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_redesctos_whenMouseClick");
        this.VARIABLE.OFC1 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL1 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL1 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_BCODEX");
        console.log("Exiting CRFSOLCRE_ppal_redesctos_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC5    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL5 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL5 := :CRTSOLICR.SOLICR_ESTSOL;
    //     COMMIT_FORM;
    //     GO_ITEM  ('CRTSOLICR.SOLICR_OBSECR');
    // END;
    //#endregion
    async CRFSOLCRE_ppal_credto_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_credto_whenMouseClick");
        this.VARIABLE.OFC5 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL5 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL5 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_OBSECR");
        console.log("Exiting CRFSOLCRE_ppal_credto_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //      COMMIT_FORM;
    //      GO_BLOCK('CRTSOLICR');
    // END;
    //#endregion
    async CRFSOLCRE_ppal_infGrl_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_infGrl_whenMouseClick");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFSOLCRE_ppal_infGrl_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     GO_ITEM ('SOLICR_CIASEG');
    //     :VARIABLE.OFC2   := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL2:= :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL2   := :CRTSOLICR.SOLICR_ESTSOL;
    // END;
    //#endregion
    async CRFSOLCRE_ppal_segImp_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_segImp_whenMouseClick");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_CIASEG");
        this.VARIABLE.OFC2 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL2 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL2 = this.CRTSOLICR.SOLICR_ESTSOL;
        console.log("Exiting CRFSOLCRE_ppal_segImp_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //    :VARIABLE.CODOFI10  := :CRTSOLICR.SOLICR_OFCSOL;
    //    :VARIABLE.CODSOL10  := :CRTSOLICR.SOLICR_CODSOL;
    //    :VARIABLE.ESTSOL10  := :CRTSOLICR.SOLICR_ESTSOL;
    //    COMMIT_FORM;
    //    GO_BLOCK('VARIABLE');  
    //    GO_ITEM ('CRTSOLICR.SOLICR_FECRADI');
    // END;
    //#endregion
    async CRFSOLCRE_ppal_estudio_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_estudio_whenMouseClick");
        this.VARIABLE.CODOFI10 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL10 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL10 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_FECRADI");
        console.log("Exiting CRFSOLCRE_ppal_estudio_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --DECLARE
    // -- OP_PAPA VLTOPCIO.OPCION_CODPAD%TYPE;
    // BEGIN
    //        SHOW_VIEW('CANVAS1');
    // END;
    // PU_LLAMAR_VARCUAL(:CRTSOLICR.SOLICR_NITTER,'Q'); END;
    //#endregion
    async CRFSOLCRE_ppal_varCualit_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_varCualit_whenMouseClick");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        // CRFSOLCRE_PU_LLAMAR_VARCUAL(this.CRTSOLICR.SOLICR_NITTER, "Q");
        console.log("Exiting CRFSOLCRE_ppal_varCualit_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //        SHOW_VIEW('CANVAS1');
    // END;
    //#endregion
    async CRFSOLCRE_ppal_volver_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_volver_whenMouseClick");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        console.log("Exiting CRFSOLCRE_ppal_volver_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.CODOFI8     := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL8  := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL8  := :CRTSOLICR.SOLICR_ESTSOL;
    //     COMMIT_FORM;
    //     GO_BLOCK('VARIABLE');
    // 
    // END;
    //#endregion
    async CRFSOLCRE_ppal_oTerceros_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_oTerceros_whenMouseClick");
        this.VARIABLE.CODOFI8 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL8 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL8 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFSOLCRE_ppal_oTerceros_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //     :VARIABLE.OFC3    := :CRTSOLICR.SOLICR_OFCSOL;
    //     :VARIABLE.CODSOL3 := :CRTSOLICR.SOLICR_CODSOL;
    //     :VARIABLE.ESTSOL3 := :CRTSOLICR.SOLICR_ESTSOL;
    //     COMMIT_FORM;
    //     GO_ITEM ('SOLICR_GTIREC');
    // END;
    //#endregion
    async CRFSOLCRE_ppal_gtiasAd_whenMouseClick() {
        console.log("Entering CRFSOLCRE_ppal_gtiasAd_whenMouseClick");
        this.VARIABLE.OFC3 = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.CODSOL3 = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.ESTSOL3 = this.CRTSOLICR.SOLICR_ESTSOL;
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.go_item("SOLICR_GTIREC");
        console.log("Exiting CRFSOLCRE_ppal_gtiasAd_whenMouseClick");
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
    async CRFSOLCRE_crtotersol1_postTextItem() {
        console.log("Entering CRFSOLCRE_crtotersol1_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFSOLCRE_FRM$AUDIT_SOLIC_ADD_ROW(CRTOTERSOL1.OTERSOL_OFCSOL, CRTOTERSOL1.OTERSOL_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFSOLCRE_crtotersol1_postTextItem");
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
    async CRFSOLCRE_crtotersol1_keyEntqry() {
        console.log("Entering CRFSOLCRE_crtotersol1_keyEntqry");
        console.log("Exiting CRFSOLCRE_crtotersol1_keyEntqry");
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
    async CRFSOLCRE_crtotersol1_keyDelrec() {
        console.log("Entering CRFSOLCRE_crtotersol1_keyDelrec");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR.SOLICR_CODREC == null)) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "NO ES PERMITIDO BORRAR REGISTROS DE LA SOLICITUD", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFSOLCRE_crtotersol1_keyDelrec");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFSOLCRE_crtotersol1_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtotersol1_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFSOLCRE_crtotersol1_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCRE_crtotersol1_preQuery() {
        console.log("Entering CRFSOLCRE_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCRE_crtotersol1_preQuery");
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
    async CRFSOLCRE_crtotersol1_postUpdate() {
        console.log("Entering CRFSOLCRE_crtotersol1_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: null = null;
        let RG_INDICE: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        if ((!this.oracleFormsBuiltins.id_null(RG_ID))) {
            RG_INDICE = this.oracleFormsBuiltins.get_group_row_count(RG_ID);
            if (RG_INDICE > 0) {
                // CRFSOLCRE_FRM$AUDIT_SOLIC_INSERT();
            }
        }
        console.log("Exiting CRFSOLCRE_crtotersol1_postUpdate");
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
    async CRFSOLCRE_crtotersol1_keyClrblk() {
        console.log("Entering CRFSOLCRE_crtotersol1_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        if (this._SYSTEM_SERVICE.get("BLOCK_STATUS") != "CHANGED") {
            // CRFSOLCRE_FRM$AUDIT_SOLIC_DEL();
        }
        console.log("Exiting CRFSOLCRE_crtotersol1_keyClrblk");
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
    async CRFSOLCRE_crtotersol1_postRecord() {
        console.log("Entering CRFSOLCRE_crtotersol1_postRecord");
        console.log("Exiting CRFSOLCRE_crtotersol1_postRecord");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFSOLCRE_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFSOLCRE_crtotersol1_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFSOLCRE_crtotersol1_whenNewBlockInstance");
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
    async CRFSOLCRE_crtotersol1_postQuery() {
        console.log("Entering CRFSOLCRE_crtotersol1_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcre_crtotersol1/crfsolcre_crtotersol1_postquery_query1", payload1);
        // get values from result
        this.CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "TERCERO AÚN NO CREADO. DEBE CREARLO PARA CONTINUAR .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLCRE_crtotersol1_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODSOL:=:CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL:=:CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFSOLCRE_crtotersol1_preInsert() {
        console.log("Entering CRFSOLCRE_crtotersol1_preInsert");
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFSOLCRE_crtotersol1_preInsert");
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
    async CRFSOLCRE_crtotersol1_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtotersol1_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTOTERSOL1.OTERSOL_GIRDIR == null ? 0 : this.CRTOTERSOL1.OTERSOL_GIRDIR > 100) {
            // CRFSOLCRE_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE GIRO DIRECTO NO DEBE SUPERAR EL 100% ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSOLCRE_crtotersol1_otersolGirdir_whenValidateItem");
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
    async CRFSOLCRE_crtotersol1_otersolNitter_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtotersol1_otersolNitter_whenValidateItem");
        let T_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcre_crtotersol1/crfsolcre_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
        // get values from result
        T_EXISTE = result1[0].get("T_EXISTE");
        if (T_EXISTE > 0) {
            this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_OFF");
            // construct payload
            let payload2 = new Map();
            payload2.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result2 = await Rest.post("/crfsolcre_crtotersol1/crfsolcre_crtotersol1_otersolnitter_whenvalidateitem_query2", payload2);
            // get values from result
            this.CRTOTERSOL1.NOMBRE = result2[0].get("CRTOTERSOL1.NOMBRE");
            this.CRTOTERSOL1.OTERSOL_TIPPER = result2[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            this.CRTOTERSOL1.OTERSOL_TIPIDE = result2[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
        }
        else {
            // CRFSOLCRE_MSG_ALERT("TERCERO INEXISTENTE. DEBE CREARLO  .....", "I", FALSE);
            this.oracleFormsBuiltins.set_item_property("VARIABLE.CRTER", "ENABLED", "ATTR_ON");
        }
        console.log("Exiting CRFSOLCRE_crtotersol1_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OTERSOL_NITTER'); END;
    //#endregion
    async CRFSOLCRE_crtotersol1_otersolOfcsol_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_crtotersol1_otersolOfcsol_whenNewItemInstance");
        this.oracleFormsBuiltins.go_item("OTERSOL_NITTER");
        console.log("Exiting CRFSOLCRE_crtotersol1_otersolOfcsol_whenNewItemInstance");
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
    async CRFSOLCRE_crtotersol1_otersolTipper_whenValidateItem() {
        console.log("Entering CRFSOLCRE_crtotersol1_otersolTipper_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolcre_crtotersol1/crfsolcre_crtotersol1_otersoltipper_whenvalidateitem_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFSOLCRE_MSG_ALERT("TERCERO INEXISTENTE. DEBE CREARLO  .....", "I", FALSE);
        }

        console.log("Exiting CRFSOLCRE_crtotersol1_otersolTipper_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  VMOE CRTMOESSO%ROWTYPE;
    // BEGIN
    //  NULL;
    // /* IF :SOLOBS.SOBS_MOTEST IS NOT NULL THEN
    //    PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO, :SOLOBS.SOBS_MOTEST, VMOE);
    //   END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      LIB$DTNERFRMA('EL MOTIVO '||TO_CHAR(:SOLOBS.SOBS_MOTEST)||' DEL ESTADO '
    //                  ||:SOLOBS.SOBS_ESTADO||' NO EXISTE');*/
    // END;
    //#endregion
    async CRFSOLCRE_solobs_whenValidateRecord() {
        console.log("Entering CRFSOLCRE_solobs_whenValidateRecord");
        let VMOE: null = null;
        console.log("Exiting CRFSOLCRE_solobs_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN :SOLOBS.SOBS_FECREG    := SYSDATE;
    // :SOLOBS.SOBS_USRCHANGE := PLSQLBuiltins.user(); END;
    //#endregion
    async CRFSOLCRE_solobs_whenCreateRecord() {
        console.log("Entering CRFSOLCRE_solobs_whenCreateRecord");
        // this.SOLOBS.SOBS_FECREG = PLSQLBuiltins.sysdate();
        this.SOLOBS.SOBS_USRCHANGE = PLSQLBuiltins.user();
        console.log("Exiting CRFSOLCRE_solobs_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  VMOE CRTMOESSO%ROWTYPE;
    // BEGIN
    //  NULL;
    // /* IF :SOLOBS.SOBS_MOTEST IS NOT NULL THEN
    //    PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO, :SOLOBS.SOBS_MOTEST, VMOE);
    //     :SOLOBS.MOTEST_DES := VMOE.MOESSO_DESCRI;
    //   END IF;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      NULL;*/
    // END;
    //#endregion
    async CRFSOLCRE_solobs_postQuery() {
        console.log("Entering CRFSOLCRE_solobs_postQuery");
        let VMOE: null = null;
        console.log("Exiting CRFSOLCRE_solobs_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :SOLOBS.SOBS_ESTADO IS NULL THEN
    //    :SOLOBS.SOBS_ESTADO    := :VARIABLE.VAR_ESTADO;
    //    :VARIABLE.VAR_ESTADO   := NULL;
    // END IF; END;
    //#endregion
    async CRFSOLCRE_solobs_sobsEstado_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_solobs_sobsEstado_whenNewItemInstance");
        if ((this.SOLOBS.SOBS_ESTADO == null)) {
            this.SOLOBS.SOBS_ESTADO = this.VARIABLE.VAR_ESTADO;
            this.VARIABLE.VAR_ESTADO = null;
        }
        console.log("Exiting CRFSOLCRE_solobs_sobsEstado_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.VAR_ESTADO IS NOT NULL OR
    //    :CRTSOLICR.SOLICR_ESTSOL = 'EC' 
    // THEN 
    //    :CRTSOLICR.SOLICR_OBSECR := :SOLOBS.SOBS_OBSERVACION;
    // END IF; END;
    //#endregion
    async CRFSOLCRE_solobs_btnCopiar_whenButtonPressed() {
        console.log("Entering CRFSOLCRE_solobs_btnCopiar_whenButtonPressed");
        if (((this.VARIABLE.VAR_ESTADO != null) || this.CRTSOLICR.SOLICR_ESTSOL == "EC")) {
            this.CRTSOLICR.SOLICR_OBSECR = this.SOLOBS.SOBS_OBSERVACION;
        }
        console.log("Exiting CRFSOLCRE_solobs_btnCopiar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    //  VMOES CRTMOESSO%ROWTYPE;
    //  VTEMP  NUMBER;
    // BEGIN
    //  NULL;
    // /* PQBD_COL_GEN.PMOESSO(:SOLOBS.SOBS_ESTADO,VMOES);
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
    //      NULL;*/
    // END;
    //#endregion
    async CRFSOLCRE_solobs_sobsMotest_whenValidateItem() {
        console.log("Entering CRFSOLCRE_solobs_sobsMotest_whenValidateItem");
        let VBOTON: number = null;
        let VMOES: null = null;
        let VTEMP: number = null;
        console.log("Exiting CRFSOLCRE_solobs_sobsMotest_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLCRE_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSOLCRE_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFSOLCRE_base_fecha_whenNewItemInstance");
    }

}

