import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFPRCIA business logic
import {
    CRTPRODCIA,
    TOOLBAR,
    BASE
} from "./CRFPRCIA_models";



// class CRFPRCIA
@Component({
    selector: 'app-crfprcia',
    templateUrl: './crfprcia.component.html',
})
export class CrfprciaComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTPRODCIA: CRTPRODCIA = new CRTPRODCIA();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_whenMouseDoubleclick() {
        console.log("Entering CRFPRCIA_whenMouseDoubleclick");
        console.log("Exiting CRFPRCIA_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_preForm() {
        console.log("Entering CRFPRCIA_preForm");
        console.log("Exiting CRFPRCIA_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_whenNewFormInstance() {
        console.log("Entering CRFPRCIA_whenNewFormInstance");
        console.log("Exiting CRFPRCIA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     NEXT_RECORD;
    // END;
    //#endregion
    async CRFPRCIA_crtprodcia_prodManofc_keyNextItem() {
        console.log("Entering CRFPRCIA_crtprodcia_prodManofc_keyNextItem");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting CRFPRCIA_crtprodcia_prodManofc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN
    //     COMMIT_FORM;
    //     NEXT_RECORD;
    // END;
    //#endregion
    async CRFPRCIA_crtprodcia_prodProdrfp_keyNextItem() {
        console.log("Entering CRFPRCIA_crtprodcia_prodProdrfp_keyNextItem");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.next_record();
        console.log("Exiting CRFPRCIA_crtprodcia_prodProdrfp_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_toolbar_whenButtonPressed() {
        console.log("Entering CRFPRCIA_toolbar_whenButtonPressed");
        console.log("Exiting CRFPRCIA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_toolbar_whenMouseLeave() {
        console.log("Entering CRFPRCIA_toolbar_whenMouseLeave");
        console.log("Exiting CRFPRCIA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_toolbar_whenNewFormInstance() {
        console.log("Entering CRFPRCIA_toolbar_whenNewFormInstance");
        console.log("Exiting CRFPRCIA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFPRCIA_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFPRCIA_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFPRCIA_base_fecha_whenNewItemInstance");
    }

}

