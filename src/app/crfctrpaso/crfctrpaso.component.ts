import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCTRPASO business logic
import {
    CRTSOLPASO,
    TOOLBAR,
    BASE
} from "./CRFCTRPASO_models";



// class CRFCTRPASO
@Component({
    selector: 'app-crfctrpaso',
    templateUrl: './crfctrpaso.component.html',
})
export class CrfctrpasoComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTSOLPASO: CRTSOLPASO = new CRTSOLPASO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTRPASO_whenMouseDoubleclick() {
        console.log("Entering CRFCTRPASO_whenMouseDoubleclick");
        console.log("Exiting CRFCTRPASO_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTRPASO_preForm() {
        console.log("Entering CRFCTRPASO_preForm");
        console.log("Exiting CRFCTRPASO_preForm");
    }

    //#region PLSQL
    // BEGIN ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // BEGIN 
    //     
    //  IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN 
    //    BEGIN
    //      SELECT COMPAN_NOLOGF 
    //        INTO V_IMAGEN
    //        FROM SGCOMPAN 
    //       WHERE COMPAN_CODCOM=:this.PARAMETER.get("P_OFICINA");
    //    EXCEPTION
    //      WHEN NO_DATA_FOUND THEN
    //       V_IMAGEN:='LOGO_LEASFORM.GIF';
    //    END;   
    // 
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.LOGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.LOGO'); 
    //  END IF;
    // END;
    // -----------------------------
    // 
    // REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFCTRPASO_whenNewFormInstance() {
        console.log("Entering CRFCTRPASO_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfctrpaso/crfctrpaso_whennewforminstance_query1", payload1);
                // get values from result
                V_IMAGEN = result1[0].get("V_IMAGEN");
                if (result1 == null || result1.length == 0) {

                    V_IMAGEN = "LOGO_LEASFORM.GIF";
                }

                this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.LOGO");
            }
            else {
                this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.LOGO");
            }
        }

        //CRFCTRPASO_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCTRPASO_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //    V_NUEVO_COD   NUMBER(3);
    // BEGIN
    //  BEGIN 
    //    IF :CRTSOLPASO.PASO_CODIGO IS NULL THEN
    //     BEGIN
    //      SELECT NVL(MAX(TO_NUMBER(NVL(PASO_CODIGO,0))),000)+1
    //      INTO   V_NUEVO_COD
    //      FROM   CRTSOLPASO;
    //      :CRTSOLPASO.PASO_CODIGO:= LPAD(TO_CHAR(V_NUEVO_COD),3,'0');
    //     EXCEPTION
    //     WHEN OTHERS THEN
    //     MESSAGE('FALLA AL ASIGNAR EL CODIGO DEL CÁLCULO.');
    //    END;
    //   END IF;
    //  END;
    // END;
    //#endregion
    async CRFCTRPASO_crtsolpaso_preInsert() {
        console.log("Entering CRFCTRPASO_crtsolpaso_preInsert");
        let V_NUEVO_COD: number = null;
        if ((this.CRTSOLPASO.PASO_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                // call REST API
                const result1 = await Rest.post("/crfctrpaso_crtsolpaso/crfctrpaso_crtsolpaso_preinsert_query1", payload1);
                // get values from result
                V_NUEVO_COD = result1[0].get("V_NUEVO_COD");
                this.CRTSOLPASO.PASO_CODIGO = OracleFormsBuiltins.lpad(V_NUEVO_COD.toString(), 3, "0");
            } catch (ex) {

                this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CODIGO DEL CÁLCULO.");
            }

        }
        console.log("Exiting CRFCTRPASO_crtsolpaso_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTRPASO_toolbar_whenButtonPressed() {
        console.log("Entering CRFCTRPASO_toolbar_whenButtonPressed");
        console.log("Exiting CRFCTRPASO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTRPASO_toolbar_whenMouseLeave() {
        console.log("Entering CRFCTRPASO_toolbar_whenMouseLeave");
        console.log("Exiting CRFCTRPASO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTRPASO_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCTRPASO_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCTRPASO_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCTRPASO_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCTRPASO_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCTRPASO_base_fecha_whenNewItemInstance");
    }

}

