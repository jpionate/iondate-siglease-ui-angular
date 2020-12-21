import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFNIXGR business logic
import {
    TOOLBAR,
    SETNITXGR,
    BASE
} from "./SEFNIXGR_models";



// class SEFNIXGR
@Component({
    selector: 'app-sefnixgr',
    templateUrl: './sefnixgr.component.html',
})
export class SefnixgrComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public SETNITXGR: SETNITXGR = new SETNITXGR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async SEFNIXGR_keyPrevItem() {
        console.log("Entering SEFNIXGR_keyPrevItem");
        // SEFNIXGR_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting SEFNIXGR_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFNIXGR_keyDelrec() {
        console.log("Entering SEFNIXGR_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFNIXGR_keyDelrec");
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
    async SEFNIXGR_whenNewItemInstance() {
        console.log("Entering SEFNIXGR_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        // if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //     SEFNIXGR_PREVIOUS_FIELD();
        // }
        // else {
        //     SEFNIXGR_NEXT_FIELD();
        // }
        // }
        console.log("Exiting SEFNIXGR_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_onError() {
        console.log("Entering SEFNIXGR_onError");
        console.log("Exiting SEFNIXGR_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async SEFNIXGR_keyCrerec() {
        console.log("Entering SEFNIXGR_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting SEFNIXGR_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async SEFNIXGR_keyEnter() {
        console.log("Entering SEFNIXGR_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting SEFNIXGR_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFNIXGR_keyCommit() {
        console.log("Entering SEFNIXGR_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFNIXGR_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFNIXGR_keyNextItem() {
        console.log("Entering SEFNIXGR_keyNextItem");
        // SEFNIXGR_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFNIXGR_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async SEFNIXGR_keyDown() {
        console.log("Entering SEFNIXGR_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting SEFNIXGR_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFNIXGR_keyEntqry() {
        console.log("Entering SEFNIXGR_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFNIXGR_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_whenMouseDoubleclick() {
        console.log("Entering SEFNIXGR_whenMouseDoubleclick");
        console.log("Exiting SEFNIXGR_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_onMessage() {
        console.log("Entering SEFNIXGR_onMessage");
        console.log("Exiting SEFNIXGR_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async SEFNIXGR_keyOthers() {
        console.log("Entering SEFNIXGR_keyOthers");
        console.log("Exiting SEFNIXGR_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_preForm() {
        console.log("Entering SEFNIXGR_preForm");
        console.log("Exiting SEFNIXGR_preForm");
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
    // 
    // ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // 
    // BEGIN 
    //     
    //  IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN 
    //    BEGIN
    //      SELECT COMPAN_NOLOGF 
    //        INTO V_IMAGEN
    //        FROM SGCOMPAN 
    //       WHERE COMPAN_CODCOM=:this.PARAMETER.get("P_OFICINA");
    //    EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       V_IMAGEN:='LOGO_LEASFORM.GIF';
    //    END;   
    // 
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.LOGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
    //  END IF;
    // END;
    // --------------------------------------------------------------------
    //#endregion
    async SEFNIXGR_whenNewFormInstance() {
        console.log("Entering SEFNIXGR_whenNewFormInstance");
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
        let V_IMAGEN: string = null;
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
            // call REST API
            const result1 = await Rest.post("/sefnixgr/sefnixgr_whennewforminstance_query1", payload1);
            // get values from result
            V_IMAGEN = result1[0].get("V_IMAGEN");
            if (result1 == null || result1.length == 0) {

                V_IMAGEN = "LOGO_LEASFORM.GIF";
            }

            this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.LOGO");
        }
        else {
            this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.LOGO");
        }
        console.log("Exiting SEFNIXGR_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async SEFNIXGR_keyUp() {
        console.log("Entering SEFNIXGR_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting SEFNIXGR_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFNIXGR_keyExeqry() {
        console.log("Entering SEFNIXGR_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFNIXGR_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async SEFNIXGR_keyListval() {
        console.log("Entering SEFNIXGR_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting SEFNIXGR_keyListval");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_toolbar_whenButtonPressed() {
        console.log("Entering SEFNIXGR_toolbar_whenButtonPressed");
        console.log("Exiting SEFNIXGR_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_toolbar_whenMouseLeave() {
        console.log("Entering SEFNIXGR_toolbar_whenMouseLeave");
        console.log("Exiting SEFNIXGR_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_toolbar_whenNewFormInstance() {
        console.log("Entering SEFNIXGR_toolbar_whenNewFormInstance");
        console.log("Exiting SEFNIXGR_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFNIXGR_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFNIXGR_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFNIXGR_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFNIXGR_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFNIXGR_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async SEFNIXGR_setnitxgr_whenValidateRecord() {
        console.log("Entering SEFNIXGR_setnitxgr_whenValidateRecord");
        console.log("Exiting SEFNIXGR_setnitxgr_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async SEFNIXGR_setnitxgr_keyExit() {
        console.log("Entering SEFNIXGR_setnitxgr_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting SEFNIXGR_setnitxgr_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async SEFNIXGR_setnitxgr_keyPrvblk() {
        console.log("Entering SEFNIXGR_setnitxgr_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting SEFNIXGR_setnitxgr_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN IF :SETNITXGR.NITXGR_ESTADO NOT IN ('A','I') THEN
    //  MESSAGE('INGRESE PARA ACTIVAR A O PARA INACTIVAR I');
    //  MESSAGE('INGRESE PARA ACTIVAR A O PARA INACTIVAR I');
    //  RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFNIXGR_setnitxgr_nitxgrEstado_whenValidateItem() {
        console.log("Entering SEFNIXGR_setnitxgr_nitxgrEstado_whenValidateItem");
        if (["A", "I"].indexOf(this.SETNITXGR.NITXGR_ESTADO) != -1) {
            this.oracleFormsBuiltins.message("INGRESE PARA ACTIVAR A O PARA INACTIVAR I");
            this.oracleFormsBuiltins.message("INGRESE PARA ACTIVAR A O PARA INACTIVAR I");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFNIXGR_setnitxgr_nitxgrEstado_whenValidateItem");
    }

}

