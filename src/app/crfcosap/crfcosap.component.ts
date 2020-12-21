import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFCOSAP business logic
import {
    VARIABLE,
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./CRFCOSAP_models";



// class CRFCOSAP
@Component({
    selector: 'app-crfcosap',
    templateUrl: './crfcosap.component.html',
})
export class CrfcosapComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public VARIABLE: VARIABLE = new VARIABLE();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOSAP_whenMouseDoubleclick() {
        console.log("Entering CRFCOSAP_whenMouseDoubleclick");
        console.log("Exiting CRFCOSAP_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOSAP_preForm() {
        console.log("Entering CRFCOSAP_preForm");
        console.log("Exiting CRFCOSAP_preForm");
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
    // REF$WHEN_NEW_FORM_INSTANCE; END;
    //#endregion
    async CRFCOSAP_whenNewFormInstance() {
        console.log("Entering CRFCOSAP_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/crfcosap/crfcosap_whennewforminstance_query1", payload1);
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

        //CRFCOSAP_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting CRFCOSAP_whenNewFormInstance");
    }

    async CRFCOSAP_variable_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCOSAP_variable_keyNxtblk() {
        console.log("Entering CRFCOSAP_variable_keyNxtblk");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCOSAP_variable_keyNxtblk");
    }

    async CRFCOSAP_variable_keyCrerec() {
        // null;
    }

    async CRFCOSAP_variable_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    // PL_ID PARAMLIST;
    // BEGIN
    //    PL_ID:=GET_PARAMETER_LIST('PARAMETROS');
    //     IF NOT ID_NULL(PL_ID) THEN
    //        DESTROY_PARAMETER_LIST(PL_ID);
    //     END IF;
    //     PL_ID:=CREATE_PARAMETER_LIST('PARAMETROS');
    //     ADD_PARAMETER(PL_ID,'TERCERO',"TEXT_PARAMETER",:TERCERO);
    //     RUN_PRODUCT(REPORTS,'CRRSOLAP',SYNCHRONOUS,RUNTIME,FILESYSTEM,PL_ID,
    //     NULL);  
    //  REDISPLAY;
    // END;
    //#endregion
    async CRFCOSAP_variable_imprimir_whenButtonPressed() {
        console.log("Entering CRFCOSAP_variable_imprimir_whenButtonPressed");
        let PL_ID: any = null;
        PL_ID = this.oracleFormsBuiltins.get_parameter_list("PARAMETROS");
        if ((!this.oracleFormsBuiltins.id_null(PL_ID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(PL_ID);
        }
        PL_ID = this.oracleFormsBuiltins.create_parameter_list("PARAMETROS");
        // this.oracleFormsBuiltins.add_parameter(PL_ID, "TERCERO", "TEXT_PARAMETER", TERCERO);
        // this.oracleFormsBuiltins.run_product(REPORTS, "CRRSOLAP", SYNCHRONOUS, RUNTIME, FILESYSTEM, PL_ID, null);
        this.oracleFormsBuiltins.redisplay();
        console.log("Exiting CRFCOSAP_variable_imprimir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :TERCERO IS NOT NULL THEN
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //  SELECT DISTINCT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE) NOMBRE 
    //    INTO :VARIABLE.NOMBRE
    //    FROM CRTSOLICR,TER 
    //   WHERE TERCOD=SOLICR_NITTER 
    //     AND SOLICR_ESTSOL='AP'
    //     AND SOLICR_NITTER=:TERCERO
    //  ;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN
    //   LIB$ALERTA('MENSAJE','TERCERO NO SE ENCUENTRA EN LA LISTA DE SOLICITUDES APROBADAS....',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END; 
    // END IF; END;
    //#endregion
    async CRFCOSAP_variable_tercero_whenValidateItem() {
        console.log("Entering CRFCOSAP_variable_tercero_whenValidateItem");
        if ((this.VARIABLE.TERCERO != null)) {
            {

                let T_RESPUESTA: number = null;
                // construct payload
                let payload1 = new Map();
                payload1.set("TERCERO", this.VARIABLE.TERCERO);
                // call REST API
                const result1 = await Rest.post("/crfcosap_variable/crfcosap_variable_tercero_whenvalidateitem_query1", payload1);
                // get values from result
                this.VARIABLE.NOMBRE = result1[0].get("VARIABLE.NOMBRE");
                if (result1 == null || result1.length == 0) {

                    // CRFCOSAP_LIB$ALERTA("MENSAJE", "TERCERO NO SE ENCUENTRA EN LA LISTA DE SOLICITUDES APROBADAS....", null, null, null, T_RESPUESTA);
                    console.log("FORM_TRIGGER_FAILURE");
                    throw new Error('FORM_TRIGGER_FAILURE');
                }

            }

        }
        console.log("Exiting CRFCOSAP_variable_tercero_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFCOSAP_variable_tercero_keyNextItem() {
        console.log("Entering CRFCOSAP_variable_tercero_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFCOSAP_variable_tercero_keyNextItem");
    }

    async CRFCOSAP_crtsolicr_keyDelrec() {
        // null;
    }

    async CRFCOSAP_crtsolicr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN :TOTAL_US:=0;
    // :TOTAL:=0; END;
    //#endregion
    async CRFCOSAP_crtsolicr_preQuery() {
        console.log("Entering CRFCOSAP_crtsolicr_preQuery");
        // this.CRTSOLICR.TOTAL_US = 0;
        // this.CRTSOLICR.TOTAL = 0;
        console.log("Exiting CRFCOSAP_crtsolicr_preQuery");
    }

    async CRFCOSAP_crtsolicr_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('VARIABLE'); END;
    //#endregion
    async CRFCOSAP_crtsolicr_keyPrvblk() {
        console.log("Entering CRFCOSAP_crtsolicr_keyPrvblk");
        this.oracleFormsBuiltins.go_block("VARIABLE");
        console.log("Exiting CRFCOSAP_crtsolicr_keyPrvblk");
    }

    //#region PLSQL
    // BEGIN
    //   IF :SOLICR_TIPCRE='03' THEN
    //      :TIPO_CREDITO:='CONTRATO';
    //   ELSIF :SOLICR_TIPCRE='04' THEN
    //      :TIPO_CREDITO:='PAGARE';
    //   END IF;
    //  IF :SOLICR_ORMONET='PE' THEN
    //     :TOTAL:=NVL(:TOTAL,0)+NVL(:SOLICR_VRFINCR,0);
    //  ELSIF :SOLICR_ORMONET IN ('US','TN') THEN
    //     :TOTAL_US:=NVL(:TOTAL,0)+NVL(:SOLICR_VRFINCR,0);
    //  END IF;
    //  /* BEGIN
    //     SELECT SUM(NVL(SOLICR_VRFINCR,0))
    //       INTO :TOTAL
    //       FROM CRTSOLICR
    //      WHERE SOLICR_NITTER=:SOLICR_NITTER
    //        AND SOLICR_ESTSOL='AP';
    //   END;*/
    // END; 
    // ----------------------------
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //   V_OPCION VARCHAR2(60);
    // BEGIN
    //  
    // IF NVL(:CONTADOR,0)= 0 THEN
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
    //   --EXECUTE_QUERY;
    //  OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS('CONTROLXSOLI_APROBADAS',:SYSTEM.LAST_QUERY,V_OPCION);
    //  --COMMIT;
    //  :CONTADOR:=0;
    // END;
    // 
    // END IF;
    // END;
    //#endregion
    async CRFCOSAP_crtsolicr_postQuery() {
        console.log("Entering CRFCOSAP_crtsolicr_postQuery");
        if (this.CRTSOLICR.SOLICR_TIPCRE == "03") {
            this.CRTSOLICR.TIPO_CREDITO = "CONTRATO";
        }
        else if (this.CRTSOLICR.SOLICR_TIPCRE == "04") {
            this.CRTSOLICR.TIPO_CREDITO = "PAGARE";
        }
        if (this.CRTSOLICR.SOLICR_ORMONET == "PE") {
            // this.CRTSOLICR.TOTAL = TOTAL == null ? 0 : TOTAL + SOLICR_VRFINCR == null ? 0 : SOLICR_VRFINCR;
        }
        else if (["US", "TN"].indexOf(this.CRTSOLICR.SOLICR_ORMONET) != -1) {
            // this.CRTSOLICR.TOTAL_US = TOTAL == null ? 0 : TOTAL + SOLICR_VRFINCR == null ? 0 : SOLICR_VRFINCR;
        }
        let T_RESPUESTA: number = null;
        let V_OPCION: string = null;
        if (this.VARIABLE.CONTADOR == null ? 0 : this.VARIABLE.CONTADOR == 0) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                //payload1.set("CURRENT_FORM", SYSTEM.CURRENT_FORM);
                // call REST API
                const result1 = await Rest.post("/crfcosap_crtsolicr/crfcosap_crtsolicr_postquery_query1", payload1);
                // get values from result
                V_OPCION = result1[0].get("V_OPCION");
            } catch (ex) {

                V_OPCION = null;
            }

            //CRFCOSAP_OPS$AUDI.PBD_AUDI_CONTROLCONSULTAS("CONTROLXSOLI_APROBADAS", this._SYSTEM_SERVICE.get("LAST_QUERY"), V_OPCION);
            //this.CRTSOLICR.CONTADOR = 0;
        }
        console.log("Exiting CRFCOSAP_crtsolicr_postQuery");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOSAP_toolbar_whenButtonPressed() {
        console.log("Entering CRFCOSAP_toolbar_whenButtonPressed");
        console.log("Exiting CRFCOSAP_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOSAP_toolbar_whenMouseLeave() {
        console.log("Entering CRFCOSAP_toolbar_whenMouseLeave");
        console.log("Exiting CRFCOSAP_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOSAP_toolbar_whenNewFormInstance() {
        console.log("Entering CRFCOSAP_toolbar_whenNewFormInstance");
        console.log("Exiting CRFCOSAP_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFCOSAP_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFCOSAP_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFCOSAP_base_fecha_whenNewItemInstance");
    }

}

