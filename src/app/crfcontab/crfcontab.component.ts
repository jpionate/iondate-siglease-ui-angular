import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCONTAB business logic
import {
    TOOLBAR,
    BLOCK101,
    CRTCONTAB,
    BASE
} from "./CRFCONTAB_models";



// class CRFCONTAB
@Component({
    selector: 'app-crfcontab',
    templateUrl: './crfcontab.component.html',
})
export class CrfcontabComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BLOCK101: BLOCK101 = new BLOCK101();
    public CRTCONTAB: CRTCONTAB = new CRTCONTAB();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONTAB_whenMouseDoubleclick() {
        console.log("Entering CRFCONTAB_whenMouseDoubleclick");
        console.log("Exiting CRFCONTAB_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONTAB_preForm() {
        console.log("Entering CRFCONTAB_preForm");
        console.log("Exiting CRFCONTAB_preForm");
    }

    //#region PLSQL
    // BEGIN ---------------------------------------------------------------------
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
    // -----------------------------
    // 
    // REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFCONTAB_whenNewFormInstance() {
        console.log("Entering CRFCONTAB_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfcontab/crfcontab_whennewforminstance_query1", payload1);
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

        // CRFCONTAB_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCONTAB_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONTAB_toolbar_whenButtonPressed() {
        console.log("Entering CRFCONTAB_toolbar_whenButtonPressed");
        console.log("Exiting CRFCONTAB_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONTAB_toolbar_whenMouseLeave() {
        console.log("Entering CRFCONTAB_toolbar_whenMouseLeave");
        console.log("Exiting CRFCONTAB_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONTAB_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCONTAB_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCONTAB_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    // BK_DATA PQBD_COL_ESTAOPE.TAB_ESTAOPE;
    // BEGIN
    // PQBD_COL_ESTAOPE.PBD_COMMTAB(BK_DATA);
    // PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, 'BLOCK101');
    // END;
    //#endregion
    async CRFCONTAB_block101_queryProcedure() {
        console.log("Entering CRFCONTAB_block101_queryProcedure");
        let BK_DATA: null = null;
        // CRFCONTAB_PQBD_COL_ESTAOPE.PBD_COMMTAB(BK_DATA);
        // CRFCONTAB_PLSQL_TABLE.POPULATE_BLOCK(BK_DATA, "BLOCK101");
        console.log("Exiting CRFCONTAB_block101_queryProcedure");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    //    V_CODORDEN   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :CRTCONTAB.TAB_CODCOLUM IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(TAB_CODCOLUM,0))),000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   CRTCONTAB;
    //      :CRTCONTAB.TAB_CODCOLUM := LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO DE LA COLUMNA.');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async CRFCONTAB_crtcontab_preInsert() {
        console.log("Entering CRFCONTAB_crtcontab_preInsert");
        let V_NUEVO_COD: number = null;
        let V_CODORDEN: number = null;
        if ((this.CRTCONTAB.TAB_CODCOLUM == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crfcontab_crtcontab/crfcontab_crtcontab_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.CRTCONTAB.TAB_CODCOLUM = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 3, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO DE LA COLUMNA.");
            }

        }
        console.log("Exiting CRFCONTAB_crtcontab_preInsert");
    }

    //#region PLSQL
    // BEGIN IF :V_CERRAR = 'S' THEN
    //  HIDE_VIEW('VERTAB');
    //  SHOW_VIEW('CONTAB');
    //  GO_BLOCK('CRTCONTAB');
    //  :V_VERTABLA := 'N';
    // END IF; END;
    //#endregion
    async CRFCONTAB_crtcontab_vCerrar_whenCheckboxChanged() {
        console.log("Entering CRFCONTAB_crtcontab_vCerrar_whenCheckboxChanged");
        if (this.CRTCONTAB.V_CERRAR == "S") {
            this.oracleFormsBuiltins.hide_view("VERTAB");
            this.oracleFormsBuiltins.show_view("CONTAB");
            this.oracleFormsBuiltins.go_block("CRTCONTAB");
            this.CRTCONTAB.V_VERTABLA = "N";
        }
        console.log("Exiting CRFCONTAB_crtcontab_vCerrar_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE 
    //  V_CODORDEN NUMBER;
    // BEGIN
    // IF :TAB_MOSTRAR = 'S' THEN
    //  IF :CRTCONTAB.TAB_ORDEN IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(NVL(TAB_ORDEN,0)),0)+1
    //      INTO   V_CODORDEN
    //      FROM   CRTCONTAB;
    //      :CRTCONTAB.TAB_ORDEN := V_CODORDEN;--LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //      LIB$DTNERFRMA('FALLA AL ASIGNAR EL ORDEN DE LA COLUMNA.');
    //    END;
    // END IF;
    // COMMIT_FORM;
    // END IF;
    // END;
    //#endregion
    async CRFCONTAB_crtcontab_tabMostrar_whenCheckboxChanged() {
        console.log("Entering CRFCONTAB_crtcontab_tabMostrar_whenCheckboxChanged");
        let V_CODORDEN: number = null;
        if (this.CRTCONTAB.TAB_MOSTRAR == "S") {
            if ((this.CRTCONTAB.TAB_ORDEN == null)) {
                let result1 = [];
                try {

                    // construct payload
                    let payload1 = new Map();
                    // call REST API
                    const result1 = await Rest.post("/crfcontab_crtcontab/crfcontab_crtcontab_tabmostrar_whencheckboxchanged_query1", payload1);
                    // get values from result
                    V_CODORDEN = result1[0].get("V_CODORDEN");
                    this.CRTCONTAB.TAB_ORDEN = V_CODORDEN;
                } catch (ex) {

                    // CRFCONTAB_LIB$DTNERFRMA("FALLA AL ASIGNAR EL ORDEN DE LA COLUMNA.");
                }

            }
            this.oracleFormsBuiltins.commit_form();
        }
        console.log("Exiting CRFCONTAB_crtcontab_tabMostrar_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA('SI_NO','ESTA SEGURO DE EJECUTAR DESHABILITAR LOS CAMPOS SELECIONADOS','SI','NO','CANCELAR',T_RESPUESTA);
    //    IF T_RESPUESTA = '2' THEN 
    //     LIB$DTNERFRMA('PROCESO CANCELADO POR EL USUARIO');
    //    ELSE
    //      UPDATE CRTCONTAB
    //        SET TAB_MOSTRAR = 'N'
    //          ,TAB_ORDEN   = NULL
    //        WHERE TAB_MOSTRAR = 'S'
    //         AND TAB_ORDEN IS NOT NULL;
    //      COMMIT;
    //      GO_BLOCK('CRTCONTAB');
    //      EXECUTE_QUERY;
    //    END IF;
    // END;
    //#endregion
    async CRFCONTAB_crtcontab_vLimpiar_whenCheckboxChanged() {
        console.log("Entering CRFCONTAB_crtcontab_vLimpiar_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        // // CRFCONTAB_LIB$ALERTA("SI_NO", "ESTA SEGURO DE EJECUTAR DESHABILITAR LOS CAMPOS SELECIONADOS", "SI", "NO", "CANCELAR", T_RESPUESTA);
        // if (T_RESPUESTA == "2") {
        //     CRFCONTAB_LIB$DTNERFRMA("PROCESO CANCELADO POR EL USUARIO");
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfcontab_crtcontab/crfcontab_crtcontab_vlimpiar_whencheckboxchanged_query1", payload1);
        //     this.oracleFormsBuiltins.go_block("CRTCONTAB");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        console.log("Exiting CRFCONTAB_crtcontab_vLimpiar_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE       
    //   T_RESPUESTA  NUMBER;
    //   /*CURSOR C1 IS 
    //    SELECT TAB_CODCOLUM COLUM,
    //          TAB_DESCRIP DESCRI
    //    FROM CRTCONTAB
    //    WHERE TAB_MOSTRAR = 'S';*/
    // BEGIN
    //        :GLOBAL.UN := GET_APPLICATION_PROPERTY(USERNAME);
    //        :GLOBAL.PW := GET_APPLICATION_PROPERTY(PASSWORD);
    //        :GLOBAL.CS := '@'||GET_APPLICATION_PROPERTY(CONNECT_STRING);
    //        LIB$ALERTA('MENSAJE','GENERANDO TABLA ............',NULL,NULL,NULL,T_RESPUESTA);
    //       SYNCHRONIZE;
    //        FORMS_DDL('DROP TABLE CRTESTAOPE');
    //        HOST ('PLUS80W '||:GLOBAL.UN||'/'||:GLOBAL.PW||:GLOBAL.CS||' @'||'CREA_TABOPE',NO_SCREEN);
    //        HOST ('PLUS80W '||:GLOBAL.UN||'/'||:GLOBAL.PW||:GLOBAL.CS||' @'||'CREA_TABLA_ESTAOPE',NO_SCREEN);
    //        HOST ('PLUS80W '||:GLOBAL.UN||'/'||:GLOBAL.PW||:GLOBAL.CS||' @'||'CREA_COMMEN',NO_SCREEN);
    //        HOST ('PLUS80W '||:GLOBAL.UN||'/'||:GLOBAL.PW||:GLOBAL.CS||' @'||'CREA_COMMEN_TABOPE',NO_SCREEN);
    //       /* FOR ACT IN C1 LOOP
    //           INSERT INTO CRTESTAOPE (C001,C002)
    //             VALUES (ACT.COLUM, ACT.DESCRI);
    //        END LOOP;
    //        COMMIT;*/
    //        LIB$ALERTA('MENSAJE','TERMINÓ GENERACION DE LA TABLA ÉXITOSAMENTE......',NULL,NULL,NULL,T_RESPUESTA);
    //        SYNCHRONIZE;
    // END;
    //#endregion
    async CRFCONTAB_crtcontab_vBtocrear_whenButtonPressed() {
        console.log("Entering CRFCONTAB_crtcontab_vBtocrear_whenButtonPressed");
        let T_RESPUESTA: number = null;
        // this.GLOBAL.UN = this.oracleFormsBuiltins.get_application_property(USERNAME);
        // this.GLOBAL.PW = this.oracleFormsBuiltins.get_application_property(PASSWORD);
        // this.GLOBAL.CS = "@" + this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        // CRFCONTAB_LIB$ALERTA("MENSAJE", "GENERANDO TABLA ............", null, null, null, T_RESPUESTA);
        // this.oracleFormsBuiltins.synchronize();
        // this.oracleFormsBuiltins.forms_ddl("DROP TABLE CRTESTAOPE");
        // this.oracleFormsBuiltins.host("PLUS80W " + GLOBAL.UN + "/" + GLOBAL.PW + GLOBAL.CS + " @" + "CREA_TABOPE", NO_SCREEN);
        // this.oracleFormsBuiltins.host("PLUS80W " + GLOBAL.UN + "/" + GLOBAL.PW + GLOBAL.CS + " @" + "CREA_TABLA_ESTAOPE", NO_SCREEN);
        // this.oracleFormsBuiltins.host("PLUS80W " + GLOBAL.UN + "/" + GLOBAL.PW + GLOBAL.CS + " @" + "CREA_COMMEN", NO_SCREEN);
        // this.oracleFormsBuiltins.host("PLUS80W " + GLOBAL.UN + "/" + GLOBAL.PW + GLOBAL.CS + " @" + "CREA_COMMEN_TABOPE", NO_SCREEN);
        // CRFCONTAB_LIB$ALERTA("MENSAJE", "TERMINÓ GENERACION DE LA TABLA ÉXITOSAMENTE......", null, null, null, T_RESPUESTA);
        // this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFCONTAB_crtcontab_vBtocrear_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :V_VERTABLA = 'S' THEN
    //   SHOW_VIEW('VERTAB');
    //   GO_BLOCK('BLOCK101');
    //   EXECUTE_QUERY;
    // ELSE
    //  HIDE_VIEW('VERTABLA');
    //  GO_BLOCK('CRTCONTAB');
    //  EXECUTE_QUERY;
    // END IF; END;
    //#endregion
    async CRFCONTAB_crtcontab_vVertabla_whenCheckboxChanged() {
        console.log("Entering CRFCONTAB_crtcontab_vVertabla_whenCheckboxChanged");
        if (this.CRTCONTAB.V_VERTABLA == "S") {
            this.oracleFormsBuiltins.show_view("VERTAB");
            this.oracleFormsBuiltins.go_block("BLOCK101");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.hide_view("VERTABLA");
            this.oracleFormsBuiltins.go_block("CRTCONTAB");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CRFCONTAB_crtcontab_vVertabla_whenCheckboxChanged");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONTAB_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCONTAB_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCONTAB_base_fecha_whenNewItemInstance");
    }

}

