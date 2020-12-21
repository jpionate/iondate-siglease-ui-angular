import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CMFRIO business logic
import {
    PROCESO,
    CMTPRDRIO,
    CMTRIO,
    CMTINFCRIO,
    CMTACTIVO,
    TOOLBAR,
    CMTRELAPO,
    CMTRELINV,
    CMTVINRIO,
    CMTCNTRIO,
    CONTROL,
    BASE
} from "./CMFRIO_models";



// class CMFRIO
@Component({
    selector: 'app-cmfrio',
    templateUrl: './cmfrio.component.html',
})
export class CmfrioComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map();
    constructor(private _SYSTEM_SERVICE: SystemService, private _GLOBAL_SERVICE: GlobalService) {
        this.oracleFormsBuiltins = new OracleFormsBuiltins(this)
    }


    public PROCESO: PROCESO = new PROCESO();
    public CMTPRDRIO: CMTPRDRIO = new CMTPRDRIO();
    public CMTRIO: CMTRIO = new CMTRIO();
    public CMTINFCRIO: CMTINFCRIO = new CMTINFCRIO();
    public CMTACTIVO: CMTACTIVO = new CMTACTIVO();
    public TOOLBAR: TOOLBAR = new TOOLBAR();
    public CMTRELAPO: CMTRELAPO = new CMTRELAPO();
    public CMTRELINV: CMTRELINV = new CMTRELINV();
    public CMTVINRIO: CMTVINRIO = new CMTVINRIO();
    public CMTCNTRIO: CMTCNTRIO = new CMTCNTRIO();
    public CONTROL: CONTROL = new CONTROL();
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
    async CMFRIO_onClearDetails() {
        console.log("Entering CMFRIO_onClearDetails");
        // CMFRIO_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CMFRIO_onClearDetails");
    }

    //#region PLSQL
    // BEGIN
    //    IF SYSTEM.TAB_NEW_PAGE = 'TAB_RIO' THEN
    //      GO_ITEM('RIO_NIT');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_HISTORIA' THEN
    //       GO_ITEM('RIO_HISTORIA');
    //       
    //       
    //  /*
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_RELACION' THEN
    //       GO_ITEM('REL_MATRICULA');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_RELACION_CO' THEN
    //       GO_ITEM('REL_NITTIPREL1');      */
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_INFOR' THEN
    //       GO_ITEM('RELA_EMPRESA');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_ACTIVO' THEN
    //       GO_ITEM('ACT_DESCRIP');              
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_PRODUCTOS' THEN
    //       GO_ITEM('PRD_DESPRO');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_CONTRA' THEN
    //       GO_ITEM('CNT_NOMBRE');                    
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_VINCULA' THEN
    //       GO_ITEM('VIN_TIPRELA');                     
    //    /*
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_PROVEE' THEN
    //       GO_ITEM('PRO_PRONIT'); */
    //       
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_INFCENT' THEN
    //       GO_ITEM('CMTINFCRIO.INF_ENTIDAD');      
    //    END IF;
    // END;
    //#endregion
    async CMFRIO_whenTabPageChanged() {
        console.log("Entering CMFRIO_whenTabPageChanged");
        if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_RIO") {
            this.oracleFormsBuiltins.go_item("RIO_NIT");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_HISTORIA") {
            this.oracleFormsBuiltins.go_item("RIO_HISTORIA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_INFOR") {
            this.oracleFormsBuiltins.go_item("RELA_EMPRESA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_ACTIVO") {
            this.oracleFormsBuiltins.go_item("ACT_DESCRIP");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_PRODUCTOS") {
            this.oracleFormsBuiltins.go_item("PRD_DESPRO");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_CONTRA") {
            this.oracleFormsBuiltins.go_item("CNT_NOMBRE");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_VINCULA") {
            this.oracleFormsBuiltins.go_item("VIN_TIPRELA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_NEW_PAGE") == "TAB_INFCENT") {
            this.oracleFormsBuiltins.go_item("CMTINFCRIO.INF_ENTIDAD");
        }
        console.log("Exiting CMFRIO_whenTabPageChanged");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async CMFRIO_onError() {
        console.log("Entering CMFRIO_onError");
        // CMFRIO_MENSAJE_ERRORES();
        console.log("Exiting CMFRIO_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_whenMouseDoubleclick() {
        console.log("Entering CMFRIO_whenMouseDoubleclick");
        console.log("Exiting CMFRIO_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async CMFRIO_onMessage() {
        console.log("Entering CMFRIO_onMessage");
        // CMFRIO_MENSAJE_INFORMATIVOS();
        console.log("Exiting CMFRIO_onMessage");
    }

    //#region PLSQL
    // BEGIN --CLEAR_BLOCK(NO_VALIDATE);
    // NULL; END;
    //#endregion
    async CMFRIO_keyClrblk() {
        console.log("Entering CMFRIO_keyClrblk");
        console.log("Exiting CMFRIO_keyClrblk");
    }

    //#region PLSQL
    // BEGIN --
    // BEGIN
    //   PANTALLA;
    //   -- REVISIÓN DEL USUARIO
    //   PINICIAR;
    // END;
    // --; END;
    //#endregion
    async CMFRIO_preForm() {
        console.log("Entering CMFRIO_preForm");
        // CMFRIO_PANTALLA();
        // CMFRIO_PINICIAR();
        console.log("Exiting CMFRIO_preForm");
    }

    //#region PLSQL
    // DECLARE
    //  IT_ID   ITEM;
    //  IT_ID1  ITEM;
    //  IT_ID2  ITEM;
    //  IT_ID3  ITEM;
    // BEGIN
    //   SYSTEM.MESSAGE_LEVEL:=5;
    //   :BASE.FECHA   := SYSDATE;
    //   :BASE.USUARIO := PLSQLBuiltins.user();
    //   :BASE.FORMA := SUBSTR(:SYSTEM.CURRENT_FORM,1,8); 
    //   :BASE.BD    :=GET_APPLICATION_PROPERTY(CONNECT_STRING);
    //   IF NVL(:BASE.BD,'!') IN ('FIN1','FIN1')  THEN
    //     :BASE.BASE_DAT := 'PRODUCCION';
    //   ELSE 
    //     :BASE.BASE_DAT := 'DESARROLLO';
    //   END IF; 
    //   /*
    //   BEGIN
    //    IT_ID  := FIND_ITEM('CMTRELVEH.RELV_ANO') ;
    //    IT_ID1 := FIND_ITEM('CMTRELMAQ.RELM_ANO') ;
    //    IT_ID2 := FIND_ITEM('CMTRELVEH3.RELV_ANO1') ;
    //    IT_ID3 := FIND_ITEM('CMTRELMAQ1.RELM_ANO1') ;
    //    IF ID_NULL (IT_ID) THEN
    //      MESSAGE('ERROR AL CARGAR LA LISTA DE AÑOS.');
    //     ELSE
    //       CLEAR_LIST(IT_ID);
    //       CLEAR_LIST(IT_ID1);
    //       CLEAR_LIST(IT_ID2);
    //       FOR ANO IN 1900..TO_NUMBER(TO_CHAR(SYSDATE,'YYYY')+1) LOOP
    //        ADD_LIST_ELEMENT (IT_ID,  1, ANO, ANO);
    //        ADD_LIST_ELEMENT (IT_ID1, 1, ANO, ANO);
    //        ADD_LIST_ELEMENT (IT_ID2, 1, ANO, ANO);
    //        ADD_LIST_ELEMENT (IT_ID3, 1, ANO, ANO);
    //       END LOOP;
    //     END IF;
    //   END;
    //   */
    //   IF :this.PARAMETER.get("PCONTROL") IN ('Q','C') THEN
    //      EXECUTE_QUERY;
    //   ELSE
    //    /*
    //    IF :GLOBAL.W_NORMALIZA = 'S' THEN 
    //      SET_BLOCK_PROPERTY('CMTRIO', DEFAULT_WHERE, 'RIO_CODIGO = '||:GLOBAL.W_RIO_CODIGO||' AND '||' RIO_NIT = '||:GLOBAL.W_RIO_NIT);
    //      EXECUTE_QUERY;
    //      ELSE */
    //     :CMTRIO.RIO_NIT      := :this.PARAMETER.get("NIT"); --'43735058'; --
    //      :CMTRIO.RIO_CODCOMER := :this.PARAMETER.get("PCODCOMER"); --'186';--
    //      :CMTRIO.RIO_CODUNI   := :this.PARAMETER.get("P_OFICINA");  -- ARQUITECTURA
    //   END IF;
    //   
    //   
    //   
    //   
    //   
    //     ---------------------------------------------------------------------
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
    //    READ_IMAGE_FILE(V_IMAGEN,'GIF','BASE.IMLGO');
    //  ELSE
    //      READ_IMAGE_FILE('LOGO_LEASFORM.GIF','GIF','BASE.IMLGO'); 
    //  END IF;
    // END;
    // -----------------------------------------------------------------------
    //   
    //   
    //   
    //   
    //   
    //   
    //   
    // END;
    //#endregion
    async CMFRIO_whenNewFormInstance() {
        console.log("Entering CMFRIO_whenNewFormInstance");
        let IT_ID: null = null;
        let IT_ID1: null = null;
        let IT_ID2: null = null;
        let IT_ID3: null = null;
        this._SYSTEM_SERVICE.set("MESSAGE_LEVEL", 5);
        this.BASE.FECHA = PLSQLBuiltins.sysdate();
        this.BASE.USUARIO = PLSQLBuiltins.user();
        this.BASE.FORMA = PLSQLBuiltins.substr(this._SYSTEM_SERVICE.get("CURRENT_FORM"), 1, 8);
        this.BASE.BD = this.oracleFormsBuiltins.get_application_property("CONNECT_STRING");
        if (["FIN1", "FIN1"].indexOf(this.BASE.BD == null ? "!" : this.BASE.BD) != -1) {
            this.BASE.BASE_DAT = "PRODUCCION";
        }
        else {
            this.BASE.BASE_DAT = "DESARROLLO";
        }
        if (["Q", "C"].indexOf(this.PARAMETER.get("PCONTROL")) != -1) {
            this.oracleFormsBuiltins.execute_query();
        }
        else {
            this.CMTRIO.RIO_NIT = this.PARAMETER.get("NIT");
            this.CMTRIO.RIO_CODCOMER = this.PARAMETER.get("PCODCOMER");
            this.CMTRIO.RIO_CODUNI = this.PARAMETER.get("P_OFICINA");
        }
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/cmfrio/cmfrio_whennewforminstance_query1", payload1);
                // get values from result
                V_IMAGEN = result1[0].get("V_IMAGEN");
                if (result1 == null || result1.length == 0) {

                    V_IMAGEN = "LOGO_LEASFORM.GIF";
                }

                this.oracleFormsBuiltins.read_image_file(V_IMAGEN, "GIF", "BASE.IMLGO");
            }
            else {
                this.oracleFormsBuiltins.read_image_file("LOGO_LEASFORM.GIF", "GIF", "BASE.IMLGO");
            }
        }

        console.log("Exiting CMFRIO_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtprdrio_postTextItem() {
        console.log("Entering CMFRIO_cmtprdrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtprdrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtprdrio_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtprdrio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtprdrio_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN 
    //  IF :CMTPRDRIO.PRD_COD IS NULL THEN
    //  --BUSCAR EL PROXIMO CODIGO QUE HAY EN ESA LISTA DE PRODUCTOS PARA ESE CLIENTE Y RIO
    //     BEGIN
    //       SELECT NVL(MAX(NVL(PRD_COD,0)),0)+1
    //         INTO :CMTPRDRIO.PRD_COD
    //         FROM CMTPRDRIO
    //     WHERE PRD_CODRIO = :CMTPRDRIO.PRD_CODRIO
    //          AND PRD_NIT  = :CMTPRDRIO.PRD_NIT;
    //     EXCEPTION WHEN OTHERS THEN
    //       LIB$DTNERFRMA('FALLA AL ASIGNAR EL CODIGO DEL PRODUCTO.'||'-'||SQLERRM);
    //     END;
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtprdrio_preInsert() {
        console.log("Entering CMFRIO_cmtprdrio_preInsert");
        if ((this.CMTPRDRIO.PRD_COD == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("PRD_CODRIO", this.CMTPRDRIO.PRD_CODRIO);
                payload1.set("PRD_NIT", this.CMTPRDRIO.PRD_NIT);
                // call REST API
                const result1 = await Rest.post("/cmfrio_cmtprdrio/cmfrio_cmtprdrio_preinsert_query1", payload1);
                // get values from result
                this.CMTPRDRIO.PRD_COD = result1[0].get("CMTPRDRIO.PRD_COD");
            } catch (ex) {

                // CMFRIO_LIB$DTNERFRMA("FALLA AL ASIGNAR EL CODIGO DEL PRODUCTO." + "-" + SQLERRM);
            }

        }
        console.log("Exiting CMFRIO_cmtprdrio_preInsert");
    }

    //#region PLSQL
    // BEGIN --8022
    // DECLARE
    //  V_EXISTE  NUMBER;
    // BEGIN
    //   BEGIN
    //   SELECT COUNT(*)
    //    INTO V_EXISTE
    //   FROM CRTSOLICR
    //   WHERE SOLICR_ESTSOL  NOT IN  ('AC','AP') 
    //   AND SOLICR_OFCSOL = :CMTRIO.RIO_OFCSOL
    //   AND SOLICR_CODSOL = :CMTRIO.RIO_CODSOL
    //   AND SOLICR_CODUNI = :CMTRIO.RIO_CODUNI;  -- ARQUITECTURA
    //  EXCEPTION WHEN NO_DATA_FOUND THEN V_EXISTE := 0 ;
    //  END;
    // 
    // IF this._SYSTEM_SERVICE.get("RECORD_STATUS") = 'INSERT' THEN 
    //     SET_BLOCK_PROPERTY('CMTRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //       
    //    SET_BLOCK_PROPERTY('CMTRELAPO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTRELAPO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTRELINV',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTRELINV', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTACTIVO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTACTIVO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTPRDRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTPRDRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTCNTRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTCNTRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTVINRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTVINRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTINFCRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTINFCRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE");    
    //    
    //    
    // ELSE
    //   IF V_EXISTE >= 1 AND (this._SYSTEM_SERVICE.get("RECORD_STATUS") = 'CHANGED' OR this._SYSTEM_SERVICE.get("RECORD_STATUS") = 'QUERY')THEN  
    //    
    //    SET_BLOCK_PROPERTY('CMTRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //       
    //    SET_BLOCK_PROPERTY('CMTRELAPO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTRELAPO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTRELINV',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTRELINV', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTACTIVO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTACTIVO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTPRDRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTPRDRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTCNTRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTCNTRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTVINRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTVINRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //    
    //    SET_BLOCK_PROPERTY('CMTINFCRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //    SET_BLOCK_PROPERTY('CMTINFCRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE");  
    //     
    //   ELSE  
    //    IF :CMTRIO.RIO_CODSOL IS NULL THEN
    //    SET_BLOCK_PROPERTY('CMTRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //        
    //     SET_BLOCK_PROPERTY('CMTRELAPO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTRELAPO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTRELINV',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTRELINV', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTACTIVO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTACTIVO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTPRDRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTPRDRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTCNTRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTCNTRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTVINRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTVINRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTINFCRIO',  "INSERT_ALLOWED", "PROPERTY_TRUE");
    //     SET_BLOCK_PROPERTY('CMTINFCRIO', "UPDATE_ALLOWED", "PROPERTY_TRUE");  
    //     ELSE     
    //     SET_BLOCK_PROPERTY('CMTRIO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTRIO', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //        
    //     SET_BLOCK_PROPERTY('CMTRELAPO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTRELAPO', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTRELINV',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTRELINV', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTACTIVO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTACTIVO', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTPRDRIO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTPRDRIO', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTCNTRIO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTCNTRIO', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTVINRIO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTVINRIO', "UPDATE_ALLOWED", "PROPERTY_FALSE"); 
    //     
    //     SET_BLOCK_PROPERTY('CMTINFCRIO',  "INSERT_ALLOWED", "PROPERTY_FALSE");
    //     SET_BLOCK_PROPERTY('CMTINFCRIO', "UPDATE_ALLOWED", "PROPERTY_FALSE");   
    //   END IF;  
    //   END IF;
    // END IF; 
    // 
    // END; 
    // 
    // --8022; END;
    //#endregion
    async CMFRIO_cmtrio_whenNewRecordInstance() {
        console.log("Entering CMFRIO_cmtrio_whenNewRecordInstance");
        let V_EXISTE: number = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RIO_OFCSOL", this.CMTRIO.RIO_OFCSOL);
        payload1.set("RIO_CODSOL", this.CMTRIO.RIO_CODSOL);
        payload1.set("RIO_CODUNI", this.CMTRIO.RIO_CODUNI);
        // call REST API
        const result1 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_whennewrecordinstance_query1", payload1);
        // get values from result
        V_EXISTE = result1[0].get("V_EXISTE");
        if (result1 == null || result1.length == 0) {

            V_EXISTE = 0;
        }

        if (this._SYSTEM_SERVICE.get("RECORD_STATUS") == "INSERT") {
            this.oracleFormsBuiltins.set_block_property("CMTRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTRELINV", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTRELINV", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
        }
        else {
            if ((V_EXISTE >= 1 && (this._SYSTEM_SERVICE.get("RECORD_STATUS") == "CHANGED" || this._SYSTEM_SERVICE.get("RECORD_STATUS") == "QUERY"))) {
                this.oracleFormsBuiltins.set_block_property("CMTRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTRELINV", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTRELINV", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
            }
            else {
                if ((this.CMTRIO.RIO_CODSOL == null)) {
                    this.oracleFormsBuiltins.set_block_property("CMTRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELINV", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELINV", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "INSERT_ALLOWED", "PROPERTY_TRUE");
                    this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "UPDATE_ALLOWED", "PROPERTY_TRUE");
                }
                else {
                    this.oracleFormsBuiltins.set_block_property("CMTRIO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTRIO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELAPO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELINV", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTRELINV", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTACTIVO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTPRDRIO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTCNTRIO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTVINRIO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "INSERT_ALLOWED", "PROPERTY_FALSE");
                    this.oracleFormsBuiltins.set_block_property("CMTINFCRIO", "UPDATE_ALLOWED", "PROPERTY_FALSE");
                }
            }
        }
        console.log("Exiting CMFRIO_cmtrio_whenNewRecordInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtrio_postTextItem() {
        console.log("Entering CMFRIO_cmtrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtrio_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtrio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtrio_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --MANEJO DE PARAMETROS LLAMADO DESDE OTRA FORMA
    // IF  :this.PARAMETER.get("PCONTROL") IN ('Q','C') THEN
    // :RIO_NIT := NVL(:this.PARAMETER.get("NIT"),:RIO_NIT) ;
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_preQuery() {
        console.log("Entering CMFRIO_cmtrio_preQuery");
        if (["Q", "C"].indexOf(this.PARAMETER.get("PCONTROL")) != -1) {
            // this.CMTRIO.RIO_NIT = this.PARAMETER.get("NIT") == null ? RIO_NIT : this.PARAMETER.get("NIT");
        }
        console.log("Exiting CMFRIO_cmtrio_preQuery");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   DUMMY_DEFINE CHAR(1);
    //   --
    //   -- BEGIN CMTVINRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTVINRIO_CUR IS      
    //     SELECT 1 FROM CMTVINRIO C     
    //     WHERE C.VIN_CODRIO = :CMTRIO.RIO_CODIGO AND C.VIN_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTVINRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTCNTRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTCNTRIO_CUR IS      
    //     SELECT 1 FROM CMTCNTRIO C     
    //     WHERE C.CNT_CODRIO = :CMTRIO.RIO_CODIGO AND C.CNT_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTCNTRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTPRDRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTPRDRIO_CUR IS      
    //     SELECT 1 FROM CMTPRDRIO C     
    //     WHERE C.PRD_CODRIO = :CMTRIO.RIO_CODIGO AND C.PRD_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTPRDRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTINFCRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTINFCRIO_CUR IS      
    //     SELECT 1 FROM CMTINFCRIO C     
    //     WHERE C.INF_CODRIO = :CMTRIO.RIO_CODIGO AND C.INF_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTINFCRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTACTIVO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTACTIVO_CUR IS      
    //     SELECT 1 FROM CMTACTIVO C     
    //     WHERE C.ACT_CODRIO = :CMTRIO.RIO_CODIGO AND C.ACT_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTACTIVO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELAPO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTRELAPO_CUR IS      
    //     SELECT 1 FROM CMTRELAPO C     
    //     WHERE C.RELA_CODRIO = :CMTRIO.RIO_CODIGO AND C.RELA_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTRELAPO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELINV DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTRELINV_CUR IS      
    //     SELECT 1 FROM CMTRELINV C     
    //     WHERE C.RELI_CODRIO = :CMTRIO.RIO_CODIGO AND C.RELI_NIT = :CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTRELINV DETAIL DECLARE SECTION
    //   --
    // --
    // -- END DEFAULT RELATION DECLARE SECTION
    // --
    // --
    // -- BEGIN DEFAULT RELATION PROGRAM SECTION
    // --
    // BEGIN
    //   --
    //   -- BEGIN CMTVINRIO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTVINRIO_CUR;     
    //   FETCH CMTVINRIO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTVINRIO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTVINRIO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTVINRIO_CUR;
    //   --
    //   -- END CMTVINRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTCNTRIO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTCNTRIO_CUR;     
    //   FETCH CMTCNTRIO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTCNTRIO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTCNTRIO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTCNTRIO_CUR;
    //   --
    //   -- END CMTCNTRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTPRDRIO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTPRDRIO_CUR;     
    //   FETCH CMTPRDRIO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTPRDRIO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTPRDRIO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTPRDRIO_CUR;
    //   --
    //   -- END CMTPRDRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTINFCRIO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTINFCRIO_CUR;     
    //   FETCH CMTINFCRIO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTINFCRIO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTINFCRIO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTINFCRIO_CUR;
    //   --
    //   -- END CMTINFCRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTACTIVO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTACTIVO_CUR;     
    //   FETCH CMTACTIVO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTACTIVO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTACTIVO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTACTIVO_CUR;
    //   --
    //   -- END CMTACTIVO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELAPO DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTRELAPO_CUR;     
    //   FETCH CMTRELAPO_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTRELAPO_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTRELAPO_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTRELAPO_CUR;
    //   --
    //   -- END CMTRELAPO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELINV DETAIL PROGRAM SECTION
    //   --
    //   OPEN CMTRELINV_CUR;     
    //   FETCH CMTRELINV_CUR INTO DUMMY_DEFINE;     
    //   IF ( CMTRELINV_CUR%FOUND ) THEN     
    //     MESSAGE('CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.');     
    //     CLOSE CMTRELINV_CUR;     
    //     RAISE FORM_TRIGGER_FAILURE;     
    //   END IF;
    //   CLOSE CMTRELINV_CUR;
    //   --
    //   -- END CMTRELINV DETAIL PROGRAM SECTION
    //   --
    // END;
    // --
    // -- END DEFAULT RELATION PROGRAM SECTION
    // --; END;
    //#endregion
    async CMFRIO_cmtrio_onCheckDeleteMaster() {
        console.log("Entering CMFRIO_cmtrio_onCheckDeleteMaster");
        let DUMMY_DEFINE: string = null;
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        if (null) {
            this.oracleFormsBuiltins.message("CANNOT DELETE MASTER RECORD WHEN MATCHING DETAIL RECORDS EXIST.");
            console.log("FORM_TRIGGER_FAILURE");
            throw new Error('FORM_TRIGGER_FAILURE');
        }
        console.log("Exiting CMFRIO_cmtrio_onCheckDeleteMaster");
    }

    //#region PLSQL
    // BEGIN IF :RIO_PUNTOVTA = 'S' AND (:RIO_NUMPTOS IS NULL OR :RIO_NUMPTOS = 0) THEN
    //  LIB$DTNERFRMA('LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.');
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_preUpdate() {
        console.log("Entering CMFRIO_cmtrio_preUpdate");
        // if ((RIO_PUNTOVTA == "S" && ((RIO_NUMPTOS == null) || RIO_NUMPTOS == 0))) {
        // CMFRIO_LIB$DTNERFRMA("LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.");
        // }
        console.log("Exiting CMFRIO_cmtrio_preUpdate");
    }

    //#region PLSQL
    // DECLARE
    //   V_LOCK     TIMER;
    //   UN_MINUTO  NUMBER(5) := 60000;
    // BEGIN
    //   :RIO_FECCREA := TRUNC(SYSDATE);
    //   :RIO_CODCOMER:= '186';--:this.PARAMETER.get("PCODCOMER");
    //   :RIO_USUARIO := PLSQLBuiltins.user();
    // END;
    //#endregion
    async CMFRIO_cmtrio_whenCreateRecord() {
        console.log("Entering CMFRIO_cmtrio_whenCreateRecord");
        let V_LOCK: null = null;
        let UN_MINUTO: number = 60000;
        // this.CMTRIO.RIO_FECCREA = PLSQLBuiltins.trunc(PLSQLBuiltins.sysdate());
        this.CMTRIO.RIO_CODCOMER = "186";
        this.CMTRIO.RIO_USUARIO = PLSQLBuiltins.user();
        console.log("Exiting CMFRIO_cmtrio_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN --
    // -- BEGIN DEFAULT RELATION DECLARE SECTION
    // --
    // DECLARE
    //   RECSTAT     VARCHAR2(20) := :this._SYSTEM_SERVICE.get("RECORD_STATUS");   
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
    //   -- BEGIN CMTVINRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTVINRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTVINRIO');   
    //   END IF;
    //   --
    //   -- END CMTVINRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTCNTRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTCNTRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTCNTRIO');   
    //   END IF;
    //   --
    //   -- END CMTCNTRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTPRDRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTPRDRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTPRDRIO');   
    //   END IF;
    //   --
    //   -- END CMTPRDRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTINFCRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTINFCRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTINFCRIO');   
    //   END IF;
    //   --
    //   -- END CMTINFCRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTACTIVO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTACTIVO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTACTIVO');   
    //   END IF;
    //   --
    //   -- END CMTACTIVO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELAPO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTRELAPO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTRELAPO');   
    //   END IF;
    //   --
    //   -- END CMTRELAPO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELINV DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:CMTRIO.RIO_CODIGO IS NOT NULL) OR (:CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTRELINV');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTRELINV');   
    //   END IF;
    //   --
    //   -- END CMTRELINV DETAIL PROGRAM SECTION
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
    async CMFRIO_cmtrio_onPopulateDetails() {
        console.log("Entering CMFRIO_cmtrio_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: number = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTVINRIO");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTVINRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTCNTRIO");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTCNTRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTPRDRIO");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTPRDRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTINFCRIO");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTINFCRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTACTIVO");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTACTIVO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTRELAPO");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTRELAPO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTRELINV");
            // CMFRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTRELINV");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFRIO_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFRIO_cmtrio_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN --8022
    // DECLARE
    // 
    // CURSOR CTIPOS  IS
    //     SELECT SUBCOD CODIGO
    //     FROM   SUB
    //     WHERE  SUB_VALRIO = 'S';
    // 
    // BEGIN
    //  
    //   IF :RIO_TIPORIO IS NULL THEN
    //      LIB$DTNERFRMA('POR FAVOR SELECCIONAR EL TIPO R.I.O QUE CORRESPONDIENTE.');    
    //  END IF;
    //  
    //  
    //  IF :RIO_TIPORIO = 'E' AND  :RIO_PROVEE IS NULL THEN
    //      LIB$DTNERFRMA('AL SER UN TIPO DE R.I.O EXTERNO POR FAVOR INGRESAR EL PROVEEDOR CORRESPONDIENTE.');    
    //  END IF;
    //  
    //  
    //  FOR C IN CTIPOS LOOP 
    //   IF C.CODIGO = :RIO_TIPACT AND (:RIO_VISITA = 'N' OR :RIO_VISITA IS NULL)  THEN
    //       LIB$DTNERFRMA('SE NECESITA LA VISITA CON VALOR DE SI.');    
    //   ELSE
    //         
    //         UPDATE CRTSOLICR SET SOLICR_CARTAC = :CMTRIO.RIO_VISITA
    //           WHERE SOLICR_OFCSOL = :CMTRIO.RIO_OFCSOL
    //             AND SOLICR_CODSOL = :CMTRIO.RIO_CODSOL
    //             AND SOLICR_CODUNI = :CMTRIO.RIO_CODUNI;  --ARQUITECTURA
    //         COMMIT;
    //   END IF;  
    //  END LOOP;
    //  
    //  
    // END;
    // 
    // --8022; END;
    //#endregion
    async CMFRIO_cmtrio_keyCommit() {
        console.log("Entering CMFRIO_cmtrio_keyCommit");
        // if ((RIO_TIPORIO == null)) {
        //     // CMFRIO_LIB$DTNERFRMA("POR FAVOR SELECCIONAR EL TIPO R.I.O QUE CORRESPONDIENTE.");
        // }
        // if ((RIO_TIPORIO == "E" && (RIO_PROVEE == null))) {
        //     // CMFRIO_LIB$DTNERFRMA("AL SER UN TIPO DE R.I.O EXTERNO POR FAVOR INGRESAR EL PROVEEDOR CORRESPONDIENTE.");
        // }
        console.log("Exiting CMFRIO_cmtrio_keyCommit");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT TBENAPE||' '||TBENNOM
    //     INTO :CMTRIO.NOMBRE
    //     FROM TBEN
    //    WHERE (TBENCOD=:CMTRIO.RIO_NIT);
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :CMTRIO.NOMBRE := NULL;
    //  END;
    //  
    // -- CONSULTA EL DEPARTAMENTO
    //  BEGIN
    //  SELECT DEPDES
    //    INTO :W_DEPARTA
    //     FROM DEP
    //    WHERE DEPCOD =  :RIO_DEPARTA;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :W_DEPARTA := NULL;
    //   WHEN OTHERS THEN
    //   LIB$DTNERFRMA('ERROR AL CONSULTAR LA DESCRIPCIÓN DEL DEPARTAMENTO');
    //  END;
    // 
    // -- CONSULTA EL MUNICIPIO O CIUDAD
    //  BEGIN
    //  SELECT TDCDES
    //    INTO :V_CIUDADRIO
    //    FROM OPS$SEGUI.TDC
    //   WHERE TDCCOD = :RIO_CIUDAD
    //     AND TDCDEP = :RIO_DEPARTA;
    //  EXCEPTION WHEN   NO_DATA_FOUND THEN
    //   :V_CIUDADRIO := NULL;
    //   WHEN OTHERS THEN
    //   LIB$DTNERFRMA('ERROR AL CONSULTAR LA DESCRIPCIÓN DEL MUNICIPIO');  
    //  END;
    // 
    // 
    // --8022  
    // BEGIN
    //  SELECT SUBDES DESCRIPCION 
    //   INTO :RIO_TIPACTDESA
    //   FROM SUB 
    //   WHERE SUBCOD = :RIO_TIPACT;
    // EXCEPTION WHEN NO_DATA_FOUND THEN :RIO_TIPACTDESA := NULL;
    // END;
    // 
    // 
    // --8022
    //#endregion
    async CMFRIO_cmtrio_postQuery() {
        console.log("Entering CMFRIO_cmtrio_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("RIO_NIT", this.CMTRIO.RIO_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_postquery_query1", payload1);
        // get values from result
        this.CMTRIO.NOMBRE = result1[0].get("CMTRIO.NOMBRE");
        if (result1 == null || result1.length == 0) {

            this.CMTRIO.NOMBRE = null;
        }

        try {

            // construct payload
            let payload2 = new Map();
            // payload2.set("RIO_DEPARTA", RIO_DEPARTA);
            // call REST API
            const result2 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_postquery_query2", payload2);
            // get values from result
            // W_DEPARTA = result2[0].get("W_DEPARTA");
            if (result2 == null || result2.length == 0) {

                this.CMTRIO.W_DEPARTA = null;
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR LA DESCRIPCIÓN DEL DEPARTAMENTO");
        }

        try {

            // construct payload
            let payload3 = new Map();
            // payload3.set("RIO_CIUDAD", RIO_CIUDAD);
            // payload3.set("RIO_DEPARTA", RIO_DEPARTA);
            // call REST API
            const result3 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_postquery_query3", payload3);
            // get values from result
            // V_CIUDADRIO = result3[0].get("V_CIUDADRIO");
            if (result3 == null || result3.length == 0) {

                this.CMTRIO.V_CIUDADRIO = null;
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR LA DESCRIPCIÓN DEL MUNICIPIO");
        }

        // construct payload
        let payload4 = new Map();
        // payload4.set("RIO_TIPACT", RIO_TIPACT);
        // call REST API
        const result4 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_postquery_query4", payload4);
        // get values from result
        // RIO_TIPACTDESA = result4[0].get("RIO_TIPACTDESA");
        if (result4 == null || result4.length == 0) {

            this.CMTRIO.RIO_TIPACTDESA = null;
        }

        console.log("Exiting CMFRIO_cmtrio_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  V_NEXCOD   NUMBER;
    //  VBOTON    NUMBER;
    // BEGIN 
    //  IF :RIO_CODIGO IS NULL THEN
    //  --BUSCAR EL PROXIMO CODIGO DE LOS RIO X NIT
    //     BEGIN
    //       SELECT NVL(MAX(NVL(RIO_CODIGO,0)),0)+1
    //         INTO V_NEXCOD
    //         FROM CMTRIO
    //      WHERE RIO_NIT    = :CMTRIO.RIO_NIT
    //        AND RIO_CODUNI   = :CMTRIO.RIO_CODUNI;  -- ARQUITECTURA
    //        --ASIGNA EL CÓDIGO
    //       :RIO_CODIGO := V_NEXCOD;
    //      EXCEPTION
    //      WHEN OTHERS THEN
    //    LIB$DTNERFRMA('FALLA AL ASIGNAR EL CODIGO AL R.I.O.');     
    //       --MESSAGE('FALLA AL ASIGNAR EL CODIGO AL R.I.O.');
    //      END;
    // END IF;
    // 
    // IF :RIO_PUNTOVTA = 'S' AND (:RIO_NUMPTOS IS NULL OR :RIO_NUMPTOS = 0) THEN
    //  LIB$DTNERFRMA('LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.');
    // END IF;
    //  
    // END;
    //#endregion
    async CMFRIO_cmtrio_preInsert() {
        console.log("Entering CMFRIO_cmtrio_preInsert");
        let V_NEXCOD: number = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_CODIGO == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("RIO_NIT", this.CMTRIO.RIO_NIT);
                payload1.set("RIO_CODUNI", this.CMTRIO.RIO_CODUNI);
                // call REST API
                const result1 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_preinsert_query1", payload1);
                // get values from result
                V_NEXCOD = result1[0].get("V_NEXCOD");
                this.CMTRIO.RIO_CODIGO = V_NEXCOD;
            } catch (ex) {

                // CMFRIO_LIB$DTNERFRMA("FALLA AL ASIGNAR EL CODIGO AL R.I.O.");
            }

        }
        if ((this.CMTRIO.RIO_PUNTOVTA == "S" && ((this.CMTRIO.RIO_NUMPTOS == null) || this.CMTRIO.RIO_NUMPTOS == 0))) {
            // CMFRIO_LIB$DTNERFRMA("LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.");
        }
        console.log("Exiting CMFRIO_cmtrio_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON    NUMBER;
    //  LPCORIOID PARAMLIST;
    // BEGIN
    //  --PU_VALIDA_RELACTIVOS (:CMTRELINM.REL_NIT, :CMTRELINM.REL_CODRIO );
    //  PU_VALIDA_RELACTIVOS (:CMTRIO.RIO_NIT, :CMTRIO.RIO_CODIGO);
    //  LPCORIOID := GET_PARAMETER_LIST('LPCORIO');
    //   IF NOT ID_NULL(LPCORIOID) THEN
    //     DESTROY_PARAMETER_LIST(LPCORIOID);
    //   END IF;
    //     LPCORIOID := CREATE_PARAMETER_LIST('LPCORIO');
    //     ADD_PARAMETER(LPCORIOID, 'ORACLE_SHUTDOWN', "TEXT_PARAMETER", 'YES');
    //     ADD_PARAMETER(LPCORIOID, 'PARAMFORM', "TEXT_PARAMETER", 'NO');
    //     ADD_PARAMETER(LPCORIOID, 'BACKGROUND',"TEXT_PARAMETER", 'YES');
    //     ADD_PARAMETER(LPCORIOID, 'DESTYPE', "TEXT_PARAMETER", 'PREVIEW');
    //    ADD_PARAMETER(LPCORIOID, 'P_CODCOMER', "TEXT_PARAMETER", :this.PARAMETER.get("PCODCOMER"));
    //     ADD_PARAMETER(LPCORIOID, 'P_NIT', "TEXT_PARAMETER", :CMTRIO.RIO_NIT);
    //     ADD_PARAMETER(LPCORIOID, 'P_CODRIO', "TEXT_PARAMETER", :RIO_CODIGO);
    //     ADD_PARAMETER(LPCORIOID, 'P_CODUNI', "TEXT_PARAMETER", :RIO_CODUNI); -- ARQUITECTURA
    //    RUN_PRODUCT(REPORTS, 'CORRIO1', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCORIOID, NULL); 
    // END;
    //#endregion
    async CMFRIO_cmtrio_vImprimir_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vImprimir_whenButtonPressed");
        let VBOTON: number = null;
        let LPCORIOID: number = null;
        // CMFRIO_PU_VALIDA_RELACTIVOS(this.CMTRIO.RIO_NIT, this.CMTRIO.RIO_CODIGO);
        LPCORIOID = this.oracleFormsBuiltins.get_parameter_list("LPCORIO");
        if ((!this.oracleFormsBuiltins.id_null(LPCORIOID))) {
            this.oracleFormsBuiltins.destroy_parameter_list(LPCORIOID);
        }
        LPCORIOID = this.oracleFormsBuiltins.create_parameter_list("LPCORIO");
        this.oracleFormsBuiltins.add_parameter(LPCORIOID, "ORACLE_SHUTDOWN", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(LPCORIOID, "PARAMFORM", "TEXT_PARAMETER", "NO");
        this.oracleFormsBuiltins.add_parameter(LPCORIOID, "BACKGROUND", "TEXT_PARAMETER", "YES");
        this.oracleFormsBuiltins.add_parameter(LPCORIOID, "DESTYPE", "TEXT_PARAMETER", "PREVIEW");
        this.oracleFormsBuiltins.add_parameter(LPCORIOID, "P_CODCOMER", "TEXT_PARAMETER", this.PARAMETER.get("PCODCOMER"));
        this.oracleFormsBuiltins.add_parameter(LPCORIOID, "P_NIT", "TEXT_PARAMETER", this.CMTRIO.RIO_NIT);
        // this.oracleFormsBuiltins.add_parameter(LPCORIOID, "P_CODRIO", "TEXT_PARAMETER", RIO_CODIGO);
        // this.oracleFormsBuiltins.add_parameter(LPCORIOID, "P_CODUNI", "TEXT_PARAMETER", RIO_CODUNI);
        // this.oracleFormsBuiltins.run_product(REPORTS, "CORRIO1", ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCORIOID, null);
        console.log("Exiting CMFRIO_cmtrio_vImprimir_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_CONTRA');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTCNTRIO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTCNTRIO');
    //     EXECUTE_QUERY;
    //   END IF;
    //    
    // ELSE
    //   LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION PARA CONTRATISTAS.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vContra_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vContra_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_CONTRA");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTCNTRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTCNTRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION PARA CONTRATISTAS.");
        }
        console.log("Exiting CMFRIO_cmtrio_vContra_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN -----------------------------------------------------------
    // -- LLAMADO DEL PROCEDIMIENTO PRINCIPAL QUE DUPLICA EL R.I.O
    // DECLARE
    // 
    //  V_RESULTADO   VARCHAR2(1000);
    //  T_RESPUESTA    NUMBER;
    //  ALERT_GENERAR  ALERT := FIND_ALERT('ALERTA_SINO');
    //   I         NUMBER(4);
    // 
    // BEGIN 
    //  SET_ALERT_PROPERTY(ALERT_GENERAR,ALERT_MESSAGE_TEXT,'DESEA DUPLICAR EL RIO ? ');
    //  I := SHOW_ALERT(ALERT_GENERAR);
    //  IF I = ALERT_BUTTON1 THEN
    //   SET_APPLICATION_PROPERTY(CURSOR_STYLE,'BUSY');    
    //   PQBD_COL_DML_RIO.PBD_PRINCIPAL(P_NIT         => :RIO_NIT
    //                              ,P_CODIGO_RIO  => :RIO_CODIGO
    //                              ,P_COD_UNIDAD  => :RIO_CODUNI  -- ARQUITECTURA
    //                              ,P_RESULTADO   => V_RESULTADO);
    //   IF V_RESULTADO = 'OK' THEN
    //      LIB$ALERTA('MENSAJE', 'PROCESO DE DUPLICAR RIO, TERMINO EXITOSAMENTE.',NULL,NULL,NULL, T_RESPUESTA);
    //      --GO_BLOCK('CMTRIO');
    //      --SET_BLOCK_PROPERTY('CMTRIO',DEFAULT_WHERE,'RIO_NIT = '||:RIO_NIT); ANTES 8022
    //      SET_BLOCK_PROPERTY('CMTRIO',DEFAULT_WHERE,'RIO_NIT = '''||:RIO_NIT||'');  --8022
    //      EXECUTE_QUERY;
    //   ELSE
    //      LIB$ALERTA('MENSAJE', 'ERROR AL DUPLICAR EL RIO.  '||V_RESULTADO,NULL,NULL,NULL, T_RESPUESTA);    
    //   END IF;
    //   SET_APPLICATION_PROPERTY(CURSOR_STYLE,'DEFAULT');
    //  ELSE
    //    GO_ITEM('RIO_NIT');
    //  END IF; 
    //  
    // END;
    // -----------------------------------------------------------; END;
    //#endregion
    async CMFRIO_cmtrio_duplicar_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_duplicar_whenButtonPressed");
        let V_RESULTADO: string = null;
        let T_RESPUESTA: number = null;
        // let ALERT_GENERAR: null = FIND_ALERT('ALERTA_SINO');
        let I: number = null;
        // this.oracleFormsBuiltins.set_alert_property(ALERT_GENERAR, ALERT_MESSAGE_TEXT, "DESEA DUPLICAR EL RIO ? ");
        // I = this.oracleFormsBuiltins.show_alert(ALERT_GENERAR);
        // if (I == ALERT_BUTTON1) {
        //     this.oracleFormsBuiltins.set_application_property(CURSOR_STYLE, "BUSY");
        //     // CMFRIO_PQBD_COL_DML_RIO.PBD_PRINCIPAL(RIO_NIT, RIO_CODIGO, RIO_CODUNI, V_RESULTADO);
        //     if (V_RESULTADO == "OK") {
        //         // CMFRIO_LIB$ALERTA("MENSAJE", "PROCESO DE DUPLICAR RIO, TERMINO EXITOSAMENTE.", null, null, null, T_RESPUESTA);
        //         this.oracleFormsBuiltins.set_block_property("CMTRIO", DEFAULT_WHERE, "RIO_NIT = ''" + RIO_NIT + "");
        //         this.oracleFormsBuiltins.execute_query();
        //     }
        //     else {
        //         // CMFRIO_LIB$ALERTA("MENSAJE", "ERROR AL DUPLICAR EL RIO.  " + V_RESULTADO, null, null, null, T_RESPUESTA);
        //     }
        //     this.oracleFormsBuiltins.set_application_property(CURSOR_STYLE, "DEFAULT");
        // }
        // else {
        //     this.oracleFormsBuiltins.go_item("RIO_NIT");
        // }
        console.log("Exiting CMFRIO_cmtrio_duplicar_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_INFCENT');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTINFCRIO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTINFCRIO');
    //     EXECUTE_QUERY;
    //   END IF;
    // ELSE
    //   LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION SOBRE CALIFICACIONES EN CENTRALES DE RIESGO DIFERENTES A A.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vCenries_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vCenries_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_INFCENT");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTINFCRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTINFCRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION SOBRE CALIFICACIONES EN CENTRALES DE RIESGO DIFERENTES A A.");
        }
        console.log("Exiting CMFRIO_cmtrio_vCenries_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_PRODUCTOS');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTPRDRIO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTPRDRIO'); 
    //     EXECUTE_QUERY;
    //   END IF;
    //    
    // ELSE
    //   LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION DE PRODUCTOS.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vProductos_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vProductos_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_PRODUCTOS");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTPRDRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTPRDRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION DE PRODUCTOS.");
        }
        console.log("Exiting CMFRIO_cmtrio_vProductos_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN CREATE_RECORD; END;
    //#endregion
    async CMFRIO_cmtrio_rioArchadj_whenCreateRecord() {
        console.log("Entering CMFRIO_cmtrio_rioArchadj_whenCreateRecord");
        this.oracleFormsBuiltins.create_record();
        console.log("Exiting CMFRIO_cmtrio_rioArchadj_whenCreateRecord");
    }

    //#region PLSQL
    // BEGIN IF  this._SYSTEM_SERVICE.get("RECORD_STATUS") = 'INSERT' THEN
    //    :CMTRIO.RIO_RECOMENDA :=  :CMTRIO.RIO_RECOMENDA ||'  '|| SYSDATE ||'  ' ||:CMTRIO.RIO_DUMRECOMIE  ;
    // END IF;   
    // 
    // GO_ITEM('RIO_NIT'); END;
    //#endregion
    async CMFRIO_cmtrio_volver_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_volver_whenButtonPressed");
        if (this._SYSTEM_SERVICE.get("RECORD_STATUS") == "INSERT") {
            // this.CMTRIO.RIO_RECOMENDA = this.CMTRIO.RIO_RECOMENDA || '  ' || SYSDATE || '  ' || CMTRIO.RIO_DUMRECOMIE;
        }
        this.oracleFormsBuiltins.go_item("RIO_NIT");
        console.log("Exiting CMFRIO_cmtrio_volver_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_RECOMEN');
    //    IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //       SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //        GO_ITEM('CMTRIO.RIO_RECOMENDA');
    //    ELSE
    //        GO_ITEM('CMTRIO.RIO_RECOMENDA');    
    //    END IF; 
    // ELSE
    //   LIB$DTNERFRMA ('EL NIT NO DEBE SER NULO PARA CREAR LA RECOMENDACION DEL COMERCIAL SE DEBE CREAR PRIMERO EL R.I.O.');
    // END IF;
    // END;
    //     
    //    
    //#endregion
    async CMFRIO_cmtrio_vRecomen_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vRecomen_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_RECOMEN");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_item("CMTRIO.RIO_RECOMENDA");
            // }
            // else {
            //     this.oracleFormsBuiltins.go_item("CMTRIO.RIO_RECOMENDA");
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("EL NIT NO DEBE SER NULO PARA CREAR LA RECOMENDACION DEL COMERCIAL SE DEBE CREAR PRIMERO EL R.I.O.");
        }
        console.log("Exiting CMFRIO_cmtrio_vRecomen_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    //  V_TERPER  TER.TERPER%TYPE;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_HISTORIA');
    //    IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //       SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //       BEGIN
    //      SELECT TERPER
    //       INTO V_TERPER
    //      FROM TER
    //      WHERE TERCOD = :CMTRIO.RIO_NIT;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //     V_TERPER := NULL;
    //     END;
    //     IF V_TERPER = 'N' THEN
    //         SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_FALSE");  
    //         GO_ITEM('RIO_HISTORIA');
    //        ELSE
    //         SET_ITEM_PROPERTY('RIO_FECCONST',"DISPLAYED", "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('RIO_FECCONST',NAVIGABLE, "PROPERTY_TRUE");
    //         GO_ITEM('RIO_FECCONST');
    //        END IF; 
    //    ELSE
    //     BEGIN
    //      SELECT TERPER
    //       INTO V_TERPER
    //      FROM TER
    //      WHERE TERCOD = :CMTRIO.RIO_NIT;
    //     EXCEPTION WHEN NO_DATA_FOUND THEN
    //     V_TERPER := NULL;
    //     END;
    //     IF V_TERPER = 'N' THEN
    //         SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_FALSE"); 
    //      GO_ITEM('RIO_HISTORIA'); 
    //        ELSE
    //         SET_ITEM_PROPERTY('RIO_FECCONST',"DISPLAYED", "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_TRUE");
    //         SET_ITEM_PROPERTY('RIO_FECCONST',NAVIGABLE, "PROPERTY_TRUE");
    //         GO_ITEM('RIO_FECCONST');
    //        END IF; 
    //    END IF; 
    // ELSE
    //   LIB$DTNERFRMA ('PARA CREAR HISTORIA SE DEBE CREAR PRIMERO EL R.I.O.');
    // END IF;
    // END;
    // 
    //     
    //    
    //#endregion
    async CMFRIO_cmtrio_vHistoria_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vHistoria_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        let V_TERPER: null = null;
        // if ((this.CMTRIO.RIO_NIT != null)) {
        //     TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_HISTORIA");
        //     if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
        //         this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("RIO_NIT", this.CMTRIO.RIO_NIT);
        //         // call REST API
        //         const result1 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_vhistoria_whenbuttonpressed_query1", payload1);
        //         // get values from result
        //         V_TERPER = result1[0].get("V_TERPER");
        //         if (result1 == null || result1.length == 0) {

        //             V_TERPER = null;
        //         }

        //         if (V_TERPER == "N") {
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "ENABLED", "PROPERTY_FALSE");
        //             this.oracleFormsBuiltins.go_item("RIO_HISTORIA");
        //         }
        //         else {
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "DISPLAYED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "NAVIGABLE", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.go_item("RIO_FECCONST");
        //         }
        //     }
        //     else {
        //         // construct payload
        //         let payload2 = new Map();
        //         payload2.set("RIO_NIT", this.CMTRIO.RIO_NIT);
        //         // call REST API
        //         const result2 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_vhistoria_whenbuttonpressed_query2", payload2);
        //         // get values from result
        //         V_TERPER = result2[0].get("V_TERPER");
        //         if (result2 == null || result2.length == 0) {

        //             V_TERPER = null;
        //         }

        //         if (V_TERPER == "N") {
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "ENABLED", "PROPERTY_FALSE");
        //             this.oracleFormsBuiltins.go_item("RIO_HISTORIA");
        //         }
        //         else {
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "DISPLAYED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "ENABLED", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "NAVIGABLE", "PROPERTY_TRUE");
        //             this.oracleFormsBuiltins.go_item("RIO_FECCONST");
        //         }
        //     }
        // }
        // else {
        //     // CMFRIO_LIB$DTNERFRMA("PARA CREAR HISTORIA SE DEBE CREAR PRIMERO EL R.I.O.");
        // }
        console.log("Exiting CMFRIO_cmtrio_vHistoria_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RIO_PUNTOVTA = 'S' THEN
    //  SET_ITEM_PROPERTY('RIO_NUMPTOS', NAVIGABLE, "PROPERTY_TRUE");
    // ELSE
    //  SET_ITEM_PROPERTY('RIO_NUMPTOS', NAVIGABLE, "PROPERTY_FALSE");
    //  SET_ITEM_PROPERTY('RIO_NUMPTOS', NAVIGABLE, "PROPERTY_FALSE");
    //  :RIO_NUMPTOS := NULL;
    //  NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_rioPuntovta_whenListChanged() {
        console.log("Entering CMFRIO_cmtrio_rioPuntovta_whenListChanged");
        if (this.CMTRIO.RIO_PUNTOVTA == "S") {
            this.oracleFormsBuiltins.set_item_property("RIO_NUMPTOS", "NAVIGABLE", "PROPERTY_TRUE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("RIO_NUMPTOS", "NAVIGABLE", "PROPERTY_FALSE");
            this.oracleFormsBuiltins.set_item_property("RIO_NUMPTOS", "NAVIGABLE", "PROPERTY_FALSE");
            this.CMTRIO.RIO_NUMPTOS = null;
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CMFRIO_cmtrio_rioPuntovta_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_ACTIVO');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTACTIVO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTACTIVO');
    //     EXECUTE_QUERY;
    //   END IF;
    //    
    // ELSE
    //   LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT PARA RELACIONAR INFORMACION DEL ACTIVO A FINANCIAR.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vActcoarren_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vActcoarren_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_ACTIVO");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTACTIVO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTACTIVO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT PARA RELACIONAR INFORMACION DEL ACTIVO A FINANCIAR.");
        }
        console.log("Exiting CMFRIO_cmtrio_vActcoarren_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE
    //  V_TERPER TER.TERPER%TYPE;
    // BEGIN 
    //  BEGIN
    //   SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE), TERPER
    //     INTO :CMTRIO.NOMBRE , V_TERPER
    //   FROM TER
    //   WHERE TERCOD = :CMTRIO.RIO_NIT;
    //  EXCEPTION WHEN NO_DATA_FOUND THEN
    //   :CMTRIO.NOMBRE := NULL;
    //  END;
    //  
    //  IF V_TERPER = 'N' THEN
    //   SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_FALSE");  
    //  ELSE
    //   SET_ITEM_PROPERTY('RIO_FECCONST',"DISPLAYED", "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_TRUE");
    //   SET_ITEM_PROPERTY('RIO_FECCONST',NAVIGABLE, "PROPERTY_TRUE");
    //  END IF;
    // 
    // END;
    //#endregion
    async CMFRIO_cmtrio_rioNit_whenValidateItem() {
        console.log("Entering CMFRIO_cmtrio_rioNit_whenValidateItem");
        let V_TERPER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RIO_NIT", this.CMTRIO.RIO_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfrio_cmtrio/cmfrio_cmtrio_rionit_whenvalidateitem_query1", payload1);
        // get values from result
        this.CMTRIO.NOMBRE = result1[0].get("CMTRIO.NOMBRE");
        V_TERPER = result1[0].get("V_TERPER");
        if (result1 == null || result1.length == 0) {

            this.CMTRIO.NOMBRE = null;
        }

        if (V_TERPER == "N") {
            this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("RIO_FECCONST", "NAVIGABLE", "PROPERTY_TRUE");
        }
        console.log("Exiting CMFRIO_cmtrio_rioNit_whenValidateItem");
    }

    //#region PLSQL
    // DECLARE 
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_INFOR');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTINFCRIO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTINFCRIO'); 
    //     EXECUTE_QUERY;
    //   END IF;
    //    
    // ELSE
    //   LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION ADICIONAL.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vAdicional_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vAdicional_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_INFOR");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTINFCRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTINFCRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION ADICIONAL.");
        }
        console.log("Exiting CMFRIO_cmtrio_vAdicional_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RIO_PUNTOVTA = 'S' AND (:RIO_NUMPTOS IS NULL OR :RIO_NUMPTOS = 0) THEN
    //  LIB$DTNERFRMA('LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.');
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_rioNumptos_whenValidateItem() {
        console.log("Entering CMFRIO_cmtrio_rioNumptos_whenValidateItem");
        if ((this.CMTRIO.RIO_PUNTOVTA == "S" && ((this.CMTRIO.RIO_NUMPTOS == null) || this.CMTRIO.RIO_NUMPTOS == 0))) {
            // CMFRIO_LIB$DTNERFRMA("LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.");
        }
        console.log("Exiting CMFRIO_cmtrio_rioNumptos_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN IF :RIO_PUNTOVTA = 'S' AND (:RIO_NUMPTOS IS NULL OR :RIO_NUMPTOS = 0) THEN
    //  LIB$DTNERFRMA('LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.');
    // ELSE
    //  NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_rioNumptos_keyNextItem() {
        console.log("Entering CMFRIO_cmtrio_rioNumptos_keyNextItem");
        if ((this.CMTRIO.RIO_PUNTOVTA == "S" && ((this.CMTRIO.RIO_NUMPTOS == null) || this.CMTRIO.RIO_NUMPTOS == 0))) {
            // CMFRIO_LIB$DTNERFRMA("LA CANTIDAD DE PUNTOS DE VENTA NO PUEDE SER NULA O CERO.");
        }
        else {
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CMFRIO_cmtrio_rioNumptos_keyNextItem");
    }

    //#region PLSQL
    // DECLARE 
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_INFCENT');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTPCRRIO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTPCRRIO');
    //     EXECUTE_QUERY;
    //   END IF;
    // ELSE
    //    LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION SOBRE PARAMETROS DE CREDITO.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vParacred_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vParacred_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_INFCENT");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTPCRRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTPCRRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR INFORMACION SOBRE PARAMETROS DE CREDITO.");
        }
        console.log("Exiting CMFRIO_cmtrio_vParacred_whenButtonPressed");
    }

    //#region PLSQL
    // DECLARE 
    //  TB_PG_ID  TAB_PAGE;
    //  VBOTON    NUMBER;
    // BEGIN
    // IF :RIO_NIT IS NOT NULL THEN
    //   TB_PG_ID := FIND_TAB_PAGE('TAB_VINCULA');
    //   IF GET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE") = 'FALSE' THEN
    //     SET_TAB_PAGE_PROPERTY(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
    //      GO_BLOCK('CMTVINRIO');
    //      EXECUTE_QUERY;
    //   ELSE
    //     GO_BLOCK('CMTVINRIO');
    //     EXECUTE_QUERY;
    //   END IF;
    // ELSE
    //   LIB$DTNERFRMA ('SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR VINCULADOS.');
    //   END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrio_vVinculados_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_vVinculados_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        if ((this.CMTRIO.RIO_NIT != null)) {
            // TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_VINCULA");
            // if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
            //     this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
            //     this.oracleFormsBuiltins.go_block("CMTVINRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
            // else {
            //     this.oracleFormsBuiltins.go_block("CMTVINRIO");
            //     this.oracleFormsBuiltins.execute_query();
            // }
        }
        else {
            // CMFRIO_LIB$DTNERFRMA("SE DEBE INGRESAR UN NIT O R.I.O PARA RELACIONAR VINCULADOS.");
        }
        console.log("Exiting CMFRIO_cmtrio_vVinculados_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN IF :RIO_VISITA = 'N' THEN
    //  :RIO_OBSVISITA := NULL;
    //  SET_ITEM_PROPERTY('RIO_OBSVISITA',ENABLED, "PROPERTY_FALSE");
    // ELSE
    //  SET_ITEM_PROPERTY('RIO_OBSVISITA',"DISPLAYED", "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('RIO_OBSVISITA',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('RIO_OBSVISITA',NAVIGABLE, "PROPERTY_TRUE");
    //  NEXT_ITEM;
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_rioVisita_whenListChanged() {
        console.log("Entering CMFRIO_cmtrio_rioVisita_whenListChanged");
        if (this.CMTRIO.RIO_VISITA == "N") {
            this.CMTRIO.RIO_OBSVISITA = null;
            this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "ENABLED", "PROPERTY_FALSE");
        }
        else {
            this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "DISPLAYED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "ENABLED", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "NAVIGABLE", "PROPERTY_TRUE");
            this.oracleFormsBuiltins.next_item();
        }
        console.log("Exiting CMFRIO_cmtrio_rioVisita_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :CMTRIO.RIO_VISITA = 'S' AND :CMTRIO.RIO_OBSVISITA IS NULL THEN
    //  LIB$DTNERFRMA('DEBE DIGITAR UN LUGAR.');
    // ELSIF :CMTRIO.RIO_VISITA = 'N' THEN
    //  :RIO_OBSVISITA := NULL;
    // END IF; END;
    //#endregion
    async CMFRIO_cmtrio_rioObsvisita_whenValidateItem() {
        console.log("Entering CMFRIO_cmtrio_rioObsvisita_whenValidateItem");
        if ((this.CMTRIO.RIO_VISITA == "S" && (this.CMTRIO.RIO_OBSVISITA == null))) {
            // CMFRIO_LIB$DTNERFRMA("DEBE DIGITAR UN LUGAR.");
        }
        else if (this.CMTRIO.RIO_VISITA == "N") {
            this.CMTRIO.RIO_OBSVISITA = null;
        }
        console.log("Exiting CMFRIO_cmtrio_rioObsvisita_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN COMMIT;
    // IF :CMTRIO.RIO_RECOMENDA IS NOT NULL THEN   
    //     :CMTRIO.RIO_DUMRECOMIE :=  '  ' ||:CMTRIO.RIO_RECOMENDA;  
    // ELSE
    //    :CMTRIO.RIO_DUMRECOMIE :=  NULL;    
    // END IF;
    // 
    // 
    // GO_ITEM('CMTRIO.RIO_RECOMENDA'); END;
    //#endregion
    async CMFRIO_cmtrio_recomendacion_whenButtonPressed() {
        console.log("Entering CMFRIO_cmtrio_recomendacion_whenButtonPressed");
        if ((this.CMTRIO.RIO_RECOMENDA != null)) {
            this.CMTRIO.RIO_DUMRECOMIE = "  " + this.CMTRIO.RIO_RECOMENDA;
        }
        else {
            this.CMTRIO.RIO_DUMRECOMIE = null;
        }
        this.oracleFormsBuiltins.go_item("CMTRIO.RIO_RECOMENDA");
        console.log("Exiting CMFRIO_cmtrio_recomendacion_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtinfcrio_postTextItem() {
        console.log("Entering CMFRIO_cmtinfcrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtinfcrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtinfcrio_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtinfcrio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtinfcrio_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT ENTFIN_ENTDES
    //   INTO :CMTINFCRIO.W_ENTIDAD
    //   FROM COTENTFIN T
    //  WHERE ENTFIN_ENTCOD = :INF_ENTIDAD
    //    AND ROWNUM = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('NO EXISTE LA ENTIDAD.');
    //  WHEN OTHERS THEN
    //  LIB$DTNERFRMA('ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.');  
    // END;
    //#endregion
    async CMFRIO_cmtinfcrio_postQuery() {
        console.log("Entering CMFRIO_cmtinfcrio_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("INF_ENTIDAD", INF_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfrio_cmtinfcrio/cmfrio_cmtinfcrio_postquery_query1", payload1);
            // get values from result
            // CMTINFCRIO.W_ENTIDAD = result1[0].get("CMTINFCRIO.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFRIO_cmtinfcrio_postQuery");
    }

    //#region PLSQL
    // BEGIN
    // SELECT ENTFIN_ENTDES
    //   INTO :CMTINFCRIO.W_ENTIDAD
    //   FROM COTENTFIN T
    //  WHERE ENTFIN_ENTCOD = :INF_ENTIDAD
    //    AND ROWNUM = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('NO EXISTE LA ENTIDAD.');
    //  WHEN OTHERS THEN
    //  LIB$DTNERFRMA('ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.');  
    // END;
    //#endregion
    async CMFRIO_cmtinfcrio_infEntidad_whenValidateItem() {
        console.log("Entering CMFRIO_cmtinfcrio_infEntidad_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("INF_ENTIDAD", INF_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfrio_cmtinfcrio/cmfrio_cmtinfcrio_infentidad_whenvalidateitem_query1", payload1);
            // get values from result
            this.CMTINFCRIO.W_ENTIDAD = result1[0].get("CMTINFCRIO.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFRIO_cmtinfcrio_infEntidad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtactivo_postTextItem() {
        console.log("Entering CMFRIO_cmtactivo_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtactivo_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtactivo_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtactivo_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtactivo_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN 
    //  IF :CMTACTIVO.ACT_CONSEC IS NULL THEN
    //     BEGIN
    //       SELECT NVL(MAX(NVL(ACT_CONSEC,0)),0)+1
    //         INTO :CMTACTIVO.ACT_CONSEC
    //         FROM CMTACTIVO
    //     WHERE ACT_CODRIO  = :CMTACTIVO.ACT_CODRIO
    //          AND ACT_NIT   = :CMTACTIVO.ACT_NIT; 
    //      EXCEPTION
    //      WHEN OTHERS THEN
    //        LIB$DTNERFRMA('FALLA AL ASIGNAR EL CODIGO A LA TABLA DE CMTACTIVO.');
    //      END;
    //    END IF;
    // END;
    //#endregion
    async CMFRIO_cmtactivo_preInsert() {
        console.log("Entering CMFRIO_cmtactivo_preInsert");
        if ((this.CMTACTIVO.ACT_CONSEC == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("ACT_CODRIO", this.CMTACTIVO.ACT_CODRIO);
                payload1.set("ACT_NIT", this.CMTACTIVO.ACT_NIT);
                // call REST API
                const result1 = await Rest.post("/cmfrio_cmtactivo/cmfrio_cmtactivo_preinsert_query1", payload1);
                // get values from result
                this.CMTACTIVO.ACT_CONSEC = result1[0].get("CMTACTIVO.ACT_CONSEC");
            } catch (ex) {

                // CMFRIO_LIB$DTNERFRMA("FALLA AL ASIGNAR EL CODIGO A LA TABLA DE CMTACTIVO.");
            }

        }
        console.log("Exiting CMFRIO_cmtactivo_preInsert");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_toolbar_whenButtonPressed() {
        console.log("Entering CMFRIO_toolbar_whenButtonPressed");
        console.log("Exiting CMFRIO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_toolbar_whenMouseLeave() {
        console.log("Entering CMFRIO_toolbar_whenMouseLeave");
        console.log("Exiting CMFRIO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_toolbar_whenNewFormInstance() {
        console.log("Entering CMFRIO_toolbar_whenNewFormInstance");
        console.log("Exiting CMFRIO_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_toolbar_first_whenButtonPressed() {
        console.log("Entering CMFRIO_toolbar_first_whenButtonPressed");
        console.log("Exiting CMFRIO_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_toolbar_lastr_whenButtonPressed() {
        console.log("Entering CMFRIO_toolbar_lastr_whenButtonPressed");
        console.log("Exiting CMFRIO_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtrelapo_postTextItem() {
        console.log("Entering CMFRIO_cmtrelapo_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtrelapo_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtrelapo_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtrelapo_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtrelapo_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN 
    //  IF :CMTRELAPO.RELA_CONSEC IS NULL THEN
    //     BEGIN
    //       SELECT NVL(MAX(NVL(RELA_CONSEC,0)),0)+1
    //         INTO :CMTRELAPO.RELA_CONSEC
    //         FROM CMTRELAPO
    //     WHERE RELA_CODRIO  = :CMTRELAPO.RELA_CODRIO
    //          AND RELA_NIT    = :CMTRELAPO.RELA_NIT
    //          AND RELA_TIPRELA = :CMTRELAPO.RELA_TIPRELA; 
    //      EXCEPTION
    //      WHEN OTHERS THEN
    //        LIB$DTNERFRMA('FALLA AL ASIGNAR EL CODIGO A LA TABLA DE CMTRELAPO.');
    //      END;
    //    END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrelapo_preInsert() {
        console.log("Entering CMFRIO_cmtrelapo_preInsert");
        if ((this.CMTRELAPO.RELA_CONSEC == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("RELA_CODRIO", this.CMTRELAPO.RELA_CODRIO);
                payload1.set("RELA_NIT", this.CMTRELAPO.RELA_NIT);
                payload1.set("RELA_TIPRELA", this.CMTRELAPO.RELA_TIPRELA);
                // call REST API
                const result1 = await Rest.post("/cmfrio_cmtrelapo/cmfrio_cmtrelapo_preinsert_query1", payload1);
                // get values from result
                this.CMTRELAPO.RELA_CONSEC = result1[0].get("CMTRELAPO.RELA_CONSEC");
            } catch (ex) {

                // CMFRIO_LIB$DTNERFRMA("FALLA AL ASIGNAR EL CODIGO A LA TABLA DE CMTRELAPO.");
            }

        }
        console.log("Exiting CMFRIO_cmtrelapo_preInsert");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtrelinv_postTextItem() {
        console.log("Entering CMFRIO_cmtrelinv_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtrelinv_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtrelinv_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtrelinv_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtrelinv_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN
    // SELECT ENTFIN_ENTDES
    //   INTO :CMTRELINV.W_ENTIDAD
    //   FROM COTENTFIN T
    //  WHERE ENTFIN_ENTCOD = :RELI_ENTIDAD
    //    AND ROWNUM = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('NO EXISTE LA ENTIDAD.');
    //  WHEN OTHERS THEN
    //  LIB$DTNERFRMA('ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.');  
    // END;
    //#endregion
    async CMFRIO_cmtrelinv_postQuery() {
        console.log("Entering CMFRIO_cmtrelinv_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("RELI_ENTIDAD", RELI_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfrio_cmtrelinv/cmfrio_cmtrelinv_postquery_query1", payload1);
            // get values from result
            this.CMTRELINV.W_ENTIDAD = result1[0].get("CMTRELINV.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFRIO_cmtrelinv_postQuery");
    }

    //#region PLSQL
    // BEGIN 
    //  IF :CMTRELINV.RELI_CONSEC IS NULL THEN
    //     BEGIN
    //       SELECT NVL(MAX(NVL(RELI_CONSEC,0)),0)+1
    //         INTO :CMTRELINV.RELI_CONSEC
    //         FROM CMTRELINV
    //     WHERE RELI_CODRIO  = :CMTRELINV.RELI_CODRIO
    //          AND RELI_NIT    = :CMTRELINV.RELI_NIT
    //          AND RELI_TIPRELA = :CMTRELINV.RELI_TIPRELA; 
    //      EXCEPTION
    //      WHEN OTHERS THEN
    //        LIB$DTNERFRMA('FALLA AL ASIGNAR EL CODIGO A LA TABLA DE CMTRELINV.');
    //      END;
    //    END IF;
    // END;
    //#endregion
    async CMFRIO_cmtrelinv_preInsert() {
        console.log("Entering CMFRIO_cmtrelinv_preInsert");
        if ((this.CMTRELINV.RELI_CONSEC == null)) {
            let result1 = [];
            try {

                // construct payload
                let payload1 = new Map();
                payload1.set("RELI_CODRIO", this.CMTRELINV.RELI_CODRIO);
                payload1.set("RELI_NIT", this.CMTRELINV.RELI_NIT);
                payload1.set("RELI_TIPRELA", this.CMTRELINV.RELI_TIPRELA);
                // call REST API
                const result1 = await Rest.post("/cmfrio_cmtrelinv/cmfrio_cmtrelinv_preinsert_query1", payload1);
                // get values from result
                this.CMTRELINV.RELI_CONSEC = result1[0].get("CMTRELINV.RELI_CONSEC");
            } catch (ex) {

                // CMFRIO_LIB$DTNERFRMA("FALLA AL ASIGNAR EL CODIGO A LA TABLA DE CMTRELINV.");
            }

        }
        console.log("Exiting CMFRIO_cmtrelinv_preInsert");
    }

    //#region PLSQL
    // BEGIN
    // SELECT ENTFIN_ENTDES
    //   INTO :CMTRELINV.W_ENTIDAD
    //   FROM COTENTFIN T
    //  WHERE ENTFIN_ENTCOD = :RELI_ENTIDAD
    //    AND ROWNUM = 1;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('NO EXISTE LA ENTIDAD.');
    //  WHEN OTHERS THEN
    //  LIB$DTNERFRMA('ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.');  
    // END;
    //#endregion
    async CMFRIO_cmtrelinv_reliEntidad_whenValidateItem() {
        console.log("Entering CMFRIO_cmtrelinv_reliEntidad_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("RELI_ENTIDAD", RELI_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfrio_cmtrelinv/cmfrio_cmtrelinv_relientidad_whenvalidateitem_query1", payload1);
            // get values from result
            this.CMTRELINV.W_ENTIDAD = result1[0].get("CMTRELINV.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFRIO_cmtrelinv_reliEntidad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtvinrio_postTextItem() {
        console.log("Entering CMFRIO_cmtvinrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtvinrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtvinrio_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtvinrio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtvinrio_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN IF :VIN_TIPRELA = '003' AND :VIN_CEDULA IS NULL THEN
    //   LIB$DTNERFRMA('LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.');
    // END IF; END;
    //#endregion
    async CMFRIO_cmtvinrio_preUpdate() {
        console.log("Entering CMFRIO_cmtvinrio_preUpdate");
        // if ((VIN_TIPRELA == "003" && (VIN_CEDULA == null))) {
        //     // CMFRIO_LIB$DTNERFRMA("LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.");
        // }
        console.log("Exiting CMFRIO_cmtvinrio_preUpdate");
    }

    //#region PLSQL
    // BEGIN
    // SELECT DOMI_VLRCODIGO DESCR
    //   INTO :V_VINCULOS
    //   FROM CMTDOMINIOS
    //   WHERE DOMI_DOMINIO = 'VINCULADOS' 
    //     AND DOMI_CODIGO  = :CMTVINRIO.VIN_TIPRELA;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  NULL;
    // END;
    //#endregion
    async CMFRIO_cmtvinrio_postQuery() {
        console.log("Entering CMFRIO_cmtvinrio_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("VIN_TIPRELA", this.CMTVINRIO.VIN_TIPRELA);
        // call REST API
        const result1 = await Rest.post("/cmfrio_cmtvinrio/cmfrio_cmtvinrio_postquery_query1", payload1);
        // get values from result
        // V_VINCULOS = result1[0].get("V_VINCULOS");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CMFRIO_cmtvinrio_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :VIN_TIPRELA = '003' AND :VIN_CEDULA IS NULL THEN
    //   LIB$DTNERFRMA('LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.');
    // END IF; END;
    //#endregion
    async CMFRIO_cmtvinrio_preInsert() {
        console.log("Entering CMFRIO_cmtvinrio_preInsert");
        // if ((VIN_TIPRELA == "003" && (VIN_CEDULA == null))) {
        //     // CMFRIO_LIB$DTNERFRMA("LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.");
        // }
        console.log("Exiting CMFRIO_cmtvinrio_preInsert");
    }

    //#region PLSQL
    // BEGIN IF :VIN_TIPRELA = '003' AND :VIN_CEDULA IS NULL THEN
    //   LIB$DTNERFRMA('LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.');
    // END IF; END;
    //#endregion
    async CMFRIO_cmtvinrio_vinCedula_whenValidateItem() {
        console.log("Entering CMFRIO_cmtvinrio_vinCedula_whenValidateItem");
        // if ((VIN_TIPRELA == "003" && (VIN_CEDULA == null))) {
        //     // CMFRIO_LIB$DTNERFRMA("LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.");
        // }
        console.log("Exiting CMFRIO_cmtvinrio_vinCedula_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT DOMI_VLRCODIGO
    //    INTO :CMTVINRIO.V_VINCULOS
    //    FROM CMTDOMINIOS
    //   WHERE DOMI_CODIGO  = :CMTVINRIO.VIN_TIPRELA 
    //     AND DOMI_DOMINIO = 'VINCULADOS';
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  LIB$DTNERFRMA('EL CODIGO NO EXISTE, SELECCIONELO EN LA LISTA DE VALORES');
    //  WHEN OTHERS THEN
    //  LIB$DTNERFRMA('ERROR AL VALIDAR LOS DATOS.'||'-'||SQLERRM);
    // END;
    //#endregion
    async CMFRIO_cmtvinrio_vinTiprela_whenValidateItem() {
        console.log("Entering CMFRIO_cmtvinrio_vinTiprela_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("VIN_TIPRELA", this.CMTVINRIO.VIN_TIPRELA);
            // call REST API
            const result1 = await Rest.post("/cmfrio_cmtvinrio/cmfrio_cmtvinrio_vintiprela_whenvalidateitem_query1", payload1);
            // get values from result
            this.CMTVINRIO.V_VINCULOS = result1[0].get("CMTVINRIO.V_VINCULOS");
            if (result1 == null || result1.length == 0) {

                // CMFRIO_LIB$DTNERFRMA("EL CODIGO NO EXISTE, SELECCIONELO EN LA LISTA DE VALORES");
            }

        } catch (ex) {

            // CMFRIO_LIB$DTNERFRMA("ERROR AL VALIDAR LOS DATOS." + "-" + SQLERRM);
        }

        console.log("Exiting CMFRIO_cmtvinrio_vinTiprela_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFRIO_cmtcntrio_postTextItem() {
        console.log("Entering CMFRIO_cmtcntrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFRIO_cmtcntrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFRIO_cmtcntrio_whenNewItemInstance() {
        console.log("Entering CMFRIO_cmtcntrio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFRIO_cmtcntrio_whenNewItemInstance");
    }

    //#region PLSQL
    // DECLARE
    //  V_NEXCOD1 NUMBER;
    //  VBOTON1  NUMBER;
    // BEGIN 
    //  IF :CNT_CODCON IS NULL THEN
    //     BEGIN
    //       SELECT NVL(MAX(NVL(CNT_CODCON,0)),0)+1
    //         INTO V_NEXCOD1
    //         FROM CMTCNTRIO
    //      WHERE CNT_NIT    = :CMTCNTRIO.CNT_NIT
    //        AND CNT_CODRIO = :CMTCNTRIO.CNT_CODRIO ;
    //        --ASIGNA EL CÓDIGO
    //       :CMTCNTRIO.CNT_CODCON := V_NEXCOD1;
    //      EXCEPTION
    //      WHEN OTHERS THEN
    //       MESSAGE('FALLA AL ASIGNAR EL CONSECUTIVO');
    //      END;
    //    END IF;
    // END;
    //#endregion
    async CMFRIO_cmtcntrio_preInsert() {
        console.log("Entering CMFRIO_cmtcntrio_preInsert");
        let V_NEXCOD1: number = null;
        let VBOTON1: number = null;
        // if ((CNT_CODCON == null)) {
        //     let result1 = [];
        //     try {

        //         // construct payload
        //         let payload1 = new Map();
        //         payload1.set("CNT_NIT", CMTCNTRIO.CNT_NIT);
        //         payload1.set("CNT_CODRIO", CMTCNTRIO.CNT_CODRIO);
        //         // call REST API
        //         const result1 = await Rest.post("/cmfrio_cmtcntrio/cmfrio_cmtcntrio_preinsert_query1", payload1);
        //         // get values from result
        //         V_NEXCOD1 = result1[0].get("V_NEXCOD1");
        //         this.CMTCNTRIO.CNT_CODCON = V_NEXCOD1;
        //     } catch (ex) {

        //         this.oracleFormsBuiltins.message("FALLA AL ASIGNAR EL CONSECUTIVO");
        //     }

        // }
        console.log("Exiting CMFRIO_cmtcntrio_preInsert");
    }

    //#region PLSQL
    // DECLARE
    //  VNOMAR VARCHAR2(2000);
    //  VMENS  NUMBER(3);
    //   IN_FILE TEXT_IO.FILE_TYPE;
    // BEGIN
    //   VMENS := :SYSTEM.MESSAGE_LEVEL;
    //   :SYSTEM.MESSAGE_LEVEL := 25;
    //   VNOMAR := GET_FILE_NAME(DIRECTORY_NAME=>NULL
    //                         ,FILE_NAME=>NULL
    //                         ,FILE_FILTER=>:this.PARAMETER.get("PTIPAR")
    //                         ,MESSAGE=>'ABRIR ARCHIVO'
    //                         ,DIALOG_TYPE=>OPEN_FILE
    //                         );                      
    //   :SYSTEM.MESSAGE_LEVEL := VMENS;
    //   
    //   IF VNOMAR IS NOT NULL THEN
    //    BEGIN
    //       VMENS := :SYSTEM.MESSAGE_LEVEL;
    //       :SYSTEM.MESSAGE_LEVEL := 25;
    //       :SYSTEM.MESSAGE_LEVEL := VMENS;
    //    END;
    //   END IF;
    //   EXCEPTION
    //     WHEN NO_DATA_FOUND THEN
    //       NULL;
    //     WHEN OTHERS THEN
    //       NULL;
    // END;
    //#endregion
    async CMFRIO_control_carima_whenButtonPressed() {
        console.log("Entering CMFRIO_control_carima_whenButtonPressed");
        let VNOMAR: string = null;
        let VMENS: number = null;
        let IN_FILE: null = null;
        try {

            // VMENS = this.SYSTEM.MESSAGE_LEVEL;
            // this._SYSTEM_SERVICE.set("get("MESSAGE_LEVEL")", 25);
            // VNOMAR = this.oracleFormsBuiltins.get_file_name(null, null, this.PARAMETER.get("PTIPAR"), "ABRIR ARCHIVO", OPEN_FILE);
            // this._SYSTEM_SERVICE.set("get("MESSAGE_LEVEL")", VMENS);
            // if ((VNOMAR != null)) {
            //     VMENS = this.SYSTEM.MESSAGE_LEVEL;
            //     this._SYSTEM_SERVICE.set("get("MESSAGE_LEVEL")", 25);
            //     this._SYSTEM_SERVICE.set("get("MESSAGE_LEVEL")", VMENS);
            // }
            // if (result0 == null || result0.length == 0) {

            // }

        } catch (ex) {

        }

        console.log("Exiting CMFRIO_control_carima_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFRIO_base_whenCreateRecord() {
        console.log("Entering CMFRIO_base_whenCreateRecord");
        console.log("Exiting CMFRIO_base_whenCreateRecord");
    }

}

