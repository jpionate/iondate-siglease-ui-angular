import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TDSMAN01 business logic
import {
    TDSMAN01,
    TOOLBAR,
    BASE
} from "./TDSMAN01_models";



// class TDSMAN01
@Component({
    selector: 'app-tdsman01',
    templateUrl: './tdsman01.component.html',
})
export class Tdsman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDSMAN01: TDSMAN01 = new TDSMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TDSMAN01_keyPrevItem() {
        console.log("Entering TDSMAN01_keyPrevItem");
        // TDSMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TDSMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDSMAN01_keyDelrec() {
        console.log("Entering TDSMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDSMAN01_keyDelrec");
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
    async TDSMAN01_whenNewItemInstance() {
        console.log("Entering TDSMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TDSMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TDSMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TDSMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_onError() {
        console.log("Entering TDSMAN01_onError");
        console.log("Exiting TDSMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TDSMAN01_keyCrerec() {
        console.log("Entering TDSMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TDSMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TDSMAN01_keyEnter() {
        console.log("Entering TDSMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TDSMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDSMAN01_keyCommit() {
        console.log("Entering TDSMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDSMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSMAN01_keyNextItem() {
        console.log("Entering TDSMAN01_keyNextItem");
        // TDSMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TDSMAN01_keyDown() {
        console.log("Entering TDSMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TDSMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TDSMAN01_keyEntqry() {
        console.log("Entering TDSMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDSMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_whenMouseDoubleclick() {
        console.log("Entering TDSMAN01_whenMouseDoubleclick");
        console.log("Exiting TDSMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_onMessage() {
        console.log("Entering TDSMAN01_onMessage");
        console.log("Exiting TDSMAN01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDSMAN01_keyOthers() {
        console.log("Entering TDSMAN01_keyOthers");
        console.log("Exiting TDSMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // --PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TDSMAN01_preForm() {
        console.log("Entering TDSMAN01_preForm");
        console.log("Exiting TDSMAN01_preForm");
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
    async TDSMAN01_whenNewFormInstance() {
        console.log("Entering TDSMAN01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tdsman01/tdsman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TDSMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TDSMAN01_keyUp() {
        console.log("Entering TDSMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TDSMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TDSMAN01_keyExeqry() {
        console.log("Entering TDSMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TDSMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TDSMAN01_keyListval() {
        console.log("Entering TDSMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDSMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDSMAN01_tdsman01_whenValidateRecord() {
        console.log("Entering TDSMAN01_tdsman01_whenValidateRecord");
        console.log("Exiting TDSMAN01_tdsman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TDSMAN01.TDSCOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDSMAN01.TDSDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSMAN01_tdsman01_postRecord() {
        console.log("Entering TDSMAN01_tdsman01_postRecord");
        // TDSMAN01_SET_FIELD("TDSMAN01.TDSCOD", "AUTO_SKIP", "ATTR_OFF");
        // TDSMAN01_SET_FIELD("TDSMAN01.TDSDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSMAN01_tdsman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :TDSMAN01.TDSCOD:='';
    //   :TDSMAN01.TDSDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSMAN01_tdsman01_whenCreateRecord() {
        console.log("Entering TDSMAN01_tdsman01_whenCreateRecord");
        this.TDSMAN01.TDSCOD = "";
        this.TDSMAN01.TDSDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSMAN01_tdsman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDSMAN01_tdsman01_keyExit() {
        console.log("Entering TDSMAN01_tdsman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDSMAN01_tdsman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDSMAN01_tdsman01_keyPrvblk() {
        console.log("Entering TDSMAN01_tdsman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDSMAN01_tdsman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //     SELECT  SECDES
    //       INTO  :TDSMAN01.DESSEC
    //       FROM  SEC
    //       WHERE SECCOD=:TDSMAN01.TDSSEC;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN NULL;
    // END;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDSMAN01_tdsman01_postQuery() {
        console.log("Entering TDSMAN01_tdsman01_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TDSSEC", this.TDSMAN01.TDSSEC);
        // call REST API
        const result1 = await Rest.post("/tdsman01_tdsman01/tdsman01_tdsman01_postquery_query1", payload1);
        // get values from result
        this.TDSMAN01.DESSEC = result1[0].get("TDSMAN01.DESSEC");
        if (result1 == null || result1.length == 0) {

        }

        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDSMAN01_tdsman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT  SECDES
    //     INTO  :TDSMAN01.DESSEC
    //     FROM  SEC
    //     WHERE SECCOD=:TDSMAN01.TDSSEC;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         MESSAGE('NO EXISTE EL SECTOR ECONOMICO');
    //         RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async TDSMAN01_tdsman01_tdssec_whenValidateItem() {
        console.log("Entering TDSMAN01_tdsman01_tdssec_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("TDSSEC", this.TDSMAN01.TDSSEC);
        // call REST API
        const result1 = await Rest.post("/tdsman01_tdsman01/tdsman01_tdsman01_tdssec_whenvalidateitem_query1", payload1);
        // get values from result
        this.TDSMAN01.DESSEC = result1[0].get("TDSMAN01.DESSEC");
        if (result1 == null || result1.length == 0) {

            this.oracleFormsBuiltins.message("NO EXISTE EL SECTOR ECONOMICO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting TDSMAN01_tdsman01_tdssec_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDSMAN01.TDSDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDSMAN01.TDSDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDSMAN01_tdsman01_tdsdes_whenValidateItem() {
        console.log("Entering TDSMAN01_tdsman01_tdsdes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDSMAN01.TDSDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDSMAN01.TDSDES) == null ? 0 : PLSQLBuiltins.string_length(this.TDSMAN01.TDSDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDSMAN01_tdsman01_tdsdes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDSMAN01.TDSCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDSMAN01.TDSCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDSMAN01_tdsman01_tdscod_whenValidateItem() {
        console.log("Entering TDSMAN01_tdsman01_tdscod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDSMAN01.TDSCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDSMAN01.TDSCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDSMAN01.TDSCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDSMAN01_tdsman01_tdscod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_toolbar_whenButtonPressed() {
        console.log("Entering TDSMAN01_toolbar_whenButtonPressed");
        console.log("Exiting TDSMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_toolbar_whenMouseLeave() {
        console.log("Entering TDSMAN01_toolbar_whenMouseLeave");
        console.log("Exiting TDSMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering TDSMAN01_toolbar_whenNewFormInstance");
        console.log("Exiting TDSMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering TDSMAN01_toolbar_first_whenButtonPressed");
        console.log("Exiting TDSMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDSMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TDSMAN01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting TDSMAN01_toolbar_lastr_whenButtonPressed");
    }

}

