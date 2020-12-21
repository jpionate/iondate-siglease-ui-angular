import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFCIALES business logic
import {
    SETCOMCIA,
    PROCESO,
    TOOLBAR,
    BASE
} from "./COFCIALES_models";



// class COFCIALES
@Component({
    selector: 'app-cofciales',
    templateUrl: './cofciales.component.html',
})
export class CofcialesComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETCOMCIA: SETCOMCIA = new SETCOMCIA();
    public PROCESO: PROCESO = new PROCESO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_onError() {
        console.log("Entering COFCIALES_onError");
        console.log("Exiting COFCIALES_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_whenMouseDoubleclick() {
        console.log("Entering COFCIALES_whenMouseDoubleclick");
        console.log("Exiting COFCIALES_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_onMessage() {
        console.log("Entering COFCIALES_onMessage");
        console.log("Exiting COFCIALES_onMessage");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // IF NOT LIB$PBLARLSTARG('SETCOMCIA.COM_TIPCOMER','GRTIPCOM') THEN
    //  LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA SETCOMCIA.COM_TIPCOMER');
    // END IF; END;
    //#endregion
    async COFCIALES_preForm() {
        console.log("Entering COFCIALES_preForm");
        // COFCIALES_PANTALLA();
        // if ((!LIB$PBLARLSTARG("SETCOMCIA.COM_TIPCOMER", "GRTIPCOM"))) {
        //     COFCIALES_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA SETCOMCIA.COM_TIPCOMER");
        // }
        console.log("Exiting COFCIALES_preForm");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   V_FIRST_BLOCK    VARCHAR2(30);
    // 
    // BEGIN  
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
    //     ---------------------------------------------------------------------
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
    // --------------------------------------------------------------------
    // 
    //   V_FIRST_BLOCK := GET_FORM_PROPERTY(GET_APPLICATION_PROPERTY(CURRENT_FORM_NAME), FIRST_NAVIGATION_BLOCK);
    // 
    //   IF GET_BLOCK_PROPERTY(V_FIRST_BLOCK, BASE_TABLE) IS NOT NULL THEN
    //      EXECUTE_QUERY;
    //   END IF;
    // 
    // END;
    //#endregion
    async COFCIALES_whenNewFormInstance() {
        console.log("Entering COFCIALES_whenNewFormInstance");
        let V_FIRST_BLOCK: string = null;
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
                const result1 = await Rest.post("/cofciales/cofciales_whennewforminstance_query1", payload1);
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

        // V_FIRST_BLOCK = this.oracleFormsBuiltins.get_form_property(this.oracleFormsBuiltins.get_application_property(CURRENT_FORM_NAME), FIRST_NAVIGATION_BLOCK);
        // if ((this.oracleFormsBuiltins.get_block_property(V_FIRST_BLOCK, BASE_TABLE) != null)) {
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting COFCIALES_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('PAGE_2'); END;
    //#endregion
    async COFCIALES_setcomcia_whenNewBlockInstance() {
        console.log("Entering COFCIALES_setcomcia_whenNewBlockInstance");
        this.oracleFormsBuiltins.show_view("PAGE_2");
        console.log("Exiting COFCIALES_setcomcia_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: ESTCRE: ESTADÍSTICAS DE CRÉDITO
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 13 DE OCTUBRE DE 2005
    //   --
    // BEGIN
    //  IF :SETCOMCIA.COM_AGENCIA IS NOT NULL AND :SETCOMCIA.COM_OFC IS NOT NULL THEN -- ESTCRE
    //   BEGIN
    //       SELECT AGENOM
    //       INTO :SETCOMCIA.AGENCIA
    //      FROM OPS$COLOCA.AGE
    //      WHERE AGECOD= :SETCOMCIA.COM_AGENCIA
    //      AND   AGEOFI = :SETCOMCIA.COM_OFC; -- ESTCRE
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     :SETCOMCIA.AGENCIA := NULL;      
    //     END; 
    //   END IF;
    //   IF :COM_USOPER IS NOT NULL THEN -- ESTCRE
    //     BEGIN
    //       SELECT USU_NOMBRE
    //       INTO   :NOM_OFDESEMBOLSO
    //       FROM   SGUSUARIOS
    //       WHERE  USU_CODIGO=:COM_USOPER;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         :NOM_OFDESEMBOLSO := NULL;
    //     END;
    //   END IF;
    //   IF :COM_PLA IS NOT NULL THEN -- ESTCRE
    //     BEGIN
    //       SELECT PLAZAS_DESCRI
    //       INTO   :SETCOMCIA.DES_PLA
    //       FROM   CMTPLAZAS
    //       WHERE  PLAZAS_CODIGO = :SETCOMCIA.COM_PLA
    //       ;
    //       EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         NULL;
    //       WHEN TOO_MANY_ROWS THEN
    //         NULL;
    //       WHEN OTHERS THEN
    //         LIB$DTNERFRMA(SQLERRM);
    //     END;
    //   END IF;
    // END;
    // 
    // --PY 20662
    // BEGIN
    //  SELECT ADMCAN_DESCAN
    //  INTO :SETCOMCIA.COM_CODCAN_DES
    //  FROM COTADMCAN
    //  WHERE ADMCAN_CODCAN = :SETCOMCIA.COM_CODCAN;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :SETCOMCIA.COM_CODCAN_DES := NULL;
    // END;
    // --PY 20662; END;
    //#endregion
    async COFCIALES_setcomcia_postQuery() {
        console.log("Entering COFCIALES_setcomcia_postQuery");
        if (((this.SETCOMCIA.COM_AGENCIA != null) && (this.SETCOMCIA.COM_OFC != null))) {
            // construct payload
            let payload1 = new Map();
            payload1.set("COM_AGENCIA", this.SETCOMCIA.COM_AGENCIA);
            payload1.set("COM_OFC", this.SETCOMCIA.COM_OFC);
            // call REST API
            const result1 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_postquery_query1", payload1);
            // get values from result
            this.SETCOMCIA.AGENCIA = result1[0].get("SETCOMCIA.AGENCIA");
            if (result1 == null || result1.length == 0) {

                this.SETCOMCIA.AGENCIA = null;
            }

        }
        // if ((COM_USOPER != null)) {
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.set("COM_USOPER", COM_USOPER);
        //     // call REST API
        //     const result2 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_postquery_query2", payload2);
        //     // get values from result
        //     NOM_OFDESEMBOLSO = result2[0].get("NOM_OFDESEMBOLSO");
        //     if (result2 == null || result2.length == 0) {

        //         this.SETCOMCIA.NOM_OFDESEMBOLSO = null;
        //     }

        // }
        // if ((COM_PLA != null)) {
        //     let result3 = new Map();
        //     try {

        //         // construct payload
        //         let payload3 = new Map();
        //         payload3.set("COM_PLA", SETCOMCIA.COM_PLA);
        //         // call REST API
        //         const result3 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_postquery_query3", payload3);
        //         // get values from result
        //         SETCOMCIA.DES_PLA = result3[0].get("SETCOMCIA.DES_PLA");
        //         if (result3 == null || result3.length == 0) {

        //         }

        //     } catch (ex) {

        //         COFCIALES_LIB$DTNERFRMA(SQLERRM);
        //     }

        // }
        // construct payload
        let payload4 = new Map();
        payload4.set("COM_CODCAN", this.SETCOMCIA.COM_CODCAN);
        // call REST API
        const result4 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_postquery_query4", payload4);
        // get values from result
        this.SETCOMCIA.COM_CODCAN_DES = result4[0].get("SETCOMCIA.COM_CODCAN_DES");
        if (result4 == null || result4.length == 0) {

            this.SETCOMCIA.COM_CODCAN_DES = null;
        }

        console.log("Exiting COFCIALES_setcomcia_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :SETCOMCIA.COM_CODIGO IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(COM_CODIGO,0))),000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   SETCOMCIA;
    //      :SETCOMCIA.COM_CODIGO := LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO AL COMERCIAL');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async COFCIALES_setcomcia_preInsert() {
        console.log("Entering COFCIALES_setcomcia_preInsert");
        let V_NUEVO_COD: number = null;
        if ((this.SETCOMCIA.COM_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.SETCOMCIA.COM_CODIGO = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 3, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO AL COMERCIAL");
            }

        }
        console.log("Exiting COFCIALES_setcomcia_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  W_EXISTE      NUMBER; 
    // BEGIN
    //     SELECT COUNT(9) 
    //       INTO W_EXISTE
    //     FROM SETCOMCIA
    //     WHERE COM_NIT=:SETCOMCIA.COM_NIT;
    // 
    //     IF W_EXISTE > 0 THEN
    //      LIB$ALERTA('MENSAJE','EL NIT DEL COMERCIAL YA EXISTE...VERIFIQUE....',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE; 
    //     END IF;
    // END;
    //#endregion
    async COFCIALES_setcomcia_comNit_whenValidateItem() {
        console.log("Entering COFCIALES_setcomcia_comNit_whenValidateItem");
        let T_RESPUESTA: number = null;
        let W_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_NIT", this.SETCOMCIA.COM_NIT);
        // call REST API
        const result1 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_comnit_whenvalidateitem_query1", payload1);
        // get values from result
        W_EXISTE = result1[0].get("W_EXISTE");
        if (W_EXISTE > 0) {
            // COFCIALES_LIB$ALERTA("MENSAJE", "EL NIT DEL COMERCIAL YA EXISTE...VERIFIQUE....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting COFCIALES_setcomcia_comNit_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_EXISTE    VARCHAR2(15);
    //  
    // BEGIN 
    // 
    // 
    //   BEGIN
    //     SELECT USU_CODIGO
    //       INTO V_EXISTE
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=:SETCOMCIA.COM_USORAC;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //        V_EXISTE:=NULL;
    //   END;
    //   
    //   
    //   IF V_EXISTE IS NULL  THEN
    //      LIB$ALERTA('MENSAJE','EL CODIGO NO CORRESPONDE AL ASIGNADO AL USUARIO O NO ESTA CREADO EN LEASING BOLÍVAR.
    //                 SI ES COMERCIAL DAVIVIENDA DIGITE LA CÉDULA Y OMITA ESTE MENSAJE',NULL,NULL,NULL,T_RESPUESTA);
    //     -- RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   
    // END;
    // NULL;
    //#endregion
    async COFCIALES_setcomcia_comUsorac_whenValidateItem() {
        console.log("Entering COFCIALES_setcomcia_comUsorac_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("COM_USORAC", this.SETCOMCIA.COM_USORAC);
        // call REST API
        const result1 = await Rest.post("/cofciales_setcomcia/cofciales_setcomcia_comusorac_whenvalidateitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = null;
        }

        if ((V_EXISTE == null)) {
            // COFCIALES_LIB$ALERTA("MENSAJE", "EL CODIGO NO CORRESPONDE AL ASIGNADO AL USUARIO O NO ESTA CREADO EN LEASING BOLÍVAR.
            //                     SI ES COMERCIAL DAVIVIENDA DIGITE LA CÉDULA Y OMITA ESTE MENSAJE", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting COFCIALES_setcomcia_comUsorac_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETCOMCIA.COM_PLA IS NULL THEN
    //  LIB$DTNERFRMA('ENTRE LA PLAZA COMERCIAL');
    // END IF; END;
    //#endregion
    async COFCIALES_setcomcia_comPla_whenValidateItem() {
        console.log("Entering COFCIALES_setcomcia_comPla_whenValidateItem");
        if ((this.SETCOMCIA.COM_PLA == null)) {
            // COFCIALES_LIB$DTNERFRMA("ENTRE LA PLAZA COMERCIAL");
        }
        console.log("Exiting COFCIALES_setcomcia_comPla_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_toolbar_whenButtonPressed() {
        console.log("Entering COFCIALES_toolbar_whenButtonPressed");
        console.log("Exiting COFCIALES_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_toolbar_whenNewFormInstance() {
        console.log("Entering COFCIALES_toolbar_whenNewFormInstance");
        console.log("Exiting COFCIALES_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_toolbar_first_whenButtonPressed() {
        console.log("Entering COFCIALES_toolbar_first_whenButtonPressed");
        console.log("Exiting COFCIALES_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCIALES_toolbar_lastr_whenButtonPressed() {
        console.log("Entering COFCIALES_toolbar_lastr_whenButtonPressed");
        console.log("Exiting COFCIALES_toolbar_lastr_whenButtonPressed");
    }

}

