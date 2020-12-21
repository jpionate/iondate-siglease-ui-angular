import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace TERCON01 business logic
import {
    TER,
    REF_PARAM,
    TOOLBAR,
    BASE
} from "./TERCON01_models";



// class TERCON01
@Component({
    selector: 'app-tercon01',
    templateUrl: './tercon01.component.html',
})
export class Tercon01Component {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_TERPER', null],
        ['P_PERMISOS', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TER: TER = new TER();
    public REF_PARAM: REF_PARAM = new REF_PARAM();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async TERCON01_whenMouseDoubleclick() {
        console.log("Entering TERCON01_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting TERCON01_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async TERCON01_onError() {
        console.log("Entering TERCON01_onError");
        //TERCON01_MENSAJE_ERRORES();
        console.log("Exiting TERCON01_onError");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async TERCON01_onMessage() {
        console.log("Entering TERCON01_onMessage");
        //TERCON01_MENSAJE_INFORMATIVOS();
        console.log("Exiting TERCON01_onMessage");
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
    //   
    //   
    //   --PERMISOS POR USUARIO
    //    PU_PERMISO_BLOQUES;
    //   
    //   GO_BLOCK('REF_PARAM');
    // 
    // 
    // ---------------------------------------------------------------------
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
    // -----------------------------------------------------------------------
    // 
    // 
    // 
    // END;
    //#endregion
    async TERCON01_whenNewFormInstance() {
        console.log("Entering TERCON01_whenNewFormInstance");
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
        //TERCON01_PU_PERMISO_BLOQUES();
        this.oracleFormsBuiltins.go_block("REF_PARAM");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/tercon01/tercon01_whennewforminstance_query1", payload1);
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

        console.log("Exiting TERCON01_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA;
    // PINCIARSGRDADOFCNAS; END;
    //#endregion
    async TERCON01_preForm() {
        console.log("Entering TERCON01_preForm");
        //TERCON01_PANTALLA();
        //TERCON01_PINCIARSGRDADOFCNAS();
        console.log("Exiting TERCON01_preForm");
    }

    //#region PLSQL
    // BEGIN
    //   COMMIT_FORM;
    // END;
    //#endregion
    async TERCON01_keyCommit() {
        console.log("Entering TERCON01_keyCommit");
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting TERCON01_keyCommit");
    }

    //#region PLSQL
    // BEGIN EXIT_FORM; END;
    //#endregion
    async TERCON01_keyExit() {
        console.log("Entering TERCON01_keyExit");
        this.oracleFormsBuiltins.exit_form();
        console.log("Exiting TERCON01_keyExit");
    }

    async TERCON01_ter_keyEntqry() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //  
    // IF (:this.PARAMETER.get("P_PERMISOS") = 'NOC') THEN
    //  LIB$DTNERFRMA('NO TIENE PERMISOS DE CONSULTA.');
    //   
    // ELSIF (:this.PARAMETER.get("P_PERMISOS") = 'CON') THEN  
    //  
    //  IF (:TER.TERCOD IS NOT NULL) THEN
    //      PU_LLAMAR_FORTER(:TER.TERCOD, 'C');   
    //  ELSE 
    //     LIB$DTNERFRMA('DEBE INGRESAR UN TERCERO PARA CONSULTARLO.');
    //  END IF;
    // END IF;  
    // END;
    //#endregion
    async TERCON01_ter_btnSelter_whenButtonPressed() {
        console.log("Entering TERCON01_ter_btnSelter_whenButtonPressed");
        if (this.PARAMETER.get("P_PERMISOS") == "NOC") {
            //TERCON01_LIB$DTNERFRMA("NO TIENE PERMISOS DE CONSULTA.");
        }
        else if (this.PARAMETER.get("P_PERMISOS") == "CON") {
            if ((this.TER.TERCOD != null)) {
                //TERCON01_PU_LLAMAR_FORTER(TER.TERCOD, "C");
            }
            else {
                //TERCON01_LIB$DTNERFRMA("DEBE INGRESAR UN TERCERO PARA CONSULTARLO.");
            }
        }
        console.log("Exiting TERCON01_ter_btnSelter_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN CLEAR_RECORD;
    // GO_BLOCK('TER');
    // CLEAR_BLOCK;
    // GO_ITEM('REF_PARAM.NITTER'); END;
    //#endregion
    async TERCON01_refParam_btnLimpiar_whenButtonPressed() {
        console.log("Entering TERCON01_refParam_btnLimpiar_whenButtonPressed");
        this.oracleFormsBuiltins.clear_record();
        this.oracleFormsBuiltins.go_block("TER");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_item("REF_PARAM.NITTER");
        console.log("Exiting TERCON01_refParam_btnLimpiar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_CADENA VARCHAR2(2000);
    // BEGIN
    //  
    //  IF :NITTER IS NOT NULL THEN
    //   V_CADENA := 'UPPER(TERCOD) LIKE '''||:NITTER||'''';
    // 
    //  ELSIF :NOM1 IS NOT NULL THEN
    //   V_CADENA := 'UPPER(TERNOM) LIKE '''||:NOM1||'%''';
    //   IF :APE1 IS NOT NULL THEN  
    //    V_CADENA := V_CADENA||' AND UPPER(TERAPE) LIKE '''||:APE1||'%''';
    //   END IF;
    //  ELSE
    //   IF :APE1 IS NOT NULL  THEN  
    //    V_CADENA := ' UPPER(TERAPE) LIKE ''%'||:APE1||'%''';
    //   END IF;
    //  
    //  END IF;
    // 
    //  
    //  SET_BLOCK_PROPERTY('TER', DEFAULT_WHERE, V_CADENA);
    //   GO_BLOCK('TER');
    //   
    //   EXECUTE_QUERY;
    //   
    //   GO_ITEM('TER.BTN_SELTER');
    // 
    // END;
    //#endregion
    async TERCON01_refParam_btnBuscar_whenButtonPressed() {
        console.log("Entering TERCON01_refParam_btnBuscar_whenButtonPressed");
        let V_CADENA: string = null;
        // if ((NITTER != null)) {
        //     V_CADENA = "UPPER(TERCOD) LIKE ''" + NITTER + "''";
        // }
        // else if ((NOM1 != null)) {
        //     V_CADENA = "UPPER(TERNOM) LIKE ''" + NOM1 + "%''";
        //     if ((APE1 != null)) {
        //         V_CADENA = V_CADENA + " AND UPPER(TERAPE) LIKE ''" + APE1 + "%''";
        //     }
        // }
        // else {
        //     if ((APE1 != null)) {
        //         V_CADENA = " UPPER(TERAPE) LIKE ''%" + APE1 + "%''";
        //     }
        // }
        this.oracleFormsBuiltins.set_block_property("TER", "DEFAULT_WHERE", V_CADENA);
        this.oracleFormsBuiltins.go_block("TER");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_item("TER.BTN_SELTER");
        console.log("Exiting TERCON01_refParam_btnBuscar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async TERCON01_toolbar_whenButtonPressed() {
        console.log("Entering TERCON01_toolbar_whenButtonPressed");
        //TERCON01_TOOLBAR_ACTIONS();
        console.log("Exiting TERCON01_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async TERCON01_toolbar_whenMouseLeave() {
        console.log("Entering TERCON01_toolbar_whenMouseLeave");
        //TERCON01_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting TERCON01_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async TERCON01_toolbar_whenNewFormInstance() {
        console.log("Entering TERCON01_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting TERCON01_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async TERCON01_toolbar_first_whenButtonPressed() {
        console.log("Entering TERCON01_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting TERCON01_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async TERCON01_toolbar_lastr_whenButtonPressed() {
        console.log("Entering TERCON01_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting TERCON01_toolbar_lastr_whenButtonPressed");
    }

}

