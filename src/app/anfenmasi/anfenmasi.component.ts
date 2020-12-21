import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFENMASI business logic
import {
    VARIABLE,
    TOOLBAR,
    BASE
} from "./ANFENMASI_models";



// class ANFENMASI
@Component({
    selector: 'app-anfenmasi',
    templateUrl: './anfenmasi.component.html',
})
export class AnfenmasiComponent {
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
    async ANFENMASI_whenMouseDoubleclick() {
        console.log("Entering ANFENMASI_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFENMASI_whenMouseDoubleclick");
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
    // -------------------------------------------------------; END;
    //#endregion
    async ANFENMASI_whenNewFormInstance() {
        console.log("Entering ANFENMASI_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfenmasi/anfenmasi_whennewforminstance_query1", payload1);
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

        console.log("Exiting ANFENMASI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFENMASI_preForm() {
        console.log("Entering ANFENMASI_preForm");
        //ANFENMASI_PANTALLA();
        //ANFENMASI_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFENMASI_preForm");
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
    // END; 
    //#endregion
    async ANFENMASI_variable_periodo_whenValidateItem() {
        console.log("Entering ANFENMASI_variable_periodo_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        let DES_PER: string = null;
        V_CONTADOR = 0;
        // construct payload
        let payload1 = new Map();
        //payload1.set("PERIODO", PERIODO);
        // call REST API
        const result1 = await Rest.post("/anfenmasi_variable/anfenmasi_variable_periodo_whenvalidateitem_query1", payload1);
        // get values from result
        DES_PER = result1[0].get("DES_PER");
        if (result1 == null || result1.length == 0) {

            //ANFENMASI_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting ANFENMASI_variable_periodo_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   -- DEVUELVE EL USUARIO CONECTADO
    //  CURSOR C_NOM_USUARIO IS
    //  (SELECT OSUSER
    //    FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //     AND ROWNUM=1);
    //  
    // ------------------------------------------------
    // -- VARIABLES
    // ------------------------------------------------
    // NOM_USUARIO  OPS$AUDI.AUVSESION.OSUSER%TYPE; 
    // CADENA VARCHAR2(100);
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // CONT_REG NUMBER(20);
    // 
    // BEGIN
    //  
    //  OPEN C_NOM_USUARIO;
    //  FETCH C_NOM_USUARIO INTO NOM_USUARIO;
    //  CLOSE C_NOM_USUARIO;
    //  
    //  CADENA := '\\'||NOM_USUARIO||'\\COMPARTIDO\\ANRENDMASI.TXT';
    //  --------------------------------------------------------------------
    //     -- LLAMA EL REPORTE
    //     --------------------------------------------------------------------
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //      ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN', "TEXT_PARAMETER",'YES');
    //      ADD_PARAMETER(PL_ID,'NONBLOCKSQL', "TEXT_PARAMETER",'NO');
    //      ADD_PARAMETER(PL_ID, 'DESNAME', "TEXT_PARAMETER", CADENA);
    //     RUN_PRODUCT(REPORTS,'ANRENMASI',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID,
    //     NULL);    
    //    REDISPLAY;
    //    ----------------------------------------------------------------------
    // END;
    //#endregion
    async ANFENMASI_variable_archivo_whenMouseClick() {
        console.log("Entering ANFENMASI_variable_archivo_whenMouseClick");
        let NOM_USUARIO: null = null;
        let CADENA: string = null;
        let COMANDO: string = null;
        let PL_ID: any = null;
        let CONT_REG: number = null;
        CADENA = "\\" + NOM_USUARIO + "\\COMPARTIDO\\ANRENDMASI.TXT";
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "NONBLOCKSQL", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "DESNAME", "TEXT_PARAMETER", CADENA);
        //this.oracleFormsBuiltins.run_product(REPORTS, "ANRENMASI", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFENMASI_variable_archivo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // V_UNIDAD   VARCHAR2(5);
    // BEGIN
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE BORRAR LAS TABLAS DE ENDEUDAMIENTO.... ') = 1 THEN
    //  
    //  V_UNIDAD := FBD_CON_UNICON (:VARIABLE.UNIDAD);
    //  
    //  PQBD_COL_ANAENDEUDAMASIVO.PBD_COL_ANALISISENDEU (:PERIODO,V_UNIDAD);
    //     COMMIT;
    //    LIB$ALERTA('MENSAJE', 'FIN DEL PROCESO.......',NULL,NULL,NULL, T_RESPUESTA);
    //  ELSE
    //      LIB$ALERTA('MENSAJE', 'PROCESO NO GENERADO.......',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async ANFENMASI_variable_actualiza_whenMouseClick() {
        console.log("Entering ANFENMASI_variable_actualiza_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_UNIDAD: string = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE BORRAR LAS TABLAS DE ENDEUDAMIENTO.... ") == 1) {
        //     V_UNIDAD = FBD_CON_UNICON(VARIABLE.UNIDAD);
        //     ANFENMASI_PQBD_COL_ANAENDEUDAMASIVO.PBD_COL_ANALISISENDEU(PERIODO, V_UNIDAD);
        //     ANFENMASI_LIB$ALERTA("MENSAJE", "FIN DEL PROCESO.......", null, null, null, T_RESPUESTA);
        // }
        // else {
        //     ANFENMASI_LIB$ALERTA("MENSAJE", "PROCESO NO GENERADO.......", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting ANFENMASI_variable_actualiza_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFENMASI_toolbar_whenButtonPressed() {
        console.log("Entering ANFENMASI_toolbar_whenButtonPressed");
        //ANFENMASI_TOOLBAR_ACTIONS();
        console.log("Exiting ANFENMASI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFENMASI_toolbar_whenMouseLeave() {
        console.log("Entering ANFENMASI_toolbar_whenMouseLeave");
        //ANFENMASI_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFENMASI_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFENMASI_toolbar_whenNewFormInstance() {
        console.log("Entering ANFENMASI_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFENMASI_toolbar_whenNewFormInstance");
    }

}

