import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFDIRECC business logic
import {
    SETHOMODIR,
    BLOCK12,
    TOOLBAR,
    BASE
} from "./SEFDIRECC_models";



// class SEFDIRECC
@Component({
    selector: 'app-sefdirecc',
    templateUrl: './sefdirecc.component.html',
})
export class SefdireccComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETHOMODIR: SETHOMODIR = new SETHOMODIR();
    public BLOCK12: BLOCK12 = new BLOCK12();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async SEFDIRECC_keyPrevItem() {
        console.log("Entering SEFDIRECC_keyPrevItem");
        //SEFDIRECC_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting SEFDIRECC_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFDIRECC_keyEntqry() {
        console.log("Entering SEFDIRECC_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFDIRECC_keyEntqry");
    }

    //#region PLSQL
    // BEGIN
    //   IF PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD,"AUTO_SKIP")='TRUE' THEN
    //     IF :GLOBAL.RECORD_DIRECTION='PREVIOUS' THEN
    //       PREVIOUS_FIELD;
    //      ELSE
    //        NEXT_FIELD;
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async SEFDIRECC_whenNewItemInstance() {
        console.log("Entering SEFDIRECC_whenNewItemInstance");
        if (PLSQLBuiltins.field_characteristic(this._SYSTEM_SERVICE.get("TRIGGER_FIELD"), "AUTO_SKIP") == "TRUE") {
            if (this._GLOBAL_SERVICE.get("RECORD_DIRECTION") == "PREVIOUS") {
                //SEFDIRECC_PREVIOUS_FIELD();
            }
            else {
                //SEFDIRECC_NEXT_FIELD();
            }
        }
        console.log("Exiting SEFDIRECC_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_onError() {
        console.log("Entering SEFDIRECC_onError");
        console.log("Exiting SEFDIRECC_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_whenMouseDoubleclick() {
        console.log("Entering SEFDIRECC_whenMouseDoubleclick");
        console.log("Exiting SEFDIRECC_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_onMessage() {
        console.log("Entering SEFDIRECC_onMessage");
        console.log("Exiting SEFDIRECC_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_preForm() {
        console.log("Entering SEFDIRECC_preForm");
        console.log("Exiting SEFDIRECC_preForm");
    }

    //#region PLSQL
    // BEGIN  
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFDIRECC_whenNewFormInstance() {
        console.log("Entering SEFDIRECC_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFDIRECC_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFDIRECC_keyExeqry() {
        console.log("Entering SEFDIRECC_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFDIRECC_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFDIRECC_keyCommit() {
        console.log("Entering SEFDIRECC_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFDIRECC_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFDIRECC_keyNextItem() {
        console.log("Entering SEFDIRECC_keyNextItem");
        //SEFDIRECC_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFDIRECC_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // V_RES BOOLEAN;
    // ALERT_ID   ALERT := FIND_ALERT('SI_NO');
    // ALERT_BUTTON   NUMBER := 2;
    // BEGIN
    //  --RECORDATORIO
    //  MSG_ALERT('RECUERDE QUE LA CAPTURA EN SIGLEASE SE HACE POR MEDIO DE LA NOMENCLATURA TIPO DIAN', 'I', FALSE);
    //  --VERIFICACION PARA TODOS LOS CODIGOS NULOS
    //  IF :HOMODIR_COD IS NULL AND :HOMODIR_DANE IS NULL AND :HOMODIR_RUNT IS NULL THEN
    //   MSG_ALERT('POR FAVOR INGRESE LAS SIGLAS CORRESPONDIENTES', 'F', FALSE);
    //   GO_ITEM('HOMODIR_COD');
    //  END IF;
    //  --VERIFICACIÓN CODIGO DIAN Y TIPO
    //  IF :HOMODIR_COD IS NULL AND :HOMODIR_TIPO IS NOT NULL THEN
    //   IF NOT ID_NULL(ALERT_ID) THEN
    //      SET_ALERT_PROPERTY(ALERT_ID, ALERT_MESSAGE_TEXT, '¿ESTE ELEMENTO TIENE NOMENCLATURA EN LA DIAN?');
    //      ALERT_BUTTON :=  SHOW_ALERT(ALERT_ID);
    //     END IF;
    //   IF ALERT_BUTTON = ALERT_BUTTON1 THEN
    //    MSG_ALERT('POR FAVOR INGRESE LAS SIGLAS CORRESPONDIENTES', 'I', FALSE);
    //    GO_ITEM('HOMODIR_COD');
    //   ELSE
    //    MSG_ALERT('NO SE PUEDE APLICAR UNA CATEGORIA A UN ELEMENTO QUE NO PERTENEZCA A LA DIAN', 'I', FALSE);
    //    :HOMODIR_TIPO := NULL;
    //    GO_ITEM('HOMODIR_DES');
    //   END IF;
    //   GO_ITEM('HOMODIR_TIPO');
    //  END IF;
    //  -- SIN DESCRIPCION
    //  IF :HOMODIR_DES IS NULL THEN
    //   MSG_ALERT('POR FAVOR INGRESE LA DESCRIPCIÓN', 'F', FALSE);
    //   GO_ITEM('HOMODIR_DES');
    //  END IF;
    //  -- SIN TIPO
    //  IF :HOMODIR_COD IS NOT NULL AND :HOMODIR_TIPO IS NULL THEN
    //   MSG_ALERT('POR FAVOR INGRESE LA CATEGORÍA', 'F', FALSE);
    //   GO_ITEM('HOMODIR_TIPO');
    //   V_RES := SHOW_LOV('LOV1');
    //  END IF;
    // END;
    //#endregion
    async SEFDIRECC_sethomodir_keyCommit() {
        console.log("Entering SEFDIRECC_sethomodir_keyCommit");
        let V_RES: boolean = null;
        //let ALERT_ID: null = FIND_ALERT('SI_NO');
        let ALERT_BUTTON: number = 2;
        //SEFDIRECC_MSG_ALERT("RECUERDE QUE LA CAPTURA EN SIGLEASE SE HACE POR MEDIO DE LA NOMENCLATURA TIPO DIAN", "I", FALSE);
        // if ((((HOMODIR_COD == null) && (HOMODIR_DANE == null)) && (HOMODIR_RUNT == null))) {
        //     SEFDIRECC_MSG_ALERT("POR FAVOR INGRESE LAS SIGLAS CORRESPONDIENTES", "F", FALSE);
        //     this.oracleFormsBuiltins.go_item("HOMODIR_COD");
        // }
        // if (((HOMODIR_COD == null) && (HOMODIR_TIPO != null))) {
        //     if ((!this.oracleFormsBuiltins.id_null(ALERT_ID))) {
        //         this.oracleFormsBuiltins.set_alert_property(ALERT_ID, ALERT_MESSAGE_TEXT, "¿ESTE ELEMENTO TIENE NOMENCLATURA EN LA DIAN?");
        //         ALERT_BUTTON = this.oracleFormsBuiltins.show_alert(ALERT_ID);
        //     }
        //     if (ALERT_BUTTON == ALERT_BUTTON1) {
        //         SEFDIRECC_MSG_ALERT("POR FAVOR INGRESE LAS SIGLAS CORRESPONDIENTES", "I", FALSE);
        //         this.oracleFormsBuiltins.go_item("HOMODIR_COD");
        //     }
        //     else {
        //         SEFDIRECC_MSG_ALERT("NO SE PUEDE APLICAR UNA CATEGORIA A UN ELEMENTO QUE NO PERTENEZCA A LA DIAN", "I", FALSE);
        //         this.SETHOMODIR.HOMODIR_TIPO = null;
        //         this.oracleFormsBuiltins.go_item("HOMODIR_DES");
        //     }
        //     this.oracleFormsBuiltins.go_item("HOMODIR_TIPO");
        // }
        // if ((HOMODIR_DES == null)) {
        //     SEFDIRECC_MSG_ALERT("POR FAVOR INGRESE LA DESCRIPCIÓN", "F", FALSE);
        //     this.oracleFormsBuiltins.go_item("HOMODIR_DES");
        // }
        // if (((HOMODIR_COD != null) && (HOMODIR_TIPO == null))) {
        //     SEFDIRECC_MSG_ALERT("POR FAVOR INGRESE LA CATEGORÍA", "F", FALSE);
        //     this.oracleFormsBuiltins.go_item("HOMODIR_TIPO");
        //     V_RES = this.oracleFormsBuiltins.show_lov("LOV1");
        // }
        console.log("Exiting SEFDIRECC_sethomodir_keyCommit");
    }

    //#region PLSQL
    // BEGIN EXPORTAR; END;
    //#endregion
    async SEFDIRECC_block12_exportar_whenButtonPressed() {
        console.log("Entering SEFDIRECC_block12_exportar_whenButtonPressed");
        //SEFDIRECC_EXPORTAR();
        console.log("Exiting SEFDIRECC_block12_exportar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_toolbar_whenButtonPressed() {
        console.log("Entering SEFDIRECC_toolbar_whenButtonPressed");
        console.log("Exiting SEFDIRECC_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_toolbar_whenMouseLeave() {
        console.log("Entering SEFDIRECC_toolbar_whenMouseLeave");
        console.log("Exiting SEFDIRECC_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_toolbar_whenNewFormInstance() {
        console.log("Entering SEFDIRECC_toolbar_whenNewFormInstance");
        console.log("Exiting SEFDIRECC_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFDIRECC_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFDIRECC_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFDIRECC_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFDIRECC_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFDIRECC_toolbar_lastr_whenButtonPressed");
    }

}

