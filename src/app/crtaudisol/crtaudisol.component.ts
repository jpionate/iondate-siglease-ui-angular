import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRTAUDISOL business logic
import {
    CRTAUDISOL,
    TOOLBAR,
    BASE
} from "./CRTAUDISOL_models";



// class CRTAUDISOL
@Component({
    selector: 'app-crtaudisol',
    templateUrl: './crtaudisol.component.html',
})
export class CrtaudisolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_NOMBRE_CAMPO', null],
        ['P_OFICINA', '001'],
        ['P_SOLICITUD', null],
        ['P_UNIDAD', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTAUDISOL: CRTAUDISOL = new CRTAUDISOL();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRTAUDISOL_whenMouseDoubleclick() {
        console.log("Entering CRTAUDISOL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRTAUDISOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRTAUDISOL_whenNewFormInstance() {
        console.log("Entering CRTAUDISOL_whenNewFormInstance");
        //CRTAUDISOL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRTAUDISOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //    PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRTAUDISOL_preForm() {
        console.log("Entering CRTAUDISOL_preForm");
        //CRTAUDISOL_PANTALLA();
        //CRTAUDISOL_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRTAUDISOL_preForm");
    }

    //#region PLSQL
    // BEGIN IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN
    //    :CRTAUDISOL.AUDI_OFCSOL := :this.PARAMETER.get("P_OFICINA") ;
    //    :CRTAUDISOL.AUDI_CODSOL := :this.PARAMETER.get("P_SOLICITUD");
    //    :CRTAUDISOL.AUDI_CODUNI := :this.PARAMETER.get("P_UNIDAD"); --ARQUITECTURA
    //    :CRTAUDISOL.AUDI_CAMPO  := :this.PARAMETER.get("P_NOMBRE_CAMPO");
    // END IF; END;
    //#endregion
    async CRTAUDISOL_crtaudisol_preQuery() {
        console.log("Entering CRTAUDISOL_crtaudisol_preQuery");
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            this.CRTAUDISOL.AUDI_OFCSOL = this.PARAMETER.get("P_OFICINA");
            this.CRTAUDISOL.AUDI_CODSOL = this.PARAMETER.get("P_SOLICITUD");
            this.CRTAUDISOL.AUDI_CODUNI = this.PARAMETER.get("P_UNIDAD");
            this.CRTAUDISOL.AUDI_CAMPO = this.PARAMETER.get("P_NOMBRE_CAMPO");
        }
        console.log("Exiting CRTAUDISOL_crtaudisol_preQuery");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRTAUDISOL_toolbar_whenButtonPressed() {
        console.log("Entering CRTAUDISOL_toolbar_whenButtonPressed");
        //CRTAUDISOL_TOOLBAR_ACTIONS();
        console.log("Exiting CRTAUDISOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRTAUDISOL_toolbar_whenMouseLeave() {
        console.log("Entering CRTAUDISOL_toolbar_whenMouseLeave");
        //CRTAUDISOL_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRTAUDISOL_toolbar_whenMouseLeave");
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
    async CRTAUDISOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRTAUDISOL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRTAUDISOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRTAUDISOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRTAUDISOL_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRTAUDISOL_base_fecha_whenNewItemInstance");
    }

}

