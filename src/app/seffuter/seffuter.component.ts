import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFFUTER business logic
import {
    SETTJURTER,
    TOOLBAR,
    BASE
} from "./SEFFUTER_models";



// class SEFFUTER
@Component({
    selector: 'app-seffuter',
    templateUrl: './seffuter.component.html',
})
export class SeffuterComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETTJURTER: SETTJURTER = new SETTJURTER();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_onError() {
        console.log("Entering SEFFUTER_onError");
        console.log("Exiting SEFFUTER_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_whenMouseDoubleclick() {
        console.log("Entering SEFFUTER_whenMouseDoubleclick");
        console.log("Exiting SEFFUTER_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_onMessage() {
        console.log("Entering SEFFUTER_onMessage");
        console.log("Exiting SEFFUTER_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_preForm() {
        console.log("Entering SEFFUTER_preForm");
        console.log("Exiting SEFFUTER_preForm");
    }

    //#region PLSQL
    // BEGIN  
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING); 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //   :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSIF :BASE.BD IN ('TEST','TEST')  THEN
    //   :BASE.BASE_DAT := 'TEST';
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF;
    //   
    // ------------------------------------------------------  
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
    // -----------------------------------------------------------------------
    //   
    //   
    //   
    //   GO_BLOCK('SETTJURTER');
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFFUTER_whenNewFormInstance() {
        console.log("Entering SEFFUTER_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else if (["TEST", "TEST"].indexOf(this.BASE.BD) != -1) {
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
                const result1 = await Rest.post("/seffuter/seffuter_whennewforminstance_query1", payload1);
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

        this.oracleFormsBuiltins.go_block("SETTJURTER");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFFUTER_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  V_CONSEC NUMBER;
    // BEGIN
    //  BEGIN
    //   SELECT MAX(JURTER_CONSEC)
    //    INTO V_CONSEC
    //    FROM SETTJURTER;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_CONSEC:= 0;
    //  END;
    //  
    //  IF V_CONSEC = 0 OR V_CONSEC IS NULL THEN
    //   :SETTJURTER.JURTER_CONSEC := 1;
    //  ELSE
    //   :SETTJURTER.JURTER_CONSEC := V_CONSEC+1;
    //  END IF; 
    //  
    // END; 
    //#endregion
    async SEFFUTER_settjurter_preInsert() {
        console.log("Entering SEFFUTER_settjurter_preInsert");
        let V_CONSEC: number = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/seffuter_settjurter/seffuter_settjurter_preinsert_query1", payload1);
        // get values from result
        V_CONSEC = result1[0].get("V_CONSEC");
        if (result1 == null || result1.length == 0) {

            V_CONSEC = 0;
        }

        if ((V_CONSEC == 0 || (V_CONSEC == null))) {
            this.SETTJURTER.JURTER_CONSEC = 1;
        }
        else {
            this.SETTJURTER.JURTER_CONSEC = V_CONSEC + 1;
        }
        console.log("Exiting SEFFUTER_settjurter_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_toolbar_whenButtonPressed() {
        console.log("Entering SEFFUTER_toolbar_whenButtonPressed");
        console.log("Exiting SEFFUTER_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_toolbar_whenMouseLeave() {
        console.log("Entering SEFFUTER_toolbar_whenMouseLeave");
        console.log("Exiting SEFFUTER_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_toolbar_whenNewFormInstance() {
        console.log("Entering SEFFUTER_toolbar_whenNewFormInstance");
        console.log("Exiting SEFFUTER_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFFUTER_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFFUTER_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFFUTER_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFFUTER_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFFUTER_toolbar_lastr_whenButtonPressed");
    }

}

