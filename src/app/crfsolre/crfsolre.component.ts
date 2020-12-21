import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFSOLRE business logic
import {
    CRTSOLICR,
    TOOLBAR,
    BASE
} from "./CRFSOLRE_models";



// class CRFSOLRE
@Component({
    selector: 'app-crfsolre',
    templateUrl: './crfsolre.component.html',
})
export class CrfsolreComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['P_OFICINA', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_whenMouseDoubleclick() {
        console.log("Entering CRFSOLRE_whenMouseDoubleclick");
        console.log("Exiting CRFSOLRE_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_preForm() {
        console.log("Entering CRFSOLRE_preForm");
        console.log("Exiting CRFSOLRE_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_whenNewFormInstance() {
        console.log("Entering CRFSOLRE_whenNewFormInstance");
        console.log("Exiting CRFSOLRE_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  W_ANALISTA  VARCHAR2(8);
    // BEGIN
    //   BEGIN
    //     SELECT   TBENAPE||' '||TBENNOM
    //       INTO   :CRTSOLICR.NOMBRE
    //       FROM   TBEN
    //       WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    //   END;
    // 
    //   BEGIN
    //     SELECT   USU_NOMBRE
    //       INTO   :CRTSOLICR.COMERCIAL
    //       FROM   SGUSUARIOS
    //       WHERE  USU_CODIGO=:CRTSOLICR.SOLICR_USCIAL;
    //         EXCEPTION WHEN NO_DATA_FOUND THEN
    //         LIB$ALERTA('MENSAJE','COMERCIAL INEXISTENTE. FAVOR REVISAR .....',NULL,NULL,NULL,T_RESPUESTA);
    //   END;
    //  BEGIN
    //    SELECT SOLICR_USCRED
    //      INTO :CRTSOLICR.ANALISTA
    //    FROM CRTSOLICR
    //    WHERE SOLICR_CODSOL= :CRTSOLICR.SOLICR_CODREC
    //    AND  SOLICR_OFCSOL= :CRTSOLICR.SOLICR_OFCSOL;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //  NULL; 
    // END;
    // 
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :CRTSOLICR.NOMB_ANA
    // FROM SGUSUARIOS
    // WHERE USU_CODIGO = :CRTSOLICR.ANALISTA;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //  NULL; 
    // END;
    // 
    // 
    // 
    // END;
    //#endregion
    async CRFSOLRE_crtsolicr_postQuery() {
        console.log("Entering CRFSOLRE_crtsolicr_postQuery");
        let T_RESPUESTA: number = null;
        let W_ANALISTA: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER", this.CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolre_crtsolicr/crfsolre_crtsolicr_postquery_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            //this.CRFSOLRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
        }

        // construct payload
        let payload2 = new Map();
        payload2.set("SOLICR_USCIAL", this.CRTSOLICR.SOLICR_USCIAL);
        // call REST API
        const result2 = await Rest.post("/crfsolre_crtsolicr/crfsolre_crtsolicr_postquery_query2", payload2);
        // get values from result
        this.CRTSOLICR.COMERCIAL = result2[0].get("CRTSOLICR.COMERCIAL");
        if (result2 == null || result2.length == 0) {

            //CRFSOLRE_LIB$ALERTA("MENSAJE", "COMERCIAL INEXISTENTE. FAVOR REVISAR .....", null, null, null, T_RESPUESTA);
        }

        // construct payload
        let payload3 = new Map();
        payload3.set("SOLICR_CODREC", this.CRTSOLICR.SOLICR_CODREC);
        payload3.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        // call REST API
        const result3 = await Rest.post("/crfsolre_crtsolicr/crfsolre_crtsolicr_postquery_query3", payload3);
        // get values from result
        this.CRTSOLICR.ANALISTA = result3[0].get("CRTSOLICR.ANALISTA");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("ANALISTA", this.CRTSOLICR.ANALISTA);
        // call REST API
        const result4 = await Rest.post("/crfsolre_crtsolicr/crfsolre_crtsolicr_postquery_query4", payload4);
        // get values from result
        this.CRTSOLICR.NOMB_ANA = result4[0].get("CRTSOLICR.NOMB_ANA");
        if (result4 == null || result4.length == 0) {

        }

        console.log("Exiting CRFSOLRE_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT   TBENAPE||' '||TBENNOM
    //     INTO   :CRTSOLICR.NOMBRE
    //     FROM   TBEN
    //     WHERE  (TBENCOD=:CRTSOLICR.SOLICR_NITTER);
    //       EXCEPTION WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','TERCERO INEXISTENTE. DEBE CREARLO AHORA .....',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFSOLRE_crtsolicr_solicrNitter_posttextitem() {
        console.log("Entering CRFSOLRE_crtsolicr_solicrNitter_posttextitem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_NITTER",this. CRTSOLICR.SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfsolre_crtsolicr/crfsolre_crtsolicr_solicrnitter_posttextitem_query1", payload1);
        // get values from result
        this.CRTSOLICR.NOMBRE = result1[0].get("CRTSOLICR.NOMBRE");
        if (result1 == null || result1.length == 0) {

            //CRFSOLRE_LIB$ALERTA("MENSAJE", "TERCERO INEXISTENTE. DEBE CREARLO AHORA .....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFSOLRE_crtsolicr_solicrNitter_posttextitem");
    }

    //#region PLSQL
    // BEGIN PU_LLAMAR_SOLICITUD(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_TIPCRE,:CRTSOLICR.SOLICR_CODSOL,'Q'); END;
    //#endregion
    async CRFSOLRE_crtsolicr_estCre_whenMouseClick() {
        console.log("Entering CRFSOLRE_crtsolicr_estCre_whenMouseClick");
        //CRFSOLRE_PU_LLAMAR_SOLICITUD(this.CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_TIPCRE, this.CRTSOLICR.SOLICR_CODSOL, "Q");
        console.log("Exiting CRFSOLRE_crtsolicr_estCre_whenMouseClick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_toolbar_whenButtonPressed() {
        console.log("Entering CRFSOLRE_toolbar_whenButtonPressed");
        console.log("Exiting CRFSOLRE_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_toolbar_whenMouseLeave() {
        console.log("Entering CRFSOLRE_toolbar_whenMouseLeave");
        console.log("Exiting CRFSOLRE_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_toolbar_whenNewFormInstance() {
        console.log("Entering CRFSOLRE_toolbar_whenNewFormInstance");
        console.log("Exiting CRFSOLRE_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFSOLRE_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFSOLRE_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFSOLRE_base_fecha_whenNewItemInstance");
    }

}

