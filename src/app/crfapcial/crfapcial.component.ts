import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFAPCIAL business logic
import {
    VARIABLE,
    CRTSOLICR1,
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./CRFAPCIAL_models";



// class CRFAPCIAL
@Component({
    selector: 'app-crfapcial',
    templateUrl: './crfapcial.component.html',
})
export class CrfapcialComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['PPRIVILCARGO', null],
        ['PPLAZU', null],
        ['PJERAR', null],
        ['POFCNA', null],
        ['PCARGO', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTSOLICR1: CRTSOLICR1 = new CRTSOLICR1();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
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
    async CRFAPCIAL_onClearDetails() {
        console.log("Entering CRFAPCIAL_onClearDetails");
        // CRFAPCIAL_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFAPCIAL_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRFAPCIAL_whenMouseDoubleclick() {
        console.log("Entering CRFAPCIAL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRFAPCIAL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    //    --REVISIÓN DE SU JERARQUIA Y CARGO PARA OBTENER SUS OPCIONES DE MENU  
    //   PREVUSU('this.PARAMETER.get("PCARGO")', 'this.PARAMETER.get("POFCNA")', 'this.PARAMETER.get("PJERAR")', 'this.PARAMETER.get("PPLAZU")', 'this.PARAMETER.get("PPRIVILCARGO")');
    // END;
    //#endregion
    async CRFAPCIAL_preForm() {
        console.log("Entering CRFAPCIAL_preForm");
        // CRFAPCIAL_PANTALLA();
        // CRFAPCIAL_PINCIARSGRDADOFCNAS();
        // CRFAPCIAL_PREVUSU("this.PARAMETER.get("PCARGO")", "this.PARAMETER.get("POFCNA")", "this.PARAMETER.get("PJERAR")", "this.PARAMETER.get("PPLAZU")", "this.PARAMETER.get("PPRIVILCARGO")");
        console.log("Exiting CRFAPCIAL_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFAPCIAL_whenNewFormInstance() {
        console.log("Entering CRFAPCIAL_whenNewFormInstance");
        // CRFAPCIAL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFAPCIAL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   EXIT_FORM(NO_COMMIT);
    // END;
    //#endregion
    async CRFAPCIAL_keyExit() {
        console.log("Entering CRFAPCIAL_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_COMMIT");
        console.log("Exiting CRFAPCIAL_keyExit");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ESTSOL = 'AC' THEN
    //      LIB$DTNERFRMA( 'LA SOLICITUD YA FUE APROBADA, POR FAVOR SELECCIONE OTRA.'); 
    // END IF; 
    // :VARIABLE.UNIDAD    := :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    // :VARIABLE.OFICINA   := :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.SOLICITUD := :CRTSOLICR.SOLICR_CODSOL;
    // --+PY21520. JDG
    // :VARIABLE.SOLICR_CODVOR := :CRTSOLICR.SOLICR_CODVOR;
    // --+
    // SHOW_VIEW('CANVAS2');
    // GO_BLOCK('CRTSOLICR1');
    // END;
    //#endregion
    async CRFAPCIAL_variable_aprobar_whenButtonPressed() {
        console.log("Entering CRFAPCIAL_variable_aprobar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AC") {
            // CRFAPCIAL_LIB$DTNERFRMA("LA SOLICITUD YA FUE APROBADA, POR FAVOR SELECCIONE OTRA.");
        }
        this.VARIABLE.UNIDAD = this.CRTSOLICR.SOLICR_CODUNI;
        this.VARIABLE.OFICINA = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICITUD = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.SOLICR_CODVOR = this.CRTSOLICR.SOLICR_CODVOR;
        this.oracleFormsBuiltins.show_view("CANVAS2");
        this.oracleFormsBuiltins.go_block("CRTSOLICR1");
        console.log("Exiting CRFAPCIAL_variable_aprobar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :V_NOMBCOMER
    //  FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :VARIABLE.USU_COMER;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_NOMBCOMER := NULL;
    // END;
    // GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY;
    //#endregion
    async CRFAPCIAL_variable_usuComer_keyNxtblk() {
        console.log("Entering CRFAPCIAL_variable_usuComer_keyNxtblk");
        // construct payload
        let payload1 = new Map();
        payload1.set("USU_COMER", this.VARIABLE.USU_COMER);
        // call REST API
        const result1 = await Rest.post("/crfapcial_variable/crfapcial_variable_usucomer_keynxtblk_query1", payload1);
        // get values from result
        this.VARIABLE.V_NOMBCOMER = result1[0].get("V_NOMBCOMER");
        if (result1 == null || result1.length == 0) {

            this.VARIABLE.V_NOMBCOMER = null;
        }

        console.log("Exiting CRFAPCIAL_variable_usuComer_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :V_NOMBCOMER
    //  FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :VARIABLE.USU_COMER;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_NOMBCOMER := NULL;
    // END;
    // GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY;
    //#endregion
    async CRFAPCIAL_variable_usuComer_keyNextItem() {
        console.log("Entering CRFAPCIAL_variable_usuComer_keyNextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("USU_COMER", this.VARIABLE.USU_COMER);
        // call REST API
        const result1 = await Rest.post("/crfapcial_variable/crfapcial_variable_usucomer_keynextitem_query1", payload1);
        // get values from result
        this.VARIABLE.V_NOMBCOMER = result1[0].get("V_NOMBCOMER");
        if (result1 == null || result1.length == 0) {

            this.VARIABLE.V_NOMBCOMER = null;
        }

        console.log("Exiting CRFAPCIAL_variable_usuComer_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // IF DBMS_ERROR_CODE = -20001 THEN
    //  LIB$ALERTA('MENSAJE','EXISTE MAS DE UN OFICIAL DESEMBOLSO PARA ESE CLIENTE!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // ELSIF DBMS_ERROR_CODE = -20010 THEN
    //  LIB$ALERTA('MENSAJE','VERIFIQUE QUE EL ESTADO DE CONTROL DE LA SOLICITUD SEA IGUAL A TR!',NULL,NULL,NULL, T_RESPUESTA);
    // ELSIF DBMS_ERROR_CODE = -20004 THEN
    //   LIB$ALERTA('MENSAJE','NO SE ENCONTRÓ OFICIAL DE DESEMBOLSO PARA EL TERCERO, VERIRIQUE EL TIPO DE PRODUCTO, LINEA Y PLAZA DEL COMERCIAL',NULL,NULL,NULL, T_RESPUESTA);
    // ELSIF DBMS_ERROR_CODE = -20003 THEN
    //  LIB$ALERTA('MENSAJE','VERIFIQUE LINEA Y TIPO DE PRODUCTO PARA LA PLAZA ',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // END;
    //#endregion
    async CRFAPCIAL_crtsolicr1_onError() {
        console.log("Entering CRFAPCIAL_crtsolicr1_onError");
        let T_RESPUESTA: number = null;
        if (this.oracleFormsBuiltins.dbms_error_code() == 20001) {
            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "EXISTE MAS DE UN OFICIAL DESEMBOLSO PARA ESE CLIENTE!!!", null, null, null, T_RESPUESTA);
        }
        else if (this.oracleFormsBuiltins.dbms_error_code() == 20010) {
            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "VERIFIQUE QUE EL ESTADO DE CONTROL DE LA SOLICITUD SEA IGUAL A TR!", null, null, null, T_RESPUESTA);
        }
        else if (this.oracleFormsBuiltins.dbms_error_code() == 20004) {
            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "NO SE ENCONTRÓ OFICIAL DE DESEMBOLSO PARA EL TERCERO, VERIRIQUE EL TIPO DE PRODUCTO, LINEA Y PLAZA DEL COMERCIAL", null, null, null, T_RESPUESTA);
        }
        else if (this.oracleFormsBuiltins.dbms_error_code() == 20003) {
            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "VERIFIQUE LINEA Y TIPO DE PRODUCTO PARA LA PLAZA ", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFAPCIAL_crtsolicr1_onError");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT USU_NOMBRE 
    //    INTO :V_NOMUSOFID
    //  FROM SGUSUARIOS
    //   WHERE USU_CODIGO = :CRTSOLICR1.SOLICR_USOFID;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :V_NOMUSOFID := NULL;
    // END;
    //#endregion
    async CRFAPCIAL_crtsolicr1_postQuery() {
        console.log("Entering CRFAPCIAL_crtsolicr1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_USOFID", this.CRTSOLICR1.SOLICR_USOFID);
        // call REST API
        const result1 = await Rest.post("/crfapcial_crtsolicr1/crfapcial_crtsolicr1_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR1.V_NOMUSOFID = result1[0].get("V_NOMUSOFID");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR1.V_NOMUSOFID = null;
        }

        console.log("Exiting CRFAPCIAL_crtsolicr1_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :CRTSOLICR1.SOLICR_LINEADES = 'LX' AND :CRTSOLICR1.SOLICR_FDESEMCLI IS NULL THEN
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    // ELSIF :CRTSOLICR1.SOLICR_FDESEMCLI < (TRUNC(SYSDATE) + 2)  THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)'||TO_CHAR(SYSDATE+2,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFAPCIAL_crtsolicr1_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFAPCIAL_crtsolicr1_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTSOLICR1.SOLICR_LINEADES == "LX" && (this.CRTSOLICR1.SOLICR_FDESEMCLI == null))) {
            // CRFAPCIAL_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        }
        // else if (this.CRTSOLICR1.SOLICR_FDESEMCLI < PLSQLBuiltins.trunc(PLSQLBuiltins.sysdate()) + 2) {
        // CRFAPCIAL_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)" + PLSQLBuiltins.sysdate() + 2.toString());
        // }
        console.log("Exiting CRFAPCIAL_crtsolicr1_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN CLEAR_BLOCK(NO_COMMIT); 
    // SHOW_VIEW('CANVAS1');
    // GO_BLOCK('CRTSOLICR');
    // CLEAR_BLOCK(NO_COMMIT); 
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFAPCIAL_crtsolicr1_volver_whenButtonPressed() {
        console.log("Entering CRFAPCIAL_crtsolicr1_volver_whenButtonPressed");
        this.oracleFormsBuiltins.clear_block("NO_COMMIT");
        this.oracleFormsBuiltins.show_view("CANVAS1");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.clear_block("NO_COMMIT");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFAPCIAL_crtsolicr1_volver_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_NITTER IS NOT NULL THEN
    //     PVALTER(:CRTSOLICR.SOLICR_NITTER); -- TERRES
    //   END IF;
    // END;
    // 
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_ESTADO    VARCHAR2(2) := 'AC';
    //   ESTADO_NO_VALIDO EXCEPTION;
    //   ERROR    VARCHAR2(1000);
    //   MENSAJE  VARCHAR2(100);
    //   V_ASESOR VARCHAR2(50);
    // 
    //   CURSOR COFI IS
    //     SELECT USU_USU_CODIGO ASISTENTE
    //       FROM SGUSUARIOS
    //      WHERE USU_CARGO IN ('DC', 'DP','79')
    //        AND USU_CODIGO = :CRTSOLICR.SOLICR_USCIAL;
    // 
    // BEGIN
    // 
    //   IF :CRTSOLICR.SOLICR_ESTSOL = 'AC' THEN
    //     LIB$ALERTA('MENSAJE',
    //                'LA SOLICITUD YA FUE APROBADA, POR FAVOR SELECCIONE OTRA.',
    //                NULL,
    //                NULL,
    //                NULL,
    //                T_RESPUESTA);
    //   
    //   ELSE
    //     IF :CRTSOLICR1.SOLICR_LINEADES = 'LX' AND
    //        :CRTSOLICR1.SOLICR_FDESEMCLI IS NULL THEN
    //       GO_ITEM('CRTSOLICR1.SOLICR_FDESEMCLI');
    //       LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO');
    //     ELSIF :CRTSOLICR1.SOLICR_FDESEMCLI < (TRUNC(SYSDATE) + 2) THEN
    //       GO_ITEM('CRTSOLICR1.SOLICR_FDESEMCLI');
    //       LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)' ||
    //                     TO_CHAR(SYSDATE + 2, 'YYYY-MM-DD'));
    //     END IF;
    //   
    //     IF :CRTSOLICR.SOLICR_CODPRO IS NULL THEN
    //       LIB$DTNERFRMA('DEBE ESPECIFICAR CODIGO DE PRODUCTO');
    //     ELSIF FRM$ALERTA_SINO('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    //       :CRTSOLICR.SOLICR_ESTSOL  := V_ESTADO;
    //       :CRTSOLICR1.SOLICR_FEACIA := TO_DATE(TO_CHAR(SYSDATE,
    //                                                    'YYYYMMDD HH24:MI'),
    //                                            'YYYYMMDD HH24:MI');
    //                                            
    //                                                  
    //       BEGIN
    //         PBD_COL_ASIGOFIDESEMBOLSO(:CRTSOLICR.SOLICR_OFCSOL,
    //                                   :VARIABLE.SOLICITUD,
    //                                   :CRTSOLICR.SOLICR_CODPRO,
    //                                   :CRTSOLICR1.SOLICR_NITTER,
    //                                   :CRTSOLICR.SOLICR_USCIAL,
    //                                   :CRTSOLICR.SOLICR_LINEA,
    //                                   :CRTSOLICR1.SOLICR_USOFID,
    //                                   :CRTSOLICR.SOLICR_TIPCRE,
    //                                   :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                                  ,
    //                                   ERROR,
    //                                   MENSAJE);
    //       EXCEPTION
    //         WHEN OTHERS THEN
    //           LIB$DTNERFRMA(ERROR || SQLERRM);
    //       END;
    //       IF ERROR IS NOT NULL THEN
    //         LIB$DTNERFRMA(ERROR);
    //       ELSIF MENSAJE IS NOT NULL THEN
    //         LIB$ALERTA('MENSAJE', MENSAJE, NULL, NULL, NULL, T_RESPUESTA);
    //       END IF;
    //     
    //       --INGRESA LA SOLICITUD EN EL MODULO DE IMPORTACIONES.
    //       --SOLO SI LA SOLICITUD ES DE LINEA IMPORTACION - LEASING IMPORTACION
    //       --AUTOR : MIGUEL ORTIZ
    //       --FECHA : 19/05/2011
    //     
    //       IF :CRTSOLICR.SOLICR_LINEA IN
    //          ('LI', 'I1', 'IB', 'IF', 'IR', 'LM', 'V2', 'OI') THEN
    //       
    //         IF :CRTSOLICR.SOLICR_ORMONET <> 'PE' OR
    //            :CRTSOLICR.SOLICR_ORMONUS$ <> 'PE' THEN
    //         
    //           OPS$COLOCA.PQBD_COL_MOD_IMPORTACION.PBD_COL_ING_IMPORTACION(:CRTSOLICR.SOLICR_CODSOL,
    //                                                                       :CRTSOLICR.SOLICR_OFCSOL,
    //                                                                       :CRTSOLICR.SOLICR_TIPBIE,
    //                                                                       :CRTSOLICR.SOLICR_TIPCRE,
    //                                                                       :CRTSOLICR.SOLICR_CODUNI, --ARQUITECTURA
    //                                                                       MENSAJE);
    //           COMMIT;
    //         ELSE
    //           LIB$ALERTA('MENSAJE',
    //                      'LA SOLICITUD ES LEASING DE IMPORTACION Y SU ORIGEN MONETARIO ES PE. LA OPERACION NO INGRESARÁ AL MODULO DE IMPORTACIONES',
    //                      NULL,
    //                      NULL,
    //                      NULL,
    //                      T_RESPUESTA);
    //         END IF;
    //       
    //         IF MENSAJE IS NOT NULL THEN
    //           LIB$ALERTA('MENSAJE', MENSAJE, NULL, NULL, NULL, T_RESPUESTA);
    //         END IF;
    //       
    //       END IF;
    //     
    //       BEGIN
    //         SELECT USU_NOMBRE
    //           INTO :V_NOMUSOFID
    //           FROM SGUSUARIOS
    //          WHERE USU_CODIGO = :CRTSOLICR1.SOLICR_USOFID;
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //           :V_NOMUSOFID := NULL;
    //       END;
    //     
    //       IF :CRTSOLICR1.SOLICR_USOFID IS NOT NULL THEN
    //         COMMIT_FORM;
    //         COMMIT;
    //       END IF;
    //     
    //       SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "ENABLED", "PROPERTY_FALSE");
    //     
    //       IF :CRTSOLICR1.SOLICR_USOFID IS NULL THEN
    //         LIB$DTNERFRMA('ERROR NO SE PUDO OBTENER EL OFICIAL DE DESEMBOLSO.');
    //       ELSE
    //         --ENVIÓ DE CORREO ELECTRONICO AL OFICIAL DE DESEMBOLSO
    //         PBD_COL_GRACION_MAIL(:CRTSOLICR1.SOLICR_OFCSOL,
    //                              :CRTSOLICR1.SOLICR_CODSOL,
    //                              :CRTSOLICR1.SOLICR_TIPCRE,
    //                              :CRTSOLICR1.SOLICR_USCIAL,
    //                              NULL,
    //                              :SYSTEM.CURRENT_FORM,
    //                              NULL,
    //                              :CRTSOLICR1.SOLICR_CODUNI --ARQUITECTURA
    //                              );
    //       
    //         --PY 13983 INICIO                       
    //         ---GENERACION PARA EL ASESOR DE DAVIVIENDA POR ARREGLAR PARA LOS OTROS TIPOS DE PRODUCTOS
    //       
    //         IF :CRTSOLICR.SOLICR_CODPRO = 'DAS' THEN
    //         
    //           BEGIN
    //             SELECT I.CONTPR_CORREO
    //               INTO V_ASESOR
    //               FROM OPS$COLOCA.COTCONTPR I
    //              WHERE I.CONTPR_CODCNT =
    //                    (SELECT O.REFPRV_CODASE
    //                       FROM CRTREFPRV O
    //                      WHERE O.REFPRV_OFCSOL = :CRTSOLICR1.SOLICR_OFCSOL
    //                        AND O.REFPRV_CODSOL = :CRTSOLICR1.SOLICR_CODSOL
    //                        AND O.REFPRV_CODPRV = '860034313' --NIT DAVIVIENDA
    //                     )
    //                AND ROWNUM = 1;
    //           END;
    //           /*
    //           BEGIN                  
    //            SELECT I.REFERI_CORREO
    //             INTO V_ASESOR
    //              FROM CRTREFXSO  O, CRTREFERI I                  
    //              WHERE O.REFXSO_NITTER = I.REFERI_NITTER
    //              AND   O.REFXSO_OFCSOL = :CRTSOLICR1.SOLICR_OFCSOL
    //              AND  O.REFXSO_CODSOL = :CRTSOLICR1.SOLICR_CODSOL; 
    //           END ; */
    //         
    //           PUP_ENVIO_CORREOASESO(:CRTSOLICR1.SOLICR_OFCSOL,
    //                                 :CRTSOLICR1.SOLICR_CODSOL,
    //                                 V_ASESOR,
    //                                 :CRTSOLICR.SOLICR_NITTER,
    //                                 'AC');
    //         
    //         END IF;
    //         --PY 13983 FIN
    //       
    //         FOR ACT IN COFI LOOP
    //           --ENVIÓ DE CORREO ELECTRONICO A LOS CARGOS ASISTENTE COMERCIAL
    //           PBD_COL_GRACION_MAIL(:CRTSOLICR1.SOLICR_OFCSOL,
    //                                :CRTSOLICR1.SOLICR_CODSOL,
    //                                :CRTSOLICR1.SOLICR_TIPCRE,
    //                                :CRTSOLICR1.SOLICR_USCIAL,
    //                                NULL,
    //                                :SYSTEM.CURRENT_FORM,
    //                                ACT.ASISTENTE,
    //                                :CRTSOLICR1.SOLICR_CODUNI --ARQUITECTURA
    //                                );
    //         END LOOP;
    //       END IF;
    //     
    //     ELSE
    //       LIB$ALERTA('MENSAJE',
    //                  'LA SOLICITUD NO HA SIDO APROBADA',
    //                  NULL,
    //                  NULL,
    //                  NULL,
    //                  T_RESPUESTA);
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFAPCIAL_crtsolicr1_solicrAprcia_whenButtonPressed() {
        console.log("Entering CRFAPCIAL_crtsolicr1_solicrAprcia_whenButtonPressed");
        if ((this.CRTSOLICR.SOLICR_NITTER != null)) {
            // CRFAPCIAL_PVALTER(this.CRTSOLICR.SOLICR_NITTER);
        }
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AC';
        let ESTADO_NO_VALIDO: null = null;
        let ERROR: string = null;
        let MENSAJE: string = null;
        let V_ASESOR: string = null;
        if (this.CRTSOLICR.SOLICR_ESTSOL == "AC") {
            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD YA FUE APROBADA, POR FAVOR SELECCIONE OTRA.", null, null, null, T_RESPUESTA);
        }
        else {
            if ((this.CRTSOLICR1.SOLICR_LINEADES == "LX" && (this.CRTSOLICR1.SOLICR_FDESEMCLI == null))) {
                this.oracleFormsBuiltins.go_item("CRTSOLICR1.SOLICR_FDESEMCLI");
                // CRFAPCIAL_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
            }
            // else if (this.CRTSOLICR1.SOLICR_FDESEMCLI < TRUNC(PLSQLBuiltins.sysdate()) + 2) {
            //     this.oracleFormsBuiltins.go_item("CRTSOLICR1.SOLICR_FDESEMCLI");
            //     CRFAPCIAL_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)" + PLSQLBuiltins.sysdate() + 2.toString());
            // }
            if ((this.CRTSOLICR.SOLICR_CODPRO == null)) {
                // CRFAPCIAL_LIB$DTNERFRMA("DEBE ESPECIFICAR CODIGO DE PRODUCTO");
            }
            // else if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
            //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
            //     this.CRTSOLICR1.SOLICR_FEACIA = new Date(SYSDATE.toString());
            //     let result0 = new Map();
            //     try {

            //         CRFAPCIAL_PBD_COL_ASIGOFIDESEMBOLSO(CRTSOLICR.SOLICR_OFCSOL, VARIABLE.SOLICITUD, CRTSOLICR.SOLICR_CODPRO, CRTSOLICR1.SOLICR_NITTER, CRTSOLICR.SOLICR_USCIAL, CRTSOLICR.SOLICR_LINEA, CRTSOLICR1.SOLICR_USOFID, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODUNI, ERROR, MENSAJE);
            //     } catch (ex) {

            //         CRFAPCIAL_LIB$DTNERFRMA(ERROR + SQLERRM);
            //     }

            //     if ((ERROR != null)) {
            //         CRFAPCIAL_LIB$DTNERFRMA(ERROR);
            //     }
            //     else if ((MENSAJE != null)) {
            //         CRFAPCIAL_LIB$ALERTA("MENSAJE", MENSAJE, null, null, null, T_RESPUESTA);
            //     }
            //     if (["LI", "I1", "IB", "IF", "IR", "LM", "V2", "OI"].indexOf(CRTSOLICR.SOLICR_LINEA) != -1) {
            //         if ((CRTSOLICR.SOLICR_ORMONET != "PE" || CRTSOLICR.SOLICR_ORMONUS$ != "PE")) {
            //             CRFAPCIAL_OPS$COLOCA.PQBD_COL_MOD_IMPORTACION.PBD_COL_ING_IMPORTACION(CRTSOLICR.SOLICR_CODSOL, CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_TIPBIE, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODUNI, MENSAJE);
            //         }
            //         else {
            //             CRFAPCIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD ES LEASING DE IMPORTACION Y SU ORIGEN MONETARIO ES PE. LA OPERACION NO INGRESARÁ AL MODULO DE IMPORTACIONES", null, null, null, T_RESPUESTA);
            //         }
            //         if ((MENSAJE != null)) {
            //             CRFAPCIAL_LIB$ALERTA("MENSAJE", MENSAJE, null, null, null, T_RESPUESTA);
            //         }
            //     }
            //     // construct payload
            //     let payload2 = new Map();
            //     payload2.set("SOLICR_USOFID", CRTSOLICR1.SOLICR_USOFID);
            //     // call REST API
            //     const result2 = await Rest.post("/crfapcial_crtsolicr1/crfapcial_crtsolicr1_solicraprcia_whenbuttonpressed_query2", payload2);
            //     // get values from result
            //     V_NOMUSOFID = result2[0].get("V_NOMUSOFID");
            //     if (result2 == null || result2.length == 0) {

            //         this.CRTSOLICR1.V_NOMUSOFID = null;
            //     }

            //     if ((CRTSOLICR1.SOLICR_USOFID != null)) {
            //         this.oracleFormsBuiltins.commit_form();
            //     }
            //     this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_FALSE");
            //     if ((CRTSOLICR1.SOLICR_USOFID == null)) {
            //         CRFAPCIAL_LIB$DTNERFRMA("ERROR NO SE PUDO OBTENER EL OFICIAL DE DESEMBOLSO.");
            //     }
            //     else {
            //         CRFAPCIAL_PBD_COL_GRACION_MAIL(CRTSOLICR1.SOLICR_OFCSOL, CRTSOLICR1.SOLICR_CODSOL, CRTSOLICR1.SOLICR_TIPCRE, CRTSOLICR1.SOLICR_USCIAL, null, this._SYSTEM_SERVICE.get("CURRENT_FORM"), null, CRTSOLICR1.SOLICR_CODUNI);
            //         if (CRTSOLICR.SOLICR_CODPRO == "DAS") {
            //             // construct payload
            //             let payload4 = new Map();
            //             payload4.set("SOLICR_CODSOL", CRTSOLICR1.SOLICR_CODSOL);
            //             payload4.set("SOLICR_OFCSOL", CRTSOLICR1.SOLICR_OFCSOL);
            //             // call REST API
            //             const result4 = await Rest.post("/crfapcial_crtsolicr1/crfapcial_crtsolicr1_solicraprcia_whenbuttonpressed_query4", payload4);
            //             // get values from result
            //             V_ASESOR = result4[0].get("V_ASESOR");
            //             CRFAPCIAL_PUP_ENVIO_CORREOASESO(CRTSOLICR1.SOLICR_OFCSOL, CRTSOLICR1.SOLICR_CODSOL, V_ASESOR, CRTSOLICR.SOLICR_NITTER, "AC");
            //         }
            //     }
            // }
            else {
                // CRFAPCIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
            }
        }
        console.log("Exiting CRFAPCIAL_crtsolicr1_solicrAprcia_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTSOLICR1 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTSOLICR1_CUR IS      
    //     SELECT 1 FROM CRTSOLICR     
    //     WHERE SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   --
    //   -- END CRTSOLICR1 DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTSOLICR1_CUR;     
    //   FETCH CRTSOLICR1_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTSOLICR1_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTSOLICR1_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTSOLICR1_CUR;
    //   --
    //   -- END CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFAPCIAL_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFAPCIAL_crtsolicr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFAPCIAL_crtsolicr_onCheckDeleteMaster");
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
    //   -- BEGIN CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.APROXOBSERV');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTSOLICR1');   
    //   END IF;
    //   --
    //   -- END CRTSOLICR1 DETAIL PROGRAM SECTION
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
    async CRFAPCIAL_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFAPCIAL_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.APROXOBSERV");
            // CRFAPCIAL_QUERY_MASTER_DETAILS(REL_ID, "CRTSOLICR1");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFAPCIAL_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFAPCIAL_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    // BEGIN
    //     SELECT USU_NOMBRE 
    //     INTO :VARIABLE.NOM_USU
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO = :BASE.USUARIO;
    // END;
    //#endregion
    async CRFAPCIAL_crtsolicr_postQuery() {
        console.log("Entering CRFAPCIAL_crtsolicr_postQuery");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfapcial_crtsolicr/crfapcial_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("USUARIO", this.BASE.USUARIO);
        // call REST API
        const result2 = await Rest.post("/crfapcial_crtsolicr/crfapcial_crtsolicr_postquery_query2", payload2);
        // get values from result
        this.VARIABLE.NOM_USU = result2[0].get("VARIABLE.NOM_USU");
        console.log("Exiting CRFAPCIAL_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFAPCIAL_crtsolicr_solicrNitter_posttextitem() {
        console.log("Entering CRFAPCIAL_crtsolicr_solicrNitter_posttextitem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfapcial_crtsolicr/crfapcial_crtsolicr_solicrnitter_posttextitem_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            // CRFAPCIAL_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFAPCIAL_crtsolicr_solicrNitter_posttextitem");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFAPCIAL_toolbar_whenButtonPressed() {
        console.log("Entering CRFAPCIAL_toolbar_whenButtonPressed");
        // CRFAPCIAL_TOOLBAR_ACTIONS();
        console.log("Exiting CRFAPCIAL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFAPCIAL_toolbar_whenMouseLeave() {
        console.log("Entering CRFAPCIAL_toolbar_whenMouseLeave");
        // CRFAPCIAL_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFAPCIAL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async CRFAPCIAL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFAPCIAL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFAPCIAL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFAPCIAL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFAPCIAL_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFAPCIAL_base_fecha_whenNewItemInstance");
    }

}

