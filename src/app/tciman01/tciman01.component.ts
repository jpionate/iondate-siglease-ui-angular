import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TCIMAN01 business logic
import {
    TCIMAN01,
    TOOLBAR,
    COTCIUMUN,
    BASE
} from "./TCIMAN01_models";



// class TCIMAN01
@Component({
    selector: 'app-tciman01',
    templateUrl: './tciman01.component.html',
})
export class Tciman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TCIMAN01: TCIMAN01 = new TCIMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public COTCIUMUN: COTCIUMUN = new COTCIUMUN();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TCIMAN01_keyPrevItem() {
        console.log("Entering TCIMAN01_keyPrevItem");
        // TCIMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TCIMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TCIMAN01_keyDelrec() {
        console.log("Entering TCIMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TCIMAN01_keyDelrec");
    }

    //#region PLSQL
    // BEGIN
    // /*
    //   IF PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD,"AUTO_SKIP")='TRUE' THEN
    //     IF :GLOBAL.RECORD_DIRECTION='PREVIOUS' THEN
    //       PREVIOUS_FIELD;
    //      ELSE
    //        NEXT_FIELD;
    //     END IF;
    //   END IF;
    // */
    // NULL;
    // END;
    //#endregion
    async TCIMAN01_whenNewItemInstance() {
        console.log("Entering TCIMAN01_whenNewItemInstance");
        console.log("Exiting TCIMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async TCIMAN01_onError() {
        console.log("Entering TCIMAN01_onError");
        // TCIMAN01_MENSAJE_ERRORES();
        console.log("Exiting TCIMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TCIMAN01_keyCrerec() {
        console.log("Entering TCIMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TCIMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TCIMAN01_keyEnter() {
        console.log("Entering TCIMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TCIMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TCIMAN01_keyCommit() {
        console.log("Entering TCIMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TCIMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TCIMAN01_keyNextItem() {
        console.log("Entering TCIMAN01_keyNextItem");
        // TCIMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TCIMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TCIMAN01_keyDown() {
        console.log("Entering TCIMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TCIMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TCIMAN01_keyEntqry() {
        console.log("Entering TCIMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TCIMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async TCIMAN01_whenMouseDoubleclick() {
        console.log("Entering TCIMAN01_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TCIMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TCIMAN01_keyOthers() {
        console.log("Entering TCIMAN01_keyOthers");
        console.log("Exiting TCIMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async TCIMAN01_onMessage() {
        console.log("Entering TCIMAN01_onMessage");
        // TCIMAN01_MENSAJE_INFORMATIVOS();
        console.log("Exiting TCIMAN01_onMessage");
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
    async TCIMAN01_whenNewFormInstance() {
        console.log("Entering TCIMAN01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tciman01/tciman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TCIMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TCIMAN01_preForm() {
        console.log("Entering TCIMAN01_preForm");
        // TCIMAN01_PANTALLA();
        // TCIMAN01_PINCIARSGRDADOFCNAS();
        console.log("Exiting TCIMAN01_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TCIMAN01_keyUp() {
        console.log("Entering TCIMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TCIMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TCIMAN01_keyExeqry() {
        console.log("Entering TCIMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TCIMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TCIMAN01_keyListval() {
        console.log("Entering TCIMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TCIMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TCIMAN01_tciman01_whenValidateRecord() {
        console.log("Entering TCIMAN01_tciman01_whenValidateRecord");
        console.log("Exiting TCIMAN01_tciman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TCIMAN01.TCICOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TCIMAN01.TCIDES',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TCIMAN01.TCIACT',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TCIMAN01_tciman01_postRecord() {
        console.log("Entering TCIMAN01_tciman01_postRecord");
        // TCIMAN01_SET_FIELD("TCIMAN01.TCICOD", "AUTO_SKIP", "ATTR_OFF");
        // TCIMAN01_SET_FIELD("TCIMAN01.TCIDES", "AUTO_SKIP", "ATTR_OFF");
        // TCIMAN01_SET_FIELD("TCIMAN01.TCIACT", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TCIMAN01_tciman01_postRecord");
    }

    //#region PLSQL
    // DECLARE
    //   TAEDES# TAE.TAEDES%TYPE;
    // BEGIN
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TCIMAN01_tciman01_whenCreateRecord() {
        console.log("Entering TCIMAN01_tciman01_whenCreateRecord");
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TCIMAN01_tciman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TCIMAN01_tciman01_keyExit() {
        console.log("Entering TCIMAN01_tciman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TCIMAN01_tciman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TCIMAN01_tciman01_keyPrvblk() {
        console.log("Entering TCIMAN01_tciman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TCIMAN01_tciman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //     SELECT  TDSDES
    //       INTO  :TCIMAN01.DESTAE
    //       FROM  TDS
    //       WHERE TDSSEC=:TCIMAN01.TCISEC
    //       AND   TDSCOD=:TCIMAN01.TCITAE;
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TCIMAN01_tciman01_postQuery() {
        console.log("Entering TCIMAN01_tciman01_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TCISEC", this.TCIMAN01.TCISEC);
        payload1.set("TCITAE", this.TCIMAN01.TCITAE);
        // call REST API
        const result1 = await Rest.post("/tciman01_tciman01/tciman01_tciman01_postquery_query1", payload1);
        // get values from result
        this.TCIMAN01.DESTAE = result1[0].get("TCIMAN01.DESTAE");
        if (result1 == null || result1.length == 0) {

        }

        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TCIMAN01_tciman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TCIMAN01.TCIDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TCIMAN01.TCIDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TCIMAN01_tciman01_tcides_whenValidateItem() {
        console.log("Entering TCIMAN01_tciman01_tcides_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TCIMAN01.TCIDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TCIMAN01.TCIDES) == null ? 0 : PLSQLBuiltins.string_length(this.TCIMAN01.TCIDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TCIMAN01_tciman01_tcides_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // /*
    //   MESSAGE('GLOBAL '||:GLOBAL.RECORD_STATUS);
    //   MESSAGE('SYSTEM '||SYSTEM.RECORD_STATUS);
    //   IF (PLSQLBuiltins.field_characteristic('TCIMAN01.TCIACT',"AUTO_SKIP")='FALSE') THEN
    //       RAISE FORM_TRIGGER_FAILURE;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    // */
    //     IF (NVL(PLSQLBuiltins.string_length(:TCIMAN01.TCIACT), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    // DECLARE
    //   TAEDES# TAE.TAEDES%TYPE;
    //     BEGIN
    //       SELECT TAEDES
    //          INTO TAEDES#
    //          FROM TAE
    //          WHERE (TAECOD=:TCIMAN01.TCIACT);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //        MESSAGE('NO EXISTE LA ACTIVIDAD ECONOMICA');
    //         RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   END IF;
    // END;
    //#endregion
    async TCIMAN01_tciman01_tciact_whenValidateItem() {
        console.log("Entering TCIMAN01_tciman01_tciact_whenValidateItem");
        if (PLSQLBuiltins.string_length(this.TCIMAN01.TCIACT) == null ? 0 : PLSQLBuiltins.string_length(this.TCIMAN01.TCIACT) == 0) {
            this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            {
                // construct payload
                let payload1 = new Map();
                payload1.set("TCIACT", this.TCIMAN01.TCIACT);
                // call REST API
                const result1 = await Rest.post("/tciman01_tciman01/tciman01_tciman01_tciact_whenvalidateitem_query1", payload1);
                // get values from result
                // this.TAEDES = result1[0].get("TAEDES#");
                if (result1 == null || result1.length == 0) {

                    this.oracleFormsBuiltins.message("NO EXISTE LA ACTIVIDAD ECONOMICA");
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting TCIMAN01_tciman01_tciact_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    // END;
    //#endregion
    async TCIMAN01_tciman01_tciact_keyNextItem() {
        console.log("Entering TCIMAN01_tciman01_tciact_keyNextItem");
        // TCIMAN01_NEXT_FIELD();
        console.log("Exiting TCIMAN01_tciman01_tciact_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TCIMAN01.TCICOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TCIMAN01.TCICOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TCIMAN01_tciman01_tcicod_whenValidateItem() {
        console.log("Entering TCIMAN01_tciman01_tcicod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TCIMAN01.TCICOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TCIMAN01.TCICOD) == null ? 0 : PLSQLBuiltins.string_length(this.TCIMAN01.TCICOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TCIMAN01_tciman01_tcicod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT  TDSDES
    //     INTO  :TCIMAN01.DESTAE
    //     FROM  TDS
    //     WHERE TDSSEC=:TCIMAN01.TCISEC
    //     AND   TDSCOD=:TCIMAN01.TCITAE;
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //         MESSAGE('CODIGO NO EXISTE..');
    //         RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async TCIMAN01_tciman01_tcitae_whenValidateItem() {
        console.log("Entering TCIMAN01_tciman01_tcitae_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("TCISEC", this.TCIMAN01.TCISEC);
        payload1.set("TCITAE", this.TCIMAN01.TCITAE);
        // call REST API
        const result1 = await Rest.post("/tciman01_tciman01/tciman01_tciman01_tcitae_whenvalidateitem_query1", payload1);
        // get values from result
        this.TCIMAN01.DESTAE = result1[0].get("TCIMAN01.DESTAE");
        if (result1 == null || result1.length == 0) {

            this.oracleFormsBuiltins.message("CODIGO NO EXISTE..");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting TCIMAN01_tciman01_tcitae_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   SECDES# SEC.SECDES%TYPE;
    // BEGIN
    //   SELECT  SECDES
    //     INTO  SECDES#
    //     FROM  SEC
    //     WHERE SECCOD=:TCIMAN01.TCISEC;
    //       EXCEPTION
    //        WHEN NO_DATA_FOUND THEN
    //        MESSAGE('NO EXISTE EL SECTOR ECONOMICO...');
    //        RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async TCIMAN01_tciman01_tcisec_whenValidateItem() {
        console.log("Entering TCIMAN01_tciman01_tcisec_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("TCISEC", this.TCIMAN01.TCISEC);
        // call REST API
        const result1 = await Rest.post("/tciman01_tciman01/tciman01_tciman01_tcisec_whenvalidateitem_query1", payload1);
        // get values from result
        if (result1 == null || result1.length == 0) {

            this.oracleFormsBuiltins.message("NO EXISTE EL SECTOR ECONOMICO...");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting TCIMAN01_tciman01_tcisec_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async TCIMAN01_toolbar_whenButtonPressed() {
        console.log("Entering TCIMAN01_toolbar_whenButtonPressed");
        // TCIMAN01_TOOLBAR_ACTIONS();
        console.log("Exiting TCIMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async TCIMAN01_toolbar_whenMouseLeave() {
        console.log("Entering TCIMAN01_toolbar_whenMouseLeave");
        // TCIMAN01_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting TCIMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async TCIMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering TCIMAN01_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TCIMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async TCIMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering TCIMAN01_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting TCIMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async TCIMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TCIMAN01_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting TCIMAN01_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async TCIMAN01_cotciumun_whenNewBlockInstance() {
        console.log("Entering TCIMAN01_cotciumun_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TCIMAN01_cotciumun_whenNewBlockInstance");
    }

}

