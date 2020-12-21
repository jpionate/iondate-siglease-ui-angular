import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFTRIPOLI business logic
import {
    CRTTIPROLI,
    TLIN,
    TOOLBAR,
    BASE
} from "./CRFTRIPOLI_models";



// class CRFTRIPOLI
@Component({
    selector: 'app-crftripoli',
    templateUrl: './crftripoli.component.html',
})
export class CrftripoliComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTTIPROLI: CRTTIPROLI = new CRTTIPROLI();
    public TLIN: TLIN = new TLIN();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async CRFTRIPOLI_whenMouseDoubleclick() {
        console.log("Entering CRFTRIPOLI_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting CRFTRIPOLI_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFTRIPOLI_whenNewFormInstance() {
        console.log("Entering CRFTRIPOLI_whenNewFormInstance");
        //CRFTRIPOLI_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFTRIPOLI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFTRIPOLI_preForm() {
        console.log("Entering CRFTRIPOLI_preForm");
        //CRFTRIPOLI_PANTALLA();
        //CRFTRIPOLI_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFTRIPOLI_preForm");
    }

    //#region PLSQL
    // BEGIN EXIT_FORM (NO_VALIDATE); END;
    //#endregion
    async CRFTRIPOLI_keyExit() {
        console.log("Entering CRFTRIPOLI_keyExit");
        this.oracleFormsBuiltins.exit_form("NO_VALIDATE");
        console.log("Exiting CRFTRIPOLI_keyExit");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT  PROD_DESCRI DESCRIPCION
    //  INTO :CRTTIPROLI.IPROLI_CTIPRO_DESC
    //  FROM CRTPRODCIA 
    //  WHERE PROD_CODIGO = :CRTTIPROLI.IPROLI_CTIPRO
    //   AND  PROD_CODUNI = :CRTTIPROLI.IPROLI_CODUNI--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA
    //  ORDER BY 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //  :CRTTIPROLI.IPROLI_CTIPRO_DESC := NULL;
    // END;
    //#endregion
    async CRFTRIPOLI_crttiproli_postQuery() {
        console.log("Entering CRFTRIPOLI_crttiproli_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("IPROLI_CTIPRO", this.CRTTIPROLI.IPROLI_CTIPRO);
        payload1.set("IPROLI_CODUNI", this.CRTTIPROLI.IPROLI_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crftripoli_crttiproli/crftripoli_crttiproli_postquery_query1", payload1);
        // get values from result
        this.CRTTIPROLI.IPROLI_CTIPRO_DESC = result1[0].get("CRTTIPROLI.IPROLI_CTIPRO_DESC");
        if (result1 == null || result1.length == 0) {

            this.CRTTIPROLI.IPROLI_CTIPRO_DESC = null;
        }

        console.log("Exiting CRFTRIPOLI_crttiproli_postQuery");
    }

    //#region PLSQL
    // BEGIN :CRTTIPROLI.IPROLI_CLINEA := :TLIN.TLINCOD;
    // :CRTTIPROLI.IPROLI_CODUNI := '001';--:this.PARAMETER.get("P_UNIDAD"); --ARQUITECTURA; END;
    //#endregion
    async CRFTRIPOLI_crttiproli_preInsert() {
        console.log("Entering CRFTRIPOLI_crttiproli_preInsert");
        this.CRTTIPROLI.IPROLI_CLINEA = this.TLIN.TLINCOD;
        this.CRTTIPROLI.IPROLI_CODUNI = "001";
        console.log("Exiting CRFTRIPOLI_crttiproli_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  VAR_UNI NUMBER;
    // 
    // BEGIN  
    //   IF :CRTTIPROLI.IPROLI_CODUNI IS NOT NULL THEN
    //     BEGIN
    //       SELECT CTTUNICO_UNDNEG 
    //       INTO   VAR_UNI
    //       FROM   CTTUNICO
    //       WHERE  CTTUNICO_UNDNEG = :CRTTIPROLI.IPROLI_CODUNI; 
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //         :CRTTIPROLI.IPROLI_CODUNI := NULL;
    //           LIB$DTNERFRMA('LA UNIDAD '||:CRTTIPROLI.IPROLI_CODUNI||'-'||' NO EXISTE EN LA BASE DE DATOS' );
    //         WHEN TOO_MANY_ROWS THEN NULL;         
    //       END;
    // END IF;
    // END;
    //#endregion
    async CRFTRIPOLI_crttiproli_iproliCoduni_whenValidateItem() {
        console.log("Entering CRFTRIPOLI_crttiproli_iproliCoduni_whenValidateItem");
        let VAR_UNI: number = null;
        if ((this.CRTTIPROLI.IPROLI_CODUNI != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("IPROLI_CODUNI", this.CRTTIPROLI.IPROLI_CODUNI);
            // call REST API
            const result1 = await Rest.post("/crftripoli_crttiproli/crftripoli_crttiproli_iprolicoduni_whenvalidateitem_query1", payload1);
            // get values from result
            VAR_UNI = result1[0].get("VAR_UNI");
            if (result1 == null || result1.length == 0) {

                this.CRTTIPROLI.IPROLI_CODUNI = null;
                //CRFTRIPOLI_LIB$DTNERFRMA("LA UNIDAD " + this.CRTTIPROLI.IPROLI_CODUNI + "-" + " NO EXISTE EN LA BASE DE DATOS");
            }

        }
        console.log("Exiting CRFTRIPOLI_crttiproli_iproliCoduni_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('TLIN.TLINDES'); END;
    //#endregion
    async CRFTRIPOLI_crttiproli_iproliCtipro_keyPrevItem() {
        console.log("Entering CRFTRIPOLI_crttiproli_iproliCtipro_keyPrevItem");
        this.oracleFormsBuiltins.go_item("TLIN.TLINDES");
        console.log("Exiting CRFTRIPOLI_crttiproli_iproliCtipro_keyPrevItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK ('CRTTIPROLI');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFTRIPOLI_tlin_whenMouseClick() {
        console.log("Entering CRFTRIPOLI_tlin_whenMouseClick");
        this.oracleFormsBuiltins.go_block("CRTTIPROLI");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFTRIPOLI_tlin_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async CRFTRIPOLI_toolbar_whenButtonPressed() {
        console.log("Entering CRFTRIPOLI_toolbar_whenButtonPressed");
        //CRFTRIPOLI_TOOLBAR_ACTIONS();
        console.log("Exiting CRFTRIPOLI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async CRFTRIPOLI_toolbar_whenMouseLeave() {
        console.log("Entering CRFTRIPOLI_toolbar_whenMouseLeave");
        //CRFTRIPOLI_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting CRFTRIPOLI_toolbar_whenMouseLeave");
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
    async CRFTRIPOLI_toolbar_whenNewFormInstance() {
        console.log("Entering CRFTRIPOLI_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFTRIPOLI_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN READ_IMAGE_FILE('LOGO_DAVIFORM.GIF','GIF','BASE.LOGO'); END;
    //#endregion
    async CRFTRIPOLI_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFTRIPOLI_base_fecha_whenNewItemInstance");
        this.oracleFormsBuiltins.read_image_file("LOGO_DAVIFORM.GIF", "GIF", "BASE.LOGO");
        console.log("Exiting CRFTRIPOLI_base_fecha_whenNewItemInstance");
    }

}

