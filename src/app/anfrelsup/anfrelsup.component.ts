import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFRELSUP business logic
import {
    VARIABLE,
    TOOLBAR,
    BASE
} from "./ANFRELSUP_models";



// class ANFRELSUP
@Component({
    selector: 'app-anfrelsup',
    templateUrl: './anfrelsup.component.html',
})
export class AnfrelsupComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
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
    async ANFRELSUP_whenMouseDoubleclick() {
        console.log("Entering ANFRELSUP_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFRELSUP_whenMouseDoubleclick");
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
    // ------------------------------------------------------; END;
    //#endregion
    async ANFRELSUP_whenNewFormInstance() {
        console.log("Entering ANFRELSUP_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfrelsup/anfrelsup_whennewforminstance_query1", payload1);
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

        console.log("Exiting ANFRELSUP_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFRELSUP_preForm() {
        console.log("Entering ANFRELSUP_preForm");
        //ANFRELSUP_PANTALLA();
        //ANFRELSUP_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFRELSUP_preForm");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  -- DEVUELVE EL USUARIO CONECTADO
    //  CURSOR C_NOM_USUARIO IS
    //  (SELECT OSUSER
    //    FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //     AND ROWNUM=1); 
    // ------------------------------------------------
    // -- VARIABLES
    // ------------------------------------------------
    // NOM_USUARIO  OPS$AUDI.AUVSESION.OSUSER%TYPE; 
    // CADENA VARCHAR2(100);
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // CONT_REG NUMBER(20);
    // BEGIN  
    //  
    //   OPEN C_NOM_USUARIO;
    //  FETCH C_NOM_USUARIO INTO NOM_USUARIO;
    //  CLOSE C_NOM_USUARIO;
    //  
    //  CADENA := '\\'||NOM_USUARIO||'\\COMPARTIDO\\CORRELSUP.TXT'; 
    //  
    //  
    //  --------------------------------------------------------------------
    //     -- LLAMA EL REPORTE
    //     --------------------------------------------------------------------
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //      PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //      ADD_PARAMETER(PL_ID, 'DESNAME', "TEXT_PARAMETER", CADENA);
    //      ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //      ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //     RUN_PRODUCT(REPORTS,'CORRELSUP',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID,
    //     NULL);    
    //    REDISPLAY;
    //    ----------------------------------------------------------------------
    // END;
    //#endregion
    async ANFRELSUP_variable_archivo_whenMouseClick() {
        console.log("Entering ANFRELSUP_variable_archivo_whenMouseClick");
        let NOM_USUARIO: null = null;
        let CADENA: string = null;
        let COMANDO: string = null;
        let PL_ID: any = null;
        let CONT_REG: number = null;
        CADENA = "\\" + NOM_USUARIO + "\\COMPARTIDO\\CORRELSUP.TXT";
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", CADENA);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        //this.oracleFormsBuiltins.run_product(REPORTS, "CORRELSUP", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFRELSUP_variable_archivo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE BORRAR LAS TABLAS.... ') = 1 THEN
    //  PBD_COL_ENDCTA14REL(:P_FECHA );
    //     COMMIT;
    //    LIB$ALERTA('MENSAJE', 'FIN DEL PROCESO.......',NULL,NULL,NULL, T_RESPUESTA);
    //  ELSE
    //      LIB$ALERTA('MENSAJE', 'PROCESO NO GENERADO.......',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async ANFRELSUP_variable_actualiza_whenMouseClick() {
        console.log("Entering ANFRELSUP_variable_actualiza_whenMouseClick");
        let T_RESPUESTA: number = null;
        //if (FRM$ALERTA_SINO("ESTA SEGURO DE BORRAR LAS TABLAS.... ") == 1) {
        //    ANFRELSUP_PBD_COL_ENDCTA14REL(P_FECHA);
        //    ANFRELSUP_LIB$ALERTA("MENSAJE", "FIN DEL PROCESO.......", null, null, null, T_RESPUESTA);
        //}
        //else {
        //    ANFRELSUP_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.......", null, null, null, T_RESPUESTA);
        //}
        console.log("Exiting ANFRELSUP_variable_actualiza_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFRELSUP_toolbar_whenButtonPressed() {
        console.log("Entering ANFRELSUP_toolbar_whenButtonPressed");
        //ANFRELSUP_TOOLBAR_ACTIONS();
        console.log("Exiting ANFRELSUP_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFRELSUP_toolbar_whenMouseLeave() {
        console.log("Entering ANFRELSUP_toolbar_whenMouseLeave");
        //ANFRELSUP_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFRELSUP_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFRELSUP_toolbar_whenNewFormInstance() {
        console.log("Entering ANFRELSUP_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFRELSUP_toolbar_whenNewFormInstance");
    }

}

