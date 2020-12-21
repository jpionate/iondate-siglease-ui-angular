import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTIOPER business logic
import {
    TOOLBAR,
    CRTTIOPER,
    BASE
} from "./CRFTIOPER_models";



// class CRFTIOPER
@Component({
    selector: 'app-crftioper',
    templateUrl: './crftioper.component.html',
})
export class CrftioperComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTTIOPER: CRTTIOPER = new CRTTIOPER();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_whenMouseDoubleclick() {
        console.log("Entering CRFTIOPER_whenMouseDoubleclick");
        console.log("Exiting CRFTIOPER_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_preForm() {
        console.log("Entering CRFTIOPER_preForm");
        console.log("Exiting CRFTIOPER_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_whenNewFormInstance() {
        console.log("Entering CRFTIOPER_whenNewFormInstance");
        console.log("Exiting CRFTIOPER_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_toolbar_whenButtonPressed() {
        console.log("Entering CRFTIOPER_toolbar_whenButtonPressed");
        console.log("Exiting CRFTIOPER_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_toolbar_whenMouseLeave() {
        console.log("Entering CRFTIOPER_toolbar_whenMouseLeave");
        console.log("Exiting CRFTIOPER_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTIOPER_toolbar_whenNewFormInstance");
        console.log("Exiting CRFTIOPER_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTIOPER_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTIOPER_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFTIOPER_base_fecha_whenNewItemInstance");
    }

}

