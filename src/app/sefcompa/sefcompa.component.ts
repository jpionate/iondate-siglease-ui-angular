import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFCOMPA business logic
import {
    AGEMAN01,
    TOOLBAR,
    BASE
} from "./SEFCOMPA_models";



// class SEFCOMPA
@Component({
    selector: 'app-sefcompa',
    templateUrl: './sefcompa.component.html',
})
export class SefcompaComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public AGEMAN01: AGEMAN01 = new AGEMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async SEFCOMPA_keyPrevItem() {
        console.log("Entering SEFCOMPA_keyPrevItem");
        // SEFCOMPA_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting SEFCOMPA_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFCOMPA_keyDelrec() {
        console.log("Entering SEFCOMPA_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFCOMPA_keyDelrec");
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
    async SEFCOMPA_whenNewItemInstance() {
        console.log("Entering SEFCOMPA_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        // if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //     SEFCOMPA_PREVIOUS_FIELD();
        // }
        // else {
        //     SEFCOMPA_NEXT_FIELD();
        // }
        // }
        console.log("Exiting SEFCOMPA_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_onError() {
        console.log("Entering SEFCOMPA_onError");
        console.log("Exiting SEFCOMPA_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async SEFCOMPA_keyCrerec() {
        console.log("Entering SEFCOMPA_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting SEFCOMPA_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async SEFCOMPA_keyEnter() {
        console.log("Entering SEFCOMPA_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting SEFCOMPA_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFCOMPA_keyCommit() {
        console.log("Entering SEFCOMPA_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFCOMPA_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFCOMPA_keyNextItem() {
        console.log("Entering SEFCOMPA_keyNextItem");
        // SEFCOMPA_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFCOMPA_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async SEFCOMPA_keyDown() {
        console.log("Entering SEFCOMPA_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting SEFCOMPA_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFCOMPA_keyEntqry() {
        console.log("Entering SEFCOMPA_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFCOMPA_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_whenMouseDoubleclick() {
        console.log("Entering SEFCOMPA_whenMouseDoubleclick");
        console.log("Exiting SEFCOMPA_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_onMessage() {
        console.log("Entering SEFCOMPA_onMessage");
        console.log("Exiting SEFCOMPA_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async SEFCOMPA_keyOthers() {
        console.log("Entering SEFCOMPA_keyOthers");
        console.log("Exiting SEFCOMPA_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_preForm() {
        console.log("Entering SEFCOMPA_preForm");
        console.log("Exiting SEFCOMPA_preForm");
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
    async SEFCOMPA_whenNewFormInstance() {
        console.log("Entering SEFCOMPA_whenNewFormInstance");
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
            const result1 = await Rest.post("/sefcompa/sefcompa_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFCOMPA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async SEFCOMPA_keyUp() {
        console.log("Entering SEFCOMPA_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting SEFCOMPA_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFCOMPA_keyExeqry() {
        console.log("Entering SEFCOMPA_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCOMPA_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async SEFCOMPA_keyListval() {
        console.log("Entering SEFCOMPA_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting SEFCOMPA_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async SEFCOMPA_ageman01_whenValidateRecord() {
        console.log("Entering SEFCOMPA_ageman01_whenValidateRecord");
        console.log("Exiting SEFCOMPA_ageman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFCOMPA_ageman01_whenCreateRecord() {
        console.log("Entering SEFCOMPA_ageman01_whenCreateRecord");
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFCOMPA_ageman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async SEFCOMPA_ageman01_keyExit() {
        console.log("Entering SEFCOMPA_ageman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting SEFCOMPA_ageman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async SEFCOMPA_ageman01_keyPrvblk() {
        console.log("Entering SEFCOMPA_ageman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting SEFCOMPA_ageman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFCOMPA_ageman01_postQuery() {
        console.log("Entering SEFCOMPA_ageman01_postQuery");
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFCOMPA_ageman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     NEXT_RECORD;
    // END;
    //#endregion
    async SEFCOMPA_ageman01_setdes_keyNextItem() {
        console.log("Entering SEFCOMPA_ageman01_setdes_keyNextItem");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting SEFCOMPA_ageman01_setdes_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_toolbar_whenButtonPressed() {
        console.log("Entering SEFCOMPA_toolbar_whenButtonPressed");
        console.log("Exiting SEFCOMPA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_toolbar_whenMouseLeave() {
        console.log("Entering SEFCOMPA_toolbar_whenMouseLeave");
        console.log("Exiting SEFCOMPA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_toolbar_whenNewFormInstance() {
        console.log("Entering SEFCOMPA_toolbar_whenNewFormInstance");
        console.log("Exiting SEFCOMPA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFCOMPA_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFCOMPA_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCOMPA_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFCOMPA_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFCOMPA_toolbar_lastr_whenButtonPressed");
    }

}

