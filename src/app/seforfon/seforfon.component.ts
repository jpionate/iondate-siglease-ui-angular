import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFORFON business logic
import {
    TOOLBAR,
    SETORIGEN,
    BASE
} from "./SEFORFON_models";



// class SEFORFON
@Component({
    selector: 'app-seforfon',
    templateUrl: './seforfon.component.html',
})
export class SeforfonComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public SETORIGEN: SETORIGEN = new SETORIGEN();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async SEFORFON_keyPrevItem() {
        console.log("Entering SEFORFON_keyPrevItem");
        // SEFORFON_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting SEFORFON_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFORFON_keyDelrec() {
        console.log("Entering SEFORFON_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFORFON_keyDelrec");
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
    async SEFORFON_whenNewItemInstance() {
        console.log("Entering SEFORFON_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         SEFORFON_PREVIOUS_FIELD();
        //     }
        //     else {
        //         SEFORFON_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting SEFORFON_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_onError() {
        console.log("Entering SEFORFON_onError");
        console.log("Exiting SEFORFON_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async SEFORFON_keyCrerec() {
        console.log("Entering SEFORFON_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting SEFORFON_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async SEFORFON_keyEnter() {
        console.log("Entering SEFORFON_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting SEFORFON_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFORFON_keyCommit() {
        console.log("Entering SEFORFON_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFORFON_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORFON_keyNextItem() {
        console.log("Entering SEFORFON_keyNextItem");
        // SEFORFON_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFORFON_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async SEFORFON_keyDown() {
        console.log("Entering SEFORFON_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting SEFORFON_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFORFON_keyEntqry() {
        console.log("Entering SEFORFON_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFORFON_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_whenMouseDoubleclick() {
        console.log("Entering SEFORFON_whenMouseDoubleclick");
        console.log("Exiting SEFORFON_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_onMessage() {
        console.log("Entering SEFORFON_onMessage");
        console.log("Exiting SEFORFON_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async SEFORFON_keyOthers() {
        console.log("Entering SEFORFON_keyOthers");
        console.log("Exiting SEFORFON_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_preForm() {
        console.log("Entering SEFORFON_preForm");
        console.log("Exiting SEFORFON_preForm");
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
    async SEFORFON_whenNewFormInstance() {
        console.log("Entering SEFORFON_whenNewFormInstance");
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
            const result1 = await Rest.post("/seforfon/seforfon_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFORFON_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async SEFORFON_keyUp() {
        console.log("Entering SEFORFON_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting SEFORFON_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFORFON_keyExeqry() {
        console.log("Entering SEFORFON_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFORFON_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async SEFORFON_keyListval() {
        console.log("Entering SEFORFON_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting SEFORFON_keyListval");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_toolbar_whenButtonPressed() {
        console.log("Entering SEFORFON_toolbar_whenButtonPressed");
        console.log("Exiting SEFORFON_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_toolbar_whenMouseLeave() {
        console.log("Entering SEFORFON_toolbar_whenMouseLeave");
        console.log("Exiting SEFORFON_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_toolbar_whenNewFormInstance() {
        console.log("Entering SEFORFON_toolbar_whenNewFormInstance");
        console.log("Exiting SEFORFON_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFORFON_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFORFON_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORFON_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFORFON_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFORFON_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async SEFORFON_setorigen_whenValidateRecord() {
        console.log("Entering SEFORFON_setorigen_whenValidateRecord");
        console.log("Exiting SEFORFON_setorigen_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async SEFORFON_setorigen_keyExit() {
        console.log("Entering SEFORFON_setorigen_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting SEFORFON_setorigen_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async SEFORFON_setorigen_keyPrvblk() {
        console.log("Entering SEFORFON_setorigen_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting SEFORFON_setorigen_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN IF :SETORIGEN.ORIGEN_ESTADO NOT IN ('A','I') THEN
    //  MESSAGE('INGRESE PARA ACTIVAR A O PARA INACTIVAR I');
    //  MESSAGE('INGRESE PARA ACTIVAR A O PARA INACTIVAR I');
    //  RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFORFON_setorigen_origenEstado_whenValidateItem() {
        console.log("Entering SEFORFON_setorigen_origenEstado_whenValidateItem");
        if (["A", "I"].indexOf(this.SETORIGEN.ORIGEN_ESTADO) != -1) {
            this.oracleFormsBuiltins.message("INGRESE PARA ACTIVAR A O PARA INACTIVAR I");
            this.oracleFormsBuiltins.message("INGRESE PARA ACTIVAR A O PARA INACTIVAR I");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFORFON_setorigen_origenEstado_whenValidateItem");
    }

}

