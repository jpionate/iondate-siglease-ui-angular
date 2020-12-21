import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFPATCLI business logic
import {
    ANTACTINM,
    VARIABLE,
    ANTACTVEH,
    ANTACTOTR,
    TOOLBAR,
    BASE
} from "./ANFPATCLI_models";



// class ANFPATCLI
@Component({
    selector: 'app-anfpatcli',
    templateUrl: './anfpatcli.component.html',
})
export class AnfpatcliComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTACTINM: ANTACTINM = new ANTACTINM();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTACTVEH: ANTACTVEH = new ANTACTVEH();
    public ANTACTOTR: ANTACTOTR = new ANTACTOTR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFPATCLI_keyNxtblk() {
        console.log("Entering ANFPATCLI_keyNxtblk");
        console.log("Exiting ANFPATCLI_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFPATCLI_whenMouseDoubleclick() {
        console.log("Entering ANFPATCLI_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFPATCLI_whenMouseDoubleclick");
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
    // ------------------------------------------------------
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
    async ANFPATCLI_whenNewFormInstance() {
        console.log("Entering ANFPATCLI_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfpatcli/anfpatcli_whennewforminstance_query1", payload1);
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
        console.log("Exiting ANFPATCLI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFPATCLI_preForm() {
        console.log("Entering ANFPATCLI_preForm");
        // ANFPATCLI_PANTALLA();
        // ANFPATCLI_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFPATCLI_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFPATCLI_keyUp() {
        console.log("Entering ANFPATCLI_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFPATCLI_keyUp");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFPATCLI_keyPrvblk() {
        console.log("Entering ANFPATCLI_keyPrvblk");
        console.log("Exiting ANFPATCLI_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFPATCLI_keyDown() {
        console.log("Entering ANFPATCLI_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFPATCLI_keyDown");
    }

    //#region PLSQL
    // BEGIN DELETE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFPATCLI_antactinm_keyDelrec() {
        console.log("Entering ANFPATCLI_antactinm_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        console.log("Exiting ANFPATCLI_antactinm_keyDelrec");
    }

    async ANFPATCLI_antactinm_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // CREATE_RECORD; END;
    //#endregion
    async ANFPATCLI_antactinm_keyCrerec() {
        console.log("Entering ANFPATCLI_antactinm_keyCrerec");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting ANFPATCLI_antactinm_keyCrerec");
    }

    //#region PLSQL
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'PROPIEDINM'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('ANTACTINM.ACTINM_PROPIE'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    // 
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'DOCACREDI'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('ANTACTINM.ACTINM_DOCACR'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFPATCLI_antactinm_whenNewBlockInstance() {
        console.log("Entering ANFPATCLI_antactinm_whenNewBlockInstance");
        let IT_ID: number = null;
        IT_ID = this.oracleFormsBuiltins.find_item("ANTACTINM.ACTINM_PROPIE");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        this.oracleFormsBuiltins.execute_query();
        IT_ID = this.oracleFormsBuiltins.find_item("ANTACTINM.ACTINM_DOCACR");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFPATCLI_antactinm_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :DESNOMBRE1:=:DES_NITTER; END;
    //#endregion
    async ANFPATCLI_antactinm_whenCreateRecord() {
        console.log("Entering ANFPATCLI_antactinm_whenCreateRecord");
        // this.ANTACTINM.DESNOMBRE1 = this.ANTACTINM.DES_NITTER;
        console.log("Exiting ANFPATCLI_antactinm_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFPATCLI_antactinm_keyExit() {
        console.log("Entering ANFPATCLI_antactinm_keyExit");
        console.log("Exiting ANFPATCLI_antactinm_keyExit");
    }

    async ANFPATCLI_antactinm_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE1
    //    FROM TER
    //    WHERE TERCOD=:ACTINM_CODNIT;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END; 
    // --
    // BEGIN
    //  SELECT ENTFIN_ENDESC   
    //    INTO :DESENTIDAD1
    //    FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD=:ACTINM_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async ANFPATCLI_antactinm_postQuery() {
        console.log("Entering ANFPATCLI_antactinm_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("ACTINM_CODNIT", ACTINM_CODNIT);
        // call REST API
        const result1 = await Rest.post("/anfpatcli_antactinm/anfpatcli_antactinm_postquery_query1", payload1);
        // get values from result
        // DESNOMBRE1 = result1[0].get("DESNOMBRE1");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("ACTINM_ENTFIN", ACTINM_ENTFIN);
        // call REST API
        const result2 = await Rest.post("/anfpatcli_antactinm/anfpatcli_antactinm_postquery_query2", payload2);
        // get values from result
        // DESENTIDAD1 = result2[0].get("DESENTIDAD1");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting ANFPATCLI_antactinm_postQuery");
    }

    //#region PLSQL
    // BEGIN DOWN; END;
    //#endregion
    async ANFPATCLI_antactinm_keyDown() {
        console.log("Entering ANFPATCLI_antactinm_keyDown");
        this.oracleFormsBuiltins.down();
        console.log("Exiting ANFPATCLI_antactinm_keyDown");
    }

    //#region PLSQL
    // BEGIN :ACTINM_NETOVL:=NVL(:ACTINM_VLRCOM,0)-NVL(:ACTINM_SALDOO,0); END;
    //#endregion
    async ANFPATCLI_antactinm_actinmSaldoo_whenValidateItem() {
        console.log("Entering ANFPATCLI_antactinm_actinmSaldoo_whenValidateItem");
        // this.ANTACTINM.ACTINM_NETOVL = ACTINM_VLRCOM == null ? 0 : ACTINM_VLRCOM - ACTINM_SALDOO == null ? 0 : ACTINM_SALDOO;
        console.log("Exiting ANFPATCLI_antactinm_actinmSaldoo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :ACTINM_NETOVL:=NVL(:ACTINM_VLRCOM,0)-NVL(:ACTINM_SALDOO,0); END;
    //#endregion
    async ANFPATCLI_antactinm_actinmSaldoo_postTextItem() {
        console.log("Entering ANFPATCLI_antactinm_actinmSaldoo_postTextItem");
        // this.ANTACTINM.ACTINM_NETOVL = ACTINM_VLRCOM == null ? 0 : ACTINM_VLRCOM - ACTINM_SALDOO == null ? 0 : ACTINM_SALDOO;
        console.log("Exiting ANFPATCLI_antactinm_actinmSaldoo_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ACTINM_ENTFIN IS NOT NULL THEN
    // BEGIN
    //  
    //  SELECT ENTFIN_ENDESC   
    //    INTO :DESENTIDAD1
    //    FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD=:ACTINM_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  LIB$ALERTA ('MENSAJE','ENTIDAD INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF;
    // END;
    //#endregion
    async ANFPATCLI_antactinm_actinmEntfin_whenValidateItem() {
        console.log("Entering ANFPATCLI_antactinm_actinmEntfin_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.ANTACTINM.ACTINM_ENTFIN != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ACTINM_ENTFIN", this.ANTACTINM.ACTINM_ENTFIN);
            // call REST API
            const result1 = await Rest.post("/anfpatcli_antactinm/anfpatcli_antactinm_actinmentfin_whenvalidateitem_query1", payload1);
            // get values from result
            this.ANTACTINM.DESENTIDAD1 = result1[0].get("DESENTIDAD1");
            if (result1 == null || result1.length == 0) {

                // ANFPATCLI_LIB$ALERTA("MENSAJE", "ENTIDAD INEXISTENTE ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting ANFPATCLI_antactinm_actinmEntfin_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //  IF :VARIABLE.NITTER IS NOT NULL THEN 
    //    GO_BLOCK('ANTACTOTR');
    //    EXECUTE_QUERY;
    //    
    //   ELSE 
    //    LIB$ALERTA('MENSAJE','TERCERO ES NULO POR FAVOR DIGITARLO .............',NULL,NULL,NULL, T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF; 
    //    
    // 
    // END;
    //#endregion
    async ANFPATCLI_variable_otrosact_whenMouseClick() {
        console.log("Entering ANFPATCLI_variable_otrosact_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("ANTACTOTR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // ANFPATCLI_LIB$ALERTA("MENSAJE", "TERCERO ES NULO POR FAVOR DIGITARLO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFPATCLI_variable_otrosact_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //   IF :VARIABLE.NITTER IS NOT NULL THEN
    //       GO_BLOCK('ANTACTVEH');
    //      EXECUTE_QUERY;
    //   ELSE
    //    LIB$ALERTA('MENSAJE','TERCERO ES NULO POR FAVOR DIGITARLO .............',NULL,NULL,NULL, T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF; 
    //    
    // END;
    //#endregion
    async ANFPATCLI_variable_vehiculos_whenMouseClick() {
        console.log("Entering ANFPATCLI_variable_vehiculos_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("ANTACTVEH");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // ANFPATCLI_LIB$ALERTA("MENSAJE", "TERCERO ES NULO POR FAVOR DIGITARLO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFPATCLI_variable_vehiculos_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //  IF :VARIABLE.NITTER IS NOT NULL THEN 
    //    GO_BLOCK('ANTACTINM');
    //    EXECUTE_QUERY;
    //    SHOW_VIEW('CANVAS18');
    //   ELSE 
    //    LIB$ALERTA('MENSAJE','TERCERO ES NULO POR FAVOR DIGITARLO .............',NULL,NULL,NULL, T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF; 
    //    
    // 
    // END;
    //#endregion
    async ANFPATCLI_variable_inmuebles_whenMouseClick() {
        console.log("Entering ANFPATCLI_variable_inmuebles_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("ANTACTINM");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CANVAS18");
        }
        else {
            // ANFPATCLI_LIB$ALERTA("MENSAJE", "TERCERO ES NULO POR FAVOR DIGITARLO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFPATCLI_variable_inmuebles_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.OTROSACT');
    // HIDE_VIEW('CANVAS19'); END;
    //#endregion
    async ANFPATCLI_variable_volverotr_whenMouseClick() {
        console.log("Entering ANFPATCLI_variable_volverotr_whenMouseClick");
        this.oracleFormsBuiltins.go_item("VARIABLE.OTROSACT");
        this.oracleFormsBuiltins.hide_view("CANVAS19");
        console.log("Exiting ANFPATCLI_variable_volverotr_whenMouseClick");
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
    // END;  
    //#endregion
    async ANFPATCLI_variable_nitter_whenValidateItem() {
        console.log("Entering ANFPATCLI_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfpatcli_variable/anfpatcli_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFPATCLI_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFPATCLI_variable_nitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.VEHICULOS'); END;
    //#endregion
    async ANFPATCLI_variable_volverveh_whenMouseClick() {
        console.log("Entering ANFPATCLI_variable_volverveh_whenMouseClick");
        this.oracleFormsBuiltins.go_item("VARIABLE.VEHICULOS");
        console.log("Exiting ANFPATCLI_variable_volverveh_whenMouseClick");
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
    async ANFPATCLI_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFPATCLI_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFPATCLI_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFPATCLI_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.INMUEBLES');
    // HIDE_VIEW('CANVAS18'); END;
    //#endregion
    async ANFPATCLI_variable_volverinm_whenMouseClick() {
        console.log("Entering ANFPATCLI_variable_volverinm_whenMouseClick");
        this.oracleFormsBuiltins.go_item("VARIABLE.INMUEBLES");
        this.oracleFormsBuiltins.hide_view("CANVAS18");
        console.log("Exiting ANFPATCLI_variable_volverinm_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN DELETE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFPATCLI_antactveh_keyDelrec() {
        console.log("Entering ANFPATCLI_antactveh_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        console.log("Exiting ANFPATCLI_antactveh_keyDelrec");
    }

    async ANFPATCLI_antactveh_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // CREATE_RECORD; END;
    //#endregion
    async ANFPATCLI_antactveh_keyCrerec() {
        console.log("Entering ANFPATCLI_antactveh_keyCrerec");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting ANFPATCLI_antactveh_keyCrerec");
    }

    //#region PLSQL
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'PROPIEDVEH'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('ANTACTVEH.ACTVEH_PROPIE'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFPATCLI_antactveh_whenNewBlockInstance() {
        console.log("Entering ANFPATCLI_antactveh_whenNewBlockInstance");
        let IT_ID: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("ANTACTVEH.ACTVEH_PROPIE");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFPATCLI_antactveh_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :DESNOMBRE:=:DES_NITTER; END;
    //#endregion
    async ANFPATCLI_antactveh_whenCreateRecord() {
        console.log("Entering ANFPATCLI_antactveh_whenCreateRecord");
        this.ANTACTVEH.DESNOMBRE = this.VARIABLE.DES_NITTER;
        console.log("Exiting ANFPATCLI_antactveh_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFPATCLI_antactveh_keyExit() {
        console.log("Entering ANFPATCLI_antactveh_keyExit");
        console.log("Exiting ANFPATCLI_antactveh_keyExit");
    }

    async ANFPATCLI_antactveh_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE
    //    FROM TER
    //    WHERE TERCOD=:ACTVEH_CODNIT;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END; 
    // --
    // BEGIN
    //  SELECT ENTFIN_ENDESC   
    //    INTO :DESENTIDAD
    //    FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD=:ACTVEH_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async ANFPATCLI_antactveh_postQuery() {
        console.log("Entering ANFPATCLI_antactveh_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("ACTVEH_CODNIT", ACTVEH_CODNIT);
        // call REST API
        const result1 = await Rest.post("/anfpatcli_antactveh/anfpatcli_antactveh_postquery_query1", payload1);
        // get values from result
        // DESNOMBRE = result1[0].get("DESNOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("ACTVEH_ENTFIN", ACTVEH_ENTFIN);
        // call REST API
        const result2 = await Rest.post("/anfpatcli_antactveh/anfpatcli_antactveh_postquery_query2", payload2);
        // get values from result
        // DESENTIDAD = result2[0].get("DESENTIDAD");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting ANFPATCLI_antactveh_postQuery");
    }

    //#region PLSQL
    // BEGIN DOWN; END;
    //#endregion
    async ANFPATCLI_antactveh_keyDown() {
        console.log("Entering ANFPATCLI_antactveh_keyDown");
        this.oracleFormsBuiltins.down();
        console.log("Exiting ANFPATCLI_antactveh_keyDown");
    }

    //#region PLSQL
    // BEGIN :ACTVEH_NETOVL:=NVL(:ACTVEH_VLRFAS,0) - NVL(:ACTVEH_VLRENT,0); END;
    //#endregion
    async ANFPATCLI_antactveh_actvehVlrent_whenValidateItem() {
        console.log("Entering ANFPATCLI_antactveh_actvehVlrent_whenValidateItem");
        // this.ANTACTVEH.ACTVEH_NETOVL = ACTVEH_VLRFAS == null ? 0 : ACTVEH_VLRFAS - ACTVEH_VLRENT == null ? 0 : ACTVEH_VLRENT;
        console.log("Exiting ANFPATCLI_antactveh_actvehVlrent_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :ACTVEH_NETOVL:=NVL(:ACTVEH_VLRFAS,0) - NVL(:ACTVEH_VLRENT,0); END;
    //#endregion
    async ANFPATCLI_antactveh_actvehVlrent_postTextItem() {
        console.log("Entering ANFPATCLI_antactveh_actvehVlrent_postTextItem");
        // this.ANTACTVEH.ACTVEH_NETOVL = ACTVEH_VLRFAS == null ? 0 : ACTVEH_VLRFAS - ACTVEH_VLRENT == null ? 0 : ACTVEH_VLRENT;
        console.log("Exiting ANFPATCLI_antactveh_actvehVlrent_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ACTVEH_ENTFIN IS NOT NULL THEN
    //  BEGIN
    //  SELECT ENTFIN_ENDESC   
    //    INTO :DESENTIDAD
    //    FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD=:ACTVEH_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  LIB$ALERTA ('MENSAJE','ENTIDAD INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF;
    // END;
    //#endregion
    async ANFPATCLI_antactveh_actvehEntfin_whenValidateItem() {
        console.log("Entering ANFPATCLI_antactveh_actvehEntfin_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ACTVEH_ENTFIN != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("ACTVEH_ENTFIN", ACTVEH_ENTFIN);
        //     // call REST API
        //     const result1 = await Rest.post("/anfpatcli_antactveh/anfpatcli_antactveh_actvehentfin_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESENTIDAD = result1[0].get("DESENTIDAD");
        //     if (result1 == null || result1.length == 0) {

        //         ANFPATCLI_LIB$ALERTA("MENSAJE", "ENTIDAD INEXISTENTE ...", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting ANFPATCLI_antactveh_actvehEntfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN DELETE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFPATCLI_antactotr_keyDelrec() {
        console.log("Entering ANFPATCLI_antactotr_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        console.log("Exiting ANFPATCLI_antactotr_keyDelrec");
    }

    async ANFPATCLI_antactotr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN CREATE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFPATCLI_antactotr_keyCrerec() {
        console.log("Entering ANFPATCLI_antactotr_keyCrerec");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting ANFPATCLI_antactotr_keyCrerec");
    }

    //#region PLSQL
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'PROPIEDOTR'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('ANTACTOTR.ACTOTR_PROPIE');
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT DOMINI_ABREVE ABREV, DOMINI_DESCRI DESCRI
    //     FROM   ANTDOMINIOS
    //    WHERE  DOMINI_DOMINI = 'DOCACREDO'
    //     ORDER BY DOMINI_ABREVE DESC;
    //   IT_ID ITEM;
    // BEGIN
    //   IT_ID := FIND_ITEM('ANTACTOTR.ACTOTR_DOCACR'); 
    //   IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS DOMINIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.DESCRI, ACC.ABREV );
    //      END LOOP;
    //   END IF;
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async ANFPATCLI_antactotr_whenNewBlockInstance() {
        console.log("Entering ANFPATCLI_antactotr_whenNewBlockInstance");
        let IT_ID: number = null;
        IT_ID = this.oracleFormsBuiltins.find_item("ANTACTOTR.ACTOTR_PROPIE");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        this.oracleFormsBuiltins.execute_query();
        IT_ID = this.oracleFormsBuiltins.find_item("ANTACTOTR.ACTOTR_DOCACR");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFPATCLI_antactotr_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :DESNOMBRE3:=:DES_NITTER; END;
    //#endregion
    async ANFPATCLI_antactotr_whenCreateRecord() {
        console.log("Entering ANFPATCLI_antactotr_whenCreateRecord");
        this.ANTACTOTR.DESNOMBRE3 = this.VARIABLE.DES_NITTER;
        console.log("Exiting ANFPATCLI_antactotr_whenCreateRecord");
    }

    async ANFPATCLI_antactotr_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE3
    //    FROM TER
    //    WHERE TERCOD=:ACTOTR_CODNIT;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE3
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // END; 
    // --
    // BEGIN
    //  SELECT ENTFIN_ENDESC   
    //    INTO :DESENTIDAD3
    //    FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD=:ACTOTR_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async ANFPATCLI_antactotr_postQuery() {
        console.log("Entering ANFPATCLI_antactotr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("ACTOTR_CODNIT", ACTOTR_CODNIT);
        // // call REST API
        // const result1 = await Rest.post("/anfpatcli_antactotr/anfpatcli_antactotr_postquery_query1", payload1);
        // // get values from result
        // DESNOMBRE3 = result1[0].get("DESNOMBRE3");
        // if (result1 == null || result1.length == 0) {

        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.set("NITTER", NITTER);
        //     // call REST API
        //     const result2 = await Rest.post("/anfpatcli_antactotr/anfpatcli_antactotr_postquery_query2", payload2);
        //     // get values from result
        //     DESNOMBRE3 = result2[0].get("DESNOMBRE3");
        //     if (result2 == null || result2.length == 0) {

        //     }

        // }

        // construct payload
        let payload3 = new Map();
        // payload3.set("ACTOTR_ENTFIN", ACTOTR_ENTFIN);
        // call REST API
        const result3 = await Rest.post("/anfpatcli_antactotr/anfpatcli_antactotr_postquery_query3", payload3);
        // get values from result
        // DESENTIDAD3 = result3[0].get("DESENTIDAD3");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting ANFPATCLI_antactotr_postQuery");
    }

    //#region PLSQL
    // BEGIN DOWN; END;
    //#endregion
    async ANFPATCLI_antactotr_keyDown() {
        console.log("Entering ANFPATCLI_antactotr_keyDown");
        this.oracleFormsBuiltins.down();
        console.log("Exiting ANFPATCLI_antactotr_keyDown");
    }

    //#region PLSQL
    // BEGIN :ACTOTR_NETOVL:=NVL(:ACTOTR_VLRFAS,0) - NVL(:ACTOTR_VLRENT,0); END;
    //#endregion
    async ANFPATCLI_antactotr_actotrVlrent_whenValidateItem() {
        console.log("Entering ANFPATCLI_antactotr_actotrVlrent_whenValidateItem");
        // this.ANTACTOTR.ACTOTR_NETOVL = ACTOTR_VLRFAS == null ? 0 : ACTOTR_VLRFAS - ACTOTR_VLRENT == null ? 0 : ACTOTR_VLRENT;
        console.log("Exiting ANFPATCLI_antactotr_actotrVlrent_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :ACTOTR_NETOVL:=NVL(:ACTOTR_VLRFAS,0) - NVL(:ACTOTR_VLRENT,0); END;
    //#endregion
    async ANFPATCLI_antactotr_actotrVlrent_postTextItem() {
        console.log("Entering ANFPATCLI_antactotr_actotrVlrent_postTextItem");
        // this.ANTACTOTR.ACTOTR_NETOVL = ACTOTR_VLRFAS == null ? 0 : ACTOTR_VLRFAS - ACTOTR_VLRENT == null ? 0 : ACTOTR_VLRENT;
        console.log("Exiting ANFPATCLI_antactotr_actotrVlrent_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ACTOTR_ENTFIN IS NOT NULL THEN
    //  BEGIN
    //   SELECT ENTFIN_ENDESC   
    //    INTO :DESENTIDAD3
    //    FROM COTENTFIN
    //    WHERE ENTFIN_ENTCOD=:ACTOTR_ENTFIN;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA ('MENSAJE','ENTIDAD INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    // END IF;
    // END;
    //#endregion
    async ANFPATCLI_antactotr_actotrEntfin_whenValidateItem() {
        console.log("Entering ANFPATCLI_antactotr_actotrEntfin_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ACTOTR_ENTFIN != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("ACTOTR_ENTFIN", ACTOTR_ENTFIN);
        //     // call REST API
        //     const result1 = await Rest.post("/anfpatcli_antactotr/anfpatcli_antactotr_actotrentfin_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESENTIDAD3 = result1[0].get("DESENTIDAD3");
        //     if (result1 == null || result1.length == 0) {

        //         ANFPATCLI_LIB$ALERTA("MENSAJE", "ENTIDAD INEXISTENTE ...", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting ANFPATCLI_antactotr_actotrEntfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFPATCLI_toolbar_whenButtonPressed() {
        console.log("Entering ANFPATCLI_toolbar_whenButtonPressed");
        // ANFPATCLI_TOOLBAR_ACTIONS();
        console.log("Exiting ANFPATCLI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFPATCLI_toolbar_whenMouseLeave() {
        console.log("Entering ANFPATCLI_toolbar_whenMouseLeave");
        // ANFPATCLI_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFPATCLI_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFPATCLI_toolbar_whenNewFormInstance() {
        console.log("Entering ANFPATCLI_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFPATCLI_toolbar_whenNewFormInstance");
    }

}

