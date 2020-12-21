import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFTERRE business logic
import {
    VARIABLE,
    ANFTERREL,
    TOOLBAR,
    BASE
} from "./ANFTERRE_models";



// class ANFTERRE
@Component({
    selector: 'app-anfterre',
    templateUrl: './anfterre.component.html',
})
export class AnfterreComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public ANFTERREL: ANFTERREL = new ANFTERREL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFTERRE_whenMouseDoubleclick() {
        console.log("Entering ANFTERRE_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFTERRE_whenMouseDoubleclick");
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
    // ------------------------------------------------------
    //   
    // EXECUTE_QUERY; END;
    //#endregion
    async ANFTERRE_whenNewFormInstance() {
        console.log("Entering ANFTERRE_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfterre/anfterre_whennewforminstance_query1", payload1);
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
        console.log("Exiting ANFTERRE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFTERRE_preForm() {
        console.log("Entering ANFTERRE_preForm");
        // ANFTERRE_PANTALLA();
        // ANFTERRE_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFTERRE_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFTERRE_keyUp() {
        console.log("Entering ANFTERRE_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFTERRE_keyUp");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFTERRE_keyDown() {
        console.log("Entering ANFTERRE_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFTERRE_keyDown");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_NITTER
    //    FROM TER
    //    WHERE TERCOD=:VARIABLE.ENDTRR_CODTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFTERRE_variable_postQuery() {
        console.log("Entering ANFTERRE_variable_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("ENDTRR_CODTER", this.VARIABLE.ENDTRR_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfterre_variable/anfterre_variable_postquery_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFTERRE_variable_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_NITTER
    //    FROM TER
    //    WHERE TERCOD=:VARIABLE.ENDTRR_CODTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFTERRE_variable_endtrrCodter_whenValidateItem() {
        console.log("Entering ANFTERRE_variable_endtrrCodter_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("ENDTRR_CODTER", this.VARIABLE.ENDTRR_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfterre_variable/anfterre_variable_endtrrcodter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        if (result1 == null || result1.length == 0) {

            // ANFTERRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFTERRE_variable_endtrrCodter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_NITTER
    //    FROM TER
    //    WHERE TERCOD=:VARIABLE.ENDTRR_CODTER;
    //    NEXT_BLOCK;
    //    EXECUTE_QUERY; 
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFTERRE_variable_endtrrCodter_keyNextItem() {
        console.log("Entering ANFTERRE_variable_endtrrCodter_keyNextItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("ENDTRR_CODTER", this.VARIABLE.ENDTRR_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfterre_variable/anfterre_variable_endtrrcodter_keynextitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.execute_query();
        if (result1 == null || result1.length == 0) {

            // ANFTERRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFTERRE_variable_endtrrCodter_keyNextItem");
    }

    //#region PLSQL
    // BEGIN RELACION_TERCEROS; END;
    //#endregion
    async ANFTERRE_anfterrel_postInsert() {
        console.log("Entering ANFTERRE_anfterrel_postInsert");
        // ANFTERRE_RELACION_TERCEROS();
        console.log("Exiting ANFTERRE_anfterrel_postInsert");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_TERREL
    //    FROM TER
    //    WHERE TERCOD=:ANFTERREL.ENDTRR_TERREL;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFTERRE_anfterrel_postQuery() {
        console.log("Entering ANFTERRE_anfterrel_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("ENDTRR_TERREL", this.ANFTERREL.ENDTRR_TERREL);
        // call REST API
        const result1 = await Rest.post("/anfterre_anfterrel/anfterre_anfterrel_postquery_query1", payload1);
        // get values from result
        // this.VARIABLE.DES_TERREL = result1[0].get("DES_TERREL");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFTERRE_anfterrel_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO :DES_TERREL
    //    FROM TER
    //    WHERE TERCOD=:ANFTERREL.ENDTRR_TERREL;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFTERRE_anfterrel_endtrrTerrel_whenValidateItem() {
        console.log("Entering ANFTERRE_anfterrel_endtrrTerrel_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("ENDTRR_TERREL", this.ANFTERREL.ENDTRR_TERREL);
        // call REST API
        const result1 = await Rest.post("/anfterre_anfterrel/anfterre_anfterrel_endtrrterrel_whenvalidateitem_query1", payload1);
        // get values from result
        // this.VARIABLE.DES_TERREL = result1[0].get("DES_TERREL");
        if (result1 == null || result1.length == 0) {

            // ANFTERRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFTERRE_anfterrel_endtrrTerrel_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFTERRE_toolbar_whenButtonPressed() {
        console.log("Entering ANFTERRE_toolbar_whenButtonPressed");
        // ANFTERRE_TOOLBAR_ACTIONS();
        console.log("Exiting ANFTERRE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFTERRE_toolbar_whenMouseLeave() {
        console.log("Entering ANFTERRE_toolbar_whenMouseLeave");
        // ANFTERRE_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFTERRE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFTERRE_toolbar_whenNewFormInstance() {
        console.log("Entering ANFTERRE_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFTERRE_toolbar_whenNewFormInstance");
    }

}

