import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFDRREL business logic
import {
    ANTDRXTER,
    ANTACTVEH,
    ANTDRXREL_2,
    ANTDRXREL,
    ANTACTOTR,
    ANTDRXTER_A2,
    TOOLBAR,
    ANTDRXTER_A3,
    BASE,
    ANTDRXTER_P,
    ANTDRXTER_E2,
    ANTDRXTER_E3,
    ANTDRXTER_I2,
    ANTACTINM,
    ANTDRXTER_I3,
    VARIABLE,
    ANTDRXTER_I,
    ANTDRXTER_E,
    ANTDRXTER_P2,
    ANTDRXTER_A
} from "./ANFDRREL_models";



// class ANFDRREL
@Component({
    selector: 'app-anfdrrel',
    templateUrl: './anfdrrel.component.html',
})
export class AnfdrrelComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['P_NIT', null],
        ['P_CTRL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public ANTDRXTER: ANTDRXTER = new ANTDRXTER();
    public ANTACTVEH: ANTACTVEH = new ANTACTVEH();
    public ANTDRXREL_2: ANTDRXREL_2 = new ANTDRXREL_2();
    public ANTDRXREL: ANTDRXREL = new ANTDRXREL();
    public ANTACTOTR: ANTACTOTR = new ANTACTOTR();
    public ANTDRXTER_A2: ANTDRXTER_A2 = new ANTDRXTER_A2();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public ANTDRXTER_A3: ANTDRXTER_A3 = new ANTDRXTER_A3();
    public BASE: BASE = new BASE();
    public ANTDRXTER_P: ANTDRXTER_P = new ANTDRXTER_P();
    public ANTDRXTER_E2: ANTDRXTER_E2 = new ANTDRXTER_E2();
    public ANTDRXTER_E3: ANTDRXTER_E3 = new ANTDRXTER_E3();
    public ANTDRXTER_I2: ANTDRXTER_I2 = new ANTDRXTER_I2();
    public ANTACTINM: ANTACTINM = new ANTACTINM();
    public ANTDRXTER_I3: ANTDRXTER_I3 = new ANTDRXTER_I3();
    public VARIABLE: VARIABLE = new VARIABLE();
    public ANTDRXTER_I: ANTDRXTER_I = new ANTDRXTER_I();
    public ANTDRXTER_E: ANTDRXTER_E = new ANTDRXTER_E();
    public ANTDRXTER_P2: ANTDRXTER_P2 = new ANTDRXTER_P2();
    public ANTDRXTER_A: ANTDRXTER_A = new ANTDRXTER_A();


    async ANFDRREL_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFDRREL_keyNxtblk() {
        console.log("Entering ANFDRREL_keyNxtblk");
        console.log("Exiting ANFDRREL_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFDRREL_whenMouseDoubleclick() {
        console.log("Entering ANFDRREL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFDRREL_whenMouseDoubleclick");
    }

    async ANFDRREL_keyCrerec() {
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
    // -------------------------------------------------------
    //  --ARQUITECTURA
    // /*BEGIN
    //  SELECT USU_CODUNI
    //  INTO :this.PARAMETER.get("P_UNIDAD")
    //  FROM SGUSUARIOS 
    //  WHERE USU_CODIGO = PLSQLBuiltins.user();
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //    LIB$DTNERFRMA('EL USUARIO '|| USER ||' NO TIENE ASIGNADA LA UNIDAD. POR FAVOR VALIDAR.');
    // END;
    // */
    // :this.PARAMETER.get("P_UNIDAD") := FBD_CON_UNICON (:VARIABLE.UNIDAD);
    // 
    // --ARQUITECTURA
    //  
    //  
    //  DECLARE
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
    async ANFDRREL_whenNewFormInstance() {
        console.log("Entering ANFDRREL_whenNewFormInstance");
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
                const result1 = await Rest.post("/anfdrrel/anfdrrel_whennewforminstance_query1", payload1);
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

        // this.PARAMETER.set("P_UNIDAD", FBD_CON_UNICON(this.VARIABLE.UNIDAD));
        {

            let V_FORMA: string = null;
            // V_FORMA = F_SIGUIENTE_F;
        }

        if (this.PARAMETER.get("P_CTRL") == "Q") {
            this.VARIABLE.NITTER = this.PARAMETER.get("P_NIT");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting ANFDRREL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFDRREL_preForm() {
        console.log("Entering ANFDRREL_preForm");
        // ANFDRREL_PANTALLA();
        // ANFDRREL_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFDRREL_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.TRIGGER_RECORD>'1' THEN
    //     UP;
    //   END IF;
    // END;
    //#endregion
    async ANFDRREL_keyUp() {
        console.log("Entering ANFDRREL_keyUp");
        if (this._SYSTEM_SERVICE.get("TRIGGER_RECORD") > "1") {
            this.oracleFormsBuiltins.up();
        }
        console.log("Exiting ANFDRREL_keyUp");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async ANFDRREL_keyPrvblk() {
        console.log("Entering ANFDRREL_keyPrvblk");
        console.log("Exiting ANFDRREL_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF SYSTEM.LAST_RECORD='FALSE' THEN
    //      DOWN;
    //   END IF;
    // END;
    //#endregion
    async ANFDRREL_keyDown() {
        console.log("Entering ANFDRREL_keyDown");
        if (this.oracleFormsBuiltins.get("last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting ANFDRREL_keyDown");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA'); END;
    //#endregion
    async ANFDRREL_antdrxter_keyListval() {
        console.log("Entering ANFDRREL_antdrxter_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA");
        console.log("Exiting ANFDRREL_antdrxter_keyListval");
    }

    //#region PLSQL
    // IF  :VARIABLE.TIPO_DECLARA IN ('01','02') THEN
    //   BEGIN
    //   SELECT   DEFCDR_DESCTA 
    //     INTO   :ANTDRXTER.DES_CUENTA
    //      FROM ANTDEFCTDR
    //     WHERE DEFCDR_CODCTA =:ANTDRXTER.DRXTER_CODCTA
    //       AND DEFCDR_GRUCTA ='PB'
    //       ;
    //    EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    //    END;
    // ELSE
    //   BEGIN
    //   SELECT   DEFCDR_DESCTA 
    //     INTO   :ANTDRXTER.DES_CUENTA
    //      FROM ANTDEFCTDR
    //     WHERE DEFCDR_CODCTA =:ANTDRXTER.DRXTER_CODCTA
    //       AND DEFCDR_GRUCTA ='AZ'
    //       ;
    //    EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      NULL;
    //    END;
    //  
    // END IF;
    // BEGIN
    //   SELECT SUMADR_SUMVAL
    //     INTO :TOTAL_A1
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD
    //      AND SUMADR_SUMCOD='BG';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A1:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxter_postQuery() {
        console.log("Entering ANFDRREL_antdrxter_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("DRXTER_CODCTA", this.ANTDRXTER.DRXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter/anfdrrel_antdrxter_postquery_query1", payload1);
        // get values from result
        this.ANTDRXTER.DES_CUENTA = result1[0].get("ANTDRXTER.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfdrrel_antdrxter/anfdrrel_antdrxter_postquery_query2", payload2);
        // get values from result
        // TOTAL_A1 = result2[0].get("TOTAL_A1");
        if (result2 == null || result2.length == 0) {

            // this.ANTDRXTER.TOTAL_A1 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxter_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA );
    // GO_ITEM('ANTDRXTER.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS4'); END;
    //#endregion
    async ANFDRREL_antdrxter_calculadora_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxter_calculadora_keyNextItem");
        // this.ANTDRXTER.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA);
        this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFDRREL_antdrxter_calculadora_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS4'); END;
    //#endregion
    async ANFDRREL_antdrxter_calculadora_keyHelp() {
        console.log("Entering ANFDRREL_antdrxter_calculadora_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS4");
        console.log("Exiting ANFDRREL_antdrxter_calculadora_keyHelp");
    }

    //#region PLSQL
    // BEGIN DELETE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFDRREL_antactveh_keyDelrec() {
        console.log("Entering ANFDRREL_antactveh_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        console.log("Exiting ANFDRREL_antactveh_keyDelrec");
    }

    async ANFDRREL_antactveh_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN CREATE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFDRREL_antactveh_keyCrerec() {
        console.log("Entering ANFDRREL_antactveh_keyCrerec");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting ANFDRREL_antactveh_keyCrerec");
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
    async ANFDRREL_antactveh_whenNewBlockInstance() {
        console.log("Entering ANFDRREL_antactveh_whenNewBlockInstance");
        let IT_ID: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("ANTACTVEH.ACTVEH_PROPIE");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS DOMINIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFDRREL_antactveh_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :DESNOMBRE:=:DES_NITTER; END;
    //#endregion
    async ANFDRREL_antactveh_whenCreateRecord() {
        console.log("Entering ANFDRREL_antactveh_whenCreateRecord");
        // this.ANTACTVEH.DESNOMBRE = this.ANTACTVEH.DES_NITTER;
        console.log("Exiting ANFDRREL_antactveh_whenCreateRecord");
    }

    async ANFDRREL_antactveh_keyPrvblk() {
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
    //   BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // END; 
    // --
    // BEGIN
    //  SELECT ENTFIN_DESENT   
    //    INTO :DESENTIDAD
    //    FROM ANTENTFIN
    //    WHERE ENTFIN_CODENT=:ACTVEH_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async ANFDRREL_antactveh_postQuery() {
        console.log("Entering ANFDRREL_antactveh_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("ACTVEH_CODNIT", ACTVEH_CODNIT);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antactveh/anfdrrel_antactveh_postquery_query1", payload1);
        // get values from result
        // DESNOMBRE = result1[0].get("DESNOMBRE");
        if (result1 == null || result1.length == 0) {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            // call REST API
            const result2 = await Rest.post("/anfdrrel_antactveh/anfdrrel_antactveh_postquery_query2", payload2);
            // get values from result
            // DESNOMBRE = result2[0].get("DESNOMBRE");
            if (result2 == null || result2.length == 0) {

            }

        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("ACTVEH_ENTFIN", ACTVEH_ENTFIN);
        // call REST API
        const result3 = await Rest.post("/anfdrrel_antactveh/anfdrrel_antactveh_postquery_query3", payload3);
        // get values from result
        // DESENTIDAD = result3[0].get("DESENTIDAD");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting ANFDRREL_antactveh_postQuery");
    }

    //#region PLSQL
    // BEGIN DOWN; END;
    //#endregion
    async ANFDRREL_antactveh_keyDown() {
        console.log("Entering ANFDRREL_antactveh_keyDown");
        this.oracleFormsBuiltins.down();
        console.log("Exiting ANFDRREL_antactveh_keyDown");
    }

    //#region PLSQL
    // BEGIN :ACTVEH_NETOVL:=NVL(:ACTVEH_VLRFAS,0) - NVL(:ACTVEH_VLRENT,0); END;
    //#endregion
    async ANFDRREL_antactveh_actvehVlrent_whenValidateItem() {
        console.log("Entering ANFDRREL_antactveh_actvehVlrent_whenValidateItem");
        // this.ANTACTVEH.ACTVEH_NETOVL = ACTVEH_VLRFAS == null ? 0 : ACTVEH_VLRFAS - ACTVEH_VLRENT == null ? 0 : ACTVEH_VLRENT;
        console.log("Exiting ANFDRREL_antactveh_actvehVlrent_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :ACTVEH_NETOVL:=NVL(:ACTVEH_VLRFAS,0) - NVL(:ACTVEH_VLRENT,0); END;
    //#endregion
    async ANFDRREL_antactveh_actvehVlrent_postTextItem() {
        console.log("Entering ANFDRREL_antactveh_actvehVlrent_postTextItem");
        // this.ANTACTVEH.ACTVEH_NETOVL = ACTVEH_VLRFAS == null ? 0 : ACTVEH_VLRFAS - ACTVEH_VLRENT == null ? 0 : ACTVEH_VLRENT;
        console.log("Exiting ANFDRREL_antactveh_actvehVlrent_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ACTVEH_ENTFIN IS NOT NULL THEN
    //  BEGIN
    //   SELECT ENTFIN_DESENT   
    //    INTO :DESENTIDAD
    //    FROM ANTENTFIN
    //    WHERE ENTFIN_CODENT=:ACTVEH_ENTFIN;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA ('MENSAJE','ENTIDAD INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    // END IF;
    // END;
    //#endregion
    async ANFDRREL_antactveh_actvehEntfin_whenValidateItem() {
        console.log("Entering ANFDRREL_antactveh_actvehEntfin_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ACTVEH_ENTFIN != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("ACTVEH_ENTFIN", ACTVEH_ENTFIN);
        //     // call REST API
        //     const result1 = await Rest.post("/anfdrrel_antactveh/anfdrrel_antactveh_actvehentfin_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESENTIDAD = result1[0].get("DESENTIDAD");
        //     if (result1 == null || result1.length == 0) {

        //         // ANFDRREL_LIB$ALERTA("MENSAJE", "ENTIDAD INEXISTENTE ...", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting ANFDRREL_antactveh_actvehEntfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SDRREL_SUMVAL  
    //     INTO :TOTAL_REL2
    //     FROM ANTSDRREL              
    //    WHERE SDRREL_CODTER=:NITTER
    //      AND SDRREL_CODPE1=:PERCOD_2
    //      AND SDRREL_CODPE2=:PERCOD_3
    //      AND SDRREL_SUMCOD='BG';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL2:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxrel2_postQuery() {
        console.log("Entering ANFDRREL_antdrxrel2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxrel_2/anfdrrel_antdrxrel2_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL2 = result1[0].get("TOTAL_REL2");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXREL_2.TOTAL_REL2 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxrel2_postQuery");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SDRREL_SUMVAL 
    //     INTO :TOTAL_REL
    //     FROM ANTSDRREL              
    //    WHERE SDRREL_CODTER=:NITTER
    //      AND SDRREL_CODPE1=:PERCOD
    //      AND SDRREL_CODPE2=:PERCOD_2
    //      AND SDRREL_SUMCOD='BG';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_REL:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxrel_postQuery() {
        console.log("Entering ANFDRREL_antdrxrel_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxrel/anfdrrel_antdrxrel_postquery_query1", payload1);
        // get values from result
        // TOTAL_REL = result1[0].get("TOTAL_REL");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXREL.TOTAL_REL = 0;
        }

        console.log("Exiting ANFDRREL_antdrxrel_postQuery");
    }

    //#region PLSQL
    // BEGIN DELETE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFDRREL_antactotr_keyDelrec() {
        console.log("Entering ANFDRREL_antactotr_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        console.log("Exiting ANFDRREL_antactotr_keyDelrec");
    }

    async ANFDRREL_antactotr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN CREATE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFDRREL_antactotr_keyCrerec() {
        console.log("Entering ANFDRREL_antactotr_keyCrerec");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting ANFDRREL_antactotr_keyCrerec");
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
    async ANFDRREL_antactotr_whenNewBlockInstance() {
        console.log("Entering ANFDRREL_antactotr_whenNewBlockInstance");
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
        console.log("Exiting ANFDRREL_antactotr_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :DESNOMBRE3:=:DES_NITTER; END;
    //#endregion
    async ANFDRREL_antactotr_whenCreateRecord() {
        console.log("Entering ANFDRREL_antactotr_whenCreateRecord");
        this.ANTACTOTR.DESNOMBRE3 = this.VARIABLE.DES_NITTER;
        console.log("Exiting ANFDRREL_antactotr_whenCreateRecord");
    }

    async ANFDRREL_antactotr_keyPrvblk() {
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
    //  SELECT ENTFIN_DESENT   
    //    INTO :DESENTIDAD3
    //    FROM ANTENTFIN
    //    WHERE ENTFIN_CODENT=:ACTOTR_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async ANFDRREL_antactotr_postQuery() {
        console.log("Entering ANFDRREL_antactotr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("ACTOTR_CODNIT", ACTOTR_CODNIT);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antactotr/anfdrrel_antactotr_postquery_query1", payload1);
        // get values from result
        // DESNOMBRE3 = result1[0].get("DESNOMBRE3");
        if (result1 == null || result1.length == 0) {

            // construct payload
            let payload2 = new Map();
            payload2.set("NITTER", this.VARIABLE.NITTER);
            // call REST API
            const result2 = await Rest.post("/anfdrrel_antactotr/anfdrrel_antactotr_postquery_query2", payload2);
            // get values from result
            // DESNOMBRE3 = result2[0].get("DESNOMBRE3");
            if (result2 == null || result2.length == 0) {

            }

        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("ACTOTR_ENTFIN", ACTOTR_ENTFIN);
        // call REST API
        const result3 = await Rest.post("/anfdrrel_antactotr/anfdrrel_antactotr_postquery_query3", payload3);
        // get values from result
        // DESENTIDAD3 = result3[0].get("DESENTIDAD3");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting ANFDRREL_antactotr_postQuery");
    }

    //#region PLSQL
    // BEGIN DOWN; END;
    //#endregion
    async ANFDRREL_antactotr_keyDown() {
        console.log("Entering ANFDRREL_antactotr_keyDown");
        this.oracleFormsBuiltins.down();
        console.log("Exiting ANFDRREL_antactotr_keyDown");
    }

    //#region PLSQL
    // BEGIN :ACTOTR_NETOVL:=NVL(:ACTOTR_VLRFAS,0) - NVL(:ACTOTR_VLRENT,0); END;
    //#endregion
    async ANFDRREL_antactotr_actotrVlrent_whenValidateItem() {
        console.log("Entering ANFDRREL_antactotr_actotrVlrent_whenValidateItem");
        // this.ANTACTOTR.ACTOTR_NETOVL = ACTOTR_VLRFAS == null ? 0 : ACTOTR_VLRFAS - ACTOTR_VLRENT == null ? 0 : ACTOTR_VLRENT;
        console.log("Exiting ANFDRREL_antactotr_actotrVlrent_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :ACTOTR_NETOVL:=NVL(:ACTOTR_VLRFAS,0) - NVL(:ACTOTR_VLRENT,0); END;
    //#endregion
    async ANFDRREL_antactotr_actotrVlrent_postTextItem() {
        console.log("Entering ANFDRREL_antactotr_actotrVlrent_postTextItem");
        // this.ANTACTOTR.ACTOTR_NETOVL = ACTOTR_VLRFAS == null ? 0 : ACTOTR_VLRFAS - ACTOTR_VLRENT == null ? 0 : ACTOTR_VLRENT;
        console.log("Exiting ANFDRREL_antactotr_actotrVlrent_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ACTOTR_ENTFIN IS NOT NULL THEN
    //  BEGIN
    //   SELECT ENTFIN_DESENT   
    //    INTO :DESENTIDAD3
    //    FROM ANTENTFIN
    //    WHERE ENTFIN_CODENT=:ACTOTR_ENTFIN;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA ('MENSAJE','ENTIDAD INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END; 
    // END IF;
    // END;
    //#endregion
    async ANFDRREL_antactotr_actotrEntfin_whenValidateItem() {
        console.log("Entering ANFDRREL_antactotr_actotrEntfin_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ACTOTR_ENTFIN != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("ACTOTR_ENTFIN", ACTOTR_ENTFIN);
        //     // call REST API
        //     const result1 = await Rest.post("/anfdrrel_antactotr/anfdrrel_antactotr_actotrentfin_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESENTIDAD3 = result1[0].get("DESENTIDAD3");
        //     if (result1 == null || result1.length == 0) {

        //         // ANFDRREL_LIB$ALERTA("MENSAJE", "ENTIDAD INEXISTENTE ...", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting ANFDRREL_antactotr_actotrEntfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_A2'); END;
    //#endregion
    async ANFDRREL_antdrxterA2_keyListval() {
        console.log("Entering ANFDRREL_antdrxterA2_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_A2");
        console.log("Exiting ANFDRREL_antdrxterA2_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMADR_SUMVAL
    //     INTO :TOTAL_PA2
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD_2
    //      AND SUMADR_SUMCOD='AF';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_PA2:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterA2_postQuery() {
        console.log("Entering ANFDRREL_antdrxterA2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_a2/anfdrrel_antdrxtera2_postquery_query1", payload1);
        // get values from result
        // TOTAL_PA2 = result1[0].get("TOTAL_PA2");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXTER_A2.TOTAL_PA2 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterA2_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_A2.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_A2 );
    // GO_ITEM('ANTDRXTER_A2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS8'); END;
    //#endregion
    async ANFDRREL_antdrxterA2_calculadoraA2_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterA2_calculadoraA2_keyNextItem");
        // this.ANTDRXTER_A2.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_A2);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_A2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS8");
        console.log("Exiting ANFDRREL_antdrxterA2_calculadoraA2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_A2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS8'); END;
    //#endregion
    async ANFDRREL_antdrxterA2_calculadoraA2_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterA2_calculadoraA2_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_A2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS8");
        console.log("Exiting ANFDRREL_antdrxterA2_calculadoraA2_keyHelp");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_2 IS NULL THEN
    // GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','SEGUNDO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterA2_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterA2_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_2 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "SEGUNDO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterA2_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFDRREL_toolbar_whenButtonPressed() {
        console.log("Entering ANFDRREL_toolbar_whenButtonPressed");
        // ANFDRREL_TOOLBAR_ACTIONS();
        console.log("Exiting ANFDRREL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFDRREL_toolbar_whenMouseLeave() {
        console.log("Entering ANFDRREL_toolbar_whenMouseLeave");
        // ANFDRREL_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFDRREL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFDRREL_toolbar_whenNewFormInstance() {
        console.log("Entering ANFDRREL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFDRREL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_A3'); END;
    //#endregion
    async ANFDRREL_antdrxterA3_keyListval() {
        console.log("Entering ANFDRREL_antdrxterA3_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_A3");
        console.log("Exiting ANFDRREL_antdrxterA3_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMADR_SUMVAL
    //     INTO :TOTAL_P_A2
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD_3
    //      AND SUMADR_SUMCOD='AF';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A2:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterA3_postQuery() {
        console.log("Entering ANFDRREL_antdrxterA3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_a3/anfdrrel_antdrxtera3_postquery_query1", payload1);
        // get values from result
        // TOTAL_P_A2 = result1[0].get("TOTAL_P_A2");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXTER_A3.TOTAL_P_A2 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterA3_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_3 IS NULL THEN
    // GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','TERCER PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterA3_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterA3_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_3 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCER PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterA3_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_A3.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_A3 );
    // GO_ITEM('ANTDRXTER_A3.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS9'); END;
    //#endregion
    async ANFDRREL_antdrxterA3_calculadoraA3_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterA3_calculadoraA3_keyNextItem");
        // this.ANTDRXTER_A3.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_A3);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_A3.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS9");
        console.log("Exiting ANFDRREL_antdrxterA3_calculadoraA3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_A3.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS9'); END;
    //#endregion
    async ANFDRREL_antdrxterA3_calculadoraA3_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterA3_calculadoraA3_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_A3.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS9");
        console.log("Exiting ANFDRREL_antdrxterA3_calculadoraA3_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_P'); END;
    //#endregion
    async ANFDRREL_antdrxterP_keyListval() {
        console.log("Entering ANFDRREL_antdrxterP_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_P");
        console.log("Exiting ANFDRREL_antdrxterP_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMADR_SUMVAL,SUMADR_SUMPAR
    //     INTO :TOTAL_P_A1,:TOTAL_P_PA1
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD_2
    //      AND SUMADR_SUMCOD='BG';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A1:=0;
    //     :TOTAL_P_PA1:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterP_postQuery() {
        console.log("Entering ANFDRREL_antdrxterP_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_p/anfdrrel_antdrxterp_postquery_query1", payload1);
        // get values from result
        // TOTAL_P_A1 = result1[0].get("TOTAL_P_A1");
        // TOTAL_P_PA1 = result1[0].get("TOTAL_P_PA1");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXTER_P.TOTAL_P_A1 = 0;
            // this.ANTDRXTER_P.TOTAL_P_PA1 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterP_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_2 IS NULL THEN
    // GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','SEGUNDO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterP_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterP_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_2 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "SEGUNDO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterP_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_P.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_P );
    // GO_ITEM('ANTDRXTER_P.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS5'); END;
    //#endregion
    async ANFDRREL_antdrxterP_calculadoraP_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterP_calculadoraP_keyNextItem");
        // this.ANTDRXTER_P.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_P);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_P.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        console.log("Exiting ANFDRREL_antdrxterP_calculadoraP_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_P.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS5'); END;
    //#endregion
    async ANFDRREL_antdrxterP_calculadoraP_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterP_calculadoraP_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_P.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        console.log("Exiting ANFDRREL_antdrxterP_calculadoraP_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_E2'); END;
    //#endregion
    async ANFDRREL_antdrxterE2_keyListval() {
        console.log("Entering ANFDRREL_antdrxterE2_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_E2");
        console.log("Exiting ANFDRREL_antdrxterE2_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT NVL(SUMADR_SUMVAL,0)-:CANON1
    //     INTO :TOTAL_P_PA4
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD_2
    //      AND SUMADR_SUMCOD='SL';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_PA4:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterE2_postQuery() {
        console.log("Entering ANFDRREL_antdrxterE2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_e2/anfdrrel_antdrxtere2_postquery_query1", payload1);
        // get values from result
        // TOTAL_P_PA4 = result1[0].get("TOTAL_P_PA4");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXTER_E2.TOTAL_P_PA4 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterE2_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_2 IS NULL THEN
    // GO_ITEM('ANTDRXTER_E.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','SEGUNDO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER_E.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterE2_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterE2_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_2 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER_E.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "SEGUNDO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER_E.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterE2_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_E2.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_E2 );
    // GO_ITEM('ANTDRXTER_E2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS14'); END;
    //#endregion
    async ANFDRREL_antdrxterE2_calculadoraE2_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterE2_calculadoraE2_keyNextItem");
        // this.ANTDRXTER_E2.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_E2);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_E2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS14");
        console.log("Exiting ANFDRREL_antdrxterE2_calculadoraE2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_E2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS14'); END;
    //#endregion
    async ANFDRREL_antdrxterE2_calculadoraE2_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterE2_calculadoraE2_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_E2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS14");
        console.log("Exiting ANFDRREL_antdrxterE2_calculadoraE2_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_E3'); END;
    //#endregion
    async ANFDRREL_antdrxterE3_keyListval() {
        console.log("Entering ANFDRREL_antdrxterE3_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_E3");
        console.log("Exiting ANFDRREL_antdrxterE3_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT NVL(SUMADR_SUMVAL,0)-:CANON1
    //     INTO :TOTAL_P1
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD_3
    //      AND SUMADR_SUMCOD='SL';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P1:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterE3_postQuery() {
        console.log("Entering ANFDRREL_antdrxterE3_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_e3/anfdrrel_antdrxtere3_postquery_query1", payload1);
        // get values from result
        // TOTAL_P1 = result1[0].get("TOTAL_P1");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXTER_E3.TOTAL_P1 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterE3_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_3 IS NULL THEN
    // GO_ITEM('ANTDRXTER_E.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','TERCERO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER_E.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterE3_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterE3_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_3 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER_E.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER_E.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterE3_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_E3.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_E3 );
    // GO_ITEM('ANTDRXTER_E3.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS15'); END;
    //#endregion
    async ANFDRREL_antdrxterE3_calculadoraE3_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterE3_calculadoraE3_keyNextItem");
        // this.ANTDRXTER_E3.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_E3);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_E3.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS15");
        console.log("Exiting ANFDRREL_antdrxterE3_calculadoraE3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_E3.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS15'); END;
    //#endregion
    async ANFDRREL_antdrxterE3_calculadoraE3_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterE3_calculadoraE3_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_E3.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS15");
        console.log("Exiting ANFDRREL_antdrxterE3_calculadoraE3_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_I2'); END;
    //#endregion
    async ANFDRREL_antdrxterI2_keyListval() {
        console.log("Entering ANFDRREL_antdrxterI2_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_I2");
        console.log("Exiting ANFDRREL_antdrxterI2_keyListval");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_2 IS NULL THEN
    // GO_ITEM('ANTDRXTER_I.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','SEGUNDO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER_I.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterI2_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterI2_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_2 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER_I.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "SEGUNDO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER_I.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterI2_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_I2.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_I2 );
    // GO_ITEM('ANTDRXTER_I2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS11'); END;
    //#endregion
    async ANFDRREL_antdrxterI2_calculadoraI2_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterI2_calculadoraI2_keyNextItem");
        // this.ANTDRXTER_I2.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_I2);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_I2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        console.log("Exiting ANFDRREL_antdrxterI2_calculadoraI2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_I2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS11'); END;
    //#endregion
    async ANFDRREL_antdrxterI2_calculadoraI2_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterI2_calculadoraI2_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_I2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS11");
        console.log("Exiting ANFDRREL_antdrxterI2_calculadoraI2_keyHelp");
    }

    //#region PLSQL
    // BEGIN DELETE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFDRREL_antactinm_keyDelrec() {
        console.log("Entering ANFDRREL_antactinm_keyDelrec");
        this.oracleFormsBuiltins.delete_record();
        console.log("Exiting ANFDRREL_antactinm_keyDelrec");
    }

    async ANFDRREL_antactinm_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN CREATE_RECORD;
    // COMMIT; END;
    //#endregion
    async ANFDRREL_antactinm_keyCrerec() {
        console.log("Entering ANFDRREL_antactinm_keyCrerec");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting ANFDRREL_antactinm_keyCrerec");
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
    async ANFDRREL_antactinm_whenNewBlockInstance() {
        console.log("Entering ANFDRREL_antactinm_whenNewBlockInstance");
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
        console.log("Exiting ANFDRREL_antactinm_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :DESNOMBRE1:=:DES_NITTER; END;
    //#endregion
    async ANFDRREL_antactinm_whenCreateRecord() {
        console.log("Entering ANFDRREL_antactinm_whenCreateRecord");
        this.ANTACTINM.DESNOMBRE1 = this.VARIABLE.DES_NITTER;
        console.log("Exiting ANFDRREL_antactinm_whenCreateRecord");
    }

    async ANFDRREL_antactinm_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // :DESNOMBRE1:=:DES_NITTER;
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE1
    //    FROM TER
    //    WHERE TERCOD=:ACTINM_CODNIT;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN 
    //  BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //    INTO :DESNOMBRE
    //    FROM TER
    //    WHERE TERCOD=:NITTER;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //    NULL;
    //    END;
    // END; 
    // --
    // BEGIN
    //  SELECT ENTFIN_DESENT   
    //    INTO :DESENTIDAD1
    //    FROM ANTENTFIN
    //    WHERE ENTFIN_CODENT=:ACTINM_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async ANFDRREL_antactinm_postQuery() {
        console.log("Entering ANFDRREL_antactinm_postQuery");
        console.log("Exiting ANFDRREL_antactinm_postQuery");
    }

    //#region PLSQL
    // BEGIN DOWN; END;
    //#endregion
    async ANFDRREL_antactinm_keyDown() {
        console.log("Entering ANFDRREL_antactinm_keyDown");
        this.oracleFormsBuiltins.down();
        console.log("Exiting ANFDRREL_antactinm_keyDown");
    }

    //#region PLSQL
    // BEGIN :ACTINM_NETOVL:=NVL(:ACTINM_VLRCOM,0)-NVL(:ACTINM_SALDOO,0); END;
    //#endregion
    async ANFDRREL_antactinm_actinmSaldoo_whenValidateItem() {
        console.log("Entering ANFDRREL_antactinm_actinmSaldoo_whenValidateItem");
        // this.ANTACTINM.ACTINM_NETOVL = ACTINM_VLRCOM == null ? 0 : ACTINM_VLRCOM - ACTINM_SALDOO == null ? 0 : ACTINM_SALDOO;
        console.log("Exiting ANFDRREL_antactinm_actinmSaldoo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :ACTINM_NETOVL:=NVL(:ACTINM_VLRCOM,0)-NVL(:ACTINM_SALDOO,0); END;
    //#endregion
    async ANFDRREL_antactinm_actinmSaldoo_postTextItem() {
        console.log("Entering ANFDRREL_antactinm_actinmSaldoo_postTextItem");
        // this.ANTACTINM.ACTINM_NETOVL = ACTINM_VLRCOM == null ? 0 : ACTINM_VLRCOM - ACTINM_SALDOO == null ? 0 : ACTINM_SALDOO;
        console.log("Exiting ANFDRREL_antactinm_actinmSaldoo_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ACTINM_ENTFIN IS NOT NULL THEN
    // BEGIN
    //  SELECT ENTFIN_DESENT   
    //    INTO :DESENTIDAD1
    //    FROM ANTENTFIN
    //    WHERE ENTFIN_CODENT=:ACTINM_ENTFIN;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //  LIB$ALERTA ('MENSAJE','ENTIDAD INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //  RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF;
    // END;
    //#endregion
    async ANFDRREL_antactinm_actinmEntfin_whenValidateItem() {
        console.log("Entering ANFDRREL_antactinm_actinmEntfin_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ACTINM_ENTFIN != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("ACTINM_ENTFIN", ACTINM_ENTFIN);
        //     // call REST API
        //     const result1 = await Rest.post("/anfdrrel_antactinm/anfdrrel_antactinm_actinmentfin_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESENTIDAD1 = result1[0].get("DESENTIDAD1");
        //     if (result1 == null || result1.length == 0) {

        //         // ANFDRREL_LIB$ALERTA("MENSAJE", "ENTIDAD INEXISTENTE ...", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        console.log("Exiting ANFDRREL_antactinm_actinmEntfin_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_I3'); END;
    //#endregion
    async ANFDRREL_antdrxterI3_keyListval() {
        console.log("Entering ANFDRREL_antdrxterI3_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_I3");
        console.log("Exiting ANFDRREL_antdrxterI3_keyListval");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_3 IS NULL THEN
    // GO_ITEM('ANTDRXTER_I.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','TERCERO PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER_I.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterI3_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterI3_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_3 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER_I.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER_I.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterI3_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_I3.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_I3 );
    // GO_ITEM('ANTDRXTER_I3.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS12'); END;
    //#endregion
    async ANFDRREL_antdrxterI3_calculadoraI3_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterI3_calculadoraI3_keyNextItem");
        // this.ANTDRXTER_I3.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_I3);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_I3.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        console.log("Exiting ANFDRREL_antdrxterI3_calculadoraI3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_I3.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS12'); END;
    //#endregion
    async ANFDRREL_antdrxterI3_calculadoraI3_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterI3_calculadoraI3_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_I3.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS12");
        console.log("Exiting ANFDRREL_antdrxterI3_calculadoraI3_keyHelp");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    // BEGIN
    //  IF :PERCOD_2 IS NOT NULL THEN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD_2
    //    FROM PER
    //    WHERE PERCOD=:PERCOD_2;
    //    PUP_VALIDA_FORMULARIO (:PERCOD_2,:V_FORMUL2);
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    //  BEGIN
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
    // 
    // END IF;
    // END;  
    //#endregion
    async ANFDRREL_variable_percod2_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_percod2_whenValidateItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD_2", this.VARIABLE.PERCOD_2);
            // call REST API
            const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_percod2_whenvalidateitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERCOD_2 = result1[0].get("DES_PERCOD_2");
            // ANFDRREL_PUP_VALIDA_FORMULARIO(PERCOD_2, V_FORMUL2);
            if (result1 == null || result1.length == 0) {

                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
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
                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO2)) {
                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 2 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFDRREL_variable_percod2_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  VPERIODO1 VARCHAR2(6);
    //  VPERIODO2 VARCHAR2(6);
    //  VPERIODO3 VARCHAR2(6);
    // BEGIN
    // IF :PERCOD_3 IS NOT NULL THEN
    //  BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD_3
    //    FROM PER
    //    WHERE PERCOD=:PERCOD_3;
    //    PUP_VALIDA_FORMULARIO (:PERCOD_3,:V_FORMUL3);
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    // BEGIN
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
    // 
    //  IF TO_NUMBER(VPERIODO1) >TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 1 ES MAYOR AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF TO_NUMBER(VPERIODO2) >TO_NUMBER(VPERIODO3) THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO 2 ES MAYOR AL PERIODO 3 ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;  
    // END IF;
    // END;  
    //#endregion
    async ANFDRREL_variable_percod3_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_percod3_whenValidateItem");
        let T_RESPUESTA: number = null;
        let VPERIODO1: string = null;
        let VPERIODO2: string = null;
        let VPERIODO3: string = null;
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
            // call REST API
            const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_percod3_whenvalidateitem_query1", payload1);
            // get values from result
            this.VARIABLE.DES_PERCOD_3 = result1[0].get("DES_PERCOD_3");
            // ANFDRREL_PUP_VALIDA_FORMULARIO(PERCOD_3, V_FORMUL3);
            if (result1 == null || result1.length == 0) {

                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
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
            if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_3, 1, 1) == "9") {
                VPERIODO3 = "19" + this.VARIABLE.PERCOD_3;
            }
            else if (PLSQLBuiltins.substr(this.VARIABLE.PERCOD_3, 1, 1) == "0") {
                VPERIODO3 = "20" + this.VARIABLE.PERCOD_3;
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) == PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO 1 ES IGUAL AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO2) == PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO 2 ES IGUAL AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO1) > PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO 1 ES MAYOR AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if (PLSQLBuiltins.to_number(VPERIODO2) > PLSQLBuiltins.to_number(VPERIODO3)) {
                // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO 2 ES MAYOR AL PERIODO 3 ...", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting ANFDRREL_variable_percod3_whenValidateItem");
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
    async ANFDRREL_variable_inmuebles_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_inmuebles_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("ANTACTINM");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.show_view("CANVAS18");
        }
        else {
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO ES NULO POR FAVOR DIGITARLO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFDRREL_variable_inmuebles_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN     
    //  GO_BLOCK('ANTDRXTER');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2');
    // END;
    //#endregion
    async ANFDRREL_variable_volverPasivo_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volverPasivo_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        console.log("Exiting ANFDRREL_variable_volverPasivo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    //  
    //  
    // BEGIN
    //  
    //  IF :VARIABLE.TIPO_DECLARA IS NULL THEN 
    //   LIB$DTNERFRMA('POR FAVOR SELECCIONAR EL TIPO DE DECLARANTE.');
    //  END IF;
    //  
    //   IF :VARIABLE.NITTER IS NULL OR :VARIABLE.PERCOD IS NULL THEN
    //      LIB$ALERTA('MENSAJE','TERCERO SIN SELECCIONAR O PERIODO SIN SELECCIONAR ...',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //       
    //       GO_BLOCK('ANTDRXTER');
    //      CLEAR_BLOCK;
    //      GO_BLOCK('ANTDRXREL');
    //      CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXREL_2');
    //      CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_P');
    //      CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_P2');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_A');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_A2');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_A3');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER');
    //       CLEAR_BLOCK;
    //       
    //       GO_BLOCK('ANTDRXTER_I');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_I2');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_I3');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_E');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_E2');
    //       CLEAR_BLOCK;
    //       GO_BLOCK('ANTDRXTER_E3');
    //       CLEAR_BLOCK;
    //       
    //       
    //       
    //       V_CONTADOR:=0;
    //       --PY 12765  
    //       IF :VARIABLE.TIPO_DECLARA IN ('01','02') THEN
    //        
    //        
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P2', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P2',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A2', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A2',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A3', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A3',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I2', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I2',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I3', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I3',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E2', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E2',"UPDATE_ALLOWED","PROPERTY_TRUE"); 
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E3', "INSERT_ALLOWED","PROPERTY_TRUE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E3',"UPDATE_ALLOWED","PROPERTY_TRUE"); 
    // 
    //        
    //        
    //         P_TIPO1;
    //       
    //       ELSE
    //        
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P2', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_P2',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A2', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A2',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A3', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_A3',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I2', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I2',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I3', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_I3',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E2', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E2',"UPDATE_ALLOWED","PROPERTY_FALSE"); 
    //       
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E3', "INSERT_ALLOWED","PROPERTY_FALSE"); 
    //       SET_BLOCK_PROPERTY('ANTDRXTER_E3',"UPDATE_ALLOWED","PROPERTY_FALSE"); 
    //  
    //        P_TIPO2;
    //        
    //       END IF; 
    //       
    //            
    //       UPDATE ENT SET ENT_DECLARA = :VARIABLE.TIPO_DECLARA  WHERE ENTCOD = :VARIABLE.NITTER;
    //       COMMIT;
    //       
    //       --PY 12765
    //         
    //  END IF;
    // 
    // 
    //     --2698
    //        :VARIABLE.V_DECLARANTE1 := F_DECLARACION (:VARIABLE.NITTER, :VARIABLE.PERCOD , :VARIABLE.V_FORMUL);
    //        :VARIABLE.V_DECLARANTE2 := F_DECLARACION (:VARIABLE.NITTER, :VARIABLE.PERCOD_2,:VARIABLE.V_FORMUL2);
    //        :VARIABLE.V_DECLARANTE3 := F_DECLARACION (:VARIABLE.NITTER, :VARIABLE.PERCOD_3,:VARIABLE.V_FORMUL3);
    //          
    //     --2698
    // 
    // 
    // END;
    //#endregion
    async ANFDRREL_variable_procesar_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_procesar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.TIPO_DECLARA == null)) {
            // ANFDRREL_LIB$DTNERFRMA("POR FAVOR SELECCIONAR EL TIPO DE DECLARANTE.");
        }
        if (((this.VARIABLE.NITTER == null) || (this.VARIABLE.PERCOD == null))) {
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO SIN SELECCIONAR O PERIODO SIN SELECCIONAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.go_block("ANTDRXTER");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXREL");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXREL_2");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_P");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_P2");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_A");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_A2");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_A3");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I2");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I3");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_E");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_E2");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_E3");
            this.oracleFormsBuiltins.clear_block();
            V_CONTADOR = 0;
            if (["01", "02"].indexOf(this.VARIABLE.TIPO_DECLARA) != -1) {
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P2", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P2", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A2", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A2", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A3", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A3", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I2", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I2", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I3", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I3", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E2", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E2", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E3", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E3", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                // ANFDRREL_P_TIPO1();
            }
            else {
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P2", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_P2", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A2", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A2", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A3", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_A3", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I2", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I2", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I3", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_I3", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E2", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E2", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E3", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("ANTDRXTER_E3", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                // ANFDRREL_P_TIPO2();
            }
            // construct payload
            let payload1 = new Map();
            // payload1.TIPO_DECLARA = : TIPO_DECLARA;
            // payload1.NITTER = : NITTER;
            // call REST API
            const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_procesar_whenmouseclick_query1", payload1);
        }
        // this.VARIABLE.V_DECLARANTE1 = F_DECLARACION(VARIABLE.NITTER, VARIABLE.PERCOD, VARIABLE.V_FORMUL);
        // this.VARIABLE.V_DECLARANTE2 = F_DECLARACION(VARIABLE.NITTER, VARIABLE.PERCOD_2, VARIABLE.V_FORMUL2);
        // this.VARIABLE.V_DECLARANTE3 = F_DECLARACION(VARIABLE.NITTER, VARIABLE.PERCOD_3, VARIABLE.V_FORMUL3);
        console.log("Exiting ANFDRREL_variable_procesar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    //  GO_BLOCK('ANTBALXTER_8');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS3_1');
    // END;
    //#endregion
    async ANFDRREL_variable_volver31_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volver31_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_8");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS3_1");
        console.log("Exiting ANFDRREL_variable_volver31_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //    V_CONTADOR:=0;
    //    PUP_SUMBALANCES(:NITTER,:PERCOD);
    //    COMMIT;
    //    IF :PERCOD_2 IS NOT NULL THEN
    //    PUP_SUMBALANCES(:NITTER,:PERCOD_2);
    //    COMMIT;
    //    END IF;
    //    IF :PERCOD_3 IS NOT NULL THEN
    //    PUP_SUMBALANCES(:NITTER,:PERCOD_3);
    //    COMMIT;
    //    END IF;
    //   
    //   GO_BLOCK('ANTDRXTER');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTDRXREL');
    //  EXECUTE_QUERY;
    //  
    //   GO_BLOCK('ANTDRXREL_2');
    //  EXECUTE_QUERY; 
    //   
    //   GO_BLOCK('ANTDRXTER_P');
    //   EXECUTE_QUERY;
    //   
    //   GO_BLOCK('ANTDRXTER_P2');
    //    EXECUTE_QUERY;
    //    
    //  GO_BLOCK('ANTDRXTER_A');
    //  EXECUTE_QUERY;
    //         
    //   GO_BLOCK('ANTDRXTER_A2');
    //  EXECUTE_QUERY; 
    //   
    //   GO_BLOCK('ANTDRXTER_A3');
    //  EXECUTE_QUERY;
    //   
    //   GO_BLOCK('ANTACTIVTN');
    //  EXECUTE_QUERY; 
    //  
    //   GO_BLOCK('ANTDRXTER');
    // 
    // END;
    //#endregion
    async ANFDRREL_variable_actualizaSuma_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_actualizaSuma_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        V_CONTADOR = 0;
        // ANFDRREL_PUP_SUMBALANCES(NITTER, this.VARIABLE.PERCOD);
        if ((this.VARIABLE.PERCOD_2 != null)) {
            // ANFDRREL_PUP_SUMBALANCES(NITTER, this.VARIABLE.PERCOD_2);
        }
        if ((this.VARIABLE.PERCOD_3 != null)) {
            // ANFDRREL_PUP_SUMBALANCES(NITTER, this.VARIABLE.PERCOD_3);
        }
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXREL");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXREL_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_P");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_P2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_A");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_A2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_A3");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTACTIVTN");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        console.log("Exiting ANFDRREL_variable_actualizaSuma_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.VEHICULOS'); END;
    //#endregion
    async ANFDRREL_variable_volverveh_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volverveh_whenMouseClick");
        this.oracleFormsBuiltins.go_item("VARIABLE.VEHICULOS");
        console.log("Exiting ANFDRREL_variable_volverveh_whenMouseClick");
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
    async ANFDRREL_variable_siguiente21_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_siguiente21_whenMouseClick");
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
        console.log("Exiting ANFDRREL_variable_siguiente21_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    //  GO_BLOCK('ANTBALXTER_6');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS3');
    // END;
    //#endregion
    async ANFDRREL_variable_volver3_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volver3_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_6");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS3");
        console.log("Exiting ANFDRREL_variable_volver3_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.OTROSACT');
    // HIDE_VIEW('CANVAS19'); END;
    //#endregion
    async ANFDRREL_variable_volverotr_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volverotr_whenMouseClick");
        this.oracleFormsBuiltins.go_item("VARIABLE.OTROSACT");
        this.oracleFormsBuiltins.hide_view("CANVAS19");
        console.log("Exiting ANFDRREL_variable_volverotr_whenMouseClick");
    }

    //#region PLSQL
    // MESSAGE('ESTA SEGURO DE ACTUALIZAR EL NUMERO DEL FORMULARIO');
    // MESSAGE('ESTA SEGURO DE ACTUALIZAR EL NUMERO DEL FORMULARIO');
    // DECLARE
    // V_FORMUL  VARCHAR2(20);
    // V_FORMUL2  VARCHAR2(20);
    // V_FORMUL3  VARCHAR2(20);  
    // BEGIN
    // 
    //  PUP_VALIDA_FORMULARIO (:PERCOD,V_FORMUL);    -- VERIFICA SI TIENE NUMERO DE FORMULARIO 
    //   PUP_VALIDA_FORMULARIO (:PERCOD_2,V_FORMUL2); -- VERIFICA SI TIENE NUMERO DE FORMULARIO
    //   PUP_VALIDA_FORMULARIO (:PERCOD_3,V_FORMUL3); -- VERIFICA SI TIENE NUMERO DE FORMULARIO  
    //  
    //   IF :V_FORMUL IS NOT NULL AND :V_FORMUL <> NVL(V_FORMUL,1) THEN
    //    PUP_FORMULARIO_REPETIDO(:V_FORMUL); -- VALIDA LOS NUMEROS DE FORMULARIO QUE YA ESTAN EN LA TABLA.    
    //     UPDATE ANTDRXTER  
    //     SET DRXTER_FORMUL = :V_FORMUL
    //     --2698
    //     ,DRXTER_VDECLA = :VARIABLE.V_DECLARANTE1
    //     --2698
    //     WHERE DRXTER_CODTER= :VARIABLE.NITTER
    //     AND DRXTER_CODPER= :VARIABLE.PERCOD;
    //     COMMIT;
    //   END IF;  
    //   IF :V_FORMUL2 IS NOT NULL AND :V_FORMUL2 <> NVL(V_FORMUL2,1) THEN
    //    PUP_FORMULARIO_REPETIDO(:V_FORMUL2); -- VALIDA LOS NUMEROS DE FORMULARIO QUE YA ESTAN EN LA TABLA.
    //     UPDATE ANTDRXTER  
    //     SET DRXTER_FORMUL = :V_FORMUL2
    //     --2698
    //     ,DRXTER_VDECLA = :VARIABLE.V_DECLARANTE2
    //     --2698
    //     WHERE DRXTER_CODTER= :VARIABLE.NITTER
    //     AND DRXTER_CODPER= :VARIABLE.PERCOD_2;  
    //     COMMIT;
    //   END IF;
    //   IF :V_FORMUL3 IS NOT NULL AND :V_FORMUL3 <> NVL(V_FORMUL3,1) THEN
    //    PUP_FORMULARIO_REPETIDO(:V_FORMUL3); -- VALIDA LOS NUMEROS DE FORMULARIO QUE YA ESTAN EN LA TABLA.
    //     UPDATE ANTDRXTER  
    //     SET DRXTER_FORMUL = :V_FORMUL3
    //     --2698
    //     ,DRXTER_VDECLA = :VARIABLE.V_DECLARANTE3
    //     --2698
    //     WHERE DRXTER_CODTER= :VARIABLE.NITTER
    //     AND DRXTER_CODPER= :VARIABLE.PERCOD_3; 
    //     COMMIT;
    //   END IF;
    // END;
    //#endregion
    async ANFDRREL_variable_actFormul_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_actFormul_whenMouseClick");
        let V_FORMUL: string = null;
        let V_FORMUL2: string = null;
        let V_FORMUL3: string = null;
        // ANFDRREL_PUP_VALIDA_FORMULARIO(PERCOD, V_FORMUL);
        // ANFDRREL_PUP_VALIDA_FORMULARIO(PERCOD_2, V_FORMUL2);
        // ANFDRREL_PUP_VALIDA_FORMULARIO(PERCOD_3, V_FORMUL3);
        if (((V_FORMUL != null) && V_FORMUL != V_FORMUL == null ? 1 : V_FORMUL)) {
            // ANFDRREL_PUP_FORMULARIO_REPETIDO(V_FORMUL);
            // construct payload
            let payload1 = new Map();
            // payload1.V_FORMUL = : V_FORMUL;
            // payload1.V_DECLARANTE1 = : V_DECLARANTE1;
            // payload1.NITTER = : NITTER;
            // payload1.PERCOD = : PERCOD;
            // call REST API
            const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_actformul_whenmouseclick_query1", payload1);
        }
        if (((V_FORMUL2 != null) && V_FORMUL2 != V_FORMUL2 == null ? 1 : V_FORMUL2)) {
            // ANFDRREL_PUP_FORMULARIO_REPETIDO(V_FORMUL2);
            // construct payload
            let payload3 = new Map();
            // payload3.V_FORMUL2 = : V_FORMUL2;
            // payload3.V_DECLARANTE2 = : V_DECLARANTE2;
            // payload3.NITTER = : NITTER;
            // payload3.PERCOD_2 = : PERCOD_2;
            // call REST API
            const result3 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_actformul_whenmouseclick_query3", payload3);
        }
        if (((V_FORMUL3 != null) && V_FORMUL3 != V_FORMUL3 == null ? 1 : V_FORMUL3)) {
            // ANFDRREL_PUP_FORMULARIO_REPETIDO(V_FORMUL3);
            // construct payload
            let payload5 = new Map();
            // payload5.V_FORMUL3 = : V_FORMUL3;
            // payload5.V_DECLARANTE3 = : V_DECLARANTE3;
            // payload5.NITTER = : NITTER;
            // payload5.PERCOD_3 = : PERCOD_3;
            // call REST API
            const result5 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_actformul_whenmouseclick_query5", payload5);
        }
        console.log("Exiting ANFDRREL_variable_actFormul_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.NIT:=:NITTER;
    //    :GLOBAL.PER1:=:PERCOD;
    //    :GLOBAL.PER2:=:PERCOD_2;
    //    :GLOBAL.PER3:=:PERCOD_3;
    // 
    //    CALL('ANFDRPJ');
    //    ERASE('GLOBAL.NIT');
    //    ERASE('GLOBAL.PER1');
    //    ERASE('GLOBAL.PER2');
    //    ERASE('GLOBAL.PER3'); END;
    //#endregion
    async ANFDRREL_variable_btnOtros_whenButtonPressed() {
        console.log("Entering ANFDRREL_variable_btnOtros_whenButtonPressed");
        // this.GLOBAL.NIT = this.VARIABLE.NITTER;
        // this.GLOBAL.PER1 = this.VARIABLE.PERCOD;
        // this.GLOBAL.PER2 = this.VARIABLE.PERCOD_2;
        // this.GLOBAL.PER3 = this.VARIABLE.PERCOD_3;
        // ANFDRREL_CALL("ANFDRPJ");
        this.oracleFormsBuiltins.erase("GLOBAL.NIT");
        this.oracleFormsBuiltins.erase("GLOBAL.PER1");
        this.oracleFormsBuiltins.erase("GLOBAL.PER2");
        this.oracleFormsBuiltins.erase("GLOBAL.PER3");
        console.log("Exiting ANFDRREL_variable_btnOtros_whenButtonPressed");
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
    async ANFDRREL_variable_siguiente22_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_siguiente22_whenMouseClick");
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
        console.log("Exiting ANFDRREL_variable_siguiente22_whenMouseClick");
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
    // IF TIPTER <> 'N' THEN
    //   LIB$ALERTA ('MENSAJE','TERCERO DIFERENTE DE PERSONA NATURAL ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // 
    //  
    //   BEGIN
    //  SELECT ENT_DECLARA
    //  INTO :VARIABLE.TIPO_DECLARA
    //  FROM ENT 
    //  WHERE ENTCOD = :VARIABLE.NITTER;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN :VARIABLE.TIPO_DECLARA :=  NULL;
    //  END;
    // 
    // END;  
    //#endregion
    async ANFDRREL_variable_nitter_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_nitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPTER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_nitter_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_NITTER = result1[0].get("DES_NITTER");
        TIPTER = result1[0].get("TIPTER");
        if (result1 == null || result1.length == 0) {

            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (TIPTER != "N") {
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO DIFERENTE DE PERSONA NATURAL ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        // call REST API
        const result2 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_nitter_whenvalidateitem_query2", payload2);
        // get values from result
        this.VARIABLE.TIPO_DECLARA = result2[0].get("VARIABLE.TIPO_DECLARA");
        if (result2 == null || result2.length == 0) {

            this.VARIABLE.TIPO_DECLARA = null;
        }

        console.log("Exiting ANFDRREL_variable_nitter_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN       
    // IF :VARIABLE.NITTER IS NULL OR :VARIABLE.PERCOD IS NULL THEN
    //      LIB$ALERTA('MENSAJE','TERCERO SIN SELECCIONAR O PERIODO SIN SELECCIONAR ...',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //  
    //   IF :VARIABLE.TIPO_DECLARA IN ('01','02') THEN
    //  
    //     GO_BLOCK('ANTDRXTER_I');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('ANTDRXTER_I2');
    //     EXECUTE_QUERY;
    //      GO_BLOCK('ANTDRXTER_I3');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('ANTDRXTER_E');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('ANTDRXTER_E2');
    //     EXECUTE_QUERY;
    //      GO_BLOCK('ANTDRXTER_E3');
    //     EXECUTE_QUERY;
    //     
    //   END IF; 
    //   
    //   GO_BLOCK('ANTDRXTER_I');
    //   
    // END IF;
    // END;
    //#endregion
    async ANFDRREL_variable_siguiente_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_siguiente_whenMouseClick");
        let T_RESPUESTA: number = null;
        if (((this.VARIABLE.NITTER == null) || (this.VARIABLE.PERCOD == null))) {
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO SIN SELECCIONAR O PERIODO SIN SELECCIONAR ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            if (["01", "02"].indexOf(this.VARIABLE.TIPO_DECLARA) != -1) {
                this.oracleFormsBuiltins.go_block("ANTDRXTER_I");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("ANTDRXTER_I2");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("ANTDRXTER_I3");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("ANTDRXTER_E");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("ANTDRXTER_E2");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("ANTDRXTER_E3");
                this.oracleFormsBuiltins.execute_query();
            }
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I");
        }
        console.log("Exiting ANFDRREL_variable_siguiente_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN       
    //  GO_BLOCK('ANTBALXTER_4');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2_2');
    // END;
    //#endregion
    async ANFDRREL_variable_volvel22_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volvel22_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_4");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2_2");
        console.log("Exiting ANFDRREL_variable_volvel22_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //  
    //   
    //  
    //  IF :VARIABLE.TIPO_DECLARA IN ('01','02') THEN
    //  
    //      V_CONTADOR:=0;
    //      PUP_SUMBALANCES(:NITTER,:PERCOD);
    //      COMMIT;
    //      IF :PERCOD_2 IS NOT NULL THEN
    //      PUP_SUMBALANCES(:NITTER,:PERCOD_2);
    //      COMMIT;
    //      END IF;
    //      IF :PERCOD_3 IS NOT NULL THEN
    //      PUP_SUMBALANCES(:NITTER,:PERCOD_3);
    //      COMMIT;
    //      END IF;
    //    GO_BLOCK('ANTDRXTER_I');
    //    EXECUTE_QUERY;
    //    GO_BLOCK('ANTDRXTER_I2');
    //    EXECUTE_QUERY;
    //    GO_BLOCK('ANTDRXTER_I3');
    //    EXECUTE_QUERY; 
    //    GO_BLOCK('ANTDRXTER_E');
    //    EXECUTE_QUERY;
    //    GO_BLOCK('ANTDRXTER_E2');
    //    EXECUTE_QUERY;
    //    GO_BLOCK('ANTDRXTER_E3');
    //    EXECUTE_QUERY;
    //    GO_BLOCK('ANTDRXTER_I');
    // 
    //  END IF;
    // END;
    //#endregion
    async ANFDRREL_variable_sumatorias2_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_sumatorias2_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if (["01", "02"].indexOf(this.VARIABLE.TIPO_DECLARA) != -1) {
            V_CONTADOR = 0;
            // ANFDRREL_PUP_SUMBALANCES(NITTER, this.VARIABLE.PERCOD);
            if ((this.VARIABLE.PERCOD_2 != null)) {
                // ANFDRREL_PUP_SUMBALANCES(NITTER, this.VARIABLE.PERCOD_2);
            }
            if ((this.VARIABLE.PERCOD_3 != null)) {
                // ANFDRREL_PUP_SUMBALANCES(NITTER, this.VARIABLE.PERCOD_3);
            }
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I2");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I3");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_E");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_E2");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_E3");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("ANTDRXTER_I");
        }
        console.log("Exiting ANFDRREL_variable_sumatorias2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    // SELECT REPLACE (:VARIABLE.V_FORMUL3,' ','')
    // INTO :VARIABLE.V_FORMUL3
    // FROM DUAL;
    // END;
    //#endregion
    async ANFDRREL_variable_vFormul3_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_vFormul3_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("V_FORMUL3", this.VARIABLE.V_FORMUL3);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_vformul3_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_FORMUL3 = result1[0].get("VARIABLE.V_FORMUL3");
        console.log("Exiting ANFDRREL_variable_vFormul3_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // 
    // SELECT REPLACE (:VARIABLE.V_FORMUL2,' ','')
    // INTO :VARIABLE.V_FORMUL2
    // FROM DUAL;
    // 
    // 
    // 
    // END;
    //#endregion
    async ANFDRREL_variable_vFormul2_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_vFormul2_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("V_FORMUL2", this.VARIABLE.V_FORMUL2);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_vformul2_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_FORMUL2 = result1[0].get("VARIABLE.V_FORMUL2");
        console.log("Exiting ANFDRREL_variable_vFormul2_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //    V_CONTADOR:=0;
    //   -- PUP_PARTICIPACION (:PERCOD);COMMIT;
    //    
    //    PUP_PARTICIPACION (:PERCOD_2);COMMIT;
    //    PUP_PARTICIPACION (:PERCOD_3);COMMIT;
    //         GO_BLOCK('ANTDRXTER');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTDRXREL');
    //  EXECUTE_QUERY;
    //         GO_BLOCK('ANTDRXREL_2');
    //  EXECUTE_QUERY; 
    //         GO_BLOCK('ANTDRXTER_P');
    //      EXECUTE_QUERY;
    //        GO_BLOCK('ANTDRXTER_P2');
    //        EXECUTE_QUERY;
    //         GO_BLOCK('ANTDRXTER');
    // 
    // END;
    //#endregion
    async ANFDRREL_variable_actualizaPar_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_actualizaPar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        V_CONTADOR = 0;
        // ANFDRREL_PUP_PARTICIPACION(PERCOD_2);
        // ANFDRREL_PUP_PARTICIPACION(PERCOD_3);
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXREL");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXREL_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_P");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_P2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        console.log("Exiting ANFDRREL_variable_actualizaPar_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT PERDES
    //    INTO :DES_PERCOD
    //    FROM PER
    //    WHERE PERCOD=:PERCOD;
    //    PUP_VALIDA_FORMULARIO (:PERCOD,:V_FORMUL); -- VERIFICA SI TIENE NUMERO DE FORMULARIO
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA ('MENSAJE','PERIODO INEXISTENTE ...',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    // END;  
    //#endregion
    async ANFDRREL_variable_percod_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_percod_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_percod_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.DES_PERCOD = result1[0].get("DES_PERCOD");
        // ANFDRREL_PUP_VALIDA_FORMULARIO(PERCOD, V_FORMUL);
        if (result1 == null || result1.length == 0) {

            // ANFDRREL_LIB$ALERTA("MENSAJE", "PERIODO INEXISTENTE ...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting ANFDRREL_variable_percod_whenValidateItem");
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
    async ANFDRREL_variable_otrosact_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_otrosact_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("ANTACTOTR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO ES NULO POR FAVOR DIGITARLO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFDRREL_variable_otrosact_whenMouseClick");
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
    async ANFDRREL_variable_vehiculos_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_vehiculos_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.NITTER != null)) {
            this.oracleFormsBuiltins.go_block("ANTACTVEH");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCERO ES NULO POR FAVOR DIGITARLO .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting ANFDRREL_variable_vehiculos_whenMouseClick");
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
    //     RUN_PRODUCT(REPORTS,'ANTDRPNA',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID, NULL);  
    //     REDISPLAY;
    // END; 
    //#endregion
    async ANFDRREL_variable_impDecrta_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_impDecrta_whenMouseClick");
        let COMANDO: string = null;
        let PL_ID: number = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        this.oracleFormsBuiltins.add_parameter(PL_ID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        // this.oracleFormsBuiltins.run_product(REPORTS, "ANTDRPNA", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting ANFDRREL_variable_impDecrta_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.INMUEBLES');
    // HIDE_VIEW('CANVAS18'); END;
    //#endregion
    async ANFDRREL_variable_volverinm_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volverinm_whenMouseClick");
        this.oracleFormsBuiltins.go_item("VARIABLE.INMUEBLES");
        this.oracleFormsBuiltins.hide_view("CANVAS18");
        console.log("Exiting ANFDRREL_variable_volverinm_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    // SELECT REPLACE (:VARIABLE.V_FORMUL,' ','')
    // INTO :VARIABLE.V_FORMUL
    // FROM DUAL;
    // END;
    //#endregion
    async ANFDRREL_variable_vFormul_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_vFormul_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("V_FORMUL", this.VARIABLE.V_FORMUL);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_vformul_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_FORMUL = result1[0].get("VARIABLE.V_FORMUL");
        console.log("Exiting ANFDRREL_variable_vFormul_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // SELECT REPLACE (:VARIABLE.V_FORMUL3,' ','')
    // INTO :VARIABLE.V_FORMUL3
    // FROM DUAL;
    // END;
    //#endregion
    async ANFDRREL_variable_vDeclarante3_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_vDeclarante3_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("V_FORMUL3", this.VARIABLE.V_FORMUL3);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_vdeclarante3_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_FORMUL3 = result1[0].get("VARIABLE.V_FORMUL3");
        console.log("Exiting ANFDRREL_variable_vDeclarante3_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    // SELECT REPLACE (:VARIABLE.V_FORMUL2,' ','')
    // INTO :VARIABLE.V_FORMUL2
    // FROM DUAL;
    // END;
    //#endregion
    async ANFDRREL_variable_vDeclarante2_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_vDeclarante2_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("V_FORMUL2", this.VARIABLE.V_FORMUL2);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_vdeclarante2_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_FORMUL2 = result1[0].get("VARIABLE.V_FORMUL2");
        console.log("Exiting ANFDRREL_variable_vDeclarante2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN       
    // 
    //  GO_BLOCK('ANTBALXTER_1');
    //  EXECUTE_QUERY;
    //  HIDE_VIEW('CANVAS2_1');
    // END;
    //#endregion
    async ANFDRREL_variable_volver21_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_volver21_whenMouseClick");
        this.oracleFormsBuiltins.go_block("ANTBALXTER_1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2_1");
        console.log("Exiting ANFDRREL_variable_volver21_whenMouseClick");
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
    async ANFDRREL_variable_btnSiguiente_whenButtonPressed() {
        console.log("Entering ANFDRREL_variable_btnSiguiente_whenButtonPressed");
        let V_PROGRAMA: string = null;
        this.oracleFormsBuiltins.commit_form();
        // V_PROGRAMA = F_SIGUIENTE_F;
        // ANFDRREL_PUP_LLAMAR_SIGUIENTE(V_PROGRAMA);
        console.log("Exiting ANFDRREL_variable_btnSiguiente_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // SELECT REPLACE (:VARIABLE.V_FORMUL,' ','')
    // INTO :VARIABLE.V_FORMUL
    // FROM DUAL;
    // END;
    //#endregion
    async ANFDRREL_variable_vDeclarante1_whenValidateItem() {
        console.log("Entering ANFDRREL_variable_vDeclarante1_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("V_FORMUL", this.VARIABLE.V_FORMUL);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_variable/anfdrrel_variable_vdeclarante1_whenvalidateitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_FORMUL = result1[0].get("VARIABLE.V_FORMUL");
        console.log("Exiting ANFDRREL_variable_vDeclarante1_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTADOR  NUMBER(8);
    // BEGIN
    //    V_CONTADOR:=0;
    //    --LIB$ALERTA('MENSAJE','INICIO PROCESO ....',NULL,NULL,NULL,T_RESPUESTA);
    //    PBD_COL_RELACIONDECREN(:NITTER ,:PERCOD ,:PERCOD_2);COMMIT;
    //    PBD_COL_RELACIONDECREN(:NITTER ,:PERCOD_2 ,:PERCOD_3);COMMIT;
    //    ---LIB$ALERTA('MENSAJE','FIN PROCESO ....',NULL,NULL,NULL,T_RESPUESTA);
    //         GO_BLOCK('ANTDRXTER');
    //  EXECUTE_QUERY;
    //  GO_BLOCK('ANTDRXREL');
    //  EXECUTE_QUERY;
    //         GO_BLOCK('ANTDRXREL_2');
    //  EXECUTE_QUERY; 
    //         GO_BLOCK('ANTDRXTER_P');
    //      EXECUTE_QUERY;
    //        GO_BLOCK('ANTDRXTER_P2');
    //        EXECUTE_QUERY;
    //         GO_BLOCK('ANTDRXTER');
    // 
    // END;
    //#endregion
    async ANFDRREL_variable_actualizaRel_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_actualizaRel_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        V_CONTADOR = 0;
        // ANFDRREL_PBD_COL_RELACIONDECREN(NITTER, PERCOD, this.VARIABLE.PERCOD_2);
        // ANFDRREL_PBD_COL_RELACIONDECREN(NITTER, PERCOD_2, this.VARIABLE.PERCOD_3);
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXREL");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXREL_2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_P");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER_P2");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("ANTDRXTER");
        console.log("Exiting ANFDRREL_variable_actualizaRel_whenMouseClick");
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
    async ANFDRREL_variable_siguiente3_whenMouseClick() {
        console.log("Entering ANFDRREL_variable_siguiente3_whenMouseClick");
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
        console.log("Exiting ANFDRREL_variable_siguiente3_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_I'); END;
    //#endregion
    async ANFDRREL_antdrxterI_keyListval() {
        console.log("Entering ANFDRREL_antdrxterI_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_I");
        console.log("Exiting ANFDRREL_antdrxterI_keyListval");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCDR_DESCTA 
    //   INTO   :ANTDRXTER_I.DES_CUENTA
    //    FROM ANTDEFCTDR
    //   WHERE DEFCDR_CODCTA =:ANTDRXTER_I.DRXTER_CODCTA
    //     AND DEFCDR_GRUCTA ='IM'
    //     ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async ANFDRREL_antdrxterI_postQuery() {
        console.log("Entering ANFDRREL_antdrxterI_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("DRXTER_CODCTA", this.ANTDRXTER_I.DRXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_i/anfdrrel_antdrxteri_postquery_query1", payload1);
        // get values from result
        this.ANTDRXTER_I.DES_CUENTA = result1[0].get("ANTDRXTER_I.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting ANFDRREL_antdrxterI_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_I.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_I );
    // GO_ITEM('ANTDRXTER_I.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS10'); END;
    //#endregion
    async ANFDRREL_antdrxterI_calculadoraI_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterI_calculadoraI_keyNextItem");
        // this.ANTDRXTER_I.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_I);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_I.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS10");
        console.log("Exiting ANFDRREL_antdrxterI_calculadoraI_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_I.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS10'); END;
    //#endregion
    async ANFDRREL_antdrxterI_calculadoraI_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterI_calculadoraI_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_I.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS10");
        console.log("Exiting ANFDRREL_antdrxterI_calculadoraI_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_E'); END;
    //#endregion
    async ANFDRREL_antdrxterE_keyListval() {
        console.log("Entering ANFDRREL_antdrxterE_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_E");
        console.log("Exiting ANFDRREL_antdrxterE_keyListval");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCDR_DESCTA 
    //   INTO   :ANTDRXTER_E.DES_CUENTA
    //    FROM ANTDEFCTDR
    //   WHERE DEFCDR_CODCTA =:ANTDRXTER_E.DRXTER_CODCTA
    //     AND DEFCDR_GRUCTA ='EM'
    //     ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT NVL(SUMADR_SUMVAL,0)-:CANON1
    //     INTO :TOTAL_P_A4
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD
    //      AND SUMADR_SUMCOD='SL';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A4:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterE_postQuery() {
        console.log("Entering ANFDRREL_antdrxterE_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("DRXTER_CODCTA", this.ANTDRXTER_E.DRXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_e/anfdrrel_antdrxtere_postquery_query1", payload1);
        // get values from result
        this.ANTDRXTER_E.DES_CUENTA = result1[0].get("ANTDRXTER_E.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfdrrel_antdrxter_e/anfdrrel_antdrxtere_postquery_query2", payload2);
        // get values from result
        // TOTAL_P_A4 = result2[0].get("TOTAL_P_A4");
        if (result2 == null || result2.length == 0) {

            // this.ANTDRXTER_E.TOTAL_P_A4 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterE_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_E.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_E );
    // GO_ITEM('ANTDRXTER_E.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS13'); END;
    //#endregion
    async ANFDRREL_antdrxterE_calculadoraE_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterE_calculadoraE_keyNextItem");
        // this.ANTDRXTER_E.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_E);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_E.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS13");
        console.log("Exiting ANFDRREL_antdrxterE_calculadoraE_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_E.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS13'); END;
    //#endregion
    async ANFDRREL_antdrxterE_calculadoraE_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterE_calculadoraE_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_E.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS13");
        console.log("Exiting ANFDRREL_antdrxterE_calculadoraE_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_P2'); END;
    //#endregion
    async ANFDRREL_antdrxterP2_keyListval() {
        console.log("Entering ANFDRREL_antdrxterP2_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_P2");
        console.log("Exiting ANFDRREL_antdrxterP2_keyListval");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SUMADR_SUMVAL,SUMADR_SUMPAR
    //     INTO :TOTAL_P_A3,:TOTAL_P_PA3
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD_3
    //      AND SUMADR_SUMCOD='BG';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_P_A3:=0;
    //     :TOTAL_P_PA3:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterP2_postQuery() {
        console.log("Entering ANFDRREL_antdrxterP2_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("NITTER", this.VARIABLE.NITTER);
        payload1.set("PERCOD_3", this.VARIABLE.PERCOD_3);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_p2/anfdrrel_antdrxterp2_postquery_query1", payload1);
        // get values from result
        // TOTAL_P_A3 = result1[0].get("TOTAL_P_A3");
        // TOTAL_P_PA3 = result1[0].get("TOTAL_P_PA3");
        if (result1 == null || result1.length == 0) {

            // this.ANTDRXTER_P2.TOTAL_P_A3 = 0;
            // this.ANTDRXTER_P2.TOTAL_P_PA3 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterP2_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :PERCOD_3 IS NULL THEN
    // GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    //  LIB$ALERTA('MENSAJE','TERCER PERIODO SIN SELECCIONAR ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //   GO_ITEM('ANTDRXTER.DRXTER_VALORC'); 
    // END IF;
    // END;
    // 
    //  
    //#endregion
    async ANFDRREL_antdrxterP2_drxterValorc_whenNewItemInstance() {
        console.log("Entering ANFDRREL_antdrxterP2_drxterValorc_whenNewItemInstance");
        let T_RESPUESTA: number = null;
        if ((this.VARIABLE.PERCOD_3 == null)) {
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
            // ANFDRREL_LIB$ALERTA("MENSAJE", "TERCER PERIODO SIN SELECCIONAR ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
            this.oracleFormsBuiltins.go_item("ANTDRXTER.DRXTER_VALORC");
        }
        console.log("Exiting ANFDRREL_antdrxterP2_drxterValorc_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_P2.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_P2 );
    // GO_ITEM('ANTDRXTER_P2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS6'); END;
    //#endregion
    async ANFDRREL_antdrxterP2_calculadoraP2_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterP2_calculadoraP2_keyNextItem");
        // this.ANTDRXTER_P2.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_P2);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_P2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS6");
        console.log("Exiting ANFDRREL_antdrxterP2_calculadoraP2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_P2.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS6'); END;
    //#endregion
    async ANFDRREL_antdrxterP2_calculadoraP2_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterP2_calculadoraP2_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_P2.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS6");
        console.log("Exiting ANFDRREL_antdrxterP2_calculadoraP2_keyHelp");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CALCULADORA_A'); END;
    //#endregion
    async ANFDRREL_antdrxterA_keyListval() {
        console.log("Entering ANFDRREL_antdrxterA_keyListval");
        this.oracleFormsBuiltins.go_item("CALCULADORA_A");
        console.log("Exiting ANFDRREL_antdrxterA_keyListval");
    }

    //#region PLSQL
    // BEGIN
    // SELECT   DEFCDR_DESCTA 
    //   INTO   :ANTDRXTER_A.DES_CUENTA
    //    FROM ANTDEFCTDR
    //   WHERE DEFCDR_CODCTA =:ANTDRXTER_A.DRXTER_CODCTA
    //     AND DEFCDR_GRUCTA ='AF'
    //     ;
    //  EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    // BEGIN
    //   SELECT SUMADR_SUMVAL
    //     INTO :TOTAL_A2
    //     FROM ANTSUMADR
    //    WHERE SUMADR_CODTER=:NITTER
    //      AND SUMADR_CODPER=:PERCOD
    //      AND SUMADR_SUMCOD='AF';
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     :TOTAL_A2:=0;
    // END;
    //#endregion
    async ANFDRREL_antdrxterA_postQuery() {
        console.log("Entering ANFDRREL_antdrxterA_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("DRXTER_CODCTA", this.ANTDRXTER_A.DRXTER_CODCTA);
        // call REST API
        const result1 = await Rest.post("/anfdrrel_antdrxter_a/anfdrrel_antdrxtera_postquery_query1", payload1);
        // get values from result
        this.ANTDRXTER_A.DES_CUENTA = result1[0].get("ANTDRXTER_A.DES_CUENTA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("NITTER", this.VARIABLE.NITTER);
        payload2.set("PERCOD", this.VARIABLE.PERCOD);
        // call REST API
        const result2 = await Rest.post("/anfdrrel_antdrxter_a/anfdrrel_antdrxtera_postquery_query2", payload2);
        // get values from result
        // TOTAL_A2 = result2[0].get("TOTAL_A2");
        if (result2 == null || result2.length == 0) {

            // this.ANTDRXTER_A.TOTAL_A2 = 0;
        }

        console.log("Exiting ANFDRREL_antdrxterA_postQuery");
    }

    //#region PLSQL
    // BEGIN :ANTDRXTER_A.DRXTER_VALORC := FBD_COL_CALCULADORA(:CALCULADORA_A );
    // GO_ITEM('ANTDRXTER_A.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS7'); END;
    //#endregion
    async ANFDRREL_antdrxterA_calculadoraA_keyNextItem() {
        console.log("Entering ANFDRREL_antdrxterA_calculadoraA_keyNextItem");
        // this.ANTDRXTER_A.DRXTER_VALORC = FBD_COL_CALCULADORA(CALCULADORA_A);
        this.oracleFormsBuiltins.go_item("ANTDRXTER_A.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS7");
        console.log("Exiting ANFDRREL_antdrxterA_calculadoraA_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ANTDRXTER_A.DRXTER_VALORC');
    // HIDE_VIEW('CANVAS7'); END;
    //#endregion
    async ANFDRREL_antdrxterA_calculadoraA_keyHelp() {
        console.log("Entering ANFDRREL_antdrxterA_calculadoraA_keyHelp");
        this.oracleFormsBuiltins.go_item("ANTDRXTER_A.DRXTER_VALORC");
        this.oracleFormsBuiltins.hide_view("CANVAS7");
        console.log("Exiting ANFDRREL_antdrxterA_calculadoraA_keyHelp");
    }

}

