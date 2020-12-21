import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TDCSEG01 business logic
import {
    TDCMAN01,
    TDCMAN02,
    TOOLBAR,
    BASE
} from "./TDCSEG01_models";



// class TDCSEG01
@Component({
    selector: 'app-tdcseg01',
    templateUrl: './tdcseg01.component.html',
})
export class Tdcseg01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDCMAN01: TDCMAN01 = new TDCMAN01();
    public TDCMAN02: TDCMAN02 = new TDCMAN02();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   PREVIOUS_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='PREVIOUS';
    // END;
    //#endregion
    async TDCSEG01_keyPrevItem() {
        console.log("Entering TDCSEG01_keyPrevItem");
        // TDCSEG01_PREVIOUS_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "PREVIOUS");
        console.log("Exiting TDCSEG01_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //   DELETE_RECORD;
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDCSEG01_keyDelrec() {
        console.log("Entering TDCSEG01_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDCSEG01_keyDelrec");
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
    async TDCSEG01_whenNewItemInstance() {
        console.log("Entering TDCSEG01_whenNewItemInstance");
        // if (PLSQLBuiltins.field_characteristic(SYSTEM.TRIGGER_FIELD, "AUTO_SKIP") == "TRUE") {
        //     if (GLOBAL.RECORD_DIRECTION == "PREVIOUS") {
        //         TDCSEG01_PREVIOUS_FIELD();
        //     }
        //     else {
        //         TDCSEG01_NEXT_FIELD();
        //     }
        // }
        console.log("Exiting TDCSEG01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_onError() {
        console.log("Entering TDCSEG01_onError");
        console.log("Exiting TDCSEG01_onError");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CREATE_RECORD;
    // END;
    //#endregion
    async TDCSEG01_keyCrerec() {
        console.log("Entering TDCSEG01_keyCrerec");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting TDCSEG01_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //   ENTER;
    // END;
    //#endregion
    async TDCSEG01_keyEnter() {
        console.log("Entering TDCSEG01_keyEnter");
        this.oracleFormsBuiltins.enter();
        console.log("Exiting TDCSEG01_keyEnter");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TDCSEG01_keyCommit() {
        console.log("Entering TDCSEG01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TDCSEG01_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   NEXT_FIELD;
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCSEG01_keyNextItem() {
        console.log("Entering TDCSEG01_keyNextItem");
        // TDCSEG01_NEXT_FIELD();
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCSEG01_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //     COMMIT_FORM;
    //     DOWN;
    //   END IF;
    // END;
    //#endregion
    async TDCSEG01_keyDown() {
        console.log("Entering TDCSEG01_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting TDCSEG01_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async TDCSEG01_keyEntqry() {
        console.log("Entering TDCSEG01_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TDCSEG01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_whenMouseDoubleclick() {
        console.log("Entering TDCSEG01_whenMouseDoubleclick");
        console.log("Exiting TDCSEG01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_onMessage() {
        console.log("Entering TDCSEG01_onMessage");
        console.log("Exiting TDCSEG01_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDCSEG01_keyOthers() {
        console.log("Entering TDCSEG01_keyOthers");
        console.log("Exiting TDCSEG01_keyOthers");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TDCSEG01_preForm() {
        console.log("Entering TDCSEG01_preForm");
        // TDCSEG01_PANTALLA();
        // TDCSEG01_PINCIARSGRDADOFCNAS();
        console.log("Exiting TDCSEG01_preForm");
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
    async TDCSEG01_whenNewFormInstance() {
        console.log("Entering TDCSEG01_whenNewFormInstance");
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
            const result1 = await Rest.post("/tdcseg01/tdcseg01_whennewforminstance_query1", payload1);
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
        console.log("Exiting TDCSEG01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     COMMIT_FORM;
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async TDCSEG01_keyUp() {
        console.log("Entering TDCSEG01_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.commit_form();
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting TDCSEG01_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async TDCSEG01_keyExeqry() {
        console.log("Entering TDCSEG01_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting TDCSEG01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   LIST_VALUES;
    // END;
    //#endregion
    async TDCSEG01_keyListval() {
        console.log("Entering TDCSEG01_keyListval");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TDCSEG01_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   NULL;
    // END;
    //#endregion
    async TDCSEG01_tdcman01_whenValidateRecord() {
        console.log("Entering TDCSEG01_tdcman01_whenValidateRecord");
        console.log("Exiting TDCSEG01_tdcman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SET_FIELD('TDCMAN01.TDCCOD',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDCMAN01.TDCDES',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDCMAN01.TDCDEP',"AUTO_SKIP","ATTR_OFF");
    //   SET_FIELD('TDCMAN01.DEPTO',"AUTO_SKIP",ATTR_ON);
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCSEG01_tdcman01_postRecord() {
        console.log("Entering TDCSEG01_tdcman01_postRecord");
        // TDCSEG01_SET_FIELD("TDCMAN01.TDCCOD", "AUTO_SKIP", "ATTR_OFF");
        // TDCSEG01_SET_FIELD("TDCMAN01.TDCDES", "AUTO_SKIP", "ATTR_OFF");
        // TDCSEG01_SET_FIELD("TDCMAN01.TDCDEP", "AUTO_SKIP", "ATTR_OFF");
        // TDCSEG01_SET_FIELD("TDCMAN01.DEPTO", "AUTO_SKIP", ATTR_ON);
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCSEG01_tdcman01_postRecord");
    }

    //#region PLSQL
    // DECLARE
    //   DEPDES# DEP.DEPDES%TYPE;
    // BEGIN
    //   :TDCMAN01.TDCCOD:='';
    //   :TDCMAN01.TDCDES:='';
    //   :TDCMAN01.TDCDEP:='';
    //   IF (NVL(PLSQLBuiltins.string_length(:TDCMAN01.TDCDEP), 0)=0) THEN
    //     BEGIN
    //       SELECT DEPDES
    //          INTO DEPDES#
    //          FROM DEP
    //          WHERE (DEPCOD=:TDCMAN01.TDCDEP);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN DEPDES#:='';
    //     END;
    //     :TDCMAN01.DEPTO:=DEPDES#;
    //    ELSE
    //      :TDCMAN01.DEPTO:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='NEW';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCSEG01_tdcman01_whenCreateRecord() {
        console.log("Entering TDCSEG01_tdcman01_whenCreateRecord");
        this.TDCMAN01.TDCCOD = "";
        this.TDCMAN01.TDCDES = "";
        this.TDCMAN01.TDCDEP = "";
        if (PLSQLBuiltins.string_length(this.TDCMAN01.TDCDEP) == null ? 0 : PLSQLBuiltins.string_length(this.TDCMAN01.TDCDEP) == 0) {
            // construct payload
            let payload1 = new Map();
            payload1.set("TDCDEP", this.TDCMAN01.TDCDEP);
            // call REST API
            const result1 = await Rest.post("/tdcseg01_tdcman01/tdcseg01_tdcman01_whencreaterecord_query1", payload1);
            // get values from result
            if (result1 == null || result1.length == 0) {
                // 
            }

        }
        else {
            this.TDCMAN01.DEPTO = "";
        }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "NEW");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCSEG01_tdcman01_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDCSEG01_tdcman01_keyExit() {
        console.log("Entering TDCSEG01_tdcman01_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDCSEG01_tdcman01_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDCSEG01_tdcman01_keyPrvblk() {
        console.log("Entering TDCSEG01_tdcman01_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDCSEG01_tdcman01_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    //   DEPDES# DEP.DEPDES%TYPE;
    // BEGIN
    //     BEGIN
    //       SELECT DEPDES
    //          INTO DEPDES#
    //          FROM DEP
    //          WHERE (DEPCOD=:TDCMAN01.TDCDEP);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN DEPDES#:='';
    //     END;
    //     :TDCMAN01.DEPTO:=DEPDES#;
    //   IF :TDCMAN01.TDCCOD IS NULL THEN
    //     :TDCMAN01.TDCCOD:='';
    //   END IF;
    //   IF :TDCMAN01.TDCDES IS NULL THEN
    //     :TDCMAN01.TDCDES:='';
    //   END IF;
    //   IF :TDCMAN01.TDCDEP IS NULL THEN
    //     :TDCMAN01.TDCDEP:='';
    //   END IF;
    //   :GLOBAL.RECORD_STATUS:='QUERY';
    //   :GLOBAL.RECORD_DIRECTION:='NEXT';
    // END;
    //#endregion
    async TDCSEG01_tdcman01_postQuery() {
        console.log("Entering TDCSEG01_tdcman01_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TDCDEP", this.TDCMAN01.TDCDEP);
        // call REST API
        const result1 = await Rest.post("/tdcseg01_tdcman01/tdcseg01_tdcman01_postquery_query1", payload1);
        // get values from result
        if (result1 == null || result1.length == 0) {

            // 
        }

        // this.TDCMAN01.DEPTO = DEPDES#;
        // if ((TDCMAN01.TDCCOD == null)) {
        //     this.TDCMAN01.TDCCOD = "";
        // }
        // if ((TDCMAN01.TDCDES == null)) {
        //     this.TDCMAN01.TDCDES = "";
        // }
        // if ((TDCMAN01.TDCDEP == null)) {
        //     this.TDCMAN01.TDCDEP = "";
        // }
        this._GLOBAL_SERVICE.set("RECORD_STATUS", "QUERY");
        this._GLOBAL_SERVICE.set("RECORD_DIRECTION", "NEXT");
        console.log("Exiting TDCSEG01_tdcman01_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDCMAN01.TDCCOD',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDCMAN01.TDCCOD), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDCSEG01_tdcman01_tdccod_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman01_tdccod_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDCMAN01.TDCCOD", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDCMAN01.TDCCOD) == null ? 0 : PLSQLBuiltins.string_length(this.TDCMAN01.TDCCOD) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDCSEG01_tdcman01_tdccod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   COUNT_DEP NUMBER;
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDCMAN01.TDCDEP',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDCMAN01.TDCDEP), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     SELECT COUNT(*)
    //        INTO COUNT_DEP
    //        FROM DEP
    //        WHERE (DEPCOD=:TDCMAN01.TDCDEP);
    //     IF (NOT (COUNT_DEP=1)) THEN
    //       MESSAGE('ESTE DEPARTAMENTO NO ESTA CREADO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDCSEG01_tdcman01_tdcdep_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman01_tdcdep_whenValidateItem");
        let COUNT_DEP: number = null;
        if (PLSQLBuiltins.field_characteristic("TDCMAN01.TDCDEP", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDCMAN01.TDCDEP) == null ? 0 : PLSQLBuiltins.string_length(this.TDCMAN01.TDCDEP) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            // construct payload
            let payload1 = new Map();
            payload1.set("TDCDEP", this.TDCMAN01.TDCDEP);
            // call REST API
            const result1 = await Rest.post("/tdcseg01_tdcman01/tdcseg01_tdcman01_tdcdep_whenvalidateitem_query1", payload1);
            // get values from result
            COUNT_DEP = result1[0].get("COUNT_DEP");
            if (!(COUNT_DEP == 1)) {
                this.oracleFormsBuiltins.message("ESTE DEPARTAMENTO NO ESTA CREADO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDCSEG01_tdcman01_tdcdep_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   DEPDES# DEP.DEPDES%TYPE;
    // BEGIN
    //   IF :GLOBAL.RECORD_STATUS<>'NEW' THEN
    //     BEGIN
    //       SELECT DEPDES
    //          INTO :TDCMAN01.DEPTO
    //          FROM DEP
    //          WHERE (DEPCOD=:TDCMAN01.TDCDEP);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :TDCMAN01.DEPTO:='';
    //     END;
    //   END IF;
    // END;
    //#endregion
    async TDCSEG01_tdcman01_tdcdep_postTextItem() {
        console.log("Entering TDCSEG01_tdcman01_tdcdep_postTextItem");
        // if (GLOBAL.RECORD_STATUS != "NEW") {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("TDCDEP", TDCMAN01.TDCDEP);
        //     // call REST API
        //     const result1 = await Rest.post("/tdcseg01_tdcman01/tdcseg01_tdcman01_tdcdep_posttextitem_query1", payload1);
        //     // get values from result
        //     TDCMAN01.DEPTO = result1[0].get("TDCMAN01.DEPTO");
        //     if (result1 == null || result1.length == 0) {

        //         this.TDCMAN01.DEPTO = "";
        //     }

        // }
        console.log("Exiting TDCSEG01_tdcman01_tdcdep_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF (PLSQLBuiltins.field_characteristic('TDCMAN01.TDCDES',"AUTO_SKIP")='FALSE') THEN
    //     IF (NVL(PLSQLBuiltins.string_length(:TDCMAN01.TDCDES), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    //     :GLOBAL.RECORD_STATUS:='CHANGED';
    //   END IF;
    // END;
    //#endregion
    async TDCSEG01_tdcman01_tdcdes_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman01_tdcdes_whenValidateItem");
        if (PLSQLBuiltins.field_characteristic("TDCMAN01.TDCDES", "AUTO_SKIP") == "FALSE") {
            if (PLSQLBuiltins.string_length(this.TDCMAN01.TDCDES) == null ? 0 : PLSQLBuiltins.string_length(this.TDCMAN01.TDCDES) == 0) {
                this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            this._GLOBAL_SERVICE.set("RECORD_STATUS", "CHANGED");
        }
        console.log("Exiting TDCSEG01_tdcman01_tdcdes_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :TDCDIV2 IS NULL THEN 
    //   :TDCACT2 := 'N';
    // END IF; END;
    //#endregion
    async TDCSEG01_tdcman02_preUpdate() {
        console.log("Entering TDCSEG01_tdcman02_preUpdate");
        if ((this.TDCMAN02.TDCDIV2 == null)) {
            this.TDCMAN02.TDCACT2 = "N";
        }
        console.log("Exiting TDCSEG01_tdcman02_preUpdate");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDCSEG01_tdcman02_keyExit() {
        console.log("Entering TDCSEG01_tdcman02_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDCSEG01_tdcman02_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_VALIDATE);
    // END;
    //#endregion
    async TDCSEG01_tdcman02_keyPrvblk() {
        console.log("Entering TDCSEG01_tdcman02_keyPrvblk");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting TDCSEG01_tdcman02_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN SELECT DEPDES 
    // INTO :TDCMAN02.DEPTO2 
    // FROM DEP 
    // WHERE DEPCOD = :TDCMAN02.TDCDEP2; END;
    //#endregion
    async TDCSEG01_tdcman02_postQuery() {
        console.log("Entering TDCSEG01_tdcman02_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TDCDEP2", this.TDCMAN02.TDCDEP2);
        // call REST API
        const result1 = await Rest.post("/tdcseg01_tdcman02/tdcseg01_tdcman02_postquery_query1", payload1);
        // get values from result
        this.TDCMAN02.DEPTO2 = result1[0].get("TDCMAN02.DEPTO2");
        console.log("Exiting TDCSEG01_tdcman02_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :TDCDIV2 IS NULL THEN 
    //   :TDCACT2 := 'N';
    // END IF; END;
    //#endregion
    async TDCSEG01_tdcman02_preInsert() {
        console.log("Entering TDCSEG01_tdcman02_preInsert");
        if ((this.TDCMAN02.TDCDIV2 == null)) {
            this.TDCMAN02.TDCACT2 = "N";
        }
        console.log("Exiting TDCSEG01_tdcman02_preInsert");
    }

    //#region PLSQL
    // BEGIN IF PLSQLBuiltins.string_length(:TDCMAN02.TDCDIV2) != 8 THEN
    //    MSG_ALERT('EL CODIGO DEBE 8 CARACTERES', 'E', TRUE);
    //   END IF; END;
    //#endregion
    async TDCSEG01_tdcman02_tdcdiv2_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman02_tdcdiv2_whenValidateItem");
        if (PLSQLBuiltins.string_length(this.TDCMAN02.TDCDIV2) != 8) {
            // TDCSEG01_MSG_ALERT("EL CODIGO DEBE 8 CARACTERES", "E", TRUE);
        }
        console.log("Exiting TDCSEG01_tdcman02_tdcdiv2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF (NVL(PLSQLBuiltins.string_length(:TDCMAN02.TDCDEP2), 0)=0) THEN
    //       MESSAGE('CAMPO ES OBLIGATORIO');
    //       RAISE FORM_TRIGGER_FAILURE;
    //     END IF; END;
    //#endregion
    async TDCSEG01_tdcman02_tdcdep2_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman02_tdcdep2_whenValidateItem");
        if (PLSQLBuiltins.string_length(this.TDCMAN02.TDCDEP2) == null ? 0 : PLSQLBuiltins.string_length(this.TDCMAN02.TDCDEP2) == 0) {
            this.oracleFormsBuiltins.message("CAMPO ES OBLIGATORIO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting TDCSEG01_tdcman02_tdcdep2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF PLSQLBuiltins.string_length(:TDCMAN02.TDCDES2) = 0 OR :TDCMAN02.TDCDES2 IS NULL THEN
    //    MSG_ALERT('EL CAMPO ES OBLIGATORIO', 'E', TRUE);
    //   END IF; END;
    //#endregion
    async TDCSEG01_tdcman02_tdcdes2_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman02_tdcdes2_whenValidateItem");
        if ((PLSQLBuiltins.string_length(this.TDCMAN02.TDCDES2) == 0 || (this.TDCMAN02.TDCDES2 == null))) {
            // TDCSEG01_MSG_ALERT("EL CAMPO ES OBLIGATORIO", "E", TRUE);
        }
        console.log("Exiting TDCSEG01_tdcman02_tdcdes2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF PLSQLBuiltins.string_length(:TDCMAN02.TDCCOD2)!= 3 THEN
    //    MSG_ALERT('EL CAMPO DEBE TENER 3 DÍGITOS', 'E', TRUE);
    //   END IF; END;
    //#endregion
    async TDCSEG01_tdcman02_tdccod2_whenValidateItem() {
        console.log("Entering TDCSEG01_tdcman02_tdccod2_whenValidateItem");
        if (PLSQLBuiltins.string_length(this.TDCMAN02.TDCCOD2) != 3) {
            // TDCSEG01_MSG_ALERT("EL CAMPO DEBE TENER 3 DÍGITOS", "E", TRUE);
        }
        console.log("Exiting TDCSEG01_tdcman02_tdccod2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_toolbar_whenButtonPressed() {
        console.log("Entering TDCSEG01_toolbar_whenButtonPressed");
        console.log("Exiting TDCSEG01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_toolbar_whenMouseLeave() {
        console.log("Entering TDCSEG01_toolbar_whenMouseLeave");
        console.log("Exiting TDCSEG01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_toolbar_whenNewFormInstance() {
        console.log("Entering TDCSEG01_toolbar_whenNewFormInstance");
        console.log("Exiting TDCSEG01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_toolbar_first_whenButtonPressed() {
        console.log("Entering TDCSEG01_toolbar_first_whenButtonPressed");
        console.log("Exiting TDCSEG01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async TDCSEG01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TDCSEG01_toolbar_lastr_whenButtonPressed");
        console.log("Exiting TDCSEG01_toolbar_lastr_whenButtonPressed");
    }

}

