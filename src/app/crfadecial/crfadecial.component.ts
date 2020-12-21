import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFADECIAL business logic
import {
    CRTOTERSOL,
    CRTSOLICR1,
    CRTSOLICR2,
    COTTIPXCOM1,
    TOOLBAR,
    BASE,
    COTUVPCCV,
    VARIABLE,
    EXTRANJERO01,
    CRTSOLICR,
    CRTTEREXT,
    CRTOTERSOL3,
    CRTOTERSOL1
} from "./CRFADECIAL_models";



// class CRFADECIAL
@Component({
    selector: 'app-crfadecial',
    templateUrl: './crfadecial.component.html',
})
export class CrfadecialComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTOTERSOL: CRTOTERSOL = new CRTOTERSOL();
    public CRTSOLICR1: CRTSOLICR1 = new CRTSOLICR1();
    public CRTSOLICR2: CRTSOLICR2 = new CRTSOLICR2();
    public COTTIPXCOM1: COTTIPXCOM1 = new COTTIPXCOM1();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();
    public COTUVPCCV: COTUVPCCV = new COTUVPCCV();
    public VARIABLE: VARIABLE = new VARIABLE();
    public EXTRANJERO01: EXTRANJERO01 = new EXTRANJERO01();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CRTTEREXT: CRTTEREXT = new CRTTEREXT();
    public CRTOTERSOL3: CRTOTERSOL3 = new CRTOTERSOL3();
    public CRTOTERSOL1: CRTOTERSOL1 = new CRTOTERSOL1();


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
    async CRFADECIAL_onClearDetails() {
        console.log("Entering CRFADECIAL_onClearDetails");
        // CRFADECIAL_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFADECIAL_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRFADECIAL_whenMouseDoubleclick() {
        console.log("Entering CRFADECIAL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRFADECIAL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN FRM$POST_FORM; END;
    //#endregion
    async CRFADECIAL_postForm() {
        console.log("Entering CRFADECIAL_postForm");
        // CRFADECIAL_FRM$POST_FORM();
        console.log("Exiting CRFADECIAL_postForm");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFADECIAL_preForm() {
        console.log("Entering CRFADECIAL_preForm");
        // CRFADECIAL_PANTALLA();
        // CRFADECIAL_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFADECIAL_preForm");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFADECIAL_whenNewFormInstance() {
        console.log("Entering CRFADECIAL_whenNewFormInstance");
        // CRFADECIAL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFADECIAL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PUP_VALIDA_TER; --CODIGOS DE ESTRATEGIA 26502
    // PU_VALIDAGUARDA; END;
    //#endregion
    async CRFADECIAL_keyCommit() {
        console.log("Entering CRFADECIAL_keyCommit");
        // CRFADECIAL_PUP_VALIDA_TER();
        // CRFADECIAL_PU_VALIDAGUARDA();
        console.log("Exiting CRFADECIAL_keyCommit");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtotersol_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtotersol_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtotersol_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADECIAL_crtotersol_preQuery() {
        console.log("Entering CRFADECIAL_crtotersol_preQuery");
        this.CRTOTERSOL.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADECIAL_crtotersol_preQuery");
    }

    //#region PLSQL
    // BEGIN --**************************************************************************************************************
    // /*     --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    //  V_VALIDANIT   NUMBER;
    //  V_VALIDANIT2   NUMBER;
    // BEGIN
    // 
    //  IF :VARIABLE.UNIDAD = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    // ---------     ********************************************     -----------------------------------------------------
    // ---- VALIDA QUE EL TERCERO DE LA TABLA DE COTUVPCCV SE ENCUENTRE EN LA TABLA CRTOTERSOL ------------------------------
    // 
    //  BEGIN
    //   
    //   FIRST_RECORD;
    // 
    //        LOOP
    //        
    //         V_VALIDANIT2 := :CRTOTERSOL.OTERSOL_NITTER;
    //            SELECT  COUNT (UVPCCV_TERCOP)
    //            INTO V_VALIDANIT
    //              FROM CRTOTERSOL, COTUVPCCV, CRTSOLICR
    //             WHERE   SOLICR_CODVOR  =  UVPCCV_SOLVOR
    //                 AND SOLICR_CODUNI  =  UVPCCV_CODUNI
    //                 AND SOLICR_CODUNI  =  OTERSOL_CODUNI
    //                 AND SOLICR_CODSOL  =  OTERSOL_CODSOL
    //                 AND SOLICR_OFCSOL  =  OTERSOL_OFCSOL
    //                 AND SOLICR_CODUNI  =  :VARIABLE.UNIDAD
    //                 AND SOLICR_OFCSOL  =  :VARIABLE.OFICINA 
    //                 AND SOLICR_CODSOL  =  :VARIABLE.SOLICITUD  
    //                 AND UVPCCV_TERCOP IN  (V_VALIDANIT2)
    //                 AND ROWNUM = 1;
    //                 IF V_VALIDANIT = '1' THEN
    //                  EXIT;
    //                  END IF;
    //                 EXIT WHEN :SYSTEM.LAST_RECORD ='TRUE';
    //               NEXT_RECORD;
    //               SYNCHRONIZE;
    //         END LOOP;
    //           EXCEPTION
    //            WHEN OTHERS THEN
    //            V_VALIDANIT := '0';
    //    
    //   END;
    //          IF  V_VALIDANIT = '0' THEN         
    //           LIB$DTNERFRMA('LOS NIT DEL PROVEEDOR NACIONAL Y DEL CONCESIONARIO SON DISTINTOS POR FAVOR VALIDAR.');
    //              RAISE FORM_TRIGGER_FAILURE;
    //           ELSE         
    //           NULL;
    //          END IF;
    //  END IF;
    // 
    // END;*/
    // 
    // --------------------   ***********************************************************    ---------------------   
    // 
    // 
    // :CRTOTERSOL.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL.OTERSOL_CODUNI := :CRTSOLICR.SOLICR_CODUNI;--CB: ARQUITECTURA
    // :CRTOTERSOL.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADECIAL_crtotersol_preUpdate() {
        console.log("Entering CRFADECIAL_crtotersol_preUpdate");
        this.CRTOTERSOL.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL.OTERSOL_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        this.CRTOTERSOL.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADECIAL_crtotersol_preUpdate");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADECIAL_crtotersol_whenNewBlockInstance() {
        console.log("Entering CRFADECIAL_crtotersol_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADECIAL_crtotersol_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADECIAL_crtotersol_whenCreateRecord() {
        console.log("Entering CRFADECIAL_crtotersol_whenCreateRecord");
        this.CRTOTERSOL.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADECIAL_crtotersol_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN PUP_VALIDA_TER; ----CODIGOS DE ESTRATEGIA 26502
    // COMMIT; END;
    //#endregion
    async CRFADECIAL_crtotersol_keyCommit() {
        console.log("Entering CRFADECIAL_crtotersol_keyCommit");
        // CRFADECIAL_PUP_VALIDA_TER();
        console.log("Exiting CRFADECIAL_crtotersol_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTOTERSOL.NOMBRE := PU_NOMBRE_TERCERO (:CRTOTERSOL.OTERSOL_NITTER);
    // END;
    //#endregion
    async CRFADECIAL_crtotersol_postQuery() {
        console.log("Entering CRFADECIAL_crtotersol_postQuery");
        // this.CRTOTERSOL.NOMBRE = PU_NOMBRE_TERCERO(CRTOTERSOL.OTERSOL_NITTER);
        console.log("Exiting CRFADECIAL_crtotersol_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL.OTERSOL_CODUNI := :CRTSOLICR.SOLICR_CODUNI;--CB: ARQUITECTURA
    // :CRTOTERSOL.OTERSOL_TIPVIN := '09';--:VARIABLE.TIPO_VINCULA; --LANS 29/JUL/2019; END;
    //#endregion
    async CRFADECIAL_crtotersol_preInsert() {
        console.log("Entering CRFADECIAL_crtotersol_preInsert");
        this.CRTOTERSOL.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL.OTERSOL_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        this.CRTOTERSOL.OTERSOL_TIPVIN = "09";
        console.log("Exiting CRFADECIAL_crtotersol_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF :CRTOTERSOL.OTERSOL_GIRDIR > :GLOBAL.VALOR_ANTERIOR AND
    //       :CRTOTERSOL.OTERSOL_GIRDIR > 0   
    //    THEN
    //       LIB$ALERTA('MENSAJE','EL VALOR DEL ANTICIPO A PROVEEDORES NO PUEDE SER MAYOR AL APROBADO EN COMITÉ. REVISE, EL VALOR A CAMBIAR  ES: '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTOTERSOL.OTERSOL_GIRDIR  := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtotersol_otersolGirdir_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtotersol_otersolGirdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((CRTOTERSOL.OTERSOL_GIRDIR > GLOBAL.VALOR_ANTERIOR && CRTOTERSOL.OTERSOL_GIRDIR > 0)) {
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL VALOR DEL ANTICIPO A PROVEEDORES NO PUEDE SER MAYOR AL APROBADO EN COMITÉ. REVISE, EL VALOR A CAMBIAR  ES: " + GLOBAL.VALOR_ANTERIOR, null, null, null, T_RESPUESTA);
        //     this.CRTOTERSOL.OTERSOL_GIRDIR = this.GLOBAL.VALOR_ANTERIOR;
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFADECIAL_crtotersol_otersolGirdir_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    //    V_PROVREF OPS$COLOCA.CRTREFPRV.REFPRV_CODPRV%TYPE;
    //    V_ORIGEN  OPS$COLOCA.CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //    V_TERPROV OPS$COLOCA.CRTREFPRV.REFPRV_CODPRV%TYPE;    
    //    VREG NUMBER;
    //    
    // BEGIN
    //   IF  :CRTOTERSOL.OTERSOL_NITTER IS NOT NULL THEN
    // 
    //    BEGIN
    //      SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //      INTO   :CRTOTERSOL.NOMBRE, :CRTOTERSOL.OTERSOL_TIPPER, :CRTOTERSOL.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD = :CRTOTERSOL.OTERSOL_NITTER);
    // 
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //    EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL, NULL, NULL, T_RESPUESTA); 
    //            RAISE FORM_TRIGGER_FAILURE;
    //        
    //     END;
    // 
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //   END IF;  
    //   
    //   
    //   --PY 12373
    //   --PUP_VALIDATERCE(:CRTOTERSOL.OTERSOL_NITTER);
    //   --PY 12373
    //   
    //   
    //   --VALIDACION PROVEEDORES REFERIDOS 
    //  ------------------------------------------------------------ 
    //   IF :CRTSOLICR.SOLICR_CODPRO = 'RFP'  AND :CRTSOLICR.SOLICR_LINEA = 'LE' 
    //     AND :CRTOTERSOL.OTERSOL_TIPVIN = '09' THEN
    //    
    //   
    //        BEGIN
    //        SELECT REFPRV_CODPRV,REFPRV_ORIGEN
    //          INTO V_PROVREF, V_ORIGEN
    //       FROM OPS$COLOCA.CRTREFPRV 
    //       WHERE REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //         AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //         AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //         ;
    //      EXCEPTION WHEN NO_DATA_FOUND THEN  
    //          V_PROVREF := NULL;
    //          V_ORIGEN := 'N';
    //      END;
    //     
    //         VREG := TO_NUMBER(:SYSTEM.TRIGGER_RECORD);
    // 
    //         IF VREG = 1 THEN 
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO',NULL,NULL,NULL,T_RESPUESTA);               
    //           IF :CRTOTERSOL.OTERSOL_NITTER <> NVL(V_PROVREF,:CRTSOLICR.REF_PROVEEDOR) THEN           
    //                 LIB$DTNERFRMA('EL NIT DEL TERCERO '||:CRTOTERSOL.OTERSOL_NITTER||' ES DIFERENTE AL NIT DEL PROVEEDOR REFERENCIADO.'||V_PROVREF);
    //           ELSIF V_ORIGEN = 'R' THEN
    //             LIB$ALERTA('MENSAJE','LA SOLICITUD VIENE DE UNA RECONSIDERACION. VALIDE SI DEBE CAMBIAR EL TIPO DE PRODUCTO YA QUE EL PROVEEDOR NO ES EL REFERENCIADO ORIGINAL.', NULL, NULL, NULL, T_RESPUESTA);                  
    //           END IF;
    //         END IF;
    //          
    //    
    //          
    //   END IF; 
    //  ------------------------------------------------------------   
    //  /* 
    //    AUTOR  : GEXNOVA
    //    FECHA  : 13.09.2018
    //    MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //  */
    //  PVALTER(:CRTOTERSOL.OTERSOL_NITTER, :CRTOTERSOL.OTERSOL_TIPIDE);
    //   
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtotersol_otersolNitter_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtotersol_otersolNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PROVREF: string = null;
        let V_ORIGEN: string = null;
        let V_TERPROV: string = null;
        let VREG: number = null;
        // if ((CRTOTERSOL.OTERSOL_NITTER != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("OTERSOL_NITTER", CRTOTERSOL.OTERSOL_NITTER);
        //     // call REST API
        //     const result1 = await Rest.post("/crfadecial_crtotersol/crfadecial_crtotersol_otersolnitter_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     CRTOTERSOL.NOMBRE = result1[0].get("CRTOTERSOL.NOMBRE");
        //     CRTOTERSOL.OTERSOL_TIPPER = result1[0].get("CRTOTERSOL.OTERSOL_TIPPER");
        //     CRTOTERSOL.OTERSOL_TIPIDE = result1[0].get("CRTOTERSOL.OTERSOL_TIPIDE");
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
        //     if (result1 == null || result1.length == 0) {

        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        // }
        // else {
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        // }
        // if (((CRTSOLICR.SOLICR_CODPRO == "RFP" && CRTSOLICR.SOLICR_LINEA == "LE") && CRTOTERSOL.OTERSOL_TIPVIN == "09")) {
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result2 = await Rest.post("/crfadecial_crtotersol/crfadecial_crtotersol_otersolnitter_whenvalidateitem_query2", payload2);
        //     // get values from result
        //     V_PROVREF = result2[0].get("V_PROVREF");
        //     V_ORIGEN = result2[0].get("V_ORIGEN");
        //     if (result2 == null || result2.length == 0) {

        //         V_PROVREF = null;
        //         V_ORIGEN = "N";
        //     }

        //     VREG = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("TRIGGER_RECORD"));
        //     if (VREG == 1) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO", null, null, null, T_RESPUESTA);
        //         if (CRTOTERSOL.OTERSOL_NITTER != V_PROVREF == null ? CRTSOLICR.REF_PROVEEDOR : V_PROVREF) {
        //             // CRFADECIAL_LIB$DTNERFRMA("EL NIT DEL TERCERO " + CRTOTERSOL.OTERSOL_NITTER + " ES DIFERENTE AL NIT DEL PROVEEDOR REFERENCIADO." + V_PROVREF);
        //         }
        //         else if (V_ORIGEN == "R") {
        //             // CRFADECIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD VIENE DE UNA RECONSIDERACION. VALIDE SI DEBE CAMBIAR EL TIPO DE PRODUCTO YA QUE EL PROVEEDOR NO ES EL REFERENCIADO ORIGINAL.", null, null, null, T_RESPUESTA);
        //         }
        //     }
        // }
        // CRFADECIAL_PVALTER(CRTOTERSOL.OTERSOL_NITTER, CRTOTERSOL.OTERSOL_TIPIDE);
        console.log("Exiting CRFADECIAL_crtotersol_otersolNitter_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR1.SOLICR_TIPCRE_MOD := :CRTSOLICR1.SOLICR_TIPCRE;  --PY 7930; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_whenNewRecordInstance() {
        console.log("Entering CRFADECIAL_crtsolicr1_whenNewRecordInstance");
        this.CRTSOLICR1.SOLICR_TIPCRE_MOD = this.CRTSOLICR1.SOLICR_TIPCRE;
        console.log("Exiting CRFADECIAL_crtsolicr1_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO  := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    // 
    // 
    // IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR THEN
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                             SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //               :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr1_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr1_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr1_keyEntqry() {
        console.log("Entering CRFADECIAL_crtsolicr1_keyEntqry");
        console.log("Exiting CRFADECIAL_crtsolicr1_keyEntqry");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr1_keyClrblk() {
        console.log("Entering CRFADECIAL_crtsolicr1_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFADECIAL_crtsolicr1_keyClrblk");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN1', "VISIBLE") = 'FALSE' THEN
    //    UP;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_keyUp() {
        console.log("Entering CRFADECIAL_crtsolicr1_keyUp");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN1", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.up();
        }
        else {
        }
        console.log("Exiting CRFADECIAL_crtsolicr1_keyUp");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_keyCommit() {
        console.log("Entering CRFADECIAL_crtsolicr1_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADECIAL_crtsolicr1_keyCommit");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR1.SOLICR_TIPCRE = '03' THEN --PY 7930
    //  BEGIN
    //   SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR1.BIEN
    //     FROM CRTTIPBIEN
    //     WHERE TIPBIEN_CODBIEN = :CRTSOLICR1.SOLICR_TIPBIE
    //      AND TIPBIEN_CODUNI = :CRTSOLICR1.SOLICR_CODUNI --ARQUITECTURA
    //     ;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN :CRTSOLICR1.BIEN := NULL;  --PY 7930
    //  END; 
    // END IF; --PY 7930; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_postQuery() {
        console.log("Entering CRFADECIAL_crtsolicr1_postQuery");
        // if (CRTSOLICR1.SOLICR_TIPCRE == "03") {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("SOLICR_TIPBIE", CRTSOLICR1.SOLICR_TIPBIE);
        //     payload1.set("SOLICR_CODUNI", CRTSOLICR1.SOLICR_CODUNI);
        //     // call REST API
        //     const result1 = await Rest.post("/crfadecial_crtsolicr1/crfadecial_crtsolicr1_postquery_query1", payload1);
        //     // get values from result
        //     CRTSOLICR1.BIEN = result1[0].get("CRTSOLICR1.BIEN");
        //     if (result1 == null || result1.length == 0) {

        //         this.CRTSOLICR1.BIEN = null;
        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr1_postQuery");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN', "VISIBLE") = 'FALSE' THEN
    //    DOWN;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_keyDown() {
        console.log("Entering CRFADECIAL_crtsolicr1_keyDown");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        else {
        }
        console.log("Exiting CRFADECIAL_crtsolicr1_keyDown");
    }

    //#region PLSQL
    // BEGIN --PY 7930
    // IF :CRTSOLICR1.SOLICR_TIPCRE_MOD = '04' AND :CRTSOLICR1.SOLICR_TIPBIE IS NOT NULL THEN
    //  LIB$DTNERFRMA('NO PUEDE MODIFICAR EL TIPO BIEN CUANDO EL TIPO ES 04.');
    //  :CRTSOLICR1.SOLICR_TIPBIE := NULL;
    //  :CRTSOLICR1.BIEN          := NULL;
    // END IF;
    // --PY 7930; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_solicrTipbie_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr1_solicrTipbie_whenValidateItem");
        // if ((CRTSOLICR1.SOLICR_TIPCRE_MOD == "04" && (CRTSOLICR1.SOLICR_TIPBIE != null))) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO PUEDE MODIFICAR EL TIPO BIEN CUANDO EL TIPO ES 04.");
        //     this.CRTSOLICR1.SOLICR_TIPBIE = null;
        //     this.CRTSOLICR1.BIEN = null;
        // }
        console.log("Exiting CRFADECIAL_crtsolicr1_solicrTipbie_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_solicrActivo_keyEnter() {
        console.log("Entering CRFADECIAL_crtsolicr1_solicrActivo_keyEnter");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFADECIAL_crtsolicr1_solicrActivo_keyEnter");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_MIN     NUMBER;
    //    V_MAX     NUMBER;
    // 
    // BEGIN
    //  
    //  
    //  
    //  V_MIN :=  FBD_VALCAMPO('MIN',16);
    //  V_MAX :=  FBD_VALCAMPO('MAX',16);
    //  
    //    IF  (V_MIN > :CRTSOLICR1.SOLICR_FNGP)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PORCENTAJE DE COBERTURA FNG ES DE '||V_MIN ||' . ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR1.SOLICR_FNGP)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PORCENTAJE DE COBERTURA FNG ES DE '||V_MAX ||'. ' );      
    //   END IF;
    //   
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr1_solicrFngp_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr1_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 16);
        // V_MAX = FBD_VALCAMPO("MAX", 16);
        // if (V_MIN > CRTSOLICR1.SOLICR_FNGP) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PORCENTAJE DE COBERTURA FNG ES DE " + V_MIN + " . ");
        // }
        // if (V_MAX < CRTSOLICR1.SOLICR_FNGP) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PORCENTAJE DE COBERTURA FNG ES DE " + V_MAX + ". ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr1_solicrFngp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --   FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR    THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr1_solicrFngp_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr1_solicrFngp_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr1_solicrFngp_postTextItem");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO  := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtsolicr2_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtsolicr2_postTextItem");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_keyEntqry() {
        console.log("Entering CRFADECIAL_crtsolicr2_keyEntqry");
        console.log("Exiting CRFADECIAL_crtsolicr2_keyEntqry");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtsolicr2_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtsolicr2_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtsolicr2_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    // 
    // IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'CRTSOLICR';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;
    // 
    // 
    //  EXCEPTION
    //  WHEN OTHERS THEN
    //    
    //    RAISE FORM_TRIGGER_FAILURE; 
    //          
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_postUpdate() {
        console.log("Entering CRFADECIAL_crtsolicr2_postUpdate");
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        try {

            // if (CRTSOLICR.SOLICR_CODUNI == "005") {
            //     V_PARAMETRO = "CRTSOLICR";
            //     // CRFADECIAL_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
            // }
        } catch (ex) {

            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting CRFADECIAL_crtsolicr2_postUpdate");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_keyClrblk() {
        console.log("Entering CRFADECIAL_crtsolicr2_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_keyClrblk");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN', "VISIBLE") = 'FALSE' THEN
    //    UP;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_keyUp() {
        console.log("Entering CRFADECIAL_crtsolicr2_keyUp");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.up();
        }
        else {
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_keyUp");
    }

    //#region PLSQL
    // BEGIN PU_VALIDAGUARDA; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_keyCommit() {
        console.log("Entering CRFADECIAL_crtsolicr2_keyCommit");
        // CRFADECIAL_PU_VALIDAGUARDA();
        console.log("Exiting CRFADECIAL_crtsolicr2_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   :CRTSOLICR.NOMBRE := PU_NOMBRE_TERCERO(:CRTSOLICR.SOLICR_NITTER);
    //   :VARIABLE.NOM_USU := FRM$NOMBRE_USUARIO(:CRTSOLICR.SOLICR_USCIAL);
    //   :CRTSOLICR.COMERCIAL := PU_NOMBRE_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // --  :TASAS.VAR_VLRDTF := PU_VALOR_DTF (:SOLICR_FAPRCR,'DTF');
    // --  :TASAS.VAR_VLRDEF := PU_VALOR_DEF (:SOLICR_FAPRCR,'DEF');
    // --NULL;
    //  :CRTSOLICR2.SOLICR_MONTO_1  := :CRTSOLICR2.SOLICR_MONTO;
    //  :CRTSOLICR2.SOLICR_CONEXT_1  := :CRTSOLICR2.SOLICR_CONEXT;
    //  
    // 
    // IF :CRTSOLICR2.SOLICR_CLASAC = 'U' THEN
    //    :CRTSOLICR2.ACTIVO := 'USADO' ;      
    // ELSIF :CRTSOLICR2.SOLICR_CLASAC = 'N' THEN 
    //    :CRTSOLICR2.ACTIVO := 'NUEVO';
    //  
    // END IF;
    // 
    // BEGIN
    //    SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR2.W_TIPODEBIEN
    //      FROM CRTTIPBIEN
    //     WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE
    //       AND TIPBIEN_CODUNI  = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ;
    // EXCEPTION WHEN  NO_DATA_FOUND THEN
    //     :CRTSOLICR.W_TIPODEBIEN := NULL;
    // END;
    // 
    // --AJ PY 26690 PLAZOS PARA UVP 
    // BEGIN
    //  
    // IF :VARIABLE.UNIDAD = '001' THEN
    //   :CRTSOLICR2.SOLICR_PLAZMI:= FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //  :CRTSOLICR2.SOLICR_PLAZMA:= FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    // END IF;
    // 
    // EXCEPTION WHEN OTHERS THEN
    //  :CRTSOLICR2.SOLICR_PLAZMI:= NULL;
    //  :CRTSOLICR2.SOLICR_PLAZMA:= NULL;
    //  
    // END;
    // ---AJ
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_postQuery() {
        console.log("Entering CRFADECIAL_crtsolicr2_postQuery");
        // this.CRTSOLICR.NOMBRE = PU_NOMBRE_TERCERO(CRTSOLICR.SOLICR_NITTER);
        // this.VARIABLE.NOM_USU = FRM$NOMBRE_USUARIO(CRTSOLICR.SOLICR_USCIAL);
        // this.CRTSOLICR.COMERCIAL = PU_NOMBRE_CIAL(CRTSOLICR.SOLICR_USCIAL);
        // this.CRTSOLICR2.SOLICR_MONTO_1 = this.CRTSOLICR2.SOLICR_MONTO;
        // this.CRTSOLICR2.SOLICR_CONEXT_1 = this.CRTSOLICR2.SOLICR_CONEXT;
        // if (this.CRTSOLICR2.SOLICR_CLASAC == "U") {
        //     this.CRTSOLICR2.ACTIVO = "USADO";
        // }
        // else if (this.CRTSOLICR2.SOLICR_CLASAC == "N") {
        //     this.CRTSOLICR2.ACTIVO = "NUEVO";
        // }
        // // construct payload
        // let payload1 = new Map();
        // payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
        // payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // // call REST API
        // const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_postquery_query1", payload1);
        // // get values from result
        // CRTSOLICR2.W_TIPODEBIEN = result1[0].get("CRTSOLICR2.W_TIPODEBIEN");
        // if (result1 == null || result1.length == 0) {

        //     this.CRTSOLICR.W_TIPODEBIEN = null;
        // }

        // let result1 = [];
        // try {

        //     if (VARIABLE.UNIDAD == "001") {
        //         this.CRTSOLICR2.SOLICR_PLAZMI = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //         this.CRTSOLICR2.SOLICR_PLAZMA = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        //     }
        // } catch (ex) {

        //     this.CRTSOLICR2.SOLICR_PLAZMI = null;
        //     this.CRTSOLICR2.SOLICR_PLAZMA = null;
        // }

        console.log("Exiting CRFADECIAL_crtsolicr2_postQuery");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN2', "VISIBLE") = 'FALSE' THEN
    //    DOWN;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_keyDown() {
        console.log("Entering CRFADECIAL_crtsolicr2_keyDown");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN2", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        else {
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //   V_MIN   NUMBER;
    //   V_MAX   NUMBER;
    //   V_VAL   NUMBER;
    //   V_OPCOM NUMBER;
    //   V_VAMA  NUMBER;
    //    
    // BEGIN
    //  
    //  
    //   BEGIN
    //   SELECT SOLICR_OPCCOM
    //   INTO V_OPCOM
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_OPCOM := 0;
    //  END;
    //  
    //  
    //  --V_MIN :=  FBD_VALCAMPO('MIN',1);
    //  V_MAX :=  FBD_VALCAMPO('MAX',1);
    //  
    //  
    //  V_VAMA := V_OPCOM + V_MAX;
    //  
    // 
    //   IF  (:CRTSOLICR2.SOLICR_OPCCOM > V_VAMA)  THEN 
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MAX ||'% POR FAVOR VALIDAR .'); 
    //   END IF;
    //     
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrOpccom_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrOpccom_whenValidateItem");
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_VAL: number = null;
        let V_OPCOM: number = null;
        let V_VAMA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        // payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicropccom_whenvalidateitem_query1", payload1);
        // get values from result
        V_OPCOM = result1[0].get("V_OPCOM");
        if (result1 == null || result1.length == 0) {

            V_OPCOM = 0;
        }

        // V_MAX = FBD_VALCAMPO("MAX", 1);
        // V_VAMA = V_OPCOM + V_MAX;
        // if (this.CRTSOLICR2.SOLICR_OPCCOM > V_VAMA) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MAYORES AL " + V_MAX + "% POR FAVOR VALIDAR .");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrOpccom_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    //    W_INDICA    CONSTANT CRTTOPSOL.TOPSOL_INDICA%TYPE := 'A';
    //    W_CODIGO    CONSTANT CRTTOPSOL.TOPSOL_CODIGO%TYPE := '03';
    //    V_ANT       NUMBER;
    //    V_MIN       NUMBER;
    //    V_MAX    NUMBER;
    //    V_RESPUESTA NUMBER;
    // BEGIN
    // 
    // 
    //   -- AJ 13/06/2018 SALTA POLITICAS DE PLAZOS POR PLAZO MAX Y PLAZO MIN DE LA SOLICITUD
    //   
    //   IF :VARIABLE.UNIDAD ='005' THEN
    //       BEGIN
    //         SELECT NVL(SOLICR_PLAZMI,0), NVL(SOLICR_PLAZMA,0)
    //           INTO V_MIN, V_MAX
    //           FROM CRTSOLICR
    //          WHERE SOLICR_CODSOL = :VARIABLE.SOLICITUD
    //            AND SOLICR_OFCSOL = :VARIABLE.OFICINA;  
    //            
    //        --  LIB$ALERTA('MENSAJE','EL MÍNIMO PLAZO : '||V_MIN ||' EL MAXIMO PLAZO: '|| V_MAX,'SI','NO',NULL,V_RESPUESTA );
    //      
    //       EXCEPTION
    //        WHEN OTHERS THEN
    //        V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //      V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    //        
    //       END;
    //    
    //  ELSE
    //      V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //      V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    // 
    //   END IF;
    //   
    //        /* V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //        V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE); */
    //        
    //  ---AJ      
    //   
    //   
    //    IF  (V_MIN > :CRTSOLICR.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PLAZO  ES DE '||V_MIN ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PLAZO  ES DE '||V_MAX ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrPlazmi_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrPlazmi_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_INDICA: string = 'A';
        let W_CODIGO: string = '03';
        let V_ANT: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_RESPUESTA: number = null;
        // if (VARIABLE.UNIDAD == "005") {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICITUD", VARIABLE.SOLICITUD);
        //         payload1.set("OFICINA", VARIABLE.OFICINA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrplazmi_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         V_MIN = result1[0].get("V_MIN");
        //         V_MAX = result1[0].get("V_MAX");
        //     } catch (ex) {

        //         V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //         V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        //     }

        // }
        // else {
        //     V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //     V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        // }
        // if (V_MIN > CRTSOLICR.SOLICR_PLAZO) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PLAZO  ES DE " + V_MIN + " PARA ESTE TIPO DE BIEN. ");
        // }
        // if (V_MAX < CRTSOLICR.SOLICR_PLAZO) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PLAZO  ES DE " + V_MAX + " PARA ESTE TIPO DE BIEN. ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrPlazmi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    // 
    //  
    //    BEGIN
    //  
    //     SELECT UVPSDV_DESCRI
    //      INTO :CRTSOLICR2.DESCRI_COSEAC
    //      FROM COTUVPSDV
    //     WHERE UVPSDV_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //       AND UVPSDV_CODIGO = :CRTSOLICR2.SOLICR_COSEAC;
    //       
    //    EXCEPTION 
    //     
    //     WHEN OTHERS THEN
    //     
    //       :CRTSOLICR2.SOLICR_COSEAC := NULL;
    //       :CRTSOLICR2.DESCRI_COSEAC := NULL;
    //        LIB$ALERTA( 'MENSAJE', 'CÓDIGO DE SUBPRODUCTO INVÁLIDO.', NULL, NULL, NULL, T_RESPUESTA );
    //       RAISE FORM_TRIGGER_FAILURE;
    //       
    //    END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrCoseac_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrCoseac_postChange");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // payload1.set("SOLICR_COSEAC", this.CRTSOLICR2.SOLICR_COSEAC);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrcoseac_postchange_query1", payload1);
            // get values from result
            // CRTSOLICR2.DESCRI_COSEAC = result1[0].get("CRTSOLICR2.DESCRI_COSEAC");
        } catch (ex) {

            this.CRTSOLICR2.SOLICR_COSEAC = null;
            this.CRTSOLICR2.DESCRI_COSEAC = null;
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "CÓDIGO DE SUBPRODUCTO INVÁLIDO.", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        console.log("Exiting CRFADECIAL_crtsolicr2_solicrCoseac_postChange");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   
    //   V_ANT  NUMBER;
    //   V_EXP  NUMBER;
    //   
    //   
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',8);
    //  V_MAX :=  FBD_VALCAMPO('MAX',8);
    //  
    //  
    //  BEGIN
    //  SELECT SOLICR_VRFINA
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL;
    //  END;
    //  
    // 
    //   V_EXP := V_ANT * (V_MIN/100);
    //  
    // IF :CRTSOLICR2.SOLICR_VRFINA IS NOT NULL THEN   
    //  
    //  IF :CRTSOLICR2.SOLICR_VRFINA  >    (V_ANT + V_EXP)    THEN
    //      
    //      :CRTSOLICR2.SOLICR_VRFINA := V_ANT;
    //   
    //  
    //         LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MIN ||'%.  POR FAVOR VALIDAR.');
    //  
    //  END IF;
    // END IF; 
    //   
    // END;  
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrVrfina_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrVrfina_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrVrfina_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    //    W_INDICA    CONSTANT CRTTOPSOL.TOPSOL_INDICA%TYPE := 'A';
    //    W_CODIGO    CONSTANT CRTTOPSOL.TOPSOL_CODIGO%TYPE := '03';
    //    V_ANT       NUMBER;
    //    V_MIN       NUMBER;
    //    V_MAX    NUMBER;
    //    V_RESPUESTA NUMBER;
    // BEGIN
    // 
    // 
    //   -- AJ 13/06/2018 SALTA POLITICAS DE PLAZOS POR PLAZO MAX Y PLAZO MIN DE LA SOLICITUD
    //   
    //   IF :VARIABLE.UNIDAD ='005' THEN
    //       BEGIN
    //         SELECT NVL(SOLICR_PLAZMI,0), NVL(SOLICR_PLAZMA,0)
    //           INTO V_MIN, V_MAX
    //           FROM CRTSOLICR
    //          WHERE SOLICR_CODSOL = :VARIABLE.SOLICITUD
    //            AND SOLICR_OFCSOL = :VARIABLE.OFICINA;  
    //            
    //        --  LIB$ALERTA('MENSAJE','EL MÍNIMO PLAZO : '||V_MIN ||' EL MAXIMO PLAZO: '|| V_MAX,'SI','NO',NULL,V_RESPUESTA );
    //      
    //       EXCEPTION
    //        WHEN OTHERS THEN
    //        V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //      V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    //        
    //       END;
    //    
    //  ELSE
    //      V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //      V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    // 
    //   END IF;
    //   
    //        /* V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //        V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE); */
    //        
    //  ---AJ      
    //   
    //   
    //    IF  (V_MIN > :CRTSOLICR.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PLAZO  ES DE '||V_MIN ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PLAZO  ES DE '||V_MAX ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrPlazma_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrPlazma_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_INDICA: string = 'A';
        let W_CODIGO: string = '03';
        let V_ANT: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_RESPUESTA: number = null;
        // if (VARIABLE.UNIDAD == "005") {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICITUD", VARIABLE.SOLICITUD);
        //         payload1.set("OFICINA", VARIABLE.OFICINA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrplazma_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         V_MIN = result1[0].get("V_MIN");
        //         V_MAX = result1[0].get("V_MAX");
        //     } catch (ex) {

        //         V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //         V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        //     }

        // }
        // else {
        //     V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //     V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        // }
        // if (V_MIN > CRTSOLICR.SOLICR_PLAZO) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PLAZO  ES DE " + V_MIN + " PARA ESTE TIPO DE BIEN. ");
        // }
        // if (V_MAX < CRTSOLICR.SOLICR_PLAZO) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PLAZO  ES DE " + V_MAX + " PARA ESTE TIPO DE BIEN. ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrPlazma_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    //    W_INDICA    CONSTANT CRTTOPSOL.TOPSOL_INDICA%TYPE := 'A';
    //    W_CODIGO    CONSTANT CRTTOPSOL.TOPSOL_CODIGO%TYPE := '03';
    //    V_ANT       NUMBER;
    //    V_MIN       NUMBER;
    //    V_MAX    NUMBER;
    //    V_RESPUESTA NUMBER;
    // BEGIN
    // 
    // 
    //   -- AJ 13/06/2018  PY 26690 SALTA POLITICAS DE PLAZOS POR PLAZO MAX Y PLAZO MIN DE LA SOLICITUD
    //   
    //   IF :VARIABLE.UNIDAD ='005' THEN
    //       BEGIN
    //         SELECT NVL(SOLICR_PLAZMI,0), NVL(SOLICR_PLAZMA,0)
    //           INTO V_MIN, V_MAX
    //           FROM CRTSOLICR
    //          WHERE SOLICR_CODSOL = :VARIABLE.SOLICITUD
    //            AND SOLICR_OFCSOL = :VARIABLE.OFICINA;  
    //            
    //          --LIB$ALERTA('MENSAJE','EL MÍNIMO PLAZO : '||V_MIN ||' EL MAXIMO PLAZO: '|| V_MAX,'SI','NO',NULL,V_RESPUESTA );
    //      
    //       EXCEPTION
    //        WHEN OTHERS THEN
    //        V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //      V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    //        
    //       END;
    //    
    //  ELSE
    //      V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //      V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    // 
    //   END IF;
    //   
    //        /* V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //        V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE); */
    //        
    //  ---AJ      
    //   
    //   
    //    IF  (V_MIN > :CRTSOLICR2.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PLAZO  ES DE '||V_MIN ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR2.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PLAZO  ES DE '||V_MAX ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrPlazo_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrPlazo_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_INDICA: string = 'A';
        let W_CODIGO: string = '03';
        let V_ANT: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_RESPUESTA: number = null;
        // if (VARIABLE.UNIDAD == "005") {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICITUD", VARIABLE.SOLICITUD);
        //         payload1.set("OFICINA", VARIABLE.OFICINA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrplazo_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         V_MIN = result1[0].get("V_MIN");
        //         V_MAX = result1[0].get("V_MAX");
        //     } catch (ex) {

        //         V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //         V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        //     }

        // }
        // else {
        //     V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        //     V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        // }
        // if (V_MIN > CRTSOLICR2.SOLICR_PLAZO) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PLAZO  ES DE " + V_MIN + " PARA ESTE TIPO DE BIEN. ");
        // }
        // if (V_MAX < CRTSOLICR2.SOLICR_PLAZO) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PLAZO  ES DE " + V_MAX + " PARA ESTE TIPO DE BIEN. ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrPlazo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   
    //   V_ANT  NUMBER;
    //   V_EXP  NUMBER;
    //   
    //   
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',8);
    //  V_MAX :=  FBD_VALCAMPO('MAX',8);
    //  
    //  
    //  BEGIN
    //  SELECT SOLICR_VRFINA
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL;
    //  END;
    //  
    // 
    //   V_EXP := V_ANT * (V_MIN/100);
    //  
    // IF :CRTSOLICR2.SOLICR_VRFINA IS NOT NULL THEN   
    //  
    //  IF :CRTSOLICR2.SOLICR_VRFINA  >    (V_ANT + V_EXP)    THEN
    //      
    //      :CRTSOLICR2.SOLICR_VRFINA := V_ANT;
    //   
    //  
    //         LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MIN ||'%.  POR FAVOR VALIDAR.');
    //  
    //  END IF;
    // END IF; 
    //   
    // END;  
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrVrfina1_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrVrfina1_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrVrfina1_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_VAL      NUMBER;
    //   V_MIN      NUMBER;
    //   V_MAX      NUMBER;
    //   V_INICIAL    NUMBER;
    //   V_SUBIDA     NUMBER;
    //   V_MAXIMOSUBIDA  NUMBER;
    //   
    // BEGIN
    // 
    //  
    //  V_MIN :=  FBD_VALCAMPO('MIN',9);
    //  V_MAX :=  FBD_VALCAMPO('MAX',9);
    // 
    //  
    //   BEGIN
    //   SELECT SOLICR_VPAVAL 
    //    INTO V_INICIAL
    //    FROM CRTSOLICR C
    //     WHERE C.SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //       AND C.SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN V_INICIAL := 0;
    //   END;
    //  
    //  V_SUBIDA      := V_INICIAL/V_MIN;
    //  V_MAXIMOSUBIDA    := V_INICIAL+V_SUBIDA;
    //  
    //  
    //  
    //  V_VAL := FBD_EXISREG (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL, 'SOLICR_VPAVAL', USER); 
    //  
    //  
    //  IF V_VAL = 0 THEN
    //   IF   :CRTSOLICR2.SOLICR_VPAVAL >   V_MAXIMOSUBIDA     THEN 
    //    
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MAXIMOSUBIDA ||'%.  POR FAVOR VALIDAR.'); 
    //   
    //   END IF; 
    //  ELSIF V_VAL >= 1 THEN
    //    LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS YA TUVO UNA MODIFICACIÓN ANTERIOR.');   
    //  END IF;   
    // 
    // 
    // 
    // END;
    // 
    // --PU_VALIPORCEN (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR2.SOLICR_VPAVAL,:CRTSOLICR.SOLICR_TIPBIE);
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrVpaval_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrVpaval_whenValidateItem");
        let V_VAL: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_INICIAL: number = null;
        let V_SUBIDA: number = null;
        let V_MAXIMOSUBIDA: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 9);
        // V_MAX = FBD_VALCAMPO("MAX", 9);
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        // payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrvpaval_whenvalidateitem_query1", payload1);
        // get values from result
        V_INICIAL = result1[0].get("V_INICIAL");
        if (result1 == null || result1.length == 0) {

            V_INICIAL = 0;
        }

        V_SUBIDA = V_INICIAL / V_MIN;
        V_MAXIMOSUBIDA = V_INICIAL + V_SUBIDA;
        // V_VAL = FBD_EXISREG(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_VPAVAL", USER);
        // if (V_VAL == 0) {
        //     if (this.CRTSOLICR2.SOLICR_VPAVAL > V_MAXIMOSUBIDA) {
        //         // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MAYORES AL " + V_MAXIMOSUBIDA + "%.  POR FAVOR VALIDAR.");
        //     }
        // }
        // else if (V_VAL >= 1) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS YA TUVO UNA MODIFICACIÓN ANTERIOR.");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrVpaval_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_EXTRA NUMBER;
    // BEGIN
    //  
    //   BEGIN
    //   SELECT SOLICR_CONEXT
    //   INTO V_EXTRA
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR2.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR2.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR2.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_EXTRA := 0;
    //  END;
    // 
    //   IF (V_EXTRA > 0) AND (:CRTSOLICR2.SOLICR_CONEXT = 0 OR :CRTSOLICR2.SOLICR_CONEXT IS NULL ) THEN
    //   
    //    LIB$DTNERFRMA('NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.');
    //   
    //   END IF;
    // 
    // 
    // :CRTSOLICR2.SOLICR_VRFINA :=  :CRTSOLICR2.SOLICR_MONTO - :CRTSOLICR2.SOLICR_CONEXT;
    // :CRTSOLICR2.SOLICR_VRFINCR := :CRTSOLICR2.SOLICR_MONTO;
    // --NEXT_ITEM;
    // 
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrMonto_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrMonto_keyNextItem");
        let V_EXTRA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR2.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR2.SOLICR_CODSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR2.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrmonto_keynextitem_query1", payload1);
        // get values from result
        V_EXTRA = result1[0].get("V_EXTRA");
        if (result1 == null || result1.length == 0) {

            V_EXTRA = 0;
        }

        // if ((V_EXTRA > 0 && (this.CRTSOLICR2.SOLICR_CONEXT == 0 || (this.CRTSOLICR2.SOLICR_CONEXT == null)))) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.");
        // }
        this.CRTSOLICR2.SOLICR_VRFINA = this.CRTSOLICR2.SOLICR_MONTO - this.CRTSOLICR2.SOLICR_CONEXT;
        this.CRTSOLICR2.SOLICR_VRFINCR = this.CRTSOLICR2.SOLICR_MONTO;
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrMonto_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.SOLICITUD IS NOT NULL THEN
    // DECLARE
    //   V_VALIDAR NUMBER;
    //   V_CANEX   NUMBER;
    // BEGIN
    //  
    //  
    //   BEGIN
    //   SELECT SOLICR_CONEXT
    //   INTO V_CANEX
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CANEX := 0;
    //  END;
    //  
    //  IF (V_CANEX IS NOT NULL) AND (:CRTSOLICR2.SOLICR_CONEXT IS NULL OR :CRTSOLICR2.SOLICR_CONEXT= 0)  THEN
    //   
    //     LIB$DTNERFRMA('NO SE ACEPTA ESTE VALOR PARA EL CANON EXTRAORDINARIO');
    //        
    //   
    //  END IF;
    //  
    // END;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext_whenValidateItem");
        if ((this.VARIABLE.SOLICITUD != null)) {
            {

                let V_VALIDAR: number = null;
                let V_CANEX: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrconext_whenvalidateitem_query1", payload1);
                // get values from result
                V_CANEX = result1[0].get("V_CANEX");
                if (result1 == null || result1.length == 0) {

                    V_CANEX = 0;
                }

                if (((V_CANEX != null) && ((this.CRTSOLICR2.SOLICR_CONEXT == null) || this.CRTSOLICR2.SOLICR_CONEXT == 0))) {
                    // CRFADECIAL_LIB$DTNERFRMA("NO SE ACEPTA ESTE VALOR PARA EL CANON EXTRAORDINARIO");
                }
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // END;*/
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext_postChange");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext_postChange");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext_keyCommit() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //  V_EXTRA NUMBER;
    // BEGIN
    //  
    //   BEGIN
    //   SELECT SOLICR_CONEXT
    //   INTO V_EXTRA
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR2.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR2.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_EXTRA := 0;
    //  END;
    // 
    //   IF (V_EXTRA > 0) AND (:CRTSOLICR2.SOLICR_CONEXT = 0 OR :CRTSOLICR2.SOLICR_CONEXT IS NULL ) THEN
    //   
    //    LIB$DTNERFRMA('NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.');
    //   
    //   END IF;
    // 
    // :CRTSOLICR2.SOLICR_VRFINA :=  :CRTSOLICR2.SOLICR_MONTO - :CRTSOLICR2.SOLICR_CONEXT;
    // --NEXT_ITEM;
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext_keyNextItem");
        let V_EXTRA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR2.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR2.SOLICR_CODSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrconext_keynextitem_query1", payload1);
        // get values from result
        V_EXTRA = result1[0].get("V_EXTRA");
        if (result1 == null || result1.length == 0) {

            V_EXTRA = 0;
        }

        if ((V_EXTRA > 0 && (this.CRTSOLICR2.SOLICR_CONEXT == 0 || (this.CRTSOLICR2.SOLICR_CONEXT == null)))) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.");
        }
        this.CRTSOLICR2.SOLICR_VRFINA = this.CRTSOLICR2.SOLICR_MONTO - this.CRTSOLICR2.SOLICR_CONEXT;
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   
    //   V_ANT  NUMBER;
    //   V_EXP  NUMBER;
    //   
    //   
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',8);
    //  V_MAX :=  FBD_VALCAMPO('MAX',8);
    //  
    //  
    //  BEGIN
    //  SELECT SOLICR_CONEXT
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL;
    //  END;
    //  
    // 
    //   V_EXP := V_ANT * (V_MIN/100);
    //   
    //  
    //  IF :CRTSOLICR2.SOLICR_CONEXT  >    (V_ANT + V_EXP)    THEN
    //  
    //     :CRTSOLICR2.SOLICR_CONEXT := V_ANT;
    //     LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MIN ||'%  DEL CANON EXTRA POR FAVOR VALIDAR.');
    //  
    //  ELSE
    //   
    //      :CRTSOLICR2.SOLICR_VRFINA :=  :CRTSOLICR2.SOLICR_MONTO - :CRTSOLICR2.SOLICR_CONEXT;
    //      
    //  END IF; 
    //   
    // END;  
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext1_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext1_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // END;*/
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext1_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext1_postChange");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext1_postChange");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext1_keyCommit() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext1_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext1_keyCommit");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR2.SOLICR_VRFINA :=  :CRTSOLICR2.SOLICR_MONTO - :CRTSOLICR2.SOLICR_CONEXT;
    // --NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrConext1_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrConext1_keyNextItem");
        this.CRTSOLICR2.SOLICR_VRFINA = this.CRTSOLICR2.SOLICR_MONTO - this.CRTSOLICR2.SOLICR_CONEXT;
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrConext1_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR2.SOLICR_HIPTCA NOT IN ('S','N') THEN 
    //    LIB$DTNERFRMA('LOS ÚNICOS VALORES PERMITIDOS SON S Y N.');
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrHiptca_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrHiptca_whenValidateItem");
        if (["S", "N"].indexOf(this.CRTSOLICR2.SOLICR_HIPTCA) != -1) {
            // CRFADECIAL_LIB$DTNERFRMA("LOS ÚNICOS VALORES PERMITIDOS SON S Y N.");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrHiptca_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   V_ANT  NUMBER;
    //   
    //   V_MINANT  NUMBER;
    //   V_VALOR1  NUMBER;
    //   V_VALOR2  NUMBER;
    //  
    //   
    //   
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',11);
    //   
    //  BEGIN
    //  SELECT SOLICR_VRCHIP
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL
    //    AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //    ;
    //  END;
    //  
    // 
    //   
    //   V_MINANT := V_ANT * (V_MIN/100);
    //   
    //   V_VALOR1  := V_ANT + V_MINANT;
    //   V_VALOR2  := V_ANT - V_MINANT;
    //  
    // 
    //  
    //  
    //  IF   :CRTSOLICR2.SOLICR_VRCHIP  <  V_VALOR2    THEN
    //  
    //     LIB$DTNERFRMA('NO SE PERMITEN VALORES INFERIORES '|| TO_CHAR(V_VALOR2,'999,999,999,999.99')  ||'  POR FAVOR VALIDAR.');
    //  
    //  END IF; 
    //  
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrVrchip_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrVrchip_whenValidateItem");
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_ANT: number = null;
        let V_MINANT: number = null;
        let V_VALOR1: number = null;
        let V_VALOR2: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 11);
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrvrchip_whenvalidateitem_query1", payload1);
        // get values from result
        V_ANT = result1[0].get("V_ANT");
        V_MINANT = V_ANT * V_MIN / 100;
        V_VALOR1 = V_ANT + V_MINANT;
        V_VALOR2 = V_ANT - V_MINANT;
        if (this.CRTSOLICR2.SOLICR_VRCHIP < V_VALOR2) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN VALORES INFERIORES " + V_VALOR2.toString() + "  POR FAVOR VALIDAR.");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrVrchip_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   
    //   V_ANT  NUMBER;
    //   V_EXP  NUMBER;
    //   
    //   
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',8);
    //  V_MAX :=  FBD_VALCAMPO('MAX',8);
    //  
    //  
    //  BEGIN
    //  SELECT SOLICR_MONTO
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL;
    //  END;
    //  
    // 
    //   V_EXP := V_ANT * (V_MIN/100);
    //   
    //  
    //  IF   :CRTSOLICR2.SOLICR_MONTO  >    (V_ANT + V_EXP)    THEN
    //   
    //     :CRTSOLICR2.SOLICR_MONTO := V_ANT;
    //     LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MIN ||'%  DEL MONTO POR FAVOR VALIDAR.');
    //  
    //  ELSE
    //   
    //      :CRTSOLICR2.SOLICR_VRFINA :=  :CRTSOLICR2.SOLICR_MONTO - :CRTSOLICR2.SOLICR_CONEXT;
    //  
    //  
    //  END IF; 
    //   
    // END;  
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrMonto1_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrMonto1_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrMonto1_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR2.SOLICR_VRFINA :=  :CRTSOLICR2.SOLICR_MONTO - :CRTSOLICR2.SOLICR_CONEXT;
    // :CRTSOLICR2.SOLICR_VRFINCR := :CRTSOLICR2.SOLICR_MONTO;
    // --NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrMonto1_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrMonto1_keyNextItem");
        this.CRTSOLICR2.SOLICR_VRFINA = this.CRTSOLICR2.SOLICR_MONTO - this.CRTSOLICR2.SOLICR_CONEXT;
        this.CRTSOLICR2.SOLICR_VRFINCR = this.CRTSOLICR2.SOLICR_MONTO;
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrMonto1_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_MIN     NUMBER;
    //    V_MAX     NUMBER;
    // 
    // BEGIN
    //  
    //  
    //  
    //  V_MIN :=  FBD_VALCAMPO('MIN',14);
    //  V_MAX :=  FBD_VALCAMPO('MAX',14);
    //  
    //   --PY15021. 
    //   --IF :CRTSOLICR.SOLICR_PERGRA > V_MIN THEN   
    //   IF  (V_MIN > :CRTSOLICR2.SOLICR_PERGRA)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PERIODO DE GRACIA ES DE '||V_MIN ||' DÍAS. ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR2.SOLICR_PERGRA)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PERIODO DE GRACIA ES DE '||V_MAX ||' DÍAS. ' );      
    //   END IF;
    //   
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrPergra_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrPergra_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 14);
        // V_MAX = FBD_VALCAMPO("MAX", 14);
        // if (V_MIN > CRTSOLICR2.SOLICR_PERGRA) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PERIODO DE GRACIA ES DE " + V_MIN + " DÍAS. ");
        // }
        // if (V_MAX < CRTSOLICR2.SOLICR_PERGRA) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PERIODO DE GRACIA ES DE " + V_MAX + " DÍAS. ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrPergra_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   V_ANT  NUMBER;
    //   
    //   V_MINANT  NUMBER;
    //   V_VALOR1  NUMBER;
    //   V_VALOR2  NUMBER;
    //  
    //   
    //   
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',11);
    //   
    //  BEGIN
    //  SELECT SOLICR_VRCIAL
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL
    //    AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //    ;
    //  END;
    //  
    // 
    //   
    //   V_MINANT := V_ANT * (V_MIN/100);
    //   
    //   V_VALOR1  := V_ANT + V_MINANT;
    //   V_VALOR2  := V_ANT - V_MINANT;
    //  
    // 
    //  
    //  
    //  IF   :CRTSOLICR2.SOLICR_VRCIAL  <  V_VALOR2    THEN
    //  
    //     LIB$DTNERFRMA('NO SE PERMITEN VALORES INFERIORES  '|| TO_CHAR(V_VALOR2,'999,999,999,999.99')  ||'  POR FAVOR VALIDAR.');
    //  
    //  END IF; 
    //  
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrVrcial_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrVrcial_whenValidateItem");
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_ANT: number = null;
        let V_MINANT: number = null;
        let V_VALOR1: number = null;
        let V_VALOR2: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 11);
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrvrcial_whenvalidateitem_query1", payload1);
        // get values from result
        V_ANT = result1[0].get("V_ANT");
        V_MINANT = V_ANT * V_MIN / 100;
        V_VALOR1 = V_ANT + V_MINANT;
        V_VALOR2 = V_ANT - V_MINANT;
        if (this.CRTSOLICR2.SOLICR_VRCIAL < V_VALOR2) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN VALORES INFERIORES  " + V_VALOR2.toString() + "  POR FAVOR VALIDAR.");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrVrcial_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   
    //   V_ANT  NUMBER;
    //   V_EXP  NUMBER;
    //   
    //   V_MON  NUMBER;
    //   V_VAL  NUMBER;
    //     
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',7);
    //  V_MAX :=  FBD_VALCAMPO('MAX',7);
    //  
    //  V_MON := 0;
    //  V_EXP := 0;
    //  
    //   
    //  BEGIN
    //  SELECT SOLICR_VRFINCR
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL
    //    AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //    ;
    //  END;
    //  
    // 
    //   V_EXP := V_ANT * (V_MIN/100);
    //   V_MON := (V_ANT + V_EXP);
    //   
    // 
    // 
    //  V_VAL := FBD_EXISREG (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL, 'SOLICR_VRFINCR', USER); 
    //  
    //  
    //   IF V_VAL = 0 THEN
    //   IF  V_ANT /*:CRTSOLICR.SOLICR_VRFINCR*/  >   V_MON     THEN 
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MIN ||'%  DEL MONTO A FINANCIAR POR FAVOR VALIDAR.'); 
    //   END IF; 
    //  ELSIF V_VAL >= 2 THEN
    //    LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS YA TUVO UNA MODIFICACIÓN ANTERIOR.');   
    //  END IF;
    // 
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrVrfincr_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrVrfincr_whenValidateItem");
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_ANT: number = null;
        let V_EXP: number = null;
        let V_MON: number = null;
        let V_VAL: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 7);
        // V_MAX = FBD_VALCAMPO("MAX", 7);
        V_MON = 0;
        V_EXP = 0;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrvrfincr_whenvalidateitem_query1", payload1);
        // get values from result
        V_ANT = result1[0].get("V_ANT");
        V_EXP = V_ANT * V_MIN / 100;
        V_MON = V_ANT + V_EXP;
        // V_VAL = FBD_EXISREG(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_VRFINCR", USER);
        if (V_VAL == 0) {
            if (V_ANT > V_MON) {
                // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MAYORES AL " + V_MIN + "%  DEL MONTO A FINANCIAR POR FAVOR VALIDAR.");
            }
        }
        else if (V_VAL >= 2) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS YA TUVO UNA MODIFICACIÓN ANTERIOR.");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrVrfincr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_MIN     NUMBER;
    //    V_MAX     NUMBER;
    // 
    // BEGIN
    //  
    //  
    //  
    //  V_MIN :=  FBD_VALCAMPO('MIN',16);
    //  V_MAX :=  FBD_VALCAMPO('MAX',16);
    //  
    //    IF  (V_MIN > :CRTSOLICR2.SOLICR_FNGP)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PORCENTAJE DE COBERTURA FNG ES DE '||V_MIN ||' . ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR2.SOLICR_FNGP)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PORCENTAJE DE COBERTURA FNG ES DE '||V_MAX ||'. ' );      
    //   END IF;
    //   
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrFngp_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 16);
        // V_MAX = FBD_VALCAMPO("MAX", 16);
        // if (V_MIN > CRTSOLICR2.SOLICR_FNGP) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PORCENTAJE DE COBERTURA FNG ES DE " + V_MIN + " . ");
        // }
        // if (V_MAX < CRTSOLICR2.SOLICR_FNGP) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PORCENTAJE DE COBERTURA FNG ES DE " + V_MAX + ". ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrFngp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --   FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrFngp_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrFngp_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrFngp_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :CRTSOLICR2.SOLICR_LINEADES = 'LL' THEN
    //  :CRTSOLICR2.SOLICR_FDESEMCLI  := NULL;
    //  --SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE"); PY 10448
    // ELSIF :CRTSOLICR2.SOLICR_LINEADES = 'LX' AND :CRTSOLICR2.SOLICR_FDESEMCLI IS NULL THEN
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO'); 
    // ELSIF :CRTSOLICR2.SOLICR_FDESEMCLI < (SYSDATE + 2) THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)'||TO_CHAR(SYSDATE+2,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR2.SOLICR_LINEADES == "LL") {
            this.CRTSOLICR2.SOLICR_FDESEMCLI = null;
        }
        else if ((this.CRTSOLICR2.SOLICR_LINEADES == "LX" && (this.CRTSOLICR2.SOLICR_FDESEMCLI == null))) {
            // CRFADECIAL_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        }
        // else if (this.CRTSOLICR2.SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate() + 2) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)" + PLSQLBuiltins.sysdate() + 2.toString());
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR2.SOLICR_LINEADES = 'LL' THEN
    //  :CRTSOLICR2.SOLICR_FDESEMCLI  := NULL;
    //  --SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE"); 
    // 
    // --10448
    // ELSE
    //      SET_ITEM_PROPERTY('CRTSOLICR2.SOLICR_FDESEMCLI', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR2.SOLICR_FDESEMCLI', UPDATE_COLUMN, "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('CRTSOLICR2.SOLICR_FDESEMCLI', UPDATEABLE, "PROPERTY_TRUE");
    //      --SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('CRTSOLICR2.SOLICR_FDESEMCLI', UPDATE_PERMISSION, "PROPERTY_TRUE");  
    // --10448
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrFdesemcli_whenMouseClick() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrFdesemcli_whenMouseClick");
        if (this.CRTSOLICR2.SOLICR_LINEADES == "LL") {
            this.CRTSOLICR2.SOLICR_FDESEMCLI = null;
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR2.SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_TRUE");
            // this.oracleFormsBuiltins.set_item_property("CRTSOLICR2.SOLICR_FDESEMCLI", UPDATE_COLUMN, "PROPERTY_TRUE");
            // this.oracleFormsBuiltins.set_item_property("CRTSOLICR2.SOLICR_FDESEMCLI", UPDATEABLE, "PROPERTY_TRUE");
            // this.oracleFormsBuiltins.set_item_property("CRTSOLICR2.SOLICR_FDESEMCLI", UPDATE_PERMISSION, "PROPERTY_TRUE");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrFdesemcli_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //     V_ESTADO VARCHAR2(1);
    // BEGIN
    //  
    // BEGIN
    //  SELECT SOLICR_CLASAC
    //  INTO V_ESTADO
    //  FROM  CRTSOLICR
    //  WHERE  :CRTSOLICR2.SOLICR_CODSOL =  SOLICR_CODSOL
    //         AND :CRTSOLICR2.SOLICR_OFCSOL = SOLICR_OFCSOL
    //         AND SOLICR_CODUNI =:CRTSOLICR2.SOLICR_CODUNI --ARQUITECTURA
    //         ;
    // EXCEPTION WHEN NO_DATA_FOUND THEN V_ESTADO := NULL;
    // END;
    //  
    //     IF  :CRTSOLICR2.SOLICR_CLASAC NOT IN ('N','U') THEN 
    //      LIB$DTNERFRMA('NO SE PERMITE EL CAMBIO DE ESTADO INGRESE UN VALOR VALIDO N,U POR FAVOR VALIDAR.'); 
    //   END IF;
    //   
    // 
    // 
    //   IF  V_ESTADO ='N'   AND   (:CRTSOLICR2.SOLICR_CLASAC= 'U') THEN 
    //      LIB$DTNERFRMA('NO SE PERMITE EL CAMBIO DE ESTADO DE NUEVO A USADO. POR FAVOR VALIDAR.'); 
    //   END IF;
    //   
    //   
    //  
    //   
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrClasac_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrClasac_whenValidateItem");
        let V_ESTADO: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR2.SOLICR_CODSOL);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR2.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR2.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr2/crfadecial_crtsolicr2_solicrclasac_whenvalidateitem_query1", payload1);
        // get values from result
        V_ESTADO = result1[0].get("V_ESTADO");
        if (result1 == null || result1.length == 0) {

            V_ESTADO = null;
        }

        if (["N", "U"].indexOf(this.CRTSOLICR2.SOLICR_CLASAC) != -1) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITE EL CAMBIO DE ESTADO INGRESE UN VALOR VALIDO N,U POR FAVOR VALIDAR.");
        }
        // if ((V_ESTADO == "N" && CRTSOLICR2.SOLICR_CLASAC == "U")) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITE EL CAMBIO DE ESTADO DE NUEVO A USADO. POR FAVOR VALIDAR.");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrClasac_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF  :CRTSOLICR2.SOLICR_CLASAC NOT IN ('N','U') THEN 
    //      LIB$DTNERFRMA('NO SE PERMITE EL CAMBIO DE ESTADO INGRESE UN VALOR VALIDO N,U POR FAVOR VALIDAR.'); 
    // END IF;
    //   
    //   
    // IF :CRTSOLICR2.SOLICR_CLASAC = 'U' THEN
    //    :CRTSOLICR2.ACTIVO := 'USADO' ;      
    // ELSIF :CRTSOLICR2.SOLICR_CLASAC = 'N' THEN 
    //    :CRTSOLICR2.ACTIVO := 'NUEVO'; 
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrClasac_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrClasac_keyNextItem");
        if (["N", "U"].indexOf(this.CRTSOLICR2.SOLICR_CLASAC) != -1) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITE EL CAMBIO DE ESTADO INGRESE UN VALOR VALIDO N,U POR FAVOR VALIDAR.");
        }
        if (this.CRTSOLICR2.SOLICR_CLASAC == "U") {
            this.CRTSOLICR2.ACTIVO = "USADO";
        }
        else if (this.CRTSOLICR2.SOLICR_CLASAC == "N") {
            this.CRTSOLICR2.ACTIVO = "NUEVO";
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrClasac_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR2.SOLICR_LINEADES NOT IN ('LL','LX') THEN
    //   LIB$DTNERFRMA('POR FAVOR INGRESAR UNA LINEA VALIDA .');   
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrLineades_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrLineades_whenValidateItem");
        if (["LL", "LX"].indexOf(this.CRTSOLICR2.SOLICR_LINEADES) != -1) {
            // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR UNA LINEA VALIDA .");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrLineades_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR2.SOLICR_USMLINEA    := PLSQLBuiltins.user();
    //   :CRTSOLICR2.SOLICR_FECMODLINEA  := SYSDATE;   
    //   --NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrLineades_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrLineades_keyNextItem");
        this.CRTSOLICR2.SOLICR_USMLINEA = PLSQLBuiltins.user();
        this.CRTSOLICR2.SOLICR_FECMODLINEA = PLSQLBuiltins.sysdate();
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrLineades_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*BEGIN
    //  SELECT UVPCRS_DESCRI
    //    INTO :CRTSOLICR2.DESCRI_CODCDR 
    //     FROM COTUVPCRS
    //    WHERE UVPCRS_CODIGO = :CRTSOLICR2.SOLICR_CODCDR; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :CRTSOLICR2.DESCRI_CODCDR := NULL;
    // END;
    // */ NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrCodcdr_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrCodcdr_postChange");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrCodcdr_postChange");
    }

    //#region PLSQL
    // BEGIN GO_ITEM ('COTUVPCCV.UVPCCV_TERCOP'); END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrCodcdr_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrCodcdr_keyNextItem");
        this.oracleFormsBuiltins.go_item("COTUVPCCV.UVPCCV_TERCOP");
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrCodcdr_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR2.SOLICR_PRENDA NOT IN ('S','N') THEN 
    //    LIB$DTNERFRMA('LOS ÚNICOS VALORES PERMITIDOS SON S Y N.');
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr2_solicrPrenda_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr2_solicrPrenda_whenValidateItem");
        if (["S", "N"].indexOf(this.CRTSOLICR2.SOLICR_PRENDA) != -1) {
            // CRFADECIAL_LIB$DTNERFRMA("LOS ÚNICOS VALORES PERMITIDOS SON S Y N.");
        }
        console.log("Exiting CRFADECIAL_crtsolicr2_solicrPrenda_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF NVL(:TIPXCOM_PORCON,0) + NVL(:TIPXCOM_PORCON2,0) < 100 THEN
    //  LIB$DTNERFRMA('EL PORCENTAJE DEBE SUMAR EL 100%');
    // END IF;
    // 
    // COMMIT; END;
    //#endregion
    async CRFADECIAL_cottipxcom1_keyCommit() {
        console.log("Entering CRFADECIAL_cottipxcom1_keyCommit");
        // if (TIPXCOM_PORCON == null ? 0 : TIPXCOM_PORCON + TIPXCOM_PORCON2 == null ? 0 : TIPXCOM_PORCON2 < 100) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL PORCENTAJE DEBE SUMAR EL 100%");
        // }
        console.log("Exiting CRFADECIAL_cottipxcom1_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT PROD_DESCRI
    //   INTO :DSP_PROD
    //       FROM CRTPRODCIA
    //        WHERE PROD_CODIGO = :TIPXCOM_TIPPRO
    //         AND PROD_CODUNI  = :VARIABLE.UNIDAD --ARQUITECTURA
    //        ;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_PROD := NULL;
    // END;
    // 
    // BEGIN
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM1
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM
    //     AND COM_CODUNI = :VARIABLE.UNIDAD --ARQUITECTURA
    //    ;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM1 := NULL;
    // END;
    // 
    // BEGIN
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM2
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM2
    //      AND COM_CODUNI = :VARIABLE.UNIDAD --ARQUITECTURA
    //    ;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM2 := NULL;
    // END;
    //#endregion
    async CRFADECIAL_cottipxcom1_postQuery() {
        console.log("Entering CRFADECIAL_cottipxcom1_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPXCOM_TIPPRO", TIPXCOM_TIPPRO);
        // payload1.set("UNIDAD", VARIABLE.UNIDAD);
        // call REST API
        const result1 = await Rest.post("/crfadecial_cottipxcom1/crfadecial_cottipxcom1_postquery_query1", payload1);
        // get values from result
        // DSP_PROD = result1[0].get("DSP_PROD");
        if (result1 == null || result1.length == 0) {

            this.COTTIPXCOM1.DSP_PROD = null;
        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("TIPXCOM_CODCOM", TIPXCOM_CODCOM);
        // payload2.set("UNIDAD", VARIABLE.UNIDAD);
        // call REST API
        const result2 = await Rest.post("/crfadecial_cottipxcom1/crfadecial_cottipxcom1_postquery_query2", payload2);
        // get values from result
        // DSP_COM1 = result2[0].get("DSP_COM1");
        if (result2 == null || result2.length == 0) {

            this.COTTIPXCOM1.DSP_COM1 = null;
        }

        // construct payload
        let payload3 = new Map();
        // payload3.set("TIPXCOM_CODCOM2", TIPXCOM_CODCOM2);
        // payload3.set("UNIDAD", VARIABLE.UNIDAD);
        // call REST API
        const result3 = await Rest.post("/crfadecial_cottipxcom1/crfadecial_cottipxcom1_postquery_query3", payload3);
        // get values from result
        // DSP_COM2 = result3[0].get("DSP_COM2");
        if (result3 == null || result3.length == 0) {

            this.COTTIPXCOM1.DSP_COM2 = null;
        }

        console.log("Exiting CRFADECIAL_cottipxcom1_postQuery");
    }

    //#region PLSQL
    // BEGIN /*IF :TIPXCOM_CODCOM IS NULL OR :TIPXCOM_CODCOM < 0 OR :TIPXCOM_CODCOM > 100 THEN
    //   LIB$DTNERFRMA('EL PORCENTAJE DEBE ESTAR ENTRE 1 Y 99,9');
    // END IF;*/
    // 
    //  IF :TIPXCOM_PORCON NOT IN (70,30,50) THEN
    //   LIB$DTNERFRMA('LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50');
    //  END IF;
    // 
    // IF :TIPXCOM_PORCON > 100 THEN
    //  :TIPXCOM_PORCON := 100;
    // ELSIF :TIPXCOM_PORCON < 0 THEN
    //  :TIPXCOM_PORCON := 0;
    // END IF;
    //  
    // 
    // IF :TIPXCOM_CODCOM2 IS NOT NULL AND :TIPXCOM_PORCON > 0 AND :TIPXCOM_PORCON2 > 0  THEN
    //  :TIPXCOM_PORCON2 := 100 - :TIPXCOM_PORCON;
    // END IF; END;
    //#endregion
    async CRFADECIAL_cottipxcom1_tipxcomPorcon_postChange() {
        console.log("Entering CRFADECIAL_cottipxcom1_tipxcomPorcon_postChange");
        // if ([70, 30, 50].indexOf(TIPXCOM_PORCON) != -1) {
        //     // CRFADECIAL_LIB$DTNERFRMA("LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50");
        // }
        // if (TIPXCOM_PORCON > 100) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON = 100;
        // }
        // else if (TIPXCOM_PORCON < 0) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON = 0;
        // }
        // if ((((TIPXCOM_CODCOM2 != null) && TIPXCOM_PORCON > 0) && TIPXCOM_PORCON2 > 0)) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 100 - TIPXCOM_PORCON;
        // }
        console.log("Exiting CRFADECIAL_cottipxcom1_tipxcomPorcon_postChange");
    }

    //#region PLSQL
    // BEGIN /*IF :TIPXCOM_CODCOM2 IS NULL OR :TIPXCOM_CODCOM2 < 0 OR :TIPXCOM_CODCOM2 > 100 THEN
    //   LIB$DTNERFRMA('EL PORCENTAJE DEBE ESTAR ENTRE 1 Y 99.9');
    // END IF;*/
    // 
    //  IF :TIPXCOM_PORCON2 NOT IN (70,30,50) THEN
    //   LIB$DTNERFRMA('LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50');
    //  END IF;
    // 
    // IF :TIPXCOM_PORCON2 > 100 THEN
    //  :TIPXCOM_PORCON2 := 100;
    // ELSIF :TIPXCOM_PORCON2 < 0 THEN
    //  :TIPXCOM_PORCON2 := 0;
    // END IF;
    // 
    // IF :TIPXCOM_CODCOM2 IS NOT NULL THEN
    //  :TIPXCOM_PORCON := 100 - :TIPXCOM_PORCON2;
    // ELSE
    //  :TIPXCOM_PORCON2 := NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_cottipxcom1_tipxcomPorcon2_postChange() {
        console.log("Entering CRFADECIAL_cottipxcom1_tipxcomPorcon2_postChange");
        // if ([70, 30, 50].indexOf(TIPXCOM_PORCON2) != -1) {
        //     // CRFADECIAL_LIB$DTNERFRMA("LOS PORCENTAJES PARA COMPARTIR DEBEN SER: 70,30 O 50");
        // }
        // if (TIPXCOM_PORCON2 > 100) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 100;
        // }
        // else if (TIPXCOM_PORCON2 < 0) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 0;
        // }
        // if ((TIPXCOM_CODCOM2 != null)) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON = 100 - TIPXCOM_PORCON2;
        // }
        // else {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = null;
        // }
        console.log("Exiting CRFADECIAL_cottipxcom1_tipxcomPorcon2_postChange");
    }

    //#region PLSQL
    // BEGIN PUP_VALIDACOM (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:COTTIPXCOM1.TIPXCOM_CODCOM,
    //  :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    // );
    // 
    // 
    // IF NVL(:TIPXCOM_PORCON,0) + NVL(:TIPXCOM_PORCON2,0) <> 100 OR NVL(:TIPXCOM_PORCON,0) < 0 OR NVL(:TIPXCOM_PORCON2,0) < 0 THEN
    //  LIB$DTNERFRMA('EL PORCENTAJE DEBE SUMAR EL 100%');
    // END IF;
    // 
    // --DO_KEY('KEY_COMMIT');
    // 
    // COMMIT; END;
    //#endregion
    async CRFADECIAL_cottipxcom1_btnGraba_whenButtonPressed() {
        console.log("Entering CRFADECIAL_cottipxcom1_btnGraba_whenButtonPressed");
        // CRFADECIAL_PUP_VALIDACOM(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, COTTIPXCOM1.TIPXCOM_CODCOM, this.CRTSOLICR.SOLICR_CODUNI);
        // if (((TIPXCOM_PORCON == null ? 0 : TIPXCOM_PORCON + TIPXCOM_PORCON2 == null ? 0 : TIPXCOM_PORCON2 != 100 || TIPXCOM_PORCON == null ? 0 : TIPXCOM_PORCON < 0) || TIPXCOM_PORCON2 == null ? 0 : TIPXCOM_PORCON2 < 0)) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL PORCENTAJE DEBE SUMAR EL 100%");
        // }
        console.log("Exiting CRFADECIAL_cottipxcom1_btnGraba_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   V_RESPUESTA NUMBER;
    // BEGIN
    //  
    //  LIB$ALERTA ('MENSAJE','CONFIRMA QUE ESTE NEGOCIO NO SE COMPARTIRÁ?','ACEPTAR','CANCELAR',NULL,V_RESPUESTA);
    //  
    //  IF V_RESPUESTA = 1 THEN
    //   DO_KEY('DELETE_RECORD');
    //   COMMIT;
    //    GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    //   HIDE_WINDOW('COMPARTIDO');
    //  END IF;
    // 
    // END;
    //#endregion
    async CRFADECIAL_cottipxcom1_btnDelrecord_whenButtonPressed() {
        console.log("Entering CRFADECIAL_cottipxcom1_btnDelrecord_whenButtonPressed");
        let V_RESPUESTA: number = null;
        // CRFADECIAL_LIB$ALERTA("MENSAJE", "CONFIRMA QUE ESTE NEGOCIO NO SE COMPARTIRÁ?", "ACEPTAR", "CANCELAR", null, V_RESPUESTA);
        if (V_RESPUESTA == 1) {
            this.oracleFormsBuiltins.do_key("DELETE_RECORD");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
            this.oracleFormsBuiltins.hide_window("COMPARTIDO");
        }
        console.log("Exiting CRFADECIAL_cottipxcom1_btnDelrecord_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   IF :TIPXCOM_CODCOM2 = :TIPXCOM_CODCOM THEN
    //    LIB$DTNERFRMA('DEBE SELECCIONAR OTRO USUARIO');
    //    :TIPXCOM_CODCOM2 := NULL;
    //   END IF;
    // 
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM2
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM2
    //    AND COM_CODUNI = :VARIABLE.UNIDAD; --ARQUITECTURA
    // 
    //   IF :TIPXCOM_CODCOM2 IS NOT NULL THEN
    //    :TIPXCOM_PORCON2 := 100 - :TIPXCOM_PORCON;
    //   END IF;
    // 
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM2 := NULL;
    // END;
    // 
    // --NEXT_ITEM;
    //#endregion
    async CRFADECIAL_cottipxcom1_tipxcomCodcom2_keyNextItem() {
        console.log("Entering CRFADECIAL_cottipxcom1_tipxcomCodcom2_keyNextItem");
        // if (TIPXCOM_CODCOM2 == TIPXCOM_CODCOM) {
        //     // CRFADECIAL_LIB$DTNERFRMA("DEBE SELECCIONAR OTRO USUARIO");
        //     this.COTTIPXCOM1.TIPXCOM_CODCOM2 = null;
        // }
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPXCOM_CODCOM2", TIPXCOM_CODCOM2);
        // payload1.set("UNIDAD", VARIABLE.UNIDAD);
        // call REST API
        const result1 = await Rest.post("/crfadecial_cottipxcom1/crfadecial_cottipxcom1_tipxcomcodcom2_keynextitem_query1", payload1);
        // get values from result
        // DSP_COM2 = result1[0].get("DSP_COM2");
        // if ((TIPXCOM_CODCOM2 != null)) {
        //     this.COTTIPXCOM1.TIPXCOM_PORCON2 = 100 - TIPXCOM_PORCON;
        // }
        if (result1 == null || result1.length == 0) {

            this.COTTIPXCOM1.DSP_COM2 = null;
        }

        console.log("Exiting CRFADECIAL_cottipxcom1_tipxcomCodcom2_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT COM_NOMBRE||' '||COM_APELLIDO 
    //    INTO :DSP_COM1
    //    FROM SETCOMCIA WHERE COM_CODIGO = :TIPXCOM_CODCOM
    //    AND COM_CODUNI = :VARIABLE.UNIDAD --ARQUITECTURA
    //    ;
    // EXCEPTION
    // WHEN NO_DATA_FOUND THEN
    //  :DSP_COM1 := NULL;
    // END;
    //#endregion
    async CRFADECIAL_cottipxcom1_tipxcomCodcom_keyNextItem() {
        console.log("Entering CRFADECIAL_cottipxcom1_tipxcomCodcom_keyNextItem");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPXCOM_CODCOM", TIPXCOM_CODCOM);
        // payload1.set("UNIDAD", VARIABLE.UNIDAD);
        // call REST API
        const result1 = await Rest.post("/crfadecial_cottipxcom1/crfadecial_cottipxcom1_tipxcomcodcom_keynextitem_query1", payload1);
        // get values from result
        // DSP_COM1 = result1[0].get("DSP_COM1");
        if (result1 == null || result1.length == 0) {

            this.COTTIPXCOM1.DSP_COM1 = null;
        }

        console.log("Exiting CRFADECIAL_cottipxcom1_tipxcomCodcom_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :COTTIPXCOM1.TIPXCOM_CODCOM IS NOT NULL THEN 
    //     PUP_VALIDACOM (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:COTTIPXCOM1.TIPXCOM_CODCOM,
    //     :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     );
    //  END IF ;
    //  
    //  IF :TIPXCOM_CODCOM2 IS NULL THEN
    //   CLEAR_RECORD;
    //  END IF;
    //  
    //  --:TXT_FLAG := 'S';  --VALIDE BLOQUE CRTSOLICR
    // 
    //   GO_ITEM('CRTSOLICR.SOLICR_USCIAL');
    //  HIDE_WINDOW('COMPARTIDO'); END;
    //#endregion
    async CRFADECIAL_cottipxcom1_btnRegresar_whenButtonPressed() {
        console.log("Entering CRFADECIAL_cottipxcom1_btnRegresar_whenButtonPressed");
        // if ((COTTIPXCOM1.TIPXCOM_CODCOM != null)) {
        //     // CRFADECIAL_PUP_VALIDACOM(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, COTTIPXCOM1.TIPXCOM_CODCOM, this.CRTSOLICR.SOLICR_CODUNI);
        // }
        // if ((TIPXCOM_CODCOM2 == null)) {
        //     this.oracleFormsBuiltins.clear_record();
        // }
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_USCIAL");
        this.oracleFormsBuiltins.hide_window("COMPARTIDO");
        console.log("Exiting CRFADECIAL_cottipxcom1_btnRegresar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFADECIAL_toolbar_whenButtonPressed() {
        console.log("Entering CRFADECIAL_toolbar_whenButtonPressed");
        // CRFADECIAL_TOOLBAR_ACTIONS();
        console.log("Exiting CRFADECIAL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFADECIAL_toolbar_whenMouseLeave() {
        console.log("Entering CRFADECIAL_toolbar_whenMouseLeave");
        // CRFADECIAL_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFADECIAL_toolbar_whenMouseLeave");
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
    async CRFADECIAL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFADECIAL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFADECIAL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFADECIAL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFADECIAL_base_fecha_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADECIAL_cotuvpccv_whenNewBlockInstance() {
        console.log("Entering CRFADECIAL_cotuvpccv_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADECIAL_cotuvpccv_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN -----******* CODIGOS DE ESTRATEGIA ************---------------- MELQ
    // ------------------------------------------------------------------------------------------
    //     --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    // 
    // 
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'CRTSOLICR';  --
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;
    // 
    // /*
    //  EXCEPTION
    //  WHEN OTHERS THEN
    //    
    //    RAISE FORM_TRIGGER_FAILURE; */
    //          
    // END;
    //    
    // --AJ; END;
    //#endregion
    async CRFADECIAL_cotuvpccv_preInsert() {
        console.log("Entering CRFADECIAL_cotuvpccv_preInsert");
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            V_PARAMETRO = "CRTSOLICR";
            // CRFADECIAL_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        console.log("Exiting CRFADECIAL_cotuvpccv_preInsert");
    }

    //#region PLSQL
    // BEGIN --GO_BLOCK('CRTSOLICR');
    // /*GO_ITEM( 'CRTSOLICR2.SOLICR_ESTRAT' );
    // 
    // BEGIN
    //  SELECT UVPCCV_COMAFA,UVPCCV_SUBADA, UVPCCV_TERCOP 
    //  INTO :COTUVPCCV.UVPCCV_COMAFA, :COTUVPCCV.UVPCCV_SUBADA, :COTUVPCCV.UVPCCV_TERCOP
    //  FROM CRTSOLICR, COTUVPCCV
    // WHERE  ROWNUM <= 1
    // AND SOLICR_CODVOR = UVPCCV_SOLVOR
    // AND SOLICR_CODUNI = UVPCCV_CODUNI
    // AND UVPCCV_SOLVOR = :CRTSOLICR1.SOLICR_CODVOR
    // AND UVPCCV_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.UVPCCV_COMAFA := NULL;
    //  :COTUVPCCV.UVPCCV_SUBADA := NULL;
    // END;
    // 
    // BEGIN
    //  SELECT UVPMVH_DEMAUV
    //    INTO :COTUVPCCV.DESCRI_COMAFA 
    //     FROM COTUVPMVH
    //    WHERE UVPMVH_COMAUV = :COTUVPCCV.UVPCCV_COMAFA; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_COMAFA := NULL;
    // END;
    // 
    // BEGIN
    //  SELECT SUCDAV_DESCRI
    //    INTO :COTUVPCCV.DESCRI_SUBADA 
    //     FROM COTSUCDAV
    //    WHERE SUCDAV_CODVOH = :COTUVPCCV.UVPCCV_SUBADA
    //    AND ROWNUM =1; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_SUBADA := NULL;
    // END;*/
    // 
    // ----CODIGOS DE ESTRATEGIA 26502
    // 
    // GO_BLOCK ('COTUVPCCV');
    // EXECUTE_QUERY;
    // 
    // GO_ITEM( 'CRTSOLICR2.SOLICR_ESTRAT' );
    // 
    // 
    // 
    // 
    // --LISTAS_ESTRATEGIAS; END;
    //#endregion
    async CRFADECIAL_cotuvpccv_btnCodestra_whenMouseClick() {
        console.log("Entering CRFADECIAL_cotuvpccv_btnCodestra_whenMouseClick");
        console.log("Exiting CRFADECIAL_cotuvpccv_btnCodestra_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT SUCDAV_DESCRI
    //    INTO :COTUVPCCV.DESCRI_SUBADA 
    //     FROM COTSUCDAV
    //    WHERE SUCDAV_CODVOH = :COTUVPCCV.UVPCCV_SUBADA
    //    AND ROWNUM =1; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_SUBADA := NULL;
    // END;
    //#endregion
    async CRFADECIAL_cotuvpccv_uvpccvSubada_postChange() {
        console.log("Entering CRFADECIAL_cotuvpccv_uvpccvSubada_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("UVPCCV_SUBADA", this.COTUVPCCV.UVPCCV_SUBADA);
            // call REST API
            const result1 = await Rest.post("/crfadecial_cotuvpccv/crfadecial_cotuvpccv_uvpccvsubada_postchange_query1", payload1);
            // get values from result
            this.COTUVPCCV.DESCRI_SUBADA = result1[0].get("COTUVPCCV.DESCRI_SUBADA");
        } catch (ex) {

            this.COTUVPCCV.DESCRI_SUBADA = null;
        }

        console.log("Exiting CRFADECIAL_cotuvpccv_uvpccvSubada_postChange");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT UVPMVH_DEMAUV
    //    INTO :COTUVPCCV.DESCRI_COMAFA 
    //     FROM COTUVPMVH
    //    WHERE UVPMVH_COMAUV = :COTUVPCCV.UVPCCV_COMAFA; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :COTUVPCCV.DESCRI_COMAFA := NULL;
    // END;
    //#endregion
    async CRFADECIAL_cotuvpccv_uvpccvComafa_postChange() {
        console.log("Entering CRFADECIAL_cotuvpccv_uvpccvComafa_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("UVPCCV_COMAFA", this.COTUVPCCV.UVPCCV_COMAFA);
            // call REST API
            const result1 = await Rest.post("/crfadecial_cotuvpccv/crfadecial_cotuvpccv_uvpccvcomafa_postchange_query1", payload1);
            // get values from result
            this.COTUVPCCV.DESCRI_COMAFA = result1[0].get("COTUVPCCV.DESCRI_COMAFA");
        } catch (ex) {

            this.COTUVPCCV.DESCRI_COMAFA = null;
        }

        console.log("Exiting CRFADECIAL_cotuvpccv_uvpccvComafa_postChange");
    }

    //#region PLSQL
    // BEGIN /*BEGIN
    //  DECLARE
    //  VALUVPDET NUMBER; 
    //  T_RESPUESTA NUMBER;  
    //     BEGIN
    //      IF :COTUVPCCV.UVPCCV_TERCOP IS NOT NULL THEN
    //          BEGIN
    //          
    //               SELECT COUNT (UVPDET_VALPAR)
    //               INTO VALUVPDET
    //               FROM COTUVPDET 
    //               WHERE UVPDET_CODIGO = :CRTSOLICR.SOLICR_ESTRAT--'2240'
    //               AND UVPDET_CODPAR = 'K'
    //               AND UVPDET_VALPAR = :COTUVPCCV.UVPCCV_TERCOP;--'830092963'
    //                  EXCEPTION
    //                  WHEN OTHERS THEN
    //                  LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR EN CÓDIGOS DE ESTRATEGIA, FAVOR VALIDAR.', 'ACEPTAR', NULL, NULL, T_RESPUESTA );
    //                  RAISE FORM_TRIGGER_FAILURE;
    //                   -- VALUVPDET := 0;   
    //          END;
    //                 
    //       
    //         ELSE 
    //           --LIB$ALERTA('MENSAJE','EL NIT DEL CONCESIONARIO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //            --RAISE FORM_TRIGGER_FAILURE; --- PARTE NUEVA
    //            NULL;
    //      END IF;
    //       END;
    // END;
    //  */
    //  
    //  NULL; END;
    //#endregion
    async CRFADECIAL_cotuvpccv_uvpccvTercop_whenValidateItem() {
        console.log("Entering CRFADECIAL_cotuvpccv_uvpccvTercop_whenValidateItem");
        console.log("Exiting CRFADECIAL_cotuvpccv_uvpccvTercop_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --MESSAGE (GET_ITEM_PROPERTY ('COTUVPCCV.UVPCCV_TERCOP',LOV_NAME));
    // --NULL;
    // LISTAS_ESTRATEGIAS; END;
    //#endregion
    async CRFADECIAL_cotuvpccv_uvpccvTercop_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_cotuvpccv_uvpccvTercop_whenNewItemInstance");
        // CRFADECIAL_LISTAS_ESTRATEGIAS();
        console.log("Exiting CRFADECIAL_cotuvpccv_uvpccvTercop_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //  
    //      SELECT   TBENAPE||' '||TBENNOM--, TBENTIPO, TBENTID 
    //      INTO   :COTUVPCCV.NOMBRE--, :CRTOTERSOL2.OTERSOL_TIPPER, :CRTOTERSOL2.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD = :COTUVPCCV.UVPCCV_TERCOP)
    //           UNION
    //      SELECT  NOMBRE
    //      FROM OPS$COLOCA.CRTTEREXJ
    //      WHERE (NIT= :COTUVPCCV.UVPCCV_TERCOP);
    //    EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //      :COTUVPCCV.NOMBRE := NULL;
    // 
    //    
    // IF :COTUVPCCV.UVPCCV_TERCOP IS  NULL THEN
    //           CLEAR_BLOCK(NO_VALIDATE);
    //          EXECUTE_QUERY;
    //           LIB$ALERTA('MENSAJE','EL NIT DEL CONCESIONARIO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //            RAISE FORM_TRIGGER_FAILURE; --- PARTE NUEVA
    // END IF;
    //    END;
    //#endregion
    async CRFADECIAL_cotuvpccv_uvpccvTercop_postChange() {
        console.log("Entering CRFADECIAL_cotuvpccv_uvpccvTercop_postChange");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("UVPCCV_TERCOP", this.COTUVPCCV.UVPCCV_TERCOP);
        // call REST API
        const result1 = await Rest.post("/crfadecial_cotuvpccv/crfadecial_cotuvpccv_uvpccvtercop_postchange_query1", payload1);
        // get values from result
        this.COTUVPCCV.NOMBRE = result1[0].get("COTUVPCCV.NOMBRE");
        if (result1 == null || result1.length == 0) {

            this.COTUVPCCV.NOMBRE = null;
            if ((this.COTUVPCCV.UVPCCV_TERCOP == null)) {
                this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
                this.oracleFormsBuiltins.execute_query();
                // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL NIT DEL CONCESIONARIO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }

        console.log("Exiting CRFADECIAL_cotuvpccv_uvpccvTercop_postChange");
    }

    //#region PLSQL
    // BEGIN PBD_AVANZASIG; END;
    //#endregion
    async CRFADECIAL_variable_keyNxtblk() {
        console.log("Entering CRFADECIAL_variable_keyNxtblk");
        // CRFADECIAL_PBD_AVANZASIG();
        console.log("Exiting CRFADECIAL_variable_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.TIPO_VINCULA := '13';
    // GO_BLOCK('CRTOTERSOL1'); END;
    //#endregion
    async CRFADECIAL_variable_btnCoarrendatario_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnCoarrendatario_whenMouseClick");
        this.VARIABLE.TIPO_VINCULA = "13";
        this.oracleFormsBuiltins.go_block("CRTOTERSOL1");
        console.log("Exiting CRFADECIAL_variable_btnCoarrendatario_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PU_VERPROVEE(1); END;
    //#endregion
    async CRFADECIAL_variable_btnProveed_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnProveed_whenMouseClick");
        // CRFADECIAL_PU_VERPROVEE(1);
        console.log("Exiting CRFADECIAL_variable_btnProveed_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PUP_COMPARTE; END;
    //#endregion
    async CRFADECIAL_variable_btnCompartido_whenButtonPressed() {
        console.log("Entering CRFADECIAL_variable_btnCompartido_whenButtonPressed");
        // CRFADECIAL_PUP_COMPARTE();
        console.log("Exiting CRFADECIAL_variable_btnCompartido_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN PUP_COMPARTE; END;
    //#endregion
    async CRFADECIAL_variable_btnCompartido_keyNextItem() {
        console.log("Entering CRFADECIAL_variable_btnCompartido_keyNextItem");
        // CRFADECIAL_PUP_COMPARTE();
        console.log("Exiting CRFADECIAL_variable_btnCompartido_keyNextItem");
    }

    //#region PLSQL
    // BEGIN PBD_AVANZASIG; END;
    //#endregion
    async CRFADECIAL_variable_codUsu_keyNextItem() {
        console.log("Entering CRFADECIAL_variable_codUsu_keyNextItem");
        // CRFADECIAL_PBD_AVANZASIG();
        console.log("Exiting CRFADECIAL_variable_codUsu_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_OPCION VARCHAR2(20);
    // BEGIN 
    //  BEGIN  
    //    SELECT L.PMOSOL_OPMENU
    //     INTO V_OPCION
    //      FROM SGUSUARIOS S, COTPMOSOL L
    //      WHERE S.USU_CODIGO = USER
    //       --AJ 12/02/2018 AND S.USU_CODUNI = :VARIABLE.UNIDAD --:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA --15/01/2018 MELQ
    //       AND L.PMOSOL_CARGON = S.USU_CARGO_N
    //       ;
    //  
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_OPCION := NULL;
    //  END;
    //  
    //  
    //   IF V_OPCION= 'COM' THEN 
    //        
    //     :CRTSOLICR.W_OFICINA         := NULL;   
    //     :CRTSOLICR.W_OFICINA         := NULL;   
    //     :CRTSOLICR.W_OFICINA_DESCR   := NULL;   
    //     
    //     /*
    //      AUTOR:    GEXNOVA.
    //      FECHA:    27.09.2019.
    //      PROYECTO: PERIODOS MUERTOS 56949.
    //      MOTIVO:   SE CALCULA EL PLAZO TOTAL.
    //     */
    //      :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0) + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    //     --GEXNOVA PERIODOS MUERTOS 56949. 
    //     
    //     GO_ITEM('CRTSOLICR.TXT_TOTPLAZO');
    //     
    //     
    //     IF :CRTSOLICR.SOLICR_ESTSOL = 'AP' THEN
    //      SET_ITEM_PROPERTY('SOLICR_SUBCAT',ENABLED,ATTR_ON);
    //      SET_ITEM_PROPERTY('SOLICR_SUBCAT',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //     ELSE
    //      SET_ITEM_PROPERTY('SOLICR_SUBCAT',ENABLED,"ATTR_OFF");
    //     END IF;
    //     
    //     --+PY27126. JDG. 2018.08.01.
    //     /*IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN -- CB: NOVEDADES
    //           SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNT$N',ENABLED,"PROPERTY_TRUE");
    //         ELSE 
    //            SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNT$N',ENABLED,"PROPERTY_FALSE");
    //         END IF;*/
    //         IF :CRTSOLICR.SOLICR_TASA IS NOT NULL THEN
    //          PUP_CONTROL_BOTONES_X_UNIDAD( 'CRTSOLICR.SOLICR_TASA', 'QUERY' );
    //         ELSIF :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL THEN
    //          PUP_CONTROL_BOTONES_X_UNIDAD( 'CRTSOLICR.SOLICR_TDOLAR', 'QUERY' );
    //         ELSE
    //          PUP_CONTROL_BOTONES_X_UNIDAD( 'CRTSOLICR.SOLICR_TPESOS', 'QUERY' );
    //         END IF; 
    //         --+
    //    
    //   ELSIF V_OPCION= 'CRE'  THEN
    //     
    //     GO_BLOCK('CRTSOLICR1');
    //     GO_ITEM('CRTSOLICR1.SOLICR_ACTIVO');
    //       
    //       
    //  
    //   ELSIF V_OPCION= 'OPE'  THEN
    //     
    //     GO_BLOCK('CRTSOLICR2');
    //     GO_ITEM('CRTSOLICR2.SOLICR_OPCCOM');
    //   
    //      
    //   
    //   ELSE
    //    
    //       LIB$DTNERFRMA('EL USUARIO NO TINE PRIVILEGIOS POR FAVOR COMUNICARSE CON CONTROL INTERNO');  
    //   END IF;
    // 
    // 
    // COMMIT_FORM;
    // 
    // END;
    //#endregion
    async CRFADECIAL_variable_btnCondFin_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnCondFin_whenMouseClick");
        let V_OPCION: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("UNIDAD", this.VARIABLE.UNIDAD);
        // call REST API
        const result1 = await Rest.post("/crfadecial_variable/crfadecial_variable_btncondfin_whenmouseclick_query1", payload1);
        // get values from result
        V_OPCION = result1[0].get("V_OPCION");
        if (result1 == null || result1.length == 0) {

            V_OPCION = null;
        }

        if (V_OPCION == "COM") {
            this.CRTSOLICR.W_OFICINA = null;
            this.CRTSOLICR.W_OFICINA = null;
            this.CRTSOLICR.W_OFICINA_DESCR = null;
            this.CRTSOLICR.TXT_TOTPLAZO = this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + this.CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + this.CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
            this.oracleFormsBuiltins.go_item("CRTSOLICR.TXT_TOTPLAZO");
            if (this.CRTSOLICR.SOLICR_ESTSOL == "AP") {
                this.oracleFormsBuiltins.set_item_property("SOLICR_SUBCAT", "ENABLED", "ATTR_ON");
                this.oracleFormsBuiltins.set_item_property("SOLICR_SUBCAT", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            }
            else {
                this.oracleFormsBuiltins.set_item_property("SOLICR_SUBCAT", "ENABLED", "ATTR_OFF");
            }
            if ((this.CRTSOLICR.SOLICR_TASA != null)) {
                // CRFADECIAL_PUP_CONTROL_BOTONES_X_UNIDAD("CRTSOLICR.SOLICR_TASA", "QUERY");
            }
            else if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
                // CRFADECIAL_PUP_CONTROL_BOTONES_X_UNIDAD("CRTSOLICR.SOLICR_TDOLAR", "QUERY");
            }
            else {
                // CRFADECIAL_PUP_CONTROL_BOTONES_X_UNIDAD("CRTSOLICR.SOLICR_TPESOS", "QUERY");
            }
        }
        else if (V_OPCION == "CRE") {
            this.oracleFormsBuiltins.go_block("CRTSOLICR1");
            this.oracleFormsBuiltins.go_item("CRTSOLICR1.SOLICR_ACTIVO");
        }
        else if (V_OPCION == "OPE") {
            this.oracleFormsBuiltins.go_block("CRTSOLICR2");
            this.oracleFormsBuiltins.go_item("CRTSOLICR2.SOLICR_OPCCOM");
        }
        else {
            // CRFADECIAL_LIB$DTNERFRMA("EL USUARIO NO TINE PRIVILEGIOS POR FAVOR COMUNICARSE CON CONTROL INTERNO");
        }
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADECIAL_variable_btnCondFin_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PUP_VALIDA_TER; ---CODIGOS DE ESTRATEGIA 26502
    // 
    // IF SYSTEM.CURSOR_BLOCK = 'CRTSOLICR' THEN
    //     RETURN;
    // END IF;
    // --GO_BLOCK('CRTSOLICR');
    // COMMIT_FORM;
    // PBD_AVANZASIG;
    // SET_ITEM_PROPERTY('VARIABLE.BTN_ACTUALIZAR', "DISPLAYED", "PROPERTY_TRUE");
    // SET_ITEM_PROPERTY('VARIABLE.BTN_ACTUALIZAR', "ENABLED", "PROPERTY_TRUE"); END;
    //#endregion
    async CRFADECIAL_variable_btnSolicitudes_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnSolicitudes_whenMouseClick");
        // CRFADECIAL_PUP_VALIDA_TER();
        // if (SYSTEM.CURSOR_BLOCK == "CRTSOLICR") {
        //     return ret;
        // }
        this.oracleFormsBuiltins.commit_form();
        // CRFADECIAL_PBD_AVANZASIG();
        this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_ACTUALIZAR", "DISPLAYED", "PROPERTY_TRUE");
        this.oracleFormsBuiltins.set_item_property("VARIABLE.BTN_ACTUALIZAR", "ENABLED", "PROPERTY_TRUE");
        console.log("Exiting CRFADECIAL_variable_btnSolicitudes_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN /*
    //    AUTOR  : FABIO OVALLE
    //    FECHA  : 11/04/2019/
    //    MOTIVO : SE AGREGA EL PROCEDIMIENTO PU_MODTER, EL CUAL LLAMA AL NUEVO BLOQUE
    //             CRTOTERSOL3 EN EL CUAL SE PUEDEN AGREGAR TERCEROS CON TIPO DE VINCULO
    //             09 Y 13
    //  */
    // /* GO_BLOCK('CRTOTERSOL');
    // EXECUTE_QUERY;
    // GO_BLOCK ('COTUVPCCV');
    // EXECUTE_QUERY;*/
    // ------------------------------------
    // PU_MODTER; END;
    //#endregion
    async CRFADECIAL_variable_btnModTer_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnModTer_whenMouseClick");
        // CRFADECIAL_PU_MODTER();
        console.log("Exiting CRFADECIAL_variable_btnModTer_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_TIPCRE,:CRTSOLICR.SOLICR_CODSOL,'Q', :CRTSOLICR.SOLICR_CODUNI); END;
    //#endregion
    async CRFADECIAL_variable_btnVerDetalle_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnVerDetalle_whenMouseClick");
        // CRFADECIAL_PU_LLAMAR_SOLICITUD(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_TIPCRE, this.CRTSOLICR.SOLICR_CODSOL, "Q", this.CRTSOLICR.SOLICR_CODUNI);
        console.log("Exiting CRFADECIAL_variable_btnVerDetalle_whenMouseClick");
    }

    //#region PLSQL
    // PUP_VALIDA_TER; --- 26502 VALIDA CODIGOS DE ESTRATEGIA 
    // --------************** CODIGOS DE ESTRATEGIA *************------
    // --**************************************************************************************************************
    // --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    // DECLARE
    //   V_RESPUESTA NUMBER;
    //   V_PARAMETRO VARCHAR2(20);
    //   T_RESPUESTA NUMBER;
    // BEGIN
    //   --IF :VARIABLE.UNIDAD = '005' THEN
    //     IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN
    //     --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     ---------     ********************************************     -----------------------------------------------------  
    //     V_PARAMETRO := 'CRTSOLICR';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO); -- ESA ENTRANDO ACA Y ENTRA A LA EXCEPCION
    //   END IF;
    // END;
    // ---************************************************************************************************************************
    // DECLARE
    //   V_OPCION VARCHAR2(20);
    //   V_MONTO1 NUMBER;
    //   V_MONTO  NUMBER;
    //   V_FINAN  NUMBER;
    // BEGIN
    // 
    //   BEGIN
    //     SELECT L.PMOSOL_OPMENU
    //       INTO V_OPCION
    //       FROM SGUSUARIOS S, COTPMOSOL L
    //      WHERE S.USU_CODIGO = USER
    //        AND L.PMOSOL_CARGON = S.USU_CARGO_N;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       V_OPCION := NULL;
    //   END;
    // 
    //   BEGIN
    //     SELECT SOLICR_VRFINA, SOLICR_VRFINCR
    //       INTO V_MONTO1, V_FINAN
    //       FROM CRTSOLICR
    //      WHERE SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //   
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       V_FINAN := 0;
    //   END;
    //   
    //   IF V_OPCION= 'COM' THEN 
    //       PU_VALTIPRO(:CRTSOLICR.SOLICR_CODPRO);
    //       IF V_MONTO1 <> :CRTSOLICR.SOLICR_VRFINA THEN 
    //         BEGIN
    //           --PY16124. SE MODIFICA ITEM SELECT PARA MANEJAR VALORES LITERALES NULL EN CAMPO AUDI_VRNVO
    //           --SELECT  DECODE(AUDI_VRANT,1,AUDI_VRNVO,NVL(AUDI_VRANT,AUDI_VRNVO))
    //           SELECT DECODE(AUDI_VRANT,'1',AUDI_VRNVO,'NULL',AUDI_VRNVO,NVL(AUDI_VRANT, AUDI_VRNVO))
    //             INTO V_MONTO
    //             FROM CRTAUDISOL
    //            WHERE AUDI_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //              AND AUDI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //              AND AUDI_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //              AND AUDI_CAMPO = 'SOLICR_VRFINA'
    //              AND AUDI_FECREG =
    //                  (SELECT MIN(L.AUDI_FECREG)
    //                     FROM CRTAUDISOL L
    //                    WHERE L.AUDI_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //                      AND L.AUDI_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //                      AND L.AUDI_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //                      AND L.AUDI_CAMPO = 'SOLICR_VRFINA'
    //                         --PY15692. VALIDACIÓN DE MONTO INICIAL A PARTIR DE LA FECHA EN QUE ESTA FORMA SE PASA A PRODUCCIÓN.
    //                      AND L.AUDI_FECREG >= TO_DATE('20150310', 'YYYYMMDD'));
    //         EXCEPTION
    //           WHEN NO_DATA_FOUND THEN
    //             BEGIN
    //               SELECT SOLICR_VRFINA
    //                 INTO V_MONTO
    //                 FROM CRTSOLICR
    //                WHERE SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //                  AND SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //                  AND SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI; --ARQUITECTURA
    //             EXCEPTION
    //               WHEN NO_DATA_FOUND THEN
    //                 V_MONTO := 0;
    //             END;
    //         END;
    //          PUP_VALIDAVAL(V_MONTO);
    //       END IF;   
    //       
    //       :CRTSOLICR.SOLICR_VRFINA  :=  NVL(:CRTSOLICR.SOLICR_MONTO1,0) - NVL(:CRTSOLICR.SOLICR_CONEXT,0);  
    //       IF V_FINAN <> :CRTSOLICR.SOLICR_VRFINCR THEN       
    //          :CRTSOLICR.SOLICR_VRFINCR :=  NVL(:CRTSOLICR.SOLICR_MONTO1,0);  
    //       END IF;
    //       PU_VALIDAGUARDA;
    //       COMMIT_FORM;  
    //   ELSIF V_OPCION= 'CRE' THEN
    //       P_ACTUALIZATIPO;
    //   ELSIF V_OPCION= 'OPE' THEN 
    //    IF V_MONTO <> :CRTSOLICR2.SOLICR_VRFINA THEN 
    //       PUP_VALIDAVALOPER(:CRTSOLICR2.SOLICR_VRFINA);
    //    END IF;    
    //       :CRTSOLICR2.SOLICR_VRFINA :=  NVL(:CRTSOLICR2.SOLICR_MONTO,0) - NVL(:CRTSOLICR2.SOLICR_CONEXT,0);  
    //       IF V_FINAN <> :CRTSOLICR2.SOLICR_VRFINCR THEN 
    //         :CRTSOLICR2.SOLICR_VRFINCR := NVL(:CRTSOLICR2.SOLICR_MONTO,0);
    //       END IF;
    //       COMMIT_FORM;    
    //   END IF;
    //   PBD_AVANZASIG;
    // END;
    //#endregion
    async CRFADECIAL_variable_btnActualizar_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnActualizar_whenMouseClick");
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            V_PARAMETRO = "CRTSOLICR";
            // CRFADECIAL_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        let V_OPCION: string = null;
        let V_MONTO1: number = null;
        let V_MONTO: number = null;
        let V_FINAN: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfadecial_variable/crfadecial_variable_btnactualizar_whenmouseclick_query1", payload1);
        // get values from result
        V_OPCION = result1[0].get("V_OPCION");
        if (result1 == null || result1.length == 0) {

            V_OPCION = null;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result2 = await Rest.post("/crfadecial_variable/crfadecial_variable_btnactualizar_whenmouseclick_query2", payload2);
        // get values from result
        V_MONTO1 = result2[0].get("V_MONTO1");
        V_FINAN = result2[0].get("V_FINAN");
        if (result2 == null || result2.length == 0) {

            V_FINAN = 0;
        }

        if (V_OPCION == "COM") {
            // CRFADECIAL_PU_VALTIPRO(CRTSOLICR.SOLICR_CODPRO);
            if (V_MONTO1 != this.CRTSOLICR.SOLICR_VRFINA) {
                // construct payload
                let payload3 = new Map();
                payload3.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                payload3.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                payload3.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result3 = await Rest.post("/crfadecial_variable/crfadecial_variable_btnactualizar_whenmouseclick_query3", payload3);
                // get values from result
                V_MONTO = result3[0].get("V_MONTO");
                if (result3 == null || result3.length == 0) {

                    // construct payload
                    let payload4 = new Map();
                    payload4.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload4.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result4 = await Rest.post("/crfadecial_variable/crfadecial_variable_btnactualizar_whenmouseclick_query4", payload4);
                    // get values from result
                    V_MONTO = result4[0].get("V_MONTO");
                    if (result4 == null || result4.length == 0) {

                        V_MONTO = 0;
                    }

                }

                // CRFADECIAL_PUP_VALIDAVAL(V_MONTO);
            }
            this.CRTSOLICR.SOLICR_VRFINA = this.CRTSOLICR.SOLICR_MONTO1 == null ? 0 : this.CRTSOLICR.SOLICR_MONTO1 - this.CRTSOLICR.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR.SOLICR_CONEXT;
            if (V_FINAN != this.CRTSOLICR.SOLICR_VRFINCR) {
                this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO1 == null ? 0 : this.CRTSOLICR.SOLICR_MONTO1;
            }
            // CRFADECIAL_PU_VALIDAGUARDA();
            this.oracleFormsBuiltins.commit_form();
        }
        else if (V_OPCION == "CRE") {
            // CRFADECIAL_P_ACTUALIZATIPO();
        }
        else if (V_OPCION == "OPE") {
            if (V_MONTO != this.CRTSOLICR2.SOLICR_VRFINA) {
                // CRFADECIAL_PUP_VALIDAVALOPER(this.CRTSOLICR2.SOLICR_VRFINA);
            }
            this.CRTSOLICR2.SOLICR_VRFINA = this.CRTSOLICR2.SOLICR_MONTO == null ? 0 : this.CRTSOLICR2.SOLICR_MONTO - this.CRTSOLICR2.SOLICR_CONEXT == null ? 0 : this.CRTSOLICR2.SOLICR_CONEXT;
            if (V_FINAN != this.CRTSOLICR2.SOLICR_VRFINCR) {
                this.CRTSOLICR2.SOLICR_VRFINCR = this.CRTSOLICR2.SOLICR_MONTO == null ? 0 : this.CRTSOLICR2.SOLICR_MONTO;
            }
            this.oracleFormsBuiltins.commit_form();
        }
        // CRFADECIAL_PBD_AVANZASIG();
        console.log("Exiting CRFADECIAL_variable_btnActualizar_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA       NUMBER;
    //    V_ESTADO          VARCHAR2(2) := 'AC';
    //    V_EXISTE_NAC      BOOLEAN;
    // BEGIN
    // --PY15329. SE AJUSTA QUE SE VERIFIQUEN PROVEEDORES ÚNICAMENTE PARA SOLICITUDES TIPO DE CRÉDITO 03-CONTRATO.
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //   -- CONDICION PARA VERIFICAR SI EXISTEN PROVEEEDORES NACIONALES ('09')
    //   IF NOT PU_SOL_PROVEEDOR_NAL (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_CODUNI)
    //   THEN
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO POSEE PROVEEDORES NACIONALES', NULL, NULL, NULL, T_RESPUESTA);
    //      V_EXISTE_NAC  := FALSE;
    //   ELSE
    //      V_EXISTE_NAC  := TRUE;
    //   END IF;
    // 
    //   IF V_EXISTE_NAC = FALSE THEN
    //      IF NOT PU_SOL_PROVEEDOR_EXT (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_CODUNI)
    //      THEN
    //          LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO POSEE PROVEEDORES NACIONALES NI EXTRANJEROS. DEBE INGRESAR PROVEEDORES PARA APROBAR', NULL, NULL, NULL, T_RESPUESTA);
    //          RAISE FORM_TRIGGER_FAILURE;
    //      ELSE
    //          LIB$ALERTA('MENSAJE', 'LA SOLICITUD POSEE PROVEEDORES EXTRANJEROS SOLAMENTE. VERIFIQUE SI NO EXISTEN PROVEEDORES NACIONALES Y APRUEBE LA SOLICITUD', NULL, NULL, NULL, T_RESPUESTA);
    //      END IF;
    //    END IF;
    // END IF;
    // 
    //   IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD') = 1 THEN
    //     -- M1 FUNCIÓN PARA AUDITORIA DE ESTADOS.
    //     --  22/01/2002 JRINCON.
    //     FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,'SOLICR_ESTSOL', :CRTSOLICR.SOLICR_ESTSOL,V_ESTADO||' ( '||TO_CHAR(SYSDATE, 'HH:MI:SS'||' )'));
    //     -- FIN M1
    //     :CRTSOLICR.SOLICR_ESTSOL  := V_ESTADO;
    //     :CRTSOLICR.SOLICR_FEACIA  := SYSDATE; 
    //     COMMIT_FORM;
    //   ELSE
    //     LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO HA SIDO APROBADA',NULL,NULL,NULL, T_RESPUESTA);
    //  END IF;
    // END;
    // GO_BLOCK('CRTSOLICR');
    //#endregion
    async CRFADECIAL_variable_btnAprobar_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnAprobar_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_ESTADO: string = 'AC';
        let V_EXISTE_NAC: boolean = null;
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            // if ((!PU_SOL_PROVEEDOR_NAL(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODUNI))) {
            //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO POSEE PROVEEDORES NACIONALES", null, null, null, T_RESPUESTA);
            //     V_EXISTE_NAC = FALSE;
            // }
            // else {
            //     V_EXISTE_NAC = TRUE;
            // }
            // if (V_EXISTE_NAC == FALSE) {
            //     if ((!PU_SOL_PROVEEDOR_EXT(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_CODUNI))) {
            //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO POSEE PROVEEDORES NACIONALES NI EXTRANJEROS. DEBE INGRESAR PROVEEDORES PARA APROBAR", null, null, null, T_RESPUESTA);
            //         console.log("FORM_TRIGGER_FAILURE");
            //         throw new Error('FORM_TRIGGER_FAILURE');
            //     }
            //     else {
            //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD POSEE PROVEEDORES EXTRANJEROS SOLAMENTE. VERIFIQUE SI NO EXISTEN PROVEEDORES NACIONALES Y APRUEBE LA SOLICITUD", null, null, null, T_RESPUESTA);
            //     }
            // }
        }
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA APROBAR LA SOLICITUD") == 1) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_ESTSOL", this.CRTSOLICR.SOLICR_ESTSOL, V_ESTADO + " ( " + TO_CHAR(PLSQLBuiltins.sysdate(), "HH:MI:SS" + " )"));
        //     this.CRTSOLICR.SOLICR_ESTSOL = V_ESTADO;
        //     this.CRTSOLICR.SOLICR_FEACIA = PLSQLBuiltins.sysdate();
        //     this.oracleFormsBuiltins.commit_form();
        // }
        // else {
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO APROBADA", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFADECIAL_variable_btnAprobar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN PU_VERPROVEE(2); END;
    //#endregion
    async CRFADECIAL_variable_btnProvExt_whenMouseClick() {
        console.log("Entering CRFADECIAL_variable_btnProvExt_whenMouseClick");
        // CRFADECIAL_PU_VERPROVEE(2);
        console.log("Exiting CRFADECIAL_variable_btnProvExt_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //   V_PROVE       VARCHAR2(13):= :EXTRANJERO01.NIT_EXTRANJE;       -- NIT PROVEEDOR EXTRANJERO  
    //   V_CODSOL      VARCHAR2(9) := :EXTRANJERO01.SOLI_EXTRANJE;      -- SOLICITUD
    //   V_OFCSOL      VARCHAR2(3) := :EXTRANJERO01.OFI_SOLI_EXTRANJE;  -- OFICINA DE LA SOLICITUD
    //   V_UNISOL      VARCHAR2(3) := :EXTRANJERO01.UNIDAD_EXTRANJE;    -- CODIGO UNIDAD DE LA SOLICITUD 
    //   V_OFCCON      VARCHAR2(3) := :EXTRANJERO01.UNIDAD_EXTRANJE;    -- CODIGO OFICINA CONTRATO
    //   V_TIPCON      VARCHAR2(2) := :EXTRANJERO01.TIP_OPERA_EXTRANJE; -- TIPO OPERACION
    //   V_CODCON      VARCHAR2(10):= :EXTRANJERO01.CONTRATO_EXTRANJE;  -- CODIGO CONTRATO
    //   V_NOMBRE      VARCHAR2(80):= :EXTRANJERO01.NOMBRE_EXTRANJE;    -- NOMBRE PROVEEDOR EXTRANJERO
    //   V_PAIS        VARCHAR2(3) := :EXTRANJERO01.PAIS_EXTRANJE;      -- PAIS PROVEEDOR EXTRANJERO
    //   C_CRTSOLICR   NUMBER := 0;
    //   C_CRTOTERSOL  NUMBER := 0; 
    //   C_CRTTEREXT   NUMBER := 0;
    //   C_COTTERXCTO  NUMBER := 0;
    //   NO_CRTSOLICR  EXCEPTION;
    //   MAS_CRTSOLICR EXCEPTION;
    //   T_RESPUESTA NUMBER;
    //   BEGIN 
    //    
    //    IF :EXTRANJERO01.NIT_EXTRANJE IS NULL OR :EXTRANJERO01.SOLI_EXTRANJE IS NULL OR :EXTRANJERO01.OFI_SOLI_EXTRANJE IS NULL
    //      OR :EXTRANJERO01.UNIDAD_EXTRANJE IS NULL OR :EXTRANJERO01.TIP_OPERA_EXTRANJE IS NULL /*OR :EXTRANJERO01.CONTRATO_EXTRANJE IS NULL*/ THEN 
    //     LIB$DTNERFRMA('LOS CAMPOS NO PUEDEN ESTAR VACÍOS PARA GRABAR PROVEEDOR EXTRANJERO.');
    //     ELSE
    //   SELECT COUNT(1)
    //     INTO C_CRTSOLICR
    //     FROM OPS$COLOCA.CRTSOLICR
    //    WHERE SOLICR_OFCSOL = V_OFCSOL
    //      AND SOLICR_CODSOL = V_CODSOL
    //      AND SOLICR_CODUNI = V_UNISOL;
    //   
    //   IF C_CRTSOLICR = 0 THEN    
    //     RAISE NO_CRTSOLICR;
    //   ELSIF C_CRTSOLICR = 1 THEN
    //   
    //    --LIB$ALERTA ('MENSAJE',' LA SOLICITUD '||V_OFCSOL||'-'||V_UNISOL||'-'||V_CODSOL||' EXISTE EN CRTSOLICR',NULL,NULL,NULL,T_RESPUESTA);
    //    --LIB$ALERTA ('MENSAJE','+ VALIDACION CRTOTERSOL',NULL,NULL,NULL,T_RESPUESTA);
    //         
    //     SELECT COUNT(1)
    //       INTO C_CRTOTERSOL
    //       FROM OPS$COLOCA.CRTOTERSOL
    //      WHERE OTERSOL_CODSOL = V_CODSOL
    //        AND OTERSOL_OFCSOL = V_OFCSOL
    //        AND OTERSOL_CODUNI = V_UNISOL
    //        AND OTERSOL_NITTER = V_PROVE;
    //   
    //     IF C_CRTOTERSOL = 0 THEN
    //       BEGIN
    //         INSERT INTO OPS$COLOCA.CRTOTERSOL (OTERSOL_OFCSOL, OTERSOL_CODSOL, OTERSOL_TIPVIN, OTERSOL_NITTER, OTERSOL_TIPPER, OTERSOL_TIPIDE, OTERSOL_GIRDIR, OTERSOL_ACTJUN, OTERSOL_MONTOPAR, OTERSOL_CODUNI)
    //         VALUES (V_OFCSOL, V_CODSOL, '99', V_PROVE, 'J', 'NE', NULL, NULL, NULL, V_UNISOL);    
    //         COMMIT;
    //         LIB$ALERTA ('MENSAJE',' SE INSERTO EN CRTOTERSOL EL PROVEEDOR EXTRANJERO CON NIT '||V_PROVE||' EN LA SOLICITUD '||V_UNISOL||'-'||V_OFCSOL||'-'||V_CODSOL,NULL,NULL,NULL,T_RESPUESTA);
    //         
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //   OPS$COLOCA.PBD_COL_AUDITORIA_FORMAS(P_USUARIO => USER,
    //                                  P_TIPO_DATO => '2',
    //                                 P_TABLA => 'CRTOTERSOL',
    //                                 P_CAMPO => 'OTERSOL_NITTER',
    //                                 P_APLICACION => 'OPS$COLOCA',
    //                                 P_FECHA => SYSDATE,
    //                                 P_TIPO_EVENTO => 'INS',
    //                                 P_DOCUMENTO => :EXTRANJERO01.UNIDAD_EXTRANJE ||:EXTRANJERO01.OFI_SOLI_EXTRANJE||:EXTRANJERO01.TIP_OPERA_EXTRANJE ||:EXTRANJERO01.SOLI_EXTRANJE  ,
    //                                 P_MOTIVO_CAMBIO => 'INSERT EN: '|| 'OFI '||V_OFCSOL||' -SOLICITUD '||V_CODSOL||' -TIPO'||' 99'||' -PROVEEDOR '||V_PROVE ||' -UNIDAD '||V_UNISOL ||' PROVEEDOR EXTRANJERO ',
    //                                 P_VALOR_NUEVO => :EXTRANJERO01.NIT_EXTRANJE,
    //                                 P_VALOR_ANTERIOR => 'INSERCIÓN PROVEEDOR EXTRANJERO',
    //                                 P_FORMA => 'CRFADECIAL');
    //                                 COMMIT;
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------      
    // 
    //       EXCEPTION WHEN OTHERS THEN 
    //         LIB$ALERTA ('MENSAJE',' SE HA PRODUCIDO UN ERROR INSERTANDO EN CRTOTERSOL ',NULL,NULL,NULL,T_RESPUESTA);       
    //        
    //       END;  
    //     ELSE
    //       LIB$ALERTA ('MENSAJE',' EL PROVEEDOR EXTRANJERO '||V_PROVE||' YA EXISTE PARA LA SOLICITUD '||V_UNISOL||'-'||V_OFCSOL||'-'||V_CODSOL||' EN LA TABLA CRTOTERSOL',NULL,NULL,NULL,T_RESPUESTA); 
    //     END IF;   
    //   ELSE   
    //     RAISE MAS_CRTSOLICR;   
    //   END IF; 
    //     --LIB$ALERTA ('MENSAJE','+ VALIDACION CRTTEREXT',NULL,NULL,NULL,T_RESPUESTA);        
    //   
    //   SELECT COUNT(1)
    //     INTO C_CRTTEREXT
    //     FROM OPS$COLOCA.CRTTEREXT
    //    WHERE TEREXT_CODSOL = V_CODSOL
    //      AND TEREXT_OFCSOL = V_OFCSOL
    //      AND TEREXT_CODUNI = V_UNISOL
    //      AND TEREXT_NIT  = V_PROVE;
    //   
    //   IF C_CRTTEREXT = 0 THEN
    //     BEGIN
    //       INSERT INTO OPS$COLOCA.CRTTEREXT (TEREXT_OFCSOL, TEREXT_CODSOL, TEREXT_NIT, TEREXT_TIPID, TEREXT_TIPPER, TEREXT_NOMBRE, TEREXT_APELLIDO, TEREXT_NOMCIA, TEREXT_DIRECC, TEREXT_TELEFONO, TEREXT_CODPAIS, TEREXT_CARCRED, TEREXT_CARGDIR, TEREXT_MONTOPAR, TEREXT_CODUNI)
    //       VALUES (V_OFCSOL, V_CODSOL, V_PROVE, 'NE', 'J', NULL, NULL, V_NOMBRE, NULL, NULL, V_PAIS, NULL, NULL, NULL, V_UNISOL);
    //       COMMIT;
    //        LIB$ALERTA ('MENSAJE',' SE INSERTO EN CRTTEREXT EL PROVEEDOR EXTRANJERO CON NIT '||V_PROVE||' EN LA SOLICITUD '||V_UNISOL||'-'||V_OFCSOL||'-'||V_CODSOL,NULL,NULL,NULL,T_RESPUESTA); 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //   OPS$COLOCA.PBD_COL_AUDITORIA_FORMAS(P_USUARIO => USER,
    //                                  P_TIPO_DATO => '2',
    //                                 P_TABLA => 'CRTTEREXT',
    //                                 P_CAMPO => 'TEREXT_NIT',
    //                                 P_APLICACION => 'OPS$COLOCA',
    //                                 P_FECHA => SYSDATE,
    //                                 P_TIPO_EVENTO => 'INS',
    //                                 P_DOCUMENTO => :EXTRANJERO01.UNIDAD_EXTRANJE ||:EXTRANJERO01.OFI_SOLI_EXTRANJE||:EXTRANJERO01.TIP_OPERA_EXTRANJE ||:EXTRANJERO01.SOLI_EXTRANJE  ,
    //                                 P_MOTIVO_CAMBIO => 'INSERT EN: '|| 'OFI '||V_OFCSOL||' -SOLICITUD '||V_CODSOL||' -TIPO '||' 99'||' -PROVEEDOR'||V_PROVE ||' -UNIDAD '||V_UNISOL ||' PROVEEDOR EXTRANJERO ',
    //                                 P_VALOR_NUEVO => :EXTRANJERO01.NIT_EXTRANJE,
    //                                 P_VALOR_ANTERIOR => 'INSERCIÓN PROVEEDOR EXTRANJERO',
    //                                 P_FORMA => 'CRFADECIAL');
    //                                 COMMIT;
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------        
    //      
    //     EXCEPTION WHEN OTHERS THEN 
    //        LIB$ALERTA ('MENSAJE',' SE HA PRODUCIDO UN ERROR INSERTANDO EN CRTTEREXT - '||SQLCODE||' -ERROR- '||SQLERRM,NULL,NULL,NULL,T_RESPUESTA);         
    //     END;  
    //   ELSE
    //   LIB$ALERTA ('MENSAJE',' EL PROVEEDOR EXTRANJERO '||V_PROVE||' YA EXISTE PARA LA SOLICITUD '||V_UNISOL||'-'||V_OFCSOL||'-'||V_CODSOL||' EN LA TABLA CRTTEREXT',NULL,NULL,NULL,T_RESPUESTA);  
    //      
    //   END IF;
    //   --LIB$ALERTA ('MENSAJE','+ VALIDACION COTTERXCTO',NULL,NULL,NULL,T_RESPUESTA);    
    //   
    // /*  SELECT COUNT(1)
    //     INTO C_COTTERXCTO
    //     FROM OPS$COLOCA.COTTERXCTO
    //    WHERE TERXCTO_CODCOL = V_CODCON
    //      AND TERXCTO_OFCCOL = V_OFCCON
    //      AND TERXCTO_TIPCOL = V_TIPCON
    //      AND TERXCTO_NITTER = V_PROVE; 
    // 
    //   IF C_COTTERXCTO = 0 THEN
    //     BEGIN
    //       INSERT INTO OPS$COLOCA.COTTERXCTO (TERXCTO_OFCCOL, TERXCTO_TIPCOL, TERXCTO_CODCOL, TERXCTO_NITTER, TERXCTO_TERVIN)
    //       VALUES (V_OFCCON, V_TIPCON, V_CODCON, V_PROVE, '99');
    //       COMMIT;
    //       LIB$ALERTA ('MENSAJE',' SE INSERTO EN COTTERXCTO EL PROVEEDOR EXTRANJERO CON NIT '||V_PROVE||' EN EL CONTRATO '||V_OFCCON||'-'||V_TIPCON||'-'||V_CODCON ||CHR(13)||CHR(13) ||'        ****** FIN DEL PROCESO ******',NULL,NULL,NULL,T_RESPUESTA);   
    //      
    //     EXCEPTION WHEN OTHERS THEN 
    //      LIB$ALERTA ('MENSAJE',' SE HA PRODUCIDO UN ERROR INSERTANDO EN COTTERXCTO - '||SQLCODE||' -ERROR- '||SQLERRM, NULL,NULL,NULL,T_RESPUESTA);
    //        --LIB$ALERTA ('MENSAJE',' SE HA PRODUCIDO UN ERROR INSERTANDO EN COTTERXCTO - '||SQLCODE||' -ERROR- '||SQLERRM, NULL,NULL,NULL,T_RESPUESTA);        
    //       
    //     END;  
    //   ELSE 
    //     LIB$ALERTA ('MENSAJE',' EL PROVEEDOR EXTRANJERO '||V_PROVE||' YA EXISTE PARA EL CONTRATO '||V_OFCCON||'-'||V_TIPCON||'-'||V_CODCON||' EN LA TABLA COTTERXCTO',NULL,NULL,NULL,T_RESPUESTA); 
    //     
    //   END IF;   */     
    //      END IF;
    // EXCEPTION 
    //   WHEN NO_CRTSOLICR THEN
    //      LIB$ALERTA ('MENSAJE',' - LA SOLICITUD '||V_UNISOL||'-'||V_OFCSOL||'-'||V_CODSOL|| ' NO EXISTE EN CRTSOLICR',NULL,NULL,NULL,T_RESPUESTA);  
    // 
    //   WHEN MAS_CRTSOLICR THEN
    //      LIB$ALERTA ('MENSAJE',' - LA SOLICITUD '||V_UNISOL||'-'||V_OFCSOL||'-'||V_CODSOL|| ' EXISTE MAS DE UNA VEZ EN CRTSOLICR',NULL,NULL,NULL,T_RESPUESTA);   
    // 
    //   /*WHEN OTHERS THEN
    //     LIB$ALERTA ('MENSAJE',' - SE HA PRODUCIDO EL ERROR 4 - '||SQLCODE||' -ERROR- '||SQLERRM,NULL,NULL,NULL,T_RESPUESTA);  */
    //     
    // END; 
    // GO_BLOCK ('CRTTEREXT');
    // EXECUTE_QUERY;
    //#endregion
    async CRFADECIAL_extranjero01_grabarExtranje_whenButtonPressed() {
        console.log("Entering CRFADECIAL_extranjero01_grabarExtranje_whenButtonPressed");
        // let V_PROVE: string = : EXTRANJERO01.NIT_EXTRANJE;
        // let V_CODSOL: string = : EXTRANJERO01.SOLI_EXTRANJE;
        // let V_OFCSOL: string = : EXTRANJERO01.OFI_SOLI_EXTRANJE;
        // let V_UNISOL: string = : EXTRANJERO01.UNIDAD_EXTRANJE;
        // let V_OFCCON: string = : EXTRANJERO01.UNIDAD_EXTRANJE;
        // let V_TIPCON: string = : EXTRANJERO01.TIP_OPERA_EXTRANJE;
        // let V_CODCON: string = : EXTRANJERO01.CONTRATO_EXTRANJE;
        // let V_NOMBRE: string = : EXTRANJERO01.NOMBRE_EXTRANJE;
        // let V_PAIS: string = : EXTRANJERO01.PAIS_EXTRANJE;
        let C_CRTSOLICR: number = 0;
        let C_CRTOTERSOL: number = 0;
        let C_CRTTEREXT: number = 0;
        let C_COTTERXCTO: number = 0;
        let NO_CRTSOLICR: string = null;
        let MAS_CRTSOLICR: string = null;
        let T_RESPUESTA: number = null;
        if ((((((this.EXTRANJERO01.NIT_EXTRANJE == null) || (this.EXTRANJERO01.SOLI_EXTRANJE == null)) || (this.EXTRANJERO01.OFI_SOLI_EXTRANJE == null)) || (this.EXTRANJERO01.UNIDAD_EXTRANJE == null)) || (this.EXTRANJERO01.TIP_OPERA_EXTRANJE == null))) {
            // CRFADECIAL_LIB$DTNERFRMA("LOS CAMPOS NO PUEDEN ESTAR VACÍOS PARA GRABAR PROVEEDOR EXTRANJERO.");
        }
        else {
            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/crfadecial_extranjero01/crfadecial_extranjero01_grabarextranje_whenbuttonpressed_query1", payload1);
            // get values from result
            C_CRTSOLICR = result1[0].get("C_CRTSOLICR");
            if (C_CRTSOLICR == 0) {
                console.log("NO_CRTSOLICR");
                throw new Error('NO_CRTSOLICR');
            }
            else if (C_CRTSOLICR == 1) {
                // construct payload
                let payload2 = new Map();
                // call REST API
                const result2 = await Rest.post("/crfadecial_extranjero01/crfadecial_extranjero01_grabarextranje_whenbuttonpressed_query2", payload2);
                // get values from result
                C_CRTOTERSOL = result2[0].get("C_CRTOTERSOL");
                if (C_CRTOTERSOL == 0) {
                    let result5 = new Map();
                    try {

                        // construct payload
                        let payload3 = new Map();
                        // call REST API
                        const result3 = await Rest.post("/crfadecial_extranjero01/crfadecial_extranjero01_grabarextranje_whenbuttonpressed_query3", payload3);
                        // CRFADECIAL_LIB$ALERTA("MENSAJE", " SE INSERTO EN CRTOTERSOL EL PROVEEDOR EXTRANJERO CON NIT " + V_PROVE + " EN LA SOLICITUD " + V_UNISOL + "-" + V_OFCSOL + "-" + V_CODSOL, null, null, null, T_RESPUESTA);
                        // CRFADECIAL_OPS$COLOCA.PBD_COL_AUDITORIA_FORMAS(USER, "2", "CRTOTERSOL", "OTERSOL_NITTER", "OPS$COLOCA", PLSQLBuiltins.sysdate(), "INS", EXTRANJERO01.UNIDAD_EXTRANJE + EXTRANJERO01.OFI_SOLI_EXTRANJE + EXTRANJERO01.TIP_OPERA_EXTRANJE + EXTRANJERO01.SOLI_EXTRANJE, "INSERT EN: " + "OFI " + V_OFCSOL + " -SOLICITUD " + V_CODSOL + " -TIPO" + " 99" + " -PROVEEDOR " + V_PROVE + " -UNIDAD " + V_UNISOL + " PROVEEDOR EXTRANJERO ", EXTRANJERO01.NIT_EXTRANJE, "INSERCIÓN PROVEEDOR EXTRANJERO", "CRFADECIAL");
                    } catch (ex) {

                        // CRFADECIAL_LIB$ALERTA("MENSAJE", " SE HA PRODUCIDO UN ERROR INSERTANDO EN CRTOTERSOL ", null, null, null, T_RESPUESTA);
                    }

                }
                else {
                    // CRFADECIAL_LIB$ALERTA("MENSAJE", " EL PROVEEDOR EXTRANJERO " + V_PROVE + " YA EXISTE PARA LA SOLICITUD " + V_UNISOL + "-" + V_OFCSOL + "-" + V_CODSOL + " EN LA TABLA CRTOTERSOL", null, null, null, T_RESPUESTA);
                }
            }
            else {
                console.log("MAS_CRTSOLICR");
                throw new Error('MAS_CRTSOLICR');
            }
            // construct payload
            let payload6 = new Map();
            // call REST API
            const result6 = await Rest.post("/crfadecial_extranjero01/crfadecial_extranjero01_grabarextranje_whenbuttonpressed_query6", payload6);
            // get values from result
            C_CRTTEREXT = result6[0].get("C_CRTTEREXT");
            if (C_CRTTEREXT == 0) {
                let result9 = new Map();
                try {

                    // construct payload
                    let payload7 = new Map();
                    // call REST API
                    const result7 = await Rest.post("/crfadecial_extranjero01/crfadecial_extranjero01_grabarextranje_whenbuttonpressed_query7", payload7);
                    // CRFADECIAL_LIB$ALERTA("MENSAJE", " SE INSERTO EN CRTTEREXT EL PROVEEDOR EXTRANJERO CON NIT " + V_PROVE + " EN LA SOLICITUD " + V_UNISOL + "-" + V_OFCSOL + "-" + V_CODSOL, null, null, null, T_RESPUESTA);
                    // CRFADECIAL_OPS$COLOCA.PBD_COL_AUDITORIA_FORMAS(USER, "2", "CRTTEREXT", "TEREXT_NIT", "OPS$COLOCA", PLSQLBuiltins.sysdate(), "INS", EXTRANJERO01.UNIDAD_EXTRANJE + EXTRANJERO01.OFI_SOLI_EXTRANJE + EXTRANJERO01.TIP_OPERA_EXTRANJE + EXTRANJERO01.SOLI_EXTRANJE, "INSERT EN: " + "OFI " + V_OFCSOL + " -SOLICITUD " + V_CODSOL + " -TIPO " + " 99" + " -PROVEEDOR" + V_PROVE + " -UNIDAD " + V_UNISOL + " PROVEEDOR EXTRANJERO ", EXTRANJERO01.NIT_EXTRANJE, "INSERCIÓN PROVEEDOR EXTRANJERO", "CRFADECIAL");
                } catch (ex) {

                    // CRFADECIAL_LIB$ALERTA("MENSAJE", " SE HA PRODUCIDO UN ERROR INSERTANDO EN CRTTEREXT - " + SQLCODE + " -ERROR- " + SQLERRM, null, null, null, T_RESPUESTA);
                }

            }
            else {
                // CRFADECIAL_LIB$ALERTA("MENSAJE", " EL PROVEEDOR EXTRANJERO " + V_PROVE + " YA EXISTE PARA LA SOLICITUD " + V_UNISOL + "-" + V_OFCSOL + "-" + V_CODSOL + " EN LA TABLA CRTTEREXT", null, null, null, T_RESPUESTA);
            }
        }
        console.log("Exiting CRFADECIAL_extranjero01_grabarExtranje_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_NUEVO  := NAME_IN('SYSTEM.CURSOR_VALUE');
    // :GLOBAL.VRAPCR_NUEVO := :CRTSOLICR.SOLICR_VRFINCR;
    // 
    // 
    // IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR THEN
    //    FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                             SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //               :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.GLOBAL.VRAPCR_NUEVO = this.CRTSOLICR.SOLICR_VRFINCR;
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_postTextItem");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    // --+PRY CODIGOS DE ESTRATEGIA -- MELQ
    // IF :VARIABLE.UNIDAD = '005' THEN 
    //  SET_ITEM_PROPERTY('BTN_CODESTRA',ENABLED,"PROPERTY_TRUE");
    // ELSE
    //  SET_ITEM_PROPERTY('BTN_CODESTRA',ENABLED,"PROPERTY_FALSE");
    // END IF;
    // --+PRY CODIGOS DE ESTRATEGIA --MELQ; END;
    //#endregion
    async CRFADECIAL_crtsolicr_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtsolicr_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (VARIABLE.UNIDAD == "005") {
        //     this.oracleFormsBuiltins.set_item_property("BTN_CODESTRA", "ENABLED", "PROPERTY_TRUE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("BTN_CODESTRA", "ENABLED", "PROPERTY_FALSE");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    //  CLEAR_BLOCK;
    //  IF SYSTEM.BLOCK_STATUS <> 'CHANGED' THEN
    //     FRM$AUDIT_SOLIC_DEL;
    //  END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_keyClrblk() {
        console.log("Entering CRFADECIAL_crtsolicr_keyClrblk");
        this.oracleFormsBuiltins.clear_block();
        // if (SYSTEM.BLOCK_STATUS != "CHANGED") {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_DEL();
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_keyClrblk");
    }

    //#region PLSQL
    // BEGIN PU_VALIDAGUARDA; END;
    //#endregion
    async CRFADECIAL_crtsolicr_keyCommit() {
        console.log("Entering CRFADECIAL_crtsolicr_keyCommit");
        // CRFADECIAL_PU_VALIDAGUARDA();
        console.log("Exiting CRFADECIAL_crtsolicr_keyCommit");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN', "VISIBLE") = 'FALSE' THEN
    //    DOWN;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_keyDown() {
        console.log("Entering CRFADECIAL_crtsolicr_keyDown");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        else {
        }
        console.log("Exiting CRFADECIAL_crtsolicr_keyDown");
    }

    //#region PLSQL
    // BEGIN --7390
    // :CRTSOLICR.SOLICR_OFIDAV   := :CRTSOLICR.OFIDAV; 
    // --7390; END;
    //#endregion
    async CRFADECIAL_crtsolicr_preInsert() {
        console.log("Entering CRFADECIAL_crtsolicr_preInsert");
        this.CRTSOLICR.SOLICR_OFIDAV = this.CRTSOLICR.OFIDAV;
        console.log("Exiting CRFADECIAL_crtsolicr_preInsert");
    }

    //#region PLSQL
    // BEGIN :VARIABLE.OFICINA   := :CRTSOLICR.SOLICR_OFCSOL;
    // :VARIABLE.SOLICITUD := :CRTSOLICR.SOLICR_CODSOL;
    // :VARIABLE.UNIDAD := :CRTSOLICR.SOLICR_CODUNI;
    // :CRTSOLICR.VRAPCR    := :CRTSOLICR.SOLICR_VRFINCR;
    // 
    // --*********** MELQ **************----
    // :EXTRANJERO01.UNIDAD_EXTRANJE := :CRTSOLICR.SOLICR_CODUNI;
    // :EXTRANJERO01.TIP_OPERA_EXTRANJE := :CRTSOLICR.SOLICR_TIPCRE;
    // --:EXTRANJERO01.CONTRATO_EXTRANJE := :COLMAN01.COLCOD;
    // :EXTRANJERO01.OFI_SOLI_EXTRANJE := :CRTSOLICR.SOLICR_OFCSOL;
    // :EXTRANJERO01.SOLI_EXTRANJE := :CRTSOLICR.SOLICR_CODSOL;
    // --*********** MELQ **************----; END;
    //#endregion
    async CRFADECIAL_crtsolicr_whenNewRecordInstance() {
        console.log("Entering CRFADECIAL_crtsolicr_whenNewRecordInstance");
        this.VARIABLE.OFICINA = this.CRTSOLICR.SOLICR_OFCSOL;
        this.VARIABLE.SOLICITUD = this.CRTSOLICR.SOLICR_CODSOL;
        this.VARIABLE.UNIDAD = this.CRTSOLICR.SOLICR_CODUNI;
        this.CRTSOLICR.VRAPCR = this.CRTSOLICR.SOLICR_VRFINCR;
        this.EXTRANJERO01.UNIDAD_EXTRANJE = this.CRTSOLICR.SOLICR_CODUNI;
        this.EXTRANJERO01.TIP_OPERA_EXTRANJE = this.CRTSOLICR.SOLICR_TIPCRE;
        this.EXTRANJERO01.OFI_SOLI_EXTRANJE = this.CRTSOLICR.SOLICR_OFCSOL;
        this.EXTRANJERO01.SOLI_EXTRANJE = this.CRTSOLICR.SOLICR_CODSOL;
        console.log("Exiting CRFADECIAL_crtsolicr_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN
    //  ENTER_QUERY;
    //   IF SYSTEM.MODE = 'ENTER-QUERY' THEN
    //      FRM$AUDIT_SOLIC_DEL;
    //   END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_keyEntqry() {
        console.log("Entering CRFADECIAL_crtsolicr_keyEntqry");
        console.log("Exiting CRFADECIAL_crtsolicr_keyEntqry");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   RG_NAME       VARCHAR2(40)  := 'RG_AUDIT';
    //   RG_ID         RECORDGROUP; 
    //   RG_INDICE     NUMBER(3);
    //   T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //     
    //   RG_ID := FIND_GROUP( RG_NAME );
    //   
    //   /* 6914
    //   IF NOT ID_NULL(RG_ID) THEN 
    //      RG_INDICE := GET_GROUP_ROW_COUNT( RG_ID ); 
    //      IF RG_INDICE > 0 THEN
    //         FRM$AUDIT_SOLIC_INSERT;
    //      END IF;
    //   END IF;
    //   6914
    //   */
    // 
    //   IF :CRTSOLICR.SOLICR_VRFINCR <> :CRTSOLICR.VRAPCR AND :CRTSOLICR.SOLICR_AUMEAP IS NULL THEN
    //    :CRTSOLICR.SOLICR_AUMEAP := 'S';  
    //   --COMMIT_FORM; 6914
    //   END IF;  
    // END;
    // 
    // ----------****** CODIGOS DE ESTRATEGIA  MELQ ******************----------------
    // 
    //      --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    // 
    // 
    //  IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'CRTSOLICR';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;
    // 
    // /*
    //  EXCEPTION
    //  WHEN OTHERS THEN
    //    
    //    RAISE FORM_TRIGGER_FAILURE; */
    //          
    // END;
    //    
    // --AJ*/
    //#endregion
    async CRFADECIAL_crtsolicr_postUpdate() {
        console.log("Entering CRFADECIAL_crtsolicr_postUpdate");
        let RG_NAME: string = 'RG_AUDIT';
        let RG_ID: string = null;
        let RG_INDICE: number = null;
        let T_RESPUESTA: number = null;
        // RG_ID = this.oracleFormsBuiltins.find_group(RG_NAME);
        if ((this.CRTSOLICR.SOLICR_VRFINCR != this.CRTSOLICR.VRAPCR && (this.CRTSOLICR.SOLICR_AUMEAP == null))) {
            this.CRTSOLICR.SOLICR_AUMEAP = "S";
        }
        let V_RESPUESTA: number = null;
        let V_PARAMETRO: string = null;
        if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
            V_PARAMETRO = "CRTSOLICR";
            // CRFADECIAL_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
        }
        console.log("Exiting CRFADECIAL_crtsolicr_postUpdate");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTSOLICR1 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTSOLICR1_CUR IS      
    //     SELECT 1 FROM CRTSOLICR C     
    //     WHERE C.SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CRTSOLICR1 DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CRTSOLICR2 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTSOLICR2_CUR IS      
    //     SELECT 1 FROM CRTSOLICR C     
    //     WHERE C.SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL AND C.SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND C.SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI;
    //   --
    //   -- END CRTSOLICR2 DETAIL DECLARE SECTION
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
    //   --
    //   -- BEGIN CRTSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTSOLICR2_CUR;     
    //   FETCH CRTSOLICR2_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTSOLICR2_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTSOLICR2_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTSOLICR2_CUR;
    //   --
    //   -- END CRTSOLICR2 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFADECIAL_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFADECIAL_crtsolicr_onCheckDeleteMaster");
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
        console.log("Exiting CRFADECIAL_crtsolicr_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN -- SI EL CANVAS DE CONDICIONES FINANCIERAS, SE ENCUENTRA "VISIBLE"
    // -- ENTONCES, LA TECLAS DE DESPLAZAMIENTO ENTRE REGISTROS (KEY_DOWN Y KEY_UP)
    // -- NO TIENEN EFECTO. 
    // 
    // IF GET_VIEW_PROPERTY('CONFIN', "VISIBLE") = 'FALSE' THEN
    //    UP;
    // ELSE
    //    NULL;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_keyUp() {
        console.log("Entering CRFADECIAL_crtsolicr_keyUp");
        if (this.oracleFormsBuiltins.get_view_property("CONFIN", "VISIBLE") == "FALSE") {
            this.oracleFormsBuiltins.up();
        }
        else {
        }
        console.log("Exiting CRFADECIAL_crtsolicr_keyUp");
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
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTSOLICR1');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTSOLICR1');   
    //   END IF;
    //   --
    //   -- END CRTSOLICR1 DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CRTSOLICR2 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTSOLICR2');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTSOLICR2');   
    //   END IF;
    //   --
    //   -- END CRTSOLICR2 DETAIL PROGRAM SECTION
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
    async CRFADECIAL_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFADECIAL_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            //return ret;
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTSOLICR1");
            // CRFADECIAL_QUERY_MASTER_DETAILS(REL_ID, "CRTSOLICR1");
        }
        if ((((this.CRTSOLICR.SOLICR_OFCSOL != null) || (this.CRTSOLICR.SOLICR_CODSOL != null)) || (this.CRTSOLICR.SOLICR_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTSOLICR2");
            // CRFADECIAL_QUERY_MASTER_DETAILS(REL_ID, "CRTSOLICR2");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFADECIAL_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFADECIAL_crtsolicr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    // 
    //   :CRTSOLICR.NOMBRE := PU_NOMBRE_TERCERO(:CRTSOLICR.SOLICR_NITTER);
    //   :VARIABLE.NOM_USU := FRM$NOMBRE_USUARIO(:CRTSOLICR.SOLICR_USCIAL);
    //   :CRTSOLICR.COMERCIAL := PU_NOMBRE_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    //   :CRTSOLICR.VRAPCR    := :CRTSOLICR.SOLICR_VRFINCR;
    //   :CRTSOLICR.VRORIG    := :CRTSOLICR.SOLICR_VRFINCR;
    //   :CRTSOLICR.SOLICR_MONTO1    := :CRTSOLICR.SOLICR_MONTO;
    //   
    //   :CRTSOLICR.SOLICR_VRFINA_1 := :CRTSOLICR.SOLICR_VRFINA;
    //   :CRTSOLICR.SOLICR_CONEXT_1 := :CRTSOLICR.SOLICR_CONEXT;
    //   
    // END;
    // 
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESBCOLDEX
    //   FROM CRTLINRED
    //  WHERE LINRED_CODIGO = :SOLICR_TBCOLDX;
    // EXCEPTION 
    //   WHEN OTHERS THEN
    //     NULL;
    // END;
    // 
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESFINAGRO
    //   FROM CRTLINRED
    //  WHERE LINRED_CODIGO = :SOLICR_FINAGLN;
    // EXCEPTION 
    //   WHEN OTHERS THEN
    //     NULL;
    // END;
    // 
    // BEGIN
    //   SELECT LINRED_DESLIN
    //     INTO :DESCLMULT
    //   FROM CRTLINRED
    //  WHERE LINRED_CODIGO = :SOLICR_LMULTIP;
    // EXCEPTION 
    //   WHEN OTHERS THEN
    //     NULL;
    // END;
    // 
    // 
    // BEGIN
    //   SELECT PROD_DESCRI
    //     INTO :TIPDESCR
    //   FROM CRTPRODCIA
    //  WHERE PROD_CODIGO = :SOLICR_CODPRO
    //   AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI  --ARQUITECTURA
    //  ;
    // EXCEPTION 
    //   WHEN OTHERS THEN
    //     NULL;
    // END;
    // 
    // 
    // 
    // BEGIN
    //   SELECT OFI_DESCRIP
    //     INTO :CRTSOLICR.DESCOFID
    //   FROM CRTOFIDAV
    //  WHERE OFI_COD  = :SOLICR_OFIDAV;
    // EXCEPTION 
    //   WHEN OTHERS THEN
    //     NULL;
    // END;
    // 
    // 
    // --7390
    // IF :CRTSOLICR.SOLICR_OFIDAV IS NOT NULL THEN
    //    :CRTSOLICR.OFIDAV := :CRTSOLICR.SOLICR_OFIDAV;
    // ELSE
    //   :CRTSOLICR.OFIDAV := NULL;
    // END IF;
    // --7390
    // 
    // --6914
    // BEGIN
    //  SELECT  TLINDES 
    //  INTO :CRTSOLICR.SOLICR_LINEADESC
    //  FROM TLIN
    //  WHERE TLINCOD = :CRTSOLICR.SOLICR_LINEA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN  :CRTSOLICR.SOLICR_LINEADESC := NULL;
    // END;
    // --6914
    // 
    //   --
    //   -- MODIFICACIÓN: CUOP: CUADRO DE OPERACIONES.
    //   -- AUTOR DE LA MODIFICACIÓN: LIDUVÍN VEGA RODRÍGUEZ, LEASING BOLÍVAR, S.A., C.F.C.
    //   -- FECHA: 10 DE AGOSTO DE 2005
    //   --
    // 
    // 
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIAS
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :CRTSOLICR.SOLICR_TIPBIE
    //    AND SUBCAT_CODIGO = :CRTSOLICR.SOLICR_SUBCAT
    //    AND SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //    ;
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIAS := NULL;
    // END;
    //   
    // BEGIN
    //    SELECT TIPBIEN_DESBIEN
    //      INTO :CRTSOLICR.W_TIPODEBIEN
    //      FROM CRTTIPBIEN
    //     WHERE TIPBIEN_CODBIEN = :CRTSOLICR.SOLICR_TIPBIE
    //      AND TIPBIEN_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ;
    // EXCEPTION WHEN  NO_DATA_FOUND THEN
    //     :CRTSOLICR.W_TIPODEBIEN := NULL;
    // END;
    // 
    // 
    // 
    // --PY 122011
    // BEGIN
    //   SELECT LINEST_DESCES 
    //   INTO :SOLICR_CODLEADESC
    //   FROM COTTLINEST 
    //   WHERE LINEST_CONSEC= :SOLICR_CODLEA
    //   AND LINEST_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //   ;
    //   EXCEPTION WHEN NO_DATA_FOUND THEN :SOLICR_CODLEADESC := NULL;
    //   
    //   END;
    //#endregion
    async CRFADECIAL_crtsolicr_postQuery() {
        console.log("Entering CRFADECIAL_crtsolicr_postQuery");
        // this.CRTSOLICR.NOMBRE = PU_NOMBRE_TERCERO(CRTSOLICR.SOLICR_NITTER);
        // this.VARIABLE.NOM_USU = FRM$NOMBRE_USUARIO(CRTSOLICR.SOLICR_USCIAL);
        // this.CRTSOLICR.COMERCIAL = PU_NOMBRE_CIAL(CRTSOLICR.SOLICR_USCIAL);
        this.CRTSOLICR.VRAPCR = this.CRTSOLICR.SOLICR_VRFINCR;
        this.CRTSOLICR.VRORIG = this.CRTSOLICR.SOLICR_VRFINCR;
        this.CRTSOLICR.SOLICR_MONTO1 = this.CRTSOLICR.SOLICR_MONTO;
        this.CRTSOLICR.SOLICR_VRFINA_1 = this.CRTSOLICR.SOLICR_VRFINA;
        this.CRTSOLICR.SOLICR_CONEXT_1 = this.CRTSOLICR.SOLICR_CONEXT;
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_TBCOLDX", SOLICR_TBCOLDX);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_postquery_query1", payload1);
            // get values from result
            // DESBCOLDEX = result1[0].get("DESBCOLDEX");
        } catch (ex) {

        }

        try {

            // construct payload
            let payload2 = new Map();
            // payload2.set("SOLICR_FINAGLN", SOLICR_FINAGLN);
            // call REST API
            const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_postquery_query2", payload2);
            // get values from result
            // DESFINAGRO = result2[0].get("DESFINAGRO");
        } catch (ex) {

        }

        try {

            // construct payload
            let payload3 = new Map();
            // payload3.set("SOLICR_LMULTIP", SOLICR_LMULTIP);
            // call REST API
            const result3 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_postquery_query3", payload3);
            // get values from result
            // DESCLMULT = result3[0].get("DESCLMULT");
        } catch (ex) {

        }

        try {

            // construct payload
            let payload4 = new Map();
            // payload4.set("SOLICR_CODPRO", SOLICR_CODPRO);
            // payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result4 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_postquery_query4", payload4);
            // get values from result
            // TIPDESCR = result4[0].get("TIPDESCR");
        } catch (ex) {

        }

        try {

            // construct payload
            let payload5 = new Map();
            // payload5.set("SOLICR_OFIDAV", SOLICR_OFIDAV);
            // call REST API
            const result5 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_postquery_query5", payload5);
            // get values from result
            // CRTSOLICR.DESCOFID = result5[0].get("CRTSOLICR.DESCOFID");
        } catch (ex) {

        }

        console.log("Exiting CRFADECIAL_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //      IF :CRTSOLICR.SOLICR_FINAGR  <> 'X' THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      END IF; 
    //      PUP_REDESCUENTOS; --PY 15077
    // END;    
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFinagr_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFinagr_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINAGR != "X") {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFADECIAL_PUP_REDESCUENTOS();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFinagr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  
    //  V_VALIDA  NUMBER;
    //  
    // BEGIN
    //       
    //   
    //   IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) AND (:CRTSOLICR.TIPO_REFERENCIA IS NULL) THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    //   ELSE
    //    IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    //    ELSE
    //     
    //     IF :CRTSOLICR.TIPO_REFERENCIA = 4 AND :CRTSOLICR.W_OFICINA IS NULL THEN
    //       LIB$DTNERFRMA('POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.'); 
    //     ELSE
    //   
    //       IF :CRTSOLICR.W_CORREOASESOR IS NULL THEN
    //         
    //         LIB$DTNERFRMA('POR FAVOR INGRESAR EL CORREO DEL REFERIDO.');
    //         
    //       ELSE
    //        
    //        BEGIN
    //         SELECT 1
    //         INTO V_VALIDA
    //        FROM DUAL
    //        WHERE :CRTSOLICR.W_CORREOASESOR LIKE '%@DAVIVIENDA.COM';
    //        EXCEPTION WHEN OTHERS THEN
    //         V_VALIDA := 0;
    //        END;
    //         
    //         IF V_VALIDA = 0 THEN
    //            GO_ITEM('CRTSOLICR.W_CORREOASESOR');
    //            LIB$DTNERFRMA('EL CORREO NO ES CORPORATIVO. VALIDE QUE CONTENGA ( @DAVIVIENDA.COM )');
    //         ELSE 
    //          NULL;
    //         END IF;
    //       
    //           END IF;
    //     
    //        P_VALOFI (:CRTSOLICR.W_OFICINA) ; --7876   
    //         
    //     
    //       :CRTSOLICR.SOLICR_OFIDAV := :CRTSOLICR.W_OFICINA;
    //      
    //      HIDE_VIEW('OFI_DAVI_REF');
    //      GO_ITEM('CRTSOLICR.SOLICR_TASA');
    //       
    //      
    //     /* IF :CRTSOLICR.W_NITREF IS NOT NULL THEN
    //          :CRTSOLICR.W_REFERIDO  := 'S';  
    //       ELSE  
    //          :CRTSOLICR.W_REFERIDO  := 'N';
    //       END IF;*/
    //      
    //      END IF;
    //    END IF;
    //     END IF;
    // 
    // END;
    //   
    //   
    //   
    //   
    //   
    //   
    //#endregion
    async CRFADECIAL_crtsolicr_aplicar_whenButtonPressed() {
        console.log("Entering CRFADECIAL_crtsolicr_aplicar_whenButtonPressed");
        let V_VALIDA: number = null;
        if (((this.CRTSOLICR.W_CODIGOASESOR == null) && (this.CRTSOLICR.TIPO_REFERENCIA == null))) {
            // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
        }
        else {
            if ((this.CRTSOLICR.W_CODIGOASESOR == null)) {
                // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
            }
            else {
                if ((this.CRTSOLICR.TIPO_REFERENCIA == '4' && (this.CRTSOLICR.W_OFICINA == null))) {
                    // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR LA OFICINA CORRESPONDIENTE.");
                }
                else {
                    if ((this.CRTSOLICR.W_CORREOASESOR == null)) {
                        // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL CORREO DEL REFERIDO.");
                    }
                    else {
                        let result1 = [];
                        try {

                            // construct payload
                            let payload1 = new Map();
                            payload1.set("W_CORREOASESOR", this.CRTSOLICR.W_CORREOASESOR);
                            // call REST API
                            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_aplicar_whenbuttonpressed_query1", payload1);
                            // get values from result
                            V_VALIDA = result1[0].get("V_VALIDA");
                        } catch (ex) {

                            V_VALIDA = 0;
                        }

                        if (V_VALIDA == 0) {
                            this.oracleFormsBuiltins.go_item("CRTSOLICR.W_CORREOASESOR");
                            // CRFADECIAL_LIB$DTNERFRMA("EL CORREO NO ES CORPORATIVO. VALIDE QUE CONTENGA ( @DAVIVIENDA.COM )");
                        }
                        else {
                        }
                    }
                    // CRFADECIAL_P_VALOFI(CRTSOLICR.W_OFICINA);
                    this.CRTSOLICR.SOLICR_OFIDAV = this.CRTSOLICR.W_OFICINA;
                    this.oracleFormsBuiltins.hide_view("OFI_DAVI_REF");
                    this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_TASA");
                }
            }
        }
        console.log("Exiting CRFADECIAL_crtsolicr_aplicar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('VARIABLE.BTN_ACTUALIZAR'); END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrVlrtit_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrVlrtit_keyNextItem");
        this.oracleFormsBuiltins.go_item("VARIABLE.BTN_ACTUALIZAR");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrVlrtit_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINAGR = 'X' THEN
    //    SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_TBCOLDX',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_TBCOLDX := NULL;
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_PUNTS$:=:CRTSOLICR.SOLICR_FINAGP;
    //     
    // ELSE
    //     IF NVL(:CRTSOLICR.SOLICR_FINAGP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINAGRO',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINAGR  := 'X';
    //        :CRTSOLICR.SOLICR_PUNTS$:=:CRTSOLICR.SOLICR_FINAGP;
    //        SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_FALSE");
    //        --GO_ITEM('SOLICR_TBCOLDX');
    //        --FRM$GARANTIAS_EQUIS ('FIN');
    //      END IF;
    //   SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_PUNTS$',ENABLED, "PROPERTY_TRUE");
    //  
    // END IF;
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFinagp_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFinagp_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_FINAGR == "X") {
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_TBCOLDX", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_TBCOLDX = null;
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
            this.CRTSOLICR.SOLICR_PUNTS$ = this.CRTSOLICR.SOLICR_FINAGP;
        }
        else {
            if (this.CRTSOLICR.SOLICR_FINAGP == null ? 0 : this.CRTSOLICR.SOLICR_FINAGP > 0) {
                // CRFADECIAL_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINAGRO", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_FINAGR = "X";
                this.CRTSOLICR.SOLICR_PUNTS$ = this.CRTSOLICR.SOLICR_FINAGP;
                this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_FALSE");
            }
            this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_PUNTS$", "ENABLED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFinagp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  T_RESPUESTA  NUMBER;
    // BEGIN
    // /* IF :CRTSOLICR.SOLICR_FINAGR IS NULL AND :CRTSOLICR.SOLICR_FINAGP IS NOT NULL THEN
    //      LIB$ALERTA('MENSAJE','DEBE SELECCIONAR EL TIPO DE REDESCUENTO',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //  ELS*/IF :CRTSOLICR.SOLICR_FINAGR IS NOT NULL AND :CRTSOLICR.SOLICR_FINAGP IS NULL THEN
    //    LIB$ALERTA('MENSAJE','DEBE INGRESAR VALOR DE SPRED PARA EL REDESCUENTO',NULL,NULL,NULL,T_RESPUESTA);
    //    RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //    NEXT_ITEM;
    //  END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFinagp_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFinagp_keyNextItem");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.SOLICR_FINAGR != null) && (this.CRTSOLICR.SOLICR_FINAGP == null))) {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "DEBE INGRESAR VALOR DE SPRED PARA EL REDESCUENTO", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFinagp_keyNextItem");
    }

    //#region PLSQL
    // BEGIN 
    //           SELECT CONTPR_NOMBRE
    //          INTO :CRTSOLICR.REFASE
    //        FROM OPS$COLOCA.CRTREFPRV,  COTCONTPR 
    //      WHERE REFPRV_CODASE = CONTPR_CODCNT
    //        AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //        AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //        ;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //      :CRTSOLICR.REFASE := NULL;
    //     END;
    //#endregion
    async CRFADECIAL_crtsolicr_refProvAse_whenListChanged() {
        console.log("Entering CRFADECIAL_crtsolicr_refProvAse_whenListChanged");
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_refprovase_whenlistchanged_query1", payload1);
        // get values from result
        this.CRTSOLICR.REFASE = result1[0].get("CRTSOLICR.REFASE");
        if (result1 == null || result1.length == 0) {

            this.CRTSOLICR.REFASE = null;
        }

        console.log("Exiting CRFADECIAL_crtsolicr_refProvAse_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_PARAM      NUMBER;
    //    W_VRORIG NUMBER;
    //    W_DISMIN     NUMBER;
    //    W_INDICA    CONSTANT CRTTOPSOL.TOPSOL_INDICA%TYPE := 'A';
    //    W_CODIGO    CONSTANT CRTTOPSOL.TOPSOL_CODIGO%TYPE := '03';
    //    V_ANT       NUMBER;
    //    V_MIN       NUMBER;
    //    V_MAX    NUMBER;
    // BEGIN
    // 
    // /*
    //  BEGIN
    //  SELECT SOLICR_PLAZO
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL;
    //  END;
    //  
    //   IF :CRTSOLICR.SOLICR_PLAZO < V_ANT  THEN
    //     LIB$DTNERFRMA('EL NUEVO VALOR DEL PLAZO DEBE SER MAYOR QUE EL VALOR ANTERIOR. ');
    //   END IF;*/
    //   
    //   
    //   V_MIN := FBD_VALCAMPO_BIEN ('MIN',:CRTSOLICR.SOLICR_TIPBIE);
    //   V_MAX := FBD_VALCAMPO_BIEN ('MAX',:CRTSOLICR.SOLICR_TIPBIE);
    //   
    //   
    //    IF  (V_MIN > :CRTSOLICR.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PLAZO  ES DE '||V_MIN ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR.SOLICR_PLAZO)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PLAZO  ES DE '||V_MAX ||' PARA ESTE TIPO DE BIEN. ' );      
    //   END IF;
    //   
    // /*
    //  AUTOR:    GEXNOVA.
    //  FECHA:    19.09.2019.
    //  PROYECTO: PERIODOS MUERTOS 56949.
    //  MOTIVO:   SE CLACULA EL PLAZO TOTAL DEL FLUJO.
    // */
    //  :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0) + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    // --GEXNOVA PERIODOS MUERTOS 56949. 
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPlazo_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPlazo_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PARAM: number = null;
        let W_VRORIG: number = null;
        let W_DISMIN: number = null;
        let W_INDICA: string = 'A';
        let W_CODIGO: string = '03';
        let V_ANT: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        // V_MIN = FBD_VALCAMPO_BIEN("MIN", this.CRTSOLICR.SOLICR_TIPBIE);
        // V_MAX = FBD_VALCAMPO_BIEN("MAX", this.CRTSOLICR.SOLICR_TIPBIE);
        if (V_MIN > this.CRTSOLICR.SOLICR_PLAZO) {
            // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PLAZO  ES DE " + V_MIN + " PARA ESTE TIPO DE BIEN. ");
        }
        if (V_MAX < this.CRTSOLICR.SOLICR_PLAZO) {
            // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PLAZO  ES DE " + V_MAX + " PARA ESTE TIPO DE BIEN. ");
        }
        this.CRTSOLICR.TXT_TOTPLAZO = this.CRTSOLICR.SOLICR_PLAZO == null ? 0 : this.CRTSOLICR.SOLICR_PLAZO + this.CRTSOLICR.SOLICR_PERGRA == null ? 0 : this.CRTSOLICR.SOLICR_PERGRA + this.CRTSOLICR.SOLICR_PERMUE == null ? 0 : this.CRTSOLICR.SOLICR_PERMUE;
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPlazo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --6914
    // PU_VALIPORCEN(:CRTSOLICR.SOLICR_VPAVAL);
    // --6914; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrVpaval_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrVpaval_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrVpaval_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --6914
    // PU_VALIPORCEN(:CRTSOLICR.SOLICR_VPAVAL); 
    // GO_ITEM('SOLICR_FNG');
    // --6914; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrVpaval_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrVpaval_keyNextItem");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrVpaval_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //    
    //    V_PROD        CRTSOLICR.SOLICR_CODPRO%TYPE;
    //    
    // BEGIN
    // 
    // 
    //    BEGIN
    //     SELECT PROD_CODIGO 
    //       INTO V_PROD
    //    FROM CRTPRODCIA
    //    WHERE PROD_PRODRFP = 'S'
    //      AND PROD_CODIGO NOT IN ('ACC','FVZ')
    //      AND PROD_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //      AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //      ;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //      V_PROD := 'XXX';
    //    END; 
    // 
    //  :CRTSOLICR.REF_PROV_ASE := NULL;
    //  :CRTSOLICR.REFASE := NULL;
    //  
    //   IF NVL(:CRTSOLICR.SOLICR_CODPRO,NULL) = V_PROD OR :P_SELECCIONTIPO = 2 THEN  
    //    IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROV_ASE','RG_PROV_ASE_REF') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_PROV_ASE_REF');
    //    END IF;
    //   ELSIF  :CRTSOLICR.SOLICR_CODPRO = 'ACC' THEN  
    //     IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROV_ASE','RG_ASESORACC') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_ASESORACC');
    //     END IF;
    //   ELSIF  :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN  
    //     IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROV_ASE','RG_ASEFINAVANZA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_ASEFINAVANZA');
    //    END IF;   
    //   END IF;  
    //  
    //    BEGIN
    //     SELECT PROVEE_NOMBRE
    //        INTO :CRTSOLICR.REFPRO
    //      FROM COTPROVEE 
    //    WHERE PROVEE_CODIGO = :CRTSOLICR.REF_PROVEEDOR;
    //    EXCEPTION WHEN NO_DATA_FOUND THEN
    //       :CRTSOLICR.REFPRO := NULL;
    //    END; 
    //  
    // 
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr_refProveedor_whenListChanged() {
        console.log("Entering CRFADECIAL_crtsolicr_refProveedor_whenListChanged");
        let V_PROD: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODPRO", this.CRTSOLICR.SOLICR_CODPRO);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_refproveedor_whenlistchanged_query1", payload1);
        // get values from result
        V_PROD = result1[0].get("V_PROD");
        if (result1 == null || result1.length == 0) {

            V_PROD = "XXX";
        }

        this.CRTSOLICR.REF_PROV_ASE = null;
        this.CRTSOLICR.REFASE = null;
        // if ((this.CRTSOLICR.SOLICR_CODPRO == null ? null : this.CRTSOLICR.SOLICR_CODPRO == V_PROD || P_SELECCIONTIPO == 2)) {
            // if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROV_ASE", "RG_PROV_ASE_REF"))) {
            //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_PROV_ASE_REF");
            // }
        // }
        // else if (CRTSOLICR.SOLICR_CODPRO == "ACC") {
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROV_ASE", "RG_ASESORACC"))) {
        //         // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_ASESORACC");
        //     }
        // }
        // else if (CRTSOLICR.SOLICR_CODPRO == "FVZ") {
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROV_ASE", "RG_ASEFINAVANZA"))) {
        //         // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_ASEFINAVANZA");
        //     }
        // }
        // construct payload
        let payload2 = new Map();
        payload2.set("REF_PROVEEDOR", this.CRTSOLICR.REF_PROVEEDOR);
        // call REST API
        const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_refproveedor_whenlistchanged_query2", payload2);
        // get values from result
        this.CRTSOLICR.REFPRO = result2[0].get("CRTSOLICR.REFPRO");
        if (result2 == null || result2.length == 0) {

            this.CRTSOLICR.REFPRO = null;
        }

        console.log("Exiting CRFADECIAL_crtsolicr_refProveedor_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //    T_RESPUESTA   NUMBER;
    // 
    // BEGIN
    //    IF NVL(:CRTSOLICR.SOLICR_PORIVA, 0) > 100 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPoriva_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPoriva_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_PORIVA == null ? 0 : this.CRTSOLICR.SOLICR_PORIVA > 100) {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DEL IVA DEBE SER INFERIOR AL 100%..", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPoriva_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.SOLICITUD IS NOT NULL THEN
    // DECLARE
    //   V_VALIDAR NUMBER;
    //   V_CANEX   NUMBER;
    // BEGIN
    //  
    //  
    //   BEGIN
    //   SELECT SOLICR_CONEXT
    //   INTO V_CANEX
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN OTHERS THEN V_CANEX := 0;
    //  END;
    //  
    //  IF (V_CANEX IS NOT NULL) AND (:CRTSOLICR.SOLICR_CONEXT IS NULL OR :CRTSOLICR.SOLICR_CONEXT= 0)  THEN
    //   
    //     LIB$DTNERFRMA('NO SE ACEPTA ESTE VALOR PARA EL CANON EXTRAORDINARIO');
    //        
    //   
    //  END IF;
    //  
    // END;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrConext_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrConext_whenValidateItem");
        if ((this.VARIABLE.SOLICITUD != null)) {
            {

                let V_VALIDAR: number = null;
                let V_CANEX: number = null;
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrconext_whenvalidateitem_query1", payload1);
                    // get values from result
                    V_CANEX = result1[0].get("V_CANEX");
                } catch (ex) {

                    V_CANEX = 0;
                }

                if (((V_CANEX != null) && ((this.CRTSOLICR.SOLICR_CONEXT == null) || this.CRTSOLICR.SOLICR_CONEXT == 0))) {
                    // CRFADECIAL_LIB$DTNERFRMA("NO SE ACEPTA ESTE VALOR PARA EL CANON EXTRAORDINARIO");
                }
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrConext_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.SOLICITUD IS NOT NULL THEN
    // DECLARE
    //  V_EXTRA NUMBER;
    // BEGIN
    //  
    //   BEGIN
    //   SELECT SOLICR_CONEXT
    //   INTO V_EXTRA
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN OTHERS THEN V_EXTRA := 0;
    //  END;
    // 
    //   IF (V_EXTRA > 0) AND (:CRTSOLICR.SOLICR_CONEXT = 0 OR :CRTSOLICR.SOLICR_CONEXT IS NULL ) THEN
    //   
    //    LIB$DTNERFRMA('NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.');
    //   
    //   END IF;
    // 
    // :CRTSOLICR.SOLICR_VRFINA_1 :=  :CRTSOLICR.SOLICR_MONTO1 - :CRTSOLICR.SOLICR_CONEXT;
    // :CRTSOLICR.SOLICR_VRFINCR := :CRTSOLICR.SOLICR_VRFINA_1;--:CRTSOLICR.SOLICR_MONTO1;  AJ 16/02/2018 VALOR A FINANCIAR NO SE IGUALA AL MONTO
    // NEXT_ITEM;
    // 
    // END;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrConext_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrConext_keyNextItem");
        if ((this.VARIABLE.SOLICITUD != null)) {
            {

                let V_EXTRA: number = null;
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrconext_keynextitem_query1", payload1);
                    // get values from result
                    V_EXTRA = result1[0].get("V_EXTRA");
                } catch (ex) {

                    V_EXTRA = 0;
                }

                if ((V_EXTRA > 0 && (this.CRTSOLICR.SOLICR_CONEXT == 0 || (this.CRTSOLICR.SOLICR_CONEXT == null)))) {
                    // CRFADECIAL_LIB$DTNERFRMA("NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.");
                }
                this.CRTSOLICR.SOLICR_VRFINA_1 = this.CRTSOLICR.SOLICR_MONTO1 - this.CRTSOLICR.SOLICR_CONEXT;
                this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_VRFINA_1;
                this.oracleFormsBuiltins.next_item();
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrConext_keyNextItem");
    }

    //#region PLSQL
    // BEGIN --6754
    // P_LISTAREFERIDOS;
    // --6754; END;
    //#endregion
    async CRFADECIAL_crtsolicr_codigoReferencia_whenMouseDoubleclick() {
        console.log("Entering CRFADECIAL_crtsolicr_codigoReferencia_whenMouseDoubleclick");
        console.log("Exiting CRFADECIAL_crtsolicr_codigoReferencia_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --6754
    // P_LISTAREFERIDOS;
    // --6754; END;
    //#endregion
    async CRFADECIAL_crtsolicr_codigoReferencia_keyListval() {
        console.log("Entering CRFADECIAL_crtsolicr_codigoReferencia_keyListval");
        console.log("Exiting CRFADECIAL_crtsolicr_codigoReferencia_keyListval");
    }

    //#region PLSQL
    // BEGIN /*IF (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN
    //  IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //  END IF;
    //  P_LISTAREFERIDOS;
    //  SHOW_VIEW ('OFI_DAVI_REF');     
    //  GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    // END IF;  
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrCodpro_whenMouseClick() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrCodpro_whenMouseClick");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrCodpro_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN /*IF (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN
    //  IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //  END IF;
    //  P_LISTAREFERIDOS;
    //  SHOW_VIEW ('OFI_DAVI_REF');     
    //  GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //  
    //     
    // END IF; 
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrCodpro_whenMouseDoubleclick() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrCodpro_whenMouseDoubleclick");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrCodpro_whenMouseDoubleclick");
    }

    //#region PLSQL
    // DECLARE
    //  
    //   V_ORIGEN      OPS$COLOCA.CRTREFPRV.REFPRV_ORIGEN%TYPE; 
    //   V_MANOFCDAV   CRTPRODCIA.PROD_MANOFC%TYPE;
    //    V_PRODRFP     CRTPRODCIA.PROD_PRODRFP%TYPE;--14801  
    //   T_RESPUESTA   NUMBER;
    //   V_PROD        CRTSOLICR.SOLICR_CODPRO%TYPE;
    //   
    // BEGIN  
    //     
    //  IF :CRTSOLICR.SOLICR_CODPRO IS NOT NULL THEN
    //     BEGIN
    //       SELECT PROD_DESCRI, PROD_MANOFC
    //        INTO :TIPDESCR, V_MANOFCDAV
    //       FROM CRTPRODCIA
    //        WHERE PROD_CODIGO = :SOLICR_CODPRO
    //        AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //        ;
    //        --NEXT_ITEM;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE SI ES AQUI '||:SOLICR_CODPRO||:CRTSOLICR.SOLICR_CODUNI,NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF; 
    //   
    //   
    //    IF (V_MANOFCDAV = 'S') AND (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN     
    //   
    //         
    //       IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //              LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //     END IF;
    //     
    // 
    //     P_LISTAREFERIDOS;
    // 
    //      SHOW_VIEW ('OFI_DAVI_REF');     
    //       GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //           
    //       
    //    END IF;
    //     
    //    
    //    IF ((:CRTSOLICR.SOLICR_CODPRO NOT IN('DAS','RFP')) AND V_MANOFCDAV = 'S' OR (V_PRODRFP = 'S')) THEN
    //      LIB$ALERTA('MENSAJE','QUE TIPO DE PRODUCTO DESEA UTILIZAR?','DAS','RFP','CANCELAR',T_RESPUESTA);
    //     
    //       IF (T_RESPUESTA = 1) THEN 
    //        
    //        :P_SELECCIONTIPO := 1;
    //        
    //        IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //                LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //       END IF;
    //       
    //          HIDE_VIEW ('PROVEE_REF');
    //        SHOW_VIEW ('OFI_DAVI_REF');     
    //         GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //      
    //       ELSIF (T_RESPUESTA = 2) THEN 
    //   
    //   
    //          :P_SELECCIONTIPO := 2;
    //         /* SHOW_VIEW ('PROVEE_REF');     
    //        GO_ITEM('CRTSOLICR.REF_PROVEEDOR');*/
    //         --PUP_VALIDAPRODREF;
    //   
    //       ELSIF (T_RESPUESTA = 3) THEN 
    //    
    //           :P_SELECCIONTIPO := 3;
    //              
    //          /* :GLOBAL.P_VEN_RPT := '2';
    //          PUP_VALIDAPRODREF;*/      
    //             
    //       END IF;
    //    
    //    ELSIF :CRTSOLICR.SOLICR_CODPRO  IN ('DAS','RFP') THEN
    //      
    //      :P_SELECCIONTIPO := 0;
    //      
    //    ELSE 
    //      :P_SELECCIONTIPO := 3;
    // 
    //    END IF;
    //       
    //     
    //      
    //      --VALIDACION INGRESO PROVEEDORES REFERIDOS PRODUCTO RFP
    //      ------------------------------------------------------------
    //        BEGIN
    //         SELECT PROD_CODIGO 
    //           INTO V_PROD
    //        FROM CRTPRODCIA
    //        WHERE PROD_PRODRFP = 'S'
    //          AND PROD_CODIGO NOT IN ('ACC','FVZ')
    //          AND PROD_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //          AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //          ;
    //        EXCEPTION WHEN NO_DATA_FOUND THEN
    //          V_PROD := 'XXX';
    //        END;                        
    //       
    //       IF :CRTSOLICR.SOLICR_CODPRO = 'RFP' THEN
    //        :P_SELECCIONTIPO := 2;
    //       END IF; 
    //        
    //        IF NVL(:CRTSOLICR.SOLICR_CODPRO,NULL) = V_PROD AND :P_SELECCIONTIPO = 2 THEN
    //             
    //            BEGIN
    //            SELECT PROVEE_NOMBRE
    //             INTO :CRTSOLICR.REFPRO
    //           FROM OPS$COLOCA.CRTREFPRV, COTPROVEE
    //         WHERE REFPRV_CODPRV = PROVEE_CODIGO
    //           AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //           AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //           AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //           ;
    //          EXCEPTION WHEN NO_DATA_FOUND THEN
    //             :CRTSOLICR.REFPRO := NULL;
    //          END; 
    //          
    //            BEGIN 
    //               SELECT CONTPR_NOMBRE
    //              INTO :CRTSOLICR.REFASE
    //            FROM OPS$COLOCA.CRTREFPRV,  COTCONTPR 
    //          WHERE REFPRV_CODASE = CONTPR_CODCNT
    //            AND REFPRV_CODPRV = CONTPR_CODPRO ----------RDMV SOPORTE 28573
    //            AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //            AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //            AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //            ;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //          :CRTSOLICR.REFASE := NULL;
    //         END; 
    //        
    // 
    // 
    //             :CRTSOLICR.REF_PROVEEDOR := NULL;
    //           :CRTSOLICR.REF_PROV_ASE := NULL;
    //             
    //             BEGIN
    //            SELECT REFPRV_ORIGEN
    //              INTO V_ORIGEN
    //           FROM OPS$COLOCA.CRTREFPRV 
    //           WHERE REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //             AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //             AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //             ;
    //          EXCEPTION WHEN NO_DATA_FOUND THEN  
    //              V_ORIGEN := 'N';
    //          END;
    //           
    //        
    //        IF V_ORIGEN <> 'R' THEN  
    //            IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROVEEDOR','RG_PROVEE_REF') THEN
    //                  LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.REF_PROVEEDOR');
    //            END IF;
    //            
    //            SHOW_VIEW ('PROVEE_REF');     
    //           GO_ITEM('CRTSOLICR.REF_PROVEEDOR');
    //         END IF;
    //         
    //          
    //        END IF;     
    //      ------------------------------------------------------------
    //      
    //      
    //       --VALIDACION INGRESO PROVEEDORES REFERIDOS PRODUCTO ACC
    //      ------------------------------------------------------------
    //        IF :CRTSOLICR.SOLICR_CODPRO = 'ACC' THEN
    //     
    //             :CRTSOLICR.REF_PROVEEDOR := NULL;
    //           :CRTSOLICR.REF_PROV_ASE := NULL;
    //         
    //            IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROVEEDOR','RG_PROACC') THEN
    //                  LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_PROACC');
    //            END IF;
    //            
    //            SHOW_VIEW ('PROVEE_REF');     
    //           GO_ITEM('CRTSOLICR.REF_PROVEEDOR');
    //     
    //            BEGIN
    //            SELECT PROVEE_NOMBRE
    //             INTO :CRTSOLICR.REFPRO
    //           FROM OPS$COLOCA.CRTREFPRV, COTPROVEE
    //         WHERE REFPRV_CODPRV = PROVEE_CODIGO
    //           AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //           AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //          EXCEPTION WHEN NO_DATA_FOUND THEN
    //             :CRTSOLICR.REFPRO := NULL;
    //          END; 
    //          
    //            BEGIN 
    //               SELECT CONTPR_NOMBRE
    //              INTO :CRTSOLICR.REFASE
    //            FROM OPS$COLOCA.CRTREFPRV,  COTCONTPR 
    //          WHERE REFPRV_CODASE = CONTPR_CODCNT
    //            AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //            AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //          :CRTSOLICR.REFASE := NULL;
    //         END; 
    //       
    //     
    //      
    //        END IF;     
    //      ------------------------------------------------------------
    //      
    //      
    //       --VALIDACION INGRESO PROVEEDORES REFERIDOS PRODUCTO FVZ
    //        ------------------------------------------------------------
    //        IF :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN  
    //      
    //            :CRTSOLICR.REF_PROVEEDOR := NULL;
    //           :CRTSOLICR.REF_PROV_ASE := NULL;
    //           
    //            IF NOT LIB$PBLARLSTARG('CRTSOLICR.REF_PROVEEDOR','RG_PROVEFINANZA') THEN
    //                  LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA RG_PROVEFINANZA');
    //            END IF;
    // 
    //            
    //            SHOW_VIEW ('PROVEE_REF');     
    //           GO_ITEM('CRTSOLICR.REF_PROVEEDOR');  
    //          
    //            BEGIN
    //            SELECT PROVEE_NOMBRE
    //             INTO :CRTSOLICR.REFPRO
    //           FROM OPS$COLOCA.CRTREFPRV, COTPROVEE
    //         WHERE REFPRV_CODPRV = PROVEE_CODIGO
    //           AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //           AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //          EXCEPTION WHEN NO_DATA_FOUND THEN
    //             :CRTSOLICR.REFPRO := NULL;
    //          END; 
    //          
    //            BEGIN 
    //               SELECT CONTPR_NOMBRE
    //              INTO :CRTSOLICR.REFASE
    //            FROM OPS$COLOCA.CRTREFPRV,  COTCONTPR 
    //          WHERE REFPRV_CODASE = CONTPR_CODCNT
    //            AND REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //            AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //          :CRTSOLICR.REFASE := NULL;
    //         END; 
    //          
    //        
    //        END IF;
    //      
    // END;       
    //#endregion
    async CRFADECIAL_crtsolicr_solicrCodpro_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrCodpro_keyNextItem");
        let V_ORIGEN: string = null;
        let V_MANOFCDAV: string = null;
        let V_PRODRFP: string = null;
        let T_RESPUESTA: number = null;
        let V_PROD: string = null;
        if ((this.CRTSOLICR.SOLICR_CODPRO != null)) {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_CODPRO", SOLICR_CODPRO);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query1", payload1);
            // get values from result
            // TIPDESCR = result1[0].get("TIPDESCR");
            V_MANOFCDAV = result1[0].get("V_MANOFCDAV");
            if (result1 == null || result1.length == 0) {

                // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE SI ES AQUI " + SOLICR_CODPRO + CRTSOLICR.SOLICR_CODUNI, null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        else {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL CÓDIGO DEL PRODUCTO DE LA COMPAÑIA NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // if ((V_MANOFCDAV == "S" && CRTSOLICR.SOLICR_CODPRO == "DAS")) {
        //     // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
        //     //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA");
        //     // }
        //     // CRFADECIAL_P_LISTAREFERIDOS();
        //     this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
        // }
        // if (((["DAS", "RFP"].indexOf(CRTSOLICR.SOLICR_CODPRO) != -1 && V_MANOFCDAV == "S") || V_PRODRFP == "S")) {
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "QUE TIPO DE PRODUCTO DESEA UTILIZAR?", "DAS", "RFP", "CANCELAR", T_RESPUESTA);
        //     if (T_RESPUESTA == 1) {
        //         // this.CRTSOLICR.P_SELECCIONTIPO = 1;
        //         // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
        //         //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA");
        //         // }
        //         this.oracleFormsBuiltins.hide_view("PROVEE_REF");
        //         this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
        //         this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
        //     }
        //     else if (T_RESPUESTA == 2) {
        //         // this.CRTSOLICR.P_SELECCIONTIPO = 2;
        //     }
        //     else if (T_RESPUESTA == 3) {
        //         // this.CRTSOLICR.P_SELECCIONTIPO = 3;
        //     }
        // }
        // else if (["DAS", "RFP"].indexOf(CRTSOLICR.SOLICR_CODPRO) != -1) {
        //     this.CRTSOLICR.P_SELECCIONTIPO = 0;
        // }
        // else {
        //     this.CRTSOLICR.P_SELECCIONTIPO = 3;
        // }
        // // construct payload
        // let payload2 = new Map();
        // payload2.set("SOLICR_CODPRO", this.CRTSOLICR.SOLICR_CODPRO);
        // payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // // call REST API
        // const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query2", payload2);
        // // get values from result
        // V_PROD = result2[0].get("V_PROD");
        // if (result2 == null || result2.length == 0) {

        //     V_PROD = "XXX";
        // }

        // if (CRTSOLICR.SOLICR_CODPRO == "RFP") {
        //     this.CRTSOLICR.P_SELECCIONTIPO = 2;
        // }
        // if ((CRTSOLICR.SOLICR_CODPRO == null ? null : CRTSOLICR.SOLICR_CODPRO == V_PROD && P_SELECCIONTIPO == 2)) {
        //     // construct payload
        //     let payload3 = new Map();
        //     payload3.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload3.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     payload3.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result3 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query3", payload3);
        //     // get values from result
        //     CRTSOLICR.REFPRO = result3[0].get("CRTSOLICR.REFPRO");
        //     if (result3 == null || result3.length == 0) {

        //         this.CRTSOLICR.REFPRO = null;
        //     }

        //     // construct payload
        //     let payload4 = new Map();
        //     payload4.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload4.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result4 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query4", payload4);
        //     // get values from result
        //     CRTSOLICR.REFASE = result4[0].get("CRTSOLICR.REFASE");
        //     if (result4 == null || result4.length == 0) {

        //         this.CRTSOLICR.REFASE = null;
        //     }

        //     this.CRTSOLICR.REF_PROVEEDOR = null;
        //     this.CRTSOLICR.REF_PROV_ASE = null;
        //     // construct payload
        //     let payload5 = new Map();
        //     payload5.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload5.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     payload5.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result5 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query5", payload5);
        //     // get values from result
        //     V_ORIGEN = result5[0].get("V_ORIGEN");
        //     if (result5 == null || result5.length == 0) {

        //         V_ORIGEN = "N";
        //     }

        //     if (V_ORIGEN != "R") {
        //         if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROVEEDOR", "RG_PROVEE_REF"))) {
        //             // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTSOLICR.REF_PROVEEDOR");
        //         }
        //         this.oracleFormsBuiltins.show_view("PROVEE_REF");
        //         this.oracleFormsBuiltins.go_item("CRTSOLICR.REF_PROVEEDOR");
        //     }
        // }
        // if (CRTSOLICR.SOLICR_CODPRO == "ACC") {
        //     this.CRTSOLICR.REF_PROVEEDOR = null;
        //     this.CRTSOLICR.REF_PROV_ASE = null;
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROVEEDOR", "RG_PROACC"))) {
        //         // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_PROACC");
        //     }
        //     this.oracleFormsBuiltins.show_view("PROVEE_REF");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.REF_PROVEEDOR");
        //     // construct payload
        //     let payload6 = new Map();
        //     payload6.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload6.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     // call REST API
        //     const result6 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query6", payload6);
        //     // get values from result
        //     CRTSOLICR.REFPRO = result6[0].get("CRTSOLICR.REFPRO");
        //     if (result6 == null || result6.length == 0) {

        //         this.CRTSOLICR.REFPRO = null;
        //     }

        //     // construct payload
        //     let payload7 = new Map();
        //     payload7.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload7.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     // call REST API
        //     const result7 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query7", payload7);
        //     // get values from result
        //     CRTSOLICR.REFASE = result7[0].get("CRTSOLICR.REFASE");
        //     if (result7 == null || result7.length == 0) {

        //         this.CRTSOLICR.REFASE = null;
        //     }

        // }
        // if (CRTSOLICR.SOLICR_CODPRO == "FVZ") {
        //     this.CRTSOLICR.REF_PROVEEDOR = null;
        //     this.CRTSOLICR.REF_PROV_ASE = null;
        //     if ((!LIB$PBLARLSTARG("CRTSOLICR.REF_PROVEEDOR", "RG_PROVEFINANZA"))) {
        //         // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA RG_PROVEFINANZA");
        //     }
        //     this.oracleFormsBuiltins.show_view("PROVEE_REF");
        //     this.oracleFormsBuiltins.go_item("CRTSOLICR.REF_PROVEEDOR");
        //     // construct payload
        //     let payload8 = new Map();
        //     payload8.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload8.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     // call REST API
        //     const result8 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query8", payload8);
        //     // get values from result
        //     CRTSOLICR.REFPRO = result8[0].get("CRTSOLICR.REFPRO");
        //     if (result8 == null || result8.length == 0) {

        //         this.CRTSOLICR.REFPRO = null;
        //     }

        //     // construct payload
        //     let payload9 = new Map();
        //     payload9.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload9.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     // call REST API
        //     const result9 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodpro_keynextitem_query9", payload9);
        //     // get values from result
        //     CRTSOLICR.REFASE = result9[0].get("CRTSOLICR.REFASE");
        //     if (result9 == null || result9.length == 0) {

        //         this.CRTSOLICR.REFASE = null;
        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrCodpro_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :CRTSOLICR.SOLICR_LINEADES = 'LL' THEN
    //  :CRTSOLICR.SOLICR_FDESEMCLI  := NULL;
    //  --SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE"); PY 10448
    // ELSIF :CRTSOLICR.SOLICR_LINEADES = 'LX' AND :CRTSOLICR.SOLICR_FDESEMCLI IS NULL THEN
    //  LIB$DTNERFRMA('DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO'); 
    // ELSIF :CRTSOLICR.SOLICR_FDESEMCLI < (SYSDATE + 2) THEN
    //  LIB$DTNERFRMA('NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)'||TO_CHAR(SYSDATE+2,'YYYY-MM-DD')); 
    // END IF; 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFdesemcli_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFdesemcli_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_LINEADES == "LL") {
            this.CRTSOLICR.SOLICR_FDESEMCLI = null;
        }
        else if ((this.CRTSOLICR.SOLICR_LINEADES == "LX" && (this.CRTSOLICR.SOLICR_FDESEMCLI == null))) {
            // CRFADECIAL_LIB$DTNERFRMA("DEBE ESPECIFICAR UNA FECHA DE DESEMBOLSO");
        }
        else if (this.CRTSOLICR.SOLICR_FDESEMCLI < PLSQLBuiltins.sysdate()) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PUEDE INGRESAR FECHAS INFERIORES O IGUALES A (HOY + 2 DÍAS)" + PLSQLBuiltins.sysdate() + 2.toString());
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFdesemcli_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_LINEADES = 'LL' THEN
    //  :CRTSOLICR.SOLICR_FDESEMCLI  := NULL;
    //  --SET_ITEM_PROPERTY('SOLICR_FDESEMCLI',ENABLED, "PROPERTY_FALSE"); 
    // 
    // --10448
    // ELSE
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', UPDATE_COLUMN, "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', UPDATEABLE, "PROPERTY_TRUE");
    //      --SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', "UPDATE_ALLOWED", "PROPERTY_TRUE");
    //      SET_ITEM_PROPERTY('SOLICR_FDESEMCLI', UPDATE_PERMISSION, "PROPERTY_TRUE");  
    // --10448
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFdesemcli_whenMouseClick() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFdesemcli_whenMouseClick");
        if (this.CRTSOLICR.SOLICR_LINEADES == "LL") {
            this.CRTSOLICR.SOLICR_FDESEMCLI = null;
        }
        else {
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_COLUMN", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATEABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("SOLICR_FDESEMCLI", "UPDATE_PERMISSION", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFdesemcli_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN
    //  IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //  END IF;
    //  P_LISTAREFERIDOS;
    //  SHOW_VIEW ('OFI_DAVI_REF');     
    //  GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    // 
    //    
    // ELSE
    //     LIB$DTNERFRMA('SOLO SE PUEDE MODIFICAR EL TIPO DE PRODUCTO DAS');
    //     GO_ITEM('CRTSOLICR.SOLICR_CONEXT');
    //     
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_ofidav_whenMouseClick() {
        console.log("Entering CRFADECIAL_crtsolicr_ofidav_whenMouseClick");
        if (this.CRTSOLICR.SOLICR_CODPRO == "DAS") {
            // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
            //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA");
            // }
            // CRFADECIAL_P_LISTAREFERIDOS();
            this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
        }
        else {
            // CRFADECIAL_LIB$DTNERFRMA("SOLO SE PUEDE MODIFICAR EL TIPO DE PRODUCTO DAS");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CONEXT");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_ofidav_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN IF (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN
    //  IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //  END IF;
    //  P_LISTAREFERIDOS;
    //  SHOW_VIEW ('OFI_DAVI_REF');     
    //  GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    // 
    //   
    // ELSE
    //     LIB$DTNERFRMA('SOLO SE PUEDE MODIFICAR EL TIPO DE PRODUCTO  DAS');
    //     GO_ITEM('CRTSOLICR.SOLICR_CONEXT');
    //     
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_ofidav_whenMouseDoubleclick() {
        console.log("Entering CRFADECIAL_crtsolicr_ofidav_whenMouseDoubleclick");
        if (this.CRTSOLICR.SOLICR_CODPRO == "DAS") {
            // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
            //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA");
            // }
            // CRFADECIAL_P_LISTAREFERIDOS();
            this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
        }
        else {
            // CRFADECIAL_LIB$DTNERFRMA("SOLO SE PUEDE MODIFICAR EL TIPO DE PRODUCTO  DAS");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CONEXT");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_ofidav_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN IF (:CRTSOLICR.SOLICR_CODPRO = 'DAS') THEN
    //  IF NOT LIB$PBLARLSTARG('CRTSOLICR.TIPO_REFERENCIA','LOV_TIPOREFERENCIA') THEN
    //         LIB$DTNERFRMA('NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA');
    //  END IF;
    //  P_LISTAREFERIDOS;
    //  SHOW_VIEW ('OFI_DAVI_REF');     
    //  GO_ITEM('CRTSOLICR.TIPO_REFERENCIA');
    //  
    // ELSE
    //     LIB$DTNERFRMA('SOLO SE PUEDE MODIFICAR EL TIPO DE PRODUCTO  DAS');
    //     GO_ITEM('CRTSOLICR.SOLICR_CONEXT');
    //     
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_ofidav_keyListval() {
        console.log("Entering CRFADECIAL_crtsolicr_ofidav_keyListval");
        if (this.CRTSOLICR.SOLICR_CODPRO == "DAS") {
            // if ((!LIB$PBLARLSTARG("CRTSOLICR.TIPO_REFERENCIA", "LOV_TIPOREFERENCIA"))) {
            //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUDO POBLAR LA LISTA CRTSOLICR.TIPO_REFERENCIA");
            // }
            // CRFADECIAL_P_LISTAREFERIDOS();
            this.oracleFormsBuiltins.show_view("OFI_DAVI_REF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.TIPO_REFERENCIA");
        }
        else {
            // CRFADECIAL_LIB$DTNERFRMA("SOLO SE PUEDE MODIFICAR EL TIPO DE PRODUCTO  DAS");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CONEXT");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_ofidav_keyListval");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //      IF :CRTSOLICR.SOLICR_BCODEX  <> 'X' THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      END IF; 
    //     
    //      
    //      PUP_REDESCUENTOS; --PY 15077
    //      
    // END;     
    //#endregion
    async CRFADECIAL_crtsolicr_solicrBcodex_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrBcodex_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.CRTSOLICR.SOLICR_BCODEX != "X") {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        // CRFADECIAL_PUP_REDESCUENTOS();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrBcodex_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL THEN
    //  DECLARE
    //   T_RESPUESTA NUMBER;
    //   DESC2        VARCHAR2(100); 
    //  BEGIN
    //     SELECT PROD_DESCRI
    //       INTO DESC2
    //       FROM CRTPRODCIA
    //      WHERE PROD_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //       AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //      ;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE DEL TIPO DE PRODUCTO',NULL,NULL,NULL,T_RESPUESTA);
    //      --RAISE FORM_TRIGGER_FAILURE; 8594
    //  END; 
    // 
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrLineadesc_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrLineadesc_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC2: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODPRO", this.CRTSOLICR.SOLICR_CODPRO);
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrlineadesc_whenvalidateitem_query1", payload1);
                // get values from result
                DESC2 = result1[0].get("DESC2");
                if (result1 == null || result1.length == 0) {

                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE DEL TIPO DE PRODUCTO", null, null, null, T_RESPUESTA);
                }

            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrLineadesc_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_LINEADES NOT IN ('LL','LX') THEN
    //   LIB$DTNERFRMA('POR FAVOR INGRESAR UNA LINEA VALIDA .');   
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrLineades_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrLineades_whenValidateItem");
        // if (["LL", "LX"].indexOf(CRTSOLICR.SOLICR_LINEADES) != -1) {
        //     // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR UNA LINEA VALIDA .");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrLineades_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR.SOLICR_USMLINEA    := PLSQLBuiltins.user();
    //   :CRTSOLICR.SOLICR_FECMODLINEA  := SYSDATE;   
    // --NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrLineades_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrLineades_keyNextItem");
        this.CRTSOLICR.SOLICR_USMLINEA = PLSQLBuiltins.user();
        this.CRTSOLICR.SOLICR_FECMODLINEA = PLSQLBuiltins.sysdate();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrLineades_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    //     V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //    V_DTF       INE.INEVAL%TYPE;
    //    V_DEF       INE.INEVAL%TYPE;
    //    V_TASATA    INE.INEVAL%TYPE;
    //    V_TASAEF    INE.INEVAL%TYPE;
    //    V_TASAEFT   INE.INEVAL%TYPE;
    //    
    // BEGIN
    // IF :CRTSOLICR.SOLICR_FINDTR = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_FINDTP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR FINDETER',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_FINDTR  := 'X';
    //    END IF;
    // END IF;
    // 
    //   --+PY26922. JDG. 2018.07.10
    //   IF :CRTSOLICR.SOLICR_TPESOS = 'DA5' OR :CRTSOLICR.SOLICR_TDOLAR = 'DA5' THEN
    //    
    //    BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DA5';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //   ELSE  
    //   --+ 
    // 
    //   BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DTF';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //  --+PY26922. JDG. 2018.07.10
    //  END IF;
    //  --+  
    //   
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //     IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      --LCBY:10791 -- TASAS PARA REDESCUENTO FINDETER.
    //     --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO FINDETER.
    //     IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_FINDTP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE TOPSOL_CODIGO = '07'
    //                  --+PY27126. JDG. 2018.08.01. ARQUITECTURA
    //                   AND TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                   --+
    //                   ;
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINDETER. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //     
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_FINDTP <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    // END IF;
    // 
    //  
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFindtp_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFindtp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: string = null;
        let V_DTF: string = null;
        let V_DEF: string = null;
        let V_TASATA: string = null;
        let V_TASAEF: string = null;
        let V_TASAEFT: string = null;
        // if (CRTSOLICR.SOLICR_FINDTR == "X") {
        //     if (CRTSOLICR.SOLICR_FINDTP == null ? 0 : CRTSOLICR.SOLICR_FINDTP < 1) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        // else {
        //     if (CRTSOLICR.SOLICR_FINDTP == null ? 0 : CRTSOLICR.SOLICR_FINDTP > 0) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR FINDETER", null, null, null, T_RESPUESTA);
        //         this.CRTSOLICR.SOLICR_FINDTR = "X";
        //     }
        // }
        // if ((CRTSOLICR.SOLICR_TPESOS == "DA5" || CRTSOLICR.SOLICR_TDOLAR == "DA5")) {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrfindtp_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     V_DTF = result1[0].get("V_DTF");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR");
        //     }

        // }
        // else {
        //     // construct payload
        //     let payload2 = new Map();
        //     // call REST API
        //     const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrfindtp_whenvalidateitem_query2", payload2);
        //     // get values from result
        //     V_DTF = result2[0].get("V_DTF");
        //     if (result2 == null || result2.length == 0) {

        //         // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
        //     }

        // }
        // // construct payload
        // let payload3 = new Map();
        // // call REST API
        // const result3 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrfindtp_whenvalidateitem_query3", payload3);
        // // get values from result
        // V_DEF = result3[0].get("V_DEF");
        // if (result3 == null || result3.length == 0) {

        //     // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        // }

        // if (["DAD", "LNE"].indexOf(CRTSOLICR.SOLICR_CODPRO) != -1) {
        //     if (CRTSOLICR.SOLICR_INDRED == "S") {
        //         if ((CRTSOLICR.SOLICR_FINDTP != null)) {
        //             // construct payload
        //             let payload4 = new Map();
        //             payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //             // call REST API
        //             const result4 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrfindtp_whenvalidateitem_query4", payload4);
        //             // get values from result
        //             V_TASA = result4[0].get("V_TASA");
        //             if (result4 == null || result4.length == 0) {

        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINDETER. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
        //                 console.log("FORM_TRIGGER_FAILURE");
        //                 throw new Error('FORM_TRIGGER_FAILURE');
        //             }

        //             V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
        //             V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
        //             V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
        //             if (SOLICR_FINDTP <= V_TASAEFT) {
        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
        //                 console.log("FORM_TRIGGER_FAILURE");
        //                 throw new Error('FORM_TRIGGER_FAILURE');
        //             }
        //         }
        //     }
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFindtp_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //      IF :CRTSOLICR.SOLICR_FINDTR  <> 'X' THEN
    //         LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //      END IF; 
    //      PUP_REDESCUENTOS; --PY 15077
    // END;    
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFindtr_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFindtr_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (CRTSOLICR.SOLICR_FINDTR != "X") {
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // CRFADECIAL_PUP_REDESCUENTOS();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFindtr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.W_CODIGOASESOR IS NOT NULL THEN
    //  
    //   BEGIN
    //    SELECT CONTPR_CORREO
    //      INTO :CRTSOLICR.W_CORREOASESOR
    //    FROM COTCONTPR 
    //    WHERE CONTPR_CODPRO = '860034313'
    //    AND CONTPR_CODCNT = :CRTSOLICR.W_CODIGOASESOR
    //    AND ROWNUM = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.W_CORREOASESOR := NULL;   
    //   END;
    //   
    // END IF; 
    //  
    // 
    // --NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr_wCodigoasesor_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_wCodigoasesor_whenValidateItem");
        // if ((CRTSOLICR.W_CODIGOASESOR != null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("W_CODIGOASESOR", this.CRTSOLICR.W_CODIGOASESOR);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_wcodigoasesor_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         CRTSOLICR.W_CORREOASESOR = result1[0].get("CRTSOLICR.W_CORREOASESOR");
        //     } catch (ex) {

        //         this.CRTSOLICR.W_CORREOASESOR = null;
        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr_wCodigoasesor_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --6754
    // P_LISTAREFERIDOS_DAV;
    // --6754; END;
    //#endregion
    async CRFADECIAL_crtsolicr_wCodigoasesor_whenMouseDoubleclick() {
        console.log("Entering CRFADECIAL_crtsolicr_wCodigoasesor_whenMouseDoubleclick");
        console.log("Exiting CRFADECIAL_crtsolicr_wCodigoasesor_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN --6754
    // P_LISTAREFERIDOS_DAV;
    // --6754; END;
    //#endregion
    async CRFADECIAL_crtsolicr_wCodigoasesor_keyListval() {
        console.log("Entering CRFADECIAL_crtsolicr_wCodigoasesor_keyListval");
        console.log("Exiting CRFADECIAL_crtsolicr_wCodigoasesor_keyListval");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.W_CODIGOASESOR IS NOT NULL THEN
    //  
    //   BEGIN
    //    SELECT CONTPR_CORREO
    //      INTO :CRTSOLICR.W_CORREOASESOR
    //    FROM COTCONTPR 
    //    WHERE CONTPR_CODPRO = '860034313'
    //    AND CONTPR_CODCNT = :CRTSOLICR.W_CODIGOASESOR
    //    AND ROWNUM = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.W_CORREOASESOR := NULL;   
    //   END;
    //   
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_wCodigoasesor_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_wCodigoasesor_keyNextItem");
        // if ((CRTSOLICR.W_CODIGOASESOR != null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("W_CODIGOASESOR", this.CRTSOLICR.W_CODIGOASESOR);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_wcodigoasesor_keynextitem_query1", payload1);
        //         // get values from result
        //         CRTSOLICR.W_CORREOASESOR = result1[0].get("CRTSOLICR.W_CORREOASESOR");
        //     } catch (ex) {

        //         this.CRTSOLICR.W_CORREOASESOR = null;
        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr_wCodigoasesor_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    //     V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //    V_DTF       INE.INEVAL%TYPE;
    //    V_DEF       INE.INEVAL%TYPE;
    //    V_TASATA    INE.INEVAL%TYPE;
    //    V_TASAEF    INE.INEVAL%TYPE;
    //    V_TASAEFT   INE.INEVAL%TYPE;
    //    
    // BEGIN
    // IF :CRTSOLICR.SOLICR_IFI = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_IFIP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_IFIP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR MULTIPROPOSITO',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_IFI  := 'X';
    //        GO_ITEM('SOLICR_LMULTIP');
    //    END IF;
    // END IF;
    // 
    //   --+PY26922. JDG. 2018.07.10
    //   IF :CRTSOLICR.SOLICR_TPESOS = 'DA5' OR :CRTSOLICR.SOLICR_TDOLAR = 'DA5' THEN
    //    
    //    BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DA5';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //   ELSE  
    //   --+ 
    //   
    //   BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DTF';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //  --+PY26922. JDG. 2018.07.10
    //  END IF;
    //  --+  
    //   
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //     IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      --LCBY:10791 -- TASAS PARA REDESCUENTO MULTIPROPOSITO.
    //     --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO MULTIPROPOSITO.
    //     IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_IFIP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE TOPSOL_CODIGO = '07'
    //                  --+PY27126. JDG. 2018.08.01. ARQUITECTURA
    //                   AND TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                   --+
    //                  ;
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINDETER. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //     
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_IFIP <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    // END IF;
    // 
    //  
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrIfip_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrIfip_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: string = null;
        let V_DTF: string = null;
        let V_DEF: string = null;
        let V_TASATA: string = null;
        let V_TASAEF: string = null;
        let V_TASAEFT: string = null;
        // if (CRTSOLICR.SOLICR_IFI == "X") {
        //     if (CRTSOLICR.SOLICR_IFIP == null ? 0 : CRTSOLICR.SOLICR_IFIP < 1) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        // else {
        //     if (CRTSOLICR.SOLICR_IFIP == null ? 0 : CRTSOLICR.SOLICR_IFIP > 0) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR MULTIPROPOSITO", null, null, null, T_RESPUESTA);
        //         this.CRTSOLICR.SOLICR_IFI = "X";
        //         this.oracleFormsBuiltins.go_item("SOLICR_LMULTIP");
        //     }
        // }
        // if ((CRTSOLICR.SOLICR_TPESOS == "DA5" || CRTSOLICR.SOLICR_TDOLAR == "DA5")) {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrifip_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     V_DTF = result1[0].get("V_DTF");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR");
        //     }

        // }
        // else {
        //     // construct payload
        //     let payload2 = new Map();
        //     // call REST API
        //     const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrifip_whenvalidateitem_query2", payload2);
        //     // get values from result
        //     V_DTF = result2[0].get("V_DTF");
        //     if (result2 == null || result2.length == 0) {

        //         // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
        //     }

        // }
        // // construct payload
        // let payload3 = new Map();
        // // call REST API
        // const result3 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrifip_whenvalidateitem_query3", payload3);
        // // get values from result
        // V_DEF = result3[0].get("V_DEF");
        // if (result3 == null || result3.length == 0) {

        //     // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        // }

        // if (["DAD", "LNE"].indexOf(CRTSOLICR.SOLICR_CODPRO) != -1) {
        //     if (CRTSOLICR.SOLICR_INDRED == "S") {
        //         if ((CRTSOLICR.SOLICR_IFIP != null)) {
        //             // construct payload
        //             let payload4 = new Map();
        //             payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //             // call REST API
        //             const result4 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrifip_whenvalidateitem_query4", payload4);
        //             // get values from result
        //             V_TASA = result4[0].get("V_TASA");
        //             if (result4 == null || result4.length == 0) {

        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINDETER. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
        //                 console.log("FORM_TRIGGER_FAILURE");
        //                 throw new Error('FORM_TRIGGER_FAILURE');
        //             }

        //             V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
        //             V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
        //             V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
        //             if (SOLICR_IFIP <= V_TASAEFT) {
        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
        //                 console.log("FORM_TRIGGER_FAILURE");
        //                 throw new Error('FORM_TRIGGER_FAILURE');
        //             }
        //         }
        //     }
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrIfip_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.SOLICITUD IS NOT NULL THEN
    // DECLARE
    //  V_EXTRA NUMBER;
    // BEGIN
    //  
    //   BEGIN
    //   SELECT SOLICR_CONEXT
    //   INTO V_EXTRA
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN OTHERS THEN V_EXTRA := 0;
    //  END;
    // 
    //   IF (V_EXTRA > 0) AND (:CRTSOLICR.SOLICR_CONEXT = 0 OR :CRTSOLICR.SOLICR_CONEXT IS NULL ) THEN
    //   
    //    LIB$DTNERFRMA('NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.');
    //   
    //   END IF;
    // 
    //  :CRTSOLICR.SOLICR_VRFINA_1 :=  :CRTSOLICR.SOLICR_MONTO1 - :CRTSOLICR.SOLICR_CONEXT;
    //  :CRTSOLICR.SOLICR_VRFINCR :=  :CRTSOLICR.SOLICR_VRFINA_1;--:CRTSOLICR.SOLICR_MONTO1; AJ 16/02/2018 VALOR A FINANCIAR NO SE IGUALA AL MONTO 
    //  --NEXT_ITEM;
    // 
    // END;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrMonto1_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrMonto1_keyNextItem");
        if ((this.VARIABLE.SOLICITUD != null)) {
            {

                let V_EXTRA: number = null;
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
                    payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
                    payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrmonto1_keynextitem_query1", payload1);
                    // get values from result
                    V_EXTRA = result1[0].get("V_EXTRA");
                } catch (ex) {

                    V_EXTRA = 0;
                }

                // if ((V_EXTRA > 0 && (CRTSOLICR.SOLICR_CONEXT == 0 || (CRTSOLICR.SOLICR_CONEXT == null)))) {
                //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PUEDE ELIMINAR POR COMPLETO EL CANON EXTRA. POR FAVOR VALIDAR.");
                // }
                // this.CRTSOLICR.SOLICR_VRFINA_1 = this.CRTSOLICR.SOLICR_MONTO1 - CRTSOLICR.SOLICR_CONEXT;
                this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_VRFINA_1;
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrMonto1_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_MIN   NUMBER;
    //   V_MAX   NUMBER;
    //   V_VAL   NUMBER;
    //   V_OPCOM NUMBER;
    //   V_VAMA  NUMBER;
    //    
    // BEGIN
    //  
    //  
    //   BEGIN
    //   SELECT SOLICR_OPCCOM
    //   INTO V_OPCOM
    //   FROM CRTSOLICR
    //   WHERE SOLICR_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //     AND SOLICR_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ; 
    //  EXCEPTION WHEN OTHERS THEN V_OPCOM := 0;
    //  END;
    //  
    //  
    //  --V_MIN :=  FBD_VALCAMPO('MIN',1);
    //  V_MAX :=  FBD_VALCAMPO('MAX',1);
    //  
    //  
    //  V_VAMA := V_OPCOM + V_MAX;
    //  
    // 
    //   IF  (:CRTSOLICR.SOLICR_OPCCOM > V_VAMA)  THEN 
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MAX ||'% POR FAVOR VALIDAR .'); 
    //   END IF;
    //     
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr_solicrOpccom_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrOpccom_whenValidateItem");
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_VAL: number = null;
        let V_OPCOM: number = null;
        let V_VAMA: number = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicropccom_whenvalidateitem_query1", payload1);
            // get values from result
            V_OPCOM = result1[0].get("V_OPCOM");
        } catch (ex) {

            V_OPCOM = 0;
        }

        // V_MAX = FBD_VALCAMPO("MAX", 1);
        // V_VAMA = V_OPCOM + V_MAX;
        // if (CRTSOLICR.SOLICR_OPCCOM > V_VAMA) {
        //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MAYORES AL " + V_MAX + "% POR FAVOR VALIDAR .");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrOpccom_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TLINCOD
    //      INTO DESC1
    //      FROM TLIN
    //     WHERE TLINCOD =:CRTSOLICR.SOLICR_LINEA;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // 
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrLinea_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrLinea_whenValidateItem");
        // if ((CRTSOLICR.SOLICR_TPESOS != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let DESC1: string = null;
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_LINEA", this.CRTSOLICR.SOLICR_LINEA);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrlinea_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         DESC1 = result1[0].get("DESC1");
        //         if (result1 == null || result1.length == 0) {

        //             // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
        //             console.log("FORM_TRIGGER_FAILURE");
        //             throw new Error('FORM_TRIGGER_FAILURE');
        //         }

        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrLinea_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*DECLARE--PETICIÓN DE MARCELA CORTES PARA QUE NO REALICE NINGÚN TIPO DE VALIDACIÓN LDB-JULIO 30-2002
    // 
    //    T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_SPTVEN IS NOT NULL AND
    //    :CRTSOLICR.SOLICR_SPTVEN < 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD T. VENDOR NO DEBE SER MENOR QUE CERO '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_SPTVEN := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_SPTVEN  <  :GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD T. VENDOR DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_SPTVEN := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // END;*/
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrSptven_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrSptven_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrSptven_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // 
    // NULL;
    // 
    // /*IF :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL AND
    //    :CRTSOLICR.SOLICR_PTOUS$ < 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE SPREAD US $ NO DEBE SER MENOR QUE CERO '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PTOUS$ := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_PTOUS$  <  :GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE SPREAD US$ DEBE SER MAYOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PTOUS$  := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;*/
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPtous$_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPtous$_whenValidateItem");
        let T_RESPUESTA: number = null;
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPtous$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY27126. JDG. 2018.08.01.
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTE           NUMBER;
    //    
    // BEGIN
    //      
    //     IF :CRTSOLICR.SOLICR_TDOLAR = 'DA5' THEN
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_PUNT$N' );
    //       
    //     ELSE
    //      
    //      GO_ITEM( 'CRTSOLICR.SOLICR_PERGRA' );
    //       
    //     END IF; 
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFADECIAL.CRTSOLICR.SOLICR_PTOUS$.KEY-NEXT-ITEM'
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    // --+; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPtous$_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPtous$_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTE: number = null;
        try {

            if (this.CRTSOLICR.SOLICR_TDOLAR == "DA5") {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PUNT$N");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_PTOUS$.KEY-NEXT-ITEM" + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
                // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrPtous$_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*
    // BEGIN
    // IF :CRTSOLICR.SOLICR_ORMONET = 'PE' AND (:CRTSOLICR.SOLICR_ORMONUS$ = 'PE' OR 
    //                                     :CRTSOLICR.SOLICR_ORMONUS$ IS NULL) THEN
    //    :CRTSOLICR.SOLICR_VRFINA := :CRTSOLICR.SOLICR_MONTO - NVL(:CRTSOLICR.SOLICR_CONEXT,0);
    // ELSE
    //    :CRTSOLICR.SOLICR_VRFINA := 0;
    // END IF;
    // END;
    // */
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrConext1_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrConext1_postChange");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrConext1_postChange");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR.SOLICR_VRFINA_1 :=  :CRTSOLICR.SOLICR_MONTO1 - :CRTSOLICR.SOLICR_CONEXT;
    // :CRTSOLICR.SOLICR_VRFINCR := :CRTSOLICR.SOLICR_MONTO1;
    // 
    // 
    // PUP_VALIDAVAL(:CRTSOLICR.SOLICR_VRFINA);
    // --NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrConext1_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrConext1_keyNextItem");
        // this.CRTSOLICR.SOLICR_VRFINA_1 = this.CRTSOLICR.SOLICR_MONTO1 - CRTSOLICR.SOLICR_CONEXT;
        this.CRTSOLICR.SOLICR_VRFINCR = this.CRTSOLICR.SOLICR_MONTO1;
        // CRFADECIAL_PUP_VALIDAVAL(CRTSOLICR.SOLICR_VRFINA);
        console.log("Exiting CRFADECIAL_crtsolicr_solicrConext1_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   V_MIN  NUMBER;
    //   V_MAX  NUMBER;
    //   
    //   V_ANT  NUMBER;
    //   V_EXP  NUMBER;
    //   
    //   V_MON  NUMBER;
    //   V_VAL  NUMBER;
    //   
    //   V_RESPUESTA NUMBER;
    // BEGIN
    //  V_MIN :=  FBD_VALCAMPO('MIN',7);
    //  V_MAX :=  FBD_VALCAMPO('MAX',7);
    //  
    //  V_MON := 0;
    //  V_EXP := 0;
    //  
    //  
    //  BEGIN
    //  SELECT SOLICR_VRFINCR
    //  INTO  V_ANT
    //  FROM CRTSOLICR CR
    //  WHERE  SOLICR_CODSOL =  :CRTSOLICR.SOLICR_CODSOL
    //    AND  SOLICR_OFCSOL =  :CRTSOLICR.SOLICR_OFCSOL;
    //  EXCEPTION
    //   WHEN OTHERS THEN
    //   V_ANT:=NULL;
    //  END;
    //  
    // 
    //   V_EXP := V_ANT * (V_MIN/100);
    //   V_MON := (V_ANT + V_EXP);
    //   
    // 
    //  V_VAL := FBD_EXISREG (:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL, 'SOLICR_VRFINCR', USER); 
    //  
    //   
    //  IF V_VAL = 0 THEN
    //   IF  :CRTSOLICR.SOLICR_VRFINCR  >   V_MON     THEN 
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MAYORES AL '||V_MIN ||'%  DEL MONTO A FINANCIAR POR FAVOR VALIDAR.'); 
    //   END IF; 
    //  ELSIF V_VAL >= 2 THEN
    //    LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS YA TUVO UNA MODIFICACIÓN ANTERIOR.');   
    //  END IF;   
    //   
    // END;  
    //#endregion
    async CRFADECIAL_crtsolicr_solicrVrfincr_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrVrfincr_whenValidateItem");
        let V_MIN: number = null;
        let V_MAX: number = null;
        let V_ANT: number = null;
        let V_EXP: number = null;
        let V_MON: number = null;
        let V_VAL: number = null;
        let V_RESPUESTA: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 7);
        // V_MAX = FBD_VALCAMPO("MAX", 7);
        V_MON = 0;
        V_EXP = 0;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrvrfincr_whenvalidateitem_query1", payload1);
            // get values from result
            V_ANT = result1[0].get("V_ANT");
        } catch (ex) {

            V_ANT = null;
        }

        V_EXP = V_ANT * V_MIN / 100;
        V_MON = V_ANT + V_EXP;
        // V_VAL = FBD_EXISREG(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, "SOLICR_VRFINCR", USER);
        if (V_VAL == 0) {
            // if (CRTSOLICR.SOLICR_VRFINCR > V_MON) {
            //     // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MAYORES AL " + V_MIN + "%  DEL MONTO A FINANCIAR POR FAVOR VALIDAR.");
            // }
        }
        else if (V_VAL >= 2) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS YA TUVO UNA MODIFICACIÓN ANTERIOR.");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrVrfincr_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR.SOLICR_MONTO  := :CRTSOLICR.SOLICR_VRFINCR;
    // :CRTSOLICR.SOLICR_VRFINA := NVL(:CRTSOLICR.SOLICR_VRFINCR,0)- NVL(:CRTSOLICR.SOLICR_CONEXT,0); END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrVrfincr_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrVrfincr_postChange");
        this.CRTSOLICR.SOLICR_MONTO = this.CRTSOLICR.SOLICR_VRFINCR;
        // this.CRTSOLICR.SOLICR_VRFINA = CRTSOLICR.SOLICR_VRFINCR == null ? 0 : CRTSOLICR.SOLICR_VRFINCR - CRTSOLICR.SOLICR_CONEXT == null ? 0 : CRTSOLICR.SOLICR_CONEXT;
        console.log("Exiting CRFADECIAL_crtsolicr_solicrVrfincr_postChange");
    }

    //#region PLSQL
    // BEGIN PUP_REDESCUENTOS; --PY 15077; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrIfi_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrIfi_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrIfi_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_MIN     NUMBER;
    //    V_MAX     NUMBER;
    // 
    // BEGIN
    //  
    //  
    //  
    //  V_MIN :=  FBD_VALCAMPO('MIN',16);
    //  V_MAX :=  FBD_VALCAMPO('MAX',16);
    //  
    //    IF  (V_MIN > :CRTSOLICR.SOLICR_FNGP)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PORCENTAJE DE COBERTURA FNG ES DE '||V_MIN ||' . ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR.SOLICR_FNGP)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PORCENTAJE DE COBERTURA FNG ES DE '||V_MAX ||'. ' );      
    //   END IF;
    //   
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFngp_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFngp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 16);
        // V_MAX = FBD_VALCAMPO("MAX", 16);
        // if (V_MIN > CRTSOLICR.SOLICR_FNGP) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PORCENTAJE DE COBERTURA FNG ES DE " + V_MIN + " . ");
        // }
        // if (V_MAX < CRTSOLICR.SOLICR_FNGP) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PORCENTAJE DE COBERTURA FNG ES DE " + V_MAX + ". ");
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFngp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --   FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFngp_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFngp_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFngp_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //     T_RESPUESTA   NUMBER;
    //     V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //    V_DTF       INE.INEVAL%TYPE;
    //    V_DEF       INE.INEVAL%TYPE;
    //    V_TASATA    INE.INEVAL%TYPE;
    //    V_TASAEF    INE.INEVAL%TYPE;
    //    V_TASAEFT   INE.INEVAL%TYPE;
    //    
    // BEGIN
    // IF :CRTSOLICR.SOLICR_BCODEX = 'X' THEN
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) < 1 THEN
    //        LIB$ALERTA('MENSAJE','EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO',NULL,NULL,NULL,T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    //    END IF;
    // ELSE
    //    IF NVL(:CRTSOLICR.SOLICR_BCODXP, 0) > 0 THEN
    //        LIB$ALERTA('MENSAJE','SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX',NULL,NULL,NULL,T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_BCODEX  := 'X';
    //        GO_ITEM('SOLICR_TBCOLDX');
    //    END IF;
    // END IF;
    // 
    //   --+PY26922. JDG. 2018.07.10
    //   IF :CRTSOLICR.SOLICR_TPESOS = 'DA5' OR :CRTSOLICR.SOLICR_TDOLAR = 'DA5' THEN
    //    
    //    BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DA5';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //   ELSE  
    //   --+ 
    // 
    //   BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DTF';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    // 
    //   --+PY26922. JDG. 2018.07.10
    //  END IF;
    //  --+  
    //     
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    //    
    //    IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      --LCBY:10791 -- TASAS PARA REDESCUENTO BANCOLDEX.
    //     --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO BANCOLDEX.
    //     IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_BCODXP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE TOPSOL_CODIGO = '07'
    //                  --+PY27126. JDG. 2018.08.01. ARQUITECTURA
    //                   AND TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                   --+
    //                   ;
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO BANCOLDEX. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //     
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_BCODXP <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;  
    // END IF;
    // 
    //  
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrBcodxp_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrBcodxp_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: string = null;
        let V_DTF: string = null;
        let V_DEF: string = null;
        let V_TASATA: string = null;
        let V_TASAEF: string = null;
        let V_TASAEFT: string = null;
        // if (CRTSOLICR.SOLICR_BCODEX == "X") {
        //     if (CRTSOLICR.SOLICR_BCODXP == null ? 0 : CRTSOLICR.SOLICR_BCODXP < 1) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE COBERTURA DEBE SER MAYOR QUE CERO", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        // else {
        //     if (CRTSOLICR.SOLICR_BCODXP == null ? 0 : CRTSOLICR.SOLICR_BCODXP > 0) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "SE VA A PONER UNA X EN EL INDICADOR BANCOLDEX", null, null, null, T_RESPUESTA);
        //         this.CRTSOLICR.SOLICR_BCODEX = "X";
        //         this.oracleFormsBuiltins.go_item("SOLICR_TBCOLDX");
        //     }
        // }
        // if ((CRTSOLICR.SOLICR_TPESOS == "DA5" || CRTSOLICR.SOLICR_TDOLAR == "DA5")) {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrbcodxp_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     V_DTF = result1[0].get("V_DTF");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR");
        //     }

        // }
        // else {
        //     // construct payload
        //     let payload2 = new Map();
        //     // call REST API
        //     const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrbcodxp_whenvalidateitem_query2", payload2);
        //     // get values from result
        //     V_DTF = result2[0].get("V_DTF");
        //     if (result2 == null || result2.length == 0) {

        //         // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
        //     }

        // }
        // construct payload
        let payload3 = new Map();
        // call REST API
        const result3 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrbcodxp_whenvalidateitem_query3", payload3);
        // get values from result
        V_DEF = result3[0].get("V_DEF");
        if (result3 == null || result3.length == 0) {

            // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        // if (["DAD", "LNE"].indexOf(CRTSOLICR.SOLICR_CODPRO) != -1) {
        //     if (CRTSOLICR.SOLICR_INDRED == "S") {
        //         if ((CRTSOLICR.SOLICR_BCODXP != null)) {
        //             // construct payload
        //             let payload4 = new Map();
        //             payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //             // call REST API
        //             const result4 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrbcodxp_whenvalidateitem_query4", payload4);
        //             // get values from result
        //             V_TASA = result4[0].get("V_TASA");
        //             if (result4 == null || result4.length == 0) {

        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO BANCOLDEX. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
        //                 console.log("FORM_TRIGGER_FAILURE");
        //                 throw new Error('FORM_TRIGGER_FAILURE');
        //             }

        //             V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
        //             V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
        //             V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
        //             if (SOLICR_BCODXP <= V_TASAEFT) {
        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
        //                 console.log("FORM_TRIGGER_FAILURE");
        //                 throw new Error('FORM_TRIGGER_FAILURE');
        //             }
        //         }
        //     }
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrBcodxp_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_wOficina_whenMouseClick() {
        console.log("Entering CRFADECIAL_crtsolicr_wOficina_whenMouseClick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_wOficina_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_wOficina_whenMouseDoubleclick() {
        console.log("Entering CRFADECIAL_crtsolicr_wOficina_whenMouseDoubleclick");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_wOficina_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //       
    //    IF NOT SHOW_LOV('LOV_OFICINA') THEN
    //        MESSAGE('NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA');
    //     END IF;  
    //  
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_wOficina_keyListval() {
        console.log("Entering CRFADECIAL_crtsolicr_wOficina_keyListval");
        if ((!this.oracleFormsBuiltins.show_lov("LOV_OFICINA"))) {
            this.oracleFormsBuiltins.message("NO EXISTEN OFICINAS PARA EL TIPO DE REFERENCIA");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_wOficina_keyListval");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CRTSOLICR.W_CODIGOASESOR'); END;
    //#endregion
    async CRFADECIAL_crtsolicr_wOficina_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_wOficina_keyNextItem");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.W_CODIGOASESOR");
        console.log("Exiting CRFADECIAL_crtsolicr_wOficina_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :VARIABLE.SOLICITUD IS NOT NULL THEN
    // --CB :NOVEDADES
    //  DECLARE
    //   
    //   T_RESPUESTA NUMBER;
    //   V_MENSAJE           VARCHAR2( 500 ); 
    //   V_SOLICR_PUNT$                NUMBER( 22,11 );
    //   --+
    //   V_SOLICR_LINEA         CRTSOLICR.SOLICR_LINEA%TYPE;
    //   
    //  BEGIN
    //   
    //   --+PY27126. JDG. 2018.08.01.
    //   IF ( GET_ITEM_PROPERTY( 'CRTSOLICR.SOLICR_PUNT$N', "ENABLED" ) = 'TRUE' ) THEN
    //         
    //    IF :CRTSOLICR.SOLICR_PUNT$N IS NOT NULL THEN
    //     
    //     V_SOLICR_PUNT$ := 0;
    //     
    //     IF PUP_CONVERSION_TASA_NOMINAL( V_SOLICR_PUNT$ ) = 'FALLO' THEN
    //     
    //        SELECT 'NO SE PUDO CONVERTIR TASA NOMINAL VOR A ' ||
    //              DECODE( :CRTSOLICR.SOLICR_LINEA, 'LI', :CRTSOLICR.SOLICR_TDOLAR, :CRTSOLICR.SOLICR_TPESOS ) ||
    //             ' + SPREAD. SOLICITUD NO TIENE FECHA DE RADICACIÓN, O NO TIENE LÍNEA O NO EXISTE EL INDICADOR ' ||
    //             DECODE( :CRTSOLICR.SOLICR_LINEA, 'LI', :CRTSOLICR.SOLICR_TDOLAR, :CRTSOLICR.SOLICR_TPESOS ) ||
    //             ' EN DICHA FECHA' 
    //         INTO V_MENSAJE
    //         FROM DUAL;
    //       LIB$DTNERFRMA( V_MENSAJE );
    //       
    //     ELSE
    //     
    //         IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL THEN
    //         
    //          :CRTSOLICR.SOLICR_PUNTS$ := V_SOLICR_PUNT$;
    //          :CRTSOLICR.SOLICR_FETANO := SYSDATE;
    //   
    //         ELSIF :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL THEN
    //      
    //         :CRTSOLICR.SOLICR_PTOUS$ := V_SOLICR_PUNT$;
    //          :CRTSOLICR.SOLICR_FETANO := SYSDATE;
    //          
    //         ELSE
    //          
    //          :CRTSOLICR.SOLICR_PTOUS$ := NULL;
    //          :CRTSOLICR.SOLICR_FETANO := NULL;
    //       
    //        END IF;
    //        
    //      END IF;  
    //           
    //     END IF;
    //     
    //   END IF; 
    //   --+
    //   
    //  EXCEPTION
    //   
    //    WHEN OTHERS THEN
    //    
    //       IF ( ERROR_CODE  <> 0 ) THEN
    //        
    //       V_MENSAJE := 'FALLO. '
    //                   || 'CRFADECIAL.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. '
    //                   || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                   || 'SQLERRM ' || SQLERRM;
    //                   
    //         PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                   
    //       LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //       
    //      END IF;   
    //                   
    //  END;
    //  
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPunt$n_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPunt$n_whenValidateItem");
        // if ((VARIABLE.SOLICITUD != null)) {
        //     {

        //         let T_RESPUESTA: number = null;
        //         let V_MENSAJE: string = null;
        //         let V_SOLICR_PUNT$: number = null;
        //         let V_SOLICR_LINEA: string = null;
        //         let result1 = [];
        //         try {

        //             if (this.oracleFormsBuiltins.get_item_property("CRTSOLICR.SOLICR_PUNT$N", "ENABLED") == "TRUE") {
        //                 if ((CRTSOLICR.SOLICR_PUNT$N != null)) {
        //                     V_SOLICR_PUNT$ = 0;
        //                     if (PUP_CONVERSION_TASA_NOMINAL(V_SOLICR_PUNT$) == "FALLO") {
        //                         // construct payload
        //                         let payload1 = new Map();
        //                         payload1.set("SOLICR_TDOLAR", this.CRTSOLICR.SOLICR_TDOLAR);
        //                         payload1.set("SOLICR_LINEA", this.CRTSOLICR.SOLICR_LINEA);
        //                         payload1.set("SOLICR_TPESOS", this.CRTSOLICR.SOLICR_TPESOS);
        //                         // call REST API
        //                         const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrpunt$n_whenvalidateitem_query1", payload1);
        //                         // get values from result
        //                         V_MENSAJE = result1[0].get("V_MENSAJE");
        //                         // CRFADECIAL_LIB$DTNERFRMA(V_MENSAJE);
        //                     }
        //                     else {
        //                         if ((CRTSOLICR.SOLICR_TPESOS != null)) {
        //                             this.CRTSOLICR.SOLICR_PUNTS$ = V_SOLICR_PUNT$;
        //                             this.CRTSOLICR.SOLICR_FETANO = PLSQLBuiltins.sysdate();
        //                         }
        //                         else if ((CRTSOLICR.SOLICR_TDOLAR != null)) {
        //                             this.CRTSOLICR.SOLICR_PTOUS$ = V_SOLICR_PUNT$;
        //                             this.CRTSOLICR.SOLICR_FETANO = PLSQLBuiltins.sysdate();
        //                         }
        //                         else {
        //                             this.CRTSOLICR.SOLICR_PTOUS$ = null;
        //                             this.CRTSOLICR.SOLICR_FETANO = null;
        //                         }
        //                     }
        //                 }
        //             }
        //         } catch (ex) {

        //             if (this.oracleFormsBuiltins.error_code != 0) {
        //                 V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_PUNT$N.WHEN-VALIDATE-ITEM. " + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
        //                 // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
        //                 // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
        //             }
        //         }

        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPunt$n_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY27126. JDG. 2018.08.01.
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTE           NUMBER;
    //    
    // BEGIN
    // 
    //      
    //     GO_ITEM( 'CRTSOLICR.SOLICR_PERGRA' );
    //     
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFADECIAL.CRTSOLICR.SOLICR_PUNT$N.KEY-NEXT-ITEM'
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    // --+; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPunt$n_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPunt$n_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTE: number = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_PUNT$N.KEY-NEXT-ITEM" + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
                // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrPunt$n_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    // 
    //  --+PY27126. JDG. 2018.08.01.
    //  PUP_CONTROL_BOTONES_X_UNIDAD( 'CRTSOLICR.SOLICR_TDOLAR', 'UPDATE' );
    //  --+
    //  
    //  IF :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL THEN
    //   BEGIN
    //     SELECT TINDES
    //      INTO DESC1
    //     FROM TIN
    //     WHERE TINCOD=:CRTSOLICR.SOLICR_TDOLAR;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTdolar_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTdolar_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // CRFADECIAL_PUP_CONTROL_BOTONES_X_UNIDAD("CRTSOLICR.SOLICR_TDOLAR", "UPDATE");
        if ((this.CRTSOLICR.SOLICR_TDOLAR != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TDOLAR", this.CRTSOLICR.SOLICR_TDOLAR);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrtdolar_whenvalidateitem_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrTdolar_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY27126. JDG. 2018.08.01.
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTE           NUMBER;
    //    
    // BEGIN
    //      
    //     IF :CRTSOLICR.SOLICR_TDOLAR = 'DA5' THEN
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_PUNT$N' );
    //     
    //     ELSE
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_PTOUS$' );  
    //       
    //     END IF; 
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFADECIAL.CRTSOLICR.SOLICR_TDOLAR.KEY-NEXT-ITEM'
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    // --+; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTdolar_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTdolar_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTE: number = null;
        try {

            if (this.CRTSOLICR.SOLICR_TDOLAR == "DA5") {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PUNT$N");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PTOUS$");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_TDOLAR.KEY-NEXT-ITEM" + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
                // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrTdolar_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //  /*
    //   AUTOR:   GEXNOVA SAS.
    //   FECHA:  27/06/2019.
    //   PROYECTO: PERIODOS MUERTOS 56949;
    //   MOTIVO:  * SE LLAMA EL PROGRAM UNIT VALIDA_PERI_MUE_GRA_ADECIAL  ENVIANDO 
    //               LA VARIABLE "PM" PARA IDENTIFICAR DE DONDE SE HACE EL LLAMADO.        
    //             * ACTUALIZADO EL 19.09.2019
    //  */
    //   PUP_VALIDA_PMUERTO_ADECIAL ('PM');
    //  -- GEXNOVA PERIDOS MUERTOS 56949.
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPermue_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPermue_whenValidateItem");
        // CRFADECIAL_PUP_VALIDA_PMUERTO_ADECIAL("PM");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPermue_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*
    //  AUTOR:    GEXNOVA.
    //  FECHA:    19.09.2019.
    //  PROYECTO: PERIODOS MUERTOS 56949.
    //  MOTIVO:   SE CALCULA EL PLAZO TOTAL DEL FLUJO.
    // */
    //  :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0) + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    // --GEXNOVA PERIODOS MUERTOS 56949. 
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPermue_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPermue_keyNextItem");
        // this.CRTSOLICR.TXT_TOTPLAZO = CRTSOLICR.SOLICR_PLAZO == null ? 0 : CRTSOLICR.SOLICR_PLAZO + CRTSOLICR.SOLICR_PERGRA == null ? 0 : CRTSOLICR.SOLICR_PERGRA + CRTSOLICR.SOLICR_PERMUE == null ? 0 : CRTSOLICR.SOLICR_PERMUE;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPermue_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :CRTSOLICR.W_OFICINA := NULL;
    //    :CRTSOLICR.W_OFICINA_DESCR := NULL;
    //     
    //   :CRTSOLICR.W_CODIGOASESOR := NULL;
    //    :CRTSOLICR.W_NOMBREASESOR := NULL;
    //    :CRTSOLICR.W_CORREOASESOR := NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_tipoReferencia_whenListChanged() {
        console.log("Entering CRFADECIAL_crtsolicr_tipoReferencia_whenListChanged");
        this.CRTSOLICR.W_OFICINA = null;
        this.CRTSOLICR.W_OFICINA_DESCR = null;
        this.CRTSOLICR.W_CODIGOASESOR = null;
        this.CRTSOLICR.W_NOMBREASESOR = null;
        this.CRTSOLICR.W_CORREOASESOR = null;
        console.log("Exiting CRFADECIAL_crtsolicr_tipoReferencia_whenListChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('CRTSOLICR.W_OFICINA'); END;
    //#endregion
    async CRFADECIAL_crtsolicr_tipoReferencia_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_tipoReferencia_keyNextItem");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.W_OFICINA");
        console.log("Exiting CRFADECIAL_crtsolicr_tipoReferencia_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF (:CRTSOLICR.W_CODIGOASESOR IS NULL) AND (:CRTSOLICR.TIPO_REFERENCIA IS NULL) THEN
    //     LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');
    // ELSE
    // 
    //     :CRTSOLICR.SOLICR_OFIDAV := :CRTSOLICR.W_OFICINA;
    //    
    //    HIDE_VIEW('OFI_DAVI_REF');
    //    GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    //     
    //    
    //   /* IF :CRTSOLICR.W_NITREF IS NOT NULL THEN
    //        :CRTSOLICR.W_REFERIDO  := 'S';  
    //     ELSE  
    //        :CRTSOLICR.W_REFERIDO  := 'N';
    //     END IF;*/
    // 
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_cerrar_whenButtonPressed() {
        console.log("Entering CRFADECIAL_crtsolicr_cerrar_whenButtonPressed");
        if (((this.CRTSOLICR.W_CODIGOASESOR == null) && (this.CRTSOLICR.TIPO_REFERENCIA == null))) {
            // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
        }
        else {
            this.CRTSOLICR.SOLICR_OFIDAV = this.CRTSOLICR.W_OFICINA;
            this.oracleFormsBuiltins.hide_view("OFI_DAVI_REF");
            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        }
        console.log("Exiting CRFADECIAL_crtsolicr_cerrar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --   FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    //     :CRTSOLICR.COMERCIAL := PU_NOMBRE_CIAL (:CRTSOLICR.SOLICR_USCIAL);
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrUscial_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrUscial_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // this.CRTSOLICR.COMERCIAL = PU_NOMBRE_CIAL(CRTSOLICR.SOLICR_USCIAL);
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrUscial_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_MIN     NUMBER;
    //    V_MAX     NUMBER;
    // 
    // BEGIN
    //  
    //  
    //  
    //  V_MIN :=  FBD_VALCAMPO('MIN',14);
    //  V_MAX :=  FBD_VALCAMPO('MAX',14);
    //  
    //  
    // /* MESSAGE('EL VALOR ES SOLICR_PERGRA:::'||:CRTSOLICR.SOLICR_PERGRA);
    //  MESSAGE('EL VALOR ES V_MIN:::'||V_MIN);
    //  MESSAGE('EL VALOR ES V_MAX:::'||V_MAX);*/
    //   
    //   --PY15021. 
    //   --IF :CRTSOLICR.SOLICR_PERGRA > V_MIN THEN   
    //   IF  (V_MIN > :CRTSOLICR.SOLICR_PERGRA)    THEN   
    //      LIB$DTNERFRMA('EL MÍNIMO PERIODO DE GRACIA ES DE '||V_MIN ||' DÍAS. ' );      
    //   END IF;
    //   
    //   IF  (V_MAX < :CRTSOLICR.SOLICR_PERGRA)    THEN   
    //      LIB$DTNERFRMA('EL MÁXIMO PERIODO DE GRACIA ES DE '||V_MAX ||' DÍAS. ' );      
    //   END IF;
    //   
    //   /*
    //   AUTOR:   GEXNOVA SAS.
    //   FECHA:  27/06/2019.
    //   PROYECTO: PERIODOS MUERTOS 56949;
    //   MOTIVO:  * SE LLAMA EL PROGRAM UNIT VALIDA_PERI_MUE_GRA_ADECIAL  ENVIANDO 
    //               LA VARIABLE "PG" PARA IDENTIFICAR DE DONDE SE HACE EL LLAMADO.            
    //             * ACTUALIZADO EL 19.09.2019
    //  */
    //   PUP_VALIDA_PMUERTO_ADECIAL ('PG');
    //  -- GEXNOVA PERIDOS MUERTOS 56949.
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPergra_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPergra_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MIN: number = null;
        let V_MAX: number = null;
        // V_MIN = FBD_VALCAMPO("MIN", 14);
        // V_MAX = FBD_VALCAMPO("MAX", 14);
        // if (V_MIN > CRTSOLICR.SOLICR_PERGRA) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÍNIMO PERIODO DE GRACIA ES DE " + V_MIN + " DÍAS. ");
        // }
        // if (V_MAX < CRTSOLICR.SOLICR_PERGRA) {
        //     // CRFADECIAL_LIB$DTNERFRMA("EL MÁXIMO PERIODO DE GRACIA ES DE " + V_MAX + " DÍAS. ");
        // }
        // CRFADECIAL_PUP_VALIDA_PMUERTO_ADECIAL("PG");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPergra_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*IF :CRTSOLICR.SOLICR_PERGRA <= 90   THEN
    //       :TXT_TOTPLAZO := :CRTSOLICR.SOLICR_PERGRA  +  :CRTSOLICR.SOLICR_PLAZO;
    //       --NEXT_ITEM;
    // ELSE 
    //      :TXT_TOTPLAZO := NULL;
    //      --NEXT_ITEM;
    // END IF;
    // */
    // 
    // /*
    //  AUTOR:    GEXNOVA.
    //  FECHA:    19.09.2019.
    //  PROYECTO: PERIODOS MUERTOS 56949.
    //  MOTIVO:   SE CLACULA EL PLAZO TOTAL DEL FLUJO.
    // */
    //  :CRTSOLICR.TXT_TOTPLAZO := NVL(:CRTSOLICR.SOLICR_PLAZO,0) + NVL(:CRTSOLICR.SOLICR_PERGRA,0) + NVL(:CRTSOLICR.SOLICR_PERMUE,0);
    // --GEXNOVA PERIODOS MUERTOS 56949. 
    // 
    // NEXT_ITEM; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPergra_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPergra_keyNextItem");
        // this.CRTSOLICR.TXT_TOTPLAZO = CRTSOLICR.SOLICR_PLAZO == null ? 0 : CRTSOLICR.SOLICR_PLAZO + CRTSOLICR.SOLICR_PERGRA == null ? 0 : CRTSOLICR.SOLICR_PERGRA + CRTSOLICR.SOLICR_PERMUE == null ? 0 : CRTSOLICR.SOLICR_PERMUE;
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPergra_keyNextItem");
    }

    //#region PLSQL
    // BEGIN IF :SOLICR_SUBCAT IS NOT NULL THEN
    //  BEGIN
    //  SELECT SUBCAT_DESCRI
    //    INTO :W_SUBCATEGORIAS
    //    FROM COTSUBCAT
    //   WHERE SUBCAT_CTPBIE = :CRTSOLICR.SOLICR_TIPBIE
    //     AND SUBCAT_CODIGO = :CRTSOLICR.SOLICR_SUBCAT
    //     AND SUBCAT_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     AND SUBCAT_ESTADO = 'A';
    //  EXCEPTION WHEN OTHERS THEN
    //   :W_SUBCATEGORIAS := NULL;
    //  END;
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrSubcat_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrSubcat_whenValidateItem");
        // if ((SOLICR_SUBCAT != null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("SOLICR_TIPBIE", this.CRTSOLICR.SOLICR_TIPBIE);
        //         payload1.set("SOLICR_SUBCAT", this.CRTSOLICR.SOLICR_SUBCAT);
        //         payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //         // call REST API
        //         const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrsubcat_whenvalidateitem_query1", payload1);
        //         // get values from result
        //         W_SUBCATEGORIAS = result1[0].get("W_SUBCATEGORIAS");
        //     } catch (ex) {

        //         this.CRTSOLICR.W_SUBCATEGORIAS = null;
        //     }

        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrSubcat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC2        VARCHAR2(100); 
    // BEGIN
    //    SELECT PROD_DESCRI
    //      INTO DESC2
    //      FROM CRTPRODCIA
    //     WHERE PROD_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //       AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // 
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_tipdescr_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_tipdescr_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC2: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_CODPRO", this.CRTSOLICR.SOLICR_CODPRO);
                payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_tipdescr_whenvalidateitem_query1", payload1);
                // get values from result
                DESC2 = result1[0].get("DESC2");
                if (result1 == null || result1.length == 0) {

                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_tipdescr_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    V_MIN     NUMBER;
    //    V_FNG         VARCHAR2(2);
    //    V_MINFNG         NUMBER;
    // 
    // BEGIN
    // 
    //   --+PY27126. JDG. 2018.08.01.
    //  PUP_CONTROL_BOTONES_X_UNIDAD( 'CRTSOLICR.SOLICR_TASA', 'UPDATE' );
    //  --+
    // 
    //   IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //      :CRTSOLICR.SOLICR_TASA > 0
    //   THEN
    //     IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_TDOLAR IS NOT NULL OR
    //        :CRTSOLICR.SOLICR_PTOUS$ IS NOT NULL
    //     THEN
    //        LIB$ALERTA('MENSAJE','EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ',NULL,NULL,NULL, T_RESPUESTA);
    //        :CRTSOLICR.SOLICR_TASA := NULL;
    //     END IF;
    //   END IF;
    // 
    //   --VALIDACION COMERCIAL
    //   V_MIN    :=  FBD_VALCAMPO('MIN',12);   
    //  V_MINFNG :=  FBD_VALCAMPO('MIN',10);
    //  
    //  IF :CRTSOLICR.SOLICR_TASA <    V_MIN    THEN  
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MENORES AL '||V_MIN ||'%  DE ACUERDO A LO PARAMETRIZADO POR LA GERENCIA COMERCIAL POR FAVOR VALIDAR.');  
    //  END IF; 
    //   
    // 
    //   --VALIDACION FNG
    //  BEGIN
    //   SELECT SOLICR_FNG
    //   INTO V_FNG
    //   FROM CRTSOLICR 
    //   WHERE  SOLICR_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //     AND  SOLICR_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //     AND SOLICR_CODUNI =:CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //     ;
    //   
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_FNG := NULL;
    //  END;
    // 
    //   IF V_FNG IS NOT NULL THEN    
    //    IF :CRTSOLICR.SOLICR_TASA <    V_MINFNG    THEN  
    //      LIB$DTNERFRMA('NO SE PERMITEN CAMBIOS MENORES AL '||V_MINFNG ||'%   POR FAVOR VALIDAR.');  
    //    END IF; 
    //    
    //   END IF; 
    // 
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTasa_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTasa_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_MIN: number = null;
        let V_FNG: string = null;
        let V_MINFNG: number = null;
        // CRFADECIAL_PUP_CONTROL_BOTONES_X_UNIDAD("CRTSOLICR.SOLICR_TASA", "UPDATE");
        if (((this.CRTSOLICR.SOLICR_TASA != null) && this.CRTSOLICR.SOLICR_TASA > 0)) {
            if (((((this.CRTSOLICR.SOLICR_TPESOS != null) || (this.CRTSOLICR.SOLICR_PUNTS$ != null)) || (this.CRTSOLICR.SOLICR_TDOLAR != null)) || (this.CRTSOLICR.SOLICR_PTOUS$ != null))) {
                // CRFADECIAL_LIB$ALERTA("MENSAJE", "EXISTEN DATOS DE TASA VARIABLE. SI DESEA REGISTRAR UNA TASA FIJA, PRIMERO BORRE LOS DATOS DE TASA VARIABLE ", null, null, null, T_RESPUESTA);
                this.CRTSOLICR.SOLICR_TASA = null;
            }
        }
        // V_MIN = FBD_VALCAMPO("MIN", 12);
        // V_MINFNG = FBD_VALCAMPO("MIN", 10);
        if (this.CRTSOLICR.SOLICR_TASA < V_MIN) {
            // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MENORES AL " + V_MIN + "%  DE ACUERDO A LO PARAMETRIZADO POR LA GERENCIA COMERCIAL POR FAVOR VALIDAR.");
        }
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrtasa_whenvalidateitem_query1", payload1);
        // get values from result
        V_FNG = result1[0].get("V_FNG");
        if (result1 == null || result1.length == 0) {

            V_FNG = null;
        }

        if ((V_FNG != null)) {
            if (this.CRTSOLICR.SOLICR_TASA < V_MINFNG) {
                // CRFADECIAL_LIB$DTNERFRMA("NO SE PERMITEN CAMBIOS MENORES AL " + V_MINFNG + "%   POR FAVOR VALIDAR.");
            }
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrTasa_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   
    //   --+PY27126. JDG. 2018.08.01.
    //     /*IF :CRTSOLICR.SOLICR_TASA IS NOT NULL AND
    //        :CRTSOLICR.SOLICR_TASA > 0
    //     THEN
    // 
    //       -- SECCION 1: DESACTIVAR CAMPOS DE TASA VARIABLE
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,"ATTR_OFF");
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,"ATTR_OFF");
    // 
    //     ELSE
    // 
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TPESOS',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PUNTS$',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_TDOLAR',ENTERABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',UPDATEABLE,ATTR_ON);
    //       SET_FIELD('CRTSOLICR.SOLICR_PTOUS$',ENTERABLE,ATTR_ON);
    // 
    //     END IF;*/
    //     --+
    // 
    //     -- SECCION 2: FUNCIÓN DE AUDITORÍA EN CASO DE REGISTRARSE UN CAMBIO.
    //     :GLOBAL.VALOR_NUEVO := NAME_IN('SYSTEM.CURSOR_VALUE');
    // 
    //     IF :GLOBAL.VALOR_NUEVO <> :GLOBAL.VALOR_ANTERIOR
    //     THEN
    //        FRM$AUDIT_SOLIC_ADD_ROW (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL, 
    //                                 SUBSTR(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, '.')+1), 
    //                   :GLOBAL.VALOR_ANTERIOR, :GLOBAL.VALOR_NUEVO);
    //     END IF;
    //     
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTasa_postTextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTasa_postTextItem");
        // this.GLOBAL.VALOR_NUEVO = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        // if (GLOBAL.VALOR_NUEVO != GLOBAL.VALOR_ANTERIOR) {
        //     // CRFADECIAL_FRM$AUDIT_SOLIC_ADD_ROW(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, PLSQLBuiltins.substr(SYSTEM.CURSOR_ITEM, INSTR(SYSTEM.CURSOR_ITEM, ".") + 1), GLOBAL.VALOR_ANTERIOR, GLOBAL.VALOR_NUEVO);
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrTasa_postTextItem");
    }

    //#region PLSQL
    // BEGIN --+PY27126. JDG. 2018.08.01.
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTE           NUMBER;
    //    
    // BEGIN
    // 
    //     GO_ITEM( 'CRTSOLICR.SOLICR_PERGRA' );
    //     
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFADECIAL.CRTSOLICR.SOLICR_TASA.KEY-NEXT-ITEM'
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    // --+; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTasa_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTasa_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTE: number = null;
        try {

            this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_TASA.KEY-NEXT-ITEM" + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
                // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrTasa_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTSOLICR.SOLICR_FNG IS NOT NULL THEN 
    //     SET_ITEM_PROPERTY('CRTSOLICR.SOLICR_FINAGR',ENABLED, "PROPERTY_FALSE");
    //     :CRTSOLICR.SOLICR_FINAGR := NULL;
    //   IF :CRTSOLICR.SOLICR_FNG  <> 'X' THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrFng_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrFng_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((CRTSOLICR.SOLICR_FNG != null)) {
        //     this.oracleFormsBuiltins.set_item_property("CRTSOLICR.SOLICR_FINAGR", "ENABLED", "PROPERTY_FALSE");
        //     this.CRTSOLICR.SOLICR_FINAGR = null;
        //     if (CRTSOLICR.SOLICR_FNG != "X") {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA... DIGITE : X PARA SELECCIONAR .............", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        // }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrFng_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT UVPCRS_DESCRI
    //    INTO :CRTSOLICR.DESCRI_CODCDR 
    //     FROM COTUVPCRS
    //    WHERE UVPCRS_CODIGO = :CRTSOLICR.SOLICR_CODCDR; 
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :CRTSOLICR.DESCRI_CODCDR := NULL;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrCodcdr_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrCodcdr_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_CODCDR", this.CRTSOLICR.SOLICR_CODCDR);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrcodcdr_postchange_query1", payload1);
            // get values from result
            // CRTSOLICR.DESCRI_CODCDR = result1[0].get("CRTSOLICR.DESCRI_CODCDR");
        } catch (ex) {

            this.CRTSOLICR.DESCRI_CODCDR = null;
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrCodcdr_postChange");
    }

    //#region PLSQL
    // DECLARE
    //  
    //  V_CANTPRREF   NUMBER;
    //   V_ORIGEN      OPS$COLOCA.CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //  V_PROD        CRTSOLICR.SOLICR_CODPRO%TYPE;
    //     
    // BEGIN 
    // 
    //     BEGIN
    //      SELECT PROD_CODIGO 
    //        INTO V_PROD
    //     FROM CRTPRODCIA
    //     WHERE PROD_PRODRFP = 'S'
    //       AND PROD_CODIGO NOT IN ('ACC','FVZ')
    //       AND PROD_CODIGO = :CRTSOLICR.SOLICR_CODPRO
    //       AND PROD_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //       ;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //       V_PROD := 'XXX';
    //     END;   
    // 
    //   IF :CRTSOLICR.REF_PROVEEDOR IS NULL OR :CRTSOLICR.REF_PROV_ASE IS NULL THEN
    //      LIB$DTNERFRMA('POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.');    
    //   END IF; 
    //   
    // 
    //     --VALIDACION PROVEEDORES REFERIDOS 
    //     ------------------------------------------------------------ 
    //     IF NVL(:CRTSOLICR.SOLICR_CODPRO,NULL) = V_PROD OR :P_SELECCIONTIPO = 2 THEN
    //      
    //         BEGIN
    //         SELECT REFPRV_ORIGEN
    //           INTO  V_ORIGEN
    //        FROM OPS$COLOCA.CRTREFPRV 
    //        WHERE REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //          AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //          AND REFPRV_CODUNI = :CRTSOLICR.SOLICR_CODUNI --ARQUITECTURA
    //          ;
    //       EXCEPTION WHEN NO_DATA_FOUND THEN  
    //          V_ORIGEN := 'N';
    //       END;
    //       
    //       IF V_ORIGEN <> 'R' THEN
    //           IF :CRTSOLICR.REF_PROV_ASE IS NULL OR :CRTSOLICR.REF_PROVEEDOR IS NULL THEN
    //               LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.');
    //           ELSE 
    //              PUP_INSERT_REF_PROVEEDOR (:CRTSOLICR.REF_PROVEEDOR, :CRTSOLICR.REF_PROV_ASE);
    //           END IF;
    //       END IF;
    //       
    //    ELSIF :CRTSOLICR.SOLICR_CODPRO = 'ACC' THEN
    //        
    //            IF :CRTSOLICR.REF_PROV_ASE IS NULL OR :CRTSOLICR.REF_PROVEEDOR IS NULL THEN
    //               LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.');
    //           ELSE 
    //              PUP_INSERT_REF_PROVEEDOR (:CRTSOLICR.REF_PROVEEDOR, :CRTSOLICR.REF_PROV_ASE);
    //           END IF;
    //           
    //            ELSIF  :CRTSOLICR.SOLICR_CODPRO = 'FVZ' THEN
    //             
    //            IF :CRTSOLICR.REF_PROV_ASE IS NULL OR :CRTSOLICR.REF_PROVEEDOR IS NULL THEN
    //               LIB$DTNERFRMA('POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.');
    //           ELSE 
    //              PUP_INSERT_REF_PROVEEDOR (:CRTSOLICR.REF_PROVEEDOR, :CRTSOLICR.REF_PROV_ASE);
    //           END IF; 
    //           
    //     END IF;   
    //     -----------------------------------------------------------
    // 
    //   HIDE_VIEW('PROVEE_REF');
    //   GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    //   
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_aplicarref_whenButtonPressed() {
        console.log("Entering CRFADECIAL_crtsolicr_aplicarref_whenButtonPressed");
        let V_CANTPRREF: number = null;
        let V_ORIGEN: string = null;
        let V_PROD: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_CODPRO", this.CRTSOLICR.SOLICR_CODPRO);
        payload1.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_aplicarref_whenbuttonpressed_query1", payload1);
        // get values from result
        V_PROD = result1[0].get("V_PROD");
        if (result1 == null || result1.length == 0) {

            V_PROD = "XXX";
        }

        // if (((CRTSOLICR.REF_PROVEEDOR == null) || (CRTSOLICR.REF_PROV_ASE == null))) {
        //     // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL REFERIDO CORRESPONDIENTE.");
        // }
        // if ((CRTSOLICR.SOLICR_CODPRO == null ? null : CRTSOLICR.SOLICR_CODPRO == V_PROD || P_SELECCIONTIPO == 2)) {
        //     // construct payload
        //     let payload2 = new Map();
        //     payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        //     payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        //     payload2.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
        //     // call REST API
        //     const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_aplicarref_whenbuttonpressed_query2", payload2);
        //     // get values from result
        //     V_ORIGEN = result2[0].get("V_ORIGEN");
        //     if (result2 == null || result2.length == 0) {

        //         V_ORIGEN = "N";
        //     }

        //     if (V_ORIGEN != "R") {
        //         if (((CRTSOLICR.REF_PROV_ASE == null) || (CRTSOLICR.REF_PROVEEDOR == null))) {
        //             // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.");
        //         }
        //         else {
        //             // CRFADECIAL_PUP_INSERT_REF_PROVEEDOR(CRTSOLICR.REF_PROVEEDOR, this.CRTSOLICR.REF_PROV_ASE);
        //         }
        //     }
        // }
        // else if (CRTSOLICR.SOLICR_CODPRO == "ACC") {
        //     if (((CRTSOLICR.REF_PROV_ASE == null) || (CRTSOLICR.REF_PROVEEDOR == null))) {
        //         // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.");
        //     }
        //     else {
        //         // CRFADECIAL_PUP_INSERT_REF_PROVEEDOR(CRTSOLICR.REF_PROVEEDOR, this.CRTSOLICR.REF_PROV_ASE);
        //     }
        // }
        // else if (CRTSOLICR.SOLICR_CODPRO == "FVZ") {
        //     if (((CRTSOLICR.REF_PROV_ASE == null) || (CRTSOLICR.REF_PROVEEDOR == null))) {
        //         // CRFADECIAL_LIB$DTNERFRMA("POR FAVOR INGRESAR EL PROVEEDOR REFERIDO.");
        //     }
        //     else {
        //         // CRFADECIAL_PUP_INSERT_REF_PROVEEDOR(CRTSOLICR.REF_PROVEEDOR, this.CRTSOLICR.REF_PROV_ASE);
        //     }
        // }
        this.oracleFormsBuiltins.hide_view("PROVEE_REF");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        console.log("Exiting CRFADECIAL_crtsolicr_aplicarref_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN 
    // 
    //   IF :CRTSOLICR.REF_PROVEEDOR IS NULL OR :CRTSOLICR.REF_PROV_ASE IS NULL THEN
    //       LIB$ALERTA('MENSAJE','DEBE SELECCIONAR EL PROVEEDOR O EL ASESOR CORRESPONDIENTE ',NULL,NULL,NULL,T_RESPUESTA);
    //      :CRTSOLICR.SOLICR_CODPRO := NULL; 
    //      :CRTSOLICR.TIPDESCR := NULL;    
    //   END IF; 
    //   
    //   HIDE_VIEW('PROVEE_REF');
    //   GO_ITEM('CRTSOLICR.SOLICR_PLAZO');
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_cerrarref_whenButtonPressed() {
        console.log("Entering CRFADECIAL_crtsolicr_cerrarref_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (((this.CRTSOLICR.REF_PROVEEDOR == null) || (this.CRTSOLICR.REF_PROV_ASE == null))) {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "DEBE SELECCIONAR EL PROVEEDOR O EL ASESOR CORRESPONDIENTE ", null, null, null, T_RESPUESTA);
            this.CRTSOLICR.SOLICR_CODPRO = null;
            this.CRTSOLICR.TIPDESCR = null;
        }
        this.oracleFormsBuiltins.hide_view("PROVEE_REF");
        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PLAZO");
        console.log("Exiting CRFADECIAL_crtsolicr_cerrarref_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_INTVEN IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TINDES
    //      INTO DESC1
    //      FROM TIN
    //     WHERE TINCOD=:CRTSOLICR.SOLICR_INTVEN;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END  IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrIntven_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrIntven_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_INTVEN != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("SOLICR_INTVEN", this.CRTSOLICR.SOLICR_INTVEN);
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrintven_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrIntven_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.SOLICR_ORMONUS$ IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT ORMDES
    //      INTO DESC1
    //      FROM ORM
    //     WHERE ORMCOD=:CRTSOLICR.SOLICR_ORMONUS$;
    //  EXCEPTION
    //   WHEN OTHERS THEN
    //    LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrOrmonus$_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrOrmonus$_whenValidateItem");
        if ((this.CRTSOLICR.SOLICR_ORMONUS$ != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    payload1.set("SOLICR_ORMONUS$", this.CRTSOLICR.SOLICR_ORMONUS$);
                    // call REST API
                    const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrormonus$_whenvalidateitem_query1", payload1);
                    // get values from result
                    DESC1 = result1[0].get("DESC1");
                } catch (ex) {

                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrOrmonus$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN /*DECLARE---PETICIÓN DE MARCELA CORTES PARA QUE NO REALICE NINGÚN TIPO DE VALIDACIÓN LDB-JULIO 30-2002
    // 
    //    T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    // 
    // IF :CRTSOLICR.SOLICR_PDSCTO IS NOT NULL AND
    //    :CRTSOLICR.SOLICR_PDSCTO < 0
    // THEN
    //       LIB$ALERTA('MENSAJE', 'EL NUEVO PORCENTAJE DE DESCUENTO NO DEBE SER MENOR QUE CERO '||:GLOBAL.VALOR_ANTERIOR, NULL,NULL,NULL, T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PDSCTO := :GLOBAL.VALOR_ANTERIOR;
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // IF :CRTSOLICR.SOLICR_PDSCTO  >  :GLOBAL.VALOR_ANTERIOR
    // THEN
    //       LIB$ALERTA('MENSAJE','EL NUEVO PORCENTAJE DE DESCUENTO DEBE SER MENOR QUE EL VALOR ANTERIOR. REVISE EL PORCENTAJE '||:GLOBAL.VALOR_ANTERIOR,NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTSOLICR.SOLICR_PDSCTO := TO_NUMBER(NVL(:GLOBAL.VALOR_ANTERIOR, 0));
    //       RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // 
    // END;*/
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPdscto_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPdscto_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPdscto_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTSOLICR.W_CODIGOASESOR IS NOT NULL THEN
    //  
    //   BEGIN
    //    SELECT CONTPR_CORREO
    //      INTO :CRTSOLICR.W_CORREOASESOR
    //    FROM COTCONTPR 
    //    WHERE CONTPR_CODPRO = '860034313'
    //    AND CONTPR_CODCNT = :CRTSOLICR.W_CODIGOASESOR
    //    AND ROWNUM = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    :CRTSOLICR.W_CORREOASESOR := NULL;   
    //   END;
    //   
    // END IF; END;
    //#endregion
    async CRFADECIAL_crtsolicr_wCorreoasesor_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtsolicr_wCorreoasesor_whenNewItemInstance");
        if ((this.CRTSOLICR.W_CODIGOASESOR != null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("W_CODIGOASESOR", this.CRTSOLICR.W_CODIGOASESOR);
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_wcorreoasesor_whennewiteminstance_query1", payload1);
                // get values from result
                this.CRTSOLICR.W_CORREOASESOR = result1[0].get("CRTSOLICR.W_CORREOASESOR");
            } catch (ex) {

                this.CRTSOLICR.W_CORREOASESOR = null;
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_wCorreoasesor_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //  
    //  --+PY27126. JDG. 2018.08.01.
    //   PUP_CONTROL_BOTONES_X_UNIDAD( 'CRTSOLICR.SOLICR_TPESOS', 'UPDATE' );
    //   --+
    //  
    //  IF :CRTSOLICR.SOLICR_TPESOS IS NOT NULL THEN
    //    BEGIN
    //      SELECT TINDES
    //       INTO DESC1
    //      FROM TIN
    //      WHERE TINCOD=:CRTSOLICR.SOLICR_TPESOS;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //      LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //    END; 
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTpesos_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTpesos_whenValidateItem");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        // CRFADECIAL_PUP_CONTROL_BOTONES_X_UNIDAD("CRTSOLICR.SOLICR_TPESOS", "UPDATE");
        if ((this.CRTSOLICR.SOLICR_TPESOS != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_TPESOS", this.CRTSOLICR.SOLICR_TPESOS);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrtpesos_whenvalidateitem_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrTpesos_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY27126. JDG. 2018.08.01.
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTE           NUMBER;
    //    
    // BEGIN
    //      
    //     IF :CRTSOLICR.SOLICR_TPESOS = 'DA5' THEN
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_PUNT$N' );
    //       
    //     ELSE
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_PUNTS$' );  
    //       
    //     END IF; 
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFADECIAL.CRTSOLICR.SOLICR_TPESOS.KEY-NEXT-ITEM'
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    // --+; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrTpesos_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrTpesos_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTE: number = null;
        try {

            if (this.CRTSOLICR.SOLICR_TPESOS == "DA5") {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PUNT$N");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PUNTS$");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_TPESOS.KEY-NEXT-ITEM" + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
                // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrTpesos_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_TASA      CRTTOPSOL.TOPSOL_VLRTOP%TYPE;
    //  V_DTF       INE.INEVAL%TYPE;
    //  V_DEF       INE.INEVAL%TYPE;
    //  V_TASATA    INE.INEVAL%TYPE;
    //  V_TASAEF    INE.INEVAL%TYPE;
    //  V_TASAEFT   INE.INEVAL%TYPE;
    //  
    // BEGIN
    //  
    //  --+PY27126. JDG. 2018.08.01.
    //   IF :CRTSOLICR.SOLICR_TPESOS = 'DA5' OR :CRTSOLICR.SOLICR_TDOLAR = 'DA5' THEN
    //    
    //    BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DA5';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //   ELSE  
    //   --+ 
    //   
    //    BEGIN
    //     SELECT INEVAL
    //      INTO V_DTF
    //      FROM INE
    //      WHERE  INEFEC=TRUNC(SYSDATE)
    //      AND INEIND = 'DTF';
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR');
    //    END;
    //    
    //  --+PY27126. JDG. 2018.08.01.
    //  END IF;
    //  --+  
    // 
    //   BEGIN
    //    SELECT INEVAL
    //     INTO V_DEF
    //     FROM INE
    //     WHERE  INEFEC=TRUNC(SYSDATE)
    //     AND INEIND = 'DEF';
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$DTNERFRMA('NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR');
    //   END;
    // 
    //   IF :CRTSOLICR.SOLICR_CODPRO NOT IN ('DAD','LNE') THEN
    //      IF :CRTSOLICR.SOLICR_INDRED = 'N' THEN
    //          IF :CRTSOLICR.SOLICR_PUNTS$ IS NOT NULL THEN
    //             --BUSCA LOS PUNTOS AUTORIZADOS 
    //            BEGIN
    //              SELECT TOPSOL_VLRTOP
    //                INTO V_TASA
    //                FROM CRTTOPSOL
    //               WHERE TOPSOL_CODIGO = '04'
    //               --+PY27126. JDG. 2018.08.01. ARQUITECTURA
    //                 AND TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //               --+
    //               ;
    //            EXCEPTION 
    //              WHEN NO_DATA_FOUND THEN
    //              LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADA. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //              RAISE FORM_TRIGGER_FAILURE;
    //            END;
    //      
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_PUNTS$ <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //   END IF;
    //   
    //   --LCBY:10791 -- TASAS PARA REDESCUENTO FINAGRO.
    //   --BUSCA LOS PUNTOS AUTORIZADOS SI ES REDESCUENTO FINAGRO.
    //    IF :CRTSOLICR.SOLICR_INDRED = 'S' THEN
    //     
    //          IF :CRTSOLICR.SOLICR_FINAGP IS NOT NULL THEN 
    //          
    //           BEGIN
    //               SELECT TOPSOL_VLRTOP
    //                 INTO V_TASA
    //                 FROM CRTTOPSOL
    //                WHERE TOPSOL_CODIGO = '06'
    //                  --+PY27126. JDG. 2018.08.01. ARQUITECTURA
    //                   AND TOPSOL_CODUNI = :CRTSOLICR.SOLICR_CODUNI
    //                   --+
    //                  ;
    //             EXCEPTION 
    //               WHEN NO_DATA_FOUND THEN
    //                LIB$ALERTA('MENSAJE','NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINAGRO. FAVOR REGISTRARLOS ...',NULL,NULL,NULL,T_RESPUESTA);
    //                RAISE FORM_TRIGGER_FAILURE;
    //             END;
    //     
    //          
    //            --HACE CONVERSIÓN DE TASAS + PUNTOS PARAMETRIZADOS
    //      
    //            V_TASATA :=NVL(V_DTF,0) + NVL(V_TASA,0);
    //            V_TASAEF :=(FBD_COL_TASAEF((V_TASATA/100),-4)*100);
    //            V_TASAEFT := NVL(V_TASAEF,0)-NVL(V_DEF,0);
    //            
    //            IF :SOLICR_PUNTS$ <= V_TASAEFT THEN
    //               LIB$ALERTA('MENSAJE','EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES ' ||TO_CHAR(V_TASAEFT)||' FAVOR REVISAR ...',NULL,NULL,NULL,T_RESPUESTA); 
    //               RAISE FORM_TRIGGER_FAILURE;
    //            END IF;
    //      END IF;
    //    END IF;
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPunts$_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPunts$_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_TASA: string = null;
        let V_DTF: string = null;
        let V_DEF: string = null;
        let V_TASATA: string = null;
        let V_TASAEF: string = null;
        let V_TASAEFT: string = null;
        if ((this.CRTSOLICR.SOLICR_TPESOS == "DA5" || this.CRTSOLICR.SOLICR_TDOLAR == "DA5")) {
            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrpunts$_whenvalidateitem_query1", payload1);
            // get values from result
            V_DTF = result1[0].get("V_DTF");
            if (result1 == null || result1.length == 0) {

                // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE DA5 PARA LA SEMANA. FAVOR VERIFICAR");
            }

        }
        else {
            // construct payload
            let payload2 = new Map();
            // call REST API
            const result2 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrpunts$_whenvalidateitem_query2", payload2);
            // get values from result
            V_DTF = result2[0].get("V_DTF");
            if (result2 == null || result2.length == 0) {

                // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DTF PARA LA SEMANA. FAVOR VERIFICAR");
            }

        }
        // construct payload
        let payload3 = new Map();
        // call REST API
        const result3 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrpunts$_whenvalidateitem_query3", payload3);
        // get values from result
        V_DEF = result3[0].get("V_DEF");
        if (result3 == null || result3.length == 0) {

            // CRFADECIAL_LIB$DTNERFRMA("NO ESTA REGISTRADO EL VALOR DE LA DEF PARA LA SEMANA. FAVOR VERIFICAR");
        }

        if (["DAD", "LNE"].indexOf(this.CRTSOLICR.SOLICR_CODPRO) != -1) {
            if (this.CRTSOLICR.SOLICR_INDRED == "N") {
                if ((this.CRTSOLICR.SOLICR_PUNTS$ != null)) {
                    // construct payload
                    let payload4 = new Map();
                    payload4.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result4 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrpunts$_whenvalidateitem_query4", payload4);
                    // get values from result
                    V_TASA = result4[0].get("V_TASA");
                    if (result4 == null || result4.length == 0) {

                        // CRFADECIAL_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADA. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                    // V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
                    // V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
                    // V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
                    // if (SOLICR_PUNTS <= V_TASAEFT) {
                    //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
                    //     console.log("FORM_TRIGGER_FAILURE");
                    //     throw new Error('FORM_TRIGGER_FAILURE');
                    // }
                }
            }
            if (this.CRTSOLICR.SOLICR_INDRED == "S") {
                if ((this.CRTSOLICR.SOLICR_FINAGP != null)) {
                    // construct payload
                    let payload5 = new Map();
                    payload5.set("SOLICR_CODUNI", this.CRTSOLICR.SOLICR_CODUNI);
                    // call REST API
                    const result5 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrpunts$_whenvalidateitem_query5", payload5);
                    // get values from result
                    V_TASA = result5[0].get("V_TASA");
                    if (result5 == null || result5.length == 0) {

                        // CRFADECIAL_LIB$ALERTA("MENSAJE", "NO EXISTEN PUNTOS PARA SPREAD PARAMETRIZADO PARA REDESCUENTO FINAGRO. FAVOR REGISTRARLOS ...", null, null, null, T_RESPUESTA);
                        console.log("FORM_TRIGGER_FAILURE");
                        throw new Error('FORM_TRIGGER_FAILURE');
                    }

                    // V_TASATA = V_DTF == null ? 0 : V_DTF + V_TASA == null ? 0 : V_TASA;
                    // V_TASAEF = FBD_COL_TASAEF(V_TASATA / 100, 4) * 100;
                    // V_TASAEFT = V_TASAEF == null ? 0 : V_TASAEF - V_DEF == null ? 0 : V_DEF;
                    // if (SOLICR_PUNTS <= V_TASAEFT) {
                    //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL VALOR DEL SPREAD DE REDESCUENTO ES MENOR AL AUTORIZADO.EL AUTORIZADO PARA LA SEMANA ES " + V_TASAEFT.toString() + " FAVOR REVISAR ...", null, null, null, T_RESPUESTA);
                    //     console.log("FORM_TRIGGER_FAILURE");
                    //     throw new Error('FORM_TRIGGER_FAILURE');
                    // }
                }
            }
        }
        console.log("Exiting CRFADECIAL_crtsolicr_solicrPunts$_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --+PY27126. JDG. 2018.08.01.
    // DECLARE
    // 
    //     T_RESPUESTA          NUMBER; 
    //     V_MENSAJE           VARCHAR2( 500 );
    //     V_EXISTE           NUMBER;
    //    
    // BEGIN
    //      
    //     IF :CRTSOLICR.SOLICR_TPESOS = 'DA5' THEN
    //      
    //       GO_ITEM( 'CRTSOLICR.SOLICR_PUNT$N' );
    //       
    //     ELSE
    //      
    //      GO_ITEM( 'CRTSOLICR.SOLICR_PERGRA' );
    //       
    //     END IF; 
    //                  
    // EXCEPTION 
    //   
    //   WHEN OTHERS THEN
    //   
    //         IF ( ERROR_CODE  <> 0 ) THEN
    //           
    //        V_MENSAJE := 'FALLO. '
    //                     || 'CRFADECIAL.CRTSOLICR.SOLICR_PUNTS$.KEY-NEXT-ITEM'
    //                     || 'ERROR SQLCODE ' || SQLCODE || '. ' 
    //                     || 'SQLERRM ' || SQLERRM;
    //                     
    //           PBD_SEG_MSGERR( 'CRFADECIAL', V_MENSAJE );                   
    //                     
    //         LIB$ALERTA( 'MENSAJE', V_MENSAJE, 'ACEPTAR', NULL, NULL, T_RESPUESTA );     
    //         
    //      END IF;   
    //                  
    // END;
    // --+; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrPunts$_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrPunts$_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_MENSAJE: string = null;
        let V_EXISTE: number = null;
        try {

            if (this.CRTSOLICR.SOLICR_TPESOS == "DA5") {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PUNT$N");
            }
            else {
                this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_PERGRA");
            }
        } catch (ex) {

            if (this.oracleFormsBuiltins.error_code() != 0) {
                // V_MENSAJE = "FALLO. " + "CRFADECIAL.CRTSOLICR.SOLICR_PUNTS$.KEY-NEXT-ITEM" + "ERROR SQLCODE " + SQLCODE + ". " + "SQLERRM " + SQLERRM;
                // CRFADECIAL_PBD_SEG_MSGERR("CRFADECIAL", V_MENSAJE);
                // CRFADECIAL_LIB$ALERTA("MENSAJE", V_MENSAJE, "ACEPTAR", null, null, T_RESPUESTA);
            }
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrPunts$_keyNextItem");
    }

    //#region PLSQL
    // BEGIN /*
    //  --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    // 
    // IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'CRTSOLICR2';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;
    // 
    // 
    //  EXCEPTION
    //  WHEN OTHERS THEN
    //    
    //    RAISE FORM_TRIGGER_FAILURE; 
    //          
    // END;*/
    // 
    // NULL; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrEstrat_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrEstrat_whenValidateItem");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrEstrat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --MESSAGE (GET_ITEM_PROPERTY ('COTUVPCCV.UVPCCV_TERCOP',LOV_NAME));
    // --NULL;
    // LISTAS_ESTRATEGIAS; END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrEstrat_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrEstrat_whenNewItemInstance");
        // CRFADECIAL_LISTAS_ESTRATEGIAS();
        console.log("Exiting CRFADECIAL_crtsolicr_solicrEstrat_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT UVPEGA_DESCRI 
    // INTO :CRTSOLICR.DESCRI_ESTRAT
    // FROM COTUVPEGA  
    // WHERE  UVPEGA_CODIGO = :CRTSOLICR.SOLICR_ESTRAT;
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  :CRTSOLICR.DESCRI_ESTRAT := NULL;
    // END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrEstrat_postChange() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrEstrat_postChange");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_ESTRAT", this.CRTSOLICR.SOLICR_ESTRAT);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtsolicr/crfadecial_crtsolicr_solicrestrat_postchange_query1", payload1);
            // get values from result
            this.CRTSOLICR.DESCRI_ESTRAT = result1[0].get("CRTSOLICR.DESCRI_ESTRAT");
        } catch (ex) {

            this.CRTSOLICR.DESCRI_ESTRAT = null;
        }

        console.log("Exiting CRFADECIAL_crtsolicr_solicrEstrat_postChange");
    }

    //#region PLSQL
    // BEGIN --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    // BEGIN
    // 
    // 
    // IF :CRTSOLICR.SOLICR_CODUNI = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    //     
    //     V_PARAMETRO := 'CRTSOLICR2';
    //     PUP_VAL_ESTRATEGIA(V_PARAMETRO);
    //     
    //  END IF;
    // 
    // 
    //  EXCEPTION
    //  WHEN OTHERS THEN
    //    
    //    RAISE FORM_TRIGGER_FAILURE; 
    //          
    // END;
    //    
    // GO_ITEM ('CRTSOLICR.SOLICR_CODCDR'); END;
    //#endregion
    async CRFADECIAL_crtsolicr_solicrEstrat_keyNextItem() {
        console.log("Entering CRFADECIAL_crtsolicr_solicrEstrat_keyNextItem");
        {

            let V_RESPUESTA: number = null;
            let V_PARAMETRO: string = null;
            let result0 = new Map();
            try {

                if (this.CRTSOLICR.SOLICR_CODUNI == "005") {
                    V_PARAMETRO = "CRTSOLICR2";
                    // CRFADECIAL_PUP_VAL_ESTRATEGIA(V_PARAMETRO);
                }
            } catch (ex) {

                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }

        this.oracleFormsBuiltins.go_item("CRTSOLICR.SOLICR_CODCDR");
        console.log("Exiting CRFADECIAL_crtsolicr_solicrEstrat_keyNextItem");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtterext_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtterext_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtterext_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA NUMBER;
    // 
    // BEGIN
    // 
    //    INSERT INTO CRTOTERSOL 
    //           (OTERSOL_OFCSOL, OTERSOL_CODSOL, OTERSOL_TIPVIN, 
    //            OTERSOL_NITTER, OTERSOL_TIPPER, OTERSOL_TIPIDE)
    //    VALUES (:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL,'99',
    //            :CRTTEREXT.TEREXT_NIT, 'J' ,'NE');
    // 
    // EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','TERCERO NO ESTA CREADO .....',NULL, NULL, NULL, T_RESPUESTA);
    // END;
    //#endregion
    async CRFADECIAL_crtterext_postInsert() {
        console.log("Entering CRFADECIAL_crtterext_postInsert");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.SOLICR_OFCSOL = : CRTSOLICR.SOLICR_OFCSOL;
        // payload1.SOLICR_CODSOL = : CRTSOLICR.SOLICR_CODSOL;
        // payload1.TEREXT_NIT = : CRTTEREXT.TEREXT_NIT;
        // call REST API
        const result1 = await Rest.post("/crfadecial_crtterext/crfadecial_crtterext_postinsert_query1", payload1);
        if (result1 == null || result1.length == 0) {

            // CRFADECIAL_LIB$ALERTA("MENSAJE", "TERCERO NO ESTA CREADO .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFADECIAL_crtterext_postInsert");
    }

    //#region PLSQL
    // BEGIN :CRTTEREXT.TEREXT_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTTEREXT.TEREXT_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL; END;
    //#endregion
    async CRFADECIAL_crtterext_preQuery() {
        console.log("Entering CRFADECIAL_crtterext_preQuery");
        this.CRTTEREXT.TEREXT_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTTEREXT.TEREXT_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        console.log("Exiting CRFADECIAL_crtterext_preQuery");
    }

    //#region PLSQL
    // DECLARE
    // 
    //   T_RESPUESTA    NUMBER;
    //   DESC1          VARCHAR2(100); 
    // 
    // BEGIN
    // 
    //   IF :CRTTEREXT.TEREXT_CARCRED IS NOT NULL THEN 
    //   BEGIN
    //      SELECT  TDPCOD
    //        INTO  DESC1
    //        FROM  TDP
    //       WHERE  TDPCOD = :CRTTEREXT.TEREXT_CODPAIS;
    // 
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE', NULL, NULL, NULL, T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    // 
    //   END;
    // 
    //   END IF;
    // 
    //   :GLOBAL.VALOR_ANTERIOR:=:CRTTEREXT.TEREXT_CARCRED;
    // 
    // END; 
    //#endregion
    async CRFADECIAL_crtterext_preUpdate() {
        console.log("Entering CRFADECIAL_crtterext_preUpdate");
        let T_RESPUESTA: number = null;
        let DESC1: string = null;
        if ((this.CRTTEREXT.TEREXT_CARCRED != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("TEREXT_CODPAIS", this.CRTTEREXT.TEREXT_CODPAIS);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtterext/crfadecial_crtterext_preupdate_query1", payload1);
            // get values from result
            DESC1 = result1[0].get("DESC1");
            if (result1 == null || result1.length == 0) {

                // CRFADECIAL_LIB$ALERTA("MENSAJE", "CODIGO INEXISTENTE", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        // this.GLOBAL.VALOR_ANTERIOR = this.CRTTEREXT.TEREXT_CARCRED;
        console.log("Exiting CRFADECIAL_crtterext_preUpdate");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADECIAL_crtterext_whenNewBlockInstance() {
        console.log("Entering CRFADECIAL_crtterext_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADECIAL_crtterext_whenNewBlockInstance");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    V_NUEVO_NIT     NUMBER(13);
    // 
    // BEGIN
    // BEGIN 
    //   IF :CRTTEREXT.TEREXT_NIT IS NULL
    //   THEN
    //      BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(TEREXT_NIT)), 4444444444443) + 1
    //      INTO   V_NUEVO_NIT
    //      FROM   CRTTEREXT;
    //      
    //      :CRTTEREXT.TEREXT_NIT := TO_CHAR(V_NUEVO_NIT);
    // 
    //      EXCEPTION
    //         WHEN OTHERS THEN
    //           MESSAGE('FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL');
    //      END;
    //    END IF;
    // 
    //    :CRTTEREXT.TEREXT_TIPID  := 'NE';
    //    :CRTTEREXT.TEREXT_TIPPER := 'J';
    //    :CRTTEREXT.TEREXT_CODUNI := :CRTSOLICR.SOLICR_CODUNI;--CB: ARQUITECTURA
    // 
    // END;
    // END;
    //#endregion
    async CRFADECIAL_crtterext_preInsert() {
        console.log("Entering CRFADECIAL_crtterext_preInsert");
        let V_NUEVO_NIT: number = null;
        if ((this.CRTTEREXT.TEREXT_NIT == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtterext/crfadecial_crtterext_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_NIT = result1[0].get("V_NUEVO_NIT");
                this.CRTTEREXT.TEREXT_NIT = V_NUEVO_NIT.toString();
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL NIT DEL TERCERO INTERNACIONAL");
            }

        }
        this.CRTTEREXT.TEREXT_TIPID = "NE";
        this.CRTTEREXT.TEREXT_TIPPER = "J";
        this.CRTTEREXT.TEREXT_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        console.log("Exiting CRFADECIAL_crtterext_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA  NUMBER;
    //    V_PROVREF OPS$COLOCA.CRTREFPRV.REFPRV_CODPRV%TYPE;
    //    V_ORIGEN  OPS$COLOCA.CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //    V_HOMTERNAC NUMBER;
    //    VREG NUMBER; 
    //      
    // BEGIN
    // IF :CRTTEREXT.TEREXT_NIT IS NOT NULL THEN
    //    IF :CRTTEREXT.TEREXT_NOMCIA <> :GLOBAL.VALOR_ANTERIOR THEN
    //        LIB$ALERTA('MENSAJE','NO SE PUEDE CAMBIAR EL NOMBRE DE UN PROVEEDOR EXTRANJERO YA EXISTENTE',NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTTEREXT.TEREXT_NOMCIA := :GLOBAL.VALOR_ANTERIOR;
    //    END IF;
    // END IF;
    // 
    //  --VALIDACION PROVEEDORES REFERIDOS 
    //  ------------------------------------------------------------ 
    //   IF :CRTSOLICR.SOLICR_CODPRO = 'RFP'  AND :CRTSOLICR.SOLICR_LINEA = 'LI' THEN
    //    
    //   
    //        BEGIN
    //       SELECT REFPRV_CODPRV,REFPRV_ORIGEN
    //         INTO V_PROVREF, V_ORIGEN
    //      FROM OPS$COLOCA.CRTREFPRV 
    //      WHERE REFPRV_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //        AND REFPRV_CODSOL = :CRTSOLICR.SOLICR_CODSOL;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN  
    //        V_PROVREF := NULL;
    //        V_ORIGEN := NULL;
    //     END;
    //     
    //     BEGIN    
    //       SELECT REFPRV_CODPRV
    //         INTO V_HOMTERNAC
    //       FROM OPS$COLOCA.CRTREFPRV 
    //       WHERE REFPRV_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL
    //         AND REFPRV_CODSOL=:CRTSOLICR.SOLICR_CODSOL
    //         AND REFPRV_CODPRV IN (SELECT HOMEXT_PRVNAC
    //                               FROM OPS$COLOCA.CRTHOMEXT 
    //                               WHERE HOMEXT_PRVEXT = :CRTTEREXT.TEREXT_NIT);
    //     EXCEPTION WHEN NO_DATA_FOUND THEN  
    //          V_HOMTERNAC := NULL;
    //     END;                        
    //     
    //       VREG := TO_NUMBER(:SYSTEM.TRIGGER_RECORD);
    //       
    //       IF VREG = 1 THEN
    //          LIB$ALERTA('MENSAJE','RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO',NULL,NULL,NULL,T_RESPUESTA); 
    //         IF V_HOMTERNAC IS NULL  THEN 
    //           LIB$DTNERFRMA('LA HOMOLOGACION DEL TERCERO '||:CRTTEREXT.TEREXT_NIT||
    //                         ' NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO.'||V_PROVREF);
    //         ELSIF V_ORIGEN = 'R' THEN
    //           LIB$ALERTA('MENSAJE','LA SOLICITUD VIENE DE UNA RECONSIDERACION. VALIDE SI DEBE CAMBIAR EL TIPO DE PRODUCTO YA QUE EL PROVEEDOR NO ES EL REFERENCIADO ORIGINAL.', NULL, NULL, NULL, T_RESPUESTA);
    //          END IF;   
    //         END IF;
    //    
    //          
    //   END IF; 
    //  ------------------------------------------------------------ 
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtterext_terextNomcia_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtterext_terextNomcia_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PROVREF: string = null;
        let V_ORIGEN: string = null;
        let V_HOMTERNAC: number = null;
        let VREG: number = null;
        // if ((this.CRTTEREXT.TEREXT_NIT != null)) {
        //     if (this.CRTTEREXT.TEREXT_NOMCIA != GLOBAL.VALOR_ANTERIOR) {
        //         // CRFADECIAL_LIB$ALERTA("MENSAJE", "NO SE PUEDE CAMBIAR EL NOMBRE DE UN PROVEEDOR EXTRANJERO YA EXISTENTE", null, null, null, T_RESPUESTA);
        //         this.CRTTEREXT.TEREXT_NOMCIA = this.GLOBAL.VALOR_ANTERIOR;
        //     }
        // }
        if ((this.CRTSOLICR.SOLICR_CODPRO == "RFP" && this.CRTSOLICR.SOLICR_LINEA == "LI")) {
            // construct payload
            let payload1 = new Map();
            payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtterext/crfadecial_crtterext_terextnomcia_whenvalidateitem_query1", payload1);
            // get values from result
            V_PROVREF = result1[0].get("V_PROVREF");
            V_ORIGEN = result1[0].get("V_ORIGEN");
            if (result1 == null || result1.length == 0) {

                V_PROVREF = null;
                V_ORIGEN = null;
            }

            // construct payload
            let payload2 = new Map();
            payload2.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
            payload2.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfadecial_crtterext/crfadecial_crtterext_terextnomcia_whenvalidateitem_query2", payload2);
            // get values from result
            V_HOMTERNAC = result2[0].get("V_HOMTERNAC");
            if (result2 == null || result2.length == 0) {

                V_HOMTERNAC = null;
            }

            VREG = PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("TRIGGER_RECORD"));
            if (VREG == 1) {
                // CRFADECIAL_LIB$ALERTA("MENSAJE", "RECUERDE QUE DEBE INGRESAR PRIMERO EL PROVEEDOR REFERIDO", null, null, null, T_RESPUESTA);
                if ((V_HOMTERNAC == null)) {
                    // CRFADECIAL_LIB$DTNERFRMA("LA HOMOLOGACION DEL TERCERO " + CRTTEREXT.TEREXT_NIT + " NO ES EL MISMO QUE EL NIT DEL PROVEEDOR REFERENCIADO." + V_PROVREF);
                }
                else if (V_ORIGEN == "R") {
                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "LA SOLICITUD VIENE DE UNA RECONSIDERACION. VALIDE SI DEBE CAMBIAR EL TIPO DE PRODUCTO YA QUE EL PROVEEDOR NO ES EL REFERENCIADO ORIGINAL.", null, null, null, T_RESPUESTA);
                }
            }
        }
        console.log("Exiting CRFADECIAL_crtterext_terextNomcia_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtterext_terextNomcia_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtterext_terextNomcia_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtterext_terextNomcia_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON NUMBER;
    //  V_LIST BOOLEAN;
    // 
    // BEGIN
    // IF :TEREXT_NIT IS NULL THEN
    //  
    //   LIB$ALERTA('MENSAJE','PARA CREAR UN PROVEEDOR EXTRANJERO, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES',NULL, NULL, NULL, VBOTON); 
    // 
    //    V_LIST := SHOW_LOV('LOV263_NITEXT'); 
    // 
    // ELSE
    //   NEXT_ITEM;
    // END IF;
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtterext_terextNomcia_keyNextItem() {
        console.log("Entering CRFADECIAL_crtterext_terextNomcia_keyNextItem");
        let VBOTON: number = null;
        let V_LIST: boolean = null;
        // if ((TEREXT_NIT == null)) {
        //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "PARA CREAR UN PROVEEDOR EXTRANJERO, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, VBOTON);
        //     V_LIST = this.oracleFormsBuiltins.show_lov("LOV263_NITEXT");
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFADECIAL_crtterext_terextNomcia_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_NIT_EXTRANJERIA VARCHAR2 (2) := '11';
    // BEGIN 
    //  /* 
    //    AUTOR  : GEXNOVA
    //    FECHA  : 13.09.2018
    //    MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //  */
    //  PVALTER(:CRTTEREXT.TEREXT_NIT, V_NIT_EXTRANJERIA);
    // 
    // END;
    //#endregion
    async CRFADECIAL_crtterext_terextNit_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtterext_terextNit_whenValidateItem");
        let V_NIT_EXTRANJERIA: string = '11';
        // CRFADECIAL_PVALTER(CRTTEREXT.TEREXT_NIT, V_NIT_EXTRANJERIA);
        console.log("Exiting CRFADECIAL_crtterext_terextNit_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   W_TOTPOR    NUMBER;
    // BEGIN
    //  
    //   IF :CRTTEREXT.TEREXT_CARCRED IS NOT NULL THEN
    //       IF NVL(:CRTTEREXT.TEREXT_CARCRED, 0) > 100 THEN
    //          LIB$ALERTA('MENSAJE','EL PORCENTAJE DE OPCIÓN DE COMPRA NO DEBE SER EXCEDER EL 100%',NULL,NULL,NULL,T_RESPUESTA);
    //        
    //          RAISE FORM_TRIGGER_FAILURE;
    //       END IF;
    //       IF :CRTTEREXT.TEREXT_CARGDIR IS NOT NULL THEN
    //           W_TOTPOR := :CRTTEREXT.TEREXT_CARCRED + :CRTTEREXT.TEREXT_CARGDIR;
    //         IF W_TOTPOR > 100 THEN
    //            LIB$ALERTA('MENSAJE','LOS PORCENTAJES DE CARTA DE CRÉDITO Y GIRO DIRECTO EXCEDEN EL 100%.',NULL,NULL,NULL,T_RESPUESTA);
    //          END IF;
    //        END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtterext_terextCarcred_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtterext_terextCarcred_whenValidateItem");
        let T_RESPUESTA: number = null;
        let W_TOTPOR: number = null;
        if ((this.CRTTEREXT.TEREXT_CARCRED != null)) {
            if (this.CRTTEREXT.TEREXT_CARCRED == null ? 0 : this.CRTTEREXT.TEREXT_CARCRED > 100) {
                // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL PORCENTAJE DE OPCIÓN DE COMPRA NO DEBE SER EXCEDER EL 100%", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
            if ((this.CRTTEREXT.TEREXT_CARGDIR != null)) {
                W_TOTPOR = this.CRTTEREXT.TEREXT_CARCRED + this.CRTTEREXT.TEREXT_CARGDIR;
                if (W_TOTPOR > 100) {
                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "LOS PORCENTAJES DE CARTA DE CRÉDITO Y GIRO DIRECTO EXCEDEN EL 100%.", null, null, null, T_RESPUESTA);
                }
            }
        }
        console.log("Exiting CRFADECIAL_crtterext_terextCarcred_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --CAHH 13/08/09  TERCEROS EXTRANJEROS, PROYECTO 103
    // IF :CRTTEREXT.TEREXT_NIT IS NOT NULL THEN
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  DESC1        VARCHAR2(100); 
    // BEGIN
    //    SELECT TDPCOD
    //      INTO DESC1
    //      FROM TDP
    //     WHERE TDPCOD =:CRTTEREXT.TEREXT_CODPAIS;
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    LIB$ALERTA('MENSAJE','AL TERCERO NO SE LE HA DEFINIDO UN PAIS, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    // END;
    // END IF;
    // 
    // 
    // /*
    // 
    // DECLARE
    // 
    //   T_RESPUESTA    NUMBER;
    //   DESC1          VARCHAR2(100); 
    // 
    // BEGIN
    // 
    //   IF :CRTTEREXT.TEREXT_NIT IS NOT NULL THEN 
    //   BEGIN
    //      SELECT  TDPCOD
    //        INTO  DESC1
    //        FROM  TDP
    //       WHERE  TDPCOD = :CRTTEREXT.TEREXT_CODPAIS;
    // 
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //        LIB$ALERTA('MENSAJE','CODIGO INEXISTENTE', NULL, NULL, NULL, T_RESPUESTA);
    //        RAISE FORM_TRIGGER_FAILURE;
    // 
    //   END;
    // 
    //   END IF;
    // 
    // END; 
    // 
    // */; END;
    //#endregion
    async CRFADECIAL_crtterext_terextCodpais_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtterext_terextCodpais_whenValidateItem");
        if ((this.CRTTEREXT.TEREXT_NIT != null)) {
            {

                let T_RESPUESTA: number = null;
                let DESC1: string = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TEREXT_CODPAIS", this.CRTTEREXT.TEREXT_CODPAIS);
                // call REST API
                const result1 = await Rest.post("/crfadecial_crtterext/crfadecial_crtterext_terextcodpais_whenvalidateitem_query1", payload1);
                // get values from result
                DESC1 = result1[0].get("DESC1");
                if (result1 == null || result1.length == 0) {

                    // CRFADECIAL_LIB$ALERTA("MENSAJE", "AL TERCERO NO SE LE HA DEFINIDO UN PAIS, COMUNÍQUESE CON EL ANALISTA DE PROVEEDORES", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFADECIAL_crtterext_terextCodpais_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA   NUMBER;
    //    W_TOTPOR      NUMBER;
    // 
    // BEGIN
    //   IF :CRTTEREXT.TEREXT_CARGDIR IS NOT NULL THEN
    //           W_TOTPOR := :CRTTEREXT.TEREXT_CARCRED + :CRTTEREXT.TEREXT_CARGDIR;
    //         IF W_TOTPOR > 100 THEN
    //            LIB$ALERTA('MENSAJE','LOS PORCENTAJES DE CARTA DE CRÉDITO Y GIRO DIRECTO EXCEDEN EL 100%.',NULL,NULL,NULL,T_RESPUESTA);
    //            RAISE FORM_TRIGGER_FAILURE;
    //          END IF;
    //        END IF;
    // END;
    //#endregion
    async CRFADECIAL_crtterext_terextCargdir_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtterext_terextCargdir_whenValidateItem");
        let T_RESPUESTA: number = null;
        let W_TOTPOR: number = null;
        if ((this.CRTTEREXT.TEREXT_CARGDIR != null)) {
            W_TOTPOR = this.CRTTEREXT.TEREXT_CARCRED + this.CRTTEREXT.TEREXT_CARGDIR;
            if (W_TOTPOR > 100) {
                // CRFADECIAL_LIB$ALERTA("MENSAJE", "LOS PORCENTAJES DE CARTA DE CRÉDITO Y GIRO DIRECTO EXCEDEN EL 100%.", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFADECIAL_crtterext_terextCargdir_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtotersol3_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtotersol3_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtotersol3_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ---- 26502 CODIGOS DE ESTRATEGIA -----
    //  -- PUP_VALIDA_TER;
    //  
    //  NULL; END;
    //#endregion
    async CRFADECIAL_crtotersol3_postUpdate() {
        console.log("Entering CRFADECIAL_crtotersol3_postUpdate");
        console.log("Exiting CRFADECIAL_crtotersol3_postUpdate");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL; END;
    //#endregion
    async CRFADECIAL_crtotersol3_preQuery() {
        console.log("Entering CRFADECIAL_crtotersol3_preQuery");
        this.CRTOTERSOL.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        console.log("Exiting CRFADECIAL_crtotersol3_preQuery");
    }

    //#region PLSQL
    // BEGIN --**************************************************************************************************************
    //      --PY 26502 CODIGOS DE ESTRATEGIA VALIDACION ANDRÉS JIMÉNEZ  27/06/2018
    //      /*
    // DECLARE
    //  V_RESPUESTA   NUMBER;
    //  V_PARAMETRO  VARCHAR2(20);
    //  V_VALIDANIT   NUMBER;
    //  V_VALIDANIT2   NUMBER;
    // BEGIN
    // 
    //  IF :VARIABLE.UNIDAD = '005' THEN  --SOLO SE VALIDA CÓDIGO DE ESTRATÉGIA SI ES UVP
    // ---------     ********************************************     -----------------------------------------------------
    // ---- VALIDA QUE EL TERCERO DE LA TABLA DE COTUVPCCV SE ENCUENTRE EN LA TABLA CRTOTERSOL ------------------------------
    // 
    //  BEGIN
    //   
    //   FIRST_RECORD;
    // 
    //        LOOP
    //        
    //         V_VALIDANIT2 := :CRTOTERSOL3.OTERSOL_NITTER;
    //            SELECT  COUNT (UVPCCV_TERCOP)
    //            INTO V_VALIDANIT
    //              FROM CRTOTERSOL, COTUVPCCV, CRTSOLICR
    //             WHERE   SOLICR_CODVOR  =  UVPCCV_SOLVOR
    //                 AND SOLICR_CODUNI  =  UVPCCV_CODUNI
    //                 AND SOLICR_CODUNI  =  OTERSOL_CODUNI
    //                 AND SOLICR_CODSOL  =  OTERSOL_CODSOL
    //                 AND SOLICR_OFCSOL  =  OTERSOL_OFCSOL
    //                 AND SOLICR_CODUNI  =  :VARIABLE.UNIDAD
    //                 AND SOLICR_OFCSOL  =  :VARIABLE.OFICINA 
    //                 AND SOLICR_CODSOL  =  :VARIABLE.SOLICITUD  
    //                 AND UVPCCV_TERCOP IN  (V_VALIDANIT2)
    //                 AND ROWNUM = 1;
    //                 IF V_VALIDANIT = '1' THEN
    //                  EXIT;
    //                  END IF;
    //                 EXIT WHEN :SYSTEM.LAST_RECORD ='TRUE';
    //               NEXT_RECORD;
    //               SYNCHRONIZE;
    //         END LOOP;
    //           EXCEPTION
    //            WHEN OTHERS THEN
    //            V_VALIDANIT := '0';
    //    
    //   END;
    //          IF  V_VALIDANIT = '0' THEN         
    //           LIB$DTNERFRMA('LOS NIT DEL PROVEEDOR NACIONAL Y DEL CONCESIONARIO SON DISTINTOS POR FAVOR VALIDAR.');
    //              RAISE FORM_TRIGGER_FAILURE;
    //           ELSE         
    //           NULL;
    //          END IF;
    //  END IF;
    // 
    // END;*/
    // NULL;
    // 
    // --------------------   ***********************************************************    ---------------------; END;
    //#endregion
    async CRFADECIAL_crtotersol3_preUpdate() {
        console.log("Entering CRFADECIAL_crtotersol3_preUpdate");
        console.log("Exiting CRFADECIAL_crtotersol3_preUpdate");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADECIAL_crtotersol3_whenNewBlockInstance() {
        console.log("Entering CRFADECIAL_crtotersol3_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADECIAL_crtotersol3_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN COMMIT_FORM; END;
    //#endregion
    async CRFADECIAL_crtotersol3_keyCommit() {
        console.log("Entering CRFADECIAL_crtotersol3_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFADECIAL_crtotersol3_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTOTERSOL3.NOMBRE := PU_NOMBRE_TERCERO (:CRTOTERSOL3.OTERSOL_NITTER);
    // END;
    //#endregion
    async CRFADECIAL_crtotersol3_postQuery() {
        console.log("Entering CRFADECIAL_crtotersol3_postQuery");
        // this.CRTOTERSOL3.NOMBRE = PU_NOMBRE_TERCERO(CRTOTERSOL3.OTERSOL_NITTER);
        console.log("Exiting CRFADECIAL_crtotersol3_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL3.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL3.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL3.OTERSOL_CODUNI := :CRTSOLICR.SOLICR_CODUNI; END;
    //#endregion
    async CRFADECIAL_crtotersol3_preInsert() {
        console.log("Entering CRFADECIAL_crtotersol3_preInsert");
        this.CRTOTERSOL3.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL3.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL3.OTERSOL_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        console.log("Exiting CRFADECIAL_crtotersol3_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  /*
    //     AUTOR  : FABIO OVALLE
    //     FECHA  : 11/04/2019/
    //     MOTIVO : VALIDA QUE EL TERCERO EXISTA Y CARGA LOS DATOS EN LA FORMA Y SE AGREGA
    //              LA VALIDACION DE GEXNOVA PARA MANEJO DE LISTAS RESTRICTIVAS
    //   */
    // 
    //   T_RESPUESTA     NUMBER;
    //   V_PROVREF OPS$COLOCA.CRTREFPRV.REFPRV_CODPRV%TYPE;
    //   V_ORIGEN  OPS$COLOCA.CRTREFPRV.REFPRV_ORIGEN%TYPE;
    //   V_TERPROV OPS$COLOCA.CRTREFPRV.REFPRV_CODPRV%TYPE;    
    //   VREG NUMBER;
    //   MSG_LISTA   VARCHAR2 (230);
    //   ENTER VARCHAR(10):=CHR(13); 
    //    
    // BEGIN
    //   IF  :CRTOTERSOL3.OTERSOL_NITTER IS NOT NULL THEN
    //     BEGIN
    //      PQBD_WS_LISTAS_RESTRICTIVAS.LIST_LOOKUP (P_NRO_IDENTIFICACION    => :CRTOTERSOL3.OTERSOL_NITTER,
    //                                                MSG_LISTA               => MSG_LISTA);
    //       IF LENGTH (MSG_LISTA) > 0 AND MSG_LISTA!=ENTER  THEN                                    
    //         LIB$DTNERFRMA(MSG_LISTA);
    //       END IF;
    //   
    //     END; 
    // 
    //     BEGIN
    //       SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //       INTO   :CRTOTERSOL3.NOMBRE, :CRTOTERSOL3.OTERSOL_TIPPER, :CRTOTERSOL3.OTERSOL_TIPIDE     
    //       FROM   TBEN
    //       WHERE  (TBENCOD = :CRTOTERSOL3.OTERSOL_NITTER);
    //       LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //     EXCEPTION 
    //       WHEN NO_DATA_FOUND THEN
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL, NULL, NULL, T_RESPUESTA); 
    //            RAISE FORM_TRIGGER_FAILURE;
    //     END;
    //   ELSE 
    //     LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE; --- PARTE NUEVA
    //   END IF;  
    // END;
    //#endregion
    async CRFADECIAL_crtotersol3_otersolNitter_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtotersol3_otersolNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_PROVREF: string = null;
        let V_ORIGEN: string = null;
        let V_TERPROV: string = null;
        let VREG: number = null;
        let MSG_LISTA: string = null;
        // let ENTER: string = CHR(13);
        if ((this.CRTOTERSOL3.OTERSOL_NITTER != null)) {
            // CRFADECIAL_PQBD_WS_LISTAS_RESTRICTIVAS.LIST_LOOKUP(CRTOTERSOL3.OTERSOL_NITTER, MSG_LISTA);
            // if ((PLSQLBuiltins.string_length(MSG_LISTA) > 0 && MSG_LISTA != this.oracleFormsBuiltins.enter)) {
            //     // CRFADECIAL_LIB$DTNERFRMA(MSG_LISTA);
            // }
            // construct payload
            let payload1 = new Map();
            payload1.set("OTERSOL_NITTER", this.CRTOTERSOL3.OTERSOL_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtotersol3/crfadecial_crtotersol3_otersolnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTOTERSOL3.NOMBRE = result1[0].get("CRTOTERSOL3.NOMBRE");
            this.CRTOTERSOL3.OTERSOL_TIPPER = result1[0].get("CRTOTERSOL3.OTERSOL_TIPPER");
            this.CRTOTERSOL3.OTERSOL_TIPIDE = result1[0].get("CRTOTERSOL3.OTERSOL_TIPIDE");
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            if (result1 == null || result1.length == 0) {

                // CRFADECIAL_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....", null, null, null, T_RESPUESTA);
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }

        }
        else {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFADECIAL_crtotersol3_otersolNitter_whenValidateItem");
    }

    async CRFADECIAL_crtotersol3_otersolTipvin_whenValidateItem() {
        // null;
    }

    //#region PLSQL
    // BEGIN :GLOBAL.VALOR_ANTERIOR := NAME_IN('SYSTEM.CURSOR_VALUE'); END;
    //#endregion
    async CRFADECIAL_crtotersol1_whenNewItemInstance() {
        console.log("Entering CRFADECIAL_crtotersol1_whenNewItemInstance");
        // this.GLOBAL.VALOR_ANTERIOR = this.oracleFormsBuiltins.name_in("SYSTEM.CURSOR_VALUE");
        console.log("Exiting CRFADECIAL_crtotersol1_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADECIAL_crtotersol1_preQuery() {
        console.log("Entering CRFADECIAL_crtotersol1_preQuery");
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADECIAL_crtotersol1_preQuery");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async CRFADECIAL_crtotersol1_whenNewBlockInstance() {
        console.log("Entering CRFADECIAL_crtotersol1_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFADECIAL_crtotersol1_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADECIAL_crtotersol1_whenCreateRecord() {
        console.log("Entering CRFADECIAL_crtotersol1_whenCreateRecord");
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADECIAL_crtotersol1_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFADECIAL_crtotersol1_keyCommit() {
        console.log("Entering CRFADECIAL_crtotersol1_keyCommit");
        console.log("Exiting CRFADECIAL_crtotersol1_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTOTERSOL1.NOMBRE := PU_NOMBRE_TERCERO (:CRTOTERSOL1.OTERSOL_NITTER);
    // END;
    //#endregion
    async CRFADECIAL_crtotersol1_postQuery() {
        console.log("Entering CRFADECIAL_crtotersol1_postQuery");
        // this.CRTOTERSOL1.NOMBRE = PU_NOMBRE_TERCERO(CRTOTERSOL1.OTERSOL_NITTER);
        console.log("Exiting CRFADECIAL_crtotersol1_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTOTERSOL1.OTERSOL_CODSOL := :CRTSOLICR.SOLICR_CODSOL;
    // :CRTOTERSOL1.OTERSOL_OFCSOL := :CRTSOLICR.SOLICR_OFCSOL;
    // :CRTOTERSOL1.OTERSOL_CODUNI := :CRTSOLICR.SOLICR_CODUNI;--CB: ARQUITECTURA
    // :CRTOTERSOL1.OTERSOL_TIPVIN := :VARIABLE.TIPO_VINCULA; END;
    //#endregion
    async CRFADECIAL_crtotersol1_preInsert() {
        console.log("Entering CRFADECIAL_crtotersol1_preInsert");
        this.CRTOTERSOL1.OTERSOL_CODSOL = this.CRTSOLICR.SOLICR_CODSOL;
        this.CRTOTERSOL1.OTERSOL_OFCSOL = this.CRTSOLICR.SOLICR_OFCSOL;
        this.CRTOTERSOL1.OTERSOL_CODUNI = this.CRTSOLICR.SOLICR_CODUNI;
        this.CRTOTERSOL1.OTERSOL_TIPVIN = this.VARIABLE.TIPO_VINCULA;
        console.log("Exiting CRFADECIAL_crtotersol1_preInsert");
    }

    //#region PLSQL
    // DECLARE
    // 
    //    T_RESPUESTA     NUMBER;
    // 
    // BEGIN
    //   IF  :CRTOTERSOL1.OTERSOL_NITTER IS NOT NULL THEN
    // 
    //    BEGIN
    //      SELECT   TBENAPE||' '||TBENNOM, TBENTIPO, TBENTID 
    //      INTO   :CRTOTERSOL1.NOMBRE, :CRTOTERSOL1.OTERSOL_TIPPER, :CRTOTERSOL1.OTERSOL_TIPIDE     
    //      FROM   TBEN
    //      WHERE  (TBENCOD = :CRTOTERSOL1.OTERSOL_NITTER);
    // 
    //      LIB$ALERTA('MENSAJE','EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL, NULL, NULL, 'Q');
    // 
    //    EXCEPTION 
    //      WHEN NO_DATA_FOUND THEN
    //         IF FRM$ALERTA_SINO ('TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....') = 1 THEN
    //            PU_LLAMAR_TERCERO(:CRTOTERSOL1.OTERSOL_NITTER, NULL, NULL, NULL,'T');
    //         ELSE 
    //            LIB$ALERTA('MENSAJE','RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....',NULL, NULL, NULL, T_RESPUESTA); 
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //     END;
    //   /* 
    //     AUTOR  : GEXNOVA
    //     FECHA  : 13.09.2018
    //     MOTIVO : CONSUMO WEB SERVICE DE LISTAS RESTRICTIVAS          
    //   */
    //   PVALTER(:CRTOTERSOL1.OTERSOL_NITTER, :CRTOTERSOL1.OTERSOL_TIPIDE);      
    // 
    //   ELSE 
    //      LIB$ALERTA('MENSAJE','EL NIT DEL TERCERO NO PUEDE SER NULO .......', NULL, NULL, NULL, T_RESPUESTA);
    //   END IF;  
    // END;
    //#endregion
    async CRFADECIAL_crtotersol1_otersolNitter_whenValidateItem() {
        console.log("Entering CRFADECIAL_crtotersol1_otersolNitter_whenValidateItem");
        let T_RESPUESTA: number = null;
        if ((this.CRTOTERSOL1.OTERSOL_NITTER != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("OTERSOL_NITTER", this.CRTOTERSOL1.OTERSOL_NITTER);
            // call REST API
            const result1 = await Rest.post("/crfadecial_crtotersol1/crfadecial_crtotersol1_otersolnitter_whenvalidateitem_query1", payload1);
            // get values from result
            this.CRTOTERSOL1.NOMBRE = result1[0].get("CRTOTERSOL1.NOMBRE");
            this.CRTOTERSOL1.OTERSOL_TIPPER = result1[0].get("CRTOTERSOL1.OTERSOL_TIPPER");
            this.CRTOTERSOL1.OTERSOL_TIPIDE = result1[0].get("CRTOTERSOL1.OTERSOL_TIPIDE");
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL TERCERO EXISTE. ES INDISPENSABLE ACTUALIZAR TODOS LOS DATOS, DE LO CONTRARIO LA IMPRESIÓN DEL CONTRATO Y LA CORRESPONDENCIA SALDRÁ ERRADA .....", null, null, null, T_RESPUESTA);
            // CRFADECIAL_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "Q");
            if (result1 == null || result1.length == 0) {

                // if (FRM$ALERTA_SINO("TERCERO INEXISTENTE. DESEA CREARLO AHORA ?.....") == 1) {
                //     // CRFADECIAL_PU_LLAMAR_TERCERO(CRTOTERSOL1.OTERSOL_NITTER, null, null, null, "T");
                // }
                // else {
                //     // CRFADECIAL_LIB$ALERTA("MENSAJE", "RECUERDE QUE EL TERCERO DEBE EXISTIR Y ESTAR ACTUALIZADO.....", null, null, null, T_RESPUESTA);
                //     console.log("FORM_TRIGGER_FAILURE");
                //     throw new Error('FORM_TRIGGER_FAILURE');
                // }
            }

            // CRFADECIAL_PVALTER(CRTOTERSOL1.OTERSOL_NITTER, CRTOTERSOL1.OTERSOL_TIPIDE);
        }
        else {
            // CRFADECIAL_LIB$ALERTA("MENSAJE", "EL NIT DEL TERCERO NO PUEDE SER NULO .......", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFADECIAL_crtotersol1_otersolNitter_whenValidateItem");
    }

}

