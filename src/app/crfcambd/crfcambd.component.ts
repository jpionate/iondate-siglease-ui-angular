import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCAMBD business logic
import {
    PARAMETROS,
    TOOLBAR,
    BASE
} from "./CRFCAMBD_models";



// class CRFCAMBD
@Component({
    selector: 'app-crfcambd',
    templateUrl: './crfcambd.component.html',
})
export class CrfcambdComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['OFICINA', null],
        ['P_OFICINA', null],
        ['TERCERO', null],
        ['SOLICITUD', null],
        ['CONTROL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMBD_whenMouseDoubleclick() {
        console.log("Entering CRFCAMBD_whenMouseDoubleclick");
        console.log("Exiting CRFCAMBD_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //    PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async CRFCAMBD_preForm() {
        console.log("Entering CRFCAMBD_preForm");
        //CRFCAMBD_PANTALLA();
        //CRFCAMBD_PINCIARSGRDADOFCNAS();
        console.log("Exiting CRFCAMBD_preForm");
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
    async CRFCAMBD_whenNewFormInstance() {
        console.log("Entering CRFCAMBD_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfcambd/crfcambd_whennewforminstance_query1", payload1);
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

        //CRFCAMBD_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCAMBD_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFCAMBD_keyDown() {
        console.log("Entering CRFCAMBD_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFCAMBD_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF (:PARAMETROS.ORI_OFI IS NOT NULL) OR (:PARAMETROS.ORI_UNIDAD IS NOT NULL) THEN --ARQUITECTURA
    //      --:PARAMETROS.ORI_PLANEA OR :PARAMETROS.NVA_OFI OR :PARAMETROS.NVA_SOLI IS NULL THEN 
    //      --:PARAMETROS.NVO_TIPO OR :PARAMETROS.NVA_PLANEA IS NULL THEN 
    //      PU_VALIDE_OPERACION;
    //       LIB$ALERTA('MENSAJE','INICIO CAMBIADO DE PLANEACIONES ',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //       IF FRM$ALERTA_SINO ('DESEA TRASLADAR LA PLANEACIÓN ORIGINAL A UNA NUEVA ?') = 1 THEN
    //       PU_TRASLADO_PLANEACIONES;
    //       END IF;
    //   ELSE
    //      LIB$ALERTA('MENSAJE','DEBE INGRESAR TODOS LOS PARAMETROS. FAVOR VERIFIQUE... ',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //   END IF;
    // END;
    //     
    //#endregion
    async CRFCAMBD_parametros_cambPlanea_whenButtonPressed() {
        console.log("Entering CRFCAMBD_parametros_cambPlanea_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if (((this.PARAMETROS.ORI_OFI != null) || (this.PARAMETROS.ORI_UNIDAD != null))) {
            //CRFCAMBD_PU_VALIDE_OPERACION();
            //CRFCAMBD_LIB$ALERTA("MENSAJE", "INICIO CAMBIADO DE PLANEACIONES ", null, null, null, T_RESPUESTA);
            //if (FRM$ALERTA_SINO("DESEA TRASLADAR LA PLANEACIÓN ORIGINAL A UNA NUEVA ?") == 1) {
            //    CRFCAMBD_PU_TRASLADO_PLANEACIONES();
            //}
        }
        else {
            //CRFCAMBD_LIB$ALERTA("MENSAJE", "DEBE INGRESAR TODOS LOS PARAMETROS. FAVOR VERIFIQUE... ", null, null, null, T_RESPUESTA);
        }
        console.log("Exiting CRFCAMBD_parametros_cambPlanea_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMBD_toolbar_whenButtonPressed() {
        console.log("Entering CRFCAMBD_toolbar_whenButtonPressed");
        console.log("Exiting CRFCAMBD_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMBD_toolbar_whenMouseLeave() {
        console.log("Entering CRFCAMBD_toolbar_whenMouseLeave");
        console.log("Exiting CRFCAMBD_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMBD_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCAMBD_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCAMBD_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMBD_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCAMBD_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCAMBD_base_fecha_whenNewItemInstance");
    }

}

