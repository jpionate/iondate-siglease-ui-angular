import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFRANPN business logic
import {
    ANTCONPEN_DEUDOR2,
    ANTTERRANPN,
    ANTCONPEN_DEUDOR,
    ANTCON_TITULODEUDOR2,
    ANTRESPEN,
    ANTRESPEN_CODEUDOR,
    ANTRANKPN_2,
    ANTRANKPN,
    TOOLBAR,
    ANTCON_TITULODEUDOR,
    BASE
} from "./ANFRANPN_models";



// class ANFRANPN
@Component({
    selector: 'app-anfranpn',
    templateUrl: './anfranpn.component.html',
})
export class AnfranpnComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTCONPEN_DEUDOR2: ANTCONPEN_DEUDOR2 = new ANTCONPEN_DEUDOR2();
    public ANTTERRANPN: ANTTERRANPN = new ANTTERRANPN();
    public ANTCONPEN_DEUDOR: ANTCONPEN_DEUDOR = new ANTCONPEN_DEUDOR();
    public ANTCON_TITULODEUDOR2: ANTCON_TITULODEUDOR2 = new ANTCON_TITULODEUDOR2();
    public ANTRESPEN: ANTRESPEN = new ANTRESPEN();
    public ANTRESPEN_CODEUDOR: ANTRESPEN_CODEUDOR = new ANTRESPEN_CODEUDOR();
    public ANTRANKPN_2: ANTRANKPN_2 = new ANTRANKPN_2();
    public ANTRANKPN: ANTRANKPN = new ANTRANKPN();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTCON_TITULODEUDOR: ANTCON_TITULODEUDOR = new ANTCON_TITULODEUDOR();
    public BASE: BASE = new BASE();


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
    async ANFRANPN_onClearDetails() {
        console.log("Entering ANFRANPN_onClearDetails");
        // ANFRANPN_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting ANFRANPN_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFRANPN_whenMouseDoubleclick() {
        console.log("Entering ANFRANPN_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFRANPN_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    //    V_TLIS NUMBER;
    //  BEGIN
    // --ANTES DEL CAMBIO  
    //   SYSTEM.MESSAGE_LEVEL:=5;
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
    //   
    //  GO_BLOCK('ANTRANKPN');  
    //  GO_ITEM('RANKPN_FECRAD');
    //  EXECUTE_QUERY;
    // 
    // --ANTES DEL CAMBIO 
    //   
    //   
    //  BEGIN
    //   SELECT PR.PARRKP_CODLIS
    //   INTO V_TLIS
    //   FROM ANTPARRKPN PR
    //   WHERE :ANTTERRANPN.TERAPN_FECRAD BETWEEN PR.PARRKP_FINICI AND PR.PARRKP_FFINAL
    //   AND ROWNUM = 1;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN    V_TLIS := 0  ;
    //  END ;
    //  
    //    IF V_TLIS = 0 THEN
    //       :ANTTERRANPN.T_LISTA := 1;
    //    ELSE
    //       :ANTTERRANPN.T_LISTA := V_TLIS;
    //    END IF;
    //  END;
    // 
    // 
    // 
    // 
    // DECLARE
    //  V_FORMA VARCHAR2(10);
    // BEGIN
    // V_FORMA := F_SIGUIENTE_F;
    // END;
    // 
    // --PARA SER INVOCADO POR OTRA VENTANA
    // IF  :this.PARAMETER.get("P_CTRL") ='Q' THEN
    // :ANTRANKPN.RANKPN_CODTER  :=  :this.PARAMETER.get("P_NIT");
    // NEXT_ITEM;
    // END IF;
    //#endregion
    async ANFRANPN_whenNewFormInstance() {
        console.log("Entering ANFRANPN_whenNewFormInstance");
        let V_TLIS: number = null;
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
                const result1 = await Rest.post("/anfranpn/anfranpn_whennewforminstance_query1", payload1);
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

        this.oracleFormsBuiltins.go_block("ANTRANKPN");
        this.oracleFormsBuiltins.go_item("RANKPN_FECRAD");
        this.oracleFormsBuiltins.execute_query();
        // construct payload
        let payload2 = new Map();
        payload2.set("TERAPN_FECRAD", this.ANTTERRANPN.TERAPN_FECRAD);
        // call REST API
        const result2 = await Rest.post("/anfranpn/anfranpn_whennewforminstance_query2", payload2);
        // get values from result
        V_TLIS = result2[0].get("V_TLIS");
        if (result2 == null || result2.length == 0) {

            V_TLIS = 0;
        }

        if (V_TLIS == 0) {
            this.ANTTERRANPN.T_LISTA = 1;
        }
        else {
            this.ANTTERRANPN.T_LISTA = V_TLIS;
        }
        let V_FORMA: string = null;
        // V_FORMA = F_SIGUIENTE_F;
        console.log("Exiting ANFRANPN_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFRANPN_preForm() {
        console.log("Entering ANFRANPN_preForm");
        // ANFRANPN_PANTALLA();
        // ANFRANPN_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFRANPN_preForm");
    }

    async ANFRANPN_antconpenDeudor2_keyDelrec() {
        // null;
    }

    async ANFRANPN_antconpenDeudor2_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    // IF :TERAPN_CODEUD IS NOT NULL THEN
    // PUP_ACTUALIZACION_DEUDOR;
    // END IF;
    // END;
    //#endregion
    async ANFRANPN_antconpenDeudor2_whenValidateRecord() {
        console.log("Entering ANFRANPN_antconpenDeudor2_whenValidateRecord");
        if ((this.ANTTERRANPN.TERAPN_CODEUD != null)) {
            // ANFRANPN_PUP_ACTUALIZACION_DEUDOR();
        }
        console.log("Exiting ANFRANPN_antconpenDeudor2_whenValidateRecord");
    }

    async ANFRANPN_antconpenDeudor2_keyCrerec() {
        // null;
    }

    async ANFRANPN_antconpenDeudor2_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    // SELECT  PARRKP_DESCRI
    //  INTO :ANTCONPEN_DEUDOR2.CONPEN_CODCON1
    // FROM ANTPARRKPN 
    // WHERE PARRKP_DOMINI =:ANTCONPEN_DEUDOR2.CONPEN_DOMINI
    //   AND PARRKP_CODIGO =:ANTCONPEN_DEUDOR2.CONPEN_CODCON;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //  BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_DEUDOR3
    //     FROM TER
    //    WHERE TERCOD=:TERAPN_CODEUD;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    NULL;
    //  END;
    //#endregion
    async ANFRANPN_antconpenDeudor2_postQuery() {
        console.log("Entering ANFRANPN_antconpenDeudor2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CONPEN_DOMINI", this.ANTCONPEN_DEUDOR2.CONPEN_DOMINI);
        payload1.set("CONPEN_CODCON", this.ANTCONPEN_DEUDOR2.CONPEN_CODCON);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antconpen_deudor2/anfranpn_antconpendeudor2_postquery_query1", payload1);
        // get values from result
        this.ANTCONPEN_DEUDOR2.CONPEN_CODCON1 = result1[0].get("ANTCONPEN_DEUDOR2.CONPEN_CODCON1");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("TERAPN_CODEUD", this.ANTTERRANPN.TERAPN_CODEUD);
        // call REST API
        const result2 = await Rest.post("/anfranpn_antconpen_deudor2/anfranpn_antconpendeudor2_postquery_query2", payload2);
        // get values from result
        this.ANTCONPEN_DEUDOR2.DES_DEUDOR3 = result2[0].get("DES_DEUDOR3");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting ANFRANPN_antconpenDeudor2_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF NOT SHOW_LOV('L_DOMINIOS2') THEN
    //      MESSAGE('NO EXISTE VALORES DISPONIBLES');
    //   END IF;
    // END;
    //#endregion
    async ANFRANPN_antconpenDeudor2_lista_whenMouseClick() {
        console.log("Entering ANFRANPN_antconpenDeudor2_lista_whenMouseClick");
        if ((!this.oracleFormsBuiltins.show_lov("L_DOMINIOS2"))) {
            this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES");
        }
        console.log("Exiting ANFRANPN_antconpenDeudor2_lista_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  V_FECHA      DATE;
    //  V_TERCERO         VARCHAR2(20);
    //  VCONDICION        VARCHAR2(2000);
    // BEGIN
    //   COMMIT_FORM;
    //   V_FECHA   := :ANTRANKPN.RANKPN_FECRAD;
    //   V_TERCERO := :ANTRANKPN.RANKPN_CODTER;
    //   
    //   GO_BLOCK('ANTRANKPN');
    //   
    //   
    //   VCONDICION := 'RANKPN_CODTER = ''' || V_TERCERO||''''||
    //         ' AND RANKPN_FECRAD = TO_DATE('''||V_FECHA||''',''DD-MON-YY'''||')';        
    //                 
    //   SET_BLOCK_PROPERTY('ANTRANKPN', "DEFAULT_WHERE", VCONDICION);
    //   
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFRANPN_antconpenDeudor2_volver1_whenMouseClick() {
        console.log("Entering ANFRANPN_antconpenDeudor2_volver1_whenMouseClick");
        let V_FECHA: Date = null;
        let V_TERCERO: string = null;
        let VCONDICION: string = null;
        this.oracleFormsBuiltins.commit_form();
        V_FECHA = this.ANTRANKPN.RANKPN_FECRAD;
        V_TERCERO = this.ANTRANKPN.RANKPN_CODTER;
        this.oracleFormsBuiltins.go_block("ANTRANKPN");
        VCONDICION = "RANKPN_CODTER = ''" + V_TERCERO + "''" + " AND RANKPN_FECRAD = TO_DATE(''" + V_FECHA + "'',''DD-MON-YY''" + ")";
        this.oracleFormsBuiltins.set_block_property("ANTRANKPN", "DEFAULT_WHERE", VCONDICION);
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFRANPN_antconpenDeudor2_volver1_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    // CONTADOR NUMBER(6);
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  CONTADOR :=0;
    //  BEGIN
    //    SELECT COUNT(*)
    //      INTO CONTADOR
    //      FROM ANTCONPEN
    //     WHERE  CONPEN_CODTER =:ANTRANKPN.RANKPN_CODTER
    //       AND  CONPEN_CODEUD= :TERAPN_CODEUD
    //       AND CONPEN_FECHAR= :ANTRANKPN.RANKPN_FECRAD;
    //   END;
    // IF CONTADOR  > 0 THEN
    //    LIB$ALERTA('MENSAJE','EL CODEUDOR YA TIENE CONDICIONES GRABADAS IMPOSIBLE BORRAR REGISTRO.....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // ELSE
    //   DELETE_RECORD;
    //   COMMIT;
    // END IF;
    // END;
    //#endregion
    async ANFRANPN_antterranpn_keyDelrec() {
        console.log("Entering ANFRANPN_antterranpn_keyDelrec");
        let CONTADOR: number = null;
        let T_RESPUESTA: number = null;
        CONTADOR = 0;
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // payload1.set("TERAPN_CODEUD", TERAPN_CODEUD);
        payload1.set("RANKPN_FECRAD", this.ANTRANKPN.RANKPN_FECRAD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antterranpn/anfranpn_antterranpn_keydelrec_query1", payload1);
        // get values from result
        CONTADOR = result1[0].get("CONTADOR");
        if (CONTADOR > 0) {
            // ANFRANPN_LIB$ALERTA("MENSAJE", "EL CODEUDOR YA TIENE CONDICIONES GRABADAS IMPOSIBLE BORRAR REGISTRO.....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.delete_record();
        }
        console.log("Exiting ANFRANPN_antterranpn_keyDelrec");
    }

    async ANFRANPN_antterranpn_keyNxtblk() {
        // null;
    }

    async ANFRANPN_antterranpn_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_CODEUDOR
    //     FROM TER
    //    WHERE TERCOD=:TERAPN_CODEUD;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    NULL;
    //  END;
    //#endregion
    async ANFRANPN_antterranpn_postQuery() {
        console.log("Entering ANFRANPN_antterranpn_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TERAPN_CODEUD", TERAPN_CODEUD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antterranpn/anfranpn_antterranpn_postquery_query1", payload1);
        // get values from result
        // DES_CODEUDOR = result1[0].get("DES_CODEUDOR");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFRANPN_antterranpn_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_TLIS     NUMBER; 
    //  V_T_LLENAR NUMBER;
    //  
    // BEGIN 
    //  
    //      --NUEVO SSS
    //           
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR2', "INSERT_ALLOWED","PROPERTY_TRUE");
    //      
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR2',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //       SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR',"DELETE_ALLOWED","PROPERTY_TRUE");
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR2',"DELETE_ALLOWED","PROPERTY_TRUE");
    //     
    //       BEGIN
    //       SELECT PR.PARRKP_CODLIS
    //       INTO V_TLIS
    //       FROM ANTPARRKPN PR
    //       WHERE :ANTTERRANPN.TERAPN_FECRAD BETWEEN PR.PARRKP_FINICI AND PR.PARRKP_FFINAL
    //       AND ROWNUM = 1;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN    V_TLIS := 0  ;
    //      END ;
    //     
    //       IF V_TLIS = 0 THEN       
    //          SELECT MAX(PR.PARRKP_CODLIS)
    //                INTO :ANTTERRANPN.T_LISTA
    //                FROM ANTPARRKPN PR;
    //       ELSE
    //          :ANTTERRANPN.T_LISTA := V_TLIS;
    //       END IF;
    //       
    //      --NUEVO SSS
    //      PUP_INSERCION_DEUDOR;     
    //      
    //      COMMIT;
    //      
    //      
    //      GO_BLOCK('ANTCON_TITULODEUDOR');
    //      CLEAR_BLOCK;
    //      
    //      GO_BLOCK('ANTCON_TITULODEUDOR2');
    //      CLEAR_BLOCK; 
    //      
    //      
    //      IF :TERAPN_CODEUD IS NOT NULL THEN
    //      
    //        
    //       PUP_INSERCION_CODEUDOR;
    //       COMMIT;
    //       
    //      
    //      END IF;
    //      
    //      GO_BLOCK('ANTCONPEN_DEUDOR'); 
    //      EXECUTE_QUERY;
    //      --NUEVO SSS
    //      LLENAR_MANUAL_DEUDOR;
    //      LLENAR_MANUAL_CODEUDOR;
    //      --NUEVO SSS
    //      GO_BLOCK('ANTCONPEN_DEUDOR2');
    //      EXECUTE_QUERY;
    //      
    //      --NUEVO SSS
    //      
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR', "INSERT_ALLOWED","PROPERTY_FALSE");
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR2', "INSERT_ALLOWED","PROPERTY_FALSE");
    //      
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR2',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //     
    //       SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR',"DELETE_ALLOWED","PROPERTY_FALSE");
    //      SET_BLOCK_PROPERTY('ANTCON_TITULODEUDOR2',"DELETE_ALLOWED","PROPERTY_FALSE");
    //      
    //      --NUEVO SSS
    // 
    // 
    // END;
    //#endregion
    async ANFRANPN_antterranpn_terapnBotonc_whenMouseClick() {
        console.log("Entering ANFRANPN_antterranpn_terapnBotonc_whenMouseClick");
        let V_TLIS: number = null;
        let V_T_LLENAR: number = null;
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR2", "INSERT_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR2", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR", "DELETE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR2", "DELETE_ALLOWED", "PROPERTY_TRUE");
        // construct payload
        let payload1 = new Map();
        payload1.set("TERAPN_FECRAD", this.ANTTERRANPN.TERAPN_FECRAD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antterranpn/anfranpn_antterranpn_terapnbotonc_whenmouseclick_query1", payload1);
        // get values from result
        V_TLIS = result1[0].get("V_TLIS");
        if (result1 == null || result1.length == 0) {

            V_TLIS = 0;
        }

        if (V_TLIS == 0) {
            // construct payload
            let payload2 = new Map();
            payload2.set("T_LISTA", this.ANTTERRANPN.T_LISTA);
            // call REST API
            const result2 = await Rest.post("/anfranpn_antterranpn/anfranpn_antterranpn_terapnbotonc_whenmouseclick_query2", payload2);
            // get values from result
            this.ANTTERRANPN.T_LISTA = result2[0].get("ANTTERRANPN.T_LISTA");
        }
        else {
            this.ANTTERRANPN.T_LISTA = V_TLIS;
        }
        // ANFRANPN_PUP_INSERCION_DEUDOR();
        this.oracleFormsBuiltins.go_block("ANTCON_TITULODEUDOR");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("ANTCON_TITULODEUDOR2");
        this.oracleFormsBuiltins.clear_block();
        if ((this.ANTTERRANPN.TERAPN_CODEUD != null)) {
            // ANFRANPN_PUP_INSERCION_CODEUDOR();
        }
        this.oracleFormsBuiltins.go_block("ANTCONPEN_DEUDOR");
        this.oracleFormsBuiltins.execute_query();
        // ANFRANPN_LLENAR_MANUAL_DEUDOR();
        // ANFRANPN_LLENAR_MANUAL_CODEUDOR();
        this.oracleFormsBuiltins.go_block("ANTCONPEN_DEUDOR2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR2", "INSERT_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR2", "UPDATE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR", "DELETE_ALLOWED", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_block_property("ANTCON_TITULODEUDOR2", "DELETE_ALLOWED", "PROPERTY_FALSE");
        console.log("Exiting ANFRANPN_antterranpn_terapnBotonc_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF :TERAPN_CODEUD IS NOT NULL THEN
    //  DECLARE
    //   T_RESPUESTA NUMBER;
    //   CONTADOR NUMBER(3); 
    //  BEGIN
    //   BEGIN
    //    SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //      INTO :DES_CODEUDOR
    //      FROM TER
    //     WHERE TERCOD=:TERAPN_CODEUD;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   BEGIN
    //    SELECT COUNT(*)
    //     INTO  CONTADOR
    //     FROM ANTTERRANPN
    //    WHERE TERAPN_CODTER=:TERAPN_CODTER
    //      AND TERAPN_CODEUD=:TERAPN_CODEUD
    //      AND TERAPN_FECRAD=:ANTRANKPN.RANKPN_FECRAD;
    //    END;
    //   IF CONTADOR > 0 THEN
    //    LIB$ALERTA('MENSAJE','CODEUDOR YA RELACIONADO .....',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF; 
    //  END;
    // END IF; END;
    //#endregion
    async ANFRANPN_antterranpn_terapnCodeud_whenValidateItem() {
        console.log("Entering ANFRANPN_antterranpn_terapnCodeud_whenValidateItem");
        if ((this.ANTTERRANPN.TERAPN_CODEUD != null)) {
            {

                let T_RESPUESTA: number = null;
                let CONTADOR: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TERAPN_CODEUD", this.ANTTERRANPN.TERAPN_CODEUD);
                // call REST API
                const result1 = await Rest.post("/anfranpn_antterranpn/anfranpn_antterranpn_terapncodeud_whenvalidateitem_query1", payload1);
                // get values from result
                this.ANTTERRANPN.DES_CODEUDOR = result1[0].get("DES_CODEUDOR");
                if (result1 == null || result1.length == 0) {

                    // ANFRANPN_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("TERAPN_CODTER", this.ANTTERRANPN.TERAPN_CODTER);
                payload2.set("TERAPN_CODEUD", this.ANTTERRANPN.TERAPN_CODEUD);
                payload2.set("RANKPN_FECRAD", this.ANTRANKPN.RANKPN_FECRAD);
                // call REST API
                const result2 = await Rest.post("/anfranpn_antterranpn/anfranpn_antterranpn_terapncodeud_whenvalidateitem_query2", payload2);
                // get values from result
                CONTADOR = result2[0].get("CONTADOR");
                if (CONTADOR > 0) {
                    // ANFRANPN_LIB$ALERTA("MENSAJE", "CODEUDOR YA RELACIONADO .....", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }

        }
        console.log("Exiting ANFRANPN_antterranpn_terapnCodeud_whenValidateItem");
    }

    async ANFRANPN_antconpenDeudor_keyDelrec() {
        // null;
    }

    async ANFRANPN_antconpenDeudor_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  PUP_ACTUALIZACION_DEUDOR;
    // END;
    //#endregion
    async ANFRANPN_antconpenDeudor_whenValidateRecord() {
        console.log("Entering ANFRANPN_antconpenDeudor_whenValidateRecord");
        // ANFRANPN_PUP_ACTUALIZACION_DEUDOR();
        console.log("Exiting ANFRANPN_antconpenDeudor_whenValidateRecord");
    }

    async ANFRANPN_antconpenDeudor_keyCrerec() {
        // null;
    }

    async ANFRANPN_antconpenDeudor_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    // SELECT  PARRKP_DESCRI
    //  INTO :ANTCONPEN_DEUDOR.CONPEN_CODCON1
    // FROM ANTPARRKPN 
    // WHERE PARRKP_DOMINI =:ANTCONPEN_DEUDOR.CONPEN_DOMINI
    //   AND PARRKP_CODIGO =:ANTCONPEN_DEUDOR.CONPEN_CODCON;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_DEUDOR2
    //     FROM TER
    //    WHERE TERCOD=:ANTRANKPN.RANKPN_CODTER;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    NULL;
    //  END;
    //#endregion
    async ANFRANPN_antconpenDeudor_postQuery() {
        console.log("Entering ANFRANPN_antconpenDeudor_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CONPEN_DOMINI", this.ANTCONPEN_DEUDOR.CONPEN_DOMINI);
        payload1.set("CONPEN_CODCON", this.ANTCONPEN_DEUDOR.CONPEN_CODCON);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antconpen_deudor/anfranpn_antconpendeudor_postquery_query1", payload1);
        // get values from result
        this.ANTCONPEN_DEUDOR.CONPEN_CODCON1 = result1[0].get("ANTCONPEN_DEUDOR.CONPEN_CODCON1");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // call REST API
        const result2 = await Rest.post("/anfranpn_antconpen_deudor/anfranpn_antconpendeudor_postquery_query2", payload2);
        // get values from result
        // DES_DEUDOR2 = result2[0].get("DES_DEUDOR2");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting ANFRANPN_antconpenDeudor_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   IF NOT SHOW_LOV('L_DOMINIOS') THEN
    //      MESSAGE('NO EXISTE VALORES DISPONIBLES');
    //   END IF;
    // END;
    //#endregion
    async ANFRANPN_antconpenDeudor_lista_whenMouseClick() {
        console.log("Entering ANFRANPN_antconpenDeudor_lista_whenMouseClick");
        if ((!this.oracleFormsBuiltins.show_lov("L_DOMINIOS"))) {
            this.oracleFormsBuiltins.message("NO EXISTE VALORES DISPONIBLES");
        }
        console.log("Exiting ANFRANPN_antconpenDeudor_lista_whenMouseClick");
    }

    async ANFRANPN_antrespen_keyDelrec() {
        // null;
    }

    async ANFRANPN_antrespen_keyNxtblk() {
        // null;
    }

    async ANFRANPN_antrespen_keyCrerec() {
        // null;
    }

    async ANFRANPN_antrespen_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  IF :ANTRESPEN.RESPEN_APROBA='N' THEN
    //    :APROBADO1:='DEUDOR RECHAZADO';
    //  ELSE
    //    :APROBADO1:='DEUDOR APROBADO';
    //  END IF;
    // END;
    //#endregion
    async ANFRANPN_antrespen_postQuery() {
        console.log("Entering ANFRANPN_antrespen_postQuery");
        if (this.ANTRESPEN.RESPEN_APROBA == "N") {
            this.ANTRESPEN.APROBADO1 = "DEUDOR RECHAZADO";
        }
        else {
            this.ANTRESPEN.APROBADO1 = "DEUDOR APROBADO";
        }
        console.log("Exiting ANFRANPN_antrespen_postQuery");
    }

    async ANFRANPN_antrespenCodeudor_keyDelrec() {
        // null;
    }

    async ANFRANPN_antrespenCodeudor_keyNxtblk() {
        // null;
    }

    async ANFRANPN_antrespenCodeudor_keyCrerec() {
        // null;
    }

    async ANFRANPN_antrespenCodeudor_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  IF :ANTRESPEN_CODEUDOR.RESPEN_APROBA='N' THEN
    //    :APROBADO:='CODEUDOR RECHAZADO';
    //  ELSE
    //    :APROBADO:='CODEUDOR APROBADO';
    //  END IF;
    // END;
    //#endregion
    async ANFRANPN_antrespenCodeudor_postQuery() {
        console.log("Entering ANFRANPN_antrespenCodeudor_postQuery");
        if (this.ANTRESPEN_CODEUDOR.RESPEN_APROBA == "N") {
            this.ANTRESPEN_CODEUDOR.APROBADO = "CODEUDOR RECHAZADO";
        }
        else {
            this.ANTRESPEN_CODEUDOR.APROBADO = "CODEUDOR APROBADO";
        }
        console.log("Exiting ANFRANPN_antrespenCodeudor_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   :ANTRESPEN_CODEUDOR.RESPEN_DISPON :=NVL(:ANTRESPEN_CODEUDOR.RESPEN_INGRES,0) - NVL(:ANTRESPEN_CODEUDOR.RESPEN_EGRESO,0);
    //   :ANTRESPEN_CODEUDOR.RESPEN_COUTMA :=NVL(:ANTRESPEN_CODEUDOR.RESPEN_DISPON,0) * 0.6;
    //   --:ANTRESPEN_CODEUDOR.RESPEN_CUPOAP:=((:ANTRESPEN_CODEUDOR.RESPEN_COUTMA)*(1-(RPOWER(1 + (:RANKPN_INTERE/100),-:RANKPN_PLAZOS)))/(:RANKPN_INTERE/100)   );
    //   :ANTRESPEN_CODEUDOR.RESPEN_CUPOAP:=NVL(:RANKPN_VLMAXF,0)/1000;
    // END;
    //#endregion
    async ANFRANPN_antrespenCodeudor_respenEgreso_postTextItem() {
        console.log("Entering ANFRANPN_antrespenCodeudor_respenEgreso_postTextItem");
        // this.ANTRESPEN_CODEUDOR.RESPEN_DISPON = ANTRESPEN_CODEUDOR.RESPEN_INGRES == null ? 0 : ANTRESPEN_CODEUDOR.RESPEN_INGRES - ANTRESPEN_CODEUDOR.RESPEN_EGRESO == null ? 0 : ANTRESPEN_CODEUDOR.RESPEN_EGRESO;
        // this.ANTRESPEN_CODEUDOR.RESPEN_COUTMA = ANTRESPEN_CODEUDOR.RESPEN_DISPON == null ? 0 : ANTRESPEN_CODEUDOR.RESPEN_DISPON * 0.6;
        // this.ANTRESPEN_CODEUDOR.RESPEN_CUPOAP = RANKPN_VLMAXF == null ? 0 : RANKPN_VLMAXF / 1000;
        console.log("Exiting ANFRANPN_antrespenCodeudor_respenEgreso_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_FECHA      DATE;
    //  V_TERCERO         VARCHAR2(20);
    //  VCONDICION        VARCHAR2(2000);
    // BEGIN
    //   COMMIT_FORM;
    //   
    //   V_FECHA   := :ANTRANKPN.RANKPN_FECRAD;
    //   V_TERCERO := :ANTRANKPN.RANKPN_CODTER;
    //   
    //   
    //   GO_BLOCK('ANTRANKPN');
    //   
    //   
    //   VCONDICION := 'RANKPN_CODTER = ''' || V_TERCERO||''''||
    //         ' AND RANKPN_FECRAD = TO_DATE('''||V_FECHA||''',''DD-MON-YY'''||')';          
    //                 
    //   SET_BLOCK_PROPERTY('ANTRANKPN', "DEFAULT_WHERE", VCONDICION);
    //   
    //   
    //   
    //   EXECUTE_QUERY;
    //   
    //   
    //   HIDE_VIEW('CANVAS3');
    //  
    //   
    // END;
    //#endregion
    async ANFRANPN_antrespenCodeudor_volver2_whenMouseClick() {
        console.log("Entering ANFRANPN_antrespenCodeudor_volver2_whenMouseClick");
        let V_FECHA: Date = null;
        let V_TERCERO: string = null;
        let VCONDICION: string = null;
        this.oracleFormsBuiltins.commit_form();
        V_FECHA = this.ANTRANKPN.RANKPN_FECRAD;
        V_TERCERO = this.ANTRANKPN.RANKPN_CODTER;
        this.oracleFormsBuiltins.go_block("ANTRANKPN");
        VCONDICION = "RANKPN_CODTER = ''" + V_TERCERO + "''" + " AND RANKPN_FECRAD = TO_DATE(''" + V_FECHA + "'',''DD-MON-YY''" + ")";
        this.oracleFormsBuiltins.set_block_property("ANTRANKPN", "DEFAULT_WHERE", VCONDICION);
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS3");
        console.log("Exiting ANFRANPN_antrespenCodeudor_volver2_whenMouseClick");
    }

    async ANFRANPN_antrankpn2_keyEntqry() {
        // null;
    }

    async ANFRANPN_antrankpn2_keyDelrec() {
        // null;
    }

    async ANFRANPN_antrankpn2_keyNxtblk() {
        // null;
    }

    async ANFRANPN_antrankpn2_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTTERRANPN DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTTERRANPN_CUR IS      
    //     SELECT 1 FROM ANTTERRANPN     
    //     WHERE TERAPN_CODTER = :ANTRANKPN.RANKPN_CODTER;
    //   --
    //   -- END ANTTERRANPN DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTRESPEN DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTRESPEN_CUR IS      
    //     SELECT 1 FROM ANTRESPEN     
    //     WHERE RESPEN_FECHAR = :ANTRANKPN.RANKPN_FECRAD AND RESPEN_CODEUD = :ANTRANKPN.RANKPN_CODTER AND RESPEN_CODTER = :ANTRANKPN.RANKPN_CODTER;
    //   --
    //   -- END ANTRESPEN DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTTERRANPN_CUR;     
    //   FETCH ANTTERRANPN_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTTERRANPN_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTTERRANPN_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTTERRANPN_CUR;
    //   --
    //   -- END ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTRESPEN DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTRESPEN_CUR;     
    //   FETCH ANTRESPEN_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTRESPEN_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTRESPEN_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTRESPEN_CUR;
    //   --
    //   -- END ANTRESPEN DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFRANPN_antrankpn2_onCheckDeleteMaster() {
        console.log("Entering ANFRANPN_antrankpn2_onCheckDeleteMaster");
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
        console.log("Exiting ANFRANPN_antrankpn2_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async ANFRANPN_antrankpn2_whenNewBlockInstance() {
        console.log("Entering ANFRANPN_antrankpn2_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFRANPN_antrankpn2_whenNewBlockInstance");
    }

    async ANFRANPN_antrankpn2_keyExeqry() {
        // null;
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
    //   -- BEGIN ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTRANKPN.RANKPN_CODTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTRANKPN.RELACION_TER');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTTERRANPN');   
    //   END IF;
    //   --
    //   -- END ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTRESPEN DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTRANKPN.RANKPN_FECRAD IS NOT NULL) OR (:ANTRANKPN.RANKPN_CODTER IS NOT NULL) OR (:ANTRANKPN.RANKPN_CODTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTRANKPN.ANTRANKPN_ANTRESPEN');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTRESPEN');   
    //   END IF;
    //   --
    //   -- END ANTRESPEN DETAIL PROGRAM SECTION
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
    async ANFRANPN_antrankpn2_onPopulateDetails() {
        console.log("Entering ANFRANPN_antrankpn2_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.ANTRANKPN.RANKPN_CODTER != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTRANKPN.RELACION_TER");
            // ANFRANPN_QUERY_MASTER_DETAILS(REL_ID, "ANTTERRANPN");
        }
        if ((((this.ANTRANKPN.RANKPN_FECRAD != null) || (this.ANTRANKPN.RANKPN_CODTER != null)) || (this.ANTRANKPN.RANKPN_CODTER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTRANKPN.ANTRANKPN_ANTRESPEN");
            // ANFRANPN_QUERY_MASTER_DETAILS(REL_ID, "ANTRESPEN");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFRANPN_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFRANPN_antrankpn2_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_TERCERO
    //     FROM TER
    //    WHERE TERCOD=:ANTRANKPN.RANKPN_CODTER;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL; 
    //  END;
    //#endregion
    async ANFRANPN_antrankpn2_postQuery() {
        console.log("Entering ANFRANPN_antrankpn2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn_2/anfranpn_antrankpn2_postquery_query1", payload1);
        // get values from result
        this.ANTRANKPN.DES_TERCERO = result1[0].get("DES_TERCERO");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFRANPN_antrankpn2_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_TERCERO
    //     FROM TER
    //    WHERE TERCOD=:ANTRANKPN.RANKPN_CODTER;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // END;
    //   
    //#endregion
    async ANFRANPN_antrankpn2_rankpnCodter2_whenValidateItem() {
        console.log("Entering ANFRANPN_antrankpn2_rankpnCodter2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn_2/anfranpn_antrankpn2_rankpncodter2_whenvalidateitem_query1", payload1);
        // get values from result
        this.ANTRANKPN.DES_TERCERO = result1[0].get("DES_TERCERO");
        if (result1 == null || result1.length == 0) {

            // ANFRANPN_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFRANPN_antrankpn2_rankpnCodter2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('ANTTERRANPN');
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFRANPN_antrankpn2_rankpnCodter2_keyNextItem() {
        console.log("Entering ANFRANPN_antrankpn2_rankpnCodter2_keyNextItem");
        this.oracleFormsBuiltins.go_block("ANTTERRANPN");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFRANPN_antrankpn2_rankpnCodter2_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :RANKPN_NEGADO IS NOT NULL THEN
    //  IF :RANKPN_NEGADO NOT IN ('X') THEN
    //     LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA......(X)',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END IF;
    // END; 
    //#endregion
    async ANFRANPN_antrankpn2_rankpnNegado_whenValidateItem() {
        console.log("Entering ANFRANPN_antrankpn2_rankpnNegado_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.ANTRANKPN_2.RANKPN_NEGADO != null)) {
            if (["X"].indexOf(this.ANTRANKPN_2.RANKPN_NEGADO) != -1) {
                // ANFRANPN_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA......(X)", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFRANPN_antrankpn2_rankpnNegado_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :RANKPN_APROBA IS NOT NULL THEN
    //  IF :RANKPN_APROBA NOT IN ('X') THEN
    //     LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA......',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END IF;
    // END; 
    //#endregion
    async ANFRANPN_antrankpn2_rankpnAproba_whenValidateItem() {
        console.log("Entering ANFRANPN_antrankpn2_rankpnAproba_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.ANTRANKPN_2.RANKPN_APROBA != null)) {
            if (["X"].indexOf(this.ANTRANKPN_2.RANKPN_APROBA) != -1) {
                // ANFRANPN_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA......", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFRANPN_antrankpn2_rankpnAproba_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //    V_TLIS NUMBER;
    //  BEGIN
    //   
    //  BEGIN
    //   SELECT PR.PARRKP_CODLIS
    //   INTO V_TLIS
    //   FROM ANTPARRKPN PR
    //   WHERE :ANTTERRANPN.TERAPN_FECRAD BETWEEN PR.PARRKP_FINICI AND PR.PARRKP_FFINAL
    //   AND ROWNUM = 1;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN    V_TLIS := 0  ;
    //  END ;
    //  
    //  
    //    IF V_TLIS = 0 THEN
    //       :ANTTERRANPN.T_LISTA := 1;       
    //    ELSE
    //       :ANTTERRANPN.T_LISTA := V_TLIS;      
    //    END IF;
    //    
    //    IF :ANTTERRANPN.T_LISTA = 1 THEN
    //       SET_ITEM_PROPERTY('ANTRANKPN.RANKPN_EGRESO',"DISPLAYED","PROPERTY_TRUE");   
    //    ELSE
    //       SET_ITEM_PROPERTY('ANTRANKPN.RANKPN_EGRESO',"DISPLAYED","PROPERTY_FALSE");       
    //    END IF;
    //  
    //  END;
    //#endregion
    async ANFRANPN_antrankpn_whenNewRecordInstance() {
        console.log("Entering ANFRANPN_antrankpn_whenNewRecordInstance");
        let V_TLIS: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERAPN_FECRAD", this.ANTTERRANPN.TERAPN_FECRAD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_whennewrecordinstance_query1", payload1);
        // get values from result
        V_TLIS = result1[0].get("V_TLIS");
        if (result1 == null || result1.length == 0) {

            V_TLIS = 0;
        }

        if (V_TLIS == 0) {
            this.ANTTERRANPN.T_LISTA = 1;
        }
        else {
            this.ANTTERRANPN.T_LISTA = V_TLIS;
        }
        if (this.ANTTERRANPN.T_LISTA == 1) {
            this.oracleFormsBuiltins.set_item_property("ANTRANKPN.RANKPN_EGRESO", "DISPLAYED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("ANTRANKPN.RANKPN_EGRESO", "DISPLAYED", "PROPERTY_FALSE");
        }
        console.log("Exiting ANFRANPN_antrankpn_whenNewRecordInstance");
    }

    async ANFRANPN_antrankpn_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN ANTTERRANPN DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTTERRANPN_CUR IS      
    //     SELECT 1 FROM ANTTERRANPN     
    //     WHERE TERAPN_CODTER = :ANTRANKPN.RANKPN_CODTER;
    //   --
    //   -- END ANTTERRANPN DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN ANTRESPEN DETAIL DECLARE SECTION
    //   --
    //   CURSOR ANTRESPEN_CUR IS      
    //     SELECT 1 FROM ANTRESPEN     
    //     WHERE RESPEN_FECHAR = :ANTRANKPN.RANKPN_FECRAD AND RESPEN_CODEUD = :ANTRANKPN.RANKPN_CODTER AND RESPEN_CODTER = :ANTRANKPN.RANKPN_CODTER;
    //   --
    //   -- END ANTRESPEN DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTTERRANPN_CUR;     
    //   FETCH ANTTERRANPN_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTTERRANPN_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTTERRANPN_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTTERRANPN_CUR;
    //   --
    //   -- END ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTRESPEN DETAIL PROGRAM SECTION
    //   --
    //   OPEN ANTRESPEN_CUR;     
    //   FETCH ANTRESPEN_CUR INTO DUMMY_DEFINE;     
    //   IF ( ANTRESPEN_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ANTRESPEN_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ANTRESPEN_CUR;
    //   --
    //   -- END ANTRESPEN DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async ANFRANPN_antrankpn_onCheckDeleteMaster() {
        console.log("Entering ANFRANPN_antrankpn_onCheckDeleteMaster");
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
        console.log("Exiting ANFRANPN_antrankpn_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN :ANTRANKPN.RANKPN_USUARI := PLSQLBuiltins.user(); END;
    //#endregion
    async ANFRANPN_antrankpn_preUpdate() {
        console.log("Entering ANFRANPN_antrankpn_preUpdate");
        this.ANTRANKPN.RANKPN_USUARI = PLSQLBuiltins.user();
        console.log("Exiting ANFRANPN_antrankpn_preUpdate");
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
    //   -- BEGIN ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTRANKPN.RANKPN_CODTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTRANKPN.RELACION_TER');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTTERRANPN');   
    //   END IF;
    //   --
    //   -- END ANTTERRANPN DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN ANTRESPEN DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ANTRANKPN.RANKPN_FECRAD IS NOT NULL) OR (:ANTRANKPN.RANKPN_CODTER IS NOT NULL) OR (:ANTRANKPN.RANKPN_CODTER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ANTRANKPN.ANTRANKPN_ANTRESPEN');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ANTRESPEN');   
    //   END IF;
    //   --
    //   -- END ANTRESPEN DETAIL PROGRAM SECTION
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
    async ANFRANPN_antrankpn_onPopulateDetails() {
        console.log("Entering ANFRANPN_antrankpn_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.ANTRANKPN.RANKPN_CODTER != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTRANKPN.RELACION_TER");
            // ANFRANPN_QUERY_MASTER_DETAILS(REL_ID, "ANTTERRANPN");
        }
        if ((((this.ANTRANKPN.RANKPN_FECRAD != null) || (this.ANTRANKPN.RANKPN_CODTER != null)) || (this.ANTRANKPN.RANKPN_CODTER != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ANTRANKPN.ANTRANKPN_ANTRESPEN");
            // ANFRANPN_QUERY_MASTER_DETAILS(REL_ID, "ANTRESPEN");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // ANFRANPN_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting ANFRANPN_antrankpn_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_TERCERO
    //     FROM TER
    //    WHERE TERCOD=:ANTRANKPN.RANKPN_CODTER;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   NULL; 
    //  END;
    //#endregion
    async ANFRANPN_antrankpn_postQuery() {
        console.log("Entering ANFRANPN_antrankpn_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_postquery_query1", payload1);
        // get values from result
        this.ANTRANKPN.DES_TERCERO = result1[0].get("DES_TERCERO");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFRANPN_antrankpn_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTRANKPN.RANKPN_USUARI := PLSQLBuiltins.user(); END;
    //#endregion
    async ANFRANPN_antrankpn_preInsert() {
        console.log("Entering ANFRANPN_antrankpn_preInsert");
        this.ANTRANKPN.RANKPN_USUARI = PLSQLBuiltins.user();
        console.log("Exiting ANFRANPN_antrankpn_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // VALOR1 NUMBER(18,6);
    // CONTADOR NUMBER(10);
    // VPN      NUMBER(22,6);
    // PLAZO    ANTRANKPN.RANKPN_PLAZOS%TYPE; 
    // V_VALORFIJO NUMBER(22,4);
    // V_PLAZOS    NUMBER(22,4);
    // 
    // BEGIN
    // -- VALOR CANON
    // :RANKPN_VLRCUO:= (NVL(:RANKPN_PRESTA,0)-(0/(POWER((1+(NVL(:RANKPN_INTERE,0)/100)),:RANKPN_PLAZOS )))) *(POWER(((1-(POWER((1+((NVL(:RANKPN_INTERE,0)/100))),- :RANKPN_PLAZOS)))/((NVL(:RANKPN_INTERE,0)/100))),-1));
    // -- VALOR DE PORCENTAJE DE LA CUOTA
    // VALOR1:=NVL(:RANKPN_SUELDO,0)+(NVL(:RANKPN_RENLIQ,0)/6)+NVL(:RANKPN_CREDB2,0);
    // :RANKPN_PORCUO:=(NVL(:RANKPN_VLRCUO,0)/NVL(VALOR1,1))*100;
    // -- VALOR FINANCIAR CUOTA
    // :RANKPN_FINCUO:=((NVL(:RANKPN_PRESTA,0))/NVL(:RANKPN_VLRCOM,1))*100;
    // -- VALOR DEL SEGURO DEL DEUDOR
    // --ANTES CAMBIO 
    // ---:RANKPN_SEGDEU:=500*(:RANKPN_PRESTA/1000000);
    // IF :ANTTERRANPN.T_LISTA = 1 THEN
    //   :RANKPN_SEGDEU:=500*(:RANKPN_PRESTA/1000000);
    // ELSE
    //    :RANKPN_SEGDEU:=550*(:RANKPN_PRESTA/1000000);
    // END IF;
    // -- VALOR DEL SEGURO DEL VEHICULO
    // :RANKPN_SEGVEH:=(0.1*:RANKPN_VLRCOM)/12;
    // -- VALOR TOTAL CUOTA
    // :RANKPN_TOTCUO:=NVL(:RANKPN_VLRCUO,0)+NVL(:RANKPN_SEGDEU,0)+NVL(:RANKPN_SEGVEH,0);
    // -- VALOR ACTUAL O VALOR PRESENTE NETO
    // IF :RANKPN_PLAZOS >= 60 THEN
    //    PLAZO:=60;
    // ELSE
    //   PLAZO:=  :RANKPN_PLAZOS;
    // END IF;
    // IF PLAZO IN (12,24,36,48,60) THEN
    // ---(D11*0.6)/(SI(9=12,91120,SI(H9=24,49350,SI(H9=36,35570,SI(H9=48,28780,SI(H9=60,24760,"")))))) VALORES DE MODELO EXCEL
    // VPN:=0;
    // V_VALORFIJO:=NULL;
    // IF  PLAZO= 12 THEN
    //   V_VALORFIJO:=91120;
    // ELSIF  PLAZO= 24 THEN
    //   V_VALORFIJO:=49350;
    // ELSIF  PLAZO= 36 THEN
    //   V_VALORFIJO:=35570;
    // ELSIF PLAZO= 48 THEN
    //   V_VALORFIJO:=28780;  
    // ELSIF  PLAZO= 60 THEN
    //   V_VALORFIJO:=24760;
    // END IF;  
    // --ANTES DEL CAMBIO SSSS 
    // --VPN:= (:RANKPN_DISPON*0.6)/NVL(V_VALORFIJO,1);
    // IF :ANTTERRANPN.T_LISTA = 1 THEN
    //    VPN:= (:RANKPN_DISPON*0.6)/NVL(V_VALORFIJO,1);
    // ELSE
    //   V_PLAZOS := (1000000-(0/(POWER((1+(NVL(:RANKPN_INTERE,0)/100)),:RANKPN_PLAZOS )))) *(POWER(((1-(POWER((1+((NVL(:RANKPN_INTERE,0)/100))),- :RANKPN_PLAZOS)))/((NVL(:RANKPN_INTERE,0)/100))),-1));
    //   VPN:= (:RANKPN_DISPON)/NVL(V_PLAZOS,1);
    // END IF;
    // :RANKPN_VLMAXF:=VPN*1000000;
    // ELSE
    // CONTADOR:=1;
    // VPN:=0;
    // WHILE CONTADOR <= PLAZO LOOP
    //    VPN:=NVL(VPN,0)+NVL( ((:RANKPN_DISPON*0.6)/(RPOWER(1 + (:RANKPN_INTERE/100),CONTADOR))),0);
    //    CONTADOR:=CONTADOR+1;
    // END LOOP;   
    // :RANKPN_VLMAXF:=VPN;
    // END IF;  
    // END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnIntere_postTextItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnIntere_postTextItem");
        let VALOR1: number = null;
        let CONTADOR: number = null;
        let VPN: number = null;
        let PLAZO: null = null;
        let V_VALORFIJO: number = null;
        let V_PLAZOS: number = null;
        // this.ANTRANKPN.RANKPN_VLRCUO = RANKPN_PRESTA == null ? 0 : RANKPN_PRESTA - 0 / POWER(1 + RANKPN_INTERE == null ? 0 : RANKPN_INTERE / 100, RANKPN_PLAZOS) * POWER(1 - POWER(1 + RANKPN_INTERE == null ? 0 : RANKPN_INTERE / 100, RANKPN_PLAZOS) / RANKPN_INTERE == null ? 0 : RANKPN_INTERE / 100, 1);
        // VALOR1 = RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO + RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ / 6 + RANKPN_CREDB2 == null ? 0 : RANKPN_CREDB2;
        // this.ANTRANKPN.RANKPN_PORCUO = RANKPN_VLRCUO == null ? 0 : RANKPN_VLRCUO / VALOR1 == null ? 1 : VALOR1 * 100;
        // this.ANTRANKPN.RANKPN_FINCUO = RANKPN_PRESTA == null ? 0 : RANKPN_PRESTA / RANKPN_VLRCOM == null ? 1 : RANKPN_VLRCOM * 100;
        // if (this.ANTTERRANPN.T_LISTA == 1) {
        //     this.ANTRANKPN.RANKPN_SEGDEU = 500 * RANKPN_PRESTA / 1000000;
        // }
        // else {
        //     this.ANTRANKPN.RANKPN_SEGDEU = 550 * RANKPN_PRESTA / 1000000;
        // }
        // this.ANTRANKPN.RANKPN_SEGVEH = 0.1 * RANKPN_VLRCOM / 12;
        // this.ANTRANKPN.RANKPN_TOTCUO = RANKPN_VLRCUO == null ? 0 : RANKPN_VLRCUO + RANKPN_SEGDEU == null ? 0 : RANKPN_SEGDEU + RANKPN_SEGVEH == null ? 0 : RANKPN_SEGVEH;
        // if (RANKPN_PLAZOS >= 60) {
        //     PLAZO = 60;
        // }
        // else {
        //     PLAZO = this.ANTRANKPN.RANKPN_PLAZOS;
        // }
        if ([12, 24, 36, 48, 60].indexOf(PLAZO) != -1) {
            VPN = 0;
            V_VALORFIJO = null;
            if (PLAZO == 12) {
                V_VALORFIJO = 91120;
            }
            else if (PLAZO == 24) {
                V_VALORFIJO = 49350;
            }
            else if (PLAZO == 36) {
                V_VALORFIJO = 35570;
            }
            else if (PLAZO == 48) {
                V_VALORFIJO = 28780;
            }
            else if (PLAZO == 60) {
                V_VALORFIJO = 24760;
            }
            if (this.ANTTERRANPN.T_LISTA == 1) {
                // VPN = RANKPN_DISPON * 0.6 / V_VALORFIJO == null ? 1 : V_VALORFIJO;
            }
            else {
                // V_PLAZOS = 1000000 - 0 / POWER(1 + RANKPN_INTERE == null ? 0 : RANKPN_INTERE / 100, RANKPN_PLAZOS) * POWER(1 - POWER(1 + RANKPN_INTERE == null ? 0 : RANKPN_INTERE / 100, RANKPN_PLAZOS) / RANKPN_INTERE == null ? 0 : RANKPN_INTERE / 100, 1);
                // VPN = RANKPN_DISPON / V_PLAZOS == null ? 1 : V_PLAZOS;
            }
            this.ANTRANKPN.RANKPN_VLMAXF = VPN * 1000000;
        }
        else {
            CONTADOR = 1;
            VPN = 0;
            this.ANTRANKPN.RANKPN_VLMAXF = VPN;
        }
        console.log("Exiting ANFRANPN_antrankpn_rankpnIntere_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_FECHA   DATE;
    //  V_TERCERO   VARCHAR2(10);
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //   
    //   V_TERCERO   := :ANTRANKPN.RANKPN_CODTER;
    //   
    //   GO_BLOCK('ANTRANKPN');
    //   CLEAR_BLOCK;
    //  
    //  :ANTRANKPN.RANKPN_CODTER := V_TERCERO;
    //  
    //  BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_TERCERO
    //     FROM TER
    //    WHERE TERCOD=:ANTRANKPN.RANKPN_CODTER;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END;
    //  
    //  GO_ITEM('RANKPN_FECRAD');
    //  
    // 
    // END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnFecrad_whenMouseClick() {
        console.log("Entering ANFRANPN_antrankpn_rankpnFecrad_whenMouseClick");
        let V_FECHA: Date = null;
        let V_TERCERO: string = null;
        let T_RESPUESTA: number = null;
        V_TERCERO = this.ANTRANKPN.RANKPN_CODTER;
        this.oracleFormsBuiltins.go_block("ANTRANKPN");
        this.oracleFormsBuiltins.clear_block();
        this.ANTRANKPN.RANKPN_CODTER = V_TERCERO;
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_rankpnfecrad_whenmouseclick_query1", payload1);
        // get values from result
        this.ANTRANKPN.DES_TERCERO = result1[0].get("DES_TERCERO");
        if (result1 == null || result1.length == 0) {

            // ANFRANPN_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        this.oracleFormsBuiltins.go_item("RANKPN_FECRAD");
        console.log("Exiting ANFRANPN_antrankpn_rankpnFecrad_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  VALOR1 NUMBER(18,2);
    //  VALOR2 NUMBER(18,2);
    //  VALOR3 NUMBER(18,2);
    //  VALOR4 NUMBER(18,2);
    //  VALOR5 NUMBER(18,2);
    // BEGIN
    // 
    // /*IF   NVL(:RANKPN_SUELDO,0)= 0 THEN
    //     IF (NVL(:RANKPN_RENLIQ,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0))) > (NVL(:RANKPN_RENLIQ,0)*0.7) THEN
    //        :RANKPN_DISPON:=(NVL(:RANKPN_RENLIQ,0)*0.7);
    //   ELSE 
    //      :RANKPN_DISPON:=(NVL(:RANKPN_RENLIQ,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0)));
    //   END IF;
    //   ELSE 
    //    IF (NVL(:RANKPN_SUELDO,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0))) > (NVL(:RANKPN_SUELDO,0)*0.7) THEN
    //        :RANKPN_DISPON:=(NVL(:RANKPN_SUELDO,0)*0.7);
    //   ELSE 
    //      :RANKPN_DISPON:=(NVL(:RANKPN_SUELDO,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0)));
    //   END IF;
    //   END IF;
    // 
    //   :RANKPN_CUOMAX:= (NVL(:RANKPN_DISPON,0)*0.6);
    // ANTES DEL CAMBIO SSS*/
    // 
    // IF :ANTTERRANPN.T_LISTA = 1 THEN
    //   --SE ENCONTRABA ANTES CAMBIO SSS
    //   IF   NVL(:RANKPN_SUELDO,0)= 0 THEN
    //     IF (NVL(:RANKPN_RENLIQ,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0))) > (NVL(:RANKPN_RENLIQ,0)*0.7) THEN
    //        :RANKPN_DISPON:=(NVL(:RANKPN_RENLIQ,0)*0.7);
    //      ELSE 
    //        :RANKPN_DISPON:=(NVL(:RANKPN_RENLIQ,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0)));
    //      END IF;
    //    ELSE 
    //      IF (NVL(:RANKPN_SUELDO,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0))) > (NVL(:RANKPN_SUELDO,0)*0.7) THEN
    //        :RANKPN_DISPON:=(NVL(:RANKPN_SUELDO,0)*0.7);
    //      ELSE 
    //        :RANKPN_DISPON:=(NVL(:RANKPN_SUELDO,0)-(NVL(:RANKPN_EGRESO,0)+NVL(:RANKPN_ENDFIN,0)));
    //      END IF;
    //    END IF;
    //    
    //    :RANKPN_CUOMAX:= (NVL(:RANKPN_DISPON,0)*0.6);
    // 
    //   
    //   --SE ENCONTRABA ANTES CAMBIO SSS
    // ELSE   
    //    
    //    
    //    IF NVL(:RANKPN_SUELDO,0) > NVL(:RANKPN_RENLIQ,0) THEN    
    //      VALOR1 := NVL(:RANKPN_SUELDO,0);   
    //    ELSE    
    //      VALOR1 := NVL(:RANKPN_RENLIQ,0);     
    //    END IF; 
    //    
    //    
    //    IF NVL(VALOR1,0) > NVL(:RANKPN_CREDB2,0) THEN    
    //      VALOR2 := NVL(VALOR1,0);   
    //    ELSE     
    //      VALOR2 := NVL(:RANKPN_CREDB2,0);     
    //    END IF; 
    //       
    //    
    //    IF VALOR2 >= 1500000 THEN
    //        
    //        :RANKPN_DISPON:= (NVL(VALOR2,0) * 0.55) - NVL(:RANKPN_ENDFIN,0);
    //     
    //    ELSE
    //      
    //      :RANKPN_DISPON:= (NVL(VALOR2,0) * 0.40) - NVL(:RANKPN_ENDFIN,0);
    //    
    //    END IF; 
    //     
    //     
    //     :RANKPN_CUOMAX:= NVL(:RANKPN_DISPON,0);
    // 
    // END IF;
    // 
    //   
    // 
    // END;
    // 
    //  
    //#endregion
    async ANFRANPN_antrankpn_rankpnEndfin_postTextItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnEndfin_postTextItem");
        let VALOR1: number = null;
        let VALOR2: number = null;
        let VALOR3: number = null;
        let VALOR4: number = null;
        let VALOR5: number = null;
        // if (this.ANTTERRANPN.T_LISTA == 1) {
        //     if (RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO == 0) {
        //         if (RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ - RANKPN_EGRESO == null ? 0 : RANKPN_EGRESO + RANKPN_ENDFIN == null ? 0 : RANKPN_ENDFIN > RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ * 0.7) {
        //             this.ANTRANKPN.RANKPN_DISPON = RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ * 0.7;
        //         }
        //         else {
        //             this.ANTRANKPN.RANKPN_DISPON = RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ - RANKPN_EGRESO == null ? 0 : RANKPN_EGRESO + RANKPN_ENDFIN == null ? 0 : RANKPN_ENDFIN;
        //         }
        //     }
        //     else {
        //         if (RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO - RANKPN_EGRESO == null ? 0 : RANKPN_EGRESO + RANKPN_ENDFIN == null ? 0 : RANKPN_ENDFIN > RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO * 0.7) {
        //             this.ANTRANKPN.RANKPN_DISPON = RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO * 0.7;
        //         }
        //         else {
        //             this.ANTRANKPN.RANKPN_DISPON = RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO - RANKPN_EGRESO == null ? 0 : RANKPN_EGRESO + RANKPN_ENDFIN == null ? 0 : RANKPN_ENDFIN;
        //         }
        //     }
        //     this.ANTRANKPN.RANKPN_CUOMAX = RANKPN_DISPON == null ? 0 : RANKPN_DISPON * 0.6;
        // }
        // else {
        //     if (RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO > RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ) {
        //         VALOR1 = RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO;
        //     }
        //     else {
        //         VALOR1 = RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ;
        //     }
        //     if (VALOR1 == null ? 0 : VALOR1 > RANKPN_CREDB2 == null ? 0 : RANKPN_CREDB2) {
        //         VALOR2 = VALOR1 == null ? 0 : VALOR1;
        //     }
        //     else {
        //         VALOR2 = RANKPN_CREDB2 == null ? 0 : RANKPN_CREDB2;
        //     }
        //     if (VALOR2 >= 1500000) {
        //         this.ANTRANKPN.RANKPN_DISPON = VALOR2 == null ? 0 : VALOR2 * 0.55 - RANKPN_ENDFIN == null ? 0 : RANKPN_ENDFIN;
        //     }
        //     else {
        //         this.ANTRANKPN.RANKPN_DISPON = VALOR2 == null ? 0 : VALOR2 * 0.40 - RANKPN_ENDFIN == null ? 0 : RANKPN_ENDFIN;
        //     }
        //     this.ANTRANKPN.RANKPN_CUOMAX = RANKPN_DISPON == null ? 0 : RANKPN_DISPON;
        // }
        console.log("Exiting ANFRANPN_antrankpn_rankpnEndfin_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :DES_TERCERO
    //     FROM TER
    //    WHERE TERCOD=:ANTRANKPN.RANKPN_CODTER;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // END;
    //   
    //#endregion
    async ANFRANPN_antrankpn_rankpnCodter_whenValidateItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnCodter_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_rankpncodter_whenvalidateitem_query1", payload1);
        // get values from result
        this.ANTRANKPN.DES_TERCERO = result1[0].get("DES_TERCERO");
        if (result1 == null || result1.length == 0) {

            // ANFRANPN_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFRANPN_antrankpn_rankpnCodter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_FECHA   DATE;
    //  V_TERCERO   VARCHAR2(10);
    //  T_RESPUESTA NUMBER;
    //  
    // BEGIN
    //   
    //   V_FECHA   := :ANTRANKPN.RANKPN_FECRAD;
    //   
    //    GO_BLOCK('ANTRANKPN');
    //    CLEAR_BLOCK;
    //  
    //  :ANTRANKPN.RANKPN_FECRAD := V_FECHA;
    //  
    //  GO_ITEM('RANKPN_CODTER');
    // 
    // END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnCodter_whenMouseClick() {
        console.log("Entering ANFRANPN_antrankpn_rankpnCodter_whenMouseClick");
        let V_FECHA: Date = null;
        let V_TERCERO: string = null;
        let T_RESPUESTA: number = null;
        V_FECHA = this.ANTRANKPN.RANKPN_FECRAD;
        this.oracleFormsBuiltins.go_block("ANTRANKPN");
        this.oracleFormsBuiltins.clear_block();
        this.ANTRANKPN.RANKPN_FECRAD = V_FECHA;
        this.oracleFormsBuiltins.go_item("RANKPN_CODTER");
        console.log("Exiting ANFRANPN_antrankpn_rankpnCodter_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //   V_TLLENAR NUMBER;
    //   V_FECHA   DATE;
    //   V_TERCERO VARCHAR2(20);
    //   VBOTON     NUMBER;
    //   VCONDICION VARCHAR2(2000);
    // 
    // BEGIN
    //  
    //  
    //   BEGIN
    //    SELECT COUNT(*)
    //      INTO V_TLLENAR
    //     FROM ANTRANKPN K
    //      WHERE K.RANKPN_CODTER = :ANTRANKPN.RANKPN_CODTER
    //      AND K.RANKPN_FECRAD = :ANTRANKPN.RANKPN_FECRAD;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_TLLENAR := 0; 
    //   END;
    //   
    //   
    //   IF V_TLLENAR = 0 THEN
    //    
    //    GO_BLOCK('ANTTERRANPN');
    //       EXECUTE_QUERY; 
    //    
    //   ELSE
    //    
    //    LIB$ALERTA ('MENSAJE','EL PROVEEDOR Y LA FECHA DE RADICACIÓN YA SE ENCUENTRAN CREADOS ENTRARÁ EN MODO CONSULTA PARA VALIDAR LA INFORMACIÓN.','ACEPTAR','CANCELAR',NULL,VBOTON);        
    //        
    //       IF VBOTON = 1 THEN
    //        
    //          
    //        SELECT :ANTRANKPN.RANKPN_FECRAD
    //        INTO V_FECHA   
    //        FROM DUAL;
    //        
    //      
    //       V_TERCERO := :ANTRANKPN.RANKPN_CODTER;
    //        
    //        CLEAR_FORM("NO_COMMIT","FULL_ROLLBACK");
    //          
    //        PANTALLA;
    // 
    //        SYSTEM.MESSAGE_LEVEL:=5;
    //      :BASE.FECHA   := SYSDATE;
    //      :BASE.USUARIO := PLSQLBuiltins.user();
    //      :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //      :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    //    
    //      IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //         :BASE.BASE_DAT := 'PRODUCCION';
    //      ELSE
    //         :BASE.BASE_DAT := 'DESARROLLO';
    //      END IF; 
    // 
    // 
    //         
    //        
    //         VCONDICION := 'RANKPN_CODTER = ''' || V_TERCERO||''''||
    //                ' AND RANKPN_FECRAD = TO_DATE('''||V_FECHA||''',''DD-MON-YY'''||')';        
    //   
    //      SET_BLOCK_PROPERTY('ANTRANKPN', "DEFAULT_WHERE", VCONDICION);
    //        
    //      EXECUTE_QUERY;
    //      
    //      GO_ITEM('ANTRANKPN.RANKPN_SUELDO');
    //     
    //       ELSE
    //        CLEAR_FORM("NO_COMMIT","FULL_ROLLBACK");
    //        EXIT_FORM;
    //        
    //       END IF; 
    //   
    //   END IF;
    //    
    //   
    //   
    //  
    //   
    //   
    //  
    //  
    //      
    // END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnCodter_keyNextItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnCodter_keyNextItem");
        let V_TLLENAR: number = null;
        let V_FECHA: Date = null;
        let V_TERCERO: string = null;
        let VBOTON: number = null;
        let VCONDICION: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        payload1.set("RANKPN_FECRAD", this.ANTRANKPN.RANKPN_FECRAD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_rankpncodter_keynextitem_query1", payload1);
        // get values from result
        V_TLLENAR = result1[0].get("V_TLLENAR");
        if (result1 == null || result1.length == 0) {

            V_TLLENAR = 0;
        }

        if (V_TLLENAR == 0) {
            this.oracleFormsBuiltins.go_block("ANTTERRANPN");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // ANFRANPN_LIB$ALERTA("MENSAJE", "EL PROVEEDOR Y LA FECHA DE RADICACIÓN YA SE ENCUENTRAN CREADOS ENTRARÁ EN MODO CONSULTA PARA VALIDAR LA INFORMACIÓN.", "ACEPTAR", "CANCELAR", null, VBOTON);
            if (VBOTON == 1) {
                // construct payload
                let payload2 = new Map();
                payload2.set("RANKPN_FECRAD", this.ANTRANKPN.RANKPN_FECRAD);
                // call REST API
                const result2 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_rankpncodter_keynextitem_query2", payload2);
                // get values from result
                V_FECHA = result2[0].get("V_FECHA");
                V_TERCERO = this.ANTRANKPN.RANKPN_CODTER;
                this.oracleFormsBuiltins.clear_form("NO_COMMIT", "FULL_ROLLBACK");
                // ANFRANPN_PANTALLA();
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
                VCONDICION = "RANKPN_CODTER = ''" + V_TERCERO + "''" + " AND RANKPN_FECRAD = TO_DATE(''" + V_FECHA + "'',''DD-MON-YY''" + ")";
                this.oracleFormsBuiltins.set_block_property("ANTRANKPN", "DEFAULT_WHERE", VCONDICION);
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_item("ANTRANKPN.RANKPN_SUELDO");
            }
            else {
                this.oracleFormsBuiltins.clear_form("NO_COMMIT", "FULL_ROLLBACK");
                this.oracleFormsBuiltins.exit_form();
            }
        }
        console.log("Exiting ANFRANPN_antrankpn_rankpnCodter_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*IF NVL(:RANKPN_SUELDO,0) = 0 THEN
    //    :RANKPN_EGRESO:=(NVL(:RANKPN_RENLIQ,0)*0.3);
    // END IF;  
    // ANTES DEL CAMBIO SSS*/
    // 
    // 
    // IF :ANTTERRANPN.T_LISTA = 1 THEN
    //    IF NVL(:RANKPN_SUELDO,0) = 0 THEN
    //       :RANKPN_EGRESO:=(NVL(:RANKPN_RENLIQ,0)*0.3);
    //    END IF;
    // ELSE
    //     
    //   SET_ITEM_PROPERTY('RANKPN_EGRESO',"DISPLAYED","PROPERTY_FALSE");   
    // 
    // END IF; END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnRenliq_postTextItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnRenliq_postTextItem");
        if (this.ANTTERRANPN.T_LISTA == 1) {
            // if (RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO == 0) {
            //     this.ANTRANKPN.RANKPN_EGRESO = RANKPN_RENLIQ == null ? 0 : RANKPN_RENLIQ * 0.3;
            // }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("RANKPN_EGRESO", "DISPLAYED", "PROPERTY_FALSE");
        }
        console.log("Exiting ANFRANPN_antrankpn_rankpnRenliq_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // COMANDO VARCHAR2(255);
    // PL_ID PARAMLIST;
    // V_CANTIDAD NUMBER;
    // BEGIN
    //  BEGIN 
    //  SELECT COUNT(PN.RANKPN_USUARI)
    //  INTO V_CANTIDAD 
    //   FROM ANTRANKPN PN 
    //   WHERE 
    //    PN.RANKPN_CODTER = :ANTRANKPN.RANKPN_CODTER    
    //    AND PN.RANKPN_FECRAD = :ANTRANKPN.RANKPN_FECRAD;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN  V_CANTIDAD := 0;
    //   END;
    //   
    //   IF V_CANTIDAD = 0 THEN 
    //  
    //    UPDATE ANTRANKPN SET RANKPN_USUARI = USER WHERE 
    //     RANKPN_FECRAD = :ANTRANKPN.RANKPN_FECRAD
    //     AND RANKPN_CODTER = :ANTRANKPN.RANKPN_CODTER;    
    //    COMMIT; 
    //  END IF ;  
    //     
    //     PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'ORACLE_SHUTDOWN',"TEXT_PARAMETER",'YES');
    //     ADD_PARAMETER(PL_ID,'P_TERCERO',"TEXT_PARAMETER",:ANTRANKPN.RANKPN_CODTER);
    //     ADD_PARAMETER(PL_ID,'P_CODEUDOR',"TEXT_PARAMETER",:TERAPN_CODEUD);
    //     ADD_PARAMETER(PL_ID,'P_FECHA',"TEXT_PARAMETER",TO_CHAR(:ANTRANKPN.RANKPN_FECRAD,'DD-MM-YYYY'));
    //     RUN_PRODUCT(REPORTS,'ANRSCOPN',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFRANPN_antrankpn_imprimir_whenMouseClick() {
        console.log("Entering ANFRANPN_antrankpn_imprimir_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        let V_CANTIDAD: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RANKPN_CODTER", this.ANTRANKPN.RANKPN_CODTER);
        payload1.set("RANKPN_FECRAD", this.ANTRANKPN.RANKPN_FECRAD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_imprimir_whenmouseclick_query1", payload1);
        // get values from result
        V_CANTIDAD = result1[0].get("V_CANTIDAD");
        if (result1 == null || result1.length == 0) {

            V_CANTIDAD = 0;
        }

        if (V_CANTIDAD == 0) {
            // construct payload
            let payload2 = new Map();
            // payload2.RANKPN_FECRAD = : RANKPN_FECRAD;
            // payload2.RANKPN_CODTER = : RANKPN_CODTER;
            // call REST API
            const result2 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_imprimir_whenmouseclick_query2", payload2);
        }
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_TERCERO", "TEXT_PARAMETER", this.ANTRANKPN.RANKPN_CODTER);
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "P_CODEUDOR", "TEXT_PARAMETER", TERAPN_CODEUD);
        this.oracleFormsBuiltins.add_parameter(PL_ID, "P_FECHA", "TEXT_PARAMETER", this.ANTRANKPN.RANKPN_FECRAD.toString());
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANRSCOPN", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFRANPN_antrankpn_imprimir_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    V_TLIS NUMBER;
    //  BEGIN
    //   
    //  BEGIN
    //   SELECT PR.PARRKP_CODLIS
    //   INTO V_TLIS
    //   FROM ANTPARRKPN PR
    //   WHERE :ANTTERRANPN.TERAPN_FECRAD BETWEEN PR.PARRKP_FINICI AND PR.PARRKP_FFINAL
    //   AND ROWNUM = 1;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN    V_TLIS := 0  ;
    //  END ;
    //  
    //    IF V_TLIS = 0 THEN
    //       :ANTTERRANPN.T_LISTA := 1;
    //    ELSE
    //       :ANTTERRANPN.T_LISTA := V_TLIS;
    //    END IF;
    //    
    //  IF :ANTTERRANPN.T_LISTA = 1 THEN
    //     :RANKPN_EGRESO:=(NVL(:RANKPN_SUELDO,0)*0.3);
    //  ELSE
    //    SET_ITEM_PROPERTY('RANKPN_EGRESO',"DISPLAYED","PROPERTY_FALSE");      
    //  END IF;
    //    
    //   
    //  
    //  END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnSueldo_postTextItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnSueldo_postTextItem");
        let V_TLIS: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERAPN_FECRAD", this.ANTTERRANPN.TERAPN_FECRAD);
        // call REST API
        const result1 = await Rest.post("/anfranpn_antrankpn/anfranpn_antrankpn_rankpnsueldo_posttextitem_query1", payload1);
        // get values from result
        V_TLIS = result1[0].get("V_TLIS");
        if (result1 == null || result1.length == 0) {

            V_TLIS = 0;
        }

        if (V_TLIS == 0) {
            this.ANTTERRANPN.T_LISTA = 1;
        }
        else {
            this.ANTTERRANPN.T_LISTA = V_TLIS;
        }
        if (this.ANTTERRANPN.T_LISTA == 1) {
            // this.ANTRANKPN.RANKPN_EGRESO = RANKPN_SUELDO == null ? 0 : RANKPN_SUELDO * 0.3;
        }
        else {
            this.oracleFormsBuiltins.set_item_property("RANKPN_EGRESO", "DISPLAYED", "PROPERTY_FALSE");
        }
        console.log("Exiting ANFRANPN_antrankpn_rankpnSueldo_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   :RANKPN_CREDB2:=((NVL(:RANKPN_MESUNO,0)+NVL(:RANKPN_MESDOS,0)+NVL(:RANKPN_MESTRE,0))/3)*(:RANKPN_CREDB1/100);
    // END;
    //#endregion
    async ANFRANPN_antrankpn_rankpnMestre_postTextItem() {
        console.log("Entering ANFRANPN_antrankpn_rankpnMestre_postTextItem");
        // this.ANTRANKPN.RANKPN_CREDB2 = RANKPN_MESUNO == null ? 0 : RANKPN_MESUNO + RANKPN_MESDOS == null ? 0 : RANKPN_MESDOS + RANKPN_MESTRE == null ? 0 : RANKPN_MESTRE / 3 * RANKPN_CREDB1 / 100;
        console.log("Exiting ANFRANPN_antrankpn_rankpnMestre_postTextItem");
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
    async ANFRANPN_antrankpn_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFRANPN_antrankpn_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFRANPN_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFRANPN_antrankpn_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // PUP_ACTUALIZACION_DEUDOR;
    // COMMIT;
    // GO_BLOCK('ANTRESPEN');EXECUTE_QUERY;
    // GO_BLOCK('ANTRESPEN_CODEUDOR');EXECUTE_QUERY; END;
    //#endregion
    async ANFRANPN_antrankpn_resumen_whenMouseClick() {
        console.log("Entering ANFRANPN_antrankpn_resumen_whenMouseClick");
        // ANFRANPN_PUP_ACTUALIZACION_DEUDOR();
        this.oracleFormsBuiltins.go_block("ANTRESPEN");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTRESPEN_CODEUDOR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFRANPN_antrankpn_resumen_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFRANPN_toolbar_whenButtonPressed() {
        console.log("Entering ANFRANPN_toolbar_whenButtonPressed");
        // ANFRANPN_TOOLBAR_ACTIONS();
        console.log("Exiting ANFRANPN_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFRANPN_toolbar_whenMouseLeave() {
        console.log("Entering ANFRANPN_toolbar_whenMouseLeave");
        // ANFRANPN_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFRANPN_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFRANPN_toolbar_whenNewFormInstance() {
        console.log("Entering ANFRANPN_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFRANPN_toolbar_whenNewFormInstance");
    }

}

