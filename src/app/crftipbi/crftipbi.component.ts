import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTIPBI business logic
import {
    CRTTIPBIEN,
    TOOLBAR,
    COTSUBCAT,
    BASE
} from "./CRFTIPBI_models";



// class CRFTIPBI
@Component({
    selector: 'app-crftipbi',
    templateUrl: './crftipbi.component.html',
})
export class CrftipbiComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTTIPBIEN: CRTTIPBIEN = new CRTTIPBIEN();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public COTSUBCAT: COTSUBCAT = new COTSUBCAT();
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
    async CRFTIPBI_onClearDetails() {
        console.log("Entering CRFTIPBI_onClearDetails");
        //CRFTIPBI_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFTIPBI_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_whenMouseDoubleclick() {
        console.log("Entering CRFTIPBI_whenMouseDoubleclick");
        console.log("Exiting CRFTIPBI_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_preForm() {
        console.log("Entering CRFTIPBI_preForm");
        console.log("Exiting CRFTIPBI_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_whenNewFormInstance() {
        console.log("Entering CRFTIPBI_whenNewFormInstance");
        console.log("Exiting CRFTIPBI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN COTSUBCAT DETAIL DECLARE SECTION
    //   --
    //   CURSOR COTSUBCAT_CUR IS      
    //     SELECT 1 FROM COTSUBCAT C     
    //     WHERE C.SUBCAT_CTPBIE = :CRTTIPBIEN.TIPBIEN_CODBIEN AND C.SUBCAT_CODUNI = :CRTTIPBIEN.TIPBIEN_CODUNI;
    //   --
    //   -- END COTSUBCAT DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN COTSUBCAT DETAIL PROGRAM SECTION
    //   --
    //   OPEN COTSUBCAT_CUR;     
    //   FETCH COTSUBCAT_CUR INTO DUMMY_DEFINE;     
    //   IF ( COTSUBCAT_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COTSUBCAT_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COTSUBCAT_CUR;
    //   --
    //   -- END COTSUBCAT DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFTIPBI_crttipbien_onCheckDeleteMaster() {
        console.log("Entering CRFTIPBI_crttipbien_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFTIPBI_crttipbien_onCheckDeleteMaster");
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
    //   -- BEGIN COTSUBCAT DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTTIPBIEN.TIPBIEN_CODBIEN IS NOT NULL) OR (:CRTTIPBIEN.TIPBIEN_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTTIPBIEN.CRTTIPBIEN_COTSUBCAT');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COTSUBCAT');   
    //   END IF;
    //   --
    //   -- END COTSUBCAT DETAIL PROGRAM SECTION
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
    async CRFTIPBI_crttipbien_onPopulateDetails() {
        console.log("Entering CRFTIPBI_crttipbien_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            //return ret;
        }
        if (((this.CRTTIPBIEN.TIPBIEN_CODBIEN != null) || (this.CRTTIPBIEN.TIPBIEN_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTTIPBIEN.CRTTIPBIEN_COTSUBCAT");
            //CRFTIPBI_QUERY_MASTER_DETAILS(REL_ID, "COTSUBCAT");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            //CRFTIPBI_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFTIPBI_crttipbien_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN --:CRTTIPBIEN.DES_CAL_PESO := :CRTTIPBIEN.TIPBIEN_JORNADA/:CRTTIPBIEN.TIPBIEN_DIASPERF;
    // NULL; END;
    //#endregion
    async CRFTIPBI_crttipbien_desCalPeso_postChange() {
        console.log("Entering CRFTIPBI_crttipbien_desCalPeso_postChange");
        console.log("Exiting CRFTIPBI_crttipbien_desCalPeso_postChange");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_toolbar_whenButtonPressed() {
        console.log("Entering CRFTIPBI_toolbar_whenButtonPressed");
        console.log("Exiting CRFTIPBI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_toolbar_whenMouseLeave() {
        console.log("Entering CRFTIPBI_toolbar_whenMouseLeave");
        console.log("Exiting CRFTIPBI_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTIPBI_toolbar_whenNewFormInstance");
        console.log("Exiting CRFTIPBI_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIPBI_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTIPBI_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFTIPBI_base_fecha_whenNewItemInstance");
    }

}

