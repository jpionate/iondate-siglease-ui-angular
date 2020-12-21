import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFESTSOL business logic
import {
    CRTMOESSO,
    CRTESTSOLI,
    TOOLBAR,
    BASE
} from "./CRFESTSOL_models";



// class CRFESTSOL
@Component({
    selector: 'app-crfestsol',
    templateUrl: './crfestsol.component.html',
})
export class CrfestsolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTMOESSO: CRTMOESSO = new CRTMOESSO();
    public CRTESTSOLI: CRTESTSOLI = new CRTESTSOLI();
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
    async CRFESTSOL_onClearDetails() {
        console.log("Entering CRFESTSOL_onClearDetails");
        //CRFESTSOL_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFESTSOL_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_whenMouseDoubleclick() {
        console.log("Entering CRFESTSOL_whenMouseDoubleclick");
        console.log("Exiting CRFESTSOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_preForm() {
        console.log("Entering CRFESTSOL_preForm");
        console.log("Exiting CRFESTSOL_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_whenNewFormInstance() {
        console.log("Entering CRFESTSOL_whenNewFormInstance");
        console.log("Exiting CRFESTSOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT CRTMOESSO_PK SECTION
    // --
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$COLOCA.CRTSOLICR
    //         WHERE SOLICR_ESTSOL = :CRTMOESSO.MOESSO_ESTADO AND SOLICR_MOTEST = :CRTMOESSO.MOESSO_MOTIVO;
    //     PRIMARY_DUMMY  CHAR(1);
    // BEGIN
    //     IF ( ( :CRTMOESSO.MOESSO_ESTADO IS NOT NULL ) AND ( :CRTMOESSO.MOESSO_MOTIVO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR EL MOTIVO PORQUE EXISTEN SOLICITUDES ASOCIADAS A ÉL');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    // DELETE_RECORD;
    // --
    // -- END DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT CRTMOESSO_PK SECTION
    // --; END;
    //#endregion
    async CRFESTSOL_crtmoesso_keyDelrec() {
        console.log("Entering CRFESTSOL_crtmoesso_keyDelrec");
        let PRIMARY_DUMMY: string = null;
        if (((this.CRTMOESSO.MOESSO_ESTADO != null) && (this.CRTMOESSO.MOESSO_MOTIVO != null))) {
            if (null) {
                //CRFESTSOL_LIB$DTNERFRMA("NO SE PUEDE BORRAR EL MOTIVO PORQUE EXISTEN SOLICITUDES ASOCIADAS A ÉL");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFESTSOL_crtmoesso_keyDelrec");
    }

    //#region PLSQL
    // BEGIN
    //  :CRTMOESSO.MOESSO_MOTIVO := PQBD_COL_GEN.FMAXCODMOES(:CRTESTSOLI.ESTADO_CODIGO) + 1;
    // END;
    //#endregion
    async CRFESTSOL_crtmoesso_preInsert() {
        console.log("Entering CRFESTSOL_crtmoesso_preInsert");
        //this.CRTMOESSO.MOESSO_MOTIVO = PQBD_COL_GEN.FMAXCODMOES(CRTESTSOLI.ESTADO_CODIGO) + 1;
        console.log("Exiting CRFESTSOL_crtmoesso_preInsert");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT SYS_C0010351 SECTION
    // --
    // IF :CRTMOESSO.MOESSO_DESCRI IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE LA DESCRIPCIÓN');
    //   RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // --
    // -- END DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT SYS_C0010351 SECTION
    // --; END;
    //#endregion
    async CRFESTSOL_crtmoesso_moessoDescri_whenValidateItem() {
        console.log("Entering CRFESTSOL_crtmoesso_moessoDescri_whenValidateItem");
        if ((this.CRTMOESSO.MOESSO_DESCRI == null)) {
            //CRFESTSOL_LIB$DTNERFRMA("ENTRE LA DESCRIPCIÓN");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTSOL_crtmoesso_moessoDescri_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :CRTESTSOLI.ESTADO_CODIGO <> 'NG' THEN
    //  SET_ITEM_PROPERTY('CRTMOESSO.MOESSO_OTRNEG',VISIBLE,"PROPERTY_FALSE"); 
    // ELSE   
    //  SET_ITEM_PROPERTY('CRTMOESSO.MOESSO_OTRNEG',VISIBLE,"PROPERTY_TRUE"); 
    //  SET_ITEM_PROPERTY('CRTMOESSO.MOESSO_OTRNEG',ENABLED,"PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('CRTMOESSO.MOESSO_OTRNEG',INSERT_ALLOWED,"PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('CRTMOESSO.MOESSO_OTRNEG',"UPDATE_ALLOWED","PROPERTY_TRUE");
    //  
    // END IF; END;
    //#endregion
    async CRFESTSOL_crtestsoli_whenNewRecordInstance() {
        console.log("Entering CRFESTSOL_crtestsoli_whenNewRecordInstance");
        if (this.CRTESTSOLI.ESTADO_CODIGO != "NG") {
            this.oracleFormsBuiltins.set_item_property("CRTMOESSO.MOESSO_OTRNEG", "VISIBLE", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CRTMOESSO.MOESSO_OTRNEG", "VISIBLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTMOESSO.MOESSO_OTRNEG", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTMOESSO.MOESSO_OTRNEG", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("CRTMOESSO.MOESSO_OTRNEG", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        }
        console.log("Exiting CRFESTSOL_crtestsoli_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTMOESSO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTMOESSO_CUR IS      
    //     SELECT 1 FROM CRTMOESSO C     
    //     WHERE C.MOESSO_ESTADO = :CRTESTSOLI.ESTADO_CODIGO;
    //   --
    //   -- END CRTMOESSO DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTMOESSO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTMOESSO_CUR;     
    //   FETCH CRTMOESSO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTMOESSO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTMOESSO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTMOESSO_CUR;
    //   --
    //   -- END CRTMOESSO DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTSOL_crtestsoli_onCheckDeleteMaster() {
        console.log("Entering CRFESTSOL_crtestsoli_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTSOL_crtestsoli_onCheckDeleteMaster");
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
    //   -- BEGIN CRTMOESSO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTESTSOLI.ESTADO_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTESTSOLI.CRTESTSOLI_CRTMOESSO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTMOESSO');   
    //   END IF;
    //   --
    //   -- END CRTMOESSO DETAIL PROGRAM SECTION
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
    async CRFESTSOL_crtestsoli_onPopulateDetails() {
        console.log("Entering CRFESTSOL_crtestsoli_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            //return ret;
        }
        if ((this.CRTESTSOLI.ESTADO_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTESTSOLI.CRTESTSOLI_CRTMOESSO");
            //CRFESTSOL_QUERY_MASTER_DETAILS(REL_ID, "CRTMOESSO");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            //CRFESTSOL_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTSOL_crtestsoli_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_toolbar_whenButtonPressed() {
        console.log("Entering CRFESTSOL_toolbar_whenButtonPressed");
        console.log("Exiting CRFESTSOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_toolbar_whenMouseLeave() {
        console.log("Entering CRFESTSOL_toolbar_whenMouseLeave");
        console.log("Exiting CRFESTSOL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFESTSOL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFESTSOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTSOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFESTSOL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFESTSOL_base_fecha_whenNewItemInstance");
    }

}

