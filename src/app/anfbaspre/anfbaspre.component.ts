import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace ANFBASPRE business logic
import {
    VARIABLE,
    COTPARLPE,
    COTBASPRE,
    TOOLBAR,
    BASE
} from "./ANFBASPRE_models";



// class ANFBASPRE
@Component({
    selector: 'app-anfbaspre',
    templateUrl: './anfbaspre.component.html',
})
export class AnfbaspreComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public COTPARLPE: COTPARLPE = new COTPARLPE();
    public COTBASPRE: COTBASPRE = new COTBASPRE();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  HIDE_VIEW('PAGINA1');
    // IF :SYSTEM.TAB_NEW_PAGE  = 'PARAMETROS' THEN
    //     GO_BLOCK('COTPARLPE');
    //     EXECUTE_QUERY;
    // ELSIF :SYSTEM.TAB_NEW_PAGE  = 'BASE' THEN
    //     GO_BLOCK('COTBASPRE');
    //     EXECUTE_QUERY;
    // END IF;
    // END;
    //#endregion
    async ANFBASPRE_whenTabPageChanged() {
        console.log("Entering ANFBASPRE_whenTabPageChanged");
        let T_RESPUESTA: number = null;
        this.oracleFormsBuiltins.hide_view("PAGINA1");
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "PARAMETROS") {
            this.oracleFormsBuiltins.go_block("COTPARLPE");
            this.oracleFormsBuiltins.execute_query();
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "BASE") {
            this.oracleFormsBuiltins.go_block("COTBASPRE");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting ANFBASPRE_whenTabPageChanged");
    }

    async ANFBASPRE_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN LIST_VALUES; END;
    //#endregion
    async ANFBASPRE_whenMouseDoubleclick() {
        console.log("Entering ANFBASPRE_whenMouseDoubleclick");
        this.oracleFormsBuiltins.list_values();
        console.log("Exiting ANFBASPRE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    // 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
    //      :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE
    //      :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
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
    // ---------------------------------------------------------; END;
    //#endregion
    async ANFBASPRE_whenNewFormInstance() {
        console.log("Entering ANFBASPRE_whenNewFormInstance");
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
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/anfbaspre/anfbaspre_whennewforminstance_query1", payload1);
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

        console.log("Exiting ANFBASPRE_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //   PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async ANFBASPRE_preForm() {
        console.log("Entering ANFBASPRE_preForm");
        // ANFBASPRE_PANTALLA();
        // ANFBASPRE_PINCIARSGRDADOFCNAS();
        console.log("Exiting ANFBASPRE_preForm");
    }

    async ANFBASPRE_keyPrvblk() {
        // null;
    }

    async ANFBASPRE_variable_keyNxtblk() {
        // null;
    }

    async ANFBASPRE_variable_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  P_1   VARCHAR2(100);
    // BEGIN
    //   BEGIN
    //   SELECT OSUSER
    //     INTO P_1
    //     FROM OPS$AUDI.AUVSESION
    //    WHERE USERNAME = USER
    //     AND ROWNUM   = 1;
    //   EXCEPTION WHEN OTHERS THEN
    //    NULL; 
    //   END;
    //   :ARCHIVO:='\\SERVAPL3\COMPARTIDO\BASEPREAPROBADOS.TXT';
    //   GO_ITEM('ARCHIVO');
    // END;
    //#endregion
    async ANFBASPRE_variable_generar1_whenButtonPressed() {
        console.log("Entering ANFBASPRE_variable_generar1_whenButtonPressed");
        let P_1: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/anfbaspre_variable/anfbaspre_variable_generar1_whenbuttonpressed_query1", payload1);
            // get values from result
            P_1 = result1[0].get("P_1");
        } catch (ex) {

        }

        this.VARIABLE.ARCHIVO = "\\SERVAPL3\COMPARTIDO\BASEPREAPROBADOS.TXT";
        this.oracleFormsBuiltins.go_item("ARCHIVO");
        console.log("Exiting ANFBASPRE_variable_generar1_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    // PUP_GENERARPLANO('COTBASPRE',:VARIABLE.ARCHIVO);
    // END;
    //#endregion
    async ANFBASPRE_variable_genrarchivo1_whenButtonPressed() {
        console.log("Entering ANFBASPRE_variable_genrarchivo1_whenButtonPressed");
        let T_RESPUESTA: number = null;
        // ANFBASPRE_PUP_GENERARPLANO("COTBASPRE", this.VARIABLE.ARCHIVO);
        console.log("Exiting ANFBASPRE_variable_genrarchivo1_whenButtonPressed");
    }

    async ANFBASPRE_variable_archivo_keyPrevItem() {
        // null;
    }

    async ANFBASPRE_variable_archivo_keyNxtblk() {
        // null;
    }

    async ANFBASPRE_variable_archivo_keyNextItem() {
        // null;
    }

    async ANFBASPRE_variable_archivo_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('ARCHIVO');
    // GO_BLOCK('COTBASPRE'); END;
    //#endregion
    async ANFBASPRE_variable_salir1_whenButtonPressed() {
        console.log("Entering ANFBASPRE_variable_salir1_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("ARCHIVO");
        this.oracleFormsBuiltins.go_block("COTBASPRE");
        console.log("Exiting ANFBASPRE_variable_salir1_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    //  V_CONTADOR   NUMBER;
    // BEGIN
    //  IF :VARIABLE.FECHA IS NULL  THEN
    //   LIB$ALERTA('MENSAJE','FECHA NULA POR FAVOR DIGITARLA ....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //   SYNCHRONIZE;
    //   :DESCRI:='GENERANDO PROCESO .........';
    //   SYNCHRONIZE;
    //    PQBD_COL_BASEPREAPRO.PBD_COL_BASEPREAPROBADOS(P_FECHA  => :VARIABLE.FECHA);
    //   SYNCHRONIZE;
    //   :DESCRI:='PROCESO  FINALIZADO...........';
    //   SYNCHRONIZE;
    //   COMMIT;
    //  END IF;
    // END;  
    //                        
    //#endregion
    async ANFBASPRE_variable_base_whenMouseClick() {
        console.log("Entering ANFBASPRE_variable_base_whenMouseClick");
        let T_RESPUESTA: number = null;
        let V_CONTADOR: number = null;
        if ((this.VARIABLE.FECHA == null)) {
            // ANFBASPRE_LIB$ALERTA("MENSAJE", "FECHA NULA POR FAVOR DIGITARLA ....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.synchronize();
            this.VARIABLE.DESCRI = "GENERANDO PROCESO .........";
            this.oracleFormsBuiltins.synchronize();
            // ANFBASPRE_PQBD_COL_BASEPREAPRO.PBD_COL_BASEPREAPROBADOS(this.VARIABLE.FECHA);
            this.oracleFormsBuiltins.synchronize();
            this.VARIABLE.DESCRI = "PROCESO  FINALIZADO...........";
            this.oracleFormsBuiltins.synchronize();
        }
        console.log("Exiting ANFBASPRE_variable_base_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN :COTPARLPE.PARLPE_FECACT := SYSDATE;
    // :COTPARLPE.PARLPE_ULTUSU := PLSQLBuiltins.user(); END;
    //#endregion
    async ANFBASPRE_cotparlpe_preUpdate() {
        console.log("Entering ANFBASPRE_cotparlpe_preUpdate");
        this.COTPARLPE.PARLPE_FECACT = PLSQLBuiltins.sysdate();
        this.COTPARLPE.PARLPE_ULTUSU = PLSQLBuiltins.user();
        console.log("Exiting ANFBASPRE_cotparlpe_preUpdate");
    }

    //#region PLSQL
    // BEGIN EXECUTE_QUERY; END;
    //#endregion
    async ANFBASPRE_cotparlpe_whenNewBlockInstance() {
        console.log("Entering ANFBASPRE_cotparlpe_whenNewBlockInstance");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting ANFBASPRE_cotparlpe_whenNewBlockInstance");
    }

    //#region PLSQL
    // BEGIN :COTPARLPE.PARLPE_FECACT := SYSDATE;
    // :COTPARLPE.PARLPE_ULTUSU := PLSQLBuiltins.user(); END;
    //#endregion
    async ANFBASPRE_cotparlpe_preInsert() {
        console.log("Entering ANFBASPRE_cotparlpe_preInsert");
        this.COTPARLPE.PARLPE_FECACT = PLSQLBuiltins.sysdate();
        this.COTPARLPE.PARLPE_ULTUSU = PLSQLBuiltins.user();
        console.log("Exiting ANFBASPRE_cotparlpe_preInsert");
    }

    //#region PLSQL
    // BEGIN TOOLBAR_ACTIONS; END;
    //#endregion
    async ANFBASPRE_toolbar_whenButtonPressed() {
        console.log("Entering ANFBASPRE_toolbar_whenButtonPressed");
        // ANFBASPRE_TOOLBAR_ACTIONS();
        console.log("Exiting ANFBASPRE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN
    //   DEL_TIMER('BUBBLE_DELAY');
    //   SET_ITEM_PROPERTY('TOOLBAR.BUTTON_HELP',"DISPLAYED","PROPERTY_OFF");
    // END;
    //#endregion
    async ANFBASPRE_toolbar_whenMouseLeave() {
        console.log("Entering ANFBASPRE_toolbar_whenMouseLeave");
        // ANFBASPRE_DEL_TIMER("BUBBLE_DELAY");
        this.oracleFormsBuiltins.set_item_property("TOOLBAR.BUTTON_HELP", "DISPLAYED", "PROPERTY_OFF");
        console.log("Exiting ANFBASPRE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN
    //    EXECUTE_QUERY;
    //    --:BASE.FECHA := SYSDATE;
    //    NEXT_BLOCK;
    //    ENTER_QUERY;
    // END;
    //#endregion
    async ANFBASPRE_toolbar_whenNewFormInstance() {
        console.log("Entering ANFBASPRE_toolbar_whenNewFormInstance");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.next_block();
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting ANFBASPRE_toolbar_whenNewFormInstance");
    }

}

