import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFAUDCOL business logic
import {
    FILTRO,
    PROCESO,
    COTAUDGAR,
    TOOLBAR,
    BASE
} from "./COFAUDCOL_models";



// class COFAUDCOL
@Component({
    selector: 'app-cofaudcol',
    templateUrl: './cofaudcol.component.html',
})
export class CofaudcolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public FILTRO: FILTRO = new FILTRO();
    public PROCESO: PROCESO = new PROCESO();
    public COTAUDGAR: COTAUDGAR = new COTAUDGAR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_onError() {
        console.log("Entering COFAUDCOL_onError");
        console.log("Exiting COFAUDCOL_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_whenMouseDoubleclick() {
        console.log("Entering COFAUDCOL_whenMouseDoubleclick");
        console.log("Exiting COFAUDCOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_onMessage() {
        console.log("Entering COFAUDCOL_onMessage");
        console.log("Exiting COFAUDCOL_onMessage");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_preForm() {
        console.log("Entering COFAUDCOL_preForm");
        console.log("Exiting COFAUDCOL_preForm");
    }

    //#region PLSQL
    // BEGIN  
    //  SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA   := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD      := GET_APPLICATION_PROPERTY(CONNECT_STRING);
    // 
    //   IF :BASE.BD IN ('FIN1','FIN1')  THEN
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
    // --------------------------------------------------------------------
    // 
    //   --EXECUTE_QUERY;
    //   --ENTER_QUERY;
    // END;
    //#endregion
    async COFAUDCOL_whenNewFormInstance() {
        console.log("Entering COFAUDCOL_whenNewFormInstance");
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
                const result1 = await Rest.post("/cofaudcol/cofaudcol_whennewforminstance_query1", payload1);
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

        console.log("Exiting COFAUDCOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('COTAUDGAR');
    // CLEAR_BLOCK;
    // GO_ITEM('FILTRO.FFINAL'); END;
    //#endregion
    async COFAUDCOL_filtro_ffinal_whenMouseClick() {
        console.log("Entering COFAUDCOL_filtro_ffinal_whenMouseClick");
        this.oracleFormsBuiltins.go_block("COTAUDGAR");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_item("FILTRO.FFINAL");
        console.log("Exiting COFAUDCOL_filtro_ffinal_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN 
    //   SELECT USU_NOMBRE
    //     INTO :FILTRO.DESCUSUARIO
    //   FROM SGUSUARIOS 
    //   WHERE USU_CODIGO = :FILTRO.CODUSUARIO;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    :FILTRO.DESCUSUARIO := 'USUARIO NO EXISTE';
    //  END;
    //#endregion
    async COFAUDCOL_filtro_codusuario_whenValidateItem() {
        console.log("Entering COFAUDCOL_filtro_codusuario_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("CODUSUARIO", this.FILTRO.CODUSUARIO);
        // call REST API
        const result1 = await Rest.post("/cofaudcol_filtro/cofaudcol_filtro_codusuario_whenvalidateitem_query1", payload1);
        // get values from result
        this.FILTRO.DESCUSUARIO = result1[0].get("FILTRO.DESCUSUARIO");
        if (result1 == null || result1.length == 0) {

            this.FILTRO.DESCUSUARIO = "USUARIO NO EXISTE";
        }

        console.log("Exiting COFAUDCOL_filtro_codusuario_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM ('FILTRO.DESCUSUARIO'); END;
    //#endregion
    async COFAUDCOL_filtro_codusuario_keyNextItem() {
        console.log("Entering COFAUDCOL_filtro_codusuario_keyNextItem");
        this.oracleFormsBuiltins.go_item("FILTRO.DESCUSUARIO");
        console.log("Exiting COFAUDCOL_filtro_codusuario_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   P_RESPUESTA  NUMBER := 0;
    //   V_RUTA VARCHAR2(200);
    // BEGIN
    //  V_RUTA := (:FILTRO.RUTA);
    //   IF    :FILTRO.RUTA IS NOT NULL THEN 
    //    PUP_GENERAPLANO3;
    //    --('COTAUDGAR',V_RUTA, P_RESPUESTA);
    //     LIB$ALERTA ('MENSAJE','HA TERMINADO LA GENERACIÓN DE LA INFORMACIÓN, POR FAVOR VALIDAR EN LA RUTA...','ACEPTAR',NULL,NULL,P_RESPUESTA);        
    //   END IF;      
    //  
    // END;
    //#endregion
    async COFAUDCOL_filtro_excel_whenButtonPressed() {
        console.log("Entering COFAUDCOL_filtro_excel_whenButtonPressed");
        let P_RESPUESTA: number = 0;
        let V_RUTA: string = null;
        V_RUTA = this.FILTRO.RUTA;
        if ((this.FILTRO.RUTA != null)) {
            // COFAUDCOL_PUP_GENERAPLANO3();
            // COFAUDCOL_LIB$ALERTA("MENSAJE", "HA TERMINADO LA GENERACIÓN DE LA INFORMACIÓN, POR FAVOR VALIDAR EN LA RUTA...", "ACEPTAR", null, null, P_RESPUESTA);
        }
        console.log("Exiting COFAUDCOL_filtro_excel_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  VFILTRO VARCHAR2(1000);
    // BEGIN
    //  VFILTRO := '';
    //  IF :FILTRO.CODUSUARIO IS NOT NULL THEN
    //   VFILTRO := 'AUDGAR_USUMOD = ''' || :FILTRO.CODUSUARIO|| '''';
    //  END IF;
    //  IF :FILTRO.FINICIAL IS NOT NULL THEN
    //   IF PLSQLBuiltins.string_length(VFILTRO) > 1 THEN
    //    VFILTRO := VFILTRO || ' AND ';
    //    END IF;
    //   VFILTRO := VFILTRO || ' TO_CHAR(AUDGAR_FECREG,''DD/MM/YYYY'') >= ''' || TO_CHAR(:FILTRO.FINICIAL,'DD/MM/YYYY') || '''';
    //  END IF;
    //  IF :FILTRO.FFINAL IS NOT NULL THEN
    //   IF PLSQLBuiltins.string_length(VFILTRO) > 1 THEN
    //    VFILTRO := VFILTRO || ' AND ';
    //    END IF;
    //   VFILTRO := VFILTRO || ' TO_CHAR(AUDGAR_FECREG,''DD/MM/YYYY'') <= ''' || TO_CHAR(:FILTRO.FFINAL,'DD/MM/YYYY') || '''';
    //  END IF;
    //  IF :FILTRO.DOCUMENTO IS NOT NULL THEN
    //   IF PLSQLBuiltins.string_length(VFILTRO) > 1 THEN
    //    VFILTRO := VFILTRO || ' AND ';
    //    END IF;
    //   VFILTRO := VFILTRO || ' AUDGAR_CODOFI||''-''||AUDGAR_TIPDOC||''-''||AUDGAR_CODCOL = ''' || :FILTRO.DOCUMENTO || '''';
    //  END IF;
    //  IF PLSQLBuiltins.string_length(VFILTRO) > 1 THEN
    //    SET_BLOCK_PROPERTY('COTAUDGAR', DEFAULT_WHERE, VFILTRO);
    //   END IF; 
    //    GO_BLOCK('COTAUDGAR');
    //    EXECUTE_QUERY;
    //  
    // END;
    //#endregion
    async COFAUDCOL_filtro_ejecutar_whenMouseClick() {
        console.log("Entering COFAUDCOL_filtro_ejecutar_whenMouseClick");
        let VFILTRO: string = null;
        VFILTRO = "";
        if ((this.FILTRO.CODUSUARIO != null)) {
            VFILTRO = "AUDGAR_USUMOD = ''" + this.FILTRO.CODUSUARIO + "''";
        }
        if ((this.FILTRO.FINICIAL != null)) {
            if (PLSQLBuiltins.string_length(VFILTRO) > 1) {
                VFILTRO = VFILTRO + " AND ";
            }
            VFILTRO = VFILTRO + " TO_CHAR(AUDGAR_FECREG,''DD/MM/YYYY'') >= ''" + this.FILTRO.FINICIAL.toString() + "''";
        }
        if ((this.FILTRO.FFINAL != null)) {
            if (PLSQLBuiltins.string_length(VFILTRO) > 1) {
                VFILTRO = VFILTRO + " AND ";
            }
            VFILTRO = VFILTRO + " TO_CHAR(AUDGAR_FECREG,''DD/MM/YYYY'') <= ''" + this.FILTRO.FFINAL.toString() + "''";
        }
        if ((this.FILTRO.DOCUMENTO != null)) {
            if (PLSQLBuiltins.string_length(VFILTRO) > 1) {
                VFILTRO = VFILTRO + " AND ";
            }
            VFILTRO = VFILTRO + " AUDGAR_CODOFI||''-''||AUDGAR_TIPDOC||''-''||AUDGAR_CODCOL = ''" + this.FILTRO.DOCUMENTO + "''";
        }
        if (PLSQLBuiltins.string_length(VFILTRO) > 1) {
            this.oracleFormsBuiltins.set_block_property("COTAUDGAR", "DEFAULT_WHERE", VFILTRO);
        }
        this.oracleFormsBuiltins.go_block("COTAUDGAR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting COFAUDCOL_filtro_ejecutar_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('COTAUDGAR');
    // CLEAR_BLOCK;
    // GO_ITEM('FILTRO.FINICIAL'); END;
    //#endregion
    async COFAUDCOL_filtro_finicial_whenMouseClick() {
        console.log("Entering COFAUDCOL_filtro_finicial_whenMouseClick");
        this.oracleFormsBuiltins.go_block("COTAUDGAR");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_item("FILTRO.FINICIAL");
        console.log("Exiting COFAUDCOL_filtro_finicial_whenMouseClick");
    }

    //#region PLSQL
    // DECLARE
    //  V_RUTA VARCHAR2(255);
    // BEGIN
    //  V_RUTA:=:FILTRO.RUTA;
    //  :FILTRO.RUTA := GET_FILE_NAME(FILE_FILTER=> 'DOCUMENTOS (*.DOC,*.XLS,*.TXT)');
    // 
    //  IF :FILTRO.RUTA IS NULL THEN
    //   :FILTRO.RUTA:=V_RUTA;
    //  END IF;
    // 
    // END;
    // 
    //   
    //#endregion
    async COFAUDCOL_filtro_gruta_whenButtonPressed() {
        console.log("Entering COFAUDCOL_filtro_gruta_whenButtonPressed");
        let V_RUTA: string = null;
        V_RUTA = this.FILTRO.RUTA;
        this.FILTRO.RUTA = this.oracleFormsBuiltins.get_file_name("DOCUMENTOS (*.DOC,*.XLS,*.TXT)");
        if ((this.FILTRO.RUTA == null)) {
            this.FILTRO.RUTA = V_RUTA;
        }
        console.log("Exiting COFAUDCOL_filtro_gruta_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_toolbar_whenButtonPressed() {
        console.log("Entering COFAUDCOL_toolbar_whenButtonPressed");
        console.log("Exiting COFAUDCOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_toolbar_whenNewFormInstance() {
        console.log("Entering COFAUDCOL_toolbar_whenNewFormInstance");
        console.log("Exiting COFAUDCOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_toolbar_first_whenButtonPressed() {
        console.log("Entering COFAUDCOL_toolbar_first_whenButtonPressed");
        console.log("Exiting COFAUDCOL_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFAUDCOL_toolbar_lastr_whenButtonPressed() {
        console.log("Entering COFAUDCOL_toolbar_lastr_whenButtonPressed");
        console.log("Exiting COFAUDCOL_toolbar_lastr_whenButtonPressed");
    }

}

