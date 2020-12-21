import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { PLSQLBuiltins } from '../_utils/PLSQLBuiltins';
import { Rest } from '../_utils/Rest';
import { OracleFormsBuiltins } from '../_utils/OracleFormsBuiltins';
import { BlockComponent } from '../block/block.component';
import { ItemInputComponent } from '../item-input/item-input.component';
import { SystemService } from '../system.service';
import { GlobalService } from '../global.service';

// Namespace CMFCONRIO business logic
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
} from "./CMFCONRIO_models";



// class CMFCONRIO
@Component({
    selector: 'app-cmfconrio',
    templateUrl: './cmfconrio.component.html',
})
export class CmfconrioComponent {
    oracleFormsBuiltins: OracleFormsBuiltins;

    @Input() public PARAMETER: Map<string, string> = new Map([

        ['PPLAZU', null],
        ['PTIPAR', null],
        ['PCONTROL', null],
        ['NIT', null],
        ['P_OFICINA', null],
        ['PCODCOMER', null],
        ['PTIPCOMER', null],
        ['PNOMBCOMER', null],
        ['PCARGO', null],
        ['POFCNA', null],
        ['PNODOANT', null],
        ['POPCION', null],
        ['POPCIONANT', null],
    ]);
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
    async CMFCONRIO_onClearDetails() {
        console.log("Entering CMFCONRIO_onClearDetails");
        // CMFCONRIO_CLEAR_ALL_MASTER_DETAILS();
        console.log("Exiting CMFCONRIO_onClearDetails");
    }

    //#region PLSQL
    // BEGIN
    //    IF SYSTEM.TAB_NEW_PAGE = 'TAB_RIO' THEN
    //      GO_ITEM('RIO_NIT');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_HISTORIA' THEN
    //       GO_ITEM('RIO_HISTORIA');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_RELACION' THEN
    //       GO_ITEM('REL_MATRICULA');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_RELACION_CO' THEN
    //       GO_ITEM('REL_NITTIPREL1');      
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
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_PROVEE' THEN
    //       GO_ITEM('PRO_PRONIT');
    //    ELSIF SYSTEM.TAB_NEW_PAGE = 'TAB_INFCENT' THEN
    //       GO_ITEM('CMTINFCRIO.INF_ENTIDAD');      
    //    END IF;
    // END;
    //#endregion
    async CMFCONRIO_whenTabPageChanged() {
        console.log("Entering CMFCONRIO_whenTabPageChanged");
        if (this._SYSTEM_SERVICE.get("TAB_RIO")) {
            this.oracleFormsBuiltins.go_item("RIO_NIT");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_HISTORIA")) {
            this.oracleFormsBuiltins.go_item("RIO_HISTORIA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_RELACION")) {
            this.oracleFormsBuiltins.go_item("REL_MATRICULA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_RELACION_CO")) {
            this.oracleFormsBuiltins.go_item("REL_NITTIPREL1");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_INFOR")) {
            this.oracleFormsBuiltins.go_item("RELA_EMPRESA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_ACTIVO")) {
            this.oracleFormsBuiltins.go_item("ACT_DESCRIP");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_PRODUCTOS")) {
            this.oracleFormsBuiltins.go_item("PRD_DESPRO");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_CONTRA")) {
            this.oracleFormsBuiltins.go_item("CNT_NOMBRE");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_VINCULA")) {
            this.oracleFormsBuiltins.go_item("VIN_TIPRELA");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_PROVEE")) {
            this.oracleFormsBuiltins.go_item("PRO_PRONIT");
        }
        else if (this._SYSTEM_SERVICE.get("TAB_INFCENT")) {
            this.oracleFormsBuiltins.go_item("CMTINFCRIO.INF_ENTIDAD");
        }
        console.log("Exiting CMFCONRIO_whenTabPageChanged");
    }

