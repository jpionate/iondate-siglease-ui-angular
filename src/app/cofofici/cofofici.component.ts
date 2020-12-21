import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFOFICI business logic
import {
    COVOFISDES,
    PROCESO,
    TOOLBAR,
    BASE
} from "./COFOFICI_models";



// class COFOFICI
@Component({
    selector: 'app-cofofici',
    templateUrl: './cofofici.component.html',
})
export class CofoficiComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COVOFISDES: COVOFISDES = new COVOFISDES();
    public PROCESO: PROCESO = new PROCESO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_whenMouseDoubleclick() {
        console.log("Entering COFOFICI_whenMouseDoubleclick");
        console.log("Exiting COFOFICI_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_onError() {
        console.log("Entering COFOFICI_onError");
        console.log("Exiting COFOFICI_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_onMessage() {
        console.log("Entering COFOFICI_onMessage");
        console.log("Exiting COFOFICI_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_preForm() {
        console.log("Entering COFOFICI_preForm");
        console.log("Exiting COFOFICI_preForm");
    }

    //#region PLSQL
    // BEGIN SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING);
    //   
    // 
    // IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //      :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSIF :BASE.BD IN ('FINT','FINT')  THEN
    //      :BASE.BASE_DAT := 'TEST';
    //   ELSE
    //      :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    // --------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // --:BASE.BASE_DAT := UPPER(:BASE.BD) ;
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
    // 
    //  /*  -- ARQUITECTURA
    //   BEGIN
    //   SELECT USU_CODUNI 
    //    INTO :this.PARAMETER.get("P_UNIDAD")
    //   FROM SGUSUARIOS 
    //   WHERE USU_CODIGO = PLSQLBuiltins.user();
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //  LIB$DTNERFRMA('EL USUARIO '||USER
    //                 ||' NO TIENE ASIGNADO A NINGUNA UNIDAD');
    //   END;
    //   
    //   -- ARQUITECTURA*/ -- COMENTARIADO POR MELQ 18/01/2017
    // 
    // 
    // GO_BLOCK('COVOFISDES');
    // EXECUTE_QUERY; END;
    //#endregion
    async COFOFICI_whenNewFormInstance() {
        console.log("Entering COFOFICI_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else if (["FINT", "FINT"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "TEST";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/cofofici/cofofici_whennewforminstance_query1", payload1);
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

        this.oracleFormsBuiltins.go_block("COVOFISDES");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting COFOFICI_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //    SELECT PLAZAS_DESCRI DESCRIPCION      
    //      INTO :V_NOMPLAZA
    //    FROM CMTPLAZAS
    //    WHERE  PLAZAS_CODIGO = :CODPLAZA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :V_NOMPLAZA := NULL;
    // END;
    //#endregion
    async COFOFICI_covofisdes_codplaza_postChange() {
        console.log("Entering COFOFICI_covofisdes_codplaza_postChange");
        // construct payload
        let payload1 = new Map();
        payload1.set("CODPLAZA", this.COVOFISDES.CODPLAZA);
        // call REST API
        const result1 = await Rest.post("/cofofici_covofisdes/cofofici_covofisdes_codplaza_postchange_query1", payload1);
        // get values from result
        this.COVOFISDES.V_NOMPLAZA = result1[0].get("V_NOMPLAZA");
        if (result1 == null || result1.length == 0) {

            this.COVOFISDES.V_NOMPLAZA = null;
        }

        console.log("Exiting COFOFICI_covofisdes_codplaza_postChange");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_toolbar_whenButtonPressed() {
        console.log("Entering COFOFICI_toolbar_whenButtonPressed");
        console.log("Exiting COFOFICI_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_toolbar_whenNewFormInstance() {
        console.log("Entering COFOFICI_toolbar_whenNewFormInstance");
        console.log("Exiting COFOFICI_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_toolbar_first_whenButtonPressed() {
        console.log("Entering COFOFICI_toolbar_first_whenButtonPressed");
        console.log("Exiting COFOFICI_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFOFICI_toolbar_lastr_whenButtonPressed() {
        console.log("Entering COFOFICI_toolbar_lastr_whenButtonPressed");
        console.log("Exiting COFOFICI_toolbar_lastr_whenButtonPressed");
    }

}

