import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFCLIDE business logic
import {
    BPAR,
    PROCESO,
    BCLIDE,
    TOOLBAR,
    BBOTONES,
    BASE
} from "./ANFCLIDE_models";



// class ANFCLIDE
@Component({
    selector: 'app-anfclide',
    templateUrl: './anfclide.component.html',
})
export class AnfclideComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
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
    public BCLIDE: BCLIDE = new BCLIDE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BBOTONES: BBOTONES = new BBOTONES();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_onError() {
        console.log("Entering ANFCLIDE_onError");
        console.log("Exiting ANFCLIDE_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_whenMouseDoubleclick() {
        console.log("Entering ANFCLIDE_whenMouseDoubleclick");
        console.log("Exiting ANFCLIDE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_onMessage() {
        console.log("Entering ANFCLIDE_onMessage");
        console.log("Exiting ANFCLIDE_onMessage");
    }

    //#region PLSQL
    // BEGIN CLEAR_BLOCK(NO_VALIDATE); END;
    //#endregion
    async ANFCLIDE_keyClrblk() {
        console.log("Entering ANFCLIDE_keyClrblk");
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        console.log("Exiting ANFCLIDE_keyClrblk");
    }

    //#region PLSQL
    // DECLARE
    //  VMINF DATE;
    //  VMAXF DATE;
    // BEGIN
    //  PQBD_COL_CURSOR.PMMFAPE(VMINF, VMAXF);
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
    async ANFCLIDE_preForm() {
        console.log("Entering ANFCLIDE_preForm");
        let VMINF: Date = null;
        let VMAXF: Date = null;
        // ANFCLIDE_PQBD_COL_CURSOR.PMMFAPE(VMINF, VMAXF);
        // this.PARAMETER.set("PMINF", VMINF == null ? PLSQLBuiltins.sysdate() : VMINF);
        // this.PARAMETER.set("PMAXF", VMAXF == null ? PLSQLBuiltins.sysdate() : VMAXF);
        // this.PARAMETER.set"PAGNOS", PLSQLBuiltins.to_number(this.PARAMETER.get("PMAXF").toString()) == null ? 0 : PLSQLBuiltins.to_number(this.PARAMETER.get("PMAXF").toString()) - PLSQLBuiltins.to_number(this.PARAMETER.get("PMINF").toString()) == null ? 0 : PLSQLBuiltins.to_number(this.PARAMETER.get("PMINF").toString()) + 1;
        // ANFCLIDE_PANTALLA();
        // ANFCLIDE_PINICIAR();
        console.log("Exiting ANFCLIDE_preForm");
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
    //   CPROCES   CONSTANT SETPARAMETRO.PARAME_PROCES%TYPE := 'ANFCLIDE';
    //   -- VARIABLES
    //   NOM_USUARIO  OPS$AUDI.AUVSESION.OSUSER%TYPE; 
    //  CADENA VARCHAR2(100); 
    //   VFORMATO SETPARAMETRO.PARAME_FORMAT%TYPE;
    //   VVALOR   SETPARAMETRO.PARAME_VALOR%TYPE;
    //   VPROCES  SETPARAMETRO.PARAME_PROCES%TYPE;
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
    //  CADENA := '\\'||NOM_USUARIO||'\\COMPARTIDO\\';
    //  
    //   -- OBTENCIÓN DE LA RUTA  Y NOMBRE DEL ARCHIVO
    //   BEGIN
    //     PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'ESQDIR'
    //                                  ,VFORMATO  ,VVALOR);
    //     IF VVALOR = 'U' THEN
    //       PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAU'
    //                                    ,VFORMATO  ,VVALOR);
    //       VDIR := '\\'||LIB$FUSO||VVALOR;
    //     ELSE
    //       PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'DIRPLAG'
    //                                    ,VFORMATO  ,VVALOR);
    //       VDIR := VVALOR;
    //     END IF;
    //     PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES ,'F'       ,'EXARCLIDE'
    //                                  ,VFORMATO  ,VEXTAR);
    //     PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES ,'F'       ,'ARCLIDE'
    //                                  ,VFORMATO  ,VVALOR);
    //     :this.PARAMETER.get("PARBACLI") := CADENA||VVALOR;
    //     :this.PARAMETER.get("PEXARBACLI") := VEXTAR;
    //   END;
    //   --
    //   BEGIN
    //     PQBD_SEG_SETPARAMETRO.PCARPAR('SIGLEASE' ,'M'       ,'EDIT'
    //                                  ,VFORMATO  ,VVALOR);
    //   END;
    //   :this.PARAMETER.get("PEDITOR") := VVALOR;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //      LIB$DTNERFRMA(SQLERRM);
    // END;
    // -- FOINFE
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
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.IMLGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.IMLGO'); 
    //  END IF;
    // END;
    // -------------------------------------------------------
    // SET_APPLICATION_PROPERTY(BUILTIN_DATE_FORMAT, 'DD-MM-YYYY');
    // SET_APPLICATION_PROPERTY(PLSQL_DATE_FORMAT, 'DD-MM-YYYY'); END;
    //#endregion
    async ANFCLIDE_whenNewFormInstance() {
        console.log("Entering ANFCLIDE_whenNewFormInstance");
        {

            // let CPROCES: null = 'ANFCLIDE';
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
            let result3 = new Map();
            try {

                // CADENA = "\\" + NOM_USUARIO + "\\COMPARTIDO\\";
                // ANFCLIDE_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "ESQDIR", VFORMATO, VVALOR);
                // if (VVALOR == "U") {
                //     ANFCLIDE_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAU", VFORMATO, VVALOR);
                //     VDIR = "\\" + LIB$FUSO + VVALOR;
                // }
                // else {
                //     ANFCLIDE_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "DIRPLAG", VFORMATO, VVALOR);
                //     VDIR = VVALOR;
                // }
                // ANFCLIDE_PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES, "F", "EXARCLIDE", VFORMATO, VEXTAR);
                // ANFCLIDE_PQBD_SEG_SETPARAMETRO.PCARPAR(CPROCES, "F", "ARCLIDE", VFORMATO, VVALOR);
                // this.PARAMETER.get("PARBACLI") = CADENA + VVALOR;
                // this.PARAMETER.get("PEXARBACLI") = VEXTAR;
                // ANFCLIDE_PQBD_SEG_SETPARAMETRO.PCARPAR("SIGLEASE", "M", "EDIT", VFORMATO, VVALOR);
                // this.PARAMETER.get("PEDITOR") = VVALOR;
            } catch (ex) {

                // ANFCLIDE_LIB$DTNERFRMA(SQLERRM);
            }

        }

        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload4 = new Map();
                payload4.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result4 = await Rest.post("/anfclide/anfclide_whennewforminstance_query4", payload4);
                // get values from result
                V_IMAGEN = result4[0].get("V_IMAGEN");
                if (result4 == null || result4.length == 0) {

                    V_IMAGEN = "LOGO_LEASFORM.GIF";
                }

                this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.IMLGO");
            }
            else {
                this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.IMLGO");
            }
        }

        this.oracleFormsBuiltins.set_application_property("BUILTIN_DATE_FORMAT", "DD-MM-YYYY");
        this.oracleFormsBuiltins.set_application_property("PLSQL_DATE_FORMAT", "DD-MM-YYYY");
        console.log("Exiting ANFCLIDE_whenNewFormInstance");
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
    async ANFCLIDE_bpar_onError() {
        console.log("Entering ANFCLIDE_bpar_onError");
        let VBOTON: number = null;
        // if (this.oracleFormsBuiltins.error_code == 40200) {
        //   ANFCLIDE_LIB$DTNERFRMA("DEBE LIMPIAR EL BLOQUE PARA TENER ACCESO A ESTE ÍTEM");
        // }
        // else {
        //   ANFCLIDE_LIB$DTNERFRMA(this.oracleFormsBuiltins.error_type + "-" + ERROR_CODE.toString() + ": " + this.oracleFormsBuiltins.error_text);
        // }
        console.log("Exiting ANFCLIDE_bpar_onError");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PFECCOR") := LAST_DAY(TO_DATE(:BPAR.MES||:BPAR.AGNO,'MMYYYY')); END;
    //#endregion
    async ANFCLIDE_bpar_whenValidateRecord() {
        console.log("Entering ANFCLIDE_bpar_whenValidateRecord");
        // this.PARAMETER.get("PFECCOR") = LAST_DAY(new Date(BPAR.MES + BPAR.AGNO));
        console.log("Exiting ANFCLIDE_bpar_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN IF GET_GROUP_ROW_COUNT('GRMESES') <> 0 THEN
    //   :BPAR.MES := TO_CHAR(ADD_MONTHS(SYSDATE,-1),'MM');
    // END IF;
    // IF GET_GROUP_ROW_COUNT('GRAGNOS') <> 0 THEN
    //   :BPAR.AGNO := TO_CHAR(SYSDATE,'YYYY');
    // END IF; END;
    //#endregion
    async ANFCLIDE_bpar_whenCreateRecord() {
        console.log("Entering ANFCLIDE_bpar_whenCreateRecord");
        // if (this.oracleFormsBuiltins.get_group_row_count("GRMESES") != 0) {
        // this.BPAR.MES = ADD_MONTHS(PLSQLBuiltins.sysdate(), 1).toString();
        // }
        // if (this.oracleFormsBuiltins.get_group_row_count("GRAGNOS") != 0) {
        //     this.BPAR.AGNO = SYSDATE.toString();
        // }
        console.log("Exiting ANFCLIDE_bpar_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("PITEMANT") := :SYSTEM.CURSOR_ITEM;
    // :this.PARAMETER.get("PREGANT") := TO_NUMBER(:SYSTEM.CURSOR_RECORD); END;
    //#endregion
    async ANFCLIDE_bpar_postBlock() {
        console.log("Entering ANFCLIDE_bpar_postBlock");
        // this.PARAMETER.get("PITEMANT") = this.SYSTEM.CURSOR_ITEM;
        // this.PARAMETER.get("PREGANT") = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD"));
        console.log("Exiting ANFCLIDE_bpar_postBlock");
    }

    //#region PLSQL
    // BEGIN LIB$DTNERFRMA('FUNCIÓN NO PERMITIDA'); END;
    //#endregion
    async ANFCLIDE_bclide_keyEntqry() {
        console.log("Entering ANFCLIDE_bclide_keyEntqry");
        // ANFCLIDE_LIB$DTNERFRMA("FUNCIÓN NO PERMITIDA");
        console.log("Exiting ANFCLIDE_bclide_keyEntqry");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('PCONGV'); END;
    //#endregion
    async ANFCLIDE_bclide_whenNewBlockInstance() {
        console.log("Entering ANFCLIDE_bclide_whenNewBlockInstance");
        this.oracleFormsBuiltins.show_view("PCONGV");
        console.log("Exiting ANFCLIDE_bclide_whenNewBlockInstance");
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
    //      FROM OPCIONES
    //      WHERE UPPER(PROGRAMA)=:SYSTEM.CURRENT_FORM
    //        AND PROGRAMA IS NOT NULL
    //        AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     V_OPCION:=NULL;
    //   END;   
    //   --EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('CLIEN_DESACTUALIZADOS',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=1;
    // END;
    // 
    // END IF;
    // END;
    //#endregion
    async ANFCLIDE_bclide_postQuery() {
        console.log("Entering ANFCLIDE_bclide_postQuery");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        // if (this.CONTADOR == null ? 0 : CONTADOR == 0) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
        //         // call REST API
        //         const result1 = await Rest.post("/anfclide_bclide/anfclide_bclide_postquery_query1", payload1);
        //         // get values from result
        //         V_OPCION = result1[0].get("V_OPCION");
        //     } catch (ex) {

        //         V_OPCION = null;
        //     }

        //     ANFCLIDE_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("CLIEN_DESACTUALIZADOS", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
        //     this.BCLIDE.CONTADOR = 1;
        // }
        console.log("Exiting ANFCLIDE_bclide_postQuery");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_toolbar_whenButtonPressed() {
        console.log("Entering ANFCLIDE_toolbar_whenButtonPressed");
        console.log("Exiting ANFCLIDE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_toolbar_whenMouseLeave() {
        console.log("Entering ANFCLIDE_toolbar_whenMouseLeave");
        console.log("Exiting ANFCLIDE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_toolbar_whenNewFormInstance() {
        console.log("Entering ANFCLIDE_toolbar_whenNewFormInstance");
        console.log("Exiting ANFCLIDE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_toolbar_first_whenButtonPressed() {
        console.log("Entering ANFCLIDE_toolbar_first_whenButtonPressed");
        console.log("Exiting ANFCLIDE_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_toolbar_lastr_whenButtonPressed() {
        console.log("Entering ANFCLIDE_toolbar_lastr_whenButtonPressed");
        console.log("Exiting ANFCLIDE_toolbar_lastr_whenButtonPressed");
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
    async ANFCLIDE_bbotones_aceptarb_whenButtonPressed() {
        console.log("Entering ANFCLIDE_bbotones_aceptarb_whenButtonPressed");
        // ANFCLIDE_LIB$MNSJEOCPDO("GENERANDO EL ARCHIVO PLANO", null);
        // ANFCLIDE_PPLABLOQ(this.PARAMETER.get("PBLOACT") == null ? "BCONG" : this.PARAMETER.get("PBLOACT"), BBOTONES.ARCHIVOB);
        // ANFCLIDE_LIB$MNSJEOCPDOOFF();
        this.oracleFormsBuiltins.go_item(this.PARAMETER.get("PITEMANT"));
        this.oracleFormsBuiltins.go_record(this.PARAMETER.get("PREGANT"));
        console.log("Exiting ANFCLIDE_bbotones_aceptarb_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_ITEM(:this.PARAMETER.get("PITEMANT"));
    //   GO_RECORD(:this.PARAMETER.get("PREGANT"));
    // END;
    //#endregion
    async ANFCLIDE_bbotones_cancelarb_whenButtonPressed() {
        console.log("Entering ANFCLIDE_bbotones_cancelarb_whenButtonPressed");
        this.oracleFormsBuiltins.go_item(this.PARAMETER.get("PITEMANT"));
        this.oracleFormsBuiltins.go_record(this.PARAMETER.get("PREGANT"));
        console.log("Exiting ANFCLIDE_bbotones_cancelarb_whenButtonPressed");
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
    //     :this.PARAMETER.get("PBLOACT") := 'BCLIDE';
    //     GO_ITEM('BBOTONES.ARCHIVOB');
    //     :BBOTONES.ARCHIVOB := :this.PARAMETER.get("PARBACLI")||TO_CHAR(:this.PARAMETER.get("PFECCOR"),'YYYYMMDD')||:this.PARAMETER.get("PEXARBACLI");
    //     LIB$MNSJEOCPDOOFF;
    //   END IF;
    // END;
    //#endregion
    async ANFCLIDE_bbotones_geninfo_whenButtonPressed() {
        console.log("Entering ANFCLIDE_bbotones_geninfo_whenButtonPressed");
        let VBOTON: number = null;
        let VCAMPOANT: string = null;
        let LPCOGENID: any = null;
        // ANFCLIDE_LIB$ALERTA("MENSAJE", "¿ESTÁ SEGURO DE QUE QUIERE GENERAR EL ARCHIVO?", "SÍ", "NO", "CANCELAR", VBOTON);
        if (VBOTON == 2) {
        }
        else if (VBOTON == 1) {
            // ANFCLIDE_LIB$MNSJEOCPDO("GENERAR INFORMACIÓN...", null);
            // this.PARAMETER.get("PITEMANT") = this.SYSTEM.TRIGGER_ITEM;
            // this.PARAMETER.get("PREGANT") = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("TRIGGER_RECORD"));
            // this.PARAMETER.get("PBLOACT") = "BCLIDE";
            // this.oracleFormsBuiltins.go_item("BBOTONES.ARCHIVOB");
            // this.BBOTONES.ARCHIVOB = this.PARAMETER.get("PARBACLI") || TO_CHAR(this.PARAMETER.get("PFECCOR"), 'YYYYMMDD') || this.PARAMETER.get("PEXARBACLI");
            // ANFCLIDE_LIB$MNSJEOCPDOOFF();
        }
        console.log("Exiting ANFCLIDE_bbotones_geninfo_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('BCLIDE');
    //   DO_KEY('EXECUTE_QUERY');
    //   SYNCHRONIZE;
    //   IF GET_BLOCK_PROPERTY('BCLIDE', STATUS) = 'NEW' THEN
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
    //#endregion
    async ANFCLIDE_bbotones_consulta_whenButtonPressed() {
        console.log("Entering ANFCLIDE_bbotones_consulta_whenButtonPressed");
        try {

            this.oracleFormsBuiltins.go_block("BCLIDE");
            this.oracleFormsBuiltins.do_key("EXECUTE_QUERY");
            this.oracleFormsBuiltins.synchronize();
            if (this.oracleFormsBuiltins.get_block_property("BCLIDE", "STATUS") == "NEW") {
                this.oracleFormsBuiltins.go_item(this.PARAMETER.get("PITEMANT"));
                this.oracleFormsBuiltins.go_record(this.PARAMETER.get("PREGANT"));
                // ANFCLIDE_LIB$DTNERFRMA("NO SE OBTUVIERON REGISTROS PARA LOS PARÁMETROS ENTRADOS");
            }
            // if (result0 == null || result0.length == 0) {

            //     ANFCLIDE_LIB$DTNERFRMA("NO HAY DATOS PARA LOS PARÁMETROS ENTRADOS");
            // }

        } catch (ex) {

            // ANFCLIDE_LIB$DTNERFRMA(SQLERRM);
        }

        console.log("Exiting ANFCLIDE_bbotones_consulta_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async ANFCLIDE_base_whenCreateRecord() {
        console.log("Entering ANFCLIDE_base_whenCreateRecord");
        console.log("Exiting ANFCLIDE_base_whenCreateRecord");
    }

}

