import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TDCONM01 business logic
import {
    TDCONM01,
    TOOLBAR,
    BASE
} from "./TDCONM01_models";



// class TDCONM01
@Component({
    selector: 'app-tdconm01',
    templateUrl: './tdconm01.component.html',
})
export class Tdconm01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDCONM01: TDCONM01 = new TDCONM01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TDCONM01_keyPrevItem() {
        console.log("Entering TDCONM01_keyPrevItem");
        // TDCONM01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TDCONM01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDCONM01_keyDelrec() {
        console.log("Entering TDCONM01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDCONM01_keyDelrec");
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
    async TDCONM01_whenNewItemInstance() {
        console.log("Entering TDCONM01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TDCONM01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TDCONM01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TDCONM01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_onError() {
        console.log("Entering TDCONM01_onError");
        console.log("Exiting TDCONM01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TDCONM01_keyCrerec() {
        console.log("Entering TDCONM01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TDCONM01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TDCONM01_keyEnter() {
        console.log("Entering TDCONM01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TDCONM01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDCONM01_keyCommit() {
        console.log("Entering TDCONM01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDCONM01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCONM01_keyNextItem() {
        console.log("Entering TDCONM01_keyNextItem");
        // TDCONM01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCONM01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TDCONM01_keyDown() {
        console.log("Entering TDCONM01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TDCONM01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TDCONM01_keyEntqry() {
        console.log("Entering TDCONM01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDCONM01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_whenMouseDoubleclick() {
        console.log("Entering TDCONM01_whenMouseDoubleclick");
        console.log("Exiting TDCONM01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_onMessage() {
        console.log("Entering TDCONM01_onMessage");
        console.log("Exiting TDCONM01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDCONM01_keyOthers() {
        console.log("Entering TDCONM01_keyOthers");
        console.log("Exiting TDCONM01_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_preForm() {
        console.log("Entering TDCONM01_preForm");
        console.log("Exiting TDCONM01_preForm");
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
    async TDCONM01_whenNewFormInstance() {
        console.log("Entering TDCONM01_whenNewFormInstance");
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
        console.log("Exiting TDCONM01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TDCONM01_keyUp() {
        console.log("Entering TDCONM01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TDCONM01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TDCONM01_keyExeqry() {
        console.log("Entering TDCONM01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TDCONM01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TDCONM01_keyListval() {
        console.log("Entering TDCONM01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDCONM01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDCONM01_tdconm01_whenValidateRecord() {
        console.log("Entering TDCONM01_tdconm01_whenValidateRecord");
        console.log("Exiting TDCONM01_tdconm01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TDCONM01.TDCONN',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDCONM01.TDCONE',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCONM01_tdconm01_postRecord() {
        console.log("Entering TDCONM01_tdconm01_postRecord");
        // TDCONM01_SET_FIELD("TDCONM01.TDCONN", "AUTO_SKIP", "ATTR_OFF");
        // TDCONM01_SET_FIELD("TDCONM01.TDCONE", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCONM01_tdconm01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TDCONM01.TDCONN:='';
    //   :TDCONM01.TDCONE:=00001;
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCONM01_tdconm01_whenCreateRecord() {
        console.log("Entering TDCONM01_tdconm01_whenCreateRecord");
        this.TDCONM01.TDCONN = "";
        this.TDCONM01.TDCONE = 1;
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCONM01_tdconm01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDCONM01_tdconm01_keyExit() {
        console.log("Entering TDCONM01_tdconm01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDCONM01_tdconm01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDCONM01_tdconm01_keyPrvblk() {
        console.log("Entering TDCONM01_tdconm01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDCONM01_tdconm01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDCONM01.TDCONN IS NULL THEN
    //     :TDCONM01.TDCONN:='';
    //   END IF;
    //   IF :TDCONM01.TDCONE IS NULL THEN
    //     :TDCONM01.TDCONE:=0;
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCONM01_tdconm01_postQuery() {
        console.log("Entering TDCONM01_tdconm01_postQuery");
        if ((this.TDCONM01.TDCONN == null)) {
            this.TDCONM01.TDCONN = "";
        }
        if ((this.TDCONM01.TDCONE == null)) {
            this.TDCONM01.TDCONE = 0;
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCONM01_tdconm01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDCONM01.TDCONN',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDCONM01.TDCONN), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDCONM01_tdconm01_tdconn_whenValidateItem() {
        console.log("Entering TDCONM01_tdconm01_tdconn_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDCONM01.TDCONN", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDCONM01.TDCONN) == null ? 0 : PLSQLBuiltins.string_length(this.TDCONM01.TDCONN) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDCONM01_tdconm01_tdconn_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_toolbar_whenButtonPressed() {
        console.log("Entering TDCONM01_toolbar_whenButtonPressed");
        console.log("Exiting TDCONM01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_toolbar_whenMouseLeave() {
        console.log("Entering TDCONM01_toolbar_whenMouseLeave");
        console.log("Exiting TDCONM01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_toolbar_whenNewFormInstance() {
        console.log("Entering TDCONM01_toolbar_whenNewFormInstance");
        console.log("Exiting TDCONM01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_toolbar_first_whenButtonPressed() {
        console.log("Entering TDCONM01_toolbar_first_whenButtonPressed");
        console.log("Exiting TDCONM01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCONM01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TDCONM01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting TDCONM01_toolbar_lastr_whenButtonPressed");
    }

}

