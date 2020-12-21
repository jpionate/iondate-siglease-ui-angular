import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFORICLI business logic
import {
    TDPRMAN01,
    TOOLBAR,
    BASE
} from "./SEFORICLI_models";



// class SEFORICLI
@Component({
    selector: 'app-seforicli',
    templateUrl: './seforicli.component.html',
})
export class SeforicliComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDPRMAN01: TDPRMAN01 = new TDPRMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async SEFORICLI_keyPrevItem() {
        console.log("Entering SEFORICLI_keyPrevItem");
        // SEFORICLI_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting SEFORICLI_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFORICLI_keyDelrec() {
        console.log("Entering SEFORICLI_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFORICLI_keyDelrec");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_onError() {
        console.log("Entering SEFORICLI_onError");
        console.log("Exiting SEFORICLI_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async SEFORICLI_keyCrerec() {
        console.log("Entering SEFORICLI_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting SEFORICLI_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async SEFORICLI_keyEnter() {
        console.log("Entering SEFORICLI_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting SEFORICLI_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORICLI_keyNextItem() {
        console.log("Entering SEFORICLI_keyNextItem");
        // SEFORICLI_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFORICLI_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async SEFORICLI_keyDown() {
        console.log("Entering SEFORICLI_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting SEFORICLI_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFORICLI_keyEntqry() {
        console.log("Entering SEFORICLI_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFORICLI_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_whenMouseDoubleclick() {
        console.log("Entering SEFORICLI_whenMouseDoubleclick");
        console.log("Exiting SEFORICLI_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_onMessage() {
        console.log("Entering SEFORICLI_onMessage");
        console.log("Exiting SEFORICLI_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_preForm() {
        console.log("Entering SEFORICLI_preForm");
        console.log("Exiting SEFORICLI_preForm");
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
    async SEFORICLI_whenNewFormInstance() {
        console.log("Entering SEFORICLI_whenNewFormInstance");
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
        console.log("Exiting SEFORICLI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async SEFORICLI_keyUp() {
        console.log("Entering SEFORICLI_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting SEFORICLI_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFORICLI_keyExeqry() {
        console.log("Entering SEFORICLI_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFORICLI_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async SEFORICLI_keyListval() {
        console.log("Entering SEFORICLI_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting SEFORICLI_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   :TDPRMAN01.TDPRCOD:='';
    //   :TDPRMAN01.TDPRDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORICLI_tdprman01_whenCreateRecord() {
        console.log("Entering SEFORICLI_tdprman01_whenCreateRecord");
        this.TDPRMAN01.TDPRCOD = "";
        this.TDPRMAN01.TDPRDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting SEFORICLI_tdprman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDPRMAN01.TDPRCOD IS NULL THEN
    //     :TDPRMAN01.TDPRCOD:='';
    //   END IF;
    //   IF :TDPRMAN01.TDPRDES IS NULL THEN
    //     :TDPRMAN01.TDPRDES:='';
    //   END IF;
    //   --:GLOBAL.RECORD_STATUS:='QUERY';
    //   --:GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async SEFORICLI_tdprman01_postQuery() {
        console.log("Entering SEFORICLI_tdprman01_postQuery");
        if ((this.TDPRMAN01.TDPRCOD == null)) {
            this.TDPRMAN01.TDPRCOD = "";
        }
        if ((this.TDPRMAN01.TDPRDES == null)) {
            this.TDPRMAN01.TDPRDES = "";
        }
        console.log("Exiting SEFORICLI_tdprman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPRMAN01.TDPRDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPRMAN01.TDPRDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async SEFORICLI_tdprman01_tdprdes_whenValidateItem() {
        console.log("Entering SEFORICLI_tdprman01_tdprdes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPRMAN01.TDPRDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRDES) == null ? 0 : PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting SEFORICLI_tdprman01_tdprdes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPRMAN01.TDPRCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPRMAN01.TDPRCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async SEFORICLI_tdprman01_tdprcod_whenValidateItem() {
        console.log("Entering SEFORICLI_tdprman01_tdprcod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPRMAN01.TDPRCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDPRMAN01.TDPRCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting SEFORICLI_tdprman01_tdprcod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDPREST NOT IN ('B','A') THEN
    //    LIB$DTNERFRMA('SOLO SE PERMITE B[BLOQUEADO] O A[ACTIVO].RECTIFIQUE.');
    //   END IF;
    // END;
    //#endregion
    async SEFORICLI_tdprman01_tdprest_whenValidateItem() {
        console.log("Entering SEFORICLI_tdprman01_tdprest_whenValidateItem");
        // if (["B", "A"].indexOf(this.TDPREST) != -1) {
        //     SEFORICLI_LIB$DTNERFRMA("SOLO SE PERMITE B[BLOQUEADO] O A[ACTIVO].RECTIFIQUE.");
        // }
        console.log("Exiting SEFORICLI_tdprman01_tdprest_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_toolbar_whenButtonPressed() {
        console.log("Entering SEFORICLI_toolbar_whenButtonPressed");
        console.log("Exiting SEFORICLI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_toolbar_whenMouseLeave() {
        console.log("Entering SEFORICLI_toolbar_whenMouseLeave");
        console.log("Exiting SEFORICLI_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_toolbar_whenNewFormInstance() {
        console.log("Entering SEFORICLI_toolbar_whenNewFormInstance");
        console.log("Exiting SEFORICLI_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFORICLI_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFORICLI_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFORICLI_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFORICLI_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFORICLI_toolbar_lastr_whenButtonPressed");
    }

}

