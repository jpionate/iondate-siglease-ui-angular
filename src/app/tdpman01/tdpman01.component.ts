import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TDPMAN01 business logic
import {
    TDPMAN01,
    TOOLBAR,
    BASE
} from "./TDPMAN01_models";



// class TDPMAN01
@Component({
    selector: 'app-tdpman01',
    templateUrl: './tdpman01.component.html',
})
export class Tdpman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDPMAN01: TDPMAN01 = new TDPMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TDPMAN01_keyPrevItem() {
        console.log("Entering TDPMAN01_keyPrevItem");
        // TDPMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TDPMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDPMAN01_keyDelrec() {
        console.log("Entering TDPMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDPMAN01_keyDelrec");
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
    async TDPMAN01_whenNewItemInstance() {
        console.log("Entering TDPMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TDPMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TDPMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TDPMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async TDPMAN01_onError() {
        console.log("Entering TDPMAN01_onError");
        // TDPMAN01_MENSAJE_ERRORES();
        console.log("Exiting TDPMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TDPMAN01_keyCrerec() {
        console.log("Entering TDPMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TDPMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TDPMAN01_keyEnter() {
        console.log("Entering TDPMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TDPMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDPMAN01_keyCommit() {
        console.log("Entering TDPMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDPMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDPMAN01_keyNextItem() {
        console.log("Entering TDPMAN01_keyNextItem");
        // TDPMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDPMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TDPMAN01_keyDown() {
        console.log("Entering TDPMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TDPMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TDPMAN01_keyEntqry() {
        console.log("Entering TDPMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDPMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async TDPMAN01_whenMouseDoubleclick() {
        console.log("Entering TDPMAN01_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDPMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDPMAN01_keyOthers() {
        console.log("Entering TDPMAN01_keyOthers");
        console.log("Exiting TDPMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async TDPMAN01_onMessage() {
        console.log("Entering TDPMAN01_onMessage");
        // TDPMAN01_MENSAJE_INFORMATIVOS();
        console.log("Exiting TDPMAN01_onMessage");
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
    async TDPMAN01_whenNewFormInstance() {
        console.log("Entering TDPMAN01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tdpman01/tdpman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TDPMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TDPMAN01_preForm() {
        console.log("Entering TDPMAN01_preForm");
        // TDPMAN01_PANTALLA();
        // TDPMAN01_PINCIARSGRDADOFCNAS();
        console.log("Exiting TDPMAN01_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TDPMAN01_keyUp() {
        console.log("Entering TDPMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TDPMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TDPMAN01_keyExeqry() {
        console.log("Entering TDPMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TDPMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TDPMAN01_keyListval() {
        console.log("Entering TDPMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDPMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDPMAN01_tdpman01_whenValidateRecord() {
        console.log("Entering TDPMAN01_tdpman01_whenValidateRecord");
        console.log("Exiting TDPMAN01_tdpman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TDPMAN01.TDPCOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDPMAN01.TDPDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDPMAN01_tdpman01_postRecord() {
        console.log("Entering TDPMAN01_tdpman01_postRecord");
        // TDPMAN01_SET_FIELD("TDPMAN01.TDPCOD", "AUTO_SKIP", "ATTR_OFF");
        // TDPMAN01_SET_FIELD("TDPMAN01.TDPDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDPMAN01_tdpman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TDPMAN01.TDPCOD:='';
    //   :TDPMAN01.TDPDES:='';
    //   :TDPMAN01.TDPUSER := :USUARIO;
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDPMAN01_tdpman01_whenCreateRecord() {
        console.log("Entering TDPMAN01_tdpman01_whenCreateRecord");
        this.TDPMAN01.TDPCOD = "";
        this.TDPMAN01.TDPDES = "";
        // this.TDPMAN01.TDPUSER = this.TDPMAN01.USUARIO;
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDPMAN01_tdpman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDPMAN01_tdpman01_keyExit() {
        console.log("Entering TDPMAN01_tdpman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDPMAN01_tdpman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDPMAN01_tdpman01_keyPrvblk() {
        console.log("Entering TDPMAN01_tdpman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDPMAN01_tdpman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TDPMAN01.TDPCOD IS NULL THEN
    //     :TDPMAN01.TDPCOD:='';
    //   END IF;
    //   IF :TDPMAN01.TDPDES IS NULL THEN
    //     :TDPMAN01.TDPDES:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDPMAN01_tdpman01_postQuery() {
        console.log("Entering TDPMAN01_tdpman01_postQuery");
        if ((this.TDPMAN01.TDPCOD == null)) {
            this.TDPMAN01.TDPCOD = "";
        }
        if ((this.TDPMAN01.TDPDES == null)) {
            this.TDPMAN01.TDPDES = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDPMAN01_tdpman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPMAN01.TDPCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPMAN01.TDPCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDPMAN01_tdpman01_tdpcod_whenValidateItem() {
        console.log("Entering TDPMAN01_tdpman01_tdpcod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPMAN01.TDPCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPMAN01.TDPCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDPMAN01.TDPCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDPMAN01_tdpman01_tdpcod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPMAN01.TDPCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPMAN01.TDPCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDPMAN01_tdpman01_tdpaco_whenValidateItem() {
        console.log("Entering TDPMAN01_tdpman01_tdpaco_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPMAN01.TDPCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPMAN01.TDPCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDPMAN01.TDPCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDPMAN01_tdpman01_tdpaco_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPMAN01.TDPDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPMAN01.TDPDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDPMAN01_tdpman01_tdpdes_whenValidateItem() {
        console.log("Entering TDPMAN01_tdpman01_tdpdes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPMAN01.TDPDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPMAN01.TDPDES) == null ? 0 : PLSQLBuiltins.string_length(this.TDPMAN01.TDPDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDPMAN01_tdpman01_tdpdes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDPMAN01.TDPCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDPMAN01.TDPCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDPMAN01_tdpman01_tdpiso_whenValidateItem() {
        console.log("Entering TDPMAN01_tdpman01_tdpiso_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDPMAN01.TDPCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDPMAN01.TDPCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDPMAN01.TDPCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDPMAN01_tdpman01_tdpiso_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async TDPMAN01_toolbar_whenButtonPressed() {
        console.log("Entering TDPMAN01_toolbar_whenButtonPressed");
        // TDPMAN01_TOOLBAR_ACTIONS();
        console.log("Exiting TDPMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async TDPMAN01_toolbar_whenMouseLeave() {
        console.log("Entering TDPMAN01_toolbar_whenMouseLeave");
        // TDPMAN01_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting TDPMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async TDPMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering TDPMAN01_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDPMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async TDPMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering TDPMAN01_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting TDPMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async TDPMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TDPMAN01_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting TDPMAN01_toolbar_lastr_whenButtonPressed");
    }

}

