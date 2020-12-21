import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFESTER business logic
import {
    SETPESTER,
    TOOLBAR,
    BASE
} from "./SEFESTER_models";



// class SEFESTER
@Component({
    selector: 'app-sefester',
    templateUrl: './sefester.component.html',
})
export class SefesterComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETPESTER: SETPESTER = new SETPESTER();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_onError() {
        console.log("Entering SEFESTER_onError");
        console.log("Exiting SEFESTER_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_whenMouseDoubleclick() {
        console.log("Entering SEFESTER_whenMouseDoubleclick");
        console.log("Exiting SEFESTER_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_onMessage() {
        console.log("Entering SEFESTER_onMessage");
        console.log("Exiting SEFESTER_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_preForm() {
        console.log("Entering SEFESTER_preForm");
        console.log("Exiting SEFESTER_preForm");
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
    //   ELSE 
    //   :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   EXECUTE_QUERY;
    // END;
    // 
    // 
    // ---------------------------------------------------------------------
    // -- LOGO
    // ---------------------------------------------------------------------
    // :BASE.BASE_DAT := UPPER(:BASE.BD) ;
    // DECLARE 
    //  V_IMAGEN VARCHAR2(20);
    // 
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
    // --------------------------------------------------------------------
    //#endregion
    async SEFESTER_whenNewFormInstance() {
        console.log("Entering SEFESTER_whenNewFormInstance");
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        this.oracleFormsBuiltins.execute_query();
        let V_IMAGEN: string = null;
        if ((this.PARAMETER.get("P_OFICINA") != null)) {
            // construct payload
            let payload1 = new Map();
            payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
            // call REST API
            const result1 = await Rest.post("/sefester/sefester_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFESTER_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$SEGUI.SETHISTERRES
    //         WHERE HISTER_ESTADO = :SETPESTER.PESTER_CODIGO;
    //     PRIMARY_DUMMY  VARCHAR2(1);
    // BEGIN
    //     IF ( ( :SETPESTER.PESTER_CODIGO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR EL ESTADO; TIENE REGISTROS ASOCIADOS A ÉL EN LA TABLA SETHISTERRES');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    //              
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$SEGUI.SETTERRES
    //         WHERE TERRES_ESTADO = :SETPESTER.PESTER_CODIGO;
    //     PRIMARY_DUMMY  VARCHAR2(1);
    // BEGIN
    //     IF ( ( :SETPESTER.PESTER_CODIGO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR EL ESTADO; TIENE REGISTROS ASOCIADOS A ÉL EN LA TABLA SETTERRES');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    // DELETE_RECORD;
    //#endregion
    async SEFESTER_setpester_keyDelrec() {
        console.log("Entering SEFESTER_setpester_keyDelrec");
        let PRIMARY_DUMMY: string = null;
        if ((this.SETPESTER.PESTER_CODIGO != null)) {
            if (null) {
                //SEFESTER_LIB$DTNERFRMA("NO SE PUEDE BORRAR EL ESTADO; TIENE REGISTROS ASOCIADOS A ÉL EN LA TABLA SETHISTERRES");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        if ((this.SETPESTER.PESTER_CODIGO != null)) {
            if (null) {
                //SEFESTER_LIB$DTNERFRMA("NO SE PUEDE BORRAR EL ESTADO; TIENE REGISTROS ASOCIADOS A ÉL EN LA TABLA SETTERRES");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting SEFESTER_setpester_keyDelrec");
    }

    //#region PLSQL
    // BEGIN
    //   IF :SETPESTER.PESTER_DESCRI IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE LA DESCRIPCIÓN DEL ESTADO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async SEFESTER_setpester_pesterDescri_whenValidateItem() {
        console.log("Entering SEFESTER_setpester_pesterDescri_whenValidateItem");
        if ((this.SETPESTER.PESTER_DESCRI == null)) {
            //SEFESTER_LIB$DTNERFRMA("ENTRE LA DESCRIPCIÓN DEL ESTADO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFESTER_setpester_pesterDescri_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :SETPESTER.PESTER_CODIGO IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL CÓDIGO DEL ESTADO');
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async SEFESTER_setpester_pesterCodigo_whenValidateItem() {
        console.log("Entering SEFESTER_setpester_pesterCodigo_whenValidateItem");
        if ((this.SETPESTER.PESTER_CODIGO == null)) {
            //SEFESTER_LIB$DTNERFRMA("ENTRE EL CÓDIGO DEL ESTADO");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFESTER_setpester_pesterCodigo_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_toolbar_whenButtonPressed() {
        console.log("Entering SEFESTER_toolbar_whenButtonPressed");
        console.log("Exiting SEFESTER_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_toolbar_whenMouseLeave() {
        console.log("Entering SEFESTER_toolbar_whenMouseLeave");
        console.log("Exiting SEFESTER_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_toolbar_whenNewFormInstance() {
        console.log("Entering SEFESTER_toolbar_whenNewFormInstance");
        console.log("Exiting SEFESTER_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFESTER_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFESTER_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFESTER_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFESTER_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFESTER_toolbar_lastr_whenButtonPressed");
    }

}

