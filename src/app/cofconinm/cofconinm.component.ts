import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFCONINM business logic
import {
    PROCESO,
    VARIABLES,
    PLANO,
    TOOLBAR,
    COVPRECOM,
    BASE
} from "./COFCONINM_models";



// class COFCONINM
@Component({
    selector: 'app-cofconinm',
    templateUrl: './cofconinm.component.html',
})
export class CofconinmComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PROCESO: PROCESO = new PROCESO();
    public VARIABLES: VARIABLES = new VARIABLES();
    public PLANO: PLANO = new PLANO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public COVPRECOM: COVPRECOM = new COVPRECOM();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONINM_whenMouseDoubleclick() {
        console.log("Entering COFCONINM_whenMouseDoubleclick");
        console.log("Exiting COFCONINM_whenMouseDoubleclick");
    }

    //#region PLSQL
    // REF$WHEN_NEW_FORM_INSTANCE;
    // 
    // 
    // 
    // DECLARE
    //  V_PERMISO VARCHAR2(1) := 'N';
    // BEGIN
    //  DECLARE
    //   V_CARGO  VARCHAR2(4);
    //  BEGIN  
    //   SELECT USU_CARGO_N
    //   INTO V_CARGO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO = USER
    //   AND USU_CODUNI = :this.PARAMETER.get("P_UNIDAD"); --ARQUITECTURA
    //  
    //    BEGIN
    //     SELECT 'S'
    //      INTO V_PERMISO
    //     FROM SETPARAMETRO P
    //     WHERE PARAME_PROCES = 'PREMIOS'
    //      AND PARAME_VALOR IN ('GENMAS','GENUNO')
    //      AND PARAME_CODIGO = V_CARGO;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //      V_PERMISO := 'N';
    //    END;
    //    
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    V_CARGO  := NULL;
    //    V_PERMISO := 'N';
    //  END;
    //       
    //  --IF V_PERMISO = 'N' THEN
    //   --SET_ITEM_PROPERTY ('TIPXCOM_CODCOM2',ENABLED, "PROPERTY_FALSE");
    //  -- SET_ITEM_PROPERTY ('BTN_PROCPROD',ENABLED, "PROPERTY_FALSE");
    //  -- SET_ITEM_PROPERTY ('BTN_SAVE',ENABLED, "PROPERTY_FALSE");
    //  --END IF;
    //  
    // END;
    //#endregion
    async COFCONINM_whenNewFormInstance() {
        console.log("Entering COFCONINM_whenNewFormInstance");
        let V_PERMISO: string = 'N';
        {

            let V_CARGO: string = null;
            // construct payload
            let payload1 = new Map();
            payload1.set("P_UNIDAD", this.PARAMETER.get("P_UNIDAD"));
            // call REST API
            const result1 = await Rest.post("/cofconinm/cofconinm_whennewforminstance_query1", payload1);
            // get values from result
            V_CARGO = result1[0].get("V_CARGO");
            // construct payload
            let payload2 = new Map();
            // call REST API
            const result2 = await Rest.post("/cofconinm/cofconinm_whennewforminstance_query2", payload2);
            // get values from result
            V_PERMISO = result2[0].get("V_PERMISO");
            if (result2 == null || result2.length == 0) {

                V_PERMISO = "N";
            }

            if (result2 == null || result2.length == 0) {

                V_CARGO = null;
                V_PERMISO = "N";
            }

        }

        console.log("Exiting COFCONINM_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONINM_preForm() {
        console.log("Entering COFCONINM_preForm");
        console.log("Exiting COFCONINM_preForm");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK ('COVPRECOM');
    // EXECUTE_QUERY; END;
    //#endregion
    async COFCONINM_variables_keyNxtblk() {
        console.log("Entering COFCONINM_variables_keyNxtblk");
        this.oracleFormsBuiltins.go_block("COVPRECOM");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting COFCONINM_variables_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK ('COVPRECOM');
    // EXECUTE_QUERY; END;
    //#endregion
    async COFCONINM_variables_verCuadro_whenButtonPressed() {
        console.log("Entering COFCONINM_variables_verCuadro_whenButtonPressed");
        this.oracleFormsBuiltins.go_block("COVPRECOM");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting COFCONINM_variables_verCuadro_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // V_EQUIPO VARCHAR2(100);
    // V_CORTE VARCHAR2(1);
    // BEGIN
    // 
    // -----------------------------
    // 
    //    BEGIN
    //   SELECT OSUSER
    //    INTO V_EQUIPO
    //    FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //     AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN NULL; 
    //   END;
    //      
    // -----------------------------  
    // 
    //  IF :DSP_CORTE = 'CORTE JUNTA' THEN
    //   V_CORTE := 'J';
    //  ELSE
    //   V_CORTE := 'C';
    //  END IF;
    // 
    // 
    //   :PLANO.RUTA :='\\'||V_EQUIPO||'\COMPARTIDO\INM'||V_CORTE||:TXT_PER||'.CSV';
    //   GO_BLOCK('PLANO');
    //   LIB$AJUSTAVENTANA('WIN_PLANO',0,0);
    //   :TXT_BLOQUE := 'COVPRECOM';
    // END;
    //#endregion
    async COFCONINM_variables_btnExporta_whenButtonPressed() {
        console.log("Entering COFCONINM_variables_btnExporta_whenButtonPressed");
        let V_EQUIPO: string = null;
        let V_CORTE: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/cofconinm_variables/cofconinm_variables_btnexporta_whenbuttonpressed_query1", payload1);
            // get values from result
            V_EQUIPO = result1[0].get("V_EQUIPO");
        } catch (ex) {

        }

        // if (DSP_CORTE == "CORTE JUNTA") {
        //     V_CORTE = "J";
        // }
        // else {
        //     V_CORTE = "C";
        // }
        //this.PLANO.RUTA = "\\" + V_EQUIPO + "\COMPARTIDO\INM" + V_CORTE + TXT_PER + ".CSV";
        this.oracleFormsBuiltins.go_block("PLANO");
        // COFCONINM_LIB$AJUSTAVENTANA("WIN_PLANO", 0, 0);
        // this.VARIABLES.TXT_BLOQUE = "COVPRECOM";
        console.log("Exiting COFCONINM_variables_btnExporta_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  
    // IF  GET_ITEM_PROPERTY('BTN_CORTE',ICON_NAME) = 'SYNC_ON' THEN
    //  SET_ITEM_PROPERTY ('BTN_CORTE',ICON_NAME, 'SYNC_OFF' );
    //  
    //   BEGIN
    //      SELECT FECCOR_FECINI,  FECCOR_FECFIN 
    //        INTO :VAR_FECCORINI, :VAR_FECCORFIN
    //        FROM COTFECCOR 
    //       WHERE FECCOR_AÑO||FECCOR_MES = :TXT_PER;
    //       
    //       :DSP_CORTE := 'CORTE COMERCIAL'; 
    //       
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :VAR_FECCORINI := NULL;
    //      :VAR_FECCORFIN := NULL;
    //    END;
    // 
    // ELSE
    //  SET_ITEM_PROPERTY ('BTN_CORTE',ICON_NAME, 'SYNC_ON' );
    //  :VAR_FECCORINI := TO_DATE(:TXT_PER,'YYYYMM');
    //  :VAR_FECCORFIN := LAST_DAY(TO_DATE(:TXT_PER,'YYYYMM'));
    //   :DSP_CORTE := 'CORTE JUNTA';  
    // END IF;
    // 
    // END;
    //#endregion
    async COFCONINM_variables_btnCorte_whenButtonPressed() {
        console.log("Entering COFCONINM_variables_btnCorte_whenButtonPressed");
        let result1;
        if (this.oracleFormsBuiltins.get_item_property("BTN_CORTE", "ICON_NAME") == "SYNC_ON") {
            this.oracleFormsBuiltins.set_item_property("BTN_CORTE", "ICON_NAME", "SYNC_OFF");
            // construct payload
            let payload1 = new Map();
            // payload1.set("VAR_FECCORFIN", VAR_FECCORFIN);
            // payload1.set("VAR_FECCORINI", VAR_FECCORINI);
            // call REST API
            result1 = await Rest.post("/cofconinm_variables/cofconinm_variables_btncorte_whenbuttonpressed_query1", payload1);
            // get values from result
            this.VARIABLES.VAR_FECCORINI = result1[0].get("VAR_FECCORINI");
            this.VARIABLES.VAR_FECCORFIN = result1[0].get("VAR_FECCORFIN");
            // COFCONINM_O();
        }
        this.VARIABLES.DSP_CORTE = "CORTE COMERCIAL";
        if (result1 == null || result1.length == 0) {

            this.VARIABLES.VAR_FECCORINI = null;
            this.VARIABLES.VAR_FECCORFIN = null;
        }

        console.log("Exiting COFCONINM_variables_btnCorte_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TXT_PER IS NULL THEN
    //      MESSAGE('EL PERIODO A PROCESAR NO PUEDE ESTAR VACIO');
    //      MESSAGE('EL PERIODO A PROCESAR NO PUEDE ESTAR VACIO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF SUBSTR(:TXT_PER,5,1) = '%' THEN
    //    NULL;
    //   ELSIF LENGTH (:TXT_PER) < 6 THEN
    //    MESSAGE ('EL FORMATO DEBE SER (YYYYMM)');
    //    RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF SUBSTR(:TXT_PER,5,2) NOT BETWEEN 01 AND 12 
    //      OR LENGTH (SUBSTR(:TXT_PER,5,2)) < 2 THEN
    //      MESSAGE('EL MES DEBE ESTAR ENTRE 1 Y 12');
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //    
    //  :VAR_FECCORINI := TO_DATE(:TXT_PER,'YYYYMM');
    //  :VAR_FECCORFIN := LAST_DAY(TO_DATE(:TXT_PER,'YYYYMM'));  
    //   :DSP_CORTE := 'CORTE JUNTA';
    //   
    // END;
    //#endregion
    async COFCONINM_variables_txtPer_whenValidateItem() {
        console.log("Entering COFCONINM_variables_txtPer_whenValidateItem");
        if ((this.VARIABLES.TXT_PER == null)) {
            this.oracleFormsBuiltins.message("EL PERIODO A PROCESAR NO PUEDE ESTAR VACIO");
            this.oracleFormsBuiltins.message("EL PERIODO A PROCESAR NO PUEDE ESTAR VACIO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (PLSQLBuiltins.substr(this.VARIABLES.TXT_PER, 5, 1) == "%") {
        }
        else if (PLSQLBuiltins.string_length(this.VARIABLES.TXT_PER) < 6) {
            this.oracleFormsBuiltins.message("EL FORMATO DEBE SER (YYYYMM)");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if ((PLSQLBuiltins.substr(this.VARIABLES.TXT_PER, 5, 2) || PLSQLBuiltins.string_length(PLSQLBuiltins.substr(this.VARIABLES.TXT_PER, 5, 2)) < 2)) {
            this.oracleFormsBuiltins.message("EL MES DEBE ESTAR ENTRE 1 Y 12");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        this.VARIABLES.VAR_FECCORINI = new Date(this.VARIABLES.TXT_PER);
        this.VARIABLES.VAR_FECCORFIN = OracleFormsBuiltins.last_day(new Date(this.VARIABLES.TXT_PER));
        this.VARIABLES.DSP_CORTE = "CORTE JUNTA";
        console.log("Exiting COFCONINM_variables_txtPer_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_BOTON NUMBER;
    // BEGIN 
    //  IF :TXT_BLOQUE = 'CURSOR' THEN 
    //   GENERA_PLANO;
    //   LIB$ALERTA('MENSAJE','ARCHIVO GENERADO EN '||:PLANO.RUTA,'ACEPTAR','ABRIR', NULL, V_BOTON);
    //   IF V_BOTON = 2 THEN
    //    LIB$OFFICE.ABRE_ARCHIVO ('TEXTO', :PLANO.RUTA );
    //   END IF;
    //  ELSE
    //   LIB$GENPLANO(:TXT_BLOQUE,:PLANO.RUTA);
    //   IF :RG_TIPO = 'E' THEN
    //    LIB$OFFICE.ABRE_ARCHIVO ('EXCEL', :PLANO.RUTA );
    //    ELSE
    //     IF :RG_TIPO = 'W' THEN
    //     LIB$OFFICE.ABRE_ARCHIVO ('WORD', :PLANO.RUTA );
    //    ELSE
    //     LIB$OFFICE.ABRE_ARCHIVO ('TEXTO', :PLANO.RUTA );
    //    END IF;
    //    END IF;
    //  END IF;
    // 
    // END;
    //#endregion
    async COFCONINM_plano_btnGenerar_whenButtonPressed() {
        console.log("Entering COFCONINM_plano_btnGenerar_whenButtonPressed");
        let V_BOTON: number = null;
        // if (this.VARIABLES.TXT_BLOQUE == "CURSOR") {
        //     COFCONINM_GENERA_PLANO();
        //     COFCONINM_LIB$ALERTA("MENSAJE", "ARCHIVO GENERADO EN " + PLANO.RUTA, "ACEPTAR", "ABRIR", null, V_BOTON);
        //     if (V_BOTON == 2) {
        //         COFCONINM_LIB$OFFICE.ABRE_ARCHIVO("TEXTO", PLANO.RUTA);
        //     }
        // }
        // else {
        //     COFCONINM_LIB$GENPLANO(TXT_BLOQUE, PLANO.RUTA);
        //     if (RG_TIPO == "E") {
        //         COFCONINM_LIB$OFFICE.ABRE_ARCHIVO("EXCEL", PLANO.RUTA);
        //     }
        //     else {
        //         if (RG_TIPO == "W") {
        //             COFCONINM_LIB$OFFICE.ABRE_ARCHIVO("WORD", PLANO.RUTA);
        //         }
        //         else {
        //             COFCONINM_LIB$OFFICE.ABRE_ARCHIVO("TEXTO", PLANO.RUTA);
        //         }
        //     }
        // }
        console.log("Exiting COFCONINM_plano_btnGenerar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  HIDE_WINDOW('WIN_PLANO');
    //  GO_BLOCK('COTCUMXCOR');
    // END;
    //#endregion
    async COFCONINM_plano_btnRegresar_whenButtonPressed() {
        console.log("Entering COFCONINM_plano_btnRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.hide_window("WIN_PLANO");
        this.oracleFormsBuiltins.go_block("COTCUMXCOR");
        console.log("Exiting COFCONINM_plano_btnRegresar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_RUTA VARCHAR2(255);
    // BEGIN
    //  V_RUTA:=:PLANO.RUTA;
    //  :PLANO.RUTA := GET_FILE_NAME(FILE_FILTER=> 'DOCUMENTOS (*.DOC,*.XLS,*.TXT)');
    // 
    //  IF :PLANO.RUTA IS NULL THEN
    //   :PLANO.RUTA:=V_RUTA;
    //  END IF;
    // 
    // END;
    //   
    //#endregion
    async COFCONINM_plano_btnAbre_whenButtonPressed() {
        console.log("Entering COFCONINM_plano_btnAbre_whenButtonPressed");
        let V_RUTA: string = null;
        V_RUTA = this.PLANO.RUTA;
        this.PLANO.RUTA = this.oracleFormsBuiltins.get_file_name("DOCUMENTOS (*.DOC,*.XLS,*.TXT)");
        if ((this.PLANO.RUTA == null)) {
            this.PLANO.RUTA = V_RUTA;
        }
        console.log("Exiting COFCONINM_plano_btnAbre_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONINM_toolbar_whenButtonPressed() {
        console.log("Entering COFCONINM_toolbar_whenButtonPressed");
        console.log("Exiting COFCONINM_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONINM_toolbar_whenMouseLeave() {
        console.log("Entering COFCONINM_toolbar_whenMouseLeave");
        console.log("Exiting COFCONINM_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCONINM_toolbar_whenNewFormInstance() {
        console.log("Entering COFCONINM_toolbar_whenNewFormInstance");
        console.log("Exiting COFCONINM_toolbar_whenNewFormInstance");
    }

}

