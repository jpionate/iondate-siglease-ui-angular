import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFINFTE business logic
import {
    ANTINDXTE_POLITICAS,
    ANTINDXTE_LIQUIDEZ_3,
    ANTINDXTE_ENDEUDA_2,
    ANTINDXTE_LIQUIDEZ_2,
    ANTINDXTE_POLITICAS_2,
    ANTINDXTE_POLITICAS_3,
    ANTINDXTE_ENDEUDA_3,
    TOOLBAR,
    ANTINDXTE_RENTA,
    ANTINDXTE_LIQUIDEZ,
    BASE,
    ANTINDXTE_ACTIVIDAD_2,
    ANTINDXTE_ACTIVIDAD_3,
    ANTINDXTE_ENDEUDA,
    ANTINDXTE_VALOR_3,
    ANTINDXTE_VALOR_2,
    ANTINDXTE,
    VARIABLE,
    ANTINDXTE_PERIODO2,
    ANTINDXTE_VALOR,
    ANTINDXTE_PERIODO3,
    ANTINDXTE_RENTA_2,
    ANTINDXTE_RENTA_3,
    ANTINDXTE_ACTIVIDAD
} from "./ANFINFTE_models";



// class ANFINFTE
@Component({
    selector: 'app-anfinfte',
    templateUrl: './anfinfte.component.html',
})
export class AnfinfteComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTINDXTE_POLITICAS: ANTINDXTE_POLITICAS = new ANTINDXTE_POLITICAS();
    public ANTINDXTE_LIQUIDEZ_3: ANTINDXTE_LIQUIDEZ_3 = new ANTINDXTE_LIQUIDEZ_3();
    public ANTINDXTE_ENDEUDA_2: ANTINDXTE_ENDEUDA_2 = new ANTINDXTE_ENDEUDA_2();
    public ANTINDXTE_LIQUIDEZ_2: ANTINDXTE_LIQUIDEZ_2 = new ANTINDXTE_LIQUIDEZ_2();
    public ANTINDXTE_POLITICAS_2: ANTINDXTE_POLITICAS_2 = new ANTINDXTE_POLITICAS_2();
    public ANTINDXTE_POLITICAS_3: ANTINDXTE_POLITICAS_3 = new ANTINDXTE_POLITICAS_3();
    public ANTINDXTE_ENDEUDA_3: ANTINDXTE_ENDEUDA_3 = new ANTINDXTE_ENDEUDA_3();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTINDXTE_RENTA: ANTINDXTE_RENTA = new ANTINDXTE_RENTA();
    public ANTINDXTE_LIQUIDEZ: ANTINDXTE_LIQUIDEZ = new ANTINDXTE_LIQUIDEZ();
    public BASE: BASE = new BASE();
    public ANTINDXTE_ACTIVIDAD_2: ANTINDXTE_ACTIVIDAD_2 = new ANTINDXTE_ACTIVIDAD_2();
    public ANTINDXTE_ACTIVIDAD_3: ANTINDXTE_ACTIVIDAD_3 = new ANTINDXTE_ACTIVIDAD_3();
    public ANTINDXTE_ENDEUDA: ANTINDXTE_ENDEUDA = new ANTINDXTE_ENDEUDA();
    public ANTINDXTE_VALOR_3: ANTINDXTE_VALOR_3 = new ANTINDXTE_VALOR_3();
    public ANTINDXTE_VALOR_2: ANTINDXTE_VALOR_2 = new ANTINDXTE_VALOR_2();
    public ANTINDXTE: ANTINDXTE = new ANTINDXTE();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTINDXTE_PERIODO2: ANTINDXTE_PERIODO2 = new ANTINDXTE_PERIODO2();
    public ANTINDXTE_VALOR: ANTINDXTE_VALOR = new ANTINDXTE_VALOR();
    public ANTINDXTE_PERIODO3: ANTINDXTE_PERIODO3 = new ANTINDXTE_PERIODO3();
    public ANTINDXTE_RENTA_2: ANTINDXTE_RENTA_2 = new ANTINDXTE_RENTA_2();
    public ANTINDXTE_RENTA_3: ANTINDXTE_RENTA_3 = new ANTINDXTE_RENTA_3();
    public ANTINDXTE_ACTIVIDAD: ANTINDXTE_ACTIVIDAD = new ANTINDXTE_ACTIVIDAD();


    async ANFINFTE_keyDelrec() {
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
    async ANFINFTE_onClearDetails() {
        console.log("Entering ANFINFTE_onClearDetails");
        // ANFINFTE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFINFTE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFINFTE_whenMouseDoubleclick() {
        console.log("Entering ANFINFTE_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFINFTE_whenMouseDoubleclick");
    }

    async ANFINFTE_keyCrerec() {
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
    //  ---------------------------------------------------------------------
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
    // ------------------------------------------------ 
    //   
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // --PARA SER INVOCADO POR OTRA VENTANA
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :VARIABLE.NITTER  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFINFTE_whenNewFormInstance() {
        console.log("Entering ANFINFTE_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfinfte/anfinfte_whennewforminstance_query1", payload1);
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
        console.log("Exiting ANFINFTE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFINFTE_preForm() {
        console.log("Entering ANFINFTE_preForm");
        // ANFINFTE_PANTALLA();
        // ANFINFTE_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFINFTE_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFINFTE_keyUp() {
        console.log("Entering ANFINFTE_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFINFTE_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFINFTE_keyDown() {
        console.log("Entering ANFINFTE_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFINFTE_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE_POLITICAS.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE_POLITICAS.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='PO';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE_POLITICAS.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE_POLITICAS.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxtePoliticas_postQuery() {
        console.log("Entering ANFINFTE_antindxtePoliticas_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE_POLITICAS.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte_politicas/anfinfte_antindxtepoliticas_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE_POLITICAS.DES_INDICARDOR = result1[0].get("ANTINDXTE_POLITICAS.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxtePoliticas_postQuery");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFINFTE_toolbar_whenButtonPressed() {
        console.log("Entering ANFINFTE_toolbar_whenButtonPressed");
        // ANFINFTE_TOOLBAR_ACTIONS();
        console.log("Exiting ANFINFTE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFINFTE_toolbar_whenMouseLeave() {
        console.log("Entering ANFINFTE_toolbar_whenMouseLeave");
        // ANFINFTE_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFINFTE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFINFTE_toolbar_whenNewFormInstance() {
        console.log("Entering ANFINFTE_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFINFTE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE_RENTA.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE_RENTA.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='RE';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE_RENTA.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE_RENTA.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxteRenta_postQuery() {
        console.log("Entering ANFINFTE_antindxteRenta_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE_RENTA.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte_renta/anfinfte_antindxterenta_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE_RENTA.DES_INDICARDOR = result1[0].get("ANTINDXTE_RENTA.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxteRenta_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE_LIQUIDEZ.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE_LIQUIDEZ.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='LI';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE_LIQUIDEZ.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE_LIQUIDEZ.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxteLiquidez_postQuery() {
        console.log("Entering ANFINFTE_antindxteLiquidez_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE_LIQUIDEZ.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte_liquidez/anfinfte_antindxteliquidez_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE_LIQUIDEZ.DES_INDICARDOR = result1[0].get("ANTINDXTE_LIQUIDEZ.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxteLiquidez_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE_ENDEUDA.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE_ENDEUDA.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='EN';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE_ENDEUDA.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE_ENDEUDA.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxteEndeuda_postQuery() {
        console.log("Entering ANFINFTE_antindxteEndeuda_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE_ENDEUDA.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte_endeuda/anfinfte_antindxteendeuda_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE_ENDEUDA.DES_INDICARDOR = result1[0].get("ANTINDXTE_ENDEUDA.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxteEndeuda_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='DI';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxte_postQuery() {
        console.log("Entering ANFINFTE_antindxte_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte/anfinfte_antindxte_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE.DES_INDICARDOR = result1[0].get("ANTINDXTE.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxte_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('ANTCANONTE');
    // EXECUTE_QUERY; END;
    //#endregion
    async ANFINFTE_variable_keyNxtblk() {
        console.log("Entering ANFINFTE_variable_keyNxtblk");
        this.oracleFormsBuiltins.go_block("ANTCANONTE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFINFTE_variable_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTINDXTE DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_ACTIVIDAD_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_ENDEUDA_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE_ENDEUDA DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_LIQUIDEZ_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_POLITICAS_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE_POLITICAS DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_RENTA_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE_RENTA DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_VALOR_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD;
    //   --
    //   -- END ANTINDXTE_VALOR DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_ACTIVIDAD_2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_ACTIVIDAD_3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD_3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_ENDEUDA_2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_ENDEUDA_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_ENDEUDA_3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_ENDEUDA_3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_LIQUIDEZ_2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_LIQUIDEZ_3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ_3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_PERIODO2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_PERIODO2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_PERIODO2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_PERIODO3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_PERIODO3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_PERIODO3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_POLITICAS_2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_POLITICAS_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_POLITICAS_3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_POLITICAS_3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_RENTA_2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_RENTA_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_RENTA_3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_RENTA_3 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR_2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_VALOR_2_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_2;
    //   --
    //   -- END ANTINDXTE_VALOR_2 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR_3 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTINDXTE_VALOR_3_CUR IS      
    //     SELECT 1 FROM ANTINDXTE     
    //     WHERE INDXTE_CODTER = :VARIABLE.NITTER AND INDXTE_CODPER = :VARIABLE.PERCOD_3;
    //   --
    //   -- END ANTINDXTE_VALOR_3 DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTINDXTE DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_CUR;     
    //   FETCH ANTINDXTE_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_CUR;
    //   --
    //   -- END ANTINDXTE DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_ACTIVIDAD_CUR;     
    //   FETCH ANTINDXTE_ACTIVIDAD_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_ACTIVIDAD_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_ACTIVIDAD_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_ACTIVIDAD_CUR;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_ENDEUDA_CUR;     
    //   FETCH ANTINDXTE_ENDEUDA_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_ENDEUDA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_ENDEUDA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_ENDEUDA_CUR;
    //   --
    //   -- END ANTINDXTE_ENDEUDA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_LIQUIDEZ_CUR;     
    //   FETCH ANTINDXTE_LIQUIDEZ_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_LIQUIDEZ_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_LIQUIDEZ_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_LIQUIDEZ_CUR;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_POLITICAS_CUR;     
    //   FETCH ANTINDXTE_POLITICAS_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_POLITICAS_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_POLITICAS_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_POLITICAS_CUR;
    //   --
    //   -- END ANTINDXTE_POLITICAS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_RENTA_CUR;     
    //   FETCH ANTINDXTE_RENTA_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_RENTA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_RENTA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_RENTA_CUR;
    //   --
    //   -- END ANTINDXTE_RENTA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_VALOR_CUR;     
    //   FETCH ANTINDXTE_VALOR_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_VALOR_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_VALOR_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_VALOR_CUR;
    //   --
    //   -- END ANTINDXTE_VALOR DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_ACTIVIDAD_2_CUR;     
    //   FETCH ANTINDXTE_ACTIVIDAD_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_ACTIVIDAD_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_ACTIVIDAD_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_ACTIVIDAD_2_CUR;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_ACTIVIDAD_3_CUR;     
    //   FETCH ANTINDXTE_ACTIVIDAD_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_ACTIVIDAD_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_ACTIVIDAD_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_ACTIVIDAD_3_CUR;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_ENDEUDA_2_CUR;     
    //   FETCH ANTINDXTE_ENDEUDA_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_ENDEUDA_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_ENDEUDA_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_ENDEUDA_2_CUR;
    //   --
    //   -- END ANTINDXTE_ENDEUDA_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_ENDEUDA_3_CUR;     
    //   FETCH ANTINDXTE_ENDEUDA_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_ENDEUDA_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_ENDEUDA_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_ENDEUDA_3_CUR;
    //   --
    //   -- END ANTINDXTE_ENDEUDA_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_LIQUIDEZ_2_CUR;     
    //   FETCH ANTINDXTE_LIQUIDEZ_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_LIQUIDEZ_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_LIQUIDEZ_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_LIQUIDEZ_2_CUR;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_LIQUIDEZ_3_CUR;     
    //   FETCH ANTINDXTE_LIQUIDEZ_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_LIQUIDEZ_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_LIQUIDEZ_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_LIQUIDEZ_3_CUR;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_PERIODO2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_PERIODO2_CUR;     
    //   FETCH ANTINDXTE_PERIODO2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_PERIODO2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_PERIODO2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_PERIODO2_CUR;
    //   --
    //   -- END ANTINDXTE_PERIODO2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_PERIODO3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_PERIODO3_CUR;     
    //   FETCH ANTINDXTE_PERIODO3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_PERIODO3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_PERIODO3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_PERIODO3_CUR;
    //   --
    //   -- END ANTINDXTE_PERIODO3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_POLITICAS_2_CUR;     
    //   FETCH ANTINDXTE_POLITICAS_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_POLITICAS_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_POLITICAS_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_POLITICAS_2_CUR;
    //   --
    //   -- END ANTINDXTE_POLITICAS_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_POLITICAS_3_CUR;     
    //   FETCH ANTINDXTE_POLITICAS_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_POLITICAS_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_POLITICAS_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_POLITICAS_3_CUR;
    //   --
    //   -- END ANTINDXTE_POLITICAS_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_RENTA_2_CUR;     
    //   FETCH ANTINDXTE_RENTA_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_RENTA_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_RENTA_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_RENTA_2_CUR;
    //   --
    //   -- END ANTINDXTE_RENTA_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_RENTA_3_CUR;     
    //   FETCH ANTINDXTE_RENTA_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_RENTA_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_RENTA_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_RENTA_3_CUR;
    //   --
    //   -- END ANTINDXTE_RENTA_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR_2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_VALOR_2_CUR;     
    //   FETCH ANTINDXTE_VALOR_2_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_VALOR_2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_VALOR_2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_VALOR_2_CUR;
    //   --
    //   -- END ANTINDXTE_VALOR_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR_3 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTINDXTE_VALOR_3_CUR;     
    //   FETCH ANTINDXTE_VALOR_3_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTINDXTE_VALOR_3_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTINDXTE_VALOR_3_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTINDXTE_VALOR_3_CUR;
    //   --
    //   -- END ANTINDXTE_VALOR_3 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFINFTE_variable_onCheckDeleteMaster() {
        console.log("Entering ANFINFTE_variable_onCheckDeleteMaster");
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
        console.log("Exiting ANFINFTE_variable_onCheckDeleteMaster");
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
    //   -- BEGIN ANTINDXTE DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_1');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_2');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_ACTIVIDAD');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_5');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_ENDEUDA');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_ENDEUDA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_8');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_LIQUIDEZ');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_13');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_POLITICAS');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_POLITICAS DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_16');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_RENTA');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_RENTA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_19');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_VALOR');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_VALOR DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_3');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_ACTIVIDAD_2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ACTIVIDAD_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_4');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_ACTIVIDAD_3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_ACTIVIDAD_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_6');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_ENDEUDA_2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_ENDEUDA_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_ENDEUDA_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_7');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_ENDEUDA_3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_ENDEUDA_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_9');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_LIQUIDEZ_2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_LIQUIDEZ_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_10');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_LIQUIDEZ_3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_LIQUIDEZ_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_PERIODO2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_11');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_PERIODO2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_PERIODO2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_PERIODO3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_12');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_PERIODO3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_PERIODO3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_14');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_POLITICAS_2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_POLITICAS_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_POLITICAS_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_15');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_POLITICAS_3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_POLITICAS_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_17');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_RENTA_2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_RENTA_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_RENTA_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_18');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_RENTA_3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_RENTA_3 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR_2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_2 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_20');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_VALOR_2');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_VALOR_2 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTINDXTE_VALOR_3 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:VARIABLE.NITTER IS NOT NULL) OR (:VARIABLE.PERCOD_3 IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('VARIABLE.R_21');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTINDXTE_VALOR_3');   
    //   END IF;
    //   --
    //   -- END ANTINDXTE_VALOR_3 DETAIL PROGRAM SECTION
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
    async ANFINFTE_variable_onPopulateDetails() {
        console.log("Entering ANFINFTE_variable_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_1");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_2");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_ACTIVIDAD");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_5");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_ENDEUDA");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_8");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_LIQUIDEZ");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_13");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_POLITICAS");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_16");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_RENTA");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_19");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_VALOR");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_3");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_ACTIVIDAD_2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_4");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_ACTIVIDAD_3");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_6");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_ENDEUDA_2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_7");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_ENDEUDA_3");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_9");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_LIQUIDEZ_2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_10");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_LIQUIDEZ_3");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_11");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_PERIODO2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_12");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_PERIODO3");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_14");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_POLITICAS_2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_15");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_POLITICAS_3");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_17");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_RENTA_2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_18");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_RENTA_3");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_2 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_20");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_VALOR_2");
        }
        if (((this.VARIABLE.NITTER != null) || (this.VARIABLE.PERCOD_3 != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("VARIABLE.R_21");
            // ANFINFTE_QUERY_MASTER_DETAILS(REL_ID, "ANTINDXTE_VALOR_3");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFINFTE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFINFTE_variable_onPopulateDetails");
    }

    async ANFINFTE_variable_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    // BEGIN
    // IF :PERCOD_2 IS NOT NULL THEN
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
    // END IF;
    // END;  
    //#endregion
    async ANFINFTE_variable_percod2_whenValidateItem() {
        console.log("Entering ANFINFTE_variable_percod2_whenValidateItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
            // call REST API
            const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod2_whenvalidateitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERCOD_2 = result1[0].get("DES_PERCOD_2");
            if (result1 == null || result1.length == 0) {

                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD_2", this.VARIABLE.PERCOD_2);
            // call REST API
            const result2 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod2_whenvalidateitem_query2", payload2);
            // get values from result
            this.VARIABLE.ANUAL_P2 = result2[0].get("ANUAL_P2");
            if (result2 == null || result2.length == 0) {

                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO SIN DIAS ANUALIZAR ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "9") {
                VPERIODO1 = "19"  + this.VARIABLE.PERCOD;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "0") {
                VPERIODO1 = "20"  + this.VARIABLE.PERCOD;
            }
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "9") {
                VPERIODO2 = "19"  + this.VARIABLE.PERCOD_2;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "0") {
                VPERIODO2 = "20"  + this.VARIABLE.PERCOD_2;
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) == PLSQLBuiltins.to_number(VPERIODO2)) {
                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO2)) {
                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFINFTE_variable_percod2_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    //  VPERIODO3 VARCHAR2(6);
    //  V_CONIND   NUMBER(6);
    //  V_CONIND_2   NUMBER(6);
    //  V_CONIND_3   NUMBER(6);
    // 
    // BEGIN
    // IF :PERCOD_3 IS NOT NULL THEN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERIODO_3
    //    FROM PER
    //    WHERE PERCOD=:PERCOD_3;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // BEGIN
    //   SELECT DIAXBA_DIASAN
    //     INTO :ANUAL_P3
    //     FROM ANTDIASXBAL
    //     WHERE DIAXBA_CODTER  =:NITTER
    //       AND DIAXBA_CODPER  =:PERCOD_3;
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
    //  IF SUBSTR(:PERCOD_3,1,1)='9' THEN
    //     VPERIODO3:='19'||:PERCOD_3;
    //  ELSIF SUBSTR(:PERCOD_3,1,1)='0' THEN
    //     VPERIODO3:='20'||:PERCOD_3;
    //  END IF;
    // 
    //  IF TO_NUMBER(VPERIODO1) =TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES IGUAL AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO2) =TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 2 ES IGUAL AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO1) >TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES MAYOR AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // IF TO_NUMBER(VPERIODO2) >TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 2 ES MAYOR AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END IF;
    //  ------- VALIDA SI YA EXISTEN INDICADORES
    //  V_CONIND:=0;
    //  V_CONIND_2:=0;
    //  V_CONIND_3:=0;
    //  BEGIN
    //   SELECT COUNT(*)
    //     INTO V_CONIND
    //     FROM ANTINDXTE
    //    WHERE INDXTE_CODTER =:NITTER
    //      AND INDXTE_CODPER =:PERCOD;
    //  END;
    //  IF V_CONIND > 0 THEN
    //    DELETE FROM ANTINDXTE
    //    WHERE INDXTE_CODTER =:NITTER
    //      AND INDXTE_CODPER =:PERCOD;
    //     COMMIT;
    //  END IF;
    // -----------------------------------------------------
    // --- VALIDACION PERIODOS ANTERIORES 05/03/2003
    // -----------------------------------------------------
    //   PUP_VALIDAPRIMER;
    // 
    // 
    // IF :PERCOD_2 IS NOT NULL THEN
    //  BEGIN
    //   SELECT COUNT(*)
    //     INTO V_CONIND_2
    //     FROM ANTINDXTE
    //    WHERE INDXTE_CODTER =:NITTER
    //      AND INDXTE_CODPER =:PERCOD_2;
    //  END;
    //  IF V_CONIND_2 > 0 THEN
    //    DELETE FROM ANTINDXTE
    //    WHERE INDXTE_CODTER =:NITTER
    //      AND INDXTE_CODPER =:PERCOD_2;
    //     COMMIT;
    //  END IF;
    //   PBD_COL_INDICADORESFIN(:NITTER,:PERCOD_2 ,:PERCOD,:ANUAL_P2,:ANUAL_P1);
    //   COMMIT;
    // 
    // END IF;
    // IF :PERCOD_3 IS NOT NULL THEN
    //  BEGIN
    //   SELECT COUNT(*)
    //     INTO V_CONIND_3
    //     FROM ANTINDXTE
    //    WHERE INDXTE_CODTER =:NITTER
    //      AND INDXTE_CODPER =:PERCOD_3;
    //  END;
    //  IF V_CONIND_3 > 0 THEN
    //    DELETE FROM ANTINDXTE
    //    WHERE INDXTE_CODTER =:NITTER
    //      AND INDXTE_CODPER =:PERCOD_3;
    //     COMMIT;
    //  END IF;
    // 
    //   PBD_COL_INDICADORESFIN(:NITTER,:PERCOD_3 ,:PERCOD_2,:ANUAL_P3,:ANUAL_P2);
    //   COMMIT;
    // 
    // END IF;
    //   GO_BLOCK('ANTINDXTE');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_PERIODO2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_PERIODO3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_ACTIVIDAD');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_ACTIVIDAD_2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_ACTIVIDAD_3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_LIQUIDEZ');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_LIQUIDEZ_2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_LIQUIDEZ_3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE');
    // 
    // 
    // 
    // END;  
    //#endregion
    async ANFINFTE_variable_percod3_keyNextItem() {
        console.log("Entering ANFINFTE_variable_percod3_keyNextItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        let VPERIODO3: string = null;
        let V_CONIND: number = null;
        let V_CONIND_2: number = null;
        let V_CONIND_3: number = null;
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
            // call REST API
            const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERIODO_3 = result1[0].get("DES_PERIODO_3");
            if (result1 == null || result1.length == 0) {

                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            payload2.set("PERCOD_3", this.VARIABLE.PERCOD_3);
            // call REST API
            const result2 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query2", payload2);
            // get values from result
            this.VARIABLE.ANUAL_P3 = result2[0].get("ANUAL_P3");
            if (result2 == null || result2.length == 0) {

                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO SIN DIAS ANUALIZAR ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "9") {
                VPERIODO1 = "19"  + this.VARIABLE.PERCOD;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD, 1, 1) == "0") {
                VPERIODO1 = "20"  + this.VARIABLE.PERCOD;
            }
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "9") {
                VPERIODO2 = "19"  + this.VARIABLE.PERCOD_2;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_2, 1, 1) == "0") {
                VPERIODO2 = "20"  + this.VARIABLE.PERCOD_2;
            }
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_3, 1, 1) == "9") {
                VPERIODO3 = "19"  + this.VARIABLE.PERCOD_3;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_3, 1, 1) == "0") {
                VPERIODO3 = "20"  + this.VARIABLE.PERCOD_3;
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) == PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO2) == PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO 2 ES IGUAL AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO2) > PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO 2 ES MAYOR AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        V_CONIND = 0;
        V_CONIND_2 = 0;
        V_CONIND_3 = 0;
        // construct payload
        let payload3 = new Map();
        payload3.set("NITTER", this.VARIABLE.NITTER);
        payload3.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result3 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query3", payload3);
        // get values from result
        V_CONIND = result3[0].get("V_CONIND");
        if (V_CONIND > 0) {
            // construct payload
            let payload4 = new Map();
            // payload4.NITTER = : NITTER;
            // payload4.PERCOD = : PERCOD;
            // call REST API
            const result4 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query4", payload4);
        }
        // ANFINFTE_PUP_VALIDAPRIMER();
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // construct payload
            let payload6 = new Map();
            payload6.set("NITTER", this.VARIABLE.NITTER);
            payload6.set("PERCOD_2", this.VARIABLE.PERCOD_2);
            // call REST API
            const result6 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query6", payload6);
            // get values from result
            V_CONIND_2 = result6[0].get("V_CONIND_2");
            if (V_CONIND_2 > 0) {
                // construct payload
                let payload7 = new Map();
                // payload7.NITTER = : NITTER;
                // payload7.PERCOD_2 = : PERCOD_2;
                // call REST API
                const result7 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query7", payload7);
            }
            // ANFINFTE_PBD_COL_INDICADORESFIN(NITTER, PERCOD_2, PERCOD, ANUAL_P2, ANUAL_P1);
        }
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // construct payload
            let payload10 = new Map();
            payload10.set("NITTER", this.VARIABLE.NITTER);
            payload10.set("PERCOD_3", this.VARIABLE.PERCOD_3);
            // call REST API
            let result10 = Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query10", payload10);
            // get values from result
            V_CONIND_3 = result10[0].get("V_CONIND_3");
            if (V_CONIND_3 > 0) {
                // construct payload
                let payload11 = new Map();
                // payload11.NITTER = : NITTER;
                // payload11.PERCOD_3 = : PERCOD_3;
                // call REST API
                let result11 = Rest.post("/anfinfte_variable/anfinfte_variable_percod3_keynextitem_query11", payload11);
            }
            // ANFINFTE_PBD_COL_INDICADORESFIN(NITTER, PERCOD_3, PERCOD_2, ANUAL_P3, ANUAL_P2);
        }
        this.oracleFormsBuiltins.go_block("ANTINDXTE");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_PERIODO2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_PERIODO3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ACTIVIDAD");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ACTIVIDAD_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ACTIVIDAD_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_LIQUIDEZ");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_LIQUIDEZ_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_LIQUIDEZ_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE");
        console.log("Exiting ANFINFTE_variable_percod3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTINDXTE_POLITICAS');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_POLITICAS_2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_POLITICAS_3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_VALOR');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_VALOR_2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_VALOR_3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_POLITICAS');
    // END;
    //#endregion
    async ANFINFTE_variable_siguiente2_whenMouseClick() {
        console.log("Entering ANFINFTE_variable_siguiente2_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTINDXTE_POLITICAS");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_POLITICAS_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_POLITICAS_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_VALOR");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_VALOR_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_VALOR_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_POLITICAS");
        console.log("Exiting ANFINFTE_variable_siguiente2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTINDXTE_ENDEUDA');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_ENDEUDA_2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_ENDEUDA_3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_RENTA');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_RENTA_2');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_RENTA_3');
    //   EXECUTE_QUERY;
    //   GO_BLOCK('ANTINDXTE_ENDEUDA');
    // END;
    //#endregion
    async ANFINFTE_variable_siguiente1_whenMouseClick() {
        console.log("Entering ANFINFTE_variable_siguiente1_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ENDEUDA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ENDEUDA_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ENDEUDA_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_RENTA");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_RENTA_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_RENTA_3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ENDEUDA");
        console.log("Exiting ANFINFTE_variable_siguiente1_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // BEGIN
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'P_PERIODO',"TEXT_PARAMETER",:PERCOD);
    //     ADD_PARAMETER(PL_ID,'P_PERIODO2',"TEXT_PARAMETER",:this.VARIABLE.PERCOD_2);
    //     ADD_PARAMETER(PL_ID,'P_PERIODO3',"TEXT_PARAMETER",:this.VARIABLE.PERCOD_3);
    //     ADD_PARAMETER(PL_ID,'P_TERCERO',"TEXT_PARAMETER",:this.VARIABLE.NITTER);
    //     RUN_PRODUCT(REPORTS,'ANRINDIC',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFINFTE_variable_imprimir_whenMouseClick() {
        console.log("Entering ANFINFTE_variable_imprimir_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_PERIODO", "TEXT_PARAMETER", this.VARIABLE.PERCOD);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_PERIODO2", "TEXT_PARAMETER", this.VARIABLE.PERCOD_2);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_PERIODO3", "TEXT_PARAMETER", this.VARIABLE.PERCOD_3);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO", "TEXT_PARAMETER", this.VARIABLE.NITTER);
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRINDIC", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFINFTE_variable_imprimir_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // BEGIN
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    //     RUN_PRODUCT(REPORTS,'ANRBALTE',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFINFTE_variable_impBlce_whenMouseClick() {
        console.log("Entering ANFINFTE_variable_impBlce_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRBALTE", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFINFTE_variable_impBlce_whenMouseClick");
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
    async ANFINFTE_variable_percod_whenValidateItem() {
        console.log("Entering ANFINFTE_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfinfte_variable/anfinfte_variable_percod_whenvalidateitem_query2", payload2);
        // get values from result
        this.VARIABLE.ANUAL_P1 = result2[0].get("ANUAL_P1");
        if (result2 == null || result2.length == 0) {

            // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO SIN DIAS ANUALIZAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFINFTE_variable_percod_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   BEGIN
    //     SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //       INTO :DES_NOMBRE
    //       FROM TER
    //      WHERE TERCOD=:NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   
    // END; 
    //#endregion
    async ANFINFTE_variable_nitter_whenValidateItem() {
        console.log("Entering ANFINFTE_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NOMBRE = result1[0].get("DES_NOMBRE");
        if (result1 == null || result1.length == 0) {

            // ANFINFTE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFINFTE_variable_nitter_whenValidateItem");
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
    async ANFINFTE_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFINFTE_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFINFTE_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFINFTE_variable_btnSiguiente_whenButtonPressed");
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
    async ANFINFTE_variable_anualP2_whenValidateItem() {
        console.log("Entering ANFINFTE_variable_anualP2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_anualp2_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFINFTE_variable_anualP2_whenValidateItem");
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
    async ANFINFTE_variable_anualP3_whenValidateItem() {
        console.log("Entering ANFINFTE_variable_anualP3_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_anualp3_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFINFTE_variable_anualP3_whenValidateItem");
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
    async ANFINFTE_variable_anualP1_whenValidateItem() {
        console.log("Entering ANFINFTE_variable_anualP1_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfinfte_variable/anfinfte_variable_anualp1_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        if (result1 == null || result1.length == 0) {

            // ANFINFTE_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFINFTE_variable_anualP1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTINDXTE');
    //   HIDE_VIEW('CANVAS2');
    //   
    // END;
    //#endregion
    async ANFINFTE_variable_volver1_whenMouseClick() {
        console.log("Entering ANFINFTE_variable_volver1_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTINDXTE");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFINFTE_variable_volver1_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTINDXTE_ENDEUDA');
    //   HIDE_VIEW('CANVAS3');
    //   
    // END;
    //#endregion
    async ANFINFTE_variable_volver2_whenMouseClick() {
        console.log("Entering ANFINFTE_variable_volver2_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTINDXTE_ENDEUDA");
        this.oracleFormsBuiltins.hide_view("CANVAS3");
        console.log("Exiting ANFINFTE_variable_volver2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE_VALOR.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE_VALOR.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='VA';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE_VALOR.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE_VALOR.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxteValor_postQuery() {
        console.log("Entering ANFINFTE_antindxteValor_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE_VALOR.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte_valor/anfinfte_antindxtevalor_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE_VALOR.DES_INDICARDOR = result1[0].get("ANTINDXTE_VALOR.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxteValor_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT   INDICA_DESCRI
    //    INTO   :ANTINDXTE_ACTIVIDAD.DES_INDICARDOR
    //    FROM   ANTINDICADORES
    //   WHERE  INDICA_CODIGO =:ANTINDXTE_ACTIVIDAD.INDXTE_CODIND
    //     AND  INDICA_DOMINI ='AC';
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // :ANTINDXTE_ACTIVIDAD.PROMEDIO:= FPROMEDIO (:VARIABLE.NITTER,
    //                     :VARIABLE.PERCOD,
    //                     :VARIABLE.PERCOD_2,
    //                     :VARIABLE.PERCOD_3,
    //                     :ANTINDXTE_ACTIVIDAD.INDXTE_CODIND);
    //#endregion
    async ANFINFTE_antindxteActividad_postQuery() {
        console.log("Entering ANFINFTE_antindxteActividad_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("INDXTE_CODIND", this.ANTINDXTE_ACTIVIDAD.INDXTE_CODIND);
        // call REST API
        const result1 = await Rest.post("/anfinfte_antindxte_actividad/anfinfte_antindxteactividad_postquery_query1", payload1);
        // get values from result
        this.ANTINDXTE_ACTIVIDAD.DES_INDICARDOR = result1[0].get("ANTINDXTE_ACTIVIDAD.DES_INDICARDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFINFTE_antindxteActividad_postQuery");
    }

}

