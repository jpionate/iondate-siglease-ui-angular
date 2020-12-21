import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace AGEMAN01 business logic
import {
    AGEMAN01,
    TOOLBAR,
    BASE
} from "./AGEMAN01_models";



// class AGEMAN01
@Component({
    selector: 'app-ageman01',
    templateUrl: './ageman01.component.html',
})
export class Ageman01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public AGEMAN01: AGEMAN01 = new AGEMAN01();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async AGEMAN01_keyPrevItem() {
        console.log("Entering AGEMAN01_keyPrevItem");
        // AGEMAN01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting AGEMAN01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async AGEMAN01_keyDelrec() {
        console.log("Entering AGEMAN01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting AGEMAN01_keyDelrec");
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
    async AGEMAN01_whenNewItemInstance() {
        console.log("Entering AGEMAN01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         AGEMAN01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         AGEMAN01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting AGEMAN01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_onError() {
        console.log("Entering AGEMAN01_onError");
        console.log("Exiting AGEMAN01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async AGEMAN01_keyCrerec() {
        console.log("Entering AGEMAN01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting AGEMAN01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async AGEMAN01_keyEnter() {
        console.log("Entering AGEMAN01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting AGEMAN01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async AGEMAN01_keyCommit() {
        console.log("Entering AGEMAN01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting AGEMAN01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async AGEMAN01_keyNextItem() {
        console.log("Entering AGEMAN01_keyNextItem");
        // AGEMAN01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting AGEMAN01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async AGEMAN01_keyDown() {
        console.log("Entering AGEMAN01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting AGEMAN01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async AGEMAN01_keyEntqry() {
        console.log("Entering AGEMAN01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting AGEMAN01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_whenMouseDoubleclick() {
        console.log("Entering AGEMAN01_whenMouseDoubleclick");
        console.log("Exiting AGEMAN01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_onMessage() {
        console.log("Entering AGEMAN01_onMessage");
        console.log("Exiting AGEMAN01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async AGEMAN01_keyOthers() {
        console.log("Entering AGEMAN01_keyOthers");
        console.log("Exiting AGEMAN01_keyOthers");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_preForm() {
        console.log("Entering AGEMAN01_preForm");
        console.log("Exiting AGEMAN01_preForm");
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
    //   
    //   ---------------------------------------------------------------------
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
    // ----------------------------------------------------------
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async AGEMAN01_whenNewFormInstance() {
        console.log("Entering AGEMAN01_whenNewFormInstance");
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
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/ageman01/ageman01_whennewforminstance_query1", payload1);
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
        console.log("Exiting AGEMAN01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async AGEMAN01_keyUp() {
        console.log("Entering AGEMAN01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting AGEMAN01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async AGEMAN01_keyExeqry() {
        console.log("Entering AGEMAN01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting AGEMAN01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async AGEMAN01_keyListval() {
        console.log("Entering AGEMAN01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting AGEMAN01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async AGEMAN01_ageman01_whenValidateRecord() {
        console.log("Entering AGEMAN01_ageman01_whenValidateRecord");
        console.log("Exiting AGEMAN01_ageman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('AGEMAN01.AGEOFC',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('AGEMAN01.AGECOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('AGEMAN01.AGEDES',"AUTO_SKIP","ATTR_OFF");
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async AGEMAN01_ageman01_postRecord() {
        console.log("Entering AGEMAN01_ageman01_postRecord");
        // AGEMAN01_SET_FIELD("AGEMAN01.AGEOFC", "AUTO_SKIP", "ATTR_OFF");
        // AGEMAN01_SET_FIELD("AGEMAN01.AGECOD", "AUTO_SKIP", "ATTR_OFF");
        // AGEMAN01_SET_FIELD("AGEMAN01.AGEDES", "AUTO_SKIP", "ATTR_OFF");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting AGEMAN01_ageman01_postRecord");
    }

    //#region PLSQL
    // BEGIN
    //   :AGEMAN01.AGEOFC:='';
    //   :AGEMAN01.AGECOD:='';
    //   :AGEMAN01.AGEDES:='';
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async AGEMAN01_ageman01_whenCreateRecord() {
        console.log("Entering AGEMAN01_ageman01_whenCreateRecord");
        this.AGEMAN01.AGEOFC = "";
        this.AGEMAN01.AGECOD = "";
        this.AGEMAN01.AGEDES = "";
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting AGEMAN01_ageman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async AGEMAN01_ageman01_keyExit() {
        console.log("Entering AGEMAN01_ageman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting AGEMAN01_ageman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async AGEMAN01_ageman01_keyPrvblk() {
        console.log("Entering AGEMAN01_ageman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting AGEMAN01_ageman01_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //  BEGIN
    //  SELECT SETDES
    //    INTO :DES1
    //    FROM OPS$SEGUI.SETCOMPA
    //    WHERE SETCOM=:AGECOM;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    // NULL;
    // END;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async AGEMAN01_ageman01_postQuery() {
        console.log("Entering AGEMAN01_ageman01_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("AGECOM", this.AGECOM);
        // call REST API
        const result1 = await Rest.post("/ageman01_ageman01/ageman01_ageman01_postquery_query1", payload1);
        // get values from result
        // DES1 = result1[0].get("DES1");
        if (result1 == null || result1.length == 0) {

        }

        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting AGEMAN01_ageman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('AGEMAN01.AGEDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:AGEMAN01.AGEDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async AGEMAN01_ageman01_des1_whenValidateItem() {
        console.log("Entering AGEMAN01_ageman01_des1_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("AGEMAN01.AGEDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.AGEMAN01.AGEDES) == null ? 0 : PLSQLBuiltins.string_length(this.AGEMAN01.AGEDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting AGEMAN01_ageman01_des1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     NEXT_RECORD;
    // END;
    //#endregion
    async AGEMAN01_ageman01_des1_keyNextItem() {
        console.log("Entering AGEMAN01_ageman01_des1_keyNextItem");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting AGEMAN01_ageman01_des1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('AGEMAN01.AGEDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:AGEMAN01.AGEDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async AGEMAN01_ageman01_agedes_whenValidateItem() {
        console.log("Entering AGEMAN01_ageman01_agedes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("AGEMAN01.AGEDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.AGEMAN01.AGEDES) == null ? 0 : PLSQLBuiltins.string_length(this.AGEMAN01.AGEDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting AGEMAN01_ageman01_agedes_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT SETDES
    //    INTO :DES1
    //    FROM OPS$SEGUI.SETCOMPA
    //    WHERE SETCOM=:AGECOM;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','COMPAÑIA INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async AGEMAN01_ageman01_agecom_whenValidateItem() {
        console.log("Entering AGEMAN01_ageman01_agecom_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("AGECOM", AGECOM);
        // call REST API
        const result1 = await Rest.post("/ageman01_ageman01/ageman01_ageman01_agecom_whenvalidateitem_query1", payload1);
        // get values from result
        // DES1 = result1[0].get("DES1");
        if (result1 == null || result1.length == 0) {

            // AGEMAN01_LIB$ALERTA("MENSAJE", "COMPAÑIA INEXISTENTE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting AGEMAN01_ageman01_agecom_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('AGEMAN01.AGEOFC',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:AGEMAN01.AGEOFC), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     ELSE
    //      BEGIN
    //      SELECT OFICOD
    //      INTO :AGEOFC
    //      FROM OFI
    //      WHERE OFICOD=:AGEOFC;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      MESSAGE('CODIGO OFICINA INEXISTENTE....');
    //      RAISE FORM_TRIGGER_FAILURE;
    //      END;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async AGEMAN01_ageman01_ageofc_whenValidateItem() {
        console.log("Entering AGEMAN01_ageman01_ageofc_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("AGEMAN01.AGEOFC", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.AGEMAN01.AGEOFC) == null ? 0 : PLSQLBuiltins.string_length(this.AGEMAN01.AGEOFC) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            else {
                // construct payload
                let payload1 = new Map();
                // payload1.set("AGEOFC", AGEOFC);
                // call REST API
                const result1 = await Rest.post("/ageman01_ageman01/ageman01_ageman01_ageofc_whenvalidateitem_query1", payload1);
                // get values from result
                // AGEOFC = result1[0].get("AGEOFC");
                if (result1 == null || result1.length == 0) {

                    this.oracleFormsBuiltins.message("CODIGO OFICINA INEXISTENTE....");
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting AGEMAN01_ageman01_ageofc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('AGEMAN01.AGECOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:AGEMAN01.AGECOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async AGEMAN01_ageman01_agecod_whenValidateItem() {
        console.log("Entering AGEMAN01_ageman01_agecod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("AGEMAN01.AGECOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.AGEMAN01.AGECOD) == null ? 0 : PLSQLBuiltins.string_length(this.AGEMAN01.AGECOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting AGEMAN01_ageman01_agecod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     NEXT_RECORD;
    // END;
    //#endregion
    async AGEMAN01_ageman01_agedir_keyNextItem() {
        console.log("Entering AGEMAN01_ageman01_agedir_keyNextItem");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting AGEMAN01_ageman01_agedir_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // DESCEN CGPCECOS.CGCCECOS_DESCEN%TYPE;
    // BEGIN
    //  SELECT CGCCECOS_DESCEN         
    //    INTO DESCEN
    //    FROM CGPCECOS
    //    WHERE CGCCECOS_CODCEN=:AGECEN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','CENTRO DE COSTO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async AGEMAN01_ageman01_agecen_whenValidateItem() {
        console.log("Entering AGEMAN01_ageman01_agecen_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESCEN: null = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("AGECEN", AGECEN);
        // call REST API
        const result1 = await Rest.post("/ageman01_ageman01/ageman01_ageman01_agecen_whenvalidateitem_query1", payload1);
        // get values from result
        DESCEN = result1[0].get("DESCEN");
        if (result1 == null || result1.length == 0) {

            // AGEMAN01_LIB$ALERTA("MENSAJE", "CENTRO DE COSTO INEXISTENTE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting AGEMAN01_ageman01_agecen_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_toolbar_whenButtonPressed() {
        console.log("Entering AGEMAN01_toolbar_whenButtonPressed");
        console.log("Exiting AGEMAN01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_toolbar_whenMouseLeave() {
        console.log("Entering AGEMAN01_toolbar_whenMouseLeave");
        console.log("Exiting AGEMAN01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_toolbar_whenNewFormInstance() {
        console.log("Entering AGEMAN01_toolbar_whenNewFormInstance");
        console.log("Exiting AGEMAN01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_toolbar_first_whenButtonPressed() {
        console.log("Entering AGEMAN01_toolbar_first_whenButtonPressed");
        console.log("Exiting AGEMAN01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async AGEMAN01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering AGEMAN01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting AGEMAN01_toolbar_lastr_whenButtonPressed");
    }

}

