import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TGEMAN01 business logic
import {
    TOOLBAR,
    TGEMAN01,
    BASE
} from "./TGEMAN01_models";



// class TGEMAN01
@Component({
    selector: 'app-tgeman01',
    templateUrl: './tgeman01.component.html',
})
export class Tgeman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public TGEMAN01: TGEMAN01 = new TGEMAN01();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TGEMAN01_keyPrevItem() {
        console.log("Entering TGEMAN01_keyPrevItem");
        // TGEMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TGEMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TGEMAN01_keyDelrec() {
        console.log("Entering TGEMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TGEMAN01_keyDelrec");
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
    async TGEMAN01_whenNewItemInstance() {
        console.log("Entering TGEMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TGEMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TGEMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TGEMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async TGEMAN01_onError() {
        console.log("Entering TGEMAN01_onError");
        // TGEMAN01_MENSAJE_ERRORES();
        console.log("Exiting TGEMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TGEMAN01_keyCrerec() {
        console.log("Entering TGEMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TGEMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TGEMAN01_keyEnter() {
        console.log("Entering TGEMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TGEMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TGEMAN01_keyCommit() {
        console.log("Entering TGEMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TGEMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TGEMAN01_keyNextItem() {
        console.log("Entering TGEMAN01_keyNextItem");
        // TGEMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TGEMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TGEMAN01_keyDown() {
        console.log("Entering TGEMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TGEMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TGEMAN01_keyEntqry() {
        console.log("Entering TGEMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TGEMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async TGEMAN01_whenMouseDoubleclick() {
        console.log("Entering TGEMAN01_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TGEMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TGEMAN01_keyOthers() {
        console.log("Entering TGEMAN01_keyOthers");
        console.log("Exiting TGEMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async TGEMAN01_onMessage() {
        console.log("Entering TGEMAN01_onMessage");
        // TGEMAN01_MENSAJE_INFORMATIVOS();
        console.log("Exiting TGEMAN01_onMessage");
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
    async TGEMAN01_whenNewFormInstance() {
        console.log("Entering TGEMAN01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tgeman01/tgeman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TGEMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TGEMAN01_preForm() {
        console.log("Entering TGEMAN01_preForm");
        // TGEMAN01_PANTALLA();
        // TGEMAN01_PINCIARSGRDADOFCNAS();
        console.log("Exiting TGEMAN01_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TGEMAN01_keyUp() {
        console.log("Entering TGEMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TGEMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TGEMAN01_keyExeqry() {
        console.log("Entering TGEMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TGEMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TGEMAN01_keyListval() {
        console.log("Entering TGEMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TGEMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async TGEMAN01_toolbar_whenButtonPressed() {
        console.log("Entering TGEMAN01_toolbar_whenButtonPressed");
        // TGEMAN01_TOOLBAR_ACTIONS();
        console.log("Exiting TGEMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async TGEMAN01_toolbar_whenMouseLeave() {
        console.log("Entering TGEMAN01_toolbar_whenMouseLeave");
        // TGEMAN01_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting TGEMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async TGEMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering TGEMAN01_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TGEMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async TGEMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering TGEMAN01_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting TGEMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async TGEMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TGEMAN01_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting TGEMAN01_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TGEMAN01_tgeman01_whenValidateRecord() {
        console.log("Entering TGEMAN01_tgeman01_whenValidateRecord");
        console.log("Exiting TGEMAN01_tgeman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TGEMAN01.TGECOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TGEMAN01.TGEDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TGEMAN01_tgeman01_postRecord() {
        console.log("Entering TGEMAN01_tgeman01_postRecord");
        // TGEMAN01_SET_FIELD("TGEMAN01.TGECOD", "AUTO_SKIP", "ATTR_OFF");
        // TGEMAN01_SET_FIELD("TGEMAN01.TGEDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TGEMAN01_tgeman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TGEMAN01.TGECOD:='';
    //   :TGEMAN01.TGEDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TGEMAN01_tgeman01_whenCreateRecord() {
        console.log("Entering TGEMAN01_tgeman01_whenCreateRecord");
        this.TGEMAN01.TGECOD = "";
        this.TGEMAN01.TGEDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TGEMAN01_tgeman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TGEMAN01_tgeman01_keyExit() {
        console.log("Entering TGEMAN01_tgeman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TGEMAN01_tgeman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TGEMAN01_tgeman01_keyPrvblk() {
        console.log("Entering TGEMAN01_tgeman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TGEMAN01_tgeman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TGEMAN01.TGECOD IS NULL THEN
    //     :TGEMAN01.TGECOD:='';
    //   END IF;
    //   IF :TGEMAN01.TGEDES IS NULL THEN
    //     :TGEMAN01.TGEDES:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TGEMAN01_tgeman01_postQuery() {
        console.log("Entering TGEMAN01_tgeman01_postQuery");
        if ((this.TGEMAN01.TGECOD == null)) {
            this.TGEMAN01.TGECOD = "";
        }
        if ((this.TGEMAN01.TGEDES == null)) {
            this.TGEMAN01.TGEDES = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TGEMAN01_tgeman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TGEMAN01.TGECOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TGEMAN01.TGECOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TGEMAN01_tgeman01_tgecod_whenValidateItem() {
        console.log("Entering TGEMAN01_tgeman01_tgecod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TGEMAN01.TGECOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TGEMAN01.TGECOD) == null ? 0 : PLSQLBuiltins.string_length(this.TGEMAN01.TGECOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TGEMAN01_tgeman01_tgecod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TGEMAN01.TGEDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TGEMAN01.TGEDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TGEMAN01_tgeman01_tgedes_whenValidateItem() {
        console.log("Entering TGEMAN01_tgeman01_tgedes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TGEMAN01.TGEDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TGEMAN01.TGEDES) == null ? 0 : PLSQLBuiltins.string_length(this.TGEMAN01.TGEDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TGEMAN01_tgeman01_tgedes_whenValidateItem");
    }

}

