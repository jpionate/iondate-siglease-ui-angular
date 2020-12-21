import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFOFPLAZ business logic
import {
    COTOFDEXPLA,
    TOOLBAR,
    BASE
} from "./CRFOFPLAZ_models";



// class CRFOFPLAZ
@Component({
    selector: 'app-crfofplaz',
    templateUrl: './crfofplaz.component.html',
})
export class CrfofplazComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public COTOFDEXPLA: COTOFDEXPLA = new COTOFDEXPLA();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_whenMouseDoubleclick() {
        console.log("Entering CRFOFPLAZ_whenMouseDoubleclick");
        console.log("Exiting CRFOFPLAZ_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_preForm() {
        console.log("Entering CRFOFPLAZ_preForm");
        console.log("Exiting CRFOFPLAZ_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_whenNewFormInstance() {
        console.log("Entering CRFOFPLAZ_whenNewFormInstance");
        console.log("Exiting CRFOFPLAZ_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //    SELECT PLAZAS_DESCRI DESCRIPCION      
    //      INTO :V_NOMPLAZA
    //    FROM CMTPLAZAS
    //    WHERE  PLAZAS_CODIGO = :DEXPLA_CODPLAZA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :V_NOMPLAZA := NULL;
    // END;
    // BEGIN
    //   SELECT INITCAP(USU_NOMBRE)
    //     INTO :V_NOMBOFC
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :DEXPLA_CODOFICIAL;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :V_NOMBOFC := NULL;
    // END;
    //#endregion
    async CRFOFPLAZ_cotofdexpla_postQuery() {
        console.log("Entering CRFOFPLAZ_cotofdexpla_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("DEXPLA_CODPLAZA", this.COTOFDEXPLA.DEXPLA_CODPLAZA);
        // call REST API
        const result1 = await Rest.post("/crfofplaz_cotofdexpla/crfofplaz_cotofdexpla_postquery_query1", payload1);
        // get values from result
        this.COTOFDEXPLA.V_NOMPLAZA = result1[0].get("V_NOMPLAZA");
        if (result1 == null || result1.length == 0) {

            this.COTOFDEXPLA.V_NOMPLAZA = null;
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("DEXPLA_CODOFICIAL", this.COTOFDEXPLA.DEXPLA_CODOFICIAL);
        // call REST API
        const result2 = await Rest.post("/crfofplaz_cotofdexpla/crfofplaz_cotofdexpla_postquery_query2", payload2);
        // get values from result
        this.COTOFDEXPLA.V_NOMBOFC = result2[0].get("V_NOMBOFC");
        if (result2 == null || result2.length == 0) {

            this.COTOFDEXPLA.V_NOMBOFC = null;
        }

        console.log("Exiting CRFOFPLAZ_cotofdexpla_postQuery");
    }

    //#region PLSQL
    // DECLARE 
    //  V_VAL NUMBER:=0;
    // BEGIN
    //  
    //    SELECT COUNT(*)
    //    INTO  V_VAL
    //    FROM   OPS$CONTAB.CGPPLANT
    //    WHERE  CGCPLANT_CODPLA = :COTOFDEXPLA.DEXPLA_CODUNI;
    //   
    //   IF V_VAL=0 THEN
    //   MESSAGE( 'UNIDAD NO EXISTE. POR FAVOR VERIFICAR....');
    //   RAISE FORM_TRIGGER_FAILURE;
    //   
    // END IF;
    //    
    // EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //    NULL;
    // END;
    //#endregion
    async CRFOFPLAZ_cotofdexpla_dexplaCoduni_whenValidateItem() {
        console.log("Entering CRFOFPLAZ_cotofdexpla_dexplaCoduni_whenValidateItem");
        let V_VAL: number = 0;
        // construct payload
        let payload1 = new Map();
        payload1.set("DEXPLA_CODUNI", this.COTOFDEXPLA.DEXPLA_CODUNI);
        // call REST API
        const result1 = await Rest.post("/crfofplaz_cotofdexpla/crfofplaz_cotofdexpla_dexplacoduni_whenvalidateitem_query1", payload1);
        // get values from result
        V_VAL = result1[0].get("V_VAL");
        if (V_VAL == 0) {
            this.oracleFormsBuiltins.message("UNIDAD NO EXISTE. POR FAVOR VERIFICAR....");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFOFPLAZ_cotofdexpla_dexplaCoduni_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //    SELECT PLAZAS_DESCRI DESCRIPCION      
    //      INTO :V_NOMPLAZA
    //    FROM CMTPLAZAS
    //    WHERE  PLAZAS_CODIGO = :DEXPLA_CODPLAZA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :V_NOMPLAZA := NULL;
    // END;
    //#endregion
    async CRFOFPLAZ_cotofdexpla_dexplaCodplaza_whenValidateItem() {
        console.log("Entering CRFOFPLAZ_cotofdexpla_dexplaCodplaza_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("DEXPLA_CODPLAZA", this.COTOFDEXPLA.DEXPLA_CODPLAZA);
        // call REST API
        const result1 = await Rest.post("/crfofplaz_cotofdexpla/crfofplaz_cotofdexpla_dexplacodplaza_whenvalidateitem_query1", payload1);
        // get values from result
        this.COTOFDEXPLA.V_NOMPLAZA = result1[0].get("V_NOMPLAZA");
        if (result1 == null || result1.length == 0) {

            this.COTOFDEXPLA.V_NOMPLAZA = null;
        }

        console.log("Exiting CRFOFPLAZ_cotofdexpla_dexplaCodplaza_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT INITCAP(USU_NOMBRE)
    //     INTO :V_NOMBOFC
    //  FROM SGUSUARIOS
    //  WHERE USU_CODIGO = :DEXPLA_CODOFICIAL;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :V_NOMBOFC := NULL;
    // END;
    //#endregion
    async CRFOFPLAZ_cotofdexpla_dexplaCodoficial_whenValidateItem() {
        console.log("Entering CRFOFPLAZ_cotofdexpla_dexplaCodoficial_whenValidateItem");
        // construct payload
        let payload1 = new Map();
        payload1.set("DEXPLA_CODOFICIAL", this.COTOFDEXPLA.DEXPLA_CODOFICIAL);
        // call REST API
        const result1 = await Rest.post("/crfofplaz_cotofdexpla/crfofplaz_cotofdexpla_dexplacodoficial_whenvalidateitem_query1", payload1);
        // get values from result
        this.COTOFDEXPLA.V_NOMBOFC = result1[0].get("V_NOMBOFC");
        if (result1 == null || result1.length == 0) {

            this.COTOFDEXPLA.V_NOMBOFC = null;
        }

        console.log("Exiting CRFOFPLAZ_cotofdexpla_dexplaCodoficial_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    // IF :DEXPLA_PORCENTAJE > 100 THEN
    //  LIB$ALERTA('MENSAJE','ERROR AL INGRESAR EL PORCENTAJE',NULL,NULL,NULL,T_RESPUESTA);
    //   RAISE FORM_TRIGGER_FAILURE;
    // END IF;
    // END;
    //#endregion
    async CRFOFPLAZ_cotofdexpla_dexplaPorcentaje_whenValidateItem() {
        console.log("Entering CRFOFPLAZ_cotofdexpla_dexplaPorcentaje_whenValidateItem");
        let T_RESPUESTA: number = null;
        if (this.COTOFDEXPLA.DEXPLA_PORCENTAJE > 100) {
            //CRFOFPLAZ_LIB$ALERTA("MENSAJE", "ERROR AL INGRESAR EL PORCENTAJE", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFOFPLAZ_cotofdexpla_dexplaPorcentaje_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_toolbar_whenButtonPressed() {
        console.log("Entering CRFOFPLAZ_toolbar_whenButtonPressed");
        console.log("Exiting CRFOFPLAZ_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_toolbar_whenMouseLeave() {
        console.log("Entering CRFOFPLAZ_toolbar_whenMouseLeave");
        console.log("Exiting CRFOFPLAZ_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_toolbar_whenNewFormInstance() {
        console.log("Entering CRFOFPLAZ_toolbar_whenNewFormInstance");
        console.log("Exiting CRFOFPLAZ_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFOFPLAZ_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFOFPLAZ_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFOFPLAZ_base_fecha_whenNewItemInstance");
    }

}

