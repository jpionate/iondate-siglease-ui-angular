import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TDIMAN01 business logic
import {
    TDIMAN01,
    TOOLBAR,
    BASE
} from "./TDIMAN01_models";



// class TDIMAN01
@Component({
    selector: 'app-tdiman01',
    templateUrl: './tdiman01.component.html',
})
export class Tdiman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDIMAN01: TDIMAN01 = new TDIMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TDIMAN01_keyPrevItem() {
        console.log("Entering TDIMAN01_keyPrevItem");
        //TDIMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TDIMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDIMAN01_keyDelrec() {
        console.log("Entering TDIMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDIMAN01_keyDelrec");
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
    async TDIMAN01_whenNewItemInstance() {
        console.log("Entering TDIMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TDIMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TDIMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TDIMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_onError() {
        console.log("Entering TDIMAN01_onError");
        console.log("Exiting TDIMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TDIMAN01_keyCrerec() {
        console.log("Entering TDIMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TDIMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TDIMAN01_keyEnter() {
        console.log("Entering TDIMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TDIMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDIMAN01_keyCommit() {
        console.log("Entering TDIMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDIMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDIMAN01_keyNextItem() {
        console.log("Entering TDIMAN01_keyNextItem");
        // TDIMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDIMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TDIMAN01_keyDown() {
        console.log("Entering TDIMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TDIMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TDIMAN01_keyEntqry() {
        console.log("Entering TDIMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDIMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_whenMouseDoubleclick() {
        console.log("Entering TDIMAN01_whenMouseDoubleclick");
        console.log("Exiting TDIMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_onMessage() {
        console.log("Entering TDIMAN01_onMessage");
        console.log("Exiting TDIMAN01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDIMAN01_keyOthers() {
        console.log("Entering TDIMAN01_keyOthers");
        console.log("Exiting TDIMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_preForm() {
        console.log("Entering TDIMAN01_preForm");
        console.log("Exiting TDIMAN01_preForm");
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
    async TDIMAN01_whenNewFormInstance() {
        console.log("Entering TDIMAN01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tdiman01/tdiman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TDIMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TDIMAN01_keyUp() {
        console.log("Entering TDIMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TDIMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TDIMAN01_keyExeqry() {
        console.log("Entering TDIMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TDIMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TDIMAN01_keyListval() {
        console.log("Entering TDIMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDIMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDIMAN01_tdiman01_whenValidateRecord() {
        console.log("Entering TDIMAN01_tdiman01_whenValidateRecord");
        console.log("Exiting TDIMAN01_tdiman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TDIMAN01.TDICOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDIMAN01.TDIDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDIMAN01_tdiman01_postRecord() {
        console.log("Entering TDIMAN01_tdiman01_postRecord");
        // TDIMAN01_SET_FIELD("TDIMAN01.TDICOD", "AUTO_SKIP", "ATTR_OFF");
        // TDIMAN01_SET_FIELD("TDIMAN01.TDIDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDIMAN01_tdiman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TDIMAN01.TDICOD:='';
    //   :TDIMAN01.TDIDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDIMAN01_tdiman01_whenCreateRecord() {
        console.log("Entering TDIMAN01_tdiman01_whenCreateRecord");
        this.TDIMAN01.TDICOD = "";
        this.TDIMAN01.TDIDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDIMAN01_tdiman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDIMAN01_tdiman01_keyExit() {
        console.log("Entering TDIMAN01_tdiman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDIMAN01_tdiman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDIMAN01_tdiman01_keyPrvblk() {
        console.log("Entering TDIMAN01_tdiman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDIMAN01_tdiman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDIMAN01.TDICOD IS NULL THEN
    //     :TDIMAN01.TDICOD:='';
    //   END IF;
    //   IF :TDIMAN01.TDIDES IS NULL THEN
    //     :TDIMAN01.TDIDES:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDIMAN01_tdiman01_postQuery() {
        console.log("Entering TDIMAN01_tdiman01_postQuery");
        if ((this.TDIMAN01.TDICOD == null)) {
            this.TDIMAN01.TDICOD = "";
        }
        if ((this.TDIMAN01.TDIDES == null)) {
            this.TDIMAN01.TDIDES = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDIMAN01_tdiman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDIMAN01.TDICOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDIMAN01.TDICOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDIMAN01_tdiman01_tdicod_whenValidateItem() {
        console.log("Entering TDIMAN01_tdiman01_tdicod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDIMAN01.TDICOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDIMAN01.TDICOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDIMAN01.TDICOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDIMAN01_tdiman01_tdicod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDIMAN01.TDIDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDIMAN01.TDIDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDIMAN01_tdiman01_tdides_whenValidateItem() {
        console.log("Entering TDIMAN01_tdiman01_tdides_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDIMAN01.TDIDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDIMAN01.TDIDES) == null ? 0 : PLSQLBuiltins.string_length(this.TDIMAN01.TDIDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDIMAN01_tdiman01_tdides_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     NEXT_RECORD;
    // END;
    //#endregion
    async TDIMAN01_tdiman01_tdides_keyNextItem() {
        console.log("Entering TDIMAN01_tdiman01_tdides_keyNextItem");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting TDIMAN01_tdiman01_tdides_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_toolbar_whenButtonPressed() {
        console.log("Entering TDIMAN01_toolbar_whenButtonPressed");
        console.log("Exiting TDIMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_toolbar_whenMouseLeave() {
        console.log("Entering TDIMAN01_toolbar_whenMouseLeave");
        console.log("Exiting TDIMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering TDIMAN01_toolbar_whenNewFormInstance");
        console.log("Exiting TDIMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering TDIMAN01_toolbar_first_whenButtonPressed");
        console.log("Exiting TDIMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDIMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TDIMAN01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting TDIMAN01_toolbar_lastr_whenButtonPressed");
    }

}

