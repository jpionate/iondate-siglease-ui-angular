import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TRLMAN01 business logic
import {
    TRLMAN01,
    TOOLBAR,
    BASE
} from "./TRLMAN01_models";



// class TRLMAN01
@Component({
    selector: 'app-trlman01',
    templateUrl: './trlman01.component.html',
})
export class Trlman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TRLMAN01: TRLMAN01 = new TRLMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TRLMAN01_keyPrevItem() {
        console.log("Entering TRLMAN01_keyPrevItem");
        // TRLMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TRLMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TRLMAN01_keyDelrec() {
        console.log("Entering TRLMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TRLMAN01_keyDelrec");
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
    async TRLMAN01_whenNewItemInstance() {
        console.log("Entering TRLMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TRLMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TRLMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TRLMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async TRLMAN01_onError() {
        console.log("Entering TRLMAN01_onError");
        // TRLMAN01_MENSAJE_ERRORES();
        console.log("Exiting TRLMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TRLMAN01_keyCrerec() {
        console.log("Entering TRLMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TRLMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TRLMAN01_keyEnter() {
        console.log("Entering TRLMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TRLMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TRLMAN01_keyCommit() {
        console.log("Entering TRLMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TRLMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TRLMAN01_keyNextItem() {
        console.log("Entering TRLMAN01_keyNextItem");
        // TRLMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TRLMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TRLMAN01_keyDown() {
        console.log("Entering TRLMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TRLMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TRLMAN01_keyEntqry() {
        console.log("Entering TRLMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TRLMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async TRLMAN01_whenMouseDoubleclick() {
        console.log("Entering TRLMAN01_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TRLMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TRLMAN01_keyOthers() {
        console.log("Entering TRLMAN01_keyOthers");
        console.log("Exiting TRLMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async TRLMAN01_onMessage() {
        console.log("Entering TRLMAN01_onMessage");
        // TRLMAN01_MENSAJE_INFORMATIVOS();
        console.log("Exiting TRLMAN01_onMessage");
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
    async TRLMAN01_whenNewFormInstance() {
        console.log("Entering TRLMAN01_whenNewFormInstance");
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
            const result1 = await Rest.post("/trlman01/trlman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TRLMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TRLMAN01_preForm() {
        console.log("Entering TRLMAN01_preForm");
        // TRLMAN01_PANTALLA();
        // TRLMAN01_PINCIARSGRDADOFCNAS();
        console.log("Exiting TRLMAN01_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TRLMAN01_keyUp() {
        console.log("Entering TRLMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TRLMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TRLMAN01_keyExeqry() {
        console.log("Entering TRLMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TRLMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TRLMAN01_keyListval() {
        console.log("Entering TRLMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TRLMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TRLMAN01_trlman01_whenValidateRecord() {
        console.log("Entering TRLMAN01_trlman01_whenValidateRecord");
        console.log("Exiting TRLMAN01_trlman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TRLMAN01.TRLCOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLDES',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLD1',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLD2',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLD3',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLD4',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLR1',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TRLMAN01.TRLR2',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TRLMAN01_trlman01_postRecord() {
        console.log("Entering TRLMAN01_trlman01_postRecord");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLCOD", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLDES", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLD1", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLD2", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLD3", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLD4", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLR1", "AUTO_SKIP", "ATTR_OFF");
        // TRLMAN01_SET_FIELD("TRLMAN01.TRLR2", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TRLMAN01_trlman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TRLMAN01.TRLF1:='';
    //   :TRLMAN01.TRLF2:='';
    //   :TRLMAN01.TRLCOD:='';
    //   :TRLMAN01.TRLDES:='';
    //   :TRLMAN01.TRLD1:='';
    //   :TRLMAN01.TRLD2:='';
    //   :TRLMAN01.TRLD3:='';
    //   :TRLMAN01.TRLD4:='';
    //   :TRLMAN01.TRLR1:='';
    //   :TRLMAN01.TRLR2:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TRLMAN01_trlman01_whenCreateRecord() {
        console.log("Entering TRLMAN01_trlman01_whenCreateRecord");
        this.TRLMAN01.TRLF1 = "";
        this.TRLMAN01.TRLF2 = "";
        this.TRLMAN01.TRLCOD = "";
        this.TRLMAN01.TRLDES = "";
        this.TRLMAN01.TRLD1 = "";
        this.TRLMAN01.TRLD2 = "";
        this.TRLMAN01.TRLD3 = "";
        this.TRLMAN01.TRLD4 = "";
        this.TRLMAN01.TRLR1 = "";
        this.TRLMAN01.TRLR2 = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TRLMAN01_trlman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TRLMAN01_trlman01_keyExit() {
        console.log("Entering TRLMAN01_trlman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TRLMAN01_trlman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TRLMAN01_trlman01_keyPrvblk() {
        console.log("Entering TRLMAN01_trlman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TRLMAN01_trlman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TRLMAN01.TRLCOD IS NULL THEN
    //     :TRLMAN01.TRLCOD:='';
    //   END IF;
    //   IF :TRLMAN01.TRLF1 IS NULL THEN
    //     :TRLMAN01.TRLF1:='';
    //   END IF;
    //   IF :TRLMAN01.TRLR2 IS NULL THEN
    //     :TRLMAN01.TRLR2:='';
    //   END IF;
    //   IF :TRLMAN01.TRLR1 IS NULL THEN
    //     :TRLMAN01.TRLR1:='';
    //   END IF;
    //   IF :TRLMAN01.TRLD4 IS NULL THEN
    //     :TRLMAN01.TRLD4:='';
    //   END IF;
    //   IF :TRLMAN01.TRLD3 IS NULL THEN
    //     :TRLMAN01.TRLD3:='';
    //   END IF;
    //   IF :TRLMAN01.TRLD2 IS NULL THEN
    //     :TRLMAN01.TRLD2:='';
    //   END IF;
    //   IF :TRLMAN01.TRLD1 IS NULL THEN
    //     :TRLMAN01.TRLD1:='';
    //   END IF;
    //   IF :TRLMAN01.TRLDES IS NULL THEN
    //     :TRLMAN01.TRLDES:='';
    //   END IF;
    //   IF :TRLMAN01.TRLF2 IS NULL THEN
    //     :TRLMAN01.TRLF2:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TRLMAN01_trlman01_postQuery() {
        console.log("Entering TRLMAN01_trlman01_postQuery");
        if ((this.TRLMAN01.TRLCOD == null)) {
            this.TRLMAN01.TRLCOD = "";
        }
        if ((this.TRLMAN01.TRLF1 == null)) {
            this.TRLMAN01.TRLF1 = "";
        }
        if ((this.TRLMAN01.TRLR2 == null)) {
            this.TRLMAN01.TRLR2 = "";
        }
        if ((this.TRLMAN01.TRLR1 == null)) {
            this.TRLMAN01.TRLR1 = "";
        }
        if ((this.TRLMAN01.TRLD4 == null)) {
            this.TRLMAN01.TRLD4 = "";
        }
        if ((this.TRLMAN01.TRLD3 == null)) {
            this.TRLMAN01.TRLD3 = "";
        }
        if ((this.TRLMAN01.TRLD2 == null)) {
            this.TRLMAN01.TRLD2 = "";
        }
        if ((this.TRLMAN01.TRLD1 == null)) {
            this.TRLMAN01.TRLD1 = "";
        }
        if ((this.TRLMAN01.TRLDES == null)) {
            this.TRLMAN01.TRLDES = "";
        }
        if ((this.TRLMAN01.TRLF2 == null)) {
            this.TRLMAN01.TRLF2 = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TRLMAN01_trlman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TRLMAN01.TRLCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TRLMAN01.TRLCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TRLMAN01_trlman01_trlcod_whenValidateItem() {
        console.log("Entering TRLMAN01_trlman01_trlcod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TRLMAN01.TRLCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TRLMAN01.TRLCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TRLMAN01.TRLCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TRLMAN01_trlman01_trlcod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TRLMAN01.TRLDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TRLMAN01.TRLDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TRLMAN01_trlman01_trldes_whenValidateItem() {
        console.log("Entering TRLMAN01_trlman01_trldes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TRLMAN01.TRLDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TRLMAN01.TRLDES) == null ? 0 : PLSQLBuiltins.string_length(this.TRLMAN01.TRLDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TRLMAN01_trlman01_trldes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async TRLMAN01_toolbar_whenButtonPressed() {
        console.log("Entering TRLMAN01_toolbar_whenButtonPressed");
        // TRLMAN01_TOOLBAR_ACTIONS();
        console.log("Exiting TRLMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async TRLMAN01_toolbar_whenMouseLeave() {
        console.log("Entering TRLMAN01_toolbar_whenMouseLeave");
        // TRLMAN01_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting TRLMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async TRLMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering TRLMAN01_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TRLMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async TRLMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering TRLMAN01_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting TRLMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async TRLMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TRLMAN01_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting TRLMAN01_toolbar_lastr_whenButtonPressed");
    }

}

