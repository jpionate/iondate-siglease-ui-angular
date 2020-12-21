import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFOFIDAV business logic
import {
    DVTOFCBAN,
    PLANO,
    TOOLBAR,
    BBOTONES,
    BASE
} from "./CRFOFIDAV_models";



// class CRFOFIDAV
@Component({
    selector: 'app-crfofidav',
    templateUrl: './crfofidav.component.html',
})
export class CrfofidavComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public DVTOFCBAN: DVTOFCBAN = new DVTOFCBAN();
    public PLANO: PLANO = new PLANO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BBOTONES: BBOTONES = new BBOTONES();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_whenMouseDoubleclick() {
        console.log("Entering CRFOFIDAV_whenMouseDoubleclick");
        console.log("Exiting CRFOFIDAV_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_preForm() {
        console.log("Entering CRFOFIDAV_preForm");
        console.log("Exiting CRFOFIDAV_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_whenNewFormInstance() {
        console.log("Entering CRFOFIDAV_whenNewFormInstance");
        console.log("Exiting CRFOFIDAV_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN PBD_INSEROFI(:DVTOFCBAN.OFCBAN_CODBAN,:DVTOFCBAN.OFCBAN_DESCRI,
    //               :DVTOFCBAN.OFCBAN_CODSUC,:DVTOFCBAN.SUCURSA_DESC); END;
    //#endregion
    async CRFOFIDAV_dvtofcban_postInsert() {
        console.log("Entering CRFOFIDAV_dvtofcban_postInsert");
        //CRFOFIDAV_PBD_INSEROFI(DVTOFCBAN.OFCBAN_CODBAN, DVTOFCBAN.OFCBAN_DESCRI, DVTOFCBAN.OFCBAN_CODSUC, DVTOFCBAN.SUCURSA_DESC);
        console.log("Exiting CRFOFIDAV_dvtofcban_postInsert");
    }

    //#region PLSQL
    // BEGIN
    // SELECT SUCDAV_DESCRI 
    // INTO :DVTOFCBAN.SUCURSA_DESC
    // FROM COTSUCDAV
    // WHERE SUCDAV_CODIGO = :DVTOFCBAN.OFCBAN_CODSUC;
    // EXCEPTION WHEN NO_DATA_FOUND THEN 
    //   :DVTOFCBAN.SUCURSA_DESC := NULL;
    // END;
    //#endregion
    async CRFOFIDAV_dvtofcban_postQuery() {
        console.log("Entering CRFOFIDAV_dvtofcban_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("OFCBAN_CODSUC", this.DVTOFCBAN.OFCBAN_CODSUC);
        // call REST API
        const result1 = await Rest.post("/crfofidav_dvtofcban/crfofidav_dvtofcban_postquery_query1", payload1);
        // get values from result
        this.DVTOFCBAN.SUCURSA_DESC = result1[0].get("DVTOFCBAN.SUCURSA_DESC");
        if (result1 == null || result1.length == 0) {

            this.DVTOFCBAN.SUCURSA_DESC = null;
        }

        console.log("Exiting CRFOFIDAV_dvtofcban_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  V_VALI  NUMBER;
    // BEGIN 
    // 
    //  V_VALI := FBD_VALIDAOFI (:DVTOFCBAN.OFCBAN_CODBAN,:DVTOFCBAN.OFCBAN_CODSUC);
    //  
    //  IF V_VALI = 0 THEN
    //    :DVTOFCBAN.OFCBAN_OFICOM := 'DAV';
    //  ELSE
    //     LIB$DTNERFRMA('LA OFICINA '||:DVTOFCBAN.OFCBAN_CODBAN ||' YA SE ENCUENTRA CREADA PARA '||
    //            'ALGUNA DE LAS TABLAS DVTCENHOM - DVTOFCSUC - CGPPROYE - CGPCECOS - CGPCECOS1'
    //            );
    //  END IF;  
    // 
    // END;
    //#endregion
    async CRFOFIDAV_dvtofcban_preInsert() {
        console.log("Entering CRFOFIDAV_dvtofcban_preInsert");
        let V_VALI: number = null;
        //V_VALI = FBD_VALIDAOFI(DVTOFCBAN.OFCBAN_CODBAN, DVTOFCBAN.OFCBAN_CODSUC);
        if (V_VALI == 0) {
            this.DVTOFCBAN.OFCBAN_OFICOM = "DAV";
        }
        else {
            //CRFOFIDAV_LIB$DTNERFRMA("LA OFICINA " + DVTOFCBAN.OFCBAN_CODBAN + " YA SE ENCUENTRA CREADA PARA " + "ALGUNA DE LAS TABLAS DVTCENHOM - DVTOFCSUC - CGPPROYE - CGPCECOS - CGPCECOS1");
        }
        console.log("Exiting CRFOFIDAV_dvtofcban_preInsert");
    }

    //#region PLSQL
    // BEGIN 
    //  PR_GENERAEXCEL;
    // 
    // IF :RG_TIPO = 'E' THEN
    //   LIB$OFFICE.ABRE_ARCHIVO ('EXCEL', :PLANO.RUTA);
    //   ELSE
    //    IF :RG_TIPO = 'W' THEN
    //    LIB$OFFICE.ABRE_ARCHIVO ('WORD', :PLANO.RUTA);
    //   ELSE
    //    LIB$OFFICE.ABRE_ARCHIVO ('TEXTO', :PLANO.RUTA);
    //   END IF;
    //   END IF;
    // 
    //  
    //  HIDE_WINDOW('WIN_PLANO');
    // 
    //   
    //   
    // END;
    //#endregion
    async CRFOFIDAV_plano_btnGenerar_whenButtonPressed() {
        console.log("Entering CRFOFIDAV_plano_btnGenerar_whenButtonPressed");
        //CRFOFIDAV_PR_GENERAEXCEL();
        // if (RG_TIPO == "E") {
        //     CRFOFIDAV_LIB$OFFICE.ABRE_ARCHIVO("EXCEL", PLANO.RUTA);
        // }
        // else {
        //     if (RG_TIPO == "W") {
        //         CRFOFIDAV_LIB$OFFICE.ABRE_ARCHIVO("WORD", PLANO.RUTA);
        //     }
        //     else {
        //         CRFOFIDAV_LIB$OFFICE.ABRE_ARCHIVO("TEXTO", PLANO.RUTA);
        //     }
        // }
        this.oracleFormsBuiltins.hide_window("WIN_PLANO");
        console.log("Exiting CRFOFIDAV_plano_btnGenerar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RG_TIPO = 'E' THEN
    //   :RUTA := SUBSTR(:RUTA ,1,INSTR(:RUTA,'.'))||'CSV';
    //  ELSE
    //   :RUTA := SUBSTR(:RUTA ,1,INSTR(:RUTA,'.'))||'TXT';
    //  END IF; END;
    //#endregion
    async CRFOFIDAV_plano_rgTipo_whenRadioChanged() {
        console.log("Entering CRFOFIDAV_plano_rgTipo_whenRadioChanged");
        // if (RG_TIPO == "E") {
        //     this.PLANO.RUTA = PLSQLBuiltins.substr(RUTA, 1, INSTR(RUTA, ".")) + "CSV";
        // }
        // else {
        //     this.PLANO.RUTA = PLSQLBuiltins.substr(RUTA, 1, INSTR(RUTA, ".")) + "TXT";
        // }
        console.log("Exiting CRFOFIDAV_plano_rgTipo_whenRadioChanged");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('BBOTONES.GENINFO');
    //  HIDE_WINDOW('WIN_PLANO'); END;
    //#endregion
    async CRFOFIDAV_plano_btnRegresar_whenButtonPressed() {
        console.log("Entering CRFOFIDAV_plano_btnRegresar_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("BBOTONES.GENINFO");
        this.oracleFormsBuiltins.hide_window("WIN_PLANO");
        console.log("Exiting CRFOFIDAV_plano_btnRegresar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_RUTA VARCHAR2(255);
    // BEGIN
    //  V_RUTA:=:PLANO.RUTA;
    //  :PLANO.RUTA := GET_FILE_NAME(FILE_FILTER=> 'DOCUMENTOS (*.DOC,*.XLS,*.TXT)');
    // 
    //  IF :PLANO.RUTA IS NULL THEN
    //   :PLANO.RUTA:=V_RUTA;
    //  END IF;
    // 
    // END;
    //   
    //#endregion
    async CRFOFIDAV_plano_btnAbre_whenButtonPressed() {
        console.log("Entering CRFOFIDAV_plano_btnAbre_whenButtonPressed");
        let V_RUTA: string = null;
        V_RUTA = this.PLANO.RUTA;
        this.PLANO.RUTA = this.oracleFormsBuiltins.get_file_name("DOCUMENTOS (*.DOC,*.XLS,*.TXT)");
        if ((this.PLANO.RUTA == null)) {
            this.PLANO.RUTA = V_RUTA;
        }
        console.log("Exiting CRFOFIDAV_plano_btnAbre_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_toolbar_whenButtonPressed() {
        console.log("Entering CRFOFIDAV_toolbar_whenButtonPressed");
        console.log("Exiting CRFOFIDAV_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_toolbar_whenMouseLeave() {
        console.log("Entering CRFOFIDAV_toolbar_whenMouseLeave");
        console.log("Exiting CRFOFIDAV_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_toolbar_whenNewFormInstance() {
        console.log("Entering CRFOFIDAV_toolbar_whenNewFormInstance");
        console.log("Exiting CRFOFIDAV_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //     V_EQUIPO VARCHAR2(100);
    // 
    //   BEGIN    
    //       BEGIN
    //       SELECT OSUSER
    //        INTO V_EQUIPO
    //        FROM OPS$AUDI.AUVSESION
    //          WHERE USERNAME=USER
    //         AND ROWNUM=1;
    //       EXCEPTION
    //        WHEN OTHERS THEN NULL; 
    //       END;
    //          
    //     -----------------------------  
    //       :PLANO.RUTA :='\\'||V_EQUIPO||'\COMPARTIDO\OFICINAS_DAVI.CSV';
    //         --:TXT_BLOQUE := 'COTESTCRE';
    //       GO_BLOCK('PLANO');
    //       LIB$AJUSTAVENTANA('WIN_PLANO',0,0);
    // 
    // 
    // 
    // END;
    //#endregion
    async CRFOFIDAV_bbotones_geninfo_whenButtonPressed() {
        console.log("Entering CRFOFIDAV_bbotones_geninfo_whenButtonPressed");
        let V_EQUIPO: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            // call REST API
            const result1 = await Rest.post("/crfofidav_bbotones/crfofidav_bbotones_geninfo_whenbuttonpressed_query1", payload1);
            // get values from result
            V_EQUIPO = result1[0].get("V_EQUIPO");
        } catch (ex) {

        }

        this.PLANO.RUTA = "\\" + V_EQUIPO + "\COMPARTIDO\OFICINAS_DAVI.CSV";
        this.oracleFormsBuiltins.go_block("PLANO");
        //CRFOFIDAV_LIB$AJUSTAVENTANA("WIN_PLANO", 0, 0);
        console.log("Exiting CRFOFIDAV_bbotones_geninfo_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFIDAV_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFOFIDAV_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFOFIDAV_base_fecha_whenNewItemInstance");
    }

}

