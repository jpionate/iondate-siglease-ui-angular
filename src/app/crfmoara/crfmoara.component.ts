import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFMOARA business logic
import {
    CRTMOTARA,
    TOOLBAR,
    BASE
} from "./CRFMOARA_models";



// class CRFMOARA
@Component({
    selector: 'app-crfmoara',
    templateUrl: './crfmoara.component.html',
})
export class CrfmoaraComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTMOTARA: CRTMOTARA = new CRTMOTARA();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_whenMouseDoubleclick() {
        console.log("Entering CRFMOARA_whenMouseDoubleclick");
        console.log("Exiting CRFMOARA_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_preForm() {
        console.log("Entering CRFMOARA_preForm");
        console.log("Exiting CRFMOARA_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_whenNewFormInstance() {
        console.log("Entering CRFMOARA_whenNewFormInstance");
        console.log("Exiting CRFMOARA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT CRTMOTARA_PK SECTION
    // --
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$COLOCA.CRTSOLICR
    //         WHERE SOLICR_MOTARA = :CRTMOTARA.MOTARA_MOTIVO;
    //     PRIMARY_DUMMY  CHAR(1);
    // BEGIN
    //     IF ( ( :CRTMOTARA.MOTARA_MOTIVO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO S EPUEDE BORRAR EL MOTIVO PORQUE EXISTEN SOLICITUDES ASOCIADAS A ÉL');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    // DELETE_RECORD;
    // --
    // -- END DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT CRTMOTARA_PK SECTION
    // --; END;
    //#endregion
    async CRFMOARA_crtmotara_keyDelrec() {
        console.log("Entering CRFMOARA_crtmotara_keyDelrec");
        let PRIMARY_DUMMY: string = null;
        if ((this.CRTMOTARA.MOTARA_MOTIVO != null)) {
            if (null) {
                //CRFMOARA_LIB$DTNERFRMA("NO S EPUEDE BORRAR EL MOTIVO PORQUE EXISTEN SOLICITUDES ASOCIADAS A ÉL");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting CRFMOARA_crtmotara_keyDelrec");
    }

    //#region PLSQL
    // BEGIN
    //  :CRTMOTARA.MOTARA_MOTIVO := PQBD_COL_GEN.FMAXCODMOAR + 1;
    // END;
    //#endregion
    async CRFMOARA_crtmotara_preInsert() {
        console.log("Entering CRFMOARA_crtmotara_preInsert");
        //this.CRTMOTARA.MOTARA_MOTIVO = this.PQBD_COL_GEN.FMAXCODMOAR + 1;
        console.log("Exiting CRFMOARA_crtmotara_preInsert");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT SYS_C0010324 SECTION
    // --
    // IF :CRTMOTARA.MOTARA_DESCRI IS NULL THEN
    //   LIB$DTNERFRMA('ENTRE LA DESCRIPCIÓN DEL MOTIVO');
    //   RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // --
    // -- END DEFAULT ENFORCE DATA INTEGRITY CONSTRAINT SYS_C0010324 SECTION
    // --; END;
    //#endregion
    async CRFMOARA_crtmotara_motaraDescri_whenValidateItem() {
        console.log("Entering CRFMOARA_crtmotara_motaraDescri_whenValidateItem");
        if ((this.CRTMOTARA.MOTARA_DESCRI == null)) {
            //CRFMOARA_LIB$DTNERFRMA("ENTRE LA DESCRIPCIÓN DEL MOTIVO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFMOARA_crtmotara_motaraDescri_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_toolbar_whenButtonPressed() {
        console.log("Entering CRFMOARA_toolbar_whenButtonPressed");
        console.log("Exiting CRFMOARA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_toolbar_whenMouseLeave() {
        console.log("Entering CRFMOARA_toolbar_whenMouseLeave");
        console.log("Exiting CRFMOARA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_toolbar_whenNewFormInstance() {
        console.log("Entering CRFMOARA_toolbar_whenNewFormInstance");
        console.log("Exiting CRFMOARA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFMOARA_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFMOARA_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFMOARA_base_fecha_whenNewItemInstance");
    }

}

