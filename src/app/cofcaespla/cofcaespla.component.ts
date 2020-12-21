import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace COFCAESPLA business logic
import {
    CRTCONTROL,
    PARAMETROS,
    TOOLBAR,
    BASE
} from "./COFCAESPLA_models";



// class COFCAESPLA
@Component({
    selector: 'app-cofcaespla',
    templateUrl: './cofcaespla.component.html',
})
export class CofcaesplaComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['P_UNIDAD', null],
        ['OFICINA', null],
        ['P_OFICINA', null],
        ['TERCERO', null],
        ['SOLICITUD', null],
        ['CONTROL', null],
    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTCONTROL: CRTCONTROL = new CRTCONTROL();
    public PARAMETROS: PARAMETROS = new PARAMETROS();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public BASE: BASE = new BASE();


    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCAESPLA_whenMouseDoubleclick() {
        console.log("Entering COFCAESPLA_whenMouseDoubleclick");
        console.log("Exiting COFCAESPLA_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN
    //   PANTALLA;
    //    PINCIARSGRDADOFCNAS;
    // END;
    //#endregion
    async COFCAESPLA_preForm() {
        console.log("Entering COFCAESPLA_preForm");
        // COFCAESPLA_PANTALLA();
        // COFCAESPLA_PINCIARSGRDADOFCNAS();
        console.log("Exiting COFCAESPLA_preForm");
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
    async COFCAESPLA_whenNewFormInstance() {
        console.log("Entering COFCAESPLA_whenNewFormInstance");
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/cofcaespla/cofcaespla_whennewforminstance_query1", payload1);
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

        // COFCAESPLA_REF$WHEN_NEW_FORM_INSTANCE();
        console.log("Exiting COFCAESPLA_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async COFCAESPLA_keyDown() {
        console.log("Entering COFCAESPLA_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting COFCAESPLA_keyDown");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    //  V_CRED VARCHAR2(2);
    //  V_PLA VARCHAR2(10);
    //  V_NITTER VARCHAR2(13);
    //  V_ESTAD VARCHAR2(2);
    //  VALIDETR VARCHAR2(2);
    // BEGIN 
    //  :PARAMETROS.CCRT_TIPO:=NULL;
    //  :PARAMETROS.CCRT_PLANEA:=NULL;
    //   :PARAMETROS.CCRT_NITTER:=NULL;
    //   :PARAMETROS.CCRT_ESTADO:=NULL;
    // --LIB$ALERTA('MENSAJE','CCRT_UNIDAD: '||:PARAMETROS.CCRT_UNIDAD||' CCRT_OFI: '||:PARAMETROS.CCRT_OFI||' CCRT_SOLI: '||:PARAMETROS.CCRT_SOLI,NULL,NULL,NULL,T_RESPUESTA); 
    // IF :PARAMETROS.CCRT_UNIDAD IS NOT NULL AND :PARAMETROS.CCRT_OFI IS NOT NULL AND :PARAMETROS.CCRT_SOLI IS NOT NULL THEN
    //  VALIDATESTATUS_TR(:PARAMETROS.CCRT_UNIDAD,:PARAMETROS.CCRT_OFI,:PARAMETROS.CCRT_SOLI,VALIDETR);
    //   --LIB$ALERTA('MENSAJE','VALIDE TR'||VALIDETR ,NULL,NULL,NULL,T_RESPUESTA);
    //  IF VALIDETR = 'TR' THEN
    //  SELECT CRTCONTROL.CONTROL_TIPCRE,CRTCONTROL.CONTROL_PLANEA,CRTCONTROL.CONTROL_NITTER,CRTCONTROL.CONTROL_ESTGRL
    //  INTO V_CRED,V_PLA,V_NITTER,V_ESTAD
    //  FROM CRTCONTROL
    //  WHERE CONTROL_CODUNI=:PARAMETROS.CCRT_UNIDAD
    //  AND CONTROL_OFCSOL = :PARAMETROS.CCRT_OFI
    //   AND CONTROL_CODSOL = :PARAMETROS.CCRT_SOLI; 
    //    IF V_CRED IS NOT NULL AND V_PLA IS NOT NULL AND V_NITTER IS NOT NULL AND V_ESTAD IS NOT NULL THEN
    //     --LIB$ALERTA('MENSAJE','LA CONSULTA TRAJO LOS DATOS TIPO CREDITO: '||V_CRED||' CODIGO DE PLANEACION: '||V_PLA||' CODIGO DE NIT DE TERCERO: '||V_NITTER||' CODIGO DE ESTADO DE LA PLANEACION: '||V_PLA,NULL,NULL,NULL,T_RESPUESTA); 
    //     LIB$ALERTA('MENSAJE','ES POSIBLE REALIZAR EL CAMBIO DE ESTADO DE PLANEACION DE TR A DE EN LA SOLICITUD CONSULTADA',NULL,NULL,NULL,T_RESPUESTA);
    //     :PARAMETROS.CCRT_TIPO:=V_CRED;
    //     :PARAMETROS.CCRT_PLANEA:=V_PLA;
    //     :PARAMETROS.CCRT_NITTER:=V_NITTER;
    //     :PARAMETROS.CCRT_ESTADO:=V_ESTAD;
    //     SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "VISIBLE", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "ENABLED", "PROPERTY_TRUE");
    //     SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', NAVIGABLE, "PROPERTY_TRUE");      
    //    ELSE
    //    LIB$ALERTA('MENSAJE','AL REALIZAR LA CONSULTA NO SE ENCUENTRA INFORMACIÓN RELACIONADA',NULL,NULL,NULL,T_RESPUESTA);
    //    
    //    END IF;
    //   ELSE
    //   LIB$ALERTA('MENSAJE','NO SE PERMITE REALIZAR EL CAMBIO DE ESTADO PUES LA SOLICITUD SE ENCUENTRA EN UN ESTADO DIFERENTE A TR',NULL,NULL,NULL,T_RESPUESTA);
    //   SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "VISIBLE", "PROPERTY_FALSE");
    //   END IF;
    //   
    // ELSE
    //  LIB$ALERTA('MENSAJE','COMPLETE LOS DATOS PARA GENERAR LA CONSULTA',NULL,NULL,NULL,T_RESPUESTA);
    //  SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "VISIBLE", "PROPERTY_FALSE");
    // END IF;
    // EXCEPTION 
    //  WHEN NO_DATA_FOUND THEN
    //  LIB$ALERTA('MENSAJE','NO SE ENCUENTRA INFORMACIÓN RELACIONADA',NULL,NULL,NULL,T_RESPUESTA);
    //  SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "VISIBLE", "PROPERTY_FALSE");
    //  
    // END;
    //#endregion
    async COFCAESPLA_parametros_pbConsul_whenButtonPressed() {
        console.log("Entering COFCAESPLA_parametros_pbConsul_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_CRED: string = null;
        let V_PLA: string = null;
        let V_NITTER: string = null;
        let V_ESTAD: string = null;
        let VALIDETR: string = null;
        this.PARAMETROS.CCRT_TIPO = null;
        this.PARAMETROS.CCRT_PLANEA = null;
        this.PARAMETROS.CCRT_NITTER = null;
        this.PARAMETROS.CCRT_ESTADO = null;
        if ((((this.PARAMETROS.CCRT_UNIDAD != null) && (this.PARAMETROS.CCRT_OFI != null)) && (this.PARAMETROS.CCRT_SOLI != null))) {
            //COFCAESPLA_VALIDATESTATUS_TR(this.PARAMETROS.CCRT_UNIDAD, this.PARAMETROS.CCRT_OFI, this.PARAMETROS.CCRT_SOLI, VALIDETR);
            if (VALIDETR == "TR") {
                // construct payload
                let payload1 = new Map();
                payload1.set("CCRT_UNIDAD", this.PARAMETROS.CCRT_UNIDAD);
                payload1.set("CCRT_OFI", this.PARAMETROS.CCRT_OFI);
                payload1.set("CCRT_SOLI", this.PARAMETROS.CCRT_SOLI);
                // call REST API
                const result1 = await Rest.post("/cofcaespla_parametros/cofcaespla_parametros_pbconsul_whenbuttonpressed_query1", payload1);
                // get values from result
                V_CRED = result1[0].get("V_CRED");
                V_PLA = result1[0].get("V_PLA");
                V_NITTER = result1[0].get("V_NITTER");
                V_ESTAD = result1[0].get("V_ESTAD");
                if (((((V_CRED != null) && (V_PLA != null)) && (V_NITTER != null)) && (V_ESTAD != null))) {
                    //COFCAESPLA_LIB$ALERTA("MENSAJE", "ES POSIBLE REALIZAR EL CAMBIO DE ESTADO DE PLANEACION DE TR A DE EN LA SOLICITUD CONSULTADA", null, null, null, T_RESPUESTA);
                    this.PARAMETROS.CCRT_TIPO = V_CRED;
                    this.PARAMETROS.CCRT_PLANEA = V_PLA;
                    this.PARAMETROS.CCRT_NITTER = V_NITTER;
                    this.PARAMETROS.CCRT_ESTADO = V_ESTAD;
                    this.oracleFormsBuiltins.set_item_property("PARAMETROS.PB_CAMBIO", "VISIBLE", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_item_property("PARAMETROS.PB_CAMBIO", "ENABLED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_item_property("PARAMETROS.PB_CAMBIO", "NAVIGABLE", "PROPERTY_TRUE");
                }
                else {
                    // COFCAESPLA_LIB$ALERTA("MENSAJE", "AL REALIZAR LA CONSULTA NO SE ENCUENTRA INFORMACIÓN RELACIONADA", null, null, null, T_RESPUESTA);
                }
            }
            else {
                // COFCAESPLA_LIB$ALERTA("MENSAJE", "NO SE PERMITE REALIZAR EL CAMBIO DE ESTADO PUES LA SOLICITUD SE ENCUENTRA EN UN ESTADO DIFERENTE A TR", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.set_item_property("PARAMETROS.PB_CAMBIO", "VISIBLE", "PROPERTY_FALSE");
            }
        }
        else {
            // COFCAESPLA_LIB$ALERTA("MENSAJE", "COMPLETE LOS DATOS PARA GENERAR LA CONSULTA", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.set_item_property("PARAMETROS.PB_CAMBIO", "VISIBLE", "PROPERTY_FALSE");
        }
        // if (result1 == null || result1.length == 0) {

        //     COFCAESPLA_LIB$ALERTA("MENSAJE", "NO SE ENCUENTRA INFORMACIÓN RELACIONADA", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.set_item_property("PARAMETROS.PB_CAMBIO", "VISIBLE", "PROPERTY_FALSE");
        // }

        console.log("Exiting COFCAESPLA_parametros_pbConsul_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // VALIDETR VARCHAR2(2);
    // BEGIN 
    //  --
    // VALIDATESTATUS_TR(:PARAMETROS.CCRT_UNIDAD,:PARAMETROS.CCRT_OFI,:PARAMETROS.CCRT_SOLI,VALIDETR);
    //   --LIB$ALERTA('MENSAJE','VALIDE TR'||VALIDETR ,NULL,NULL,NULL,T_RESPUESTA);
    //   IF VALIDETR = 'TR' THEN
    //   UPDATE OPS$COLOCA.CRTCONTROL
    //   SET CONTROL_ESTGRL='DE'
    //    WHERE CONTROL_CODUNI = :PARAMETROS.CCRT_UNIDAD --001, 005
    //    AND CONTROL_OFCSOL = :PARAMETROS.CCRT_OFI
    //    AND CONTROL_CODSOL = :PARAMETROS.CCRT_SOLI
    //    AND CONTROL_PLANEA = :PARAMETROS.CCRT_PLANEA
    //    AND CONTROL_ESTGRL='TR';
    //    COMMIT;
    //    --AUDITORIA
    //    PRC_AUDITORIA ('2', 'OPS$COLOCA.CRTCONTROL', 'CONTROL_ESTGRL', 'OPS$COLOCA', 
    //    'UPD','CONTROL_CODSOL:'||:PARAMETROS.CCRT_SOLI||' CONTROL_PLANEA:'||:PARAMETROS.CCRT_PLANEA, 
    //    'CAMBIO DE ESTADO DE PLANEACIÓN DE TR A DE', 
    //    'CONTROL_ESTGRL: '||'DE',
    //    'CONTROL_ESTGRL: '||'TR');
    //    --FIN AUDITORIA
    //    LIB$ALERTA('MENSAJE','SE REALIZO EL CAMBIO DE ESTADO DE TR A DE DE LA SOLICITUD: '||:PARAMETROS.CCRT_SOLI
    //    ||' CON LA PLANEACIÓN: '||:PARAMETROS.CCRT_PLANEA,NULL,NULL,NULL,T_RESPUESTA);
    //    PRC_CLEANTEXT;
    //   ELSIF  VALIDETR = 'DE' THEN
    //     LIB$ALERTA('MENSAJE','EL ESTADO DE ESTA PLANEACIÓN YA SE ENCUENTRA EN ESTADO DE',NULL,NULL,NULL,T_RESPUESTA);
    //    PRC_CLEANTEXT;
    //   ELSE
    //    LIB$ALERTA('MENSAJE','SE CAMBIO INFORMACIÓN EN LA FORMA. NO SE PERMITE EL CAMBIO DE ESTADO A ESTA PLANEACIÓN',NULL,NULL,NULL,T_RESPUESTA);
    //    PRC_CLEANTEXT;
    //   
    //    --SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "ENABLED", "PROPERTY_FALSE");
    //    --SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', NAVIGABLE, "PROPERTY_FALSE");
    //    --SET_ITEM_PROPERTY('PARAMETROS.PB_CAMBIO', "VISIBLE", "PROPERTY_FALSE");
    //  END IF;
    // EXCEPTION
    //  WHEN OTHERS THEN
    //  LIB$ALERTA('MENSAJE','POR FAVOR REALICE EL PROCEDIMIENTO NUEVAMENTE CON DATOS VALIDOS',NULL,NULL,NULL,T_RESPUESTA);
    //  PRC_CLEANTEXT; 
    // END;
    //#endregion
    async COFCAESPLA_parametros_pbCambio_whenButtonPressed() {
        console.log("Entering COFCAESPLA_parametros_pbCambio_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let VALIDETR: string = null;
        try {

            // COFCAESPLA_VALIDATESTATUS_TR(PARAMETROS.CCRT_UNIDAD, PARAMETROS.CCRT_OFI, PARAMETROS.CCRT_SOLI, VALIDETR);
            if (VALIDETR == "TR") {
                // construct payload
                let payload1 = new Map();
                // payload1.CCRT_UNIDAD = : CCRT_UNIDAD;
                // payload1.CCRT_OFI = : CCRT_OFI;
                // payload1.CCRT_SOLI = : CCRT_SOLI;
                // payload1.CCRT_PLANEA = : CCRT_PLANEA;
                // call REST API
                const result1 = await Rest.post("/cofcaespla_parametros/cofcaespla_parametros_pbcambio_whenbuttonpressed_query1", payload1);
                // COFCAESPLA_PRC_AUDITORIA("2", "OPS$COLOCA.CRTCONTROL", "CONTROL_ESTGRL", "OPS$COLOCA", "UPD", "CONTROL_CODSOL:" + PARAMETROS.CCRT_SOLI + " CONTROL_PLANEA:" + PARAMETROS.CCRT_PLANEA, "CAMBIO DE ESTADO DE PLANEACIÓN DE TR A DE", "CONTROL_ESTGRL: " + "DE", "CONTROL_ESTGRL: " + "TR");
                // COFCAESPLA_LIB$ALERTA("MENSAJE", "SE REALIZO EL CAMBIO DE ESTADO DE TR A DE DE LA SOLICITUD: " + PARAMETROS.CCRT_SOLI + " CON LA PLANEACIÓN: " + PARAMETROS.CCRT_PLANEA, null, null, null, T_RESPUESTA);
                // COFCAESPLA_PRC_CLEANTEXT();
            }
            else if (VALIDETR == "DE") {
                // COFCAESPLA_LIB$ALERTA("MENSAJE", "EL ESTADO DE ESTA PLANEACIÓN YA SE ENCUENTRA EN ESTADO DE", null, null, null, T_RESPUESTA);
                // COFCAESPLA_PRC_CLEANTEXT();
            }
            else {
                // COFCAESPLA_LIB$ALERTA("MENSAJE", "SE CAMBIO INFORMACIÓN EN LA FORMA. NO SE PERMITE EL CAMBIO DE ESTADO A ESTA PLANEACIÓN", null, null, null, T_RESPUESTA);
                // COFCAESPLA_PRC_CLEANTEXT();
            }
        } catch (ex) {

            // COFCAESPLA_LIB$ALERTA("MENSAJE", "POR FAVOR REALICE EL PROCEDIMIENTO NUEVAMENTE CON DATOS VALIDOS", null, null, null, T_RESPUESTA);
            // COFCAESPLA_PRC_CLEANTEXT();
        }

        console.log("Exiting COFCAESPLA_parametros_pbCambio_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCAESPLA_toolbar_whenButtonPressed() {
        console.log("Entering COFCAESPLA_toolbar_whenButtonPressed");
        console.log("Exiting COFCAESPLA_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCAESPLA_toolbar_whenMouseLeave() {
        console.log("Entering COFCAESPLA_toolbar_whenMouseLeave");
        console.log("Exiting COFCAESPLA_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCAESPLA_toolbar_whenNewFormInstance() {
        console.log("Entering COFCAESPLA_toolbar_whenNewFormInstance");
        console.log("Exiting COFCAESPLA_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async COFCAESPLA_base_fecha_whenNewItemInstance() {
        console.log("Entering COFCAESPLA_base_fecha_whenNewItemInstance");
        console.log("Exiting COFCAESPLA_base_fecha_whenNewItemInstance");
    }

}

