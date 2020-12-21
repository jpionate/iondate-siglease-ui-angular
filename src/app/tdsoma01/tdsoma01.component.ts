import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TDSOMA01 business logic
import {
    TDSOMA01,
    TOOLBAR,
    BASE
} from "./TDSOMA01_models";



// class TDSOMA01
@Component({
    selector: 'app-tdsoma01',
    templateUrl: './tdsoma01.component.html',
})
export class Tdsoma01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDSOMA01: TDSOMA01 = new TDSOMA01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TDSOMA01_keyPrevItem() {
        console.log("Entering TDSOMA01_keyPrevItem");
        // TDSOMA01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TDSOMA01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDSOMA01_keyDelrec() {
        console.log("Entering TDSOMA01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDSOMA01_keyDelrec");
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
    async TDSOMA01_whenNewItemInstance() {
        console.log("Entering TDSOMA01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TDSOMA01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TDSOMA01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TDSOMA01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_onError() {
        console.log("Entering TDSOMA01_onError");
        console.log("Exiting TDSOMA01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TDSOMA01_keyCrerec() {
        console.log("Entering TDSOMA01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TDSOMA01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TDSOMA01_keyEnter() {
        console.log("Entering TDSOMA01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TDSOMA01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDSOMA01_keyCommit() {
        console.log("Entering TDSOMA01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDSOMA01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSOMA01_keyNextItem() {
        console.log("Entering TDSOMA01_keyNextItem");
        // TDSOMA01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSOMA01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TDSOMA01_keyDown() {
        console.log("Entering TDSOMA01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TDSOMA01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TDSOMA01_keyEntqry() {
        console.log("Entering TDSOMA01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDSOMA01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_whenMouseDoubleclick() {
        console.log("Entering TDSOMA01_whenMouseDoubleclick");
        console.log("Exiting TDSOMA01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_onMessage() {
        console.log("Entering TDSOMA01_onMessage");
        console.log("Exiting TDSOMA01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDSOMA01_keyOthers() {
        console.log("Entering TDSOMA01_keyOthers");
        console.log("Exiting TDSOMA01_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_preForm() {
        console.log("Entering TDSOMA01_preForm");
        console.log("Exiting TDSOMA01_preForm");
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
    async TDSOMA01_whenNewFormInstance() {
        console.log("Entering TDSOMA01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tdsoma01/tdsoma01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TDSOMA01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TDSOMA01_keyUp() {
        console.log("Entering TDSOMA01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TDSOMA01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TDSOMA01_keyExeqry() {
        console.log("Entering TDSOMA01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TDSOMA01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TDSOMA01_keyListval() {
        console.log("Entering TDSOMA01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDSOMA01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_whenValidateRecord() {
        console.log("Entering TDSOMA01_tdsoma01_whenValidateRecord");
        console.log("Exiting TDSOMA01_tdsoma01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TDSOMA01.TDSOCOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDSOMA01.TDSODES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_postRecord() {
        console.log("Entering TDSOMA01_tdsoma01_postRecord");
        // TDSOMA01_SET_FIELD("TDSOMA01.TDSOCOD", "AUTO_SKIP", "ATTR_OFF");
        // TDSOMA01_SET_FIELD("TDSOMA01.TDSODES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSOMA01_tdsoma01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TDSOMA01.TDSOCOD:='';
    //   :TDSOMA01.TDSODES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_whenCreateRecord() {
        console.log("Entering TDSOMA01_tdsoma01_whenCreateRecord");
        this.TDSOMA01.TDSOCOD = "";
        this.TDSOMA01.TDSODES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSOMA01_tdsoma01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_keyExit() {
        console.log("Entering TDSOMA01_tdsoma01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDSOMA01_tdsoma01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_keyPrvblk() {
        console.log("Entering TDSOMA01_tdsoma01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDSOMA01_tdsoma01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDSOMA01.TDSOCOD IS NULL THEN
    //     :TDSOMA01.TDSOCOD:='';
    //   END IF;
    //   IF :TDSOMA01.TDSODES IS NULL THEN
    //     :TDSOMA01.TDSODES:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_postQuery() {
        console.log("Entering TDSOMA01_tdsoma01_postQuery");
        if ((this.TDSOMA01.TDSOCOD == null)) {
            this.TDSOMA01.TDSOCOD = "";
        }
        if ((this.TDSOMA01.TDSODES == null)) {
            this.TDSOMA01.TDSODES = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSOMA01_tdsoma01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDSOMA01.TDSOCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDSOMA01.TDSOCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_tdsocod_whenValidateItem() {
        console.log("Entering TDSOMA01_tdsoma01_tdsocod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDSOMA01.TDSOCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDSOMA01.TDSOCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDSOMA01.TDSOCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDSOMA01_tdsoma01_tdsocod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDSOMA01.TDSODES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDSOMA01.TDSODES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDSOMA01_tdsoma01_tdsodes_whenValidateItem() {
        console.log("Entering TDSOMA01_tdsoma01_tdsodes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDSOMA01.TDSODES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDSOMA01.TDSODES) == null ? 0 : PLSQLBuiltins.string_length(this.TDSOMA01.TDSODES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDSOMA01_tdsoma01_tdsodes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_toolbar_whenButtonPressed() {
        console.log("Entering TDSOMA01_toolbar_whenButtonPressed");
        console.log("Exiting TDSOMA01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_toolbar_whenMouseLeave() {
        console.log("Entering TDSOMA01_toolbar_whenMouseLeave");
        console.log("Exiting TDSOMA01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_toolbar_whenNewFormInstance() {
        console.log("Entering TDSOMA01_toolbar_whenNewFormInstance");
        console.log("Exiting TDSOMA01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_toolbar_first_whenButtonPressed() {
        console.log("Entering TDSOMA01_toolbar_first_whenButtonPressed");
        console.log("Exiting TDSOMA01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSOMA01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TDSOMA01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting TDSOMA01_toolbar_lastr_whenButtonPressed");
    }

}

