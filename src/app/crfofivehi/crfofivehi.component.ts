import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFOFIVEHI business logic
import {
    TOOLBAR,
    CRTOFIVEHI,
    BASE
} from "./CRFOFIVEHI_models";



// class CRFOFIVEHI
@Component({
    selector: 'app-crfofivehi',
    templateUrl: './crfofivehi.component.html',
})
export class CrfofivehiComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTOFIVEHI: CRTOFIVEHI = new CRTOFIVEHI();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_whenMouseDoubleclick() {
        console.log("Entering CRFOFIVEHI_whenMouseDoubleclick");
        console.log("Exiting CRFOFIVEHI_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_preForm() {
        console.log("Entering CRFOFIVEHI_preForm");
        console.log("Exiting CRFOFIVEHI_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_whenNewFormInstance() {
        console.log("Entering CRFOFIVEHI_whenNewFormInstance");
        console.log("Exiting CRFOFIVEHI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_toolbar_whenButtonPressed() {
        console.log("Entering CRFOFIVEHI_toolbar_whenButtonPressed");
        console.log("Exiting CRFOFIVEHI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_toolbar_whenMouseLeave() {
        console.log("Entering CRFOFIVEHI_toolbar_whenMouseLeave");
        console.log("Exiting CRFOFIVEHI_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_toolbar_whenNewFormInstance() {
        console.log("Entering CRFOFIVEHI_toolbar_whenNewFormInstance");
        console.log("Exiting CRFOFIVEHI_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIVEHI_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFOFIVEHI_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFOFIVEHI_base_fecha_whenNewItemInstance");
    }

}

