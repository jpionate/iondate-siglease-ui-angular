import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCONSOL business logic
import {
    TBENS,
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./CRFCONSOL_models";



// class CRFCONSOL
@Component({
    selector: 'app-crfconsol',
    templateUrl: './crfconsol.component.html',
})
export class CrfconsolComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public TBENS: TBENS = new TBENS();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSOL_whenMouseDoubleclick() {
        console.log("Entering CRFCONSOL_whenMouseDoubleclick");
        console.log("Exiting CRFCONSOL_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSOL_preForm() {
        console.log("Entering CRFCONSOL_preForm");
        console.log("Exiting CRFCONSOL_preForm");
    }

    //#region PLSQL
    // BEGIN ---------------------------------------------------------------------
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
    // 
    // REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFCONSOL_whenNewFormInstance() {
        console.log("Entering CRFCONSOL_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfconsol/crfconsol_whennewforminstance_query1", payload1);
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

        //CRFCONSOL_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCONSOL_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ERASE('GLOBAL.AUXTERCERO');
    // EXIT_FORM; END;
    //#endregion
    async CRFCONSOL_keyExit() {
        console.log("Entering CRFCONSOL_keyExit");
        this.oracleFormsBuiltins.erase("GLOBAL.AUXTERCERO");
        this.oracleFormsBuiltins.exit_form();
        console.log("Exiting CRFCONSOL_keyExit");
    }

    async CRFCONSOL_tbens_keyDelrec() {
        // null;
    }

    async CRFCONSOL_tbens_keyNxtblk() {
        // null;
    }

    async CRFCONSOL_tbens_keyCrerec() {
        // null;
    }

    async CRFCONSOL_tbens_keyCommit() {
        // null;
    }

    async CRFCONSOL_tbens_keyExit() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   EXECUTE_QUERY;
    //   GO_BLOCK('CRTSOLICR');
    // END;
    //#endregion
    async CRFCONSOL_tbens_keyPrvblk() {
        console.log("Entering CRFCONSOL_tbens_keyPrvblk");
        this.oracleFormsBuiltins.execute_query();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFCONSOL_tbens_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN :GLOBAL.AUXTERCERO:=:TBENS.TERCOD;
    // HIDE_VIEW('TERCEROS');
    // GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCONSOL_tbens_keyNextItem() {
        console.log("Entering CRFCONSOL_tbens_keyNextItem");
        // this.GLOBAL.AUXTERCERO = this.TBENS.TERCOD;
        this.oracleFormsBuiltins.hide_view("TERCEROS");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCONSOL_tbens_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION VARCHAR2(60);
    // BEGIN
    //  BEGIN
    //   SELECT DESCRIPCION
    //      INTO V_OPCION
    //      FROM OPCIONES
    //      WHERE UPPER(PROGRAMA)=:SYSTEM.CURRENT_FORM
    //        AND PROGRAMA IS NOT NULL
    //        AND ROWNUM=1;
    //   EXCEPTION
    //    WHEN OTHERS THEN
    //     V_OPCION:=NULL;
    //   END;   
    //   EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('SOLICITUDESXCOMER',:SYSTEM.LAST_QUERY,V_OPCION);
    //  COMMIT;
    // END;
    //#endregion
    async CRFCONSOL_crtsolicr_keyExeqry() {
        console.log("Entering CRFCONSOL_crtsolicr_keyExeqry");
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        let result1 = [];
        try {

            // construct payload
            let payload1 = new Map();
            //payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
            // call REST API
            const result1 = await Rest.post("/crfconsol_crtsolicr/crfconsol_crtsolicr_keyexeqry_query1", payload1);
            // get values from result
            V_OPCION = result1[0].get("V_OPCION");
        } catch (ex) {

            V_OPCION = null;
        }

        this.oracleFormsBuiltins.execute_query();
        //CRFCONSOL_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("SOLICITUDESXCOMER", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
        console.log("Exiting CRFCONSOL_crtsolicr_keyExeqry");
    }

    //#region PLSQL
    // BEGIN
    //   :CRTSOLICR.DSP_ESTADO_SOLIC := FRM$DESC_ESTADO_SOL(:CRTSOLICR.SOLICR_ESTSOL);
    //     :GLOBAL.AUXTERCERO:=NULL;
    // END;
    // 
    // BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :NOMBRE
    //      FROM TER
    //    WHERE TERCOD=:SOLICR_NITTER;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END;
    // 
    // BEGIN
    //    SELECT OFIDES
    //      INTO :OFICINA
    //      FROM OFI
    //      WHERE OFICOD=:CRTSOLICR.SOLICR_OFCSOL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END;
    // 
    // BEGIN
    //    SELECT USU_NOMBRE
    //      INTO :NOMUSU
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=:BASE.USUARIO;
    //    EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    // END;
    // 
    // BEGIN
    //   IF :CRTSOLICR.SOLICR_TIPCRE = '03' THEN
    //      :CRTSOLICR.TIPO := 'CONTTO LEASING';
    //   ELSE :CRTSOLICR.TIPO := 'PAGARE';
    //   END IF;
    // END;
    //#endregion
    async CRFCONSOL_crtsolicr_postQuery() {
        console.log("Entering CRFCONSOL_crtsolicr_postQuery");
        // this.CRTSOLICR.DSP_ESTADO_SOLIC = FRM$DESC_ESTADO_SOL(CRTSOLICR.SOLICR_ESTSOL);
        //this.GLOBAL.AUXTERCERO = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_NITTER", SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfconsol_crtsolicr/crfconsol_crtsolicr_postquery_query1", payload1);
        // get values from result
        // NOMBRE = result1[0].get("NOMBRE");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        // payload2.set("SOLICR_OFCSOL", CRTSOLICR.SOLICR_OFCSOL);
        // call REST API
        const result2 = await Rest.post("/crfconsol_crtsolicr/crfconsol_crtsolicr_postquery_query2", payload2);
        // get values from result
        // OFICINA = result2[0].get("OFICINA");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("USUARIO", this.BASE.USUARIO);
        // call REST API
        const result3 = await Rest.post("/crfconsol_crtsolicr/crfconsol_crtsolicr_postquery_query3", payload3);
        // get values from result
        // NOMUSU = result3[0].get("NOMUSU");
        if (result3 == null || result3.length == 0) {

        }

        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.TIPO = "CONTTO LEASING";
        }
        else {
            this.CRTSOLICR.TIPO = "PAGARE";
        }
        console.log("Exiting CRFCONSOL_crtsolicr_postQuery");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_TIPCRE,:CRTSOLICR.SOLICR_CODSOL,'Q',
    //       :CRTSOLICR.SOLICR_CODUNI); END;
    //#endregion
    async CRFCONSOL_crtsolicr_detalles_whenMouseClick() {
        console.log("Entering CRFCONSOL_crtsolicr_detalles_whenMouseClick");
        //CRFCONSOL_PU_LLAMAR_SOLICITUD(CRTSOLICR.SOLICR_OFCSOL, CRTSOLICR.SOLICR_TIPCRE, CRTSOLICR.SOLICR_CODSOL, "Q", CRTSOLICR.SOLICR_CODUNI);
        console.log("Exiting CRFCONSOL_crtsolicr_detalles_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('TBENS');
    //  EXECUTE_QUERY; END;
    //#endregion
    async CRFCONSOL_crtsolicr_solicrNitter_keyListval() {
        console.log("Entering CRFCONSOL_crtsolicr_solicrNitter_keyListval");
        this.oracleFormsBuiltins.go_block("TBENS");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCONSOL_crtsolicr_solicrNitter_keyListval");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSOL_toolbar_whenButtonPressed() {
        console.log("Entering CRFCONSOL_toolbar_whenButtonPressed");
        console.log("Exiting CRFCONSOL_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSOL_toolbar_whenMouseLeave() {
        console.log("Entering CRFCONSOL_toolbar_whenMouseLeave");
        console.log("Exiting CRFCONSOL_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSOL_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCONSOL_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCONSOL_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCONSOL_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCONSOL_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCONSOL_base_fecha_whenNewItemInstance");
    }

}

