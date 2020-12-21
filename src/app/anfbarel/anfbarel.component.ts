import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFBAREL business logic
import {
    ANTBALXREL_3,
    ANTBALXREL_2,
    ANTBALXREL_1,
    ANTBALXREL_7,
    ANTBALXREL_6,
    ANTBALXREL_5,
    ANTBALXREL_4,
    ANTBALXTER_P10,
    TOOLBAR,
    BASE,
    ANTBALXTER_7,
    ANTBALXTER_6,
    ANTBALXTER_5,
    ANTBALXTER_4,
    ANTBALXTER_3,
    ANTBALXTER_2,
    VARIABLE,
    ANTBALXTER_1,
    ANTBALXTER_9,
    ANTBALXTER_8,
    ANTBALXREL_13,
    ANTBALXREL_11,
    ANTBALXREL_12,
    ANTBALXREL,
    ANTBALXTER_10,
    ANTBALXREL_10,
    ANTBALXTER,
    ANTBALXTER_P6,
    ANTBALXTER_P7,
    ANTBALXTER_P4,
    ANTBALXTER_P5,
    ANTBALXTER_P2,
    ANTBALXTER_P11,
    ANTBALXTER_13,
    ANTBALXTER_P3,
    ANTBALXTER_P12,
    ANTBALXTER_11,
    ANTBALXTER_P13,
    ANTBALXTER_P,
    ANTBALXTER_P1,
    ANTBALXTER_12,
    ANTBALXREL_9,
    ANTBALXREL_8,
    ANTBALXTER_P8,
    ANTBALXTER_P9
} from "./ANFBAREL_models";