    //#region PLSQL
    // BEGIN MENSAJE_ERRORES; END;
    //#endregion
    async CMFCONRIO_onError() {
        console.log("Entering CMFCONRIO_onError");
        // CMFCONRIO_MENSAJE_ERRORES();
        console.log("Exiting CMFCONRIO_onError");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_whenMouseDoubleclick() {
        console.log("Entering CMFCONRIO_whenMouseDoubleclick");
        console.log("Exiting CMFCONRIO_whenMouseDoubleclick");
    }

    //#region PLSQL
    // BEGIN MENSAJE_INFORMATIVOS; END;
    //#endregion
    async CMFCONRIO_onMessage() {
        console.log("Entering CMFCONRIO_onMessage");
        // CMFCONRIO_MENSAJE_INFORMATIVOS();
        console.log("Exiting CMFCONRIO_onMessage");
    }

    //#region PLSQL
    // BEGIN --CLEAR_BLOCK(NO_VALIDATE);
    // NULL; END;
    //#endregion
    async CMFCONRIO_keyClrblk() {
        console.log("Entering CMFCONRIO_keyClrblk");
        console.log("Exiting CMFCONRIO_keyClrblk");
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
    async CMFCONRIO_preForm() {
        console.log("Entering CMFCONRIO_preForm");
        // CMFCONRIO_PANTALLA();
        // CMFCONRIO_PINICIAR();
        console.log("Exiting CMFCONRIO_preForm");
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
    //   
    //   
    //     ---------------------------------------------------------------------
    //   -- LOGO
    //   ---------------------------------------------------------------------
    //   :BASE.BASE_DAT := UPPER(:BASE.BD);
    //   DECLARE
    //     V_IMAGEN VARCHAR2(20);
    //   BEGIN
    //   
    //     IF :this.PARAMETER.get("P_OFICINA") IS NOT NULL THEN
    //       BEGIN
    //         SELECT COMPAN_NOLOGF
    //           INTO V_IMAGEN
    //           FROM SGCOMPAN
    //          WHERE COMPAN_CODCOM = :this.PARAMETER.get("P_OFICINA");
    //       EXCEPTION
    //         WHEN NO_DATA_FOUND THEN
    //           V_IMAGEN := 'LOGO_LEASFORM.GIF';
    //       END;
    //     
    //       READ_IMAGE_FILE(V_IMAGEN, 'GIF', 'BASE.IMLGO');
    //     ELSE
    //       READ_IMAGE_FILE('LOGO_LEASFORM.GIF', 'GIF', 'BASE.IMLGO');
    //     END IF;
    //   END;
    //   --------------------------------------------------------------------
    //   
    //   
    //   
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
    // /*
    //   IF :this.PARAMETER.get("PCONTROL") IN ('Q','C') THEN
    //      EXECUTE_QUERY;
    //   ELSE
    //     :this.CMTRIO.RIO_NIT      := :this.PARAMETER.get("NIT");
    //      :CMTRIO.RIO_CODCOMER := :this.PARAMETER.get("PCODCOMER");
    //   END IF;
    // */
    // END;
    //#endregion
    async CMFCONRIO_whenNewFormInstance() {
        console.log("Entering CMFCONRIO_whenNewFormInstance");
        let IT_ID: number = null;
        let IT_ID1: number = null;
        let IT_ID2: number = null;
        let IT_ID3: number = null;
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
        this.BASE.BASE_DAT = PLSQLBuiltins.upper(this.BASE.BD);
        {

            let V_IMAGEN: string = null;
            if ((this.PARAMETER.get("P_OFICINA") != null)) {
                // construct payload
                let payload1 = new Map();
                payload1.set("P_OFICINA", this.PARAMETER.get("P_OFICINA"));
                // call REST API
                const result1 = await Rest.post("/cmfconrio/cmfconrio_whennewforminstance_query1", payload1);
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

        console.log("Exiting CMFCONRIO_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtprdrio_postTextItem() {
        console.log("Entering CMFCONRIO_cmtprdrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtprdrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtrio_postTextItem() {
        console.log("Entering CMFCONRIO_cmtrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtrio_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_CAMPOACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtrio_whenNewItemInstance() {
        console.log("Entering CMFCONRIO_cmtrio_whenNewItemInstance");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_CAMPOACTUAL");
        console.log("Exiting CMFCONRIO_cmtrio_whenNewItemInstance");
    }

    //#region PLSQL
    // BEGIN --MANEJO DE PARAMETROS LLAMADO DESDE OTRA FORMA
    // IF  :this.PARAMETER.get("PCONTROL") IN ('Q','C') THEN
    // :RIO_NIT := NVL(:this.PARAMETER.get("NIT"),:RIO_NIT) ;
    // END IF; END;
    //#endregion
    async CMFCONRIO_cmtrio_preQuery() {
        console.log("Entering CMFCONRIO_cmtrio_preQuery");
        if (["Q", "C"].indexOf(this.PARAMETER.get("PCONTROL")) != -1) {
            // this.this.CMTRIO.RIO_NIT = this.PARAMETER.get("NIT") == null ? RIO_NIT : this.PARAMETER.get("NIT");
        }
        console.log("Exiting CMFCONRIO_cmtrio_preQuery");
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
    //     WHERE C.VIN_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.VIN_NIT = :this.CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTVINRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTCNTRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTCNTRIO_CUR IS      
    //     SELECT 1 FROM CMTCNTRIO C     
    //     WHERE C.CNT_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.CNT_NIT = :this.CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTCNTRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTPRDRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTPRDRIO_CUR IS      
    //     SELECT 1 FROM CMTPRDRIO C     
    //     WHERE C.PRD_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.PRD_NIT = :this.CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTPRDRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTINFCRIO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTINFCRIO_CUR IS      
    //     SELECT 1 FROM CMTINFCRIO C     
    //     WHERE C.INF_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.INF_NIT = :this.CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTINFCRIO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTACTIVO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTACTIVO_CUR IS      
    //     SELECT 1 FROM CMTACTIVO C     
    //     WHERE C.ACT_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.ACT_NIT = :this.CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTACTIVO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELAPO DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTRELAPO_CUR IS      
    //     SELECT 1 FROM CMTRELAPO C     
    //     WHERE C.RELA_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.RELA_NIT = :this.CMTRIO.RIO_NIT;
    //   --
    //   -- END CMTRELAPO DETAIL DECLARE SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELINV DETAIL DECLARE SECTION
    //   --
    //   CURSOR CMTRELINV_CUR IS      
    //     SELECT 1 FROM CMTRELINV C     
    //     WHERE C.RELI_CODRIO = :this.CMTRIO.RIO_CODIGO AND C.RELI_NIT = :this.CMTRIO.RIO_NIT;
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
    async CMFCONRIO_cmtrio_onCheckDeleteMaster() {
        console.log("Entering CMFCONRIO_cmtrio_onCheckDeleteMaster");
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
        console.log("Exiting CMFCONRIO_cmtrio_onCheckDeleteMaster");
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
    //   -- BEGIN CMTVINRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTVINRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTVINRIO');   
    //   END IF;
    //   --
    //   -- END CMTVINRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTCNTRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTCNTRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTCNTRIO');   
    //   END IF;
    //   --
    //   -- END CMTCNTRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTPRDRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTPRDRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTPRDRIO');   
    //   END IF;
    //   --
    //   -- END CMTPRDRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTINFCRIO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTINFCRIO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTINFCRIO');   
    //   END IF;
    //   --
    //   -- END CMTINFCRIO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTACTIVO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTACTIVO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTACTIVO');   
    //   END IF;
    //   --
    //   -- END CMTACTIVO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELAPO DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
    //     REL_ID := FIND_RELATION('CMTRIO.CMTRIO_CMTRELAPO');   
    //     QUERY_MASTER_DETAILS(REL_ID, 'CMTRELAPO');   
    //   END IF;
    //   --
    //   -- END CMTRELAPO DETAIL PROGRAM SECTION
    //   --
    //   --
    //   -- BEGIN CMTRELINV DETAIL PROGRAM SECTION
    //   --
    //   IF ( (:this.CMTRIO.RIO_CODIGO IS NOT NULL) OR (:this.CMTRIO.RIO_NIT IS NOT NULL) ) THEN   
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
    async CMFCONRIO_cmtrio_onPopulateDetails() {
        console.log("Entering CMFCONRIO_cmtrio_onPopulateDetails");
        let RECSTAT: string = this._SYSTEM_SERVICE.get("RECORD_STATUS");
        let STARTITM: string = this._SYSTEM_SERVICE.get("CURSOR_ITEM");
        let REL_ID: any = null;
        if ((RECSTAT == "NEW" || RECSTAT == "INSERT")) {
            // return ret;
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTVINRIO");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTVINRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTCNTRIO");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTCNTRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTPRDRIO");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTPRDRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTINFCRIO");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTINFCRIO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTACTIVO");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTACTIVO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTRELAPO");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTRELAPO");
        }
        if (((this.CMTRIO.RIO_CODIGO != null) || (this.CMTRIO.RIO_NIT != null))) {
            REL_ID = this.oracleFormsBuiltins.find_relation("CMTRIO.CMTRIO_CMTRELINV");
            // CMFCONRIO_QUERY_MASTER_DETAILS(REL_ID, "CMTRELINV");
        }
        if (this._SYSTEM_SERVICE.get("CURSOR_ITEM") != STARTITM) {
            this.oracleFormsBuiltins.go_item(STARTITM);
            // CMFCONRIO_CHECK_PACKAGE_FAILURE();
        }
        console.log("Exiting CMFCONRIO_cmtrio_onPopulateDetails");
    }

    //#region PLSQL
    // BEGIN
    //   SELECT TBENAPE||' '||TBENNOM
    //     INTO :CMTRIO.NOMBRE
    //     FROM TBEN
    //    WHERE (TBENCOD=:this.CMTRIO.RIO_NIT);
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
    async CMFCONRIO_cmtrio_postQuery() {
        console.log("Entering CMFCONRIO_cmtrio_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("RIO_NIT", this.CMTRIO.RIO_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfconrio_cmtrio/cmfconrio_cmtrio_postquery_query1", payload1);
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
            const result2 = await Rest.post("/cmfconrio_cmtrio/cmfconrio_cmtrio_postquery_query2", payload2);
            // get values from result
            // W_DEPARTA = result2[0].get("W_DEPARTA");
            if (result2 == null || result2.length == 0) {

                this.CMTRIO.W_DEPARTA = null;
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR LA DESCRIPCIÓN DEL DEPARTAMENTO");
        }

        try {

            // construct payload
            let payload3 = new Map();
            // payload3.set("RIO_CIUDAD", RIO_CIUDAD);
            // payload3.set("RIO_DEPARTA", RIO_DEPARTA);
            // call REST API
            const result3 = await Rest.post("/cmfconrio_cmtrio/cmfconrio_cmtrio_postquery_query3", payload3);
            // get values from result
            // V_CIUDADRIO = result3[0].get("V_CIUDADRIO");
            if (result3 == null || result3.length == 0) {

                this.CMTRIO.V_CIUDADRIO = null;
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR LA DESCRIPCIÓN DEL MUNICIPIO");
        }

        // construct payload
        let payload4 = new Map();
        // payload4.set("RIO_TIPACT", RIO_TIPACT);
        // call REST API
        const result4 = await Rest.post("/cmfconrio_cmtrio/cmfconrio_cmtrio_postquery_query4", payload4);
        // get values from result
        // RIO_TIPACTDESA = result4[0].get("RIO_TIPACTDESA");
        if (result4 == null || result4.length == 0) {

            this.CMTRIO.RIO_TIPACTDESA = null;
        }

        console.log("Exiting CMFCONRIO_cmtrio_postQuery");
    }

    //#region PLSQL
    // DECLARE
    //  VBOTON    NUMBER;
    //  LPCORIOID PARAMLIST;
    // BEGIN
    // -- PU_VALIDA_RELACTIVOS (:CMTRELINM.REL_NIT, :CMTRELINM.REL_CODRIO );
    //  PU_VALIDA_RELACTIVOS (:this.CMTRIO.RIO_NIT, :this.CMTRIO.RIO_CODIGO); 
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
    //     ADD_PARAMETER(LPCORIOID, 'P_NIT', "TEXT_PARAMETER", :this.CMTRIO.RIO_NIT);
    //     ADD_PARAMETER(LPCORIOID, 'P_CODRIO', "TEXT_PARAMETER", :RIO_CODIGO);
    //     ADD_PARAMETER(LPCORIOID, 'P_CODUNI', "TEXT_PARAMETER", :RIO_CODUNI); -- ARQUITECTURA
    //    RUN_PRODUCT(REPORTS, 'CORRIO1', ASYNCHRONOUS, RUNTIME, FILESYSTEM, LPCORIOID, NULL); 
    // END;
    //#endregion
    async CMFCONRIO_cmtrio_vImprimir_whenButtonPressed() {
        console.log("Entering CMFCONRIO_cmtrio_vImprimir_whenButtonPressed");
        let VBOTON: number = null;
        let LPCORIOID: any = null;
        // CMFCONRIO_PU_VALIDA_RELACTIVOS(this.CMTRIO.RIO_NIT, this.CMTRIO.RIO_CODIGO);
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
        console.log("Exiting CMFCONRIO_cmtrio_vImprimir_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN GO_ITEM('RIO_NIT'); END;
    //#endregion
    async CMFCONRIO_cmtrio_volver_whenButtonPressed() {
        console.log("Entering CMFCONRIO_cmtrio_volver_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("RIO_NIT");
        console.log("Exiting CMFCONRIO_cmtrio_volver_whenButtonPressed");
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
    async CMFCONRIO_cmtrio_vRecomen_whenButtonPressed() {
        console.log("Entering CMFCONRIO_cmtrio_vRecomen_whenButtonPressed");
        let TB_PG_ID: null = null;
        let VBOTON: number = null;
        // if ((RIO_NIT != null)) {
        //     TB_PG_ID = this.oracleFormsBuiltins.find_tab_page("TAB_RECOMEN");
        //     if (this.oracleFormsBuiltins.get_tab_page_property(TB_PG_ID, "VISIBLE") == "FALSE") {
        //         this.oracleFormsBuiltins.set_tab_page_property(TB_PG_ID, "VISIBLE", "PROPERTY_TRUE");
        //         this.oracleFormsBuiltins.go_item("CMTRIO.RIO_RECOMENDA");
        //     }
        //     else {
        //         this.oracleFormsBuiltins.go_item("CMTRIO.RIO_RECOMENDA");
        //     }
        // }
        // else {
        //     CMFCONRIO_LIB$DTNERFRMA("EL NIT NO DEBE SER NULO PARA CREAR LA RECOMENDACION DEL COMERCIAL SE DEBE CREAR PRIMERO EL R.I.O.");
        // }
        console.log("Exiting CMFCONRIO_cmtrio_vRecomen_whenButtonPressed");
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
    async CMFCONRIO_cmtrio_rioPuntovta_whenListChanged() {
        console.log("Entering CMFCONRIO_cmtrio_rioPuntovta_whenListChanged");
        // if (RIO_PUNTOVTA == "S") {
        //     this.oracleFormsBuiltins.set_item_property("RIO_NUMPTOS", NAVIGABLE, "PROPERTY_TRUE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("RIO_NUMPTOS", NAVIGABLE, "PROPERTY_FALSE");
        //     this.oracleFormsBuiltins.set_item_property("RIO_NUMPTOS", NAVIGABLE, "PROPERTY_FALSE");
        //     this.CMTRIO.RIO_NUMPTOS = null;
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CMFCONRIO_cmtrio_rioPuntovta_whenListChanged");
    }

    //#region PLSQL
    // DECLARE
    //  V_TERPER TER.TERPER%TYPE;
    // BEGIN 
    // BEGIN
    //  SELECT DECODE(TERPER,'N',TERAPE||' '||TERNOM,TERAPE), TERPER
    //    INTO :CMTRIO.NOMBRE , V_TERPER
    //  FROM TER
    //  WHERE TERCOD = :this.CMTRIO.RIO_NIT;
    // EXCEPTION WHEN NO_DATA_FOUND THEN
    //  :CMTRIO.NOMBRE := NULL;
    // END;
    // IF V_TERPER = 'N' THEN
    //  SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_FALSE");  
    // ELSE
    //  SET_ITEM_PROPERTY('RIO_FECCONST',"DISPLAYED", "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('RIO_FECCONST',ENABLED, "PROPERTY_TRUE");
    //  SET_ITEM_PROPERTY('RIO_FECCONST',NAVIGABLE, "PROPERTY_TRUE");
    // END IF;
    // END;
    //#endregion
    async CMFCONRIO_cmtrio_rioNit_whenValidateItem() {
        console.log("Entering CMFCONRIO_cmtrio_rioNit_whenValidateItem");
        let V_TERPER: null = null;
        // construct payload
        let payload1 = new Map();
        payload1.set("RIO_NIT", this.CMTRIO.RIO_NIT);
        // call REST API
        const result1 = await Rest.post("/cmfconrio_cmtrio/cmfconrio_cmtrio_rionit_whenvalidateitem_query1", payload1);
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
        console.log("Exiting CMFCONRIO_cmtrio_rioNit_whenValidateItem");
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
    async CMFCONRIO_cmtrio_rioVisita_whenListChanged() {
        console.log("Entering CMFCONRIO_cmtrio_rioVisita_whenListChanged");
        // if (RIO_VISITA == "N") {
        //     this.CMTRIO.RIO_OBSVISITA = null;
        //     this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "ENABLED", "PROPERTY_FALSE");
        // }
        // else {
        //     this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "DISPLAYED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "ENABLED", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.set_item_property("RIO_OBSVISITA", "NAVIGABLE", "PROPERTY_TRUE");
        //     this.oracleFormsBuiltins.next_item();
        // }
        console.log("Exiting CMFCONRIO_cmtrio_rioVisita_whenListChanged");
    }

    //#region PLSQL
    // BEGIN IF :CMTRIO.RIO_VISITA = 'S' AND :CMTRIO.RIO_OBSVISITA IS NULL THEN
    //  LIB$DTNERFRMA('DEBE DIGITAR UN LUGAR.');
    // ELSIF :CMTRIO.RIO_VISITA = 'N' THEN
    //  :RIO_OBSVISITA := NULL;
    // END IF; END;
    //#endregion
    async CMFCONRIO_cmtrio_rioObsvisita_whenValidateItem() {
        console.log("Entering CMFCONRIO_cmtrio_rioObsvisita_whenValidateItem");
        if ((this.CMTRIO.RIO_VISITA == "S" && (this.CMTRIO.RIO_OBSVISITA == null))) {
            // CMFCONRIO_LIB$DTNERFRMA("DEBE DIGITAR UN LUGAR.");
        }
        else if (this.CMTRIO.RIO_VISITA == "N") {
            this.CMTRIO.RIO_OBSVISITA = null;
        }
        console.log("Exiting CMFCONRIO_cmtrio_rioObsvisita_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN --COMMIT;
    // GO_ITEM('CMTRIO.RIO_RECOMENDA'); END;
    //#endregion
    async CMFCONRIO_cmtrio_recomendacion_whenButtonPressed() {
        console.log("Entering CMFCONRIO_cmtrio_recomendacion_whenButtonPressed");
        this.oracleFormsBuiltins.go_item("CMTRIO.RIO_RECOMENDA");
        console.log("Exiting CMFCONRIO_cmtrio_recomendacion_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtinfcrio_postTextItem() {
        console.log("Entering CMFCONRIO_cmtinfcrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtinfcrio_postTextItem");
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
    async CMFCONRIO_cmtinfcrio_postQuery() {
        console.log("Entering CMFCONRIO_cmtinfcrio_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("INF_ENTIDAD", INF_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfconrio_cmtinfcrio/cmfconrio_cmtinfcrio_postquery_query1", payload1);
            // get values from result
            this.CMTINFCRIO.W_ENTIDAD = result1[0].get("CMTINFCRIO.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFCONRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFCONRIO_cmtinfcrio_postQuery");
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
    async CMFCONRIO_cmtinfcrio_infEntidad_whenValidateItem() {
        console.log("Entering CMFCONRIO_cmtinfcrio_infEntidad_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("INF_ENTIDAD", INF_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfconrio_cmtinfcrio/cmfconrio_cmtinfcrio_infentidad_whenvalidateitem_query1", payload1);
            // get values from result
            this.CMTINFCRIO.W_ENTIDAD = result1[0].get("CMTINFCRIO.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFCONRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFCONRIO_cmtinfcrio_infEntidad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtactivo_postTextItem() {
        console.log("Entering CMFCONRIO_cmtactivo_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtactivo_postTextItem");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_toolbar_whenButtonPressed() {
        console.log("Entering CMFCONRIO_toolbar_whenButtonPressed");
        console.log("Exiting CMFCONRIO_toolbar_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_toolbar_whenMouseLeave() {
        console.log("Entering CMFCONRIO_toolbar_whenMouseLeave");
        console.log("Exiting CMFCONRIO_toolbar_whenMouseLeave");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_toolbar_whenNewFormInstance() {
        console.log("Entering CMFCONRIO_toolbar_whenNewFormInstance");
        console.log("Exiting CMFCONRIO_toolbar_whenNewFormInstance");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_toolbar_first_whenButtonPressed() {
        console.log("Entering CMFCONRIO_toolbar_first_whenButtonPressed");
        console.log("Exiting CMFCONRIO_toolbar_first_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_toolbar_lastr_whenButtonPressed() {
        console.log("Entering CMFCONRIO_toolbar_lastr_whenButtonPressed");
        console.log("Exiting CMFCONRIO_toolbar_lastr_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtrelapo_postTextItem() {
        console.log("Entering CMFCONRIO_cmtrelapo_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtrelapo_postTextItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtrelinv_postTextItem() {
        console.log("Entering CMFCONRIO_cmtrelinv_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtrelinv_postTextItem");
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
    async CMFCONRIO_cmtrelinv_postQuery() {
        console.log("Entering CMFCONRIO_cmtrelinv_postQuery");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("RELI_ENTIDAD", RELI_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfconrio_cmtrelinv/cmfconrio_cmtrelinv_postquery_query1", payload1);
            // get values from result
            this.CMTRELINV.W_ENTIDAD = result1[0].get("CMTRELINV.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFCONRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFCONRIO_cmtrelinv_postQuery");
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
    async CMFCONRIO_cmtrelinv_reliEntidad_whenValidateItem() {
        console.log("Entering CMFCONRIO_cmtrelinv_reliEntidad_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            // payload1.set("RELI_ENTIDAD", RELI_ENTIDAD);
            // call REST API
            const result1 = await Rest.post("/cmfconrio_cmtrelinv/cmfconrio_cmtrelinv_relientidad_whenvalidateitem_query1", payload1);
            // get values from result
            this.CMTRELINV.W_ENTIDAD = result1[0].get("CMTRELINV.W_ENTIDAD");
            if (result1 == null || result1.length == 0) {

                // CMFCONRIO_LIB$DTNERFRMA("NO EXISTE LA ENTIDAD.");
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL CONSULTAR EL NOMBRE DE LA ENTIDAD.");
        }

        console.log("Exiting CMFCONRIO_cmtrelinv_reliEntidad_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtvinrio_postTextItem() {
        console.log("Entering CMFCONRIO_cmtvinrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtvinrio_postTextItem");
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
    async CMFCONRIO_cmtvinrio_postQuery() {
        console.log("Entering CMFCONRIO_cmtvinrio_postQuery");
        // construct payload
        let payload1 = new Map();
        payload1.set("VIN_TIPRELA", this.CMTVINRIO.VIN_TIPRELA);
        // call REST API
        const result1 = await Rest.post("/cmfconrio_cmtvinrio/cmfconrio_cmtvinrio_postquery_query1", payload1);
        // get values from result
        // V_VINCULOS = result1[0].get("V_VINCULOS");
        if (result1 == null || result1.length == 0) {

        }

        console.log("Exiting CMFCONRIO_cmtvinrio_postQuery");
    }

    //#region PLSQL
    // BEGIN IF :VIN_TIPRELA = '003' AND :VIN_CEDULA IS NULL THEN
    //   LIB$DTNERFRMA('LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.');
    // END IF; END;
    //#endregion
    async CMFCONRIO_cmtvinrio_vinCedula_whenValidateItem() {
        console.log("Entering CMFCONRIO_cmtvinrio_vinCedula_whenValidateItem");
        // if ((VIN_TIPRELA == "003" && (VIN_CEDULA == null))) {
        //     CMFCONRIO_LIB$DTNERFRMA("LA CEDULA ES OBLIGATORIA PARA CUANDO ES ACCIONISTA.");
        // }
        console.log("Exiting CMFCONRIO_cmtvinrio_vinCedula_whenValidateItem");
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
    async CMFCONRIO_cmtvinrio_vinTiprela_whenValidateItem() {
        console.log("Entering CMFCONRIO_cmtvinrio_vinTiprela_whenValidateItem");
        try {

            // construct payload
            let payload1 = new Map();
            payload1.set("VIN_TIPRELA", this.CMTVINRIO.VIN_TIPRELA);
            // call REST API
            const result1 = await Rest.post("/cmfconrio_cmtvinrio/cmfconrio_cmtvinrio_vintiprela_whenvalidateitem_query1", payload1);
            // get values from result
            this.CMTVINRIO.V_VINCULOS = result1[0].get("CMTVINRIO.V_VINCULOS");
            if (result1 == null || result1.length == 0) {

                // CMFCONRIO_LIB$DTNERFRMA("EL CODIGO NO EXISTE, SELECCIONELO EN LA LISTA DE VALORES");
            }

        } catch (ex) {

            // CMFCONRIO_LIB$DTNERFRMA("ERROR AL VALIDAR LOS DATOS." + "-" + SQLERRM);
        }

        console.log("Exiting CMFCONRIO_cmtvinrio_vinTiprela_whenValidateItem");
    }

    //#region PLSQL
    // BEGIN SET_ITEM_INSTANCE_PROPERTY(:SYSTEM.CURSOR_ITEM, TO_NUMBER(:SYSTEM.CURSOR_RECORD), VISUAL_ATTRIBUTE, 'AV_REGACTUAL'); END;
    //#endregion
    async CMFCONRIO_cmtcntrio_postTextItem() {
        console.log("Entering CMFCONRIO_cmtcntrio_postTextItem");
        // this.oracleFormsBuiltins.set_item_instance_property(this._SYSTEM_SERVICE.get("CURSOR_ITEM"), PLSQLBuiltins.to_number(this._SYSTEM_SERVICE.get("CURSOR_RECORD")), VISUAL_ATTRIBUTE, "AV_REGACTUAL");
        console.log("Exiting CMFCONRIO_cmtcntrio_postTextItem");
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
    async CMFCONRIO_control_carima_whenButtonPressed() {
        console.log("Entering CMFCONRIO_control_carima_whenButtonPressed");
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

        console.log("Exiting CMFCONRIO_control_carima_whenButtonPressed");
    }

    //#region PLSQL
    // BEGIN ; END;
    //#endregion
    async CMFCONRIO_base_whenCreateRecord() {
        console.log("Entering CMFCONRIO_base_whenCreateRecord");
        console.log("Exiting CMFCONRIO_base_whenCreateRecord");
    }

}

