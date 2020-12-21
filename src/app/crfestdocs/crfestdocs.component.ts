import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CRFESTDOCS business logic
import {
    CRTCONTROL,
    CRTERROR,
    CRTAUDPLA,
    CRTSOLICR,
    CRTTIPERR,
    CRTESTDOC1,
    TOOLBAR,
    CRTTIOPER,
    CRTHISTDOC_CONSULTA,
    BASE
} from "./CRFESTDOCS_models";



// class CRFESTDOCS
@Component({
    selector: 'app-crfestdocs',
    templateUrl: './crfestdocs.component.html',
})
export class CrfestdocsComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

    ]);
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public CRTCONTROL: CRTCONTROL = new CRTCONTROL();
    public CRTERROR: CRTERROR = new CRTERROR();
    public CRTAUDPLA: CRTAUDPLA = new CRTAUDPLA();
    public CRTSOLICR: CRTSOLICR = new CRTSOLICR();
    public CRTTIPERR: CRTTIPERR = new CRTTIPERR();
    public CRTESTDOC1: CRTESTDOC1 = new CRTESTDOC1();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CRTTIOPER: CRTTIOPER = new CRTTIOPER();
    public CRTHISTDOC_CONSULTA: CRTHISTDOC_CONSULTA = new CRTHISTDOC_CONSULTA();
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
    async CRFESTDOCS_onClearDetails() {
        console.log("Entering CRFESTDOCS_onClearDetails");
        // CRFESTDOCS_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CRFESTDOCS_onClearDetails");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_whenMouseDoubleclick() {
        console.log("Entering CRFESTDOCS_whenMouseDoubleclick");
        console.log("Exiting CRFESTDOCS_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_preForm() {
        console.log("Entering CRFESTDOCS_preForm");
        console.log("Exiting CRFESTDOCS_preForm");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_whenNewFormInstance() {
        console.log("Entering CRFESTDOCS_whenNewFormInstance");
        console.log("Exiting CRFESTDOCS_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_EXISTE    NUMBER;
    // BEGIN
    //  BEGIN
    //  SELECT COUNT(9) 
    //   INTO V_EXISTE
    //  FROM CRTHISTDOC
    //  WHERE HISTDO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //    AND  HISTDO_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //    AND  HISTDO_PLANEA = :CRTSOLICR.V_PLANEACION
    //    AND  (HISTDO_CTACTO IS NULL OR HISTDO_TELCTO IS NULL OR HISTDO_OBSERV IS NULL);
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   V_EXISTE := 0;
    //  END;
    //  
    //  IF V_EXISTE > 0 THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //  ELSIF :CRTHISTDOC_CONSULTA.HISTDO_CTACTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_TELCTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_OBSERV IS NULL THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //   GO_BLOCK('CRTHISTDOC_CONSULTA');
    //   RAISE FORM_TRIGGER_FAILURE;
    //    ELSE
    //   COMMIT;
    //    END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_keyCommit() {
        console.log("Entering CRFESTDOCS_keyCommit");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("V_PLANEACION", this.CRTSOLICR.V_PLANEACION);
        // call REST API
        const result1 = await Rest.post("/crfestdocs/crfestdocs_keycommit_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE > 0) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...", null, null, null, T_RESPUESTA);
        }
        else if ((((this.CRTHISTDOC_CONSULTA.HISTDO_CTACTO == null) || (this.CRTHISTDOC_CONSULTA.HISTDO_TELCTO == null)) || (this.CRTHISTDOC_CONSULTA.HISTDO_OBSERV == null))) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTHISTDOC_CONSULTA");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
        }
        console.log("Exiting CRFESTDOCS_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD ='FALSE' THEN
    //     DOWN;
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_keyDown() {
        console.log("Entering CRFESTDOCS_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            this.oracleFormsBuiltins.down();
        }
        console.log("Exiting CRFESTDOCS_keyDown");
    }

    async CRFESTDOCS_crtcontrol_keyDelrec() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  V_EST_RADICA  CRTRADICA.RADICA_ESTADO%TYPE;
    //  V_FEC_RADICA  CRTRADICA.RADICA_FECRAD%TYPE;
    //  T_RESPUESTA   NUMBER;
    //  V_EXISTE      NUMBER;
    // BEGIN
    //  
    //   BEGIN
    //    SELECT COUNT(9)
    //      INTO V_EXISTE
    //    FROM CRTRADICA
    //    WHERE RADICA_OFISOL = :CRTCONTROL.CONTROL_OFCSOL 
    //      AND RADICA_CODSOL = :CRTCONTROL.CONTROL_CODSOL
    //      AND RADICA_ESTADO='OK'; 
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       LIB$ALERTA('MENSAJE','LA SOLICITUD NO HA SIDO RADICADA O NO ESTA OK. DEBE RADICARLA....',NULL,NULL,NULL,T_RESPUESTA);
    //       RAISE FORM_TRIGGER_FAILURE;
    //    END;
    //    
    //    IF V_EXISTE = 1 THEN
    //       SELECT RADICA_FECRAD,RADICA_ESTADO
    //         INTO V_FEC_RADICA,V_EST_RADICA
    //       FROM CRTRADICA
    //       WHERE RADICA_OFISOL = :CRTCONTROL.CONTROL_OFCSOL 
    //       AND RADICA_CODSOL = :CRTCONTROL.CONTROL_CODSOL
    //       AND RADICA_ESTADO='OK'; 
    //    ELSIF  V_EXISTE > 1 THEN
    //      SELECT MAX(RADICA_FECRAD), MAX(RADICA_ESTADO)
    //       INTO V_FEC_RADICA,V_EST_RADICA
    //      FROM CRTRADICA
    //      WHERE RADICA_OFISOL = :CRTCONTROL.CONTROL_OFCSOL 
    //       AND RADICA_CODSOL = :CRTCONTROL.CONTROL_CODSOL
    //       AND RADICA_ESTADO='OK'; 
    //    END IF;
    //    -- :CRTCONTROL.CONTROL_RADICA := V_EST_RADICA;
    //   -- :CRTCONTROL.CONTROL_FRADIC := V_FEC_RADICA;
    //    COMMIT_FORM;
    //  END;
    //#endregion
    async CRFESTDOCS_crtcontrol_whennwblockinstance() {
        console.log("Entering CRFESTDOCS_crtcontrol_whennwblockinstance");
        let V_EST_RADICA: null = null;
        let V_FEC_RADICA: null = null;
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("CONTROL_OFCSOL", this.CRTCONTROL.CONTROL_OFCSOL);
        payload1.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_whennwblockinstance_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO HA SIDO RADICADA O NO ESTA OK. DEBE RADICARLA....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }

        if (V_EXISTE == 1) {
            // construct payload
            let payload2 = new Map();
            payload2.set("CONTROL_OFCSOL", this.CRTCONTROL.CONTROL_OFCSOL);
            payload2.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            // call REST API
            const result2 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_whennwblockinstance_query2", payload2);
            // get values from result
            V_FEC_RADICA = result2[0].get("V_FEC_RADICA");
            V_EST_RADICA = result2[0].get("V_EST_RADICA");
        }
        else if (V_EXISTE > 1) {
            // construct payload
            let payload3 = new Map();
            payload3.set("CONTROL_OFCSOL", this.CRTCONTROL.CONTROL_OFCSOL);
            payload3.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
            // call REST API
            const result3 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_whennwblockinstance_query3", payload3);
            // get values from result
            V_FEC_RADICA = result3[0].get("V_FEC_RADICA");
            V_EST_RADICA = result3[0].get("V_EST_RADICA");
        }
        this.oracleFormsBuiltins.commit_form();
        console.log("Exiting CRFESTDOCS_crtcontrol_whennwblockinstance");
    }

    async CRFESTDOCS_crtcontrol_keyCrerec() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PERSONA NOT IN('JO','JI') THEN
    //        --SET_ITEM_PROPERTY('CONTROL_VBPLAN',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_VBCTTO',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_DVCLIE',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_DESEMB',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_DVCLIE',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_USUCTO',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_DOCENV',ENABLED,"ATTR_OFF");
    //      ELSE
    //        SET_ITEM_PROPERTY('CONTROL_VBPLAN',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_DOCCLI',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('CONTROL_DOCENV',ENABLED,"ATTR_OFF");
    //      END IF;
    // END;
    // 
    // 
    //          
    //        
    //#endregion
    async CRFESTDOCS_crtcontrol_preblock() {
        console.log("Entering CRFESTDOCS_crtcontrol_preblock");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_preblock_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["JO", "JI"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("CONTROL_VBCTTO", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_DVCLIE", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_DESEMB", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_DVCLIE", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_USUCTO", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_DOCENV", "ENABLED", "ATTR_OFF");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("CONTROL_VBPLAN", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_DOCCLI", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("CONTROL_DOCENV", "ENABLED", "ATTR_OFF");
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_preblock");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // GO_BLOCK('CRTCONTROL');
    // EXECUTE_QUERY("NO_VALIDATE"); END;
    //#endregion
    async CRFESTDOCS_crtcontrol_keyCommit() {
        console.log("Entering CRFESTDOCS_crtcontrol_keyCommit");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.execute_query("NO_VALIDATE");
        console.log("Exiting CRFESTDOCS_crtcontrol_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    // V_PLANEA NUMBER;
    // V_EXISTE_PE   NUMBER;
    // 
    // 
    // BEGIN
    //  /*BEGIN
    //  IF :CONTROL_VBPLAN='OK' AND :CONTROL_VBCTTO ='OK' AND :CONTROL_ELACON ='OK' THEN        
    //     :CONTROL_DESEMB:='OK';  
    //     :CONTROL_FECREG:=PLSQLBuiltins.sysdate();         
    //   ELSE      
    //     :CONTROL_DESEMB:='NK';         
    //     :CONTROL_FECREG:=PLSQLBuiltins.sysdate();         
    //     :CONTROL_ESTGRL:='TR';   
    //   END IF;
    //  END;*/
    //  BEGIN
    //  SELECT COUNT(9)
    //    INTO V_EXISTE_PE
    //  FROM CRTESTDOC
    //   WHERE ESTDOC_OFCSOL=:CRTCONTROL.CONTROL_OFCSOL
    //     AND ESTDOC_CODSOL=:CRTCONTROL.CONTROL_CODSOL
    //     AND ESTDOC_PLANEA=:CRTCONTROL.CONTROL_PLANEA
    //     --AND NVL(ESTDOC_VBJOPE,'XX')='PE';
    //     AND NVL(ESTDOC_ESTDOC,'XX') = 'PE'
    //     AND ESTDOC_CODDOC LIKE 'A%';
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    V_EXISTE_PE:=1;
    //  END;
    //  
    //  IF  V_EXISTE_PE = 0 THEN
    //     --:CRTCONTROL.CONTROL_DVCLIE:='OK';
    //     :CRTCONTROL.CONTROL_ELACON := 'OK';
    //     --:CRTCONTROL.CONTROL_FDVCLI:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     :CRTCONTROL.CONTROL_FELACO:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    //  END IF;
    // 
    // END;         
    // 
    //  
    //#endregion
    async CRFESTDOCS_crtcontrol_whenvalidaterecord() {
        console.log("Entering CRFESTDOCS_crtcontrol_whenvalidaterecord");
        let V_PLANEA: number = null;
        let V_EXISTE_PE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("CONTROL_OFCSOL", this.CRTCONTROL.CONTROL_OFCSOL);
        payload1.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
        payload1.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_whenvalidaterecord_query1", payload1);
        // get values from result
        V_EXISTE_PE = result1[0].get("V_EXISTE_PE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE_PE = 1;
        }

        if (V_EXISTE_PE == 0) {
            this.CRTCONTROL.CONTROL_ELACON = "OK";
            this.CRTCONTROL.CONTROL_FELACO = PLSQLBuiltins.sysdate().toString();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_whenvalidaterecord");
    }

    async CRFESTDOCS_crtcontrol_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTAUDPLA DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTAUDPLA_CUR IS      
    //     SELECT 1 FROM CRTAUDPLA     
    //     WHERE AUDPLA_OFICINA = :CRTCONTROL.CONTROL_OFCSOL AND AUDPLA_CODIGO = :CRTCONTROL.CONTROL_CODSOL AND AUDPLA_TIPCRE = :CRTCONTROL.CONTROL_TIPCRE AND AUDPLA_PLANEA = :CRTCONTROL.CONTROL_PLANEA;
    //   --
    //   -- END CRTAUDPLA DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTAUDPLA DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTAUDPLA_CUR;     
    //   FETCH CRTAUDPLA_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTAUDPLA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTAUDPLA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTAUDPLA_CUR;
    //   --
    //   -- END CRTAUDPLA DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTDOCS_crtcontrol_onCheckDeleteMaster() {
        console.log("Entering CRFESTDOCS_crtcontrol_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    // TIPO_PERSONA VARCHAR2(2);
    // BEGIN
    //    BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //   IF TIPO_PERSONA IN ('JO','JI') THEN   
    //        IF :CONTROL_DESEMB='OK' AND :CONTROL_VBCTTO ='OK' AND :CONTROL_ELACON ='OK' 
    //       AND :CONTROL_ELADES='OK' AND :CONTROL_VBPLAN ='OK' AND :CONTROL_ELGARA ='OK'
    //       AND :CONTROL_DOCCLI='OK' AND :CONTROL_DVCLIE ='OK' AND :CONTROL_DOCENV ='OK' 
    //       AND :CONTROL_DOCENV='OK' THEN        
    //       
    //      UPDATE CRTCONTROL
    //       SET CONTROL_ESTGRL='DE'
    //      WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //       AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //       AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //    ELSE      
    //      UPDATE CRTCONTROL
    //      SET CONTROL_ESTGRL='TR'
    //     WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //       AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //       AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //    END IF;
    //    
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_postupdate() {
        console.log("Entering CRFESTDOCS_crtcontrol_postupdate");
        let TIPO_PERSONA: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postupdate_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // if (["JO", "JI"].indexOf(TIPO_PERSONA) != -1) {
        //     if ((((((((((CONTROL_DESEMB == "OK" && CONTROL_VBCTTO == "OK") && CONTROL_ELACON == "OK") && CONTROL_ELADES == "OK") && CONTROL_VBPLAN == "OK") && CONTROL_ELGARA == "OK") && CONTROL_DOCCLI == "OK") && CONTROL_DVCLIE == "OK") && CONTROL_DOCENV == "OK") && CONTROL_DOCENV == "OK")) {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //         payload2.SOLICR_CODSOL = : SOLICR_CODSOL;
        //         payload2.V_PLANEACION = : V_PLANEACION;
        //         // call REST API
        //         const result2 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postupdate_query2", payload2);
        //     }
        //     else {
        //         // construct payload
        //         let payload3 = new Map();
        //         payload3.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //         payload3.SOLICR_CODSOL = : SOLICR_CODSOL;
        //         payload3.V_PLANEACION = : V_PLANEACION;
        //         // call REST API
        //         const result3 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postupdate_query3", payload3);
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_postupdate");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN 
    //  
    //  --:CONTROL_DESEMB:='NK';         
    //  :CONTROL_FECREG:=PLSQLBuiltins.sysdate();         
    //  --:CONTROL_ELACON:='NK';         
    //  :CONTROL_ESTGRL:='TR';
    // END;      
    //#endregion
    async CRFESTDOCS_crtcontrol_whenCreateRecord() {
        console.log("Entering CRFESTDOCS_crtcontrol_whenCreateRecord");
        let T_RESPUESTA: number = null;
        this.CRTCONTROL.CONTROL_FECREG = PLSQLBuiltins.sysdate();
        this.CRTCONTROL.CONTROL_ESTGRL = "TR";
        console.log("Exiting CRFESTDOCS_crtcontrol_whenCreateRecord");
    }

    //#region PLSQL
    // DECLARE
    // V_PLANEA NUMBER;
    // TIPO_PERSONA VARCHAR2(2);
    // 
    // BEGIN
    //    BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //  IF TIPO_PERSONA IN ('JO','JI') THEN   
    //   IF    :CONTROL_DESEMB='OK' AND :CONTROL_VBCTTO ='OK' AND :CONTROL_ELACON ='OK' 
    //     AND :CONTROL_ELADES='OK' AND :CONTROL_VBPLAN ='OK' AND :CONTROL_ELGARA ='OK'
    //     AND :CONTROL_DOCCLI='OK' AND :CONTROL_DVCLIE ='OK' AND :CONTROL_DOCENV ='OK' 
    //     AND :CONTROL_DOCENV='OK' THEN 
    //     
    //     UPDATE CRTCONTROL
    //      SET CONTROL_ESTGRL='DE'
    //     WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //       AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //       AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //  ELSE
    //   UPDATE CRTCONTROL
    //      SET CONTROL_ESTGRL='TR'
    //     WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //       AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //       AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //  COMMIT;  
    //  END IF;
    //  
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_postinsert() {
        console.log("Entering CRFESTDOCS_crtcontrol_postinsert");
        let V_PLANEA: number = null;
        let TIPO_PERSONA: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postinsert_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // if (["JO", "JI"].indexOf(TIPO_PERSONA) != -1) {
        //     if ((((((((((CONTROL_DESEMB == "OK" && CONTROL_VBCTTO == "OK") && CONTROL_ELACON == "OK") && CONTROL_ELADES == "OK") && CONTROL_VBPLAN == "OK") && CONTROL_ELGARA == "OK") && CONTROL_DOCCLI == "OK") && CONTROL_DVCLIE == "OK") && CONTROL_DOCENV == "OK") && CONTROL_DOCENV == "OK")) {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //         payload2.SOLICR_CODSOL = : SOLICR_CODSOL;
        //         payload2.V_PLANEACION = : V_PLANEACION;
        //         // call REST API
        //         const result2 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postinsert_query2", payload2);
        //     }
        //     else {
        //         // construct payload
        //         let payload3 = new Map();
        //         payload3.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //         payload3.SOLICR_CODSOL = : SOLICR_CODSOL;
        //         payload3.V_PLANEACION = : V_PLANEACION;
        //         // call REST API
        //         const result3 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postinsert_query3", payload3);
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_postinsert");
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
    //   -- BEGIN CRTAUDPLA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTCONTROL.CONTROL_OFCSOL IS NOT NULL) OR (:CRTCONTROL.CONTROL_CODSOL IS NOT NULL) OR (:CRTCONTROL.CONTROL_TIPCRE IS NOT NULL) OR (:CRTCONTROL.CONTROL_PLANEA IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTCONTROL.CRTCONTROL_CRTAUDPLA');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTAUDPLA');   
    //   END IF;
    //   --
    //   -- END CRTAUDPLA DETAIL PROGRAM SECTION
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
    async CRFESTDOCS_crtcontrol_onPopulateDetails() {
        console.log("Entering CRFESTDOCS_crtcontrol_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        // if (((((this.CRTCONTROL.CONTROL_OFCSOL != null) || (this.CRTCONTROL.CONTROL_CODSOL != null)) || (this.CRTCONTROL.CONTROL_TIPCRE != null)) || (this.CRTCONTROL.CONTROL_PLANEA != null))) {
        //     REL_ID = this.oracleFormsBuiltins.find_relation("CRTCONTROL.CRTCONTROL_CRTAUDPLA");
        //     // CRFESTDOCS_QUERY_MASTER_DETAILS(REL_ID, "CRTAUDPLA");
        // }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTDOCS_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //   BEGIN
    //     SELECT USU_CARGO
    //      INTO TIPO_PERSONA
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //   BEGIN
    //     SELECT USU_NOMBRE
    //      INTO :OFICIAL_CTO
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=:CRTCONTROL.CONTROL_USUCTO;
    //     EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //  END; 
    //  
    // END; 
    //#endregion
    async CRFESTDOCS_crtcontrol_postQuery() {
        console.log("Entering CRFESTDOCS_crtcontrol_postQuery");
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postquery_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("CONTROL_USUCTO", this.CRTCONTROL.CONTROL_USUCTO);
        // call REST API
        const result2 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_postquery_query2", payload2);
        // get values from result
        // OFICIAL_CTO = result2[0].get("OFICIAL_CTO");
        if (result2 == null || result2.length == 0) {

        }

        console.log("Exiting CRFESTDOCS_crtcontrol_postQuery");
    }

    //#region PLSQL
    // BEGIN HIDE_VIEW('C_TIPO_ERROR');
    // HIDE_VIEW('C_ERROR');
    // 
    // GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFESTDOCS_crtcontrol_volerror_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtcontrol_volerror_whenButtonPressed");
        this.oracleFormsBuiltins.hide_view("C_TIPO_ERROR");
        this.oracleFormsBuiltins.hide_view("C_ERROR");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFESTDOCS_crtcontrol_volerror_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    IF :CONTROL_VBPLAN  NOT IN ('NK','OK','DE') THEN
    //      :CRTCONTROL.CONTROL_FEVBPL:=NULL;
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA DEBE DIGITAR (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //    ELSIF  :CRTCONTROL.CONTROL_VBPLAN ='OK' THEN
    //          :CRTCONTROL.CONTROL_FEVBPL:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    //    END IF;
    //   
    //   
    //  /*PUP_CONTROLES_ESTADOS;
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //     BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //    IF TIPO_PERSONA IN ('OD','JO')  THEN
    //      IF :CONTROL_VBPLAN='NK' THEN
    //           SET_ITEM_PROPERTY('CARTA',ENABLED,"ATTR_OFF");
    //      ELSIF :CONTROL_VBPLAN='OK' THEN
    //           SET_ITEM_PROPERTY('CARTA',ENABLED,ATTR_ON); 
    //      END IF;
    //     ELSE
    //           SET_ITEM_PROPERTY('CARTA',ENABLED,"ATTR_OFF");
    //    END IF; 
    // END; 
    // END IF;*/
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlVbplan_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlVbplan_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_VBPLAN) != -1) {
        //     this.CRTCONTROL.CONTROL_FEVBPL = null;
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA DEBE DIGITAR (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (this.CRTCONTROL.CONTROL_VBPLAN == "OK") {
        //     this.CRTCONTROL.CONTROL_FEVBPL = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlVbplan_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   :GLOBAL.PLANEACION_ANTERIOR:=:CONTROL_VBPLAN;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlVbplan_whenNewItemInstance() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlVbplan_whenNewItemInstance");
        // this.GLOBAL.PLANEACION_ANTERIOR = this.CRTCONTROL.CONTROL_VBPLAN;
        console.log("Exiting CRFESTDOCS_crtcontrol_controlVbplan_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :GLOBAL.PLANEACION_ANTERIOR='OK' AND :CONTROL_VBPLAN='NK' THEN 
    //    GO_BLOCK('CRTAUDPLA');
    //    EXECUTE_QUERY; 
    //   ELSE
    //     NEXT_ITEM;
    //   END  IF; 
    //   
    //   IF :CRTCONTROL.CONTROL_VBPLAN ='DE' THEN
    //     :CRTCONTROL.CONTROL_FEVBPL:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     --HISTO
    //      PU_INSERT_HISTO;
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //   ELSE
    //     NEXT_ITEM;
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlVbplan_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlVbplan_keyNextItem");
        let T_RESPUESTA: number = null;
        // if ((GLOBAL.PLANEACION_ANTERIOR == "OK" && CONTROL_VBPLAN == "NK")) {
        //     this.oracleFormsBuiltins.go_block("CRTAUDPLA");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        // if (this.CRTCONTROL.CONTROL_VBPLAN == "DE") {
        //     this.CRTCONTROL.CONTROL_FEVBPL = new Date(PLSQLBuiltins.sysdate().toString());
        //     // CRFESTDOCS_PU_INSERT_HISTO();
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("CRTTIPERR");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlVbplan_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CONTROL_VBCTTO  NOT IN ('NK','OK','DE') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CONTROL_VBCTTO ='OK' THEN
    //        :CONTROL_FVBCON :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //   END IF;
    //   /*BEGIN
    //     IF :CONTROL_DESEMB='OK' AND :CONTROL_VBCTTO ='OK' AND :CONTROL_ELACON ='OK' 
    //        AND :CONTROL_ELADES='OK' AND :CONTROL_VBPLAN ='OK' AND :CONTROL_ELGARA ='OK'
    //        AND :CONTROL_DOCCLI='OK' AND :CONTROL_DVCLIE ='OK' AND :CONTROL_DOCENV ='OK' THEN 
    //            :CONTROL_ESTGRL:='DE';
    //     ELSE
    //          :CONTROL_ESTGRL:='TR';
    //     END IF;
    //     /*IF :CONTROL_USUARI IS NULL THEN
    //        LIB$ALERTA('MENSAJE','ASIGNE EL OFICIAL QUE MANEJA LA PLANEACION .......',NULL,NULL,NULL,T_RESPUESTA);
    //     END IF;
    //     
    //   END;*/
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlVbctto_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlVbctto_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_VBCTTO) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (CONTROL_VBCTTO == "OK") {
        //     this.CRTCONTROL.CONTROL_FVBCON = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlVbctto_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //  IF :CRTCONTROL.CONTROL_VBCTTO ='DE' THEN
    //     :CRTCONTROL.CONTROL_FVBCON:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     --HISTO
    //      PU_INSERT_HISTO_VBCTTO;   
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;  
    //  ELSE
    //     NEXT_ITEM;
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlVbctto_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlVbctto_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTCONTROL.CONTROL_VBCTTO == "DE") {
            // this.CRTCONTROL.CONTROL_FVBCON = new Date(PLSQLBuiltins.sysdate().toString());
            // CRFESTDOCS_PU_INSERT_HISTO_VBCTTO();
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTTIPERR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlVbctto_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('V_TIOPE');
    // HIDE_VIEW('C_TIPOPER'); END;
    //#endregion
    async CRFESTDOCS_crtcontrol_volver_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtcontrol_volver_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("V_TIOPE");
        this.oracleFormsBuiltins.hide_view("C_TIPOPER");
        console.log("Exiting CRFESTDOCS_crtcontrol_volver_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //  BEGIN
    //   IF :CONTROL_ELGARA ='OK' THEN
    //    :CONTROL_FGTIAS :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //   END IF;
    //   -- MODIF. PALABRA CLAVE HISTO 
    //   -- AUTOR. RICARDO TARAZONA - LEASING BOLIVAR 
    //   -- FEC.MOD. 2006-01-05
    //    IF :CRTCONTROL.CONTROL_ELGARA ='DE' THEN
    //     :CRTCONTROL.CONTROL_FGTIAS:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     --HISTO
    //      PU_INSERT_HISTO_ELGARA;   
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;  
    //    ELSE
    //     NEXT_ITEM;
    //    END IF;
    // END;
    //  
    //#endregion
    async CRFESTDOCS_crtcontrol_controlElgara_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlElgara_keyNextItem");
        let T_RESPUESTA: number = null;
        // if (CONTROL_ELGARA == "OK") {
        //     this.CRTCONTROL.CONTROL_FGTIAS = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        if (this.CRTCONTROL.CONTROL_ELGARA == "DE") {
            // this.CRTCONTROL.CONTROL_FGTIAS = new Date(PLSQLBuiltins.sysdate().toString());
            // CRFESTDOCS_PU_INSERT_HISTO_ELGARA();
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTTIPERR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlElgara_keyNextItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTSOLICR'); END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlEstgrl_whenNewItemInstance() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlEstgrl_whenNewItemInstance");
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        console.log("Exiting CRFESTDOCS_crtcontrol_controlEstgrl_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //  BEGIN
    //   IF :CONTROL_RADICA ='OK' THEN
    //    :CONTROL_FRADIC :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //    PU_INSERT_TAB_RADICA; 
    //    LIB$ALERTA('MENSAJE', 'SE INSERTO UN REGISTRO EN LA TABLA DE RADICACIÓN.', NULL, NULL, NULL,T_RESPUESTA);
    //   END IF;
    //   END;
    //  
    //#endregion
    async CRFESTDOCS_crtcontrol_controlRadica_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlRadica_keyNextItem");
        let T_RESPUESTA: number = null;
        // if (CONTROL_RADICA == "OK") {
        //     this.CRTCONTROL.CONTROL_FRADIC = new Date(PLSQLBuiltins.sysdate().toString());
        //     // CRFESTDOCS_PU_INSERT_TAB_RADICA();
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "SE INSERTO UN REGISTRO EN LA TABLA DE RADICACIÓN.", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlRadica_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    //   T_PEDTES    NUMBER;
    //   V_EXISTE    VARCHAR2(1);
    // BEGIN
    //  
    //  BEGIN
    //  SELECT COUNT(9) 
    //   INTO V_EXISTE
    //  FROM CRTHISTDOC
    //  WHERE HISTDO_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL
    //    AND  HISTDO_CODSOL = :CRTSOLICR.SOLICR_CODSOL
    //    AND  HISTDO_PLANEA = :CRTSOLICR.V_PLANEACION
    //    AND  (HISTDO_CTACTO IS NULL OR HISTDO_TELCTO IS NULL OR HISTDO_OBSERV IS NULL);
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //   V_EXISTE := 0;
    //  END;
    //  
    //        
    //   IF  V_EXISTE > 0 THEN
    //     LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //     GO_BLOCK('CRTHISTDOC_CONSULTA');
    //     RAISE FORM_TRIGGER_FAILURE;
    //     
    //    ELSE  
    //      GO_BLOCK('CRTESTDOC1');
    //      HIDE_VIEW('CANVAS4');
    //    END IF;
    //     
    //     COMMIT_FORM;
    //    PUP_VERIFIQUE_PENDIENTES;
    // END;   
    //#endregion
    async CRFESTDOCS_crtcontrol_volverHistoria_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtcontrol_volverHistoria_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let T_PEDTES: number = null;
        let V_EXISTE: string = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_OFCSOL", this.CRTSOLICR.SOLICR_OFCSOL);
        payload1.set("SOLICR_CODSOL", this.CRTSOLICR.SOLICR_CODSOL);
        payload1.set("V_PLANEACION", this.CRTSOLICR.V_PLANEACION);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_volverhistoria_whenbuttonpressed_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            // V_EXISTE = 0;
        }

        // if (V_EXISTE > 0) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("CRTHISTDOC_CONSULTA");
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        else {
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.hide_view("CANVAS4");
        }
        this.oracleFormsBuiltins.commit_form();
        // CRFESTDOCS_PUP_VERIFIQUE_PENDIENTES();
        console.log("Exiting CRFESTDOCS_crtcontrol_volverHistoria_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //   IF :CONTROL_DVCLIE  NOT IN ('NK','OK','DE') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA DEBE DIGITAR (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CONTROL_DVCLIE='OK' THEN
    //    :CONTROL_FDVCLI :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDvclie_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDvclie_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_DVCLIE) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA DEBE DIGITAR (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (CONTROL_DVCLIE == "OK") {
        //     this.CRTCONTROL.CONTROL_FDVCLI = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDvclie_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    
    //   IF :CRTCONTROL.CONTROL_DVCLIE ='DE' THEN
    //     :CRTCONTROL.CONTROL_FDVCLI:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //      --HISTO
    //      PU_INSERT_HISTO_DVCLIE;  
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //   ELSE
    //     NEXT_ITEM;
    //   END IF;
    //    
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDvclie_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDvclie_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTCONTROL.CONTROL_DVCLIE == "DE") {
            // this.CRTCONTROL.CONTROL_FDVCLI = new Date(PLSQLBuiltins.sysdate().toString());
            // CRFESTDOCS_PU_INSERT_HISTO_DVCLIE();
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTTIPERR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDvclie_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CONTROL_DOCENV  NOT IN ('NK','OK','DE') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA DEBE DIGITAR  (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CONTROL_DOCENV ='OK' THEN
    //     :CONTROL_FDOENV :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');  
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDocenv_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDocenv_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_DOCENV) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA DEBE DIGITAR  (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (CONTROL_DOCENV == "OK") {
        //     this.CRTCONTROL.CONTROL_FDOENV = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDocenv_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    
    //   IF :CRTCONTROL.CONTROL_DOCENV ='DE' THEN
    //     :CRTCONTROL.CONTROL_FDOENV:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     --HISTO
    //     PU_INSERT_HISTO_DOCENV;
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //   ELSE
    //     NEXT_ITEM;
    //   END IF;
    //    
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDocenv_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDocenv_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTCONTROL.CONTROL_DOCENV == "DE") {
            // this.CRTCONTROL.CONTROL_FDOENV = new Date(PLSQLBuiltins.sysdate().toString());
            // CRFESTDOCS_PU_INSERT_HISTO_DOCENV();
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTTIPERR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDocenv_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CONTROL_ELADES  NOT IN ('NK','OK','DE') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA DEBE DIGITAR  (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CONTROL_ELADES  ='OK' THEN
    //     :CONTROL_FELADE :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');  
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlElades_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlElades_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_ELADES) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA DEBE DIGITAR  (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (CONTROL_ELADES == "OK") {
        //     this.CRTCONTROL.CONTROL_FELADE = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlElades_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTCONTROL.CONTROL_ELADES ='DE' THEN
    //     :CRTCONTROL.CONTROL_FELADE :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //     --HIST
    //     PU_INSERT_HISTO_ELADES;
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //   ELSE
    //     NEXT_ITEM;
    //   END IF;
    //    
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlElades_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlElades_keyNextItem");
        let T_RESPUESTA: number = null;
        // if (this.CRTCONTROL.CONTROL_ELADES == "DE") {
        //     this.CRTCONTROL.CONTROL_FELADE = new Date(PLSQLBuiltins.sysdate().toString());
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
        //     // CRFESTDOCS_PU_INSERT_HISTO_ELADES();
        //     this.oracleFormsBuiltins.go_block("CRTTIPERR");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlElades_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    //  V_ESTCOL     VARCHAR2(2);
    // BEGIN
    //   BEGIN
    //    SELECT COLESTC
    //     INTO V_ESTCOL
    //    FROM COL
    //    WHERE COLOFI=:CONTROL_OFCSOL        
    //       AND COLSOLI=:CONTROL_CODSOL         
    //       AND COLTDOC=:CONTROL_TIPCRE         
    //       AND COLCOD=:CONTROL_PLANEA;     
    //   EXCEPTION 
    //    WHEN NO_DATA_FOUND THEN
    //       V_ESTCOL:=NULL;
    //   END;
    //   IF :CRTSOLICR.V_PLANEACION IS NOT NULL THEN 
    //    IF V_ESTCOL IS NOT  NULL THEN
    //     LIB$ALERTA('MENSAJE','LA PLANEACIÓN TIENE UN CONTRATO EN ESTADO '||V_ESTCOL ||'  AJUSTE EL MODULO DE COLOCACIONES, LA PLANEACIÓN SERÁ ANULADA ',NULL,NULL,NULL,T_RESPUESTA);
    //     IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA ANULAR LA PLANECIÓN ') = 1 THEN
    //        UPDATE CRTCONTROL
    //         SET CONTROL_ESTGRL='AN'
    //        WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //        AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //        AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //        COMMIT;
    //        LIB$ALERTA('MENSAJE','PLANEACIÓN ANULADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //      END IF;
    //     ELSIF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA ANULAR LA PLANECIÓN') = 1 THEN
    //       UPDATE CRTCONTROL
    //        SET CONTROL_ESTGRL='AN'
    //       WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //       AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //       AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //       COMMIT;
    //       LIB$ALERTA('MENSAJE','PLANEACIÓN ANULADA .....',NULL,NULL,NULL,T_RESPUESTA);
    //    END IF;  
    //  ELSE 
    //     LIB$ALERTA('MENSAJE','NO HA SELECCIONADO NINGUNA PLANEACIÓN  .....',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_anular_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtcontrol_anular_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_ESTCOL: string = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("CONTROL_OFCSOL", CONTROL_OFCSOL);
        // payload1.set("CONTROL_CODSOL", CONTROL_CODSOL);
        // payload1.set("CONTROL_TIPCRE", CONTROL_TIPCRE);
        // payload1.set("CONTROL_PLANEA", CONTROL_PLANEA);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_anular_whenbuttonpressed_query1", payload1);
        // get values from result
        V_ESTCOL = result1[0].get("V_ESTCOL");
        if (result1 == null || result1.length == 0) {

            V_ESTCOL = null;
        }

        if ((this.CRTSOLICR.V_PLANEACION != null)) {
            // if ((V_ESTCOL != null)) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA PLANEACIÓN TIENE UN CONTRATO EN ESTADO " + V_ESTCOL + "  AJUSTE EL MODULO DE COLOCACIONES, LA PLANEACIÓN SERÁ ANULADA ", null, null, null, T_RESPUESTA);
            // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA ANULAR LA PLANECIÓN ") == 1) {
            //     // construct payload
            //     let payload2 = new Map();
            //     // payload2.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            //     // payload2.SOLICR_CODSOL = : SOLICR_CODSOL;
            //     // payload2.V_PLANEACION = : V_PLANEACION;
            //     // call REST API
            //     const result2 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_anular_whenbuttonpressed_query2", payload2);
            //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "PLANEACIÓN ANULADA .....", null, null, null, T_RESPUESTA);
            // }
            // }
            // else if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA ANULAR LA PLANECIÓN") == 1) {
            //     // construct payload
            //     let payload4 = new Map();
            //     // payload4.SOLICR_OFCSOL = : SOLICR_OFCSOL;
            //     // payload4.SOLICR_CODSOL = : SOLICR_CODSOL;
            //     // payload4.V_PLANEACION = : V_PLANEACION;
            //     // call REST API
            //     const result4 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_anular_whenbuttonpressed_query4", payload4);
            //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "PLANEACIÓN ANULADA .....", null, null, null, T_RESPUESTA);
            // }
        }
        // else {
        // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO HA SELECCIONADO NINGUNA PLANEACIÓN  .....", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_anular_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :V_PLANEACION IS NULL THEN
    //   LIB$ALERTA ('MENSAJE','NO EXISTE CODIGO DE PLANEACIÓN. ASIGNE UNO ...',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlTiope_whenvalidateitem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlTiope_whenvalidateitem");
        let T_RESPUESTA: number = null;
        // if ((V_PLANEACION == null)) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO EXISTE CODIGO DE PLANEACIÓN. ASIGNE UNO ...", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlTiope_whenvalidateitem");
    }

    //#region PLSQL
    // DECLARE
    // V_EXISTE    NUMBER;
    // BEGIN
    //  IF :V_PLANEACION IS NOT NULL THEN
    //     GO_BLOCK('CRTESTDOC1');
    //     EXECUTE_QUERY;
    //     GO_BLOCK('CRTCONTROL');
    //     EXECUTE_QUERY("NO_VALIDATE");
    //     GO_BLOCK('CRTESTDOC1');
    //  
    //  END IF;
    // END;  
    //#endregion
    async CRFESTDOCS_crtcontrol_controlTiope_keynextitem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlTiope_keynextitem");
        let V_EXISTE: number = null;
        // if ((V_PLANEACION != null)) {
        //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        //     this.oracleFormsBuiltins.execute_query();
        //     this.oracleFormsBuiltins.go_block("CRTCONTROL");
        //     this.oracleFormsBuiltins.execute_query("NO_VALIDATE");
        //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlTiope_keynextitem");
    }

    //#region PLSQL
    // DECLARE
    //   T_RESPUESTA NUMBER;
    //  BEGIN
    //   IF :CONTROL_ELACON ='OK' THEN
    //    :CONTROL_FELACO :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //   END IF;
    //     IF :CRTCONTROL.CONTROL_ELACON ='DE' THEN
    //     :CRTCONTROL.CONTROL_FELACO:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     --HISTO
    //      PU_INSERT_HISTO_ELACON;
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //      ELSE
    //       NEXT_ITEM;
    //      END IF;
    //  END;
    //  
    //  
    //#endregion
    async CRFESTDOCS_crtcontrol_controlElacon_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlElacon_keyNextItem");
        let T_RESPUESTA: number = null;
        // if (CONTROL_ELACON == "OK") {
        //     this.CRTCONTROL.CONTROL_FELACO = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        // if (this.CRTCONTROL.CONTROL_ELACON == "DE") {
        //     this.CRTCONTROL.CONTROL_FELACO = new Date(PLSQLBuiltins.sysdate().toString());
        //     // CRFESTDOCS_PU_INSERT_HISTO_ELACON();
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
        //     this.oracleFormsBuiltins.go_block("CRTTIPERR");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlElacon_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CONTROL_DESEMB  NOT IN ('NK','OK','DE') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA DEBE DIGITAR  (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CONTROL_DESEMB  ='OK' THEN
    //        :CONTROL_FDESEM :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');  
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDesemb_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDesemb_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_DESEMB) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA DEBE DIGITAR  (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (CONTROL_DESEMB == "OK") {
        //     this.CRTCONTROL.CONTROL_FDESEM = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDesemb_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    
    //   IF :CRTCONTROL.CONTROL_DESEMB ='DE' THEN
    //     :CRTCONTROL.CONTROL_FDESEM:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //     --HISTO
    //      PU_INSERT_HISTO_DESEMB;
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //   ELSE
    //     NEXT_ITEM;
    //   END IF;
    //    
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDesemb_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDesemb_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTCONTROL.CONTROL_DESEMB == "DE") {
            // this.CRTCONTROL.CONTROL_FDESEM = new Date(PLSQLBuiltins.sysdate().toString());
            // CRFESTDOCS_PU_INSERT_HISTO_DESEMB();
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTTIPERR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDesemb_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  
    //   IF :CONTROL_DOCCLI  NOT IN ('NK','OK','DE') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA DEBE DIGITAR (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSIF :CONTROL_DOCCLI='OK' THEN
    //    :CONTROL_FDOCLI :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //   END IF;
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDoccli_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDoccli_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["NK", "OK", "DE"].indexOf(CONTROL_DOCCLI) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA DEBE DIGITAR (NK) NO ACEPTADO (OK) ACEPTADO (DE) DEVUELTO.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else if (CONTROL_DOCCLI == "OK") {
        //     this.CRTCONTROL.CONTROL_FDOCLI = new Date(PLSQLBuiltins.sysdate().toString());
        // }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDoccli_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //    
    //   IF :CRTCONTROL.CONTROL_DOCCLI ='DE' THEN
    //     :CRTCONTROL.CONTROL_FDOCLI:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI'); 
    //      --HISTO
    //      PU_INSERT_HISTO_DOCCLI;  
    //     LIB$ALERTA('MENSAJE','DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............',NULL,NULL,NULL,T_RESPUESTA);
    //      GO_BLOCK('CRTTIPERR');
    //      EXECUTE_QUERY;
    //   ELSE
    //     NEXT_ITEM;
    //   END IF;
    //    
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_controlDoccli_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtcontrol_controlDoccli_keyNextItem");
        let T_RESPUESTA: number = null;
        if (this.CRTCONTROL.CONTROL_DOCCLI == "DE") {
            // this.CRTCONTROL.CONTROL_FDOCLI = new Date(PLSQLBuiltins.sysdate().toString());
            // CRFESTDOCS_PU_INSERT_HISTO_DOCCLI();
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE REGISTRAR EL ERROR PRESENTADO PARA DEVOLVER LA PLANEACIÓN.............", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTTIPERR");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_controlDoccli_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  V_EXISTE VARCHAR2(1);
    //  T_RESPUESTA NUMBER;
    //   TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //    BEGIN
    //     SELECT USU_CARGO
    //      INTO TIPO_PERSONA
    //     FROM SGUSUARIOS
    //     WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //    END; 
    //    IF TIPO_PERSONA ='JI' THEN
    //        SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,ATTR_ON);
    //        SET_ITEM_PROPERTY('HISTDO_CODDOC',"UPDATE_ALLOWED",ATTR_ON);
    //        SET_ITEM_PROPERTY('HISTDO_CODDOC', "INSERT_ALLOWED",ATTR_ON);
    //        SET_ITEM_PROPERTY('LISTA_DOC',ENABLED,"ATTR_OFF");
    //   
    //        GO_BLOCK('CRTHISTDOC_CONSULTA');
    //        EXECUTE_QUERY;
    //    ELSE
    //    V_EXISTE:='N';
    //    IF :CRTSOLICR.V_PLANEACION IS NOT NULL THEN
    //     PUP_VALIDE_EXISTE(V_EXISTE);
    //     IF V_EXISTE='N' THEN
    //         IF FRM$ALERTA_SINO ('DESEA GENERAR REGISTROS DE DOCUMENTOS PENDIENTES PARA SEGUIMIENTO ?') = 1 THEN
    //          PBD_COL_SEGOPE_DOCPE(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_TIPCRE,
    //                                 :CRTSOLICR.V_PLANEACION,:CRTSOLICR.SOLICR_NITTER,V_EXISTE);
    //           
    //            GO_ITEM('CRTHISTDOC_CONSULTA.HISTDO_FECSEG');
    //            EXECUTE_QUERY;
    //            IF :CRTHISTDOC_CONSULTA.HISTDO_FECREG=:CRTHISTDOC_CONSULTA.HISTDO_FECSEG THEN
    //               LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA DE PRÓXIMO SEGUIMIENTO. INGRESELA CON FORMATO YYYY-MM-DD HH:MI...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //            END IF;
    //         END IF;
    //       ELSE
    //         LIB$ALERTA('MENSAJE','EL REGISTRO CON LOS DOCUMENTOS PENDIENTES YA EXISTE EN LA TABLA DE SEGUIMIENTO',NULL,NULL,NULL,T_RESPUESTA);                                               
    //         GO_ITEM('CRTHISTDOC_CONSULTA.HISTDO_FECSEG');
    //         EXECUTE_QUERY;
    //       END IF;
    //     ELSE 
    //      LIB$ALERTA('MENSAJE','NO HA SELECCIONADO NINGUNA PLANEACIÓN ...',NULL,NULL,NULL,T_RESPUESTA);                                               
    //     END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtcontrol_historia_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtcontrol_historia_whenButtonPressed");
        let V_EXISTE: string = null;
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtcontrol/crfestdocs_crtcontrol_historia_whenbuttonpressed_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (TIPO_PERSONA == "JI") {
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("HISTDO_CODDOC", "UPDATE_ALLOWED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("HISTDO_CODDOC", "INSERT_ALLOWED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("LISTA_DOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.go_block("CRTHISTDOC_CONSULTA");
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            V_EXISTE = "N";
            // if ((CRTSOLICR.V_PLANEACION != null)) {
            //     // CRFESTDOCS_PUP_VALIDE_EXISTE(V_EXISTE);
            //     if (V_EXISTE == "N") {
            //         if (FRM$ALERTA_SINO("DESEA GENERAR REGISTROS DE DOCUMENTOS PENDIENTES PARA SEGUIMIENTO ?") == 1) {
            //             // CRFESTDOCS_PBD_COL_SEGOPE_DOCPE(CRTSOLICR.SOLICR_OFCSOL, this.CRTSOLICR.SOLICR_CODSOL, this.CRTSOLICR.SOLICR_TIPCRE, this.CRTSOLICR.V_PLANEACION, this.CRTSOLICR.SOLICR_NITTER, V_EXISTE);
            //             this.oracleFormsBuiltins.go_item("CRTHISTDOC_CONSULTA.HISTDO_FECSEG");
            //             this.oracleFormsBuiltins.execute_query();
            //             if (this.CRTHISTDOC_CONSULTA.HISTDO_FECREG == CRTHISTDOC_CONSULTA.HISTDO_FECSEG) {
            //                 // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR LA FECHA DE PRÓXIMO SEGUIMIENTO. INGRESELA CON FORMATO YYYY-MM-DD HH:MI...", null, null, null, T_RESPUESTA);
            //             }
            //         }
            //     }
            //     else {
            //         // CRFESTDOCS_LIB$ALERTA("MENSAJE", "EL REGISTRO CON LOS DOCUMENTOS PENDIENTES YA EXISTE EN LA TABLA DE SEGUIMIENTO", null, null, null, T_RESPUESTA);
            //         this.oracleFormsBuiltins.go_item("CRTHISTDOC_CONSULTA.HISTDO_FECSEG");
            //         this.oracleFormsBuiltins.execute_query();
            //     }
            // }
            // else {
            //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO HA SELECCIONADO NINGUNA PLANEACIÓN ...", null, null, null, T_RESPUESTA);
            // }
        }
        console.log("Exiting CRFESTDOCS_crtcontrol_historia_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA    NUMBER;
    // V_EXISTE       NUMBER;
    // 
    // BEGIN
    //    
    //    
    //  IF :CRTERROR.SELEC ='S' THEN   
    //     BEGIN  
    //       SELECT COUNT(9) 
    //         INTO V_EXISTE
    //       FROM CRTERRXCTOS   
    //       WHERE ERRCTO_OFCSOL =:SOLICR_OFCSOL
    //     AND ERRCTO_CODSOL =:SOLICR_CODSOL
    //     AND ERRCTO_TIPCRE =:SOLICR_TIPCRE
    //         AND ERRCTO_PLANEA =:V_PLANEACION
    //         AND ERRCTO_TIPO   =:CRTERROR.ERR_TIPO
    //         AND ERRCTO_CODIGO =:CRTERROR.ERR_CODIGO;
    //         
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_EXISTE :=0;
    //     END; 
    //     IF V_EXISTE = 0 THEN
    //       PUP_INSERTA_ERROR;
    //       COMMIT;
    //    ELSE 
    //       IF FRM$ALERTA_SINO ('EL ERROR YA FUE INSERTADO, DESEA REGISTRARLO NUEVAMENTE ?') = 1 THEN
    //        PUP_INSERTA_ERROR;
    //       ELSE 
    //        GO_BLOCK('CRTESTDOC1');
    //         EXECUTE_QUERY;
    //         GO_BLOCK('CRTCONTROL');
    //         EXECUTE_QUERY;
    //         GO_BLOCK('CRTESTDOC1');
    //       END IF;
    //    END IF;
    //   END IF;
    // END;  
    //#endregion
    async CRFESTDOCS_crterror_selec_whenCheckboxChanged() {
        console.log("Entering CRFESTDOCS_crterror_selec_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        if (this.CRTERROR.SELEC == "S") {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_OFCSOL", SOLICR_OFCSOL);
            // payload1.set("SOLICR_CODSOL", SOLICR_CODSOL);
            // payload1.set("SOLICR_TIPCRE", SOLICR_TIPCRE);
            // payload1.set("V_PLANEACION", V_PLANEACION);
            // payload1.set("ERR_TIPO", CRTERROR.ERR_TIPO);
            // payload1.set("ERR_CODIGO", CRTERROR.ERR_CODIGO);
            // call REST API
            const result1 = await Rest.post("/crfestdocs_crterror/crfestdocs_crterror_selec_whencheckboxchanged_query1", payload1);
            // get values from result
            V_EXISTE = result1[0].get("V_EXISTE");
            if (result1 == null || result1.length == 0) {

                V_EXISTE = 0;
            }

            if (V_EXISTE == 0) {
                // CRFESTDOCS_PUP_INSERTA_ERROR();
            }
            else {
                // if (FRM$ALERTA_SINO("EL ERROR YA FUE INSERTADO, DESEA REGISTRARLO NUEVAMENTE ?") == 1) {
                //     // CRFESTDOCS_PUP_INSERTA_ERROR();
                // }
                // else {
                //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
                //     this.oracleFormsBuiltins.execute_query();
                //     this.oracleFormsBuiltins.go_block("CRTCONTROL");
                //     this.oracleFormsBuiltins.execute_query();
                //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
                // }
            }
        }
        console.log("Exiting CRFESTDOCS_crterror_selec_whenCheckboxChanged");
    }

    async CRFESTDOCS_crtaudpla_keyDelrec() {
        // null;
    }

    async CRFESTDOCS_crtaudpla_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    // :AUDPLA_USUARI:=USER;  
    // :AUDPLA_FECREG:=PLSQLBuiltins.sysdate();     
    //  
    // END;
    //#endregion
    async CRFESTDOCS_crtaudpla_whenCreateRecord() {
        console.log("Entering CRFESTDOCS_crtaudpla_whenCreateRecord");
        this.CRTAUDPLA.AUDPLA_USUARI = PLSQLBuiltins.user();
        this.CRTAUDPLA.AUDPLA_FECREG = PLSQLBuiltins.sysdate();
        console.log("Exiting CRFESTDOCS_crtaudpla_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN
    //    GO_BLOCK('CRTCONTROL');
    //   HIDE_VIEW('CANVAS5');
    //   SYNCHRONIZE;
    // END;
    //#endregion
    async CRFESTDOCS_crtaudpla_keyExit() {
        console.log("Entering CRFESTDOCS_crtaudpla_keyExit");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFESTDOCS_crtaudpla_keyExit");
    }

    //#region PLSQL
    // BEGIN COMMIT; END;
    //#endregion
    async CRFESTDOCS_crtaudpla_keyCommit() {
        console.log("Entering CRFESTDOCS_crtaudpla_keyCommit");
        console.log("Exiting CRFESTDOCS_crtaudpla_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //    GO_BLOCK('CRTCONTROL');
    //   HIDE_VIEW('CANVAS5');
    //   SYNCHRONIZE;
    // END;
    //#endregion
    async CRFESTDOCS_crtaudpla_keyPrvblk() {
        console.log("Entering CRFESTDOCS_crtaudpla_keyPrvblk");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.hide_view("CANVAS5");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFESTDOCS_crtaudpla_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA ('MENSAJE','BLOQUE UNICAMENTE DE CONSULTA ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFESTDOCS_crtsolicr_keyDelrec() {
        console.log("Entering CRFESTDOCS_crtsolicr_keyDelrec");
        let T_RESPUESTA: number = null;
        // CRFESTDOCS_LIB$ALERTA("MENSAJE", "BLOQUE UNICAMENTE DE CONSULTA ...", null, null, null, T_RESPUESTA);
        console.log("Exiting CRFESTDOCS_crtsolicr_keyDelrec");
    }

    //#region PLSQL
    // BEGIN /*
    // BEGIN
    //  SELECT COM_USOPER     
    //   INTO :CRTSOLICR.SOLICR_USOFID
    //  FROM SETCOMCIA
    //  WHERE COM_USORAC=:SOLICR_USCIAL;
    // EXCEPTION
    //  WHEN NO_DATA_FOUND THEN NULL;
    // END;
    // 
    // */
    // NULL; END;
    //#endregion
    async CRFESTDOCS_crtsolicr_whennewrecordinstance() {
        console.log("Entering CRFESTDOCS_crtsolicr_whennewrecordinstance");
        console.log("Exiting CRFESTDOCS_crtsolicr_whennewrecordinstance");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTCONTROL');
    // CLEAR_BLOCK;
    // GO_BLOCK('CRTESTDOC1');
    // CLEAR_BLOCK;
    // GO_BLOCK('CRTSOLICR');
    // ENTER_QUERY; END;
    //#endregion
    async CRFESTDOCS_crtsolicr_keyEntqry() {
        console.log("Entering CRFESTDOCS_crtsolicr_keyEntqry");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.enter_query();
        console.log("Exiting CRFESTDOCS_crtsolicr_keyEntqry");
    }

    async CRFESTDOCS_crtsolicr_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   LIB$ALERTA ('MENSAJE','BLOQUE UNICAMENTE DE CONSULTA ...',NULL,NULL,NULL,T_RESPUESTA);
    // END;
    //#endregion
    async CRFESTDOCS_crtsolicr_keyCrerec() {
        console.log("Entering CRFESTDOCS_crtsolicr_keyCrerec");
        let T_RESPUESTA: number = null;
        // CRFESTDOCS_LIB$ALERTA("MENSAJE", "BLOQUE UNICAMENTE DE CONSULTA ...", null, null, null, T_RESPUESTA);
        console.log("Exiting CRFESTDOCS_crtsolicr_keyCrerec");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTCONTROL DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTCONTROL_CUR IS      
    //     SELECT 1 FROM CRTCONTROL     
    //     WHERE CONTROL_NITTER = :CRTSOLICR.SOLICR_NITTER AND CONTROL_CODSOL = :CRTSOLICR.SOLICR_CODSOL AND CONTROL_OFCSOL = :CRTSOLICR.SOLICR_OFCSOL;
    //   --
    //   -- END CRTCONTROL DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTCONTROL DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTCONTROL_CUR;     
    //   FETCH CRTCONTROL_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTCONTROL_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTCONTROL_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTCONTROL_CUR;
    //   --
    //   -- END CRTCONTROL DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTDOCS_crtsolicr_onCheckDeleteMaster() {
        console.log("Entering CRFESTDOCS_crtsolicr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTDOCS_crtsolicr_onCheckDeleteMaster");
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
    //   -- BEGIN CRTCONTROL DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTSOLICR.SOLICR_NITTER IS NOT NULL) OR (:CRTSOLICR.SOLICR_CODSOL IS NOT NULL) OR (:CRTSOLICR.SOLICR_OFCSOL IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTSOLICR.CRTSOLICR_CRTCONTROL');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTCONTROL');   
    //   END IF;
    //   --
    //   -- END CRTCONTROL DETAIL PROGRAM SECTION
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
    async CRFESTDOCS_crtsolicr_onPopulateDetails() {
        console.log("Entering CRFESTDOCS_crtsolicr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        // if ((((CRTSOLICR.SOLICR_NITTER != null) || (CRTSOLICR.SOLICR_CODSOL != null)) || (CRTSOLICR.SOLICR_OFCSOL != null))) {
        //     REL_ID = this.oracleFormsBuiltins.find_relation("CRTSOLICR.CRTSOLICR_CRTCONTROL");
        //     // CRFESTDOCS_QUERY_MASTER_DETAILS(REL_ID, "CRTCONTROL");
        // }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTDOCS_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTDOCS_crtsolicr_onPopulateDetails");
    }

    async CRFESTDOCS_crtsolicr_keyPrvblk() {
        // null;
    }

    //#region PLSQL
    // BEGIN
    //   BEGIN
    //    SELECT DECODE (TERPER,'N', TERAPE||' '||TERNOM,TERAPE)
    //      INTO :TEXT_ITEM39
    //    FROM TER
    //    WHERE TERCOD=:SOLICR_NITTER;
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END;
    //   /*
    //   BEGIN
    //    SELECT OFIDES
    //     INTO :TEXT_ITEM41
    //    FROM OFI
    //     WHERE OFICOD=:SOLICR_OFCSOL;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //   */
    // END;
    // 
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //   BEGIN
    //    SELECT USU_CARGO
    //     INTO TIPO_PERSONA
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=USER;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN NULL;
    //    END; 
    //   /* IF TIPO_PERSONA IN ('OD','JO','JI')  THEN
    //     IF NVL(:CONTROL_VBPLAN,'NK')='NK' THEN
    //        SET_ITEM_PROPERTY('CARTA',ENABLED,"ATTR_OFF");
    //     ELSIF NVL(:CONTROL_VBPLAN,'NK')='OK' THEN
    //           SET_ITEM_PROPERTY('CARTA',ENABLED,ATTR_ON); 
    //     END IF;
    //    ELSE
    //           SET_ITEM_PROPERTY('CARTA',ENABLED,"ATTR_OFF");
    //    END IF;*/
    //    /*IF TIPO_PERSONA NOT IN ('OD','OI','JI')  THEN
    //       SET_ITEM_PROPERTY('PLANEACION',ENABLED,"ATTR_OFF");
    //    END IF; */
    //    
    //    BEGIN
    //    SELECT USU_NOMBRE
    //      INTO :NOM_COMERCIAL
    //      FROM SGUSUARIOS
    //      WHERE USU_CODIGO=:CRTSOLICR.SOLICR_USCIAL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN NULL;
    //   END; 
    //   /*
    //   BEGIN
    //   SELECT COM_USOPER     
    //    INTO :CRTSOLICR.SOLICR_USOFID
    //  FROM SETCOMCIA
    //  WHERE COM_USORAC=:SOLICR_USCIAL;
    //   EXCEPTION
    //   WHEN NO_DATA_FOUND THEN  NULL;
    //   END;
    //   */
    //   BEGIN
    //    SELECT USU_NOMBRE
    //     INTO :NOM_OFICIAL
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:CRTSOLICR.SOLICR_USOFID;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //   END;  
    // END;
    //#endregion
    async CRFESTDOCS_crtsolicr_postQuery() {
        console.log("Entering CRFESTDOCS_crtsolicr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_NITTER", SOLICR_NITTER);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_postquery_query1", payload1);
        // get values from result
        // TEXT_ITEM39 = result1[0].get("TEXT_ITEM39");
        if (result1 == null || result1.length == 0) {

        }

        let TIPO_PERSONA: null = null;
        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_postquery_query2", payload2);
        // get values from result
        TIPO_PERSONA = result2[0].get("TIPO_PERSONA");
        if (result2 == null || result2.length == 0) {

        }

        // construct payload
        let payload3 = new Map();
        payload3.set("SOLICR_USCIAL", this.CRTSOLICR.SOLICR_USCIAL);
        // call REST API
        const result3 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_postquery_query3", payload3);
        // get values from result
        // NOM_COMERCIAL = result3[0].get("NOM_COMERCIAL");
        if (result3 == null || result3.length == 0) {

        }

        // construct payload
        let payload4 = new Map();
        payload4.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        // call REST API
        const result4 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_postquery_query4", payload4);
        // get values from result
        // NOM_OFICIAL = result4[0].get("NOM_OFICIAL");
        if (result4 == null || result4.length == 0) {

        }

        console.log("Exiting CRFESTDOCS_crtsolicr_postQuery");
    }

    //#region PLSQL
    // DECLARE
    // CURSOR C1 IS
    // SELECT CONCTO_CONINI,CONCTO_CONFIN,CONCTO_CONACT          
    //   FROM COTCONCTO
    //  WHERE CONCTO_OFCCOL  =:SOLICR_OFCSOL
    //    AND CONCTO_TIPCTO  =:SOLICR_TIPCRE
    // FOR UPDATE OF CONCTO_CONACT  
    // ;
    // T_RESPUESTA NUMBER;
    // RESTA VARCHAR2(8);
    // BEGIN
    // 
    // IF FRM$ALERTA_SINO ('ESTA SEGURO DE QUE DESEA CREAR UNA NUEVA PLANECIÓN PARA ESTA SOLICITUD') = 1 THEN
    //   FOR ACT IN C1 LOOP
    //      IF NOT(ACT.CONCTO_CONACT BETWEEN ACT.CONCTO_CONINI AND ACT.CONCTO_CONFIN) THEN
    //         LIB$ALERTA('MENSAJE','CONSECUTIVO FUERA DEL RANGO CONSULTAR A SUPER USUARIO',NULL,NULL,NULL,T_RESPUESTA);
    //         RAISE FORM_TRIGGER_FAILURE; 
    //      END IF;
    //      :CONTROL_PLANEA:=LPAD(TO_CHAR(TO_NUMBER(ACT.CONCTO_CONACT )),10,'0');
    //      :V_PLANEACION:=:CONTROL_PLANEA;
    //      
    //       UPDATE COTCONCTO
    //       SET CONCTO_CONACT =LPAD(TO_CHAR(TO_NUMBER(ACT.CONCTO_CONACT )+1),10,'0')
    //       WHERE  CURRENT OF C1;
    //    END LOOP;
    //  COMMIT_FORM;
    //   UPDATE CRTCONTROL
    //      SET CONTROL_ESTGRL='TR'
    //     WHERE CONTROL_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //       AND CONTROL_CODSOL=:CRTSOLICR.SOLICR_CODSOL         
    //       AND CONTROL_PLANEA=:CRTSOLICR.V_PLANEACION;
    //   COMMIT;
    //   
    //   --:CRTCONTROL.CONTROL_USUCTO:= FUP_OFICIAL_CTTO;
    //   IF USER = 'OPS$JCRC' THEN
    //     :CRTCONTROL.CONTROL_USUCTO := 'OPS$JCRC'; 
    //     COMMIT;
    //   ELSE
    //       PBD_COL_ASIGNA_OFICIALCTO (:CRTCONTROL.CONTROL_USUCTO, :CRTSOLICR.SOLICR_LINEA);
    //       --PBD_COL_ASIGNA_OFICIALCTO (:CRTCONTROL.CONTROL_USUCTO);
    //     COMMIT_FORM;
    //   END IF;
    //   --
    //  GO_BLOCK('CRTCONTROL');
    //  CLEAR_BLOCK;
    //  GO_BLOCK('CRTESTDOC1');
    //  CLEAR_BLOCK;
    //  GO_ITEM('V_PLANEACION');
    //  -- GO_BLOCK('CRTCONTROL');
    //  -- EXECUTE_QUERY;
    //  
    // ELSE
    //      LIB$ALERTA('MENSAJE', 'LA PLANECIÓN NO HA SIDO CREADA',NULL,NULL,NULL, T_RESPUESTA);
    // END IF;
    // 
    // 
    // 
    // 
    // END;
    //#endregion
    async CRFESTDOCS_crtsolicr_planeacion_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtsolicr_planeacion_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let RESTA: string = null;
        // if (FRM$ALERTA_SINO("ESTA SEGURO DE QUE DESEA CREAR UNA NUEVA PLANECIÓN PARA ESTA SOLICITUD") == 1) {
        //     this.oracleFormsBuiltins.commit_form();
        //     // construct payload
        //     let payload1 = new Map();
        //     // payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        //     // payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
        //     // payload1.V_PLANEACION = : V_PLANEACION;
        //     // call REST API
        //     const result1 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_planeacion_whenbuttonpressed_query1", payload1);
        //     if (USER == "OPS$JCRC") {
        //         this.CRTCONTROL.CONTROL_USUCTO = "OPS$JCRC";
        //     }
        //     else {
        //         // CRFESTDOCS_PBD_COL_ASIGNA_OFICIALCTO(this.CRTCONTROL.CONTROL_USUCTO, this.CRTSOLICR.SOLICR_LINEA);
        //         this.oracleFormsBuiltins.commit_form();
        //     }
        //     this.oracleFormsBuiltins.go_block("CRTCONTROL");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
        //     this.oracleFormsBuiltins.clear_block();
        //     this.oracleFormsBuiltins.go_item("V_PLANEACION");
        // }
        // else {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA PLANECIÓN NO HA SIDO CREADA", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFESTDOCS_crtsolicr_planeacion_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_EXISTE NUMBER;
    // BEGIN
    //    BEGIN  
    //       SELECT COUNT(9) 
    //         INTO V_EXISTE
    //       FROM CRTESTDOC
    //       WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //     AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //     AND ESTDOC_TIPCRE=:SOLICR_TIPCRE
    //         AND NVL(ESTDOC_PLANEA,'XX')=:V_PLANEACION;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_EXISTE :=0;
    //     END; 
    //     IF V_EXISTE = 0 THEN
    //       LIB$ALERTA('MENSAJE', 'LA PLANECIÓN NO TIENE DOCUMENTOS ASOCIADOS. FAVOR SELECCIONELOS ..',NULL,NULL,NULL, T_RESPUESTA);
    //     /*  GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;*/
    //        GO_BLOCK('CRTCONTROL');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTSOLICR');
    //        GO_ITEM('V_TIOPE');
    //        /*GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;*/
    //     ELSE
    //      --LIB$ALERTA('MENSAJE', 'DEBE SELECCIONAR COMO MÍNIMO UNA PLANEACIÓN PARA LA SOLICITUD DIGITADA. FAVOR SELECCIONELA..',NULL,NULL,NULL, T_RESPUESTA);
    //       GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTCONTROL');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //     END IF;
    // END;  
    //#endregion
    async CRFESTDOCS_crtsolicr_vPlaneacion_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtsolicr_vPlaneacion_keyNextItem");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("SOLICR_OFCSOL", SOLICR_OFCSOL);
        // payload1.set("SOLICR_CODSOL", SOLICR_CODSOL);
        // payload1.set("SOLICR_TIPCRE", SOLICR_TIPCRE);
        // payload1.set("V_PLANEACION", V_PLANEACION);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_vplaneacion_keynextitem_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (V_EXISTE == 0) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA PLANECIÓN NO TIENE DOCUMENTOS ASOCIADOS. FAVOR SELECCIONELOS ..", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTCONTROL");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTSOLICR");
            this.oracleFormsBuiltins.go_item("V_TIOPE");
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTCONTROL");
            this.oracleFormsBuiltins.execute_query();
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CRFESTDOCS_crtsolicr_vPlaneacion_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // V_EXISTE    NUMBER;
    // BEGIN
    //  IF :V_PLANEACION IS NOT NULL THEN
    //   PU_VALIDA;
    //   --GO_BLOCK('CRTTIOPER');
    //   --EXECUTE_QUERY;
    //  ELSE
    //   LIB$ALERTA('MENSAJE','NO HA SELECCIONADO UNA PLANECIÓN.....',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;
    // END; 
    //  
    //  
    //     
    //#endregion
    async CRFESTDOCS_crtsolicr_vTiope_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtsolicr_vTiope_whenButtonPressed");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        // if ((V_PLANEACION != null)) {
        //     // CRFESTDOCS_PU_VALIDA();
        // }
        // else {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO HA SELECCIONADO UNA PLANECIÓN.....", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFESTDOCS_crtsolicr_vTiope_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('L_PLANEA') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_BLOCK('CRTESTDOC1');
    //   CLEAR_BLOCK;
    //   GO_BLOCK('CRTCONTROL');
    //   CLEAR_BLOCK;
    //   GO_ITEM('V_PLANEACION');
    //  END IF;
    // END; 
    //#endregion
    async CRFESTDOCS_crtsolicr_lista_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crtsolicr_lista_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("L_PLANEA"))) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_block("CRTCONTROL");
            this.oracleFormsBuiltins.clear_block();
            this.oracleFormsBuiltins.go_item("V_PLANEACION");
        }
        console.log("Exiting CRFESTDOCS_crtsolicr_lista_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA   NUMBER;
    // BEGIN
    //   SELECT USU_NOMBRE
    //    INTO :NOM_OFICIAL
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:CRTSOLICR.SOLICR_USOFID;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //      LIB$ALERTA('MENSAJE', 'LA SOLICITUD NO TIENE OFICIAL DE DESEMBOLSO ASIGNADO. SELECCIONE UNO DE LA LISTA DE VALORES....',NULL,NULL,NULL, T_RESPUESTA);
    //   END;  
    //#endregion
    async CRFESTDOCS_crtsolicr_solicrUsofid_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtsolicr_solicrUsofid_whenValidateItem");
        let T_RESPUESTA: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("SOLICR_USOFID", this.CRTSOLICR.SOLICR_USOFID);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtsolicr/crfestdocs_crtsolicr_solicrusofid_whenvalidateitem_query1", payload1);
        // get values from result
        // NOM_OFICIAL = result1[0].get("NOM_OFICIAL");
        if (result1 == null || result1.length == 0) {

            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA SOLICITUD NO TIENE OFICIAL DE DESEMBOLSO ASIGNADO. SELECCIONE UNO DE LA LISTA DE VALORES....", null, null, null, T_RESPUESTA);
        }

        console.log("Exiting CRFESTDOCS_crtsolicr_solicrUsofid_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTERROR');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFESTDOCS_crttiperr_keyNxtblk() {
        console.log("Entering CRFESTDOCS_crttiperr_keyNxtblk");
        this.oracleFormsBuiltins.go_block("CRTERROR");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTDOCS_crttiperr_keyNxtblk");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTERROR DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTERROR_CUR IS      
    //     SELECT 1 FROM CRTERROR C     
    //     WHERE C.ERR_TIPO = :CRTTIPERR.TIPERR_CODIGO;
    //   --
    //   -- END CRTERROR DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTERROR DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTERROR_CUR;     
    //   FETCH CRTERROR_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTERROR_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTERROR_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTERROR_CUR;
    //   --
    //   -- END CRTERROR DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTDOCS_crttiperr_onCheckDeleteMaster() {
        console.log("Entering CRFESTDOCS_crttiperr_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTDOCS_crttiperr_onCheckDeleteMaster");
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
    //   -- BEGIN CRTERROR DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTTIPERR.TIPERR_CODIGO IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTTIPERR.CRTTIPERR_CRTERROR');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTERROR');   
    //   END IF;
    //   --
    //   -- END CRTERROR DETAIL PROGRAM SECTION
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
    async CRFESTDOCS_crttiperr_onPopulateDetails() {
        console.log("Entering CRFESTDOCS_crttiperr_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((this.CRTTIPERR.TIPERR_CODIGO != null)) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTTIPERR.CRTTIPERR_CRTERROR");
            // CRFESTDOCS_QUERY_MASTER_DETAILS(REL_ID, "CRTERROR");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTDOCS_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTDOCS_crttiperr_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //  SELECT AREA_DESCRI
    //    INTO :VAR_DESAREA
    //  FROM CRTARECOM
    //  WHERE AREA_CODIGO = :TIPERR_AREA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :VAR_DESAREA := NULL;
    // END;
    //#endregion
    async CRFESTDOCS_crttiperr_postQuery() {
        console.log("Entering CRFESTDOCS_crttiperr_postQuery");
        // construct payload
        let payload1 = new Map();
        // payload1.set("TIPERR_AREA", TIPERR_AREA);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crttiperr/crfestdocs_crttiperr_postquery_query1", payload1);
        // get values from result
        // VAR_DESAREA = result1[0].get("VAR_DESAREA");
        if (result1 == null || result1.length == 0) {

            this.CRTTIPERR.VAR_DESAREA = null;
        }

        console.log("Exiting CRFESTDOCS_crttiperr_postQuery");
    }

    //#region PLSQL
    // BEGIN GO_BLOCK('CRTERROR'); END;
    //#endregion
    async CRFESTDOCS_crttiperr_tiperrCodigo_keyNextItem() {
        console.log("Entering CRFESTDOCS_crttiperr_tiperrCodigo_keyNextItem");
        this.oracleFormsBuiltins.go_block("CRTERROR");
        console.log("Exiting CRFESTDOCS_crttiperr_tiperrCodigo_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PERSONA IN ('JO','JI') AND :ESTDOC_ESTDOC='NA' THEN
    //       DELETE_RECORD;
    //       COMMIT_FORM;
    //      ELSE
    //       NULL;
    //     END IF;
    // END;
    // 
    // 
    //          
    //#endregion
    async CRFESTDOCS_crtestdoc1_keyDelrec() {
        console.log("Entering CRFESTDOCS_crtestdoc1_keyDelrec");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_keydelrec_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // if ((["JO", "JI"].indexOf(TIPO_PERSONA) != -1 && ESTDOC_ESTDOC == "NA")) {
        //     this.oracleFormsBuiltins.delete_record();
        //     this.oracleFormsBuiltins.commit_form();
        // }
        else {
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_keyDelrec");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     IF TIPO_PERSONA IN('OD','OI') AND  NVL(:CONTROL_VBPLAN,'NK')='NK' THEN
    //        CREATE_RECORD;
    //     ELSIF TIPO_PERSONA IN('JO','JI') THEN
    //        NULL;
    //     ELSIF TIPO_PERSONA='GE' THEN
    //        NULL;
    //     ELSIF TIPO_PERSONA='PR' THEN
    //        NULL;
    //     ELSE
    //       NULL; 
    //     END IF; 
    // END; 
    //#endregion
    async CRFESTDOCS_crtestdoc1_keyCrerec() {
        console.log("Entering CRFESTDOCS_crtestdoc1_keyCrerec");
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_keycrerec_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.create_record();
        }
        else if (["JO", "JI"].indexOf(TIPO_PERSONA) != -1) {
        }
        else if (TIPO_PERSONA == "GE") {
        }
        else if (TIPO_PERSONA == "PR") {
        }
        else {
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_keyCrerec");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // GO_BLOCK('CRTCONTROL');
    // EXECUTE_QUERY; END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_keyCommit() {
        console.log("Entering CRFESTDOCS_crtestdoc1_keyCommit");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.execute_query();
        console.log("Exiting CRFESTDOCS_crtestdoc1_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //  GO_BLOCK('CRTCONTROL');
    //  CLEAR_BLOCK;
    //  GO_BLOCK('CRTESTADOC1');
    //  CLEAR_BLOCK;
    //  --NO APLICA PARA EL CAMBIO SOLICITADO EL 14-07-2005 LDB
    //   /*DELETE FROM CRTESTDOC
    //      WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //         AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //         AND ESTDOC_NITTER=:SOLICR_NITTER
    //         AND ESTDOC_VBOPER   IS NULL;
    //    COMMIT;*/
    //   GO_BLOCK('CRTSOLICR');
    //   HIDE_VIEW('CANVAS2');
    //   SYNCHRONIZE;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_keyExit() {
        console.log("Entering CRFESTDOCS_crtestdoc1_keyExit");
        this.oracleFormsBuiltins.go_block("CRTCONTROL");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTESTADOC1");
        this.oracleFormsBuiltins.clear_block();
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFESTDOCS_crtestdoc1_keyExit");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //  
    //     BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //    IF TIPO_PERSONA IN ('GE','PR','JO','JI')  THEN
    //     PUP_CONTROLES_ESTADOS;
    //    END IF; 
    // END; 
    //#endregion
    async CRFESTDOCS_crtestdoc1_whenvalidaterecord() {
        console.log("Entering CRFESTDOCS_crtestdoc1_whenvalidaterecord");
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_whenvalidaterecord_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["GE", "PR", "JO", "JI"].indexOf(TIPO_PERSONA) != -1) {
            // CRFESTDOCS_PUP_CONTROLES_ESTADOS();
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_whenvalidaterecord");
    }

    //#region PLSQL
    // BEGIN
    //  IF :SYSTEM.LAST_RECORD='FALSE' THEN
    //    IF :ESTDOC_CODDOC IS NOT NULL THEN
    //     DOWN;
    //    END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_keyDown() {
        console.log("Entering CRFESTDOCS_crtestdoc1_keyDown");
        if (this._SYSTEM_SERVICE.get("this.oracleFormsBuiltins.last_record") == "FALSE") {
            // if ((ESTDOC_CODDOC != null)) {
            //     this.oracleFormsBuiltins.down();
            // }
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_keyDown");
    }

    async CRFESTDOCS_crtestdoc1_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    // V_PLANEA NUMBER;
    // V_EXISTE_PE   NUMBER;
    // 
    // 
    // BEGIN
    //  /*BEGIN
    //  IF :CONTROL_VBPLAN='OK' AND :CONTROL_VBCTTO ='OK' AND :CONTROL_ELACON ='OK' THEN        
    //     :CONTROL_DESEMB:='OK';  
    //     :CONTROL_FECREG:=PLSQLBuiltins.sysdate();         
    //   ELSE      
    //     :CONTROL_DESEMB:='NK';         
    //     :CONTROL_FECREG:=PLSQLBuiltins.sysdate();         
    //     :CONTROL_ESTGRL:='TR';   
    //   END IF;
    //  END;*/
    //  BEGIN
    //  SELECT COUNT(9)
    //    INTO V_EXISTE_PE
    //  FROM CRTESTDOC
    //   WHERE ESTDOC_OFCSOL=:CRTCONTROL.CONTROL_OFCSOL
    //     AND ESTDOC_CODSOL=:CRTCONTROL.CONTROL_CODSOL
    //     AND ESTDOC_PLANEA=:CRTCONTROL.CONTROL_PLANEA
    //     AND NVL(ESTDOC_ESTDOC,'XX')='PE'
    //     AND ESTDOC_CODDOC LIKE 'A%'
    //     AND ESTDOC_TIPODC = 'A';
    //     --AND NVL(ESTDOC_VBJOPE,'XX')='PE'
    //     
    //  EXCEPTION
    //   WHEN NO_DATA_FOUND THEN
    //    V_EXISTE_PE:=1;
    //  END;
    //  
    //  IF  V_EXISTE_PE = 0 THEN
    //   IF :CONTROL_ELACON IS NULL AND :CONTROL_FELACO IS NULL THEN
    //    
    //     UPDATE CRTCONTROL
    //       SET CONTROL_ELACON = 'OK'
    //         ,CONTROL_FELACO = TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI')
    //     WHERE CONTROL_OFCSOL = :CONTROL_OFCSOL
    //      AND  CONTROL_CODSOL = :CONTROL_CODSOL
    //      AND  CONTROL_PLANEA = :V_PLANEACION;
    //    END IF;
    //  END IF;
    // END;         
    // 
    //  
    //#endregion
    async CRFESTDOCS_crtestdoc1_postUpdate() {
        console.log("Entering CRFESTDOCS_crtestdoc1_postUpdate");
        let V_PLANEA: number = null;
        let V_EXISTE_PE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("CONTROL_OFCSOL", this.CRTCONTROL.CONTROL_OFCSOL);
        payload1.set("CONTROL_CODSOL", this.CRTCONTROL.CONTROL_CODSOL);
        payload1.set("CONTROL_PLANEA", this.CRTCONTROL.CONTROL_PLANEA);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_postupdate_query1", payload1);
        // get values from result
        V_EXISTE_PE = result1[0].get("V_EXISTE_PE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE_PE = 1;
        }

        if (V_EXISTE_PE == 0) {
            // if (((CONTROL_ELACON == null) && (CONTROL_FELACO == null))) {
            //     // construct payload
            //     let payload2 = new Map();
            //     payload2.CONTROL_OFCSOL = : CONTROL_OFCSOL;
            //     payload2.CONTROL_CODSOL = : CONTROL_CODSOL;
            //     payload2.V_PLANEACION = : V_PLANEACION;
            //     // call REST API
            //     const result2 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_postupdate_query2", payload2);
            // }
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_postUpdate");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE VARCHAR2(1);
    //   --
    //   -- BEGIN CRTHISTDOC_CONSULTA DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTHISTDOC_CONSULTA_CUR IS      
    //     SELECT 1 FROM CRTHISTDOC     
    //     WHERE HISTDO_OFCSOL = :CRTESTDOC1.ESTDOC_OFCSOL AND HISTDO_CODSOL = :CRTESTDOC1.ESTDOC_CODSOL AND HISTDO_NITTER = :CRTESTDOC1.ESTDOC_NITTER AND HISTDO_CODDOC = :CRTESTDOC1.ESTDOC_CODDOC AND HISTDO_ESTDOC = :CRTESTDOC1.ESTDOC_ESTDOC AND HISTDO_PLANEA = :CRTESTDOC1.ESTDOC_PLANEA AND HISTDO_TIPCRE = :CRTESTDOC1.ESTDOC_TIPCRE;
    //   --
    //   -- END CRTHISTDOC_CONSULTA DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTHISTDOC_CONSULTA DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTHISTDOC_CONSULTA_CUR;     
    //   FETCH CRTHISTDOC_CONSULTA_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTHISTDOC_CONSULTA_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTHISTDOC_CONSULTA_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTHISTDOC_CONSULTA_CUR;
    //   --
    //   -- END CRTHISTDOC_CONSULTA DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_onCheckDeleteMaster() {
        console.log("Entering CRFESTDOCS_crtestdoc1_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_onCheckDeleteMaster");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  V_PRIVILEGIOS VARCHAR2(1);
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     
    //     BEGIN
    //      SELECT USU_PRIVIL
    //       INTO V_PRIVILEGIOS
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     IF TIPO_PERSONA IN('OD','OI') THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,"ATTR_OFF"); 
    //     ELSIF TIPO_PERSONA IN ('JO') THEN
    //        SET_ITEM_PROPERTY('ESTDOC_CODDOC',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,"ATTR_OFF"); 
    //     ELSIF TIPO_PERSONA='GE' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_CODDOC',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"PROPERTY_FALSE"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"PROPERTY_FALSE");
    //     ELSIF TIPO_PERSONA='PR' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_CODDOC',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //     ELSIF V_PRIVILEGIOS ='S' AND  TIPO_PERSONA IN ('OD','JO') THEN  
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,ATTR_ON);
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,ATTR_ON); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,ATTR_ON);
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,ATTR_ON); 
    //     END IF; 
    // END; 
    // BEGIN
    //  :ESTDOC_FECREG:=PLSQLBuiltins.sysdate();
    //  :ESTDOC_USUARI:=USER;
    // END; 
    //#endregion
    async CRFESTDOCS_crtestdoc1_whenCreateRecord() {
        console.log("Entering CRFESTDOCS_crtestdoc1_whenCreateRecord");
        let TIPO_PERSONA: null = null;
        let V_PRIVILEGIOS: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_whencreaterecord_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_whencreaterecord_query2", payload2);
        // get values from result
        V_PRIVILEGIOS = result2[0].get("V_PRIVILEGIOS");
        if (result2 == null || result2.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_OFF");
        }
        else if (["JO"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_CODDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_OFF");
        }
        else if (TIPO_PERSONA == "GE") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_CODDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "PROPERTY_FALSE");
        }
        else if (TIPO_PERSONA == "PR") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_CODDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
        }
        else if ((V_PRIVILEGIOS == "S" && ["OD", "JO"].indexOf(TIPO_PERSONA) != -1)) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_ON");
        }
        this.CRTESTDOC1.ESTDOC_FECREG = PLSQLBuiltins.sysdate();
        this.CRTESTDOC1.ESTDOC_USUARI = PLSQLBuiltins.user();
        console.log("Exiting CRFESTDOCS_crtestdoc1_whenCreateRecord");
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
    //   -- BEGIN CRTHISTDOC_CONSULTA DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTESTDOC1.ESTDOC_OFCSOL IS NOT NULL) OR (:CRTESTDOC1.ESTDOC_CODSOL IS NOT NULL) OR (:CRTESTDOC1.ESTDOC_NITTER IS NOT NULL) OR (:CRTESTDOC1.ESTDOC_CODDOC IS NOT NULL) OR (:CRTESTDOC1.ESTDOC_ESTDOC IS NOT NULL) OR (:CRTESTDOC1.ESTDOC_PLANEA IS NOT NULL) OR (:CRTESTDOC1.ESTDOC_TIPCRE IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTESTDOC1.CRTESTDOC1_CRTHISTDOC_CONSULTA');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTHISTDOC_CONSULTA');   
    //   END IF;
    //   --
    //   -- END CRTHISTDOC_CONSULTA DETAIL PROGRAM SECTION
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
    async CRFESTDOCS_crtestdoc1_onPopulateDetails() {
        console.log("Entering CRFESTDOCS_crtestdoc1_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if ((((((((this.CRTESTDOC1.ESTDOC_OFCSOL != null) || (this.CRTESTDOC1.ESTDOC_CODSOL != null)) || (this.CRTESTDOC1.ESTDOC_NITTER != null)) || (this.CRTESTDOC1.ESTDOC_CODDOC != null)) || (this.CRTESTDOC1.ESTDOC_ESTDOC != null)) || (this.CRTESTDOC1.ESTDOC_PLANEA != null)) || (this.CRTESTDOC1.ESTDOC_TIPCRE != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CRTESTDOC1.CRTESTDOC1_CRTHISTDOC_CONSULTA");
            // CRFESTDOCS_QUERY_MASTER_DETAILS(REL_ID, "CRTHISTDOC_CONSULTA");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTDOCS_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTDOCS_crtestdoc1_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   CLEAR_BLOCK;
    //   DELETE FROM CRTESTDOC
    //      WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //         AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //         AND ESTDOC_NITTER=:SOLICR_NITTER
    //         AND ESTDOC_VBOPER   IS NULL;
    //    COMMIT;
    //   GO_BLOCK('CRTSOLICR');
    //   ENTER_QUERY;
    //   HIDE_VIEW('CANVAS2');
    //   SYNCHRONIZE;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_keyPrvblk() {
        console.log("Entering CRFESTDOCS_crtestdoc1_keyPrvblk");
        this.oracleFormsBuiltins.clear_block();
        // construct payload
        let payload1 = new Map();
        // payload1.SOLICR_OFCSOL = : SOLICR_OFCSOL;
        // payload1.SOLICR_CODSOL = : SOLICR_CODSOL;
        // payload1.SOLICR_NITTER = : SOLICR_NITTER;
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_keyprvblk_query1", payload1);
        this.oracleFormsBuiltins.go_block("CRTSOLICR");
        this.oracleFormsBuiltins.enter_query();
        this.oracleFormsBuiltins.hide_view("CANVAS2");
        this.oracleFormsBuiltins.synchronize();
        console.log("Exiting CRFESTDOCS_crtestdoc1_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    //  V_PRIVILEGIOS VARCHAR2(1);
    // BEGIN
    //    
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     
    //     BEGIN
    //      SELECT USU_PRIVIL
    //       INTO V_PRIVILEGIOS
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //      
    //      IF TIPO_PERSONA IN ('OD','OI') THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,"ATTR_OFF"); 
    //      ELSIF TIPO_PERSONA IN ('JO') AND V_PRIVILEGIOS IS NULL THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,"ATTR_OFF"); 
    //     ELSIF TIPO_PERSONA='GE' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"PROPERTY_FALSE");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"PROPERTY_FALSE"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"PROPERTY_FALSE");
    //     ELSIF TIPO_PERSONA='PR' THEN
    //        SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //     ELSIF TIPO_PERSONA NOT IN ('OD','JO','GE','PR','JI','OI') THEN  
    //         SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,"ATTR_OFF"); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,"ATTR_OFF");
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,"ATTR_OFF");
    //     ELSIF V_PRIVILEGIOS ='S' AND  TIPO_PERSONA IN ('OD','JO') THEN  
    //       SET_ITEM_PROPERTY('ESTDOC_VBOPER',ENABLED,ATTR_ON);
    //        SET_ITEM_PROPERTY('ESTDOC_ESTDOC',ENABLED,ATTR_ON); 
    //        SET_ITEM_PROPERTY('ESTDOC_VBJOPE',ENABLED,ATTR_ON);
    //        SET_ITEM_PROPERTY('ESTDOC_ESTEXC',ENABLED,ATTR_ON); 
    //     END IF; 
    // END; 
    // ----------------------
    // -- VARIABLES
    // -------------------------
    // BEGIN
    //   SELECT  DOCSOL_DESCRI
    //     INTO  :DESDOC
    //     FROM  CRTDOCSOL 
    //   WHERE DOCSOL_CODIGO=:ESTDOC_CODDOC
    //     AND DOCSOL_CODTOP = :ESTDOC_CODOPER; --ENRIQUE RAMIREZ 2008/08/08  
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;
    // /*BEGIN
    //   SELECT  DISTINCT(TIOPER_DESOPER)
    //     INTO  :OPERAC
    //     FROM  CRTTIOPER,CRTESTDOC
    //   WHERE TIOPER_CODOPER=ESTDOC_CODOPER
    //    AND ESTDOC_OFCSOL=:CRTSOLICR.SOLICR_OFCSOL         
    //    AND ESTDOC_CODSOL=:CRTSOLICR.SOLICR_CODSOL    
    //    AND ESTDOC_TIPCRE=:CRTSOLICR.SOLICR_TIPCRE     
    //    AND ESTDOC_PLANEA=:CRTSOLICR.V_PLANEACION;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //   NULL;
    // END;  */
    //   
    //   
    //   
    //   
    //#endregion
    async CRFESTDOCS_crtestdoc1_postQuery() {
        console.log("Entering CRFESTDOCS_crtestdoc1_postQuery");
        let TIPO_PERSONA: null = null;
        let V_PRIVILEGIOS: string = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_postquery_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        // call REST API
        const result2 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_postquery_query2", payload2);
        // get values from result
        V_PRIVILEGIOS = result2[0].get("V_PRIVILEGIOS");
        if (result2 == null || result2.length == 0) {

        }

        if (["OD", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_OFF");
        }
        else if ((["JO"].indexOf(TIPO_PERSONA) != -1 && (V_PRIVILEGIOS == null))) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_OFF");
        }
        else if (TIPO_PERSONA == "GE") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "PROPERTY_FALSE");
        }
        else if (TIPO_PERSONA == "PR") {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
        }
        else if (["OD", "JO", "GE", "PR", "JI", "OI"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_OFF");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_OFF");
        }
        else if ((V_PRIVILEGIOS == "S" && ["OD", "JO"].indexOf(TIPO_PERSONA) != -1)) {
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBOPER", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTDOC", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_VBJOPE", "ENABLED", "ATTR_ON");
            this.oracleFormsBuiltins.set_item_property("ESTDOC_ESTEXC", "ENABLED", "ATTR_ON");
        }
        // construct payload
        let payload3 = new Map();
        // payload3.set("ESTDOC_CODDOC", ESTDOC_CODDOC);
        // payload3.set("ESTDOC_CODOPER", ESTDOC_CODOPER);
        // call REST API
        const result3 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_postquery_query3", payload3);
        // get values from result
        // DESDOC = result3[0].get("DESDOC");
        if (result3 == null || result3.length == 0) {

        }

        console.log("Exiting CRFESTDOCS_crtestdoc1_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA VARCHAR2(2);
    // BEGIN
    //   IF :ESTDOC_VBJOPE NOT IN ('NK','OK') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (NK) NO ACEPTADO (OK) ACEPTADO .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    // 
    //   ELSE
    //     BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     IF TIPO_PERSONA='JO' THEN
    //        IF  NVL(:ESTDOC_VBOPER,'Y')<> 'X'  OR NVL(:ESTDOC_ESTDOC,'XX')= 'XX' THEN
    //           LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //           :ESTDOC_VBJOPE:=NULL;
    //        ELSIF  NVL(:ESTDOC_VBOPER,'Y')= 'X'  AND NVL(:ESTDOC_ESTDOC,'XX')= 'PE'  AND :ESTDOC_VBJOPE='OK' THEN
    //           LIB$ALERTA('MENSAJE','ESTADO DEL DOCUMENTO PENDIENTE NO LA PUEDE APROBAR  .....',NULL,NULL,NULL,T_RESPUESTA);
    //           :ESTDOC_VBJOPE:='NK';
    //         ELSE
    //           :ESTDOC_USUARI:=USER;
    //           :ESTDOC_FECREG:=PLSQLBuiltins.sysdate();
    //         END IF;
    //      END IF; 
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocVbjope_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocVbjope_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: string = null;
        // if (["NK", "OK"].indexOf(ESTDOC_VBJOPE) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (NK) NO ACEPTADO (OK) ACEPTADO .............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_estdocvbjope_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        //     if (result1 == null || result1.length == 0) {

        //     }

        //     if (TIPO_PERSONA == "JO") {
        //         if ((ESTDOC_VBOPER == null ? "Y" : ESTDOC_VBOPER != "X" || ESTDOC_ESTDOC == null ? "XX" : ESTDOC_ESTDOC == "XX")) {
        //             // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
        //             this.CRTESTDOC1.ESTDOC_VBJOPE = null;
        //         }
        //         else if (((ESTDOC_VBOPER == null ? "Y" : ESTDOC_VBOPER == "X" && ESTDOC_ESTDOC == null ? "XX" : ESTDOC_ESTDOC == "PE") && ESTDOC_VBJOPE == "OK")) {
        //             // CRFESTDOCS_LIB$ALERTA("MENSAJE", "ESTADO DEL DOCUMENTO PENDIENTE NO LA PUEDE APROBAR  .....", null, null, null, T_RESPUESTA);
        //             this.CRTESTDOC1.ESTDOC_VBJOPE = "NK";
        //         }
        //         else {
        //             this.CRTESTDOC1.ESTDOC_USUARI = PLSQLBuiltins.user();
        //             this.CRTESTDOC1.ESTDOC_FECREG = PLSQLBuiltins.sysdate();
        //         }
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocVbjope_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   IF NVL(:ESTDOC_VBOPER,'Y')<> 'X' THEN
    //            LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //       :ESTDOC_VBJOPE:=NULL;
    //       NEXT_ITEM;
    //      
    //   ELSE
    // 
    //    IF :ESTDOC_VBJOPE='NK' THEN
    //     GO_BLOCK('CRTHISTDOC_INSERT');
    //     ELSE
    //     NEXT_ITEM; 
    //   END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocVbjope_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocVbjope_keyNextItem");
        let T_RESPUESTA: number = null;
        // if (ESTDOC_VBOPER == null ? "Y" : ESTDOC_VBOPER != "X") {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
        //     this.CRTESTDOC1.ESTDOC_VBJOPE = null;
        //     this.oracleFormsBuiltins.next_item();
        // }
        // else {
        //     if (ESTDOC_VBJOPE == "NK") {
        //         this.oracleFormsBuiltins.go_block("CRTHISTDOC_INSERT");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.next_item();
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocVbjope_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER; 
    // BEGIN
    // IF :ESTDOC_CODDOC IS NOT NULL THEN
    //  BEGIN
    //   SELECT  DOCSOL_DESCRI,DOCSOL_TIPODC 
    //     INTO  :DESDOC,:ESTDOC_TIPODC
    //     FROM  CRTDOCSOL 
    //    WHERE DOCSOL_CODIGO=  :ESTDOC_CODDOC
    //      AND DOCSOL_CODTOP = :ESTDOC_CODOPER; --ENRIQUE RAMIREZ 2008/08/08   
    //   EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //     LIB$ALERTA('MENSAJE',' TIPO DE DOCUMENTO INEXISTENTE .....',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END;
    // :ESTDOC_VBOPER:='X';
    // END IF;
    // END;
    //      
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocCoddoc_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocCoddoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ESTDOC_CODDOC != null)) {
        //     // construct payload
        //     let payload1 = new Map();
        //     payload1.set("ESTDOC_CODDOC", ESTDOC_CODDOC);
        //     payload1.set("ESTDOC_CODOPER", ESTDOC_CODOPER);
        //     // call REST API
        //     const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_estdoccoddoc_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     DESDOC = result1[0].get("DESDOC");
        //     ESTDOC_TIPODC = result1[0].get("ESTDOC_TIPODC");
        //     if (result1 == null || result1.length == 0) {

        //         // CRFESTDOCS_LIB$ALERTA("MENSAJE", " TIPO DE DOCUMENTO INEXISTENTE .....", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }

        //     this.CRTESTDOC1.ESTDOC_VBOPER = "X";
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocCoddoc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //   IF :ESTDOC_ESTDOC NOT IN ('PE','OK','NA') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   ELSE
    //     BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    //     IF TIPO_PERSONA='OD' THEN
    //        IF :ESTDOC_VBOPER IS NULL THEN
    //           LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //           :ESTDOC_ESTDOC:=NULL;
    //         ELSE
    //           :ESTDOC_USUARI:=USER;
    //           :ESTDOC_FECREG:=PLSQLBuiltins.sysdate();
    //         END IF;
    //      END IF; 
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocEstdoc_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocEstdoc_whenValidateItem");
        let T_RESPUESTA: number = null;
        let TIPO_PERSONA: null = null;
        // if (["PE", "OK", "NA"].indexOf(ESTDOC_ESTDOC) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // else {
        //     // construct payload
        //     let payload1 = new Map();
        //     // call REST API
        //     const result1 = await Rest.post("/crfestdocs_crtestdoc1/crfestdocs_crtestdoc1_estdocestdoc_whenvalidateitem_query1", payload1);
        //     // get values from result
        //     TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        //     if (result1 == null || result1.length == 0) {

        //     }

        //     if (TIPO_PERSONA == "OD") {
        //         if ((ESTDOC_VBOPER == null)) {
        //             // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
        //             this.CRTESTDOC1.ESTDOC_ESTDOC = null;
        //         }
        //         else {
        //             this.CRTESTDOC1.ESTDOC_USUARI = PLSQLBuiltins.user();
        //             this.CRTESTDOC1.ESTDOC_FECREG = PLSQLBuiltins.sysdate();
        //         }
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocEstdoc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    // IF :ESTDOC_VBOPER IS NULL THEN
    //       LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //       :ESTDOC_ESTDOC:=NULL;
    //   ELSE
    //  IF :ESTDOC_ESTDOC='PE' THEN
    //     GO_BLOCK('CRTHISTDOC_INSERT');
    //  ELSE
    //     NEXT_ITEM; 
    //  END IF;
    // END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocEstdoc_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocEstdoc_keyNextItem");
        let T_RESPUESTA: number = null;
        // if ((ESTDOC_VBOPER == null)) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
        //     this.CRTESTDOC1.ESTDOC_ESTDOC = null;
        // }
        // else {
        //     if (ESTDOC_ESTDOC == "PE") {
        //         this.oracleFormsBuiltins.go_block("CRTHISTDOC_INSERT");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.next_item();
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocEstdoc_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :ESTDOC_VBOPER NOT IN ('X') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA USE X .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocVboper_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocVboper_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (["X"].indexOf(ESTDOC_VBOPER) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA USE X .............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocVboper_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF   :ESTDOC_ESTEXC IS NOT NULL THEN
    //   IF :ESTDOC_ESTEXC NOT IN ('EX') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA (EX) EXCEPCIÓN .............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //    ELSE 
    //   IF NVL(:ESTDOC_VBOPER,'Y')<> 'X' OR NVL(:ESTDOC_ESTDOC,'XX')= 'XX' THEN
    //       LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL  O REVISADO CON SU CORRESPONDIENTE ESTADO.....',NULL,NULL,NULL,T_RESPUESTA);
    //       :ESTDOC_ESTEXC:=NULL;
    //   ELSE
    //    :ESTDOC_USUARI:=USER;
    //    :ESTDOC_FECREG:=PLSQLBuiltins.sysdate();
    //   END IF;
    //  END IF;
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocEstexc_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocEstexc_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if ((ESTDOC_ESTEXC != null)) {
        //     if (["EX"].indexOf(ESTDOC_ESTEXC) != -1) {
        //         // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA (EX) EXCEPCIÓN .............", null, null, null, T_RESPUESTA);
        //         console.log("FORM_TRIGGER_FAILURE");
        //         throw new Error('FORM_TRIGGER_FAILURE');
        //     }
        //     else {
        //         if ((ESTDOC_VBOPER == null ? "Y" : ESTDOC_VBOPER != "X" || ESTDOC_ESTDOC == null ? "XX" : ESTDOC_ESTDOC == "XX")) {
        //             // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL  O REVISADO CON SU CORRESPONDIENTE ESTADO.....", null, null, null, T_RESPUESTA);
        //             this.CRTESTDOC1.ESTDOC_ESTEXC = null;
        //         }
        //         else {
        //             this.CRTESTDOC1.ESTDOC_USUARI = PLSQLBuiltins.user();
        //             this.CRTESTDOC1.ESTDOC_FECREG = PLSQLBuiltins.sysdate();
        //         }
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocEstexc_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA NUMBER;
    // BEGIN
    //   IF NVL(:ESTDOC_VBOPER,'Y')<> 'X' THEN
    //           LIB$ALERTA('MENSAJE','DOCUMENTO NO SELECIONADO POR EL OFICIAL .....',NULL,NULL,NULL,T_RESPUESTA);
    //       :ESTDOC_ESTEXC:=NULL;
    //      NEXT_ITEM;
    //   ELSE
    //    IF :ESTDOC_ESTEXC='EX' THEN
    //     GO_BLOCK('CRTHISTDOC_INSERT');
    //     ELSE
    //     NEXT_ITEM; 
    //   END IF;
    //   END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crtestdoc1_estdocEstexc_keyNextItem() {
        console.log("Entering CRFESTDOCS_crtestdoc1_estdocEstexc_keyNextItem");
        let T_RESPUESTA: number = null;
        // if (ESTDOC_VBOPER == null ? "Y" : ESTDOC_VBOPER != "X") {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DOCUMENTO NO SELECIONADO POR EL OFICIAL .....", null, null, null, T_RESPUESTA);
        //     this.CRTESTDOC1.ESTDOC_ESTEXC = null;
        //     this.oracleFormsBuiltins.next_item();
        // }
        // else {
        //     if (ESTDOC_ESTEXC == "EX") {
        //         this.oracleFormsBuiltins.go_block("CRTHISTDOC_INSERT");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.next_item();
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crtestdoc1_estdocEstexc_keyNextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_toolbar_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_toolbar_whenButtonPressed");
        console.log("Exiting CRFESTDOCS_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_toolbar_whenMouseLeave() {
        console.log("Entering CRFESTDOCS_toolbar_whenMouseLeave");
        console.log("Exiting CRFESTDOCS_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_toolbar_whenNewFormInstance() {
        console.log("Entering CRFESTDOCS_toolbar_whenNewFormInstance");
        console.log("Exiting CRFESTDOCS_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :V_PLANEACION IS NOT NULL THEN
    //     -- PUP_INSERTA_GRLES(:CRTSOLICR.SOLICR_OFCSOL, :CRTSOLICR.SOLICR_CODSOL);
    //     -- COMMIT;
    //     -- GO_BLOCK('CRTESTDOC1');
    //     -- EXECUTE_QUERY;
    //     -- GO_BLOCK('CRTCONTROL');
    //     -- EXECUTE_QUERY;
    //     -- GO_BLOCK('CRTESTDOC1');
    //     GO_BLOCK('CRTTIOPER');
    //      EXECUTE_QUERY;  
    //   ELSE
    //   LIB$ALERTA('MENSAJE','NO HA SELECCIONADO UNA PLANECIÓN.....',NULL,NULL,NULL,T_RESPUESTA);
    //  END IF;      
    // END;
    // 
    // 
    // 
    //    
    //  
    //#endregion
    async CRFESTDOCS_crttioper_whennewblockinstance() {
        console.log("Entering CRFESTDOCS_crttioper_whennewblockinstance");
        let T_RESPUESTA: number = null;
        // if ((V_PLANEACION != null)) {
        //     this.oracleFormsBuiltins.go_block("CRTTIOPER");
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO HA SELECCIONADO UNA PLANECIÓN.....", null, null, null, T_RESPUESTA);
        // }
        console.log("Exiting CRFESTDOCS_crttioper_whennewblockinstance");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CRTESTDOC1 DETAIL DECLARE SECTION
    //   --
    //   CURSOR CRTESTDOC1_CUR IS      
    //     SELECT 1 FROM CRTESTDOC C     
    //     WHERE C.ESTDOC_CODOPER = :CRTTIOPER.TIOPER_CODOPER;
    //   --
    //   -- END CRTESTDOC1 DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CRTESTDOC1 DETAIL PROGRAM SECTION
    //   --
    //   OPEN CRTESTDOC1_CUR;     
    //   FETCH CRTESTDOC1_CUR INTO DUMMY_DEFINE;     
    //   IF ( CRTESTDOC1_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CRTESTDOC1_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CRTESTDOC1_CUR;
    //   --
    //   -- END CRTESTDOC1 DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CRFESTDOCS_crttioper_onCheckDeleteMaster() {
        console.log("Entering CRFESTDOCS_crttioper_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CRFESTDOCS_crttioper_onCheckDeleteMaster");
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
    //   -- BEGIN CRTESTDOC1 DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CRTTIOPER.TIOPER_CODOPER IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CRTTIOPER.CRTTIOPER_CRTESTDOC1');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CRTESTDOC1');   
    //   END IF;
    //   --
    //   -- END CRTESTDOC1 DETAIL PROGRAM SECTION
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
    async CRFESTDOCS_crttioper_onPopulateDetails() {
        console.log("Entering CRFESTDOCS_crttioper_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        // if ((CRTTIOPER.TIOPER_CODOPER != null)) {
        //     REL_ID = this.oracleFormsBuiltins.find_relation("CRTTIOPER.CRTTIOPER_CRTESTDOC1");
        //     // CRFESTDOCS_QUERY_MASTER_DETAILS(REL_ID, "CRTESTDOC1");
        // }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CRFESTDOCS_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CRFESTDOCS_crttioper_onPopulateDetails");
    }

    //#region PLSQL
    // DECLARE
    // T_RESPUESTA    NUMBER;
    // V_EXISTE       NUMBER;
    // V_EXISTE_GRLES NUMBER;
    // 
    // BEGIN
    //    
    //    
    //  IF :CRTTIOPER.DOCUMENT ='S' THEN   
    //     BEGIN  
    //       SELECT COUNT(9) 
    //         INTO V_EXISTE
    //       FROM CRTESTDOC
    //       WHERE ESTDOC_OFCSOL=:SOLICR_OFCSOL
    //     AND ESTDOC_CODSOL=:SOLICR_CODSOL
    //     AND ESTDOC_TIPCRE=:SOLICR_TIPCRE
    //         AND ESTDOC_PLANEA=:V_PLANEACION
    //         AND ESTDOC_TIPODC=:CRTTIOPER.TIOPER_CODOPER;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //      V_EXISTE :=0;
    //     END; 
    //     IF V_EXISTE = 0 THEN
    //       PUP_INSERT_DOCUM(:CRTTIOPER.TIOPER_CODOPER);
    //       :CRTTIOPER.DOCUMENT := NULL;
    //       LIB$ALERTA('MENSAJE', 'LOS DOCUMENTOS DEL TIPO SELECCIONADO FUERON INSERTADOS....', NULL,NULL,NULL, T_RESPUESTA); 
    //       IF FRM$ALERTA_SINO ('DESEA SELECCIONAR OTRO TIPO DE OPERACIÓN ?') = 1 THEN
    //          GO_ITEM('DOCUMENT');
    //       ELSE 
    //         :CRTTIOPER.DOCUMENT := NULL;
    //           GO_BLOCK('CRTESTDOC1');
    //           EXECUTE_QUERY;
    //           GO_BLOCK('CRTCONTROL');
    //           EXECUTE_QUERY;
    //           GO_BLOCK('CRTESTDOC1');
    //           EXECUTE_QUERY;
    //           HIDE_VIEW('C_TIPOPER');
    //        END IF;
    //     ELSE
    //       LIB$ALERTA('MENSAJE', 'LA PLANEACIÓN YA TIENE DOCUMENTOS PARA ESTE TIPO DE OPERACIÓN....', NULL,NULL,NULL, T_RESPUESTA); 
    //        GO_BLOCK('CRTESTDOC1');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTCONTROL');
    //        EXECUTE_QUERY;
    //        GO_BLOCK('CRTESTDOC1');
    //     END IF;
    //   
    //   END IF;
    // END;  
    //#endregion
    async CRFESTDOCS_crttioper_document_whenCheckboxChanged() {
        console.log("Entering CRFESTDOCS_crttioper_document_whenCheckboxChanged");
        let T_RESPUESTA: number = null;
        let V_EXISTE: number = null;
        let V_EXISTE_GRLES: number = null;
        if (this.CRTTIOPER.DOCUMENT == "S") {
            // construct payload
            let payload1 = new Map();
            // payload1.set("SOLICR_OFCSOL", SOLICR_OFCSOL);
            // payload1.set("SOLICR_CODSOL", SOLICR_CODSOL);
            // payload1.set("SOLICR_TIPCRE", SOLICR_TIPCRE);
            // payload1.set("V_PLANEACION", V_PLANEACION);
            // payload1.set("TIOPER_CODOPER", CRTTIOPER.TIOPER_CODOPER);
            // call REST API
            const result1 = await Rest.post("/crfestdocs_crttioper/crfestdocs_crttioper_document_whencheckboxchanged_query1", payload1);
            // get values from result
            V_EXISTE = result1[0].get("V_EXISTE");
            if (result1 == null || result1.length == 0) {

                V_EXISTE = 0;
            }

            if (V_EXISTE == 0) {
                // CRFESTDOCS_PUP_INSERT_DOCUM(CRTTIOPER.TIOPER_CODOPER);
                this.CRTTIOPER.DOCUMENT = null;
                // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LOS DOCUMENTOS DEL TIPO SELECCIONADO FUERON INSERTADOS....", null, null, null, T_RESPUESTA);
                // if (FRM$ALERTA_SINO("DESEA SELECCIONAR OTRO TIPO DE OPERACIÓN ?") == 1) {
                //     this.oracleFormsBuiltins.go_item("DOCUMENT");
                // }
                // else {
                //     this.CRTTIOPER.DOCUMENT = null;
                //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
                //     this.oracleFormsBuiltins.execute_query();
                //     this.oracleFormsBuiltins.go_block("CRTCONTROL");
                //     this.oracleFormsBuiltins.execute_query();
                //     this.oracleFormsBuiltins.go_block("CRTESTDOC1");
                //     this.oracleFormsBuiltins.execute_query();
                //     this.oracleFormsBuiltins.hide_view("C_TIPOPER");
                // }
            }
            else {
                // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA PLANEACIÓN YA TIENE DOCUMENTOS PARA ESTE TIPO DE OPERACIÓN....", null, null, null, T_RESPUESTA);
                this.oracleFormsBuiltins.go_block("CRTESTDOC1");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("CRTCONTROL");
                this.oracleFormsBuiltins.execute_query();
                this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            }
        }
        console.log("Exiting CRFESTDOCS_crttioper_document_whenCheckboxChanged");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PERSONA SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_CARGO
    //       INTO TIPO_PERSONA
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=USER;
    //      EXCEPTION
    //      WHEN NO_DATA_FOUND THEN NULL;
    //      END; 
    //      IF TIPO_PERSONA IN ('JO','OD','OP') THEN
    //        SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,ATTR_ON);
    //      END IF;
    // END;
    // 
    // 
    //          
    //        
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_preBlock() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_preBlock");
        let TIPO_PERSONA: null = null;
        // construct payload
        let payload1 = new Map();
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crthistdoc_consulta/crfestdocs_crthistdocconsulta_preblock_query1", payload1);
        // get values from result
        TIPO_PERSONA = result1[0].get("TIPO_PERSONA");
        if (result1 == null || result1.length == 0) {

        }

        if (["JO", "OD", "OP"].indexOf(TIPO_PERSONA) != -1) {
            this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_ON");
        }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_preBlock");
    }

    async CRFESTDOCS_crthistdocConsulta_keyDelrec() {
        // null;
    }

    async CRFESTDOCS_crthistdocConsulta_keyNxtblk() {
        // null;
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA  NUMBER;
    // 
    // BEGIN
    //   IF  (:CRTHISTDOC_CONSULTA.HISTDO_CTACTO IS NULL 
    //        OR :CRTHISTDOC_CONSULTA.HISTDO_TELCTO IS NULL 
    //        OR :CRTHISTDOC_CONSULTA.HISTDO_OBSERV IS NULL) THEN
    //          LIB$ALERTA ('MENSAJE','DEBE INGRESAR LA INFORMACIÓN COMPLETA .....',NULL,NULL,NULL,T_RESPUESTA);
    //          RAISE FORM_TRIGGER_FAILURE;
    //   ELSE 
    //    COMMIT;
    //    CREATE_RECORD;
    //   END IF;
    // END;   
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_keyCrerec() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_keyCrerec");
        let T_RESPUESTA: number = null;
        if ((((this.CRTHISTDOC_CONSULTA.HISTDO_CTACTO == null) || (this.CRTHISTDOC_CONSULTA.HISTDO_TELCTO == null)) || (this.CRTHISTDOC_CONSULTA.HISTDO_OBSERV == null))) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE INGRESAR LA INFORMACIÓN COMPLETA .....", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.create_record();
        }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_keyCrerec");
    }

    //#region PLSQL
    // BEGIN
    //  
    //   IF :GLOBAL.DOCUM_ANT IS NULL THEN
    //      :GLOBAL.DOCUM_ANT :=:CRTHISTDOC_CONSULTA.HISTDO_CODDOC;
    //   END IF;
    //    
    //   IF :GLOBAL.USUARI_ANT IS NULL THEN
    //     :GLOBAL.USUARI_ANT:=:CRTHISTDOC_CONSULTA.HISTDO_USUARI;
    //   END IF;
    //   
    //   
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_whenNewBlockInstance() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_whenNewBlockInstance");
        // if ((GLOBAL.DOCUM_ANT == null)) {
        //     this.GLOBAL.DOCUM_ANT = this.CRTHISTDOC_CONSULTA.HISTDO_CODDOC;
        // }
        // if ((GLOBAL.USUARI_ANT == null)) {
        //     this.GLOBAL.USUARI_ANT = this.CRTHISTDOC_CONSULTA.HISTDO_USUARI;
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_whenNewBlockInstance");
    }

    //#region PLSQL
    // :CRTHISTDOC_CONSULTA.HISTDO_CTACTO :=NULL;
    // :CRTHISTDOC_CONSULTA.HISTDO_TELCTO :=NULL;
    // :CRTHISTDOC_CONSULTA.HISTDO_OBSERV :=NULL;
    // :CRTHISTDOC_CONSULTA.HISTDO_FECREG :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    // :CRTHISTDOC_CONSULTA.HISTDO_FECSEG :=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    // :CRTHISTDOC_CONSULTA.HISTDO_CODDOC:=:GLOBAL.DOCUM_ANT;
    // :CRTHISTDOC_CONSULTA.HISTDO_ESTSEG:='PE';
    // :CRTHISTDOC_CONSULTA.HISTDO_USUARI:=:GLOBAL.USUARI_ANT;
    // 
    // BEGIN
    //   SELECT USU_NOMBRE
    //      INTO :DESUSUARIO
    //   FROM SGUSUARIOS
    //   WHERE USU_CODIGO=:GLOBAL.USUARI_ANT;
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_keyDuprec() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_keyDuprec");
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_keyDuprec");
    }

    //#region PLSQL
    // BEGIN NULL;
    // /*DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTHISTDOC_CONSULTA.HISTDO_CTACTO IS  NULL OR :CRTHISTDOC_CONSULTA.HISTDO_TELCTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_OBSERV IS NULL THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //   GO_BLOCK('CRTHISTDOC_CONSULTA');
    //   RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //   COMMIT;
    //   GO_BLOCK('CRTESTDOC1');
    //     HIDE_VIEW('CANVAS4');
    //  END IF;
    // END;*/; END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_keyExit() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_keyExit");
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_keyExit");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  COMMIT_FORM;
    //  PUP_VERIFIQUE_PENDIENTES;
    //  IF :CRTHISTDOC_CONSULTA.HISTDO_CTACTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_TELCTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_OBSERV IS NULL THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //   GO_BLOCK('CRTHISTDOC_CONSULTA');
    //   RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //   COMMIT;
    //    EXECUTE_QUERY;
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_keyCommit() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_keyCommit");
        let T_RESPUESTA: number = null;
        this.oracleFormsBuiltins.commit_form();
        // CRFESTDOCS_PUP_VERIFIQUE_PENDIENTES();
        if ((((this.CRTHISTDOC_CONSULTA.HISTDO_CTACTO == null) || (this.CRTHISTDOC_CONSULTA.HISTDO_TELCTO == null)) || (this.CRTHISTDOC_CONSULTA.HISTDO_OBSERV == null))) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...", null, null, null, T_RESPUESTA);
            this.oracleFormsBuiltins.go_block("CRTHISTDOC_CONSULTA");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.execute_query();
        }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_keyCommit");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF :CRTHISTDOC_CONSULTA.HISTDO_CTACTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_TELCTO IS NULL OR :CRTHISTDOC_CONSULTA.HISTDO_OBSERV IS NULL THEN
    //   LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //   RAISE FORM_TRIGGER_FAILURE;
    //  ELSE
    //    GO_BLOCK('CRTESTDOC1');
    //    HIDE_VIEW('CANVAS4');  
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_keyPrvblk() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_keyPrvblk");
        let T_RESPUESTA: number = null;
        if ((((this.CRTHISTDOC_CONSULTA.HISTDO_CTACTO == null) || (this.CRTHISTDOC_CONSULTA.HISTDO_TELCTO == null)) || (this.CRTHISTDOC_CONSULTA.HISTDO_OBSERV == null))) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "DEBE ACTUALIZAR TODOS LOS CAMPOS DEL REGISTRO DE SEGUIMIENTO...", null, null, null, T_RESPUESTA);
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        else {
            this.oracleFormsBuiltins.go_block("CRTESTDOC1");
            this.oracleFormsBuiltins.hide_view("CANVAS4");
        }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_keyPrvblk");
    }

    //#region PLSQL
    // DECLARE
    //  TIPO_PER SGUSUARIOS.USU_CARGO%TYPE;
    // BEGIN
    //      BEGIN
    //      SELECT USU_NOMBRE
    //       INTO :DESUSUARIO
    //       FROM SGUSUARIOS
    //      WHERE USU_CODIGO=:CRTHISTDOC_CONSULTA.HISTDO_USUARI;
    //     EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //     END; 
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_postQuery() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_postQuery");
        let TIPO_PER: null = null;
        // construct payload
        let payload1 = new Map();
        // payload1.set("HISTDO_USUARI", CRTHISTDOC_CONSULTA.HISTDO_USUARI);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crthistdoc_consulta/crfestdocs_crthistdocconsulta_postquery_query1", payload1);
        // get values from result
        // DESUSUARIO = result1[0].get("DESUSUARIO");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CRFESTDOCS_crthistdocConsulta_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  T_PEDTES    NUMBER;
    //  V_EXISTE    VARCHAR2(1);
    //  
    // BEGIN
    //   IF :HISTDO_ESTSEG NOT IN ('PE','OK','VC') THEN
    //      LIB$ALERTA('MENSAJE','OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............',NULL,NULL,NULL,T_RESPUESTA);
    //      RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    //   
    //   IF :HISTDO_ESTSEG='OK' THEN
    //    IF :CRTHISTDOC_CONSULTA.HISTDO_FECSEG < TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI') THEN
    //       :CRTHISTDOC_CONSULTA.HISTDO_FECSEG:=TO_DATE(TO_CHAR(PLSQLBuiltins.sysdate(),'YYYYMMDD HH24:MI'),'YYYYMMDD HH24:MI');
    //    END IF;  
    //   /* BEGIN
    //      SELECT COUNT(9)
    //       INTO T_PEDTES
    //      FROM CRTESTDOC
    //      WHERE ESTDOC_ESTDOC='PE'
    //      AND ESTDOC_OFCSOL =:CRTSOLICR.SOLICR_OFCSOL
    //      AND ESTDOC_CODSOL =:CRTSOLICR.SOLICR_CODSOL
    //      AND ESTDOC_TIPCRE =:CRTSOLICR.SOLICR_TIPCRE
    //      AND ESTDOC_NITTER =:CRTSOLICR.SOLICR_NITTER
    //      AND ESTDOC_PLANEA =:CRTSOLICR.V_PLANEACION;
    //    EXCEPTION
    //    WHEN NO_DATA_FOUND THEN
    //         T_PEDTES:=0;
    //    END;
    //    IF T_PEDTES > 0 THEN
    //      V_EXISTE:='N';
    //      IF :CRTSOLICR.V_PLANEACION IS NOT NULL THEN
    //         IF V_EXISTE='S' THEN
    //            LIB$ALERTA('MENSAJE','EL REGISTRO CON LOS DOCUMENTOS PENDIENTES YA EXISTE EN LA TABLA DE SEGUIMIENTO',NULL,NULL,NULL,T_RESPUESTA);                                            
    //      ELSE
    //            LIB$ALERTA('MENSAJE','SE GENERARÁ UN NUEVO REGISTRO PARA PROXIMO SEGUIMIENTO',NULL,NULL,NULL,T_RESPUESTA);                                            
    //            IF :CRTHISTDOC_CONSULTA.HISTDO_CTACTO IS NOT NULL OR :CRTHISTDOC_CONSULTA.HISTDO_TELCTO IS NOT NULL OR :CRTHISTDOC_CONSULTA.HISTDO_OBSERV IS NOT NULL THEN
    //              
    //              PBD_COL_SEGOPE_DOCPE(:CRTSOLICR.SOLICR_OFCSOL,:CRTSOLICR.SOLICR_CODSOL,:CRTSOLICR.SOLICR_TIPCRE,
    //                                   :CRTSOLICR.V_PLANEACION,:CRTSOLICR.SOLICR_NITTER,V_EXISTE);
    //                                             
    //               IF :CRTHISTDOC_CONSULTA.HISTDO_FECREG=:CRTHISTDOC_CONSULTA.HISTDO_FECSEG THEN
    //                  LIB$ALERTA('MENSAJE','DEBE ACTUALIZAR LA FECHA DE PRÓXIMO SEGUIMIENTO. INGRESELA CON FORMATO YYYY-MM-DD HH:MI...',NULL,NULL,NULL,T_RESPUESTA);                                                        
    //               END IF;
    //               
    //             ELSE
    //               LIB$ALERTA('MENSAJE','DEBE INGRESAR TODOS LOS CAMPOS DEL REGISTRO...',NULL,NULL,NULL,T_RESPUESTA);                                                         
    //               :CRTHISTDOC_CONSULTA.HISTDO_ESTSEG :='PE';
    //            END IF;  
    //          END IF;
    //       ELSE 
    //        LIB$ALERTA('MENSAJE','NO HA SELECCIONADO NINGUNA PLANEACIÓN ...',NULL,NULL,NULL,T_RESPUESTA);                                               
    //       END IF;
    //    END IF;*/
    //   END IF;  
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoEstseg_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoEstseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        let T_PEDTES: number = null;
        let V_EXISTE: string = null;
        // if (["PE", "OK", "VC"].indexOf(HISTDO_ESTSEG) != -1) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "OPCIÓN INVALIDA. USE UNICAMENTE  (PE) PENDIENTE (OK) ACEPTADO (NA) NO APLICA.............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        // if (HISTDO_ESTSEG == "OK") {
        //     if (this.CRTHISTDOC_CONSULTA.HISTDO_FECSEG < new Date(PLSQLBuiltins.sysdate().toString())) {
        //         this.CRTHISTDOC_CONSULTA.HISTDO_FECSEG = new Date(PLSQLBuiltins.sysdate().toString());
        //     }
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoEstseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :HISTDO_ESTSEG='OK' THEN
    //     SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,"ATTR_OFF");
    //     SET_ITEM_PROPERTY('HISTDO_CTACTO',ENABLED,"ATTR_OFF");
    //     SET_ITEM_PROPERTY('HISTDO_TELCTO',ENABLED,"ATTR_OFF");
    //     SET_ITEM_PROPERTY('HISTDO_OBSERV',ENABLED,"ATTR_OFF");
    //  ELSIF :HISTDO_ESTSEG='PE' THEN
    //     SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_USUARI',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_USUARI', "INSERT_ALLOWED",ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_CTACTO',ENABLED,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_CTACTO',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_CTACTO', "INSERT_ALLOWED",ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_TELCTO',ENABLED,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_TELCTO',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_TELCTO', "INSERT_ALLOWED",ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_OBSERV',ENABLED,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_OBSERV',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_OBSERV', "INSERT_ALLOWED",ATTR_ON);
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoEstseg_postTextItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoEstseg_postTextItem");
        // if (HISTDO_ESTSEG == "OK") {
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_OFF");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", "ENABLED", "ATTR_OFF");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", "ENABLED", "ATTR_OFF");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", "ENABLED", "ATTR_OFF");
        // }
        // else if (HISTDO_ESTSEG == "PE") {
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_ON");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", UPDATEABLE, ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "INSERT_ALLOWED", ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", "ENABLED", "ATTR_ON");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", UPDATEABLE, ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", "INSERT_ALLOWED", ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", "ENABLED", "ATTR_ON");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", UPDATEABLE, ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", "INSERT_ALLOWED", ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", "ENABLED", "ATTR_ON");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", UPDATEABLE, ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", "INSERT_ALLOWED", ATTR_ON);
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoEstseg_postTextItem");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    //  IF :HISTDO_ESTSEG ='OK' THEN
    //    EXECUTE_QUERY;
    //  ELSE 
    //   NEXT_ITEM;
    //  END IF; END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoEstseg_keyNextItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoEstseg_keyNextItem");
        // if (HISTDO_ESTSEG == "OK") {
        //     this.oracleFormsBuiltins.execute_query();
        // }
        // else {
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoEstseg_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    //  V_USUARIO   SGUSUARIOS.USU_CODIGO%TYPE:=NULL;
    // BEGIN
    //  BEGIN
    //    SELECT USU_CODIGO
    //     INTO V_USUARIO
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=:CRTHISTDOC_CONSULTA.HISTDO_USUARI;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //    END;
    //    
    //    BEGIN
    //    SELECT USU_NOMBRE
    //     INTO :DESUSUARIO
    //    FROM SGUSUARIOS
    //    WHERE USU_CODIGO=:CRTHISTDOC_CONSULTA.HISTDO_USUARI;
    //    EXCEPTION
    //     WHEN NO_DATA_FOUND THEN NULL;
    //    END;
    //    
    //    IF V_USUARIO IS NULL THEN
    //       LIB$ALERTA('MENSAJE','EL USUARIO NO EXISTE EN LA BASE DE  DATOS. FAVOR VERIFICAR .............',NULL,NULL,NULL,T_RESPUESTA);
    //    END IF; 
    //    
    //   V_USUARIO:=:CRTHISTDOC_CONSULTA.HISTDO_USUARI;
    //    IF :HISTDO_ESTSEG='OK' THEN
    //       LIB$ALERTA('MENSAJE','EL SEGUIMIENTO ESTA OK. NO PUEDE CAMBIAR USUARIO.............',NULL,NULL,NULL,T_RESPUESTA);
    //       :CRTHISTDOC_CONSULTA.HISTDO_USUARI:=V_USUARIO;
    //    END IF;
    // END;
    // 
    // 
    //    
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoUsuari_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoUsuari_whenValidateItem");
        let T_RESPUESTA: number = null;
        let V_USUARIO: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("HISTDO_USUARI", this.CRTHISTDOC_CONSULTA.HISTDO_USUARI);
        // call REST API
        const result1 = await Rest.post("/crfestdocs_crthistdoc_consulta/crfestdocs_crthistdocconsulta_histdousuari_whenvalidateitem_query1", payload1);
        // get values from result
        V_USUARIO = result1[0].get("V_USUARIO");
        if (result1 == null || result1.length == 0) {

        }

        // construct payload
        let payload2 = new Map();
        payload2.set("HISTDO_USUARI", this.CRTHISTDOC_CONSULTA.HISTDO_USUARI);
        // call REST API
        const result2 = await Rest.post("/crfestdocs_crthistdoc_consulta/crfestdocs_crthistdocconsulta_histdousuari_whenvalidateitem_query2", payload2);
        // get values from result
        // DESUSUARIO = result2[0].get("DESUSUARIO");
        if (result2 == null || result2.length == 0) {

        }

        if ((V_USUARIO == null)) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "EL USUARIO NO EXISTE EN LA BASE DE  DATOS. FAVOR VERIFICAR .............", null, null, null, T_RESPUESTA);
        }
        // V_USUARIO = this.CRTHISTDOC_CONSULTA.HISTDO_USUARI;
        // if (HISTDO_ESTSEG == "OK") {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "EL SEGUIMIENTO ESTA OK. NO PUEDE CAMBIAR USUARIO.............", null, null, null, T_RESPUESTA);
        //     // this.CRTHISTDOC_CONSULTA.HISTDO_USUARI = V_USUARIO;
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoUsuari_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //  IF :HISTDO_ESTSEG='OK' THEN
    //    SET_ITEM_PROPERTY('HISTDO_USUARI',UPDATEABLE,"ATTR_OFF");
    //       SET_ITEM_PROPERTY('HISTDO_USUARI', "INSERT_ALLOWED","ATTR_OFF");
    //  ELSIF :HISTDO_ESTSEG='PE' THEN
    //     SET_ITEM_PROPERTY('HISTDO_USUARI',UPDATEABLE,ATTR_ON);
    //       SET_ITEM_PROPERTY('HISTDO_USUARI', "INSERT_ALLOWED",ATTR_ON);
    //  END IF;
    // END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoUsuari_preTextItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoUsuari_preTextItem");
        // if (HISTDO_ESTSEG == "OK") {
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", UPDATEABLE, "ATTR_OFF");
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "INSERT_ALLOWED", "ATTR_OFF");
        // }
        // else if (HISTDO_ESTSEG == "PE") {
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", UPDATEABLE, ATTR_ON);
        //     this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "INSERT_ALLOWED", ATTR_ON);
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoUsuari_preTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_PROPERTY('HISTDO_USUARI',ENABLED,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_CTACTO',ENABLED,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_CTACTO',UPDATEABLE,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_CTACTO', "INSERT_ALLOWED",ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_TELCTO',ENABLED,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_TELCTO',UPDATEABLE,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_TELCTO', "INSERT_ALLOWED",ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_OBSERV',ENABLED,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_OBSERV',UPDATEABLE,ATTR_ON);
    // SET_ITEM_PROPERTY('HISTDO_OBSERV', "INSERT_ALLOWED",ATTR_ON);
    // NEXT_ITEM; END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoFecreg_keyNextItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoFecreg_keyNextItem");
        this.oracleFormsBuiltins.set_item_property("HISTDO_USUARI", "ENABLED", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", "ENABLED", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", "UPDATEABLE", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_CTACTO", "INSERT_ALLOWED", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", "ENABLED", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", "UPDATEABLE", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_TELCTO", "INSERT_ALLOWED", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", "ENABLED", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", "UPDATEABLE", "ATTR_ON");
        this.oracleFormsBuiltins.set_item_property("HISTDO_OBSERV", "INSERT_ALLOWED", "ATTR_ON");
        this.oracleFormsBuiltins.next_item();
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoFecreg_keyNextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //   IF :CRTHISTDOC_CONSULTA.HISTDO_FECSEG < :CRTHISTDOC_CONSULTA.HISTDO_FECREG THEN
    //     LIB$ALERTA('MENSAJE','LA FECHA DE SEGUIMIENTO NO PUEDE SER MENOR A LA DE REGISTRO .............',NULL,NULL,NULL,T_RESPUESTA);
    //     RAISE FORM_TRIGGER_FAILURE;
    //   END IF;
    // END;
    //  
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoFecseg_whenValidateItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoFecseg_whenValidateItem");
        let T_RESPUESTA: number = null;
        // if (this.CRTHISTDOC_CONSULTA.HISTDO_FECSEG < CRTHISTDOC_CONSULTA.HISTDO_FECREG) {
        //     // CRFESTDOCS_LIB$ALERTA("MENSAJE", "LA FECHA DE SEGUIMIENTO NO PUEDE SER MENOR A LA DE REGISTRO .............", null, null, null, T_RESPUESTA);
        //     console.log("FORM_TRIGGER_FAILURE");
        //     throw new Error('FORM_TRIGGER_FAILURE');
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoFecseg_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF TO_CHAR(:HISTDO_FECSEG,'HH:MI') = '12:00' THEN
    //  :HISTDO_FECSEG:=TO_DATE((TO_CHAR(:HISTDO_FECSEG,'YYYYMMDD')||'08:00'),'YYYY-MM-DD HH:MI');
    // END IF; END;
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_histdoFecseg_postTextItem() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_histdoFecseg_postTextItem");
        // if (HISTDO_FECSEG.toString() == "12:00") {
        //     this.CRTHISTDOC_CONSULTA.HISTDO_FECSEG = new Date(HISTDO_FECSEG.toString() + "08:00");
        // }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_histdoFecseg_postTextItem");
    }

    //#region PLSQL
    // DECLARE
    //  T_RESPUESTA NUMBER;
    // BEGIN
    //  IF NOT SHOW_LOV('LISTA_DOCUMENTOS') THEN
    //     LIB$ALERTA('MENSAJE','NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....',NULL,NULL,NULL,T_RESPUESTA);
    //  ELSE
    //   GO_ITEM('V_PLANEACION');
    //  END IF;
    // END; 
    //#endregion
    async CRFESTDOCS_crthistdocConsulta_listaDoc_whenButtonPressed() {
        console.log("Entering CRFESTDOCS_crthistdocConsulta_listaDoc_whenButtonPressed");
        let T_RESPUESTA: number = null;
        if ((!this.oracleFormsBuiltins.show_lov("LISTA_DOCUMENTOS"))) {
            // CRFESTDOCS_LIB$ALERTA("MENSAJE", "NO EXISTEN PLANECIONES PARA ESTA SOLICITUD O YA ESTAN DESEMBOLSADAS Y LA SOLICITUD TIENE CUPO.....", null, null, null, T_RESPUESTA);
        }
        else {
            this.oracleFormsBuiltins.go_item("V_PLANEACION");
        }
        console.log("Exiting CRFESTDOCS_crthistdocConsulta_listaDoc_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CRFESTDOCS_base_fecha_whenNewItemInstance() {
        console.log("Entering CRFESTDOCS_base_fecha_whenNewItemInstance");
        console.log("Exiting CRFESTDOCS_base_fecha_whenNewItemInstance");
    }

}

