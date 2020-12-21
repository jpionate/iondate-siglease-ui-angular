import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRTLINRED business logic
import {
    CRTLINRED,
    TOOLBAR,
    BASE
} from "./CRTLINRED_models";



// class CRTLINRED
@Component({
    selector: 'app-crtlinred',
    templateUrl: './crtlinred.component.html',
})
export class CrtlinredComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTLINRED: CRTLINRED = new CRTLINRED();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRTLINRED_whenMouseDoubleclick() {
        console.log("Entering CRTLINRED_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRTLINRED_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRTLINRED_whenNewFormInstance() {
        console.log("Entering CRTLINRED_whenNewFormInstance");
        //CRTLINRED_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRTLINRED_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //    PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRTLINRED_preForm() {
        console.log("Entering CRTLINRED_preForm");
        //CRTLINRED_PANTALLA();
        //CRTLINRED_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRTLINRED_preForm");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRTLINRED_toolbar_whenButtonPressed() {
        console.log("Entering CRTLINRED_toolbar_whenButtonPressed");
        //CRTLINRED_TOOLBAR_ACTIONS();
        console.log("Exiting CRTLINRED_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRTLINRED_toolbar_whenMouseLeave() {
        console.log("Entering CRTLINRED_toolbar_whenMouseLeave");
        //CRTLINRED_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRTLINRED_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    // 
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async CRTLINRED_toolbar_whenNewFormInstance() {
        console.log("Entering CRTLINRED_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRTLINRED_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRTLINRED_base_fecha_whenNewItemInstance() {
        console.log("Entering CRTLINRED_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRTLINRED_base_fecha_whenNewItemInstance");
    }

}

