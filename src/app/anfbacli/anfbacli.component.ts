import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFBACLI business logic
import {
    BPAR,
    PROCESO,
    TOOLBAR,
    PLANO,
    BBOTONES,
    BASE,
    BBACLI,
    COTBASCLI
} from "./ANFBACLI_models";



// class ANFBACLI
@Component({
    selector: 'app-anfbacli',
    templateUrl: './anfbacli.component.html',
})
export class AnfbacliComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([
        ['P_OFICINA', null],
        ['PDIRPLA', null],
        ['PARICUE', null],
        ['PUSO', null],
        ['PSALMIN', null],
        ['PCONETOT', null],
        ['PEDITOR', null],
        ['PARBACLI', null],
        ['PEXARBACLI', null],
        ['PITEMANT', null],
        ['PMINF', null],
        ['PAGNOS', null],
        ['PMAXF', null],
        ['PREGANT', null],
        ['PFECCOR', null],
        ['PUSUARI', null],
        ['PBLOACT', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public BPAR: BPAR = new BPAR();
    public PROCESO: PROCESO = new PROCESO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public PLANO: PLANO = new PLANO();
    public BBOTONES: BBOTONES = new BBOTONES();
    public BASE: BASE = new BASE();
    public BBACLI: BBACLI = new BBACLI();
    public COTBASCLI: COTBASCLI = new COTBASCLI();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_onError() {
        console.log("Entering ANFBACLI_onError");
        console.log("Exiting ANFBACLI_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_whenMouseDoubleclick() {
        console.log("Entering ANFBACLI_whenMouseDoubleclick");
        console.log("Exiting ANFBACLI_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_onMessage() {
        console.log("Entering ANFBACLI_onMessage");
        console.log("Exiting ANFBACLI_onMessage");
    }

    //#region PLSQL
    // BEGIN CLEAR_BLOCK(NO_VALIDATE); END;
    //#endregion
    async ANFBACLI_keyClrblk() {
        console.log("Entering ANFBACLI_keyClrblk");
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        console.log("Exiting ANFBACLI_keyClrblk");
    }

    //#region PLSQL
    // DECLARE
    //  VMINF DATE;
    //  VMAXF DATE;
    // BEGIN
    //  OPS$COLOCA.PQBD_COL_CURSOR.PMMFAPE(VMINF, VMAXF);
    //   :this.PARAMETER.get("PMINF") := NVL(VMINF,SYSDATE);
    //   :this.PARAMETER.get("PMAXF") := NVL(VMAXF,SYSDATE);
    //   :this.PARAMETER.get("PAGNOS") := NVL(TO_NUMBER(TO_CHAR(:this.PARAMETER.get("PMAXF"),'YYYY')),0)
    //                      - NVL(TO_NUMBER(TO_CHAR(:this.PARAMETER.get("PMINF"),'YYYY')),0) + 1;
    // END;
    // --
    // BEGIN
    //   PANTALLA;
    //   PINICIAR;
    // END;
    //#endregion
    async ANFBACLI_preForm() {
        console.log("Entering ANFBACLI_preForm");
        let VMINF: Date = null;
        let VMAXF: Date = null;
        // ANFBACLI_OPS$COLOCA.PQBD_COL_CURSOR.PMMFAPE(VMINF, VMAXF);
        // this.PARAMETER.get("PMINF") = VMINF == null ? PLSQLBuiltins.sysdate() : VMINF;
        // this.PARAMETER.get("PMAXF") = VMAXF == null ? PLSQLBuiltins.sysdate() : VMAXF;
        // this.PARAMETER.get("PAGNOS") = PLSQLBuiltins.to_number(this.PARAMETER.get("PMAXF").toString()) == null ? 0 : PLSQLBuiltins.to_number(this.PARAMETER.get("PMAXF").toString()) - PLSQLBuiltins.to_number(this.PARAMETER.get("PMINF").toString()) == null ? 0 : PLSQLBuiltins.to_number(this.PARAMETER.get("PMINF").toString()) + 1;
        // ANFBACLI_PANTALLA();
        // ANFBACLI_PINICIAR();
        console.log("Exiting ANFBACLI_preForm");
    }

    //#region PLSQL
    // BEGIN --
    //   -- MODIFICACIÓN: FOINFE: FORMATO INTERNO DE FECHA
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 7 DE JUNIO DE 2006
    //   --
    // DECLARE
    //  
    //  -- DEVUELVE EL USUARIO CONECTADO
    //  CURSOR C_NOM_USUARIO IS
    //  (SELECT OSUSER
    //    FROM OPS$AUDI.AUVSESION
    //      WHERE USERNAME=USER
    //     AND ROWNUM=1);
    //     
    //   -- CONSTANTES
    //   CPROCES   CONSTANT OPS$SEGUI.SETPARAMETRO.PARAME_PROCES%TYPE := 'ANFBACLI';
    //   -- VARIABLES
    //   NOM_USUARIO  OPS$AUDI.AUVSESION.OSUSER%TYPE; 
    //  CADENA VARCHAR2(1000);
    //   VFORMATO OPS$SEGUI.SETPARAMETRO.PARAME_FORMAT%TYPE;
    //   VVALOR   OPS$SEGUI.SETPARAMETRO.PARAME_VALOR%TYPE;
    //   VPROCES  OPS$SEGUI.SETPARAMETRO.PARAME_PROCES%TYPE;
    //   VESQDIR   VARCHAR2(1);
    //   VDIRPLAG  VARCHAR2(256);
    //   VDIRPLAU  VARCHAR2(256);
    //   VDIR      VARCHAR2(256);
    //   VEXTAR    VARCHAR2(30);
    //   VBOTON    NUMBER;
    // BEGIN  
    //  
    //  OPEN C_NOM_USUARIO;
    //  FETCH C_NOM_USUARIO INTO NOM_USUARIO;
    //  CLOSE C_NOM_USUARIO;
    //  
    //  CADENA := '\\COMPARTIDO\'||NOM_USUARIO||'\';
    //  
    //   -- OBTENCIÓN DE LA RUTA  Y NOMBRE DEL ARCHIVO
    //   BEGIN
    //     OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'ESQDIR'
    //                                  ,VFORMATO  ,VVALOR);
    //     IF VVALOR = 'U' THEN
    //       OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAU'
    //                                    ,VFORMATO  ,VVALOR);
    //       --VDIR := '\\'||LIB$FUSO||VVALOR;
    //       BEGIN
    //         SELECT OSUSER
    //           INTO :this.PARAMETER.get("PUSO")
    //           FROM OPS$AUDI.AUVSESION
    //          WHERE USERNAME=USER
    //           AND ROWNUM=1;
    //       EXCEPTION WHEN OTHERS THEN 
    //        NULL; 
    //      END;
    // 
    //     :this.PARAMETER.get("PDIRPLA") := '\\'||:this.PARAMETER.get("PUSO")||VVALOR;
    //     :this.PARAMETER.get("PARICUE") := '\\'||:this.PARAMETER.get("PUSO")||:this.PARAMETER.get("PDIRPLA")||:this.PARAMETER.get("PARICUE");
    //       
    //     ELSE
    //       OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAG'
    //                                    ,VFORMATO  ,VVALOR);
    //       :this.PARAMETER.get("PDIRPLA") := VVALOR;
    //     END IF;
    //     OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES ,'F'       ,'EXARBACLI'
    //                                  ,VFORMATO  ,VEXTAR);
    //     OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES ,'F'       ,'ARBACLI'
    //                                  ,VFORMATO  ,VVALOR);
    //     :this.PARAMETER.get("PARBACLI") := CADENA||VVALOR;
    //     :this.PARAMETER.get("PEXARBACLI") := VEXTAR;
    //   END;
    //   --
    //   BEGIN
    //     OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'EDIT'
    //                                  ,VFORMATO  ,VVALOR);
    //   END;
    //   :this.PARAMETER.get("PEDITOR") := VVALOR;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA(SQLERRM);
    // END;
    // -- FOINFE
    // SET_APPLICATION_PROPERTY(BUILTIN_DATE_FORMAT, 'DD-MM-YYYY');
    // SET_APPLICATION_PROPERTY(PLSQL_DATE_FORMAT, 'DD-MM-YYYY');
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
    //        FROM SEGURIDAD.SGCOMPAN 
    //       WHERE COMPAN_CODCOM=:this.PARAMETER.get("P_OFICINA");
    //    EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       V_IMAGEN:='LOGO_LEASFORM.GIF';
    //    END;   
    // 
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.IMLGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.IMLGO'); 
    //  END IF;
    // END;
    // ----------------------------------------------------------
    // 
    // GO_BLOCK ('COTBASCLI');
    // 
    // EXECUTE_QUERY; END;
    //#endregion
    async ANFBACLI_whenNewFormInstance() {
        console.log("Entering ANFBACLI_whenNewFormInstance");
        {

            let CPROCES: string = 'ANFBACLI';
            let NOM_USUARIO: null = null;
            let CADENA: string = null;
            let VFORMATO: null = null;
            let VVALOR: null = null;
            let VPROCES: null = null;
            let VESQDIR: string = null;
            let VDIRPLAG: string = null;
            let VDIRPLAU: string = null;
            let VDIR: string = null;
            let VEXTAR: string = null;
            let VBOTON: number = null;
            let result4 = new Map();
            try {

                CADENA = "\\COMPARTIDO\\" + NOM_USUARIO + "\\"
                // ANFBACLI_OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "ESQDIR", VFORMATO, VVALOR);
                if (VVALOR == "U") {
                    // ANFBACLI_OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAU", VFORMATO, VVALOR);
                    let result4 = new Map();
                    try {

                        // construct payload
                        let payload4 = new Map();
                        payload4.set("PUSO", this.PARAMETER.get("PUSO"));
                        // call REST API
                        const result4 = await Rest.post("/anfbacli/anfbacli_whennewforminstance_query4", payload4);
                        // get values from result
                        // this.PARAMETER.get("PUSO") = result4[0].get("this.PARAMETER.get("PUSO")");
                    } catch (ex) {

                    }

                    // this.PARAMETER.get("PDIRPLA") = "\\" + this.PARAMETER.get("PUSO") + VVALOR;
                    // this.PARAMETER.get("PARICUE") = "\\" + this.PARAMETER.get("PUSO") + this.PARAMETER.get("PDIRPLA") + this.PARAMETER.get("PARICUE");
                }
                else {
                    // ANFBACLI_OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAG", VFORMATO, VVALOR);
                    // this.PARAMETER.get("PDIRPLA") = VVALOR;
                }
                // ANFBACLI_OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES, "F", "EXARBACLI", VFORMATO, VEXTAR);
                // ANFBACLI_OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES, "F", "ARBACLI", VFORMATO, VVALOR);
                // this.PARAMETER.get("PARBACLI") = CADENA + VVALOR;
                // this.PARAMETER.get("PEXARBACLI") = VEXTAR;
                // ANFBACLI_OPS$SEGUI.PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "EDIT", VFORMATO, VVALOR);
                // this.PARAMETER.get("PEDITOR") = VVALOR;
            } catch (ex) {

                // ANFBACLI_LIB$DTNERFRMA(SQLERRM);
            }

        }

        this.oracleFormsBuiltins.set_application_property("BUILTIN_DATE_FORMAT", "DD-MM-YYYY");
        this.oracleFormsBuiltins.set_application_property("PLSQL_DATE_FORMAT", "DD-MM-YYYY");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload5 = new Map();
                payload5.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result5 = await Rest.post("/anfbacli/anfbacli_whennewforminstance_query5", payload5);
                // get values from result
                V_IMAGEN = result5[0].get("V_IMAGEN");
                if (result5 == null || result5.length == 0) {

                    V_IMAGEN = "LOGO_LEASFORM.GIF";
                }

                this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.IMLGO");
            }
            else {
                this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.IMLGO");
            }
        }

        this.oracleFormsBuiltins.go_block("COTBASCLI");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFBACLI_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //   IF ERROR_CODE = 40200 THEN
    //    LIB$DTNERFRMA('DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM');
    //   ELSE
    //    LIB$DTNERFRMA(ERROR_TYPE||'-'||TO_CHAR(ERROR_CODE)||': '||ERROR_TEXT);
    //  END IF;
    // END;
    //#endregion
    async ANFBACLI_bpar_onError() {
        console.log("Entering ANFBACLI_bpar_onError");
        let VBOTON: number = null;
        if (this.oracleFormsBuiltins.error_code() == 40200) {
            // ANFBACLI_LIB$DTNERFRMA("DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM");
        }
        else {
            // ANFBACLI_LIB$DTNERFRMA(this.oracleFormsBuiltins.error_type + "-" + ERROR_CODE.toString() + ": " + this.oracleFormsBuiltins.error_text);
        }
        console.log("Exiting ANFBACLI_bpar_onError");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PFECCOR") := LAST_DAY(TO_DATE(:BPAR.MES||:BPAR.AGNO,'MMYYYY'));
    // :this.PARAMETER.get("PSALMIN") := :BPAR.SALMIN; END;
    //#endregion
    async ANFBACLI_bpar_whenValidateRecord() {
        console.log("Entering ANFBACLI_bpar_whenValidateRecord");
        // this.PARAMETER.get("PFECCOR") = LAST_DAY(new Date(BPAR.MES + BPAR.AGNO));
        // this.PARAMETER.get("PSALMIN") = this.BPAR.SALMIN;
        console.log("Exiting ANFBACLI_bpar_whenValidateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  VSALMIN OPS$COLOCA.CONF.CONFMIR3%TYPE;
    // BEGIN
    //   IF GET_GROUP_ROW_COUNT('GRMESES') <> 0 THEN
    //     :BPAR.MES := TO_CHAR(ADD_MONTHS(SYSDATE,-1),'MM');
    //   END IF;
    //   --
    //   IF GET_GROUP_ROW_COUNT('GRAGNOS') <> 0 THEN
    //     :BPAR.AGNO := TO_CHAR(ADD_MONTHS(SYSDATE,-1),'YYYY');
    //   END IF;
    //   :this.PARAMETER.get("PFECCOR") := LAST_DAY(TO_DATE(:BPAR.MES||:BPAR.AGNO,'MMYYYY'));
    //   BEGIN
    //     SELECT CONFMIR3
    //     INTO   VSALMIN
    //     FROM   OPS$COLOCA.CONF
    //     WHERE  CONFKEY = '00000000'
    //     ;
    //     :BPAR.SALMIN := VSALMIN;
    //     EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //         LIB$DTNERFRMA('NO SE ENCONTRÓ EL SALARIO MÍNIMO EN LA TABLA OPS$COLOCA.CONF');
    //   END;
    // END;
    //#endregion
    async ANFBACLI_bpar_whenCreateRecord() {
        console.log("Entering ANFBACLI_bpar_whenCreateRecord");
        let VSALMIN: null = null;
        if (this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0) {
            this.BPAR.MES = PLSQLBuiltins.add_months(PLSQLBuiltins.sysdate(), 1).toString();
        }
        if (this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0) {
            this.BPAR.AGNO = PLSQLBuiltins.add_months(PLSQLBuiltins.sysdate(), 1).toString();
        }
        this.PARAMETER.set("PFECCOR", PLSQLBuiltins.last_day(new Date(this.BPAR.MES + this.BPAR.AGNO)));
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/anfbacli_bpar/anfbacli_bpar_whencreaterecord_query1", payload1);
        // get values from result
        VSALMIN = result1[0].get("VSALMIN");
        this.BPAR.SALMIN = VSALMIN;
        if (result1 == null || result1.length == 0) {

            // ANFBACLI_LIB$DTNERFRMA("NO SE ENCONTRÓ EL SALARIO MÍNIMO EN LA TABLA OPS$COLOCA.CONF");
        }

        console.log("Exiting ANFBACLI_bpar_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PITEMANT") := :SYSTEM.CURSOR_ITEM;
    // :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.CURSOR_RECORD); END;
    //#endregion
    async ANFBACLI_bpar_postBlock() {
        console.log("Entering ANFBACLI_bpar_postBlock");
        // this.PARAMETER.get("PITEMANT") = this.SYSTEM.CURSOR_ITEM;
        // this.PARAMETER.get("PREGANT") = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD"));
        console.log("Exiting ANFBACLI_bpar_postBlock");
    }

    //#region PLSQL
    // BEGIN IF :BPAR.SALMIN IS NULL THEN
    //  LIB$DTNERFRMA('ENTRE EL SALARIO MÍNIMO');
    // END IF; END;
    //#endregion
    async ANFBACLI_bpar_salmin_whenValidateItem() {
        console.log("Entering ANFBACLI_bpar_salmin_whenValidateItem");
        if ((this.BPAR.SALMIN == null)) {
            // ANFBACLI_LIB$DTNERFRMA("ENTRE EL SALARIO MÍNIMO");
        }
        console.log("Exiting ANFBACLI_bpar_salmin_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // V_EQUIPO VARCHAR2(100);
    // BEGIN
    // -----------------------------
    //   BEGIN
    //    SELECT OSUSER
    //     INTO V_EQUIPO
    //     FROM OPS$AUDI.AUVSESION
    //       WHERE USERNAME=USER
    //      AND ROWNUM=1;
    //    EXCEPTION
    //     WHEN OTHERS THEN NULL; 
    //   END;
    //      
    // ----------------------------- 
    //   --:PLANO.RUTA :='\\'||V_EQUIPO||'\COMPARTIDO\POLIZAS.TXT';
    //   :PLANO.RUTA := :this.PARAMETER.get("PARBACLI")||TO_CHAR(:this.PARAMETER.get("PFECCOR"),'YYYYMMDD')||'.CSV';
    //   GO_BLOCK('PLANO');
    //   LIB$AJUSTAVENTANA('WIN_PLANO',0,0);
    //   :TXT_BLOQUE := 'COTBASCLI';
    // END;
    //#endregion
    async ANFBACLI_proceso_plano_whenButtonPressed() {
        console.log("Entering ANFBACLI_proceso_plano_whenButtonPressed");
        let V_EQUIPO: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/anfbacli_proceso/anfbacli_proceso_plano_whenbuttonpressed_query1", payload1);
            // get values from result
            V_EQUIPO = result1[0].get("V_EQUIPO");
        } catch (ex) {

        }

        this.PLANO.RUTA = this.PARAMETER.get("PARBACLI") || PLSQLBuiltins.to_char(this.PARAMETER.get("PFECCOR"), 'YYYYMMDD') || '.CSV';
        this.oracleFormsBuiltins.go_block("PLANO");
        // ANFBACLI_LIB$AJUSTAVENTANA("WIN_PLANO", 0, 0);
        // this.PROCESO.TXT_BLOQUE = "COTBASCLI";
        console.log("Exiting ANFBACLI_proceso_plano_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_toolbar_whenButtonPressed() {
        console.log("Entering ANFBACLI_toolbar_whenButtonPressed");
        console.log("Exiting ANFBACLI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_toolbar_whenMouseLeave() {
        console.log("Entering ANFBACLI_toolbar_whenMouseLeave");
        console.log("Exiting ANFBACLI_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_toolbar_whenNewFormInstance() {
        console.log("Entering ANFBACLI_toolbar_whenNewFormInstance");
        console.log("Exiting ANFBACLI_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_toolbar_first_whenButtonPressed() {
        console.log("Entering ANFBACLI_toolbar_first_whenButtonPressed");
        console.log("Exiting ANFBACLI_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_toolbar_lastr_whenButtonPressed() {
        console.log("Entering ANFBACLI_toolbar_lastr_whenButtonPressed");
        console.log("Exiting ANFBACLI_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN  
    //  LIB$GENPLANO(:TXT_BLOQUE,:PLANO.RUTA);
    //  IF :RG_TIPO = 'E' THEN
    //   LIB$OFFICE.ABRE_ARCHIVO ('EXCEL', :PLANO.RUTA );  
    //    /*MESSAGE('ENTRO2');MESSAGE('ENTRO2');*/
    //  ELSIF :RG_TIPO = 'W' THEN
    //   LIB$OFFICE.ABRE_ARCHIVO ('WORD', :PLANO.RUTA );
    //      /*MESSAGE('ENTRO 3');MESSAGE('ENTRO 3');*/
    //  ELSE
    //   LIB$OFFICE.ABRE_ARCHIVO ('TEXTO', :PLANO.RUTA );
    //      /*MESSAGE('ENTRO 4');MESSAGE('ENTRO 4');*/
    //  END IF;
    // 
    // END;
    //#endregion
    async ANFBACLI_plano_btnGenerar_whenButtonPressed() {
        console.log("Entering ANFBACLI_plano_btnGenerar_whenButtonPressed");
        // ANFBACLI_LIB$GENPLANO(TXT_BLOQUE, PLANO.RUTA);
        // if (RG_TIPO == "E") {
        //     ANFBACLI_LIB$OFFICE.ABRE_ARCHIVO("EXCEL", PLANO.RUTA);
        // }
        // else if (RG_TIPO == "W") {
        //     ANFBACLI_LIB$OFFICE.ABRE_ARCHIVO("WORD", PLANO.RUTA);
        // }
        // else {
        //     ANFBACLI_LIB$OFFICE.ABRE_ARCHIVO("TEXTO", PLANO.RUTA);
        // }
        console.log("Exiting ANFBACLI_plano_btnGenerar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  HIDE_WINDOW('WIN_PLANO');
    //  GO_ITEM('COTBASCLI.BASCLI_OFICIN');
    // END;
    //#endregion
    async ANFBACLI_plano_btnRegresar_whenButtonPressed() {
        console.log("Entering ANFBACLI_plano_btnRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.hide_window("WIN_PLANO");
        this.oracleFormsBuiltins.go_item("COTBASCLI.BASCLI_OFICIN");
        console.log("Exiting ANFBACLI_plano_btnRegresar_whenButtonPressed");
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
    async ANFBACLI_plano_btnAbre_whenButtonPressed() {
        console.log("Entering ANFBACLI_plano_btnAbre_whenButtonPressed");
        let V_RUTA: string = null;
        V_RUTA = this.PLANO.RUTA;
        this.PLANO.RUTA = this.oracleFormsBuiltins.get_file_name("DOCUMENTOS (*.DOC,*.XLS,*.TXT)");
        if ((this.PLANO.RUTA == null)) {
            this.PLANO.RUTA = V_RUTA;
        }
        console.log("Exiting ANFBACLI_plano_btnAbre_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   LIB$MNSJEOCPDO('GENERANDO EL ARCHIVO PLANO',NULL);
    //   PPLABLOQ(NVL(:this.PARAMETER.get("PBLOACT"),'BCONG'),:BBOTONES.ARCHIVOB);
    //   LIB$MNSJEOCPDOOFF;
    //   GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async ANFBACLI_bbotones_aceptarb_whenButtonPressed() {
        console.log("Entering ANFBACLI_bbotones_aceptarb_whenButtonPressed");
        // ANFBACLI_LIB$MNSJEOCPDO("GENERANDO EL ARCHIVO PLANO", null);
        // ANFBACLI_PPLABLOQ(this.PARAMETER.get("PBLOACT") == null ? "BCONG" : this.PARAMETER.get("PBLOACT"), BBOTONES.ARCHIVOB);
        // ANFBACLI_LIB$MNSJEOCPDOOFF();
        this.oracleFormsBuiltins.go_item(this.PARAMETER.get("PITEMANT"));
        this.oracleFormsBuiltins.go_record(this.PARAMETER.get("PREGANT"));
        console.log("Exiting ANFBACLI_bbotones_aceptarb_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async ANFBACLI_bbotones_cancelarb_whenButtonPressed() {
        console.log("Entering ANFBACLI_bbotones_cancelarb_whenButtonPressed");
        this.oracleFormsBuiltins.go_item(this.PARAMETER.get("PITEMANT"));
        this.oracleFormsBuiltins.go_record(this.PARAMETER.get("PREGANT"));
        console.log("Exiting ANFBACLI_bbotones_cancelarb_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    //   VCAMPOANT VARCHAR2(256);
    //   LPCOGENID PARAMLIST;
    // BEGIN
    //  LIB$ALERTA('MENSAJE','¿ESTÁ SEGURO DE QUE QUIERE GENERAR EL ARCHIVO?'
    //           ,'SÍ', 'NO','CANCELAR', VBOTON);
    //   IF VBOTON = 2 THEN
    //     NULL;
    //   ELSIF VBOTON = 1 THEN
    //     LIB$MNSJEOCPDO('GENERAR INFORMACIÓN...',NULL);
    //     :this.PARAMETER.get("PITEMANT") := :SYSTEM.TRIGGER_ITEM;
    //     :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.TRIGGER_RECORD);
    //     :this.PARAMETER.get("PBLOACT") := 'COTBASCLI';
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARBACLI")||TO_CHAR(:this.PARAMETER.get("PFECCOR"),'YYYYMMDD')||'.TXT';
    //     LIB$MNSJEOCPDOOFF;
    //   END IF;
    // END;
    //#endregion
    async ANFBACLI_bbotones_geninfo_whenButtonPressed() {
        console.log("Entering ANFBACLI_bbotones_geninfo_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: any = null;
        // ANFBACLI_LIB$ALERTA("MENSAJE", "¿ESTÁ SEGURO DE QUE QUIERE GENERAR EL ARCHIVO?", "SÍ", "NO", "CANCELAR", VBOTON);
        if (VBOTON == 2) {
        }
        else if (VBOTON == 1) {
            // ANFBACLI_LIB$MNSJEOCPDO("GENERAR INFORMACIÓN...", null);
            // this.PARAMETER.set("PITEMANT") = this.SYSTEM.TRIGGER_ITEM;
            this.PARAMETER.set("PREGANT", PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("TRIGGER_RECORD")).toString());
            this.PARAMETER.set("PBLOACT", "COTBASCLI");
            this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARBACLI") || PLSQLBuiltins.to_char(this.PARAMETER.get("PFECCOR"), 'YYYYMMDD') || '.TXT';
            // ANFBACLI_LIB$MNSJEOCPDOOFF();
        }
        console.log("Exiting ANFBACLI_bbotones_geninfo_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // BACLI OPS$COLOCA.PQBD_COL_CURSOR.RCBACLI;
    // 
    // BEGIN
    // 
    // OPS$COLOCA.PQBD_COL_CURSOR.PBACLIR(BACLI,:this.PARAMETER.get("PFECCOR"), :this.PARAMETER.get("PSALMIN"),'001' --ARQUITECTURA
    //                                   );
    // 
    // GO_BLOCK('COTBASCLI');
    // EXECUTE_QUERY;
    // 
    // END;
    // 
    // 
    // /*
    // BEGIN
    //   GO_BLOCK('BBACLI');
    //   DO_KEY('EXECUTE_QUERY');
    //   SYNCHRONIZE;
    //   IF GET_BLOCK_PROPERTY('BBACLI', STATUS) = 'NEW' THEN
    //     GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //     GO_RECORD(:this.PARAMETER.get("PREGANT"));
    //     LIB$DTNERFRMA('NO SE OBTUVIERON REGISTROS PARA LOS PARÁMETROS ENTRADOS');
    //   END IF;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       LIB$DTNERFRMA('NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS');
    //     WHEN OTHERS THEN
    //       LIB$DTNERFRMA(SQLERRM);
    // END;
    // 
    // */
    //#endregion
    async ANFBACLI_bbotones_consulta_whenButtonPressed() {
        console.log("Entering ANFBACLI_bbotones_consulta_whenButtonPressed");
        let BACLI: null = null;
        // ANFBACLI_OPS$COLOCA.PQBD_COL_CURSOR.PBACLIR(BACLI, this.PARAMETER.get("PFECCOR"), this.PARAMETER.get("PSALMIN"), "001");
        this.oracleFormsBuiltins.go_block("COTBASCLI");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFBACLI_bbotones_consulta_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFBACLI_base_whenCreateRecord() {
        console.log("Entering ANFBACLI_base_whenCreateRecord");
        console.log("Exiting ANFBACLI_base_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN LIB$DTNERFRMA('FUNCIÓN NO PERMITIDA'); END;
    //#endregion
    async ANFBACLI_bbacli_keyEntqry() {
        console.log("Entering ANFBACLI_bbacli_keyEntqry");
        // ANFBACLI_LIB$DTNERFRMA("FUNCIÓN NO PERMITIDA");
        console.log("Exiting ANFBACLI_bbacli_keyEntqry");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('PCONGV'); END;
    //#endregion
    async ANFBACLI_bbacli_whenNewBlockInstance() {
        console.log("Entering ANFBACLI_bbacli_whenNewBlockInstance");
        this.oracleFormsBuiltins.show_view("PCONGV");
        console.log("Exiting ANFBACLI_bbacli_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION VARCHAR2(60);
    // BEGIN
    //  
    // IF NVL(:CONTADOR,0)= 0 THEN
    // BEGIN
    //  BEGIN
    //   SELECT DESCRIPCION
    //      INTO V_OPCION
    //      FROM OPS$SEGUI.OPCIONES
    //      WHERE UPPER(PROGRAMA)=:SYSTEM.CURRENT_FORM
    //        AND PROGRAMA IS NOT NULL
    //        AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     V_OPCION:=NULL;
    // 
    //   END;   
    //   --EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('BASE_CLIENTES',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=1;
    // END;
    // 
    // END IF;
    // END;
    //#endregion
    async ANFBACLI_bbacli_postQuery() {
        console.log("Entering ANFBACLI_bbacli_postQuery");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        if (this.BPAR.CONTADOR == null ? 0 : this.BPAR.CONTADOR == 0) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
                // call REST API
                const result1 = await Rest.post("/anfbacli_bbacli/anfbacli_bbacli_postquery_query1", payload1);
                // get values from result
                V_OPCION = result1[0].get("V_OPCION");
            } catch (ex) {

                V_OPCION = null;
            }

            // ANFBACLI_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("BASE_CLIENTES", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
            // this.BBACLI.CONTADOR = 1;
        }
        console.log("Exiting ANFBACLI_bbacli_postQuery");
    }

    //#region PLSQL
    // BEGIN 
    // SELECT R.RANGOS_VALORR
    //   INTO :TXT_PIEDRA
    //   FROM OPS$COLOCA.COTRANGOS R, OPS$COLOCA.COTCOLOR C
    //   WHERE R.RANGOS_CODIGO = 'CALIFICA'
    //     AND R.RANGOS_TIPRAN = 'COLOREADO'
    //     AND C.COLORE_TERCER = :BASCLI_IDBENE
    //     AND C.COLORE_CALIFI BETWEEN R.RANGOS_VDESDE AND R.RANGOS_VHASTA;
    //     
    // EXCEPTION 
    //  WHEN OTHERS THEN
    //  BEGIN
    //   SELECT C.COLORE_COMENT
    //    INTO :TXT_PIEDRA
    //   FROM OPS$COLOCA.COTCOLOR C WHERE C.COLORE_TERCER = :BASCLI_IDBENE;
    // 
    //  EXCEPTION 
    //   WHEN OTHERS THEN
    //    :TXT_PIEDRA := '';
    //  END;
    // END;
    // --+JDG.PY20078. RECUPERACIÓN DÍGITO DE CHEQUEO COLOCACIÓN.
    // BEGIN
    //  
    //  SELECT C.COLDIGCHE
    //    INTO :COTBASCLI.TXT_COLDIGCHE
    //    FROM COL C
    //   WHERE C.COLOFI  = :COTBASCLI.BASCLI_OFICIN
    //     AND C.COLTDOC = :COTBASCLI.BASCLI_TIPCOL
    //     AND C.COLCOD  = :COTBASCLI.BASCLI_CONTRA;
    // 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //    :COTBASCLI.TXT_COLDIGCHE := '';
    //     
    // END;
    // --+JDG.PY20078. RECUPERACIÓN DÍGITO DE CHEQUEO TERCERO.
    // BEGIN
    //  
    //  SELECT NVL(T.TERDCH, '')
    //    INTO :COTBASCLI.TXT_TERDCH
    //    FROM TER T
    //   WHERE T.TERCOD = :COTBASCLI.BASCLI_IDBENE
    //     AND T.TERTID = 'NI';
    // 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //    :COTBASCLI.TXT_TERDCH := '';
    //     
    // END;
    //#endregion
    async ANFBACLI_cotbascli_postQuery() {
        console.log("Entering ANFBACLI_cotbascli_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("BASCLI_IDBENE", this.COTBASCLI.BASCLI_IDBENE);
            // call REST API
            const result1 = await Rest.post("/anfbacli_cotbascli/anfbacli_cotbascli_postquery_query1", payload1);
            // get values from result
            // TXT_PIEDRA = result1[0].get("TXT_PIEDRA");
        } catch (ex) {

            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                payload2.set("BASCLI_IDBENE", this.COTBASCLI.BASCLI_IDBENE);
                // call REST API
                const result2 = await Rest.post("/anfbacli_cotbascli/anfbacli_cotbascli_postquery_query2", payload2);
                // get values from result
                // TXT_PIEDRA = result2[0].get("TXT_PIEDRA");
            } catch (ex) {

                this.COTBASCLI.TXT_PIEDRA = "";
            }

        }

        try {

            // construct payload
            let payload3 = new Map();
            payload3.set("BASCLI_OFICIN", this.COTBASCLI.BASCLI_OFICIN);
            payload3.set("BASCLI_TIPCOL", this.COTBASCLI.BASCLI_TIPCOL);
            payload3.set("BASCLI_CONTRA", this.COTBASCLI.BASCLI_CONTRA);
            // call REST API
            const result3 = await Rest.post("/anfbacli_cotbascli/anfbacli_cotbascli_postquery_query3", payload3);
            // get values from result
            this.COTBASCLI.TXT_COLDIGCHE = result3[0].get("COTBASCLI.TXT_COLDIGCHE");
        } catch (ex) {

            this.COTBASCLI.TXT_COLDIGCHE = "";
        }

        try {

            // construct payload
            let payload4 = new Map();
            payload4.set("BASCLI_IDBENE", this.COTBASCLI.BASCLI_IDBENE);
            // call REST API
            const result4 = await Rest.post("/anfbacli_cotbascli/anfbacli_cotbascli_postquery_query4", payload4);
            // get values from result
            this.COTBASCLI.TXT_TERDCH = result4[0].get("COTBASCLI.TXT_TERDCH");
        } catch (ex) {

            this.COTBASCLI.TXT_TERDCH = "";
        }

        console.log("Exiting ANFBACLI_cotbascli_postQuery");
    }

}

