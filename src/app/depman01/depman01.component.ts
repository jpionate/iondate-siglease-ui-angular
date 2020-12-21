import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace DEPMAN01 business logic
import {
    DEPMAN01,
    TOOLBAR,
    BASE
} from "./DEPMAN01_models";



// class DEPMAN01
@Component({
    selector: 'app-depman01',
    templateUrl: './depman01.component.html',
})
export class Depman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public DEPMAN01: DEPMAN01 = new DEPMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async DEPMAN01_keyPrevItem() {
        console.log("Entering DEPMAN01_keyPrevItem");
        // DEPMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting DEPMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async DEPMAN01_keyDelrec() {
        console.log("Entering DEPMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting DEPMAN01_keyDelrec");
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
    async DEPMAN01_whenNewItemInstance() {
        console.log("Entering DEPMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         DEPMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         DEPMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting DEPMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_onError() {
        console.log("Entering DEPMAN01_onError");
        console.log("Exiting DEPMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async DEPMAN01_keyCrerec() {
        console.log("Entering DEPMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting DEPMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async DEPMAN01_keyEnter() {
        console.log("Entering DEPMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting DEPMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async DEPMAN01_keyCommit() {
        console.log("Entering DEPMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting DEPMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async DEPMAN01_keyNextItem() {
        console.log("Entering DEPMAN01_keyNextItem");
        // DEPMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting DEPMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async DEPMAN01_keyDown() {
        console.log("Entering DEPMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting DEPMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async DEPMAN01_keyEntqry() {
        console.log("Entering DEPMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting DEPMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_whenMouseDoubleclick() {
        console.log("Entering DEPMAN01_whenMouseDoubleclick");
        console.log("Exiting DEPMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_onMessage() {
        console.log("Entering DEPMAN01_onMessage");
        console.log("Exiting DEPMAN01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async DEPMAN01_keyOthers() {
        console.log("Entering DEPMAN01_keyOthers");
        console.log("Exiting DEPMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_preForm() {
        console.log("Entering DEPMAN01_preForm");
        console.log("Exiting DEPMAN01_preForm");
    }

    //#region PLSQL
    // BEGIN  
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   
    //   IF :BASE.BD IN ('FIN1','FIN1','DAVI','DAVI')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSIF :BASE.BD IN ('FINT','FINT')  THEN
    //   :BASE.BASE_DAT := 'TEST';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    // ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
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
    //   
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async DEPMAN01_whenNewFormInstance() {
        console.log("Entering DEPMAN01_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1", "DAVI", "DAVI"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else if (["FINT", "FINT"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "TEST";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/depman01/depman01_whennewforminstance_query1", payload1);
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
        }

        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting DEPMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async DEPMAN01_keyUp() {
        console.log("Entering DEPMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting DEPMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async DEPMAN01_keyExeqry() {
        console.log("Entering DEPMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting DEPMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async DEPMAN01_keyListval() {
        console.log("Entering DEPMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting DEPMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async DEPMAN01_depman01_whenValidateRecord() {
        console.log("Entering DEPMAN01_depman01_whenValidateRecord");
        console.log("Exiting DEPMAN01_depman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('DEPMAN01.DEPCOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('DEPMAN01.DEPDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async DEPMAN01_depman01_postRecord() {
        console.log("Entering DEPMAN01_depman01_postRecord");
        // DEPMAN01_SET_FIELD("DEPMAN01.DEPCOD", "AUTO_SKIP", "ATTR_OFF");
        // DEPMAN01_SET_FIELD("DEPMAN01.DEPDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting DEPMAN01_depman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :DEPMAN01.DEPCOD:='';
    //   :DEPMAN01.DEPDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async DEPMAN01_depman01_whenCreateRecord() {
        console.log("Entering DEPMAN01_depman01_whenCreateRecord");
        this.DEPMAN01.DEPCOD = "";
        this.DEPMAN01.DEPDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting DEPMAN01_depman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async DEPMAN01_depman01_keyExit() {
        console.log("Entering DEPMAN01_depman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting DEPMAN01_depman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async DEPMAN01_depman01_keyPrvblk() {
        console.log("Entering DEPMAN01_depman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting DEPMAN01_depman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :DEPMAN01.DEPCOD IS NULL THEN
    //     :DEPMAN01.DEPCOD:='';
    //   END IF;
    //   IF :DEPMAN01.DEPDES IS NULL THEN
    //     :DEPMAN01.DEPDES:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    // BEGIN
    //   SELECT TDPDES 
    //    INTO :DESPAI
    //    FROM TDP
    //    WHERE TDPACO = :DEPMAN01.DEPACO;
    // EXCEPTION 
    //  WHEN NO_DATA_FOUND THEN
    //    :DESPAI := '';
    // END;
    //#endregion
    async DEPMAN01_depman01_postQuery() {
        console.log("Entering DEPMAN01_depman01_postQuery");
        if ((this.DEPMAN01.DEPCOD == null)) {
            this.DEPMAN01.DEPCOD = "";
        }
        if ((this.DEPMAN01.DEPDES == null)) {
            this.DEPMAN01.DEPDES = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        // construct payload
        let payload1 = new Map();
        payload1.set("DEPACO", this.DEPMAN01.DEPACO);
        // call REST API
        const result1 = await Rest.post("/depman01_depman01/depman01_depman01_postquery_query1", payload1);
        // get values from result
        this.DEPMAN01.DESPAI = result1[0].get("DESPAI");
        if (result1 == null || result1.length == 0) {

            this.DEPMAN01.DESPAI = "";
        }

        console.log("Exiting DEPMAN01_depman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('DEPMAN01.DEPCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:DEPMAN01.DEPCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async DEPMAN01_depman01_depcod_whenValidateItem() {
        console.log("Entering DEPMAN01_depman01_depcod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("DEPMAN01.DEPCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.DEPMAN01.DEPCOD) == null ? 0 : PLSQLBuiltins.string_length(this.DEPMAN01.DEPCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting DEPMAN01_depman01_depcod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('DEPMAN01.DEPCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:DEPMAN01.DEPCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async DEPMAN01_depman01_depaco_whenValidateItem() {
        console.log("Entering DEPMAN01_depman01_depaco_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("DEPMAN01.DEPCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.DEPMAN01.DEPCOD) == null ? 0 : PLSQLBuiltins.string_length(this.DEPMAN01.DEPCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting DEPMAN01_depman01_depaco_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('DEPMAN01.DEPDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:DEPMAN01.DEPDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async DEPMAN01_depman01_depdes_whenValidateItem() {
        console.log("Entering DEPMAN01_depman01_depdes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("DEPMAN01.DEPDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.DEPMAN01.DEPDES) == null ? 0 : PLSQLBuiltins.string_length(this.DEPMAN01.DEPDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting DEPMAN01_depman01_depdes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_toolbar_whenButtonPressed() {
        console.log("Entering DEPMAN01_toolbar_whenButtonPressed");
        console.log("Exiting DEPMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_toolbar_whenMouseLeave() {
        console.log("Entering DEPMAN01_toolbar_whenMouseLeave");
        console.log("Exiting DEPMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering DEPMAN01_toolbar_whenNewFormInstance");
        console.log("Exiting DEPMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering DEPMAN01_toolbar_first_whenButtonPressed");
        console.log("Exiting DEPMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async DEPMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering DEPMAN01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting DEPMAN01_toolbar_lastr_whenButtonPressed");
    }

}