// class ANFBAREL
@Component({
    selector: 'app-anfbarel',
    templateUrl: './anfbarel.component.html',
})
export class AnfbarelComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([
        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTBALXREL_3: ANTBALXREL_3 = new ANTBALXREL_3();
    public ANTBALXREL_2: ANTBALXREL_2 = new ANTBALXREL_2();
    public ANTBALXREL_1: ANTBALXREL_1 = new ANTBALXREL_1();
    public ANTBALXREL_7: ANTBALXREL_7 = new ANTBALXREL_7();
    public ANTBALXREL_6: ANTBALXREL_6 = new ANTBALXREL_6();
    public ANTBALXREL_5: ANTBALXREL_5 = new ANTBALXREL_5();
    public ANTBALXREL_4: ANTBALXREL_4 = new ANTBALXREL_4();
    public ANTBALXTER_P10: ANTBALXTER_P10 = new ANTBALXTER_P10();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();
    public ANTBALXTER_7: ANTBALXTER_7 = new ANTBALXTER_7();
    public ANTBALXTER_6: ANTBALXTER_6 = new ANTBALXTER_6();
    public ANTBALXTER_5: ANTBALXTER_5 = new ANTBALXTER_5();
    public ANTBALXTER_4: ANTBALXTER_4 = new ANTBALXTER_4();
    public ANTBALXTER_3: ANTBALXTER_3 = new ANTBALXTER_3();
    public ANTBALXTER_2: ANTBALXTER_2 = new ANTBALXTER_2();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTBALXTER_1: ANTBALXTER_1 = new ANTBALXTER_1();
    public ANTBALXTER_9: ANTBALXTER_9 = new ANTBALXTER_9();
    public ANTBALXTER_8: ANTBALXTER_8 = new ANTBALXTER_8();
    public ANTBALXREL_13: ANTBALXREL_13 = new ANTBALXREL_13();
    public ANTBALXREL_11: ANTBALXREL_11 = new ANTBALXREL_11();
    public ANTBALXREL_12: ANTBALXREL_12 = new ANTBALXREL_12();
    public ANTBALXREL: ANTBALXREL = new ANTBALXREL();
    public ANTBALXTER_10: ANTBALXTER_10 = new ANTBALXTER_10();
    public ANTBALXREL_10: ANTBALXREL_10 = new ANTBALXREL_10();
    public ANTBALXTER: ANTBALXTER = new ANTBALXTER();
    public ANTBALXTER_P6: ANTBALXTER_P6 = new ANTBALXTER_P6();
    public ANTBALXTER_P7: ANTBALXTER_P7 = new ANTBALXTER_P7();
    public ANTBALXTER_P4: ANTBALXTER_P4 = new ANTBALXTER_P4();
    public ANTBALXTER_P5: ANTBALXTER_P5 = new ANTBALXTER_P5();
    public ANTBALXTER_P2: ANTBALXTER_P2 = new ANTBALXTER_P2();
    public ANTBALXTER_P11: ANTBALXTER_P11 = new ANTBALXTER_P11();
    public ANTBALXTER_13: ANTBALXTER_13 = new ANTBALXTER_13();
    public ANTBALXTER_P3: ANTBALXTER_P3 = new ANTBALXTER_P3();
    public ANTBALXTER_P12: ANTBALXTER_P12 = new ANTBALXTER_P12();
    public ANTBALXTER_11: ANTBALXTER_11 = new ANTBALXTER_11();
    public ANTBALXTER_P13: ANTBALXTER_P13 = new ANTBALXTER_P13();
    public ANTBALXTER_P: ANTBALXTER_P = new ANTBALXTER_P();
    public ANTBALXTER_P1: ANTBALXTER_P1 = new ANTBALXTER_P1();
    public ANTBALXTER_12: ANTBALXTER_12 = new ANTBALXTER_12();
    public ANTBALXREL_9: ANTBALXREL_9 = new ANTBALXREL_9();
    public ANTBALXREL_8: ANTBALXREL_8 = new ANTBALXREL_8();
    public ANTBALXTER_P8: ANTBALXTER_P8 = new ANTBALXTER_P8();
    public ANTBALXTER_P9: ANTBALXTER_P9 = new ANTBALXTER_P9();


    async ANFBAREL_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFBAREL_whenMouseDoubleclick() {
        console.log("Entering ANFBAREL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFBAREL_whenMouseDoubleclick");
    }

    async ANFBAREL_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // BEGIN SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    // 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //      :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE
    //      :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //  ---------------------------------------------------------------------
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
    // ---------------------------------------------------------
    // 
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // 
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :VARIABLE.NITTER  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFBAREL_whenNewFormInstance() {
        console.log("Entering ANFBAREL_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfbarel/anfbarel_whennewforminstance_query1", payload1);
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

        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.NITTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFBAREL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFBAREL_preForm() {
        console.log("Entering ANFBAREL_preForm");
        // ANFBAREL_PANTALLA();
        // ANFBAREL_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFBAREL_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFBAREL_keyUp() {
        console.log("Entering ANFBAREL_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFBAREL_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFBAREL_keyDown() {
        console.log("Entering ANFBAREL_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFBAREL_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL4
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='A4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL4:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel3_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_3/anfbarel_antbalxrel3_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL4 = result1[0].get("TOTAL_REL4");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_3.TOTAL_REL4 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel3_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL2
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='A3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel2_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_2/anfbarel_antbalxrel2_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL2 = result1[0].get("TOTAL_REL2");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_2.TOTAL_REL2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel2_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL1
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='A2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel1_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_1/anfbarel_antbalxrel1_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL1 = result1[0].get("TOTAL_REL1");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_1.TOTAL_REL1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel1_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL9
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='T2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL9:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel7_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel7_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_7/anfbarel_antbalxrel7_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL9 = result1[0].get("TOTAL_REL9");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_7.TOTAL_REL9 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel7_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL8
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='T1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL8:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel6_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel6_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_6/anfbarel_antbalxrel6_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL8 = result1[0].get("TOTAL_REL8");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_6.TOTAL_REL8 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel6_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL6
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='P2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL6:=0;
    // END;
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL7
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='P3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL7:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel5_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel5_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_5/anfbarel_antbalxrel5_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL6 = result1[0].get("TOTAL_REL6");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_5.TOTAL_REL6 = 0;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxrel_5/anfbarel_antbalxrel5_postquery_query2", payload2);
        // get values from result
        // TOTAL_REL7 = result2[0].get("TOTAL_REL7");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXREL_5.TOTAL_REL7 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel5_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL5
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='P1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL5:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel4_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel4_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_4/anfbarel_antbalxrel4_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL5 = result1[0].get("TOTAL_REL5");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_4.TOTAL_REL5 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel4_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_10.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_10.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PIN' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP10_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP10_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_10.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p10/anfbarel_antbalxterp10_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_10.DES_CUENTA = result1[0].get("ANTBALXTER_10.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFBAREL_antbalxterP10_postQuery");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFBAREL_toolbar_whenButtonPressed() {
        console.log("Entering ANFBAREL_toolbar_whenButtonPressed");
        // ANFBAREL_TOOLBAR_ACTIONS();
        console.log("Exiting ANFBAREL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFBAREL_toolbar_whenMouseLeave() {
        console.log("Entering ANFBAREL_toolbar_whenMouseLeave");
        // ANFBAREL_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFBAREL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFBAREL_toolbar_whenNewFormInstance() {
        console.log("Entering ANFBAREL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFBAREL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_7.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_7.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PT'
    //     AND DEFCTA_TIPCTA ='VAL' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFBAREL_antbalxter7_postQuery() {
        console.log("Entering ANFBAREL_antbalxter7_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_7.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_7/anfbarel_antbalxter7_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_7.DES_CUENTA = result1[0].get("ANTBALXTER_7.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFBAREL_antbalxter7_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_6.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_6.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PT'
    //     AND DEFCTA_TIPCTA ='PTM' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_T1,:TOTAL_PT1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='T1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_T1:=0;
    //     :TOTAL_PT1:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_T2,:TOTAL_PT2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='T2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_T2:=0;
    //     :TOTAL_PT2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter6_postQuery() {
        console.log("Entering ANFBAREL_antbalxter6_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_6.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_6/anfbarel_antbalxter6_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_6.DES_CUENTA = result1[0].get("ANTBALXTER_6.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_6/anfbarel_antbalxter6_postquery_query2", payload2);
        // get values from result
        // TOTAL_T1 = result2[0].get("TOTAL_T1");
        // TOTAL_PT1 = result2[0].get("TOTAL_PT1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_6.TOTAL_T1 = 0;
            // this.ANTBALXTER_6.TOTAL_PT1 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfbarel_antbalxter_6/anfbarel_antbalxter6_postquery_query3", payload3);
        // get values from result
        // TOTAL_T2 = result3[0].get("TOTAL_T2");
        // TOTAL_PT2 = result3[0].get("TOTAL_PT2");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_6.TOTAL_T2 = 0;
            // this.ANTBALXTER_6.TOTAL_PT2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter6_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_5.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_5.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PS'
    //     AND DEFCTA_TIPCTA ='PNC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P2,:TOTAL_PP2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='P2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P2:=0;
    //     :TOTAL_PP2:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P3,:TOTAL_PP3
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='P3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P3:=0;
    //     :TOTAL_PP3:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter5_postQuery() {
        console.log("Entering ANFBAREL_antbalxter5_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_5.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_5/anfbarel_antbalxter5_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_5.DES_CUENTA = result1[0].get("ANTBALXTER_5.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_5/anfbarel_antbalxter5_postquery_query2", payload2);
        // get values from result
        // TOTAL_P2 = result2[0].get("TOTAL_P2");
        // TOTAL_PP2 = result2[0].get("TOTAL_PP2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_5.TOTAL_P2 = 0;
            // this.ANTBALXTER_5.TOTAL_PP2 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfbarel_antbalxter_5/anfbarel_antbalxter5_postquery_query3", payload3);
        // get values from result
        // TOTAL_P3 = result3[0].get("TOTAL_P3");
        // TOTAL_PP3 = result3[0].get("TOTAL_PP3");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_5.TOTAL_P3 = 0;
            // this.ANTBALXTER_5.TOTAL_PP3 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter5_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_4.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_4.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PS'
    //     AND DEFCTA_TIPCTA ='PAC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P1,:TOTAL_PP1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='P1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P1:=0;
    //     :TOTAL_PP1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter4_postQuery() {
        console.log("Entering ANFBAREL_antbalxter4_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_4.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_4/anfbarel_antbalxter4_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_4.DES_CUENTA = result1[0].get("ANTBALXTER_4.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_4/anfbarel_antbalxter4_postquery_query2", payload2);
        // get values from result
        // TOTAL_P1 = result2[0].get("TOTAL_P1");
        // TOTAL_PP1 = result2[0].get("TOTAL_PP1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_4.TOTAL_P1 = 0;
            // this.ANTBALXTER_4.TOTAL_PP1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter4_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_3.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_3.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='VAL' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFBAREL_antbalxter3_postQuery() {
        console.log("Entering ANFBAREL_antbalxter3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_3.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_3/anfbarel_antbalxter3_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_3.DES_CUENTA = result1[0].get("ANTBALXTER_3.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFBAREL_antbalxter3_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_2.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_2.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='ANC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_A3,:TOTAL_PA3
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='A3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A3:=0;
    //     :TOTAL_PA3:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_A4,:TOTAL_PA4
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='A4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A4:=0;
    //     :TOTAL_PA4:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter2_postQuery() {
        console.log("Entering ANFBAREL_antbalxter2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_2.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_2/anfbarel_antbalxter2_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_2.DES_CUENTA = result1[0].get("ANTBALXTER_2.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_2/anfbarel_antbalxter2_postquery_query2", payload2);
        // get values from result
        // TOTAL_A3 = result2[0].get("TOTAL_A3");
        // TOTAL_PA3 = result2[0].get("TOTAL_PA3");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_2.TOTAL_A3 = 0;
            // this.ANTBALXTER_2.TOTAL_PA3 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfbarel_antbalxter_2/anfbarel_antbalxter2_postquery_query3", payload3);
        // get values from result
        // TOTAL_A4 = result3[0].get("TOTAL_A4");
        // TOTAL_PA4 = result3[0].get("TOTAL_PA4");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_2.TOTAL_A4 = 0;
            // this.ANTBALXTER_2.TOTAL_PA4 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter2_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    // BEGIN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD_2
    //    FROM PER
    //    WHERE PERCOD=:PERCOD_2;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // BEGIN
    //   SELECT DIAXBA_DIASAN
    //     INTO :ANUAL_P2
    //     FROM ANTDIASXBAL
    //     WHERE DIAXBA_CODTER  =:NITTER
    //       AND DIAXBA_CODPER  =:PERCOD_2;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO SIN DIAS ANUALIZAR ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //  IF SUBSTR(:PERCOD,1,1)='9' THEN
    //     VPERIODO1:='19'||:PERCOD;
    //  ELSIF SUBSTR(:PERCOD,1,1)='0' THEN
    //     VPERIODO1:='20'||:PERCOD;
    //  END IF;
    //  IF SUBSTR(:PERCOD_2,1,1)='9' THEN
    //     VPERIODO2:='19'||:PERCOD_2;
    //  ELSIF SUBSTR(:PERCOD_2,1,1)='0' THEN
    //     VPERIODO2:='20'||:PERCOD_2;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO1) =TO_NUMBER(VPERIODO2) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES IGUAL AL PERIODO 2 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO1) >TO_NUMBER(VPERIODO2) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES MAYOR AL PERIODO 2 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;  
    //#endregion
    async ANFBAREL_variable_percod2_whenValidateItem() {
        console.log("Entering ANFBAREL_variable_percod2_whenValidateItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_variable/anfbarel_variable_percod2_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD_2 = result1[0].get("DES_PERCOD_2");
        if (result1 == null || result1.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_variable/anfbarel_variable_percod2_whenvalidateitem_query2", payload2);
        // get values from result
        this.VARIABLE.ANUAL_P2 = result2[0].get("ANUAL_P2");
        if (result2 == null || result2.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO SIN DIAS ANUALIZAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "9") {
            VPERIODO1 = "19" + this.VARIABLE.PERCOD;
        }
        else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "0") {
            VPERIODO1 = "20" + this.VARIABLE.PERCOD;
        }
        if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "9") {
            VPERIODO2 = "19" + this.VARIABLE.PERCOD_2;
        }
        else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "0") {
            VPERIODO2 = "20" + this.VARIABLE.PERCOD_2;
        }
        if (PLSQLBuiltins.to_number(VPERIODO1) == PLSQLBuiltins.to_number(VPERIODO2)) {
            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO2)) {
            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFBAREL_variable_percod2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTBALXTER');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2');
    // END;
    //#endregion
    async ANFBAREL_variable_volverPasivo_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_volverPasivo_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFBAREL_variable_volverPasivo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //   IF :VARIABLE.NITTER IS NULL OR :VARIABLE.PERCOD IS NULL OR :VARIABLE.PERCOD_2 IS NULL THEN
    //      LIB$ALERTA('MENSAJE','TERCERO SIN SELECCIONAR O PERIODO 1 SIN SELECCIONAR O PERIODO 2 SIN SELECCIONAR ..',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //    V_CONTADOR:=0;
    //        BEGIN
    //        SELECT COUNT(*)
    //          INTO V_CONTADOR
    //          FROM ANTBALXREL
    //        WHERE BAXREL_CODTER=:NITTER
    //          AND BAXREL_CODPE1=:PERCOD
    //          AND BAXREL_CODPE2=:PERCOD_2;
    //      END;
    //   
    //    IF V_CONTADOR > 0 THEN
    //     BEGIN
    //       DELETE FROM ANTBALXREL
    //        WHERE BAXREL_CODTER=:NITTER
    //          AND BAXREL_CODPE1=:PERCOD
    //          AND BAXREL_CODPE2=:PERCOD_2;
    //      END;
    //      COMMIT;
    //    END IF;
    //         PBD_COL_RELACIONBAL(:NITTER,:PERCOD,:PERCOD_2,:ANUAL_P1,:ANUAL_P2);
    //         COMMIT;
    //   GO_BLOCK('ANTBALXTER');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL');
    //  EXECUTE_QUERY;
    //         GO_BLOCK('ANTBALXTER_2');
    //      EXECUTE_QUERY;
    //         GO_BLOCK('ANTBALXREL_2');
    //  EXECUTE_QUERY; 
    //         GO_BLOCK('ANTBALXTER_P');
    //      EXECUTE_QUERY;
    //        GO_BLOCK('ANTBALXTER_P2');
    //        EXECUTE_QUERY;
    //         GO_BLOCK('ANTBALXTER');
    // 
    // END IF;
    // END;
    //#endregion
    async ANFBAREL_variable_procesar_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_procesar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((((this.VARIABLE.NITTER == null) || (this.VARIABLE.PERCOD == null)) || (this.VARIABLE.PERCOD_2 == null))) {
            // ANFBAREL_LIB$ALERTA("MENSAJE", "TERCERO SIN SELECCIONAR O PERIODO 1 SIN SELECCIONAR O PERIODO 2 SIN SELECCIONAR ..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            V_CONTADOR = 0;
            // construct payload
            let payload1 = new Map();
            payload1.set("NITTER", this.VARIABLE.NITTER);
            payload1.set("PERCOD", this.VARIABLE.PERCOD);
            payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
            // call REST API
            const result1 = await Rest.post("/anfbarel_variable/anfbarel_variable_procesar_whenmouseclick_query1", payload1);
            // get values from result
            V_CONTADOR = result1[0].get("V_CONTADOR");
            if (V_CONTADOR > 0) {
                // construct payload
                let payload2 = new Map();
                // payload2.NITTER = : NITTER;
                // payload2.PERCOD = : PERCOD;
                // payload2.PERCOD_2 = : PERCOD_2;
                // call REST API
                const result2 = await Rest.post("/anfbarel_variable/anfbarel_variable_procesar_whenmouseclick_query2", payload2);
            }
            // ANFBAREL_PBD_COL_RELACIONBAL(NITTER, PERCOD, PERCOD_2, ANUAL_P1, ANUAL_P2);
            this.oracleFormsBuiltins.go_block("ANTBALXTER");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXREL");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_2");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXREL_2");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_P");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_P2");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER");
        }
        console.log("Exiting ANFBAREL_variable_procesar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    //  GO_BLOCK('ANTBALXTER_8');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS3_1');
    // END;
    //#endregion
    async ANFBAREL_variable_volver31_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_volver31_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_8");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS3_1");
        console.log("Exiting ANFBAREL_variable_volver31_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN     
    // 
    //  GO_BLOCK('ANTBALXTER_6');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P6');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_6');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_7');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P7');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_7');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_6');
    // END;
    //#endregion
    async ANFBAREL_variable_siguiente21_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_siguiente21_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_6");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P6");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_6");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_7");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P7");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_7");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_6");
        console.log("Exiting ANFBAREL_variable_siguiente21_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    //  GO_BLOCK('ANTBALXTER_6');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS3');
    // END;
    //#endregion
    async ANFBAREL_variable_volver3_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_volver3_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_6");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS3");
        console.log("Exiting ANFBAREL_variable_volver3_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTBALXTER_8');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P8');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_8');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_9');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P9');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_9');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_10');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_10');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P10');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_11');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P11');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_11');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_8');
    // END;
    //#endregion
    async ANFBAREL_variable_siguiente22_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_siguiente22_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_8");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P8");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_8");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_9");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P9");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_9");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_10");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_10");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P10");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_11");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P11");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_11");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_8");
        console.log("Exiting ANFBAREL_variable_siguiente22_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPTER TER.TERPER%TYPE; 
    // BEGIN
    //  BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) ,TERPER
    //    INTO :DES_NITTER,TIPTER
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // IF TIPTER <> 'J' THEN  
    //      LIB$ALERTA ('MENSAJE','TERCERO DIFERENTE A PERSONA JURIDICA ...',NULL,NULL,NULL,T_RESPUESTA);
    //   
    // END IF;
    // END;  
    //#endregion
    async ANFBAREL_variable_nitter_whenValidateItem() {
        console.log("Entering ANFBAREL_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfbarel_variable/anfbarel_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPTER != "J") {
            // ANFBAREL_LIB$ALERTA("MENSAJE", "TERCERO DIFERENTE A PERSONA JURIDICA ...", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting ANFBAREL_variable_nitter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    // BEGIN   
    //  IF :VARIABLE.NITTER IS NULL OR :VARIABLE.PERCOD IS NULL OR :VARIABLE.PERCOD_2 IS NULL THEN
    //      LIB$ALERTA('MENSAJE','TERCERO SIN SELECCIONAR O PERIODO 1 SIN SELECCIONAR O PERIODO 2 SIN SELECCIONAR ..',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE   
    //  GO_BLOCK('ANTBALXTER_1');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P1');
    //  EXECUTE_QUERY;
    //   GO_BLOCK('ANTBALXREL_1');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_3');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P3');
    //  EXECUTE_QUERY;
    //   GO_BLOCK('ANTBALXREL_3');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_1');
    // END IF;
    // END;
    //#endregion
    async ANFBAREL_variable_siguiente_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_siguiente_whenMouseClick");
        let T_RESPUESTA: number = null;
        if ((((this.VARIABLE.NITTER == null) || (this.VARIABLE.PERCOD == null)) || (this.VARIABLE.PERCOD_2 == null))) {
            // ANFBAREL_LIB$ALERTA("MENSAJE", "TERCERO SIN SELECCIONAR O PERIODO 1 SIN SELECCIONAR O PERIODO 2 SIN SELECCIONAR ..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_P1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXREL_1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_3");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_P3");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXREL_3");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        }
        console.log("Exiting ANFBAREL_variable_siguiente_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    //  GO_BLOCK('ANTBALXTER_4');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2_2');
    // END;
    //#endregion
    async ANFBAREL_variable_volvel22_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_volvel22_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2_2");
        console.log("Exiting ANFBAREL_variable_volvel22_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFBAREL_variable_anualP2_whenValidateItem() {
        console.log("Entering ANFBAREL_variable_anualP2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfbarel_variable/anfbarel_variable_anualp2_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFBAREL_variable_anualP2_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFBAREL_variable_anualP1_whenValidateItem() {
        console.log("Entering ANFBAREL_variable_anualP1_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfbarel_variable/anfbarel_variable_anualp1_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFBAREL_variable_anualP1_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // BEGIN
    //   SELECT DIAXBA_DIASAN
    //     INTO :ANUAL_P1
    //     FROM ANTDIASXBAL
    //     WHERE DIAXBA_CODTER  =:NITTER
    //       AND DIAXBA_CODPER  =:PERCOD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO SIN DIAS ANUALIZAR ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END;  
    //#endregion
    async ANFBAREL_variable_percod_whenValidateItem() {
        console.log("Entering ANFBAREL_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfbarel_variable/anfbarel_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_variable/anfbarel_variable_percod_whenvalidateitem_query2", payload2);
        // get values from result
        this.VARIABLE.ANUAL_P1 = result2[0].get("ANUAL_P1");
        if (result2 == null || result2.length == 0) {

            // ANFBAREL_LIB$ALERTA("MENSAJE", "PERIODO SIN DIAS ANUALIZAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFBAREL_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTBALXTER_4');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P4');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_4');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_5');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P5');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_5');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_4');
    // END;
    //#endregion
    async ANFBAREL_variable_suguiente2_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_suguiente2_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P4");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_4");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_5");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P5");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_5");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
        console.log("Exiting ANFBAREL_variable_suguiente2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    // 
    //  GO_BLOCK('ANTBALXTER_1');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2_1');
    // END;
    //#endregion
    async ANFBAREL_variable_volver21_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_volver21_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2_1");
        console.log("Exiting ANFBAREL_variable_volver21_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // 
    //  V_PROGRAMA VARCHAR2(10);
    // 
    // BEGIN
    //  COMMIT_FORM;
    //   V_PROGRAMA := F_SIGUIENTE_F;
    //  PUP_LLAMAR_SIGUIENTE (V_PROGRAMA);
    // 
    // END;
    //#endregion
    async ANFBAREL_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFBAREL_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFBAREL_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFBAREL_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTBALXTER_12');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P12');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_12');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_13');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_P13');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXREL_13');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_12');
    //  HIDE_VIEW('CANVAS3');
    // END;
    //#endregion
    async ANFBAREL_variable_siguiente3_whenMouseClick() {
        console.log("Entering ANFBAREL_variable_siguiente3_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_12");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P12");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_12");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_13");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_P13");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXREL_13");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_12");
        this.oracleFormsBuiltins.hide_view("CANVAS3");
        console.log("Exiting ANFBAREL_variable_siguiente3_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_1.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_1.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='ACF' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_A2,:TOTAL_PA2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='A2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A2:=0;
    //     :TOTAL_PA2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter1_postQuery() {
        console.log("Entering ANFBAREL_antbalxter1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_1.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_1/anfbarel_antbalxter1_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_1.DES_CUENTA = result1[0].get("ANTBALXTER_1.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_1/anfbarel_antbalxter1_postquery_query2", payload2);
        // get values from result
        // TOTAL_A2 = result2[0].get("TOTAL_A2");
        // TOTAL_PA2 = result2[0].get("TOTAL_PA2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_1.TOTAL_A2 = 0;
            // this.ANTBALXTER_1.TOTAL_PA2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter1_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_9.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_9.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PUO' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_G2,:TOTAL_PG2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='G2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G2:=0;
    //     :TOTAL_PG2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter9_postQuery() {
        console.log("Entering ANFBAREL_antbalxter9_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_9.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_9/anfbarel_antbalxter9_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_9.DES_CUENTA = result1[0].get("ANTBALXTER_9.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_9/anfbarel_antbalxter9_postquery_query2", payload2);
        // get values from result
        // TOTAL_G2 = result2[0].get("TOTAL_G2");
        // TOTAL_PG2 = result2[0].get("TOTAL_PG2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_9.TOTAL_G2 = 0;
            // this.ANTBALXTER_9.TOTAL_PG2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter9_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_8.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_8.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PUB' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_G1,:TOTAL_PG1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='G1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G1:=0;
    //     :TOTAL_PG1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter8_postQuery() {
        console.log("Entering ANFBAREL_antbalxter8_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_8.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_8/anfbarel_antbalxter8_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_8.DES_CUENTA = result1[0].get("ANTBALXTER_8.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_8/anfbarel_antbalxter8_postquery_query2", payload2);
        // get values from result
        // TOTAL_G1 = result2[0].get("TOTAL_G1");
        // TOTAL_PG1 = result2[0].get("TOTAL_PG1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_8.TOTAL_G1 = 0;
            // this.ANTBALXTER_8.TOTAL_PG1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter8_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL14
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='G5';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL14:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel13_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel13_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_13/anfbarel_antbalxrel13_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL14 = result1[0].get("TOTAL_REL14");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_13.TOTAL_REL14 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel13_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL12
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='G3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL12:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel11_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel11_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_11/anfbarel_antbalxrel11_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL12 = result1[0].get("TOTAL_REL12");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_11.TOTAL_REL12 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel11_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL13
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='G4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL13:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel12_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel12_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_12/anfbarel_antbalxrel12_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL13 = result1[0].get("TOTAL_REL13");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_12.TOTAL_REL13 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel12_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='A1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel/anfbarel_antbalxrel_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL = result1[0].get("TOTAL_REL");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL.TOTAL_REL = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_10.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_10.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PIN' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFBAREL_antbalxter10_postQuery() {
        console.log("Entering ANFBAREL_antbalxter10_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_10.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_10/anfbarel_antbalxter10_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_10.DES_CUENTA = result1[0].get("ANTBALXTER_10.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFBAREL_antbalxter10_postQuery");
    }

    async ANFBAREL_antbalxrel10_postQuery() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='ACC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_A1,:TOTAL_PA1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='A1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A1:=0;
    //     :TOTAL_PA1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter_postQuery() {
        console.log("Entering ANFBAREL_antbalxter_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter/anfbarel_antbalxter_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER.DES_CUENTA = result1[0].get("ANTBALXTER.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter/anfbarel_antbalxter_postquery_query2", payload2);
        // get values from result
        // TOTAL_A1 = result2[0].get("TOTAL_A1");
        // TOTAL_PA1 = result2[0].get("TOTAL_PA1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER.TOTAL_A1 = 0;
            // this.ANTBALXTER.TOTAL_PA1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P6.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P6.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PT'
    //     AND DEFCTA_TIPCTA ='PTM' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_T1,:TOTAL_P_PT1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='T1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_T1:=0;
    //     :TOTAL_P_PT1:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_T2,:TOTAL_P_PT2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='T2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_T2:=0;
    //     :TOTAL_P_PT2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP6_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP6_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P6.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p6/anfbarel_antbalxterp6_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P6.DES_CUENTA = result1[0].get("ANTBALXTER_P6.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p6/anfbarel_antbalxterp6_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_T1 = result2[0].get("TOTAL_P_T1");
        // TOTAL_P_PT1 = result2[0].get("TOTAL_P_PT1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P6.TOTAL_P_T1 = 0;
            // this.ANTBALXTER_P6.TOTAL_P_PT1 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result3 = await Rest.post("/anfbarel_antbalxter_p6/anfbarel_antbalxterp6_postquery_query3", payload3);
        // get values from result
        // TOTAL_P_T2 = result3[0].get("TOTAL_P_T2");
        // TOTAL_P_PT2 = result3[0].get("TOTAL_P_PT2");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_P6.TOTAL_P_T2 = 0;
            // this.ANTBALXTER_P6.TOTAL_P_PT2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP6_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_7.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_7.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PT'
    //     AND DEFCTA_TIPCTA ='VAL' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP7_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP7_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_7.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p7/anfbarel_antbalxterp7_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_7.DES_CUENTA = result1[0].get("ANTBALXTER_7.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFBAREL_antbalxterP7_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P4.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P4.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PS'
    //     AND DEFCTA_TIPCTA ='PAC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_P1,:TOTAL_P_PP1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='P1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_P1:=0;
    //     :TOTAL_P_PP1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP4_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP4_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P4.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p4/anfbarel_antbalxterp4_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P4.DES_CUENTA = result1[0].get("ANTBALXTER_P4.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p4/anfbarel_antbalxterp4_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_P1 = result2[0].get("TOTAL_P_P1");
        // TOTAL_P_PP1 = result2[0].get("TOTAL_P_PP1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P4.TOTAL_P_P1 = 0;
            // this.ANTBALXTER_P4.TOTAL_P_PP1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP4_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P5.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P5.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PS'
    //     AND DEFCTA_TIPCTA ='PNC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_P2,:TOTAL_P_PP2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='P2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_P2:=0;
    //     :TOTAL_P_PP2:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_P3,:TOTAL_P_PP3
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='P3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_P3:=0;
    //     :TOTAL_P_PP3:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP5_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP5_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P5.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p5/anfbarel_antbalxterp5_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P5.DES_CUENTA = result1[0].get("ANTBALXTER_P5.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p5/anfbarel_antbalxterp5_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_P2 = result2[0].get("TOTAL_P_P2");
        // TOTAL_P_PP2 = result2[0].get("TOTAL_P_PP2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P5.TOTAL_P_P2 = 0;
            // this.ANTBALXTER_P5.TOTAL_P_PP2 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result3 = await Rest.post("/anfbarel_antbalxter_p5/anfbarel_antbalxterp5_postquery_query3", payload3);
        // get values from result
        // TOTAL_P_P3 = result3[0].get("TOTAL_P_P3");
        // TOTAL_P_PP3 = result3[0].get("TOTAL_P_PP3");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_P5.TOTAL_P_P3 = 0;
            // this.ANTBALXTER_P5.TOTAL_P_PP3 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP5_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P2.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P2.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='ANC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_A3,:TOTAL_P_PA3
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='A3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A3:=0;
    //     :TOTAL_P_PA3:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_A4,:TOTAL_P_PA4
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='A4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A4:=0;
    //     :TOTAL_P_PA4:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP2_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P2.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p2/anfbarel_antbalxterp2_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P2.DES_CUENTA = result1[0].get("ANTBALXTER_P2.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p2/anfbarel_antbalxterp2_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_A3 = result2[0].get("TOTAL_P_A3");
        // TOTAL_P_PA3 = result2[0].get("TOTAL_P_PA3");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P2.TOTAL_P_A3 = 0;
            // this.ANTBALXTER_P2.TOTAL_P_PA3 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result3 = await Rest.post("/anfbarel_antbalxter_p2/anfbarel_antbalxterp2_postquery_query3", payload3);
        // get values from result
        // TOTAL_P_A4 = result3[0].get("TOTAL_P_A4");
        // TOTAL_P_PA4 = result3[0].get("TOTAL_P_PA4");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_P2.TOTAL_P_A4 = 0;
            // this.ANTBALXTER_P2.TOTAL_P_PA4 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP2_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P11.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P11.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PEG' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_G3,:TOTAL_P_PG3
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='G3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_G3:=0;
    //     :TOTAL_P_PG3:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP11_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP11_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P11.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p11/anfbarel_antbalxterp11_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P11.DES_CUENTA = result1[0].get("ANTBALXTER_P11.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p11/anfbarel_antbalxterp11_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_G3 = result2[0].get("TOTAL_P_G3");
        // TOTAL_P_PG3 = result2[0].get("TOTAL_P_PG3");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P11.TOTAL_P_G3 = 0;
            // this.ANTBALXTER_P11.TOTAL_P_PG3 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP11_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_13.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_13.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='UTI' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_G5,:TOTAL_PG5
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='G5';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G5:=0;
    //     :TOTAL_PG5:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter13_postQuery() {
        console.log("Entering ANFBAREL_antbalxter13_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_13.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_13/anfbarel_antbalxter13_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_13.DES_CUENTA = result1[0].get("ANTBALXTER_13.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_13/anfbarel_antbalxter13_postquery_query2", payload2);
        // get values from result
        // TOTAL_G5 = result2[0].get("TOTAL_G5");
        // TOTAL_PG5 = result2[0].get("TOTAL_PG5");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_13.TOTAL_G5 = 0;
            // this.ANTBALXTER_13.TOTAL_PG5 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter13_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P3.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P3.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='VAL' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP3_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P3.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p3/anfbarel_antbalxterp3_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P3.DES_CUENTA = result1[0].get("ANTBALXTER_P3.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFBAREL_antbalxterP3_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P12.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P12.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='UAI' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_G4,:TOTAL_P_PG4
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='G4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_G4:=0;
    //     :TOTAL_P_PG4:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP12_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP12_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P12.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p12/anfbarel_antbalxterp12_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P12.DES_CUENTA = result1[0].get("ANTBALXTER_P12.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p12/anfbarel_antbalxterp12_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_G4 = result2[0].get("TOTAL_P_G4");
        // TOTAL_P_PG4 = result2[0].get("TOTAL_P_PG4");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P12.TOTAL_P_G4 = 0;
            // this.ANTBALXTER_P12.TOTAL_P_PG4 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP12_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_11.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_11.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PEG' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_G3,:TOTAL_PG3
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='G3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G3:=0;
    //     :TOTAL_PG3:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter11_postQuery() {
        console.log("Entering ANFBAREL_antbalxter11_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_11.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_11/anfbarel_antbalxter11_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_11.DES_CUENTA = result1[0].get("ANTBALXTER_11.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_11/anfbarel_antbalxter11_postquery_query2", payload2);
        // get values from result
        // TOTAL_G3 = result2[0].get("TOTAL_G3");
        // TOTAL_PG3 = result2[0].get("TOTAL_PG3");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_11.TOTAL_G3 = 0;
            // this.ANTBALXTER_11.TOTAL_PG3 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter11_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P13.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P13.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='UTI' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_G5,:TOTAL_P_PG5
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='G5';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_G5:=0;
    //     :TOTAL_P_PG5:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP13_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP13_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P13.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p13/anfbarel_antbalxterp13_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P13.DES_CUENTA = result1[0].get("ANTBALXTER_P13.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p13/anfbarel_antbalxterp13_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_G5 = result2[0].get("TOTAL_P_G5");
        // TOTAL_P_PG5 = result2[0].get("TOTAL_P_PG5");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P13.TOTAL_P_G5 = 0;
            // this.ANTBALXTER_P13.TOTAL_P_PG5 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP13_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='ACC' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_A1,:TOTAL_P_PA1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='A1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A1:=0;
    //     :TOTAL_P_PA1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p/anfbarel_antbalxterp_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P.DES_CUENTA = result1[0].get("ANTBALXTER_P.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p/anfbarel_antbalxterp_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_A1 = result2[0].get("TOTAL_P_A1");
        // TOTAL_P_PA1 = result2[0].get("TOTAL_P_PA1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P.TOTAL_P_A1 = 0;
            // this.ANTBALXTER_P.TOTAL_P_PA1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P1.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P1.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='AC'
    //     AND DEFCTA_TIPCTA ='ACF' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_A2,:TOTAL_P_PA2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='A2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A2:=0;
    //     :TOTAL_P_PA2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP1_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P1.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p1/anfbarel_antbalxterp1_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P1.DES_CUENTA = result1[0].get("ANTBALXTER_P1.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p1/anfbarel_antbalxterp1_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_A2 = result2[0].get("TOTAL_P_A2");
        // TOTAL_P_PA2 = result2[0].get("TOTAL_P_PA2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P1.TOTAL_P_A2 = 0;
            // this.ANTBALXTER_P1.TOTAL_P_PA2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP1_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_12.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_12.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='UAI' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_G4,:TOTAL_PG4
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD
    //      AND SUMBAL_SUMCOD='G4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G4:=0;
    //     :TOTAL_PG4:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxter12_postQuery() {
        console.log("Entering ANFBAREL_antbalxter12_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_12.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_12/anfbarel_antbalxter12_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_12.DES_CUENTA = result1[0].get("ANTBALXTER_12.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_12/anfbarel_antbalxter12_postquery_query2", payload2);
        // get values from result
        // TOTAL_G4 = result2[0].get("TOTAL_G4");
        // TOTAL_PG4 = result2[0].get("TOTAL_PG4");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_12.TOTAL_G4 = 0;
            // this.ANTBALXTER_12.TOTAL_PG4 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxter12_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL11
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='G2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL11:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel9_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel9_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_9/anfbarel_antbalxrel9_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL11 = result1[0].get("TOTAL_REL11");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_9.TOTAL_REL11 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel9_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMREL_SUMVAL
    //     INTO :TOTAL_REL10
    //     FROM ANTSUMREL
    //    WHERE SUMREL_CODTER=:NITTER
    //      AND SUMREL_CODPE1=:PERCOD
    //      AND SUMREL_CODPE2=:PERCOD_2
    //      AND SUMREL_SUMCOD='G1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL10:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxrel8_postQuery() {
        console.log("Entering ANFBAREL_antbalxrel8_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxrel_8/anfbarel_antbalxrel8_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL10 = result1[0].get("TOTAL_REL10");
        if (result1 == null || result1.length == 0) {

            // this.ANTBALXREL_8.TOTAL_REL10 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxrel8_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P8.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P8.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PUB' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_G1,:TOTAL_P_PG1
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='G1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_G1:=0;
    //     :TOTAL_P_PG1:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP8_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP8_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P8.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p8/anfbarel_antbalxterp8_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P8.DES_CUENTA = result1[0].get("ANTBALXTER_P8.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p8/anfbarel_antbalxterp8_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_G1 = result2[0].get("TOTAL_P_G1");
        // TOTAL_P_PG1 = result2[0].get("TOTAL_P_PG1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P8.TOTAL_P_G1 = 0;
            // this.ANTBALXTER_P8.TOTAL_P_PG1 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP8_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCTA_DESCTA 
    //   INTO   :ANTBALXTER_P9.DES_CUENTA
    //    FROM ANTDEFCTAS
    //   WHERE DEFCTA_CODCTA =:ANTBALXTER_P9.BAXTER_CODCTA
    //     AND DEFCTA_GRUCTA ='PG'
    //     AND DEFCTA_TIPCTA ='PUO' ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_P_G2,:TOTAL_P_PG2
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:NITTER
    //      AND SUMBAL_CODPER=:PERCOD_2
    //      AND SUMBAL_SUMCOD='G2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_G2:=0;
    //     :TOTAL_P_PG2:=0;
    // END;
    //#endregion
    async ANFBAREL_antbalxterP9_postQuery() {
        console.log("Entering ANFBAREL_antbalxterP9_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_P9.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfbarel_antbalxter_p9/anfbarel_antbalxterp9_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_P9.DES_CUENTA = result1[0].get("ANTBALXTER_P9.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result2 = await Rest.post("/anfbarel_antbalxter_p9/anfbarel_antbalxterp9_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_G2 = result2[0].get("TOTAL_P_G2");
        // TOTAL_P_PG2 = result2[0].get("TOTAL_P_PG2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_P9.TOTAL_P_G2 = 0;
            // this.ANTBALXTER_P9.TOTAL_P_PG2 = 0;
        }

        console.log("Exiting ANFBAREL_antbalxterP9_postQuery");
    }

}

