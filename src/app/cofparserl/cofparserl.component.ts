import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFPARSERL business logic
import {
    COTPARWEB,
    TOOLBAR,
    COTCONWEB,
    BASE
} from "./COFPARSERL_models";



// class COFPARSERL
@Component({
    selector: 'app-cofparserl',
    templateUrl: './cofparserl.component.html',
})
export class CofparserlComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTPARWEB: COTPARWEB = new COTPARWEB();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public COTCONWEB: COTCONWEB = new COTCONWEB();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   CLEAR_ALL_MASTER_DETAILS;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async COFPARSERL_onClearDetails() {
        console.log("Entering COFPARSERL_onClearDetails");
        //COFPARSERL_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting COFPARSERL_onClearDetails");
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async COFPARSERL_whenMouseDoubleclick() {
        console.log("Entering COFPARSERL_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting COFPARSERL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async COFPARSERL_onError() {
        console.log("Entering COFPARSERL_onError");
        //COFPARSERL_MENSAJE_ERRORES();
        console.log("Exiting COFPARSERL_onError");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async COFPARSERL_onMessage() {
        console.log("Entering COFPARSERL_onMessage");
        //COFPARSERL_MENSAJE_INFORMATIVOS();
        console.log("Exiting COFPARSERL_onMessage");
    }

    //#region PLSQL
    // BEGIN
    //    CLEAR_BLOCK;
    // END;
    //#endregion
    async COFPARSERL_keyClrfrm() {
        console.log("Entering COFPARSERL_keyClrfrm");
        this.oracleFormsBuiltins.clear_block();
        console.log("Exiting COFPARSERL_keyClrfrm");
    }

    //#region PLSQL
    // BEGIN  
    //  
    //   ---------------------------------------------------------------------
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
    //   GO_BLOCK('COTCONWEB');
    //   EXECUTE_QUERY;  
    // END;
    //#endregion
    async COFPARSERL_whenNewFormInstance() {
        console.log("Entering COFPARSERL_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/cofparserl/cofparserl_whennewforminstance_query1", payload1);
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
        this.oracleFormsBuiltins.go_block("COTCONWEB");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting COFPARSERL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PANTALLA; END;
    //#endregion
    async COFPARSERL_preForm() {
        console.log("Entering COFPARSERL_preForm");
        //COFPARSERL_PANTALLA();
        console.log("Exiting COFPARSERL_preForm");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async COFPARSERL_toolbar_whenButtonPressed() {
        console.log("Entering COFPARSERL_toolbar_whenButtonPressed");
        //COFPARSERL_TOOLBAR_ACTIONS();
        console.log("Exiting COFPARSERL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async COFPARSERL_toolbar_whenNewFormInstance() {
        console.log("Entering COFPARSERL_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting COFPARSERL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN FIRST_RECORD; END;
    //#endregion
    async COFPARSERL_toolbar_first_whenButtonPressed() {
        console.log("Entering COFPARSERL_toolbar_first_whenButtonPressed");
        this.oracleFormsBuiltins.first_record();
        console.log("Exiting COFPARSERL_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN LAST_RECORD; END;
    //#endregion
    async COFPARSERL_toolbar_lastr_whenButtonPressed() {
        console.log("Entering COFPARSERL_toolbar_lastr_whenButtonPressed");
        this.oracleFormsBuiltins.last_record();
        console.log("Exiting COFPARSERL_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN COTPARWEB DETAIL DECLARE SECTION
    //   --
    //   CURSOR COTPARWEB_CUR IS      
    //     SELECT 1 FROM OPS$COLOCA.COTPARWEB O     
    //     WHERE O.PARWEB_COWESE = :COTCONWEB.CONWEB_SEQUEN;
    //   --
    //   -- END COTPARWEB DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN COTPARWEB DETAIL PROGRAM SECTION
    //   --
    //   OPEN COTPARWEB_CUR;     
    //   FETCH COTPARWEB_CUR INTO DUMMY_DEFINE;     
    //   IF ( COTPARWEB_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE COTPARWEB_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE COTPARWEB_CUR;
    //   --
    //   -- END COTPARWEB DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async COFPARSERL_cotconweb_onCheckDeleteMaster() {
        console.log("Entering COFPARSERL_cotconweb_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting COFPARSERL_cotconweb_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   RECSTAT     VARCHAR2(20) := :SYSTEM.RECORD_STATUS;   
    //   STARTITM    VARCHAR2(61) := :SYSTEM.CURSOR_ITEM;   
    //   REL_ID      RELATION;
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   IF ( RECSTAT = 'NEW' OR RECSTAT = 'INSERT' ) THEN   
    //     RETURN;
    //   END IF;
    //   --
    //   -- BEGIN COTPARWEB DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:COTCONWEB.CONWEB_SEQUEN IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('COTCONWEB.COTCONWEB_COTPARWEB');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'COTPARWEB');   
    //   END IF;
    //   --
    //   -- END COTPARWEB DETAIL PROGRAM SECTION
    //   --
    // 
    //   IF ( :SYSTEM.CURSOR_ITEM <> STARTITM ) THEN     
    //      GO_ITEM(STARTITM);     
    //      CHECK_PACKAGE_FAILURE;     
    //   END IF;
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async COFPARSERL_cotconweb_onPopulateDetails() {
        console.log("Entering COFPARSERL_cotconweb_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            //return ret;
        }
        if ((this.COTCONWEB.CONWEB_SEQUEN != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("COTCONWEB.COTCONWEB_COTPARWEB");
            //COFPARSERL_QUERY_MASTER_DETAILS(REL_ID, "COTPARWEB");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            //COFPARSERL_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting COFPARSERL_cotconweb_onPopulateDetails");
    }

}

