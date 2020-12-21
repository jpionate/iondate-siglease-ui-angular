import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSEMAFO business logic
import {
    SETPARSEM,
    CRTTIPBIEN,
    TOOLBAR,
    BASE
} from "./CRFSEMAFO_models";



// class CRFSEMAFO
@Component({
    selector: 'app-crfsemafo',
    templateUrl: './crfsemafo.component.html',
})
export class CrfsemafoComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETPARSEM: SETPARSEM = new SETPARSEM();
    public CRTTIPBIEN: CRTTIPBIEN = new CRTTIPBIEN();
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
    async CRFSEMAFO_onClearDetails() {
        console.log("Entering CRFSEMAFO_onClearDetails");
        // CRFSEMAFO_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFSEMAFO_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_whenMouseDoubleclick() {
        console.log("Entering CRFSEMAFO_whenMouseDoubleclick");
        console.log("Exiting CRFSEMAFO_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_preForm() {
        console.log("Entering CRFSEMAFO_preForm");
        console.log("Exiting CRFSEMAFO_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_whenNewFormInstance() {
        console.log("Entering CRFSEMAFO_whenNewFormInstance");
        console.log("Exiting CRFSEMAFO_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_TEMP   VARCHAR2(60);
    // BEGIN
    //  V_TEMP := :SETPARSEM.PARSEM_DESAPL;
    //  
    //  SELECT DISTINCT(PARSEM_DESAPL)
    //  INTO :SETPARSEM.PARSEM_DESAPL
    //  FROM SETPARSEM
    //  WHERE PARSEM_APLICA = :SETPARSEM.PARSEM_APLICA;  
    //  COMMIT;
    // EXCEPTION 
    //  WHEN NO_DATA_FOUND THEN
    //   :SETPARSEM.PARSEM_DESAPL := V_TEMP;
    //   COMMIT;
    //  WHEN OTHERS THEN
    //   LIB$ALERTA('STOP', 'ERROR CONSULTA TABLA SETPARSEM.', NULL,NULL,NULL, T_RESPUESTA);
    // END;
    //#endregion
    async CRFSEMAFO_setparsem_keyCommit() {
        console.log("Entering CRFSEMAFO_setparsem_keyCommit");
        let T_RESPUESTA: number = null;
        let V_TEMP: string = null;
        try {

            V_TEMP = this.SETPARSEM.PARSEM_DESAPL;
            // construct payload
            let payload1 = new Map();
            payload1.set("PARSEM_APLICA", this.SETPARSEM.PARSEM_APLICA);
            // call REST API
            const result1 = await Rest.post("/crfsemafo_setparsem/crfsemafo_setparsem_keycommit_query1", payload1);
            // get values from result
            this.SETPARSEM.PARSEM_DESAPL = result1[0].get("SETPARSEM.PARSEM_DESAPL");
            // if (result2 == null || result2.length == 0) {

            //     this.SETPARSEM.PARSEM_DESAPL = V_TEMP;
            // }

        } catch (ex) {

            // CRFSEMAFO_LIB$ALERTA("STOP", "ERROR CONSULTA TABLA SETPARSEM.", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSEMAFO_setparsem_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT SUBCAT_DESCRI
    //    INTO :W_SUBCATEGORIA
    //    FROM COTSUBCAT
    //   WHERE SUBCAT_CTPBIE = :TIPBIEN_CODBIEN
    //     AND SUBCAT_CODIGO = :PARSEM_SUBCAT
    //     AND SUBCAT_CODUNI = :TIPBIEN_CODUNI; --ARQUITECTURA
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;
    //#endregion
    async CRFSEMAFO_setparsem_postQuery() {
        console.log("Entering CRFSEMAFO_setparsem_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("TIPBIEN_CODBIEN", TIPBIEN_CODBIEN);
            // payload1.set("PARSEM_SUBCAT", PARSEM_SUBCAT);
            // payload1.set("TIPBIEN_CODUNI", TIPBIEN_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crfsemafo_setparsem/crfsemafo_setparsem_postquery_query1", payload1);
            // get values from result
            // W_SUBCATEGORIA = result1[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.SETPARSEM.W_SUBCATEGORIA = null;
        }

        console.log("Exiting CRFSEMAFO_setparsem_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT SUBCAT_DESCRI
    //   INTO :W_SUBCATEGORIA
    //   FROM COTSUBCAT
    //  WHERE SUBCAT_CTPBIE = :PARSEM_CODIGO
    //    AND SUBCAT_CODIGO = :PARSEM_SUBCAT
    //    AND SUBCAT_ESTADO = 'A';
    // EXCEPTION WHEN OTHERS THEN
    //  :W_SUBCATEGORIA := NULL;
    // END;
    //#endregion
    async CRFSEMAFO_setparsem_parsemSubcat_whenValidateItem() {
        console.log("Entering CRFSEMAFO_setparsem_parsemSubcat_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("PARSEM_CODIGO", PARSEM_CODIGO);
            // payload1.set("PARSEM_SUBCAT", PARSEM_SUBCAT);
            // call REST API
            const result1 = await Rest.post("/crfsemafo_setparsem/crfsemafo_setparsem_parsemsubcat_whenvalidateitem_query1", payload1);
            // get values from result
            // W_SUBCATEGORIA = result1[0].get("W_SUBCATEGORIA");
        } catch (ex) {

            this.SETPARSEM.W_SUBCATEGORIA = null;
        }

        console.log("Exiting CRFSEMAFO_setparsem_parsemSubcat_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETPARSEM.PARSEM_DESAPL IS NULL THEN
    //  :SETPARSEM.PARSEM_DESAPL := NULL;
    //  GO_ITEM('SETPARSEM.PARSEM_DESAPL');
    // END IF; END;
    //#endregion
    async CRFSEMAFO_setparsem_parsemSubcat_whenNewItemInstance() {
        console.log("Entering CRFSEMAFO_setparsem_parsemSubcat_whenNewItemInstance");
        if ((this.SETPARSEM.PARSEM_DESAPL == null)) {
            this.SETPARSEM.PARSEM_DESAPL = null;
            this.oracleFormsBuiltins.go_item("SETPARSEM.PARSEM_DESAPL");
        }
        console.log("Exiting CRFSEMAFO_setparsem_parsemSubcat_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DISTINCT(PARSEM_DESAPL)
    //  INTO :SETPARSEM.PARSEM_DESAPL
    //  FROM SETPARSEM
    //  WHERE PARSEM_APLICA = :SETPARSEM.PARSEM_APLICA;  
    // EXCEPTION 
    //  WHEN NO_DATA_FOUND THEN
    //   :SETPARSEM.PARSEM_DESAPL := NULL;
    //   LIB$ALERTA('MENSAJE', 'SE VA A CREAR UNA NUEVA APLICACIÓN.', NULL,NULL,NULL, T_RESPUESTA);   
    //   SYNCHRONIZE;
    //  WHEN OTHERS THEN
    //   LIB$ALERTA('STOP', 'ERROR CONSULTA TABLA SETPARSEM.', NULL,NULL,NULL, T_RESPUESTA);
    // END;
    //#endregion
    async CRFSEMAFO_setparsem_parsemAplica_whenValidateItem() {
        console.log("Entering CRFSEMAFO_setparsem_parsemAplica_whenValidateItem");
        let T_RESPUESTA: number = null;
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("PARSEM_APLICA", this.SETPARSEM.PARSEM_APLICA);
            // call REST API
            const result1 = await Rest.post("/crfsemafo_setparsem/crfsemafo_setparsem_parsemaplica_whenvalidateitem_query1", payload1);
            // get values from result
            this.SETPARSEM.PARSEM_DESAPL = result1[0].get("SETPARSEM.PARSEM_DESAPL");
            if (result1 == null || result1.length == 0) {

                this.SETPARSEM.PARSEM_DESAPL = null;
                // CRFSEMAFO_LIB$ALERTA("MENSAJE", "SE VA A CREAR UNA NUEVA APLICACIÓN.", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.synchronize();
            }

        } catch (ex) {

            // CRFSEMAFO_LIB$ALERTA("STOP", "ERROR CONSULTA TABLA SETPARSEM.", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSEMAFO_setparsem_parsemAplica_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN SETPARSEM DETAIL DECLARE SECTION
    //   --
    //   CURSOR SETPARSEM_CUR IS      
    //     SELECT 1 FROM SETPARSEM S     
    //     WHERE S.PARSEM_CODIGO = :CRTTIPBIEN.TIPBIEN_CODBIEN AND S.PARSEM_CODUNI = :CRTTIPBIEN.TIPBIEN_CODUNI;
    //   --
    //   -- END SETPARSEM DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN SETPARSEM DETAIL PROGRAM SECTION
    //   --
    //   OPEN SETPARSEM_CUR;     
    //   FETCH SETPARSEM_CUR INTO DUMMY_DEFINE;     
    //   IF ( SETPARSEM_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE SETPARSEM_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE SETPARSEM_CUR;
    //   --
    //   -- END SETPARSEM DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFSEMAFO_crttipbien_onCheckDeleteMaster() {
        console.log("Entering CRFSEMAFO_crttipbien_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFSEMAFO_crttipbien_onCheckDeleteMaster");
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
    //   -- BEGIN SETPARSEM DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTTIPBIEN.TIPBIEN_CODBIEN IS NOT NULL) OR (:CRTTIPBIEN.TIPBIEN_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTTIPBIEN.CRTTIPBIEN_SETPARSEM');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'SETPARSEM');   
    //   END IF;
    //   --
    //   -- END SETPARSEM DETAIL PROGRAM SECTION
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
    async CRFSEMAFO_crttipbien_onPopulateDetails() {
        console.log("Entering CRFSEMAFO_crttipbien_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CRTTIPBIEN.TIPBIEN_CODBIEN != null) || (this.CRTTIPBIEN.TIPBIEN_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTTIPBIEN.CRTTIPBIEN_SETPARSEM");
            // CRFSEMAFO_QUERY_MASTER_DETAILS(REL_ID, "SETPARSEM");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFSEMAFO_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFSEMAFO_crttipbien_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN --:CRTTIPBIEN.DES_CAL_PESO := :CRTTIPBIEN.TIPBIEN_JORNADA/:CRTTIPBIEN.TIPBIEN_DIASPERF;
    // NULL; END;
    //#endregion
    async CRFSEMAFO_crttipbien_desCalPeso_postChange() {
        console.log("Entering CRFSEMAFO_crttipbien_desCalPeso_postChange");
        console.log("Exiting CRFSEMAFO_crttipbien_desCalPeso_postChange");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_toolbar_whenButtonPressed() {
        console.log("Entering CRFSEMAFO_toolbar_whenButtonPressed");
        console.log("Exiting CRFSEMAFO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_toolbar_whenMouseLeave() {
        console.log("Entering CRFSEMAFO_toolbar_whenMouseLeave");
        console.log("Exiting CRFSEMAFO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSEMAFO_toolbar_whenNewFormInstance");
        console.log("Exiting CRFSEMAFO_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSEMAFO_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSEMAFO_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFSEMAFO_base_fecha_whenNewItemInstance");
    }

}

