import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTOPSOL business logic
import {
    CRTTOPSOL,
    TOOLBAR,
    BASE
} from "./CRFTOPSOL_models";



// class CRFTOPSOL
@Component({
    selector: 'app-crftopsol',
    templateUrl: './crftopsol.component.html',
})
export class CrftopsolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTTOPSOL: CRTTOPSOL = new CRTTOPSOL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_whenMouseDoubleclick() {
        console.log("Entering CRFTOPSOL_whenMouseDoubleclick");
        console.log("Exiting CRFTOPSOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_preForm() {
        console.log("Entering CRFTOPSOL_preForm");
        console.log("Exiting CRFTOPSOL_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_whenNewFormInstance() {
        console.log("Entering CRFTOPSOL_whenNewFormInstance");
        console.log("Exiting CRFTOPSOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_toolbar_whenButtonPressed() {
        console.log("Entering CRFTOPSOL_toolbar_whenButtonPressed");
        console.log("Exiting CRFTOPSOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_toolbar_whenMouseLeave() {
        console.log("Entering CRFTOPSOL_toolbar_whenMouseLeave");
        console.log("Exiting CRFTOPSOL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTOPSOL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFTOPSOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFTOPSOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTOPSOL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFTOPSOL_base_fecha_whenNewItemInstance");
    }

}

