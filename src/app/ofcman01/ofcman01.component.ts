import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace OFCMAN01 business logic
import {
    TOOLBAR,
    OFCMAN01,
    BASE
} from "./OFCMAN01_models";



// class OFCMAN01
@Component({
    selector: 'app-ofcman01',
    templateUrl: './ofcman01.component.html',
})
export class Ofcman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public OFCMAN01: OFCMAN01 = new OFCMAN01();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async OFCMAN01_keyPrevItem() {
        console.log("Entering OFCMAN01_keyPrevItem");
        //OFCMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting OFCMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async OFCMAN01_keyDelrec() {
        console.log("Entering OFCMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting OFCMAN01_keyDelrec");
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
    async OFCMAN01_whenNewItemInstance() {
        console.log("Entering OFCMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         OFCMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         OFCMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting OFCMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_onError() {
        console.log("Entering OFCMAN01_onError");
        console.log("Exiting OFCMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async OFCMAN01_keyCrerec() {
        console.log("Entering OFCMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting OFCMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async OFCMAN01_keyEnter() {
        console.log("Entering OFCMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting OFCMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async OFCMAN01_keyCommit() {
        console.log("Entering OFCMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting OFCMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async OFCMAN01_keyNextItem() {
        console.log("Entering OFCMAN01_keyNextItem");
        // OFCMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting OFCMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async OFCMAN01_keyDown() {
        console.log("Entering OFCMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting OFCMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async OFCMAN01_keyEntqry() {
        console.log("Entering OFCMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting OFCMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_whenMouseDoubleclick() {
        console.log("Entering OFCMAN01_whenMouseDoubleclick");
        console.log("Exiting OFCMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_onMessage() {
        console.log("Entering OFCMAN01_onMessage");
        console.log("Exiting OFCMAN01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async OFCMAN01_keyOthers() {
        console.log("Entering OFCMAN01_keyOthers");
        console.log("Exiting OFCMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_preForm() {
        console.log("Entering OFCMAN01_preForm");
        console.log("Exiting OFCMAN01_preForm");
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
    async OFCMAN01_whenNewFormInstance() {
        console.log("Entering OFCMAN01_whenNewFormInstance");
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
                const result1 = await Rest.post("/ofcman01/ofcman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting OFCMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async OFCMAN01_keyUp() {
        console.log("Entering OFCMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting OFCMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async OFCMAN01_keyExeqry() {
        console.log("Entering OFCMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting OFCMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async OFCMAN01_keyListval() {
        console.log("Entering OFCMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting OFCMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_toolbar_whenButtonPressed() {
        console.log("Entering OFCMAN01_toolbar_whenButtonPressed");
        console.log("Exiting OFCMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_toolbar_whenMouseLeave() {
        console.log("Entering OFCMAN01_toolbar_whenMouseLeave");
        console.log("Exiting OFCMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering OFCMAN01_toolbar_whenNewFormInstance");
        console.log("Exiting OFCMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering OFCMAN01_toolbar_first_whenButtonPressed");
        console.log("Exiting OFCMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async OFCMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering OFCMAN01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting OFCMAN01_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async OFCMAN01_ofcman01_whenValidateRecord() {
        console.log("Entering OFCMAN01_ofcman01_whenValidateRecord");
        console.log("Exiting OFCMAN01_ofcman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('OFCMAN01.OFICOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('OFCMAN01.OFIDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async OFCMAN01_ofcman01_postRecord() {
        console.log("Entering OFCMAN01_ofcman01_postRecord");
        // OFCMAN01_SET_FIELD("OFCMAN01.OFICOD", "AUTO_SKIP", "ATTR_OFF");
        // OFCMAN01_SET_FIELD("OFCMAN01.OFIDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting OFCMAN01_ofcman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :OFCMAN01.OFICOD:='';
    //   :OFCMAN01.OFIDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async OFCMAN01_ofcman01_whenCreateRecord() {
        console.log("Entering OFCMAN01_ofcman01_whenCreateRecord");
        this.OFCMAN01.OFICOD = "";
        this.OFCMAN01.OFIDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting OFCMAN01_ofcman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async OFCMAN01_ofcman01_keyExit() {
        console.log("Entering OFCMAN01_ofcman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting OFCMAN01_ofcman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async OFCMAN01_ofcman01_keyPrvblk() {
        console.log("Entering OFCMAN01_ofcman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting OFCMAN01_ofcman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :OFCMAN01.OFICOD IS NULL THEN
    //     :OFCMAN01.OFICOD:='';
    //   END IF;
    //   IF :OFCMAN01.OFIDES IS NULL THEN
    //     :OFCMAN01.OFIDES:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async OFCMAN01_ofcman01_postQuery() {
        console.log("Entering OFCMAN01_ofcman01_postQuery");
        if ((this.OFCMAN01.OFICOD == null)) {
            this.OFCMAN01.OFICOD = "";
        }
        if ((this.OFCMAN01.OFIDES == null)) {
            this.OFCMAN01.OFIDES = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting OFCMAN01_ofcman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('OFCMAN01.OFIDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:OFCMAN01.OFIDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async OFCMAN01_ofcman01_ofides_whenValidateItem() {
        console.log("Entering OFCMAN01_ofcman01_ofides_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("OFCMAN01.OFIDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.OFCMAN01.OFIDES) == null ? 0 : PLSQLBuiltins.string_length(this.OFCMAN01.OFIDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting OFCMAN01_ofcman01_ofides_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('OFCMAN01.OFICOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:OFCMAN01.OFICOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async OFCMAN01_ofcman01_oficod_whenValidateItem() {
        console.log("Entering OFCMAN01_ofcman01_oficod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("OFCMAN01.OFICOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.OFCMAN01.OFICOD) == null ? 0 : PLSQLBuiltins.string_length(this.OFCMAN01.OFICOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting OFCMAN01_ofcman01_oficod_whenValidateItem");
    }

}

