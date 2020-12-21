import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFBORRA business logic
import {
    VARIABLE,
    TOOLBAR,
    BASE
} from "./ANFBORRA_models";



// class ANFBORRA
@Component({
    selector: 'app-anfborra',
    templateUrl: './anfborra.component.html',
})
export class AnfborraComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFBORRA_whenMouseDoubleclick() {
        console.log("Entering ANFBORRA_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFBORRA_whenMouseDoubleclick");
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
    // ---------------------------------------------------------
    // 
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // --PARA SER INVOCADO POR OTRA VENTANA
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :VARIABLE.TERCERO  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF; END;
    //#endregion
    async ANFBORRA_whenNewFormInstance() {
        console.log("Entering ANFBORRA_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfborra/anfborra_whennewforminstance_query1", payload1);
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
            this.VARIABLE.TERCERO = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFBORRA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFBORRA_preForm() {
        console.log("Entering ANFBORRA_preForm");
        // ANFBORRA_PANTALLA();
        // ANFBORRA_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFBORRA_preForm");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE BORRAR EL FLUJO DE CAJA.... ') = 1 THEN
    //    PUP_BORRA_FLU_CAJA ;
    //    COMMIT;
    //    LIB$ALERTA('MENSAJE', 'FIN DEL PROCESO.......',NULL,NULL,NULL, T_RESPUESTA);
    //  ELSE
    //      LIB$ALERTA('MENSAJE', 'PROCESO NO GENERADO.......',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async ANFBORRA_variable_borFluCaja_whenMouseClick() {
        console.log("Entering ANFBORRA_variable_borFluCaja_whenMouseClick");
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE BORRAR EL FLUJO DE CAJA.... ") == 1) {
        //     ANFBORRA_PUP_BORRA_FLU_CAJA();
        //     ANFBORRA_LIB$ALERTA("MENSAJE", "FIN DEL PROCESO.......", null, null, null, T_RESPUESTA);
        // }
        // else {
        // ANFBORRA_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.......", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting ANFBORRA_variable_borFluCaja_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR NUMBER;
    //  DES_PER VARCHAR2(4);
    // BEGIN
    //  V_CONTADOR:=0;
    // BEGIN
    //  SELECT PERCOD
    //    INTO DES_PER
    //    FROM PER
    //    WHERE PERCOD=:PERIODO;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //  --  RAISE FORM_TRIGGER_FAILURE;
    // END;
    // /* BEGIN
    //    SELECT COUNT(*)
    //      INTO V_CONTADOR
    //      FROM ANTDIASXBAL
    //     WHERE  DIAXBA_CODTER = :DIAXBA_CODTER
    //       AND  DIAXBA_CODPER = :DIAXBA_CODPER;
    //  END;
    //   IF  V_CONTADOR > 0 THEN
    //      LIB$ALERTA('MENSAJE','ESTE REGISTRO YA SE ENCUENTRA CREADO....',NULL,NULL,NULL,T_RESPUESTA);
    //   BEGIN
    //    SELECT DIAXBA_DIASAN
    //      INTO :DIAXBA_DIASAN
    //      FROM ANTDIASXBAL
    //     WHERE  DIAXBA_CODTER = :DIAXBA_CODTER
    //       AND  DIAXBA_CODPER = :DIAXBA_CODPER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    //  END;
    //   END IF;    */
    // 
    // END; 
    //#endregion
    async ANFBORRA_variable_periodo_whenValidateItem() {
        console.log("Entering ANFBORRA_variable_periodo_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        let DES_PER: string = null;
        V_CONTADOR = 0;
        // construct payload
        let payload1 = new Map();
        // payload1.set("PERIODO", PERIODO);
        // call REST API
        const result1 = await Rest.post("/anfborra_variable/anfborra_variable_periodo_whenvalidateitem_query1", payload1);
        // get values from result
        DES_PER = result1[0].get("DES_PER");
        if (result1 == null || result1.length == 0) {

            // ANFBORRA_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting ANFBORRA_variable_periodo_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE BORRAR LA DECLARACIÓN DE RENTA.... ') = 1 THEN
    //    PUP_BORRA_DECLARA_RENTA ;
    //    COMMIT;
    //    LIB$ALERTA('MENSAJE', 'FIN DEL PROCESO.......',NULL,NULL,NULL, T_RESPUESTA);
    //  ELSE
    //      LIB$ALERTA('MENSAJE', 'PROCESO NO GENERADO.......',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async ANFBORRA_variable_borDeclara_whenMouseClick() {
        console.log("Entering ANFBORRA_variable_borDeclara_whenMouseClick");
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE BORRAR LA DECLARACIÓN DE RENTA.... ") == 1) {
        //     ANFBORRA_PUP_BORRA_DECLARA_RENTA();
        //     ANFBORRA_LIB$ALERTA("MENSAJE", "FIN DEL PROCESO.......", null, null, null, T_RESPUESTA);
        // }
        // else {
        //     ANFBORRA_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.......", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting ANFBORRA_variable_borDeclara_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE BORRAR LA DECLARACIÓN DE RENTA.... ') = 1 THEN
    //    PUP_BORRA_DECLARA_RENTA_JUR ;
    //    COMMIT;
    //    LIB$ALERTA('MENSAJE', 'FIN DEL PROCESO.......',NULL,NULL,NULL, T_RESPUESTA);
    //  ELSE
    //      LIB$ALERTA('MENSAJE', 'PROCESO NO GENERADO.......',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async ANFBORRA_variable_borDeclaraJuri_whenMouseClick() {
        console.log("Entering ANFBORRA_variable_borDeclaraJuri_whenMouseClick");
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE BORRAR LA DECLARACIÓN DE RENTA.... ") == 1) {
        //     ANFBORRA_PUP_BORRA_DECLARA_RENTA_JUR();
        //     ANFBORRA_LIB$ALERTA("MENSAJE", "FIN DEL PROCESO.......", null, null, null, T_RESPUESTA);
        // }
        // else {
        // ANFBORRA_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.......", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting ANFBORRA_variable_borDeclaraJuri_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DES_NITTER VARCHAR2(90);
    // BEGIN
    //  BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) 
    //    INTO DES_NITTER
    //    FROM TER
    //    WHERE TERCOD=:TERCERO;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','TERCERO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    // END;  
    //#endregion
    async ANFBORRA_variable_tercero_whenValidateItem() {
        console.log("Entering ANFBORRA_variable_tercero_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DES_NITTER: string = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("TERCERO", TERCERO);
        // call REST API
        const result1 = await Rest.post("/anfborra_variable/anfborra_variable_tercero_whenvalidateitem_query1", payload1);
        // get values from result
        DES_NITTER = result1[0].get("DES_NITTER");
        if (result1 == null || result1.length == 0) {

            // ANFBORRA_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFBORRA_variable_tercero_whenValidateItem");
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
    async ANFBORRA_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFBORRA_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFBORRA_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFBORRA_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE BORRAR EL BALANCE.... ') = 1 THEN
    //    PUP_BORRADA ;
    //    COMMIT;
    //    LIB$ALERTA('MENSAJE', 'FIN DEL PROCESO.......',NULL,NULL,NULL, T_RESPUESTA);
    //  ELSE
    //      LIB$ALERTA('MENSAJE', 'PROCESO NO GENERADO.......',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async ANFBORRA_variable_actualiza_whenMouseClick() {
        console.log("Entering ANFBORRA_variable_actualiza_whenMouseClick");
        let T_RESPUESTA: number = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE BORRAR EL BALANCE.... ") == 1) {
        //     ANFBORRA_PUP_BORRADA();
        //     ANFBORRA_LIB$ALERTA("MENSAJE", "FIN DEL PROCESO.......", null, null, null, T_RESPUESTA);
        // }
        // else {
        //     // ANFBORRA_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.......", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting ANFBORRA_variable_actualiza_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFBORRA_toolbar_whenButtonPressed() {
        console.log("Entering ANFBORRA_toolbar_whenButtonPressed");
        // ANFBORRA_TOOLBAR_ACTIONS();
        console.log("Exiting ANFBORRA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFBORRA_toolbar_whenMouseLeave() {
        console.log("Entering ANFBORRA_toolbar_whenMouseLeave");
        // ANFBORRA_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFBORRA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFBORRA_toolbar_whenNewFormInstance() {
        console.log("Entering ANFBORRA_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFBORRA_toolbar_whenNewFormInstance");
    }

}

