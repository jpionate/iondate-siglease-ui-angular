import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFAGRUS business logic
import {
    TDS,
    SETAGRUSUS,
    TOOLBAR,
    BASE
} from "./SEFAGRUS_models";



// class SEFAGRUS
@Component({
    selector: 'app-sefagrus',
    templateUrl: './sefagrus.component.html',
})
export class SefagrusComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TDS: TDS = new TDS();
    public SETAGRUSUS: SETAGRUSUS = new SETAGRUSUS();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFAGRUS_keyEntqry() {
        console.log("Entering SEFAGRUS_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFAGRUS_keyEntqry");
    }

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
    async SEFAGRUS_onClearDetails() {
        console.log("Entering SEFAGRUS_onClearDetails");
        // SEFAGRUS_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting SEFAGRUS_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_onError() {
        console.log("Entering SEFAGRUS_onError");
        console.log("Exiting SEFAGRUS_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_whenMouseDoubleclick() {
        console.log("Entering SEFAGRUS_whenMouseDoubleclick");
        console.log("Exiting SEFAGRUS_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_onMessage() {
        console.log("Entering SEFAGRUS_onMessage");
        console.log("Exiting SEFAGRUS_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_preForm() {
        console.log("Entering SEFAGRUS_preForm");
        console.log("Exiting SEFAGRUS_preForm");
    }

    //#region PLSQL
    // BEGIN  
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   EXECUTE_QUERY;
    // END;
    // 
    // 
    // ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // 
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
    //#endregion
    async SEFAGRUS_whenNewFormInstance() {
        console.log("Entering SEFAGRUS_whenNewFormInstance");
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
        this.oracleFormsBuiltins.execute_query();
        let V_IMAGEN: string = null;
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
            // call REST API
            const result1 = await Rest.post("/sefagrus/sefagrus_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFAGRUS_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFAGRUS_keyExeqry() {
        console.log("Entering SEFAGRUS_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFAGRUS_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFAGRUS_keyCommit() {
        console.log("Entering SEFAGRUS_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFAGRUS_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   UPDATE OPS$SEGUI.TDS
    //   SET    TDS_AGRUPA = :TDS.TDS_AGRUPA
    //   WHERE  TDSCOD = :TDS.TDSCOD
    //   ;
    // END;
    //#endregion
    async SEFAGRUS_tds_onInsert() {
        console.log("Entering SEFAGRUS_tds_onInsert");
        // construct payload
        let payload1 = new Map();
        // payload1.TDS_AGRUPA = : TDS_AGRUPA;
        // payload1.TDSCOD = : TDSCOD;
        // call REST API
        const result1 = await Rest.post("/sefagrus_tds/sefagrus_tds_oninsert_query1", payload1);
        console.log("Exiting SEFAGRUS_tds_onInsert");
    }

    //#region PLSQL
    // BEGIN
    //   UPDATE OPS$SEGUI.TDS
    //   SET    TDS_AGRUPA = NULL
    //   WHERE  TDSCOD = :TDS.TDSCOD
    //   ;
    // END;
    //#endregion
    async SEFAGRUS_tds_onDelete() {
        console.log("Entering SEFAGRUS_tds_onDelete");
        // construct payload
        let payload1 = new Map();
        // payload1.TDSCOD = : TDSCOD;
        // call REST API
        const result1 = await Rest.post("/sefagrus_tds/sefagrus_tds_ondelete_query1", payload1);
        console.log("Exiting SEFAGRUS_tds_onDelete");
    }

    //#region PLSQL
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$SEGUI.TDS
    //         WHERE TDS_AGRUPA = :SETAGRUSUS.AGSUSE_CODIGO;
    //     PRIMARY_DUMMY  VARCHAR2(1);
    // BEGIN
    //     IF ( ( :SETAGRUSUS.AGSUSE_CODIGO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR LA AGRUPACIÓN POR EXISTEN SUBSECTORES '
    //                        ||'ASOCIADOS A ELLA');
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    // DELETE_RECORD;
    //#endregion
    async SEFAGRUS_setagrusus_keyDelrec() {
        console.log("Entering SEFAGRUS_setagrusus_keyDelrec");
        let PRIMARY_DUMMY: string = null;
        if ((this.SETAGRUSUS.AGSUSE_CODIGO != null)) {
            if (null) {
                // SEFAGRUS_LIB$DTNERFRMA("NO SE PUEDE BORRAR LA AGRUPACIÓN POR EXISTEN SUBSECTORES " + "ASOCIADOS A ELLA");
            }
        }
        console.log("Exiting SEFAGRUS_setagrusus_keyDelrec");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN TDS DETAIL DECLARE SECTION
    //   --
    //   CURSOR TDS_CUR IS      
    //     SELECT 1 FROM OPS$SEGUI.TDS     
    //     WHERE TDS_AGRUPA = :SETAGRUSUS.AGSUSE_CODIGO;
    //   --
    //   -- END TDS DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN TDS DETAIL PROGRAM SECTION
    //   --
    //   OPEN TDS_CUR;     
    //   FETCH TDS_CUR INTO DUMMY_DEFINE;     
    //   IF ( TDS_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE TDS_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE TDS_CUR;
    //   --
    //   -- END TDS DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async SEFAGRUS_setagrusus_onCheckDeleteMaster() {
        console.log("Entering SEFAGRUS_setagrusus_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFAGRUS_setagrusus_onCheckDeleteMaster");
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
    //   -- BEGIN TDS DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:SETAGRUSUS.AGSUSE_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('SETAGRUSUS.SETAGRUSUS_TDS');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'TDS');   
    //   END IF;
    //   --
    //   -- END TDS DETAIL PROGRAM SECTION
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
    async SEFAGRUS_setagrusus_onPopulateDetails() {
        console.log("Entering SEFAGRUS_setagrusus_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.SETAGRUSUS.AGSUSE_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("SETAGRUSUS.SETAGRUSUS_TDS");
            // SEFAGRUS_QUERY_MASTER_DETAILS(REL_ID, "TDS");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // SEFAGRUS_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting SEFAGRUS_setagrusus_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN IF :SETAGRUSUS.AGSUSE_DESCRI IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE LA DESCRIPCIÓN DE LA AGRUPACIÓN');
    // END IF; END;
    //#endregion
    async SEFAGRUS_setagrusus_agsuseDescri_whenValidateItem() {
        console.log("Entering SEFAGRUS_setagrusus_agsuseDescri_whenValidateItem");
        if ((this.SETAGRUSUS.AGSUSE_DESCRI == null)) {
            // SEFAGRUS_LIB$DTNERFRMA("ENTRE LA DESCRIPCIÓN DE LA AGRUPACIÓN");
        }
        console.log("Exiting SEFAGRUS_setagrusus_agsuseDescri_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :SETAGRUSUS.AGSUSE_CODIGO IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE EL CÓDIGO DE LA AGRUPACIÓN');
    // END IF; END;
    //#endregion
    async SEFAGRUS_setagrusus_agsuseCodigo_whenValidateItem() {
        console.log("Entering SEFAGRUS_setagrusus_agsuseCodigo_whenValidateItem");
        if ((this.SETAGRUSUS.AGSUSE_CODIGO == null)) {
            // SEFAGRUS_LIB$DTNERFRMA("ENTRE EL CÓDIGO DE LA AGRUPACIÓN");
        }
        console.log("Exiting SEFAGRUS_setagrusus_agsuseCodigo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_toolbar_whenButtonPressed() {
        console.log("Entering SEFAGRUS_toolbar_whenButtonPressed");
        console.log("Exiting SEFAGRUS_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_toolbar_whenMouseLeave() {
        console.log("Entering SEFAGRUS_toolbar_whenMouseLeave");
        console.log("Exiting SEFAGRUS_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_toolbar_whenNewFormInstance() {
        console.log("Entering SEFAGRUS_toolbar_whenNewFormInstance");
        console.log("Exiting SEFAGRUS_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFAGRUS_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFAGRUS_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFAGRUS_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFAGRUS_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFAGRUS_toolbar_lastr_whenButtonPressed");
    }

}

