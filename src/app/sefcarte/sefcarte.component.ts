import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFCARTE business logic
import {
    TOOLBAR,
    SETPCARTER,
    BASE
} from "./SEFCARTE_models";



// class SEFCARTE
@Component({
    selector: 'app-sefcarte',
    templateUrl: './sefcarte.component.html',
})
export class SefcarteComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public SETPCARTER: SETPCARTER = new SETPCARTER();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_onError() {
        console.log("Entering SEFCARTE_onError");
        console.log("Exiting SEFCARTE_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_whenMouseDoubleclick() {
        console.log("Entering SEFCARTE_whenMouseDoubleclick");
        console.log("Exiting SEFCARTE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_onMessage() {
        console.log("Entering SEFCARTE_onMessage");
        console.log("Exiting SEFCARTE_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_preForm() {
        console.log("Entering SEFCARTE_preForm");
        console.log("Exiting SEFCARTE_preForm");
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
    async SEFCARTE_whenNewFormInstance() {
        console.log("Entering SEFCARTE_whenNewFormInstance");
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
            const result1 = await Rest.post("/sefcarte/sefcarte_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFCARTE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_toolbar_whenButtonPressed() {
        console.log("Entering SEFCARTE_toolbar_whenButtonPressed");
        console.log("Exiting SEFCARTE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_toolbar_whenMouseLeave() {
        console.log("Entering SEFCARTE_toolbar_whenMouseLeave");
        console.log("Exiting SEFCARTE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_toolbar_whenNewFormInstance() {
        console.log("Entering SEFCARTE_toolbar_whenNewFormInstance");
        console.log("Exiting SEFCARTE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFCARTE_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFCARTE_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFCARTE_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFCARTE_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFCARTE_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$SEGUI.SETHISTERRES
    //         WHERE HISTER_CALRIE = :SETPCARTER.CARTER_CODIGO;
    //     PRIMARY_DUMMY  VARCHAR2(1);
    // BEGIN
    //     IF ( ( :SETPCARTER.CARTER_CODIGO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR LA CALIFICACIÓN PORQUE TIENE REGISTROS ASOCIADOS EN LA TABLA SETHISTERRES');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    //              
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$SEGUI.SETTERRESXFU
    //         WHERE TERXFU_CALRIE = :SETPCARTER.CARTER_CODIGO;
    //     PRIMARY_DUMMY  VARCHAR2(1);
    // BEGIN
    //     IF ( ( :SETPCARTER.CARTER_CODIGO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR LA CALIFICACIÓN PORQUE TIENE REGISTROS ASOCIADOS EN LA TABLA SETTERRESXFU');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    //              
    // DECLARE
    //     CURSOR PRIMARY_CUR IS SELECT 'X' FROM OPS$SEGUI.SETTERRES
    //         WHERE TERRES_CALRIE = :SETPCARTER.CARTER_CODIGO;
    //     PRIMARY_DUMMY  VARCHAR2(1);
    // BEGIN
    //     IF ( ( :SETPCARTER.CARTER_CODIGO IS NOT NULL ) ) THEN
    //         OPEN PRIMARY_CUR;
    //         FETCH PRIMARY_CUR INTO PRIMARY_DUMMY;
    //         IF ( PRIMARY_CUR%FOUND ) THEN
    //            CLOSE PRIMARY_CUR;
    //            LIB$DTNERFRMA('NO SE PUEDE BORRAR LA CALIFICACIÓN PORQUE TIENE REGISTROS ASOCIADOS EN LA TABLA SETTERRES');
    //            RAISE FORM_TRIGGER_FAILURE;
    //         END IF;
    //         CLOSE PRIMARY_CUR;
    //     END IF;
    // END;
    // DELETE_RECORD;
    //#endregion
    async SEFCARTE_setpcarter_keyDelrec() {
        console.log("Entering SEFCARTE_setpcarter_keyDelrec");
        let PRIMARY_DUMMY: string = null;
        if ((this.SETPCARTER.CARTER_CODIGO != null)) {
            if (null) {
                //SEFCARTE_LIB$DTNERFRMA("NO SE PUEDE BORRAR LA CALIFICACIÓN PORQUE TIENE REGISTROS ASOCIADOS EN LA TABLA SETHISTERRES");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        if ((this.SETPCARTER.CARTER_CODIGO != null)) {
            if (null) {
                //SEFCARTE_LIB$DTNERFRMA("NO SE PUEDE BORRAR LA CALIFICACIÓN PORQUE TIENE REGISTROS ASOCIADOS EN LA TABLA SETTERRESXFU");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        if ((this.SETPCARTER.CARTER_CODIGO != null)) {
            if (null) {
                //SEFCARTE_LIB$DTNERFRMA("NO SE PUEDE BORRAR LA CALIFICACIÓN PORQUE TIENE REGISTROS ASOCIADOS EN LA TABLA SETTERRES");
                console.log("FORM_TRIGGER_FAILURE");
                throw new Error('FORM_TRIGGER_FAILURE');
            }
        }
        console.log("Exiting SEFCARTE_setpcarter_keyDelrec");
    }

    //#region PLSQL
    // BEGIN
    //   IF :SETPCARTER.CARTER_DESCRI IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE LA DESCRIPCIÓN DE LA CALIFICACIÓN');
    //   END IF;
    // END;
    //#endregion
    async SEFCARTE_setpcarter_carterDescri_whenValidateItem() {
        console.log("Entering SEFCARTE_setpcarter_carterDescri_whenValidateItem");
        if ((this.SETPCARTER.CARTER_DESCRI == null)) {
            //SEFCARTE_LIB$DTNERFRMA("ENTRE LA DESCRIPCIÓN DE LA CALIFICACIÓN");
        }
        console.log("Exiting SEFCARTE_setpcarter_carterDescri_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   IF :SETPCARTER.CARTER_CODIGO IS NULL THEN
    //     LIB$DTNERFRMA('ENTRE EL CÓDIGO DE LA CALIFICACIÓN');
    //   ELSIF :SETPCARTER.CARTER_CODIGO < 0 THEN
    //     LIB$DTNERFRMA('EL CÓDIGO DEBE SER MAYOR A CERO');
    //   END IF;
    // END;
    //#endregion
    async SEFCARTE_setpcarter_carterCodigo_whenValidateItem() {
        console.log("Entering SEFCARTE_setpcarter_carterCodigo_whenValidateItem");
        if ((this.SETPCARTER.CARTER_CODIGO == null)) {
            //SEFCARTE_LIB$DTNERFRMA("ENTRE EL CÓDIGO DE LA CALIFICACIÓN");
        }
        else if (this.SETPCARTER.CARTER_CODIGO < 0) {
            //SEFCARTE_LIB$DTNERFRMA("EL CÓDIGO DEBE SER MAYOR A CERO");
        }
        console.log("Exiting SEFCARTE_setpcarter_carterCodigo_whenValidateItem");
    }

}

