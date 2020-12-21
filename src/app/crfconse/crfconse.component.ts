import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCONSE business logic
import {
    DVTOFCSUC,
    CRTCSTVOS,
    TOOLBAR,
    BASE
} from "./CRFCONSE_models";



// class CRFCONSE
@Component({
    selector: 'app-crfconse',
    templateUrl: './crfconse.component.html',
})
export class CrfconseComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public DVTOFCSUC: DVTOFCSUC = new DVTOFCSUC();
    public CRTCSTVOS: CRTCSTVOS = new CRTCSTVOS();
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
    async CRFCONSE_onClearDetails() {
        console.log("Entering CRFCONSE_onClearDetails");
        //CRFCONSE_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFCONSE_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_whenMouseDoubleclick() {
        console.log("Entering CRFCONSE_whenMouseDoubleclick");
        console.log("Exiting CRFCONSE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_preForm() {
        console.log("Entering CRFCONSE_preForm");
        console.log("Exiting CRFCONSE_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_whenNewFormInstance() {
        console.log("Entering CRFCONSE_whenNewFormInstance");
        console.log("Exiting CRFCONSE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT SUCDAV_DESCRI 
    // INTO :DVTOFCSUC.SUCRSAL_DESC
    // FROM COTSUCDAV
    // WHERE SUCDAV_CODIGO = :DVTOFCSUC.OFCSUC_OFISUC;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //   :DVTOFCSUC.SUCRSAL_DESC := NULL;
    // END;
    //#endregion
    async CRFCONSE_dvtofcsuc_postQuery() {
        console.log("Entering CRFCONSE_dvtofcsuc_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFCSUC_OFISUC", this.DVTOFCSUC.OFCSUC_OFISUC);
        // call REST API
        const result1 = await Rest.post("/crfconse_dvtofcsuc/crfconse_dvtofcsuc_postquery_query1", payload1);
        // get values from result
        this.DVTOFCSUC.SUCRSAL_DESC = result1[0].get("DVTOFCSUC.SUCRSAL_DESC");
        if (result1 == null || result1.length == 0) {

            this.DVTOFCSUC.SUCRSAL_DESC = null;
        }

        console.log("Exiting CRFCONSE_dvtofcsuc_postQuery");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFCONSE_crtcstvos_whenNewRecordInstance() {
        console.log("Entering CRFCONSE_crtcstvos_whenNewRecordInstance");
        console.log("Exiting CRFCONSE_crtcstvos_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN DVTOFCSUC DETAIL DECLARE SECTION
    //   --
    //   CURSOR DVTOFCSUC_CUR IS      
    //     SELECT 1 FROM DVTOFCSUC D     
    //     WHERE D.OFCSUC_CODSOL = :CRTCSTVOS.CSTVOS_OFICIN AND D.OFCSUC_CODUNI = :CRTCSTVOS.CSTVOS_CODUNI;
    //   --
    //   -- END DVTOFCSUC DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN DVTOFCSUC DETAIL PROGRAM SECTION
    //   --
    //   OPEN DVTOFCSUC_CUR;     
    //   FETCH DVTOFCSUC_CUR INTO DUMMY_DEFINE;     
    //   IF ( DVTOFCSUC_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE DVTOFCSUC_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE DVTOFCSUC_CUR;
    //   --
    //   -- END DVTOFCSUC DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFCONSE_crtcstvos_onCheckDeleteMaster() {
        console.log("Entering CRFCONSE_crtcstvos_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFCONSE_crtcstvos_onCheckDeleteMaster");
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
    //   -- BEGIN DVTOFCSUC DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTCSTVOS.CSTVOS_OFICIN IS NOT NULL) OR (:CRTCSTVOS.CSTVOS_CODUNI IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTCSTVOS.CRTCSTVOS_DVTOFCSUC');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'DVTOFCSUC');   
    //   END IF;
    //   --
    //   -- END DVTOFCSUC DETAIL PROGRAM SECTION
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
    async CRFCONSE_crtcstvos_onPopulateDetails() {
        console.log("Entering CRFCONSE_crtcstvos_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            //return ret;
        }
        if (((this.CRTCSTVOS.CSTVOS_OFICIN != null) || (this.CRTCSTVOS.CSTVOS_CODUNI != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTCSTVOS.CRTCSTVOS_DVTOFCSUC");
            //CRFCONSE_QUERY_MASTER_DETAILS(REL_ID, "DVTOFCSUC");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            //CRFCONSE_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFCONSE_crtcstvos_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT I.OFIDES 
    //  INTO :CRTCSTVOS.DESC_OFI
    //  FROM OFI I 
    //  WHERE I.OFICOD = :CRTCSTVOS.CSTVOS_OFICIN;
    // EXCEPTION WHEN OTHERS THEN
    //   :CRTCSTVOS.DESC_OFI:= NULL;
    // END;
    //#endregion
    async CRFCONSE_crtcstvos_postQuery() {
        console.log("Entering CRFCONSE_crtcstvos_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("CSTVOS_OFICIN", this.CRTCSTVOS.CSTVOS_OFICIN);
            // call REST API
            const result1 = await Rest.post("/crfconse_crtcstvos/crfconse_crtcstvos_postquery_query1", payload1);
            // get values from result
            this.CRTCSTVOS.DESC_OFI = result1[0].get("CRTCSTVOS.DESC_OFI");
        } catch (ex) {

            this.CRTCSTVOS.DESC_OFI = null;
        }

        console.log("Exiting CRFCONSE_crtcstvos_postQuery");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_toolbar_whenButtonPressed() {
        console.log("Entering CRFCONSE_toolbar_whenButtonPressed");
        console.log("Exiting CRFCONSE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_toolbar_whenMouseLeave() {
        console.log("Entering CRFCONSE_toolbar_whenMouseLeave");
        console.log("Exiting CRFCONSE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCONSE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCONSE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSE_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCONSE_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCONSE_base_fecha_whenNewItemInstance");
    }

}

