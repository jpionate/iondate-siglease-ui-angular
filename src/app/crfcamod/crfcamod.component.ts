import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCAMOD business logic
import {
    PARAMETROS,
    TOOLBAR,
    BASE
} from "./CRFCAMOD_models";



// class CRFCAMOD
@Component({
    selector: 'app-crfcamod',
    templateUrl: './crfcamod.component.html',
})
export class CrfcamodComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
        ['OFICINA', null],
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
    async CRFCAMOD_whenMouseDoubleclick() {
        console.log("Entering CRFCAMOD_whenMouseDoubleclick");
        console.log("Exiting CRFCAMOD_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMOD_preForm() {
        console.log("Entering CRFCAMOD_preForm");
        console.log("Exiting CRFCAMOD_preForm");
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
    async CRFCAMOD_whenNewFormInstance() {
        console.log("Entering CRFCAMOD_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfcamod/crfcamod_whennewforminstance_query1", payload1);
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

        //CRFCAMOD_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCAMOD_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFCAMOD_keyDown() {
        console.log("Entering CRFCAMOD_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFCAMOD_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //   CURSOR C1 IS 
    //     SELECT USU_CODIGO COD, USU_NOMBRE NOM
    //     FROM SGUSUARIOS
    //     WHERE USU_CARGO IN ('OD','OP')
    //     AND USU_ESTADO='A'
    //     ORDER BY USU_NOMBRE;
    // IT_ID ITEM;
    //   
    // BEGIN
    // 
    //   IT_ID := FIND_ITEM('OFICIALD'); 
    //     IF ID_NULL( IT_ID ) THEN
    //       MESSAGE('ERROR AL CARGAR PLANEACIONES DE LA SOLICITUD');
    //     ELSE
    //       CLEAR_LIST(IT_ID);
    //       FOR ACC IN C1 LOOP
    //         ADD_LIST_ELEMENT( IT_ID, 1, ACC.COD,ACC.NOM);
    //       END LOOP; 
    //     END IF;  
    // END;
    //#endregion
    async CRFCAMOD_parametros_xx() {
        console.log("Entering CRFCAMOD_parametros_xx");
        let IT_ID: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("OFICIALD");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR PLANEACIONES DE LA SOLICITUD");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        console.log("Exiting CRFCAMOD_parametros_xx");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :PARAMETROS.ORI_OFI IS NOT NULL THEN 
    //      SET_ITEM_PROPERTY('NVO_OFI',ENABLED,"ATTR_OFF");   
    //     IF  FRM$ALERTA_SINO ('DESEA DEJAR EL USUARIO ORIGINAL A LAS SOLICITUDES ?')= 1 THEN
    //      PUP_DEVUELVE_USUARIO;
    //     END IF;
    //    END IF;
    // END;
    //     
    //#endregion
    async CRFCAMOD_parametros_devOd_whenButtonPressed() {
        console.log("Entering CRFCAMOD_parametros_devOd_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((this.PARAMETROS.ORI_OFI != null)) {
            this.oracleFormsBuiltins.set_item_property("NVO_OFI", "ENABLED", "ATTR_OFF");
            // if (FRM$ALERTA_SINO("DESEA DEJAR EL USUARIO ORIGINAL A LAS SOLICITUDES ?") == 1) {
            //     CRFCAMOD_PUP_DEVUELVE_USUARIO();
            // }
        }
        console.log("Exiting CRFCAMOD_parametros_devOd_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //     CURSOR C1 IS 
    //     SELECT USU_NOMBRE NOM, USU_CODIGO COD
    //     FROM SGUSUARIOS
    //     WHERE USU_CARGO IN ('OD','OP')
    //     AND USU_ESTADO='A'
    //     AND USU_CODUNI=:PARAMETROS.UNIDAD--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA --15/01/2018
    //     ORDER BY USU_NOMBRE;
    //   IT_ID ITEM;
    //   IT_ID1 ITEM;
    //  
    // BEGIN
    //   IT_ID := FIND_ITEM('PARAMETROS.ORI_OFI'); 
    //    IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS USUARIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //          ADD_LIST_ELEMENT( IT_ID, 1, ACC.NOM, ACC.COD );
    //      END LOOP; 
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFCAMOD_parametros_oriOfi_whenNewItemInstance() {
        console.log("Entering CRFCAMOD_parametros_oriOfi_whenNewItemInstance");
        let IT_ID: null = null;
        let IT_ID1: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("PARAMETROS.ORI_OFI");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS USUARIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        console.log("Exiting CRFCAMOD_parametros_oriOfi_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //   IF (:PARAMETROS.ORI_OFI IS NULL)  OR  (:PARAMETROS.NVO_OFI IS NULL) 
    //       OR (:PARAMETROS.UNIDAD/*:this.PARAMETER.get("P_UNIDAD")*/ IS NULL) -- ARQUITECTURA --12/01/2018 MELQ
    //      THEN 
    //        LIB$ALERTA('MENSAJE','DEBE SELECCIONAR LOS USUARIOS A INTERCAMBIAR ... ',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //   ELSIF  FRM$ALERTA_SINO ('DESEA CAMBIAR EL USUARIO ORIGINAL POR EL NUEVO ?') = 1 THEN
    //          PUP_INTERCAMBIA_USUARIO;
    //   END IF;
    //  
    // END;
    //#endregion
    async CRFCAMOD_parametros_cambPlanea_whenButtonPressed() {
        console.log("Entering CRFCAMOD_parametros_cambPlanea_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((((this.PARAMETROS.ORI_OFI == null) || (this.PARAMETROS.NVO_OFI == null)) || (this.PARAMETROS.UNIDAD == null))) {
            //CRFCAMOD_LIB$ALERTA("MENSAJE", "DEBE SELECCIONAR LOS USUARIOS A INTERCAMBIAR ... ", null, null, null, T_RESPUESTA);
        }
        // else if (FRM$ALERTA_SINO("DESEA CAMBIAR EL USUARIO ORIGINAL POR EL NUEVO ?") == 1) {
        //     CRFCAMOD_PUP_INTERCAMBIA_USUARIO();
        // }
        console.log("Exiting CRFCAMOD_parametros_cambPlanea_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //     CURSOR C1 IS 
    //     SELECT USU_NOMBRE NOM, USU_CODIGO COD
    //     FROM SGUSUARIOS
    //     WHERE USU_CARGO IN ('OD','OP')
    //     AND USU_ESTADO='A'
    //     AND USU_CODUNI=:PARAMETROS.UNIDAD--:this.PARAMETER.get("P_UNIDAD") --ARQUITECTURA --15/01/2018
    //     ORDER BY USU_NOMBRE;
    //   IT_ID ITEM;
    //   IT_ID1 ITEM;
    //  
    // BEGIN
    //   IT_ID := FIND_ITEM('PARAMETROS.NVO_OFI'); 
    //    IF ID_NULL( IT_ID ) THEN
    //      MESSAGE('ERROR AL CARGAR LOS USUARIOS');
    //   ELSE
    //      CLEAR_LIST(IT_ID);
    //      FOR ACC IN C1 LOOP
    //          ADD_LIST_ELEMENT( IT_ID, 1, ACC.NOM, ACC.COD );
    //      END LOOP; 
    //   END IF;
    // 
    // END;
    //#endregion
    async CRFCAMOD_parametros_nvoOfi_whenNewItemInstance() {
        console.log("Entering CRFCAMOD_parametros_nvoOfi_whenNewItemInstance");
        let IT_ID: null = null;
        let IT_ID1: null = null;
        IT_ID = this.oracleFormsBuiltins.find_item("PARAMETROS.NVO_OFI");
        if (this.oracleFormsBuiltins.id_null(IT_ID)) {
            this.oracleFormsBuiltins.message("ERROR AL CARGAR LOS USUARIOS");
        }
        else {
            this.oracleFormsBuiltins.clear_list(IT_ID);
        }
        console.log("Exiting CRFCAMOD_parametros_nvoOfi_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMOD_toolbar_whenButtonPressed() {
        console.log("Entering CRFCAMOD_toolbar_whenButtonPressed");
        console.log("Exiting CRFCAMOD_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMOD_toolbar_whenMouseLeave() {
        console.log("Entering CRFCAMOD_toolbar_whenMouseLeave");
        console.log("Exiting CRFCAMOD_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMOD_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCAMOD_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCAMOD_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCAMOD_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCAMOD_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCAMOD_base_fecha_whenNewItemInstance");
    }

}

