import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCONBNU business logic
import {
    ANTBALXTER_10,
    TOOLBAR,
    ANTBALXTER,
    BASE,
    ANTBALXTER_7,
    ANTBALXTER_6,
    ANTBALXTER_5,
    ANTBALXTER_4,
    ANTBALXTER_3,
    ANTBALXTER_13,
    ANTBALXTER_2,
    VARIABLE,
    ANTBALXTER_1,
    ANTBALXTER_11,
    ANTBALXTER_12,
    ANTBALXTER_9,
    ANTBALXTER_8
} from "./ANFCONBNU_models";



// class ANFCONBNU
@Component({
    selector: 'app-anfconbnu',
    templateUrl: './anfconbnu.component.html',
})
export class AnfconbnuComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTBALXTER_10: ANTBALXTER_10 = new ANTBALXTER_10();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTBALXTER: ANTBALXTER = new ANTBALXTER();
    public BASE: BASE = new BASE();
    public ANTBALXTER_7: ANTBALXTER_7 = new ANTBALXTER_7();
    public ANTBALXTER_6: ANTBALXTER_6 = new ANTBALXTER_6();
    public ANTBALXTER_5: ANTBALXTER_5 = new ANTBALXTER_5();
    public ANTBALXTER_4: ANTBALXTER_4 = new ANTBALXTER_4();
    public ANTBALXTER_3: ANTBALXTER_3 = new ANTBALXTER_3();
    public ANTBALXTER_13: ANTBALXTER_13 = new ANTBALXTER_13();
    public ANTBALXTER_2: ANTBALXTER_2 = new ANTBALXTER_2();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTBALXTER_1: ANTBALXTER_1 = new ANTBALXTER_1();
    public ANTBALXTER_11: ANTBALXTER_11 = new ANTBALXTER_11();
    public ANTBALXTER_12: ANTBALXTER_12 = new ANTBALXTER_12();
    public ANTBALXTER_9: ANTBALXTER_9 = new ANTBALXTER_9();
    public ANTBALXTER_8: ANTBALXTER_8 = new ANTBALXTER_8();


    async ANFCONBNU_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   CLEAR_ALL_MASTER_DETAILS;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCONBNU_onClearDetails() {
        console.log("Entering ANFCONBNU_onClearDetails");
        // ANFCONBNU_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFCONBNU_onClearDetails");
    }

    async ANFCONBNU_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFCONBNU_whenMouseDoubleclick() {
        console.log("Entering ANFCONBNU_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFCONBNU_whenMouseDoubleclick");
    }

    async ANFCONBNU_keyCrerec() {
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
    // -------------------------------------------------------
    // ENTER_QUERY; END;
    //#endregion
    async ANFCONBNU_whenNewFormInstance() {
        console.log("Entering ANFCONBNU_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfconbnu/anfconbnu_whennewforminstance_query1", payload1);
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

        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCONBNU_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFCONBNU_preForm() {
        console.log("Entering ANFCONBNU_preForm");
        // ANFCONBNU_PANTALLA();
        // ANFCONBNU_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFCONBNU_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //     
    //   END IF;
    // END;
    //#endregion
    async ANFCONBNU_keyUp() {
        console.log("Entering ANFCONBNU_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFCONBNU_keyUp");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA  NUMBER;
    //  V_TACTIVO    NUMBER(18,2);
    //  V_TPASPAT    NUMBER(18,2);
    //  V_TUTIPAT    NUMBER(18,2);
    //  V_TOTAPYG    NUMBER(18,2); 
    //  V_CONTADOR   NUMBER(10);
    // BEGIN
    //     
    //      EXIT_FORM;
    // 
    // END;
    //#endregion
    async ANFCONBNU_keyExit() {
        console.log("Entering ANFCONBNU_keyExit");
        let T_RESPUESTA: number = null;
        let V_TACTIVO: number = null;
        let V_TPASPAT: number = null;
        let V_TUTIPAT: number = null;
        let V_TOTAPYG: number = null;
        let V_CONTADOR: number = null;
        this.oracleFormsBuiltins.exit_form();
        console.log("Exiting ANFCONBNU_keyExit");
    }

    async ANFCONBNU_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFCONBNU_keyDown() {
        console.log("Entering ANFCONBNU_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFCONBNU_keyDown");
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
    async ANFCONBNU_antbalxter10_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter10_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_10.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_10/anfconbnu_antbalxter10_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_10.DES_CUENTA = result1[0].get("ANTBALXTER_10.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFCONBNU_antbalxter10_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_10.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_10 );
    // GO_ITEM('ANTBALXTER_10.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS14'); END;
    //#endregion
    async ANFCONBNU_antbalxter10_calculadora10_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter10_calculadora10_keyNextItem");
        // this.ANTBALXTER_10.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_10);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_10.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS14");
        console.log("Exiting ANFCONBNU_antbalxter10_calculadora10_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_10.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS14'); END;
    //#endregion
    async ANFCONBNU_antbalxter10_calculadora10_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter10_calculadora10_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_10.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS14");
        console.log("Exiting ANFCONBNU_antbalxter10_calculadora10_keyHelp");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFCONBNU_toolbar_whenButtonPressed() {
        console.log("Entering ANFCONBNU_toolbar_whenButtonPressed");
        // ANFCONBNU_TOOLBAR_ACTIONS();
        console.log("Exiting ANFCONBNU_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFCONBNU_toolbar_whenMouseLeave() {
        console.log("Entering ANFCONBNU_toolbar_whenMouseLeave");
        // ANFCONBNU_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFCONBNU_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFCONBNU_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCONBNU_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFCONBNU_toolbar_whenNewFormInstance");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='A1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A1:=0;
    //     :TOTAL_PA1:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter/anfconbnu_antbalxter_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER.DES_CUENTA = result1[0].get("ANTBALXTER.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter/anfconbnu_antbalxter_postquery_query2", payload2);
        // get values from result
        // TOTAL_A1 = result2[0].get("TOTAL_A1");
        // TOTAL_PA1 = result2[0].get("TOTAL_PA1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER.TOTAL_A1 = 0;
            // this.ANTBALXTER.TOTAL_PA1 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA );
    // GO_ITEM('ANTBALXTER.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS4'); END;
    //#endregion
    async ANFCONBNU_antbalxter_calculadora_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter_calculadora_keyNextItem");
        // this.ANTBALXTER.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA);
        this.oracleFormsBuiltins.go_item("ANTBALXTER.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFCONBNU_antbalxter_calculadora_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS4'); END;
    //#endregion
    async ANFCONBNU_antbalxter_calculadora_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter_calculadora_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFCONBNU_antbalxter_calculadora_keyHelp");
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
    async ANFCONBNU_antbalxter7_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter7_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_7.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_7/anfconbnu_antbalxter7_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_7.DES_CUENTA = result1[0].get("ANTBALXTER_7.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFCONBNU_antbalxter7_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_7.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_7 );
    // GO_ITEM('ANTBALXTER_7.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS11'); END;
    //#endregion
    async ANFCONBNU_antbalxter7_calculadora7_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter7_calculadora7_keyNextItem");
        // this.ANTBALXTER_7.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_7);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_7.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        console.log("Exiting ANFCONBNU_antbalxter7_calculadora7_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_7.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS11'); END;
    //#endregion
    async ANFCONBNU_antbalxter7_calculadora7_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter7_calculadora7_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_7.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        console.log("Exiting ANFCONBNU_antbalxter7_calculadora7_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='T2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_T2:=0;
    //     :TOTAL_PT2:=0;
    // END;
    // 
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_ACTIVOP,:TOTAL_ACTIVOP_P
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='A4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_ACTIVOP:=0;
    //     :TOTAL_ACTIVOP_P:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter6_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter6_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_6.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_6/anfconbnu_antbalxter6_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_6.DES_CUENTA = result1[0].get("ANTBALXTER_6.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_6/anfconbnu_antbalxter6_postquery_query2", payload2);
        // get values from result
        // TOTAL_T1 = result2[0].get("TOTAL_T1");
        // TOTAL_PT1 = result2[0].get("TOTAL_PT1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_6.TOTAL_T1 = 0;
            // this.ANTBALXTER_6.TOTAL_PT1 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload3.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result3 = await Rest.post("/anfconbnu_antbalxter_6/anfconbnu_antbalxter6_postquery_query3", payload3);
        // get values from result
        // TOTAL_T2 = result3[0].get("TOTAL_T2");
        // TOTAL_PT2 = result3[0].get("TOTAL_PT2");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_6.TOTAL_T2 = 0;
            // this.ANTBALXTER_6.TOTAL_PT2 = 0;
        }

        // construct payload
        let payload4 = new Map();
        payload4.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload4.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result4 = await Rest.post("/anfconbnu_antbalxter_6/anfconbnu_antbalxter6_postquery_query4", payload4);
        // get values from result
        // TOTAL_ACTIVOP = result4[0].get("TOTAL_ACTIVOP");
        // TOTAL_ACTIVOP_P = result4[0].get("TOTAL_ACTIVOP_P");
        if (result4 == null || result4.length == 0) {

            // this.ANTBALXTER_6.TOTAL_ACTIVOP = 0;
            // this.ANTBALXTER_6.TOTAL_ACTIVOP_P = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter6_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_6.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_6 );
    // GO_ITEM('ANTBALXTER_6.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS10'); END;
    //#endregion
    async ANFCONBNU_antbalxter6_calculadora6_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter6_calculadora6_keyNextItem");
        // this.ANTBALXTER_6.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_6);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_6.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS10");
        console.log("Exiting ANFCONBNU_antbalxter6_calculadora6_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_6.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS10'); END;
    //#endregion
    async ANFCONBNU_antbalxter6_calculadora6_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter6_calculadora6_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_6.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS10");
        console.log("Exiting ANFCONBNU_antbalxter6_calculadora6_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='P3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P3:=0;
    //     :TOTAL_PP3:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter5_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter5_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_5.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_5/anfconbnu_antbalxter5_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_5.DES_CUENTA = result1[0].get("ANTBALXTER_5.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_5/anfconbnu_antbalxter5_postquery_query2", payload2);
        // get values from result
        // TOTAL_P2 = result2[0].get("TOTAL_P2");
        // TOTAL_PP2 = result2[0].get("TOTAL_PP2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_5.TOTAL_P2 = 0;
            // this.ANTBALXTER_5.TOTAL_PP2 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload3.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result3 = await Rest.post("/anfconbnu_antbalxter_5/anfconbnu_antbalxter5_postquery_query3", payload3);
        // get values from result
        // TOTAL_P3 = result3[0].get("TOTAL_P3");
        // TOTAL_PP3 = result3[0].get("TOTAL_PP3");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_5.TOTAL_P3 = 0;
            // this.ANTBALXTER_5.TOTAL_PP3 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter5_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_5.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_5 );
    // GO_ITEM('ANTBALXTER_5.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS9'); END;
    //#endregion
    async ANFCONBNU_antbalxter5_calculadora5_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter5_calculadora5_keyNextItem");
        // this.ANTBALXTER_5.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_5);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_5.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS9");
        console.log("Exiting ANFCONBNU_antbalxter5_calculadora5_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_5.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS9'); END;
    //#endregion
    async ANFCONBNU_antbalxter5_calculadora5_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter5_calculadora5_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_5.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS9");
        console.log("Exiting ANFCONBNU_antbalxter5_calculadora5_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='P1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P1:=0;
    //     :TOTAL_PP1:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter4_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter4_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_4.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_4/anfconbnu_antbalxter4_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_4.DES_CUENTA = result1[0].get("ANTBALXTER_4.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_4/anfconbnu_antbalxter4_postquery_query2", payload2);
        // get values from result
        // TOTAL_P1 = result2[0].get("TOTAL_P1");
        // TOTAL_PP1 = result2[0].get("TOTAL_PP1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_4.TOTAL_P1 = 0;
            // this.ANTBALXTER_4.TOTAL_PP1 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter4_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_4.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_4 );
    // GO_ITEM('ANTBALXTER_4.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS8'); END;
    //#endregion
    async ANFCONBNU_antbalxter4_calculadora4_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter4_calculadora4_keyNextItem");
        // this.ANTBALXTER_4.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_4);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_4.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS8");
        console.log("Exiting ANFCONBNU_antbalxter4_calculadora4_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_4.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS8'); END;
    //#endregion
    async ANFCONBNU_antbalxter4_calculadora4_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter4_calculadora4_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_4.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS8");
        console.log("Exiting ANFCONBNU_antbalxter4_calculadora4_keyHelp");
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
    async ANFCONBNU_antbalxter3_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_3.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_3/anfconbnu_antbalxter3_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_3.DES_CUENTA = result1[0].get("ANTBALXTER_3.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFCONBNU_antbalxter3_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_3.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_3 );
    // GO_ITEM('ANTBALXTER_3.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS7'); END;
    //#endregion
    async ANFCONBNU_antbalxter3_calculadora3_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter3_calculadora3_keyNextItem");
        // this.ANTBALXTER_3.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_3);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_3.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS7");
        console.log("Exiting ANFCONBNU_antbalxter3_calculadora3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_3.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS7'); END;
    //#endregion
    async ANFCONBNU_antbalxter3_calculadora3_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter3_calculadora3_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_3.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS7");
        console.log("Exiting ANFCONBNU_antbalxter3_calculadora3_keyHelp");
    }

    //#region PLSQL
    // BEGIN
    //  IF :ANTBALXTER_3.BAXTER_CODCTA='1900' THEN
    //     UPDATE ANTBALXTER
    //        SET BAXTER_VALORC=:ANTBALXTER_3.BAXTER_VALORC
    //       WHERE BAXTER_CODTER=:ANTBALXTER_3.BAXTER_CODTER
    //         AND BAXTER_CODPER=:ANTBALXTER_3.BAXTER_CODPER
    //         AND BAXTER_CODCTA='3800'
    //         AND BAXTER_GRUCTA='PT'
    //         AND BAXTER_TIPCTA='VAL';
    //   END IF;
    //  COMMIT;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter3_baxterValorc_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter3_baxterValorc_keyNextItem");
        if (this.ANTBALXTER_3.BAXTER_CODCTA == "1900") {
            // construct payload
            let payload1 = new Map();
            // payload1.BAXTER_VALORC = : BAXTER_VALORC;
            // payload1.BAXTER_CODTER = : BAXTER_CODTER;
            // payload1.BAXTER_CODPER = : BAXTER_CODPER;
            // call REST API
            const result1 = await Rest.post("/anfconbnu_antbalxter_3/anfconbnu_antbalxter3_baxtervalorc_keynextitem_query1", payload1);
        }
        console.log("Exiting ANFCONBNU_antbalxter3_baxterValorc_keyNextItem");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='G5';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G5:=0;
    //     :TOTAL_PG5:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter13_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter13_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_13.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_13/anfconbnu_antbalxter13_postquery_query1", payload1);
        // get values from result
        // ANTBALXTER_13.DES_CUENTA = result1[0].get("ANTBALXTER_13.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_13/anfconbnu_antbalxter13_postquery_query2", payload2);
        // get values from result
        // TOTAL_G5 = result2[0].get("TOTAL_G5");
        // TOTAL_PG5 = result2[0].get("TOTAL_PG5");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_13.TOTAL_G5 = 0;
            // this.ANTBALXTER_13.TOTAL_PG5 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter13_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_13.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_13 );
    // GO_ITEM('ANTBALXTER_13.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS17'); END;
    //#endregion
    async ANFCONBNU_antbalxter13_calculadora13_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter13_calculadora13_keyNextItem");
        // this.ANTBALXTER_13.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_13);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_13.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS17");
        console.log("Exiting ANFCONBNU_antbalxter13_calculadora13_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_13.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS17'); END;
    //#endregion
    async ANFCONBNU_antbalxter13_calculadora13_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter13_calculadora13_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_13.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS17");
        console.log("Exiting ANFCONBNU_antbalxter13_calculadora13_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='A4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A4:=0;
    //     :TOTAL_PA4:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter2_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_2.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_2/anfconbnu_antbalxter2_postquery_query1", payload1);
        // get values from result
        // ANTBALXTER_2.DES_CUENTA = result1[0].get("ANTBALXTER_2.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_2/anfconbnu_antbalxter2_postquery_query2", payload2);
        // get values from result
        // TOTAL_A3 = result2[0].get("TOTAL_A3");
        // TOTAL_PA3 = result2[0].get("TOTAL_PA3");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_2.TOTAL_A3 = 0;
            // this.ANTBALXTER_2.TOTAL_PA3 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload3.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result3 = await Rest.post("/anfconbnu_antbalxter_2/anfconbnu_antbalxter2_postquery_query3", payload3);
        // get values from result
        // TOTAL_A4 = result3[0].get("TOTAL_A4");
        // TOTAL_PA4 = result3[0].get("TOTAL_PA4");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_2.TOTAL_A4 = 0;
            // this.ANTBALXTER_2.TOTAL_PA4 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter2_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_2.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_2 );
    // GO_ITEM('ANTBALXTER_2.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS6'); END;
    //#endregion
    async ANFCONBNU_antbalxter2_calculadora2_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter2_calculadora2_keyNextItem");
        // this.ANTBALXTER_2.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_2);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_2.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS6");
        console.log("Exiting ANFCONBNU_antbalxter2_calculadora2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_2.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS6'); END;
    //#endregion
    async ANFCONBNU_antbalxter2_calculadora2_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter2_calculadora2_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_2.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS6");
        console.log("Exiting ANFCONBNU_antbalxter2_calculadora2_keyHelp");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA  NUMBER;
    //  V_TACTIVO    NUMBER(18,2);
    //  V_TPASPAT    NUMBER(18,2);
    //  V_TUTIPAT    NUMBER(18,2);
    //  V_TOTAPYG    NUMBER(18,2); 
    //  V_CONTADOR   NUMBER(10);
    // BEGIN
    //  NULL;
    // END;
    //#endregion
    async ANFCONBNU_variable_keyCrerec() {
        console.log("Entering ANFCONBNU_variable_keyCrerec");
        let T_RESPUESTA: number = null;
        let V_TACTIVO: number = null;
        let V_TPASPAT: number = null;
        let V_TUTIPAT: number = null;
        let V_TOTAPYG: number = null;
        let V_CONTADOR: number = null;
        console.log("Exiting ANFCONBNU_variable_keyCrerec");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTBALXTER DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_1 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_1_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_1 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_2_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_3_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_4 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_4_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_4 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_5 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_5_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_5 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_6 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_6_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_6 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_7 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_7_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_7 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_8 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_8_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_8 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_9 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_9_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_9 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_10 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_10_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_10 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_11 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_11_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_11 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_12 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_12_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_12 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_13 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTBALXTER_13_CUR IS      
    //     SELECT 1 FROM ANTBALXTER     
    //     WHERE BAXTER_CODTER = :VARIABLE.DIAXBA_CODTER AND BAXTER_CODPER = :VARIABLE.DIAXBA_CODPER;
    //   --
    //   -- END ANTBALXTER_13 DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTBALXTER DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_CUR;     
    //   FETCH ANTBALXTER_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_CUR;
    //   --
    //   -- END ANTBALXTER DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_1 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_1_CUR;     
    //   FETCH ANTBALXTER_1_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_1_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_1_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_1_CUR;
    //   --
    //   -- END ANTBALXTER_1 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_2_CUR;     
    //   FETCH ANTBALXTER_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_2_CUR;
    //   --
    //   -- END ANTBALXTER_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_3_CUR;     
    //   FETCH ANTBALXTER_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_3_CUR;
    //   --
    //   -- END ANTBALXTER_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_4 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_4_CUR;     
    //   FETCH ANTBALXTER_4_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_4_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_4_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_4_CUR;
    //   --
    //   -- END ANTBALXTER_4 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_5 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_5_CUR;     
    //   FETCH ANTBALXTER_5_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_5_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_5_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_5_CUR;
    //   --
    //   -- END ANTBALXTER_5 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_6 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_6_CUR;     
    //   FETCH ANTBALXTER_6_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_6_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_6_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_6_CUR;
    //   --
    //   -- END ANTBALXTER_6 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_7 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_7_CUR;     
    //   FETCH ANTBALXTER_7_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_7_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_7_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_7_CUR;
    //   --
    //   -- END ANTBALXTER_7 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_8 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_8_CUR;     
    //   FETCH ANTBALXTER_8_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_8_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_8_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_8_CUR;
    //   --
    //   -- END ANTBALXTER_8 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_9 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_9_CUR;     
    //   FETCH ANTBALXTER_9_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_9_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_9_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_9_CUR;
    //   --
    //   -- END ANTBALXTER_9 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_10 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_10_CUR;     
    //   FETCH ANTBALXTER_10_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_10_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_10_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_10_CUR;
    //   --
    //   -- END ANTBALXTER_10 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_11 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_11_CUR;     
    //   FETCH ANTBALXTER_11_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_11_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_11_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_11_CUR;
    //   --
    //   -- END ANTBALXTER_11 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_12 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_12_CUR;     
    //   FETCH ANTBALXTER_12_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_12_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_12_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_12_CUR;
    //   --
    //   -- END ANTBALXTER_12 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_13 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTBALXTER_13_CUR;     
    //   FETCH ANTBALXTER_13_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTBALXTER_13_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTBALXTER_13_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTBALXTER_13_CUR;
    //   --
    //   -- END ANTBALXTER_13 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCONBNU_variable_onCheckDeleteMaster() {
        console.log("Entering ANFCONBNU_variable_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFCONBNU_variable_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION VARCHAR2(60);
    // BEGIN
    //  BEGIN
    //   SELECT DESCRIPCION
    //      INTO V_OPCION
    //      FROM OPCIONES
    //      WHERE UPPER(PROGRAMA)=:SYSTEM.CURRENT_FORM
    //        AND PROGRAMA IS NOT NULL
    //        AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     V_OPCION:=NULL;
    //   END;   
    //   EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('BALANCES_NULOS',:SYSTEM.LAST_QUERY,V_OPCION);
    //  COMMIT;
    // END;
    //#endregion
    async ANFCONBNU_variable_keyExeqry() {
        console.log("Entering ANFCONBNU_variable_keyExeqry");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
            // call REST API
            const result1 = await Rest.post("/anfconbnu_variable/anfconbnu_variable_keyexeqry_query1", payload1);
            // get values from result
            V_OPCION = result1[0].get("V_OPCION");
        } catch (ex) {

            V_OPCION = null;
        }

        this.oracleFormsBuiltins.execute_query();
        // ANFCONBNU_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("BALANCES_NULOS", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
        console.log("Exiting ANFCONBNU_variable_keyExeqry");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   RECSTAT     VARCHAR2(20) := :SYSTEM.RECORD_STATUS;   
    //   STARTITM    VARCHAR2(61) := :SYSTEM.CURSOR_ITEM;   
    //   REL_ID      RELATION;
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   IF ( RECSTAT = 'NEW' OR RECSTAT = 'INSERT' ) THEN   
    //     RETURN;
    //   END IF;
    //   --
    //   -- BEGIN ANTBALXTER DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_1');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_1 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_2');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_1');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_1 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_3');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_2');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_4');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_3');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_4 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_5');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_4');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_4 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_5 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_6');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_5');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_5 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_6 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_7');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_6');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_6 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_7 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_8');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_7');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_7 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_8 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_9');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_8');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_8 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_9 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_10');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_9');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_9 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_10 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_11');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_10');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_10 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_11 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_12');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_11');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_11 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_12 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_13');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_12');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_12 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTBALXTER_13 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.DIAXBA_CODTER IS NOT NULL) OR (:VARIABLE.DIAXBA_CODPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_14');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTBALXTER_13');   
    //   END IF;
    //   --
    //   -- END ANTBALXTER_13 DETAIL PROGRAM SECTION
    //   --
    // 
    //   IF ( :SYSTEM.CURSOR_ITEM <> STARTITM ) THEN     
    //      GO_ITEM(STARTITM);     
    //      CHECK_PACKAGE_FAILURE;     
    //   END IF;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFCONBNU_variable_onPopulateDetails() {
        console.log("Entering ANFCONBNU_variable_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_1");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_2");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_1");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_3");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_2");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_4");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_3");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_5");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_4");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_6");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_5");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_7");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_6");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_8");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_7");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_9");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_8");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_10");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_9");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_11");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_10");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_12");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_11");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_13");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_12");
        }
        if (((this.VARIABLE.DIAXBA_CODTER != null) || (this.VARIABLE.DIAXBA_CODPER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_14");
            // ANFCONBNU_QUERY_MASTER_DETAILS(REL_ID, "ANTBALXTER_13");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFCONBNU_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFCONBNU_variable_onPopulateDetails");
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
    //    WHERE TERCOD=:DIAXBA_CODTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    // NULL;
    // END;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:DIAXBA_CODPER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT DISTINCT (BAXTER_USUARI)
    //     INTO :USUARIO_1
    //     FROM ANTBALXTER
    //    WHERE BAXTER_CODTER=:DIAXBA_CODTER
    //      AND BAXTER_CODPER=:DIAXBA_CODPER
    // ;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // 
    // END;  
    //#endregion
    async ANFCONBNU_variable_postQuery() {
        console.log("Entering ANFCONBNU_variable_postQuery");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_variable/anfconbnu_variable_postquery_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_variable/anfconbnu_variable_postquery_query2", payload2);
        // get values from result
        this.VARIABLE.DES_PERCOD = result2[0].get("DES_PERCOD");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload3.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result3 = await Rest.post("/anfconbnu_variable/anfconbnu_variable_postquery_query3", payload3);
        // get values from result
        this.VARIABLE.USUARIO_1 = result3[0].get("USUARIO_1");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting ANFCONBNU_variable_postQuery");
    }

    //#region PLSQL
    // BEGIN       
    //  COMMIT;
    //  GO_BLOCK('ANTBALXTER');
    //  EXECUTE_QUERY;
    // GO_BLOCK('ANTBALXTER_1');
    //  EXECUTE_QUERY;
    // GO_BLOCK('ANTBALXTER_2');
    //  EXECUTE_QUERY;
    // GO_BLOCK('ANTBALXTER_3');
    //  EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFCONBNU_variable_volverPasivo_whenMouseClick() {
        console.log("Entering ANFCONBNU_variable_volverPasivo_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_3");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCONBNU_variable_volverPasivo_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN     
    // COMMIT;  
    //  GO_BLOCK('ANTBALXTER_8');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_9');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_10');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_11');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_12');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_13');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_8');
    // END;
    //#endregion
    async ANFCONBNU_variable_perdidas_whenMouseClick() {
        console.log("Entering ANFCONBNU_variable_perdidas_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_8");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_9");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_10");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_11");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_12");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_13");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_8");
        console.log("Exiting ANFCONBNU_variable_perdidas_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    //  V_CONTADOR1  NUMBER(8);
    //  MODULO      NUMBER(18);
    // BEGIN
    // 
    //  GO_BLOCK('ANTBALXTER');
    //  EXECUTE_QUERY;
    //         GO_BLOCK('ANTBALXTER_1');
    //      EXECUTE_QUERY;
    //         GO_BLOCK('ANTBALXTER_2');
    //      EXECUTE_QUERY;
    //         GO_BLOCK('ANTBALXTER_3');
    //      EXECUTE_QUERY;
    //        GO_BLOCK('ANTBALXTER');
    // 
    // 
    // 
    // END;
    //#endregion
    async ANFCONBNU_variable_diaxbaDiasan_keynextitem() {
        console.log("Entering ANFCONBNU_variable_diaxbaDiasan_keynextitem");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        let V_CONTADOR1: number = null;
        let MODULO: number = null;
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER");
        console.log("Exiting ANFCONBNU_variable_diaxbaDiasan_keynextitem");
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
    //    WHERE TERCOD=:DIAXBA_CODTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // IF TIPTER <> 'J' THEN  
    //      LIB$ALERTA ('MENSAJE','TERCERO DIFERENTE A PERSONA JURIDICA ES PERSONA NATURAL ...',NULL,NULL,NULL,T_RESPUESTA);
    //   --- RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // END;  
    //#endregion
    async ANFCONBNU_variable_diaxbaCodter_whenValidateItem() {
        console.log("Entering ANFCONBNU_variable_diaxbaCodter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_variable/anfconbnu_variable_diaxbacodter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFCONBNU_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPTER != "J") {
            // ANFCONBNU_LIB$ALERTA("MENSAJE", "TERCERO DIFERENTE A PERSONA JURIDICA ES PERSONA NATURAL ...", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting ANFCONBNU_variable_diaxbaCodter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR NUMBER;
    // BEGIN
    //  V_CONTADOR:=0;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:DIAXBA_CODPER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END; 
    //#endregion
    async ANFCONBNU_variable_diaxbaCodper_whenValidateItem() {
        console.log("Entering ANFCONBNU_variable_diaxbaCodper_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        V_CONTADOR = 0;
        // construct payload
        let payload1 = new Map();
        payload1.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_variable/anfconbnu_variable_diaxbacodper_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFCONBNU_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFCONBNU_variable_diaxbaCodper_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN    
    //  COMMIT;   
    //  GO_BLOCK('ANTBALXTER_4');
    //  EXECUTE_QUERY;
    // GO_BLOCK('ANTBALXTER_5');
    //  EXECUTE_QUERY;
    // GO_BLOCK('ANTBALXTER_6');
    //  EXECUTE_QUERY;
    // GO_BLOCK('ANTBALXTER_7');
    //  EXECUTE_QUERY;
    // 
    // END;
    //#endregion
    async ANFCONBNU_variable_vPer_whenMouseClick() {
        console.log("Entering ANFCONBNU_variable_vPer_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_5");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_6");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTBALXTER_7");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFCONBNU_variable_vPer_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN       
    //  IF :VARIABLE.DIAXBA_CODTER IS NULL OR :DIAXBA_CODPER IS NULL THEN
    //     LIB$ALERTA('MENSAJE','EL TERCERO NO SELECCIONADO O PERIODO NO SELECCIONADO .....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //  COMMIT;
    //  GO_BLOCK('ANTBALXTER_4');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_5');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_6');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_7');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTBALXTER_4');
    //  END IF;
    // END;
    //#endregion
    async ANFCONBNU_variable_pasivo_whenMouseClick() {
        console.log("Entering ANFCONBNU_variable_pasivo_whenMouseClick");
        let T_RESPUESTA: number = null;
        if (((this.VARIABLE.DIAXBA_CODTER == null) || (this.VARIABLE.DIAXBA_CODPER == null))) {
            // ANFCONBNU_LIB$ALERTA("MENSAJE", "EL TERCERO NO SELECCIONADO O PERIODO NO SELECCIONADO .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_5");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_6");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_7");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
        }
        console.log("Exiting ANFCONBNU_variable_pasivo_whenMouseClick");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='A2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A2:=0;
    //     :TOTAL_PA2:=0;
    // END;
    // BEGIN
    //   SELECT SUMBAL_SUMVAL,SUMBAL_SUMPAR
    //     INTO :TOTAL_ACTPA,:TOTAL_ACTPA_P
    //     FROM ANTSUMBAL
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='T2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_ACTPA:=0;
    //     :TOTAL_ACTPA_P:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter1_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_1.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_1/anfconbnu_antbalxter1_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_1.DES_CUENTA = result1[0].get("ANTBALXTER_1.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_1/anfconbnu_antbalxter1_postquery_query2", payload2);
        // get values from result
        // TOTAL_A2 = result2[0].get("TOTAL_A2");
        // TOTAL_PA2 = result2[0].get("TOTAL_PA2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_1.TOTAL_A2 = 0;
            // this.ANTBALXTER_1.TOTAL_PA2 = 0;
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload3.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result3 = await Rest.post("/anfconbnu_antbalxter_1/anfconbnu_antbalxter1_postquery_query3", payload3);
        // get values from result
        // TOTAL_ACTPA = result3[0].get("TOTAL_ACTPA");
        // TOTAL_ACTPA_P = result3[0].get("TOTAL_ACTPA_P");
        if (result3 == null || result3.length == 0) {

            // this.ANTBALXTER_1.TOTAL_ACTPA = 0;
            // this.ANTBALXTER_1.TOTAL_ACTPA_P = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter1_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_1.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_1 );
    // GO_ITEM('ANTBALXTER_1.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS5'); END;
    //#endregion
    async ANFCONBNU_antbalxter1_calculadora1_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter1_calculadora1_keyNextItem");
        // this.ANTBALXTER_1.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_1);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_1.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        console.log("Exiting ANFCONBNU_antbalxter1_calculadora1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_1.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS5'); END;
    //#endregion
    async ANFCONBNU_antbalxter1_calculadora1_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter1_calculadora1_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_1.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        console.log("Exiting ANFCONBNU_antbalxter1_calculadora1_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='G3';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G3:=0;
    //     :TOTAL_PG3:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter11_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter11_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_11.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_11/anfconbnu_antbalxter11_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_11.DES_CUENTA = result1[0].get("ANTBALXTER_11.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_11/anfconbnu_antbalxter11_postquery_query2", payload2);
        // get values from result
        // TOTAL_G3 = result2[0].get("TOTAL_G3");
        // TOTAL_PG3 = result2[0].get("TOTAL_PG3");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_11.TOTAL_G3 = 0;
            // this.ANTBALXTER_11.TOTAL_PG3 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter11_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_11.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_11 );
    // GO_ITEM('ANTBALXTER_11.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS15'); END;
    //#endregion
    async ANFCONBNU_antbalxter11_calculadora11_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter11_calculadora11_keyNextItem");
        // this.ANTBALXTER_11.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_11);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_11.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS15");
        console.log("Exiting ANFCONBNU_antbalxter11_calculadora11_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_11.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS15'); END;
    //#endregion
    async ANFCONBNU_antbalxter11_calculadora11_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter11_calculadora11_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_11.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS15");
        console.log("Exiting ANFCONBNU_antbalxter11_calculadora11_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='G4';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G4:=0;
    //     :TOTAL_PG4:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter12_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter12_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_12.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_12/anfconbnu_antbalxter12_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_12.DES_CUENTA = result1[0].get("ANTBALXTER_12.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_12/anfconbnu_antbalxter12_postquery_query2", payload2);
        // get values from result
        // TOTAL_G4 = result2[0].get("TOTAL_G4");
        // TOTAL_PG4 = result2[0].get("TOTAL_PG4");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_12.TOTAL_G4 = 0;
            // this.ANTBALXTER_12.TOTAL_PG4 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter12_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_12.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_12 );
    // GO_ITEM('ANTBALXTER_12.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS16'); END;
    //#endregion
    async ANFCONBNU_antbalxter12_calculadora12_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter12_calculadora12_keyNextItem");
        // this.ANTBALXTER_12.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_12);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_12.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS16");
        console.log("Exiting ANFCONBNU_antbalxter12_calculadora12_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_12.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS16'); END;
    //#endregion
    async ANFCONBNU_antbalxter12_calculadora12_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter12_calculadora12_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_12.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS16");
        console.log("Exiting ANFCONBNU_antbalxter12_calculadora12_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='G2';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G2:=0;
    //     :TOTAL_PG2:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter9_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter9_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_9.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_9/anfconbnu_antbalxter9_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_9.DES_CUENTA = result1[0].get("ANTBALXTER_9.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_9/anfconbnu_antbalxter9_postquery_query2", payload2);
        // get values from result
        // TOTAL_G2 = result2[0].get("TOTAL_G2");
        // TOTAL_PG2 = result2[0].get("TOTAL_PG2");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_9.TOTAL_G2 = 0;
            // this.ANTBALXTER_9.TOTAL_PG2 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter9_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_9.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_9 );
    // GO_ITEM('ANTBALXTER_9.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS13'); END;
    //#endregion
    async ANFCONBNU_antbalxter9_calculadora9_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter9_calculadora9_keyNextItem");
        // this.ANTBALXTER_9.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_9);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_9.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS13");
        console.log("Exiting ANFCONBNU_antbalxter9_calculadora9_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_9.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS13'); END;
    //#endregion
    async ANFCONBNU_antbalxter9_calculadora9_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter9_calculadora9_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_9.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS13");
        console.log("Exiting ANFCONBNU_antbalxter9_calculadora9_keyHelp");
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
    //    WHERE SUMBAL_CODTER=:DIAXBA_CODTER
    //      AND SUMBAL_CODPER=:DIAXBA_CODPER
    //      AND SUMBAL_SUMCOD='G1';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_G1:=0;
    //     :TOTAL_PG1:=0;
    // END;
    //#endregion
    async ANFCONBNU_antbalxter8_postQuery() {
        console.log("Entering ANFCONBNU_antbalxter8_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("BAXTER_CODCTA", this.ANTBALXTER_8.BAXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfconbnu_antbalxter_8/anfconbnu_antbalxter8_postquery_query1", payload1);
        // get values from result
        this.ANTBALXTER_8.DES_CUENTA = result1[0].get("ANTBALXTER_8.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DIAXBA_CODTER", this.VARIABLE.DIAXBA_CODTER);
        payload2.set("DIAXBA_CODPER", this.VARIABLE.DIAXBA_CODPER);
        // call REST API
        const result2 = await Rest.post("/anfconbnu_antbalxter_8/anfconbnu_antbalxter8_postquery_query2", payload2);
        // get values from result
        // TOTAL_G1 = result2[0].get("TOTAL_G1");
        // TOTAL_PG1 = result2[0].get("TOTAL_PG1");
        if (result2 == null || result2.length == 0) {

            // this.ANTBALXTER_8.TOTAL_G1 = 0;
            // this.ANTBALXTER_8.TOTAL_PG1 = 0;
        }

        console.log("Exiting ANFCONBNU_antbalxter8_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTBALXTER_8.BAXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_8 );
    // GO_ITEM('ANTBALXTER_8.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS12'); END;
    //#endregion
    async ANFCONBNU_antbalxter8_calculadora8_keyNextItem() {
        console.log("Entering ANFCONBNU_antbalxter8_calculadora8_keyNextItem");
        // this.ANTBALXTER_8.BAXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_8);
        this.oracleFormsBuiltins.go_item("ANTBALXTER_8.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        console.log("Exiting ANFCONBNU_antbalxter8_calculadora8_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTBALXTER_8.BAXTER_VALORC');
    // HIDE_VIEW('CANVAS12'); END;
    //#endregion
    async ANFCONBNU_antbalxter8_calculadora8_keyHelp() {
        console.log("Entering ANFCONBNU_antbalxter8_calculadora8_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTBALXTER_8.BAXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        console.log("Exiting ANFCONBNU_antbalxter8_calculadora8_keyHelp");
    }

}

