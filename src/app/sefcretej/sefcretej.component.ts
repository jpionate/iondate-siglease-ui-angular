import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFCRETEJ business logic
import {
    SETOPINT1,
    FAMMAN01,
    TERMAN01,
    DIRECCIONESINTRO,
    SETOPINT,
    TOOLBAR,
    DIR,
    SETSOCIOS,
    SETFATCACCR,
    SETHIACEC,
    BASE,
    DCO,
    SETTERXCOM,
    SETTERXCOM1,
    SETTERXJU,
    DIRECCIONES,
    SETFACTAJUR,
    SETVEHAFI,
    COVPIEDRA,
    RADIOS,
    ZOOM,
    ENTMAN02
} from "./SEFCRETEJ_models";



// class SEFCRETEJ
@Component({
    selector: 'app-sefcretej',
    templateUrl: './sefcretej.component.html',
})
export class SefcretejComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETOPINT1: SETOPINT1 = new SETOPINT1();
    public FAMMAN01: FAMMAN01 = new FAMMAN01();
    public TERMAN01: TERMAN01 = new TERMAN01();
    public DIRECCIONESINTRO: DIRECCIONESINTRO = new DIRECCIONESINTRO();
    public SETOPINT: SETOPINT = new SETOPINT();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public DIR: DIR = new DIR();
    public SETSOCIOS: SETSOCIOS = new SETSOCIOS();
    public SETFATCACCR: SETFATCACCR = new SETFATCACCR();
    public SETHIACEC: SETHIACEC = new SETHIACEC();
    public BASE: BASE = new BASE();
    public DCO: DCO = new DCO();
    public SETTERXCOM: SETTERXCOM = new SETTERXCOM();
    public SETTERXCOM1: SETTERXCOM1 = new SETTERXCOM1();
    public SETTERXJU: SETTERXJU = new SETTERXJU();
    public DIRECCIONES: DIRECCIONES = new DIRECCIONES();
    public SETFACTAJUR: SETFACTAJUR = new SETFACTAJUR();
    public SETVEHAFI: SETVEHAFI = new SETVEHAFI();
    public COVPIEDRA: COVPIEDRA = new COVPIEDRA();
    public RADIOS: RADIOS = new RADIOS();
    public ZOOM: ZOOM = new ZOOM();
    public ENTMAN02: ENTMAN02 = new ENTMAN02();


    //#region PLSQL
    // BEGIN MESSAGE('UTILICE EL MOUSE PARA UBICARSE SOBRE LAS CASILLAS');
    // MESSAGE('UTILICE EL MOUSE PARA UBICARSE SOBRE LAS CASILLAS'); END;
    //#endregion
    async SEFCRETEJ_keyPrevItem() {
        console.log("Entering SEFCRETEJ_keyPrevItem");
        this.oracleFormsBuiltins.message("UTILICE EL MOUSE PARA UBICARSE SOBRE LAS CASILLAS");
        this.oracleFormsBuiltins.message("UTILICE EL MOUSE PARA UBICARSE SOBRE LAS CASILLAS");
        console.log("Exiting SEFCRETEJ_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //  :this.PARAMETER.get("CONS_TER") := NULL;
    //   CLEAR_ALL_MASTER_DETAILS;  
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async SEFCRETEJ_onClearDetails() {
        console.log("Entering SEFCRETEJ_onClearDetails");
        this.PARAMETER.set("CONS_TER", null);
        // SEFCRETEJ_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting SEFCRETEJ_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_onError() {
        console.log("Entering SEFCRETEJ_onError");
        console.log("Exiting SEFCRETEJ_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_whenMouseDoubleclick() {
        console.log("Entering SEFCRETEJ_whenMouseDoubleclick");
        console.log("Exiting SEFCRETEJ_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_onMessage() {
        console.log("Entering SEFCRETEJ_onMessage");
        console.log("Exiting SEFCRETEJ_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_preForm() {
        console.log("Entering SEFCRETEJ_preForm");
        console.log("Exiting SEFCRETEJ_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE;
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");  
    // :this.PARAMETER.get("CONS_TER"):=NULL; 
    // 
    // IF(:this.PARAMETER.get("TER_NIT") IS NOT NULL AND :this.PARAMETER.get("TER_CTRL") <>'I') THEN
    //  EXECUTE_QUERY;
    //  GO_ITEM('TERMAN01.TERCOD')
    //  ;
    //  
    // ELSIF (:this.PARAMETER.get("TER_NIT") IS NOT NULL AND :this.PARAMETER.get("TER_CTRL") ='I') THEN
    //   :TERMAN01.TERCOD := :this.PARAMETER.get("TER_NIT");
    //   
    // ELSIF (:this.PARAMETER.get("TER_NIT") IS NULL AND :this.PARAMETER.get("TER_CTRL") ='I' ) THEN
    //  GO_BLOCK('TERMAN01');
    // END IF;
    // 
    // --------------------------------------------------------------------
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // BEGIN     
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
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.LOGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
    //  END IF;
    //  
    //   
    //   
    // --PERMISOS POR USUARIO
    // PU_PERMISO_BLOQUES;
    // 
    // GO_ITEM('SETSOCIOS.SOCIOS_CODSOC');  
    //         EXECUTE_QUERY;
    // GO_ITEM('TERMAN01.TERTID');       
    // 
    // END;
    // -----------------------------------------------------------------------; END;
    //#endregion
    async SEFCRETEJ_whenNewFormInstance() {
        console.log("Entering SEFCRETEJ_whenNewFormInstance");
        // SEFCRETEJ_REF$WHEN_NEW_FORM_INSTANCE();
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.PARAMETER.set("CONS_TER", null);
        if (((this.PARAMETER.get("TER_NIT") != null) && this.PARAMETER.get("TER_CTRL") != "I")) {
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_item("TERMAN01.TERCOD");
        }
        else if (((this.PARAMETER.get("TER_NIT") != null) && this.PARAMETER.get("TER_CTRL") == "I")) {
            this.TERMAN01.TERCOD = this.PARAMETER.get("TER_NIT");
        }
        else if (((this.PARAMETER.get("TER_NIT") == null) && this.PARAMETER.get("TER_CTRL") == "I")) {
            this.oracleFormsBuiltins.go_block("TERMAN01");
        }
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/sefcretej/sefcretej_whennewforminstance_query1", payload1);
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
            // SEFCRETEJ_PU_PERMISO_BLOQUES();
            this.oracleFormsBuiltins.go_item("SETSOCIOS.SOCIOS_CODSOC");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_item("TERMAN01.TERTID");
        }

        console.log("Exiting SEFCRETEJ_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  
    // --PY 18422 : LCBY
    // DECLARE
    //  CANTIDAD NUMBER := ;
    //  CANTIDIR NUMBER := ;
    //  V_CANSOC NUMBER := ;
    // BEGIN
    //  --VALIDACIÓN PARA RAZÓN SOCIAL
    //  CANTIDAD := PLSQLBuiltins.string_length(:TERMAN01.TERAPE);
    //  
    //  IF (CANTIDAD > 50) THEN
    //   LIB$DTNERFRMA('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.');
    //  END IF;
    //  
    //  --VALIDACIÓN PARA DIRECCIÓN
    //  CANTIDIR := PLSQLBuiltins.string_length(:TERMAN01.TERDIR);
    //  
    //  IF (CANTIDIR > 100) THEN
    //   LIB$DTNERFRMA('EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.');
    //   
    //  ELSE
    //   CANTIDIR := PLSQLBuiltins.string_length(:ENTMAN02.ENTDIR);
    //    IF (CANTIDIR > 100) THEN
    //         LIB$DTNERFRMA('EL CAMPO DIRECCIÓN COMERCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.');
    //    ELSE
    //     CANTIDIR := PLSQLBuiltins.string_length(:ENTMAN02.ENTDIR1);
    //     IF (CANTIDIR > 100) THEN
    //         LIB$DTNERFRMA('EL CAMPO DIRECCIÓN RESIDENCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.');
    //     END IF;
    //     END IF;
    //  END IF;
    //  
    // 
    // --PY 18422  
    //     
    //     IF :TERMAN01.TERTEL IS NULL AND :TERMAN01.TERCELU IS NULL THEN
    //            LIB$DTNERFRMA('POR FAVOR INGRESE EL NÚMERO DE TELÉFONO O DE CELULAR');
    //   --ELSIF :TERMAN01.TERCELU IS NULL THEN
    //            --LIB$DTNERFRMA('POR FAVOR INGRESE EL NÚMERO DE CELULAR');
    //   ELSIF :TERMAN01.TERDIR IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA DIRECCIÓN');
    //    ELSIF :ENTMAN02.ENTPAIS IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL PAÍS DE UBICACIÓN');    
    //   ELSIF :TERMAN01.TERDEP IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL DEPARTAMENTO DE UBICACIÓN');     
    //   ELSIF :TERMAN01.TERDEP IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA CIUDAD DE UBICACIÓN');
    //    /*ELSIF :ENTMAN02.ENTFECN IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA FECHA DE CONSTITUCIÓN DE LA EMPRESA');*/              
    //   ELSIF :ENTMAN02.ENTCIUU IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL CODIGO CIIU');
    //   ELSIF :ENTMAN02.ENTRTRI IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL REGIMEN TRIBUTARIO');
    //    ELSIF :ENTMAN02.ENTPRO IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL CANAL DE VINCULACION');
    //    ELSIF :ENTMAN02.ENTSOC IS NULL THEN
    //        LIB$DTNERFRMA('POR FAVOR INGRESE EL TIPO DE SOCIEDAD');
    //    /*ELSIF :ENTMAN02.ENTIPS IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL TIPO DE SEDE');
    //    ELSIF :ENTMAN02.ENTMES IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA MODALIDAD DE EXTRACTOS');  
    //     ELSIF :ENTMAN02.ENTMAC IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA MODALIDAD ENTREGA INFORME ANUAL DE COSTOS');  
    //   ELSIF :ENTMAN02.ENTOPI IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI TIENE OPERACIONES INTERNACIONALES');*/
    //    ELSIF :ENTMAN02.ENTOME IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI TIENE OPERACIONES EN MONEDA EXTRANJERA');
    //     /*ELSIF :ENTMAN02.ENTEMA IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA A TENIDO AMONESTACIONES');
    //   ELSIF :ENTMAN02.ENTRLG IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA TIENE RELACION CON EL GRUPO');
    //   ELSIF :ENTMAN02.ENTOVC IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA ES OBJETO VINCULACION DE CAMPAÑAS POLÍTICAS');
    //    ELSIF :ENTMAN02.ENTCPP IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA TIENE CLIENTE PROVEEDOR PRINCIPAL');
    //    ELSIF :ENTMAN02.ENTEMF IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA CUENTA CON FILIALES');    
    //    ELSIF :ENTMAN02.ENTNEN IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE NEGOCIOS DE LA EMPRESA NACIONAL');
    //    ELSIF :ENTMAN02.ENTNEI IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE NEGOCIOS DE LA EMPRESA INTERNACIONAL');
    //    ELSIF :ENTMAN02.ENTEOD IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA PERCIBE EN SU NEGOCIO OTRAS DIVISAS');
    //    ELSIF :ENTMAN02.ENTOBF IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA TIENE OBLIGACIONES FINANCIERAS');
    //   ELSIF :ENTMAN02.ENTETE IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA TIENE TESORERO');
    //    ELSIF :ENTMAN02.ENTERF IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE SI LA EMPRESA TIENE REVISOR FISCAL');
    //   ELSIF :ENTMAN02.ENTSSA IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL CAMPO SIPLA/SARLAF');
    //    ELSIF :ENTMAN02.ENTRFP IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL CAMPO RETEFUENTE DEL PRODUCTO');
    //   ELSIF :ENTMAN02.ENT_DECLARA IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA DECLARACION RENTA');
    //   ELSIF :ENTMAN02.ENTICA IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE LA CLASIFICACIÓN ICA');
    //   ELSIF :ENTMAN02.ENT_ORGFON IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESE EL ORIGEN DE FONDOS'); 
    //   ELSIF :DCO.DCOTIPE IS NULL THEN
    //        LIB$DTNERFRMA('POR FAVOR INGRESE LA CLASE DE SOCIEDAD'); 
    //   ELSIF :DCO.DCO_RECPUB IS NULL THEN
    //        LIB$DTNERFRMA('POR FAVOR INGRESE SI MANEJA RECURSOR PUBLICOS');       
    //    ELSIF :SETSOCIOS.SOCIOS_CODSOC IS NULL AND (:SETSOCIOS.SOCIOS_TIPO <> 'ACC' OR :SETSOCIOS.SOCIOS_TIPO IS NULL) THEN
    //        LIB$DTNERFRMA('POR FAVOR INGRESE AL MENOS UN SOCIO'); 
    //    ELSIF :SETSOCIOS.SOCIOS_CODSOC IS NOT NULL AND (:SETSOCIOS.SOCIOS_TIPO <> 'ACC' OR :SETSOCIOS.SOCIOS_TIPO IS NULL) THEN
    //        LIB$DTNERFRMA('POR FAVOR INGRESE AL MENOS UN SOCIO'); */
    //   END IF;
    //   
    // 
    //  
    //    DECLARE
    //    V_SIREPITE  NUMBER;
    //   BEGIN
    //    SELECT INSTR(:ENTMAN02.ENTMAIL,'@', 1, 2)
    //      INTO V_SIREPITE
    //     FROM DUAL;
    //  
    //    IF V_SIREPITE <> 0 THEN
    //     LIB$DTNERFRMA('SOLO PUEDE INGRESAR UN CORREO ELECTRONICO.');  
    //     END IF;
    //  
    //   END; 
    //    
    //    --VALIDAR TESORERO Y REVISOR FISCAL
    //    /*IF (:this.PARAMETER.get("TESORERO") = 'S') THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESE INFORMACIÓN DEL TESORERO EN EL CUADRO DE RELACIÓN ACCIONISTAS / REP LEGAL / TESORERO / REV FISCAL.');
    //    END IF;
    //    
    //    IF (:this.PARAMETER.get("REVFISCAL") = 'S') THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESE INFORMACIÓN DEL REVISOR FISCAL EN EL CUADRO DE RELACIÓN ACCIONISTAS / REP LEGAL / TESORERO / REV FISCAL.');
    //    END IF;*/
    //    
    //    IF (:SETFACTAJUR.FACJUR_PAISCO IS NOT NULL) THEN
    //     
    //     --VALIDA SI ES OBLIGATORIO EL TAX.PARAMENTRO EN M PARA MOSTRAR MENSAJE DE VALIDACION.
    //          PU_VALIDA_TAX('D');
    //          
    //      IF (:SETFACTAJUR.FACJUR_SUOEMP = '' OR :SETFACTAJUR.FACJUR_SUOEMP IS NULL ) THEN
    //           LIB$DTNERFRMA('DEBE INGRESAR LA INFORMACION DE SUCURSAL, FILIAL O SUBSIDIARIA DE OTRA EMPRESA');
    //   
    //        ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_PAISCM IS NULL ) THEN
    //           LIB$DTNERFRMA('DEBE INGRESAR EL PAÍS DE CONSTITUCIÓN DE LA CASA MATRIZ.');
    //   
    //        ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_DIREXT IS NULL ) THEN
    //           LIB$DTNERFRMA('DEBE INGRESAR LA DIRECCIÓN DE LA CASA MATRIZ.');
    //      
    //        ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_ESTOCM IS NULL ) THEN
    //        LIB$DTNERFRMA('DEBE INGRESAR EL ESTADO DE LA CASA MATRIZ.');
    //   
    //        ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_CIUOCM IS NULL ) THEN
    //           LIB$DTNERFRMA('DEBE INGRESAR LA CIUDAD DE LA CASA MATRIZ.'); 
    //      
    //     ELSIF (:SETFACTAJUR.FACJUR_EMPCOB = '' OR :SETFACTAJUR.FACJUR_EMPCOB IS NULL ) THEN
    //        LIB$DTNERFRMA('DEBE INGRESAR SI LA EMPRESA COTIZA EN BOLSA.'); 
    //      
    //     ELSIF (:SETFACTAJUR.FACJUR_TRBUSA = '' OR :SETFACTAJUR.FACJUR_TRBUSA IS NULL ) THEN
    //        LIB$DTNERFRMA('DEBE INGRESAR SI LA EMPRESA TRIBUTA EN USA.');
    //        
    //     ELSIF (:SETFACTAJUR.FACJUR_ENTVIG = '' OR :SETFACTAJUR.FACJUR_ENTVIG IS NULL) THEN
    //        LIB$DTNERFRMA('DEBE INGRESAR SI LA EMPRESA ES VIGILADA POR LA SUPERINTENDENCIA FINANCIERA.');
    //   
    //     ELSIF (:SETFACTAJUR.FACJUR_ENTVIG = 'SI' AND :SETFACTAJUR.FACJUR_NUMENV IS NULL ) THEN
    //        LIB$DTNERFRMA('DEBE INGRESAR LA IDENTIFICACION DE ENTIDAD VIGILADA (GIN).');
    //     END IF;
    //       --VALIDA SI ES IMPACTADO POR FACTA
    //          PU_VALIDA_FACTA;
    //    END IF;
    //    
    //    
    //    IF (:SETFATCACCR.FATACR_PORGRF IS NOT NULL) THEN
    //       IF (:SETFATCACCR.FATACR_PORGRF > 100) THEN
    //         LIB$DTNERFRMA('EL PORCENTAJE DE PARTICIPACION DEL GRUPO FAMILIAR NO DEBE EXCEDER EL 100%.');
    //       END IF;
    //    END IF;
    //    --LCBY: PY 16157
    //    IF (:ENTMAN02.ENTOME = 'S') THEN 
    //     IF (:SETOPINT.OPINT_TIOPE IS NULL) THEN 
    //        LIB$DTNERFRMA('POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.');  
    //       END IF;
    //     ELSE
    //       IF (:SETOPINT.OPINT_TIOPE IS NOT NULL) THEN
    //          :ENTMAN02.ENTOME := 'S';
    //       END IF;
    //     END IF;
    //   --PY 16157 
    //   
    //    
    // DECLARE  --PY 8044
    //   V_CALIFI   VARCHAR2(1);
    //   V_CALIFI1  NUMBER;
    // BEGIN
    //   BEGIN
    //    SELECT NVL(TCI_VEHAFI,'N')  
    //     INTO V_CALIFI 
    //      FROM OPS$SEGUI.TCI TC     
    //      WHERE TC.TCICOD = :ENTMAN02.ENTCIUU;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN  V_CALIFI := 'N'; 
    //    END;
    // 
    //      IF (V_CALIFI = 'S') AND (:SETVEHAFI.VEHAFI_NITEMP IS NULL)    THEN  
    //           LIB$DTNERFRMA('POR FAVOR INGRESE CON ESTE CÓDIGO CIUU EL PROVEEDOR ASOCIADO.');   
    //      END IF; 
    // END;
    // --PY 8044  
    //   
    // --8817 AOV
    // VALIDA_PROVEEDOR(2); -- 2: CON MJE - PRECOMMIT
    // 
    // IF :GLOBAL.V_TERVI = '24' AND :GLOBAL.V_TERVI <> :TERMAN01.TERTVI THEN
    //    :TERMAN01.TERTVI := '24';
    //    :TERMAN01.DESVIN := 'PROVEEDOR ADMINISTRATIVO';
    //    LIB$DTNERFRMA('EL TIPO DE VINCULO ES 24 (PROVEEDOR ADMINISTRATIVO). PARA CAMBIARLO DEBE COMUNICARSE EL ÁREA DE INNOVACIÓN Y SERVICIO');
    // ELSIF  :GLOBAL.V_TERVI <> :TERMAN01.TERTVI AND  :TERMAN01.TERTVI = '24' THEN
    //    --PY12457. SE COLOCA COMENTARIO EN LA SIGUIENTE LÍNEA PARA ELIMINAR ERROR AL MOMENTO DE GUARDAR LOS DATOS.
    //    --GO_ITEM('TERMAN01.TERTVI');
    //    :TERMAN01.TERTVI := :GLOBAL.V_TERVI;
    //    LIB$DTNERFRMA('PARA CAMBIARLO DEBE COMUNICARCE EL ÁREA DE INNOVACIÓN Y SERVICIO');
    // END IF;
    // 
    //   
    // END;
    // END;
    //#endregion
    async SEFCRETEJ_preCommit() {
        console.log("Entering SEFCRETEJ_preCommit");
        {

            let CANTIDAD: number = null;
            let CANTIDIR: number = null;
            let V_CANSOC: number = null;
            CANTIDAD = PLSQLBuiltins.string_length(this.TERMAN01.TERAPE);
            if (CANTIDAD > 50) {
                // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.");
            }
            CANTIDIR = PLSQLBuiltins.string_length(this.TERMAN01.TERDIR);
            if (CANTIDIR > 100) {
                // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.");
            }
            else {
                CANTIDIR = PLSQLBuiltins.string_length(this.ENTMAN02.ENTDIR);
                if (CANTIDIR > 100) {
                    // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN COMERCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.");
                }
                else {
                    CANTIDIR = PLSQLBuiltins.string_length(this.ENTMAN02.ENTDIR1);
                    if (CANTIDIR > 100) {
                        // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN RESIDENCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.");
                    }
                }
            }
            if (((this.TERMAN01.TERTEL == null) && (this.TERMAN01.TERCELU == null))) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL NÚMERO DE TELÉFONO O DE CELULAR");
            }
            else if ((this.TERMAN01.TERDIR == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE LA DIRECCIÓN");
            }
            else if ((this.ENTMAN02.ENTPAIS == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL PAÍS DE UBICACIÓN");
            }
            else if ((this.TERMAN01.TERDEP == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL DEPARTAMENTO DE UBICACIÓN");
            }
            else if ((this.TERMAN01.TERDEP == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE LA CIUDAD DE UBICACIÓN");
            }
            else if ((this.ENTMAN02.ENTCIUU == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL CODIGO CIIU");
            }
            else if ((this.ENTMAN02.ENTRTRI == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL REGIMEN TRIBUTARIO");
            }
            else if ((this.ENTMAN02.ENTPRO == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL CANAL DE VINCULACION");
            }
            else if ((this.ENTMAN02.ENTSOC == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL TIPO DE SOCIEDAD");
            }
            else if ((this.ENTMAN02.ENTOME == null)) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE SI TIENE OPERACIONES EN MONEDA EXTRANJERA");
            }
            {

                let V_SIREPITE: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("ENTMAIL", this.ENTMAN02.ENTMAIL);
                // call REST API
                const result1 = await Rest.post("/sefcretej/sefcretej_precommit_query1", payload1);
                // get values from result
                V_SIREPITE = result1[0].get("V_SIREPITE");
                if (V_SIREPITE != 0) {
                    // SEFCRETEJ_LIB$DTNERFRMA("SOLO PUEDE INGRESAR UN CORREO ELECTRONICO.");
                }
            }

            if ((this.SETFACTAJUR.FACJUR_PAISCO != null)) {
                // SEFCRETEJ_PU_VALIDA_TAX("D");
                if ((this.SETFACTAJUR.FACJUR_SUOEMP == "" || (this.SETFACTAJUR.FACJUR_SUOEMP == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR LA INFORMACION DE SUCURSAL, FILIAL O SUBSIDIARIA DE OTRA EMPRESA");
                }
                else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_PAISCM == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR EL PAÍS DE CONSTITUCIÓN DE LA CASA MATRIZ.");
                }
                else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_DIREXT == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR LA DIRECCIÓN DE LA CASA MATRIZ.");
                }
                else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_ESTOCM == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR EL ESTADO DE LA CASA MATRIZ.");
                }
                else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_CIUOCM == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR LA CIUDAD DE LA CASA MATRIZ.");
                }
                else if ((this.SETFACTAJUR.FACJUR_EMPCOB == "" || (this.SETFACTAJUR.FACJUR_EMPCOB == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR SI LA EMPRESA COTIZA EN BOLSA.");
                }
                else if ((this.SETFACTAJUR.FACJUR_TRBUSA == "" || (this.SETFACTAJUR.FACJUR_TRBUSA == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR SI LA EMPRESA TRIBUTA EN USA.");
                }
                else if ((this.SETFACTAJUR.FACJUR_ENTVIG == "" || (this.SETFACTAJUR.FACJUR_ENTVIG == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR SI LA EMPRESA ES VIGILADA POR LA SUPERINTENDENCIA FINANCIERA.");
                }
                else if ((this.SETFACTAJUR.FACJUR_ENTVIG == "SI" && (this.SETFACTAJUR.FACJUR_NUMENV == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("DEBE INGRESAR LA IDENTIFICACION DE ENTIDAD VIGILADA (GIN).");
                }
                // SEFCRETEJ_PU_VALIDA_FACTA();
            }
            if ((this.SETFATCACCR.FATACR_PORGRF != null)) {
                if (this.SETFATCACCR.FATACR_PORGRF > 100) {
                    // SEFCRETEJ_LIB$DTNERFRMA("EL PORCENTAJE DE PARTICIPACION DEL GRUPO FAMILIAR NO DEBE EXCEDER EL 100%.");
                }
            }
            if (this.ENTMAN02.ENTOME == "S") {
                if ((this.SETOPINT.OPINT_TIOPE == null)) {
                    // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.");
                }
            }
            else {
                if ((this.SETOPINT.OPINT_TIOPE != null)) {
                    this.ENTMAN02.ENTOME = "S";
                }
            }
            {

                let V_CALIFI: string = null;
                let V_CALIFI1: number = null;
                // construct payload
                let payload2 = new Map();
                payload2.set("ENTCIUU", this.ENTMAN02.ENTCIUU);
                // call REST API
                const result2 = await Rest.post("/sefcretej/sefcretej_precommit_query2", payload2);
                // get values from result
                V_CALIFI = result2[0].get("V_CALIFI");
                if (result2 == null || result2.length == 0) {

                    V_CALIFI = "N";
                }

                if ((V_CALIFI == "S" && (this.SETVEHAFI.VEHAFI_NITEMP == null))) {
                    // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE CON ESTE CÓDIGO CIUU EL PROVEEDOR ASOCIADO.");
                }
            }

            // SEFCRETEJ_VALIDA_PROVEEDOR(2);
            // if ((GLOBAL.V_TERVI == "24" && GLOBAL.V_TERVI != TERMAN01.TERTVI)) {
            //     this.TERMAN01.TERTVI = "24";
            //     this.TERMAN01.DESVIN = "PROVEEDOR ADMINISTRATIVO";
            //     // SEFCRETEJ_LIB$DTNERFRMA("EL TIPO DE VINCULO ES 24 (PROVEEDOR ADMINISTRATIVO). PARA CAMBIARLO DEBE COMUNICARSE EL ÁREA DE INNOVACIÓN Y SERVICIO");
            // }
            // else if ((GLOBAL.V_TERVI != TERMAN01.TERTVI && TERMAN01.TERTVI == "24")) {
            //     this.TERMAN01.TERTVI = this.GLOBAL.V_TERVI;
            //     // SEFCRETEJ_LIB$DTNERFRMA("PARA CAMBIARLO DEBE COMUNICARCE EL ÁREA DE INNOVACIÓN Y SERVICIO");
            // }
        }

        console.log("Exiting SEFCRETEJ_preCommit");
    }

    //#region PLSQL
    // DECLARE 
    //  --T_RESPUESTA NUMBER;
    //  V_SOCIOS NUMBER(1);
    //  V_CANTSO NUMBER(1);
    // BEGIN
    //  
    // IF :this.PARAMETER.get("TER_CTRL") <> 'C' THEN
    // -- PUP_ACCI;
    //  PUP_FLAGTESRVF;
    //   COMMIT_FORM;
    //  SELECT COUNT(1)
    //    INTO V_SOCIOS
    //    FROM SETSOCIOS
    //   WHERE SOCIOS_PRINCI = :TERMAN01.TERCOD
    //     AND SOCIOS_STFUSA IS NULL;
    //     
    //   IF (V_SOCIOS <> 0) THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR SI LOS SOCIOS TRIBUTAN FISCALMENTE EN USA.');
    //   END IF; 
    //   
    //   SELECT COUNT(1)
    //    INTO V_CANTSO
    //    FROM SETSOCIOS
    //   WHERE SOCIOS_PRINCI = :TERMAN01.TERCOD
    //     AND SOCIOS_TIPO NOT IN ('FIS','TES');
    // 
    //     :SETSOCIOS.CANT_SOC := V_CANTSO;
    //    COMMIT;
    //   
    // SHOW_VIEW ('C_BASICOS'); 
    // 
    // GO_BLOCK('TERMAN01');
    // EXECUTE_QUERY; 
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    // :RADIOS.RREPORTES:='R1'; 
    //   
    // END IF;
    // 
    // 
    // END;
    //#endregion
    async SEFCRETEJ_keyCommit() {
        console.log("Entering SEFCRETEJ_keyCommit");
        let V_SOCIOS: number = null;
        let V_CANTSO: number = null;
        if (this.PARAMETER.get("TER_CTRL") != "C") {
            // SEFCRETEJ_PUP_FLAGTESRVF();
            this.oracleFormsBuiltins.commit_form();
            // construct payload
            let payload1 = new Map();
            payload1.set("TERCOD", this.TERMAN01.TERCOD);
            // call REST API
            const result1 = await Rest.post("/sefcretej/sefcretej_keycommit_query1", payload1);
            // get values from result
            V_SOCIOS = result1[0].get("V_SOCIOS");
            if (V_SOCIOS != 0) {
                // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESAR SI LOS SOCIOS TRIBUTAN FISCALMENTE EN USA.");
            }
            // construct payload
            let payload2 = new Map();
            payload2.set("TERCOD", this.TERMAN01.TERCOD);
            // call REST API
            const result2 = await Rest.post("/sefcretej/sefcretej_keycommit_query2", payload2);
            // get values from result
            V_CANTSO = result2[0].get("V_CANTSO");
            this.SETSOCIOS.CANT_SOC = V_CANTSO;
            this.oracleFormsBuiltins.show_view("C_BASICOS");
            this.oracleFormsBuiltins.go_block("TERMAN01");
            this.oracleFormsBuiltins.execute_query();
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.RADIOS.RREPORTES = "R1";
        }
        console.log("Exiting SEFCRETEJ_keyCommit");
    }

    //#region PLSQL
    // BEGIN --PUP_ACCI;
    // EXIT_FORM; END;
    //#endregion
    async SEFCRETEJ_keyExit() {
        console.log("Entering SEFCRETEJ_keyExit");
        this.oracleFormsBuiltins.exit_form();
        console.log("Exiting SEFCRETEJ_keyExit");
    }

    //#region PLSQL
    // BEGIN MESSAGE('PORFAVOR UTILICE EL MOUSE PARA DEVOLVERSE ENTRE LAS OPCIONES DEL MENÚ');
    // MESSAGE('PORFAVOR UTILICE EL MOUSE PARA DEVOLVERSE ENTRE LAS OPCIONES DEL MENÚ'); END;
    //#endregion
    async SEFCRETEJ_keyPrvblk() {
        console.log("Entering SEFCRETEJ_keyPrvblk");
        this.oracleFormsBuiltins.message("PORFAVOR UTILICE EL MOUSE PARA DEVOLVERSE ENTRE LAS OPCIONES DEL MENÚ");
        this.oracleFormsBuiltins.message("PORFAVOR UTILICE EL MOUSE PARA DEVOLVERSE ENTRE LAS OPCIONES DEL MENÚ");
        console.log("Exiting SEFCRETEJ_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT1.OPINT_TIOPE IS NOT NULL THEN
    //  :ENTMAN02.ENTOPI := 'S';
    // ELSE
    //  :ENTMAN02.ENTOPI := 'N';
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint1_postQuery() {
        console.log("Entering SEFCRETEJ_setopint1_postQuery");
        if ((this.SETOPINT1.OPINT_TIOPE != null)) {
            this.ENTMAN02.ENTOPI = "S";
        }
        else {
            this.ENTMAN02.ENTOPI = "N";
        }
        console.log("Exiting SEFCRETEJ_setopint1_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT1.OPINT_TIOPE IS NOT NULL THEN
    // BEGIN
    //   SELECT TIPOPE_DESCRI
    //     INTO :SETOPINT1.DESCRIP
    //   FROM OPS$SEGUI.SETTIPOPE
    //   WHERE TIPOPE_CODIGO =:SETOPINT1.OPINT_TIOPE;
    // 
    // :ENTMAN02.ENTOPI := 'S';
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     MESSAGE('CODIGO NO EXISTE.');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint1_opintTiope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint1_opintTiope_whenValidateItem");
        if ((this.SETOPINT1.OPINT_TIOPE != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OPINT_TIOPE", this.SETOPINT1.OPINT_TIOPE);
            // call REST API
            const result1 = await Rest.post("/sefcretej_setopint1/sefcretej_setopint1_opinttiope_whenvalidateitem_query1", payload1);
            // get values from result
            this.SETOPINT1.DESCRIP = result1[0].get("SETOPINT1.DESCRIP");
            this.ENTMAN02.ENTOPI = "S";
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO NO EXISTE.");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_setopint1_opintTiope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT1.OPINT_TIOPE IS NOT NULL THEN
    // BEGIN
    //   SELECT TIPOPE_DESCRI
    //     INTO :SETOPINT1.DESCRIP
    //   FROM OPS$SEGUI.SETTIPOPE
    //   WHERE TIPOPE_CODIGO =:SETOPINT1.OPINT_TIOPE;
    //    
    //   :SETOPINT1.OPINT_NIT := :TERMAN01.TERCOD;
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     MESSAGE('CODIGO NO EXISTE.');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint1_opintTiope_postChange() {
        console.log("Entering SEFCRETEJ_setopint1_opintTiope_postChange");
        if ((this.SETOPINT1.OPINT_TIOPE != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OPINT_TIOPE", this.SETOPINT1.OPINT_TIOPE);
            // call REST API
            const result1 = await Rest.post("/sefcretej_setopint1/sefcretej_setopint1_opinttiope_postchange_query1", payload1);
            // get values from result
            this.SETOPINT1.DESCRIP = result1[0].get("SETOPINT1.DESCRIP");
            this.SETOPINT1.OPINT_NIT = this.TERMAN01.TERCOD;
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO NO EXISTE.");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_setopint1_opintTiope_postChange");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTOME'); END;
    //#endregion
    async SEFCRETEJ_setopint1_opintTiope_keyNextItem() {
        console.log("Entering SEFCRETEJ_setopint1_opintTiope_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTOME");
        console.log("Exiting SEFCRETEJ_setopint1_opintTiope_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF (:TERMAN01.TERCOD IS NOT NULL) THEN
    //      :FAMMAN01.FAM_TERCOD := :TERMAN01.TERCOD;
    //    END IF; END;
    //#endregion
    async SEFCRETEJ_famman01_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_famman01_whenNewRecordInstance");
        if ((this.TERMAN01.TERCOD != null)) {
            this.FAMMAN01.FAM_TERCOD = this.TERMAN01.TERCOD;
        }
        console.log("Exiting SEFCRETEJ_famman01_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R4';
    // :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //         
    // IF (:TERMAN01.TERCOD IS NOT NULL) THEN
    //  :SETOPINT.OPINT_TERCOD := :TERMAN01.TERCOD;
    //  :SETOPINT.OPINT_TERNOM := :TERMAN01.TERNOM;
    //  :SETOPINT.OPINT_TERAPE := :TERMAN01.TERAPE;
    // END IF;
    //         
    // SHOW_VIEW ('C_FINANCIEROS'); 
    // GO_BLOCK('SETOPINT'); END;
    //#endregion
    async SEFCRETEJ_famman01_keyNxtblk() {
        console.log("Entering SEFCRETEJ_famman01_keyNxtblk");
        this.RADIOS.RREPORTES = "R4";
        // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        if ((this.TERMAN01.TERCOD != null)) {
            this.SETOPINT.OPINT_TERCOD = this.TERMAN01.TERCOD;
            this.SETOPINT.OPINT_TERNOM = this.TERMAN01.TERNOM;
            this.SETOPINT.OPINT_TERAPE = this.TERMAN01.TERAPE;
        }
        this.oracleFormsBuiltins.show_view("C_FINANCIEROS");
        this.oracleFormsBuiltins.go_block("SETOPINT");
        console.log("Exiting SEFCRETEJ_famman01_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //    IF (:TERMAN01.TERCOD IS NOT NULL) THEN
    //      :FAMMAN01.FAM_TERCOD := :TERMAN01.TERCOD;
    //    END IF;
    //   
    //     BEGIN
    //       SELECT TRLDES
    //          INTO :FAMMAN01.RELA
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.RELA:='';
    //     END;
    //     BEGIN
    //       SELECT  TRLD1
    //          INTO :FAMMAN01.DES1
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES1:='';
    //     END;
    //     BEGIN
    //       SELECT TRLD2
    //          INTO :FAMMAN01.DES2
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES2:='';
    //     END;
    //     BEGIN
    //       SELECT TRLD3
    //          INTO :FAMMAN01.DES3
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES3:='';
    //     END;
    //     BEGIN
    //       SELECT TRLD4
    //          INTO :FAMMAN01.DES4
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES4:='';
    //       END;
    //     BEGIN
    //       SELECT TRLD5
    //          INTO :FAMMAN01.DES5
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES5:='XXXXXXX';
    //     END;
    //     BEGIN
    //       SELECT TRLD6
    //          INTO :FAMMAN01.DES6
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES6:='ZZZZZZZZZZ';
    //     END;  
    //     BEGIN
    //       SELECT TRLR1
    //          INTO :FAMMAN01.R1
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.R1:='';
    //     END;
    //     BEGIN
    //       SELECT TRLR2
    //          INTO :FAMMAN01.R2
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.R2:='';
    //     END;
    // 
    //     BEGIN
    //       SELECT TRLF1
    //          INTO :FAMMAN01.F1
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.F1:='';
    //     END;
    // 
    //     BEGIN
    //       SELECT TRLF2
    //          INTO :FAMMAN01.F2
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.F2:='';
    //       END;
    //       
    //     BEGIN
    //       SELECT COM_NOMBRE, COM_APELLIDO
    //          INTO :SETTERXCOM.NOMBRE, :SETTERXCOM.APELLIDO
    //          FROM SETCOMCIA
    //          WHERE COM_CODIGO =:SETTERXCOM.CXT_CODIGO     
    //      AND      COM_CODUNI =  '001'; --ARQUITECTURA RDMV
    //     EXCEPTION WHEN NO_DATA_FOUND 
    //      THEN :SETTERXCOM.NOMBRE:='NO DEFINIDO';
    //     END;
    //     
    //    IF :FAMMAN01.FAMTRL = 'RL' OR :FAMMAN01.FAMTRL = 'RL1' THEN
    //      
    //      
    //      SET_ITEM_PROPERTY('FAMMAN01.CEDRL',VISIBLE,"PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',ENABLED,"PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMNAM',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP1',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP2',ENABLED,"PROPERTY_FALSE"); 
    //    
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD1',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD2',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD3',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD4',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD5',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD6',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR1',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR2',ENABLED,"PROPERTY_FALSE");
    //    
    //    ELSE
    //      SET_ITEM_PROPERTY('FAMMAN01.CEDRL',VISIBLE,"PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',ENABLED,"PROPERTY_FALSE");
    //     
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMNAM',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP1',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP2',ENABLED,"PROPERTY_TRUE"); 
    //    
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD1',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD2',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD3',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD4',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD5',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD6',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR1',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR2',ENABLED,"PROPERTY_TRUE"); 
    //   
    //     
    //     END IF;
    //    
    //     
    //   --HOMOLOGACION DE DIRECCIONES    
    //     IF :FAMMAN01.DES1 = 'DIRECCIÓN CASA' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD1', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD1', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     IF :FAMMAN01.DES2 = 'DIRECCIÓN' OR :FAMMAN01.DES2 = 'DIRECCION' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD2', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD2', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     IF :FAMMAN01.DES3 = 'DIRECCIÓN OF.' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD3', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD3', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //         
    //     IF :FAMMAN01.R2 = 'DIRECCIÓN' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMR2', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "ENABLED", "PROPERTY_TRUE");
    //           
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMR2', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     IF :FAMMAN01.DES6 = 'DIRECCIÓN' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD6', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD6', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //   
    // END;
    //#endregion
    async SEFCRETEJ_famman01_postQuery() {
        console.log("Entering SEFCRETEJ_famman01_postQuery");
        if ((this.TERMAN01.TERCOD != null)) {
            this.FAMMAN01.FAM_TERCOD = this.TERMAN01.TERCOD;
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query1", payload1);
        // get values from result
        this.FAMMAN01.RELA = result1[0].get("FAMMAN01.RELA");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.RELA = "";
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result2 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query2", payload2);
        // get values from result
        this.FAMMAN01.DES1 = result2[0].get("FAMMAN01.DES1");
        if (result2 == null || result2.length == 0) {

            this.FAMMAN01.DES1 = "";
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result3 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query3", payload3);
        // get values from result
        this.FAMMAN01.DES2 = result3[0].get("FAMMAN01.DES2");
        if (result3 == null || result3.length == 0) {

            this.FAMMAN01.DES2 = "";
        }

        // construct payload
        let payload4 = new Map();
        payload4.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result4 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query4", payload4);
        // get values from result
        this.FAMMAN01.DES3 = result4[0].get("FAMMAN01.DES3");
        if (result4 == null || result4.length == 0) {

            this.FAMMAN01.DES3 = "";
        }

        // construct payload
        let payload5 = new Map();
        payload5.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result5 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query5", payload5);
        // get values from result
        this.FAMMAN01.DES4 = result5[0].get("FAMMAN01.DES4");
        if (result5 == null || result5.length == 0) {

            this.FAMMAN01.DES4 = "";
        }

        // construct payload
        let payload6 = new Map();
        payload6.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result6 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query6", payload6);
        // get values from result
        this.FAMMAN01.DES5 = result6[0].get("FAMMAN01.DES5");
        if (result6 == null || result6.length == 0) {

            this.FAMMAN01.DES5 = "XXXXXXX";
        }

        // construct payload
        let payload7 = new Map();
        payload7.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result7 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query7", payload7);
        // get values from result
        this.FAMMAN01.DES6 = result7[0].get("FAMMAN01.DES6");
        if (result7 == null || result7.length == 0) {

            this.FAMMAN01.DES6 = "ZZZZZZZZZZ";
        }

        // construct payload
        let payload8 = new Map();
        payload8.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result8 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query8", payload8);
        // get values from result
        this.FAMMAN01.R1 = result8[0].get("FAMMAN01.R1");
        if (result8 == null || result8.length == 0) {

            this.FAMMAN01.R1 = "";
        }

        // construct payload
        let payload9 = new Map();
        payload9.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result9 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query9", payload9);
        // get values from result
        this.FAMMAN01.R2 = result9[0].get("FAMMAN01.R2");
        if (result9 == null || result9.length == 0) {

            this.FAMMAN01.R2 = "";
        }

        // construct payload
        let payload10 = new Map();
        payload10.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        let result10 = Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query10", payload10);
        // get values from result
        this.FAMMAN01.F1 = result10[0].get("FAMMAN01.F1");
        // if (result10 == null || result10.length == 0) {

        //     this.FAMMAN01.F1 = "";
        // }

        // construct payload
        let payload11 = new Map();
        payload11.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        let result11 = Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query11", payload11);
        // get values from result
        this.FAMMAN01.F2 = result11[0].get("FAMMAN01.F2");
        // if (result11 == null || result11.length == 0) {

        //     this.FAMMAN01.F2 = "";
        // }

        // construct payload
        let payload12 = new Map();
        payload12.set("CXT_CODIGO", this.SETTERXCOM.CXT_CODIGO);
        // call REST API
        let result12 = Rest.post("/sefcretej_famman01/sefcretej_famman01_postquery_query12", payload12);
        // get values from result
        this.SETTERXCOM.NOMBRE = result12[0].get("SETTERXCOM.NOMBRE");
        this.SETTERXCOM.APELLIDO = result12[0].get("SETTERXCOM.APELLIDO");
        // if (result12 == null || result12.length == 0) {

        //     this.SETTERXCOM.NOMBRE = "NO DEFINIDO";
        // }

        if ((this.FAMMAN01.FAMTRL == "RL" || this.FAMMAN01.FAMTRL == "RL1")) {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMNAM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP1", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP2", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD4", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD5", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR1", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMNAM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP1", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP2", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD4", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD5", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR1", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_TRUE");
        }
        if (this.FAMMAN01.DES1 == "DIRECCIÓN CASA") {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "ENABLED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "VISIBLE", "PROPERTY_FALSE");
        }
        if ((this.FAMMAN01.DES2 == "DIRECCIÓN" || this.FAMMAN01.DES2 == "DIRECCION")) {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "ENABLED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "VISIBLE", "PROPERTY_FALSE");
        }
        if (this.FAMMAN01.DES3 == "DIRECCIÓN OF.") {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "ENABLED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "VISIBLE", "PROPERTY_FALSE");
        }
        if (this.FAMMAN01.R2 == "DIRECCIÓN") {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "ENABLED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "VISIBLE", "PROPERTY_FALSE");
        }
        if (this.FAMMAN01.DES6 == "DIRECCIÓN") {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "ENABLED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "VISIBLE", "PROPERTY_FALSE");
        }
        console.log("Exiting SEFCRETEJ_famman01_postQuery");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :FAMMAN01.FAMR;
    //  :GLOBAL.DIR1:= 'DIRR2'; END;
    //#endregion
    async SEFCRETEJ_famman01_dirR2_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_famman01_dirR2_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.FAMMAN01.FAMR;
        // this.GLOBAL.DIR1 = "DIRR2";
        console.log("Exiting SEFCRETEJ_famman01_dirR2_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :FAMMAN01.FAMD;
    //  :GLOBAL.DIR1:= 'DIRF1'; END;
    //#endregion
    async SEFCRETEJ_famman01_dirF1_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_famman01_dirF1_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.FAMMAN01.FAMD;
        // this.GLOBAL.DIR1 = "DIRF1";
        console.log("Exiting SEFCRETEJ_famman01_dirF1_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :FAMMAN01.FAMD;
    //  :GLOBAL.DIR1:= 'DIRF2'; END;
    //#endregion
    async SEFCRETEJ_famman01_dirF2_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_famman01_dirF2_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.FAMMAN01.FAMD;
        // this.GLOBAL.DIR1 = "DIRF2";
        console.log("Exiting SEFCRETEJ_famman01_dirF2_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :FAMMAN01.FAMD;
    //  :GLOBAL.DIR1:= 'DIRF3'; END;
    //#endregion
    async SEFCRETEJ_famman01_dirF3_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_famman01_dirF3_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.FAMMAN01.FAMD;
        // this.GLOBAL.DIR1 = "DIRF3";
        console.log("Exiting SEFCRETEJ_famman01_dirF3_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //  IF :FAMMAN01.FAMTRL = 'RL' OR :FAMMAN01.FAMTRL = 'RL1'THEN
    //  IF :FAMMAN01.FAMTID IS NOT NULL AND :FAMMAN01.CEDRL IS NOT NULL THEN
    //   BEGIN 
    //    SELECT R.TERAPE||' '||R.TERNOM,R.TERAPE1,R.TERAPE2, R.TERNOM,R.TERTCI,'REPRESENTANTE LEGAL', E.ENTFECN,R.TERCELU,R.TERTEL,E.ENTMAIL,R.TERDIR
    //     INTO :FAMMAN01.FAMNOM,:FAMMAN01.FAMAP1,:FAMMAN01.FAMAP2,:FAMMAN01.FAMNAM,:FAMMAN01.FAMD2,:FAMMAN01.FAMD3,:FAMMAN01.FAMD4,:FAMMAN01.FAMD5,:FAMMAN01.FAMD6
    //          ,:FAMMAN01.FAMR1,:FAMMAN01.FAMR2
    //    FROM TER R, ENT E
    //   WHERE TERCOD = ENTCOD
    //     AND TERCOD = :FAMMAN01.CEDRL
    //     AND TERTID = :FAMMAN01.FAMTID;
    //     
    //     :FAMMAN01.FAMD1:= :FAMMAN01.CEDRL;
    //  
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //        :FAMMAN01.CEDRL:= :FAMMAN01.FAMD;
    //        LIB$DTNERFRMA('EL REPRESENTANTE LEGAL NO ESTA CREADO COMO TERCERO NATURAL. DEBE CREARLO PARA PODER ASOCIARLO.');
    //   END;
    //  ELSE
    //   IF :FAMMAN01.FAMTID IS NULL THEN
    //       MESSAGE('DEBE INGRESAR EL TIPO DE DOCUMENTO DEL REPRESENTANTE LEGAL.');
    //   ELSIF :FAMMAN01.CEDRL IS NULL THEN
    //     MESSAGE('DEBE INGRESAR EL NUMERO DE DOCUMENTO DEL REPRESENTANTE LEGAL.');
    //    END IF;
    //  END IF;
    //  END IF; 
    // END;
    //#endregion
    async SEFCRETEJ_famman01_cedrl_whenValidateItem() {
        console.log("Entering SEFCRETEJ_famman01_cedrl_whenValidateItem");
        if ((this.FAMMAN01.FAMTRL == "RL" || this.FAMMAN01.FAMTRL == "RL1")) {
            if (((this.FAMMAN01.FAMTID != null) && (this.FAMMAN01.CEDRL != null))) {
                // construct payload
                let payload1 = new Map();
                payload1.set("CEDRL", this.FAMMAN01.CEDRL);
                payload1.set("FAMTID", this.FAMMAN01.FAMTID);
                // call REST API
                const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_cedrl_whenvalidateitem_query1", payload1);
                // get values from result
                this.FAMMAN01.FAMNOM = result1[0].get("FAMMAN01.FAMNOM");
                this.FAMMAN01.FAMAP1 = result1[0].get("FAMMAN01.FAMAP1");
                this.FAMMAN01.FAMAP2 = result1[0].get("FAMMAN01.FAMAP2");
                this.FAMMAN01.FAMNAM = result1[0].get("FAMMAN01.FAMNAM");
                this.FAMMAN01.FAMD2 = result1[0].get("FAMMAN01.FAMD2");
                this.FAMMAN01.FAMD3 = result1[0].get("FAMMAN01.FAMD3");
                this.FAMMAN01.FAMD4 = result1[0].get("FAMMAN01.FAMD4");
                this.FAMMAN01.FAMD5 = result1[0].get("FAMMAN01.FAMD5");
                this.FAMMAN01.FAMD6 = result1[0].get("FAMMAN01.FAMD6");
                this.FAMMAN01.FAMR1 = result1[0].get("FAMMAN01.FAMR1");
                this.FAMMAN01.FAMR2 = result1[0].get("FAMMAN01.FAMR2");
                this.FAMMAN01.FAMD1 = this.FAMMAN01.CEDRL;
                if (result1 == null || result1.length == 0) {

                    // this.FAMMAN01.CEDRL = this.FAMMAN01.FAMD;
                    // SEFCRETEJ_LIB$DTNERFRMA("EL REPRESENTANTE LEGAL NO ESTA CREADO COMO TERCERO NATURAL. DEBE CREARLO PARA PODER ASOCIARLO.");
                }

            }
            else {
                if ((this.FAMMAN01.FAMTID == null)) {
                    this.oracleFormsBuiltins.message("DEBE INGRESAR EL TIPO DE DOCUMENTO DEL REPRESENTANTE LEGAL.");
                }
                else if ((this.FAMMAN01.CEDRL == null)) {
                    this.oracleFormsBuiltins.message("DEBE INGRESAR EL NUMERO DE DOCUMENTO DEL REPRESENTANTE LEGAL.");
                }
            }
        }
        console.log("Exiting SEFCRETEJ_famman01_cedrl_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //     SELECT TRLD1,TRLD2,TRLD3,TRLD4,TRLR1,TRLR2,TRLF1,TRLF2
    //       INTO :FAMMAN01.DES1,:FAMMAN01.DES2,:FAMMAN01.DES3,
    //            :FAMMAN01.DES4,:FAMMAN01.R1,:FAMMAN01.R2,
    //            :FAMMAN01.F1,:FAMMAN01.F2
    //       FROM OPS$SEGUI.TRL
    //      WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //        EXCEPTION WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //     IF :FAMMAN01.DES1 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD1',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD1:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD1',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD1',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES2 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD2',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD2:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD2',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD2',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES3 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD3',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD3:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD3',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD3',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES4 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD4',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD4:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD4',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD4',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.R1 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMR1',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMR1:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMR1',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMR1',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.R2 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMR2',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMR2:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMR2',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMR2',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.F1 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMF1',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMF1:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMF1',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMF1',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.F2 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMF2',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMF2:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMF2',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMF2',UPDATEABLE,"ATTR_ON");
    //     END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famnom_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famnom_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_famnom_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.DES1 = result1[0].get("FAMMAN01.DES1");
        this.FAMMAN01.DES2 = result1[0].get("FAMMAN01.DES2");
        this.FAMMAN01.DES3 = result1[0].get("FAMMAN01.DES3");
        this.FAMMAN01.DES4 = result1[0].get("FAMMAN01.DES4");
        this.FAMMAN01.R1 = result1[0].get("FAMMAN01.R1");
        this.FAMMAN01.R2 = result1[0].get("FAMMAN01.R2");
        this.FAMMAN01.F1 = result1[0].get("FAMMAN01.F1");
        this.FAMMAN01.F2 = result1[0].get("FAMMAN01.F2");
        if (result1 == null || result1.length == 0) {

        }

        if ((this.FAMMAN01.DES1 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMD1 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.DES2 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMD2 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.DES3 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMD3 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.DES4 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMD4 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.R1 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMR1 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.R2 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMR2 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.F1 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", ENTERABLE, "ATTR_OFF");
            this.FAMMAN01.FAMF1 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", "UPDATEABLE", "ATTR_ON");
        }
        if ((this.FAMMAN01.F2 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", ENTERABLE, "ATTR_OFF");
            // this.FAMMAN01.FAMF2 = "";
        }
        else {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", ENTERABLE, "ATTR_ON");
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", "UPDATEABLE", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famnom_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.FAMTRL IN ('RL', 'RL1') THEN
    //      GO_ITEM('FAMMAN01.CEDRL');
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famtid_keyNextItem() {
        console.log("Entering SEFCRETEJ_famman01_famtid_keyNextItem");
        if (["RL", "RL1"].indexOf(this.FAMMAN01.FAMTRL) != -1) {
            this.oracleFormsBuiltins.go_item("FAMMAN01.CEDRL");
        }
        console.log("Exiting SEFCRETEJ_famman01_famtid_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.DES3 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMD3',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd3_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famd3_preTextItem");
        if ((this.FAMMAN01.DES3 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famd3_preTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.DES2 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMD2',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd2_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famd2_preTextItem");
        if ((this.FAMMAN01.DES2 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famd2_preTextItem");
    }

    //#region PLSQL
    // DECLARE 
    //  DUMMY  BOOLEAN; 
    // BEGIN 
    //  IF :FAMMAN01.FAMTRL = 'CM' THEN
    //  DUMMY := SHOW_LOV('COMERCIALES',15,10); 
    //  END IF;
    // END; 
    //#endregion
    async SEFCRETEJ_famman01_famd2_keyListval() {
        console.log("Entering SEFCRETEJ_famman01_famd2_keyListval");
        let DUMMY: boolean = null;
        if (this.FAMMAN01.FAMTRL == "CM") {
            DUMMY = this.oracleFormsBuiltins.show_lov("COMERCIALES", 15, 10);
        }
        console.log("Exiting SEFCRETEJ_famman01_famd2_keyListval");
    }

    //#region PLSQL
    // BEGIN :FAMMAN01.FAMNOM:=NULL;
    // :FAMMAN01.FAMNOM:=:FAMMAN01.FAMNAM||' '||:FAMMAN01.FAMAP1||' '||:FAMMAN01.FAMAP;
    // 
    // GO_ITEM('FAMMAN01.DES1'); END;
    //#endregion
    async SEFCRETEJ_famman01_famap2_keyNextItem() {
        console.log("Entering SEFCRETEJ_famman01_famap2_keyNextItem");
        this.FAMMAN01.FAMNOM = null;
        // this.FAMMAN01.FAMNOM = this.FAMMAN01.FAMNAM || ' ' || this.FAMMAN01.FAMAP1 || ' ' || this.FAMMAN01.FAMAP;
        this.oracleFormsBuiltins.go_item("FAMMAN01.DES1");
        console.log("Exiting SEFCRETEJ_famman01_famap2_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF  :FAMMAN01.FAMTRL LIKE 'RC%'  THEN
    //   IF :FAMMAN01.FAMD5 NOT IN ('CLIENTE','ENTIDAD BANCARIA','PROVEEDOR','OTROS') THEN
    //     LIB$ALERTA('MENSAJE','VALOR NO VÁLIDO, ESCOGERLO DE LA LISTA DE VALORES CON LA TECLA F9',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd5_whenValidateItem() {
        console.log("Entering SEFCRETEJ_famman01_famd5_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.FAMMAN01.FAMTRL) {
            if (["CLIENTE", "ENTIDAD BANCARIA", "PROVEEDOR", "OTROS"].indexOf(this.FAMMAN01.FAMD5) != -1) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VALOR NO VÁLIDO, ESCOGERLO DE LA LISTA DE VALORES CON LA TECLA F9", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting SEFCRETEJ_famman01_famd5_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF  :FAMMAN01.FAMTRL LIKE 'RC%' THEN
    //      LIST_VALUES;
    //   
    //  END IF; 
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd5_keyListval() {
        console.log("Entering SEFCRETEJ_famman01_famd5_keyListval");
        if (this.FAMMAN01.FAMTRL) {
            this.oracleFormsBuiltins.list_values();
        }
        console.log("Exiting SEFCRETEJ_famman01_famd5_keyListval");
    }

    //#region PLSQL
    // BEGIN :FAMMAN01.FAMNOM:=NULL;
    // :FAMMAN01.FAMNOM:=:FAMMAN01.FAMNAM||' '||:FAMMAN01.FAMAP1||' '||:FAMMAN01.FAMAP;
    // GO_ITEM('FAMMAN01.FAMAP2'); END;
    //#endregion
    async SEFCRETEJ_famman01_famap1_keyNextItem() {
        console.log("Entering SEFCRETEJ_famman01_famap1_keyNextItem");
        this.FAMMAN01.FAMNOM = null;
        // this.FAMMAN01.FAMNOM = this.FAMMAN01.FAMNAM || ' ' || this.FAMMAN01.FAMAP1 || ' ' || this.FAMMAN01.FAMAP;
        this.oracleFormsBuiltins.go_item("FAMMAN01.FAMAP2");
        console.log("Exiting SEFCRETEJ_famman01_famap1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.DES4 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMD4',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd4_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famd4_preTextItem");
        if ((this.FAMMAN01.DES4 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famd4_preTextItem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLR1
    //          INTO :FAMMAN01.R1
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.R1:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_des4_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_des4_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_des4_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.R1 = result1[0].get("FAMMAN01.R1");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.R1 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_des4_postTextItem");
    }

    //#region PLSQL
    // BEGIN IF :FAMMAN01.FAMTRL ='CO' THEN
    //    PVALTER(:FAMMAN01.FAMD6);
    // END IF; END;
    //#endregion
    async SEFCRETEJ_famman01_famd6_whenValidateItem() {
        console.log("Entering SEFCRETEJ_famman01_famd6_whenValidateItem");
        if (this.FAMMAN01.FAMTRL == "CO") {
            // SEFCRETEJ_PVALTER(this.FAMMAN01.FAMD6);
        }
        console.log("Exiting SEFCRETEJ_famman01_famd6_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.DES6 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMD6',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd6_pretextitem() {
        console.log("Entering SEFCRETEJ_famman01_famd6_pretextitem");
        if ((this.FAMMAN01.DES6 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD6", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famd6_pretextitem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLD4
    //          INTO :FAMMAN01.DES4
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES4:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_des3_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_des3_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_des3_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.DES4 = result1[0].get("FAMMAN01.DES4");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.DES4 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_des3_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLD3
    //          INTO :FAMMAN01.DES3
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES3:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_des2_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_des2_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_des2_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.DES3 = result1[0].get("FAMMAN01.DES3");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.DES3 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_des2_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLR2
    //          INTO :FAMMAN01.R2
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.R2:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_r1_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_r1_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_r1_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.R2 = result1[0].get("FAMMAN01.R2");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.R2 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_r1_postTextItem");
    }

    //#region PLSQL
    // BEGIN IF :FAMMAN01.DES1 IN ('CEDULA') THEN
    //  SET_ITEM_PROPERTY('FAMMAN01.FAMD1',REQUIRED,"PROPERTY_TRUE");
    // ELSE
    //  SET_ITEM_PROPERTY('FAMMAN01.FAMD1',REQUIRED,"PROPERTY_FALSE");
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_famman01_des1_whenValidateItem() {
        console.log("Entering SEFCRETEJ_famman01_des1_whenValidateItem");
        if (["CEDULA"].indexOf(this.FAMMAN01.DES1) != -1) {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "REQUIRED", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "REQUIRED", "PROPERTY_FALSE");
        }
        console.log("Exiting SEFCRETEJ_famman01_des1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLD2
    //          INTO :FAMMAN01.DES2
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.DES2:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_des1_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_des1_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_des1_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.DES2 = result1[0].get("FAMMAN01.DES2");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.DES2 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_des1_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLF1
    //          INTO :FAMMAN01.F1
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.F1:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_r2_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_r2_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_r2_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.F1 = result1[0].get("FAMMAN01.F1");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.F1 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_r2_postTextItem");
    }

    //#region PLSQL
    // BEGIN :FAMMAN01.FAMNOM:=NULL;
    // :FAMMAN01.FAMNOM:=:FAMMAN01.FAMNAM||' '||:FAMMAN01.FAMAP1||' '||:FAMMAN01.FAMAP;
    // GO_ITEM('FAMMAN01.FAMAP1'); END;
    //#endregion
    async SEFCRETEJ_famman01_famnam_keyNextItem() {
        console.log("Entering SEFCRETEJ_famman01_famnam_keyNextItem");
        this.FAMMAN01.FAMNOM = null;
        // this.FAMMAN01.FAMNOM = this.FAMMAN01.FAMNAM || ' ' || this.FAMMAN01.FAMAP1 || ' ' || this.FAMMAN01.FAMAP;
        this.oracleFormsBuiltins.go_item("FAMMAN01.FAMAP1");
        console.log("Exiting SEFCRETEJ_famman01_famnam_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.F1 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMF1',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famf1_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famf1_preTextItem");
        if ((this.FAMMAN01.F1 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famf1_preTextItem");
    }

    //#region PLSQL
    // BEGIN IF :FAMMAN01.FAMTRL ='RL' THEN
    //    PVALTER(:FAMMAN01.FAMD1);
    // END IF; END;
    //#endregion
    async SEFCRETEJ_famman01_famd1_whenValidateItem() {
        console.log("Entering SEFCRETEJ_famman01_famd1_whenValidateItem");
        if (this.FAMMAN01.FAMTRL == "RL") {
            // SEFCRETEJ_PVALTER(this.FAMMAN01.FAMD1);
        }
        console.log("Exiting SEFCRETEJ_famman01_famd1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.DES1 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMD1',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famd1_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famd1_preTextItem");
        if ((this.FAMMAN01.DES1 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famd1_preTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.F2 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMF2',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famf2_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famf2_preTextItem");
        if ((this.FAMMAN01.F2 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famf2_preTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.R1 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMR1',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famr1_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famr1_preTextItem");
        if ((this.FAMMAN01.R1 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famr1_preTextItem");
    }

    //#region PLSQL
    // BEGIN
    //       SELECT TRLF2
    //          INTO :FAMMAN01.F2
    //          FROM OPS$SEGUI.TRL
    //          WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.F2:='';
    //     END;
    //#endregion
    async SEFCRETEJ_famman01_f1_postTextItem() {
        console.log("Entering SEFCRETEJ_famman01_f1_postTextItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_f1_posttextitem_query1", payload1);
        // get values from result
        this.FAMMAN01.F2 = result1[0].get("FAMMAN01.F2");
        if (result1 == null || result1.length == 0) {

            this.FAMMAN01.F2 = "";
        }

        console.log("Exiting SEFCRETEJ_famman01_f1_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.R2 IS NULL THEN
    //     SET_FIELD('FAMMAN01.FAMR2',"AUTO_SKIP","ATTR_ON");
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famr2_preTextItem() {
        console.log("Entering SEFCRETEJ_famman01_famr2_preTextItem");
        if ((this.FAMMAN01.R2 == null)) {
            // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", "AUTO_SKIP", "ATTR_ON");
        }
        console.log("Exiting SEFCRETEJ_famman01_famr2_preTextItem");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :FAMMAN01.FAMD;
    //  :GLOBAL.DIR1:= 'DIRF6'; END;
    //#endregion
    async SEFCRETEJ_famman01_dirF6_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_famman01_dirF6_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.FAMMAN01.FAMD;
        // this.GLOBAL.DIR1 = "DIRF6";
        console.log("Exiting SEFCRETEJ_famman01_dirF6_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   BEGIN
    //     SELECT TRLD1,TRLD2,TRLD3,TRLD4,TRLD5, TRLD6, TRLR1,TRLR2,TRLF1,TRLF2
    //       INTO :FAMMAN01.DES1,:FAMMAN01.DES2,:FAMMAN01.DES3,
    //            :FAMMAN01.DES4,:FAMMAN01.DES5,:FAMMAN01.DES6,:FAMMAN01.R1,:FAMMAN01.R2,
    //            :FAMMAN01.F1,:FAMMAN01.F2
    //       FROM OPS$SEGUI.TRL
    //      WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //   EXCEPTION WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    // 
    // 
    //   IF :FAMMAN01.FAMTRL = 'CM' THEN
    //       LIB$ALERTA('MENSAJE','POR FAVOR EN EL CAMPO CODIGO DEL COMERCIAL SELECCIONE DE LA LISTA DE VALORES CON [F9], EL CODIGO QUE LE CORRESPONDE0', NULL, NULL,NULL, T_RESPUESTA);
    //   END IF; 
    // 
    // 
    // IF :FAMMAN01.FAMTRL <> 'CM' THEN
    //  
    // 
    //  :FAMMAN01.FAMD1:='';
    //  :FAMMAN01.FAMD2:='';
    //  :FAMMAN01.FAMD3:='';
    // 
    //     IF :FAMMAN01.DES1 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD1',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD1:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD1',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD1',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES2 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD2',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD2:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD2',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD2',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES3 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD3',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD3:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD3',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD3',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES4 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD4',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD4:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD4',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD4',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES5 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD5',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD5:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD5',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD5',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.DES6 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMD6',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMD6:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMD6',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMD6',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.R1 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMR1',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMR1:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMR1',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMR1',UPDATEABLE,"ATTR_ON");
    //     END IF;    
    //    IF :FAMMAN01.R2 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMR2',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMR2:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMR2',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMR2',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.F1 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMF1',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMF1:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMF1',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMF1',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     IF :FAMMAN01.F2 IS NULL THEN
    //       SET_FIELD('FAMMAN01.FAMF2',ENTERABLE,"ATTR_OFF");
    //       :FAMMAN01.FAMF2:='';
    //     ELSE
    //       SET_FIELD('FAMMAN01.FAMF2',ENTERABLE,"ATTR_ON");
    //       SET_FIELD('FAMMAN01.FAMF2',UPDATEABLE,"ATTR_ON");
    //     END IF;
    //     
    //     
    //     IF :FAMMAN01.FAMTRL = 'RL' OR :FAMMAN01.FAMTRL = 'RL1' THEN
    //     
    //         
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',VISIBLE,"PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',ENABLED,"PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //    
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMNAM',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP1',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP2',ENABLED,"PROPERTY_FALSE"); 
    //    
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD1',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD2',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD3',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD4',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD5',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD6',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR1',ENABLED,"PROPERTY_FALSE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR2',ENABLED,"PROPERTY_FALSE"); 
    //   
    //     ELSE
    //      
    //      SET_ITEM_PROPERTY('FAMMAN01.CEDRL',VISIBLE,"PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('FAMMAN01.CEDRL',ENABLED,"PROPERTY_FALSE");
    //      
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMNAM',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP1',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMAP2',ENABLED,"PROPERTY_TRUE"); 
    //    
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD1',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD2',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD3',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD4',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD5',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMD6',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR1',ENABLED,"PROPERTY_TRUE"); 
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR2',ENABLED,"PROPERTY_TRUE"); 
    //  
    //     END IF;
    //     
    //     
    //       
    // --HOMOLOGACION DE DIRECCIONES  
    // 
    // 
    //     SET_ITEM_PROPERTY('FAMMAN01.FAMD1', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "VISIBLE", "PROPERTY_FALSE");
    //     
    //     SET_ITEM_PROPERTY('FAMMAN01.FAMD2', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "VISIBLE", "PROPERTY_FALSE");
    //     
    //     SET_ITEM_PROPERTY('FAMMAN01.FAMD3', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "VISIBLE", "PROPERTY_FALSE");
    //    
    //    SET_ITEM_PROPERTY('FAMMAN01.FAMR2', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "VISIBLE", "PROPERTY_FALSE");
    //           
    //     SET_ITEM_PROPERTY('FAMMAN01.FAMD6', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "VISIBLE", "PROPERTY_FALSE");
    //     
    //        
    //     IF :FAMMAN01.DES1 = 'DIRECCIÓN CASA' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD1', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD1', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F1', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     IF :FAMMAN01.DES2 = 'DIRECCIÓN' OR :FAMMAN01.DES2 = 'DIRECCION' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD2', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD2', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F2', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     IF :FAMMAN01.DES3 = 'DIRECCIÓN OF.' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD3', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD3', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F3', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //         
    //     IF :FAMMAN01.R2 = 'DIRECCIÓN' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMR2', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "ENABLED", "PROPERTY_TRUE");
    //           
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMR2', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_R2', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     IF :FAMMAN01.DES6 = 'DIRECCIÓN' THEN
    //      SET_ITEM_PROPERTY('FAMMAN01.FAMD6', "ENABLED", "PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "VISIBLE", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "ENABLED", "PROPERTY_TRUE");
    //      
    //     ELSE
    //       SET_ITEM_PROPERTY('FAMMAN01.FAMD6', "ENABLED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FAMMAN01.DIR_F6', "VISIBLE", "PROPERTY_FALSE");
    //     END IF;
    //     
    //     
    // END IF;
    //     
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famtrl_whenValidateItem() {
        console.log("Entering SEFCRETEJ_famman01_famtrl_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_famtrl_whenvalidateitem_query1", payload1);
        // get values from result
        this.FAMMAN01.DES1 = result1[0].get("FAMMAN01.DES1");
        this.FAMMAN01.DES2 = result1[0].get("FAMMAN01.DES2");
        this.FAMMAN01.DES3 = result1[0].get("FAMMAN01.DES3");
        this.FAMMAN01.DES4 = result1[0].get("FAMMAN01.DES4");
        this.FAMMAN01.DES5 = result1[0].get("FAMMAN01.DES5");
        this.FAMMAN01.DES6 = result1[0].get("FAMMAN01.DES6");
        this.FAMMAN01.R1 = result1[0].get("FAMMAN01.R1");
        this.FAMMAN01.R2 = result1[0].get("FAMMAN01.R2");
        this.FAMMAN01.F1 = result1[0].get("FAMMAN01.F1");
        this.FAMMAN01.F2 = result1[0].get("FAMMAN01.F2");
        if (result1 == null || result1.length == 0) {

        }

        if (this.FAMMAN01.FAMTRL == "CM") {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR EN EL CAMPO CODIGO DEL COMERCIAL SELECCIONE DE LA LISTA DE VALORES CON [F9], EL CODIGO QUE LE CORRESPONDE0", null, null, null, T_RESPUESTA);
        }
        if (this.FAMMAN01.FAMTRL != "CM") {
            this.FAMMAN01.FAMD1 = "";
            this.FAMMAN01.FAMD2 = "";
            this.FAMMAN01.FAMD3 = "";
            if ((this.FAMMAN01.DES1 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMD1 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD1", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.DES2 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMD2 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD2", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.DES3 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMD3 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD3", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.DES4 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMD4 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD4", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.DES5 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD5", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMD5 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD5", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD5", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.DES6 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD6", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMD6 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD6", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMD6", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.R1 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMR1 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR1", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.R2 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMR2 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMR2", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.F1 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", ENTERABLE, "ATTR_OFF");
                this.FAMMAN01.FAMF1 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF1", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.F2 == null)) {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", ENTERABLE, "ATTR_OFF");
                // this.FAMMAN01.FAMF2 = "";
            }
            else {
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", ENTERABLE, "ATTR_ON");
                // SEFCRETEJ_SET_FIELD("FAMMAN01.FAMF2", "UPDATEABLE", "ATTR_ON");
            }
            if ((this.FAMMAN01.FAMTRL == "RL" || this.FAMMAN01.FAMTRL == "RL1")) {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMNAM", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP1", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP2", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD4", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD5", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR1", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_FALSE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "VISIBLE", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.CEDRL", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMNAM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP1", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMAP2", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD4", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD5", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR1", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_TRUE");
            }
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "VISIBLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "VISIBLE", "PROPERTY_FALSE");
            if (this.FAMMAN01.DES1 == "DIRECCIÓN CASA") {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "ENABLED", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD1", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F1", "VISIBLE", "PROPERTY_FALSE");
            }
            if ((this.FAMMAN01.DES2 == "DIRECCIÓN" || this.FAMMAN01.DES2 == "DIRECCION")) {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "ENABLED", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD2", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F2", "VISIBLE", "PROPERTY_FALSE");
            }
            if (this.FAMMAN01.DES3 == "DIRECCIÓN OF.") {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "ENABLED", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD3", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F3", "VISIBLE", "PROPERTY_FALSE");
            }
            if (this.FAMMAN01.R2 == "DIRECCIÓN") {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "ENABLED", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMR2", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_R2", "VISIBLE", "PROPERTY_FALSE");
            }
            if (this.FAMMAN01.DES6 == "DIRECCIÓN") {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "VISIBLE", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "ENABLED", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.FAMD6", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FAMMAN01.DIR_F6", "VISIBLE", "PROPERTY_FALSE");
            }
        }
        console.log("Exiting SEFCRETEJ_famman01_famtrl_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :FAMMAN01.FAMTRL NOT IN ('CM') THEN
    //     BEGIN
    //       SELECT TRLDES
    //        INTO :FAMMAN01.RELA
    //        FROM OPS$SEGUI.TRL
    //       WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         MESSAGE('CODIGO DE TIPO DE RELACION INEXISTENTE');
    //         RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //     NEXT_ITEM;
    //   ELSE
    //    BEGIN
    //       SELECT TRLDES
    //        INTO :FAMMAN01.RELA
    //        FROM OPS$SEGUI.TRL
    //       WHERE (TRLCOD=:FAMMAN01.FAMTRL);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         MESSAGE('CODIGO DE TIPO DE RELACION INEXISTENTE');
    //         RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //    -- NEXT_ITEM;
    //    GO_ITEM('SETTERXCOM.CXT_CODIGO');
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_famman01_famtrl_keyNextItem() {
        console.log("Entering SEFCRETEJ_famman01_famtrl_keyNextItem");
        if (["CM"].indexOf(this.FAMMAN01.FAMTRL) != -1) {
            // construct payload
            let payload1 = new Map();
            payload1.set("FAMTRL", this.FAMMAN01.FAMTRL);
            // call REST API
            const result1 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_famtrl_keynextitem_query1", payload1);
            // get values from result
            this.FAMMAN01.RELA = result1[0].get("FAMMAN01.RELA");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO DE TIPO DE RELACION INEXISTENTE");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            this.oracleFormsBuiltins.next_item();
        }
        else {
            // construct payload
            let payload2 = new Map();
            payload2.set("FAMTRL", this.FAMMAN01.FAMTRL);
            // call REST API
            const result2 = await Rest.post("/sefcretej_famman01/sefcretej_famman01_famtrl_keynextitem_query2", payload2);
            // get values from result
            this.FAMMAN01.RELA = result2[0].get("FAMMAN01.RELA");
            if (result2 == null || result2.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO DE TIPO DE RELACION INEXISTENTE");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            this.oracleFormsBuiltins.go_item("SETTERXCOM.CXT_CODIGO");
        }
        console.log("Exiting SEFCRETEJ_famman01_famtrl_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT SEMPRO_COLSEM, SEMPRO_OBSERV, SEMPRO_TIPPRO
    //      INTO :COLSEM, :OBSPRO, :TIPPROV
    //      FROM OPS$SEGUI.SETSEMAPROVEE
    //     WHERE SEMPRO_TERCOD = :TERCOD;
    //  EXCEPTION
    //   WHEN OTHERS THEN
    //   :COLSEM := 'X';
    //  END;
    //  
    // DECLARE
    //  IMAGEN VARCHAR2(30);
    // BEGIN 
    //  SET_ITEM_PROPERTY('IMG_SEMAFORO', "VISIBLE", "PROPERTY_FALSE");
    //  IF :COLSEM = 'R' THEN
    //   IMAGEN := 'SEMAFORO_ROJO.JPG';
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   BACKGROUND_COLOR,   'R255G192B192');
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   "FOREGROUND_COLOR",   'R128G0B0'); 
    //    :COLOR := 'ROJO';
    //   SET_ITEM_PROPERTY('IMG_SEMAFORO', "VISIBLE", "PROPERTY_TRUE");
    //   READ_IMAGE_FILE(IMAGEN, 'JPG', 'TERMAN01.IMG_SEMAFORO'); 
    //  ELSIF :COLSEM = 'A' THEN
    //   IMAGEN := 'SEMAFORO_NARANJA.JPG';
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   BACKGROUND_COLOR,   'R255G255B128');
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   "FOREGROUND_COLOR",   'R255G128B0'); 
    //   :COLOR := 'AMARILLO';
    //   SET_ITEM_PROPERTY('IMG_SEMAFORO', "VISIBLE", "PROPERTY_TRUE");
    //   READ_IMAGE_FILE(IMAGEN, 'JPG', 'TERMAN01.IMG_SEMAFORO'); 
    //  ELSIF :COLSEM = 'V' THEN
    //   IMAGEN := 'SEMAFORO_VERDE.JPG';
    //   :COLOR := 'VERDE';
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   BACKGROUND_COLOR,   'R192G255B192');
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   "FOREGROUND_COLOR",   'R0G128B0'); 
    //   SET_ITEM_PROPERTY('IMG_SEMAFORO', "VISIBLE", "PROPERTY_TRUE");
    //   READ_IMAGE_FILE(IMAGEN, 'JPG', 'TERMAN01.IMG_SEMAFORO'); 
    //  ELSIF :COLSEM = 'X' THEN
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   BACKGROUND_COLOR,   'R255G255B255');
    //   SET_ITEM_PROPERTY  ('TERMAN01.COLOR',   "FOREGROUND_COLOR",   'R0G0B0'); 
    //   SET_ITEM_PROPERTY('TERMAN01.IMG_SEMAFORO', "VISIBLE", "PROPERTY_FALSE");
    //  END IF;  
    // END;
    //#endregion
    async SEFCRETEJ_terman01_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_terman01_whenNewItemInstance");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("TERCOD", TERCOD);
            // call REST API
            const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_whennewiteminstance_query1", payload1);
            // get values from result
            // COLSEM = result1[0].get("COLSEM");
            // OBSPRO = result1[0].get("OBSPRO");
            // TIPPROV = result1[0].get("TIPPROV");
        } catch (ex) {

            this.TERMAN01.COLSEM = "X";
        }

        let IMAGEN: string = null;
        this.oracleFormsBuiltins.set_item_property("IMG_SEMAFORO", "VISIBLE", "PROPERTY_FALSE");
        // if (COLSEM == "R") {
        //     IMAGEN = "SEMAFORO_ROJO.JPG";
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", BACKGROUND_COLOR, "R255G192B192");
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", "FOREGROUND_COLOR", "R128G0B0");
        //     this.TERMAN01.COLOR = "ROJO";
        //     this.oracleFormsBuiltins.set_item_property("IMG_SEMAFORO", "VISIBLE", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.read_image_file(IMAGEN, "JPG", "TERMAN01.IMG_SEMAFORO");
        // }
        // else if (COLSEM == "A") {
        //     IMAGEN = "SEMAFORO_NARANJA.JPG";
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", BACKGROUND_COLOR, "R255G255B128");
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", "FOREGROUND_COLOR", "R255G128B0");
        //     this.TERMAN01.COLOR = "AMARILLO";
        //     this.oracleFormsBuiltins.set_item_property("IMG_SEMAFORO", "VISIBLE", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.read_image_file(IMAGEN, "JPG", "TERMAN01.IMG_SEMAFORO");
        // }
        // else if (COLSEM == "V") {
        //     IMAGEN = "SEMAFORO_VERDE.JPG";
        //     this.TERMAN01.COLOR = "VERDE";
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", BACKGROUND_COLOR, "R192G255B192");
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", "FOREGROUND_COLOR", "R0G128B0");
        //     this.oracleFormsBuiltins.set_item_property("IMG_SEMAFORO", "VISIBLE", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.read_image_file(IMAGEN, "JPG", "TERMAN01.IMG_SEMAFORO");
        // }
        // else if (COLSEM == "X") {
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", BACKGROUND_COLOR, "R255G255B255");
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.COLOR", "FOREGROUND_COLOR", "R0G0B0");
        //     this.oracleFormsBuiltins.set_item_property("TERMAN01.IMG_SEMAFORO", "VISIBLE", "PROPERTY_FALSE");
        // }
        console.log("Exiting SEFCRETEJ_terman01_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF  :this.PARAMETER.get("TER_NIT") IS NOT NULL THEN
    //     :TERMAN01.TERCOD := :this.PARAMETER.get("TER_NIT");
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_preQuery() {
        console.log("Entering SEFCRETEJ_terman01_preQuery");
        if ((this.PARAMETER.get("TER_NIT") != null)) {
            this.TERMAN01.TERCOD = this.PARAMETER.get("TER_NIT");
        }
        console.log("Exiting SEFCRETEJ_terman01_preQuery");
    }

    //#region PLSQL
    // BEGIN IF :SYSTEM.RECORD_STATUS ='CHANGED' THEN
    //    :TERMAN01.TERUACTU := PLSQLBuiltins.user();
    //    :TERMAN01.TERFACTU := SYSDATE;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_whenValidateRecord() {
        console.log("Entering SEFCRETEJ_terman01_whenValidateRecord");
        if (this._SYSTEM_SERVICE.get("RECORD_STATUS") == "CHANGED") {
            this.TERMAN01.TERUACTU = PLSQLBuiltins.user();
            this.TERMAN01.TERFACTU = PLSQLBuiltins.sysdate();
        }
        console.log("Exiting SEFCRETEJ_terman01_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN --PY 18422 : LCBY
    // DECLARE
    //  CANTIDAD NUMBER := ;
    // BEGIN
    //  
    //  CANTIDAD := PLSQLBuiltins.string_length(:TERMAN01.TERAPE);
    //  
    //  IF (CANTIDAD > 50) THEN
    //   LIB$DTNERFRMA('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.');
    //  END IF;
    //  
    // END;
    // --PY 1842; END;
    //#endregion
    async SEFCRETEJ_terman01_preUpdate() {
        console.log("Entering SEFCRETEJ_terman01_preUpdate");
        let CANTIDAD: number = null;
        CANTIDAD = PLSQLBuiltins.string_length(this.TERMAN01.TERAPE);
        if (CANTIDAD > 50) {
            // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.");
        }
        console.log("Exiting SEFCRETEJ_terman01_preUpdate");
    }

    //#region PLSQL
    // BEGIN --PY 18422 : LCBY
    // DECLARE
    //  CANTIDAD NUMBER := ;
    // BEGIN
    //  
    //  CANTIDAD := PLSQLBuiltins.string_length(:TERMAN01.TERAPE);
    //  
    //  IF (CANTIDAD > 50) THEN
    //   LIB$DTNERFRMA('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.');
    //  END IF;
    //  
    // END;
    // --PY 1842; END;
    //#endregion
    async SEFCRETEJ_terman01_preInsert() {
        console.log("Entering SEFCRETEJ_terman01_preInsert");
        let CANTIDAD: number = null;
        CANTIDAD = PLSQLBuiltins.string_length(this.TERMAN01.TERAPE);
        if (CANTIDAD > 50) {
            // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.");
        }
        console.log("Exiting SEFCRETEJ_terman01_preInsert");
    }

    //#region PLSQL
    // BEGIN
    //   :GLOBAL.V_TERVI := :TERMAN01.TERTVI;
    // 
    //   IF SYSTEM.CURSOR_ITEM IN ('TERMAN01.W_VICTIMA')
    //   THEN
    //       GO_ITEM('ENTMAN02.ENTSOC');
    //   END IF;
    // 
    //  END;
    //#endregion
    async SEFCRETEJ_terman01_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_terman01_whenNewRecordInstance");
        // this.GLOBAL.V_TERVI = this.TERMAN01.TERTVI;
        // if (["TERMAN01.W_VICTIMA"].indexOf(SYSTEM.CURSOR_ITEM) != -1) {
        //     this.oracleFormsBuiltins.go_item("ENTMAN02.ENTSOC");
        // }
        console.log("Exiting SEFCRETEJ_terman01_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN ENTER_QUERY; END;
    //#endregion
    async SEFCRETEJ_terman01_keyEntqry() {
        console.log("Entering SEFCRETEJ_terman01_keyEntqry");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFCRETEJ_terman01_keyEntqry");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R2';
    // :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    // SHOW_VIEW ('C_UBICACION'); 
    // GO_BLOCK('ENTMAN02');
    // 
    // GO_ITEM('ENTMAN02.ENTPAIS'); END;
    //#endregion
    async SEFCRETEJ_terman01_keyNxtblk() {
        console.log("Entering SEFCRETEJ_terman01_keyNxtblk");
        this.RADIOS.RREPORTES = "R2";
        this.PARAMETER.set("CONS_TER", this.TERMAN01.TERCOD);
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.show_view("C_UBICACION");
        this.oracleFormsBuiltins.go_block("ENTMAN02");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTPAIS");
        console.log("Exiting SEFCRETEJ_terman01_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN ENTMAN02 DETAIL DECLARE SECTION
    //   --
    //   CURSOR ENTMAN02_CUR IS      
    //     SELECT 1 FROM ENT E     
    //     WHERE E.ENTCOD = :TERMAN01.TERCOD;
    //   --
    //   -- END ENTMAN02 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN COVPIEDRA DETAIL DECLARE SECTION
    //   --
    //   CURSOR COVPIEDRA_CUR IS      
    //     SELECT 1 FROM COVPIEDRA C     
    //     WHERE C.PIEDRA_TERCER = :TERMAN01.TERCOD;
    //   --
    //   -- END COVPIEDRA DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN SETTERXCOM DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETTERXCOM_CUR IS      
    //     SELECT 1 FROM OPS$SEGUI.SETTERXCOM O     
    //     WHERE O.CXT_NIT = :TERMAN01.TERCOD;
    //   --
    //   -- END SETTERXCOM DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN DIR DETAIL DECLARE SECTION
    //   --
    //   CURSOR DIR_CUR IS      
    //     SELECT 1 FROM DIR D     
    //     WHERE D.DIRENT = :TERMAN01.TERCOD;
    //   --
    //   -- END DIR DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN FAMMAN01 DETAIL DECLARE SECTION
    //   --
    //   CURSOR FAMMAN01_CUR IS      
    //     SELECT 1 FROM OPS$SEGUI.FAM O     
    //     WHERE O.FAMENT = :TERMAN01.TERCOD;
    //   --
    //   -- END FAMMAN01 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN SETOPINT DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETOPINT_CUR IS      
    //     SELECT 1 FROM OPS$SEGUI.SETOPINT O     
    //     WHERE O.OPINT_NIT = :TERMAN01.TERCOD;
    //   --
    //   -- END SETOPINT DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN ENTMAN02 DETAIL PROGRAM SECTION
    //   --
    //   OPEN ENTMAN02_CUR;     
    //   FETCH ENTMAN02_CUR INTO DUMMY_DEFINE;     
    //   IF ( ENTMAN02_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE ENTMAN02_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE ENTMAN02_CUR;
    //   --
    //   -- END ENTMAN02 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   OPEN COVPIEDRA_CUR;     
    //   FETCH COVPIEDRA_CUR INTO DUMMY_DEFINE;     
    //   IF ( COVPIEDRA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COVPIEDRA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COVPIEDRA_CUR;
    //   --
    //   -- END COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETTERXCOM_CUR;     
    //   FETCH SETTERXCOM_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETTERXCOM_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETTERXCOM_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETTERXCOM_CUR;
    //   --
    //   -- END SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN DIR DETAIL PROGRAM SECTION
    //   --
    //   OPEN DIR_CUR;     
    //   FETCH DIR_CUR INTO DUMMY_DEFINE;     
    //   IF ( DIR_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE DIR_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE DIR_CUR;
    //   --
    //   -- END DIR DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN FAMMAN01 DETAIL PROGRAM SECTION
    //   --
    //   OPEN FAMMAN01_CUR;     
    //   FETCH FAMMAN01_CUR INTO DUMMY_DEFINE;     
    //   IF ( FAMMAN01_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE FAMMAN01_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE FAMMAN01_CUR;
    //   --
    //   -- END FAMMAN01 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SETOPINT DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETOPINT_CUR;     
    //   FETCH SETOPINT_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETOPINT_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETOPINT_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETOPINT_CUR;
    //   --
    //   -- END SETOPINT DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async SEFCRETEJ_terman01_onCheckDeleteMaster() {
        console.log("Entering SEFCRETEJ_terman01_onCheckDeleteMaster");
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
        console.log("Exiting SEFCRETEJ_terman01_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN :this.PARAMETER.get("CONS_TER"):=NULL;
    // SET_BLOCK_PROPERTY('TERMAN01', "DEFAULT_WHERE", 'TERPER = ''J''');
    // EXECUTE_QUERY; END;
    //#endregion
    async SEFCRETEJ_terman01_keyExeqry() {
        console.log("Entering SEFCRETEJ_terman01_keyExeqry");
        this.PARAMETER.set("CONS_TER", null);
        this.oracleFormsBuiltins.set_block_property("TERMAN01", "DEFAULT_WHERE", "TERPER = ''J''");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCRETEJ_terman01_keyExeqry");
    }

    //#region PLSQL
    // BEGIN :TERMAN01.TERFECR := SYSDATE;
    //   :TERMAN01.TERFECV := SYSDATE;
    //   :TERMAN01.TEREST  := 'VI';
    //   :TERMAN01.TERUSR  := PLSQLBuiltins.user();
    //   :TERMAN01.TERPER  := 'J';
    //   
    //   SET_ITEM_PROPERTY('TERMAN01.TERTVI', "NEXT_NAVIGATION_ITEM", 'TERMAN01.W_VICTIMA'); END;
    //#endregion
    async SEFCRETEJ_terman01_whenCreateRecord() {
        console.log("Entering SEFCRETEJ_terman01_whenCreateRecord");
        this.TERMAN01.TERFECR = PLSQLBuiltins.sysdate();
        this.TERMAN01.TERFECV = PLSQLBuiltins.sysdate();
        this.TERMAN01.TEREST = "VI";
        this.TERMAN01.TERUSR = PLSQLBuiltins.user();
        this.TERMAN01.TERPER = "J";
        this.oracleFormsBuiltins.set_item_property("TERMAN01.TERTVI", "NEXT_NAVIGATION_ITEM", "TERMAN01.W_VICTIMA");
        console.log("Exiting SEFCRETEJ_terman01_whenCreateRecord");
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
    //   -- BEGIN ENTMAN02 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_ENTMAN02');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'ENTMAN02');   
    //   END IF;
    //   --
    //   -- END ENTMAN02 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_COVPIEDRA');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COVPIEDRA');   
    //   END IF;
    //   --
    //   -- END COVPIEDRA DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_SETTERXCOM');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETTERXCOM');   
    //   END IF;
    //   --
    //   -- END SETTERXCOM DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN DIR DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_DIR');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'DIR');   
    //   END IF;
    //   --
    //   -- END DIR DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN SETOPINT DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_SETOPINT');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETOPINT');   
    //   END IF;
    //   --
    //   -- END SETOPINT DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN DCO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_DCO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'DCO');   
    //   END IF;
    //   --
    //   -- END DCO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN FAMMAN01 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_FAMMAN01');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'FAMMAN01');   
    //   END IF;
    //   --
    //   -- END FAMMAN01 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN FAMMAN01 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:TERMAN01.TERCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('TERMAN01.TERMAN01_FAMMAN01');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'FAMMAN01');   
    //   END IF;
    //   --
    //   -- END FAMMAN01 DETAIL PROGRAM SECTION
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
    async SEFCRETEJ_terman01_onPopulateDetails() {
        console.log("Entering SEFCRETEJ_terman01_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_ENTMAN02");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "ENTMAN02");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_COVPIEDRA");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "COVPIEDRA");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_SETTERXCOM");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "SETTERXCOM");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_DIR");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "DIR");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_SETOPINT");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "SETOPINT");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_DCO");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "DCO");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_FAMMAN01");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "FAMMAN01");
        }
        if ((this.TERMAN01.TERCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("TERMAN01.TERMAN01_FAMMAN01");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "FAMMAN01");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // SEFCRETEJ_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting SEFCRETEJ_terman01_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   --IF :TERMAN01.TEREST IS NOT NULL THEN
    //     --:TERMAN01.ESTADO := FRM$DESC_ESTADO(:TERMAN01.TEREST);
    //   --END IF;
    //   
    //   IF :TERMAN01.TERTVI IS NOT NULL THEN
    //      :TERMAN01.DESVIN := PU_DESC_VINCULO(:TERMAN01.TERTVI);
    //   END IF;
    // 
    //   IF :TERMAN01.TERAGE IS NOT NULL THEN
    //      :TERMAN01.AGE := FRM$DESC_AGENCIA(:TERMAN01.TEROFC, :TERMAN01.TERAGE);
    //   END IF;
    //   
    //   IF :TERMAN01.TEROFC IS NOT NULL THEN
    //      :TERMAN01.OFI := FRM$DESC_OFICINA(:TERMAN01.TEROFC);
    //   END IF;
    //   
    //  
    // 
    // --LEY DE VICTIMAS
    //   BEGIN 
    //    SELECT ENT_LEYVIC
    //    INTO :W_VICTIMA
    //    FROM ENT
    //    WHERE ENTCOD=:TERMAN01.TERCOD;
    //   EXCEPTION WHEN OTHERS THEN
    //    :W_VICTIMA := ;
    //   END; 
    // 
    // --
    // 
    //   BEGIN
    //     SELECT TDPDES
    //       INTO :ENTMAN02.PAIS
    //       FROM TDP
    //      WHERE TDPACO =:ENTMAN02.ENTPAIS; 
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       NULL;
    //   END; 
    //   
    //   
    //  --PY 18422 : LCBY
    //  IF :this.PARAMETER.get("TER_CTRL") <> 'C' THEN
    //  DECLARE
    //  CANTIDAD  NUMBER := ;
    //  CANTIDIR  NUMBER := ;
    //  BEGIN
    //  
    //  CANTIDAD := PLSQLBuiltins.string_length(:TERMAN01.TERAPE);
    //  
    //  IF (CANTIDAD > 50) THEN
    //    MESSAGE('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.');
    //    MESSAGE('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.');
    //  END IF;
    //  
    //  CANTIDIR := PLSQLBuiltins.string_length(:TERMAN01.TERDIR);
    //  
    //  IF (CANTIDIR > 100) THEN
    //   MESSAGE('EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.');
    //    MESSAGE('EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.');
    //  END IF;
    //  
    //  END;
    //  END IF;
    //  --PY 18422  
    //  
    //  --+PY22058. JDG. 
    //  BEGIN
    //   
    //   SELECT DECODE( NVL( TERCLI, 'L' ), 'L', 'LEASING', 'V', 'VEHICULO', 'A', 'LEAS+VEHI', NULL )
    //     INTO :TERMAN01.TERCLI_DESCRI
    //     FROM TER
    //    WHERE TERCOD = :TERMAN01.TERCOD;
    //    
    //  EXCEPTION
    //   
    //  WHEN OTHERS THEN
    //  
    //    :TERMAN01.TERCLI_DESCRI := NULL;
    //  
    //  END;
    //      
    //  END;
    // 
    // 
    // 
    // --GEXNOVA 
    // --DEBITO AUTOMATICO
    // --PROYECTO 20718
    // :TERMAN01.DEBITOAUTO:= PQBD_COL_DEBITO_AUTOMATICO.ESTADO_CLIENTE(:TERMAN01.TERCOD);
    //#endregion
    async SEFCRETEJ_terman01_postQuery() {
        console.log("Entering SEFCRETEJ_terman01_postQuery");
        // if ((this.TERMAN01.TERTVI != null)) {
        //     this.TERMAN01.DESVIN = PU_DESC_VINCULO(this.TERMAN01.TERTVI);
        // }
        // if ((this.TERMAN01.TERAGE != null)) {
        //     this.TERMAN01.AGE = FRM$DESC_AGENCIA(this.TERMAN01.TEROFC, this.TERMAN01.TERAGE);
        // }
        // if ((this.TERMAN01.TEROFC != null)) {
        //     this.TERMAN01.OFI = FRM$DESC_OFICINA(this.TERMAN01.TEROFC);
        // }
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("TERCOD", this.TERMAN01.TERCOD);
            // call REST API
            const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_postquery_query1", payload1);
            // get values from result
            // W_VICTIMA = result1[0].get("W_VICTIMA");
        } catch (ex) {

            // this.TERMAN01.W_VICTIMA = ;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("ENTPAIS", this.ENTMAN02.ENTPAIS);
        // call REST API
        const result2 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_postquery_query2", payload2);
        // get values from result
        this.ENTMAN02.PAIS = result2[0].get("ENTMAN02.PAIS");
        if (result2 == null || result2.length == 0) {

        }

        if (this.PARAMETER.get("TER_CTRL") != "C") {
            {

                let CANTIDAD: number = null;
                let CANTIDIR: number = null;
                CANTIDAD = PLSQLBuiltins.string_length(this.TERMAN01.TERAPE);
                if (CANTIDAD > 50) {
                    this.oracleFormsBuiltins.message("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.");
                    this.oracleFormsBuiltins.message("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.");
                }
                CANTIDIR = PLSQLBuiltins.string_length(this.TERMAN01.TERDIR);
                if (CANTIDIR > 100) {
                    this.oracleFormsBuiltins.message("EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.");
                    this.oracleFormsBuiltins.message("EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. DEBE ACTUALIZARLO.");
                }
            }

        }
        let result3 = new Map();
        try {

            // construct payload
            let payload3 = new Map();
            payload3.set("TERCOD", this.TERMAN01.TERCOD);
            // call REST API
            const result3 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_postquery_query3", payload3);
            // get values from result
            this.TERMAN01.TERCLI_DESCRI = result3[0].get("TERMAN01.TERCLI_DESCRI");
        } catch (ex) {

            this.TERMAN01.TERCLI_DESCRI = null;
        }

        console.log("Exiting SEFCRETEJ_terman01_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //  IF(:TERCELU IS NOT NULL) THEN
    //   
    //  IF PLSQLBuiltins.string_length(:TERCELU) != 10 THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DE CELULAR DEBE TENER 10 DIGITOS',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_tercelu_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_tercelu_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((TERCELU != null)) {
        //     if (PLSQLBuiltins.string_length(TERCELU) != 10) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DE CELULAR DEBE TENER 10 DIGITOS", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        console.log("Exiting SEFCRETEJ_terman01_tercelu_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERDIR IS NULL THEN
    //  :GLOBAL.CADENA:= NULL;
    //  :GLOBAL.DIR1:= 'DIR'; 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_terdir_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_terman01_terdir_whenNewItemInstance");
        if ((this.TERMAN01.TERDIR == null)) {
            // this.GLOBAL.CADENA = null;
            // this.GLOBAL.DIR1 = "DIR";
        }
        console.log("Exiting SEFCRETEJ_terman01_terdir_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //   --
    //   -- MODIFICACIÓN: INCTID: INCLUSIÓN DE TIPOS DE IDENTIFICACIONES
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 18 DE MAYO DE 2007
    //   --
    // 
    //   COUNT_TDI NUMBER;
    // 
    // BEGIN
    // 
    //     
    //     SELECT COUNT(*)
    //     INTO   COUNT_TDI
    //     FROM   OPS$SEGUI.TDI
    //     WHERE  (TDICOD = :TERMAN01.TERTID);
    // 
    //     IF (NOT (COUNT_TDI = 1)) THEN
    //        MESSAGE('TIPO DE IDENTIFICACION NO EXISTE');
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // 
    //     IF :TERMAN01.TERTID IN ('CC', 'CE', 'TI','NU','PA','RG') THEN -- INCTID
    //        :TERMAN01.TERPER := 'N';
    //        :ENTMAN02.ENTRTE :='S';
    //     -- INGRESANDO VALORES STANDAR
    //      :ENTMAN02.ENTSEC := '2';
    //      :ENTMAN02.ENTSSC := NULL;
    //     ELSE 
    //        :TERMAN01.TERPER := 'J';
    //     END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_terman01_tertid_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_tertid_whenValidateItem");
        let COUNT_TDI: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERTID", this.TERMAN01.TERTID);
        // call REST API
        const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_tertid_whenvalidateitem_query1", payload1);
        // get values from result
        COUNT_TDI = result1[0].get("COUNT_TDI");
        // if ((!COUNT_TDI == 1)) {
        //     this.oracleFormsBuiltins.message("TIPO DE IDENTIFICACION NO EXISTE");
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        if (["CC", "CE", "TI", "NU", "PA", "RG"].indexOf(this.TERMAN01.TERTID) != -1) {
            this.TERMAN01.TERPER = "N";
            this.ENTMAN02.ENTRTE = "S";
            this.ENTMAN02.ENTSEC = "2";
            this.ENTMAN02.ENTSSC = null;
        }
        else {
            this.TERMAN01.TERPER = "J";
        }
        console.log("Exiting SEFCRETEJ_terman01_tertid_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF  :TERMAN01.TERPER = 'J' THEN 
    //  SET_ITEM_PROPERTY('TERMAN01.TERNOM',REQUIRED,"PROPERTY_FALSE");
    // ELSE 
    //   SET_ITEM_PROPERTY('TERMAN01.TERNOM',REQUIRED,"PROPERTY_TRUE");
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_tertid_postTextItem() {
        console.log("Entering SEFCRETEJ_terman01_tertid_postTextItem");
        if (this.TERMAN01.TERPER == "J") {
            this.oracleFormsBuiltins.set_item_property("TERMAN01.TERNOM", "REQUIRED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("TERMAN01.TERNOM", "REQUIRED", "PROPERTY_TRUE");
        }
        console.log("Exiting SEFCRETEJ_terman01_tertid_postTextItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERDEP IS NOT NULL THEN
    // 
    // DECLARE 
    // PAIS_HOMO       VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //  BEGIN
    //   SELECT TDECOF
    //     INTO PAIS_HOMO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD = :TERMAN01.TERDEP
    //      AND  DEPACO = :ENTMAN02.ENTPAIS;
    //      
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE DEPARTAMENTO INVALIDO... CONSULTE LISTA DE VALORES  ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END;
    //  
    //  BEGIN 
    //    SELECT DEPDES
    //      INTO :TERMAN01.DEPTO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD=:TERMAN01.TERDEP
    //       AND TDECOF = PAIS_HOMO
    //       AND :TERMAN01.TERDEP <> '00'
    //        ;
    //     :TERMAN01.TERTCI:= NULL;
    //   EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE DEPARTAMENTO NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_terdep_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terdep_whenValidateItem");
        if ((this.TERMAN01.TERDEP != null)) {
            {

                let PAIS_HOMO: string = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TERDEP", this.TERMAN01.TERDEP);
                payload1.set("ENTPAIS", this.ENTMAN02.ENTPAIS);
                // call REST API
                const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_terdep_whenvalidateitem_query1", payload1);
                // get values from result
                PAIS_HOMO = result1[0].get("PAIS_HOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE DEPARTAMENTO INVALIDO... CONSULTE LISTA DE VALORES  ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("TERDEP", this.TERMAN01.TERDEP);
                // call REST API
                const result2 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_terdep_whenvalidateitem_query2", payload2);
                // get values from result
                this.TERMAN01.DEPTO = result2[0].get("TERMAN01.DEPTO");
                this.TERMAN01.TERTCI = null;
                if (result2 == null || result2.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE DEPARTAMENTO NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_terman01_terdep_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF  :TERMAN01.TERDEP = '11' AND :TERMAN01.TERTCI IS NULL THEN
    //   :TERMAN01.TERTCI := '001';
    //   :TERMAN01.TEROFC := '001';
    //   :TERMAN01.TERAGE := '01';
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_terdep_postTextItem() {
        console.log("Entering SEFCRETEJ_terman01_terdep_postTextItem");
        if ((this.TERMAN01.TERDEP == "11" && (this.TERMAN01.TERTCI == null))) {
            this.TERMAN01.TERTCI = "001";
            this.TERMAN01.TEROFC = "001";
            this.TERMAN01.TERAGE = "01";
        }
        console.log("Exiting SEFCRETEJ_terman01_terdep_postTextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TERMAN01.TERTCI'); END;
    //#endregion
    async SEFCRETEJ_terman01_terdep_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_terdep_keyNextItem");
        this.oracleFormsBuiltins.go_item("TERMAN01.TERTCI");
        console.log("Exiting SEFCRETEJ_terman01_terdep_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //     SELECT  TDEDES
    //       INTO  :TERMAN01.ESTADO
    //       FROM  OPS$SEGUI.TDE
    //       WHERE TDECOD=:TERMAN01.TEREST;
    //     EXCEPTION
    //       WHEN NO_DATA_FOUND THEN
    //       MESSAGE('ESTADO NO EXISTE');
    //       RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_terest_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terest_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("TEREST", this.TERMAN01.TEREST);
        // call REST API
        const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_terest_whenvalidateitem_query1", payload1);
        // get values from result
        this.TERMAN01.ESTADO = result1[0].get("TERMAN01.ESTADO");
        if (result1 == null || result1.length == 0) {

            this.oracleFormsBuiltins.message("ESTADO NO EXISTE");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting SEFCRETEJ_terman01_terest_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTSEG'); END;
    //#endregion
    async SEFCRETEJ_terman01_terest_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_terest_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTSEG");
        console.log("Exiting SEFCRETEJ_terman01_terest_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //  IF(:TERTEL IS NOT NULL) THEN
    //   
    //  IF PLSQLBuiltins.string_length(:TERTEL) != 7 THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO TELEFONO DEBE TENER 7 DIGITOS',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF :TERTEL IN ('3122377', '3122510', '2669421', '2660939', '6604500', '6604499', '3344324', '6331476', '6825373') THEN
    //   LIB$ALERTA('MENSAJE','EL CAMPO TELÉFONO NO DEBE PERTENECER A LEASING BOLIVAR',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_tertel_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_tertel_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((TERTEL != null)) {
        //     if (PLSQLBuiltins.string_length(TERTEL) != 7) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO TELEFONO DEBE TENER 7 DIGITOS", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        //     if (["3122377", "3122510", "2669421", "2660939", "6604500", "6604499", "3344324", "6331476", "6825373"].indexOf(TERTEL) != -1) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO TELÉFONO NO DEBE PERTENECER A LEASING BOLIVAR", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        console.log("Exiting SEFCRETEJ_terman01_tertel_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN -- AOV 08/04/2013 = SE MODIFICA PARA RECIBIR EL NUMERO DE CELULAR COMO ALTERNATIVA AL TELEFONO
    // 
    // IF :TERMAN01.TERDIR  IS NULL AND (:TERMAN01.TERTEL IS NOT NULL OR :TERMAN01.TERCELU IS NOT NULL) THEN
    // MESSAGE('INGRESE LA DIRECCIÓN');
    // MESSAGE('INGRESE LA DIRECCIÓN');
    // ELSIF (:TERMAN01.TERTEL IS NULL AND :TERMAN01.TERCELU IS NULL) AND :TERMAN01.TERDIR IS NOT NULL THEN
    //  MESSAGE('INGRESE EL NUMERO DE TELEFONO O CELULAR');
    //  MESSAGE('INGRESE EL NUMERO DE TELEFONO O CELULAR');
    //  --RAISE FORM_TRIGGER_FAILURE;
    // ELSIF (:TERMAN01.TERTEL IS NULL AND :TERMAN01.TERCELU IS NULL) AND :TERMAN01.TERDIR  IS NULL THEN
    //   MESSAGE('INGRESE NUMERO DE TELEFONO O CELULAR Y LA DIRECCIÓN');
    //   MESSAGE('INGRESE NUMERO DE TELEFONO O CELULAR Y LA DIRECCIÓN');
    //   RAISE FORM_TRIGGER_FAILURE;
    // ELSIF :ENT_ULTMTEL IS NULL AND :TERMAN01.TERTEL IS NOT NULL THEN
    //   :ENT_ULTMTEL := :TERMAN01.TERTEL;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_tertel_postTextItem() {
        console.log("Entering SEFCRETEJ_terman01_tertel_postTextItem");
        if (((this.TERMAN01.TERDIR == null) && ((this.TERMAN01.TERTEL != null) || (this.TERMAN01.TERCELU != null)))) {
            this.oracleFormsBuiltins.message("INGRESE LA DIRECCIÓN");
            this.oracleFormsBuiltins.message("INGRESE LA DIRECCIÓN");
        }
        else if ((((this.TERMAN01.TERTEL == null) && (this.TERMAN01.TERCELU == null)) && (this.TERMAN01.TERDIR != null))) {
            this.oracleFormsBuiltins.message("INGRESE EL NUMERO DE TELEFONO O CELULAR");
            this.oracleFormsBuiltins.message("INGRESE EL NUMERO DE TELEFONO O CELULAR");
        }
        else if ((((this.TERMAN01.TERTEL == null) && (this.TERMAN01.TERCELU == null)) && (this.TERMAN01.TERDIR == null))) {
            this.oracleFormsBuiltins.message("INGRESE NUMERO DE TELEFONO O CELULAR Y LA DIRECCIÓN");
            this.oracleFormsBuiltins.message("INGRESE NUMERO DE TELEFONO O CELULAR Y LA DIRECCIÓN");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // else if (((ENT_ULTMTEL == null) && (this.TERMAN01.TERTEL != null))) {
        //     this.TERMAN01.ENT_ULTMTEL = this.TERMAN01.TERTEL;
        // }
        console.log("Exiting SEFCRETEJ_terman01_tertel_postTextItem");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //  IF(:TERFAX IS NOT NULL) THEN
    //   
    //  IF PLSQLBuiltins.string_length(:TERFAX) != 7 THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DE FAX DEBE TENER 7 DIGITOS',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_terfax_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terfax_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((TERFAX != null)) {
        //     if (PLSQLBuiltins.string_length(TERFAX) != 7) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DE FAX DEBE TENER 7 DIGITOS", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        console.log("Exiting SEFCRETEJ_terman01_terfax_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTPAIS'); END;
    //#endregion
    async SEFCRETEJ_terman01_terfax_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_terfax_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTPAIS");
        console.log("Exiting SEFCRETEJ_terman01_terfax_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --PUP_SEMAFORO;
    // NULL; END;
    //#endregion
    async SEFCRETEJ_terman01_imgSemaforo_whenMouseClick() {
        console.log("Entering SEFCRETEJ_terman01_imgSemaforo_whenMouseClick");
        console.log("Exiting SEFCRETEJ_terman01_imgSemaforo_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  V_TIENEPROV NUMBER(1);
    //  VBOTON      NUMBER;
    // BEGIN
    //  SELECT COUNT(*) 
    //    INTO V_TIENEPROV
    //    FROM OPS$SEGUI.SETSEMAPROVEE E 
    //   WHERE E.SEMPRO_TERCOD = :TERMAN01.TERCOD;
    //   
    //  IF V_TIENEPROV = 0 AND :this.PARAMETER.get("TER_CTRL") <> 'C' THEN
    //   LIB$ALERTA('MENSAJE','EL TERCERO NO POSEE INFORMACION DE PROVEEDOR.','ACEPTAR',NULL,NULL,VBOTON);
    //  ELSE
    //   SHOW_VIEW('C_PROVEEDORES');
    //   GO_ITEM('TERMAN01.COLOR');
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_infoProv_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_terman01_infoProv_whenButtonPressed");
        let V_TIENEPROV: number = null;
        let VBOTON: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCOD", this.TERMAN01.TERCOD);
        // call REST API
        const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_infoprov_whenbuttonpressed_query1", payload1);
        // get values from result
        V_TIENEPROV = result1[0].get("V_TIENEPROV");
        if ((V_TIENEPROV == 0 && this.PARAMETER.get("TER_CTRL") != "C")) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL TERCERO NO POSEE INFORMACION DE PROVEEDOR.", "ACEPTAR", null, null, VBOTON);
        }
        else {
            this.oracleFormsBuiltins.show_view("C_PROVEEDORES");
            this.oracleFormsBuiltins.go_item("TERMAN01.COLOR");
        }
        console.log("Exiting SEFCRETEJ_terman01_infoProv_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --PY 18422 : LCBY
    // DECLARE
    //  CANTIDAD NUMBER := ;
    // BEGIN
    //  
    //  CANTIDAD := PLSQLBuiltins.string_length(:TERMAN01.TERAPE);
    //  
    //  IF (CANTIDAD > 50) THEN
    //   LIB$DTNERFRMA('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.');
    // 
    //  END IF;
    //  
    // END;
    // --PY 1842; END;
    //#endregion
    async SEFCRETEJ_terman01_terape_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terape_whenValidateItem");
        let CANTIDAD: number = null;
        CANTIDAD = PLSQLBuiltins.string_length(this.TERMAN01.TERAPE);
        if (CANTIDAD > 50) {
            // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.");
        }
        console.log("Exiting SEFCRETEJ_terman01_terape_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --PY 18422 : LCBY
    // DECLARE
    //  CANTIDAD NUMBER := ;
    // BEGIN
    //  
    //  CANTIDAD := PLSQLBuiltins.string_length(:TERMAN01.TERAPE);
    //  
    //  IF (CANTIDAD > 50) THEN
    //   LIB$DTNERFRMA('EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.');
    //   
    //  ELSE
    //   GO_ITEM('ENTFECN');
    //  END IF;
    //  
    // END;
    // --PY 1842; END;
    //#endregion
    async SEFCRETEJ_terman01_terape_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_terape_keyNextItem");
        let CANTIDAD: number = null;
        CANTIDAD = PLSQLBuiltins.string_length(this.TERMAN01.TERAPE);
        if (CANTIDAD > 50) {
            // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO RAZÓN SOCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 50.");
        }
        else {
            this.oracleFormsBuiltins.go_item("ENTFECN");
        }
        console.log("Exiting SEFCRETEJ_terman01_terape_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERDIR IS NOT NULL AND (FRM$ALERTA_SINO ('¿LA DIRECCIÓN COMERCIAL ES LA MISMA DE NOTIFICACIÓN?') = 1) THEN
    //     --LCBY: PY 18422
    //         IF PLSQLBuiltins.string_length(:ENTMAN02.ENTDIR)>100 THEN
    //       LIB$DTNERFRMA('EL CAMPO DIRECCIÓN COMERCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.');
    //         ELSIF :ENTMAN02.ENTDIR IS NULL THEN
    //          IF PLSQLBuiltins.string_length(:TERMAN01.TERDIR)>100 THEN
    //        LIB$DTNERFRMA('EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO, POR ESO NO ES POSIBLE COPIARLA.');
    //          ELSE
    //           :ENTMAN02.ENTDIR := :TERMAN01.TERDIR;
    //          END IF;
    //     ELSE        
    //     :ENTMAN02.ENTDIR := :TERMAN01.TERDIR;
    //     END IF;
    //     --PY 18422
    // ELSE
    //  SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :ENTMAN02.ENTDIR;
    //  :GLOBAL.DIR1:= 'DIR1';   
    // END IF;
    //   --CLEAR_BLOCK(NO_VALIDATE); END;
    //#endregion
    async SEFCRETEJ_terman01_dir02_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_terman01_dir02_whenButtonPressed");
        // if (((this.TERMAN01.TERDIR != null) && FRM$ALERTA_SINO("¿LA DIRECCIÓN COMERCIAL ES LA MISMA DE NOTIFICACIÓN?") == 1)) {
        //     if (PLSQLBuiltins.string_length(this.ENTMAN02.ENTDIR) > 100) {
        //         // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN COMERCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.");
        //     }
        //     else if ((this.ENTMAN02.ENTDIR == null)) {
        //         if (PLSQLBuiltins.string_length(this.TERMAN01.TERDIR) > 100) {
        //             // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO, POR ESO NO ES POSIBLE COPIARLA.");
        //         }
        //         else {
        //             this.ENTMAN02.ENTDIR = this.TERMAN01.TERDIR;
        //         }
        //     }
        //     else {
        //         this.ENTMAN02.ENTDIR = this.TERMAN01.TERDIR;
        //     }
        // }
        // else {
        //     this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        //     this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        //     // this.GLOBAL.CADENA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.DIR1 = "DIR1";
        // }
        console.log("Exiting SEFCRETEJ_terman01_dir02_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERDIR IS NOT NULL AND (FRM$ALERTA_SINO ('¿LA DIRECCIÓN RESIDENCIAL ES LA MISMA DE NOTIFICACIÓN?') = 1) THEN
    //     --LCBY: PY 18422
    //         IF PLSQLBuiltins.string_length(:ENTMAN02.ENTDIR1)>100 THEN
    //       LIB$DTNERFRMA('EL CAMPO DIRECCIÓN RESIDENCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.');
    //         ELSIF :ENTMAN02.ENTDIR1 IS NULL THEN
    //          IF PLSQLBuiltins.string_length(:TERMAN01.TERDIR)>100 THEN
    //        LIB$DTNERFRMA('EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO, POR ESO NO ES POSIBLE COPIARLA.');
    //          ELSE
    //           :ENTMAN02.ENTDIR1 := :TERMAN01.TERDIR;
    //          END IF;
    //     ELSE        
    //     :ENTMAN02.ENTDIR1 := :TERMAN01.TERDIR;
    //     END IF;
    //     --PY 18422
    // ELSE 
    //  SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :ENTMAN02.ENTDIR;
    //  :GLOBAL.DIR1:= 'DIR2';  
    // END IF; 
    // 
    //   --CLEAR_BLOCK(NO_VALIDATE); END;
    //#endregion
    async SEFCRETEJ_terman01_dir03_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_terman01_dir03_whenButtonPressed");
        // if (((this.TERMAN01.TERDIR != null) && FRM$ALERTA_SINO("¿LA DIRECCIÓN RESIDENCIAL ES LA MISMA DE NOTIFICACIÓN?") == 1)) {
        //     if (PLSQLBuiltins.string_length(this.ENTMAN02.ENTDIR1) > 100) {
        //         // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN RESIDENCIAL EXCEDE EL MAXIMO DE CARACTERES PERMITIDO. EL MAXIMO DE CARACTERES PERMITIDO ES 100.");
        //     }
        //     else if ((this.ENTMAN02.ENTDIR1 == null)) {
        //         if (PLSQLBuiltins.string_length(this.TERMAN01.TERDIR) > 100) {
        //             // SEFCRETEJ_LIB$DTNERFRMA("EL CAMPO DIRECCIÓN NOTIFICACIÓN EXCEDE EL MAXIMO DE CARACTERES PERMITIDO, POR ESO NO ES POSIBLE COPIARLA.");
        //         }
        //         else {
        //             this.ENTMAN02.ENTDIR1 = this.TERMAN01.TERDIR;
        //         }
        //     }
        //     else {
        //         this.ENTMAN02.ENTDIR1 = this.TERMAN01.TERDIR;
        //     }
        // }
        // else {
        //     this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        //     this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        //     // this.GLOBAL.CADENA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.DIR1 = "DIR2";
        // }
        console.log("Exiting SEFCRETEJ_terman01_dir03_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :TERMAN01.TERDIR;
    //  :GLOBAL.DIR1:= 'DIR';   
    // 
    //   --CLEAR_BLOCK(NO_VALIDATE); END;
    //#endregion
    async SEFCRETEJ_terman01_dir01_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_terman01_dir01_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.TERMAN01.TERDIR;
        // this.GLOBAL.DIR1 = "DIR";
        console.log("Exiting SEFCRETEJ_terman01_dir01_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERTVI IS NOT NULL THEN
    // BEGIN
    //  
    //   SELECT TDVDES
    //     INTO :TERMAN01.DESVIN
    //   FROM OPS$SEGUI.TDV
    //   WHERE TDVCOD=:TERMAN01.TERTVI;
    //  
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     MESSAGE('CODIGO NO EXISTE.');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END;
    // 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_tertvi_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_tertvi_whenValidateItem");
        if ((this.TERMAN01.TERTVI != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("TERTVI", this.TERMAN01.TERTVI);
            // call REST API
            const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_tertvi_whenvalidateitem_query1", payload1);
            // get values from result
            this.TERMAN01.DESVIN = result1[0].get("TERMAN01.DESVIN");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO NO EXISTE.");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_terman01_tertvi_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.V_TERVI := :TERMAN01.TERTVI; END;
    //#endregion
    async SEFCRETEJ_terman01_tertvi_preTextItem() {
        console.log("Entering SEFCRETEJ_terman01_tertvi_preTextItem");
        // this.GLOBAL.V_TERVI = this.TERMAN01.TERTVI;
        console.log("Exiting SEFCRETEJ_terman01_tertvi_preTextItem");
    }

    //#region PLSQL
    // BEGIN 
    //  
    //  
    // IF :GLOBAL.V_TERVI = '24' AND :GLOBAL.V_TERVI <> :TERMAN01.TERTVI THEN
    //    GO_ITEM('TERMAN01.TERTVI');
    //    :TERMAN01.TERTVI := '24';
    //    LIB$DTNERFRMA('EL TIPO DE VINCULO ES 24 (PROVEEDOR ADMINISTRATIVO). PARA CAMBIARLO DEBE COMUNICARSE CON EL ÁREA DE INNOVACIÓN Y SERVICIO');
    // ELSIF  :GLOBAL.V_TERVI <> :TERMAN01.TERTVI AND  :TERMAN01.TERTVI = '24' THEN
    //    GO_ITEM('TERMAN01.TERTVI');
    //    :TERMAN01.TERTVI := :GLOBAL.V_TERVI;
    //    LIB$DTNERFRMA('ESTA INTENTANDO CAMBIAR EL VINCULO (PROVEEDOR ADMINISTRATIVO). DEBE COMUNICARSE CON EL ÁREA DE INNOVACIÓN Y SERVICIO');
    // END IF;
    // 
    // 
    // IF :GLOBAL.V_TERVI IS NULL AND :TERMAN01.TERTVI = '24' THEN
    //   :TERMAN01.TEREST := 'BQ';
    // END IF; 
    // 
    //  IF :TERMAN01.TERTVI IS NOT NULL THEN
    //     :TERMAN01.DESVIN := PU_DESC_VINCULO(:TERMAN01.TERTVI);
    //     GO_ITEM('TERMAN01.W_VICTIMA');
    //  END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_terman01_tertvi_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_tertvi_keyNextItem");
        // if ((GLOBAL.V_TERVI == "24" && GLOBAL.V_TERVI != TERMAN01.TERTVI)) {
        //     this.oracleFormsBuiltins.go_item("TERMAN01.TERTVI");
        //     this.TERMAN01.TERTVI = "24";
        //     // SEFCRETEJ_LIB$DTNERFRMA("EL TIPO DE VINCULO ES 24 (PROVEEDOR ADMINISTRATIVO). PARA CAMBIARLO DEBE COMUNICARSE CON EL ÁREA DE INNOVACIÓN Y SERVICIO");
        // }
        // else if ((GLOBAL.V_TERVI != TERMAN01.TERTVI && TERMAN01.TERTVI == "24")) {
        //     this.oracleFormsBuiltins.go_item("TERMAN01.TERTVI");
        //     this.TERMAN01.TERTVI = this.GLOBAL.V_TERVI;
        //     // SEFCRETEJ_LIB$DTNERFRMA("ESTA INTENTANDO CAMBIAR EL VINCULO (PROVEEDOR ADMINISTRATIVO). DEBE COMUNICARSE CON EL ÁREA DE INNOVACIÓN Y SERVICIO");
        // }
        // if (((GLOBAL.V_TERVI == null) && TERMAN01.TERTVI == "24")) {
        //     this.TERMAN01.TEREST = "BQ";
        // }
        // if ((this.TERMAN01.TERTVI != null)) {
        //     this.TERMAN01.DESVIN = PU_DESC_VINCULO(this.TERMAN01.TERTVI);
        //     this.oracleFormsBuiltins.go_item("TERMAN01.W_VICTIMA");
        // }
        console.log("Exiting SEFCRETEJ_terman01_tertvi_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TERMAN01.W_VICTIMA'); END;
    //#endregion
    async SEFCRETEJ_terman01_desvin_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_desvin_keyNextItem");
        this.oracleFormsBuiltins.go_item("TERMAN01.W_VICTIMA");
        console.log("Exiting SEFCRETEJ_terman01_desvin_keyNextItem");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('C_BASICOS');
    //     GO_ITEM('TERMAN01.TERCOD');
    //     HIDE_VIEW('C_PROVEEDORES'); END;
    //#endregion
    async SEFCRETEJ_terman01_salirProv_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_terman01_salirProv_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("C_BASICOS");
        this.oracleFormsBuiltins.go_item("TERMAN01.TERCOD");
        this.oracleFormsBuiltins.hide_view("C_PROVEEDORES");
        console.log("Exiting SEFCRETEJ_terman01_salirProv_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    // 
    // 
    //  IF(:W_VICTIMA = 'S')THEN
    //   
    //     LIB$ALERTA('MENSAJE','SU CLIENTE ES VICTIMA DEL CONFLICTO, INGRESE EN INTRANET EL REGISTRO ÚNICO DE VICTIMAS'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);
    //               
    //  
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_wVictima_whenListChanged() {
        console.log("Entering SEFCRETEJ_terman01_wVictima_whenListChanged");
        let VBOTON: number = null;
        // if (W_VICTIMA == "S") {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SU CLIENTE ES VICTIMA DEL CONFLICTO, INGRESE EN INTRANET EL REGISTRO ÚNICO DE VICTIMAS", "ACEPTAR", null, null, VBOTON);
        // }
        console.log("Exiting SEFCRETEJ_terman01_wVictima_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTSOC'); END;
    //#endregion
    async SEFCRETEJ_terman01_wVictima_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_wVictima_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTSOC");
        console.log("Exiting SEFCRETEJ_terman01_wVictima_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERFFOR > SYSDATE THEN
    //  MESSAGE('LA FECHA NO PUEDE SER MAYOR A LA ACTUAL');
    //  MESSAGE('LA FECHA NO PUEDE SER MAYOR A LA ACTUAL');
    //  RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_terffor_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terffor_whenValidateItem");
        if (this.TERMAN01.TERFFOR > PLSQLBuiltins.sysdate()) {
            this.oracleFormsBuiltins.message("LA FECHA NO PUEDE SER MAYOR A LA ACTUAL");
            this.oracleFormsBuiltins.message("LA FECHA NO PUEDE SER MAYOR A LA ACTUAL");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_terman01_terffor_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERTCI IS NOT NULL THEN
    // 
    // DECLARE 
    // PAIS_HOMO       VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //  BEGIN
    //   SELECT TDECOF
    //     INTO PAIS_HOMO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD = :TERMAN01.TERDEP
    //      AND  DEPACO = :ENTMAN02.ENTPAIS;
    //      
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE PAIS INVALIDO... INSERTE EL PAIS ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END;
    //  
    //  BEGIN 
    //    SELECT TDCDES
    //      INTO :TERMAN01.CIUDAD
    //      FROM OPS$SEGUI.TDC
    //     WHERE TDCDEP =:TERMAN01.TERDEP
    //       AND TDCPAI = PAIS_HOMO
    //       AND TDCCOD = :TERMAN01.TERTCI
    //       AND :TERMAN01.TERTCI <> '000'
    //        ;
    //   EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE LA CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_tertci_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_tertci_whenValidateItem");
        if ((this.TERMAN01.TERTCI != null)) {
            {

                let PAIS_HOMO: string = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TERDEP", this.TERMAN01.TERDEP);
                payload1.set("ENTPAIS", this.ENTMAN02.ENTPAIS);
                // call REST API
                const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_tertci_whenvalidateitem_query1", payload1);
                // get values from result
                PAIS_HOMO = result1[0].get("PAIS_HOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS INVALIDO... INSERTE EL PAIS ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("TERDEP", this.TERMAN01.TERDEP);
                payload2.set("TERTCI", this.TERMAN01.TERTCI);
                // call REST API
                const result2 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_tertci_whenvalidateitem_query2", payload2);
                // get values from result
                this.TERMAN01.CIUDAD = result2[0].get("TERMAN01.CIUDAD");
                if (result2 == null || result2.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE LA CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_terman01_tertci_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERTCI IS NULL THEN
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  RETURN_LOV := SHOW_LOV('TERMAN01_TERTCI_LOV2');
    //  END;
    // ELSE
    //  EXECUTE_TRIGGER('WHEN-VALIDATE-ITEM');
    // END IF;
    // IF   (:TERMAN01.TERDEP= '66' AND :TERMAN01.TERTCI = '001'AND :TERMAN01.TERTVI =09)
    //  OR (:TERMAN01.TERDEP= '76' AND :TERMAN01.TERTCI = '001'AND :TERMAN01.TERTVI =09) THEN 
    //  SET_ITEM_PROPERTY('ENTMAN02.ENTACT',REQUIRED ,"PROPERTY_TRUE");
    // ELSE
    //  SET_ITEM_PROPERTY('ENTMAN02.ENTACT',REQUIRED ,"PROPERTY_FALSE");
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_tertci_postTextItem() {
        console.log("Entering SEFCRETEJ_terman01_tertci_postTextItem");
        if ((this.TERMAN01.TERTCI == null)) {
            {

                let RETURN_LOV: boolean = null;
                RETURN_LOV = this.oracleFormsBuiltins.show_lov("TERMAN01_TERTCI_LOV2");
            }

        }
        else {
            // this.oracleFormsBuiltins.execute_trigger("WHEN-VALIDATE-ITEM");
        }
        // if ((((this.TERMAN01.TERDEP == "66" && TERMAN01.TERTCI == "001") && TERMAN01.TERTVI == 09) || ((this.TERMAN01.TERDEP == "76" && TERMAN01.TERTCI == "001") && TERMAN01.TERTVI == 09))) {
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTACT", "REQUIRED", "PROPERTY_TRUE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTACT", "REQUIRED", "PROPERTY_FALSE");
        // }
        console.log("Exiting SEFCRETEJ_terman01_tertci_postTextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TEROFC'); END;
    //#endregion
    async SEFCRETEJ_terman01_tertci_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_tertci_keyNextItem");
        this.oracleFormsBuiltins.go_item("TEROFC");
        console.log("Exiting SEFCRETEJ_terman01_tertci_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TEROFC IS NOT NULL THEN
    // BEGIN
    //   SELECT OFIDES
    //     INTO :TERMAN01.OFI
    //     FROM OPS$SEGUI.OFI
    //     WHERE (OFICOD=:TERMAN01.TEROFC);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         MESSAGE('CODIGO DE LA OFICINA NO EXISTE');
    //         RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_terofc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terofc_whenValidateItem");
        if ((this.TERMAN01.TEROFC != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("TEROFC", this.TERMAN01.TEROFC);
            // call REST API
            const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_terofc_whenvalidateitem_query1", payload1);
            // get values from result
            this.TERMAN01.OFI = result1[0].get("TERMAN01.OFI");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO DE LA OFICINA NO EXISTE");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_terman01_terofc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERAGE IS NOT NULL THEN
    // BEGIN
    //   SELECT  AGEDES
    //     INTO  :TERMAN01.AGE
    //     FROM  OPS$SEGUI.AGE
    //     WHERE AGECOD=:TERMAN01.TERAGE
    //     AND   AGEOFC=:TERMAN01.TEROFC;
    //  
    // 
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //         MESSAGE('NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES');
    //         RAISE FORM_TRIGGER_FAILURE;
    //        
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_terman01_terage_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_terage_whenValidateItem");
        if ((this.TERMAN01.TERAGE != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("TERAGE", this.TERMAN01.TERAGE);
            payload1.set("TEROFC", this.TERMAN01.TEROFC);
            // call REST API
            const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_terage_whenvalidateitem_query1", payload1);
            // get values from result
            this.TERMAN01.AGE = result1[0].get("TERMAN01.AGE");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("NO EXISTE LA AGENCIA, CONSULTE LISTA DE VALORES");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_terman01_terage_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTACT'); END;
    //#endregion
    async SEFCRETEJ_terman01_terage_keyNextItem() {
        console.log("Entering SEFCRETEJ_terman01_terage_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTACT");
        console.log("Exiting SEFCRETEJ_terman01_terage_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :TERMAN01.TERCOD IS NOT NULL THEN
    //     PVALTER(:TERMAN01.TERCOD); -- TERRES
    //   END IF;
    // END;
    // --------
    //  PVALTER(:TERMAN01.TERCOD);
    // SELECT REPLACE (:TERMAN01.TERCOD ,' ','')
    // INTO :TERMAN01.TERCOD
    // FROM DUAL;
    // 
    // DECLARE
    //   COUNT_TER NUMBER(9);
    //   TER NUMBER(13);
    // 
    // BEGIN
    //  
    // 
    //     SELECT COUNT(*)
    //     INTO   COUNT_TER
    //     FROM   OPS$SEGUI.TER
    //     WHERE  TERCOD=:TERMAN01.TERCOD;
    //   
    // 
    //     IF COUNT_TER=1 THEN
    //        MESSAGE('TERCERO YA EXISTE "ACTUALICELO"');
    //        RAISE FORM_TRIGGER_FAILURE;
    //     ELSIF :TERMAN01.TERTID = 'NI' THEN
    //         IF TO_NUMBER(:TERMAN01.TERCOD) BETWEEN 600000000 AND 699999999 OR
    //            TO_NUMBER(:TERMAN01.TERCOD)  BETWEEN 800000000 AND 999999999 THEN
    //            NULL;
    //         ELSE
    //           MESSAGE('NIT NO VALIDO');
    //           RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //     ELSIF :TERMAN01.TERTID = 'CC' AND (
    //           TO_NUMBER(:TERMAN01.TERCOD) NOT BETWEEN 1 AND 9999999999 ) THEN
    //           MESSAGE('CEDULA NO VALIDA');
    //           RAISE FORM_TRIGGER_FAILURE;
    //     END IF;
    // 
    //     BEGIN
    //        TER:=TO_NUMBER(:TERMAN01.TERCOD);
    //        :TERMAN01.TERDCH := CALCULAR_DIGITO(:TERMAN01.TERTID,:TERMAN01.TERCOD);
    //     END;
    // 
    //     EXCEPTION 
    //        WHEN VALUE_ERROR THEN
    //            MESSAGE('EL CODIGO ASIGNADO NO ES NUMERICO');
    //            RAISE FORM_TRIGGER_FAILURE;
    // END;
    //#endregion
    async SEFCRETEJ_terman01_tercod_whenValidateItem() {
        console.log("Entering SEFCRETEJ_terman01_tercod_whenValidateItem");
        if ((this.TERMAN01.TERCOD != null)) {
            // SEFCRETEJ_PVALTER(this.TERMAN01.TERCOD);
        }
        let COUNT_TER: number = null;
        let TER: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCOD", this.TERMAN01.TERCOD);
        // call REST API
        const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_tercod_whenvalidateitem_query1", payload1);
        // get values from result
        COUNT_TER = result1[0].get("COUNT_TER");
        if (COUNT_TER == 1) {

        }
        else if (this.TERMAN01.TERTID == "NI") {
            if ((PLSQLBuiltins.to_number(this.TERMAN01.TERCOD) || PLSQLBuiltins.to_number(this.TERMAN01.TERCOD))) {
            }
            else {
                this.oracleFormsBuiltins.message("NIT NO VALIDO");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        else if ((this.TERMAN01.TERTID == "CC" && PLSQLBuiltins.to_number(this.TERMAN01.TERCOD))) {
            this.oracleFormsBuiltins.message("CEDULA NO VALIDA");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        TER = PLSQLBuiltins.to_number(this.TERMAN01.TERCOD);
        // this.TERMAN01.TERDCH = CALCULAR_DIGITO(this.TERMAN01.TERTID, this.TERMAN01.TERCOD);
        console.log("Exiting SEFCRETEJ_terman01_tercod_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SELECT REPLACE (:TERMAN01.TERCOD ,' ','')
    // INTO :TERMAN01.TERCOD
    // FROM DUAL; END;
    //#endregion
    async SEFCRETEJ_terman01_tercod_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_terman01_tercod_whenNewRecordInstance");
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCOD", this.TERMAN01.TERCOD);
        // call REST API
        const result1 = await Rest.post("/sefcretej_terman01/sefcretej_terman01_tercod_whennewrecordinstance_query1", payload1);
        // get values from result
        this.TERMAN01.TERCOD = result1[0].get("TERMAN01.TERCOD");
        console.log("Exiting SEFCRETEJ_terman01_tercod_whenNewRecordInstance");
    }

    //#region PLSQL
    // // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'POR MEDIO DE HERRRAMIENTA USTED PODRÁ HOMOLOGAR LAS DIRECCIONES EN EL FORMATO CORRECTO.'||CHR(10)||CHR(13)||
    //  'COMIENCE POR ESCOGER EL TIPO DE DIRECCIÓN BÁSICA O INDICACIÓN';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'PUEDE INGRESAR DIRECCIONES DE SOLO EL PANEL SUPERIOR O SOLO INFERIOR O COMBINADAS.'||CHR(10)||CHR(13)||
    //  'EN LA PARTE INFERIOR ENCONTRARÁ LOS BOTONES DE GUARDAR, BORRAR, VOLVER Y HOMOLOGAR.'; END;
    //#endregion
    async SEFCRETEJ_direccionesintro_preBlock() {
        console.log("Entering SEFCRETEJ_direccionesintro_preBlock");
        // // this.DIRECCIONESINTRO.DESCRIPCION = "POR MEDIO DE HERRRAMIENTA USTED PODRÁ HOMOLOGAR LAS DIRECCIONES EN EL FORMATO CORRECTO." + CHR(10) + CHR(13) + "COMIENCE POR ESCOGER EL TIPO DE DIRECCIÓN BÁSICA O INDICACIÓN";
        // // this.DIRECCIONESINTRO.EJEMPLO = "PUEDE INGRESAR DIRECCIONES DE SOLO EL PANEL SUPERIOR O SOLO INFERIOR O COMBINADAS." + CHR(10) + CHR(13) + "EN LA PARTE INFERIOR ENCONTRARÁ LOS BOTONES DE GUARDAR, BORRAR, VOLVER Y HOMOLOGAR.";
        console.log("Exiting SEFCRETEJ_direccionesintro_preBlock");
    }

    //#region PLSQL
    // BEGIN /*IF ERROR_TYPE= 'FRM' AND ERROR_CODE = 41026 THEN
    // NULL;
    // ELSIF  ERROR_TYPE= 'FRM' AND ERROR_CODE = 40508 THEN
    //  NULL;
    //  END IF;*/NULL; END;
    //#endregion
    async SEFCRETEJ_direccionesintro_onError() {
        console.log("Entering SEFCRETEJ_direccionesintro_onError");
        console.log("Exiting SEFCRETEJ_direccionesintro_onError");
    }

    async SEFCRETEJ_direccionesintro_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
    // // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo12_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo12_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
        // // this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo12_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO12'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo12_whenListChanged() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo12_whenListChanged");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO12");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo12_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO14'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo12_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo12_keyNextItem");
        this.oracleFormsBuiltins.go_item("CAMPO14");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo12_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO11, '0123456789', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo11_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo11_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO11.replace('0123456789', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo11_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA PLACA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo11_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo11_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA PLACA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo11_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo11_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo11_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo11_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
    // // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO12'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo11_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo11_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
        // // this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO12");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo11_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO10, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo10_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo10_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO10.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo10_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo10_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo10_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo10_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo10_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo10_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo10_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA PLACA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).';
    // GO_ITEM('CAMPO11'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo10_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo10_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA PLACA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO, GENERALMENTE INDICA LA DISTANCIA EN METROS DESDE LA INTERSECCIÓN ENTRE LA VÍA PRINCIPAL Y LA VÍA GENERADORA HASTA EL ACCESO AL PREDIO. CORRESPONDE CON EL SEGUNDO VALOR DE LA PLACA DOMICILIARIA O PREDIAL (NÚMERO QUE ESTA DESPUÉS DEL GUIÓN).";
        this.oracleFormsBuiltins.go_item("CAMPO11");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo10_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
    // // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo6_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo6_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
        // // this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo6_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO7'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo6_whenListChanged() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo6_whenListChanged");
        this.oracleFormsBuiltins.go_item("CAMPO7");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo6_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.';
    // GO_ITEM('CAMPO7'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo6_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo6_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.";
        this.oracleFormsBuiltins.go_item("CAMPO7");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo6_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO7, '0123456789', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    // NULL;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo7_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo7_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO7.replace('0123456789', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo7_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO DE LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo7_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo7_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO DE LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR NUMÉRICO CON QUE SE IDENTIFICA EL EJE VÍA, EN ESTE CASO LA VÍA GENERADORA.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo7_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo7_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo7_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo7_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS';
    // GO_ITEM('CAMPO8'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo7_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo7_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS";
        this.oracleFormsBuiltins.go_item("CAMPO8");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo7_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo8_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo8_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO8.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo8_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo8_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo8_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑAN LA VÍA GENERADORA.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo8_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo8_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo8_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo8_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'SUFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO9'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo8_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo8_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "SUFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO9");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo8_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'SUFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo9_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo9_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "SUFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "EL SUFIJO BIS ES ASIGNADO PARA DIFERENCIAR EN ESTE CASO LAS VÍAS GENERADORAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo9_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO10'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo9_whenListChanged() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo9_whenListChanged");
        this.oracleFormsBuiltins.go_item("CAMPO10");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo9_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.';
    // GO_ITEM('CAMPO10'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo9_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo9_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "VALOR ALFANUMÉRICO, EN ESTE CASO SIRVE PARA DIFERENCIAR LAS VÍAS QUE SE LE ASIGNADO EL SUFIJO BIS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O CON NÚMEROS CONSECUTIVOS O SEA COMBINACIÓN DE AMBOS.";
        this.oracleFormsBuiltins.go_item("CAMPO10");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo9_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO2, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo2_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO2.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo2_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS NÚMERICOS: 30, 68, 50, ETC.'||CHR(10)||CHR(13)||
    // 'OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo2_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo2_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS NÚMERICOS: 30, 68, 50, ETC." + CHR(10) + CHR(13) + "OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo2_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo2_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo2_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo2_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS';
    // GO_ITEM('CAMPO3'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo2_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo2_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS";
        this.oracleFormsBuiltins.go_item("CAMPO3");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo2_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO3, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo3_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo3_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO3.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo3_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.';
    // :DIRECCIONESINTRO.EJEMPLO := 'CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo3_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo3_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA LA NOMENCLATURA PRINCIPAL.";
        this.DIRECCIONESINTRO.EJEMPLO = "CAMPO ALFANUMÉRICO, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBAS";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo3_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo3_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo3_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo3_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'PREFIJO (BIS)';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO4'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo3_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo3_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "PREFIJO (BIS)";
        this.DIRECCIONESINTRO.EJEMPLO = "EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO4");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'PREFIJO (BIS)';
    // :DIRECCIONESINTRO.EJEMPLO := 'EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DEMAS CAMPOS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo4_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo4_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "PREFIJO (BIS)";
        this.DIRECCIONESINTRO.EJEMPLO = "EL PREFIJO BIS ES ASIGNADO PARA DIFERENCIAR VÍAS DE IGUAL DENOMINACIÓN. SE EMPLEA GENERALMENTE EN TRAMOS DE VÍA NO CONTINUOS.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo4_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CAMPO5'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo4_whenListChanged() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo4_whenListChanged");
        this.oracleFormsBuiltins.go_item("CAMPO5");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo4_whenListChanged");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.';
    // GO_ITEM('CAMPO5'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo4_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo4_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.";
        this.oracleFormsBuiltins.go_item("CAMPO5");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo4_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO5, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo5_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo5_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO5.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo5_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).';
    // :DIRECCIONESINTRO.EJEMPLO := 'ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo5_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo5_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "LETRA, LETRA-LETRA O LETRA-NÚMERO-LETRA QUE ACOMPAÑA EL PREFIJO (BIS).";
        this.DIRECCIONESINTRO.EJEMPLO = "ASIGNACIÓN QUE COMPLEMENTA AL PREFIJO BIS, SIRVE PARA DIFERENCIAR LAS VÍAS INTERNAS, GENERALMENTE SIGUEN UN ORDEN LÓGICO, YA SEA ALFABÉTICO O NUMÉRICO O SEA COMBINACIÓN DE AMBOS, PUEDE TOMAR UN VALOR ALFANUMÉRICO.";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo5_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN --CAMBIA FORMATO CAMPO EJEMPLO
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R255G0B0');
    //  --PERMITE VOLVER A NEGRO LOS COLORES DEL EJEMPLO
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo5_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo5_whenNewItemInstance");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo5_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'CUADRANTE (NORTE, SUR, ESTE, OESTE).';
    // // :DIRECCIONESINTRO.EJEMPLO := 'CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:'||CHR(10)||CHR(13)||
    // 'NORTE, SUR, ESTE, OESTE';
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R255G0B0');
    // GO_ITEM('CAMPO6'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo5_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo5_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "CUADRANTE (NORTE, SUR, ESTE, OESTE).";
        // // this.DIRECCIONESINTRO.EJEMPLO = "CUADRANTE GEOGRÁFICO EN DONDE ESTÁ UBICADO EL EJE VIAL, INDICA EL CUADRANTE AL QUE PERTENECE EN ESTE CASO LA VÍA PRINCIPAL, TOMA UNO DE LOS SIGUIENTES VALORES:" + CHR(10) + CHR(13) + "NORTE, SUR, ESTE, OESTE";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.go_item("CAMPO6");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo5_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC.'||CHR(10)||CHR(13)||
    // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES';
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R255G0B0');
    // 
    // --BORRA FORMATO DE TODOS LOS DEMAS
    // 
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    // SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo1_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo1_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC." + CHR(10) + CHR(13) + "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R255G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo1_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC.'||CHR(10)||CHR(13)||
    //  'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES';
    //  RETURN_LOV := SHOW_LOV('LOV_DIR1');
    //  GO_ITEM('CAMPO2');
    //  --MJE CAMPO 2
    //  :DIRECCIONESINTRO.DESCRIPCION := 'NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLOS NÚMERICOS: 30, 68, 50, ETC.'||CHR(10)||CHR(13)||
    //  'OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.';
    //   
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_bTipo_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_bTipo_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO DE VÍA: INGRESE EL TIPO DE VÍA CORRESPONDIENTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS: CALLE, CARRERA, AVENIDA, ETC." + CHR(10) + CHR(13) + "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_DIR1");
        this.oracleFormsBuiltins.go_item("CAMPO2");
        this.DIRECCIONESINTRO.DESCRIPCION = "NÚMERO NOMBRE COMÚN DE LA VÍA PRINCIPAL: VALOR NUMÉRICO O NOMBRE COMÚN QUE IDENTIFICA LA VÍA.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLOS NÚMERICOS: 30, 68, 50, ETC." + CHR(10) + CHR(13) + "OTRAS OPCIONES: POR LO GENERAL LAS AVENIDAS O VÍAS PRINCIPALES TIENEN ASOCIADO UN NOMBRE COMÚN COMO POR EJEMPLO: ¿NORTE QUITO SUR¿, ¿PUENTE PALMA¿, ¿MEDELLIN¿, ¿1 DE MAYO¿, ETC.";
        console.log("Exiting SEFCRETEJ_direccionesintro_bTipo_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA NUMBER;
    //    RETURN_LOV BOOLEAN;
    //    V_ALFANUMERICODES VARCHAR2(100); --DESCRIPCION COMPLETA
    //    V_ALFANUMERICO VARCHAR2(100); --DESCRIPCION SENCILLA
    //    V_NUMERICO VARCHAR2(50); -- SOLO NUMEROS
    //    A NUMBER;        --A, B =  CONTADORES ESPECIFICOS PARA VERIFICAR CARACTERES ESPECIALES EN INDICACIONES
    //   B NUMBER;
    //   INDIC BOOLEAN := TRUE;
    //    
    // BEGIN 
    //  V_ALFANUMERICODES := '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ';
    //  V_ALFANUMERICO := '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ';
    //  V_NUMERICO := '0123456789';
    //  :HOMOLOGAOK := ;
    //  
    //  IF :RADIO_GROUP = '02' THEN
    //   :CAD_DIRECCION:= 'IND';
    //  ELSE
    //   :CAD_DIRECCION:= NULL;   
    //  END IF;
    //  
    //  IF :RADIO_GROUP = '01' THEN 
    //   IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO2, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO2');
    //   
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO3, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO3');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO5, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO5');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO7, V_NUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO7');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO8, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO8');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO10, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER ALFANUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO10');
    // 
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO11, V_NUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO DEBE SER NUMÉRICO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO11');
    //   
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO15, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO15');
    //  
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO17, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO17');
    //  
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO19, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO19');
    //  
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO21, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO21');
    //    
    //   ELSIF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO24, V_ALFANUMERICODES, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('MENSAJE','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //    GO_ITEM('CAMPO24');
    //   
    //   ELSIF :CAMPO14 IS NULL AND :CAMPO15 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE BARRIO',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_BARRIO');
    //    GO_ITEM('CAMPO15');
    //    
    //   ELSIF :CAMPO16 IS NULL AND :CAMPO17 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE URBANIZACIÓN',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_URB');
    //    GO_ITEM('CAMPO17');
    //   
    //   ELSIF :CAMPO18 IS NULL AND :CAMPO19 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE MANZANA',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_MANZ');
    //    GO_ITEM('CAMPO19');
    //    
    //   ELSIF :CAMPO20 IS NULL AND :CAMPO21 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE PREDIO',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_PREDIO');
    //    GO_ITEM('CAMPO21');
    //   
    //   ELSIF :CAMPO22 IS NULL AND :CAMPO24 IS NOT NULL THEN 
    //    LIB$ALERTA('MENSAJE','INGRESE EL TIPO DE COMPLEMENTO',NULL,NULL,NULL, T_RESPUESTA); 
    //    RETURN_LOV := SHOW_LOV('LOV_COMPL');
    //    GO_ITEM('CAMPO24');
    //   
    //   ELSIF :CAMPO1 IS NULL AND :CAMPO2 IS NULL AND :CAMPO3 IS NULL AND :CAMPO4 IS NULL AND
    //         :CAMPO5 IS NULL AND :CAMPO6 IS NULL AND :CAMPO7 IS NULL AND :CAMPO8 IS NULL AND
    //         :CAMPO9 IS NULL AND :CAMPO10 IS NULL AND :CAMPO11 IS NULL AND :CAMPO12 IS NULL AND
    //       :CAMPO14 IS NULL AND :CAMPO15 IS NULL AND :CAMPO16 IS NULL AND :CAMPO17 IS NULL AND 
    //        :CAMPO18 IS NULL AND :CAMPO19 IS NULL AND :CAMPO20 IS NULL AND :CAMPO21 IS NULL AND
    //        :CAMPO22 IS NULL AND :CAMPO24 IS NULL THEN
    //       LIB$ALERTA('MENSAJE','TODOS LOS CAMPOS ESTAN VACIOS',NULL,NULL,NULL, T_RESPUESTA); 
    // 
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO1 IS  NULL THEN
    //        LIB$ALERTA('MENSAJE','EL TIPO DE VÍA ES OBLIGATORIO',NULL,NULL,NULL, T_RESPUESTA);
    //        RETURN_LOV := SHOW_LOV('LOV_DIR1');
    //        GO_ITEM('CAMPO2');
    //     
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO2 IS  NULL THEN
    //        LIB$ALERTA('MENSAJE','INGRESE EL NOMBRE DE LA VÍA PRINCIPAL',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CAMPO2');
    //     
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO7 IS  NULL THEN
    //        LIB$ALERTA('MENSAJE','INGRESE EL NÚMERO DE LA VÍA GENERADORA',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CAMPO7');
    //     
    //   ELSIF (:CAMPO1 IS NOT NULL OR :CAMPO2 IS NOT NULL OR :CAMPO3 IS NOT NULL OR :CAMPO4 IS NOT NULL OR
    //         :CAMPO5 IS NOT NULL OR :CAMPO6 IS NOT NULL OR :CAMPO7 IS NOT NULL OR :CAMPO8 IS NOT NULL OR
    //         :CAMPO9 IS NOT NULL OR :CAMPO10 IS NOT NULL OR :CAMPO11 IS NOT NULL OR :CAMPO12 IS NOT NULL) AND :CAMPO11 IS NULL THEN
    //        LIB$ALERTA('MENSAJE','INGRESE EL NUMERO DE LA PLACA',NULL,NULL,NULL, T_RESPUESTA);
    //        GO_ITEM('CAMPO11'); 
    //   ELSE
    //    :CAD_DIRECCION:= 
    //    RTRIM(LTRIM(:CAMPO1))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO2))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO3))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO4))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO5))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO6))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO7))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO8))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO9))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO10))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO11))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO12))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO14))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO15))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO16))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO17))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO18))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO19))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO20))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO21))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO22))||' '||
    //    LTRIM(
    //    RTRIM(LTRIM(:CAMPO24))
    //    ))))))))))))))))))))
    //    );
    //   
    //    IF PLSQLBuiltins.string_length(:CAD_DIRECCION) < 5 THEN 
    //     LIB$ALERTA('MENSAJE','LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES',NULL,NULL,NULL, T_RESPUESTA); 
    //     :CAD_DIRECCION:= NULL;
    //     
    //     ELSIF PLSQLBuiltins.string_length(:CAD_DIRECCION) > 100 THEN 
    //     LIB$ALERTA('MENSAJE','LA DIRECCION EXCEDE EL MAXIMO DE CARACTERES QUE ES 100',NULL,NULL,NULL, T_RESPUESTA); 
    //     :CAD_DIRECCION:= NULL;
    //    ELSE
    //     :HOMOLOGAOK := ;
    //     LIB$ALERTA('MENSAJE','PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.',NULL,NULL,NULL, T_RESPUESTA); 
    //    END IF;
    //   
    //   END IF;
    //   
    //  ELSIF :RADIO_GROUP = '02' THEN
    //   IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO23, V_ALFANUMERICO, ' '))) IS NOT NULL THEN
    //    LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA);  
    //   ELSE
    //    :CAD_DIRECCION:= :CAD_DIRECCION||' '||RTRIM(LTRIM(:CAMPO23));
    //    IF PLSQLBuiltins.string_length(:CAD_DIRECCION) < 5 THEN 
    //     LIB$ALERTA('MENSAJE','LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES',NULL,NULL,NULL, T_RESPUESTA); 
    //     :CAD_DIRECCION:= 'IND';
    //    ELSE
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := UPPER(:CAD_DIRECCION);
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' NRO ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BIS ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'NUMERO','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'NÚMERO','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' NO ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' AP ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' APART ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' APT ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'APARTAMENTO','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'APTO','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' AV ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' AVE ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'AVENIDA','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'AVDA','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BRR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'BARRIO','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BQ ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'BLOQUE','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BG ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' BOD ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'BODEGA','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CC ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' C C ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CIAL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CCIAL','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CENTRO COMERCIAL','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CALLE ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CALL ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CLLE','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CLL','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' KR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CAR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' CRA ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' KRA ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'CARRERA','  ');     
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' DG ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' DIAG ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'DIAGONAL','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' ED ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'EDIFICIO','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' IN ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' INTERIOR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' INT ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' LC ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' LOCAL ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' MZ ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' MANZ ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'MANZANA','  ');  
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OF ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OFC ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OFI ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' OFIC ','  ');    
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'OFICINA','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' PI ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' PISO ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TO ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TORRE ','  ');   
    //     ----------------------------------------------------
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TV ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TRANSV ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TRANS ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,' TR ','  ');   
    //     :CAD_DIRECCION := REPLACE(:CAD_DIRECCION,'TRANSVERSAL','  ');   
    //     ----------------------------------------------------
    //        
    //     
    //       
    //       --BUSCA ERRORES POR MEDIO DE 2 ESPACIOS CONSECUTIVOS
    //        
    //     --IF INSTR(:CAD_DIRECCION,' ') <> 0 THEN
    //         B := INSTR(:CAD_DIRECCION,' ') + ;
    //         A := ;
    //          --MESSAGE('PLSQLBuiltins.string_length(:CAD_DIRECCION) = '||PLSQLBuiltins.string_length(:CAD_DIRECCION));
    //         -- MESSAGE('PLSQLBuiltins.string_length(:CAD_DIRECCION) = '||PLSQLBuiltins.string_length(:CAD_DIRECCION));
    //         FOR I IN B..PLSQLBuiltins.string_length(:CAD_DIRECCION) LOOP
    //           --MESSAGE('A, B = '||A||' '||B);
    //          --MESSAGE('A, B = '||A||' '||B);
    //          IF A < 2 THEN
    //             --MESSAGE('SUBSTR(:CAD_DIRECCION,B,1)  = '||SUBSTR(:CAD_DIRECCION,B,1));
    //              --MESSAGE('SUBSTR(:CAD_DIRECCION,B,1)  = '||SUBSTR(:CAD_DIRECCION,B,1));
    //            IF SUBSTR(:CAD_DIRECCION,B,1) = ' ' THEN 
    //            A := A + ;
    //            ELSE
    //            A := ;
    //            END IF;
    //           IF A = 2 THEN
    //             INDIC := FALSE;         
    //           END IF;
    //          B := B + ;
    //          END IF;         
    //         END LOOP;
    //            
    //     --END IF;
    //     ----------------------------------------------------
    //     IF INDIC = TRUE THEN
    //      :HOMOLOGAOK := ;
    //      LIB$ALERTA('MENSAJE','PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.',NULL,NULL,NULL, T_RESPUESTA); 
    //     ELSE
    //       LIB$ALERTA('MENSAJE','HAY ERRORES EN LA CAPTURA DE LA INDICACIÓN',NULL,NULL,NULL, T_RESPUESTA);
    //       LIB$ALERTA('MENSAJE','RECUERDE QUE DIRECCIONES CON CALLE, CARRERA, DIAGONAL, TRANSVERSAL, ETC, SE DEBEN CAPTURAR POR MEDIO DE LA OPCIÓN BÁSICA.',NULL,NULL,NULL, T_RESPUESTA);--STOP  
    //       :CAD_DIRECCION:= 'IND';
    //     END IF;
    //    END IF;
    //   END IF; 
    //  
    //  ELSE 
    //    LIB$ALERTA('MENSAJE','SELECCIONE UNA OPCIÓN ENTRE DIRECCIÓN BÁSICA O INDICACIÓN',NULL,NULL,NULL, T_RESPUESTA); 
    //    
    //  END IF;
    //  
    //  --
    //  :CAD_DIRECCION:= LTRIM(RTRIM(UPPER(:CAD_DIRECCION)));
    // 
    //  
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_homologar_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_homologar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let RETURN_LOV: boolean = null;
        let V_ALFANUMERICODES: string = null;
        let V_ALFANUMERICO: string = null;
        let V_NUMERICO: string = null;
        let A: number = null;
        let B: number = null;
        let INDIC: boolean = true;
        V_ALFANUMERICODES = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ";
        V_ALFANUMERICO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑABCDEFGHIJKLMNOPQRSTUVWXYZÑ";
        V_NUMERICO = "0123456789";
        this.DIRECCIONESINTRO.HOMOLOGAOK = null;
        // if (RADIO_GROUP == "02") {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        // }
        // else {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        // }
        // if (RADIO_GROUP == "01") {
        //     if ((PLSQLBuiltins.string_length(LTRIM(CAMPO2.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO2");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO3.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO3");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO5.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO5");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO7.replace(V_NUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO7");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO8.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO8");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO10.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER ALFANUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO10");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO11.replace(V_NUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO DEBE SER NUMÉRICO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO11");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO15.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO15");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO17.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO17");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO19.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO19");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO21.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO21");
        //     }
        //     else if ((PLSQLBuiltins.string_length(LTRIM(CAMPO24.replace(V_ALFANUMERICODES, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO24");
        //     }
        //     else if (((CAMPO14 == null) && (CAMPO15 != null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE BARRIO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_BARRIO");
        //         this.oracleFormsBuiltins.go_item("CAMPO15");
        //     }
        //     else if (((CAMPO16 == null) && (CAMPO17 != null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE URBANIZACIÓN", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_URB");
        //         this.oracleFormsBuiltins.go_item("CAMPO17");
        //     }
        //     else if (((CAMPO18 == null) && (CAMPO19 != null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE MANZANA", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_MANZ");
        //         this.oracleFormsBuiltins.go_item("CAMPO19");
        //     }
        //     else if (((CAMPO20 == null) && (CAMPO21 != null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE PREDIO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_PREDIO");
        //         this.oracleFormsBuiltins.go_item("CAMPO21");
        //     }
        //     else if (((CAMPO22 == null) && (CAMPO24 != null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL TIPO DE COMPLEMENTO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_COMPL");
        //         this.oracleFormsBuiltins.go_item("CAMPO24");
        //     }
        //     else if (((((((((((((((((((((((CAMPO1 == null) && (CAMPO2 == null)) && (CAMPO3 == null)) && (CAMPO4 == null)) && (CAMPO5 == null)) && (CAMPO6 == null)) && (CAMPO7 == null)) && (CAMPO8 == null)) && (CAMPO9 == null)) && (CAMPO10 == null)) && (CAMPO11 == null)) && (CAMPO12 == null)) && (CAMPO14 == null)) && (CAMPO15 == null)) && (CAMPO16 == null)) && (CAMPO17 == null)) && (CAMPO18 == null)) && (CAMPO19 == null)) && (CAMPO20 == null)) && (CAMPO21 == null)) && (CAMPO22 == null)) && (CAMPO24 == null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "TODOS LOS CAMPOS ESTAN VACIOS", null, null, null, T_RESPUESTA);
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO1 == null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL TIPO DE VÍA ES OBLIGATORIO", null, null, null, T_RESPUESTA);
        //         RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_DIR1");
        //         this.oracleFormsBuiltins.go_item("CAMPO2");
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO2 == null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL NOMBRE DE LA VÍA PRINCIPAL", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO2");
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO7 == null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL NÚMERO DE LA VÍA GENERADORA", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO7");
        //     }
        //     else if ((((((((((((((CAMPO1 != null) || (CAMPO2 != null)) || (CAMPO3 != null)) || (CAMPO4 != null)) || (CAMPO5 != null)) || (CAMPO6 != null)) || (CAMPO7 != null)) || (CAMPO8 != null)) || (CAMPO9 != null)) || (CAMPO10 != null)) || (CAMPO11 != null)) || (CAMPO12 != null)) && (CAMPO11 == null))) {
        //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE EL NUMERO DE LA PLACA", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.go_item("CAMPO11");
        //     }
        //     else {
        //         this.DIRECCIONESINTRO.CAD_DIRECCION = RTRIM(LTRIM(CAMPO1)) + " " + LTRIM(RTRIM(LTRIM(CAMPO2)) + " " + LTRIM(RTRIM(LTRIM(CAMPO3)) + " " + LTRIM(RTRIM(LTRIM(CAMPO4)) + " " + LTRIM(RTRIM(LTRIM(CAMPO5)) + " " + LTRIM(RTRIM(LTRIM(CAMPO6)) + " " + LTRIM(RTRIM(LTRIM(CAMPO7)) + " " + LTRIM(RTRIM(LTRIM(CAMPO8)) + " " + LTRIM(RTRIM(LTRIM(CAMPO9)) + " " + LTRIM(RTRIM(LTRIM(CAMPO10)) + " " + LTRIM(RTRIM(LTRIM(CAMPO11)) + " " + LTRIM(RTRIM(LTRIM(CAMPO12)) + " " + LTRIM(RTRIM(LTRIM(CAMPO14)) + " " + LTRIM(RTRIM(LTRIM(CAMPO15)) + " " + LTRIM(RTRIM(LTRIM(CAMPO16)) + " " + LTRIM(RTRIM(LTRIM(CAMPO17)) + " " + LTRIM(RTRIM(LTRIM(CAMPO18)) + " " + LTRIM(RTRIM(LTRIM(CAMPO19)) + " " + LTRIM(RTRIM(LTRIM(CAMPO20)) + " " + LTRIM(RTRIM(LTRIM(CAMPO21)) + " " + LTRIM(RTRIM(LTRIM(CAMPO22)) + " " + LTRIM(RTRIM(LTRIM(CAMPO24)))))))))))))))))))))));
        //         if (PLSQLBuiltins.string_length(CAD_DIRECCION) < 5) {
        //             // SEFCRETEJ_LIB$ALERTA("MENSAJE", "LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES", null, null, null, T_RESPUESTA);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        //         }
        //         else if (PLSQLBuiltins.string_length(CAD_DIRECCION) > 100) {
        //             // SEFCRETEJ_LIB$ALERTA("MENSAJE", "LA DIRECCION EXCEDE EL MAXIMO DE CARACTERES QUE ES 100", null, null, null, T_RESPUESTA);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        //         }
        //         else {
        //             this.DIRECCIONESINTRO.HOMOLOGAOK = ;
        //             // SEFCRETEJ_LIB$ALERTA("MENSAJE", "PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.", null, null, null, T_RESPUESTA);
        //         }
        //     }
        // }
        // else if (RADIO_GROUP == "02") {
        //     if ((PLSQLBuiltins.string_length(LTRIM(CAMPO23.replace(V_ALFANUMERICO, ' '))) != null)) {
        //         // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        //     }
        //     else {
        //         this.DIRECCIONESINTRO.CAD_DIRECCION = this.DIRECCIONESINTRO.CAD_DIRECCION || ' ' || RTRIM(LTRIM(CAMPO23));
        //         if (PLSQLBuiltins.string_length(CAD_DIRECCION) < 5) {
        //             // SEFCRETEJ_LIB$ALERTA("MENSAJE", "LA DIRECCION DEBE CONTENER AL MENOS 5 CARACTERES", null, null, null, T_RESPUESTA);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        //         }
        //         else {
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = PLSQLBuiltins.upper(CAD_DIRECCION);
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " NRO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BIS ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "NUMERO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "NÚMERO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " NO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " AP ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " APART ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " APT ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "APARTAMENTO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "APTO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " AV ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " AVE ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "AVENIDA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "AVDA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BRR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "BARRIO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BQ ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "BLOQUE", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BG ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " BOD ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "BODEGA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " C C ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CIAL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CCIAL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CENTRO COMERCIAL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CALLE ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CALL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CLLE", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CLL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " KR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CAR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " CRA ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " KRA ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "CARRERA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " DG ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " DIAG ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "DIAGONAL", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " ED ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "EDIFICIO", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " IN ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " INTERIOR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " INT ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " LC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " LOCAL ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " MZ ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " MANZ ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "MANZANA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OF ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OFC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OFI ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " OFIC ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "OFICINA", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " PI ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " PISO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TO ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TORRE ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TV ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TRANSV ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TRANS ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, " TR ", "  ");
        //             this.DIRECCIONESINTRO.CAD_DIRECCION = REPLACE(CAD_DIRECCION, "TRANSVERSAL", "  ");
        //             B = INSTR(CAD_DIRECCION, " ") + ;
        //             A = ;
        //             if (INDIC == TRUE) {
        //                 this.DIRECCIONESINTRO.HOMOLOGAOK = ;
        //                 // SEFCRETEJ_LIB$ALERTA("MENSAJE", "PARA FINALIZAR LA HOMOLOGACIÓN PRESIONE EL BOTON GUARDAR, UBICADO EN LA PARTE INFERIOR IZQUIERDA.", null, null, null, T_RESPUESTA);
        //             }
        //             else {
        //                 // SEFCRETEJ_LIB$ALERTA("MENSAJE", "HAY ERRORES EN LA CAPTURA DE LA INDICACIÓN", null, null, null, T_RESPUESTA);
        //                 // SEFCRETEJ_LIB$ALERTA("MENSAJE", "RECUERDE QUE DIRECCIONES CON CALLE, CARRERA, DIAGONAL, TRANSVERSAL, ETC, SE DEBEN CAPTURAR POR MEDIO DE LA OPCIÓN BÁSICA.", null, null, null, T_RESPUESTA);
        //                 this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        //             }
        //         }
        //     }
        // }
        // else {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "SELECCIONE UNA OPCIÓN ENTRE DIRECCIÓN BÁSICA O INDICACIÓN", null, null, null, T_RESPUESTA);
        // }
        // this.DIRECCIONESINTRO.CAD_DIRECCION = LTRIM(RTRIM(PLSQLBuiltins.upper(CAD_DIRECCION)));
        console.log("Exiting SEFCRETEJ_direccionesintro_homologar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO19, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo19_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo19_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO19.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo19_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    // :DIRECCIONESINTRO.EJEMPLO := 
    // // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    // 'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo19_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo19_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo19_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    // GO_ITEM('CAMPO21'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo19_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo19_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        this.oracleFormsBuiltins.go_item("CAMPO21");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo19_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    // :DIRECCIONESINTRO.EJEMPLO := 
    // // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    // 'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo18_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo18_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo18_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO17, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo17_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo17_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO17.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo17_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo17_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo17_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo17_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    // :DIRECCIONESINTRO.EJEMPLO := 
    // // 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    // 'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    // GO_ITEM('CAMPO19'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo17_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo17_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        this.oracleFormsBuiltins.go_item("CAMPO19");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo17_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo16_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo16_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo16_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO15, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo15_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo15_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO15.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo15_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES.'||CHR(10)||CHR(13)||
    // 'POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo15_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo15_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES." + CHR(10) + CHR(13) + "POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo15_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('HOMOLOGAR',VISIBLE,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('HOMOLOGAR',ENABLED,"PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('SIGUIENTE',VISIBLE,"PROPERTY_FALSE");
    // SET_ITEM_PROPERTY('SIGUIENTE',ENABLED,"PROPERTY_FALSE"); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo15_preTextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo15_preTextItem");
        this.oracleFormsBuiltins.set_item_property("HOMOLOGAR", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("HOMOLOGAR", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("SIGUIENTE", "VISIBLE", "PROPERTY_FALSE");
        this.oracleFormsBuiltins.set_item_property("SIGUIENTE", "ENABLED", "PROPERTY_FALSE");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo15_preTextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    // GO_ITEM('CAMPO17'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo15_keyNextItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo15_keyNextItem");
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
        // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        this.oracleFormsBuiltins.go_item("CAMPO17");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo15_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES.'||CHR(10)||CHR(13)||
    // 'POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo14_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo14_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.";
        // this.DIRECCIONESINTRO.EJEMPLO = "SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES." + CHR(10) + CHR(13) + "POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo14_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO23, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo23_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo23_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO23.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo23_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'INGRESE LA DIRECCION POR INDICACIÓN CORRESPONDIENTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLO = IND KILOMETRO 15 VIA EL CERRITO.'||CHR(10)||CHR(13)||
    // 'EL SISTEMA ANTEPONE EL PREFIJO "IND" QUE SIGNIFICA INDICACIÓN'; END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo23_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo23_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "INGRESE LA DIRECCION POR INDICACIÓN CORRESPONDIENTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLO = IND KILOMETRO 15 VIA EL CERRITO." + CHR(10) + CHR(13) + "EL SISTEMA ANTEPONE EL PREFIJO "IND" QUE SIGNIFICA INDICACIÓN";
        console.log("Exiting SEFCRETEJ_direccionesintro_campo23_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    //  'EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC';
    //  RETURN_LOV := SHOW_LOV('LOV_URB');
    //  GO_ITEM('CAMPO17');
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_bCplmto16_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_bCplmto16_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "URBANIZACIÓN: INGRESE EL TIPO DE URBANIZACION CORRESPONDIENTE.NÚCLEO RESIDENCIAL EN UN TERRENO DELIMITADO ARTIFICIALMENTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: URBANIZACION, CONJUNTO RES., TORRE, ZONA, ETC";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_URB");
        this.oracleFormsBuiltins.go_item("CAMPO17");
        console.log("Exiting SEFCRETEJ_direccionesintro_bCplmto16_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo22_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo22_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo22_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF :RADIO_GROUP = '02' THEN
    //  :DIRECCIONESINTRO.CAD_DIRECCION:= 'IND';
    // ELSE
    //  :DIRECCIONESINTRO.CAD_DIRECCION:= NULL;   
    // END IF;
    // 
    //  :DIRECCIONESINTRO.CAMPO1 := NULL;
    //  :DIRECCIONESINTRO.CAMPO2 := NULL;
    //  :DIRECCIONESINTRO.CAMPO3 := NULL;
    //  :DIRECCIONESINTRO.CAMPO4 := NULL;
    //  :DIRECCIONESINTRO.CAMPO5 := NULL;
    //  :DIRECCIONESINTRO.CAMPO6 := NULL;
    //  :DIRECCIONESINTRO.CAMPO7 := NULL;
    //  :DIRECCIONESINTRO.CAMPO8 := NULL;
    //  :DIRECCIONESINTRO.CAMPO9 := NULL;
    //  :DIRECCIONESINTRO.CAMPO10 := NULL;
    //  :DIRECCIONESINTRO.CAMPO11 := NULL;
    //  :DIRECCIONESINTRO.CAMPO12 := NULL;
    //  :DIRECCIONESINTRO.CAMPO14 := NULL;
    //  :DIRECCIONESINTRO.CAMPO15 := NULL;
    //  :DIRECCIONESINTRO.CAMPO16 := NULL;
    //  :DIRECCIONESINTRO.CAMPO17 := NULL;
    //  :DIRECCIONESINTRO.CAMPO18 := NULL;
    //  :DIRECCIONESINTRO.CAMPO19 := NULL;
    //  :DIRECCIONESINTRO.CAMPO20 := NULL;
    //  :DIRECCIONESINTRO.CAMPO21 := NULL;
    //  :DIRECCIONESINTRO.CAMPO23 := NULL;
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_borrar_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_borrar_whenButtonPressed");
        // if (RADIO_GROUP == "02") {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        // }
        // else {
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        // }
        this.DIRECCIONESINTRO.CAMPO1 = null;
        this.DIRECCIONESINTRO.CAMPO2 = null;
        this.DIRECCIONESINTRO.CAMPO3 = null;
        this.DIRECCIONESINTRO.CAMPO4 = null;
        this.DIRECCIONESINTRO.CAMPO5 = null;
        this.DIRECCIONESINTRO.CAMPO6 = null;
        this.DIRECCIONESINTRO.CAMPO7 = null;
        this.DIRECCIONESINTRO.CAMPO8 = null;
        this.DIRECCIONESINTRO.CAMPO9 = null;
        this.DIRECCIONESINTRO.CAMPO10 = null;
        this.DIRECCIONESINTRO.CAMPO11 = null;
        this.DIRECCIONESINTRO.CAMPO12 = null;
        this.DIRECCIONESINTRO.CAMPO14 = null;
        this.DIRECCIONESINTRO.CAMPO15 = null;
        this.DIRECCIONESINTRO.CAMPO16 = null;
        this.DIRECCIONESINTRO.CAMPO17 = null;
        this.DIRECCIONESINTRO.CAMPO18 = null;
        this.DIRECCIONESINTRO.CAMPO19 = null;
        this.DIRECCIONESINTRO.CAMPO20 = null;
        this.DIRECCIONESINTRO.CAMPO21 = null;
        this.DIRECCIONESINTRO.CAMPO23 = null;
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_borrar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO21, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo21_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo21_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO21.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo21_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo21_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo21_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
        // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo21_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES.'||CHR(10)||CHR(13)||
    //  'POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)';
    //  RETURN_LOV := SHOW_LOV('LOV_BARRIO');
    //  GO_ITEM('CAMPO15');
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_bCplmto14_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_bCplmto14_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "BARRIO: INGRESE EL TIPO DE BARRIO CORRESPONDIENTE. NOMBRE QUE IDENTIFICA EL BARRIO CIUDADELA O SUPERMANZANA.";
        // this.DIRECCIONESINTRO.EJEMPLO = "SE RECOMIENDA EL NOMBRE ASIGNADO POR LA AUTORIDAD COMPETENTE. EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES." + CHR(10) + CHR(13) + "POSIBLES VALORES: (BARRIO, CIUDADELA Ó SUPERMANZANA)";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_BARRIO");
        this.oracleFormsBuiltins.go_item("CAMPO15");
        console.log("Exiting SEFCRETEJ_direccionesintro_bCplmto14_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo20_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo20_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
        // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo20_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.';
    //  :DIRECCIONESINTRO.EJEMPLO := 
    // //  'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)|| 
    //  'OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ';
    //  RETURN_LOV := SHOW_LOV('LOV_MANZ');
    //  GO_ITEM('CAMPO19');
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_bCplmto18_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_bCplmto18_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "MANZANA: INGRESE EL TIPO DE MANZANA CORRESPONDIENTE. ESPACIO GEOGRÁFICO DONDE SE UBICA UN CONJUNTO DE PREDIOS URBANOS EDIFICADOS O SIN EDIFICAR DELIMITADO GENERALMENTE POR VÍAS PÚBLICAS.";
        // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "OPCIONES: MANZANA, INTERIOR, EDIFICIO Y MODULO. ";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_MANZ");
        this.oracleFormsBuiltins.go_item("CAMPO19");
        console.log("Exiting SEFCRETEJ_direccionesintro_bCplmto18_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :HOMOLOGAOK = 1 THEN
    //   IF  :GLOBAL.DIR1= 'DIR1' AND
    //    FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //     :ENTMAN02.ENTDIR:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('ENTMAN02.ENTTEL');
    //    
    //    ELSIF  :GLOBAL.DIR1= 'DIR2' AND
    //    FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :ENTMAN02.ENTDIR1:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('ENTMAN02.ENTTEL1');
    //     
    //     ELSIF  :GLOBAL.DIR1= 'DIR' AND
    //      FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :TERMAN01.TERDIR:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('TERMAN01.TERTEL');
    //      
    //      
    //     ELSIF  :GLOBAL.DIR1= 'DIRF1' AND
    //    FRM$ALERTA_SINO('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :FAMMAN01.FAMD1:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('FAMMAN01.FAMD2');
    //    
    //   ELSIF  :GLOBAL.DIR1= 'DIRF2' AND
    //    FRM$ALERTA_SINO('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :FAMMAN01.FAMD2:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('FAMMAN01.FAMD3');
    //     
    //   ELSIF  :GLOBAL.DIR1= 'DIRF3' AND
    //    FRM$ALERTA_SINO('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :FAMMAN01.FAMD3:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('FAMMAN01.FAMD4');
    //    
    //   ELSIF  :GLOBAL.DIR1= 'DIRF6' AND
    //    FRM$ALERTA_SINO('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :FAMMAN01.FAMD6:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('FAMMAN01.FAMR1');
    //    
    //   ELSIF  :GLOBAL.DIR1= 'DIRR2' AND
    //    FRM$ALERTA_SINO('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //      :FAMMAN01.FAMR2:=:DIRECCIONESINTRO.CAD_DIRECCION;
    //      :DIRECCIONES.CADENA:=NULL;
    //      CLEAR_BLOCK;
    //      HIDE_VIEW('DIRECCIONESINTRO'); 
    //    HIDE_VIEW('DIR_01');
    //    HIDE_VIEW('DIR_02');
    //    HIDE_VIEW('DIR_03');
    //    GO_ITEM('FAMMAN01.FAMF1');
    //    
    //     END IF; 
    //  ELSE 
    //    LIB$ALERTA('MENSAJE','POR FAVOR HOMOLOGUE LA DIRECCIÓN PRIMERO',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    // END;       
    //  
    //#endregion
    async SEFCRETEJ_direccionesintro_grabar_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_grabar_whenButtonPressed");
        let T_RESPUESTA: number = null;
        // if (HOMOLOGAOK == 1) {
        //     if ((GLOBAL.DIR1 == "DIR1" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.ENTMAN02.ENTDIR = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIR2" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.ENTMAN02.ENTDIR1 = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL1");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIR" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.TERMAN01.TERDIR = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("TERMAN01.TERTEL");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIRF1" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.FAMMAN01.FAMD1 = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD2");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIRF2" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.FAMMAN01.FAMD2 = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD3");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIRF3" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.FAMMAN01.FAMD3 = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD4");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIRF6" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.FAMMAN01.FAMD6 = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMR1");
        //     }
        //     else if ((GLOBAL.DIR1 == "DIRR2" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //         this.FAMMAN01.FAMR2 = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //         this.DIRECCIONES.CADENA = null;
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMF1");
        //     }
        // }
        // else {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR HOMOLOGUE LA DIRECCIÓN PRIMERO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_grabar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    //  IF PLSQLBuiltins.string_length(LTRIM(TRANSLATE(:CAMPO24, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) IS NOT NULL THEN
    //   LIB$ALERTA('STOP','SE ESTA USANDO UN CARACTER NO PERMITIDO',NULL,NULL,NULL, T_RESPUESTA); 
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo24_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo24_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((PLSQLBuiltins.string_length(LTRIM(CAMPO24.replace('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÑÄËÏÖÜÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÄËÏÖÜÑ.-¿''´() ', ' '))) != null)) {
        //     // SEFCRETEJ_LIB$ALERTA("STOP", "SE ESTA USANDO UN CARACTER NO PERMITIDO", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_campo24_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :DIRECCIONESINTRO.DESCRIPCION := 'COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.';
    // // :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    // 'EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ';
    // 
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0'); END;
    //#endregion
    async SEFCRETEJ_direccionesintro_campo24_whenMouseClick() {
        console.log("Entering SEFCRETEJ_direccionesintro_campo24_whenMouseClick");
        this.DIRECCIONESINTRO.DESCRIPCION = "COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.";
        // // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ";
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        console.log("Exiting SEFCRETEJ_direccionesintro_campo24_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    //  'EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ';
    //  RETURN_LOV := SHOW_LOV('LOV_COMPL');
    //  GO_ITEM('CAMPO24');
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_bCplmto22_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_bCplmto22_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "COMPLEMENTO: ESTE CAMPO HACE REFERENCIA A LA INFORMACION COMPLEMENTARIA, QUE PUEDE DEFINIR LA CONDICION Y/O POSICIÓN DENTRO DEL LOTE.";
        // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: AGENCIA, ENTRADA, PARCELA, SALON COMUNAL, VEREDA, ETC. ";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_COMPL");
        this.oracleFormsBuiltins.go_item("CAMPO24");
        console.log("Exiting SEFCRETEJ_direccionesintro_bCplmto22_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  :DIRECCIONESINTRO.DESCRIPCION := 'TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.';
    // //  :DIRECCIONESINTRO.EJEMPLO := 'EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES'||CHR(10)||CHR(13)||
    //  'EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ';
    //  RETURN_LOV := SHOW_LOV('LOV_PREDIO');
    //  GO_ITEM('CAMPO21');
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_bCplmto20_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_bCplmto20_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        this.DIRECCIONESINTRO.DESCRIPCION = "TIPO PREDIO: INGRESE EL TIPO DE PREDIO CORRESPONDIENTE. HACE REFERENCIA AL TIPO DE UNIDAD PREDIAL.";
        // this.DIRECCIONESINTRO.EJEMPLO = "EL BOTÓN DESPLIEGA LA LISTA DE OPCIONES" + CHR(10) + CHR(13) + "EJEMPLOS: BODEGA, CASA, LOTE, MEZZANINE, TERRAZA, SOTANO, UNIDAD, ETC. ";
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_PREDIO");
        this.oracleFormsBuiltins.go_item("CAMPO21");
        console.log("Exiting SEFCRETEJ_direccionesintro_bCplmto20_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN -- RETORNAR AL ITEM SIGUIENTE, UNA VEZ LIMPIE LO ALMACENADO EN DIRECCIONES.
    // 
    // IF (:HOMOLOGAOK = 1 AND
    //   FRM$ALERTA_SINO ('QUIERE VOLVER SIN GUARDAR LOS CAMBIOS?.....') = 1) OR
    //   :HOMOLOGAOK = 0 THEN
    //  IF :GLOBAL.DIR1= 'DIR' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('TERMAN01.TERTEL');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //    
    //  
    //  ELSIF :GLOBAL.DIR1= 'DIR1' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('ENTMAN02.ENTTEL');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    // 
    //  
    //  ELSIF :GLOBAL.DIR1= 'DIR2' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('ENTMAN02.ENTTEL1');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //   
    //   
    //    
    //   ELSIF :GLOBAL.DIR1= 'DIRF1' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('FAMMAN01.FAMD1');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //   
    //   ELSIF :GLOBAL.DIR1= 'DIRF2' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('FAMMAN01.FAMD2');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    // 
    //   ELSIF :GLOBAL.DIR1= 'DIRF3' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('FAMMAN01.FAMD3');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //   
    //   ELSIF :GLOBAL.DIR1= 'DIRF6' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('FAMMAN01.FAMD6');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //   
    //   ELSIF :GLOBAL.DIR1= 'DIRR2' THEN
    //   SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R0G0B0');
    //   CLEAR_BLOCK;
    //   GO_ITEM('FAMMAN01.FAMR2');
    //   :GLOBAL.CADENA:=NULL; 
    //   :GLOBAL.DIR1 :=NULL;
    //   HIDE_VIEW('DIRECCIONESINTRO'); 
    //   HIDE_VIEW('DIR_01');
    //   HIDE_VIEW('DIR_02');
    //   HIDE_VIEW('DIR_03');
    //   :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //   :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //   
    // 
    //   
    //   
    //  END IF;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_direccionesintro_dev_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_dev_whenButtonPressed");
        // if (((HOMOLOGAOK == 1 && FRM$ALERTA_SINO("QUIERE VOLVER SIN GUARDAR LOS CAMBIOS?.....") == 1) || HOMOLOGAOK == 0)) {
        //     if (GLOBAL.DIR1 == "DIR") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("TERMAN01.TERTEL");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIR1") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIR2") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL1");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIRF1") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD1");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIRF2") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD2");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIRF3") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD3");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIRF6") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMD6");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        //     else if (GLOBAL.DIR1 == "DIRR2") {
        //         this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R0G0B0");
        //         this.oracleFormsBuiltins.clear_block();
        //         this.oracleFormsBuiltins.go_item("FAMMAN01.FAMR2");
        //         // this.GLOBAL.CADENA = null;
        //         // this.GLOBAL.DIR1 = null;
        //         this.oracleFormsBuiltins.hide_view("DIRECCIONESINTRO");
        //         this.oracleFormsBuiltins.hide_view("DIR_01");
        //         this.oracleFormsBuiltins.hide_view("DIR_02");
        //         this.oracleFormsBuiltins.hide_view("DIR_03");
        //         this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //         this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     }
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_dev_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :DIRECCIONESINTRO.ESTADO_ZOOM = 0 THEN
    //  SHOW_VIEW('ZOOM_DIR');
    //  :DIRECCIONESINTRO.DIRECCION_ZOOM:= :DIRECCIONESINTRO.CAD_DIRECCION;
    //  :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    // ELSIF
    //  :DIRECCIONESINTRO.ESTADO_ZOOM = 1 THEN
    //  :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //  :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //  HIDE_VIEW('ZOOM_DIR'); 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_direccionesintro_verDir_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direccionesintro_verDir_whenButtonPressed");
        // if (DIRECCIONESINTRO.ESTADO_ZOOM == 0) {
        //     this.oracleFormsBuiltins.show_view("ZOOM_DIR");
        //     this.DIRECCIONESINTRO.DIRECCION_ZOOM = this.DIRECCIONESINTRO.CAD_DIRECCION;
        //     this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        // }
        // else if (DIRECCIONESINTRO.ESTADO_ZOOM == 1) {
        //     this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        //     this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        //     this.oracleFormsBuiltins.hide_view("ZOOM_DIR");
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_verDir_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  LIST_INDEX NUMBER(10) := ;
    // BEGIN
    //  --LIMPIA CAMPOS
    //  :DIRECCIONESINTRO.CAD_DIRECCION := NULL;
    //  :DIRECCIONESINTRO.EJEMPLO := NULL;
    //  :DIRECCIONESINTRO.DESCRIPCION := NULL;
    //  
    //  :DIRECCIONESINTRO.CAMPO1 := NULL;
    //  :DIRECCIONESINTRO.CAMPO2 := NULL;
    //  :DIRECCIONESINTRO.CAMPO3 := NULL;
    //  :DIRECCIONESINTRO.CAMPO4 := NULL;
    //  :DIRECCIONESINTRO.CAMPO5 := NULL;
    //  :DIRECCIONESINTRO.CAMPO6 := NULL;
    //  :DIRECCIONESINTRO.CAMPO7 := NULL;
    //  :DIRECCIONESINTRO.CAMPO8 := NULL;
    //  :DIRECCIONESINTRO.CAMPO9 := NULL;
    //  :DIRECCIONESINTRO.CAMPO10 := NULL;
    //  :DIRECCIONESINTRO.CAMPO11 := NULL;
    //  :DIRECCIONESINTRO.CAMPO12 := NULL;
    //  :DIRECCIONESINTRO.CAMPO14 := NULL;
    //  :DIRECCIONESINTRO.CAMPO15 := NULL;
    //  :DIRECCIONESINTRO.CAMPO16 := NULL;
    //  :DIRECCIONESINTRO.CAMPO17 := NULL;
    //  :DIRECCIONESINTRO.CAMPO18 := NULL;
    //  :DIRECCIONESINTRO.CAMPO19 := NULL;
    //  :DIRECCIONESINTRO.CAMPO20 := NULL;
    //  :DIRECCIONESINTRO.CAMPO21 := NULL;
    //  :DIRECCIONESINTRO.CAMPO23 := NULL;
    //  
    //  HIDE_VIEW('DIR_01');
    //  HIDE_VIEW('DIR_02');
    //  HIDE_VIEW('DIR_03');
    //  :DIRECCIONESINTRO.DIRECCION_ZOOM:= '';
    //  :DIRECCIONESINTRO.ESTADO_ZOOM := ;
    //  HIDE_VIEW('ZOOM_DIR'); 
    //  
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_1',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_2',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_3',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_4',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_5',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_6',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_7',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_8',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_9',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_10',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_11',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_12',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_13',"FOREGROUND_COLOR",'R0G0B0');
    //  SET_ITEM_PROPERTY('DIRECCIONESINTRO.EJMPL_14',"FOREGROUND_COLOR",'R0G0B0');
    //  
    //  --
    //  SET_ITEM_PROPERTY('CAD_ANTERIOR',"FOREGROUND_COLOR",'R64G64B64');
    //   IF :GLOBAL.DIR1= 'DIR' THEN
    // //    :CAD_ANTERIOR := 'DIRECCION ANTERIOR = '||CHR(10)||CHR(13)||
    //    :TERMAN01.TERDIR;
    // 
    //   ELSIF :GLOBAL.DIR1= 'DIR1' THEN
    // //    :CAD_ANTERIOR := 'DIRECCION ANTERIOR = '||CHR(10)||CHR(13)||
    //    :ENTMAN02.ENTDIR;
    //  
    //   ELSIF :GLOBAL.DIR1= 'DIR2' THEN
    // //    :CAD_ANTERIOR := 'DIRECCION ANTERIOR = '||CHR(10)||CHR(13)||
    //    :ENTMAN02.ENTDIR;
    //   END IF;
    //   
    //  IF :RADIO_GROUP = '01' THEN 
    //   
    //   SHOW_VIEW('DIR_01'); 
    //    :DIRECCIONESINTRO.DESCRIPCION := 'COMPLETE LOS CAMPOS NECESARIOS PARA HOMOLOGAR LA DIRECCIÓN, EN ESTE PANEL SE MOSTRARAN LAS AYUDAS RESPECTIVAS POR CAMPO.';
    // //   :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLO DIRECCION= "CLL 80 D 42-02 MZ 4 LOCAL 44"'||CHR(10)||CHR(13)||
    //   'HOMOLOGACION = CL 80 D 42 2 MZ 4 LC 44';
    //   SHOW_VIEW('DIR_02'); 
    //   
    //   --
    //   CLEAR_LIST('DIRECCIONESINTRO.CAMPO6');
    //   CLEAR_LIST('DIRECCIONESINTRO.CAMPO12');
    //   
    //   FOR I IN ( SELECT HOMODIR_DES,HOMODIR_COD FROM SETHOMODIR WHERE HOMODIR_TIPO = 'CUADRANTE')
    //   LOOP
    //    ADD_LIST_ELEMENT('DIRECCIONESINTRO.CAMPO6',LIST_INDEX,I.HOMODIR_DES, I.HOMODIR_COD);
    //    ADD_LIST_ELEMENT('DIRECCIONESINTRO.CAMPO12',LIST_INDEX,I.HOMODIR_DES, I.HOMODIR_COD);
    //    LIST_INDEX := LIST_INDEX + ;
    //   END LOOP;
    //   
    //  ELSIF :RADIO_GROUP = '02' THEN 
    //   
    //   SHOW_VIEW('DIR_03'); 
    //   :CAD_DIRECCION:= 'IND';
    //   :DIRECCIONESINTRO.DESCRIPCION := 'POR MEDIO DE ESTA OPCIÓN PODRA INGRESAR DIRECCIONES QUE NO SE AJUSTEN A LA NOMENCLATURA BÁSICA.';
    // //   :DIRECCIONESINTRO.EJEMPLO := 'EJEMPLO = "PARA CUALQUIER CIUDAD O MUNICIPIO"'||CHR(10)||CHR(13)||
    //   'HOMOLOGACION = IND KILOMETRO 15 VIA EL CERRITO'
    //   ;
    //   
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_direccionesintro_radioGroup_whenRadioChanged() {
        console.log("Entering SEFCRETEJ_direccionesintro_radioGroup_whenRadioChanged");
        let LIST_INDEX: number = null;
        this.DIRECCIONESINTRO.CAD_DIRECCION = null;
        this.DIRECCIONESINTRO.EJEMPLO = null;
        this.DIRECCIONESINTRO.DESCRIPCION = null;
        this.DIRECCIONESINTRO.CAMPO1 = null;
        this.DIRECCIONESINTRO.CAMPO2 = null;
        this.DIRECCIONESINTRO.CAMPO3 = null;
        this.DIRECCIONESINTRO.CAMPO4 = null;
        this.DIRECCIONESINTRO.CAMPO5 = null;
        this.DIRECCIONESINTRO.CAMPO6 = null;
        this.DIRECCIONESINTRO.CAMPO7 = null;
        this.DIRECCIONESINTRO.CAMPO8 = null;
        this.DIRECCIONESINTRO.CAMPO9 = null;
        this.DIRECCIONESINTRO.CAMPO10 = null;
        this.DIRECCIONESINTRO.CAMPO11 = null;
        this.DIRECCIONESINTRO.CAMPO12 = null;
        this.DIRECCIONESINTRO.CAMPO14 = null;
        this.DIRECCIONESINTRO.CAMPO15 = null;
        this.DIRECCIONESINTRO.CAMPO16 = null;
        this.DIRECCIONESINTRO.CAMPO17 = null;
        this.DIRECCIONESINTRO.CAMPO18 = null;
        this.DIRECCIONESINTRO.CAMPO19 = null;
        this.DIRECCIONESINTRO.CAMPO20 = null;
        this.DIRECCIONESINTRO.CAMPO21 = null;
        this.DIRECCIONESINTRO.CAMPO23 = null;
        this.oracleFormsBuiltins.hide_view("DIR_01");
        this.oracleFormsBuiltins.hide_view("DIR_02");
        this.oracleFormsBuiltins.hide_view("DIR_03");
        this.DIRECCIONESINTRO.DIRECCION_ZOOM = "";
        // this.DIRECCIONESINTRO.ESTADO_ZOOM = ;
        this.oracleFormsBuiltins.hide_view("ZOOM_DIR");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_1", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_2", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_3", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_4", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_5", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_6", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_7", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_8", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_9", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_10", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_11", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_12", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_13", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("DIRECCIONESINTRO.EJMPL_14", "FOREGROUND_COLOR", "R0G0B0");
        this.oracleFormsBuiltins.set_item_property("CAD_ANTERIOR", "FOREGROUND_COLOR", "R64G64B64");
        // if (GLOBAL.DIR1 == "DIR") {
        // //     this.DIRECCIONESINTRO.CAD_ANTERIOR = "DIRECCION ANTERIOR = " + CHR(10) + CHR(13) + TERMAN01.TERDIR;
        // }
        // else if (GLOBAL.DIR1 == "DIR1") {
        // //     this.DIRECCIONESINTRO.CAD_ANTERIOR = "DIRECCION ANTERIOR = " + CHR(10) + CHR(13) + ENTMAN02.ENTDIR;
        // }
        // else if (GLOBAL.DIR1 == "DIR2") {
        // //     this.DIRECCIONESINTRO.CAD_ANTERIOR = "DIRECCION ANTERIOR = " + CHR(10) + CHR(13) + ENTMAN02.ENTDIR;
        // }
        // if (RADIO_GROUP == "01") {
        //     this.oracleFormsBuiltins.show_view("DIR_01");
        //     this.DIRECCIONESINTRO.DESCRIPCION = "COMPLETE LOS CAMPOS NECESARIOS PARA HOMOLOGAR LA DIRECCIÓN, EN ESTE PANEL SE MOSTRARAN LAS AYUDAS RESPECTIVAS POR CAMPO.";
        // //     this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLO DIRECCION= "CLL 80 D 42 - 02 MZ 4 LOCAL 44" + CHR(10) + CHR(13) + "HOMOLOGACION = CL 80 D 42 2 MZ 4 LC 44";
        //     this.oracleFormsBuiltins.show_view("DIR_02");
        //     this.oracleFormsBuiltins.clear_list("DIRECCIONESINTRO.CAMPO6");
        //     this.oracleFormsBuiltins.clear_list("DIRECCIONESINTRO.CAMPO12");
        // }
        // else if (RADIO_GROUP == "02") {
        //     this.oracleFormsBuiltins.show_view("DIR_03");
        //     this.DIRECCIONESINTRO.CAD_DIRECCION = "IND";
        //     this.DIRECCIONESINTRO.DESCRIPCION = "POR MEDIO DE ESTA OPCIÓN PODRA INGRESAR DIRECCIONES QUE NO SE AJUSTEN A LA NOMENCLATURA BÁSICA.";
        // //     this.DIRECCIONESINTRO.EJEMPLO = "EJEMPLO = "PARA CUALQUIER CIUDAD O MUNICIPIO" + CHR(10) + CHR(13) + "HOMOLOGACION = IND KILOMETRO 15 VIA EL CERRITO";
        // }
        console.log("Exiting SEFCRETEJ_direccionesintro_radioGroup_whenRadioChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //  
    // IF (:ENTMAN02.ENTOME = 'S') THEN 
    //   IF (:SETOPINT.OPINT_TIOPE IS NULL) THEN 
    //     LIB$ALERTA('MENSAJE','POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);  
    //   ELSE
    //    IF :TERMAN01.TERTVI='09' THEN
    //     MESSAGE ('VINCULO ' ||:TERMAN01.TERTVI);
    //     GO_ITEM('DCO.DCOACT');
    //   ELSE 
    //     :RADIOS.RREPORTES :='R5';
    //    COMMIT;
    //     :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //     :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //     SHOW_VIEW ('C_TRIBUTARIOS');
    //     GO_ITEM('ENTMAN02.TERIDENT');
    //   END IF;
    //   END IF;
    // ELSE
    //   IF (:SETOPINT.OPINT_TIOPE IS NOT NULL) THEN
    //    :ENTMAN02.ENTOME := 'S';
    //   ELSE 
    //    IF :TERMAN01.TERTVI='09' THEN
    //     MESSAGE ('VINCULO ' ||:TERMAN01.TERTVI);
    //     GO_ITEM('DCO.DCOACT');
    //   ELSE 
    //     :RADIOS.RREPORTES :='R5';
    //    COMMIT;
    //     :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //     :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //     SHOW_VIEW ('C_TRIBUTARIOS');
    //     GO_ITEM('ENTMAN02.TERIDENT');
    //   END IF;
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async SEFCRETEJ_setopint_keyNxtblk() {
        console.log("Entering SEFCRETEJ_setopint_keyNxtblk");
        let VBOTON: number = null;
        if (this.ENTMAN02.ENTOME == "S") {
            if ((this.SETOPINT.OPINT_TIOPE == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.", "ACEPTAR", null, null, VBOTON);
            }
            else {
                if (this.TERMAN01.TERTVI == "09") {
                    this.oracleFormsBuiltins.message("VINCULO " + this.TERMAN01.TERTVI);
                    this.oracleFormsBuiltins.go_item("DCO.DCOACT");
                }
                else {
                    this.RADIOS.RREPORTES = "R5";
                    // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.show_view("C_TRIBUTARIOS");
                    this.oracleFormsBuiltins.go_item("ENTMAN02.TERIDENT");
                }
            }
        }
        else {
            if ((this.SETOPINT.OPINT_TIOPE != null)) {
                this.ENTMAN02.ENTOME = "S";
            }
            else {
                if (this.TERMAN01.TERTVI == "09") {
                    this.oracleFormsBuiltins.message("VINCULO " + this.TERMAN01.TERTVI);
                    this.oracleFormsBuiltins.go_item("DCO.DCOACT");
                }
                else {
                    this.RADIOS.RREPORTES = "R5";
                    // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.show_view("C_TRIBUTARIOS");
                    this.oracleFormsBuiltins.go_item("ENTMAN02.TERIDENT");
                }
            }
        }
        console.log("Exiting SEFCRETEJ_setopint_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN IF (:TERMAN01.TERCOD IS NOT NULL) THEN
    //    :SETOPINT.OPINT_TERCOD := :TERMAN01.TERCOD;
    //    :SETOPINT.OPINT_TERNOM := :TERMAN01.TERNOM;
    //    :SETOPINT.OPINT_TERAPE := :TERMAN01.TERAPE;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_whenCreateRecord() {
        console.log("Entering SEFCRETEJ_setopint_whenCreateRecord");
        if ((this.TERMAN01.TERCOD != null)) {
            this.SETOPINT.OPINT_TERCOD = this.TERMAN01.TERCOD;
            this.SETOPINT.OPINT_TERNOM = this.TERMAN01.TERNOM;
            this.SETOPINT.OPINT_TERAPE = this.TERMAN01.TERAPE;
        }
        console.log("Exiting SEFCRETEJ_setopint_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //  
    // IF (:ENTMAN02.ENTOME = 'S') THEN 
    //   IF (:SETOPINT.OPINT_TIOPE IS NULL) THEN 
    //     LIB$ALERTA('MENSAJE','POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);  
    //   ELSE
    //    IF :TERMAN01.TERTVI='09' THEN
    //     GO_ITEM('DCO.DCOACT');
    //   ELSE 
    //     :RADIOS.RREPORTES:='R1';
    //      :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //     GO_ITEM('TERMAN01.TERTID');
    //   END IF;
    //   END IF;
    // ELSE
    //   IF (:SETOPINT.OPINT_TIOPE IS NOT NULL) THEN
    //    :ENTMAN02.ENTOME := 'S';
    //   ELSE
    //    IF :TERMAN01.TERTVI='09' THEN
    //     GO_ITEM('DCO.DCOACT');
    //   ELSE 
    //     :RADIOS.RREPORTES:='R1';
    //      :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //     GO_ITEM('TERMAN01.TERTID');
    //   END IF;
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async SEFCRETEJ_setopint_keyExit() {
        console.log("Entering SEFCRETEJ_setopint_keyExit");
        let VBOTON: number = null;
        if (this.ENTMAN02.ENTOME == "S") {
            if ((this.SETOPINT.OPINT_TIOPE == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.", "ACEPTAR", null, null, VBOTON);
            }
            else {
                if (this.TERMAN01.TERTVI == "09") {
                    this.oracleFormsBuiltins.go_item("DCO.DCOACT");
                }
                else {
                    this.RADIOS.RREPORTES = "R1";
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.go_item("TERMAN01.TERTID");
                }
            }
        }
        else {
            if ((this.SETOPINT.OPINT_TIOPE != null)) {
                this.ENTMAN02.ENTOME = "S";
            }
            else {
                if (this.TERMAN01.TERTVI == "09") {
                    this.oracleFormsBuiltins.go_item("DCO.DCOACT");
                }
                else {
                    this.RADIOS.RREPORTES = "R1";
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.go_item("TERMAN01.TERTID");
                }
            }
        }
        console.log("Exiting SEFCRETEJ_setopint_keyExit");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //  
    // IF (:ENTMAN02.ENTOME = 'S') THEN 
    //   IF (:SETOPINT.OPINT_TIOPE IS NULL) THEN 
    //     LIB$ALERTA('MENSAJE','POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);  
    //   ELSE
    //    IF :TERMAN01.TERTVI='09' THEN
    //     MESSAGE ('VINCULO ' ||:TERMAN01.TERTVI);
    //     GO_ITEM('DCO.DCOACT');
    //   ELSE 
    //     :RADIOS.RREPORTES :='R5';
    //    COMMIT;
    //     :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //     :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //     SHOW_VIEW ('C_TRIBUTARIOS');
    //     GO_ITEM('ENTMAN02.TERIDENT');
    //   END IF;
    //   END IF;
    // ELSE
    //   IF (:SETOPINT.OPINT_TIOPE IS NOT NULL) THEN
    //    :ENTMAN02.ENTOME := 'S';
    //   ELSE 
    //    IF :TERMAN01.TERTVI='09' THEN
    //     MESSAGE ('VINCULO ' ||:TERMAN01.TERTVI);
    //     GO_ITEM('DCO.DCOACT');
    //   ELSE 
    //    :RADIOS.RREPORTES:='R1';
    //    :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //    GO_ITEM('TERMAN01.TERTID');
    //   END IF;
    //   END IF;
    // END IF;
    // END;
    //#endregion
    async SEFCRETEJ_setopint_keyPrvblk() {
        console.log("Entering SEFCRETEJ_setopint_keyPrvblk");
        let VBOTON: number = null;
        if (this.ENTMAN02.ENTOME == "S") {
            if ((this.SETOPINT.OPINT_TIOPE == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.", "ACEPTAR", null, null, VBOTON);
            }
            else {
                if (this.TERMAN01.TERTVI == "09") {
                    this.oracleFormsBuiltins.message("VINCULO " + this.TERMAN01.TERTVI);
                    this.oracleFormsBuiltins.go_item("DCO.DCOACT");
                }
                else {
                    this.RADIOS.RREPORTES = "R5";
                    this.PARAMETER.set("CONS_TER", this.TERMAN01.TERCOD);
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.show_view("C_TRIBUTARIOS");
                    this.oracleFormsBuiltins.go_item("ENTMAN02.TERIDENT");
                }
            }
        }
        else {
            if ((this.SETOPINT.OPINT_TIOPE != null)) {
                this.ENTMAN02.ENTOME = "S";
            }
            else {
                if (this.TERMAN01.TERTVI == "09") {
                    this.oracleFormsBuiltins.message("VINCULO " + this.TERMAN01.TERTVI);
                    this.oracleFormsBuiltins.go_item("DCO.DCOACT");
                }
                else {
                    this.RADIOS.RREPORTES = "R1";
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.go_item("TERMAN01.TERTID");
                }
            }
        }
        console.log("Exiting SEFCRETEJ_setopint_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    //  V_TOPINT NUMBER; --VARIABLE PARA VERIFICAR SI TIENE OPERACIONES INTERNACIONALES
    // BEGIN
    // 
    //   IF (:TERMAN01.TERCOD IS NOT NULL) THEN
    //    :SETOPINT.OPINT_TERCOD := :TERMAN01.TERCOD;
    //    :SETOPINT.OPINT_TERNOM := :TERMAN01.TERNOM;
    //    :SETOPINT.OPINT_TERAPE := :TERMAN01.TERAPE;
    //   END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_setopint_postQuery() {
        console.log("Entering SEFCRETEJ_setopint_postQuery");
        let V_TOPINT: number = null;
        if ((this.TERMAN01.TERCOD != null)) {
            this.SETOPINT.OPINT_TERCOD = this.TERMAN01.TERCOD;
            this.SETOPINT.OPINT_TERNOM = this.TERMAN01.TERNOM;
            this.SETOPINT.OPINT_TERAPE = this.TERMAN01.TERAPE;
        }
        console.log("Exiting SEFCRETEJ_setopint_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_MONOPE IS NOT NULL THEN
    // DECLARE 
    // W_EXISTE  NUMBER;
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //    BEGIN
    //     SELECT ORMDES
    //     INTO :SETOPINT.MONEDA
    //    FROM OPS$COLOCA.ORM
    //     WHERE ORMCOD = :SETOPINT.OPINT_MONOPE;
    //     
    //     -- SELECT ORMCOD ABREV, ORMDES DESCRI FROM OPS$COLOCA.ORM ORDER BY ORMCOD DESC
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintMonope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint_opintMonope_whenValidateItem");
        if ((this.SETOPINT.OPINT_MONOPE != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("OPINT_MONOPE", this.SETOPINT.OPINT_MONOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opintmonope_whenvalidateitem_query1", payload1);
                // get values from result
                this.SETOPINT.MONEDA = result1[0].get("SETOPINT.MONEDA");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintMonope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_MONOPE IS NOT NULL THEN
    // DECLARE 
    // W_EXISTE  NUMBER;
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //    BEGIN
    //     SELECT ORMDES
    //     INTO :SETOPINT.MONEDA
    //    FROM OPS$COLOCA.ORM
    //     WHERE ORMCOD = :SETOPINT.OPINT_MONOPE;
    //     
    //     -- SELECT ORMCOD ABREV, ORMDES DESCRI FROM OPS$COLOCA.ORM ORDER BY ORMCOD DESC
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintMonope_postChange() {
        console.log("Entering SEFCRETEJ_setopint_opintMonope_postChange");
        if ((this.SETOPINT.OPINT_MONOPE != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("OPINT_MONOPE", this.SETOPINT.OPINT_MONOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opintmonope_postchange_query1", payload1);
                // get values from result
                this.SETOPINT.MONEDA = result1[0].get("SETOPINT.MONEDA");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintMonope_postChange");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERTVI IN ('09','21') THEN
    //      SHOW_VIEW('FINANC_PROVV');
    //      GO_ITEM('DCO.DCOACT');   
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintMonope_keyNextItem() {
        console.log("Entering SEFCRETEJ_setopint_opintMonope_keyNextItem");
        if (["09", "21"].indexOf(this.TERMAN01.TERTVI) != -1) {
            this.oracleFormsBuiltins.show_view("FINANC_PROVV");
            this.oracleFormsBuiltins.go_item("DCO.DCOACT");
        }
        console.log("Exiting SEFCRETEJ_setopint_opintMonope_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_CIUOPE IS NOT NULL THEN
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    // BEGIN
    //  
    //   SELECT A.TDCDES
    //    INTO :SETOPINT.CIUDAD
    //    FROM TDC A
    //     WHERE A.TDCCOD = :SETOPINT.OPINT_CIUOPE
    //     AND A.TDCDEP = :SETOPINT.OPINT_DEPOPE;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintCiuope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint_opintCiuope_whenValidateItem");
        if ((this.SETOPINT.OPINT_CIUOPE != null)) {
            {

                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("OPINT_CIUOPE", this.SETOPINT.OPINT_CIUOPE);
                payload1.set("OPINT_DEPOPE", this.SETOPINT.OPINT_DEPOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opintciuope_whenvalidateitem_query1", payload1);
                // get values from result
                this.SETOPINT.CIUDAD = result1[0].get("SETOPINT.CIUDAD");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintCiuope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_CIUOPE IS NOT NULL THEN
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    // BEGIN
    //  
    //   SELECT A.TDCDES
    //    INTO :SETOPINT.CIUDAD
    //    FROM TDC A
    //     WHERE A.TDCCOD = :SETOPINT.OPINT_CIUOPE
    //     AND A.TDCDEP = :SETOPINT.OPINT_DEPOPE ;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintCiuope_postChange() {
        console.log("Entering SEFCRETEJ_setopint_opintCiuope_postChange");
        if ((this.SETOPINT.OPINT_CIUOPE != null)) {
            {

                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("OPINT_CIUOPE", this.SETOPINT.OPINT_CIUOPE);
                payload1.set("OPINT_DEPOPE", this.SETOPINT.OPINT_DEPOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opintciuope_postchange_query1", payload1);
                // get values from result
                this.SETOPINT.CIUDAD = result1[0].get("SETOPINT.CIUDAD");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintCiuope_postChange");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_TIOPE IS NOT NULL THEN
    // BEGIN
    //   SELECT TIPOPE_DESCRI
    //     INTO :SETOPINT.OPERACION
    //   FROM OPS$SEGUI.SETTIPOPE
    //   WHERE TIPOPE_CODIGO =:SETOPINT.OPINT_TIOPE;
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     MESSAGE('CODIGO NO EXISTE.');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintTiope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint_opintTiope_whenValidateItem");
        if ((this.SETOPINT.OPINT_TIOPE != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OPINT_TIOPE", this.SETOPINT.OPINT_TIOPE);
            // call REST API
            const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opinttiope_whenvalidateitem_query1", payload1);
            // get values from result
            this.SETOPINT.OPERACION = result1[0].get("SETOPINT.OPERACION");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO NO EXISTE.");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintTiope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_TIOPE IS NOT NULL THEN
    // BEGIN
    //   SELECT TIPOPE_DESCRI
    //     INTO :SETOPINT.OPERACION
    //   FROM OPS$SEGUI.SETTIPOPE
    //   WHERE TIPOPE_CODIGO =:SETOPINT.OPINT_TIOPE;
    // 
    // EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //     MESSAGE('CODIGO NO EXISTE.');
    //     RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintTiope_postChange() {
        console.log("Entering SEFCRETEJ_setopint_opintTiope_postChange");
        if ((this.SETOPINT.OPINT_TIOPE != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OPINT_TIOPE", this.SETOPINT.OPINT_TIOPE);
            // call REST API
            const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opinttiope_postchange_query1", payload1);
            // get values from result
            this.SETOPINT.OPERACION = result1[0].get("SETOPINT.OPERACION");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO NO EXISTE.");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintTiope_postChange");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('OPINT_ENTOPE'); END;
    //#endregion
    async SEFCRETEJ_setopint_opintTerape_keyNextItem() {
        console.log("Entering SEFCRETEJ_setopint_opintTerape_keyNextItem");
        this.oracleFormsBuiltins.go_item("OPINT_ENTOPE");
        console.log("Exiting SEFCRETEJ_setopint_opintTerape_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :DCO.DCOVIVI NOT IN ('S','N') THEN
    //     MESSAGE('TIPO DE INDICADOR PARA VIVIENDA NO VALIDO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_ciudad_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint_ciudad_whenValidateItem");
        if (["S", "N"].indexOf(this.DCO.DCOVIVI) != -1) {
            this.oracleFormsBuiltins.message("TIPO DE INDICADOR PARA VIVIENDA NO VALIDO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_setopint_ciudad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_PAIOPE IS NOT NULL THEN
    // DECLARE 
    // W_EXISTE  NUMBER;
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //    BEGIN
    //     SELECT TDPDES
    //     INTO :SETOPINT.PAIS
    //    FROM TDP
    //     WHERE TDPACO =:SETOPINT.OPINT_PAIOPE;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintPaiope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint_opintPaiope_whenValidateItem");
        if ((this.SETOPINT.OPINT_PAIOPE != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("OPINT_PAIOPE", this.SETOPINT.OPINT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opintpaiope_whenvalidateitem_query1", payload1);
                // get values from result
                this.SETOPINT.PAIS = result1[0].get("SETOPINT.PAIS");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintPaiope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETOPINT.OPINT_PAIOPE IS NOT NULL THEN
    // DECLARE 
    // W_EXISTE  NUMBER;
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //    BEGIN
    //     SELECT TDPDES
    //     INTO :SETOPINT.PAIS
    //    FROM TDP
    //     WHERE TDPACO =:SETOPINT.OPINT_PAIOPE;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_opintPaiope_postChange() {
        console.log("Entering SEFCRETEJ_setopint_opintPaiope_postChange");
        if ((this.SETOPINT.OPINT_PAIOPE != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("OPINT_PAIOPE", this.SETOPINT.OPINT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setopint/sefcretej_setopint_opintpaiope_postchange_query1", payload1);
                // get values from result
                this.SETOPINT.PAIS = result1[0].get("SETOPINT.PAIS");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setopint_opintPaiope_postChange");
    }

    //#region PLSQL
    // BEGIN IF :DCO.DCOVIVI NOT IN ('S','N') THEN
    //     MESSAGE('TIPO DE INDICADOR PARA VIVIENDA NO VALIDO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_setopint_pais_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setopint_pais_whenValidateItem");
        // if (["S", "N"].indexOf(this.DCO.DCOVIVI) != -1) {
        //     this.oracleFormsBuiltins.message("TIPO DE INDICADOR PARA VIVIENDA NO VALIDO");
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_setopint_pais_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_toolbar_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_toolbar_whenButtonPressed");
        console.log("Exiting SEFCRETEJ_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_toolbar_whenMouseLeave() {
        console.log("Entering SEFCRETEJ_toolbar_whenMouseLeave");
        console.log("Exiting SEFCRETEJ_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_toolbar_whenNewFormInstance() {
        console.log("Entering SEFCRETEJ_toolbar_whenNewFormInstance");
        console.log("Exiting SEFCRETEJ_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFCRETEJ_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCRETEJ_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFCRETEJ_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :DIR.DIRDLOC IS NOT NULL THEN
    // DECLARE 
    // DEP_EXISTE          NUMBER(1);
    // PAIS_HOMO       VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //  BEGIN
    //   SELECT TDECOF
    //     INTO PAIS_HOMO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD = :DIR.DIRDLOC 
    //      AND  DEPACO = :DIR.DIRPLOC;
    //      
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE DEPARTAMENTO INVALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    //    SELECT COUNT(1)
    //      INTO DEP_EXISTE
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD=:DIR.DIRDLOC 
    //       AND TDECOF = PAIS_HOMO
    //       AND :DIR.DIRDLOC  <> '00';
    //       
    //    IF DEP_EXISTE = 0 THEN
    //      LIB$ALERTA('MENSAJE','CODIGO DE DEPARTAMENTO NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //    ELSE
    //        :DIR.DIRCLOC:=NULL;
    //    END IF;
    //    
    //     
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_dir_dirdloc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dir_dirdloc_whenValidateItem");
        if ((this.DIR.DIRDLOC != null)) {
            {

                let DEP_EXISTE: number = null;
                let PAIS_HOMO: string = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("DIRDLOC", this.DIR.DIRDLOC);
                payload1.set("DIRPLOC", this.DIR.DIRPLOC);
                // call REST API
                const result1 = await Rest.post("/sefcretej_dir/sefcretej_dir_dirdloc_whenvalidateitem_query1", payload1);
                // get values from result
                PAIS_HOMO = result1[0].get("PAIS_HOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE DEPARTAMENTO INVALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("DIRDLOC", this.DIR.DIRDLOC);
                // call REST API
                const result2 = await Rest.post("/sefcretej_dir/sefcretej_dir_dirdloc_whenvalidateitem_query2", payload2);
                // get values from result
                DEP_EXISTE = result2[0].get("DEP_EXISTE");
                if (DEP_EXISTE == 0) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE DEPARTAMENTO NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
                else {
                    this.DIR.DIRCLOC = null;
                }
            }

        }
        console.log("Exiting SEFCRETEJ_dir_dirdloc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :DIR.DIRCAER IS NOT NULL THEN
    // DECLARE 
    // W_EXISTE  NUMBER;
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //    BEGIN
    //     SELECT TDCDES
    //     INTO W_DESCRIP
    //    FROM TDC
    //     WHERE TDCCOD =:DIR.DIRCAER;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //  END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_dir_dircaer_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dir_dircaer_whenValidateItem");
        if ((this.DIR.DIRCAER != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("DIRCAER", this.DIR.DIRCAER);
                // call REST API
                const result1 = await Rest.post("/sefcretej_dir/sefcretej_dir_dircaer_whenvalidateitem_query1", payload1);
                // get values from result
                W_DESCRIP = result1[0].get("W_DESCRIP");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_dir_dircaer_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TEROFC'); END;
    //#endregion
    async SEFCRETEJ_dir_dircaer_keyNextItem() {
        console.log("Entering SEFCRETEJ_dir_dircaer_keyNextItem");
        this.oracleFormsBuiltins.go_item("TEROFC");
        console.log("Exiting SEFCRETEJ_dir_dircaer_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :DIR.DIRCLOC IS NOT NULL THEN
    // DECLARE 
    // CIU_EXISTE          NUMBER(1);
    // PAIS_HOMO       VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //  BEGIN
    //   SELECT TDECOF
    //     INTO PAIS_HOMO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD = :DIR.DIRDLOC 
    //      AND  DEPACO = :DIR.DIRPLOC;
    //      
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE PAIS INVALIDO... INSERTE EL PAIS ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    //    SELECT COUNT(1)
    //      INTO CIU_EXISTE
    //      FROM OPS$SEGUI.TDC
    //     WHERE TDCDEP =:DIR.DIRDLOC 
    //       AND TDCPAI = PAIS_HOMO
    //       AND TDCCOD = :DIR.DIRCLOC
    //       AND :DIR.DIRCLOC <> '000';
    //       
    //    IF CIU_EXISTE = 0 THEN
    //      LIB$ALERTA('MENSAJE','CODIGO DE LA CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    
    //     
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_dir_dircloc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dir_dircloc_whenValidateItem");
        if ((this.DIR.DIRCLOC != null)) {
            {

                let CIU_EXISTE: number = null;
                let PAIS_HOMO: string = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("DIRDLOC", this.DIR.DIRDLOC);
                payload1.set("DIRPLOC", this.DIR.DIRPLOC);
                // call REST API
                const result1 = await Rest.post("/sefcretej_dir/sefcretej_dir_dircloc_whenvalidateitem_query1", payload1);
                // get values from result
                PAIS_HOMO = result1[0].get("PAIS_HOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS INVALIDO... INSERTE EL PAIS ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("DIRDLOC", this.DIR.DIRDLOC);
                payload2.set("DIRCLOC", this.DIR.DIRCLOC);
                // call REST API
                const result2 = await Rest.post("/sefcretej_dir/sefcretej_dir_dircloc_whenvalidateitem_query2", payload2);
                // get values from result
                CIU_EXISTE = result2[0].get("CIU_EXISTE");
                if (CIU_EXISTE == 0) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE LA CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }

        }
        console.log("Exiting SEFCRETEJ_dir_dircloc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R3';
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    // GO_BLOCK('FAMMAN01');
    // EXECUTE_QUERY; END;
    //#endregion
    async SEFCRETEJ_dir_dircloc_keyNextItem() {
        console.log("Entering SEFCRETEJ_dir_dircloc_keyNextItem");
        this.RADIOS.RREPORTES = "R3";
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.go_block("FAMMAN01");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCRETEJ_dir_dircloc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :DIR.DIRPLOC IS NOT NULL THEN
    // DECLARE 
    // W_CODPHOMO  VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //  
    //   BEGIN
    //    SELECT TDCODFA
    //      INTO W_CODPHOMO
    //       FROM OPS$SEGUI.TDP
    //      WHERE TDPACO = :DIR.DIRPLOC;
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //       
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_dir_dirploc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dir_dirploc_whenValidateItem");
        if ((this.DIR.DIRPLOC != null)) {
            {

                let W_CODPHOMO: string = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("DIRPLOC", this.DIR.DIRPLOC);
                // call REST API
                const result1 = await Rest.post("/sefcretej_dir/sefcretej_dir_dirploc_whenvalidateitem_query1", payload1);
                // get values from result
                W_CODPHOMO = result1[0].get("W_CODPHOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_dir_dirploc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERCOD IS NOT NULL THEN
    //    :SETSOCIOS.SOCIOS_TERIDENT := :TERMAN01.TERCOD;
    //    :SETSOCIOS.SOCIOS_TERNOMBRE := :TERMAN01.TERNOM;
    //    :SETSOCIOS.SOCIOS_TERAPELLIDO := :TERMAN01.TERAPE;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setsocios_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_setsocios_whenNewRecordInstance");
        if ((this.TERMAN01.TERCOD != null)) {
            this.SETSOCIOS.SOCIOS_TERIDENT = this.TERMAN01.TERCOD;
            this.SETSOCIOS.SOCIOS_TERNOMBRE = this.TERMAN01.TERNOM;
            this.SETSOCIOS.SOCIOS_TERAPELLIDO = this.TERMAN01.TERAPE;
        }
        console.log("Exiting SEFCRETEJ_setsocios_whenNewRecordInstance");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON     NUMBER;
    //  VBOTON2    NUMBER;
    //  VBOTON3    NUMBER;
    //  W_RES_FAT  VARCHAR(2):=NULL;
    //  V_TIENEFAT NUMBER(1);
    // BEGIN
    //  
    // 
    //    :RADIOS.RREPORTES:='R8';    
    //      COMMIT;
    //          :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //          
    //          IF (:this.PARAMETER.get("TER_CTRL") <> 'C') THEN
    //          LIB$ALERTA('MENSAJE','"RECUERDE QUE LA LEY FATCA ES OBLIGATORIA ÚNICAMENTE PARA EL PRODUCTO "CDT" "CAPTACIONES."'||
    //      ' DESEA INGRESAR LA INFORMACIÓN DE FATCA?','SI','NO',NULL, VBOTON); 
    //      
    //      IF (VBOTON = '1') THEN
    //       
    //        IF(:ENTMAN02.ENT_PAIOPE IS NULL) THEN
    //         LIB$ALERTA('MENSAJE','PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO EL PAÍS DE OPERACIÓN.','ACEPTAR',NULL,NULL, VBOTON2); 
    //          
    //          :RADIOS.RREPORTES:='R6';
    //               :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //          GO_ITEM('ENTMAN02.ENT_PAIOPE');
    //          
    //        ELSIF (:DCO.DCOTIPE IS NULL) THEN
    //         
    //         LIB$ALERTA('MENSAJE','PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO LA CLASE DE SOCIEDAD.','ACEPTAR',NULL,NULL, VBOTON2); 
    //          
    //          :RADIOS.RREPORTES:='R6';
    //               :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //          GO_ITEM('DCO.DCOTIPE');
    //          
    //        
    //        ELSE    
    //      
    //         W_RES_FAT := 'SI';
    //         
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //              SHOW_VIEW ('C_FACTA');
    //              GO_ITEM('SETFACTAJUR.FACJUR_CODTER');
    //              EXECUTE_QUERY;
    //        END IF;
    //     ELSE
    //         W_RES_FAT := 'NO';
    //         
    //         :RADIOS.RREPORTES :='R1';
    //             GO_ITEM('TERMAN01.TERCOD');  
    //        END IF;
    //       
    //          
    //          INSERT INTO OPS$SEGUI.SETFATCALOG (FATLOG_CODTER, FATLOG_USUARI, FATLOG_FECHAC, FATLOG_RSPFAT) 
    //          VALUES (:TERMAN01.TERCOD,USER,SYSDATE,W_RES_FAT);
    //          COMMIT;  
    //          
    //    ELSE
    //       
    //        SELECT COUNT(*)
    //         INTO V_TIENEFAT
    //          FROM SETFACTAJUR S
    //        WHERE S.FACJUR_CODTER = :this.PARAMETER.get("TER_NIT");
    //           
    //        IF V_TIENEFAT = 0 THEN
    //          LIB$ALERTA('MENSAJE','EL TERCERO NO TIENE INFORMACION FATCA.','ACEPTAR',NULL,NULL, VBOTON3); 
    //           :RADIOS.RREPORTES :='R1';
    //           :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //          GO_ITEM('TERMAN01.TERCOD');
    //        ELSE 
    //        :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //           SHOW_VIEW ('C_FACTA');
    //           GO_ITEM('SETFACTAJUR.FACJUR_CODTER');
    //           EXECUTE_QUERY;
    //          END IF;
    //       END IF;  
    // END;
    //#endregion
    async SEFCRETEJ_setsocios_keyNxtblk() {
        console.log("Entering SEFCRETEJ_setsocios_keyNxtblk");
        let VBOTON: number = null;
        let VBOTON2: number = null;
        let VBOTON3: number = null;
        let W_RES_FAT: string = null;
        let V_TIENEFAT: number = null;
        this.RADIOS.RREPORTES = "R8";
        this.PARAMETER.set("CONS_TER", this.TERMAN01.TERCOD);
        if (this.PARAMETER.get("TER_CTRL") != "C") {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "RECUERDE QUE LA LEY FATCA ES OBLIGATORIA ÚNICAMENTE PARA EL PRODUCTO "CDT" "CAPTACIONES." + " DESEA INGRESAR LA INFORMACIÓN DE FATCA ? ", "SI", "NO", null, VBOTON);
            // if (VBOTON == "1") {
            //     if ((this.ENTMAN02.ENT_PAIOPE == null)) {
            //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO EL PAÍS DE OPERACIÓN.", "ACEPTAR", null, null, VBOTON2);
            //         this.RADIOS.RREPORTES = "R6";
            //         this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            //         this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_PAIOPE");
            //     }
            //     else if ((this.DCO.DCOTIPE == null)) {
            //         // SEFCRETEJ_LIB$ALERTA("MENSAJE", "PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO LA CLASE DE SOCIEDAD.", "ACEPTAR", null, null, VBOTON2);
            //         this.RADIOS.RREPORTES = "R6";
            //         this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            //         this.oracleFormsBuiltins.go_item("DCO.DCOTIPE");
            //     }
            //     else {
            //         W_RES_FAT = "SI";
            //         this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            //         this.oracleFormsBuiltins.show_view("C_FACTA");
            //         this.oracleFormsBuiltins.go_item("SETFACTAJUR.FACJUR_CODTER");
            //         this.oracleFormsBuiltins.execute_query();
            //     }
            // }
            // else {
            //     W_RES_FAT = "NO";
            //     this.RADIOS.RREPORTES = "R1";
            //     this.oracleFormsBuiltins.go_item("TERMAN01.TERCOD");
            // }
            // // construct payload
            // let payload2 = new Map();
            // payload2.TERCOD = : TERMAN01.TERCOD;
            // // call REST API
            // const result2 = await Rest.post("/sefcretej_setsocios/sefcretej_setsocios_keynxtblk_query2", payload2);
        }
        else {
            // construct payload
            let payload4 = new Map();
            payload4.set("TER_NIT", this.PARAMETER.get("TER_NIT"));
            // call REST API
            const result4 = await Rest.post("/sefcretej_setsocios/sefcretej_setsocios_keynxtblk_query4", payload4);
            // get values from result
            V_TIENEFAT = result4[0].get("V_TIENEFAT");
            if (V_TIENEFAT == 0) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL TERCERO NO TIENE INFORMACION FATCA.", "ACEPTAR", null, null, VBOTON3);
                this.RADIOS.RREPORTES = "R1";
                this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                this.oracleFormsBuiltins.go_item("TERMAN01.TERCOD");
            }
            else {
                this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                this.oracleFormsBuiltins.show_view("C_FACTA");
                this.oracleFormsBuiltins.go_item("SETFACTAJUR.FACJUR_CODTER");
                this.oracleFormsBuiltins.execute_query();
            }
        }
        console.log("Exiting SEFCRETEJ_setsocios_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN IF(:SETSOCIOS.SOCIOS_TIPO = 'ACC' AND :SETSOCIOS.SOCIOS_PORPAR IS NULL) THEN
    //  LIB$DTNERFRMA('POR FAVOR INGRESE EL PORCENTAJE DE PARTICIPACIÓN DEL ACCIONISTA.');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setsocios_preUpdate() {
        console.log("Entering SEFCRETEJ_setsocios_preUpdate");
        if ((this.SETSOCIOS.SOCIOS_TIPO == "ACC" && (this.SETSOCIOS.SOCIOS_PORPAR == null))) {
            // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL PORCENTAJE DE PARTICIPACIÓN DEL ACCIONISTA.");
        }
        console.log("Exiting SEFCRETEJ_setsocios_preUpdate");
    }

    //#region PLSQL
    // IF :TERMAN01.TERCOD IS NOT NULL THEN
    //    :SETSOCIOS.SOCIOS_TERIDENT := :TERMAN01.TERCOD;
    //    :SETSOCIOS.SOCIOS_TERNOMBRE := :TERMAN01.TERNOM;
    //    :SETSOCIOS.SOCIOS_TERAPELLIDO := :TERMAN01.TERAPE;
    //  END IF;
    // 
    //     
    //     
    // DECLARE 
    //  V_CANTSO NUMBER(2);
    // BEGIN
    //  
    // --IF :this.PARAMETER.get("TER_CTRL") <> 'C' THEN
    //   
    //   SELECT COUNT(1)
    //    INTO V_CANTSO
    //    FROM SETSOCIOS
    //   WHERE SOCIOS_PRINCI = :TERMAN01.TERCOD
    //     AND SOCIOS_TIPO NOT IN ('FIS','TES');
    // 
    //     :SETSOCIOS.CANT_SOC := V_CANTSO;
    // 
    // --END IF;
    // END;
    //#endregion
    async SEFCRETEJ_setsocios_postQuery() {
        console.log("Entering SEFCRETEJ_setsocios_postQuery");
        console.log("Exiting SEFCRETEJ_setsocios_postQuery");
    }

    //#region PLSQL
    // BEGIN IF(:SETSOCIOS.SOCIOS_TIPO = 'ACC' AND :SETSOCIOS.SOCIOS_PORPAR IS NULL) THEN
    //  LIB$DTNERFRMA('POR FAVOR INGRESE EL PORCENTAJE DE PARTICIPACIÓN DEL ACCIONISTA.');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setsocios_preInsert() {
        console.log("Entering SEFCRETEJ_setsocios_preInsert");
        if ((this.SETSOCIOS.SOCIOS_TIPO == "ACC" && (this.SETSOCIOS.SOCIOS_PORPAR == null))) {
            // SEFCRETEJ_LIB$DTNERFRMA("POR FAVOR INGRESE EL PORCENTAJE DE PARTICIPACIÓN DEL ACCIONISTA.");
        }
        console.log("Exiting SEFCRETEJ_setsocios_preInsert");
    }

    //#region PLSQL
    // BEGIN :SETSOCIOS.SOCIOS_NOMBRE:=NULL;
    // :SETSOCIOS.SOCIOS_NOMBRE:=:SETSOCIOS.SOCIOS_NANME||' '||:SETSOCIOS.SOCIOS_PRIAPE||' '||:SETSOCIOS.SOCIOS_SEGAPE;
    // GO_ITEM('SETSOCIOS.SOCIOS_TIPO'); END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosSegape_keyNextItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosSegape_keyNextItem");
        this.SETSOCIOS.SOCIOS_NOMBRE = null;
        this.SETSOCIOS.SOCIOS_NOMBRE = this.SETSOCIOS.SOCIOS_NANME || ' ' || this.SETSOCIOS.SOCIOS_PRIAPE || ' ' || this.SETSOCIOS.SOCIOS_SEGAPE;
        this.oracleFormsBuiltins.go_item("SETSOCIOS.SOCIOS_TIPO");
        console.log("Exiting SEFCRETEJ_setsocios_sociosSegape_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SOCIOS_CODSOC'); END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosTerapellido_keyNextItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosTerapellido_keyNextItem");
        this.oracleFormsBuiltins.go_item("SOCIOS_CODSOC");
        console.log("Exiting SEFCRETEJ_setsocios_sociosTerapellido_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :SETSOCIOS.SOCIOS_NOMBRE:=NULL;
    // :SETSOCIOS.SOCIOS_NOMBRE:=:SETSOCIOS.SOCIOS_NANME||' '||:SETSOCIOS.SOCIOS_PRIAPE||' '||:SETSOCIOS.SOCIOS_SEGAPE;
    // GO_ITEM('SETSOCIOS.SOCIOS_PRIAPE'); END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosNanme_keyNextItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosNanme_keyNextItem");
        this.SETSOCIOS.SOCIOS_NOMBRE = null;
        this.SETSOCIOS.SOCIOS_NOMBRE = this.SETSOCIOS.SOCIOS_NANME || ' ' || this.SETSOCIOS.SOCIOS_PRIAPE || ' ' || this.SETSOCIOS.SOCIOS_SEGAPE;
        this.oracleFormsBuiltins.go_item("SETSOCIOS.SOCIOS_PRIAPE");
        console.log("Exiting SEFCRETEJ_setsocios_sociosNanme_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SETSOCIOS.SOCIOS_TIPO <> 'ACC' THEN
    //  :SETSOCIOS.SOCIOS_PORPAR := NULL;
    // ELSIF :SETSOCIOS.SUMAR > 100 THEN
    //  MESSAGE('ERROR EL VALOR NO PUEDE SUPERAR EL 100%');
    //  MESSAGE('ERROR EL VALOR NO PUEDE SUPERAR EL 100%');
    //  RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosPorpar_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosPorpar_whenValidateItem");
        if (this.SETSOCIOS.SOCIOS_TIPO != "ACC") {
            this.SETSOCIOS.SOCIOS_PORPAR = null;
        }
        else if (this.SETSOCIOS.SUMAR > 100) {
            this.oracleFormsBuiltins.message("ERROR EL VALOR NO PUEDE SUPERAR EL 100%");
            this.oracleFormsBuiltins.message("ERROR EL VALOR NO PUEDE SUPERAR EL 100%");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_setsocios_sociosPorpar_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETSOCIOS.SOCIOS_TIPO <> 'ACC' THEN
    //     :SETSOCIOS.SOCIOS_PORPAR := NULL;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosPorpar_postChange() {
        console.log("Entering SEFCRETEJ_setsocios_sociosPorpar_postChange");
        if (this.SETSOCIOS.SOCIOS_TIPO != "ACC") {
            this.SETSOCIOS.SOCIOS_PORPAR = null;
        }
        console.log("Exiting SEFCRETEJ_setsocios_sociosPorpar_postChange");
    }

    //#region PLSQL
    // DECLARE
    //   VBOTON NUMBER;
    // BEGIN
    // COMMIT;
    // IF (:SETSOCIOS.SOCIOS_STFUSA = 'SI') THEN
    // 
    //  SHOW_VIEW('C_SOCIOSIMP');
    //  GO_ITEM('SETFATCACCR.FATACR_FACTIN');
    //  EXECUTE_QUERY;
    // ELSE
    //  LIB$ALERTA('MENSAJE','EL ACCIONISTA NO ES SUJETO A TRIBUTACION FISCAL EN USA.','ACEPTAR',NULL,NULL, VBOTON);
    // END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_setsocios_detalleSocio_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_setsocios_detalleSocio_whenButtonPressed");
        let VBOTON: number = null;
        if (this.SETSOCIOS.SOCIOS_STFUSA == "SI") {
            this.oracleFormsBuiltins.show_view("C_SOCIOSIMP");
            this.oracleFormsBuiltins.go_item("SETFATCACCR.FATACR_FACTIN");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL ACCIONISTA NO ES SUJETO A TRIBUTACION FISCAL EN USA.", "ACEPTAR", null, null, VBOTON);
        }
        console.log("Exiting SEFCRETEJ_setsocios_detalleSocio_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON  NUMBER;
    // BEGIN
    // IF :this.PARAMETER.get("TER_CTRL") <> 'C' THEN
    // IF (:SETSOCIOS.SOCIOS_TIPO = 'TES' AND :ENTMAN02.ENTETE = 'N' ) THEN
    //     LIB$ALERTA('MENSAJE','ESTA INGRESANDO TESORERO SE CAMBIARA EL CAMPO TIENE TESORERO A SI.'
    //                 ,'ACEPTAR',NULL,NULL,VBOTON);
    //        
    //      :ENTMAN02.ENTETE := 'S';
    //      :this.PARAMETER.get("TESORERO") := 'N';     
    // 
    // ELSIF (:SETSOCIOS.SOCIOS_TIPO <> 'TES' AND :ENTMAN02.ENTETE = 'S' AND :this.PARAMETER.get("TESORERO") = 'S') THEN
    //        :this.PARAMETER.get("TESORERO") := 'S';
    // 
    // ELSIF (:SETSOCIOS.SOCIOS_TIPO = 'TES' AND :ENTMAN02.ENTETE = 'S' ) THEN
    //       :this.PARAMETER.get("TESORERO") := 'N';
    // 
    // END IF;
    // 
    // 
    // IF (:SETSOCIOS.SOCIOS_TIPO = 'FIS' AND :ENTMAN02.ENTERF = 'N' ) THEN
    //      LIB$ALERTA('MENSAJE','ESTA INGRESANDO REVISOR FISCAL SE CAMBIARA EL CAMPO TIENE REVISOR FISCAL A SI.'
    //                 ,'ACEPTAR',NULL,NULL,VBOTON);
    //        
    //        :ENTMAN02.ENTERF := 'S';
    //        :this.PARAMETER.get("REVFISCAL") := 'N';
    //        
    // ELSIF (:SETSOCIOS.SOCIOS_TIPO <> 'FIS' AND :ENTMAN02.ENTERF = 'S' AND :this.PARAMETER.get("REVFISCAL") = 'S') THEN
    //       :this.PARAMETER.get("REVFISCAL") := 'S';
    // 
    // ELSIF (:SETSOCIOS.SOCIOS_TIPO = 'FIS' AND :ENTMAN02.ENTERF = 'S' ) THEN
    //    :this.PARAMETER.get("REVFISCAL") := 'N';
    // END IF;
    // 
    // END IF;
    // END;
    //    
    //#endregion
    async SEFCRETEJ_setsocios_sociosTipo_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosTipo_whenValidateItem");
        let VBOTON: number = null;
        if (this.PARAMETER.get("TER_CTRL") != "C") {
            // if ((this.SETSOCIOS.SOCIOS_TIPO == "TES" && ENTMAN02.ENTETE == "N")) {
            //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ESTA INGRESANDO TESORERO SE CAMBIARA EL CAMPO TIENE TESORERO A SI.", "ACEPTAR", null, null, VBOTON);
            //     this.ENTMAN02.ENTETE = "S";
            //     this.PARAMETER.get("TESORERO") = "N";
            // }
            // else if (((this.SETSOCIOS.SOCIOS_TIPO != "TES" && ENTMAN02.ENTETE == "S") && this.PARAMETER.get("TESORERO") == "S")) {
            //     this.PARAMETER.get("TESORERO") = "S";
            // }
            // else if ((this.SETSOCIOS.SOCIOS_TIPO == "TES" && ENTMAN02.ENTETE == "S")) {
            //     this.PARAMETER.get("TESORERO") = "N";
            // }
            // if ((this.SETSOCIOS.SOCIOS_TIPO == "FIS" && ENTMAN02.ENTERF == "N")) {
            //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ESTA INGRESANDO REVISOR FISCAL SE CAMBIARA EL CAMPO TIENE REVISOR FISCAL A SI.", "ACEPTAR", null, null, VBOTON);
            //     this.ENTMAN02.ENTERF = "S";
            //     this.PARAMETER.get("REVFISCAL") = "N";
            // }
            // else if (((this.SETSOCIOS.SOCIOS_TIPO != "FIS" && ENTMAN02.ENTERF == "S") && this.PARAMETER.get("REVFISCAL") == "S")) {
            //     this.PARAMETER.get("REVFISCAL") = "S";
            // }
            // else if ((this.SETSOCIOS.SOCIOS_TIPO == "FIS" && ENTMAN02.ENTERF == "S")) {
            //     this.PARAMETER.get("REVFISCAL") = "N";
            // }
        }
        console.log("Exiting SEFCRETEJ_setsocios_sociosTipo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :SETSOCIOS.SOCIOS_NOMBRE:=NULL;
    // :SETSOCIOS.SOCIOS_NOMBRE:=:SETSOCIOS.SOCIOS_NANME||' '||:SETSOCIOS.SOCIOS_PRIAPE||' '||:SETSOCIOS.SOCIOS_SEGAPE;
    // GO_ITEM('SETSOCIOS.SOCIOS_SEGAPE'); END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosPriape_keyNextItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosPriape_keyNextItem");
        this.SETSOCIOS.SOCIOS_NOMBRE = null;
        this.SETSOCIOS.SOCIOS_NOMBRE = this.SETSOCIOS.SOCIOS_NANME || ' ' || this.SETSOCIOS.SOCIOS_PRIAPE || ' ' || this.SETSOCIOS.SOCIOS_SEGAPE;
        this.oracleFormsBuiltins.go_item("SETSOCIOS.SOCIOS_SEGAPE");
        console.log("Exiting SEFCRETEJ_setsocios_sociosPriape_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON  NUMBER;
    // BEGIN 
    //     IF (:SETSOCIOS.SOCIOS_STFUSA = 'SI')THEN
    //    LIB$ALERTA('MENSAJE','ESTA SEGURO QUE ESTE ACCIONISTA TRIBUTA FISCALMENTE EN USA?','SI','NO',NULL, VBOTON);
    //     IF(VBOTON = 1 ) THEN
    //      
    //        DECLARE
    //       W_IMPFAT  this.SETFACTAJUR.FACJUR_IMPFAC%TYPE;
    //       W_EMPCOB  this.SETFACTAJUR.FACJUR_EMPCOB%TYPE;
    //       W_TIPEMP  DCO.DCOTIPE%TYPE;
    //        BEGIN
    //      BEGIN
    //      --OBTENGO SI HAY REGISTRO EN LA TABLA DE PERSONAS JURIDICAS FATCA Y TRAIGO LOS VALORES PARA VALIDACION.
    //      SELECT J.FACJUR_IMPFAC, J.FACJUR_EMPCOB
    //          INTO W_IMPFAT, W_EMPCOB
    //           FROM SETFACTAJUR J
    //           WHERE J.FACJUR_CODTER = :TERMAN01.TERCOD;
    //       EXCEPTION
    //          WHEN NO_DATA_FOUND THEN
    //              W_IMPFAT  := NULL;
    //              W_EMPCOB  := NULL;
    //       END;
    //  
    //      IF W_IMPFAT = 'NO' THEN
    //        --OBTENGO EL TIPO DE EMPRESA PARA VALIDAR.
    //       BEGIN
    //         SELECT D.DCOTIPE 
    //           INTO W_TIPEMP
    //           FROM DCO D
    //           WHERE D.DCOCOD = :TERMAN01.TERCOD
    //             AND D.DCOTIP = :TERMAN01.TERTID;
    //       EXCEPTION
    //        WHEN OTHERS THEN
    //         W_TIPEMP:=NULL;
    //       END;
    //       --VALIDO SI LA EMPRESA NO COTIZA EN BOLSA Y NO ES DE TIPO PUBLICA.
    //       IF (W_EMPCOB = 'NO') THEN
    //         IF (W_TIPEMP <> 'PB') THEN
    //           --REALIZO LA ACTUALIZACION DEL CAMPO IMPACTADO POR FATCA YA QUE ES IMPACATADA LA EMPRESA POR LOS ACCIONISTAS.
    //            UPDATE SETFACTAJUR
    //                 SET FACJUR_IMPFAC = 'SI'
    //                WHERE FACJUR_CODTER = :TERMAN01.TERCOD;
    // 
    //                COMMIT;
    //            END IF;
    //         END IF;
    //       END IF;
    //       END;
    //        
    //        
    //        SET_ITEM_PROPERTY('FATACR_FACTIN',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_FACTIN',REQUIRED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_FACTIN',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_FACTIN', "INSERT_ALLOWED","PROPERTY_ON"); 
    //   
    //       SET_ITEM_PROPERTY('FATACR_GRPFAM',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_GRPFAM',REQUIRED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_GRPFAM',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_GRPFAM', "INSERT_ALLOWED","PROPERTY_ON"); 
    //   
    //       SET_ITEM_PROPERTY('FATACR_PORGRF',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_PORGRF',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_PORGRF', "INSERT_ALLOWED","PROPERTY_ON"); 
    //   
    //       SET_ITEM_PROPERTY('FATACR_PAIORP',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_PAIORP',REQUIRED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_PAIORP',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_PAIORP', "INSERT_ALLOWED","PROPERTY_ON"); 
    //   
    //       SET_ITEM_PROPERTY('FATACR_DIRORP',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_DIRORP',REQUIRED,"PROPERTY_TRUE");
    //        SET_ITEM_PROPERTY('FATACR_DIRORP',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_DIRORP', "INSERT_ALLOWED","PROPERTY_ON"); 
    //   
    //       SET_ITEM_PROPERTY('FATACR_ESTORP',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_ESTORP',REQUIRED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_ESTORP',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_ESTORP', "INSERT_ALLOWED","PROPERTY_ON"); 
    //   
    //       SET_ITEM_PROPERTY('FATACR_CIUORP',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_CIUORP',REQUIRED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_CIUORP',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_CIUORP', "INSERT_ALLOWED","PROPERTY_ON"); 
    //       
    //      SHOW_VIEW('C_SOCIOSIMP');
    //     GO_ITEM('SETFATCACCR.FATACR_FACTIN');
    //      EXECUTE_QUERY;
    //     ELSIF (VBOTON = 2) THEN
    //          :SETSOCIOS.SOCIOS_STFUSA := 'NO'; 
    //        SET_ITEM_PROPERTY('FATACR_FACTIN',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('FATACR_GRPFAM',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('FATACR_PORGRF',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('FATACR_PAIORP',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('FATACR_DIRORP',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('FATACR_ESTORP',REQUIRED,"PROPERTY_FALSE");
    //       SET_ITEM_PROPERTY('FATACR_CIUORP',REQUIRED,"PROPERTY_FALSE");
    //     END IF;
    //     END IF;
    //     
    //   END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosStfusa_whenListChanged() {
        console.log("Entering SEFCRETEJ_setsocios_sociosStfusa_whenListChanged");
        let VBOTON: number = null;
        if (this.SETSOCIOS.SOCIOS_STFUSA == "SI") {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ESTA SEGURO QUE ESTE ACCIONISTA TRIBUTA FISCALMENTE EN USA?", "SI", "NO", null, VBOTON);
            if (VBOTON == 1) {
                {

                    let W_IMPFAT: null = null;
                    let W_EMPCOB: null = null;
                    let W_TIPEMP: null = null;
                    // construct payload
                    let payload1 = new Map();
                    payload1.set("TERCOD", this.TERMAN01.TERCOD);
                    // call REST API
                    const result1 = await Rest.post("/sefcretej_setsocios/sefcretej_setsocios_sociosstfusa_whenlistchanged_query1", payload1);
                    // get values from result
                    W_IMPFAT = result1[0].get("W_IMPFAT");
                    W_EMPCOB = result1[0].get("W_EMPCOB");
                    if (result1 == null || result1.length == 0) {

                        W_IMPFAT = null;
                        W_EMPCOB = null;
                    }

                    if (W_IMPFAT == "NO") {
                        let result2 = new Map();
                        try {

                            // construct payload
                            let payload2 = new Map();
                            payload2.set("TERCOD", this.TERMAN01.TERCOD);
                            payload2.set("TERTID", this.TERMAN01.TERTID);
                            // call REST API
                            const result2 = await Rest.post("/sefcretej_setsocios/sefcretej_setsocios_sociosstfusa_whenlistchanged_query2", payload2);
                            // get values from result
                            W_TIPEMP = result2[0].get("W_TIPEMP");
                        } catch (ex) {

                            W_TIPEMP = null;
                        }

                        if (W_EMPCOB == "NO") {
                            if (W_TIPEMP != "PB") {
                                // construct payload
                                let payload3 = new Map();
                                // payload3.TERCOD = : TERCOD;
                                // call REST API
                                const result3 = await Rest.post("/sefcretej_setsocios/sefcretej_setsocios_sociosstfusa_whenlistchanged_query3", payload3);
                            }
                        }
                    }
                }

                this.oracleFormsBuiltins.set_item_property("FATACR_FACTIN", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_FACTIN", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_FACTIN", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_FACTIN", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_GRPFAM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_GRPFAM", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_GRPFAM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_GRPFAM", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_PAIORP", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_PAIORP", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_PAIORP", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_PAIORP", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_DIRORP", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_DIRORP", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_DIRORP", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_DIRORP", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_ESTORP", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_ESTORP", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_ESTORP", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_ESTORP", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_CIUORP", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_CIUORP", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FATACR_CIUORP", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FATACR_CIUORP", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.show_view("C_SOCIOSIMP");
                this.oracleFormsBuiltins.go_item("SETFATCACCR.FATACR_FACTIN");
                this.oracleFormsBuiltins.execute_query();
            }
            else if (VBOTON == 2) {
                this.SETSOCIOS.SOCIOS_STFUSA = "NO";
                this.oracleFormsBuiltins.set_item_property("FATACR_FACTIN", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FATACR_GRPFAM", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FATACR_PAIORP", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FATACR_DIRORP", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FATACR_ESTORP", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("FATACR_CIUORP", "REQUIRED", "PROPERTY_FALSE");
            }
        }
        console.log("Exiting SEFCRETEJ_setsocios_sociosStfusa_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :SETSOCIOS.SOCIOS_SOTIDO = 'NI' THEN
    //   SET_ITEM_PROPERTY('SETSOCIOS.SOCIOS_PRIAPE',ENABLED,"PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('SETSOCIOS.SOCIOS_SEGAPE',ENABLED,"PROPERTY_FALSE");
    // ELSE
    //  SET_ITEM_PROPERTY('SETSOCIOS.SOCIOS_PRIAPE',ENABLED,"PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('SETSOCIOS.SOCIOS_SEGAPE',ENABLED,"PROPERTY_TRUE");
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosSotido_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosSotido_whenValidateItem");
        if (this.SETSOCIOS.SOCIOS_SOTIDO == "NI") {
            this.oracleFormsBuiltins.set_item_property("SETSOCIOS.SOCIOS_PRIAPE", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("SETSOCIOS.SOCIOS_SEGAPE", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("SETSOCIOS.SOCIOS_PRIAPE", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SETSOCIOS.SOCIOS_SEGAPE", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting SEFCRETEJ_setsocios_sociosSotido_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETSOCIOS.SOCIOS_CODSOC IS NOT NULL THEN
    // DECLARE
    // -----------------------------------
    // -- CURSORES
    // -----------------------------------
    // CURSOR SOCIOS IS
    // SELECT  SOCIOS_PRINCI  V_SOCIOS
    //   FROM SETSOCIOS
    // WHERE SOCIOS_CODSOC = :SOCIOS_CODSOC
    //  AND  SOCIOS_PRINCI <> :TERMAN01.TERCOD;
    // -----------------------------------
    // -- VARIABLES
    // -----------------------------------
    //  T_RESPUESTA NUMBER;
    // -----------------------------------
    // BEGIN
    //  PVALTER(:SETSOCIOS.SOCIOS_CODSOC);
    //  BEGIN
    //   SELECT DECODE (TERPER,'N',TERAPE||' '||TERNOM,TERAPE)
    //     INTO :SOCIOS_NOMBRE
    //     FROM TER
    //     WHERE TERCOD=:SOCIOS_CODSOC;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //  END;
    //  
    //  FOR ACT IN SOCIOS LOOP 
    //     LIB$ALERTA('MENSAJE','TERCERO '||:SOCIOS_CODSOC||' YA EXISTE COMO SOCIO DEL TERCERO '||ACT.V_SOCIOS ,NULL,NULL,NULL,T_RESPUESTA);
    //  END LOOP;
    // END; 
    // -- ENVIA AL CAMPO ESTADO EN ACTIVO SI ESTE ESTA NULO.
    // IF :SETSOCIOS.SOCIO_ESTADO IS NULL THEN
    //  :SETSOCIOS.SOCIO_ESTADO := 'A';
    // END IF;
    //  END IF;-- ENCIERRA EL PRINCIPAL SI EL REGISTRO NO ES NULO.; END;
    //#endregion
    async SEFCRETEJ_setsocios_sociosCodsoc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setsocios_sociosCodsoc_whenValidateItem");
        if ((this.SETSOCIOS.SOCIOS_CODSOC != null)) {
            {

                let T_RESPUESTA: number = null;
                // SEFCRETEJ_PVALTER(this.SETSOCIOS.SOCIOS_CODSOC);
                // construct payload
                let payload1 = new Map();
                // payload1.set("SOCIOS_CODSOC", SOCIOS_CODSOC);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setsocios/sefcretej_setsocios_socioscodsoc_whenvalidateitem_query1", payload1);
                // get values from result
                // SOCIOS_NOMBRE = result1[0].get("SOCIOS_NOMBRE");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE .....", null, null, null, T_RESPUESTA);
                }

            }

            if ((this.SETSOCIOS.SOCIO_ESTADO == null)) {
                this.SETSOCIOS.SOCIO_ESTADO = "A";
            }
        }
        console.log("Exiting SEFCRETEJ_setsocios_sociosCodsoc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF (:this.PARAMETER.get("TER_CTRL") <> 'C') THEN
    // :SETFATCACCR.FATACR_CODTPR := :SETSOCIOS.SOCIOS_TERIDENT;
    // :SETFATCACCR.FATACR_CODTER := :SETSOCIOS.SOCIOS_CODSOC;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_setfatcaccr_whenNewRecordInstance");
        if (this.PARAMETER.get("TER_CTRL") != "C") {
            this.SETFATCACCR.FATACR_CODTPR = this.SETSOCIOS.SOCIOS_TERIDENT;
            this.SETFATCACCR.FATACR_CODTER = this.SETSOCIOS.SOCIOS_CODSOC;
        }
        console.log("Exiting SEFCRETEJ_setfatcaccr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN
    //  
    //  IF (:SETFATCACCR.FATACR_PAIORP IS NOT NULL) THEN
    //   --DETALLE PAIS
    //   BEGIN
    //      SELECT TDPDES 
    //       INTO :SETFATCACCR.ACRDES_PAIOP
    //        FROM TDP
    //       WHERE TDCODFA = :SETFATCACCR.FATACR_PAIORP;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFATCACCR.ACRDES_PAIOP:=NULL;
    //   END;
    //   
    //   --DETALLE ESTADO
    //   BEGIN
    //      SELECT DEPDES
    //       INTO :SETFATCACCR.ACRDESC_ESTOP
    //        FROM DEP
    //       WHERE TDECOF = :SETFATCACCR.FATACR_PAIORP
    //         AND DEPCOD = :SETFATCACCR.FATACR_ESTORP;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFATCACCR.ACRDESC_ESTOP:=NULL;
    //   END;
    //  
    //    --DETALLE CIUDAD 
    //   BEGIN
    //      SELECT TDCDES
    //       INTO :SETFATCACCR.ACRDESC_CIUOP
    //        FROM TDC
    //       WHERE TDCPAI = :SETFATCACCR.FATACR_PAIORP
    //         AND TDCDEP = :SETFATCACCR.FATACR_ESTORP
    //         AND TDCCOD = :SETFATCACCR.FATACR_CIUORP;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFATCACCR.ACRDESC_CIUOP:=NULL;
    //   END;
    //    
    //   
    //  END IF;
    //  
    // 
    // END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_postQuery() {
        console.log("Entering SEFCRETEJ_setfatcaccr_postQuery");
        if ((this.SETFATCACCR.FATACR_PAIORP != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("FATACR_PAIORP", this.SETFATCACCR.FATACR_PAIORP);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setfatcaccr/sefcretej_setfatcaccr_postquery_query1", payload1);
                // get values from result
                this.SETFATCACCR.ACRDES_PAIOP = result1[0].get("SETFATCACCR.ACRDES_PAIOP");
            } catch (ex) {

                this.SETFATCACCR.ACRDES_PAIOP = null;
            }

            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                payload2.set("FATACR_PAIORP", this.SETFATCACCR.FATACR_PAIORP);
                payload2.set("FATACR_ESTORP", this.SETFATCACCR.FATACR_ESTORP);
                // call REST API
                const result2 = await Rest.post("/sefcretej_setfatcaccr/sefcretej_setfatcaccr_postquery_query2", payload2);
                // get values from result
                this.SETFATCACCR.ACRDESC_ESTOP = result2[0].get("SETFATCACCR.ACRDESC_ESTOP");
            } catch (ex) {

                this.SETFATCACCR.ACRDESC_ESTOP = null;
            }

            let result3 = new Map();
            try {

                // construct payload
                let payload3 = new Map();
                payload3.set("FATACR_PAIORP", this.SETFATCACCR.FATACR_PAIORP);
                payload3.set("FATACR_ESTORP", this.SETFATCACCR.FATACR_ESTORP);
                payload3.set("FATACR_CIUORP", this.SETFATCACCR.FATACR_CIUORP);
                // call REST API
                const result3 = await Rest.post("/sefcretej_setfatcaccr/sefcretej_setfatcaccr_postquery_query3", payload3);
                // get values from result
                this.SETFATCACCR.ACRDESC_CIUOP = result3[0].get("SETFATCACCR.ACRDESC_CIUOP");
            } catch (ex) {

                this.SETFATCACCR.ACRDESC_CIUOP = null;
            }

        }
        console.log("Exiting SEFCRETEJ_setfatcaccr_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SETFATCACCR.FATACR_CIUORP'); END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_fatacrEstorp_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfatcaccr_fatacrEstorp_keyNextItem");
        this.oracleFormsBuiltins.go_item("SETFATCACCR.FATACR_CIUORP");
        console.log("Exiting SEFCRETEJ_setfatcaccr_fatacrEstorp_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    // IF (:SETFATCACCR.FATACR_PORGRF IS NOT NULL) THEN
    //  IF (:SETFATCACCR.FATACR_PORGRF > 100) THEN
    //   LIB$ALERTA('MENSAJE','EL PORCENTAJE DE PARTICIPACION DEL GRUPO FAMILIAR NO DEBE EXCEDER EL 100%.','ACEPTAR',NULL,NULL, VBOTON);
    //   :SETFATCACCR.FATACR_PORGRF := NULL;
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_fatacrPorgrf_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfatcaccr_fatacrPorgrf_whenValidateItem");
        let VBOTON: number = null;
        if ((this.SETFATCACCR.FATACR_PORGRF != null)) {
            if (this.SETFATCACCR.FATACR_PORGRF > 100) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE PARTICIPACION DEL GRUPO FAMILIAR NO DEBE EXCEDER EL 100%.", "ACEPTAR", null, null, VBOTON);
                this.SETFATCACCR.FATACR_PORGRF = null;
            }
        }
        console.log("Exiting SEFCRETEJ_setfatcaccr_fatacrPorgrf_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SETFATCACCR.FATACR_DIRORP'); END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_fatacrPaiorp_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfatcaccr_fatacrPaiorp_keyNextItem");
        this.oracleFormsBuiltins.go_item("SETFATCACCR.FATACR_DIRORP");
        console.log("Exiting SEFCRETEJ_setfatcaccr_fatacrPaiorp_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  
    // BEGIN
    // 
    //  IF :SETFATCACCR.FATACR_GRPFAM NOT IN ('SI','NO') THEN
    //     LIB$ALERTA('MENSAJE','VALOR INGRESADO NO VÁLIDO. SI / NO',NULL, NULL,NULL, T_RESPUESTA);
    //   
    //   ELSIF :SETFATCACCR.FATACR_GRPFAM = '' OR :SETFATCACCR.FATACR_GRPFAM IS NULL THEN
    //      LIB$ALERTA('MENSAJE','EL CAMPO ES OBLIGATORIO.',NULL, NULL,NULL, T_RESPUESTA);
    //  
    //  END IF;
    //  
    // END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_fatacrGrpfam_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfatcaccr_fatacrGrpfam_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["SI", "NO"].indexOf(this.SETFATCACCR.FATACR_GRPFAM) != -1) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VALOR INGRESADO NO VÁLIDO. SI / NO", null, null, null, T_RESPUESTA);
        }
        else if ((this.SETFATCACCR.FATACR_GRPFAM == "" || (this.SETFATCACCR.FATACR_GRPFAM == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO ES OBLIGATORIO.", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting SEFCRETEJ_setfatcaccr_fatacrGrpfam_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF (:SETFATCACCR.FATACR_GRPFAM = 'SI') THEN
    //          SET_ITEM_PROPERTY('FATACR_PORGRF',ENABLED,"PROPERTY_TRUE");
    //          SET_ITEM_PROPERTY('FATACR_PORGRF',REQUIRED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FATACR_PORGRF',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FATACR_PORGRF', "INSERT_ALLOWED","PROPERTY_ON");
    //       
    //    ELSE 
    //        SET_ITEM_PROPERTY('FATACR_PORGRF',ENABLED,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('FATACR_PORGRF',REQUIRED,"PROPERTY_FALSE");
    //        
    //        IF (:SETFATCACCR.FATACR_PORGRF IS NOT NULL) THEN
    //         :SETFATCACCR.FATACR_PORGRF := NULL;
    //        END IF;
    //        
    //   END IF; END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_fatacrGrpfam_whenListChanged() {
        console.log("Entering SEFCRETEJ_setfatcaccr_fatacrGrpfam_whenListChanged");
        if (this.SETFATCACCR.FATACR_GRPFAM == "SI") {
            this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "REQUIRED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "INSERT_ALLOWED", "PROPERTY_ON");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FATACR_PORGRF", "REQUIRED", "PROPERTY_FALSE");
            if ((this.SETFATCACCR.FATACR_PORGRF != null)) {
                this.SETFATCACCR.FATACR_PORGRF = null;
            }
        }
        console.log("Exiting SEFCRETEJ_setfatcaccr_fatacrGrpfam_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON      NUMBER;
    // BEGIN
    // 
    //    IF (:SETFATCACCR.FATACR_GRPFAM = 'SI' AND :SETFATCACCR.FATACR_PORGRF IS NULL) THEN
    //     LIB$ALERTA('MENSAJE','DEBE INGRESAR EL PORCENTAJE DE PATICIPACIÓN','ACEPTAR',NULL,NULL, VBOTON);
    //     GO_ITEM('FATACR_PORGRF');
    //    
    //    ELSIF(:SETFATCACCR.FATACR_GRPFAM = '' OR :SETFATCACCR.FATACR_GRPFAM IS NULL) THEN
    //     LIB$ALERTA('MENSAJE','DEBE INGRESAR SI PERTENECE A GRUPO FAMILIAR.','ACEPTAR',NULL,NULL, VBOTON);
    //     GO_ITEM('FATACR_GRPFAM');
    //     
    //    ELSE
    //     COMMIT;
    //     SHOW_VIEW('C_ACCIONISTAS');
    //     GO_ITEM('SOCIOS_TERIDENT');
    //     HIDE_VIEW('C_SOCIOSIMP');
    //    END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_btnSalir_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_setfatcaccr_btnSalir_whenButtonPressed");
        let VBOTON: number = null;
        if ((this.SETFATCACCR.FATACR_GRPFAM == "SI" && (this.SETFATCACCR.FATACR_PORGRF == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR EL PORCENTAJE DE PATICIPACIÓN", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FATACR_PORGRF");
        }
        else if ((this.SETFATCACCR.FATACR_GRPFAM == "" || (this.SETFATCACCR.FATACR_GRPFAM == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR SI PERTENECE A GRUPO FAMILIAR.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FATACR_GRPFAM");
        }
        else {
            this.oracleFormsBuiltins.show_view("C_ACCIONISTAS");
            this.oracleFormsBuiltins.go_item("SOCIOS_TERIDENT");
            this.oracleFormsBuiltins.hide_view("C_SOCIOSIMP");
        }
        console.log("Exiting SEFCRETEJ_setfatcaccr_btnSalir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SETFATCACCR.BTN_SALIR'); END;
    //#endregion
    async SEFCRETEJ_setfatcaccr_fatacrCiuorp_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfatcaccr_fatacrCiuorp_keyNextItem");
        this.oracleFormsBuiltins.go_item("SETFATCACCR.BTN_SALIR");
        console.log("Exiting SEFCRETEJ_setfatcaccr_fatacrCiuorp_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :SETHIACEC.ACTIV_ECO  := FRM$DESC_CIUU(:SETHIACEC.HIACEC_CICOD); END;
    //#endregion
    async SEFCRETEJ_sethiacec_postQuery() {
        console.log("Entering SEFCRETEJ_sethiacec_postQuery");
        // this.SETHIACEC.ACTIV_ECO = FRM$DESC_CIUU(SETHIACEC.HIACEC_CICOD);
        console.log("Exiting SEFCRETEJ_sethiacec_postQuery");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('PAGE_HIST_ACTIECO');
    // GO_ITEM('ENTMAN02.ENT_ACTCIU'); END;
    //#endregion
    async SEFCRETEJ_sethiacec_dev_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_sethiacec_dev_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("PAGE_HIST_ACTIECO");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_ACTCIU");
        console.log("Exiting SEFCRETEJ_sethiacec_dev_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async SEFCRETEJ_dco_keyNxtblk() {
        console.log("Entering SEFCRETEJ_dco_keyNxtblk");
        console.log("Exiting SEFCRETEJ_dco_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF  :DCO.DCO_TIPVIV IS NOT NULL THEN
    //       BEGIN
    //         SELECT TIPVIV_DESCRI
    //           INTO :DCO.VIVIENDA 
    //         FROM SETTIPVIV
    //         WHERE TIPVIV_CODIGO = :DCO.DCO_TIPVIV;
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //          :DCO.VIVIENDA := NULL;
    //       END;
    //   ELSE
    //     :DCO.VIVIENDA := NULL;
    //   END IF;
    // 
    //   IF :DCO.DCO_ACTLAB IS NOT NULL THEN
    //      :DCO.ACTECO := FRM$DESC_CIUU(:DCO.DCO_ACTLAB);
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_dco_postQuery() {
        console.log("Entering SEFCRETEJ_dco_postQuery");
        if ((this.DCO.DCO_TIPVIV != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("DCO_TIPVIV", this.DCO.DCO_TIPVIV);
            // call REST API
            const result1 = await Rest.post("/sefcretej_dco/sefcretej_dco_postquery_query1", payload1);
            // get values from result
            this.DCO.VIVIENDA = result1[0].get("DCO.VIVIENDA");
            if (result1 == null || result1.length == 0) {

                this.DCO.VIVIENDA = null;
            }

        }
        else {
            this.DCO.VIVIENDA = null;
        }
        if ((this.DCO.DCO_ACTLAB != null)) {
            // this.DCO.ACTECO = FRM$DESC_CIUU(this.DCO.DCO_ACTLAB);
        }
        console.log("Exiting SEFCRETEJ_dco_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('SETOPINT');
    // HIDE_VIEW('FINANC_PROVV'); END;
    //#endregion
    async SEFCRETEJ_dco_volver_whenMouseClick() {
        console.log("Entering SEFCRETEJ_dco_volver_whenMouseClick");
        this.oracleFormsBuiltins.go_block("SETOPINT");
        this.oracleFormsBuiltins.hide_view("FINANC_PROVV");
        console.log("Exiting SEFCRETEJ_dco_volver_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async SEFCRETEJ_dco_dcosala_keyNextItem() {
        console.log("Entering SEFCRETEJ_dco_dcosala_keyNextItem");
        console.log("Exiting SEFCRETEJ_dco_dcosala_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //  IF :DCO.DCO_FUNPUB NOT IN ('S','N') THEN
    //    LIB$ALERTA('MENSAJE','VALOR INGRESADO NO VÁLIDO PARA EL CAMPO. S=SÍ / N=NO',NULL, NULL, NULL, T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoFunpub_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoFunpub_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.DCO.DCO_FUNPUB) != -1) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VALOR INGRESADO NO VÁLIDO PARA EL CAMPO. S=SÍ / N=NO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoFunpub_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  
    // BEGIN
    //   IF :DCO.DCO_TOTHJOS NOT BETWEEN 0 AND 40 THEN
    //    LIB$ALERTA('MENSAJE','EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoTothjos_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoTothjos_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.DCO.DCO_TOTHJOS) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoTothjos_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  
    // BEGIN
    //   IF :DCO.DCO_RAG4HJS NOT BETWEEN 0 AND 10 THEN
    //    LIB$ALERTA('MENSAJE','EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoRag4hjs_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoRag4hjs_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.DCO.DCO_RAG4HJS) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoRag4hjs_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  
    // BEGIN
    //   IF :DCO.DCO_RAG2HJS NOT BETWEEN 0 AND 10 THEN
    //    LIB$ALERTA('MENSAJE','EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoRag2hjs_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoRag2hjs_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.DCO.DCO_RAG2HJS) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoRag2hjs_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :DCO.DCOVEHI NOT IN ('S','N') THEN
    //     MESSAGE('TIPO DE INDICADOR PARA VEHICULO NO VALIDO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_dco_dcovehi_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcovehi_whenValidateItem");
        if (["S", "N"].indexOf(this.DCO.DCOVEHI) != -1) {
            this.oracleFormsBuiltins.message("TIPO DE INDICADOR PARA VEHICULO NO VALIDO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcovehi_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async SEFCRETEJ_dco_dcoegr_keyNextItem() {
        console.log("Entering SEFCRETEJ_dco_dcoegr_keyNextItem");
        console.log("Exiting SEFCRETEJ_dco_dcoegr_keyNextItem");
    }

    //#region PLSQL
    // BEGIN PVALTER(:DCO.DCO_NITLAB); END;
    //#endregion
    async SEFCRETEJ_dco_dcoNitlab_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoNitlab_whenValidateItem");
        // SEFCRETEJ_PVALTER(this.DCO.DCO_NITLAB);
        console.log("Exiting SEFCRETEJ_dco_dcoNitlab_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN PVALTER(:DCO.DCO_NITLAB); END;
    //#endregion
    async SEFCRETEJ_dco_dcoNitlab_postTextItem() {
        console.log("Entering SEFCRETEJ_dco_dcoNitlab_postTextItem");
        // SEFCRETEJ_PVALTER(this.DCO.DCO_NITLAB);
        console.log("Exiting SEFCRETEJ_dco_dcoNitlab_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  
    // BEGIN
    //   IF :DCO.DCO_RAG1HJS NOT BETWEEN 0 AND 10 THEN
    //    LIB$ALERTA('MENSAJE','EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoRag1hjs_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoRag1hjs_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.DCO.DCO_RAG1HJS) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoRag1hjs_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN 
    //   IF :DCO.DCOTIPE NOT IN ('PB','PV','MX') THEN
    //      MESSAGE('TIPO DE EMPRESA NO VALIDO');
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_dco_dcotipe_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcotipe_whenValidateItem");
        if (["PB", "PV", "MX"].indexOf(this.DCO.DCOTIPE) != -1) {
            this.oracleFormsBuiltins.message("TIPO DE EMPRESA NO VALIDO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcotipe_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTEMA'); END;
    //#endregion
    async SEFCRETEJ_dco_dcoemp_keyNextItem() {
        console.log("Entering SEFCRETEJ_dco_dcoemp_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTEMA");
        console.log("Exiting SEFCRETEJ_dco_dcoemp_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :DCO.DCOVIVI NOT IN ('S','N') THEN
    //     MESSAGE('TIPO DE INDICADOR PARA VIVIENDA NO VALIDO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_dco_dcovivi_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcovivi_whenValidateItem");
        if (["S", "N"].indexOf(this.DCO.DCOVIVI) != -1) {
            this.oracleFormsBuiltins.message("TIPO DE INDICADOR PARA VIVIENDA NO VALIDO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcovivi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //  IF :DCO.DCO_RECPUB NOT IN ('S','N') THEN
    //    LIB$ALERTA('MENSAJE','VALOR INGRESADO NO VÁLIDO PARA EL CAMPO. S=SÍ / N=NO',NULL, NULL, NULL, T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoRecpub_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoRecpub_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (["S", "N"].indexOf(this.DCO.DCO_RECPUB) != -1) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VALOR INGRESADO NO VÁLIDO PARA EL CAMPO. S=SÍ / N=NO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoRecpub_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    //  
    // BEGIN
    //   IF :DCO.DCO_RAG3HJS NOT BETWEEN 0 AND 10 THEN
    //    LIB$ALERTA('MENSAJE','EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //  
    //#endregion
    async SEFCRETEJ_dco_dcoRag3hjs_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_dcoRag3hjs_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.DCO.DCO_RAG3HJS) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL VAOLR INGRESADO NO ESTÁ DENTRO DEL RANGO PERMITIDO (0 A 10)", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_dcoRag3hjs_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :DCO.DCOVIVI NOT IN ('S','N') THEN
    //     MESSAGE('TIPO DE INDICADOR PARA VIVIENDA NO VALIDO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_dco_vivienda_whenValidateItem() {
        console.log("Entering SEFCRETEJ_dco_vivienda_whenValidateItem");
        if (["S", "N"].indexOf(this.DCO.DCOVIVI) != -1) {
            this.oracleFormsBuiltins.message("TIPO DE INDICADOR PARA VIVIENDA NO VALIDO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_dco_vivienda_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //    IF :SETTERXCOM.CXT_CODIGO <> :SETTERXCOM1.CXT_CODIGO THEN
    //    INSERT INTO SETTERXCH (CXT_CODIGO,CXT_FECREG,CXT_NIT,CXT_USER, CXT_DEPCOM)
    //     VALUES(:SETTERXCOM.CXT_CODIGO,SYSDATE,:TERMAN01.TERCOD,USER, :SETTERXCOM.CXT_DEPCOM);
    //    END IF;
    // END;
    //#endregion
    async SEFCRETEJ_setterxcom_whenValidateRecord() {
        console.log("Entering SEFCRETEJ_setterxcom_whenValidateRecord");
        if (this.SETTERXCOM.CXT_CODIGO != this.SETTERXCOM1.CXT_CODIGO) {
            // construct payload
            let payload1 = new Map();
            // payload1.CXT_CODIGO = : SETTERXCOM.CXT_CODIGO;
            // payload1.TERCOD = : TERMAN01.TERCOD;
            // payload1.CXT_DEPCOM = : SETTERXCOM.CXT_DEPCOM;
            // call REST API
            const result1 = await Rest.post("/sefcretej_setterxcom/sefcretej_setterxcom_whenvalidaterecord_query1", payload1);
        }
        console.log("Exiting SEFCRETEJ_setterxcom_whenValidateRecord");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT COM_NOMBRE, COM_APELLIDO
    //     INTO :SETTERXCOM.NOMBRE, :SETTERXCOM.APELLIDO
    //   FROM SETCOMCIA
    // WHERE COM_CODIGO =:SETTERXCOM.CXT_CODIGO
    // AND      COM_CODUNI =  '001'; -- ARQUITECTURA RDMV
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //  :SETTERXCOM.NOMBRE:='NO DEFINIDO';
    // END;
    //#endregion
    async SEFCRETEJ_setterxcom_postQuery() {
        console.log("Entering SEFCRETEJ_setterxcom_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CXT_CODIGO", this.SETTERXCOM.CXT_CODIGO);
        // call REST API
        const result1 = await Rest.post("/sefcretej_setterxcom/sefcretej_setterxcom_postquery_query1", payload1);
        // get values from result
        this.SETTERXCOM.NOMBRE = result1[0].get("SETTERXCOM.NOMBRE");
        this.SETTERXCOM.APELLIDO = result1[0].get("SETTERXCOM.APELLIDO");
        if (result1 == null || result1.length == 0) {

            this.SETTERXCOM.NOMBRE = "NO DEFINIDO";
        }

        console.log("Exiting SEFCRETEJ_setterxcom_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('SETTERXCOM1');
    // EXECUTE_QUERY;
    // SHOW_VIEW('PAGE_HIST_CIAL'); END;
    //#endregion
    async SEFCRETEJ_setterxcom_histCial_whenMouseClick() {
        console.log("Entering SEFCRETEJ_setterxcom_histCial_whenMouseClick");
        this.oracleFormsBuiltins.go_block("SETTERXCOM1");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.show_view("PAGE_HIST_CIAL");
        console.log("Exiting SEFCRETEJ_setterxcom_histCial_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('FAMMAN01'); END;
    //#endregion
    async SEFCRETEJ_setterxcom_cxtCodigo_keyPrevItem() {
        console.log("Entering SEFCRETEJ_setterxcom_cxtCodigo_keyPrevItem");
        this.oracleFormsBuiltins.go_block("FAMMAN01");
        console.log("Exiting SEFCRETEJ_setterxcom_cxtCodigo_keyPrevItem");
    }

    //#region PLSQL
    // GO_ITEM('FAMTRL');
    // HIDE_VIEW('PAGE_CIAL');
    // 
    // :FAMMAN01.FAMNOM := :SETTERXCOM.CXT_CODIGO;
    // 
    // BEGIN
    //     BEGIN
    //     SELECT DISTINCT (T.CXT_CODIGO)
    //     INTO  :FAMMAN01.FAMD2
    //     FROM SETTERXCOM T, SETCOMCIA S
    //     WHERE T.CXT_CODIGO = :SETTERXCOM.CXT_CODIGO AND
    //        T.CXT_CODIGO = S.COM_CODIGO
    //        AND S.COM_CODUNI = '001'; --ARQUITECTURA RDMV 
    //     EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.FAMD2:='';
    //    END;
    //    
    //    BEGIN
    //     SELECT DISTINCT(S.COM_NOMBRE||' '||S.COM_APELLIDO) 
    //     INTO  :FAMMAN01.FAMD1
    //     FROM SETTERXCOM T, SETCOMCIA S
    //     WHERE T.CXT_CODIGO = :SETTERXCOM.CXT_CODIGO AND
    //        T.CXT_CODIGO = S.COM_CODIGO
    //        AND S.COM_CODUNI = '001'; --ARQUITECTURA RDMV
    //     EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.FAMD1:='';
    //    END;
    //    
    //    BEGIN
    //     SELECT DISTINCT (O.OFIDES)
    //     INTO  :FAMMAN01.FAMD3
    //     FROM SETTERXCOM T, SETCOMCIA S, OFI O
    //     WHERE T.CXT_CODIGO = :SETTERXCOM.CXT_CODIGO AND
    //        T.CXT_CODIGO = S.COM_CODIGO AND
    //          S.COM_OFC = O.OFICOD
    //          AND S.COM_CODUNI = '001'; --ARQUITECTURA RDMV
    //     EXCEPTION WHEN NO_DATA_FOUND THEN :FAMMAN01.FAMD3:='';
    //    END;   
    // END;
    //#endregion
    async SEFCRETEJ_setterxcom_volv_whenMouseClick() {
        console.log("Entering SEFCRETEJ_setterxcom_volv_whenMouseClick");
        console.log("Exiting SEFCRETEJ_setterxcom_volv_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('SETTERXCOM');
    // HIDE_VIEW('PAGE_HIST_CIAL'); END;
    //#endregion
    async SEFCRETEJ_setterxcom_volver_whenMouseClick() {
        console.log("Entering SEFCRETEJ_setterxcom_volver_whenMouseClick");
        this.oracleFormsBuiltins.go_block("SETTERXCOM");
        this.oracleFormsBuiltins.hide_view("PAGE_HIST_CIAL");
        console.log("Exiting SEFCRETEJ_setterxcom_volver_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('FAMMAN01'); END;
    //#endregion
    async SEFCRETEJ_setterxcom_cxtDepcom_keyPrevItem() {
        console.log("Entering SEFCRETEJ_setterxcom_cxtDepcom_keyPrevItem");
        this.oracleFormsBuiltins.go_block("FAMMAN01");
        console.log("Exiting SEFCRETEJ_setterxcom_cxtDepcom_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN SELECT DISTINCT COM_NOMBRE, COM_APELLIDO
    //          INTO :SETTERXCOM1.NOMBRE, :SETTERXCOM1.APELLIDO
    //          FROM SETCOMCIA
    //          WHERE COM_CODIGO =:SETTERXCOM1.CXT_CODIGO         
    //      AND      COM_CODUNI =  '001'; --ARQUITECTURA RDMV
    //       EXCEPTION WHEN NO_DATA_FOUND THEN :SETTERXCOM1.NOMBRE:='NO DEFINIDO'; END;
    //#endregion
    async SEFCRETEJ_setterxcom1_postQuery() {
        console.log("Entering SEFCRETEJ_setterxcom1_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("CXT_CODIGO", this.SETTERXCOM1.CXT_CODIGO);
        // call REST API
        const result1 = await Rest.post("/sefcretej_setterxcom1/sefcretej_setterxcom1_postquery_query1", payload1);
        // get values from result
        this.SETTERXCOM1.NOMBRE = result1[0].get("SETTERXCOM1.NOMBRE");
        this.SETTERXCOM1.APELLIDO = result1[0].get("SETTERXCOM1.APELLIDO");
        if (result1 == null || result1.length == 0) {

            this.SETTERXCOM1.NOMBRE = "NO DEFINIDO";
        }

        console.log("Exiting SEFCRETEJ_setterxcom1_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('FAMMAN01'); END;
    //#endregion
    async SEFCRETEJ_setterxcom1_cxtDepcom_keyPrevItem() {
        console.log("Entering SEFCRETEJ_setterxcom1_cxtDepcom_keyPrevItem");
        this.oracleFormsBuiltins.go_block("FAMMAN01");
        console.log("Exiting SEFCRETEJ_setterxcom1_cxtDepcom_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN
    //    SELECT JURTER_DESCRI
    //    INTO :SETTERXJU.TERXJU_DESCRIPCION 
    //    FROM  OPS$SEGUI.SETTJURTER
    //    WHERE :SETTERXJU.TERXJU_CONSEC = JURTER_CONSEC;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //  :SETTERXJU.TERXJU_DESCRIPCION := NULL;
    // END;
    //#endregion
    async SEFCRETEJ_setterxju_postQuery() {
        console.log("Entering SEFCRETEJ_setterxju_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("TERXJU_CONSEC", this.SETTERXJU.TERXJU_CONSEC);
        // call REST API
        const result1 = await Rest.post("/sefcretej_setterxju/sefcretej_setterxju_postquery_query1", payload1);
        // get values from result
        this.SETTERXJU.TERXJU_DESCRIPCION = result1[0].get("SETTERXJU.TERXJU_DESCRIPCION");
        if (result1 == null || result1.length == 0) {

            this.SETTERXJU.TERXJU_DESCRIPCION = null;
        }

        console.log("Exiting SEFCRETEJ_setterxju_postQuery");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R2';
    //  :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //  SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= :TERMAN01.TERDIR;
    //  :GLOBAL.DIR1:= 'DIR'; END;
    //#endregion
    async SEFCRETEJ_setterxju_terxjuDescripcion_keyNextItem() {
        console.log("Entering SEFCRETEJ_setterxju_terxjuDescripcion_keyNextItem");
        this.RADIOS.RREPORTES = "R2";
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
        this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        // this.GLOBAL.CADENA = this.TERMAN01.TERDIR;
        // this.GLOBAL.DIR1 = "DIR";
        console.log("Exiting SEFCRETEJ_setterxju_terxjuDescripcion_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF ERROR_TYPE= 'FRM' AND ERROR_CODE = 41026 THEN
    // NULL;
    // ELSIF  ERROR_TYPE= 'FRM' AND ERROR_CODE = 40508 THEN
    //  NULL;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_direcciones_onError() {
        console.log("Entering SEFCRETEJ_direcciones_onError");
        if ((this.oracleFormsBuiltins.error_type() == "FRM" && this.oracleFormsBuiltins.error_code() == 41026)) {
        }
        else if ((this.oracleFormsBuiltins.error_type() == "FRM" && this.oracleFormsBuiltins.error_code() == 40508)) {
        }
        console.log("Exiting SEFCRETEJ_direcciones_onError");
    }

    async SEFCRETEJ_direcciones_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // LIB$ALERTA('MENSAJE','ACEPTA SOLO NUMEROS!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_numer_whenMouseDown() {
        console.log("Entering SEFCRETEJ_direcciones_numer_whenMouseDown");
        let T_RESPUESTA: number = null;
        // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ACEPTA SOLO NUMEROS!!!", null, null, null, T_RESPUESTA);
        console.log("Exiting SEFCRETEJ_direcciones_numer_whenMouseDown");
    }

    //#region PLSQL
    // DECLARE
    //  V_VALOR  VARCHAR2(200);
    //  
    // BEGIN
    //  
    //  SELECT (PLSQLBuiltins.string_length(:GLOBAL.CADENA)-1)
    //     INTO V_VALOR
    //  FROM DUAL;
    // :DIRECCIONES.CADENA:= SUBSTR(:GLOBAL.CADENA,1,V_VALOR); 
    // :GLOBAL.CADENA:=:DIRECCIONES.CADENA;
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_borrar_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direcciones_borrar_whenButtonPressed");
        let V_VALOR: string = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("CADENA", this.GLOBAL.CADENA);
        // call REST API
        const result1 = await Rest.post("/sefcretej_direcciones/sefcretej_direcciones_borrar_whenbuttonpressed_query1", payload1);
        // get values from result
        V_VALOR = result1[0].get("V_VALOR");
        // this.DIRECCIONES.CADENA = PLSQLBuiltins.substr(GLOBAL.CADENA, 1, V_VALOR);
        // this.GLOBAL.CADENA = this.DIRECCIONES.CADENA;
        console.log("Exiting SEFCRETEJ_direcciones_borrar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  RETURN_LOV := SHOW_LOV('LOV_DIR1');
    //  END;
    //#endregion
    async SEFCRETEJ_direcciones_dir1_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direcciones_dir1_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_DIR1");
        console.log("Exiting SEFCRETEJ_direcciones_dir1_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  RETURN_LOV BOOLEAN;
    // BEGIN
    //  RETURN_LOV := SHOW_LOV('LOV_COMPLEMENT');
    //  END;
    //#endregion
    async SEFCRETEJ_direcciones_btComplement_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direcciones_btComplement_whenButtonPressed");
        let RETURN_LOV: boolean = null;
        RETURN_LOV = this.oracleFormsBuiltins.show_lov("LOV_COMPLEMENT");
        console.log("Exiting SEFCRETEJ_direcciones_btComplement_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // LIB$ALERTA('MENSAJE','ACEPTA SOLO NUMEROS!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_numer3_whenMouseDown() {
        console.log("Entering SEFCRETEJ_direcciones_numer3_whenMouseDown");
        let T_RESPUESTA: number = null;
        // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ACEPTA SOLO NUMEROS!!!", null, null, null, T_RESPUESTA);
        console.log("Exiting SEFCRETEJ_direcciones_numer3_whenMouseDown");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // LIB$ALERTA('MENSAJE','ACEPTA SOLO LETRAS A-Z!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_nomenclat_whenMouseDown() {
        console.log("Entering SEFCRETEJ_direcciones_nomenclat_whenMouseDown");
        let T_RESPUESTA: number = null;
        // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ACEPTA SOLO LETRAS A-Z!!!", null, null, null, T_RESPUESTA);
        console.log("Exiting SEFCRETEJ_direcciones_nomenclat_whenMouseDown");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    // IF :NOMENCLAT NOT IN ('A', 'B','C','D', 'E','F','G', 'H','I','J', 'K','L', 'M','N','O', 'P','Q','R', 'S','T','U', 'V','W','X', 'Y','Z') 
    //  THEN
    //  LIB$ALERTA('MENSAJE','ERROR VALIDE LETRA',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF; 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_nomenclat_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direcciones_nomenclat_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].indexOf(NOMENCLAT) != -1) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ERROR VALIDE LETRA", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_direcciones_nomenclat_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // LIB$ALERTA('MENSAJE','ACEPTA SOLO NUMEROS!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_numer2_whenMouseDown() {
        console.log("Entering SEFCRETEJ_direcciones_numer2_whenMouseDown");
        let T_RESPUESTA: number = null;
        // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ACEPTA SOLO NUMEROS!!!", null, null, null, T_RESPUESTA);
        console.log("Exiting SEFCRETEJ_direcciones_numer2_whenMouseDown");
    }

    //#region PLSQL
    // BEGIN -- RETORNAR AL ITEM SIGUIENTE, UNA VEZ LIMPIE LO ALMACENADO EN DIRECCIONES.
    // 
    // IF :GLOBAL.DIR1= 'DIR' THEN
    //  GO_ITEM('TERMAN01.TERTEL');
    // :GLOBAL.CADENA:=NULL; 
    // HIDE_VIEW('DIRECCIONES'); 
    //  ELSIF :GLOBAL.DIR1= 'DIR1' THEN
    //  GO_ITEM('ENTMAN02.ENTTEL');
    //   :GLOBAL.CADENA:=NULL; 
    // HIDE_VIEW('DIRECCIONES'); 
    // ELSIF :GLOBAL.DIR1= 'DIR2' THEN
    //  GO_ITEM('ENTMAN02.ENTTEL1');
    //   :GLOBAL.CADENA:=NULL; 
    // HIDE_VIEW('DIRECCIONES');  
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_direcciones_dev_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direcciones_dev_whenButtonPressed");
        // if (GLOBAL.DIR1 == "DIR") {
        //     this.oracleFormsBuiltins.go_item("TERMAN01.TERTEL");
        //     // this.GLOBAL.CADENA = null;
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        // else if (GLOBAL.DIR1 == "DIR1") {
        //     this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL");
        //     // this.GLOBAL.CADENA = null;
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        // else if (GLOBAL.DIR1 == "DIR2") {
        //     this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL1");
        //     // this.GLOBAL.CADENA = null;
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        console.log("Exiting SEFCRETEJ_direcciones_dev_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    // IF :NOMENCLAT2 NOT IN ('A', 'B','C','D', 'E','F','G', 'H','I','J', 'K','L', 'M','N','O', 'P','Q','R', 'S','T','U', 'V','W','X', 'Y','Z') 
    //  THEN
    //  LIB$ALERTA('MENSAJE','ERROR VALIDE LETRA',NULL,NULL,NULL,T_RESPUESTA); 
    //     RAISE FORM_TRIGGER_FAILURE;
    // END IF; 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_nomenclat2_whenValidateItem() {
        console.log("Entering SEFCRETEJ_direcciones_nomenclat2_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].indexOf(NOMENCLAT2) != -1) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ERROR VALIDE LETRA", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_direcciones_nomenclat2_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    // BEGIN 
    // LIB$ALERTA('MENSAJE','ACEPTA SOLO LETRAS A-Z!!!',NULL,NULL,NULL, T_RESPUESTA); 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_nomenclat2_whenMouseDown() {
        console.log("Entering SEFCRETEJ_direcciones_nomenclat2_whenMouseDown");
        let T_RESPUESTA: number = null;
        // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ACEPTA SOLO LETRAS A-Z!!!", null, null, null, T_RESPUESTA);
        console.log("Exiting SEFCRETEJ_direcciones_nomenclat2_whenMouseDown");
    }

    //#region PLSQL
    // BEGIN
    //  
    //  IF  :GLOBAL.DIR1= 'DIR1' AND
    //   FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //    :ENTMAN02.ENTDIR:=:DIRECCIONES.CADENA;
    //     :DIRECCIONES.CADENA:=NULL;
    //     GO_ITEM('ENTMAN02.ENTTEL');
    //     HIDE_VIEW('DIRECCIONES');
    //     ELSIF  :GLOBAL.DIR1= 'DIR2' AND
    //   FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //     :ENTMAN02.ENTDIR1:=:DIRECCIONES.CADENA;
    //     :DIRECCIONES.CADENA:=NULL;
    //     GO_ITEM('ENTMAN02.ENTTEL1');
    //     HIDE_VIEW('DIRECCIONES');
    //    ELSIF  :GLOBAL.DIR1= 'DIR' AND
    //     FRM$ALERTA_SINO ('ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....') = 1 THEN
    //     :TERMAN01.TERDIR:=:DIRECCIONES.CADENA;
    //     :DIRECCIONES.CADENA:=NULL;
    //     GO_ITEM('TERMAN01.TERTEL');
    //     HIDE_VIEW('DIRECCIONES');
    //      END IF; 
    // 
    // END;
    //#endregion
    async SEFCRETEJ_direcciones_grabar_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_direcciones_grabar_whenButtonPressed");
        // if ((GLOBAL.DIR1 == "DIR1" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //     this.ENTMAN02.ENTDIR = this.DIRECCIONES.CADENA;
        //     this.DIRECCIONES.CADENA = null;
        //     this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL");
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        // else if ((GLOBAL.DIR1 == "DIR2" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //     this.ENTMAN02.ENTDIR1 = this.DIRECCIONES.CADENA;
        //     this.DIRECCIONES.CADENA = null;
        //     this.oracleFormsBuiltins.go_item("ENTMAN02.ENTTEL1");
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        // else if ((GLOBAL.DIR1 == "DIR" && FRM$ALERTA_SINO("ESTA SEGURO DE MODIFICAR O CREAR LA DIRECCIÓN AHORA ?.....") == 1)) {
        //     this.TERMAN01.TERDIR = this.DIRECCIONES.CADENA;
        //     this.DIRECCIONES.CADENA = null;
        //     this.oracleFormsBuiltins.go_item("TERMAN01.TERTEL");
        //     this.oracleFormsBuiltins.hide_view("DIRECCIONES");
        // }
        console.log("Exiting SEFCRETEJ_direcciones_grabar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF (:SETFACTAJUR.FACJUR_PAISCO IS NULL ) THEN
    // BEGIN 
    //  SELECT TDCODFA, TDPDES 
    //   INTO :SETFACTAJUR.FACJUR_PAISCO, :SETFACTAJUR.PAIS_CONS
    //    FROM TDP
    //    WHERE TDPACO = :ENTMAN02.ENT_PAIOPE;
    // 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //   :SETFACTAJUR.FACJUR_PAISCO:= NULL;
    //   :SETFACTAJUR.PAIS_CONS:= NULL;
    // END;
    // 
    // 
    // :SETFACTAJUR.FACJUR_CODTER := :TERMAN01.TERCOD;
    // 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_setfactajur_whenNewRecordInstance");
        if ((this.SETFACTAJUR.FACJUR_PAISCO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("ENT_PAIOPE", this.ENTMAN02.ENT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_whennewrecordinstance_query1", payload1);
                // get values from result
                this.SETFACTAJUR.FACJUR_PAISCO = result1[0].get("SETFACTAJUR.FACJUR_PAISCO");
                this.SETFACTAJUR.PAIS_CONS = result1[0].get("SETFACTAJUR.PAIS_CONS");
            } catch (ex) {

                this.SETFACTAJUR.FACJUR_PAISCO = null;
                this.SETFACTAJUR.PAIS_CONS = null;
            }

            this.SETFACTAJUR.FACJUR_CODTER = this.TERMAN01.TERCOD;
        }
        console.log("Exiting SEFCRETEJ_setfactajur_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R1';
    //         COMMIT; 
    //         
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //          SHOW_VIEW ('C_BASICOS');  
    //             
    //          IF(:this.PARAMETER.get("CONS_TER") IS NULL) THEN
    //       GO_BLOCK('TERMAN01');
    //       EXECUTE_QUERY;
    //          
    //          ELSE
    //           SET_BLOCK_PROPERTY('TERMAN01', "DEFAULT_WHERE", 'TERCOD = ''' || NVL(:this.PARAMETER.get("CONS_TER"),:TERMAN01.TERCOD) || '''');
    //       GO_BLOCK('TERMAN01');
    //       EXECUTE_QUERY;
    //      END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_keyNxtblk() {
        console.log("Entering SEFCRETEJ_setfactajur_keyNxtblk");
        this.RADIOS.RREPORTES = "R1";
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.show_view("C_BASICOS");
        if ((this.PARAMETER.get("CONS_TER") == null)) {
            this.oracleFormsBuiltins.go_block("TERMAN01");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.set_block_property("TERMAN01", "DEFAULT_WHERE", "TERCOD = ''" + this.PARAMETER.get("CONS_TER") == null ? this.TERMAN01.TERCOD : this.PARAMETER.get("CONS_TER") + "''");
            this.oracleFormsBuiltins.go_block("TERMAN01");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting SEFCRETEJ_setfactajur_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN IF (:SETFACTAJUR.FACJUR_PAISCO IS NULL ) THEN
    // BEGIN 
    //  SELECT TDCODFA, TDPDES 
    //   INTO :SETFACTAJUR.FACJUR_PAISCO, :SETFACTAJUR.PAIS_CONS
    //    FROM TDP
    //    WHERE TDPACO = :ENTMAN02.ENT_PAIOPE;
    // 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //   :SETFACTAJUR.FACJUR_PAISCO:= NULL;
    //   :SETFACTAJUR.PAIS_CONS:= NULL;
    // END;
    // 
    // 
    // :SETFACTAJUR.FACJUR_CODTER := :TERMAN01.TERCOD;
    // 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_whenCreateRecord() {
        console.log("Entering SEFCRETEJ_setfactajur_whenCreateRecord");
        if ((this.SETFACTAJUR.FACJUR_PAISCO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("ENT_PAIOPE", this.ENTMAN02.ENT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_whencreaterecord_query1", payload1);
                // get values from result
                this.SETFACTAJUR.FACJUR_PAISCO = result1[0].get("SETFACTAJUR.FACJUR_PAISCO");
                this.SETFACTAJUR.PAIS_CONS = result1[0].get("SETFACTAJUR.PAIS_CONS");
            } catch (ex) {

                this.SETFACTAJUR.FACJUR_PAISCO = null;
                this.SETFACTAJUR.PAIS_CONS = null;
            }

            this.SETFACTAJUR.FACJUR_CODTER = this.TERMAN01.TERCOD;
        }
        console.log("Exiting SEFCRETEJ_setfactajur_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //  
    //  IF (:SETFACTAJUR.FACJUR_PAISCO IS NOT NULL) THEN
    //   --DETALLE PAIS CONSTITUCION
    //   BEGIN
    //      SELECT TDPDES 
    //       INTO :SETFACTAJUR.PAIS_CONS
    //        FROM TDP
    //       WHERE TDCODFA = :SETFACTAJUR.FACJUR_PAISCO;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFACTAJUR.PAIS_CONS:=NULL;
    //   END;
    //   
    //   --DETALLE PAIS DE CASA MATRIZ
    //   BEGIN
    //      SELECT TDPDES 
    //       INTO :SETFACTAJUR.PAIS_CM
    //        FROM TDP
    //       WHERE TDCODFA = :SETFACTAJUR.FACJUR_PAISCM;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFACTAJUR.PAIS_CM:=NULL;
    //   END;
    //   --DETALLE ESTADO
    //   BEGIN
    //      SELECT DEPDES
    //       INTO :SETFACTAJUR.ESTADO_CM
    //        FROM DEP
    //       WHERE TDECOF = :SETFACTAJUR.FACJUR_PAISCM
    //         AND DEPCOD = :SETFACTAJUR.FACJUR_ESTOCM;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFACTAJUR.ESTADO_CM:=NULL;
    //   END;
    //  
    //    --DETALLE CIUDAD 
    //   BEGIN
    //      SELECT TDCDES
    //       INTO :SETFACTAJUR.CIUDAD_CM
    //        FROM TDC
    //       WHERE TDCPAI = :SETFACTAJUR.FACJUR_PAISCM
    //         AND TDCDEP = :SETFACTAJUR.FACJUR_ESTOCM
    //         AND TDCCOD = :SETFACTAJUR.FACJUR_CIUOCM;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     :SETFACTAJUR.CIUDAD_CM:=NULL;
    //   END;
    //   
    //   
    //   --HABILITA CAMPOS
    //   IF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI') THEN
    //    SET_ITEM_PROPERTY('FACJUR_PAISCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('PAIS_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('PAIS_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('PAIS_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('ESTADO_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',ENABLED,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_DIREXT', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('ESTADO_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('ESTADO_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('CIUDAD_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //   END IF;
    //   
    //   IF (:SETFACTAJUR.FACJUR_ENTVIG = 'SI') THEN
    //    SET_ITEM_PROPERTY('FACJUR_NUMENV',ENABLED,"PROPERTY_TRUE");
    //       SET_ITEM_PROPERTY('FACJUR_NUMENV',UPDATEABLE,"ATTR_ON");
    //       SET_ITEM_PROPERTY('FACJUR_NUMENV', "INSERT_ALLOWED","PROPERTY_ON");
    //     END IF;
    //   
    //  END IF;
    //  
    // 
    // END;
    //#endregion
    async SEFCRETEJ_setfactajur_postQuery() {
        console.log("Entering SEFCRETEJ_setfactajur_postQuery");
        if ((this.SETFACTAJUR.FACJUR_PAISCO != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("FACJUR_PAISCO", this.SETFACTAJUR.FACJUR_PAISCO);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_postquery_query1", payload1);
                // get values from result
                this.SETFACTAJUR.PAIS_CONS = result1[0].get("SETFACTAJUR.PAIS_CONS");
            } catch (ex) {

                this.SETFACTAJUR.PAIS_CONS = null;
            }

            let result2 = new Map();
            try {

                // construct payload
                let payload2 = new Map();
                payload2.set("FACJUR_PAISCM", this.SETFACTAJUR.FACJUR_PAISCM);
                // call REST API
                const result2 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_postquery_query2", payload2);
                // get values from result
                this.SETFACTAJUR.PAIS_CM = result2[0].get("SETFACTAJUR.PAIS_CM");
            } catch (ex) {

                this.SETFACTAJUR.PAIS_CM = null;
            }

            let result3 = new Map();
            try {

                // construct payload
                let payload3 = new Map();
                payload3.set("FACJUR_PAISCM", this.SETFACTAJUR.FACJUR_PAISCM);
                payload3.set("FACJUR_ESTOCM", this.SETFACTAJUR.FACJUR_ESTOCM);
                // call REST API
                const result3 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_postquery_query3", payload3);
                // get values from result
                this.SETFACTAJUR.ESTADO_CM = result3[0].get("SETFACTAJUR.ESTADO_CM");
            } catch (ex) {

                this.SETFACTAJUR.ESTADO_CM = null;
            }

            let result4 = new Map();
            try {

                // construct payload
                let payload4 = new Map();
                payload4.set("FACJUR_PAISCM", this.SETFACTAJUR.FACJUR_PAISCM);
                payload4.set("FACJUR_ESTOCM", this.SETFACTAJUR.FACJUR_ESTOCM);
                payload4.set("FACJUR_CIUOCM", this.SETFACTAJUR.FACJUR_CIUOCM);
                // call REST API
                const result4 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_postquery_query4", payload4);
                // get values from result
                this.SETFACTAJUR.CIUDAD_CM = result4[0].get("SETFACTAJUR.CIUDAD_CM");
            } catch (ex) {

                this.SETFACTAJUR.CIUDAD_CM = null;
            }

            if (this.SETFACTAJUR.FACJUR_SUOEMP == "SI") {
                this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("PAIS_CM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("PAIS_CM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("PAIS_CM", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "INSERT_ALLOWED", "PROPERTY_ON");
                this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "INSERT_ALLOWED", "PROPERTY_ON");
            }
            if (this.SETFACTAJUR.FACJUR_ENTVIG == "SI") {
                this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "ENABLED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "UPDATEABLE", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "INSERT_ALLOWED", "PROPERTY_ON");
            }
        }
        console.log("Exiting SEFCRETEJ_setfactajur_postQuery");
    }

    //#region PLSQL
    // BEGIN IF (:SETFACTAJUR.FACJUR_PAISCO IS NOT NULL) THEN
    //   
    //  DECLARE 
    //    W_EXISTE NUMBER(1);
    //    T_RESPUESTA     NUMBER;
    //   BEGIN
    //    SELECT COUNT(*)
    //      INTO W_EXISTE
    //       FROM OPS$SEGUI.TDP
    //      WHERE TDCODFA = :SETFACTAJUR.FACJUR_PAISCO;
    //      
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurPaisco_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurPaisco_whenValidateItem");
        if ((this.SETFACTAJUR.FACJUR_PAISCO != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("FACJUR_PAISCO", this.SETFACTAJUR.FACJUR_PAISCO);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_facjurpaisco_whenvalidateitem_query1", payload1);
                // get values from result
                W_EXISTE = result1[0].get("W_EXISTE");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setfactajur_facjurPaisco_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --VALIDA SI ES OBLIGATORIO EL TAX.
    // PU_VALIDA_TAX('N');
    // 
    //  IF (:SETFACTAJUR.FACJUR_PAISCM IS NOT NULL) THEN
    //   
    //  DECLARE 
    //    W_EXISTE NUMBER(1);
    //    T_RESPUESTA     NUMBER;
    //   BEGIN
    //    SELECT COUNT(*)
    //      INTO W_EXISTE
    //       FROM OPS$SEGUI.TDP
    //      WHERE TDCODFA = :SETFACTAJUR.FACJUR_PAISCM;
    //      
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurPaiscm_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurPaiscm_whenValidateItem");
        // SEFCRETEJ_PU_VALIDA_TAX("N");
        if ((this.SETFACTAJUR.FACJUR_PAISCM != null)) {
            {

                let W_EXISTE: number = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("FACJUR_PAISCM", this.SETFACTAJUR.FACJUR_PAISCM);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setfactajur/sefcretej_setfactajur_facjurpaiscm_whenvalidateitem_query1", payload1);
                // get values from result
                W_EXISTE = result1[0].get("W_EXISTE");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_setfactajur_facjurPaiscm_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('FACJUR_DIREXT'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurPaiscm_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurPaiscm_keyNextItem");
        this.oracleFormsBuiltins.go_item("FACJUR_DIREXT");
        console.log("Exiting SEFCRETEJ_setfactajur_facjurPaiscm_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('FACJUR_RAZCMA'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurCiuocm_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurCiuocm_keyNextItem");
        this.oracleFormsBuiltins.go_item("FACJUR_RAZCMA");
        console.log("Exiting SEFCRETEJ_setfactajur_facjurCiuocm_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --VALIDA SI ES OBLIGATORIO EL TAX.
    // PU_VALIDA_TAX('N'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_paisCons_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfactajur_paisCons_whenValidateItem");
        // SEFCRETEJ_PU_VALIDA_TAX("N");
        console.log("Exiting SEFCRETEJ_setfactajur_paisCons_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --VALIDA SI ES OBLIGATORIO EL TAX.
    // PU_VALIDA_TAX('N'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_paisCm_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfactajur_paisCm_whenValidateItem");
        // SEFCRETEJ_PU_VALIDA_TAX("N");
        console.log("Exiting SEFCRETEJ_setfactajur_paisCm_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('FACJUR_ESTOCM'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurDirext_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurDirext_keyNextItem");
        this.oracleFormsBuiltins.go_item("FACJUR_ESTOCM");
        console.log("Exiting SEFCRETEJ_setfactajur_facjurDirext_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('FACJUR_CIUOCM'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurEstocm_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurEstocm_keyNextItem");
        this.oracleFormsBuiltins.go_item("FACJUR_CIUOCM");
        console.log("Exiting SEFCRETEJ_setfactajur_facjurEstocm_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --VALIDACION PARA INGRESO DEL CODIGO GIN.
    // IF(:SETFACTAJUR.FACJUR_ENTVIG = 'NO') THEN
    //   
    //      SET_ITEM_PROPERTY('FACJUR_NUMENV',ENABLED,"PROPERTY_FALSE");  
    //      
    //      IF (:SETFACTAJUR.FACJUR_NUMENV IS NOT NULL) THEN
    //       :SETFACTAJUR.FACJUR_NUMENV := NULL;
    //      END IF;
    //      
    //      GO_ITEM('SETFACTAJUR.FACJUR_CODTER');
    //   ELSE
    //      SET_ITEM_PROPERTY('FACJUR_NUMENV',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_NUMENV',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_NUMENV', "INSERT_ALLOWED","PROPERTY_ON");
    //      
    //      GO_ITEM('SETFACTAJUR.FACJUR_NUMENV');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurEntvig_whenListChanged() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurEntvig_whenListChanged");
        if (this.SETFACTAJUR.FACJUR_ENTVIG == "NO") {
            this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "ENABLED", "PROPERTY_FALSE");
            if ((this.SETFACTAJUR.FACJUR_NUMENV != null)) {
                this.SETFACTAJUR.FACJUR_NUMENV = null;
            }
            this.oracleFormsBuiltins.go_item("SETFACTAJUR.FACJUR_CODTER");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_NUMENV", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.go_item("SETFACTAJUR.FACJUR_NUMENV");
        }
        console.log("Exiting SEFCRETEJ_setfactajur_facjurEntvig_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    // BEGIN
    //  
    //  
    //  --VALIDA SI ES OBLIGATORIO EL TAX.PARAMENTRO EN M PARA  MOSTRAR MENSAJE DE VALIDACION.
    //   PU_VALIDA_TAX('M');
    //   
    //  IF (:SETFACTAJUR.FACJUR_SUOEMP = '' OR :SETFACTAJUR.FACJUR_SUOEMP IS NULL ) THEN
    //    LIB$ALERTA('MENSAJE','DEBE INGRESAR LA INFORMACION DE SUCURSAL, FILIAL O SUBSIDIARIA DE OTRA EMPRESA.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_SUOEMP');
    //   
    //  ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_PAISCM IS NULL ) THEN
    //    LIB$ALERTA('MENSAJE','DEBE INGRESAR EL PAÍS DE CONSTITUCIÓN DE LA CASA MATRIZ.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_PAISCM');
    //   
    //  ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_DIREXT IS NULL ) THEN
    //     LIB$ALERTA('MENSAJE','DEBE INGRESAR LA DIRECCIÓN DE LA CASA MATRIZ.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_DIREXT');
    //      
    //  ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_ESTOCM IS NULL ) THEN
    //     LIB$ALERTA('MENSAJE','DEBE INGRESAR EL ESTADO DE LA CASA MATRIZ.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_ESTOCM');
    //   
    //  ELSIF(:SETFACTAJUR.FACJUR_SUOEMP = 'SI' AND :SETFACTAJUR.FACJUR_CIUOCM IS NULL ) THEN
    //    LIB$ALERTA('MENSAJE','DEBE INGRESAR LA CIUDAD DE LA CASA MATRIZ.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_CIUOCM');
    //      
    //  ELSIF (:SETFACTAJUR.FACJUR_EMPCOB = '' OR :SETFACTAJUR.FACJUR_EMPCOB IS NULL ) THEN
    //    LIB$ALERTA('MENSAJE','DEBE INGRESAR SI LA EMPRESA COTIZA EN BOLSA.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_EMPCOB');
    //      
    //  ELSIF (:SETFACTAJUR.FACJUR_TRBUSA = '' OR :SETFACTAJUR.FACJUR_TRBUSA IS NULL ) THEN
    //     LIB$ALERTA('MENSAJE','DEBE INGRESAR SI LA EMPRESA TRIBUTA EN USA.','ACEPTAR',NULL,NULL, VBOTON);
    //      GO_ITEM('FACJUR_TRBUSA');
    //      
    //  ELSIF (:SETFACTAJUR.FACJUR_ENTVIG = '' OR :SETFACTAJUR.FACJUR_ENTVIG IS NULL) THEN
    //   LIB$ALERTA('MENSAJE','DEBE INGRESAR SI LA EMPRESA ES VIGILADA POR LA SUPERINTENDENCIA FINANCIERA.','ACEPTAR',NULL,NULL, VBOTON);
    //     GO_ITEM('FACJUR_ENTVIG');
    //     
    //  ELSIF (:SETFACTAJUR.FACJUR_ENTVIG = 'SI' AND :SETFACTAJUR.FACJUR_NUMENV IS NULL ) THEN
    //   LIB$ALERTA('MENSAJE','DEBE INGRESAR LA IDENTIFICACION DE ENTIDAD VIGILADA (GIN).','ACEPTAR',NULL,NULL, VBOTON);
    //     GO_ITEM('FACJUR_NUMENV');
    //     
    //   ELSE
    //   --VALIDA SI ES IMPACTADO POR FACTA
    //    PU_VALIDA_FACTA;
    //   END IF;
    //  END;
    //#endregion
    async SEFCRETEJ_setfactajur_validaFatca_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_setfactajur_validaFatca_whenButtonPressed");
        let VBOTON: number = null;
        // SEFCRETEJ_PU_VALIDA_TAX("M");
        if ((this.SETFACTAJUR.FACJUR_SUOEMP == "" || (this.SETFACTAJUR.FACJUR_SUOEMP == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LA INFORMACION DE SUCURSAL, FILIAL O SUBSIDIARIA DE OTRA EMPRESA.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_SUOEMP");
        }
        else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_PAISCM == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR EL PAÍS DE CONSTITUCIÓN DE LA CASA MATRIZ.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_PAISCM");
        }
        else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_DIREXT == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LA DIRECCIÓN DE LA CASA MATRIZ.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_DIREXT");
        }
        else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_ESTOCM == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR EL ESTADO DE LA CASA MATRIZ.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_ESTOCM");
        }
        else if ((this.SETFACTAJUR.FACJUR_SUOEMP == "SI" && (this.SETFACTAJUR.FACJUR_CIUOCM == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LA CIUDAD DE LA CASA MATRIZ.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_CIUOCM");
        }
        else if ((this.SETFACTAJUR.FACJUR_EMPCOB == "" || (this.SETFACTAJUR.FACJUR_EMPCOB == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR SI LA EMPRESA COTIZA EN BOLSA.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_EMPCOB");
        }
        else if ((this.SETFACTAJUR.FACJUR_TRBUSA == "" || (this.SETFACTAJUR.FACJUR_TRBUSA == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR SI LA EMPRESA TRIBUTA EN USA.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_TRBUSA");
        }
        else if ((this.SETFACTAJUR.FACJUR_ENTVIG == "" || (this.SETFACTAJUR.FACJUR_ENTVIG == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR SI LA EMPRESA ES VIGILADA POR LA SUPERINTENDENCIA FINANCIERA.", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_ENTVIG");
        }
        else if ((this.SETFACTAJUR.FACJUR_ENTVIG == "SI" && (this.SETFACTAJUR.FACJUR_NUMENV == null))) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LA IDENTIFICACION DE ENTIDAD VIGILADA (GIN).", "ACEPTAR", null, null, VBOTON);
            this.oracleFormsBuiltins.go_item("FACJUR_NUMENV");
        }
        else {
            // SEFCRETEJ_PU_VALIDA_FACTA();
        }
        console.log("Exiting SEFCRETEJ_setfactajur_validaFatca_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --VALIDA SI ES OBLIGATORIO EL TAX.
    // PU_VALIDA_TAX('N');
    // GO_ITEM('FACJUR_FACTIN'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurTrbusa_whenListChanged() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurTrbusa_whenListChanged");
        // SEFCRETEJ_PU_VALIDA_TAX("N");
        this.oracleFormsBuiltins.go_item("FACJUR_FACTIN");
        console.log("Exiting SEFCRETEJ_setfactajur_facjurTrbusa_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF(:SETFACTAJUR.FACJUR_SUOEMP = 'NO') THEN
    //       
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('PAIS_CM',ENABLED,"PROPERTY_FALSE");
    //      
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('ESTADO_CM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',ENABLED,"PROPERTY_FALSE");
    // 
    //   IF (:SETFACTAJUR.FACJUR_PAISCM IS NOT NULL) THEN
    //     
    //    :SETFACTAJUR.FACJUR_PAISCM := NULL;
    //    :SETFACTAJUR.PAIS_CM := NULL;
    //    :SETFACTAJUR.FACJUR_DIREXT := NULL;
    //    :SETFACTAJUR.FACJUR_ESTOCM := NULL;
    //    :SETFACTAJUR.ESTADO_CM := NULL;
    //    :SETFACTAJUR.FACJUR_CIUOCM := NULL;
    //    :SETFACTAJUR.CIUDAD_CM := NULL;
    //   END IF;
    //     
    //     --VALIDA SI ES OBLIGATORIO EL TAX.
    //      PU_VALIDA_TAX('N');
    //   
    //     ELSIF (:SETFACTAJUR.FACJUR_SUOEMP = 'SI')THEN
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('PAIS_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('PAIS_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('PAIS_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('ESTADO_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',ENABLED,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_DIREXT', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('ESTADO_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('ESTADO_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('CIUDAD_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //     
    // 
    //   END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurSuoemp_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurSuoemp_whenValidateItem");
        if (this.SETFACTAJUR.FACJUR_SUOEMP == "NO") {
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "ENABLED", "PROPERTY_FALSE");
            if ((this.SETFACTAJUR.FACJUR_PAISCM != null)) {
                this.SETFACTAJUR.FACJUR_PAISCM = null;
                this.SETFACTAJUR.PAIS_CM = null;
                this.SETFACTAJUR.FACJUR_DIREXT = null;
                this.SETFACTAJUR.FACJUR_ESTOCM = null;
                this.SETFACTAJUR.ESTADO_CM = null;
                this.SETFACTAJUR.FACJUR_CIUOCM = null;
                this.SETFACTAJUR.CIUDAD_CM = null;
            }
            // SEFCRETEJ_PU_VALIDA_TAX("N");
        }
        else if (this.SETFACTAJUR.FACJUR_SUOEMP == "SI") {
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "INSERT_ALLOWED", "PROPERTY_ON");
        }
        console.log("Exiting SEFCRETEJ_setfactajur_facjurSuoemp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --VALIDA SI PIDE O NO NOMBRE/RAZÓN SOCIAL CASA MATRIZ EMPRESA. 
    //   IF(:SETFACTAJUR.FACJUR_SUOEMP = 'NO') THEN
    //       
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('PAIS_CM',ENABLED,"PROPERTY_FALSE");
    //      
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('ESTADO_CM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',ENABLED,"PROPERTY_FALSE");
    //      SET_ITEM_PROPERTY('FACJUR_RAZCMA',ENABLED,"PROPERTY_FALSE");
    // 
    //   IF (:SETFACTAJUR.FACJUR_PAISCM IS NOT NULL) THEN
    //     
    //    :SETFACTAJUR.FACJUR_PAISCM := NULL;
    //    :SETFACTAJUR.PAIS_CM := NULL;
    //    :SETFACTAJUR.FACJUR_DIREXT := NULL;
    //    :SETFACTAJUR.FACJUR_ESTOCM := NULL;
    //    :SETFACTAJUR.ESTADO_CM := NULL;
    //    :SETFACTAJUR.FACJUR_CIUOCM := NULL;
    //    :SETFACTAJUR.CIUDAD_CM := NULL;
    //    :SETFACTAJUR.FACJUR_RAZCMA := NULL;
    //   END IF;
    //     
    //     --VALIDA SI ES OBLIGATORIO EL TAX.
    //      PU_VALIDA_TAX('N');
    //      
    //      GO_ITEM('FACJUR_EMPCOB');
    //      
    //   ELSIF (:SETFACTAJUR.FACJUR_SUOEMP = 'SI')THEN
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('PAIS_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_PAISCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('PAIS_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('PAIS_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('ESTADO_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',ENABLED,"PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('FACJUR_RAZCMA',ENABLED,"PROPERTY_TRUE");
    //      
    //     SET_ITEM_PROPERTY('FACJUR_DIREXT',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_DIREXT', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_ESTOCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('ESTADO_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('ESTADO_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_CIUOCM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('CIUDAD_CM',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('CIUDAD_CM', "INSERT_ALLOWED","PROPERTY_ON");
    //      SET_ITEM_PROPERTY('FACJUR_RAZCMA',UPDATEABLE,"ATTR_ON");
    //      SET_ITEM_PROPERTY('FACJUR_RAZCMA', "INSERT_ALLOWED","PROPERTY_ON");
    //     
    //     GO_ITEM('FACJUR_PAISCM');
    //   END IF; END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurSuoemp_whenListChanged() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurSuoemp_whenListChanged");
        if (this.SETFACTAJUR.FACJUR_SUOEMP == "NO") {
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_RAZCMA", "ENABLED", "PROPERTY_FALSE");
            if ((this.SETFACTAJUR.FACJUR_PAISCM != null)) {
                this.SETFACTAJUR.FACJUR_PAISCM = null;
                this.SETFACTAJUR.PAIS_CM = null;
                this.SETFACTAJUR.FACJUR_DIREXT = null;
                this.SETFACTAJUR.FACJUR_ESTOCM = null;
                this.SETFACTAJUR.ESTADO_CM = null;
                this.SETFACTAJUR.FACJUR_CIUOCM = null;
                this.SETFACTAJUR.CIUDAD_CM = null;
                this.SETFACTAJUR.FACJUR_RAZCMA = null;
            }
            // SEFCRETEJ_PU_VALIDA_TAX("N");
            this.oracleFormsBuiltins.go_item("FACJUR_EMPCOB");
        }
        else if (this.SETFACTAJUR.FACJUR_SUOEMP == "SI") {
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_PAISCM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("PAIS_CM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_RAZCMA", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_DIREXT", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_ESTOCM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTADO_CM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_CIUOCM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("CIUDAD_CM", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_RAZCMA", "UPDATEABLE", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("FACJUR_RAZCMA", "INSERT_ALLOWED", "PROPERTY_ON");
            this.oracleFormsBuiltins.go_item("FACJUR_PAISCM");
        }
        console.log("Exiting SEFCRETEJ_setfactajur_facjurSuoemp_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VALIDA_FATCA'); END;
    //#endregion
    async SEFCRETEJ_setfactajur_facjurNumenv_keyNextItem() {
        console.log("Entering SEFCRETEJ_setfactajur_facjurNumenv_keyNextItem");
        this.oracleFormsBuiltins.go_item("VALIDA_FATCA");
        console.log("Exiting SEFCRETEJ_setfactajur_facjurNumenv_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --PY 8400
    // DECLARE
    //  V_TERCERO  VARCHAR2(150);
    // BEGIN
    //   BEGIN
    //   SELECT DECODE(TERPER,'N',TERNOM||' '||TERAPE, NVL(TERPER,TERAPE))
    //    INTO V_TERCERO
    //    FROM TER 
    //    WHERE TERCOD = :TERMAN01.TERCOD;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_TERCERO := NULL;  
    //  END;
    // END;
    // 
    // 
    // --PY 840; END;
    //#endregion
    async SEFCRETEJ_setvehafi_postQuery() {
        console.log("Entering SEFCRETEJ_setvehafi_postQuery");
        let V_TERCERO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("TERCOD", this.TERMAN01.TERCOD);
        // call REST API
        const result1 = await Rest.post("/sefcretej_setvehafi/sefcretej_setvehafi_postquery_query1", payload1);
        // get values from result
        V_TERCERO = result1[0].get("V_TERCERO");
        if (result1 == null || result1.length == 0) {

            V_TERCERO = null;
        }

        console.log("Exiting SEFCRETEJ_setvehafi_postQuery");
    }

    //#region PLSQL
    // BEGIN :SETVEHAFI.VEHAFI_TERCOD :=:ENTMAN02.ENTCOD;
    // :SETVEHAFI.VEHAFI_CODIGO :=:ENTMAN02.ENTCIUU; END;
    //#endregion
    async SEFCRETEJ_setvehafi_preInsert() {
        console.log("Entering SEFCRETEJ_setvehafi_preInsert");
        this.SETVEHAFI.VEHAFI_TERCOD = this.ENTMAN02.ENTCOD;
        this.SETVEHAFI.VEHAFI_CODIGO = this.ENTMAN02.ENTCIUU;
        console.log("Exiting SEFCRETEJ_setvehafi_preInsert");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENT_ACTCIU');
    // HIDE_VIEW('PAGE_DESTINO_VEHICULO'); END;
    //#endregion
    async SEFCRETEJ_setvehafi_dev_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_setvehafi_dev_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_ACTCIU");
        this.oracleFormsBuiltins.hide_view("PAGE_DESTINO_VEHICULO");
        console.log("Exiting SEFCRETEJ_setvehafi_dev_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA       NUMBER;
    // V_EXISTE      VARCHAR2(1); 
    // BEGIN
    // IF :SETVEHAFI.VEHAFI_NITEMP IS NOT NULL THEN
    //  SELECT 'S', DECODE(T.TERPER,'N',T.TERNOM ||' '|| T.TERAPE,NVL(T.TERNOM,T.TERAPE))
    //  INTO V_EXISTE, :SETVEHAFI.VEHAFI_EMPNOM 
    //  FROM TER T
    //  WHERE T.TERCOD = :SETVEHAFI.VEHAFI_NITEMP;
    // END IF; 
    // EXCEPTION WHEN OTHERS THEN
    // LIB$ALERTA('MENSAJE','VERIFIQUE EL TERCERO NO EXISTE',NULL,NULL,NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;     
    // 
    // END;
    //#endregion
    async SEFCRETEJ_setvehafi_vehafiNitemp_whenValidateItem() {
        console.log("Entering SEFCRETEJ_setvehafi_vehafiNitemp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: string = null;
        try {

            if ((this.SETVEHAFI.VEHAFI_NITEMP != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("VEHAFI_NITEMP", this.SETVEHAFI.VEHAFI_NITEMP);
                // call REST API
                const result1 = await Rest.post("/sefcretej_setvehafi/sefcretej_setvehafi_vehafinitemp_whenvalidateitem_query1", payload1);
                // get values from result
                V_EXISTE = result1[0].get("V_EXISTE");
                this.SETVEHAFI.VEHAFI_EMPNOM = result1[0].get("SETVEHAFI.VEHAFI_EMPNOM");
            }
        } catch (ex) {

            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VERIFIQUE EL TERCERO NO EXISTE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting SEFCRETEJ_setvehafi_vehafiNitemp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async SEFCRETEJ_covpiedra_keyNxtblk() {
        console.log("Entering SEFCRETEJ_covpiedra_keyNxtblk");
        console.log("Exiting SEFCRETEJ_covpiedra_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",'');
    // UP;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT", NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async SEFCRETEJ_covpiedra_keyUp() {
        console.log("Entering SEFCRETEJ_covpiedra_keyUp");
        this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", "");
        this.oracleFormsBuiltins.up();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting SEFCRETEJ_covpiedra_keyUp");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",'');
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT));
    // // SYNCHRONIZE; END;
    //#endregion
    async SEFCRETEJ_covpiedra_postQuery() {
        console.log("Entering SEFCRETEJ_covpiedra_postQuery");
        this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", "");
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        // this.oracleFormsBuiltins.synchronize();
        console.log("Exiting SEFCRETEJ_covpiedra_postQuery");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",'');
    // DOWN;
    // SET_ITEM_PROPERTY('PIEDRA_IMAGEN', "TOOLTIP_TEXT",NVL(:PIEDRA_PIEDRA,:PIEDRA_COMENT)); END;
    //#endregion
    async SEFCRETEJ_covpiedra_keyDown() {
        console.log("Entering SEFCRETEJ_covpiedra_keyDown");
        this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", "");
        this.oracleFormsBuiltins.down();
        // this.oracleFormsBuiltins.set_item_property("PIEDRA_IMAGEN", "TOOLTIP_TEXT", PIEDRA_PIEDRA == null ? PIEDRA_COMENT : PIEDRA_PIEDRA);
        console.log("Exiting SEFCRETEJ_covpiedra_keyDown");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async SEFCRETEJ_radios_keyEntqry() {
        console.log("Entering SEFCRETEJ_radios_keyEntqry");
        console.log("Exiting SEFCRETEJ_radios_keyEntqry");
    }

    //#region PLSQL
    // BEGIN NULL; END;
    //#endregion
    async SEFCRETEJ_radios_keyExeqry() {
        console.log("Entering SEFCRETEJ_radios_keyExeqry");
        console.log("Exiting SEFCRETEJ_radios_keyExeqry");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON     NUMBER;
    //  VBOTON2    NUMBER;
    //  VBOTON3    NUMBER;
    //  W_RES_FAT  VARCHAR(2):=NULL;
    //  V_TIENEFAT NUMBER(1);
    // BEGIN
    //  
    //    IF    :RADIOS.RREPORTES='R1' THEN 
    //         COMMIT; 
    //         
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //          SHOW_VIEW ('C_BASICOS');  
    //         
    //         
    //                
    //          IF(:this.PARAMETER.get("CONS_TER") IS NULL) THEN
    //       GO_BLOCK('TERMAN01');
    //       EXECUTE_QUERY;
    //          
    //          ELSE
    //           SET_BLOCK_PROPERTY('TERMAN01', "DEFAULT_WHERE", 'TERCOD = ''' || NVL(:this.PARAMETER.get("CONS_TER"),:TERMAN01.TERCOD) || '''');
    //       GO_BLOCK('TERMAN01');
    //       EXECUTE_QUERY;
    //      END IF;
    //                  
    //    ELSIF :RADIOS.RREPORTES='R2' THEN   
    // 
    //        :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //         SHOW_VIEW ('C_UBICACION'); 
    //         GO_BLOCK('ENTMAN02');
    // 
    //         GO_ITEM('TERMAN01.TERDIR');
    //                 
    //    ELSIF :RADIOS.RREPORTES='R3' THEN
    //        COMMIT; 
    //        :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //         SHOW_VIEW ('C_TERRELA');
    //         GO_BLOCK('FAMMAN01');
    //         EXECUTE_QUERY;
    //                  
    //    ELSIF :RADIOS.RREPORTES='R4' THEN
    // 
    //         :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //         
    //         IF (:TERMAN01.TERCOD IS NOT NULL) THEN
    //         :SETOPINT.OPINT_TERCOD := :TERMAN01.TERCOD;
    //         :SETOPINT.OPINT_TERNOM := :TERMAN01.TERNOM;
    //         :SETOPINT.OPINT_TERAPE := :TERMAN01.TERAPE;
    //         END IF;
    //         
    //         SHOW_VIEW ('C_FINANCIEROS'); 
    //         GO_BLOCK('SETOPINT1');
    //           EXECUTE_QUERY;
    //           GO_ITEM('ENTMAN02.ENTOPI');
    //         
    //    ELSIF :RADIOS.RREPORTES='R5' THEN
    //      COMMIT;
    //       :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //         SHOW_VIEW ('C_TRIBUTARIOS');
    //         GO_ITEM('ENTMAN02.TERIDENT');
    // 
    //    ELSIF :RADIOS.RREPORTES='R6' THEN
    //      COMMIT;
    //         :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    //         SHOW_VIEW ('C_EMPRESARIAL');
    //         GO_ITEM('ENTMAN02.ENTGEC');      
    //         
    //    ELSIF :RADIOS.RREPORTES='R7' THEN
    //      COMMIT;
    //         :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //         
    //         SHOW_VIEW ('C_ACCIONISTAS'); 
    //         GO_ITEM('SETSOCIOS.SOCIOS_CODSOC');  
    //         EXECUTE_QUERY;
    //         
    //     ELSIF :RADIOS.RREPORTES='R8' THEN    
    //      COMMIT;
    //          :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //          
    //       IF (:this.PARAMETER.get("TER_CTRL") <> 'C') THEN 
    //            
    //        IF(:ENTMAN02.ENT_PAIOPE IS NULL) THEN
    //         LIB$ALERTA('MENSAJE','PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO EL PAÍS DE OPERACIÓN.','ACEPTAR',NULL,NULL, VBOTON2); 
    //          
    //          :RADIOS.RREPORTES:='R6';
    //               :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //          GO_ITEM('ENTMAN02.ENT_PAIOPE');
    //          
    //        ELSIF (:DCO.DCOTIPE IS NULL) THEN
    //         
    //         LIB$ALERTA('MENSAJE','PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO LA CLASE DE SOCIEDAD.','ACEPTAR',NULL,NULL, VBOTON2); 
    //          
    //          :RADIOS.RREPORTES:='R6';
    //               :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //          GO_ITEM('DCO.DCOTIPE');
    //          
    //        
    //        ELSE    
    //         
    //         :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //              SHOW_VIEW ('C_FACTA');
    //              GO_ITEM('SETFACTAJUR.FACJUR_CODTER');
    //              EXECUTE_QUERY;
    //        END IF;
    //      
    //          
    //    ELSE
    //       
    //        SELECT COUNT(*)
    //         INTO V_TIENEFAT
    //          FROM SETFACTAJUR S
    //        WHERE S.FACJUR_CODTER = :this.PARAMETER.get("TER_NIT");
    //           
    //        IF V_TIENEFAT = 0 THEN
    //          LIB$ALERTA('MENSAJE','EL TERCERO NO TIENE INFORMACION FATCA.','ACEPTAR',NULL,NULL, VBOTON3); 
    //           :RADIOS.RREPORTES :='R1';
    //           :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //          GO_ITEM('TERMAN01.TERCOD');
    //        ELSE 
    //        :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //           SHOW_VIEW ('C_FACTA');
    //           GO_ITEM('SETFACTAJUR.FACJUR_CODTER');
    //           EXECUTE_QUERY;
    //          END IF;
    //       END IF;  
    //    END IF;
    // END; 
    //  
    //  
    //#endregion
    async SEFCRETEJ_radios_rreportes_whenRadioChanged() {
        console.log("Entering SEFCRETEJ_radios_rreportes_whenRadioChanged");
        let VBOTON: number = null;
        let VBOTON2: number = null;
        let VBOTON3: number = null;
        let W_RES_FAT: string = null;
        let V_TIENEFAT: number = null;
        if (this.RADIOS.RREPORTES == "R1") {
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.oracleFormsBuiltins.show_view("C_BASICOS");
            if ((this.PARAMETER.get("CONS_TER") == null)) {
                this.oracleFormsBuiltins.go_block("TERMAN01");
                this.oracleFormsBuiltins.execute_query();
            }
            else {
                // this.oracleFormsBuiltins.set_block_property("TERMAN01", "DEFAULT_WHERE", "TERCOD = ''" + this.PARAMETER.get("CONS_TER") == null ? TERMAN01.TERCOD : this.PARAMETER.get("CONS_TER") + "''");
                this.oracleFormsBuiltins.go_block("TERMAN01");
                this.oracleFormsBuiltins.execute_query();
            }
        }
        else if (this.RADIOS.RREPORTES == "R2") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.oracleFormsBuiltins.show_view("C_UBICACION");
            this.oracleFormsBuiltins.go_block("ENTMAN02");
            this.oracleFormsBuiltins.go_item("TERMAN01.TERDIR");
        }
        else if (this.RADIOS.RREPORTES == "R3") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.oracleFormsBuiltins.show_view("C_TERRELA");
            this.oracleFormsBuiltins.go_block("FAMMAN01");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (this.RADIOS.RREPORTES == "R4") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            if ((this.TERMAN01.TERCOD != null)) {
                this.SETOPINT.OPINT_TERCOD = this.TERMAN01.TERCOD;
                this.SETOPINT.OPINT_TERNOM = this.TERMAN01.TERNOM;
                this.SETOPINT.OPINT_TERAPE = this.TERMAN01.TERAPE;
            }
            this.oracleFormsBuiltins.show_view("C_FINANCIEROS");
            this.oracleFormsBuiltins.go_block("SETOPINT1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_item("ENTMAN02.ENTOPI");
        }
        else if (this.RADIOS.RREPORTES == "R5") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.oracleFormsBuiltins.show_view("C_TRIBUTARIOS");
            this.oracleFormsBuiltins.go_item("ENTMAN02.TERIDENT");
        }
        else if (this.RADIOS.RREPORTES == "R6") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.oracleFormsBuiltins.show_view("C_EMPRESARIAL");
            this.oracleFormsBuiltins.go_item("ENTMAN02.ENTGEC");
        }
        else if (this.RADIOS.RREPORTES == "R7") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
            this.oracleFormsBuiltins.show_view("C_ACCIONISTAS");
            this.oracleFormsBuiltins.go_item("SETSOCIOS.SOCIOS_CODSOC");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (this.RADIOS.RREPORTES == "R8") {
            // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
            if (this.PARAMETER.get("TER_CTRL") != "C") {
                if ((this.ENTMAN02.ENT_PAIOPE == null)) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO EL PAÍS DE OPERACIÓN.", "ACEPTAR", null, null, VBOTON2);
                    this.RADIOS.RREPORTES = "R6";
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_PAIOPE");
                }
                else if ((this.DCO.DCOTIPE == null)) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "PARA DILIGENCIAR LA INFORMACION FATCA DEBE INGRESAR PRIMERO LA CLASE DE SOCIEDAD.", "ACEPTAR", null, null, VBOTON2);
                    this.RADIOS.RREPORTES = "R6";
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.go_item("DCO.DCOTIPE");
                }
                else {
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.show_view("C_FACTA");
                    this.oracleFormsBuiltins.go_item("SETFACTAJUR.FACJUR_CODTER");
                    this.oracleFormsBuiltins.execute_query();
                }
            }
            else {
                // construct payload
                let payload7 = new Map();
                payload7.set("TER_NIT", this.PARAMETER.get("TER_NIT"));
                // call REST API
                const result7 = await Rest.post("/sefcretej_radios/sefcretej_radios_rreportes_whenradiochanged_query7", payload7);
                // get values from result
                V_TIENEFAT = result7[0].get("V_TIENEFAT");
                if (V_TIENEFAT == 0) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL TERCERO NO TIENE INFORMACION FATCA.", "ACEPTAR", null, null, VBOTON3);
                    this.RADIOS.RREPORTES = "R1";
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.go_item("TERMAN01.TERCOD");
                }
                else {
                    this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                    this.oracleFormsBuiltins.show_view("C_FACTA");
                    this.oracleFormsBuiltins.go_item("SETFACTAJUR.FACJUR_CODTER");
                    this.oracleFormsBuiltins.execute_query();
                }
            }
        }
        console.log("Exiting SEFCRETEJ_radios_rreportes_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN IF(:this.PARAMETER.get("TER_NIT") IS NOT NULL) THEN
    //   GO_BLOCK('TERMAN01');
    //   ENTER_QUERY;
    //   :TERMAN01.TERCOD := :this.PARAMETER.get("TER_NIT");
    //   EXECUTE_QUERY;
    //    MESSAGE('ENTRE AL BLOQUE WHEN NEW ITEM INSTANCE', "ACKNOWLEDGE");
    //    
    //  ELSE
    //   GO_BLOCK('TERMAN01');
    //   NEXT_RECORD;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_radios_rreportes_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_radios_rreportes_whenNewItemInstance");
        if ((this.PARAMETER.get("TER_NIT") != null)) {
            this.oracleFormsBuiltins.go_block("TERMAN01");
            this.oracleFormsBuiltins.enter_query();
            this.TERMAN01.TERCOD = this.PARAMETER.get("TER_NIT");
            this.oracleFormsBuiltins.execute_query();
            // this.oracleFormsBuiltins.message("ENTRE AL BLOQUE WHEN NEW ITEM INSTANCE", "ACKNOWLEDGE");
        }
        else {
            this.oracleFormsBuiltins.go_block("TERMAN01");
            this.oracleFormsBuiltins.next_record();
        }
        console.log("Exiting SEFCRETEJ_radios_rreportes_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN /*IF :TERMAN01.TERDIR  IS NULL THEN 
    //  MESSAGE('INGRESE LA DIRECCION');
    //   RAISE FORM_TRIGGER_FAILURE;
    //   
    // END IF;*/NULL; END;
    //#endregion
    async SEFCRETEJ_zoom_dirZoom2_postTextItem() {
        console.log("Entering SEFCRETEJ_zoom_dirZoom2_postTextItem");
        console.log("Exiting SEFCRETEJ_zoom_dirZoom2_postTextItem");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.TERDIR IS NULL THEN
    //  SHOW_VIEW('DIRECCIONESINTRO');
    //  GO_BLOCK('DIRECCIONESINTRO'); 
    //  :GLOBAL.CADENA:= NULL;
    //  :GLOBAL.DIR1:= 'DIR'; 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_dirZoom2_whenNewItemInstance() {
        console.log("Entering SEFCRETEJ_zoom_dirZoom2_whenNewItemInstance");
        if ((this.TERMAN01.TERDIR == null)) {
            this.oracleFormsBuiltins.show_view("DIRECCIONESINTRO");
            this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
            // this.GLOBAL.CADENA = null;
            // this.GLOBAL.DIR1 = "DIR";
        }
        console.log("Exiting SEFCRETEJ_zoom_dirZoom2_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --IF ERROR_TYPE= 'FRM' AND ERROR_CODE = 40737 THEN
    //  NULL;
    //  --END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_dirZoom3_onError() {
        console.log("Entering SEFCRETEJ_zoom_dirZoom3_onError");
        console.log("Exiting SEFCRETEJ_zoom_dirZoom3_onError");
    }

    //#region PLSQL
    // BEGIN IF :ENTDIR IS NOT NULL THEN
    //  GO_BLOCK('DIRECCIONESINTRO');
    //  :DIRECCIONES.CADENA := :ENTMAN02.ENTDIR;
    //  :DIRECCIONES.HOMOLOGA := :ENTMAN02.ENTDIR;
    //  :GLOBAL.CADENA:= :ENTMAN02.ENTDIR;
    //  :GLOBAL.DIR1:= 'DIR1';
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_dirZoom3_keyNextItem() {
        console.log("Entering SEFCRETEJ_zoom_dirZoom3_keyNextItem");
        // if ((ENTDIR != null)) {
        //     this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        //     this.DIRECCIONES.CADENA = this.ENTMAN02.ENTDIR;
        //     this.DIRECCIONES.HOMOLOGA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.CADENA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.DIR1 = "DIR1";
        // }
        console.log("Exiting SEFCRETEJ_zoom_dirZoom3_keyNextItem");
    }

    //#region PLSQL
    // BEGIN -- IF ERROR_TYPE= 'FRM' AND ERROR_CODE = 40737 THEN
    //  NULL;
    // -- END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_dirZoom4_onError() {
        console.log("Entering SEFCRETEJ_zoom_dirZoom4_onError");
        console.log("Exiting SEFCRETEJ_zoom_dirZoom4_onError");
    }

    //#region PLSQL
    // BEGIN IF :ENTDIR IS NOT NULL THEN
    //  GO_BLOCK('DIRECCIONESINTRO');
    //  :DIRECCIONES.CADENA := :ENTMAN02.ENTDIR;
    //  :DIRECCIONES.HOMOLOGA := :ENTMAN02.ENTDIR;
    //  :GLOBAL.CADENA:= :ENTMAN02.ENTDIR;
    //  :GLOBAL.DIR1:= 'DIR2';
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_dirZoom4_keyNextItem() {
        console.log("Entering SEFCRETEJ_zoom_dirZoom4_keyNextItem");
        // if ((ENTDIR != null)) {
        //     this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        //     this.DIRECCIONES.CADENA = this.ENTMAN02.ENTDIR;
        //     this.DIRECCIONES.HOMOLOGA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.CADENA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.DIR1 = "DIR2";
        // }
        console.log("Exiting SEFCRETEJ_zoom_dirZoom4_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ZOOM.ESTADO_ZOOM4 = 0 THEN
    //  SHOW_VIEW('ZOOM_DIR4');
    //  :ZOOM.DIR_ZOOM4:= :ENTMAN02.ENTDIR;
    //  :ZOOM.ESTADO_ZOOM4 := ;
    // ELSIF :ZOOM.ESTADO_ZOOM4 = 1 THEN
    //  :ZOOM.DIR_ZOOM4:= '';
    //  :ZOOM.ESTADO_ZOOM4 := ; 
    //  HIDE_VIEW('ZOOM_DIR4'); 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_verDir4_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_zoom_verDir4_whenButtonPressed");
        if (this.ZOOM.ESTADO_ZOOM4 == '0') {
            this.oracleFormsBuiltins.show_view("ZOOM_DIR4");
            this.ZOOM.DIR_ZOOM4 = this.ENTMAN02.ENTDIR;
            this.ZOOM.ESTADO_ZOOM4 = '1';
        }
        else if (this.ZOOM.ESTADO_ZOOM4 == '1') {
            this.ZOOM.DIR_ZOOM4 = "";
            this.ZOOM.ESTADO_ZOOM4 = '0';
            this.oracleFormsBuiltins.hide_view("ZOOM_DIR4");
        }
        console.log("Exiting SEFCRETEJ_zoom_verDir4_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :ZOOM.ESTADO_ZOOM3 = 0 THEN
    //  SHOW_VIEW('ZOOM_DIR3');
    //  :ZOOM.DIR_ZOOM3:= :ENTMAN02.ENTDIR;
    //  :ZOOM.ESTADO_ZOOM3 := ;
    // ELSIF :ZOOM.ESTADO_ZOOM3 = 1 THEN
    //  :ZOOM.DIR_ZOOM3:= '';
    //  :ZOOM.ESTADO_ZOOM3 := ; 
    //  HIDE_VIEW('ZOOM_DIR3'); 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_verDir3_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_zoom_verDir3_whenButtonPressed");
        if (this.ZOOM.ESTADO_ZOOM3 == '0') {
            this.oracleFormsBuiltins.show_view("ZOOM_DIR3");
            this.ZOOM.DIR_ZOOM3 = this.ENTMAN02.ENTDIR;
            this.ZOOM.ESTADO_ZOOM3 = '1';
        }
        else if (this.ZOOM.ESTADO_ZOOM3 == '1') {
            this.ZOOM.DIR_ZOOM3 = "";
            this.ZOOM.ESTADO_ZOOM3 = '0';
            this.oracleFormsBuiltins.hide_view("ZOOM_DIR3");
        }
        console.log("Exiting SEFCRETEJ_zoom_verDir3_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :ZOOM.ESTADO_ZOOM2 = 0 THEN
    //  SHOW_VIEW('ZOOM_DIR2');
    //  :ZOOM.DIR_ZOOM2:= :TERMAN01.TERDIR;
    //  :ZOOM.ESTADO_ZOOM2 := ;
    // ELSIF :ZOOM.ESTADO_ZOOM2 = 1 THEN
    //  :ZOOM.DIR_ZOOM2:= '';
    //  :ZOOM.ESTADO_ZOOM2 := ; 
    //  HIDE_VIEW('ZOOM_DIR2'); 
    // END IF; END;
    //#endregion
    async SEFCRETEJ_zoom_verDir2_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_zoom_verDir2_whenButtonPressed");
        if (this.ZOOM.ESTADO_ZOOM2 == '0') {
            this.oracleFormsBuiltins.show_view("ZOOM_DIR2");
            this.ZOOM.DIR_ZOOM2 = this.TERMAN01.TERDIR;
            this.ZOOM.ESTADO_ZOOM2 = '1';
        }
        else if (this.ZOOM.ESTADO_ZOOM2 == '1') {
            this.ZOOM.DIR_ZOOM2 = "";
            this.ZOOM.ESTADO_ZOOM2 = '0';
            this.oracleFormsBuiltins.hide_view("ZOOM_DIR2");
        }
        console.log("Exiting SEFCRETEJ_zoom_verDir2_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF(:TERMAN01.TERCOD IS NOT NULL ) THEN
    //   :ENTMAN02.TERIDENT := :TERMAN01.TERCOD; 
    // END IF;
    // 
    // IF(:TERMAN01.TERNOM IS NOT NULL ) THEN
    // :ENTMAN02.TERNOMBRE := :TERMAN01.TERNOM;
    // END IF;
    // 
    // IF(:TERMAN01.TERAPE IS NOT NULL ) THEN
    // :ENTMAN02.TERAPELLIDO := :TERMAN01.TERAPE;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_whenNewRecordInstance() {
        console.log("Entering SEFCRETEJ_entman02_whenNewRecordInstance");
        if ((this.TERMAN01.TERCOD != null)) {
            this.ENTMAN02.TERIDENT = this.TERMAN01.TERCOD;
        }
        if ((this.TERMAN01.TERNOM != null)) {
            this.ENTMAN02.TERNOMBRE = this.TERMAN01.TERNOM;
        }
        if ((this.TERMAN01.TERAPE != null)) {
            this.ENTMAN02.TERAPELLIDO = this.TERMAN01.TERAPE;
        }
        console.log("Exiting SEFCRETEJ_entman02_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('ENTMAN02.ENT_TIPCONS',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_TIPCONS',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_TIPCONS',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_TIPCONS',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTESC',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTESC',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTESC',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTESC',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTDES',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTDES',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTDES',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTDES',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTFECE',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTFECE',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTFECE',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTFECE',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('DCO.DCOTIPE',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('DCO.DCOTIPE',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('DCO.DCOTIPE',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('DCO.DCOTIPE',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_DEPOPE',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_DEPOPE',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_DEPOPE',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('ENTMAN02.ENT_DEPOPE',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('DCO.DCOEMP',VISIBLE,"PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('DCO.DCOEMP',ENABLED,"PROPERTY_TRUE");  
    //     SET_ITEM_PROPERTY('DCO.DCOEMP',NAVIGABLE,"PROPERTY_TRUE"); 
    //     SET_ITEM_PROPERTY('DCO.DCOEMP',"UPDATE_ALLOWED","PROPERTY_TRUE"); END;
    //#endregion
    async SEFCRETEJ_entman02_preBlock() {
        console.log("Entering SEFCRETEJ_entman02_preBlock");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_TIPCONS", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_TIPCONS", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_TIPCONS", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_TIPCONS", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTESC", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTESC", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTESC", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTESC", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTDES", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTDES", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTDES", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTDES", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTFECE", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTFECE", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTFECE", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTFECE", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOTIPE", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOTIPE", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOTIPE", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOTIPE", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_DEPOPE", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_DEPOPE", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_DEPOPE", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_DEPOPE", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOEMP", "VISIBLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOEMP", "ENABLED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOEMP", "NAVIGABLE", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("DCO.DCOEMP", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        console.log("Exiting SEFCRETEJ_entman02_preBlock");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R3';
    //  COMMIT; 
    // :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    // SHOW_VIEW ('C_TERRELA');
    // GO_BLOCK('FAMMAN01');
    // EXECUTE_QUERY; END;
    //#endregion
    async SEFCRETEJ_entman02_keyNxtblk() {
        console.log("Entering SEFCRETEJ_entman02_keyNxtblk");
        this.RADIOS.RREPORTES = "R3";
        this.PARAMETER.set("CONS_TER", this.TERMAN01.TERCOD);
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.show_view("C_TERRELA");
        this.oracleFormsBuiltins.go_block("FAMMAN01");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCRETEJ_entman02_keyNxtblk");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //   IF :ENTMAN02.ENT_ACTCIU IS NOT NULL THEN
    //     BEGIN
    //     INSERT INTO OPS$SEGUI.SETHIACEC(HIACEC_TER, HIACEC_CICOD, HIACEC_FACTV)
    //       VALUES (:ENTMAN02.ENTCOD,:ENTMAN02.ENT_ACTCIU,TRUNC(SYSDATE));
    //       FORMS_DDL('COMMIT');
    //   EXCEPTION WHEN OTHERS THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR NO FUE INSERTADO EN HISTORICOS',NULL,NULL,NULL, T_RESPUESTA);
    //     END;
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_postInsert() {
        console.log("Entering SEFCRETEJ_entman02_postInsert");
        let T_RESPUESTA: number = null;
        if ((this.ENTMAN02.ENT_ACTCIU != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // payload1.ENTCOD = : ENTMAN02.ENTCOD;
                // payload1.ENT_ACTCIU = : ENTMAN02.ENT_ACTCIU;
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_postinsert_query1", payload1);
                this.oracleFormsBuiltins.forms_ddl("COMMIT");
            } catch (ex) {

                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL VALOR NO FUE INSERTADO EN HISTORICOS", null, null, null, T_RESPUESTA);
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_postInsert");
    }

    //#region PLSQL
    // DECLARE
    // V_FECHA  DATE;
    // V_CODIGO VARCHAR2(100);  
    // T_RESPUESTA NUMBER;
    // 
    // BEGIN
    //   IF :ENTMAN02.ENT_ACTCIU IS NOT NULL THEN
    //   BEGIN
    //    
    //    SELECT DISTINCT HIACEC_CICOD ,TRUNC(HIACEC_FACTV) FECHA
    //   INTO V_CODIGO,V_FECHA
    //   FROM SETHIACEC T
    //   WHERE  T.HIACEC_TER = :ENTMAN02.ENTCOD
    //   AND HIACEC_CICOD = :ENTMAN02.ENT_ACTCIU
    //   AND HIACEC_FACTV = (SELECT TRUNC(MAX(HIACEC_FACTV)) 
    //             FROM SETHIACEC
    //                         WHERE HIACEC_TER =  :ENTMAN02.ENTCOD);                        
    //   
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      BEGIN
    //        INSERT INTO OPS$SEGUI.SETHIACEC(HIACEC_TER, HIACEC_CICOD, HIACEC_FACTV)
    //              VALUES (:ENTMAN02.ENTCOD,:ENTMAN02.ENT_ACTCIU,TRUNC(SYSDATE));
    //              FORMS_DDL('COMMIT');     
    //       EXCEPTION WHEN OTHERS THEN 
    //         LIB$ALERTA('MENSAJE','ERROR INSERTADO EN HISTORICOS',NULL,NULL,NULL, T_RESPUESTA);
    //       END;
    //     END;
    //       
    //     IF TRUNC(SYSDATE) <> V_FECHA  AND V_CODIGO <> :ENTMAN02.ENT_ACTCIU THEN
    //     INSERT INTO OPS$SEGUI.SETHIACEC(HIACEC_TER, HIACEC_CICOD, HIACEC_FACTV)
    //       VALUES (:ENTMAN02.ENTCOD,:ENTMAN02.ENT_ACTCIU,TRUNC(SYSDATE));      
    //      FORMS_DDL('COMMIT');
    //     END IF;        
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_postUpdate() {
        console.log("Entering SEFCRETEJ_entman02_postUpdate");
        let V_FECHA: Date = null;
        let V_CODIGO: string = null;
        let T_RESPUESTA: number = null;
        if ((this.ENTMAN02.ENT_ACTCIU != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTCOD", this.ENTMAN02.ENTCOD);
            payload1.set("ENT_ACTCIU", this.ENTMAN02.ENT_ACTCIU);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_postupdate_query1", payload1);
            // get values from result
            V_CODIGO = result1[0].get("V_CODIGO");
            V_FECHA = result1[0].get("V_FECHA");
            if (result1 == null || result1.length == 0) {

                let result2 = new Map();
                try {

                    // construct payload
                    let payload2 = new Map();
                    // payload2.ENTCOD = : ENTMAN02.ENTCOD;
                    // payload2.ENT_ACTCIU = : ENTMAN02.ENT_ACTCIU;
                    // call REST API
                    const result2 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_postupdate_query2", payload2);
                    this.oracleFormsBuiltins.forms_ddl("COMMIT");
                } catch (ex) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "ERROR INSERTADO EN HISTORICOS", null, null, null, T_RESPUESTA);
                }

            }

            // if ((TRUNC(PLSQLBuiltins.sysdate()) != V_FECHA && V_CODIGO != ENTMAN02.ENT_ACTCIU)) {
            //     // construct payload
            //     let payload3 = new Map();
            //     payload3.ENTCOD = : ENTMAN02.ENTCOD;
            //     payload3.ENT_ACTCIU = : ENTMAN02.ENT_ACTCIU;
            //     // call REST API
            //     const result3 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_postupdate_query3", payload3);
            //     this.oracleFormsBuiltins.forms_ddl("COMMIT");
            // }
        }
        console.log("Exiting SEFCRETEJ_entman02_postUpdate");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN SETHIACEC DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETHIACEC_CUR IS      
    //     SELECT 1 FROM SETHIACEC S     
    //     WHERE S.HIACEC_TER = :ENTMAN02.ENTCOD;
    //   --
    //   -- END SETHIACEC DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN SETHIACEC DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETHIACEC_CUR;     
    //   FETCH SETHIACEC_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETHIACEC_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETHIACEC_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETHIACEC_CUR;
    //   --
    //   -- END SETHIACEC DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async SEFCRETEJ_entman02_onCheckDeleteMaster() {
        console.log("Entering SEFCRETEJ_entman02_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_entman02_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.W_VICTIMA IS NULL THEN
    //  LIB$DTNERFRMA('DEBE COLOCAR REGISTRO DE VICTIMAS');
    // ELSE
    //  :ENT_LEYVIC := :TERMAN01.W_VICTIMA;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_preUpdate() {
        console.log("Entering SEFCRETEJ_entman02_preUpdate");
        if ((this.TERMAN01.W_VICTIMA == null)) {
            // SEFCRETEJ_LIB$DTNERFRMA("DEBE COLOCAR REGISTRO DE VICTIMAS");
        }
        else {
            this.ENTMAN02.ENT_LEYVIC = this.TERMAN01.W_VICTIMA;
        }
        console.log("Exiting SEFCRETEJ_entman02_preUpdate");
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
    //   -- BEGIN SETHIACEC DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:ENTMAN02.ENTCOD IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('ENTMAN02.ENTMAN02_SETHIACEC');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETHIACEC');   
    //   END IF;
    //   --
    //   -- END SETHIACEC DETAIL PROGRAM SECTION
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
    async SEFCRETEJ_entman02_onPopulateDetails() {
        console.log("Entering SEFCRETEJ_entman02_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.ENTMAN02.ENTCOD != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("ENTMAN02.ENTMAN02_SETHIACEC");
            // SEFCRETEJ_QUERY_MASTER_DETAILS(REL_ID, "SETHIACEC");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // SEFCRETEJ_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting SEFCRETEJ_entman02_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   GO_BLOCK('TERMAN01');
    // END;
    //#endregion
    async SEFCRETEJ_entman02_keyExit() {
        console.log("Entering SEFCRETEJ_entman02_keyExit");
        this.oracleFormsBuiltins.go_block("TERMAN01");
        console.log("Exiting SEFCRETEJ_entman02_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //   --OBTIENE DESCRIPCION DE LA VINCULACION.
    //   IF :ENTMAN02.ENTPRO IS NOT NULL THEN
    //      :ENTMAN02.ORI := FRM$DESC_ORIGEN(:ENTMAN02.ENTPRO);
    //   END IF;
    //   
    //   --OBTIENE DESCRIPCION DE PROCEDENCIA
    //   IF :ENTMAN02.ENT_OPCPRO IS NOT NULL THEN
    //      :ENTMAN02.DESCR_OPC :=  FRM$DESC_OPCIONESXORIGEN(:ENTMAN02.ENTPRO, :ENTMAN02.ENT_OPCPRO); 
    //   END IF;
    //     
    //   --OBTENGO DESCRIPCION DEL PAÍS
    //   IF :ENTMAN02.ENTPAIS IS NOT NULL THEN
    //   :ENTMAN02.PAIS := FRM$DESC_PAIS(:ENTMAN02.ENTPAIS);
    //   END IF;
    //   
    //   --OBTENGO DESCRIPCION DEPARTAMENTO
    //   IF :TERMAN01.TERDEP IS NOT NULL THEN
    //      :TERMAN01.DEPTO := FRM$DESC_DEPGEO(:ENTMAN02.ENTPAIS, :TERMAN01.TERDEP);
    //   END IF;
    //   --OBTENGO DESCRIPCION CIUDAD
    //   IF :TERMAN01.TERTCI IS NOT NULL THEN
    //      :TERMAN01.CIUDAD := FRM$DESC_CIUDAD(:ENTMAN02.ENTPAIS, :TERMAN01.TERDEP, :TERMAN01.TERTCI);
    //   END IF;
    //   
    //   --OBTENGO DESCRIPCION DEL GRUPO ECONÓMICO   
    //   IF :ENTMAN02.ENTGEC IS NOT NULL THEN
    //      :ENTMAN02.GRUPO := FRM$DESC_GRUPOECO(:ENTMAN02.ENTGEC);
    //   END IF;
    //   
    //   --OBTENGO DESCRIPCION DEL SECTOR ECONÓMICO
    //   IF :ENTMAN02.ENTSEC IS NOT NULL THEN
    //      :ENTMAN02.SECTOR := FRM$DESC_SECTOR_ECO(:ENTMAN02.ENTSEC);
    //   END IF;
    //   
    //   --OBTENGO DESCRIPCION DEL SUBSECTOR ECONÓMICO
    //   IF :ENTMAN02.ENTSSC IS NOT NULL THEN
    //      :ENTMAN02.SUBSEC := FRM$DESC_SUBSECTOR(:ENTMAN02.ENTSEC, :ENTMAN02.ENTSSC);
    //   END IF;
    //   
    //   --OBTENGO DESCRIPCION DEL ORIGEN DE LOS FONDOS
    //   IF :ENTMAN02.ENT_ORGFON IS NOT NULL THEN
    //      :ENTMAN02.ENT_ORGFON_DES := FRM$DESC_SETORIGEN(:ENTMAN02.ENT_ORGFON);
    //   END IF;
    //   
    //   -- ASIGNAR VALORES DE VARIABLES DEL BLOQUE TERMAN02, A CAMPOS
    //   -- DEL BLOQUE TERMAN01.
    // 
    //   --OBTENGO DESCRIPCION DE LA ACTIVIDAD ECONÓMICA
    //   IF :ENTMAN02.ENTACT IS NOT NULL THEN
    //      :ENTMAN02.DESACT := FRM$DESC_ACT_ECO(:ENTMAN02.ENTACT,:TERMAN01.TERAGE);
    //   END IF;
    //   
    //   --OBTENGO DESCRIPCION DE CIUU
    //   IF :ENTMAN02.ENTCIUU IS NOT NULL THEN
    //      :ENTMAN02.CIUU  := FRM$DESC_CIUU(:ENTMAN02.ENTCIUU);
    //   END IF; 
    //   
    //   --OBTENGO DESCRIPCION DE OTRAS ACTIVIDADES ECONÓMICAS
    //   IF :ENTMAN02.ENT_ACTCIU IS NOT NULL THEN
    //      :ENTMAN02.DESC_ACTECO  := FRM$DESC_CIUU(:ENTMAN02.ENT_ACTCIU);
    //   END IF; 
    //   
    //   IF :ENTMAN02.ENTSOC IS NOT NULL THEN
    //      :ENTMAN02.SOC    := FRM$DESC_TIPO_SOC(:ENTMAN02.ENTSOC);
    //   END IF;
    //   
    //   IF :TERMAN01.TERCOD IS NOT NULL THEN
    //    :ENTMAN02.TERIDENT := :TERMAN01.TERCOD;
    //    :ENTMAN02.TERNOMBRE := :TERMAN01.TERNOM;
    //    :ENTMAN02.TERAPELLIDO := :TERMAN01.TERAPE;
    //   END IF;
    //   
    //      
    //   IF :ENTMAN02.ENTRTE IS NOT NULL THEN
    //    SET_ITEM_PROPERTY('ENTMAN02.ENTRTE', "UPDATEABLE", "PROPERTY_FALSE");
    //    SET_ITEM_PROPERTY('ENTMAN02.ENTRTE', "INSERT_ALLOWED" , "PROPERTY_FALSE");
    //   ELSE
    //     SET_ITEM_PROPERTY('ENTMAN02.ENTRTE', "UPDATEABLE", "PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('ENTMAN02.ENTRTE', "INSERT_ALLOWED" , "PROPERTY_TRUE");
    //   END IF; 
    //   
    //   
    //   IF :ENTMAN02.ENT_TIPCONS = 'EP' THEN
    //      :LABEL_TIPO := 'DE LA NOTARÍA :';
    //      SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',"DISPLAYED","PROPERTY_OFF");
    //      SET_ITEM_PROPERTY('ENTMAN02.ENTNOT',"DISPLAYED","PROPERTY_ON");
    //   ELSIF :ENTMAN02.ENT_TIPCONS IN ('RS','PJ') THEN
    //      :LABEL_TIPO  := 'DE :';
    //      SET_ITEM_PROPERTY('ENTMAN02.ENTNOT',"DISPLAYED","PROPERTY_OFF");
    //      SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',"DISPLAYED","PROPERTY_ON");
    //   ELSE
    //      :LABEL_TIPO  := '';
    //   END IF;
    //   
    // END;
    //#endregion
    async SEFCRETEJ_entman02_postQuery() {
        console.log("Entering SEFCRETEJ_entman02_postQuery");
        // if ((this.ENTMAN02.ENTPRO != null)) {
        //     this.ENTMAN02.ORI = FRM$DESC_ORIGEN(this.ENTMAN02.ENTPRO);
        // }
        // if ((this.ENTMAN02.ENT_OPCPRO != null)) {
        //     this.ENTMAN02.DESCR_OPC = FRM$DESC_OPCIONESXORIGEN(this.ENTMAN02.ENTPRO, this.ENTMAN02.ENT_OPCPRO);
        // }
        // if ((this.ENTMAN02.ENTPAIS != null)) {
        //     this.ENTMAN02.PAIS = FRM$DESC_PAIS(this.ENTMAN02.ENTPAIS);
        // }
        // if ((this.TERMAN01.TERDEP != null)) {
        //     this.TERMAN01.DEPTO = FRM$DESC_DEPGEO(this.ENTMAN02.ENTPAIS, this.TERMAN01.TERDEP);
        // }
        // if ((this.TERMAN01.TERTCI != null)) {
        //     this.TERMAN01.CIUDAD = FRM$DESC_CIUDAD(this.ENTMAN02.ENTPAIS, this.TERMAN01.TERDEP, this.TERMAN01.TERTCI);
        // }
        // if ((this.ENTMAN02.ENTGEC != null)) {
        //     this.ENTMAN02.GRUPO = FRM$DESC_GRUPOECO(this.ENTMAN02.ENTGEC);
        // }
        // if ((this.ENTMAN02.ENTSEC != null)) {
        //     this.ENTMAN02.SECTOR = FRM$DESC_SECTOR_ECO(this.ENTMAN02.ENTSEC);
        // }
        // if ((this.ENTMAN02.ENTSSC != null)) {
        //     this.ENTMAN02.SUBSEC = FRM$DESC_SUBSECTOR(this.ENTMAN02.ENTSEC, this.ENTMAN02.ENTSSC);
        // }
        // if ((this.ENTMAN02.ENT_ORGFON != null)) {
        //     this.ENTMAN02.ENT_ORGFON_DES = FRM$DESC_SETORIGEN(this.ENTMAN02.ENT_ORGFON);
        // }
        // if ((this.ENTMAN02.ENTACT != null)) {
        //     this.ENTMAN02.DESACT = FRM$DESC_ACT_ECO(this.ENTMAN02.ENTACT, this.TERMAN01.TERAGE);
        // }
        // if ((this.ENTMAN02.ENTCIUU != null)) {
        //     this.ENTMAN02.CIUU = FRM$DESC_CIUU(this.ENTMAN02.ENTCIUU);
        // }
        // if ((this.ENTMAN02.ENT_ACTCIU != null)) {
        //     this.ENTMAN02.DESC_ACTECO = FRM$DESC_CIUU(this.ENTMAN02.ENT_ACTCIU);
        // }
        // if ((this.ENTMAN02.ENTSOC != null)) {
        //     this.ENTMAN02.SOC = FRM$DESC_TIPO_SOC(this.ENTMAN02.ENTSOC);
        // }
        // if ((this.TERMAN01.TERCOD != null)) {
        //     this.ENTMAN02.TERIDENT = this.TERMAN01.TERCOD;
        //     this.ENTMAN02.TERNOMBRE = this.TERMAN01.TERNOM;
        //     this.ENTMAN02.TERAPELLIDO = this.TERMAN01.TERAPE;
        // }
        // if ((this.ENTMAN02.ENTRTE != null)) {
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTRTE", "UPDATEABLE", "PROPERTY_FALSE");
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTRTE", "INSERT_ALLOWED", "PROPERTY_FALSE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTRTE", "UPDATEABLE", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTRTE", "INSERT_ALLOWED", "PROPERTY_TRUE");
        // }
        // if (this.ENTMAN02.ENT_TIPCONS == "EP") {
        //     this.ENTMAN02.LABEL_TIPO = "DE LA NOTARÍA :";
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "DISPLAYED", "PROPERTY_OFF");
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTNOT", "DISPLAYED", "PROPERTY_ON");
        // }
        // else if (["RS", "PJ"].indexOf(this.ENTMAN02.ENT_TIPCONS) != -1) {
        //     this.ENTMAN02.LABEL_TIPO = "DE :";
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTNOT", "DISPLAYED", "PROPERTY_OFF");
        //     this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "DISPLAYED", "PROPERTY_ON");
        // }
        // else {
        //     this.ENTMAN02.LABEL_TIPO = "";
        // }
        console.log("Exiting SEFCRETEJ_entman02_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :TERMAN01.W_VICTIMA IS NULL THEN
    //  LIB$DTNERFRMA('DEBE COLOCAR REGISTRO DE VICTIMAS');
    // ELSE
    //  :ENT_LEYVIC := :TERMAN01.W_VICTIMA;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_preInsert() {
        console.log("Entering SEFCRETEJ_entman02_preInsert");
        if ((this.TERMAN01.W_VICTIMA == null)) {
            // SEFCRETEJ_LIB$DTNERFRMA("DEBE COLOCAR REGISTRO DE VICTIMAS");
        }
        else {
            this.ENTMAN02.ENT_LEYVIC = this.TERMAN01.W_VICTIMA;
        }
        console.log("Exiting SEFCRETEJ_entman02_preInsert");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENT_TIPCONS'); END;
    //#endregion
    async SEFCRETEJ_entman02_entssa_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entssa_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_TIPCONS");
        console.log("Exiting SEFCRETEJ_entman02_entssa_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTSSC IS NOT NULL THEN
    // BEGIN
    //    SELECT TDSDES
    //      INTO :ENTMAN02.SUBSEC
    //      FROM OPS$SEGUI.TDS
    //     WHERE TDSCOD = :ENTMAN02.ENTSSC
    //       AND TDSSEC = :ENTMAN02.ENTSEC;
    // 
    //     EXCEPTION 
    //       WHEN NO_DATA_FOUND THEN
    //            :ENTMAN02.SUBSEC := NULL;
    //     RAISE FORM_TRIGGER_FAILURE;       
    //   
    //     END;
    //     -- VALIDACIÓN CUANDO EL TERCERO ES CC Y TIENE ENTIDAD DE COMERCIO LE DEBE CALCULAR DIGITO
    //     -- DE CHEQUEO POR ESO TOCA ENVIARLE AL PROCEDIMIENTO COMO NI 03/02/2005 SMT
    //     IF :ENTMAN02.ENTSSC='204' THEN
    //           :TERMAN01.TERDCH := CALCULAR_DIGITO('NI',:TERMAN01.TERCOD);
    //     END IF;      
    //     
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entssc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entssc_whenValidateItem");
        if ((this.ENTMAN02.ENTSSC != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTSSC", this.ENTMAN02.ENTSSC);
            payload1.set("ENTSEC", this.ENTMAN02.ENTSEC);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entssc_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.SUBSEC = result1[0].get("ENTMAN02.SUBSEC");
            if (result1 == null || result1.length == 0) {

                this.ENTMAN02.SUBSEC = null;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            if (this.ENTMAN02.ENTSSC == "204") {
                // this.TERMAN01.TERDCH = CALCULAR_DIGITO("NI", this.TERMAN01.TERCOD);
            }
        }
        console.log("Exiting SEFCRETEJ_entman02_entssc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :ENTMAN02.ENTSOC IS NOT NULL THEN
    //     BEGIN
    //      SELECT TDSODES
    //        INTO :ENTMAN02.SOC
    //       FROM OPS$SEGUI.TDSO
    //       WHERE (TDSOCOD=:ENTMAN02.ENTSOC)
    //        AND  TDSOCOD <> 'NA';
    //       EXCEPTION 
    //       WHEN NO_DATA_FOUND THEN
    //            LIB$ALERTA('MENSAJE','TIPO DE SOCIEDAD  INEXISTENTE....',NULL,NULL,NULL,T_RESPUESTA);
    //          RAISE FORM_TRIGGER_FAILURE;   
    //     END;
    //   END IF;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entsoc_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entsoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.ENTMAN02.ENTSOC != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTSOC", this.ENTMAN02.ENTSOC);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entsoc_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.SOC = result1[0].get("ENTMAN02.SOC");
            if (result1 == null || result1.length == 0) {

                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "TIPO DE SOCIEDAD  INEXISTENTE....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entsoc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('SETTERXJU.TERXJU_DESCRIPCION'); END;
    //#endregion
    async SEFCRETEJ_entman02_entsoc_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entsoc_keyNextItem");
        this.oracleFormsBuiltins.go_item("SETTERXJU.TERXJU_DESCRIPCION");
        console.log("Exiting SEFCRETEJ_entman02_entsoc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R6';
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    // GO_ITEM('ENTMAN02.ENTGEC'); END;
    //#endregion
    async SEFCRETEJ_entman02_entica_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entica_keyNextItem");
        this.RADIOS.RREPORTES = "R6";
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTGEC");
        console.log("Exiting SEFCRETEJ_entman02_entica_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENT_OTORESO IS NULL THEN 
    //  MESSAGE('CAMPO OBLIGATORIO');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entOtoreso_postTextItem() {
        console.log("Entering SEFCRETEJ_entman02_entOtoreso_postTextItem");
        if ((this.ENTMAN02.ENT_OTORESO == null)) {
            this.oracleFormsBuiltins.message("CAMPO OBLIGATORIO");
        }
        console.log("Exiting SEFCRETEJ_entman02_entOtoreso_postTextItem");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //  IF PLSQLBuiltins.string_length(:ENTTEL1) != 7 THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO TELEFONO DEBE TENER 7 DIGITOS',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF :ENTTEL1 IN ('3122377', '3122510', '2669421', '2660939', '6604500', '6604499', '3344324', '6331476', '6825373') THEN
    //   LIB$ALERTA('MENSAJE','EL CAMPO TELÉFONO NO DEBE PERTENECER A LEASING BOLIVAR',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_enttel1_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_enttel1_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (PLSQLBuiltins.string_length(ENTTEL1) != 7) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO TELEFONO DEBE TENER 7 DIGITOS", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // if (["3122377", "3122510", "2669421", "2660939", "6604500", "6604499", "3344324", "6331476", "6825373"].indexOf(ENTTEL1) != -1) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO TELÉFONO NO DEBE PERTENECER A LEASING BOLIVAR", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_entman02_enttel1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('DIR.DIRPLOC'); END;
    //#endregion
    async SEFCRETEJ_entman02_enttel1_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_enttel1_keyNextItem");
        this.oracleFormsBuiltins.go_item("DIR.DIRPLOC");
        console.log("Exiting SEFCRETEJ_entman02_enttel1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENT_CIUOPE IS NOT NULL THEN
    // 
    // DECLARE 
    // CIU_EXISTE          NUMBER(1);
    // PAIS_HOMO       VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //  BEGIN
    //   SELECT TDECOF
    //     INTO PAIS_HOMO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD = :ENTMAN02.ENT_DEPOPE
    //      AND  DEPACO = :ENTMAN02.ENT_PAIOPE;
    //      
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE PAIS INVALIDO... INSERTE EL PAIS ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    //    SELECT COUNT(1)
    //      INTO CIU_EXISTE
    //      FROM OPS$SEGUI.TDC
    //     WHERE TDCDEP=:ENTMAN02.ENT_DEPOPE
    //       AND TDCPAI = PAIS_HOMO
    //       AND TDCCOD = :ENTMAN02.ENT_CIUOPE
    //       AND :ENTMAN02.ENT_CIUOPE <> '000';
    //       
    //    IF CIU_EXISTE = 0 THEN
    //      LIB$ALERTA('MENSAJE','CODIGO DE LA CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    //    
    //     
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entCiuope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entCiuope_whenValidateItem");
        if ((this.ENTMAN02.ENT_CIUOPE != null)) {
            {

                let CIU_EXISTE: number = null;
                let PAIS_HOMO: string = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("ENT_DEPOPE", this.ENTMAN02.ENT_DEPOPE);
                payload1.set("ENT_PAIOPE", this.ENTMAN02.ENT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entciuope_whenvalidateitem_query1", payload1);
                // get values from result
                PAIS_HOMO = result1[0].get("PAIS_HOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS INVALIDO... INSERTE EL PAIS ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("ENT_DEPOPE", this.ENTMAN02.ENT_DEPOPE);
                payload2.set("ENT_CIUOPE", this.ENTMAN02.ENT_CIUOPE);
                // call REST API
                const result2 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entciuope_whenvalidateitem_query2", payload2);
                // get values from result
                CIU_EXISTE = result2[0].get("CIU_EXISTE");
                if (CIU_EXISTE == 0) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE LA CIUDAD NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entCiuope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('PAGE_DESTINO_VEHICULO');
    // GO_BLOCK('SETVEHAFI');
    // EXECUTE_QUERY; END;
    //#endregion
    async SEFCRETEJ_entman02_btnVehiculos_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_entman02_btnVehiculos_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("PAGE_DESTINO_VEHICULO");
        this.oracleFormsBuiltins.go_block("SETVEHAFI");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCRETEJ_entman02_btnVehiculos_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTCPP'); END;
    //#endregion
    async SEFCRETEJ_entman02_entrlg_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entrlg_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTCPP");
        console.log("Exiting SEFCRETEJ_entman02_entrlg_keyNextItem");
    }

    async SEFCRETEJ_entman02_entTipcons_postChange() {
        // null;
    }

    //#region PLSQL
    // BEGIN  
    // 
    //   IF :ENTMAN02.ENT_TIPCONS = 'EP' THEN --ESCRITURA PÚBLICA
    //       :LABEL_TIPO  := 'DE LA NOTARÍA :';
    //       SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_TRUE");
    //     ELSIF :ENTMAN02.ENT_TIPCONS IN ('RS','PJ') THEN --RESOLUCIÓN, PERSONERÍA JURÍDICA
    //      :LABEL_TIPO  := 'DE :';
    //      SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_TRUE");
    //     ELSIF :ENTMAN02.ENT_TIPCONS IN ('DP') THEN --DOCUMENTO PRIVADO. 
    //        :LABEL_TIPO  := ''; 
    //        SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_FALSE");
    //     END IF;  
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entTipcons_whenListChanged() {
        console.log("Entering SEFCRETEJ_entman02_entTipcons_whenListChanged");
        if (this.ENTMAN02.ENT_TIPCONS == "EP") {
            this.ENTMAN02.LABEL_TIPO = "DE LA NOTARÍA :";
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_TRUE");
        }
        else if (["RS", "PJ"].indexOf(this.ENTMAN02.ENT_TIPCONS) != -1) {
            this.ENTMAN02.LABEL_TIPO = "DE :";
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_TRUE");
        }
        else if (["DP"].indexOf(this.ENTMAN02.ENT_TIPCONS) != -1) {
            this.ENTMAN02.LABEL_TIPO = "";
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_FALSE");
        }
        console.log("Exiting SEFCRETEJ_entman02_entTipcons_whenListChanged");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   IF :ENTMAN02.ENT_TIPCONS = 'EP' THEN --ESCRITURA PÚBLICA
    //       :LABEL_TIPO  := 'DE LA NOTARÍA :';
    //       SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_TRUE");
    //     ELSIF :ENTMAN02.ENT_TIPCONS IN ('RS','PJ') THEN --RESOLUCIÓN, PERSONERÍA JURÍDICA
    //      :LABEL_TIPO  := 'DE :';
    //      SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_TRUE");
    //     ELSIF :ENTMAN02.ENT_TIPCONS IN ('DP') THEN --DOCUMENTO PRIVADO. 
    //        :LABEL_TIPO  := ''; 
    //        SET_ITEM_PROPERTY('ENTMAN02.ENT_OTORESO',VISIBLE,"PROPERTY_FALSE");
    //     END IF;
    //     NEXT_ITEM;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entTipcons_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entTipcons_keyNextItem");
        if (this.ENTMAN02.ENT_TIPCONS == "EP") {
            this.ENTMAN02.LABEL_TIPO = "DE LA NOTARÍA :";
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_TRUE");
        }
        else if (["RS", "PJ"].indexOf(this.ENTMAN02.ENT_TIPCONS) != -1) {
            this.ENTMAN02.LABEL_TIPO = "DE :";
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_TRUE");
        }
        else if (["DP"].indexOf(this.ENTMAN02.ENT_TIPCONS) != -1) {
            this.ENTMAN02.LABEL_TIPO = "";
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENT_OTORESO", "VISIBLE", "PROPERTY_FALSE");
        }
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting SEFCRETEJ_entman02_entTipcons_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTESC IS NULL THEN 
    //  MESSAGE('CAMPO OBLIGATORIO');
    //  --RAISE FORM_TRIGGER_FAILURE;
    // ELSIF :ENTMAN02.ENT_TIPCONS IN ('RS','PJ') THEN
    //   GO_ITEM('ENT_OTORESO');
    // ELSE
    //    NEXT_ITEM;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entesc_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entesc_keyNextItem");
        if ((this.ENTMAN02.ENTESC == null)) {
            this.oracleFormsBuiltins.message("CAMPO OBLIGATORIO");
        }
        else if (["RS", "PJ"].indexOf(this.ENTMAN02.ENT_TIPCONS) != -1) {
            this.oracleFormsBuiltins.go_item("ENT_OTORESO");
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting SEFCRETEJ_entman02_entesc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTRLG'); END;
    //#endregion
    async SEFCRETEJ_entman02_entovc_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entovc_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTRLG");
        console.log("Exiting SEFCRETEJ_entman02_entovc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TERMAN01.TERTVI'); END;
    //#endregion
    async SEFCRETEJ_entman02_descrOpc_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_descrOpc_keyNextItem");
        this.oracleFormsBuiltins.go_item("TERMAN01.TERTVI");
        console.log("Exiting SEFCRETEJ_entman02_descrOpc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTRTRI'); END;
    //#endregion
    async SEFCRETEJ_entman02_terapellido_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_terapellido_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTRTRI");
        console.log("Exiting SEFCRETEJ_entman02_terapellido_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENT_PAIOPE IS NOT NULL THEN
    // DECLARE 
    // W_CODPHOMO  VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //  
    //   BEGIN
    //    SELECT TDCODFA
    //      INTO W_CODPHOMO
    //       FROM OPS$SEGUI.TDP
    //      WHERE TDPACO = :ENTMAN02.ENT_PAIOPE;
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   
    //   IF(:SETFACTAJUR.FACJUR_PAISCO IS NOT NULL) THEN
    //    
    //      BEGIN
    //    SELECT TDCODFA
    //      INTO W_CODPHOMO
    //       FROM OPS$SEGUI.TDP
    //      WHERE TDPACO = :ENTMAN02.ENT_PAIOPE;
    //      EXCEPTION 
    //       WHEN OTHERS THEN
    //     :SETFACTAJUR.FACJUR_PAISCO:= NULL;
    //      END;
    //       :SETFACTAJUR.FACJUR_PAISCO:= W_CODPHOMO;
    //    END IF; 
    //       
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entPaiope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entPaiope_whenValidateItem");
        if ((this.ENTMAN02.ENT_PAIOPE != null)) {
            {

                let W_CODPHOMO: string = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("ENT_PAIOPE", this.ENTMAN02.ENT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entpaiope_whenvalidateitem_query1", payload1);
                // get values from result
                W_CODPHOMO = result1[0].get("W_CODPHOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                if ((this.SETFACTAJUR.FACJUR_PAISCO != null)) {
                    let result2 = new Map();
                    try {

                        // construct payload
                        let payload2 = new Map();
                        payload2.set("ENT_PAIOPE", this.ENTMAN02.ENT_PAIOPE);
                        // call REST API
                        const result2 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entpaiope_whenvalidateitem_query2", payload2);
                        // get values from result
                        W_CODPHOMO = result2[0].get("W_CODPHOMO");
                    } catch (ex) {

                        this.SETFACTAJUR.FACJUR_PAISCO = null;
                    }

                    this.SETFACTAJUR.FACJUR_PAISCO = W_CODPHOMO;
                }
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entPaiope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN -- (1) NORMALMENTE LA VALIDACIÓN NO TRAE VALORES, LO QUE HACE
    // -- QUE EL TRIGGER FALLE CON FRECUENCIA, OBLIGANDO A CERRAR
    // -- LA FORMA.  
    // -- JOHN E. RINCON, OCT. 20-2001
    // -- VAIDACIÓN NUEVA PARA RESTRINGIR EL CODIGO NO APLICA PARA LOS CIIU
    // --F.ACT. 2005-09-06
    // --AUTOR. RICARDO TARAZONA
    // IF :ENTMAN02.ENTCIUU IS NOT NULL THEN
    // DECLARE
    //  V_SECTOR   VARCHAR2(10);
    //  V_SUBSECTOR VARCHAR2(10);
    // 
    //  BEGIN 
    //     SELECT  TCIDES,SECCOD,TDSCOD  ---**(CIIU, SECTOR ECONO Y SUBSECTOR ECONO)
    //       INTO  :ENTMAN02.CIUU, V_SECTOR ,V_SUBSECTOR
    //       FROM  OPS$SEGUI.TCI,OPS$SEGUI.SEC, OPS$SEGUI.TDS
    //      WHERE  TCICOD=:ENTMAN02.ENTCIUU
    //      AND TCISEC = SECCOD
    //    AND TDSCOD = TCITAE;
    //     IF :TERMAN01.TERPER = 'J' THEN
    //     :ENTMAN02.ENTSEC  := V_SECTOR;
    //     :ENTMAN02.ENTSSC := V_SUBSECTOR;
    //     END IF;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //        MESSAGE('CODIGO DEL CIIU NO EXISTE O NO SE ENCUENTRA RELACIONADO CON SECTOR Y SUBSECTOR, CONSULTE LISTA DE VALORES');
    //      RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //      
    // ELSIF :ENTCIUU IN ('0000','0200','0500','110','130','140','1429','201','202','203','501','502','1549','3034'
    //           ,'7599','5079','5089','5110','5490','8530','9800') THEN
    //    LIB$DTNERFRMA('ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE SELECCIONAR UN CIIU VALIDO. CONSULTE LA LISTA DE VALORES');
    //   RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entciuu_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entciuu_whenValidateItem");
        if ((this.ENTMAN02.ENTCIUU != null)) {
            {

                let V_SECTOR: string = null;
                let V_SUBSECTOR: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("ENTCIUU", this.ENTMAN02.ENTCIUU);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entciuu_whenvalidateitem_query1", payload1);
                // get values from result
                this.ENTMAN02.CIUU = result1[0].get("ENTMAN02.CIUU");
                V_SECTOR = result1[0].get("V_SECTOR");
                V_SUBSECTOR = result1[0].get("V_SUBSECTOR");
                if (this.TERMAN01.TERPER == "J") {
                    this.ENTMAN02.ENTSEC = V_SECTOR;
                    this.ENTMAN02.ENTSSC = V_SUBSECTOR;
                }
                if (result1 == null || result1.length == 0) {

                    this.oracleFormsBuiltins.message("CODIGO DEL CIIU NO EXISTE O NO SE ENCUENTRA RELACIONADO CON SECTOR Y SUBSECTOR, CONSULTE LISTA DE VALORES");
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        // else if (["0000", "0200", "0500", "110", "130", "140", "1429", "201", "202", "203", "501", "502", "1549", "3034", "7599", "5079", "5089", "5110", "5490", "8530", "9800"].indexOf(ENTCIUU) != -1) {
        //     // SEFCRETEJ_LIB$DTNERFRMA("ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE SELECCIONAR UN CIIU VALIDO. CONSULTE LA LISTA DE VALORES");
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_entman02_entciuu_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  RETURN_LOV BOOLEAN;
    //  BEGIN
    // IF :ENTMAN02.ENTCIUU IS NULL THEN
    // LIB$ALERTA ('MENSAJE','INGRESE POR FAVOR EL CODIGO CIIU',NULL,NULL,NULL,T_RESPUESTA);
    // SET_ITEM_PROPERTY('ENTMAN02.ENTCIUU',REQUIRED ,"PROPERTY_TRUE");
    // RETURN_LOV := SHOW_LOV('ENTMAN01_ENTCIUU_LOV23');
    // END IF;
    //  END;
    //  
    //#endregion
    async SEFCRETEJ_entman02_entciuu_postTextItem() {
        console.log("Entering SEFCRETEJ_entman02_entciuu_postTextItem");
        let T_RESPUESTA: number = null;
        let RETURN_LOV: boolean = null;
        if ((this.ENTMAN02.ENTCIUU == null)) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE POR FAVOR EL CODIGO CIIU", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.set_item_property("ENTMAN02.ENTCIUU", "REQUIRED", "PROPERTY_TRUE");
            RETURN_LOV = this.oracleFormsBuiltins.show_lov("ENTMAN01_ENTCIUU_LOV23");
        }
        console.log("Exiting SEFCRETEJ_entman02_entciuu_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  RETURN_LOV BOOLEAN;
    //  BEGIN
    // IF :ENTMAN02.ENTCIUU IS NULL THEN
    // LIB$ALERTA ('MENSAJE','INGRESE POR FAVOR EL CODIGO CIIU',NULL,NULL,NULL,T_RESPUESTA);
    // RETURN_LOV := SHOW_LOV('ENTMAN01_ENTCIUU_LOV23');
    // ELSE
    //  PU_HABILITAITEM; --8400
    //  NEXT_ITEM;
    // END IF;
    //  END;
    //  
    //  
    //  
    //#endregion
    async SEFCRETEJ_entman02_entciuu_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entciuu_keyNextItem");
        let T_RESPUESTA: number = null;
        let RETURN_LOV: boolean = null;
        if ((this.ENTMAN02.ENTCIUU == null)) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "INGRESE POR FAVOR EL CODIGO CIIU", null, null, null, T_RESPUESTA);
            RETURN_LOV = this.oracleFormsBuiltins.show_lov("ENTMAN01_ENTCIUU_LOV23");
        }
        else {
            // SEFCRETEJ_PU_HABILITAITEM();
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting SEFCRETEJ_entman02_entciuu_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF(:ENTMAN02.ENTSEC IS NOT NULL) THEN
    // BEGIN
    //   SELECT SECDES
    //     INTO :ENTMAN02.SECTOR
    //     FROM OPS$SEGUI.SEC
    //    WHERE SECCOD=:ENTMAN02.ENTSEC;
    // 
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //         :ENTMAN02.SECTOR := NULL;
    //      RAISE FORM_TRIGGER_FAILURE;
    //      END;
    //      
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entsec_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entsec_whenValidateItem");
        if ((this.ENTMAN02.ENTSEC != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTSEC", this.ENTMAN02.ENTSEC);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entsec_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.SECTOR = result1[0].get("ENTMAN02.SECTOR");
            if (result1 == null || result1.length == 0) {

                this.ENTMAN02.SECTOR = null;
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entsec_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENT_INFOCOM IS NULL THEN 
    //  MESSAGE('CAMPO OBLIGATORIO');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entInfocom_postTextItem() {
        console.log("Entering SEFCRETEJ_entman02_entInfocom_postTextItem");
        if ((this.ENTMAN02.ENT_INFOCOM == null)) {
            this.oracleFormsBuiltins.message("CAMPO OBLIGATORIO");
        }
        console.log("Exiting SEFCRETEJ_entman02_entInfocom_postTextItem");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R7';
    // :RADIOS.TITULOREP := :this.PARAMETER.get("TITULO");
    // GO_BLOCK('DCO');
    // EXECUTE_QUERY;
    // GO_ITEM('DCO.DCO_TIPVIV'); END;
    //#endregion
    async SEFCRETEJ_entman02_entInfocom_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entInfocom_keyNextItem");
        this.RADIOS.RREPORTES = "R7";
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.go_block("DCO");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_item("DCO.DCO_TIPVIV");
        console.log("Exiting SEFCRETEJ_entman02_entInfocom_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENT_ORGFON IS NOT NULL THEN
    // BEGIN
    //     SELECT  ORIGEN_NOMBRE
    //      INTO :ENTMAN02.ENT_ORGFON_DES
    //      FROM SETORIGEN
    //     WHERE ORIGEN_CODIGO = :ENTMAN02.ENT_ORGFON;
    //     EXCEPTION 
    //       WHEN NO_DATA_FOUND THEN
    //            :ENTMAN02.ENT_ORGFON := NULL; 
    //     END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entOrgfon_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entOrgfon_whenValidateItem");
        if ((this.ENTMAN02.ENT_ORGFON != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENT_ORGFON", this.ENTMAN02.ENT_ORGFON);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entorgfon_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.ENT_ORGFON_DES = result1[0].get("ENTMAN02.ENT_ORGFON_DES");
            if (result1 == null || result1.length == 0) {

                this.ENTMAN02.ENT_ORGFON = null;
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entOrgfon_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('DCO.DCOTIPE'); END;
    //#endregion
    async SEFCRETEJ_entman02_entOrgfon_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entOrgfon_keyNextItem");
        this.oracleFormsBuiltins.go_item("DCO.DCOTIPE");
        console.log("Exiting SEFCRETEJ_entman02_entOrgfon_keyNextItem");
    }

    //#region PLSQL
    // BEGIN PUP_RVF; END;
    //#endregion
    async SEFCRETEJ_entman02_enterf_whenListChanged() {
        console.log("Entering SEFCRETEJ_entman02_enterf_whenListChanged");
        // SEFCRETEJ_PUP_RVF();
        console.log("Exiting SEFCRETEJ_entman02_enterf_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTFECE IS NULL THEN 
    //  MESSAGE('CAMPO OBLIGATORIO');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entfece_postTextItem() {
        console.log("Entering SEFCRETEJ_entman02_entfece_postTextItem");
        if ((this.ENTMAN02.ENTFECE == null)) {
            this.oracleFormsBuiltins.message("CAMPO OBLIGATORIO");
        }
        console.log("Exiting SEFCRETEJ_entman02_entfece_postTextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTFECN'); END;
    //#endregion
    async SEFCRETEJ_entman02_ori_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_ori_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTFECN");
        console.log("Exiting SEFCRETEJ_entman02_ori_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTDIR IS NOT NULL THEN
    //  GO_BLOCK('DIRECCIONESINTRO');
    //  :DIRECCIONES.CADENA := :ENTMAN02.ENTDIR;
    //  :DIRECCIONES.HOMOLOGA := :ENTMAN02.ENTDIR;
    //  :GLOBAL.CADENA:= :ENTMAN02.ENTDIR;
    //  :GLOBAL.DIR1:= 'DIR2';
    //  
    //  ELSE
    //   GO_ITEM('DIR.DIRPLOC');
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entdir1_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entdir1_keyNextItem");
        // if ((ENTDIR != null)) {
        //     this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        //     this.DIRECCIONES.CADENA = this.ENTMAN02.ENTDIR;
        //     this.DIRECCIONES.HOMOLOGA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.CADENA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.DIR1 = "DIR2";
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("DIR.DIRPLOC");
        // }
        console.log("Exiting SEFCRETEJ_entman02_entdir1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN SHOW_VIEW('PAGE_HIST_ACTIECO');
    // GO_BLOCK('SETHIACEC');
    // EXECUTE_QUERY; END;
    //#endregion
    async SEFCRETEJ_entman02_histActiv_whenButtonPressed() {
        console.log("Entering SEFCRETEJ_entman02_histActiv_whenButtonPressed");
        this.oracleFormsBuiltins.show_view("PAGE_HIST_ACTIECO");
        this.oracleFormsBuiltins.go_block("SETHIACEC");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCRETEJ_entman02_histActiv_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF(:ENTMAN02.ENTGEC IS NOT NULL) THEN
    // BEGIN
    //   SELECT TGEDES
    //     INTO :ENTMAN02.GRUPO
    //     FROM TGE
    //     WHERE TGECOD=:ENTMAN02.ENTGEC;
    //   IF  :ENTMAN02.ENTGEC = '000' THEN
    //     :ENTMAN02.GRUPO := NULL;
    //     :ENTMAN02.ENTGEC := NULL;
    //     END IF;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       :ENTMAN02.GRUPO := NULL;
    //       :ENTMAN02.ENTGEC := NULL;
    //       WHEN OTHERS THEN
    //        :ENTMAN02.GRUPO := NULL;
    //     END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entgec_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entgec_whenValidateItem");
        if ((this.ENTMAN02.ENTGEC != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("ENTGEC", this.ENTMAN02.ENTGEC);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entgec_whenvalidateitem_query1", payload1);
                // get values from result
                this.ENTMAN02.GRUPO = result1[0].get("ENTMAN02.GRUPO");
                if (this.ENTMAN02.ENTGEC == "000") {
                    this.ENTMAN02.GRUPO = null;
                    this.ENTMAN02.ENTGEC = null;
                }
                if (result1 == null || result1.length == 0) {

                    this.ENTMAN02.GRUPO = null;
                    this.ENTMAN02.ENTGEC = null;
                }

            } catch (ex) {

                this.ENTMAN02.GRUPO = null;
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entgec_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R7';
    //  COMMIT;
    //  :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    //  :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    // 
    // SHOW_VIEW ('C_ACCIONISTAS'); 
    // GO_ITEM('SETSOCIOS.SOCIOS_CODSOC');  
    // EXECUTE_QUERY; END;
    //#endregion
    async SEFCRETEJ_entman02_entgec_keyNxtblk() {
        console.log("Entering SEFCRETEJ_entman02_entgec_keyNxtblk");
        this.RADIOS.RREPORTES = "R7";
        this.PARAMETER.set("CONS_TER", this.TERMAN01.TERCOD);
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.show_view("C_ACCIONISTAS");
        this.oracleFormsBuiltins.go_item("SETSOCIOS.SOCIOS_CODSOC");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFCRETEJ_entman02_entgec_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTPAIS IS NOT NULL THEN
    // DECLARE 
    // W_CODPHOMO  VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // W_DESCRIP       VARCHAR2(25); 
    // BEGIN
    //  
    //   BEGIN
    //    SELECT TDCODFA
    //      INTO W_CODPHOMO
    //       FROM OPS$SEGUI.TDP
    //      WHERE TDPACO = :ENTMAN02.ENTPAIS;
    //      
    //      :ENTMAN02.PAIS := FRM$DESC_PAIS(:ENTMAN02.ENTPAIS);
    //      
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //       
    // END;
    // 
    //   
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entpais_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entpais_whenValidateItem");
        if ((this.ENTMAN02.ENTPAIS != null)) {
            {

                let W_CODPHOMO: string = null;
                let T_RESPUESTA: number = null;
                let W_DESCRIP: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("ENTPAIS", this.ENTMAN02.ENTPAIS);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entpais_whenvalidateitem_query1", payload1);
                // get values from result
                W_CODPHOMO = result1[0].get("W_CODPHOMO");
                // this.ENTMAN02.PAIS = FRM$DESC_PAIS(this.ENTMAN02.ENTPAIS);
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE PAIS NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entpais_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TERMAN01.TERDEP'); END;
    //#endregion
    async SEFCRETEJ_entman02_entpais_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entpais_keyNextItem");
        this.oracleFormsBuiltins.go_item("TERMAN01.TERDEP");
        console.log("Exiting SEFCRETEJ_entman02_entpais_keyNextItem");
    }

    //#region PLSQL
    // BEGIN -- (1) NORMALMENTE LA VALIDACIÓN NO TRAE VALORES, LO QUE HACE
    // -- QUE EL TRIGGER FALLE CON FRECUENCIA, OBLIGANDO A CERRAR
    // -- LA FORMA.  
    // -- JOHN E. RINCON, OCT. 20-2001
    // -- VAIDACIÓN NUEVA PARA RESTRINGIR EL CODIGO NO APLICA PARA LOS CIIU
    // --F.ACT. 2005-09-06
    // --AUTOR. RICARDO TARAZONA
    // 
    // IF :ENTMAN02.ENTCIUU IS NOT NULL THEN
    // BEGIN
    //  
    //   BEGIN
    //     SELECT  TCIDES
    //       INTO  :ENTMAN02.CIUU
    //       FROM  OPS$SEGUI.TCI
    //      WHERE  TCICOD=:ENTMAN02.ENTCIUU;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN
    //        MESSAGE('CODIGO DEL CIIU NO EXISTE, CONSULTE LISTA DE VALORES');
    //        RAISE FORM_TRIGGER_FAILURE;
    //   END;
    //   IF :ENTCIUU = '0000' THEN
    //    LIB$DTNERFRMA('ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE SELECCIONAR UN CIIU VALIDO. CONSULTE LA LISTA DE VALORES');
    //   END IF;
    //  
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entActciu_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entActciu_whenValidateItem");
        if ((this.ENTMAN02.ENTCIUU != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTCIUU", this.ENTMAN02.ENTCIUU);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entactciu_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.CIUU = result1[0].get("ENTMAN02.CIUU");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("CODIGO DEL CIIU NO EXISTE, CONSULTE LISTA DE VALORES");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

            // if (ENTCIUU == "0000") {
            //     // SEFCRETEJ_LIB$DTNERFRMA("ESTE CÓDIGO ESTÁ FUERA DE USO; EN SU LUGAR, DEBE SELECCIONAR UN CIIU VALIDO. CONSULTE LA LISTA DE VALORES");
            // }
        }
        console.log("Exiting SEFCRETEJ_entman02_entActciu_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //     VBOTON     NUMBER;
    //     T_RESPUESTA   NUMBER;
    // BEGIN
    // IF (:ENTMAN02.ENTOME = 'S')THEN
    //  IF (:SETOPINT.OPINT_TIOPE IS NULL) THEN 
    //    LIB$ALERTA('MENSAJE','POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);
    //               
    //     SET_BLOCK_PROPERTY('SETOPINT', "INSERT_ALLOWED","PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('SETOPINT',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('SETOPINT.OPINT_TIOPE', "REQUIRED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('SETOPINT.OPINT_MONOPE', "REQUIRED", "PROPERTY_TRUE");
    //   
    //  END IF;
    // 
    //    
    // ELSIF (:ENTMAN02.ENTOME = 'N') THEN
    //   IF (:SETOPINT.OPINT_TIOPE IS NOT NULL) THEN
    //    LIB$ALERTA('MENSAJE','TIENE INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.SEGURO DESEA ELIMINAR LA INFORMACION?'
    //               ,'SI', 'NO', NULL, VBOTON);
    //               
    //       IF VBOTON = 1 THEN 
    //        
    //        DELETE SETOPINT
    //        WHERE OPINT_NIT = :SETOPINT.OPINT_TERCOD;  
    //        
    //        :ENTMAN02.ENTOME := 'N';
    //        COMMIT;
    //        GO_BLOCK('SETOPINT');
    //        EXECUTE_QUERY;
    //       ELSE
    //        :ENTMAN02.ENTOME := 'S';
    //       END IF;        
    //       
    //     ELSE
    //        
    //   SET_BLOCK_PROPERTY('SETOPINT', "INSERT_ALLOWED","PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('SETOPINT',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //   
    //   SET_ITEM_PROPERTY('SETOPINT.OPINT_TIOPE', "REQUIRED", "PROPERTY_FALSE");
    //     SET_ITEM_PROPERTY('SETOPINT.OPINT_MONOPE', "REQUIRED", "PROPERTY_FALSE"); 
    // 
    //   :RADIOS.RREPORTES:='R5';
    //    :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //    GO_ITEM('ENTMAN02.ENTRTRI');
    //     END IF; 
    //     
    // 
    // ELSE
    // 
    //   IF(:ENTMAN02.ENTOME IS NULL) THEN
    //     LIB$ALERTA('MENSAJE','VALOR INGRESADO NO VÁLIDO.',NULL, NULL,NULL, T_RESPUESTA);
    //   END IF;
    // END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entome_whenListChanged() {
        console.log("Entering SEFCRETEJ_entman02_entome_whenListChanged");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        if (this.ENTMAN02.ENTOME == "S") {
            if ((this.SETOPINT.OPINT_TIOPE == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.", "ACEPTAR", null, null, VBOTON);
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_TIOPE", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_MONOPE", "REQUIRED", "PROPERTY_TRUE");
            }
        }
        else if (this.ENTMAN02.ENTOME == "N") {
            if ((this.SETOPINT.OPINT_TIOPE != null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "TIENE INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.SEGURO DESEA ELIMINAR LA INFORMACION?", "SI", "NO", null, VBOTON);
                if (VBOTON == 1) {
                    // construct payload
                    let payload1 = new Map();
                    // payload1.OPINT_TERCOD = : OPINT_TERCOD;
                    // call REST API
                    const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entome_whenlistchanged_query1", payload1);
                    this.ENTMAN02.ENTOME = "N";
                    this.oracleFormsBuiltins.go_block("SETOPINT");
                    this.oracleFormsBuiltins.execute_query();
                }
                else {
                    this.ENTMAN02.ENTOME = "S";
                }
            }
            else {
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_TIOPE", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_MONOPE", "REQUIRED", "PROPERTY_FALSE");
                this.RADIOS.RREPORTES = "R5";
                this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                this.oracleFormsBuiltins.go_item("ENTMAN02.ENTRTRI");
            }
        }
        else {
            if ((this.ENTMAN02.ENTOME == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VALOR INGRESADO NO VÁLIDO.", null, null, null, T_RESPUESTA);
            }
        }
        console.log("Exiting SEFCRETEJ_entman02_entome_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //     VBOTON     NUMBER;
    //     T_RESPUESTA   NUMBER;
    // BEGIN
    // 
    // IF (:ENTMAN02.ENTOME = 'S')THEN
    //  IF (:SETOPINT.OPINT_TIOPE IS NULL) THEN 
    //    LIB$ALERTA('MENSAJE','POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);
    //     
    //     SET_BLOCK_PROPERTY('SETOPINT', "INSERT_ALLOWED","PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('SETOPINT',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     
    //     SET_ITEM_PROPERTY('SETOPINT.OPINT_TIOPE', "REQUIRED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('SETOPINT.OPINT_MONOPE', "REQUIRED", "PROPERTY_TRUE");
    //   
    //  END IF;
    //  
    //    GO_ITEM('SETOPINT.OPINT_ENTOPE');
    //    
    // ELSIF (:ENTMAN02.ENTOME = 'N') THEN
    //   IF (:SETOPINT.OPINT_TIOPE IS NOT NULL) THEN
    //    LIB$ALERTA('MENSAJE','TIENE INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.PORFAVOR BORRE LA INFORMACIÓN PARA PODER COLOCAR LA OPCION EN NO'
    //               ,'ACEPTAR', NULL, NULL, VBOTON);
    //     :ENTMAN02.ENTOME := 'S';
    //     ELSE
    //   
    //   SET_BLOCK_PROPERTY('SETOPINT', "INSERT_ALLOWED","PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('SETOPINT',"UPDATE_ALLOWED","PROPERTY_FALSE");
    //   
    //   SET_ITEM_PROPERTY('SETOPINT.OPINT_TIOPE', "REQUIRED", "PROPERTY_FALSE");
    //     SET_ITEM_PROPERTY('SETOPINT.OPINT_MONOPE', "REQUIRED", "PROPERTY_FALSE");
    //   
    //   :RADIOS.RREPORTES:='R5';
    //    :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO");
    //    GO_ITEM('ENTMAN02.ENTRTRI');
    //     END IF; 
    //     
    // 
    // ELSE
    //   IF(:ENTMAN02.ENTOME IS NULL) THEN
    //     LIB$ALERTA('MENSAJE','VALOR INGRESADO NO VÁLIDO.',NULL, NULL,NULL, T_RESPUESTA);
    //     GO_ITEM('ENTMAN02.ENTOME');
    //   END IF;
    // END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entome_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entome_keyNextItem");
        let VBOTON: number = null;
        let T_RESPUESTA: number = null;
        if (this.ENTMAN02.ENTOME == "S") {
            if ((this.SETOPINT.OPINT_TIOPE == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "POR FAVOR INGRESE LA INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.", "ACEPTAR", null, null, VBOTON);
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_TIOPE", "REQUIRED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_MONOPE", "REQUIRED", "PROPERTY_TRUE");
            }
            this.oracleFormsBuiltins.go_item("SETOPINT.OPINT_ENTOPE");
        }
        else if (this.ENTMAN02.ENTOME == "N") {
            if ((this.SETOPINT.OPINT_TIOPE != null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "TIENE INFORMACION CORRESPONDIENTE A OPERACIONES INTERNACIONALES.PORFAVOR BORRE LA INFORMACIÓN PARA PODER COLOCAR LA OPCION EN NO", "ACEPTAR", null, null, VBOTON);
                this.ENTMAN02.ENTOME = "S";
            }
            else {
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "INSERT_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_block_property("SETOPINT", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_TIOPE", "REQUIRED", "PROPERTY_FALSE");
                this.oracleFormsBuiltins.set_item_property("SETOPINT.OPINT_MONOPE", "REQUIRED", "PROPERTY_FALSE");
                this.RADIOS.RREPORTES = "R5";
                this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
                this.oracleFormsBuiltins.go_item("ENTMAN02.ENTRTRI");
            }
        }
        else {
            if ((this.ENTMAN02.ENTOME == null)) {
                // SEFCRETEJ_LIB$ALERTA("MENSAJE", "VALOR INGRESADO NO VÁLIDO.", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_item("ENTMAN02.ENTOME");
            }
        }
        console.log("Exiting SEFCRETEJ_entman02_entome_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_CONTAR     NUMBER;
    //  T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    //  BEGIN
    //     SELECT TDPRDES
    //       INTO :ENTMAN02.ORI
    //       FROM OPS$SEGUI.TDPR
    //      WHERE (TDPRCOD = :ENTMAN02.ENTPRO);
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :ENTMAN02.ORI:='';
    //       MESSAGE('CODIGO DEL ORIGEN NO EXISTE');
    //   END;
    //     --:ENTMAN02.ENTPRO := :TERMAN01.ENTPRO;
    //     
    //   --BUSCA EL ORIGEN
    //     
    //   BEGIN
    //    SELECT COUNT(*)
    //      INTO V_CONTAR
    //      FROM OPS$SEGUI.SETORIDET 
    //      WHERE ORDET_CODORIG = :ENTMAN02.ENTPRO;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN
    //     V_CONTAR := ;
    //   END;
    //   
    //   
    //   IF V_CONTAR > 0 THEN
    //       LIB$ALERTA('MENSAJE','EL ORIGEN SELECCIONADO REQUIERE UNA OPCIÓN DE DETALLE POR FAVOR INGRESELA.',NULL, NULL, NULL, T_RESPUESTA);
    //       :ENTMAN02.ENT_OPCPRO:= NULL;
    //       :ENTMAN02.DESCR_OPC:= NULL;
    //      
    //      --8817 AOV 
    //      VALIDA_PROVEEDOR(1); -- 1 SIN MJE - KEY NEXT
    //      
    //      GO_ITEM('ENTMAN02.ENT_OPCPRO');
    //   ELSE
    //      :ENTMAN02.ENT_OPCPRO := NULL; -- MGO LOS DOS REGISTROS SON DEPENDIENTES PARA QUE QUEDE NULL DEBO ENVIAR A EL CAMPO
    //      --:ENTMAN02.ENT_OPCPRO := NULL; -- DEL OTRO BLOQUE EL REGISTRO QUE LEE DE LA TABLA EN NULL.
    //      :ENTMAN02.DESCR_OPC  := NULL;
    //      GO_ITEM('TERMAN01.TERTVI');
    //   END IF;
    //   
    // 
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entpro_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entpro_keyNextItem");
        let V_CONTAR: number = null;
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("ENTPRO", this.ENTMAN02.ENTPRO);
        // call REST API
        const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entpro_keynextitem_query1", payload1);
        // get values from result
        this.ENTMAN02.ORI = result1[0].get("ENTMAN02.ORI");
        if (result1 == null || result1.length == 0) {

            this.ENTMAN02.ORI = "";
            this.oracleFormsBuiltins.message("CODIGO DEL ORIGEN NO EXISTE");
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("ENTPRO", this.ENTMAN02.ENTPRO);
        // call REST API
        const result2 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entpro_keynextitem_query2", payload2);
        // get values from result
        V_CONTAR = result2[0].get("V_CONTAR");
        if (result2 == null || result2.length == 0) {

            V_CONTAR = null;
        }

        if (V_CONTAR > 0) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL ORIGEN SELECCIONADO REQUIERE UNA OPCIÓN DE DETALLE POR FAVOR INGRESELA.", null, null, null, T_RESPUESTA);
            this.ENTMAN02.ENT_OPCPRO = null;
            this.ENTMAN02.DESCR_OPC = null;
            // SEFCRETEJ_VALIDA_PROVEEDOR(1);
            this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_OPCPRO");
        }
        else {
            this.ENTMAN02.ENT_OPCPRO = null;
            this.ENTMAN02.DESCR_OPC = null;
            this.oracleFormsBuiltins.go_item("TERMAN01.TERTVI");
        }
        console.log("Exiting SEFCRETEJ_entman02_entpro_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENT_DEPOPE IS NOT NULL THEN
    // 
    // DECLARE 
    // DEP_EXISTE          NUMBER(1);
    // PAIS_HOMO       VARCHAR2(3);
    // T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //  BEGIN
    //   SELECT TDECOF
    //     INTO PAIS_HOMO
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD = :ENTMAN02.ENT_DEPOPE
    //      AND  DEPACO = :ENTMAN02.ENT_PAIOPE;
    //      
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','CODIGO DE DEPARTAMENTO INVALIDO... CONSULTE LISTA DE VALORES  ...',NULL,NULL,NULL,T_RESPUESTA); 
    //         RAISE FORM_TRIGGER_FAILURE;
    //  END;
    // 
    //    SELECT COUNT(1)
    //      INTO DEP_EXISTE
    //      FROM OPS$SEGUI.DEP
    //     WHERE DEPCOD=:ENTMAN02.ENT_DEPOPE
    //       AND TDECOF = PAIS_HOMO
    //       AND :ENTMAN02.ENT_DEPOPE <> '00';
    //       
    //    IF DEP_EXISTE = 0 THEN
    //      LIB$ALERTA('MENSAJE','CODIGO DE DEPARTAMENTO NO VALIDO... CONSULTE LISTA DE VALORES ...',NULL,NULL,NULL,T_RESPUESTA); 
    //      RAISE FORM_TRIGGER_FAILURE;
    //    ELSE
    //        :ENTMAN02.ENT_CIUOPE:=NULL;
    //    END IF;
    //    
    //     
    // END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entDepope_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entDepope_whenValidateItem");
        if ((this.ENTMAN02.ENT_DEPOPE != null)) {
            {

                let DEP_EXISTE: number = null;
                let PAIS_HOMO: string = null;
                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("ENT_DEPOPE", this.ENTMAN02.ENT_DEPOPE);
                payload1.set("ENT_PAIOPE", this.ENTMAN02.ENT_PAIOPE);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entdepope_whenvalidateitem_query1", payload1);
                // get values from result
                PAIS_HOMO = result1[0].get("PAIS_HOMO");
                if (result1 == null || result1.length == 0) {

                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE DEPARTAMENTO INVALIDO... CONSULTE LISTA DE VALORES  ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

                // construct payload
                let payload2 = new Map();
                payload2.set("ENT_DEPOPE", this.ENTMAN02.ENT_DEPOPE);
                // call REST API
                const result2 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entdepope_whenvalidateitem_query2", payload2);
                // get values from result
                DEP_EXISTE = result2[0].get("DEP_EXISTE");
                if (DEP_EXISTE == 0) {
                    // SEFCRETEJ_LIB$ALERTA("MENSAJE", "CODIGO DE DEPARTAMENTO NO VALIDO... CONSULTE LISTA DE VALORES ...", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }
                else {
                    this.ENTMAN02.ENT_CIUOPE = null;
                }
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entDepope_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTFECN > SYSDATE THEN
    //  MESSAGE('LA FECHA NO PUEDE SER MAYOR A LA ACTUAL');
    //  MESSAGE('LA FECHA NO PUEDE SER MAYOR A LA ACTUAL');
    //  RAISE FORM_TRIGGER_FAILURE;
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entfecn_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entfecn_whenValidateItem");
        if (this.ENTMAN02.ENTFECN > PLSQLBuiltins.sysdate()) {
            this.oracleFormsBuiltins.message("LA FECHA NO PUEDE SER MAYOR A LA ACTUAL");
            this.oracleFormsBuiltins.message("LA FECHA NO PUEDE SER MAYOR A LA ACTUAL");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_entman02_entfecn_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TERAPE'); END;
    //#endregion
    async SEFCRETEJ_entman02_entfecn_keyPrevItem() {
        console.log("Entering SEFCRETEJ_entman02_entfecn_keyPrevItem");
        this.oracleFormsBuiltins.go_item("TERAPE");
        console.log("Exiting SEFCRETEJ_entman02_entfecn_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTPRO'); END;
    //#endregion
    async SEFCRETEJ_entman02_entfecn_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entfecn_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTPRO");
        console.log("Exiting SEFCRETEJ_entman02_entfecn_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('ENTMAN02.ENTOVC'); END;
    //#endregion
    async SEFCRETEJ_entman02_entema_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entema_keyNextItem");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTOVC");
        console.log("Exiting SEFCRETEJ_entman02_entema_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //  IF PLSQLBuiltins.string_length(:ENTTEL) != 7 THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO TELEFONO DEBE TENER 7 DIGITOS',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF :ENTTEL IN ('3122377', '3122510', '2669421', '2660939', '6604500', '6604499', '3344324', '6331476', '6825373') THEN
    //   LIB$ALERTA('MENSAJE','EL CAMPO TELÉFONO NO DEBE PERTENECER A LEASING BOLIVAR',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_enttel_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_enttel_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (PLSQLBuiltins.string_length(ENTTEL) != 7) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO TELEFONO DEBE TENER 7 DIGITOS", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // if (["3122377", "3122510", "2669421", "2660939", "6604500", "6604499", "3344324", "6331476", "6825373"].indexOf(ENTTEL) != -1) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO TELÉFONO NO DEBE PERTENECER A LEASING BOLIVAR", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_entman02_enttel_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    // T_RESPUESTA     NUMBER;
    // BEGIN
    //  IF PLSQLBuiltins.string_length(:ENTFAX) != 7 THEN
    //    LIB$ALERTA('MENSAJE','EL CAMPO FAX DEBE TENER 7 DIGITOS',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    //  IF :ENTFAX IN ('3122377', '3122510', '2669421', '2660939', '6604500', '6604499', '3344324', '6331476', '6825373') THEN
    //   LIB$ALERTA('MENSAJE','EL CAMPO FAX NO DEBE PERTENECER A UN NÚMERO DE LEASING BOLIVAR',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entfax_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entfax_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (PLSQLBuiltins.string_length(ENTFAX) != 7) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO FAX DEBE TENER 7 DIGITOS", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // if (["3122377", "3122510", "2669421", "2660939", "6604500", "6604499", "3344324", "6331476", "6825373"].indexOf(ENTFAX) != -1) {
        //     // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL CAMPO FAX NO DEBE PERTENECER A UN NÚMERO DE LEASING BOLIVAR", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting SEFCRETEJ_entman02_entfax_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTACT IS NOT NULL THEN
    // BEGIN
    //   SELECT DESACT
    //   INTO   :ENTMAN02.DESACT
    //   FROM   OPS$CONTAB.CTTPIICA
    //         ,OPS$CONTAB.CGPCECOS
    //   WHERE ACTECO = :ENTMAN02.ENTACT
    //     AND CENCOS = CGCCECOS_CODCEN
    //     AND CENCOS = '2'||:TERAGE||'0';
    // 
    //   EXCEPTION
    //      WHEN TOO_MANY_ROWS THEN NULL;
    //     /* WHEN NO_DATA_FOUND THEN
    //          :ENTMAN02.DESACT := NULL;
    //          :ENTMAN02.ENTACT := '0000';*/
    //   END;
    //   END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entDetact_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entDetact_whenValidateItem");
        if ((this.ENTMAN02.ENTACT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTACT", this.ENTMAN02.ENTACT);
            // payload1.set("TERAGE", TERAGE);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entdetact_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.DESACT = result1[0].get("ENTMAN02.DESACT");
        }
        console.log("Exiting SEFCRETEJ_entman02_entDetact_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_SIREPITE  NUMBER;
    // BEGIN
    //  SELECT INSTR(:ENTMAN02.ENTMAIL,'@', 1, 2)
    //    INTO V_SIREPITE
    //   FROM DUAL;
    //  
    //  IF V_SIREPITE <> 0 THEN
    //   MESSAGE('SOLO PUEDE INGRESAR UN CORREO ELECTRONICO.');
    //   MESSAGE('SOLO PUEDE INGRESAR UN CORREO ELECTRONICO.');
    //   GO_ITEM('ENTMAIL');
    //  ELSE
    //   GO_ITEM('ENT_PAGWEB');
    //   END IF;
    //  
    // END; 
    //#endregion
    async SEFCRETEJ_entman02_entmail_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entmail_keyNextItem");
        let V_SIREPITE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("ENTMAIL", this.ENTMAN02.ENTMAIL);
        // call REST API
        const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entmail_keynextitem_query1", payload1);
        // get values from result
        V_SIREPITE = result1[0].get("V_SIREPITE");
        if (V_SIREPITE != 0) {
            this.oracleFormsBuiltins.message("SOLO PUEDE INGRESAR UN CORREO ELECTRONICO.");
            this.oracleFormsBuiltins.message("SOLO PUEDE INGRESAR UN CORREO ELECTRONICO.");
            this.oracleFormsBuiltins.go_item("ENTMAIL");
        }
        else {
            this.oracleFormsBuiltins.go_item("ENT_PAGWEB");
        }
        console.log("Exiting SEFCRETEJ_entman02_entmail_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :RADIOS.RREPORTES:='R6';
    // COMMIT;
    // :this.PARAMETER.get("CONS_TER") := :TERMAN01.TERCOD;
    // :RADIOS.TITULOREP :=  :this.PARAMETER.get("TITULO"); 
    // SHOW_VIEW ('C_EMPRESARIAL');
    // GO_ITEM('ENTMAN02.ENTGEC'); END;
    //#endregion
    async SEFCRETEJ_entman02_terident_keyNxtblk() {
        console.log("Entering SEFCRETEJ_entman02_terident_keyNxtblk");
        this.RADIOS.RREPORTES = "R6";
        // this.PARAMETER.get("CONS_TER") = this.TERMAN01.TERCOD;
        this.RADIOS.TITULOREP = this.PARAMETER.get("TITULO");
        this.oracleFormsBuiltins.show_view("C_EMPRESARIAL");
        this.oracleFormsBuiltins.go_item("ENTMAN02.ENTGEC");
        console.log("Exiting SEFCRETEJ_entman02_terident_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTOPI = 'N' THEN
    //   SET_ITEM_PROPERTY('SETOPINT1.OPINT_TIOPE',ENABLED,"PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('SETOPINT1.DESCRIP',ENABLED,"PROPERTY_FALSE");
    //   
    //   --:SETOPINT1.OPINT_TIOPE := NULL;
    //   --:SETOPINT1.DESCRIP := NULL;
    // ELSE
    //    SET_ITEM_PROPERTY('SETOPINT1.OPINT_TIOPE',ENABLED,"PROPERTY_TRUE");
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entopi_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entopi_whenValidateItem");
        if (this.ENTMAN02.ENTOPI == "N") {
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.OPINT_TIOPE", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.DESCRIP", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.OPINT_TIOPE", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting SEFCRETEJ_entman02_entopi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  OPERA   VARCHAR2(2):= NULL;
    // BEGIN
    // IF :ENTMAN02.ENTOPI = 'N' THEN
    //   SET_ITEM_PROPERTY('SETOPINT1.OPINT_TIOPE',ENABLED,"PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('SETOPINT1.DESCRIP',ENABLED,"PROPERTY_FALSE");
    //   
    //    BEGIN
    //      SELECT OPINT_TIOPE 
    //        INTO OPERA
    //      FROM SETOPINT
    //      WHERE OPINT_NIT = :TERMAN01.TERCOD;
    //    EXCEPTION
    //     WHEN OTHERS THEN
    //      OPERA := NULL;
    //    END;
    //    
    //    IF (OPERA = '09' OR OPERA= '06' OR OPERA = '07' OR OPERA IS NULL) THEN
    //     NULL;
    //    ELSE 
    //     DELETE FROM SETOPINT
    //     WHERE OPINT_NIT = :TERMAN01.TERCOD
    //       AND OPINT_TIOPE = OPERA;
    //      
    //      
    //     
    //    END IF;
    //    
    // ELSE
    //    SET_ITEM_PROPERTY('SETOPINT1.OPINT_TIOPE',ENABLED,"PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SETOPINT1.DESCRIP',ENABLED,"PROPERTY_TRUE");
    // END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entopi_whenListChanged() {
        console.log("Entering SEFCRETEJ_entman02_entopi_whenListChanged");
        let OPERA: string = null;
        if (this.ENTMAN02.ENTOPI == "N") {
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.OPINT_TIOPE", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.DESCRIP", "ENABLED", "PROPERTY_FALSE");
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("TERCOD", this.TERMAN01.TERCOD);
                // call REST API
                const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entopi_whenlistchanged_query1", payload1);
                // get values from result
                OPERA = result1[0].get("OPERA");
            } catch (ex) {

                OPERA = null;
            }

            if ((((OPERA == "09" || OPERA == "06") || OPERA == "07") || (OPERA == null))) {
            }
            else {
                // construct payload
                let payload2 = new Map();
                // payload2.TERCOD = : TERCOD;
                // call REST API
                const result2 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entopi_whenlistchanged_query2", payload2);
            }
        }
        else {
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.OPINT_TIOPE", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.DESCRIP", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting SEFCRETEJ_entman02_entopi_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTOPI = 'N' THEN
    //   SET_ITEM_PROPERTY('SETOPINT1.OPINT_TIOPE',ENABLED,"PROPERTY_FALSE");
    //   SET_ITEM_PROPERTY('SETOPINT1.DESCRIP',ENABLED,"PROPERTY_FALSE");
    //   GO_ITEM('ENTMAN02.ENTOME');
    // ELSE
    //    SET_ITEM_PROPERTY('SETOPINT1.OPINT_TIOPE',ENABLED,"PROPERTY_TRUE");
    //    SET_ITEM_PROPERTY('SETOPINT1.DESCRIP',ENABLED,"PROPERTY_TRUE");
    //    GO_ITEM('SETOPINT1.OPINT_TIOPE');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entopi_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entopi_keyNextItem");
        if (this.ENTMAN02.ENTOPI == "N") {
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.OPINT_TIOPE", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.DESCRIP", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.go_item("ENTMAN02.ENTOME");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.OPINT_TIOPE", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SETOPINT1.DESCRIP", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.go_item("SETOPINT1.OPINT_TIOPE");
        }
        console.log("Exiting SEFCRETEJ_entman02_entopi_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_CONTAR  NUMBER;
    // BEGIN
    //  IF :ENTMAN02.ENTPRO IS NOT NULL AND  :ENTMAN02.ENT_OPCPRO IS NOT NULL THEN
    // 
    //     BEGIN
    //       SELECT ORDET_DESOPC
    //         INTO :ENTMAN02.DESCR_OPC
    //         FROM OPS$SEGUI.SETORIDET
    //        WHERE (ORDET_CODORIG = :ENTMAN02.ENTPRO)
    //          AND ORDET_CODOPC = :ENTMAN02.ENT_OPCPRO;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       :ENTMAN02.DESCR_OPC:='';
    //       MESSAGE('CODIGO DEL ORIGEN NO EXISTE VERIFIQUE OPCIÓN PROCEDENCIA');
    //     END;
    //   END IF; 
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entOpcpro_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entOpcpro_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_CONTAR: number = null;
        if (((this.ENTMAN02.ENTPRO != null) && (this.ENTMAN02.ENT_OPCPRO != null))) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTPRO", this.ENTMAN02.ENTPRO);
            payload1.set("ENT_OPCPRO", this.ENTMAN02.ENT_OPCPRO);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entopcpro_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.DESCR_OPC = result1[0].get("ENTMAN02.DESCR_OPC");
            if (result1 == null || result1.length == 0) {

                this.ENTMAN02.DESCR_OPC = "";
                this.oracleFormsBuiltins.message("CODIGO DEL ORIGEN NO EXISTE VERIFIQUE OPCIÓN PROCEDENCIA");
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entOpcpro_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //   IF :ENTMAN02.ENT_OPCPRO IS NOT NULL THEN
    //     GO_ITEM('ENTMAN02.DESCR_OPC');
    //   ELSIF :ENTMAN02.ENTPRO IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','EL ORIGEN SELECCIONADO REQUIERE UNA OPCIÓN DE DETALLE POR FAVOR INGRESELA.',NULL, NULL, NULL, T_RESPUESTA);
    //       GO_ITEM('ENTMAN02.ENT_OPCPRO');
    //   END IF;
    // 
    // END;
    //#endregion
    async SEFCRETEJ_entman02_entOpcpro_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entOpcpro_keyNextItem");
        let T_RESPUESTA: number = null;
        if ((this.ENTMAN02.ENT_OPCPRO != null)) {
            this.oracleFormsBuiltins.go_item("ENTMAN02.DESCR_OPC");
        }
        else if ((this.ENTMAN02.ENTPRO != null)) {
            // SEFCRETEJ_LIB$ALERTA("MENSAJE", "EL ORIGEN SELECCIONADO REQUIERE UNA OPCIÓN DE DETALLE POR FAVOR INGRESELA.", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_item("ENTMAN02.ENT_OPCPRO");
        }
        console.log("Exiting SEFCRETEJ_entman02_entOpcpro_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTDIR IS NOT NULL THEN
    //  GO_BLOCK('DIRECCIONESINTRO');
    //  :DIRECCIONES.CADENA := :ENTMAN02.ENTDIR;
    //  :DIRECCIONES.HOMOLOGA := :ENTMAN02.ENTDIR;
    //  :GLOBAL.CADENA:= :ENTMAN02.ENTDIR;
    //  :GLOBAL.DIR1:= 'DIR1';
    //  
    //  ELSE
    //   GO_ITEM('ENTDIR1');
    //  END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entdir_keyNextItem() {
        console.log("Entering SEFCRETEJ_entman02_entdir_keyNextItem");
        // if ((ENTDIR != null)) {
        //     this.oracleFormsBuiltins.go_block("DIRECCIONESINTRO");
        //     this.DIRECCIONES.CADENA = this.ENTMAN02.ENTDIR;
        //     this.DIRECCIONES.HOMOLOGA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.CADENA = this.ENTMAN02.ENTDIR;
        //     // this.GLOBAL.DIR1 = "DIR1";
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("ENTDIR1");
        // }
        console.log("Exiting SEFCRETEJ_entman02_entdir_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTACT IS NOT NULL THEN
    // BEGIN
    //   SELECT DESACT
    //   INTO   :ENTMAN02.DESACT
    //   FROM   OPS$CONTAB.CTTPIICA
    //         ,OPS$CONTAB.CGPCECOS
    //   WHERE ACTECO = :ENTMAN02.ENTACT
    //     AND CENCOS = CGCCECOS_CODCEN
    //     AND CENCOS = '2'||:TERAGE||'0'
    //     AND ACTECO <> '0000';
    // 
    //   EXCEPTION
    //      WHEN TOO_MANY_ROWS THEN NULL;
    //      WHEN NO_DATA_FOUND THEN
    //          MESSAGE('INGRESE OFICINA Y AGENCIA PARA ESTA OPCION');
    //          --:ENTMAN02.DESACT := NULL;
    //          --:ENTMAN02.ENTACT := '0000';
    //           
    //   END;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entact_whenValidateItem() {
        console.log("Entering SEFCRETEJ_entman02_entact_whenValidateItem");
        if ((this.ENTMAN02.ENTACT != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("ENTACT", this.ENTMAN02.ENTACT);
            // payload1.set("TERAGE", TERAGE);
            // call REST API
            const result1 = await Rest.post("/sefcretej_entman02/sefcretej_entman02_entact_whenvalidateitem_query1", payload1);
            // get values from result
            this.ENTMAN02.DESACT = result1[0].get("ENTMAN02.DESACT");
            if (result1 == null || result1.length == 0) {

                this.oracleFormsBuiltins.message("INGRESE OFICINA Y AGENCIA PARA ESTA OPCION");
            }

        }
        console.log("Exiting SEFCRETEJ_entman02_entact_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF GET_ITEM_PROPERTY('ENTMAN02.ENTACT',REQUIRED) = 'TRUE' 
    //   AND :ENTMAN02.ENTACT IS NULL  THEN
    //   MESSAGE('INGRESE CODIGO');
    //   MESSAGE('INGRESE CODIGO');
    // RAISE FORM_TRIGGER_FAILURE;
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entact_postTextItem() {
        console.log("Entering SEFCRETEJ_entman02_entact_postTextItem");
        if ((this.oracleFormsBuiltins.get_item_property("ENTMAN02.ENTACT", "REQUIRED") == "TRUE" && (this.ENTMAN02.ENTACT == null))) {
            this.oracleFormsBuiltins.message("INGRESE CODIGO");
            this.oracleFormsBuiltins.message("INGRESE CODIGO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFCRETEJ_entman02_entact_postTextItem");
    }

    //#region PLSQL
    // BEGIN IF :ENTMAN02.ENTDES IS NULL THEN 
    //  MESSAGE('CAMPO OBLIGATORIO');
    // END IF; END;
    //#endregion
    async SEFCRETEJ_entman02_entdes_postTextItem() {
        console.log("Entering SEFCRETEJ_entman02_entdes_postTextItem");
        if ((this.ENTMAN02.ENTDES == null)) {
            this.oracleFormsBuiltins.message("CAMPO OBLIGATORIO");
        }
        console.log("Exiting SEFCRETEJ_entman02_entdes_postTextItem");
    }

    //#region PLSQL
    // BEGIN PUP_TESO; END;
    //#endregion
    async SEFCRETEJ_entman02_entete_whenListChanged() {
        console.log("Entering SEFCRETEJ_entman02_entete_whenListChanged");
        // SEFCRETEJ_PUP_TESO();
        console.log("Exiting SEFCRETEJ_entman02_entete_whenListChanged");
    }

}

