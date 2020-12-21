import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace SEFPARSEM business logic
import {
    SETPARSEM,
    TOOLBAR,
    BASE
} from "./SEFPARSEM_models";



// class SEFPARSEM
@Component({
    selector: 'app-sefparsem',
    templateUrl: './sefparsem.component.html',
})
export class SefparsemComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public SETPARSEM: SETPARSEM = new SETPARSEM();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   ENTER_QUERY;
    // END;
    //#endregion
    async SEFPARSEM_keyEntqry() {
        console.log("Entering SEFPARSEM_keyEntqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting SEFPARSEM_keyEntqry");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_onError() {
        console.log("Entering SEFPARSEM_onError");
        console.log("Exiting SEFPARSEM_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_whenMouseDoubleclick() {
        console.log("Entering SEFPARSEM_whenMouseDoubleclick");
        console.log("Exiting SEFPARSEM_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_onMessage() {
        console.log("Entering SEFPARSEM_onMessage");
        console.log("Exiting SEFPARSEM_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_preForm() {
        console.log("Entering SEFPARSEM_preForm");
        console.log("Exiting SEFPARSEM_preForm");
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
    async SEFPARSEM_whenNewFormInstance() {
        console.log("Entering SEFPARSEM_whenNewFormInstance");
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
            const result1 = await Rest.post("/sefparsem/sefparsem_whennewforminstance_query1", payload1);
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
        console.log("Exiting SEFPARSEM_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    //   CLEAR_BLOCK(NO_VALIDATE);
    //   EXECUTE_QUERY;
    // END;
    //#endregion
    async SEFPARSEM_keyExeqry() {
        console.log("Entering SEFPARSEM_keyExeqry");
        this.oracleFormsBuiltins.commit_form();
        this.oracleFormsBuiltins.clear_block("NO_VALIDATE");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting SEFPARSEM_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async SEFPARSEM_keyCommit() {
        console.log("Entering SEFPARSEM_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting SEFPARSEM_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //  RESPUESTA NUMBER;
    //   VALOR_INICIAL SETPARSEM.PARSEM_VARINI%TYPE := :SETPARSEM.PARSEM_VARINI;
    //  VALOR_VERDE SETPARSEM.PARSEM_VARVER%TYPE := :SETPARSEM.PARSEM_VARVER;
    //   VALOR_NARANJA SETPARSEM.PARSEM_VARNAR%TYPE := :SETPARSEM.PARSEM_VARNAR;
    // BEGIN
    //  IF  VALOR_NARANJA <=  VALOR_VERDE THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR NARANJA DEBE SER MAYOR QUE EL VALOR VERDE...!!',NULL,NULL,NULL,RESPUESTA);
    //    :SETPARSEM.PARSEM_VARNAR := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;
    //  ELSIF  VALOR_VERDE <=  VALOR_INICIAL THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR VERDE DEBE SER MAYOR QUE EL VALOR INICIAL...!!',NULL,NULL,NULL,RESPUESTA);
    //    :SETPARSEM.PARSEM_VARVER := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;   
    //  END IF;
    // END;
    //#endregion
    async SEFPARSEM_setparsem_preUpdate() {
        console.log("Entering SEFPARSEM_setparsem_preUpdate");
        let RESPUESTA: number = null;
        let VALOR_INICIAL = this.SETPARSEM.PARSEM_VARINI;
        let VALOR_VERDE = this.SETPARSEM.PARSEM_VARVER;
        let VALOR_NARANJA = this.SETPARSEM.PARSEM_VARNAR;
        if (VALOR_NARANJA <= VALOR_VERDE) {
            //SEFPARSEM_LIB$ALERTA("MENSAJE", "EL VALOR NARANJA DEBE SER MAYOR QUE EL VALOR VERDE...!!", null, null, null, RESPUESTA);
            this.SETPARSEM.PARSEM_VARNAR = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (VALOR_VERDE <= VALOR_INICIAL) {
            // SEFPARSEM_LIB$ALERTA("MENSAJE", "EL VALOR VERDE DEBE SER MAYOR QUE EL VALOR INICIAL...!!", null, null, null, RESPUESTA);
            this.SETPARSEM.PARSEM_VARVER = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFPARSEM_setparsem_preUpdate");
    }

    //#region PLSQL
    // DECLARE
    //  RESPUESTA NUMBER;
    //   VALOR_INICIAL SETPARSEM.PARSEM_VARINI%TYPE := :SETPARSEM.PARSEM_VARINI;
    //  VALOR_VERDE SETPARSEM.PARSEM_VARVER%TYPE := :SETPARSEM.PARSEM_VARVER;
    //   VALOR_NARANJA SETPARSEM.PARSEM_VARNAR%TYPE := :SETPARSEM.PARSEM_VARNAR;
    // BEGIN
    //  IF  VALOR_NARANJA <=  VALOR_VERDE THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR NARANJA DEBE SER MAYOR QUE EL VALOR VERDE...!!',NULL,NULL,NULL,RESPUESTA);
    //    :SETPARSEM.PARSEM_VARNAR := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;
    //  ELSIF  VALOR_VERDE <=  VALOR_INICIAL THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR VERDE DEBE SER MAYOR QUE EL VALOR INICIAL...!!',NULL,NULL,NULL,RESPUESTA);
    //    :SETPARSEM.PARSEM_VARVER := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;   
    //  END IF;
    // END;
    //#endregion
    async SEFPARSEM_setparsem_preInsert() {
        console.log("Entering SEFPARSEM_setparsem_preInsert");
        let RESPUESTA: number = null;
        let VALOR_INICIAL = this.SETPARSEM.PARSEM_VARINI;
        let VALOR_VERDE = this.SETPARSEM.PARSEM_VARVER;
        let VALOR_NARANJA = this.SETPARSEM.PARSEM_VARNAR;
        if (VALOR_NARANJA <= VALOR_VERDE) {
            //SEFPARSEM_LIB$ALERTA("MENSAJE", "EL VALOR NARANJA DEBE SER MAYOR QUE EL VALOR VERDE...!!", null, null, null, RESPUESTA);
            this.SETPARSEM.PARSEM_VARNAR = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else if (VALOR_VERDE <= VALOR_INICIAL) {
            //SEFPARSEM_LIB$ALERTA("MENSAJE", "EL VALOR VERDE DEBE SER MAYOR QUE EL VALOR INICIAL...!!", null, null, null, RESPUESTA);
            this.SETPARSEM.PARSEM_VARVER = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFPARSEM_setparsem_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  RESPUESTA NUMBER;
    //  VALOR_INICIAL SETPARSEM.PARSEM_VARINI%TYPE := :SETPARSEM.PARSEM_VARINI;
    //  VALOR_VERDE SETPARSEM.PARSEM_VARVER%TYPE := :SETPARSEM.PARSEM_VARVER;
    // BEGIN
    //  IF  VALOR_VERDE <=  VALOR_INICIAL THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR VERDE DEBE SER MAYOR QUE EL VALOR INICIAL...!!',NULL,NULL,NULL,RESPUESTA);
    //    :SETPARSEM.PARSEM_VARVER := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async SEFPARSEM_setparsem_parsemVarver_whenValidateItem() {
        console.log("Entering SEFPARSEM_setparsem_parsemVarver_whenValidateItem");
        let RESPUESTA: number = null;
        let VALOR_INICIAL = this.SETPARSEM.PARSEM_VARINI;
        let VALOR_VERDE = this.SETPARSEM.PARSEM_VARVER;
        if (VALOR_VERDE <= VALOR_INICIAL) {
            //SEFPARSEM_LIB$ALERTA("MENSAJE", "EL VALOR VERDE DEBE SER MAYOR QUE EL VALOR INICIAL...!!", null, null, null, RESPUESTA);
            this.SETPARSEM.PARSEM_VARVER = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFPARSEM_setparsem_parsemVarver_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  RESPUESTA NUMBER;
    //  VALOR_VERDE SETPARSEM.PARSEM_VARVER%TYPE := :SETPARSEM.PARSEM_VARVER;
    //   VALOR_NARANJA SETPARSEM.PARSEM_VARNAR%TYPE := :SETPARSEM.PARSEM_VARNAR;
    // BEGIN
    //  IF  VALOR_NARANJA <=  VALOR_VERDE THEN
    //    LIB$ALERTA('MENSAJE','EL VALOR NARANJA DEBE SER MAYOR QUE EL VALOR VERDE...!!',NULL,NULL,NULL,RESPUESTA);
    //    :SETPARSEM.PARSEM_VARNAR := NULL;
    //    RAISE FORM_TRIGGER_FAILURE;
    //  END IF;
    // END;
    //#endregion
    async SEFPARSEM_setparsem_parsemVarnar_whenValidateItem() {
        console.log("Entering SEFPARSEM_setparsem_parsemVarnar_whenValidateItem");
        let RESPUESTA: number = null;
        let VALOR_VERDE = this.SETPARSEM.PARSEM_VARVER;
        let VALOR_NARANJA = this.SETPARSEM.PARSEM_VARNAR;
        if (VALOR_NARANJA <= VALOR_VERDE) {
            //SEFPARSEM_LIB$ALERTA("MENSAJE", "EL VALOR NARANJA DEBE SER MAYOR QUE EL VALOR VERDE...!!", null, null, null, RESPUESTA);
            this.SETPARSEM.PARSEM_VARNAR = null;
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting SEFPARSEM_setparsem_parsemVarnar_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_toolbar_whenButtonPressed() {
        console.log("Entering SEFPARSEM_toolbar_whenButtonPressed");
        console.log("Exiting SEFPARSEM_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_toolbar_whenMouseLeave() {
        console.log("Entering SEFPARSEM_toolbar_whenMouseLeave");
        console.log("Exiting SEFPARSEM_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_toolbar_whenNewFormInstance() {
        console.log("Entering SEFPARSEM_toolbar_whenNewFormInstance");
        console.log("Exiting SEFPARSEM_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_toolbar_first_whenButtonPressed() {
        console.log("Entering SEFPARSEM_toolbar_first_whenButtonPressed");
        console.log("Exiting SEFPARSEM_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async SEFPARSEM_toolbar_lastr_whenButtonPressed() {
        console.log("Entering SEFPARSEM_toolbar_lastr_whenButtonPressed");
        console.log("Exiting SEFPARSEM_toolbar_lastr_whenButtonPressed");
    }

}

